#!/usr/bin/env node
/**
 * Export the running ATME site into a WordPress-importable bundle that
 * preserves design and responsiveness.
 *
 * Output: /mnt/documents/atme-wp-templates.zip
 *   ├─ atme-wordpress-export.xml   (WXR: pages + attachments)
 *   ├─ uploads/                     (all images/PDFs referenced by pages)
 *   ├─ atme-child-theme.zip         (Astra child theme carrying site CSS)
 *   └─ IMPORT-INSTRUCTIONS.md
 *
 * Each imported Page's body is the rendered HTML of the route, wrapped in
 * a Gutenberg wp:html block so Elementor/Astra render it 1:1. The child
 * theme enqueues bundle.css so classes/tokens (teal buttons, yellow bullets,
 * responsive containers, sticky header offsets) still apply.
 */

import fs from "node:fs";
import path from "node:path";
import { load } from "cheerio";
import { ZipArchive } from "archiver";
const makeZip = (opts) => new ZipArchive(opts);
import { pipeline } from "node:stream/promises";

const ORIGIN = "http://localhost:8080";
const OUT_DIR = "/tmp/wp-export";
const UPLOADS_DIR = path.join(OUT_DIR, "uploads");
const THEME_DIR = path.join(OUT_DIR, "atme-child-theme");
const FINAL_ZIP = "/mnt/documents/atme-wp-templates.zip";

fs.rmSync(OUT_DIR, { recursive: true, force: true });
fs.mkdirSync(UPLOADS_DIR, { recursive: true });
fs.mkdirSync(path.join(THEME_DIR, "assets"), { recursive: true });

// ---------- 1. Discover routes ----------
async function getRoutes() {
  const xml = await (await fetch(`${ORIGIN}/sitemap.xml`)).text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  return [...new Set(urls.map((u) => new URL(u).pathname))];
}

// ---------- 2. Media handling ----------
const mediaMap = new Map(); // absoluteUrl -> { filename, id }
let mediaCounter = 1000;

function slugifyFilename(url) {
  const u = new URL(url);
  let name = path.basename(u.pathname) || `asset-${mediaCounter}`;
  name = name.replace(/[^a-zA-Z0-9._-]/g, "_");
  if (!/\.[a-z0-9]{2,5}$/i.test(name)) name += ".bin";
  if (fs.existsSync(path.join(UPLOADS_DIR, name))) {
    const ext = path.extname(name);
    const base = path.basename(name, ext);
    name = `${base}-${mediaCounter}${ext}`;
  }
  return name;
}

async function ensureMedia(absUrl) {
  if (mediaMap.has(absUrl)) return mediaMap.get(absUrl);
  try {
    const r = await fetch(absUrl);
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const buf = Buffer.from(await r.arrayBuffer());
    const filename = slugifyFilename(absUrl);
    fs.writeFileSync(path.join(UPLOADS_DIR, filename), buf);
    const entry = { filename, id: mediaCounter++, srcUrl: absUrl };
    mediaMap.set(absUrl, entry);
    return entry;
  } catch (e) {
    console.warn(`  media fail ${absUrl}: ${e.message}`);
    const entry = { filename: null, id: null, srcUrl: absUrl };
    mediaMap.set(absUrl, entry);
    return entry;
  }
}

const MEDIA_URL_BASE = "wp-content/uploads/atme/";

