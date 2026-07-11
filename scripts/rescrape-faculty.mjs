#!/usr/bin/env node
// One-shot orchestrator that re-scrapes ALL teaching faculty profile pages
// from atme.edu.in (the live source used by the existing data) via Firecrawl,
// cleans the markdown, and rewrites src/data/facultyPages.ts in place.
//
// Usage:  bun run rescrape:faculty
//         (or)   node scripts/rescrape-faculty.mjs
//
// Requires FIRECRAWL_API_KEY in the environment. The Firecrawl connector
// linked to this project provisions it automatically inside the sandbox.

import Firecrawl from "@mendable/firecrawl-js";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.cwd());
const ALL_FACULTY_PATH = path.join(ROOT, "src/data/allFaculty.ts");
const OUT_PATH = path.join(ROOT, "src/data/facultyPages.ts");

if (!process.env.FIRECRAWL_API_KEY) {
  console.error("\n❌ FIRECRAWL_API_KEY is not set.");
  console.error("   Link the Firecrawl connector for this project, then retry.\n");
  process.exit(1);
}

// ---- Build the unique faculty list from src/data/allFaculty.ts ----
const src = fs.readFileSync(ALL_FACULTY_PATH, "utf8");
const re = /\{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)",[^}]*?cvUrl:\s*"([^"]+)"[^}]*\}/g;
const list = [];
const seen = new Set();
for (const m of src.matchAll(re)) {
  const [, id, name, cvUrl] = m;
  if (seen.has(id)) continue;
  if (!/^https?:\/\//.test(cvUrl)) continue;
  if (!/atme\.edu\.in/i.test(cvUrl)) continue;
  // EXACT-CONTENT PRESERVATION RULE:
  // The live atme.edu.in site has dropped most faculty profile pages
  // (they now return 404). The full historical profiles still live on
  // old.atme.edu.in. Always force the legacy host so we get the FULL
  // verbatim page content — never a 404 placeholder, never a summary.
  const url = cvUrl.replace(/^https?:\/\/(www\.)?atme\.edu\.in/i, "https://old.atme.edu.in");
  seen.add(id);
  list.push({ id, name, url });
}

// Optional filter: RESCRAPE_IDS=id1,id2 → only refresh those entries.
const idFilter = (process.env.RESCRAPE_IDS || "").split(",").map((s) => s.trim()).filter(Boolean);
const filteredList = idFilter.length ? list.filter((f) => idFilter.includes(f.id)) : list;

if (filteredList.length === 0) {
  console.error("❌ No faculty entries matched filter.");
  process.exit(1);
}
console.log(`📋 Scraping ${filteredList.length} of ${list.length} unique teaching-faculty profiles.\n`);

// ---- Scrape each with Firecrawl (concurrency-limited) ----
const fc = new Firecrawl({ apiKey: process.env.FIRECRAWL_API_KEY });
const raw = {};
const failures = [];
let done = 0;

async function scrapeOne(f, attempt = 0) {
  try {
    // EXACT-CONTENT PRESERVATION RULE: only request the `markdown` format.
    // Never request `summary` — the renderer needs the full verbatim page.
    const r = await fc.scrape(f.url, { formats: ["markdown"], onlyMainContent: true });
    const md = r.markdown || r.data?.markdown || "";
    if (!md) throw new Error("empty markdown");
    if (/^#\s*404|Page not found|page you'?re looking for doesn'?t exist/i.test(md)) {
      throw new Error("404 page returned by source");
    }
    raw[f.id] = { name: f.name, url: f.url, md };
  } catch (e) {
    const msg = String(e?.message || e);
    // Retry on rate-limit / transient network errors with exponential back-off.
    if (attempt < 4 && /rate limit|ECONNRESET|ECONNREFUSED|fetch failed|timeout|502|503|504/i.test(msg)) {
      await new Promise((r) => setTimeout(r, 30000 + attempt * 30000));
      return scrapeOne(f, attempt + 1);
    }
    failures.push({ ...f, error: msg });
  } finally {
    done++;
    if (done % 5 === 0 || done === filteredList.length) {
      console.log(`  scraped ${done}/${filteredList.length}  (failed: ${failures.length})`);
    }
  }
}

const POOL = Number(process.env.RESCRAPE_CONCURRENCY || 6);
let cursor = 0;
const workers = Array.from({ length: POOL }, async () => {
  while (cursor < filteredList.length) {
    const idx = cursor++;
    await scrapeOne(filteredList[idx]);
  }
});
console.log(`🔥 Scraping with concurrency=${POOL} ...`);
await Promise.all(workers);

// ---- Clean each markdown (same rules as scripts/build_faculty_markdown.mjs) ----
function clean(md) {
  if (!md) return "";
  let s = md;
  s = s.replace(/^[\s\S]*?Skip to content\]\([^)]*\)/, "");
  s = s.replace(/!\[ATME[^\]]*\]\([^)]*\)/gi, "");
  s = s.replace(/!\[[^\]]*\]\([^)]*ATME-Final-logo[^)]*\)/gi, "");
  const cutMarkers = [
    "Social media & sharing icons",
    "UltimatelySocial",
    "Set Youtube Channel ID",
    "Copyright © ATME",
    "All Rights Reserved",
  ];
  for (const m of cutMarkers) {
    const i = s.indexOf(m);
    if (i > 200) s = s.slice(0, i);
  }
  s = s.replace(
    /!\[[^\]]*\]\([^)]*(ultimate-social|icons_theme|share_icons|visit_icons|Visit_us|Twitter_Follow|Linkedin_Share|fb_icons|youtube\.com\/c\/|facebook\.com\/sharer|sharer\.php)[^)]*\)/gi,
    "",
  );
  s = s.replace(
    /\[!\[[^\]]*\]\([^)]*\)\]\([^)]*(ultimate-social|icons_theme|share_icons|visit_icons|Visit_us|Twitter_Follow|Linkedin_Share|fb_icons|sharer\.php|atmeceofficial|youtube\.com\/c|linkedin\.com\/school|linkedin\.com\/sharing|twitter\.com\/intent|instagram\.com)[^)]*\)/gi,
    "",
  );
  s = s.replace(/\[ip stresser\]\([^)]*\)/gi, "");
  s = s.replace(/!\[\]\([^)]*\/wp-content\/uploads\/[^)]*\)/gi, "");
  s = s.replace(/\n{3,}/g, "\n\n").trim();
  return s;
}

