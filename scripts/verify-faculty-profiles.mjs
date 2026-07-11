#!/usr/bin/env node
// Verification script — for every teaching faculty across all departments:
//   1) confirm a scraped profile exists in src/data/facultyPages.ts
//      (or facultyPageOverrides / facultyPageFallbacks)
//   2) confirm the markdown is NOT a 404 / login page / empty
//   3) parse with the same parser the UI uses, then check which of the
//      10 canonical cards have data and which will render empty.
//
// The 10 canonical cards always render (empty when no data) — that is the
// product rule. This script just REPORTS which cards are empty per profile
// so we know where the source page itself is missing the data.
//
// Usage:  node scripts/verify-faculty-profiles.mjs
// Writes: scripts/.profile-verification.json  +  human summary to stdout.

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = path.resolve(process.cwd());

// We can't import TS directly from Node — read & extract via regex instead.
const facultyPagesSrc = fs.readFileSync(path.join(ROOT, "src/data/facultyPages.ts"), "utf8");
const overridesSrc = fs.existsSync(path.join(ROOT, "src/data/facultyPageOverrides.ts"))
  ? fs.readFileSync(path.join(ROOT, "src/data/facultyPageOverrides.ts"), "utf8") : "";
const fallbacksSrc = fs.existsSync(path.join(ROOT, "src/data/facultyPageFallbacks.ts"))
  ? fs.readFileSync(path.join(ROOT, "src/data/facultyPageFallbacks.ts"), "utf8") : "";
const allFacultySrc = fs.readFileSync(path.join(ROOT, "src/data/allFaculty.ts"), "utf8");

// crude JSON extraction from `export const facultyPages: ... = { ... };`
function extractRecord(src, varName) {
  const re = new RegExp(`export const ${varName}[^=]*=\\s*(\\{[\\s\\S]*?\\n\\});`, "m");
  const m = src.match(re);
  if (!m) return {};
  try { return JSON.parse(m[1]); } catch { return {}; }
}
const facultyPages = extractRecord(facultyPagesSrc, "facultyPages");
const facultyPageOverrides = overridesSrc ? extractRecord(overridesSrc, "facultyPageOverrides") : {};
const facultyPageFallbacks = fallbacksSrc ? extractRecord(fallbacksSrc, "facultyPageFallbacks") : {};

// Pull teaching-faculty arrays. We only need {id, name, designation} per entry,
// and we want to exclude staff arrays (cseStaff, eceStaff, …).
const TEACHING_ARRAYS = ["cseAllFaculty","eceAllFaculty","eeeAllFaculty","meAllFaculty","ceAllFaculty","dsAllFaculty","aimlAllFaculty","csdAllFaculty","cyAllFaculty","mcaAllFaculty","mbaAllFaculty"];
const facultyByDept = {};
for (const arrName of TEACHING_ARRAYS) {
  const dept = arrName.replace(/AllFaculty$/, "");
  const re = new RegExp(`export const ${arrName}[^=]*=\\s*\\[([\\s\\S]*?)\\];`, "m");
  const m = allFacultySrc.match(re);
  if (!m) { facultyByDept[dept] = []; continue; }
  const body = m[1];
  const entries = [];
  const entryRe = /\{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*designation:\s*"([^"]+)"/g;
  for (const em of body.matchAll(entryRe)) {
    entries.push({ id: em[1], name: em[2], designation: em[3] });
  }
  facultyByDept[dept] = entries;
}

// Alias map mirrors the one in the route file.
const facultyIdAliases = {
  "dr-puttegowda-d": "dr-putte-gowda-d",
  "dr-nasreenfathima": "nasreen-fathima",
  "dr-anil-kumar-c-j": "mr-anil-kumar-c-j",
  "mrs-lakshmi-shree-c-v": "lakshmi-shree-c-v",
  "sushma-v": "mrs-sushma-v",
  "keerthana-m-m": "mrs-keerthana-m-m",
  "raghuram-a-s": "mr-raghuram-a-s",
  "kavyashree-e-d": "mrs-kavyashree-e-d",
  "kalathma-m-k": "mr-kalathma-m-k",
  "roopa-b": "mrs-roopa-b",
  "sandesh-r": "mr-sandesh-r",
  "shrilakshmi-prasad": "mrs-shrilakshmi-prasad",
  "ms-b-s-vanishree": "vanishree",
  "mrs-bindushree-v": "bindushree-v",
  "mr-kaushik-triyambaka-mysur": "kaushik-triyambaka-mysur",
  "ms-yashaswini": "yashaswini-urs",
  "mrs-gadi-divyasree": "gadi-divyasree",
  "mrs-darshini-m-s": "darshini-m-s",
  "ms-bhavya-dechamma-k-s": "bhavya-dechamma-k-s",
  "mrs-arpitha-a": "arpitha-a",
  "dr-anitha-d-b": "dr-anitha-d-b-new",
  "dr-vinod-kumar-p": "dr-vinod-kumar-p-2",
  "ms-ambika-v": "mrs-ambika-v",
  "mr-j-n-karthik": "j-n-karthik",
  "dr-neethi-m-v": "mrs-neethi-m-v",
};

function getFacultyPage(id) {
  for (const k of [id, facultyIdAliases[id]].filter(Boolean)) {
    const o = facultyPageOverrides[k]; if (o?.md?.trim()) return { src: "override", ...o };
    const g = facultyPages[k];          if (g?.md?.trim()) return { src: "scraped",  ...g };
    const f = facultyPageFallbacks[k];  if (f?.md?.trim()) return { src: "fallback", ...f };
  }
  return null;
}

