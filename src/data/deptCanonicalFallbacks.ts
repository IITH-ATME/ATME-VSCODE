// Maps a (department slug, canonical section key) to a scrapedAll.json key
// so canonical-section placeholder routes (COE, Magazine, News Letter)
// render the rich old.atme.edu.in content + PDFs for every department.
// scrapedAll.json is ~7.6MB, so it's dynamically imported (see
// getCanonicalFallback below) instead of statically here, keeping it out of
// the eagerly-loaded route bundle for departments that never hit this path.

type ScrapedEntry = { title?: string; markdown?: string; sourceURL?: string };

// Per-department best matches discovered in scrapedAll.json. Order matters:
// the first key that exists in scrapedAll wins; the final entry is a
// college-wide fallback so every dept always renders something useful.
const MAP: Record<string, Record<string, string[]>> = {
  // Calendar of Events
  coe: {
    // Departments whose scraped COE entries have usable PDF references go
    // straight to those. CSE / BCA / MCA had no PDF source URLs in the scrape
    // so we fall through to INLINE below.
    cse: ["coe-cs"],
    ece: ["coe-ece", "coe-all"],
    eee: ["coe-eee-2", "coe-electricalelectronicseng", "coe-all"],
    me: ["coe-me", "coe-all"],
    ce: ["coe-cv", "coe-civil-engineering", "coe-all"],
    aiml: ["coe-cse-aiml", "coe-all"],
    csd: ["coe-cse-csd", "coe-all"],
    ds: ["coe-cse-ds", "coe-all"],
    cy: ["cyber-security-coe", "coe-all"],
    mca: ["coe-mca"],
    mba: ["coe-mba", "coe-all"],
    bs: ["coe-bs", "coe-all"],
  },
  // College / department Magazine
  magazine: {
    cse: ["computer-science-and-engineering/cse-magzine", "magazine"],
    ece: ["electronics-communication-engineering/e-news-letter", "magazine"],
    eee: ["magazine"],
    me: ["magazine"],
    ce: ["magazine"],
    aiml: ["magazine"],
    csd: ["magazine"],
    ds: ["cseds-news-letter-and-magazines", "magazine"],
    cy: ["magazine"],
    bca: ["magazine"],
    mca: ["magazine"],
    mba: ["magazine"],
  },
  // E-Newsletter
  "news-letter": {
    cse: [
      "computer-science-and-engineering/cse-news-letter-2",
      "computer-science-and-engineering/cse-news-letter",
    ],
    ece: ["electronics-communication-engineering/e-news-letter"],
    eee: ["electrical-and-electronics-engineering/ee-e-news-letter"],
    me: ["mechanical-engineering/e-news-letter"],
    ce: ["civil-engineering/ce-news-letter"],
    csd: ["csd-newsletter"],
    ds: ["cseds-news-letter-and-magazines"],
    // aiml intentionally has no fallback: the scraped page here is CSE's own
    // newsletter, and showing it under the AIML tab mislabels borrowed CSE
    // content as AIML's. AIML will get real data once the department supplies it.
  },
};

// Common UG Calendar of Events documents shared by every B.E. program.
const COMMON_UG_COE = `
## Institute — Master Calendar of Events

| Sl. No. | Document |
| --- | --- |
| 1 | [Institute — 6th Semester COE 2025-26](https://new.atme.edu.in/wp-content/uploads/2026/04/Institute_-6th-Semester-COE-2025-26.pdf) |

## UG Programs — Odd Semester (2025-26)

| Sl. No. | Document |
| --- | --- |
| 1 | [Calendar of Events — 1st Semester COE 2025-26](https://new.atme.edu.in/wp-content/uploads/2026/04/Calendar-of-Events-1st-Semester-COE-2025-26.pdf) |
| 2 | [Calendar of Events — 3rd Semester COE 2025-26 (Draft)](https://new.atme.edu.in/wp-content/uploads/2026/04/Calendar-of-Events-3rd-Sem-COE-2025-26-Draft.pdf) |
| 3 | [Calendar of Events — 5th & 7th Semester COE 2025-26](https://new.atme.edu.in/wp-content/uploads/2026/04/Calendar-of-Events-5th-7th-Sem-COE-2025-26.pdf) |
`;

const deptCoe = (label: string, url: string) => `
## Department — 6th Semester COE (AY 2025-26)

| Sl. No. | Document |
| --- | --- |
| 1 | [${label} — 6th Semester COE 2025-26](${url}) |
${COMMON_UG_COE}`;