// ---------- 3. Render page ----------
async function renderPage(pathname) {
  const res = await fetch(`${ORIGIN}${pathname}`);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${pathname}`);
  const html = await res.text();
  const $ = load(html);

  // Prefer the on-page H1, then <title>, then og:title, then a slug-derived
  // fallback. og:title is last because many SPAs render a site-wide default
  // there, which would give every exported page the same title.
  const slugTitle = pathname === "/"
    ? "Home"
    : pathname
        .replace(/^\/+|\/+$/g, "")
        .split("/")
        .map((seg) => seg.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()))
        .join(" — ");
  const rawTitle =
    $("h1").first().text().trim() ||
    $("title").text().trim() ||
    $('meta[property="og:title"]').attr("content") ||
    slugTitle;
  const title = rawTitle
    .replace(/\s*[|—–-]\s*ATME.*$/i, "")
    .replace(/^ATME\s*[|—–-]\s*/i, "")
    .trim() || slugTitle;
  const description =
    $('meta[name="description"]').attr("content") ||
    $('meta[property="og:description"]').attr("content") ||
    "";

  // Strip scripts and preload/link tags — we replace styling via child theme.
  $("script, noscript, link[rel='preload'], link[rel='modulepreload'], link[rel='icon'], link[rel='manifest']").remove();

  // Collect asset URLs (img src, srcset, a href to pdfs, source src, video)
  const assetUrls = new Set();
  const pushIfAsset = (u) => {
    if (!u) return;
    try {
      const abs = new URL(u, `${ORIGIN}${pathname}`).toString();
      if (/^https?:/.test(abs) && /\.(png|jpe?g|gif|webp|avif|svg|pdf|mp4|webm|woff2?|ttf|otf)(\?|$)/i.test(abs)) {
        assetUrls.add(abs);
      }
    } catch {}
  };
  $("img").each((_, el) => {
    pushIfAsset($(el).attr("src"));
    const ss = $(el).attr("srcset");
    if (ss) ss.split(",").forEach((s) => pushIfAsset(s.trim().split(/\s+/)[0]));
  });
  $("a").each((_, el) => pushIfAsset($(el).attr("href")));
  $("source, video, audio, embed, object").each((_, el) => {
    pushIfAsset($(el).attr("src") || $(el).attr("data"));
  });
  $("[style]").each((_, el) => {
    const s = $(el).attr("style") || "";
    for (const m of s.matchAll(/url\(([^)]+)\)/g)) {
      pushIfAsset(m[1].replace(/['"]/g, ""));
    }
  });

  // Download & rewrite refs
  const rewrites = new Map();
  for (const u of assetUrls) {
    const m = await ensureMedia(u);
    if (m.filename) rewrites.set(u, `/${MEDIA_URL_BASE}${m.filename}`);
  }
  const rewriteUrl = (u) => {
    if (!u) return u;
    try {
      const abs = new URL(u, `${ORIGIN}${pathname}`).toString();
      return rewrites.get(abs) || u;
    } catch { return u; }
  };
  $("img").each((_, el) => {
    const $el = $(el);
    $el.attr("src", rewriteUrl($el.attr("src")));
    const ss = $el.attr("srcset");
    if (ss) {
      $el.attr(
        "srcset",
        ss.split(",").map((s) => {
          const parts = s.trim().split(/\s+/);
          parts[0] = rewriteUrl(parts[0]);
          return parts.join(" ");
        }).join(", "),
      );
    }
    // Ensure responsive
    if (!$el.attr("loading")) $el.attr("loading", "lazy");
    $el.removeAttr("fetchpriority");
  });
  $("a").each((_, el) => {
    const h = $(el).attr("href");
    if (h) $(el).attr("href", rewriteUrl(h));
  });
  $("source, video, audio, embed, object").each((_, el) => {
    const $el = $(el);
    if ($el.attr("src")) $el.attr("src", rewriteUrl($el.attr("src")));
    if ($el.attr("data")) $el.attr("data", rewriteUrl($el.attr("data")));
  });

  // Discover internal page links for BFS.
  const discovered = new Set();
  $("a[href]").each((_, el) => {
    const h = $(el).attr("href");
    if (!h || h.startsWith("#") || h.startsWith("mailto:") || h.startsWith("tel:")) return;
    try {
      const abs = new URL(h, `${ORIGIN}${pathname}`);
      if (abs.origin !== ORIGIN) return;
      let p = abs.pathname.replace(/\/+$/, "") || "/";
      // Skip asset-ish paths and API endpoints
      if (/\.(png|jpe?g|gif|webp|avif|svg|pdf|mp4|webm|woff2?|ttf|otf|xml|txt|json|ico)$/i.test(p)) return;
      if (p.startsWith("/api/") || p.startsWith("/__l5e/") || p.startsWith("/admin")) return;
      discovered.add(p);
    } catch {}
  });

  // Extract header/footer separately so they can become Elementor Theme Builder
  // templates. Whatever remains becomes the page body.
  const headerHtml = $("header").first().length ? $.html($("header").first()) : "";
  const footerHtml = $("footer").first().length ? $.html($("footer").first()) : "";
  $("header").first().remove();
  $("footer").first().remove();

  const root = $("#root, #__root, body > div").first();
  const bodyHtml = (root.length ? root.html() : $("body").html()) || "";

  return {
    pathname,
    title: title.replace(/\s*[—-]\s*ATME.*$/i, "").trim() || pathname,
    description,
    html: bodyHtml.trim(),
    headerHtml,
    footerHtml,
    discovered: [...discovered],
  };
}



// ---------- 4. WXR builder ----------
function xmlEscape(s = "") {
  return String(s).replace(/[<>&'"]/g, (c) => ({
    "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;",
  }[c]));
}
function cdata(s) { return `<![CDATA[${String(s).replace(/\]\]>/g, "]]]]><![CDATA[>")}]]>`; }

const now = new Date();
const pubDate = now.toUTCString();
const isoDate = now.toISOString().replace("T", " ").slice(0, 19);
let postIdCounter = 100;
const ELEMENTOR_VERSION = "3.21.0";

function slugFromPath(p) {
  if (p === "/") return "home";
  return p.replace(/^\/+|\/+$/g, "").replace(/[^a-z0-9]+/gi, "-").toLowerCase() || "page";
}

function eid() { return Math.random().toString(36).slice(2, 10); }

// Wrap arbitrary HTML in a minimal Elementor structure: section > column > html widget.
// This makes each page a native Elementor page — editable in the Elementor UI while
// rendering the original design 1:1.
function elementorDataForHtml(html) {
  return JSON.stringify([
    {
      id: eid(),
      elType: "section",
      settings: {
        stretch_section: "section-stretched",
        layout: "full_width",
        gap: "no",
        content_width: { unit: "px", size: 1400 },
        padding: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: true },
      },
      elements: [
        {
          id: eid(),
          elType: "column",
          settings: { _column_size: 100, _inline_size: null },
          elements: [
            {
              id: eid(),
              elType: "widget",
              widgetType: "html",
              settings: { html },
            },
          ],
        },
      ],
    },
  ]);
}

function metaXml(key, value) {
  return `<wp:postmeta><wp:meta_key>${cdata(key)}</wp:meta_key><wp:meta_value>${cdata(value)}</wp:meta_value></wp:postmeta>`;
}

function pageItem(page) {
  const id = postIdCounter++;
  const slug = slugFromPath(page.pathname);
  // WordPress editor content = plain HTML fallback (used if Elementor is disabled).
  const wrapped = `<!-- wp:html -->\n<div class="atme-imported-page">\n${page.html}\n</div>\n<!-- /wp:html -->`;
  const elementorData = elementorDataForHtml(page.html);
  const metas = [
    metaXml("_wp_page_template", "elementor_canvas"),
    metaXml("_elementor_edit_mode", "builder"),
    metaXml("_elementor_template_type", "wp-page"),
    metaXml("_elementor_version", ELEMENTOR_VERSION),
    metaXml("_elementor_pro_version", ELEMENTOR_VERSION),
    metaXml("_elementor_data", elementorData),
    metaXml("_elementor_page_settings", '{"hide_title":"yes"}'),
    metaXml("_elementor_css", '{"time":0,"fonts":[],"icons":[],"dynamic_elements_ids":[],"status":"empty","0":"","css":""}'),
  ].join("\n  ");
  return `
