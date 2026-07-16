// Dedicated parser for atme.edu.in faculty profile markdown.
//
// The scraped pages use deeply nested WordPress tables that confuse the
// general-purpose sanitizer (it forward-fills "Email ID" into every row).
// This parser walks the raw markdown directly: it pulls out the inner
// table cells, recognizes section headings by keyword, and skips identity
// rows already rendered in the page header card.

export type FacultyProfileItem = { num: number | null; text: string; columns?: string[] };
export type FacultyProfileSection = { title: string; items: FacultyProfileItem[] };

// Headings that should become rendered sections.
const SECTION_HEADINGS: string[] = [
  "Qualification",
  "Education Details",
  "Areas of Interest",
  "Professional Experience",
  "Employment Record",
  "Publication Details",
  "Publications Details",
  "Publications",
  "International Book Chapter Publications",

  "Membership in Professional Bodies",
  "Professional body membership",
  "FDPs/Conferences/Workshops/STTP/MOOC Certification",
  "FDPs/Conferences/Workshops/STTP/MOOC Certification/Online Courses",
  "FDPs / Conferences / Workshops / STTP / MOOC Certification",
  "FDPs / Conferences / Workshops / STTP / MOOC Certification / Online Courses",
  "MOOC Certification",
  "Certifications",
  "Honours/Awards/Achievements",
  "Honours / Awards / Achievements",
  "Achievements",
  "Awards",
  "Proposal/Funding/Project Financial Assistance",
  "Funding",
  "Funding Projects",
  "Patents",
  "Patent",
  "National Patents",
  "International Patents",
  "National Patent",
  "International Patent",
  "Roles and Responsibilities: Institute Level",
  "Roles and Responsibilities: Department Level",
  "Roles and Responsibilities",
  "Roles and Responsibility",
  "Institute Level Roles",
  "Department Level Roles",
  "Institute Level",
  "Department Level",
  "Research and Ph.D Guidance",
  "Research area of Interest",
  "Subjects Taught",
  "Research Areas",
  "Research Areas of Interest",
  "Workshops",
  "Conferences",
  "International Journals",
  "National Journals",
  "International / National Conferences",
  "International/ National Conferences",
  "International / National Conference",
  "National Conferences",
  "International Conferences",
  "Journals",
  "Books",
  "Book Chapters",
  "Book/ Book Chapter Published",
  "Book / Book Chapter Published",
  "Book Chapter Published",
];

// Headings/labels that should be skipped (already shown in the header card).
const SKIP_HEADINGS = [
  "Faculty Profile",
  "Faculty Name",
  "Name",
  "Designation",
  "Program",
  "Department",
  "Contact Details",
  "Academic Details", // title-only row; the real headings come after
  "Date of Joining",
  "Date of Joining Institution",
  "Total Experience",
  "Total Experience in Years",
  "Present Address",
  "E-mail",
  "Mobile Number",
  "Email ID",
  "Official",
  "Personal",
  "Vidwan ID",
  "Google Scholar ID",
  "Scopus ID",
  "Orcid ID",
  "Web of Science Researcher ID",
  "Web of Science",
  "LinkedIn ID",
  "LinkedIn",
];