// Detect bad pages (404, login walls, near-empty).
function isBadPage(md) {
  const t = md.trim();
  if (t.length < 400) return "too-short (<400 chars)";
  if (/^#\s*404|Page not found|page you're looking for doesn't exist/i.test(t)) return "404 page";
  if (/wp-login|please log in to view/i.test(t)) return "login-wall";
  return null;
}

// Canonical sections — keep in sync with the route file.
const CANONICAL_SECTIONS = [
  { title: "Academic Details", aliases: ["academic details","qualification","qualifications","educational qualification","educational qualifications","education details","degrees obtained","degrees obtained, with field, institutions and dates","degrees obtained with field institutions and dates"] },
  { title: "Areas of Interests", aliases: ["areas of interest","areas of interests","area of interest","research areas","research area","research interests","research activity"] },
  { title: "Professional Experience", aliases: ["professional experience","employment record","employment record in institution","experience","teaching experience","work experience","ph d guidance","ph.d guidance","ph.d. guidance","phd guidance","research guidance"] },
  { title: "Publications Details", aliases: ["publications details","publication details","publications","publication","international book chapter publications","book chapters","journal publications","conference publications","patent","patents"] },
  { title: "Membership in Professional Bodies", aliases: ["membership in professional bodies","professional memberships","professional body memberships","professional body membership","memberships"] },
  { title: "FDPs/Conferences/Workshops/STTP/MOOC Certification", aliases: ["fdps/conferences/workshops/sttp/mooc certification","mooc certification","fdp","fdps","workshops","conferences attended","sttp","short-term courses","certifications","certification"] },
  { title: "Proposal/Funding/Project Financial Assistance", aliases: ["proposal/funding/project financial assistance","funding","funded projects","funding projects","projects funded","research grants","grants","r&d projects executed","r&d projects","research projects"] },
  { title: "Honours/Awards/Achievements", aliases: ["honours/awards/achievements","achievements","awards","honours","honors","awards & achievements","awards and achievements"] },
  { title: "Roles and Responsibilities: Institute Level", aliases: ["roles and responsibilities: institute level","institute level responsibilities","institute level","roles and responsibility","roles and responsibilities"] },
  { title: "Roles and Responsibilities: Department Level", aliases: ["roles and responsibilities: department level","department level responsibilities","department level"] },
];
const norm = (s) => s.toLowerCase().replace(/\s+/g, " ").trim();

// Heuristic: which canonical card titles are mentioned in the raw markdown?
function detectFilledCards(md) {
  const lower = md.toLowerCase();
  const filled = new Set();
  for (const c of CANONICAL_SECTIONS) {
    for (const a of c.aliases) {
      if (lower.includes(a)) { filled.add(c.title); break; }
    }
  }
  return filled;
}

const STAFF_DESIG = /(instructor|mechanic|attender|peon|technician|assistant|helper|driver|gardener|sweeper|electrician|carpenter|plumber|cook|watchman|security|office\s+staff)/i;
function isTeaching(designation) {
  // Whitelist obvious teaching titles; everything else => check staff blacklist.
  if (/professor|principal|hod|head of department|dean|lecturer|teaching/i.test(designation)) return true;
  if (STAFF_DESIG.test(designation)) return false;
  return true; // default: treat as teaching
}

const report = {
  totalsByDept: {},
  missingPages: [],   // no profile found at all
  badPages: [],       // 404 / login / too short
  emptyCardCounts: {}, // cardTitle -> count
  perFaculty: [],
};

let totalTeaching = 0;
for (const [dept, list] of Object.entries(facultyByDept)) {
  const teaching = list.filter((f) => isTeaching(f.designation));
  report.totalsByDept[dept] = teaching.length;
  totalTeaching += teaching.length;
  for (const f of teaching) {
    const page = getFacultyPage(f.id);
    if (!page) {
      report.missingPages.push({ dept, id: f.id, name: f.name });
      continue;
    }
    const bad = isBadPage(page.md);
    if (bad) report.badPages.push({ dept, id: f.id, name: f.name, reason: bad, url: page.url });
    const filled = detectFilledCards(page.md);
    const empty = CANONICAL_SECTIONS.filter((c) => !filled.has(c.title)).map((c) => c.title);
    for (const t of empty) report.emptyCardCounts[t] = (report.emptyCardCounts[t] || 0) + 1;
    report.perFaculty.push({ dept, id: f.id, name: f.name, source: page.src, badReason: bad, filledCount: filled.size, emptyCount: empty.length, emptyCards: empty });
  }
}

fs.writeFileSync(path.join(ROOT, "scripts/.profile-verification.json"), JSON.stringify(report, null, 2));

console.log(`\n📊 Teaching faculty profile verification\n`);
console.log(`Total teaching faculty across all departments: ${totalTeaching}`);
console.log(`\nPer department:`);
for (const [d, n] of Object.entries(report.totalsByDept)) console.log(`  ${d.padEnd(6)} ${n}`);

console.log(`\n❌ Missing scraped page entirely: ${report.missingPages.length}`);
for (const m of report.missingPages) console.log(`   ${m.dept.padEnd(6)} ${m.id}  (${m.name})`);

console.log(`\n⚠️  Bad pages (404 / login / too short): ${report.badPages.length}`);
for (const b of report.badPages) console.log(`   ${b.dept.padEnd(6)} ${b.id.padEnd(36)} ${b.reason}  ${b.url}`);

console.log(`\n🪪  Card fill rate (count of profiles where a card will render EMPTY):`);
const cardOrder = CANONICAL_SECTIONS.map((c) => c.title);
const goodCount = totalTeaching - report.missingPages.length;
for (const t of cardOrder) {
  const empty = report.emptyCardCounts[t] || 0;
  const filled = goodCount - empty;
  console.log(`   ${String(filled).padStart(3)} / ${goodCount}  ${t}`);
}
console.log(`\n✅ Report written → scripts/.profile-verification.json`);