<item>
  <title>${xmlEscape(page.title)}</title>
  <link>${xmlEscape(page.pathname)}</link>
  <pubDate>${pubDate}</pubDate>
  <dc:creator>${cdata("admin")}</dc:creator>
  <guid isPermaLink="false">atme-${slug}-${id}</guid>
  <description>${cdata(page.description)}</description>
  <content:encoded>${cdata(wrapped)}</content:encoded>
  <excerpt:encoded>${cdata(page.description)}</excerpt:encoded>
  <wp:post_id>${id}</wp:post_id>
  <wp:post_date>${cdata(isoDate)}</wp:post_date>
  <wp:post_date_gmt>${cdata(isoDate)}</wp:post_date_gmt>
  <wp:comment_status>${cdata("closed")}</wp:comment_status>
  <wp:ping_status>${cdata("closed")}</wp:ping_status>
  <wp:post_name>${cdata(slug)}</wp:post_name>
  <wp:status>${cdata("publish")}</wp:status>
  <wp:post_parent>0</wp:post_parent>
  <wp:menu_order>0</wp:menu_order>
  <wp:post_type>${cdata("page")}</wp:post_type>
  <wp:post_password>${cdata("")}</wp:post_password>
  <wp:is_sticky>0</wp:is_sticky>
  ${metas}
