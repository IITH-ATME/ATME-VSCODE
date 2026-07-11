// Direct HTTP scrape of atme.edu.in for: faculty photos, basic sciences,
// infrastructure markdown + lab images. No Firecrawl; no rate limits.
import fs from "node:fs";
import path from "node:path";
import * as cheerio from "cheerio";

const OUT = "/tmp/atme-scrape";
fs.mkdirSync(OUT, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getHTML(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; atme-scraper)" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`);
  return await res.text();
}

const LOGO_RE = /atme[-_]?final[-_]?logo|atme[-_]?logo|favicon|icon-|sprite|placeholder/i;

function pickFacultyPhoto($, baseUrl) {
  const candidates = [];
  $("img").each((_, el) => {
    const $img = $(el);
    const src = $img.attr("src") || $img.attr("data-src") || "";
    if (!src) return;
    if (LOGO_RE.test(src)) return;
    if (!/\/wp-content\/uploads\//i.test(src)) return;
    // exclude tiny icons / decorations
    const w = parseInt($img.attr("width") || "0", 10);
    const h = parseInt($img.attr("height") || "0", 10);
    if (w && w < 80) return;
    if (h && h < 80) return;
    // prefer images in faculty entry content; track position score
    const score = $img.parents(".entry-content, article, .et_pb_post_content").length ? 10 : 1;
    candidates.push({ src: new URL(src, baseUrl).href, score });
  });
  if (candidates.length === 0) return null;
  candidates.sort((a, b) => b.score - a.score);
  return candidates[0].src;
}

// ---------- 1. Faculty photos ----------
async function scrapeFacultyPhotos() {
  const allFacultyTs = fs.readFileSync("src/data/allFaculty.ts", "utf8");
  const deptsTs = fs.readFileSync("src/data/departments.ts", "utf8");
  // ids look like id: "dr-jyothi-d-n", cvUrl: "https://atme.edu.in/...."
  const re = /id:\s*"([^"]+)"[^}]*?cvUrl:\s*"(https:\/\/atme\.edu\.in\/[^"]+)"/g;
  const ids = new Map();
  for (const src of [allFacultyTs, deptsTs]) {
    let m;
    while ((m = re.exec(src))) {
      if (!ids.has(m[1])) ids.set(m[1], m[2]);
    }
  }
  // Also catch cvUrl-then-id ordering
  const re2 = /cvUrl:\s*"(https:\/\/atme\.edu\.in\/[^"]+)"[^}]*?id:\s*"([^"]+)"/g;
  for (const src of [allFacultyTs, deptsTs]) {
    let m;
    while ((m = re2.exec(src))) {
      if (!ids.has(m[2])) ids.set(m[2], m[1]);
    }
  }
  console.error(`[photos] ${ids.size} unique faculty IDs`);

  const out = {};
  const errors = [];
  const POOL = 10;
  const entries = [...ids.entries()];
  let i = 0, done = 0;
  async function worker() {
    while (i < entries.length) {
      const [id, url] = entries[i++];
      try {
        const html = await getHTML(url);
        const $ = cheerio.load(html);
        const photo = pickFacultyPhoto($, url);
        if (photo) out[id] = photo;
        else errors.push({ id, url, err: "no photo found" });
      } catch (e) {
        errors.push({ id, url, err: String(e.message || e) });
      }
      done++;
      if (done % 20 === 0) console.error(`  ${done}/${entries.length}`);
    }
  }
  await Promise.all(Array.from({ length: POOL }, worker));
  fs.writeFileSync(`${OUT}/faculty_photos.json`, JSON.stringify({ photos: out, errors }, null, 2));
  console.error(`[photos] DONE ${Object.keys(out).length} found, ${errors.length} errors`);
}

// ---------- 2. Basic Sciences ----------
async function scrapeBasicSciences() {
  const candidates = [
    "https://atme.edu.in/basic-sciences/",
    "https://atme.edu.in/basic-science/",
    "https://atme.edu.in/basic-sciences-department/",
    "https://atme.edu.in/science-and-humanities/",
    "https://atme.edu.in/department-of-science-and-humanities/",
    "https://atme.edu.in/physics/",
    "https://atme.edu.in/chemistry/",
    "https://atme.edu.in/mathematics/",
  ];
  const out = { tried: [], pages: {} };
  for (const url of candidates) {
    try {
      const html = await getHTML(url);
      const $ = cheerio.load(html);
      out.tried.push({ url, ok: true, title: $("title").text().trim() });
      out.pages[url] = {
        title: $("title").text().trim(),
        h1: $("h1").first().text().trim(),
        // find faculty profile links from this page
        facultyLinks: [...new Set(
          $("a[href*='/faculty-profile/'], a[href*='/faculty-profiles/'], a[href*='atme.edu.in/']")
            .map((_, a) => $(a).attr("href"))
            .get()
            .filter((h) => /atme\.edu\.in\/(dr|mr|mrs|ms|prof)-/i.test(h))
        )],
      };
    } catch (e) {
      out.tried.push({ url, ok: false, err: String(e.message || e) });
    }
  }
  // Also try the main departments listing page to find link
  try {
    const html = await getHTML("https://atme.edu.in/departments/");
    const $ = cheerio.load(html);
    out.departmentsListLinks = [...new Set($("a").map((_, a) => $(a).attr("href")).get())]
      .filter((h) => h && /atme\.edu\.in/.test(h) && /science|basic|humanit/i.test(h));
  } catch (e) {
    out.departmentsListErr = String(e.message || e);
  }
  fs.writeFileSync(`${OUT}/basic_sciences.json`, JSON.stringify(out, null, 2));
  console.error(`[bs] DONE`);
}

// ---------- 3. Infrastructure pages ----------
async function scrapeInfra() {
  const urls = {
    cse: "https://atme.edu.in/computer-science-and-engineering/cs-infrastructure/",
    ece: "https://atme.edu.in/electronics-communication-engineering/infrastructure/",
    eee: "https://atme.edu.in/electrical-and-electronics-engineering/infrastructure/",
    me: "https://atme.edu.in/mechanical-engineering/infrastructure/",
    ce: "https://atme.edu.in/civil-engineering/infrastructure/",
    ds: "https://atme.edu.in/cseds-infrastructure/",
    aiml: "https://atme.edu.in/aiml-infrastructure/",
    csd: "https://atme.edu.in/csd-infrastructure/",
    cy: "https://atme.edu.in/cy-infrastructure/",
    mca: "https://atme.edu.in/master-of-computer-applications/mca-infrastructure/",
    mba: "https://atme.edu.in/master-of-business-administration/mba-infrastructure/",
  };
  const out = {};
  for (const [slug, url] of Object.entries(urls)) {
    try {
      const html = await getHTML(url);
      const $ = cheerio.load(html);
      // Pull main content text (paragraphs + headings) and images.
      const $content = $(".entry-content, article, .et_pb_post_content, main").first();
      const root = $content.length ? $content : $("body");
      const blocks = [];
      root.find("h2,h3,h4,p,li").each((_, el) => {
        const tag = el.tagName.toLowerCase();
        const text = $(el).text().replace(/\s+/g, " ").trim();
        if (text.length < 3) return;
        blocks.push({ tag, text });
      });
      const images = [];
      const seen = new Set();
      root.find("img").each((_, el) => {
        const src = $(el).attr("src") || $(el).attr("data-src") || "";
        if (!src) return;
        if (LOGO_RE.test(src)) return;
        if (!/\/wp-content\/uploads\//i.test(src)) return;
        const w = parseInt($(el).attr("width") || "0", 10);
        if (w && w < 100) return;
        const full = new URL(src, url).href;
        if (seen.has(full)) return;
        seen.add(full);
        images.push({ url: full, alt: $(el).attr("alt") || "" });
      });
      out[slug] = { url, blockCount: blocks.length, imageCount: images.length, blocks, images };
      console.error(`  infra ${slug}: ${blocks.length} blocks, ${images.length} images`);
    } catch (e) {
      out[slug] = { url, error: String(e.message || e) };
      console.error(`  infra ${slug}: ERR ${e.message}`);
    }
    await sleep(300);
  }
  fs.writeFileSync(`${OUT}/infrastructure.json`, JSON.stringify(out, null, 2));
  console.error(`[infra] DONE`);
}

console.error("=== START ===");
await scrapeFacultyPhotos();
await scrapeBasicSciences();
await scrapeInfra();
console.error("=== ALL DONE ===");