// Patterns of stand-alone content cells to drop (identity & contact rows
// that survive without a leading heading because the source row was
// multi-column).
const SKIP_CONTENT_RE = [
  /^teaching\s*:?\s*\d/i,
  /^research\s*:?\s*\d/i,
  /^industry\s*:?\s*\d/i,
  /^teaching\s*:?\s*nil/i,
  /^research\s*:?\s*nil/i,
  /^industry\s*:?\s*nil/i,
  /^official\s*:/i,
  /^personal\s*:/i,
  /^mobile(\s+number)?\s*:/i,
  /^email\s*id\s*$/i,
  /^vidwan(\s+id)?\s*:?\s*$/i,
  /^google\s*scholar(\s+id)?\s*:?\s*$/i,
  /^scopus(\s+id)?\s*:?\s*$/i,
  /^orcid(\s+id)?\s*:?\s*$/i,
  /^web\s*of\s*science(\s+researcher)?(\s+id)?\s*:?\s*$/i,
  /^linkedin(\s+id)?\s*:?\s*$/i,
  /^https?:\/\/(scholar\.google|orcid\.org|vidwan|linkedin|webofscience|researcherid|scopus)/i,
  /^\d{6,}$/, // bare vidwan numeric id
  /^\*{0,2}\s*\d{1,4}\s*\*{0,2}$/, // publication-count cells from table headers (e.g. "1", "**15**", "5")
  /^nil\s*$/i,
  /^—\s*$/,
  /^-\s*$/,
  /^[\*\-_\s•]+$/,  // horizontal-rule artifacts like "* * *", "---", "***"

];

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\\/]/g, "\\$&");
// Allow flexible whitespace around slashes/colons so headings like
// "Honours/Awards/ Achievements" (stray space) still match
// "Honours/Awards/Achievements".
const flexWs = (s: string) => escapeRe(s).replace(/\\\//g, "\\s*\\/\\s*").replace(/\s+/g, "\\s+");
const SECTION_ALT = SECTION_HEADINGS.map(flexWs).join("|");
const SKIP_ALT = SKIP_HEADINGS.map(escapeRe).join("|");

const HEADING_RE = new RegExp(`^\\*{0,2}\\s*(${SECTION_ALT})\\s*:?\\s*\\*{0,2}\\s*$`, "i");
const HEADING_INLINE_RE = new RegExp(`^\\*{0,2}\\s*(${SECTION_ALT})\\s*:?\\s*\\*{0,2}\\s*[:\\-]?\\s*(.*)$`, "i");
const SKIP_LABEL_RE = new RegExp(`^\\*{0,2}\\s*(${SKIP_ALT})\\s*[:\\-]?\\s*.*$`, "i");


/** Strip bold markers, leading/trailing punctuation. */
function cleanCell(raw: string): string {
  let s = raw.trim();
  s = s.replace(/&nbsp;/gi, " ");
  // Collapse adjacent bold markers like ** **
  s = s.replace(/\*\*\s*\*\*/g, "");
  // Trim outer pipes that may have leaked in
  s = s.replace(/^\|+|\|+$/g, "").trim();
  return s;
}

/** Extract optional leading number marker. */
function extractItem(raw: string): FacultyProfileItem {
  let s = cleanCell(raw);
  // Strip stray leading bullet/asterisk/dash artifacts that survived from the
  // scraped markdown ("* * Foo", "• Foo", "- - Foo") — each artifact char
  // must be followed by whitespace to count, so a real "- **Bold Text**"
  // bullet doesn't have its opening ** mistaken for two stray bullet stars
  // and eaten (leaving a dangling, unmatched trailing ** that later breaks
  // heading detection downstream).
  s = s.replace(/^(?:[\-•]\s+|\*\s+){1,3}/, "").trim();
  const boldNum = s.match(/^\*\*\s*(\d{1,3})\s*[.\])]\s*\*\*\s*(.*)$/);
  if (boldNum) return { num: parseInt(boldNum[1], 10), text: boldNum[2].trim() };
  const plainNum = s.match(/^(\d{1,3})\s*[.\])]\s+(.*)$/);
  if (plainNum) return { num: parseInt(plainNum[1], 10), text: plainNum[2].trim() };
  const dash = s.match(/^[-*•]\s+(.*)$/);
  if (dash) return { num: null, text: dash[1].trim() };
  return { num: null, text: s };
}

type RawCell = { text: string; columns?: string[] };