// Inline markdown fallbacks for canonical sections when the scraped entries
// contain no usable PDF references (e.g. CSE / MCA Calendar of Events,
// which were captured only as PDF.js viewer chrome with no source URLs).
// BCA intentionally has no COE fallback — old.atme.edu.in has no BCA-specific
// Calendar of Events, and the page previously showed CSE's PDF mislabeled
// as BCA's, which is not real BCA content.
const INLINE: Record<string, Record<string, string>> = {
  coe: {
    cse: deptCoe(
      "CSE",
      "https://new.atme.edu.in/wp-content/uploads/2026/04/CSE-dept.-6th-Semester-COE-2025-26.pdf"
    ),
    mca: `
## MCA Calendar of Events
${COMMON_UG_COE}`,
    mba: `
## MBA Calendar of Events
${COMMON_UG_COE}`,
  },
  "news-letter": {
    mca: `## CA Navonmesha

[CA Navonmesha](/__l5e/assets-v1/417964e5-cb20-4893-b557-7a89ac5522a6/MCA-Navonmesha.pdf)`,
  },

};

const PDF_REF_RE = /(\.pdf(?![a-z])|\/__l5e\/assets-v1\/[^)\s"'<>]+\.pdf|wp-content\/uploads\/[^)\s"'<>]+\.pdf)/i;

// New department newsletters (Feb/Jan 2026 edition) — prepended on top of
// any existing scraped newsletter content so the latest issue appears first.
export const NEW_NEWSLETTERS: Record<string, { heading: string; url: string }> = {
  ce: {
    heading: "NIRMAAN — Volume 11 / Issue 01 / February 2026",
    url: "/__l5e/assets-v1/1f703e54-5126-41d7-8dd4-6f93fc888d96/CE-NIRMAAN-Newsletter-Vol-11-Issue-01-Feb-2026.pdf",
  },
  cse: {
    heading: "CSE Newsletter — Volume 15 : Issue I, February 2026",
    url: "/__l5e/assets-v1/6d51a7e3-ac33-4493-b291-38ba0f5dba23/CSE-Newsletter-Vol-15-Issue-1-Feb-2026.pdf",
  },
  ece: {
    heading: "ECHELON — Volume 13 : Issue 1, February 2026",
    url: "/__l5e/assets-v1/ca8cc925-f698-4945-9434-e2488d2ff7c2/ECE-ECHELON-Newsletter-Vol-13-Issue-1-Feb-2026.pdf",
  },
  eee: {
    heading: "AY:2025-26",
    url: "/__l5e/assets-v1/11f3d0c2-f089-4ff1-af1e-dfc3d6f29a6a/EEE-INSPIRE-Newsletter-Vol-11-Issue-1-Jan-2026.pdf",
  },
  me: {
    heading: "MECH TIMES — Volume 12 : Issue 1, February 2026",
    url: "/__l5e/assets-v1/1d88d364-e044-4491-908d-e6ff5d1e42c6/ME-MECH-TIMES-Newsletter-Vol-12-Issue-1-Feb-2026.pdf",
  },
};

function newsletterPrefix(deptSlug: string): string {
  const n = NEW_NEWSLETTERS[deptSlug];
  if (!n) return "";
  return `## Latest Issue\n\n### ${n.heading}\n\n[${n.heading}](${n.url})\n\n`;
}


/** Resolve the best scraped markdown + title for a given dept+canonical key. */
export async function getCanonicalFallback(
  deptSlug: string,
  canonicalKey: string,
): Promise<{ markdown: string; title: string } | null> {
  // Latest-issue prefix is added by the route's normalizeNewsletterMd so that
  // both the placeholder route and the scraped route share the same prepend
  // logic. Keep this helper focused on resolving the best scraped/inline body.
  const prefix = "";
  void newsletterPrefix;
  const candidates = MAP[canonicalKey]?.[deptSlug];
  const inline = INLINE[canonicalKey]?.[deptSlug];
  if (!candidates && !inline) return null;
  const { default: scrapedAll } = await import("@/data/scrapedAll.json");
  const SA = scrapedAll as Record<string, ScrapedEntry>;
  if (candidates) {
    for (const k of candidates) {
      const entry = SA[k];
      const md = entry?.markdown || "";
      // Require usable PDF references — entries scraped as bare PDF.js viewer
      // chrome (no source URL) render an empty grid and must be skipped so we
      // fall through to the inline fallback below.
      if (md.length > 200 && PDF_REF_RE.test(md)) {
        return { markdown: prefix + md, title: entry?.title || "" };
      }
    }
  }
  if (inline) return { markdown: (prefix + inline).trim(), title: "" };
  // Last-resort: return the first non-empty scraped candidate even without
  // PDFs (so the page isn't blank), preserving prior behavior.
  if (candidates) {
    for (const k of candidates) {
      const entry = SA[k];
      if (entry?.markdown && entry.markdown.length > 200) {
        return { markdown: prefix + entry.markdown, title: entry.title || "" };
      }
    }
  }
  return null;

}