// Merge into existing facultyPages.ts so a partial/throttled run never
// destroys good prior entries. EXACT-CONTENT PRESERVATION RULE: previously
// stored full markdown is preserved unless this run successfully fetched a
// replacement.
const existing = (() => {
  if (!fs.existsSync(OUT_PATH)) return {};
  const txt = fs.readFileSync(OUT_PATH, "utf8");
  const m = txt.match(/export const facultyPages[^=]*=\s*(\{[\s\S]*?\n\});/);
  if (!m) return {};
  try { return JSON.parse(m[1]); } catch { return {}; }
})();

const cleaned = { ...existing };
let totalChars = 0;
let replaced = 0;
for (const [id, v] of Object.entries(raw)) {
  const md = clean(v.md);
  if (!md) continue;
  cleaned[id] = { name: v.name, url: v.url, md };
  totalChars += md.length;
  replaced++;
}

// ---- Emit src/data/facultyPages.ts ----
let body = "// AUTO-GENERATED from old.atme.edu.in faculty pages via Firecrawl. Do not edit by hand.\n";
body += "// Re-run `bun run rescrape:faculty` to refresh.\n";
body += "// EXACT-CONTENT PRESERVATION: full verbatim markdown only — never summaries.\n\n";
body += "export type FacultyPageData = { name: string; url: string; md: string };\n\n";
body += "export const facultyPages: Record<string, FacultyPageData> = ";
body += JSON.stringify(cleaned, null, 2);
body += ";\n";

fs.writeFileSync(OUT_PATH, body);
console.log(`\n   Updated ${replaced} entries (kept ${Object.keys(cleaned).length - replaced} pre-existing).`);

// ---- Summary ----
const failPath = path.join(ROOT, "scripts/.rescrape-failures.json");
fs.writeFileSync(failPath, JSON.stringify(failures, null, 2));

console.log(`\n✅ Wrote ${Object.keys(cleaned).length} profiles → ${path.relative(ROOT, OUT_PATH)}`);
console.log(`   Total markdown size: ${(totalChars / 1024).toFixed(1)} KB`);
if (failures.length > 0) {
  console.log(`⚠️  ${failures.length} pages failed — see ${path.relative(ROOT, failPath)}`);
  process.exitCode = 1;
} else {
  console.log("   All profiles scraped successfully.");
}