/** Pull all rendered "cells" out of a markdown block. */
function extractCells(md: string): RawCell[] {
  // Drop the noisy header anchor & images.
  let text = md;
  text = text.replace(/^\[\]\([^)]*\)\s*$/gim, "");
  text = text.replace(/^!\[[^\]]*\]\([^)]*\)\s*$/gim, "");
  text = text.replace(/^\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\)\s*$/gim, "");
  // Strip escape backslashes that survived.
  text = text.replace(/\\([.,;:!?[\]_])/g, "$1");

  const cells: RawCell[] = [];
  for (const rawLine of text.split(/\r?\n/)) {
    // Expand <br> into newlines only now — after real line breaks have
    // already isolated each table row. Doing this globally beforehand (the
    // previous approach) let a <br> inside one cell of a multi-column row
    // get mistaken for the end of that row, splitting a single logical row
    // (e.g. a two-column Patent table) across multiple bogus "rows" and
    // producing garbled, duplicated content.
    const ln = rawLine.replace(/<br\s*\/?>/gi, "\n").trim();
    if (!ln) continue;
    // Table separator like `| --- | --- |`
    if (/^\|?\s*(:?-{3,}:?\s*\|?\s*)+$/.test(ln)) continue;
    // Pure pipe row
    if (/^\|+\s*$/.test(ln)) continue;

    if (ln.startsWith("|") && ln.includes("|")) {
      const parts = ln
        .split("|")
        .map((c) => c.trim())
        .filter((c) => c.length > 0 && c !== "---");
      if (parts.length === 0) continue;
      if (parts.length === 1) {
        for (const sub of parts[0].split(/\n+/).map((s) => s.trim()).filter(Boolean)) {
          cells.push({ text: sub });
        }
        continue;
      }
      // Multi-column table row: keep columns aligned so the renderer can
      // lay them out as a small responsive grid instead of flattening into
      // one bullet per cell. <br>-expanded sub-rows are emitted as sibling
      // row-cells, each carrying its own column array.
      const subRows: string[][] = [];
      let maxLen = 1;
      for (const p of parts) {
        const subs = p.split(/\n+/).map((s) => s.trim());
        subRows.push(subs);
        if (subs.length > maxLen) maxLen = subs.length;
      }
      for (let i = 0; i < maxLen; i++) {
        const cols = subRows.map((col) => (col[i] ?? "").trim());
        if (cols.every((c) => !c)) continue;
        // Always preserve the columns array so the renderer can align cells
        // even when a row only fills one column (e.g. rowspan-collapsed rows).
        cells.push({ text: cols.filter(Boolean).join(" — "), columns: cols });
      }
    } else {
      cells.push({ text: ln });
    }
  }
  return cells;
}

/** Decide whether a cell is purely identity/contact noise. */
function isSkipCell(cell: string): boolean {
  const c = cell.trim();
  if (!c) return true;
  if (SKIP_LABEL_RE.test(c)) return true;
  for (const re of SKIP_CONTENT_RE) if (re.test(c)) return true;
  return false;
}

/** Strip leading bold so the heading matcher can find the keyword. */
function unbold(c: string): string {
  return c.replace(/^\*+\s*|\s*\*+\s*$/g, "").trim();
}

