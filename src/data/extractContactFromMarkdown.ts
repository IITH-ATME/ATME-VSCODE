// Extract Contact-Details (Email + researcher IDs) from a scraped
// old-atme faculty markdown page.
//
// Old ATME profile pages embed a "Contact Details" table that looks like:
//
//   **Contact Details**
//   |     |     |
//   | --- | --- |
//   | **Email ID** | [name@atme.edu.in](mailto:name@atme.edu.in) |
//   | **Vidwan ID** | https://vidwan.inflibnet.ac.in/profile/123 |
//   | **Google Scholar ID** | https://scholar.google.com/... |
//   | **Orcid ID** | https://orcid.org/... |
//   | **Scopus ID** |  |
//   | **LinkedIn ID** | https://www.linkedin.com/in/... |
//
// or, on newer profile pages, a 3-column variant where the second cell
// is the official email and the third is a personal email.
//
// This parser walks the markdown row by row, normalises the label, and
// extracts the first useful value (email or http(s) URL). Results plug
// into ContactDetailsTable when facultyExtras has no entry for the id.

export type ExtractedContact = {
  email?: string;
  ids: Record<string, string>;
};

const LABEL_PATTERNS: { label: string; test: RegExp }[] = [
  { label: "Email ID",          test: /(?:^|\b)(?:official\s+)?e[\s-]?mail(?:\s*id)?\b/i },
  { label: "Personal Email",    test: /\bpersonal\s+e[\s-]?mail\b/i },
  { label: "Vidwan ID",         test: /vidw[ae]?an/i },
  { label: "Google Scholar ID", test: /google\s*scholar/i },
  { label: "Scopus ID",         test: /scopus/i },
  { label: "Orcid ID",          test: /orc(id|hid)/i },
  { label: "Web of Science",    test: /web\s*of\s*science|researcher\s*id/i },
  { label: "LinkedIn ID",       test: /linke?d?in/i },
];

// Personal Email must be tested before Email ID, otherwise the generic
// e-mail regex would swallow it.
const orderedLabel = (label: string): typeof LABEL_PATTERNS =>
  /personal/i.test(label)
    ? ([LABEL_PATTERNS[1], LABEL_PATTERNS[0], ...LABEL_PATTERNS.slice(2)] as typeof LABEL_PATTERNS)
    : LABEL_PATTERNS;

const stripFormatting = (s: string) =>
  s
    .replace(/\\\\/g, "")
    .replace(/\\([_*\[\]()])/g, "$1")
    .replace(/\*\*/g, "")
    .replace(/<br\s*\/?>/gi, " ")
    .trim();

const extractFromCell = (cell: string): string | undefined => {
  const c = stripFormatting(cell);
  if (!c || c === "-" || c === "–" || c === "—") return undefined;
  if (/^nil$/i.test(c)) return undefined;

  // mailto: link
  const mailto = c.match(/mailto:([^\s)\]]+)/i);
  if (mailto) return mailto[1].trim();

  // markdown link [label](url)
  const mdLink = c.match(/\[[^\]]*\]\(([^)]+)\)/);
  if (mdLink) {
    const v = mdLink[1].trim();
    if (v.startsWith("mailto:")) return v.replace(/^mailto:/i, "");
    if (/^https?:\/\//i.test(v)) return v;
  }

  // bare URL
  const url = c.match(/https?:\/\/[^\s)\]]+/i);
  if (url) return url[0];

  // bare email
  const email = c.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/);
  if (email) return email[0];

  // plain token (e.g. a numeric Vidwan/Scopus id, or short text)
  // Skip "Official:" / "Personal:" decorations and empty leftovers.
  const cleaned = c.replace(/^(official|personal)\s*:?\s*/i, "").trim();
  if (cleaned.length > 0 && cleaned.length < 80) return cleaned;
  return undefined;
};

