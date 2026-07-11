// Scrapes each department page on old.atme.edu.in, extracts the
// "Message From HOD" text + HOD photo, and writes:
//   src/data/hodMessages.ts
//
// Usage: node scripts/scrape-hod-messages.mjs

import Firecrawl from "@mendable/firecrawl-js";
import fs from "node:fs";

if (!process.env.FIRECRAWL_API_KEY) {
  console.error("FIRECRAWL_API_KEY missing"); process.exit(1);
}

const DEPTS = [
  { slug: "cse",       url: "https://old.atme.edu.in/computer-science-and-engineering" },
  { slug: "ece",       url: "https://old.atme.edu.in/electronics-and-communication-engineering" },
  { slug: "eee",       url: "https://old.atme.edu.in/electrical-and-electronics-engineering" },
  { slug: "me",        url: "https://old.atme.edu.in/mechanical-engineering" },
  { slug: "ce",        url: "https://old.atme.edu.in/civil-engineering" },
  { slug: "ds",        url: "https://old.atme.edu.in/cse-data-science" },
  { slug: "aiml",      url: "https://old.atme.edu.in/cse-ai-ml" },
  { slug: "cy",        url: "https://old.atme.edu.in/cse-cyber-security" },
  { slug: "csd",       url: "https://old.atme.edu.in/cse-design" },
  { slug: "mca",       url: "https://old.atme.edu.in/mca" },
  { slug: "mba",       url: "https://old.atme.edu.in/mba" },
  { slug: "physics",   url: "https://old.atme.edu.in/physics-department" },
  { slug: "chemistry", url: "https://old.atme.edu.in/chemistry-department" },
  { slug: "math",      url: "https://old.atme.edu.in/mathematics-department" },
];

const fc = new Firecrawl({ apiKey: process.env.FIRECRAWL_API_KEY });

function extractHod(md, sourceUrl) {
  if (!md) return null;
  // Find "Message From HOD" (case-insensitive, allow variations)
  const re = /(?:\*\*\s*)?(?:message\s+from\s+(?:the\s+)?(?:hod|head|head\s+of\s+(?:the\s+)?department|director|principal)[^*\n]*)(?:\s*\*\*)?/i;
  const m = md.match(re);
  if (!m) return { message: null, image: null, name: null, designation: null, note: "no HOD heading found" };
  const start = m.index + m[0].length;
  // Slice the next ~3500 chars and stop at the next major heading or known section
  let chunk = md.slice(start, start + 6000);
  const stopRe = /\n#{1,4}\s|\n\*\*(?:vision|mission|about|programs?|courses|faculty|labs|achievements|notice|events|peo|po|pso|department|contact)\b|\nOur Vision|\nOur Mission|\nVision\s*\n|\nMission\s*\n/i;
  const stopMatch = chunk.match(stopRe);
  if (stopMatch) chunk = chunk.slice(0, stopMatch.index);

  // Pull first image URL near the HOD section (look backwards too, since the photo
  // is often rendered just before the heading in the source markup)
  const backwardWindow = md.slice(Math.max(0, m.index - 1500), m.index + chunk.length);
  const imgMatches = [...backwardWindow.matchAll(/!\[[^\]]*\]\(([^)\s]+\.(?:jpe?g|png|webp))(?:\s+"[^"]*")?\)/gi)];
  // Prefer non-logo images
  const image = imgMatches
    .map((mm) => mm[1])
    .find((u) => !/logo|atme-final|favicon|sharer|icons_theme|share_icons|visit_icons/i.test(u)) || null;

  // Extract HOD name + designation if present at the top of the chunk
  let name = null, designation = null;
  const nameMatch = chunk.match(/\*\*([A-Z][A-Za-z .'-]+(?:Dr\.?|Prof\.?|Mr\.?|Mrs\.?|Ms\.?)?[^*\n]{0,60})\*\*/);
  if (nameMatch) name = nameMatch[1].replace(/\s+/g, " ").trim();
  const desigMatch = chunk.match(/(?:Professor|Associate Professor|Assistant Professor|HOD|Head|Principal|Director)[^*\n]{0,80}/i);
  if (desigMatch) designation = desigMatch[0].replace(/\s+/g, " ").trim();

  // Clean the message body: strip markdown formatting noise but preserve paragraphs
  let msg = chunk
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")           // images
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")        // links → text
    .replace(/\*\*([^*]+)\*\*/g, "$1")              // bold
    .replace(/__([^_]+)__/g, "$1")                  // bold (underscore)
    .replace(/\*([^*\n]+)\*/g, "$1")                // italic
    .replace(/_([^_\n]+)_/g, "$1")                  // italic
    .replace(/^[#>*\-|]+\s*/gm, "")                 // line-leading markup
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  // Drop any honorific/name line that we already pulled out
  if (name) msg = msg.replace(new RegExp("^\\s*" + name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\s*\\n+", "i"), "");
  if (designation) msg = msg.replace(new RegExp("^\\s*" + designation.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\s*\\n+", "i"), "");

  // Drop the first line if it's now the HOD label itself
  msg = msg.replace(/^\s*(message from[^\n]*)\n+/i, "").trim();

  return { message: msg, image, name, designation, sourceUrl };
}

const out = {};
for (const d of DEPTS) {
  try {
    const r = await fc.scrape(d.url, { formats: ["markdown"], onlyMainContent: true });
    const md = r.markdown || r.data?.markdown || "";
    const got = extractHod(md, d.url);
    if (!got || !got.message) {
      console.log(`⚠️  ${d.slug}: HOD section not detected (note: ${got?.note || "no message"})`);
      out[d.slug] = { sourceUrl: d.url, message: null, image: null, name: null, designation: null };
    } else {
      console.log(`✅ ${d.slug}: ${got.message.length} chars, img: ${got.image ? "yes" : "no"}, name: ${got.name || "?"}`);
      out[d.slug] = got;
    }
  } catch (e) {
    console.log(`❌ ${d.slug}: ${e?.message || e}`);
    out[d.slug] = { sourceUrl: d.url, message: null, image: null, name: null, designation: null, error: String(e?.message || e) };
  }
}

fs.writeFileSync("/tmp/hod_raw.json", JSON.stringify(out, null, 2));
console.log("\nRaw written to /tmp/hod_raw.json");
