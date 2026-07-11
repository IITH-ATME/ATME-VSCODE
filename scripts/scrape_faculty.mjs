import Firecrawl from '@mendable/firecrawl-js';
import fs from 'node:fs';

const fc = new Firecrawl({ apiKey: process.env.FIRECRAWL_API_KEY });
const list = JSON.parse(fs.readFileSync('/tmp/faculty_list.json', 'utf8'));

// Restrict to one entry per faculty id (some appear under multiple dept slugs)
const seen = new Set();
const uniq = [];
for (const f of list) { if (!seen.has(f.id)) { seen.add(f.id); uniq.push(f); } }
console.error('Scraping', uniq.length, 'unique faculty pages');

const out = {};
let done = 0;
const fail = [];

async function scrapeOne(f) {
  try {
    const r = await fc.scrape(f.url, { formats: ['markdown'], onlyMainContent: true });
    const md = r.markdown || r.data?.markdown || '';
    out[f.id] = { name: f.name, url: f.url, md };
  } catch (e) {
    fail.push({ ...f, error: String(e?.message || e) });
  } finally {
    done++;
    if (done % 10 === 0) console.error(`  ${done}/${uniq.length}`);
  }
}

// concurrency pool of 6
const POOL = 6;
let i = 0;
async function worker() {
  while (i < uniq.length) {
    const idx = i++;
    await scrapeOne(uniq[idx]);
  }
}
await Promise.all(Array.from({ length: POOL }, worker));

fs.writeFileSync('/tmp/faculty_raw.json', JSON.stringify(out));
fs.writeFileSync('/tmp/faculty_fail.json', JSON.stringify(fail, null, 2));
console.error('DONE. ok:', Object.keys(out).length, 'fail:', fail.length);