export function extractContactFromMarkdown(md: string | undefined): ExtractedContact {
  const result: ExtractedContact = { ids: {} };
  if (!md) return result;

  // 1) Walk markdown table rows: | label | value |
  const rows = md.split(/\r?\n/).filter((l) => /^\s*\|.*\|\s*$/.test(l));
  for (const line of rows) {
    const cells = line
      .split("|")
      .map((c) => c.trim())
      .filter((c, i, arr) => !(i === 0 && c === "") && !(i === arr.length - 1 && c === ""));
    if (cells.length < 2) continue;
    if (cells.every((c) => /^:?-{2,}:?$/.test(c))) continue;

    const label = stripFormatting(cells[0]);
    if (!label) continue;

    const matched = orderedLabel(label).find((p) => p.test.test(label));
    if (!matched) continue;

    let value: string | undefined;
    for (let i = 1; i < cells.length && !value; i++) {
      value = extractFromCell(cells[i]);
    }
    if (!value) continue;
    assign(result, matched.label, value);
  }

  // 2) Walk bullet/list lines: "- **Label**: value" or "- Label: value".
  //    Used by newer scraped profiles where Contact Details is a list.
  const bullets = md.split(/\r?\n/).filter((l) => /^\s*[-*]\s+/.test(l));
  for (let bi = 0; bi < bullets.length; bi++) {
    const line = bullets[bi];

    // Some old-site profiles pack two ID columns onto one source row. Once
    // scraped to bullets that becomes:
    //   - **Web of Science Researcher ID:** **LinkedIn ID**
    //   - <https://www.linkedin.com/in/...>
    // i.e. the second id's own label lands where its value should be (so
    // it would otherwise get assigned to the FIRST id, producing a broken
    // link like .../record/LinkedIn%20ID), and the second id's real value
    // is an orphaned, unlabelled bullet directly below. Detect that shape
    // and re-pair the second label with the following line's value instead.
    const collision = line.match(/^\s*[-*]\s+\*\*([^*]+?):?\*\*\s*\*\*([^*]+?)\*\*\s*$/);
    if (collision) {
      const label2 = stripFormatting(collision[2]);
      const matched2 = orderedLabel(label2).find((p) => p.test.test(label2));
      const nextLine = bullets[bi + 1];
      const nextValueMatch = nextLine?.match(/^\s*[-*]\s+(.+)$/);
      if (matched2 && nextValueMatch) {
        const cleaned = nextValueMatch[1].trim().replace(/^<([^>]+)>\s*$/, "$1");
        const value = extractFromCell(cleaned);
        if (value) {
          assign(result, matched2.label, value);
          bi++; // consume the paired value line too
        }
      }
      continue;
    }

    const m = line.match(/^\s*[-*]\s+(?:\*\*([^*]+?)\*\*|([^:]+?))\s*[:\-]\s*(.+)$/);
    if (!m) continue;
    const label = stripFormatting(m[1] || m[2] || "");
    const rest = (m[3] || "").trim();
    if (!label || !rest) continue;
    const matched = orderedLabel(label).find((p) => p.test.test(label));
    if (!matched) continue;
    // Strip angle brackets used for autolinks: <https://...>
    const cleaned = rest.replace(/^<([^>]+)>\s*$/, "$1");
    const value = extractFromCell(cleaned);
    if (!value) continue;
    assign(result, matched.label, value);
  }

  return result;
}

function assign(result: ExtractedContact, label: string, value: string) {
  if (label === "Email ID") {
    const normalized = value.replace(/@old\.atme\.edu\.in\b/gi, "@atme.edu.in");
    if (!result.email) result.email = normalized;
  } else if (label === "Personal Email") {
    const normalized = value.replace(/@old\.atme\.edu\.in\b/gi, "@atme.edu.in");
    if (!result.ids["Personal Email"]) result.ids["Personal Email"] = normalized;
  } else if (!result.ids[label]) {
    result.ids[label] = value;
  }
}