</item>`;
}

// Elementor Theme Builder-style reusable header/footer templates. Free Elementor
// stores these as `elementor_library` CPT; Pro adds Theme Builder conditions
// (`_elementor_conditions`) so they replace the theme's header/footer everywhere.
function libraryItem({ title, slug, type, html, conditions }) {
  const id = postIdCounter++;
  const elementorData = elementorDataForHtml(html);
  const metas = [
    metaXml("_elementor_edit_mode", "builder"),
    metaXml("_elementor_template_type", type),
    metaXml("_elementor_version", ELEMENTOR_VERSION),
    metaXml("_elementor_pro_version", ELEMENTOR_VERSION),
    metaXml("_elementor_data", elementorData),
    metaXml("_elementor_page_settings", "[]"),
    ...(conditions ? [metaXml("_elementor_conditions", JSON.stringify(conditions))] : []),
  ].join("\n  ");
  return `
<item>
  <title>${xmlEscape(title)}</title>
  <link>${xmlEscape("/" + slug)}</link>
  <pubDate>${pubDate}</pubDate>
  <dc:creator>${cdata("admin")}</dc:creator>
  <guid isPermaLink="false">atme-lib-${slug}-${id}</guid>
  <description></description>
  <content:encoded>${cdata(html)}</content:encoded>
  <excerpt:encoded>${cdata("")}</excerpt:encoded>
  <wp:post_id>${id}</wp:post_id>
  <wp:post_date>${cdata(isoDate)}</wp:post_date>
  <wp:post_date_gmt>${cdata(isoDate)}</wp:post_date_gmt>
  <wp:comment_status>${cdata("closed")}</wp:comment_status>
  <wp:ping_status>${cdata("closed")}</wp:ping_status>
  <wp:post_name>${cdata(slug)}</wp:post_name>
  <wp:status>${cdata("publish")}</wp:status>
  <wp:post_parent>0</wp:post_parent>
  <wp:menu_order>0</wp:menu_order>
  <wp:post_type>${cdata("elementor_library")}</wp:post_type>
  <wp:post_password>${cdata("")}</wp:post_password>
  <wp:is_sticky>0</wp:is_sticky>
  <category domain="elementor_library_type" nicename="${xmlEscape(type)}"><![CDATA[${type}]]></category>
  ${metas}
