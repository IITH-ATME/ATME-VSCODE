// Page-specific PDF accordion mapping.
//
// Maps a page slug (the splat used by /p/$) to an ordered list of accordion
// sections. Each section has a title and the PDFs that should appear inside
// it. PDF URLs may be:
//   - rehosted assets:  "/__l5e/assets-v1/...pdf"
//   - absolute URLs:    "https://..."
//
// The page renderer (src/routes/p.$.tsx) looks up the current slug here and,
// if a mapping exists, renders an accordion with PdfThumbCard grids inside
// each section instead of the flat Documents grid.
//
// To attach PDFs for a new page:
//   1. Add an entry below keyed by the page's slug (no leading/trailing "/").
//   2. List sections in display order with a clear, user-facing title.
//   3. Put each PDF under the section it belongs to with a friendly label.

export type PdfRef = { url: string; label: string };
export type PdfSection = { title: string; description?: string; pdfs: PdfRef[] };

export const pagePdfSections: Record<string, PdfSection[]> = {
  // Example — replace / extend per page as content is curated.
  //
  // "about-us/about-college": [
  //   {
  //     title: "Statutory Approvals",
  //     pdfs: [
  //       { url: "/__l5e/assets-v1/aicte-approval.pdf", label: "AICTE Approval" },
  //       { url: "/__l5e/assets-v1/vtu-affiliation.pdf", label: "VTU Affiliation" },
  //     ],
  //   },
  //   {
  //     title: "NAAC & NBA",
  //     pdfs: [
  //       { url: "/__l5e/assets-v1/naac-certificate.pdf", label: "NAAC Certificate" },
  //     ],
  //   },
  // ],
};

function normalizeKey(key: string): string {
  return key.replace(/^\/+|\/+$/g, "").toLowerCase();
}

const normalized: Record<string, PdfSection[]> = Object.fromEntries(
  Object.entries(pagePdfSections).map(([k, v]) => [normalizeKey(k), v]),
);

export function getPdfSectionsForPage(key: string): PdfSection[] | null {
  const k = normalizeKey(key);
  return normalized[k] ?? null;
}