/** Short title-cased standalone line — likely a sub-section heading. */
function isLikelySubheading(raw: string): boolean {
  const s = raw.replace(/^\*+|\*+$/g, "").trim();
  if (!s || s.length > 60) return false;
  // No terminal sentence punctuation; no commas (lists/citations); no urls.
  if (/[.,;]\s*$/.test(s)) return false;
  if (/[,;]/.test(s)) return false;
  if (/https?:\/\//i.test(s)) return false;
  if (/^\d/.test(s)) return false;
  const words = s.split(/\s+/);
  if (words.length < 1 || words.length > 6) return false;
  // Most words should start with uppercase or be short connectors.
  const isCap = (w: string) => /^[A-Z]/.test(w) || /^(of|and|the|in|for|to|on|at|&)$/i.test(w);
  const capCount = words.filter(isCap).length;
  return capCount / words.length >= 0.6;
}

/** Main entry. */
export function parseFacultyProfile(rawMd: string): FacultyProfileSection[] {
  const cells = extractCells(rawMd);
  const sections: FacultyProfileSection[] = [];
  let current: FacultyProfileSection | null = null;

  const open = (title: string) => {
    // Coalesce repeated headings
    if (current && current.title.toLowerCase() === title.toLowerCase()) return;
    current = { title, items: [] };
    sections.push(current);
  };

  // Recognize generic markdown headings (### ...) and bold-only list items
  // (- **Heading**) as section openers even when not in SECTION_HEADINGS.
  const genericHeading = (raw: string): string | null => {
    let s = raw.trim();
    const atx = s.match(/^#{1,6}\s+(.+?)\s*#*\s*$/);
    if (atx) {
      // ATX heading. Strip a markdown link wrapper [Text](url) if present.
      let h = atx[1].trim();
      const link = h.match(/^\[([^\]]+)\]\([^)]+\)\s*$/);
      if (link) h = link[1].trim();
      h = h.replace(/^\*\*\s*|\s*\*\*$/g, "").replace(/:$/, "").trim();
      if (h.length >= 3 && h.length <= 120) return h;
    }
    // Strip a leading bullet marker only for the ATX path; for bold/colon
    // generic headings, require the line to NOT start with a list marker so
    // `- **Diploma (...)**` stays a bullet rather than becoming a heading.
    if (/^\s*[-•]\s+/.test(s)) return null;
    s = s.replace(/^#{1,6}\s+/, "").trim();
    const bold = s.match(/^\*\*\s*([^*]+?)\s*\*\*\s*:?\s*$/);
    if (bold) return bold[1].trim().replace(/:$/, "").trim();
    const colon = s.match(/^([A-Z][^:*\n]{2,100}):\s*$/);
    if (colon) return colon[1].trim();
    return null;
  };

  for (const rawCell of cells) {
    const cell = cleanCell(rawCell.text);
    if (!cell) continue;

    // Heading-only cell
    const bare = unbold(cell);
    const headMatch = bare.match(HEADING_RE);
    if (headMatch) {
      open(headMatch[1]);
      continue;
    }
    // Bulleted line whose payload is a recognized section heading — promote
    // it to a new section rather than leaving it stranded as a list item
    // under the previous section (overrides often dump sub-section labels
    // like `- Research Areas of Interest`, `- Publications Details`,
    // `- International Journals:` as bullets).
    const bulletStrip = cell.match(/^[-*•]\s+(.+)$/);
    if (bulletStrip) {
      const inner = unbold(bulletStrip[1]).replace(/[:.]\s*$/, "").trim();
      const m = inner.match(HEADING_RE);
      if (m) {
        open(m[1]);
        continue;
      }
    }
    // Heading followed by inline content in the same cell
    const inline = bare.match(HEADING_INLINE_RE);
    if (inline && inline[2]?.trim()) {
      open(inline[1]);
      const rest = inline[2].trim();
      if (rest && current) (current as FacultyProfileSection).items.push(extractItem(rest));
      continue;
    }

    // Generic heading — open as its own section (single-column cells only).
    if (!rawCell.columns || rawCell.columns.length <= 1) {
      const generic = genericHeading(cell);
      if (generic && generic.length <= 120) {
        if (SKIP_LABEL_RE.test(generic)) {
          // Recognized boilerplate heading (Contact Details, Faculty Profile,
          // etc.). Close the current section so its trailing rows don't get
          // folded into the previous canonical section.
          current = null;
          continue;
        }
        open(generic);
        continue;
      }
      // Contextual sub-heading: inside a Patents / Roles / Publications
      // parent, promote short title-cased lines that look like actual headings
      // (bolded or ending with colon/dash) to their own sub-section so
      // "National Patents", "International Patents", etc. don't get swept into
      // the prior bullet list. Plain labels like "QS I-GAUGE Institute" that
      // sit between bullets should stay as list items.
      const headerLike = (c: string) => /^\*+\s*[^*]+\s*\*+$/.test(c.trim()) || /[:\-]\s*$/.test(c.trim());
      if (
        current &&
        /patent|role|publication|conference|fdp|workshop|funding|award|honour/i.test((current as FacultyProfileSection).title) &&
        isLikelySubheading(cell) &&
        headerLike(cell)
      ) {
        open(cell.replace(/^(?:[*\-•]\s*)+/, "").replace(/[:\-]\s*$/, "").trim());
        continue;
      }
    }

    // Skip identity rows.
    if (isSkipCell(cell)) continue;

    // Content cell — append to current section if any.
    if (!current) continue;
    const item = extractItem(cell);
    if (rawCell.columns && rawCell.columns.length > 1) {
      item.columns = rawCell.columns.map((c) => cleanCell(c));
    }
    (current as FacultyProfileSection).items.push(item);
  }

  // Drop empty sections and dedupe items within each section.
  const out: FacultyProfileSection[] = [];
  for (const s of sections) {
    const seen = new Set<string>();
    const items: FacultyProfileItem[] = [];
    for (const it of s.items) {
      const k = it.text.toLowerCase().replace(/\s+/g, " ").trim();
      if (!k || seen.has(k)) continue;
      seen.add(k);
      items.push(it);
    }
    // Keep section even when items are empty so downstream consumers can
    // still track the section title (e.g. to fold a following subheading
    // like "Committee Member for 20-21" into the parent "Roles and
    // Responsibilities" card).
    out.push({ title: s.title, items });
  }
  return out;
}