</item>`;
}


function attachmentItem(entry) {
  const id = entry.id;
  const url = `https://atme.example.com/${MEDIA_URL_BASE}${entry.filename}`;
  return `
<item>
  <title>${xmlEscape(entry.filename)}</title>
  <link>${xmlEscape(url)}</link>
  <pubDate>${pubDate}</pubDate>
  <dc:creator>${cdata("admin")}</dc:creator>
  <guid isPermaLink="false">${xmlEscape(url)}</guid>
  <description></description>
  <content:encoded>${cdata("")}</content:encoded>
  <excerpt:encoded>${cdata("")}</excerpt:encoded>
  <wp:post_id>${id}</wp:post_id>
  <wp:post_date>${cdata(isoDate)}</wp:post_date>
  <wp:post_date_gmt>${cdata(isoDate)}</wp:post_date_gmt>
  <wp:comment_status>${cdata("closed")}</wp:comment_status>
  <wp:ping_status>${cdata("closed")}</wp:ping_status>
  <wp:post_name>${cdata(entry.filename.replace(/\.[^.]+$/, "").toLowerCase())}</wp:post_name>
  <wp:status>${cdata("inherit")}</wp:status>
  <wp:post_parent>0</wp:post_parent>
  <wp:menu_order>0</wp:menu_order>
  <wp:post_type>${cdata("attachment")}</wp:post_type>
  <wp:post_password>${cdata("")}</wp:post_password>
  <wp:is_sticky>0</wp:is_sticky>
  <wp:attachment_url>${cdata(url)}</wp:attachment_url>
</item>`;
}

