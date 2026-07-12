// Strip unwanted boilerplate that came in from the scraped source pages:
// stray "ip stresser" promo links, "Skip to content" anchors, the inlined
// ATME logo, and the UltimatelySocial sharing icon block.

const STRIP_LINE_PATTERNS: RegExp[] = [
  /^\s*\[ip stresser\]\([^)]*\)\s*$/gim,
  /^\s*\[Skip to content\]\([^)]*\)\s*$/gim,
  /^\s*\[!\[ATME College of Engineering\]\([^)]*\)\]\([^)]*\)\s*$/gim,
  /^\s*!\[ATME College of Engineering\]\([^)]*\)\s*$/gim,
  /^\s*!\[atme[- _]top[- _]logo[^\]]*\]\([^)]*\)\s*$/gim,
  /^\s*!\[[^\]]*\]\(https?:\/\/new\.atme\.edu\.in\/[^)]*atme[- _]top[- _]logo[^)]*\)\s*$/gim,
  // Stock template gallery images that came in from the WordPress theme demo
  // (univet.rstheme.com). They are not real ATME content — strip.
  /^\s*!\[[^\]]*\]\(https?:\/\/univet\.rstheme\.com\/[^)]*\)\s*$/gim,
  /^\s*\[!\[[^\]]*\]\(https?:\/\/univet\.rstheme\.com\/[^)]*\)\]\([^)]*\)\s*$/gim,
  // WordPress admin-ajax placeholder image — appears at the top of some
  // scraped pages and renders as an empty bordered rectangle.
  /^\s*!\[[^\]]*admin-ajax[^\]]*\]\([^)]*\)\s*$/gim,
  /^\s*!\[[^\]]*\]\([^)]*admin-ajax[^)]*\)\s*$/gim,

  /^\s*Social media & sharing icons powered by .*$/gim,

  /^\s*Set Youtube Channel ID\s*$/gim,
  /^\s*Page \d+\s*\/\s*\d+\s*$/gim,
  /^\s*Zoom \d+%\s*$/gim,
  // Social icon image-links (facebook/twitter/youtube/linkedin/instagram share buttons)
  /^\s*\[!\[(?:Facebook|fb-share-icon|X \(Twitter\)|Visit Us|Follow Me|YouTube|LinkedIn|Share|Instagram)\]\([^)]*\)\]\([^)]*\)\s*$/gim,
  /^\s*(?:Facebook|Twitter|YouTube|LinkedIn|Instagram)\s*$/gim,
  // Chaty / WhatsApp chat widget leftovers scraped from the live site
  /^\s*Hide chaty\s*$/gim,
  /^\s*Welcome to ATMECE.*$/gim,
  /^\s*Chat with us to Know more.*$/gim,
  /^\s*\d{1,2}:\d{2}\s*$/gim,
  /^.*chaty_settings.*$/gim,
  /^.*WhatsApp Message(?:undefined)?\s*$/gim,
  /^\s*Social connect\s*$/gim,
  /^\s*X \(Twitter\)\s*$/gim,
  /^\s*Contact us\s*$/gim,
  // Trailing "Contact us" link line scraped from the page footer
  /^\s*\[\s*Contact\s+us\s*\]\([^)]*\)\s*\.?\s*$/gim,
  // "Discover Campus Life" CTA from the WP template demo
  /^\s*\[\s*Discover\s+Campus\s+Life\s*\]\([^)]*\)\s*$/gim,
  // NOTE: do NOT strip banner images here — they are restored full-width by
  // the page renderer. Only strip leftover plain-text caption labels left
  // behind by WordPress sliders/carousels.
  /^\s*Banner[\s\-][\w\s\-]*$/gim,
  /^\s*Banners[-_ ]?\d+[\w\-]*\s*$/gim,
  /^\s*New Banner[-_ ]?\d+[\w\-]*\s*$/gim,
  /^\s*VTU BANNER\s*$/gim,
  /^\s*(?:nba-banner|homebanner[\w\-]*)\s*$/gim,

  // PDF.js viewer UI text leaked from scraped pdf-poster embeds. These render
  // as a long vertical list of viewer toolbar labels with no actual PDF.
  /^\s*×\s*$/gm,
  /^\s*\[?View Fullscreen\]?(?:\([^)]*\))?\s*$/gim,
  /^\s*PDF\.js viewer\s*$/gim,
  /^\s*Thumbnails(?:Document Outline)?(?:Attachments)?(?:Layers)?\s*$/gim,
  /^\s*Current Outline Item\s*$/gim,
  /^\s*Toggle Sidebar\s*$/gim,
  /^\s*Find\s*$/gim,
  /^\s*(?:Previous|Next)\s*$/gim,
  /^\s*Highlight All\s*$/gim,
  /^\s*Match Case\s*$/gim,
  /^\s*Match Diacritics\s*$/gim,
  /^\s*Whole Words\s*$/gim,
  /^\s*Zoom (?:Out|In)\s*$/gim,
  /^\s*Automatic Zoom.*Page Width.*$/gim,
  /^\s*Highlight(?: color)?\s*$/gim,
  /^\s*Thickness\s*$/gim,
  /^\s*Show all\s*$/gim,
  /^\s*(?:Text|Color|Size|Draw|Opacity|Tools)\s*$/gim,
  /^\s*Add or edit images\s*$/gim,
  /^\s*Enter the password to open this PDF file\..*$/gim,
  /^\s*CancelOK\s*$/gim,
  /^\s*(?:File name|File size|Title|Author|Subject|Keywords|Creation Date|Modification Date|Creator|PDF Producer|PDF Version|Page Count|Page Size|Fast Web View):\s*$/gim,
  /^\s*-\s*$/gm,
  /^\s*Close\s*$/gim,
  /^\s*Choose an option.*$/gim,
  /^\s*Add a description\s*$/gim,
  /^\s*Aim for 1-2 sentences.*$/gim,
  /^\s*Mark as decorative\s*$/gim,
  /^\s*This is used for ornamental images.*$/gim,
  /^\s*CancelSave\s*$/gim,
  /^\s*Edit alt text.*$/gim,
  /^\s*Short description for people.*$/gim,
  /^\s*This alt text was created automatically.*$/gim,
  /^\s*Create alt text automatically\s*$/gim,
  /^\s*Downloading alt text AI model.*$/gim,
  /^\s*Couldn[\u2018\u2019'`\u02bc]?t create alt text.*$/gim,
  /^\s*Choose an option.*alt text.*$/gim,
  /^\s*alternative text.*$/gim,
  /^\s*CancelNot nowSave\s*$/gim,
  /^\s*Image alt text settings\s*$/gim,
  /^\s*Automatic alt text\s*$/gim,
  /^\s*Suggests descriptions.*$/gim,
  /^\s*Alt text AI model.*$/gim,
  /^\s*Runs locally on your device.*$/gim,
  /^\s*DeleteDownload\s*$/gim,
  /^\s*Alt text editor\s*$/gim,
  /^\s*Show alt text editor right away.*$/gim,
  /^\s*Helps you make sure all your images.*$/gim,
  /^\s*Preparing document for printing.*$/gim,
  /^\s*⁨\d+⁩%\s*$/gim,
  /^\s*Cancel\s*$/gim,
  /^\s*Loading\.{3}\s*$/gim,
  // Additional PDF.js / WordPress viewer leftovers seen on achievement /
  // industry-interface pages: standalone toolbar labels that escape our
  // existing patterns.
  /^\s*(?:Save|OK|Tools|Draw|Color|Size|Text|Opacity|Thickness)\s*$/gim,
  /^\s*\[Download File\]\([^)]*pdfjs-new\/web\/viewer\.html[^)]*\)\s*$/gim,
  // Additional PDF.js toolbar leftovers (concatenated button labels).
  /^\s*Add image\s*$/gim,
  /^\s*OpenPrintSave\s*$/gim,
  /^\s*Presentation Mode(?:PrintSave)?\s*$/gim,
  /^\s*Presentation Mode\s*\[Current Page\]\([^)]*\)\s*$/gim,
  /^\s*Go to First PageGo to Last Page\s*$/gim,
  /^\s*Rotate ClockwiseRotate Counterclockwise\s*$/gim,
  /^\s*Text Selection ToolHand Tool\s*$/gim,
  /^\s*Page ScrollingVertical ScrollingHorizontal ScrollingWrapped Scrolling\s*$/gim,
  /^\s*No SpreadsOdd SpreadsEven Spreads\s*$/gim,
  /^\s*Document Properties\u2026?\s*$/gim,
  /^\s*TextDrawAdd or edit images\s*$/gim,
  /^\s*Current Page\s*$/gim,
  // WordPress DataTable widget UI leftovers (search box, pagination labels)
  /^\s*Items per page\s*\d[\d]*All\s*$/gim,
  /^\s*Search:\s*$/gim,
  /^\s*\d+\s*-\s*\d+\s+of\s+\d+\s*$/gim,
  // Stray banner/image-filename captions that leaked from the source CMS
  // (e.g. "privacyPolicyBanner", "previous arrow", "next arrow").
  /^\s*privacyPolicyBanner\s*$/gim,
  /^\s*(?:previous|next)\s+arrow\s*$/gim,
  /^\s*<Base64-Image-Removed>\s*$/gim,
  // Stray image-filename slugs that leaked from the source CMS
  // (e.g. "training-banner", "admin-ajax").
  /^\s*[a-z0-9]+(?:[-_][a-z0-9]+)+\s*$/gim,
  // WordPress wp-table-reloaded shortcode leftover from old pages —
  // renders as a lone "\" after markdown escapes the brackets. Strip
  // wherever it appears; the empty-section pass below drops the now-empty heading.
  /\\?\[\s*table\s+["']?\d+["']?\s+not\s+found[^\]]*\\?\]/gi,

];




export function sanitizeMarkdown(md: string): string {
  let out = md;

  // Reflow "vertical" GFM tables: some scraped pages emit each table cell as
  // its own paragraph, with `| ` lines between cells and a `---|---|---`
  // separator marking the column count. Collapse each block into a proper
  // GFM table.
  {
    const lines = out.split("\n");
    const sepRe = /^-{3,}(\s*\|\s*-{3,})+\s*$/;
    const pipeOnlyRe = /^\|\s*$/;
    const stripCell = (parts: string[]): string => {
      const cleaned = parts
        .map((s) =>
          s
            .replace(/^#{1,6}\s*/, "")
            .replace(/\*\*/g, "")
            .trim(),
        )
        .filter((s) => s !== "");
      return cleaned.join("<br/>");
    };
    const result: string[] = [];
    let i = 0;
    while (i < lines.length) {
      const trimmed = lines[i].trim();
      if (!sepRe.test(trimmed)) {
        result.push(lines[i]);
        i++;
        continue;
      }
      const nCols = trimmed.split("|").length;
      // Walk back through emitted lines to gather header cells.
      const collected: string[][] = [];
      let cur: string[] = [];
      let consumed = 0;
      let k = result.length - 1;
      const emptyHeadingRe = /^#{1,6}\s*$/;
      const tableBreakRe = /^#{1,6}\s*\*+\s*$/;

      while (k >= 0 && collected.length < nCols) {
        const t = result[k].trim();
        if (pipeOnlyRe.test(t)) {
          if (cur.length) {
            collected.push(cur.slice().reverse());
            cur = [];
          }
        } else if (t === "") {
          // skip blank
        } else if (emptyHeadingRe.test(t) || tableBreakRe.test(t)) {
          // Empty heading / section break — boundary.
          if (cur.length) {
            collected.push(cur.slice().reverse());
            cur = [];
          }
          break;

        } else if (/^#{1,4}\s/.test(t)) {
          break;
        } else if (sepRe.test(t)) {
          break;
        } else if (/^\|/.test(t)) {
          break;
        } else {
          // If we already have nCols-1 cells via `|` and cur already holds a
          // header line, the next content line above is a section title — stop.
          if (collected.length === nCols - 1 && cur.length >= 1) {
            collected.push(cur.slice().reverse());
            cur = [];
            break;
          }
          cur.push(t);
        }
        k--;
        consumed++;
      }
      if (cur.length && collected.length < nCols) {
        collected.push(cur.slice().reverse());
      }
      if (collected.length !== nCols) {
        result.push(lines[i]);
        i++;
        continue;
      }

      result.length = result.length - consumed;
      const headerCells = collected.reverse().map(stripCell);
      if (result.length && result[result.length - 1].trim() !== "") {
        result.push("");
      }
      result.push("| " + headerCells.join(" | ") + " |");
      result.push("| " + new Array(nCols).fill("---").join(" | ") + " |");
      // Forward: collect body cells until a heading or another separator.
      i++;
      const bodyCells: string[] = [];
      cur = [];
      const flush = () => {
        if (cur.length) {
          bodyCells.push(stripCell(cur));
          cur = [];
        }
      };
      // (emptyHeadingRe defined above)
      let lastHadHardBreak = false;
      while (i < lines.length) {
        const raw = lines[i];
        const t = raw.trim();
        if (sepRe.test(t)) break;
        if (/^#{1,4}\s/.test(t)) break;
        if (tableBreakRe.test(t)) {
          // `###### ****` — explicit table-end marker between sub-tables.
          flush();
          i++;
          break;
        }

        if (pipeOnlyRe.test(t)) {
          flush();
          lastHadHardBreak = false;
        } else if (emptyHeadingRe.test(t)) {
          flush();
          lastHadHardBreak = false;
        } else if (t === "") {
          // skip
        } else if (/^\|/.test(t)) {
          break;
        } else {
          // Trailing two-space hard break on the previous content line marks
          // a cell boundary when no `|` follows (e.g. toppers tables where
          // rows aren't pipe-terminated).
          if (lastHadHardBreak && cur.length) flush();
          cur.push(t);
          lastHadHardBreak = /  $/.test(raw);
        }
        i++;
      }

      if (cur.length) flush();

      while (bodyCells.length && bodyCells[bodyCells.length - 1] === "") {
        bodyCells.pop();
      }
      for (let r = 0; r < bodyCells.length; r += nCols) {
        const row = bodyCells.slice(r, r + nCols);
        while (row.length < nCols) row.push("");
        if (row.every((c) => !c)) continue;
        result.push("| " + row.join(" | ") + " |");
      }
      result.push("");
    }
    out = result.join("\n");
  }


  // Reflow flattened GFM tables: scraped pages sometimes collapse an entire
  // table onto a single line like
  //   "| h1 | h2 | h3 | | --- | --- | --- | | a1 | a2 | a3 | | b1 | b2 | b3 |"
  // Detect the separator run "--- | --- | ..." to recover column count, then
  // split the line into proper header / separator / body rows.
  out = out
    .split("\n")
    .flatMap((line) => {
      if (!/\|\s*-{3,}\s*\|\s*-{3,}/.test(line)) return [line];
      // Split into cells, preserving boundaries
      const raw = line.trim();
      const cells = raw.replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
      // Find a contiguous run of "---" cells = column count
      let sepStart = -1;
      let sepEnd = -1;
      for (let i = 0; i < cells.length; i++) {
        if (/^:?-{3,}:?$/.test(cells[i])) {
          if (sepStart === -1) sepStart = i;
          sepEnd = i;
        } else if (sepStart !== -1) {
          break;
        }
      }
      if (sepStart === -1) return [line];
      const nCols = sepEnd - sepStart + 1;
      if (nCols < 2) return [line];
      // Header = the nCols cells immediately before separator
      const headerStart = sepStart - nCols;
      if (headerStart < 0) return [line];
      const header = cells.slice(headerStart, sepStart);
      const body = cells.slice(sepEnd + 1);
      const rows: string[] = [];
      const lead = cells.slice(0, headerStart).filter((c) => c !== "");
      if (lead.length) rows.push(lead.join(" "));
      rows.push("");
      rows.push("| " + header.join(" | ") + " |");
      rows.push("| " + new Array(nCols).fill("---").join(" | ") + " |");
      for (let i = 0; i < body.length; i += nCols) {
        const row = body.slice(i, i + nCols);
        while (row.length < nCols) row.push("");
        if (row.every((c) => c === "")) continue;
        rows.push("| " + row.join(" | ") + " |");
      }
      rows.push("");
      return rows;
    })
    .join("\n");


  // Strip the breadcrumb chain that prefixes every scraped page:
  //   [ATME College of Engineering](...)[About us](...)About College
  out = out.replace(
    /^\s*\[ATME College of Engineering\]\([^)]*\)(?:\s*\[[^\]]+\]\([^)]*\))*[^\n]*$/gim,
    "",
  );
  // Strip the duplicated "ATMECE Inside" / "Inside" mini-nav block — already
  // shown in our left sidebar. Removes the H5 + immediate bullet list.
  out = out.replace(
    /^#{2,6}\s+(?:ATMECE\s+Inside|Inside\s+ATMECE|Quick\s+Links)\s*$\n(?:^\s*[-*]\s+.*$\n?)+/gim,
    "",
  );
  // Collapse "S  p  a  c  e  d" stylized headings back to normal words.
  // Original spacing: ~4 spaces between letters, ~8 between words.
  out = out.replace(/^(#{1,6}\s+)(.+)$/gm, (_m, h, rest) => {
    if (/(?:\b[A-Za-z]\s{2,}){4,}[A-Za-z]\b/.test(rest)) {
      const collapsed = rest.replace(/([A-Za-z])(\s{2,})(?=[A-Za-z]\b)/g, (_x: string, c: string, sp: string) =>
        c + (sp.length >= 6 ? " " : ""),
      );
      return h + collapsed;
    }
    return h + rest;
  });

  for (const re of STRIP_LINE_PATTERNS) out = out.replace(re, "");

  // Some scraped pages emit a full sentence as a heading (the WordPress theme
  // styled the opening paragraph like a title), e.g.
  //   "## Youth4work and AICTE have entered into discussions for a
  //    collaboration to facilitate iob and Internship Opportunities ... ;"
  // Real headings are short labels and never end in sentence punctuation —
  // demote anything long AND sentence-punctuated back to a plain paragraph so
  // it renders at body size instead of as an oversized, title-cased heading.
  out = out.replace(/^(#{2,6})\s+(.+)$/gm, (m, _hashes: string, rest: string) => {
    const t = rest.trim();
    const words = t.split(/\s+/).length;
    if (words > 12 && /[.,;:!]$/.test(t)) return t;
    return m;
  });

  // Newsletter / archive paragraphs sometimes come through as a flat run of
  // "Academic Year 2025-26**  Academic Year 2024-25**  Academic Year 2023-24**"
  // (each year was a bolded link/heading on the source page, but the scraper
  // dropped the leading `**` and the trailing `**` became literal text).
  // Promote each "Academic Year YYYY-YY" segment to its own H4 line.
  out = out.replace(
    /(?:\*\*\s*)?Academic Year\s+(\d{4}-\d{2,4})\s*\*\*\s*/g,
    "\n#### Academic Year $1\n",
  );
  // Strip orphan/unpaired `**` markers that the scrape leaked. Run per-line so
  // a missing close on one line doesn't accidentally eat real bold on another.
  out = out
    .split("\n")
    .map((line) => {
      if (/^\s*\|/.test(line)) return line; // table cells handled separately
      const count = (line.match(/\*\*/g) || []).length;
      if (count % 2 === 0) return line;
      // Odd number of `**` — remove all of them on this line.
      return line.replace(/\*\*/g, "");
    })
    .join("\n");


  // Stray bold around punctuation, e.g. "Dr **.** Uma Mahesh" → "Dr. Uma Mahesh"
  // and "Mrs **.**Kumudha" → "Mrs. Kumudha"; the scraper drops the actual word
  // but leaves the bolded period/comma behind.
  out = out.replace(/\*\*\s*([.,:;])\s*\*\*/g, "$1 ");
  // Collapse two adjacent bold runs that the scraper concatenated, e.g.
  //   "**Industry Partner:****Vivartan Technologies LLP.**"
  // → "**Industry Partner:** **Vivartan Technologies LLP.**"
  out = out.replace(/\*\*([^*\n]+?)\*\*\*\*([^*\n]+?)\*\*/g, "**$1** **$2**");
  // Heading-link trailing fragment: scraped headings come in as
  //   "### [Toppers List](https://.../#)" — the trailing "#" / "\#" anchor
  // is a placeholder accordion id that the WP theme used. Drop the link
  // wrapper so headings render as plain text.
  out = out.replace(
    /^(#{1,6}\s+)\[([^\]]+)\]\([^)]*[\\]?#[^)]*\)\s*$/gm,
    "$1$2",
  );
  // Strip stray escape backslashes that survived the markdown parse, e.g.
  // "Dr\\. Foo" → "Dr. Foo" (but keep escaped pipes inside table cells).
  out = out.replace(/\\([.,;:!?])/g, "$1");


  out = out
    // Common UTF-8-as-Latin1 mojibake
    .replace(/â€"/g, "—")
    .replace(/â€"/g, "–")
    .replace(/â€˜/g, "'")
    .replace(/â€™/g, "'")
    .replace(/â€œ/g, '"')
    .replace(/â€\u009d/g, '"')
    .replace(/â€¦/g, "…")
    .replace(/Â /g, " ")
    .replace(/Â/g, "")
    .replace(/â‚¹/g, "₹")
    // Whitespace + smart punctuation
    .replace(/\u00a0/g, " ")
    .replace(/[\u2000-\u200b]/g, " ")
    .replace(/[\u2013\u2014]/g, "–")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/\u2026/g, "…")
    .replace(/\ufffd/g, "")
    // Strip zero-width + BOM
    .replace(/[\u200c\u200d\ufeff]/g, "");
  // Normalise degree-name spellings for uniform rendering across faculty pages.
  // "M.Tech" / "M-Tech" / "M Tech" → "MTech"; "B.E." / "B.E" → "BE"; "Ph.D" → "PhD".
  out = out
    .replace(/\bM[.\-\s]?Tech\b/g, "MTech")
    .replace(/\bM[.\-\s]?\s?Sc\b/g, "MSc")
    .replace(/\bB[.\-\s]?Tech\b/g, "BTech")
    .replace(/\bB\.E\.?\b/g, "BE")
    .replace(/\bPh[.\-]?\s?D\.?\b/g, "PhD")
    .replace(/PhD\s*\(\s*pursuing\s*\)/gi, "Pursuing PhD")
    .replace(/\(\s*PhD\s+pursuing\s*\)/gi, "(Pursuing PhD)")
    .replace(/\bPursuing\s+Ph\.?D\b/gi, "Pursuing PhD")
    // Scrub accidental duplicated words ("detailed detailed", "the the").
    // Restricted to single-line whitespace only — `\s+` would also match
    // blank lines and incorrectly merge an unrelated heading/paragraph pair
    // that happen to start/end with the same word (e.g. a "## Youth4work"
    // heading immediately followed by a paragraph starting "Youth4work ...").
    .replace(/\b(\w{4,})[ \t]+\1\b/gi, "$1");
  // Collapse 3+ blank lines
  out = out.replace(/\n{3,}/g, "\n\n");
  // Fix scraped GFM tables whose header row is empty (| | | |) followed by
  // the real bolded headers in the first body row. We swap the empty header
  // for that bolded row so there's no leftover empty teal stripe.
  // IMPORTANT: this MUST run before the cell-level `**` stripping below,
  // otherwise the bold markers we use to identify the promoted row are gone.
  {
    const lines = out.split("\n");
    const isTableRow = (l: string) => /^\s*\|/.test(l);
    const isSeparator = (l: string) =>
      /^\s*\|?\s*:?-{2,}:?(\s*\|\s*:?-{2,}:?)+\s*\|?\s*$/.test(l);
    const cellsOf = (l: string) =>
      l
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((c) => c.trim());
    for (let i = 0; i < lines.length - 2; i++) {
      if (!isTableRow(lines[i]) || !isSeparator(lines[i + 1])) continue;
      const headerCells = cellsOf(lines[i]);
      const allEmpty = headerCells.every((c) => c === "");
      if (!allEmpty) continue;
      // Skip "merged title" rows after the separator — a single bolded
      // cell row like `| **ACADEMIC COUNCIL MEMBERS** |` that the source
      // uses as an in-table title above the real headers. Duplicate of
      // the H4 above; breaks column layout.
      let j = i + 2;
      while (j < lines.length) {
        if (lines[j].trim() === "") { j++; continue; }
        if (!isTableRow(lines[j])) break;
        const cc = cellsOf(lines[j]).filter((x) => x !== "");
        const isMergedTitle = cc.length === 1;
        if (isMergedTitle) { lines.splice(j, 1); continue; }
        break;
      }
      if (j >= lines.length || !isTableRow(lines[j])) continue;
      const bodyCells = cellsOf(lines[j]);
      // Accept either fully-bold cells (**Header**) OR a header-like row
      // where every non-empty cell is short label text (no digits-only,
      // no date, no long sentence). This catches headers that already
      // lost their `**` markers from prior sanitisation.
      const allBold = bodyCells.every((c) => /^\*\*.+\*\*$/.test(c) || c === "");
      const looksLikeHeader =
        bodyCells.length === headerCells.length &&
        bodyCells.some((c) => c !== "") &&
        bodyCells.every((c) => {
          if (c === "") return true;
          const t = c.replace(/\*\*/g, "").trim();
          if (!t) return true;
          if (/^\d/.test(t)) return false; // starts with digit → data
          if (/\d{2,}/.test(t)) return false; // has multi-digit number → data
          if (t.length > 40) return false; // long → data
          return true;
        });
      if (!allBold && !looksLikeHeader) continue;
      const promoted = bodyCells.map((c) =>
        c.replace(/^\*\*/, "").replace(/\*\*$/, "").trim()
      );
      lines[i] = "| " + promoted.join(" | ") + " |";
      lines.splice(j, 1); // remove the now-duplicated bolded row
      i = j - 1;
    }
    out = lines.join("\n");
  }

  // Clean markdown table cells: scraped tables include leading "####" / "#####"
  // heading syntax inside each cell, which GFM renders literally. Strip them
  // and promote stray <br> text to real line-breaks inside cells.
  out = out
    .split("\n")
    .map((line) => {
      if (!/^\s*\|/.test(line)) return line;
      let cleaned = line;
      // Normalise any encoded / literal <br> variants to a real `<br/>` so
      // rehype-raw renders them as line breaks inside cells instead of
      // collapsing multi-line content (office bearers, resource persons,
      // date ranges) into one long run-on sentence.
      cleaned = cleaned.replace(/&lt;\s*br\s*\/?\s*&gt;|<\s*br\s*\/?\s*>/gi, "<br/>");
      // Strip stray heading hashes anywhere inside a cell (after pipes OR
      // after a former <br>), e.g. "Director ##### SWRO".
      cleaned = cleaned.replace(/(^|\|\s*|\s)#{1,6}(\s+)/g, "$1$2");
      // Drop &nbsp; HTML entities so they don't render as literal text.
      cleaned = cleaned.replace(/&nbsp;/gi, " ");
      // Strip leading bullet glyphs / list markers that leaked into a cell.
      cleaned = cleaned.replace(/(\|\s*)[-*•·]\s+/g, "$1");
      // Strip stray/orphan `**` markers inside table cells (e.g. "**Sl No.",
      // "**Name of the Faculty"). The scraper sometimes drops the closing
      // `**` so we just remove all `**` runs inside cells and let the header
      // styling provide the visual emphasis instead.
      cleaned = cleaned.replace(/(\|[^|]*)/g, (cell) => cell.replace(/\*\*/g, ""));
      // Rename standalone "Year" / "Year-wise" column labels to
      // "Academic Year" / "Academic Year-wise" — only when the cell value
      // is exactly that word (skips "Year of Joining", "First Year", etc.).
      cleaned = cleaned.replace(/(\|\s*)Year(\s*\|)/gi, "$1Academic Year$2");
      cleaned = cleaned.replace(/(\|\s*)Year[-\s]wise(\s*\|)/gi, "$1Academic Year-wise$2");
      // Collapse runs of whitespace introduced by the above replacements.
      cleaned = cleaned.replace(/[ \t]{2,}/g, " ");
      return cleaned;
    })
    .join("\n");


  // Reshape malformed GFM tables where body rows have FEWER cells than the
  // header (scraped tables collapse "merged" header columns into just the
  // value column on subsequent rows). Pad missing cells so the rightmost
  // value stays in the rightmost column, and forward-fill empty middle
  // columns from the previous non-empty value so the renderer can merge
  // duplicate cells with rowspan.
  {
    const lines = out.split("\n");
    const isRow = (l: string) => /^\s*\|/.test(l);
    const isSeparator = (l: string) =>
      /^\s*\|?\s*:?-{2,}:?(\s*\|\s*:?-{2,}:?)+\s*\|?\s*$/.test(l);
    const cellsOf = (l: string) =>
      l.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
    let i = 0;
    while (i < lines.length - 1) {
      if (!isRow(lines[i]) || !isSeparator(lines[i + 1])) { i++; continue; }
      const headerCells = cellsOf(lines[i]);
      const nCols = headerCells.length;
      // Find a "Name"-like column to fold continuation rows into (rowspan
      // collapses in scraped HTML).
      const nameColIdx = headerCells.findIndex((h) =>
        /name|student|faculty|title|member|author|topic/i.test(h)
      );
      let lastFullRowIdx = -1;
      let j = i + 2;
      while (j < lines.length && (isRow(lines[j]) || lines[j].trim() === "")) {
        if (isRow(lines[j]) && lines[j + 1] && isSeparator(lines[j + 1])) break;
        if (isSeparator(lines[j])) break;
        if (lines[j].trim() === "") { j++; continue; }
        const bc = cellsOf(lines[j]);
        if (bc.every((c) => c === "")) { lines.splice(j, 1); continue; }
        if (bc.length < nCols) {
          // Continuation row from a rowspan'd source cell. Fold its cells
          // into the previous full row's Name column (one entry per line)
          // and drop this row so the table stays rectangular.
          if (lastFullRowIdx >= 0 && nameColIdx >= 0) {
            const prev = cellsOf(lines[lastFullRowIdx]);
            const extra = bc.filter((c) => c && c !== "–" && c !== "-").join(" — ");
            if (extra) {
              prev[nameColIdx] = (prev[nameColIdx] + " / " + extra).trim();
              lines[lastFullRowIdx] = "| " + prev.join(" | ") + " |";
            }
          }
          lines.splice(j, 1);
          continue;
        }
        // Pad to exactly nCols (right-pad with empties) so the GFM parser
        // keeps the table rectangular.
        if (bc.length > nCols) bc.length = nCols;
        lines[j] = "| " + bc.join(" | ") + " |";
        lastFullRowIdx = j;
        j++;
      }
      i = j;
    }
    out = lines.join("\n");
  }


  // Drop stray image-filename caption labels left behind by WordPress
  // sliders (e.g. an image whose URL ends in `Stationary.jpg` followed
  // by a bare "Stationary" paragraph). The next non-blank line is the
  // image's basename without extension/separators — pure noise.
  {
    const lines = out.split("\n");
    const imgRe = /!\[[^\]]*\]\(([^)\s]+\.(?:jpe?g|png|webp|gif))(?:\s+"[^"]*")?\)/i;
    const normalize = (s: string) =>
      s.toLowerCase().replace(/[^a-z0-9]/g, "");
    const keep = new Array(lines.length).fill(true);
    for (let i = 0; i < lines.length; i++) {
      const m = lines[i].match(imgRe);
      if (!m) continue;
      const url = m[1];
      const base = url.split("/").pop()!.replace(/\.[a-z0-9]+$/i, "");
      const baseNorm = normalize(base);
      if (!baseNorm) continue;
      let j = i + 1;
      while (j < lines.length && lines[j].trim() === "") j++;
      while (j < lines.length && lines[j].trim() !== "" && !/^[#>|`*\-!\[]/.test(lines[j].trim())) {
        const txtNorm = normalize(lines[j]);
        if (txtNorm && baseNorm.includes(txtNorm) && txtNorm.length >= 3) {
          keep[j] = false;
          j++;
        } else break;
      }
    }
    out = lines.filter((_, i) => keep[i]).join("\n").replace(/\n{3,}/g, "\n\n");
  }

  // Promote short, label-like paragraph lines that immediately precede a
  // bullet/ordered list to a level-4 heading, so visual headings like
  // "Teachers' Benefits" or "Students' Benefits" actually render as headings.
  {
    const lines = out.split("\n");
    const isListStart = (l: string) => /^\s*([-*+]\s+|\d+\.\s+)/.test(l);
    const isHeadingOrBlock = (l: string) =>
      /^(#{1,6}\s|>|\||`{3}|!\[|\[|<)/.test(l.trim());
    for (let i = 0; i < lines.length - 2; i++) {
      const line = lines[i];
      const t = line.trim();
      if (!t) continue;
      if (isHeadingOrBlock(t)) continue;
      if (isListStart(t)) continue;
      // Single-line paragraph: previous line blank (or start), next line blank.
      const prev = i === 0 ? "" : lines[i - 1].trim();
      const next = lines[i + 1]?.trim() ?? "";
      if (prev !== "" || next !== "") continue;
      // Find the next non-blank line; must be a list.
      let j = i + 2;
      while (j < lines.length && lines[j].trim() === "") j++;
      if (j >= lines.length || !isListStart(lines[j])) continue;
      // Label-like: short, no trailing punctuation, no markdown links/images.
      if (t.length > 60) continue;
      if (/[.!?:]$/.test(t)) continue;
      if (/[\[\]()`*_~]/.test(t)) continue;
      const wordCount = t.split(/\s+/).length;
      if (wordCount > 8) continue;
      lines[i] = `#### ${t.replace(/^\*+|\*+$/g, "").trim()}`;
    }
    out = lines.join("\n");
  }


  // Drop headings whose entire body (until the next heading) is empty after
  // the strips above — leaves no orphan "Governing Council (GC)" + empty box.
  {
    const lines = out.split("\n");
    const isHeading = (l: string) => /^#{1,6}\s+/.test(l);
    // Year-like headings (e.g. "#### [AY 2025-26](...)", "## 2024-2025",
    // "### Dynamics-2025") are structural group labels — keep them even when
    // they sit directly above another heading with no body between.
    const isYearHeading = (l: string) => /^#{1,6}\s.*\b(?:AY\s*)?20\d{2}\b/i.test(l);
    const keep = new Array(lines.length).fill(true);
    for (let i = 0; i < lines.length; i++) {
      if (!isHeading(lines[i])) continue;
      if (isYearHeading(lines[i])) continue;
      let j = i + 1;
      let hasContent = false;
      while (j < lines.length && !isHeading(lines[j])) {
        if (lines[j].trim() !== "") { hasContent = true; break; }
        j++;
      }
      if (!hasContent) keep[i] = false;
    }
    out = lines.filter((_, i) => keep[i]).join("\n");
    out = out.replace(/\n{3,}/g, "\n\n");
  }


  return out.trim();
}
