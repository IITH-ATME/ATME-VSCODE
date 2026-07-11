// Validation for the per-page PDF mapping.
//
// Reports two classes of issue per page:
//   - "duplicate"   — same PDF URL listed more than once on the same page
//                     (across all of its accordion sections).
//   - "missing"     — PDF URL referenced in the page's markdown body but NOT
//                     attached to any accordion section in the mapping.
//   - "orphan"      — PDF URL listed in the mapping but NOT found in the
//                     page's markdown (likely a typo or stale reference).
//   - "invalid-url" — URL doesn't look like a PDF asset path.
//
// Runs once at module load in dev (browser console) and is also exported so
// it can be called from a build script / test.

import scraped from "@/data/scrapedAll.json";
import { pagePdfSections, type PdfSection } from "@/data/pagePdfSections";

export type PdfIssue =
  | { type: "duplicate"; page: string; url: string; count: number }
  | { type: "missing"; page: string; url: string; label: string }
  | { type: "orphan"; page: string; url: string; section: string }
  | { type: "invalid-url"; page: string; url: string; section: string };

const PDF_URL_RE = /(\/__l5e\/assets-v1\/[^\s"'<>)\]]+\.pdf)|(https?:\/\/[^\s"'<>)\]]+\.pdf)/gi;

function extractPdfUrlsFromMarkdown(md: string): Set<string> {
  const out = new Set<string>();
  let m: RegExpExecArray | null;
  const re = new RegExp(PDF_URL_RE.source, "gi");
  while ((m = re.exec(md))) out.add(m[0]);
  return out;
}

function looksLikePdf(url: string): boolean {
  return /\.pdf(\?.*)?$/i.test(url) && (url.startsWith("/") || /^https?:\/\//i.test(url));
}

export function validatePagePdfSections(): PdfIssue[] {
  const issues: PdfIssue[] = [];
  const data = scraped as unknown as Record<string, { markdown: string }>;

  for (const [pageKey, sections] of Object.entries(pagePdfSections) as [string, PdfSection[]][]) {
    const key = pageKey.replace(/^\/+|\/+$/g, "");
    const page = data[key] || data[key + "/"];
    const bodyUrls = page ? extractPdfUrlsFromMarkdown(page.markdown) : new Set<string>();

    // Count occurrences across all sections on this page.
    const counts = new Map<string, number>();
    for (const sec of sections) {
      for (const p of sec.pdfs) {
        counts.set(p.url, (counts.get(p.url) ?? 0) + 1);
        if (!looksLikePdf(p.url)) {
          issues.push({ type: "invalid-url", page: key, url: p.url, section: sec.title });
        }
        if (page && !bodyUrls.has(p.url)) {
          issues.push({ type: "orphan", page: key, url: p.url, section: sec.title });
        }
      }
    }
    for (const [url, n] of counts) {
      if (n > 1) issues.push({ type: "duplicate", page: key, url, count: n });
    }

    // Body PDFs not attached anywhere.
    const mapped = new Set(sections.flatMap((s) => s.pdfs.map((p) => p.url)));
    for (const url of bodyUrls) {
      if (!mapped.has(url)) {
        issues.push({ type: "missing", page: key, url, label: url.split("/").pop() || url });
      }
    }
  }

  return issues;
}

export function formatPdfIssues(issues: PdfIssue[]): string {
  if (issues.length === 0) return "[pdf-validation] OK — no issues.";
  const byPage = new Map<string, PdfIssue[]>();
  for (const i of issues) {
    const arr = byPage.get(i.page) ?? [];
    arr.push(i);
    byPage.set(i.page, arr);
  }
  let out = `[pdf-validation] ${issues.length} issue(s) across ${byPage.size} page(s):\n`;
  for (const [page, list] of byPage) {
    out += `\n  /p/${page}\n`;
    for (const i of list) {
      if (i.type === "duplicate")
        out += `    • duplicate (×${i.count}): ${i.url}\n`;
      else if (i.type === "missing")
        out += `    • missing from mapping: ${i.url}\n`;
      else if (i.type === "orphan")
        out += `    • mapped in "${i.section}" but not in page body: ${i.url}\n`;
      else if (i.type === "invalid-url")
        out += `    • invalid URL in "${i.section}": ${i.url}\n`;
    }
  }
  return out;
}

// Dev-only auto-run so issues show up in the browser console while editing
// the mapping. Stripped from production by Vite's import.meta.env check.
if (typeof window !== "undefined" && import.meta.env.DEV) {
  const issues = validatePagePdfSections();
  if (issues.length > 0) {
    // eslint-disable-next-line no-console
    console.warn(formatPdfIssues(issues));
  } else {
    // eslint-disable-next-line no-console
    console.info("[pdf-validation] OK — no issues.");
  }
}