function buildWxr(pages, headerHtml, footerHtml) {
  const libs = [];
  if (headerHtml) {
    libs.push(libraryItem({
      title: "ATME Site Header",
      slug: "atme-header",
      type: "header",
      html: headerHtml,
      conditions: ["include/general"],
    }));
  }
  if (footerHtml) {
    libs.push(libraryItem({
      title: "ATME Site Footer",
      slug: "atme-footer",
      type: "footer",
      html: footerHtml,
      conditions: ["include/general"],
    }));
  }
  const items = [
    ...libs,
    ...pages.map(pageItem),
    ...[...mediaMap.values()].filter((m) => m.filename).map(attachmentItem),
  ].join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:excerpt="http://wordpress.org/export/1.2/excerpt/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:wfw="http://wellformedweb.org/CommentAPI/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:wp="http://wordpress.org/export/1.2/">
<channel>
  <title>ATME College of Engineering</title>
  <link>https://atme.edu.in</link>
  <description>ATME site export</description>
  <pubDate>${pubDate}</pubDate>
  <language>en-US</language>
  <wp:wxr_version>1.2</wp:wxr_version>
  <wp:base_site_url>https://atme.edu.in</wp:base_site_url>
  <wp:base_blog_url>https://atme.edu.in</wp:base_blog_url>
  <wp:author><wp:author_id>1</wp:author_id><wp:author_login>${cdata("admin")}</wp:author_login><wp:author_email>${cdata("admin@atme.edu.in")}</wp:author_email><wp:author_display_name>${cdata("ATME")}</wp:author_display_name><wp:author_first_name>${cdata("")}</wp:author_first_name><wp:author_last_name>${cdata("")}</wp:author_last_name></wp:author>
  ${items}
</channel>
</rss>`;
}

// ---------- 5. Child theme with CSS bundle ----------
async function buildChildTheme() {
  // Grab the site's compiled CSS from one rendered page.
  const html = await (await fetch(`${ORIGIN}/`)).text();
  const $ = load(html);
  let bundle = "";
  const cssLinks = $('link[rel="stylesheet"]').map((_, el) => $(el).attr("href")).get();
  for (const href of cssLinks) {
    try {
      const abs = new URL(href, ORIGIN).toString();
      const css = await (await fetch(abs)).text();
      bundle += `\n/* ---- ${href} ---- */\n${css}\n`;
    } catch (e) { console.warn("css fail", href, e.message); }
  }
  $("style").each((_, el) => { bundle += `\n/* inline */\n${$(el).html()}\n`; });

  // Rewrite any /__l5e/ or absolute CDN refs inside CSS to keep working (they're absolute URLs, fine).
  fs.writeFileSync(path.join(THEME_DIR, "assets", "bundle.css"), bundle);

  fs.writeFileSync(path.join(THEME_DIR, "style.css"), `/*
Theme Name: ATME Child
Template: astra
Version: 1.0.0
Description: ATME site styles for imported pages. Requires Astra parent theme.
*/
`);
  fs.writeFileSync(path.join(THEME_DIR, "functions.php"), `<?php
// ATME child theme: enqueue parent + site bundle.css so imported pages render with the original design.
add_action('wp_enqueue_scripts', function () {
  wp_enqueue_style('astra-parent', get_template_directory_uri() . '/style.css');
  wp_enqueue_style('atme-bundle', get_stylesheet_directory_uri() . '/assets/bundle.css', ['astra-parent'], '1.0.0');
}, 20);
`);
  fs.writeFileSync(path.join(THEME_DIR, "page-atme.php"), `<?php
/* Template Name: ATME Full Canvas */
get_header();
while (have_posts()) : the_post(); the_content(); endwhile;
get_footer();
`);
}

// ---------- 6. Zip helpers ----------
function zipDir(srcDir, outFile) {
  return new Promise((resolve, reject) => {
    const out = fs.createWriteStream(outFile);
    const arch = makeZip({ zlib: { level: 9 } });
    out.on("close", resolve);
    arch.on("error", reject);
    arch.pipe(out);
    arch.directory(srcDir, path.basename(srcDir));
    arch.finalize();
  });
}
function zipMany(entries, outFile) {
  return new Promise((resolve, reject) => {
    const out = fs.createWriteStream(outFile);
    const arch = makeZip({ zlib: { level: 9 } });
    out.on("close", resolve);
    arch.on("error", reject);
    arch.pipe(out);
    for (const e of entries) {
      if (e.dir) arch.directory(e.dir, e.name);
      else arch.file(e.file, { name: e.name });
    }
    arch.finalize();
  });
}

// ---------- 7. Main ----------
async function loadFacultySeeds() {
  const seeds = new Set();
  try {
    const src = fs.readFileSync("src/data/allFaculty.ts", "utf8");
    const ids = [...src.matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1]);
    const depts = [...src.matchAll(/dept(?:Slug)?:\s*"([^"]+)"/g)].map((m) => m[1]);
    // Try to pair sequentially: for each faculty entry look at the nearest preceding dept
    const rx = /\{[^{}]*?id:\s*"([^"]+)"[^{}]*?dept(?:Slug)?:\s*"([^"]+)"[^{}]*?\}/gs;
    for (const m of src.matchAll(rx)) {
      seeds.add(`/departments/${m[2]}/faculty/${m[1]}`);
    }
    // fallback: also try /departments/*/faculty as directory listing (already in sitemap)
    console.log(`  faculty seeds: ${seeds.size} (from ${ids.length} ids, ${depts.length} dept refs)`);
  } catch (e) {
    console.warn(`  faculty seed load failed: ${e.message}`);
  }
  return [...seeds];
}

(async () => {
  const initial = await getRoutes();
  const facultySeeds = await loadFacultySeeds();
  const queue = [...new Set([...initial, ...facultySeeds])];
  const visited = new Set();
  const pages = [];
  console.log(`Crawling site starting from ${queue.length} seeds…`);
  while (queue.length) {
    const p = queue.shift();
    if (visited.has(p)) continue;
    visited.add(p);
    try {
      process.stdout.write(`  [${pages.length + 1}] ${p} … `);
      const page = await renderPage(p);
      pages.push(page);
      console.log(`ok (+${page.discovered.length} links)`);
      for (const d of page.discovered) {
        if (!visited.has(d)) queue.push(d);
      }
    } catch (e) {
      console.log(`skip (${e.message})`);
    }
  }
  console.log(`Total pages rendered: ${pages.length}`);


  // Header/footer are identical on every page; take them from the first page
  // that actually has them.
  const withChrome = pages.find((p) => p.headerHtml || p.footerHtml) || pages[0];
  const headerHtml = withChrome?.headerHtml || "";
  const footerHtml = withChrome?.footerHtml || "";

  console.log("Building WXR…");
  const wxr = buildWxr(pages, headerHtml, footerHtml);
  fs.writeFileSync(path.join(OUT_DIR, "atme-wordpress-export.xml"), wxr);

  console.log("Building child theme…");
  await buildChildTheme();
  const themeZip = path.join(OUT_DIR, "atme-child-theme.zip");
  await zipDir(THEME_DIR, themeZip);

  fs.writeFileSync(path.join(OUT_DIR, "IMPORT-INSTRUCTIONS.md"), `# ATME → WordPress / Elementor Import

This bundle turns the ATME site into a native Elementor build:
every Page is an Elementor page (HTML widget inside a full-width section),
plus reusable **Header** and **Footer** templates, plus the original site
CSS so responsiveness is identical.

## 1. Install themes and plugins
- Activate the free **Astra** theme.
- Appearance → Themes → Add New → Upload \`atme-child-theme.zip\` → activate.
- Install & activate **Elementor** (free). Install **Elementor Pro** if you
  want the exported Header/Footer templates to auto-apply site-wide via
  Theme Builder conditions (the meta \`_elementor_conditions\` is preset to
  “Entire site”). Without Pro you can still open them from
  Templates → Saved Templates and insert manually.
- Install **WordPress Importer**.

## 2. Upload media
Copy everything inside \`uploads/\` to your server at
\`wp-content/uploads/atme/\`. Page HTML references \`/${MEDIA_URL_BASE}<file>\`,
so the path must match exactly.

## 3. Import
- Tools → Import → WordPress → upload \`atme-wordpress-export.xml\`.
- Tick “Download and import file attachments”, submit.
- After import: Elementor → Tools → **Regenerate CSS & Data**.

## 4. Configure
- Settings → Permalinks → **Post name** → Save.
- Settings → Reading → Static page → Front page = **Home**.
- Appearance → Menus → build a menu from the imported Pages.
- With Elementor Pro, the ATME Header and Footer templates apply
  automatically (Templates → Theme Builder). Without Pro, set every page's
  template to *Elementor Canvas* (already the default via
  \`_wp_page_template\`) so the theme's own header/footer stays hidden and
  the imported header/footer HTML inside each page keeps rendering.

## 5. Editing pages
- Open any imported page and click **Edit with Elementor**. You'll see one
  full-width Section → Column → HTML widget containing the page's markup.
  Design and responsiveness come from \`bundle.css\` in the child theme
  (Tailwind + design tokens: teal palette, yellow bullets, sticky offsets,
  responsive containers).
- To convert an HTML block into native Elementor widgets, use Elementor's
  right-click → Copy → paste into a new Container/Section, or use the free
  “Convert HTML to Elementor” Chrome extension.

## Notes
- Interactive React widgets (home slider, tabbed accordions, PDF viewer)
  export as their server-rendered HTML snapshot — visually identical, but
  static. Rebuild in Elementor if you want live behaviour.
- \`atme-child-theme.zip\` carries the compiled site CSS, so page look and
  breakpoints match the live site 1:1.
`);


  console.log("Zipping final bundle…");
  await zipMany([
    { file: path.join(OUT_DIR, "atme-wordpress-export.xml"), name: "atme-wordpress-export.xml" },
    { file: themeZip, name: "atme-child-theme.zip" },
    { file: path.join(OUT_DIR, "IMPORT-INSTRUCTIONS.md"), name: "IMPORT-INSTRUCTIONS.md" },
    { dir: UPLOADS_DIR, name: "uploads" },
  ], FINAL_ZIP);

  const size = fs.statSync(FINAL_ZIP).size;
  console.log(`\nDone → ${FINAL_ZIP} (${(size / 1024 / 1024).toFixed(1)} MB)`);
  console.log(`  pages: ${pages.length}`);
  console.log(`  media: ${[...mediaMap.values()].filter((m) => m.filename).length}`);
})();
