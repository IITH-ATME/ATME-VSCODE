import fs from 'node:fs';

const raw = JSON.parse(fs.readFileSync('/tmp/faculty_raw.json', 'utf8'));

function clean(md) {
  if (!md) return '';
  let s = md;
  // Strip everything up to and including the first occurrence of "Skip to content"
  s = s.replace(/^[\s\S]*?Skip to content\]\([^)]*\)/, '');
  // Remove logo
  s = s.replace(/!\[ATME[^\]]*\]\([^)]*\)/gi, '');
  s = s.replace(/!\[[^\]]*\]\([^)]*ATME-Final-logo[^)]*\)/gi, '');
  // Cut off social media / footer blob
  const cutMarkers = [
    'Social media & sharing icons',
    'UltimatelySocial',
    'Set Youtube Channel ID',
    'Copyright © ATME',
    'All Rights Reserved',
  ];
  for (const m of cutMarkers) {
    const i = s.indexOf(m);
    if (i > 200) s = s.slice(0, i);
  }
  // Remove any remaining ultimate-social / social plugin images and links
  s = s.replace(/!\[[^\]]*\]\([^)]*(ultimate-social|icons_theme|share_icons|visit_icons|Visit_us|Twitter_Follow|Linkedin_Share|fb_icons|youtube\.com\/c\/|facebook\.com\/sharer|sharer\.php)[^)]*\)/gi, '');
  s = s.replace(/\[!\[[^\]]*\]\([^)]*\)\]\([^)]*(ultimate-social|icons_theme|share_icons|visit_icons|Visit_us|Twitter_Follow|Linkedin_Share|fb_icons|sharer\.php|atmeceofficial|youtube\.com\/c|linkedin\.com\/school|linkedin\.com\/sharing|twitter\.com\/intent|instagram\.com)[^)]*\)/gi, '');
  // Strip stresserhub/spam line
  s = s.replace(/\[ip stresser\]\([^)]*\)/gi, '');
  // Strip the faculty's hero photo (we already show it as the card / sidebar)
  s = s.replace(/!\[\]\([^)]*\/wp-content\/uploads\/[^)]*\)/gi, '');
  // Collapse blank lines
  s = s.replace(/\n{3,}/g, '\n\n').trim();
  return s;
}

const out = {};
let totalChars = 0;
for (const [id, v] of Object.entries(raw)) {
  const md = clean(v.md);
  out[id] = { name: v.name, url: v.url, md };
  totalChars += md.length;
}

// Emit TS module
let body = '// AUTO-GENERATED from atme.edu.in faculty pages via Firecrawl. Do not edit by hand.\n';
body += '// Re-run scripts/scrape_faculty.mjs + scripts/build_faculty_markdown.mjs to refresh.\n\n';
body += 'export type FacultyPageData = { name: string; url: string; md: string };\n\n';
body += 'export const facultyPages: Record<string, FacultyPageData> = ';
body += JSON.stringify(out, null, 2);
body += ';\n';

fs.writeFileSync('/dev-server/src/data/facultyPages.ts', body);
console.error('Wrote', Object.keys(out).length, 'profiles, total', totalChars, 'chars');
