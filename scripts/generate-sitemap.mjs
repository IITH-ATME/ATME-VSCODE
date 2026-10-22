#!/usr/bin/env node
// Crawl a running copy of the site and write every indexable page's
// canonical path to src/data/sitemapPaths.json, which /sitemap.xml serves.
//
// Usage:  npm run dev   (in another terminal)
//         node scripts/generate-sitemap.mjs [baseUrl]   default http://localhost:5173
//
// Pages are skipped when they redirect elsewhere, return non-200, carry a
// robots noindex, or declare a canonical pointing at a different URL — so the
// sitemap only lists the one indexable copy of each page. Re-run after
// adding or removing pages.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const BASE = (process.argv[2] || "http://localhost:5173").replace(/\/+$/, "");
const SITE = "https://atme.edu.in";
const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "data", "sitemapPaths.json");
const CONCURRENCY = 8;
const FILE_EXT = /\.(pdf|jpe?g|png|gif|webp|svg|ico|docx?|xlsx?|pptx?|zip|mp4|xml|txt|json)$/i;
const EXCLUDE = /^\/(admin|api)(\/|$)/;

// Pages that exist but no page links to — seed them so they are still found.
const SEEDS = [
  "/",
  "/resources",
  "/resources/notes",
  "/resources/papers",
  "/resources/videos",
  "/resources/elibrary",
  "/resources/discrete-mathematical-structures",
  "/news-clippings",
  "/nabl",
  "/student-handbook",
  "/employee-handbook",
  "/hostel-policy",
];

const normalize = (p) => {
  const path = decodeURI(p.split(/[?#]/)[0]).replace(/\/+$/, "");
  return path === "" ? "/" : path;
};

const attr = (tag, name) => tag.match(new RegExp(`${name}="([^"]*)"`, "i"))?.[1];

async function visit(path) {
  const res = await fetch(BASE + encodeURI(path), { redirect: "follow" });
  const finalPath = normalize(new URL(res.url).pathname);
  const html = res.ok ? await res.text() : "";
  const links = new Set();
  for (const [, href] of html.matchAll(/<a\s[^>]*?href="([^"]+)"/gi)) {
    if (/^(mailto:|tel:|javascript:|#)/i.test(href)) continue;
    let url;
    try {
      url = new URL(href.replace(/&amp;/g, "&"), BASE + "/");
    } catch {
      console.warn(`  skipping malformed link on ${path}: ${href}`);
      continue;
    }
    if (url.origin !== BASE && url.origin !== SITE) continue;
    const p = normalize(url.pathname);
    if (!FILE_EXT.test(p) && !EXCLUDE.test(p)) links.add(p);
  }
  const robots = [...html.matchAll(/<meta\s[^>]*name="robots"[^>]*>/gi)].map((m) => attr(m[0], "content") || "");
  const canonicalTag = html.match(/<link\s[^>]*rel="canonical"[^>]*>/i)?.[0];
  const canonical = canonicalTag ? normalize(new URL(attr(canonicalTag, "href"), SITE).pathname) : null;
  const indexable =
    res.ok && finalPath === path && !robots.some((r) => /noindex/i.test(r)) && (canonical === null || canonical === path);
  return { links, indexable };
}

const previous = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : [];
const seen = new Set([...SEEDS, ...previous]);
let frontier = [...seen];
const indexable = new Set();

while (frontier.length) {
  const next = [];
  for (let i = 0; i < frontier.length; i += CONCURRENCY) {
    const batch = frontier.slice(i, i + CONCURRENCY);
    const results = await Promise.all(
      batch.map((p) =>
        visit(p).catch((err) => {
          console.warn(`! ${p}: ${err.message}`);
          return { links: new Set(), indexable: false };
        }),
      ),
    );
    results.forEach(({ links, indexable: ok }, j) => {
      if (ok) indexable.add(batch[j]);
      for (const l of links) if (!seen.has(l)) (seen.add(l), next.push(l));
    });
  }
  console.log(`crawled ${seen.size - next.length}, queued ${next.length}`);
  frontier = next;
}

const paths = [...indexable].sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));
writeFileSync(OUT, JSON.stringify(paths, null, 1) + "\n");
console.log(`Crawled ${seen.size} URLs; wrote ${paths.length} indexable pages to ${OUT}`);
