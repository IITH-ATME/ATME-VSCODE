import React, { useRef } from "react";
// react-markdown's default urlTransform allows http(s)/mailto but strips
// tel: (and a few other legitimate schemes), silently blanking any
// `<a href="tel:...">` in our curated page bodies. Mirror its XSS-relevant
// blocklist (javascript:/data:/vbscript:) but otherwise pass URLs through
// unchanged — safe here since this content comes from our own curated data,
// not arbitrary user input.
const UNSAFE_URL_SCHEME_RE = /^\s*(javascript|data|vbscript):/i;
function safeUrlTransform(url: string): string {
  return UNSAFE_URL_SCHEME_RE.test(url) ? "" : url;
}
import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Layout, PageHero } from "@/components/site/Layout";
import { PdfEmbed } from "@/components/site/PdfEmbed";
import { PdfThumbCard } from "@/components/site/PdfThumbCard";
import { sanitizeMarkdown } from "@/data/sanitizeMarkdown";
import { pdfFromAtmeUrl, rewritePdfUrls } from "@/data/pdfRewrite";
import { rewriteImageSrc } from "@/data/imageRewrite";
import imageAssets from "@/data/imageAssets.json";
import { ArrowLeft, FileText, ChevronRight } from "lucide-react";
import { findSectionForSlug } from "@/lib/navStructure";
import { SectionTabNav } from "@/components/site/SectionTabNav";
import { getHubForSplat } from "@/lib/hubTabs";
import { getPdfSectionsForPage } from "@/data/pagePdfSections";
import { DocSectionTabs } from "@/components/site/DocSectionTabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TabbedAccordion } from "@/components/site/TabbedAccordion";
import { RecruiterLogoGrid } from "@/components/site/RecruiterLogoGrid";
import { SeminarAuditoriumGallery } from "@/components/site/SeminarAuditoriumGallery";
import { GreenCampusGallery } from "@/components/site/GreenCampusGallery";
import { MagazineGrid } from "@/components/site/MagazineGrid";
import { SolarRooftopGallery } from "@/components/site/SolarRooftopGallery";
import { AboutCollegeExtras } from "@/components/site/AboutCollegeExtras";
import { LibraryStaffPhotos } from "@/components/site/LibraryStaffPhotos";
import { resolveAssetUrl } from "@/lib/assetUrl";

import { SECTION_BANNER, type SectionKey } from "@/lib/sectionBanners";
import campusBanner from "@/assets/college-infra.jpg.asset.json";

type Page = { title: string; description?: string; markdown: string; sourceURL: string };

// Dev-only PDF-mapping validation (console warnings while editing
// pagePdfSections.ts). Dynamically imported so scrapedAll.json — which this
// check needs — is never pulled into the production client bundle; the
// import.meta.env.DEV guard lets Vite tree-shake this whole block in prod.
if (typeof window !== "undefined" && import.meta.env.DEV) {
  import("@/data/validatePagePdfSections");
}

// Nav menu slugs that don't match the scraped slug 1:1 — alias them so links
// land on the correct content instead of the "coming soon" stub.
const SLUG_ALIASES: Record<string, string> = {
  "administration/governance-institutional-support-and-financial-resources":
    "nba-governance_institutional-_support-and-financial-resources",
  "administration/calendar-of-events-coe": "coe-all",
  "administration/pf-esi-gratuity-insurance": "insurance-staff",
  "best-teacher": "best-teacher-awards",
  "iic": "institutions-innovation-council-iic",
  "a-ims": "administration/a-ims",
  "infrastructure":
    "career-guidance-and-placement-cell/career-guidance-placement-cell-infrastructure",
  "ed-cell": "career-guidance-and-placement-cell/entrepreneurship-development-cell",
  "about-us/chairmans-message": "about-us/chairmans-message-2",
  "admissions/general-information": "general-information",
};

export const Route = createFileRoute("/p/$")({
  loader: async ({ params }) => {
    const { default: scraped } = await import("@/data/scrapedAll.json");
    const DATA = scraped as unknown as Record<string, Page>;
    const splat = (params as { _splat?: string })._splat || "";
    const key = splat.replace(/^\/+|\/+$/g, "");
    // Removed: consolidated "about-us/affiliations-approvals" landing page.
    if (/^about-us\/affiliations-approvals$/.test(key)) {
      throw notFound();
    }
    // Removed: Library Finds page — its "Find Your Resources" card now
    // lives on the Library About page.
    if (/^library-3\/library-finds$/.test(key)) {
      throw redirect({ to: "/p/$", params: { _splat: "library-3/library" } });
    }
    const aliased = SLUG_ALIASES[key];
    let page =
      DATA[key] ||
      DATA[key + "/"] ||
      DATA[decodeURIComponent(key)] ||
      (aliased ? DATA[aliased] : undefined);

    const { getBodyOverride, UG_FEES_URL: ugFeesUrl } = await import("@/data/pageBodyOverrides");
    const overrideBody = getBodyOverride(key);

    if (!page) {
      // Stub fallback: render a generic "info coming soon" page so card links
      // never produce a hard 404 while content is being curated.
      const title = key
        .split("/").pop()!
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      const stub: Page = {
        title: title || "ATME",
        description: `${title} at ATME College of Engineering, Mysuru.`,
        markdown: `## ${title}\n\nDetailed information for **${title}** at ATME College of Engineering will be published here shortly.`,
        sourceURL: "",
      };
      return { page: stub, key, overrideBody, ugFeesUrl };
    }
    return { page, key, overrideBody, ugFeesUrl };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.page.title || loaderData.key} — ATME` },
      { name: "description", content: loaderData.page.description || `${loaderData.page.title} — ATME College of Engineering, Mysuru.` },
    ] : [],
  }),
  notFoundComponent: () => (
    <Layout>
      <PageHero title="Page not found" subtitle="The requested page does not exist." />
      <div className="container-page pb-20">
        <Link to="/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
      </div>
    </Layout>
  ),
  errorComponent: () => (
    <Layout><PageHero title="Something went wrong" subtitle="We couldn't load this page. Please try again or go back home." /></Layout>
  ),
  component: RehostedPage,
});

// Rewrite generic table-row PDF link text ("LINK", "Click here", "View",
// "Download" …) to use the row's first descriptive cell so that the
// resulting PdfEmbed cards have meaningful titles ("AISHE 2020-2021"
// instead of ten cards all called "LINK").
function relabelTablePdfLinks(md: string): string {
  return md.replace(/^\|(.+)\|\s*$/gm, (rowLine) => {
    const cells = rowLine.split("|").map((c) => c.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1);
    if (cells.length < 2) return rowLine;
    // Find the first non-link cell with descriptive text.
    const isPdfLinkCell = (c: string) => /\[[^\]]+\]\((?:https?:\/\/[^)\s]+|\/__l5e\/assets-v1\/[^)\s]+)\.pdf(?:\?[^)\s]*)?\)/i.test(c);
    const descCell = cells.find((c) => c && !isPdfLinkCell(c) && !/^[-:\s]+$/.test(c));
    const desc = descCell?.replace(/[*_`]/g, "").replace(/\s+/g, " ").trim();
    if (!desc) return rowLine;
    return rowLine.replace(
      /\[([^\]]+)\]\(((?:https?:\/\/[^)\s]+|\/__l5e\/assets-v1\/[^)\s]+)\.pdf(?:\?[^)\s]*)?)\)/gi,
      (_full, label: string, url: string) => {
        if (/^(link|click here|click|download|view|open|pdf|document|here)$/i.test(label.trim())) {
          return `[${desc}](${url})`;
        }
        return `[${label}](${url})`;
      },
    );
  });
}

function extractPdfs(md: string): { url: string; label: string }[] {
  const out: { url: string; label: string }[] = [];
  const seen = new Set<string>();
  const re = /\[([^\]]+)\]\(((?:https?:\/\/[^)\s]+|\/__l5e\/assets-v1\/[^)\s]+)\.pdf(?:\?[^)\s]*)?)\)/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(md))) {
    if (!seen.has(m[2])) { seen.add(m[2]); out.push({ label: m[1], url: m[2] }); }
  }
  const re2 = /(\/__l5e\/assets-v1\/[^\s"'<>)\]]+\.pdf|https?:\/\/[^\s"'<>)\]]+\.pdf)/gi;
  while ((m = re2.exec(md))) {
    if (!seen.has(m[1])) { seen.add(m[1]); out.push({ label: m[1].split("/").pop() || "Document", url: m[1] }); }
  }
  return out;
}


function extractHeadings(md: string): { id: string; text: string; level: number }[] {
  const out: { id: string; text: string; level: number }[] = [];
  const re = /^(#{2,3})\s+(.+)$/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(md))) {
    const text = m[2].replace(/[*_`]/g, "").trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    out.push({ id, text, level: m[1].length });
  }
  return out;
}

function RehostedPage() {
  const { page, key, overrideBody, ugFeesUrl } = Route.useLoaderData();
  const sourceMd = overrideBody ?? page.markdown;
  // Rewrite atme.edu.in / new.atme / old.atme image and PDF URLs to their
  // rehosted CDN copies (falls back to old.atme.edu.in for images we haven't
  // mirrored yet so we never serve a broken atme.edu.in URL).
  const rewriteMdImages = (md: string) =>
    md
      .replace(
        /(!\[[^\]]*\]\()(https?:\/\/[^\s)]+\.(?:jpe?g|png|gif|webp|svg))(\s+"[^"]*")?\)/gi,
        (_m, pre, url, title) => `${pre}${rewriteImageSrc(url) || url}${title || ""})`,
      )
      .replace(
        /(<img[^>]+src=")(https?:\/\/[^"]+\.(?:jpe?g|png|gif|webp|svg))(")/gi,
        (_m, pre, url, post) => `${pre}${rewriteImageSrc(url) || url}${post}`,
      );
  const cleaned = rewriteMdImages(rewritePdfUrls(relabelTablePdfLinks(sanitizeMarkdown(sourceMd))));
  // Lift the first markdown image to a top banner ONLY when it looks like
  // an actual page banner from new.atme.edu.in (wide slide, "banner" in
  // alt/src, or a numbered slide like /1.jpg, /banner-2.jpg). Otherwise
  // leave it inline so portraits float next to body text.
  const bannerCandidateRe =
    /!\[([^\]]*)\]\(((?:https?:\/\/[^)\s]+\/__l5e\/assets-v1|\/__l5e\/assets-v1)\/[^)\s]+\.(?:jpe?g|png|webp))(?:\s+"[^"]*")?\)/i;
  const firstImgMatch = cleaned.match(bannerCandidateRe);
  const looksLikeBanner = (alt: string, src: string) => {
    const a = alt.toLowerCase();
    const s = src.toLowerCase();
    return (
      /banner|cover|hero|slide|home[-_]?|naac|nabl|vtu|admissions|ranked|medal/.test(a) ||
      /banner|home[-_]?|slide|naac|nabl|vtu|admissions|ranked|medal|\/\d+\.(?:jpe?g|png|webp)$/.test(s)
    );
  };
  // For Campus Life and Placements pages, always promote the first inline
  // image to the hero banner (instead of using the shared section fallback),
  // so each page shows its own contextual photo.
  const bannerCtx = findSectionForSlug(key);
  const isCampusLife = bannerCtx?.section.key === "campus";
  const isPlacements = bannerCtx?.section.key === "placements";
  const promoteFirstImg = isCampusLife || isPlacements;
  const bannerImg =
    firstImgMatch &&
    (promoteFirstImg || looksLikeBanner(firstImgMatch[1] || "", firstImgMatch[2]))
      ? { alt: firstImgMatch[1] || "", src: firstImgMatch[2], raw: firstImgMatch[0] }
      : null;
  // Strip markdown tables whose body rows consist ENTIRELY of PDF links
  // (or text that came from such links). After the PDF-anchor strip below,
  // these collapse into rows of duplicated year/title labels that mirror the
  // "Documents & Downloads" grid below — pure noise.
  const stripPdfOnlyTables = (md: string): string => {
    const lines = md.split("\n");
    const isRow = (l: string) => /^\s*\|/.test(l);
    const isSep = (l: string) =>
      /^\s*\|?\s*:?-{2,}:?(\s*\|\s*:?-{2,}:?)+\s*\|?\s*$/.test(l);
    const cellsOf = (l: string) =>
      l.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
    const out: string[] = [];
    let i = 0;
    while (i < lines.length) {
      if (isRow(lines[i]) && i + 1 < lines.length && isSep(lines[i + 1])) {
        const start = i;
        let j = i + 2;
        const bodyRows: string[][] = [];
        while (j < lines.length && (isRow(lines[j]) || lines[j].trim() === "")) {
          if (lines[j].trim() === "") { j++; continue; }
          bodyRows.push(cellsOf(lines[j]));
          j++;
        }
        const pdfRe = /\[[^\]]+\]\((?:https?:\/\/[^)\s]+|\/__l5e\/assets-v1\/[^)\s]+)\.pdf(?:\?[^)\s]*)?\)/i;
        const allPdfRows = bodyRows.length >= 1 && bodyRows.every((row) => {
          const filled = row.filter((c) => c !== "");
          return filled.length > 0 && filled.every((c) => pdfRe.test(c));
        });
        if (allPdfRows) {
          // Drop the entire table block (header + separator + body rows).
          i = j;
          continue;
        }
        // Keep table.
        for (let k = start; k < j; k++) out.push(lines[k]);
        i = j;
        continue;
      }
      out.push(lines[i]);
      i++;
    }
    return out.join("\n").replace(/\n{3,}/g, "\n\n");
  };

  // Body markdown: keep PDF links inline as clickable anchors. Lift banner.
  let bodyMd = cleaned;
  if (bannerImg) {
    bodyMd = bodyMd.replace(bannerImg.raw, "").replace(/^\s*\n/, "");
  }

  // Events: the scraped "EVENT INFO" block's trailing "Website:" bullet is a
  // self-link back to this same page (scraped as a bare `/p/` href) rather
  // than a real external link — drop it from every event page.
  if (key.startsWith("event/")) {
    bodyMd = bodyMd.replace(/^-\s*Website:.*$\n?/gim, "");
    // The scraped source sometimes runs "Download Brochure"/"Download
    // Poster" straight into whatever follows with no separator at all
    // (e.g. "...Brochure**![](icon)**...Poster**"). Force each onto its
    // own line so they never render as one glued run-on phrase.
    bodyMd = bodyMd.replace(/(\*\*Download (?:Brochure|Poster)\*\*)(?=\S)/gi, "$1\n\n");
  }

  // Clubs & Associations: clean redundant department-group bold labels that
  // sit right above their `#### [<NAME>](/p/clubs-associations)` heading, fix
  // broken tables where the separator has one fewer column than the body
  // rows, and promote each per-year "Activities under … (YYYY-YY)" /
  // "<X> CLUB REPORT YYYY-YY" bold caption into a nested accordion heading.
  if (key === "clubs-associations") {
    const lines = bodyMd.split("\n");
    // 1) Remove a standalone bold line that immediately precedes a
    //    `#### [...](/p/clubs-associations)` heading.
    for (let i = 0; i < lines.length - 2; i++) {
      const t = lines[i].trim();
      if (!/^\*\*[^*]+\*\*$/.test(t)) continue;
      let j = i + 1;
      while (j < lines.length && lines[j].trim() === "") j++;
      if (j < lines.length && /^#{2,6}\s+\[[^\]]+\]\(\/p\/clubs-associations\)\s*$/.test(lines[j])) {
        lines[i] = "";
      }
    }
    // 2) Promote per-year activity captions to nested accordion headings.
    let yearIdx = 0;
    for (let i = 0; i < lines.length; i++) {
      const t = lines[i].trim();
      const m =
        t.match(/^\*\*Activities under [^(]+\(([^)]+)\)\*\*$/i) ||
        t.match(/^\*\*[A-Z][A-Z &'\-]+ (?:CLUB|SOCIETY|FORUM) (?:REPORT|ACTIVITIES) (\d{4}-\d{2,4})\*\*$/i) ||
        t.match(/^\*\*Computer Society of India Student Chapter Activities (\d{4}-\d{2,4})\*\*$/i);
      if (!m) continue;
      const label = m[1].trim();
      lines[i] = `#### [${label}](/p/clubs-associations#year-${yearIdx++})`;
    }
    bodyMd = lines.join("\n");
    // 3) Fix tables where the header separator has fewer columns than body rows.
    {
      const ls = bodyMd.split("\n");
      const isRow = (l: string) => /^\s*\|/.test(l);
      const isSep = (l: string) =>
        /^\s*\|?\s*:?-{2,}:?(\s*\|\s*:?-{2,}:?)+\s*\|?\s*$/.test(l);
      const cellsOf = (l: string) =>
        l.trim().replace(/^\|/, "").replace(/\|$/, "").split("|");
      for (let i = 0; i + 1 < ls.length; i++) {
        if (!isRow(ls[i]) || !isSep(ls[i + 1])) continue;
        const headerCount = cellsOf(ls[i]).length;
        const sepCount = cellsOf(ls[i + 1]).length;
        let maxBody = headerCount;
        for (let j = i + 2; j < ls.length; j++) {
          if (ls[j].trim() === "") continue;
          if (!isRow(ls[j])) break;
          maxBody = Math.max(maxBody, cellsOf(ls[j]).length);
        }
        if (maxBody > headerCount) {
          const pad = maxBody - headerCount;
          ls[i] = ls[i].replace(/\|?\s*$/, " |" + " |".repeat(pad));
        }
        if (maxBody > sepCount) {
          const pad = maxBody - sepCount;
          ls[i + 1] = ls[i + 1].replace(/\|?\s*$/, " --- |" + " --- |".repeat(pad - 1));
        }
      }
      bodyMd = ls.join("\n");
    }
  }

  // E-Resources: the 3 "Subscribed Tools" logos render as a dedicated card
  // grid below (SUBSCRIBED_TOOLS) instead of the generic single-image
  // "gallery" layout, which stretches small square logos full-width and
  // crops them with object-cover. Strip the raw logo/caption lines here so
  // they aren't also rendered inline by the normal markdown flow.
  if (key === "library-3/e-resources-vtu-consortium-2") {
    bodyMd = bodyMd
      .replace(/\[!\[\]\(\/images\/library\/(?:vtu-consortium-logo\.png|drillbit-logo\.jpg|quiklrn-logo\.png)\)\]\([^)]+\)\n\n/g, "")
      .replace(/#### \*\*(?:MAP MY ACCESS|Remote Access tool|DRILLBIT|Plagiarism Check tool|QUICKLRN|Language learning tool)\*\*\n\n/g, "")
      .replace(/\n{3,}/g, "\n\n");
  }

  // Convert WordPress `[pdfviewer ...]URL[/pdfviewer]` shortcodes and
  // pdf-poster "Download File / View Fullscreen" blocks into inline PDF
  // embeds. Each match becomes a `<!--PDF_EMBED_n-->` marker that the
  // renderer expands into a <PdfEmbed/>.
  const pdfEmbeds: { url: string; title?: string }[] = [];
  const pushEmbed = (url: string, title?: string) => {
    const idx = pdfEmbeds.push({ url, title }) - 1;
    return `\n\n<!--PDF_EMBED_${idx}-->\n\n`;
  };
  bodyMd = bodyMd.replace(
    /\\?\[\s*pdfviewer\b[^\]]*\\?\]\s*([^\s\\\[\]]+?\.pdf(?:\?[^\s\\\[\]]*)?)\s*\\?\[\s*\/\s*pdfviewer\s*\\?\]/gi,
    (_m, url: string) => pushEmbed(url.trim()),
  );
  bodyMd = bodyMd.replace(
    /\[\s*Download\s+File\s*\]\((https?:\/\/[^)\s]+\.pdf|\/__l5e\/assets-v1\/[^)\s]+\.pdf)\)\s*\[\s*View\s+Fullscreen\s*\]\([^)]*\)/gi,
    (_m, url: string) => pushEmbed(url.trim()),
  );


  // Extract tables whose rows contain PDF links → render as thumbnail grids
  // (one grid per table) and strip the table from the body so the table view
  // doesn't show alongside the grid.
  type PdfGrid = { heading?: string; items: { title: string; url: string }[] };
  const pdfGrids: PdfGrid[] = [];
  {
    const lines = bodyMd.split("\n");
    const isRow = (l: string) => /^\s*\|/.test(l);
    const isSep = (l: string) =>
      /^\s*\|?\s*:?-{2,}:?(\s*\|\s*:?-{2,}:?)+\s*\|?\s*$/.test(l);
    const cellsOf = (l: string) =>
      l.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
    const pdfLinkRe = /\[([^\]]+)\]\(((?:https?:\/\/[^)\s]+|\/__l5e\/assets-v1\/[^)\s]+)\.pdf(?:\?[^)\s]*)?)\)/i;
    const out: string[] = [];
    let i = 0;
    while (i < lines.length) {
      if (isRow(lines[i]) && i + 1 < lines.length && isSep(lines[i + 1])) {
        const start = i;
        let j = i + 2;
        const bodyRows: string[][] = [];
        while (j < lines.length && (isRow(lines[j]) || lines[j].trim() === "")) {
          if (lines[j].trim() === "") { j++; continue; }
          bodyRows.push(cellsOf(lines[j]));
          j++;
        }
        const everyRowHasPdf = bodyRows.length >= 1 && bodyRows.every((row) =>
          row.some((c) => pdfLinkRe.test(c)),
        );
        if (everyRowHasPdf) {
          const items: { title: string; url: string }[] = [];
          for (const row of bodyRows) {
            const pdfCell = row.find((c) => pdfLinkRe.test(c))!;
            const m = pdfCell.match(pdfLinkRe)!;
            const nonPdfCells = row.filter((c) => c && !pdfLinkRe.test(c) && !/^[-:\s]+$/.test(c) && !/^\*?\*?\d+\.?\*?\*?$/.test(c.trim()));
            const descCell = nonPdfCells.sort((a, b) => b.length - a.length)[0];
            const title = (descCell || m[1]).replace(/[*_`]/g, "").trim();
            items.push({ title, url: m[2] });
          }
          // Heading: nearest prior non-empty, non-table line that looks like a heading.
          let heading: string | undefined;
          for (let k = out.length - 1; k >= 0; k--) {
            const t = out[k].trim();
            if (!t) continue;
            const hm = t.match(/^#{1,6}\s+(.+)$/);
            if (hm) { heading = hm[1].replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").trim(); }
            break;
          }
          pdfGrids.push({ heading, items });
          // Replace table block with a placeholder marker line.
          out.push(`<!--PDF_GRID_${pdfGrids.length - 1}-->`);
          i = j;
          continue;
        }
        for (let k = start; k < j; k++) out.push(lines[k]);
        i = j;
        continue;
      }
      out.push(lines[i]);
      i++;
    }
    bodyMd = out.join("\n");
  }

  // About / Admissions / Administration: surface every inline PDF link as a
  // visible embed (single) or thumbnail grid (multiple) grouped under its
  // nearest preceding heading — instead of a small clickable text anchor
  // that users frequently miss.
  {
    const sectionKeyForPdfs = bannerCtx?.section.key;
    const promotePdfs =
      sectionKeyForPdfs === "about" ||
      sectionKeyForPdfs === "admissions" ||
      sectionKeyForPdfs === "administration" ||
      sectionKeyForPdfs === "research";
    if (promotePdfs) {
      const lines = bodyMd.split("\n");
      const pdfLinkRe =
        /\[([^\]]+)\]\(((?:https?:\/\/[^)\s]+|\/__l5e\/assets-v1\/[^)\s]+)\.pdf(?:\?[^)\s]*)?)\)/gi;
      type FoundPdf = { url: string; title: string; lineIdx: number; raw: string };
      type SectionBucket = { pdfs: FoundPdf[] };
      const buckets: SectionBucket[] = [{ pdfs: [] }];
      let cur = buckets[0];
      lines.forEach((line, idx) => {
        if (/^#{1,6}\s+/.test(line)) {
          cur = { pdfs: [] };
          buckets.push(cur);
          return;
        }
        if (/^\s*\|/.test(line)) return; // skip table rows
        pdfLinkRe.lastIndex = 0;
        let m: RegExpExecArray | null;
        while ((m = pdfLinkRe.exec(line))) {
          const title = m[1].replace(/[*_`]/g, "").replace(/\s+/g, " ").trim();
          const isGeneric =
            /^(link|click here|click|download|view|open|pdf|document|here)$/i.test(title);
          const filename = (m[2].split("/").pop() || "Document")
            .replace(/\.pdf(\?.*)?$/i, "")
            .replace(/[-_]+/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());
          cur.pdfs.push({
            url: m[2],
            title: isGeneric || !title ? filename : title,
            lineIdx: idx,
            raw: m[0],
          });
        }
      });
      const lineMarkers: Record<number, string[]> = {};
      const dropLineIfEmpty = new Set<number>();
      buckets.forEach((bucket) => {
        if (bucket.pdfs.length === 0) return;
        const seen = new Set<string>();
        const uniq = bucket.pdfs.filter((p) =>
          seen.has(p.url) ? false : (seen.add(p.url), true),
        );
        bucket.pdfs.forEach((p) => {
          const before = lines[p.lineIdx];
          const after = before.split(p.raw).join("");
          lines[p.lineIdx] = after;
          if (after.trim() === "" || /^[\s•·\-*|>]+$/.test(after)) {
            dropLineIfEmpty.add(p.lineIdx);
          }
        });
        const lastLine = bucket.pdfs[bucket.pdfs.length - 1].lineIdx;
        let marker = "";
        if (uniq.length === 1) {
          const idx =
            pdfEmbeds.push({ url: uniq[0].url, title: uniq[0].title }) - 1;
          marker = `\n\n<!--PDF_EMBED_${idx}-->\n\n`;
        } else {
          const gridIdx =
            pdfGrids.push({
              items: uniq.map((p) => ({ title: p.title, url: p.url })),
            }) - 1;
          marker = `\n\n<!--PDF_GRID_${gridIdx}-->\n\n`;
        }
        (lineMarkers[lastLine] ||= []).push(marker);
      });
      const rebuilt: string[] = [];
      lines.forEach((line, idx) => {
        if (dropLineIfEmpty.has(idx) && !lineMarkers[idx]) return;
        rebuilt.push(dropLineIfEmpty.has(idx) ? "" : line);
        if (lineMarkers[idx]) rebuilt.push(...lineMarkers[idx]);
      });
      bodyMd = rebuilt.join("\n").replace(/\n{3,}/g, "\n\n");
    }
  }


  const allPdfs = extractPdfs(cleaned);
  const mappedSections = getPdfSectionsForPage(key);
  // PDFs already placed inside a mapped accordion section — exclude from the
  // flat "Other Documents" grid so they aren't shown twice.
  const mappedUrls = new Set((mappedSections ?? []).flatMap((s) => s.pdfs.map((p) => p.url)));
  const pdfs = allPdfs.filter((p) => !mappedUrls.has(p.url));
  // Counter for zigzag-floating portraits (Chairman / Secretary / Principal …).
  const portraitIdx = useRef(0);
  portraitIdx.current = 0;
  const headings = extractHeadings(bodyMd);
  const showToc = false; // sidebar/in-page nav removed — pages now render full width
  const ctx = findSectionForSlug(key);
  const showSidebar = false;
  const gridCls = "";

  // Fallback: use centralised section banner image when the scraped markdown
  // had no inline banner image (so every page gets a real image hero, not a
  // plain teal field or a text breadcrumb). Campus Life pages skip the shared
  // section banner — they use the page's own first image, or a plain teal
  // hero if the page has none.
  const sectionKey = ctx?.section.key as SectionKey | undefined;
  const fallbackBanner = isCampusLife
    ? null
    : (sectionKey && SECTION_BANNER[sectionKey]) || resolveAssetUrl(campusBanner.url);
  const heroSrc = resolveAssetUrl(bannerImg?.src) || fallbackBanner;
  const heroAlt = bannerImg?.alt || page.title || "ATME banner";
  const heroImgOpacity = isPlacements && bannerImg ? "opacity-40" : "opacity-70";
  void showToc;
  void headings;

  const isSeminarAuditorium = key === "seminar-auditorium-2";

  return (
    <Layout>
      {isSeminarAuditorium ? (
        <SeminarAuditoriumGallery asBanner />
      ) : (
        <section className="relative w-full overflow-hidden bg-[#0d3438]">
          {heroSrc ? (
            <img
              src={heroSrc}
              alt={heroAlt}
              className={`block w-full h-[200px] sm:h-[260px] md:h-[320px] object-cover ${heroImgOpacity}`}
              loading="eager"
            />
          ) : (
            <div className="block w-full h-[160px] sm:h-[200px] md:h-[240px]" />
          )}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(13,52,56,0.85) 0%, rgba(18,145,153,0.65) 55%, rgba(18,145,153,0.35) 100%)",
            }}
          />
        </section>
      )}

      <section className="bg-white border-b border-border">
        <div className="container-page py-8 sm:py-10 text-center">
          {ctx && (
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#f5c518]">
              {ctx.section.label}
            </div>
          )}
          <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#129199] max-w-3xl mx-auto">
            {page.title}
          </h1>
        </div>
      </section>

      {(() => {
        const hub = getHubForSplat(key);
        if (!hub) return null;
        return (
          <>
            <SectionTabNav items={hub.tabs} activeKey={hub.activeKey} ariaLabel={`${hub.hubLabel} sections`} />
            <section className="container-page py-6">
              <Link
                to={hub.hubTo}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#129199] hover:underline"
              >
                <ArrowLeft className="h-4 w-4" /> Back to {hub.hubLabel}
              </Link>
            </section>
          </>
        );
      })()}

      {key === "library-3/library" && (
        <section className="container mx-auto px-4 pt-10 pb-4">
          <div className="rounded-2xl border-2 border-[#f5c518] bg-card p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#129199] pb-3 border-b-2 border-[#129199]/30 font-display">
              Find Your Resources
            </h2>
            <div className="mt-6 flex flex-col gap-4 items-start">
              {[
                { label: "Find your book in ATME library", href: "http://118.151.209.133:8001/" },
                { label: "Find your E-Journals & E-Books", href: "https://access.vtuconsortium.com/atme" },
                { label: "Find your E-Newspapers & E-Magazines", href: "https://library.magzter.com/home" },
                { label: "Find your Question papers", href: "http://118.151.209.133:8080/jspui/" },
              ].map((b) => (
                <a
                  key={b.href}
                  href={b.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#f5c518] bg-background px-5 py-2.5 text-[#129199] font-semibold hover:bg-[#129199] hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
                  {b.label}
                </a>
              ))}
            </div>
            <h3 className="mt-10 text-2xl font-bold text-[#129199] pb-3 border-b-2 border-[#129199]/30 font-display">
              Note:
            </h3>
            <div className="mt-4 space-y-2 text-foreground/90">
              <p className="font-semibold">For Remote Access! Users, please reach out to the library.</p>
              <p className="font-semibold pt-2">PRIYA R</p>
              <p>Librarian</p>
              <p><span className="font-semibold">Phone No:</span> 8970331642</p>
              <p>
                <span className="font-semibold">Email ID:</span>{" "}
                <a href="mailto:library@atme.edu.in" className="text-[#129199] underline">
                  library@atme.edu.in
                </a>
              </p>
            </div>
          </div>
        </section>
      )}

      <div className="container-page py-10">

        <div className={`grid gap-10 ${gridCls}`}>
          {showSidebar && false}
          <article className="min-w-0 content-flow w-full">
            {key === "library-3/staff-details-2" && <LibraryStaffPhotos />}
            {key === "dr-srinivasa-k" && (
              <div className="not-prose relative overflow-hidden rounded-2xl border-2 shadow-card mb-8" style={{ borderColor: "#f5c518" }}>
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #129199 0%, #0e7a80 55%, #0b6066 100%)" }} />
                <div aria-hidden className="absolute -top-20 -right-20 h-56 w-56 rounded-full" style={{ background: "radial-gradient(closest-side, rgba(245,197,24,0.3), transparent 70%)" }} />
                <div className="relative grid md:grid-cols-[210px_1fr] gap-4 md:gap-6 p-4 md:p-6 items-start">
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="relative">
                      <img
                        src={resolveAssetUrl("/__l5e/assets-v1/63aa0abb-1115-458d-8269-59efe05225fa/Srinivasa-1.jpg")}
                        alt="Dr. Srinivasa K"
                        loading="eager"
                        decoding="async"
                        className="relative rounded-xl w-36 h-36 md:w-44 md:h-44 object-cover ring-2 ring-white/30"
                      />
                    </div>
                    <div className="text-center md:text-left mt-1">
                      <h1 className="font-display text-base md:text-lg font-bold text-white leading-tight">Dr. Srinivasa K</h1>
                      <div className="mt-0.5 text-xs text-white/85">Professor &amp; Dean Student Affairs</div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/95 backdrop-blur p-1 shadow-md self-start">
                    <table className="w-full text-sm md:text-base">
                      <tbody>
                        {[
                          { label: "Name", value: "Dr. Srinivasa K" },
                          { label: "Designation", value: "Professor & Dean Student Affairs" },
                          { label: "Department", value: "Mechanical Engineering" },
                          { label: "Qualification", value: "BE, M.Tech, Ph.D" },
                          { label: "Date of Joining", value: "13/09/2010" },
                          { label: "Email", value: "dr.srinivasak_mech@atme.edu.in", isEmail: true },
                        ].map((row, i, arr) => (
                          <tr key={row.label} className={i < arr.length - 1 ? "border-b border-[#f5c518]/40" : ""}>
                            <th className="text-left px-2.5 py-2.5 md:px-3 md:py-3 w-40 md:w-52 font-bold text-white align-top rounded-l-lg text-sm md:text-base" style={{ backgroundColor: "#129199" }}>
                              {row.label}
                            </th>
                            <td className="px-2.5 py-2.5 md:px-3 md:py-3 align-top break-words text-base md:text-lg font-semibold" style={{ color: "#0e7a80", fontWeight: 600 }}>
                              {(row as any).isEmail ? (
                                <a href={`mailto:${row.value}`} className="hover:underline" style={{ color: "#129199" }}>{row.value}</a>
                              ) : row.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            <div className="content-card">
              <div className="content-prose prose prose-slate max-w-none
                prose-headings:font-display prose-headings:tracking-tight
                prose-headings:text-[#129199]
                prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3 prose-h3:pb-0
                prose-h4:text-lg prose-h4:font-semibold prose-h4:mt-6 prose-h4:mb-2
                prose-h5:text-base prose-h5:font-semibold prose-h5:mt-5 prose-h5:mb-2
                prose-h6:text-base prose-h6:font-semibold prose-h6:mt-4 prose-h6:mb-2
                prose-p:leading-relaxed prose-p:text-foreground/85 prose-p:text-justify hyphens-auto
                prose-a:text-[#129199] prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-img:rounded-lg prose-img:shadow-md prose-img:mx-auto prose-img:my-6
                prose-ul:my-4 prose-li:my-1
                prose-table:block prose-table:overflow-x-auto prose-table:whitespace-normal prose-table:w-full prose-table:border prose-table:border-[#f5c518] prose-table:rounded-lg
                prose-thead:bg-[#129199]
                prose-th:bg-[#129199] prose-th:text-white prose-th:font-semibold prose-th:p-3 prose-th:text-left prose-th:border prose-th:border-[#f5c518] prose-th:align-middle
                prose-td:p-3 prose-td:border prose-td:border-[#f5c518] prose-td:align-top
                prose-blockquote:border-l-4 prose-blockquote:border-[#129199] prose-blockquote:bg-[#129199]/5 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:not-italic
              ">
                {/* seminar-auditorium-2 gallery is rendered as the page banner above */}
                {key === "green-campus" && <GreenCampusGallery />}
                {key === "magazine" && <MagazineGrid />}
                {key === "solar-rooftop-system" && <SolarRooftopGallery />}
                {key === "drinking-water-ro" && (
                  <div className="not-prose my-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="overflow-hidden rounded-xl border border-[#f5c518]/60 shadow-md bg-white">
                      <img
                        src={resolveAssetUrl("/__l5e/assets-v1/2b5d2f81-fd6f-4b29-b667-a209c1a0ebc5/ro.jpeg")}
                        alt="ATME Reverse Osmosis (RO) drinking water plant"
                        loading="lazy"
                        className="block w-full h-auto max-h-[560px] object-contain bg-white"
                      />
                    </div>
                    <div className="overflow-hidden rounded-xl border border-[#f5c518]/60 shadow-md bg-white">
                      <img
                        src={resolveAssetUrl("/__l5e/assets-v1/4c6a45cb-d9ef-4f88-a876-32a5932bf190/Ro-Banner-01-01.jpg")}
                        alt="ATME Drinking Water — RO, UV & UF purification"
                        loading="lazy"
                        className="block w-full h-auto max-h-[560px] object-contain bg-white"
                      />
                    </div>
                  </div>
                )}

                {key === "health-center" && (
                  <div className="not-prose my-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Medical facility in college campus",
                        url: "https://old.atme.edu.in/wp-content/uploads/2022/12/Medical-facility-in-college-campus.pdf",
                      },
                      {
                        title: "MoU with Cauvery Heart & Multi-Specialty Hospital (2025–2027)",
                        url: "https://old.atme.edu.in/wp-content/uploads/2026/02/MOU_-ATMECE-Cauvery-Heart-Multispeciality-Hospital-2025-to-2027.pdf",
                      },
                    ].map((doc) => (
                      <div key={doc.url} className="flex flex-col h-full">
                        <h3 className="text-base font-semibold text-[#129199] mb-2 min-h-[3.25rem]">
                          {doc.title}
                        </h3>
                        <div className="flex-1 [&>div]:!my-0 [&>div]:h-full flex">
                          <PdfEmbed url={doc.url} title={doc.title} height={620} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {key === "library-3/e-resources-vtu-consortium-2" && (
                  <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { logo: "/images/library/vtu-consortium-logo.png", name: "MAP MY ACCESS", caption: "Remote Access tool", href: "https://access.vtuconsortium.com/" },
                      { logo: "/images/library/drillbit-logo.jpg", name: "DRILLBIT", caption: "Plagiarism Check tool", href: "https://www.drillbitplagiarism.com/" },
                    ].map((tool) => (
                      <a
                        key={tool.href}
                        href={tool.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-3 rounded-xl border border-[#f5c518]/60 bg-white p-5 text-center shadow-sm transition-shadow hover:shadow-md"
                      >
                        <img
                          src={tool.logo}
                          alt={tool.name}
                          loading="lazy"
                          className="h-[170px] w-[170px] object-contain"
                        />
                        <div>
                          <div className="font-display font-bold text-[#129199]">{tool.name}</div>
                          <div className="text-sm text-muted-foreground">{tool.caption}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
                {key === "transportation" && (
                  <div className="not-prose my-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {[
                      {
                        title: "ATMECE Transportation Policy for Students",
                        url: "https://atme.edu.in/wp-content/uploads/2023/12/ATMECE-Transportation-Policy-for-Students.pdf",
                      },
                      {
                        title: "Bus Routes (According to Stage)",
                        url: "https://atme.edu.in/wp-content/uploads/2026/01/9-ROUTES-ACCORDING-TO-STAGE-Updated.pdf",
                      },
                    ].map((doc) => (
                      <div key={doc.url} className="flex flex-col h-full">
                        <h3 className="text-base font-semibold text-[#129199] mb-2 min-h-[3.25rem]">
                          {doc.title}
                        </h3>
                        <div className="flex-1 [&>div]:!my-0 [&>div]:h-full flex">
                          <PdfEmbed url={doc.url} title={doc.title} height={620} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {key === "entrance-plan" && (
                  <div className="not-prose my-6">
                    <div className="rounded-xl overflow-hidden border border-[#f5c518]/60 shadow-md bg-[#0d3438]/5">
                      <iframe
                        src={`${pdfFromAtmeUrl("https://atme.edu.in/wp-content/uploads/2022/05/Entrance-Plan.pdf")}#view=FitH`}
                        title="ATME Entrance Plan"
                        className="w-full h-[80vh] min-h-[600px]"
                      />
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Trouble viewing the PDF?{" "}
                      <a
                        href={pdfFromAtmeUrl("https://atme.edu.in/wp-content/uploads/2022/05/Entrance-Plan.pdf")}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#129199] underline"
                      >
                        Open the Entrance Plan in a new tab
                      </a>
                      .
                    </p>
                  </div>
                )}
                {key === "placement-statistics" && (
                  <div className="not-prose my-6 space-y-10">
                    <section>
                      <h2 className="text-2xl md:text-3xl font-bold text-[#129199] mb-4 pb-2 border-b-2 border-[#129199]/30 font-display">
                        Congratulations to our Placed Students
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                          "pg1-1024x1024.jpeg","pg2.jpeg","pg3-1024x1024.jpeg","pg4-1024x1024.jpeg",
                          "pg5-1024x1024.jpeg","pg6-1024x1024.jpeg","pg7-1024x1024.jpeg","pg8-1024x1024.jpeg",
                          "pg9-1024x1024.jpeg","pg10-1024x1024.jpeg","pg11-1024x1024.jpeg",
                        ].map((f, i) => {
                          const url = `/images/uploads/2026/04/${f}`;
                          return (
                            <a
                              key={f}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block overflow-hidden rounded-xl border border-[#f5c518]/60 bg-white shadow-sm hover:shadow-md hover:border-[#129199]/50 transition-all"
                            >
                              <img
                                src={url}
                                alt={`Placement poster ${i + 1}`}
                                loading="lazy"
                                className="block w-full h-auto"
                              />
                            </a>
                          );
                        })}
                      </div>
                    </section>

                    <section>
                      <h2 className="text-2xl md:text-3xl font-bold text-[#129199] mb-4 pb-2 border-b-2 border-[#129199]/30 font-display">
                        Department-wise Placement Lists
                      </h2>
                      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {[
                          { dept: "Computer Science Engineering",            title: "CSE — Placed Students (2025–26)", url: "https://new.atme.edu.in/wp-content/uploads/2026/04/CSE-placed.pdf" },
                          { dept: "Electronics & Communication Engineering", title: "ECE — Placed Students (2025–26)", url: "https://new.atme.edu.in/wp-content/uploads/2026/04/ECE-placed.pdf" },
                          { dept: "Electrical & Electronics Engineering",    title: "EEE — Placed Students (2025–26)", url: "https://new.atme.edu.in/wp-content/uploads/2026/04/eee-placed.pdf" },
                          { dept: "Mechanical Engineering",                  title: "ME — Placed Students (2025–26)",  url: "https://new.atme.edu.in/wp-content/uploads/2026/04/ME-placed.pdf" },
                          { dept: "Civil Engineering",                       title: "CE — Placed Students (2025–26)",  url: "https://new.atme.edu.in/wp-content/uploads/2026/04/CE-placed.pdf" },
                        ].map((d) => (
                          <div key={d.url} className="flex flex-col h-full">
                            <h3 className="text-base font-bold text-[#0d3438] mb-1">{d.dept}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{d.title}</p>
                            <div className="flex-1 [&>div]:!my-0 [&>div]:h-full flex">
                              <PdfEmbed url={d.url} title={d.title} height={520} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                )}
                {(() => {
                  // Deans (Student Affairs / Research / Academics): dedicated
                  // two-column card + message layout so the profile card
                  // stays on the left (linking to the dean's full profile)
                  // and the welcome message flows on the right.
                  const DEAN_CARDS: Record<string, { image: string; name: string; designation: string; profileHref: string }> = {
                    "atme-research/dean-student-affairs": {
                      image: "/images/uploads/2023/12/Srinivasa-1.jpg",
                      name: "Dr. Srinivasa K",
                      designation: "Professor & Dean Student Affairs",
                      profileHref: "/departments/me/faculty/dr-srinivasa-k",
                    },
                    "atme-research/dean-research-message": {
                      image: "/__l5e/assets-v1/112ca0fe-7fe2-49bb-9dd0-66a47e6bb9a4/Dr-Bhagyashree-SR-Dean-Research.jpg",
                      name: "Dr. Bhagyashree S R",
                      designation: "Dean, Research",
                      profileHref: "/departments/ece/faculty/dr-s-r-bhagyashree",
                    },
                    "dean-academics": {
                      image: "/__l5e/assets-v1/4f231910-afcb-45e2-a121-4ae866bf320b/Dr-Nalini-Elizabeth-Rebello.jpg",
                      name: "Dr. Nalini Elizabeth Rebello",
                      designation: "Dean, Academics",
                      profileHref: "/departments/ce/faculty/dr-nalini-elizabeth-rebello",
                    },
                    "about-us/dean-academics": {
                      image: "/__l5e/assets-v1/4f231910-afcb-45e2-a121-4ae866bf320b/Dr-Nalini-Elizabeth-Rebello.jpg",
                      name: "Dr. Nalini Elizabeth Rebello",
                      designation: "Dean, Academics",
                      profileHref: "/departments/ce/faculty/dr-nalini-elizabeth-rebello",
                    },
                    "atme-research/dean-academics": {
                      image: "/__l5e/assets-v1/4f231910-afcb-45e2-a121-4ae866bf320b/Dr-Nalini-Elizabeth-Rebello.jpg",
                      name: "Dr. Nalini Elizabeth Rebello",
                      designation: "Dean, Academics",
                      profileHref: "/departments/ce/faculty/dr-nalini-elizabeth-rebello",
                    },
                  };
                  const deanCard = DEAN_CARDS[key];
                  if (deanCard) {
                    const deanComponents = {
                      h1: ({ children }: any) => (
                        <h2 className="text-2xl font-bold mt-2 mb-4 pb-2 border-b-2 border-[#129199]/30 text-[#129199] font-display">
                          {children}
                        </h2>
                      ),
                      h2: ({ children }: any) => (
                        <h2 className="text-2xl font-bold mt-2 mb-4 pb-2 border-b-2 border-[#129199]/30 text-[#129199] font-display">
                          {children}
                        </h2>
                      ),
                      p: ({ children }: any) => (
                        <p className="mb-5 leading-relaxed">{children}</p>
                      ),
                      // The dean's photo is already rendered in the card on
                      // the left — drop any inline image the markdown body
                      // carries so it doesn't render a second time.
                      img: () => null,
                    };
                    return (
                      <div className="grid gap-8 md:grid-cols-[300px_1fr] md:items-start">
                        <div className="not-prose">
                          <div className="rounded-2xl border-2 border-amber-400/70 bg-card p-3 shadow-lg">
                            <div className="overflow-hidden rounded-xl bg-white">
                              <img
                                src={resolveAssetUrl(deanCard.image)}
                                alt={deanCard.name}
                                className="block w-full h-auto"
                                loading="lazy"
                              />
                            </div>
                            <div className="px-2 pt-4 pb-2">
                              <div className="font-bold text-lg leading-tight">{deanCard.name}</div>
                              <div className="text-muted-foreground leading-snug mt-1">{deanCard.designation}</div>
                              <div className="mt-6">
                                <a href={deanCard.profileHref} className="text-primary font-medium hover:underline">View Profile →</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="min-w-0">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={deanComponents as any}
                          >
                            {bodyMd}
                          </ReactMarkdown>
                        </div>
                      </div>
                    );
                  }

                  // Our Recruiters: render the same brand-logo grid used on
                  // the home page instead of the stray PDF-viewer scrape.
                  if (/^our-recruiters(?:-2)?\/?$/i.test(key)) {
                    return (
                      <div className="not-prose">
                        <div className="text-center">
                          <span className="inline-flex items-center gap-2 text-[#f5c518] text-sm font-semibold tracking-widest uppercase">
                            Our Recruiters
                          </span>
                          <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-[#129199]">
                            250+ companies hire from ATME every year
                          </h2>
                          <p className="mt-2 text-muted-foreground text-sm max-w-2xl mx-auto">
                            A snapshot of the brands recruiting our talent across IT, core engineering, consulting and product.
                          </p>
                        </div>
                        <div className="mt-8">
                          <RecruiterLogoGrid />
                        </div>
                      </div>
                    );
                  }

                  // Split markdown by top-level H2 boundaries so each
                  // "trustee" (or similar grouped section) becomes an
                  // isolated block. Each block uses display:flow-root,
                  // which contains its floated portrait — preventing
                  // the next section's image/text from intermingling.
                  // Split on H1/H2/H3 boundaries so each profile (whether
                  // marked `#`, `##` or `###`) gets isolated.
                  const lines = bodyMd.split("\n");
                  const chunks: string[] = [];
                  let buf: string[] = [];
                  for (const line of lines) {
                    if (/^#{1,3}\s+/.test(line) && buf.some((l) => l.trim() !== "")) {
                      chunks.push(buf.join("\n"));
                      buf = [];
                    }
                    buf.push(line);
                  }
                  if (buf.length) chunks.push(buf.join("\n"));
                  const sections = chunks.filter((c) => c.trim() !== "");

                  const mdComponents = {
                      h1: ({ children, className }: any) => {
                        const text = String(children);
                        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
                        if (className) return <h1 id={id} className={className}>{children}</h1>;
                        return <h3 id={id} className="text-xl font-semibold mt-2 mb-3 pb-2 border-b-2 border-[#129199]/30 text-[#129199] font-display">{children}</h3>;
                      },
                      h2: ({ children, className }: any) => {
                        const text = String(children);
                        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
                        if (className) return <h2 id={id} className={className}>{children}</h2>;
                        return <h3 id={id} className="text-xl font-semibold mt-2 mb-3 pb-2 border-b-2 border-[#129199]/30 text-[#129199] font-display">{children}</h3>;
                      },
                      h3: ({ children, className }: any) => {
                        const text = String(children);
                        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
                        if (className) return <h3 id={id} className={className}>{children}</h3>;
                        return <h4 id={id} className="text-base font-semibold mt-6 mb-2 text-[#129199] font-display">{children}</h4>;
                      },
                      h4: ({ children, className }: any) => (
                        className ? <h4 className={className}>{children}</h4>
                        : <h4 className="text-base font-semibold mt-6 mb-2 text-[#129199] font-display">{children}</h4>
                      ),
                      h5: ({ children, className }: any) => (
                        className ? <h5 className={className}>{children}</h5>
                        : <h4 className="text-base font-semibold mt-6 mb-2 text-[#129199] font-display">{children}</h4>
                      ),
                      h6: ({ children, className }: any) => (
                        className ? <h6 className={className}>{children}</h6>
                        : <h4 className="text-base font-semibold mt-6 mb-2 text-[#129199] font-display">{children}</h4>
                      ),
                      table: ({ children }: any) => (
                        <div className="table-scroll my-6 mx-auto rounded-lg border border-[#f5c518] overflow-x-auto w-full lg:max-w-[70%]">
                          <table className="w-full table-auto border-collapse text-sm md:text-base break-words [&_*]:!border-[#f5c518] [&_th]:!border-[#f5c518] [&_td]:!border-[#f5c518]">{children}</table>
                        </div>
                      ),
                      thead: ({ children }: any) => (
                        <thead className="bg-[#129199]">{children}</thead>
                      ),
                      tbody: ({ children }: any) => {
                        // Merge consecutive duplicate cells in middle columns
                        // (e.g. "Research Centre" repeated across many rows)
                        // into a single rowSpan cell so the value appears
                        // once, vertically centered.
                        const toText = (node: any): string => {
                          if (node == null || typeof node === "boolean") return "";
                          if (typeof node === "string" || typeof node === "number") return String(node);
                          if (Array.isArray(node)) return node.map(toText).join("");
                          if (typeof node === "object" && node.props) return toText(node.props.children);
                          return "";
                        };
                        const trs = (Array.isArray(children) ? children : [children]).filter(
                          (c: any) => c && typeof c === "object" && (c.type === "tr" || c?.props?.node?.tagName === "tr"),
                        );
                        if (trs.length === 0) return <tbody>{children}</tbody>;
                        const rows = trs.map((tr: any) => {
                          const tdChildren = tr.props?.children;
                          const tds = (Array.isArray(tdChildren) ? tdChildren : [tdChildren]).filter(
                            (c: any) => c && typeof c === "object",
                          );
                          return tds;
                        });
                        const nCols = Math.max(...rows.map((r) => r.length));
                        // Rowspan-merging only makes sense for the narrow
                        // "spanned label" tables it was built for (e.g. a
                        // repeated "Research Centre" name across a handful of
                        // columns). Wide data tables (10+ columns of mostly
                        // sparse/blank per-row figures, e.g. E-Resources)
                        // have coincidental repeats — merging those collapses
                        // genuinely distinct rows into one misleading cell.
                        if (nCols < 3 || nCols > 6) return <tbody>{children}</tbody>;
                        const spans: number[][] = rows.map((r) => r.map(() => 1));
                        const visible: boolean[][] = rows.map((r) => r.map(() => true));
                        for (let c = 1; c < nCols - 1; c++) {
                          let r = 0;
                          while (r < rows.length) {
                            const cell = rows[r][c];
                            const txt = cell ? toText(cell).trim() : "";
                            if (!txt) { r++; continue; }
                            let k = r + 1;
                            while (k < rows.length) {
                              const next = rows[k][c];
                              const nextTxt = next ? toText(next).trim() : "";
                              // Only fold a genuine repeat of the same non-empty
                              // value into the span above it — a blank cell is a
                              // real "not applicable" value for that row, not a
                              // continuation, and must never be swallowed.
                              if (nextTxt === txt) {
                                spans[r][c]++;
                                visible[k][c] = false;
                                k++;
                              } else break;
                            }
                            r = k;
                          }
                        }
                        const isBoldOnlyCell = (cell: any): boolean => {
                          if (!cell || typeof cell !== "object") return false;
                          const kids = cell.props?.children;
                          const arr = Array.isArray(kids) ? kids : [kids];
                          const nonEmpty = arr.filter(
                            (c: any) => !(typeof c === "string" && c.trim() === ""),
                          );
                          return (
                            nonEmpty.length > 0 &&
                            nonEmpty.every(
                              (c: any) =>
                                c && typeof c === "object" &&
                                (c.type === "strong" || c?.props?.node?.tagName === "strong"),
                            )
                          );
                        };
                        const rowIsBoldHeader = rows.map((r) => r.every(isBoldOnlyCell));
                        return (
                          <tbody>
                            {rows.map((row, ri) => (
                              <tr key={ri}>
                                {row.map((cell: any, ci: number) => {
                                  if (!visible[ri][ci]) return null;
                                  const extraProps: any = {};
                                  if (spans[ri][ci] > 1) extraProps.rowSpan = spans[ri][ci];
                                  // Only the FIRST body row gets the teal
                                  // "header-style" treatment when its cells
                                  // are all bold. Subsequent bold-only rows
                                  // (middle / last) render as plain cells.
                                  const headerStyle = ri === 0 && rowIsBoldHeader[ri];
                                  if (cell && typeof cell === "object") {
                                    const existing = cell.props || {};
                                    const baseClass = headerStyle
                                      ? "bg-[#129199] text-white p-2 md:p-3 text-center border border-[#f5c518] align-middle break-words font-semibold"
                                      : "p-2 md:p-3 border border-[#f5c518] align-middle text-center text-foreground/85 break-words [overflow-wrap:anywhere]";
                                    return (
                                      <cell.type
                                        {...existing}
                                        {...extraProps}
                                        key={ci}
                                        className={`${baseClass} ${existing.className || ""}`}
                                      />
                                    );
                                  }
                                  return <td key={ci} {...extraProps}>{cell}</td>;
                                })}
                              </tr>
                            ))}
                          </tbody>
                        );
                      },
                      th: ({ children, style }: any) => (
                        <th style={style} className="bg-[#129199] text-white p-2 md:p-3 text-center border border-[#f5c518] align-middle break-words">
                          <h4 className="m-0 text-base font-semibold text-white font-display text-center">{children}</h4>
                        </th>
                      ),
                      td: ({ children, style, rowSpan, colSpan }: any) => {
                        // Default td renderer (used when tbody short-circuits
                        // the row-aware path). Plain cell — no bold-only
                        // header bg here; that decision is made in tbody and
                        // only applied to the first body row.
                        return (
                          <td style={style} rowSpan={rowSpan} colSpan={colSpan} className="p-2 md:p-3 border border-[#f5c518] align-middle text-center text-foreground/85 break-words [overflow-wrap:anywhere]">{children}</td>
                        );
                      },
                      img: ({ src, alt }: any) => {
                        const altText = (alt || "").toLowerCase();
                        const srcText = String(src || "").toLowerCase();
                        // Skip known placeholder/stub images entirely so they
                        // don't render as empty bordered rectangles.
                        if (
                          !srcText ||
                          /admin-ajax|placeholder|spacer|blank|1x1|pixel\.gif|loading\.gif/.test(srcText) ||
                          /admin-ajax|placeholder/.test(altText)
                        ) {
                          return null;
                        }
                        // Decorative UI icons (e.g. a small "download" glyph
                        // used as the clickable graphic inside a
                        // `[![](icon.png)](file.pdf)` link) aren't content
                        // photos — the surrounding `a` renderer already draws
                        // its own small icon + pill button for PDF/external
                        // links, so drop the raw icon graphic entirely rather
                        // than blowing a 150x150 glyph up to content-image size.
                        if (/download.icon|share.icon|social.icon|whatsapp.icon|facebook.icon|twitter.icon|linkedin.icon|instagram.icon|ultimate-social|icons_theme/.test(srcText)) {
                          return null;
                        }
                        const hideOnError = (e: any) => {
                          const el = e.currentTarget as HTMLImageElement;
                          el.style.display = "none";
                        };
                        const isFullWidth =
                          /banner|cover|hero|full|wide|gallery|chart|graph|infographic|ranked|medal|silver|gold|admissions|home-/.test(altText) ||
                          /banner|home-|ranked|medal|silver|gold|admissions|naac|nabl|vtu/.test(srcText);
                        if (isFullWidth) {
                          return (
                            <img
                              src={resolveAssetUrl(src as string)}
                              alt={alt || ""}
                              loading="lazy"
                              onError={hideOnError}
                              className="rounded-xl shadow-md w-full max-w-3xl max-h-[420px] h-auto mx-auto my-6 border border-border block object-contain bg-white clear-both"
                            />
                          );
                        }
                        // Default: center-align images above text content
                        // (no float / no side-by-side wrap). Portraits get a
                        // narrower max-width; everything else fills available
                        // width up to a comfortable reading size. Mobile-first
                        // spacing keeps images snug on small screens and
                        // breathes out on larger viewports.
                        const isPortrait = /chairman|principal|director|dean|hod|h\.o\.d|sir|madam|message|prof\.|dr\.|mr\.|mrs\.|ms\.|secretary|trustee|president|vice|portrait|librarian/.test(altText);
                        portraitIdx.current++;
                        const sizeCls = isPortrait
                          ? "w-[78%] max-w-[220px] sm:max-w-[260px] md:max-w-xs"
                          : "w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl";
                        return (
                          <img
                            src={resolveAssetUrl(src as string)}
                            alt={alt || ""}
                            loading="lazy"
                            onError={hideOnError}
                            className={`rounded-lg sm:rounded-xl shadow-md border border-border bg-white object-contain ${sizeCls} max-h-[280px] sm:max-h-[360px] md:max-h-[420px] h-auto mx-auto my-4 sm:my-6 block clear-both animate-fade-in`}
                          />
                        );
                      },

                      a: ({ href, children, className: incomingClass, node, ...rest }: any) => {
                        const url = String(href || "");
                        const isPdf = /\.pdf(\?|$)/i.test(url);
                        const isExternal = /^https?:\/\//i.test(url);
                        // If the markdown source already provided a className
                        // (raw HTML override), respect it and don't apply our
                        // default link styling.
                        if (incomingClass) {
                          return <a href={url} {...rest} className={incomingClass}>{children}</a>;
                        }
                        if (isPdf || isExternal) {
                          return (
                            <a
                              href={url}
                              {...rest}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 my-1 rounded-md border-2 border-[#f5c518] bg-white text-[#129199] font-semibold text-sm no-underline shadow-sm hover:bg-[#f5c518] hover:text-[#0b5a60] transition-colors"
                            >
                              {isPdf ? <FileText className="h-3.5 w-3.5 flex-shrink-0" /> : null}
                              <span>{children}</span>
                            </a>
                          );
                        }
                        return <a href={url} {...rest} className="text-[#129199] underline underline-offset-2 hover:text-[#0b5a60]">{children}</a>;
                      },
                      p: ({ children, className, style }: any) => {
                        const arr = Array.isArray(children) ? children : [children];
                        const hasBlock = arr.some((c: any) => c && typeof c === "object" && (c.type === "img" || c?.props?.node?.tagName === "img"));
                        if (hasBlock) return <>{children}</>;
                        if (className || style) return <p className={className} style={style}>{children}</p>;
                        return <p className="leading-relaxed text-justify hyphens-auto text-foreground/85 my-4">{children}</p>;
                      },
                  } as const;

                  // Detect runs of consecutive image-only markdown lines and
                  // render them as an equal-sized image grid (gallery) instead
                  // of stacked single images, one per row. Allows mixed text +
                  // gallery in the same chunk.
                  const imgLineRe = /^\s*!\[([^\]]*)\]\(([^)\s]+\.(?:jpe?g|png|webp|gif))(?:\s+"[^"]*")?\)\s*$/i;
                  const linkedImgLineRe = /^\s*\[!\[([^\]]*)\]\(([^)\s]+\.(?:jpe?g|png|webp|gif))(?:\s+"[^"]*")?\)\]\([^)]+\)\s*$/i;
                  type Seg = { type: "md"; text: string } | { type: "gallery"; images: { alt: string; src: string }[] };
                  const splitForGalleries = (md: string): Seg[] => {
                    const lines = md.split("\n");
                    const segs: Seg[] = [];
                    let buf: string[] = [];
                    let gal: { alt: string; src: string; raw: string }[] = [];
                    const flushBuf = () => {
                      if (buf.length) { segs.push({ type: "md", text: buf.join("\n") }); buf = []; }
                    };
                    const flushGal = () => {
                      // A solitary image isn't a "gallery" — forcing it into the
                      // fixed-height object-cover thumbnail box crops tall
                      // portraits (e.g. a staff photo) badly. Only 2+ consecutive
                      // images get the equal-height thumbnail-grid treatment;
                      // a lone image falls back to the normal object-contain
                      // single-image renderer, which preserves its full aspect.
                      if (gal.length >= 2) { flushBuf(); segs.push({ type: "gallery", images: gal }); }
                      else if (gal.length === 1) { flushBuf(); segs.push({ type: "md", text: gal[0].raw }); }
                      gal = [];
                    };

                    for (let i = 0; i < lines.length; i++) {
                      const l = lines[i];
                      const m = l.match(imgLineRe) || l.match(linkedImgLineRe);
                      if (m) {
                        gal.push({ alt: m[1] || "", src: m[2], raw: l });
                        continue;
                      }
                      if (l.trim() === "" && gal.length > 0) {
                        let j = i + 1;
                        while (j < lines.length && lines[j].trim() === "") j++;
                        const next = j < lines.length ? lines[j] : "";
                        if (next && (next.match(imgLineRe) || next.match(linkedImgLineRe))) {
                          i = j - 1;
                          continue;
                        }
                      }
                      if (gal.length) flushGal();
                      buf.push(l);
                    }
                    if (gal.length) flushGal();
                    flushBuf();
                    return segs;
                  };
                  const galleryGridCls = (n: number) =>
                    n === 1
                      ? "grid-cols-1 max-w-xl mx-auto"
                      : n === 2
                      ? "grid-cols-1 sm:grid-cols-2"
                      : n === 3
                      ? "grid-cols-2 sm:grid-cols-3"
                      : n === 4
                      ? "grid-cols-2 md:grid-cols-4"
                      : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4";

                  const renderMd = (md: string, keyPrefix: string | number = "k") => {
                    // Split by PDF grid / PDF embed markers first so each
                    // grid renders as a thumbnail card grid and each embed
                    // as an inline PDF viewer.
                    const parts = md.split(/<!--(PDF_GRID|PDF_EMBED)_(\d+)-->/);
                    const nodes: React.ReactNode[] = [];
                    let p = 0;
                    while (p < parts.length) {
                      // Tokens come in groups: [text, kind, idx, text, kind, idx, ...]
                      if (p + 2 < parts.length && (parts[p + 1] === "PDF_GRID" || parts[p + 1] === "PDF_EMBED")) {
                        const text = parts[p];
                        if (text && text.trim()) {
                          const segs = splitForGalleries(text);
                          segs.forEach((s, i) => {
                            nodes.push(
                              s.type === "md" ? (
                                <ReactMarkdown
                                  key={`${keyPrefix}-md-${p}-${i}`}
                                  remarkPlugins={[remarkGfm]}
                                  rehypePlugins={[rehypeRaw]}
                                  urlTransform={safeUrlTransform}
                                  components={mdComponents as any}
                                >
                                  {s.text}
                                </ReactMarkdown>
                              ) : (
                                <div
                                  key={`${keyPrefix}-g-${p}-${i}`}
                                  className={`my-6 grid gap-3 sm:gap-4 ${galleryGridCls(s.images.length)}`}
                                >
                                  {s.images.map((img, j) => (
                                    <a key={j} href={resolveAssetUrl(img.src)} target="_blank" rel="noreferrer" className="block group">
                                      <img
                                        src={resolveAssetUrl(img.src)}
                                        alt={img.alt}
                                        loading="lazy"
                                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                                        className="w-full !h-44 sm:!h-52 md:!h-60 lg:!h-64 !max-h-none object-cover rounded-lg border border-[#f5c518] shadow-sm bg-white transition-transform group-hover:scale-[1.02]"
                                      />
                                    </a>
                                  ))}
                                </div>
                              ),
                            );
                          });
                        }
                        const kind = parts[p + 1];
                        const gi = parseInt(parts[p + 2], 10);
                        if (kind === "PDF_GRID") {
                          const grid = pdfGrids[gi];
                          if (grid) {
                            nodes.push(
                              <div key={`${keyPrefix}-pg-${gi}`} className="my-6">
                                {grid.heading ? (
                                  <h4 className="text-base font-semibold mb-3 text-[#129199] font-display">{grid.heading}</h4>
                                ) : null}
                                <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                                  {grid.items.map((it, ii) => (
                                    <PdfThumbCard key={ii} url={it.url} title={it.title} />
                                  ))}
                                </div>
                              </div>,
                            );
                          }
                        } else {
                          const emb = pdfEmbeds[gi];
                          if (emb) {
                            nodes.push(
                              <PdfEmbed key={`${keyPrefix}-pe-${gi}`} url={emb.url} title={emb.title} height={620} hideDownload={emb.url === ugFeesUrl} />,
                            );
                          }
                        }
                        p += 3;
                        continue;
                      }
                      const text = parts[p];
                      p += 1;
                      if (!text || !text.trim()) continue;
                      const segs = splitForGalleries(text);
                      segs.forEach((s, i) => {
                        nodes.push(
                          s.type === "md" ? (
                            <ReactMarkdown
                              key={`${keyPrefix}-md-${p}-${i}`}
                              remarkPlugins={[remarkGfm]}
                              rehypePlugins={[rehypeRaw]}
                              urlTransform={safeUrlTransform}
                              components={mdComponents as any}
                            >
                              {s.text}
                            </ReactMarkdown>
                          ) : (
                            <div
                              key={`${keyPrefix}-g-${p}-${i}`}
                              className={`my-6 grid gap-3 sm:gap-4 ${galleryGridCls(s.images.length)}`}
                            >
                              {s.images.map((img, j) => (
                                <a key={j} href={resolveAssetUrl(img.src)} target="_blank" rel="noreferrer" className="block group">
                                  <img
                                    src={resolveAssetUrl(img.src)}
                                    alt={img.alt}
                                    loading="lazy"
                                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                                    className="w-full !h-44 sm:!h-52 md:!h-60 lg:!h-64 !max-h-none object-cover rounded-lg border border-[#f5c518] shadow-sm bg-white transition-transform group-hover:scale-[1.02]"
                                  />
                                </a>
                              ))}
                            </div>
                          ),
                        );
                      });
                    }
                    return nodes;
                  };





                  // ATME Trust must not fall back to the generic markdown image
                  // renderer. Render every trustee with the same dedicated
                  // image-left/content-right component so no profile becomes a
                  // centered image-above-text block.
                  if (/^atme-trust\/?$/i.test(key)) {
                    const profileStart = sections.findIndex((chunk) =>
                      /^#{1,4}\s+.*\s+-\s+(?:chairman|secretary|treasurer|trustee)\s*$/im.test(chunk),
                    );
                    const profileChunks = profileStart >= 0 ? sections.slice(profileStart) : [];
                    const introChunks = profileStart >= 0 ? sections.slice(0, profileStart) : sections;
                    const profiles = profileChunks
                      .map((chunk) => {
                        const heading = chunk.match(/^#{1,4}\s+(.+)$/m)?.[1]?.trim();
                        const image = chunk.match(
                          /!\[([^\]]*)\]\((https?:\/\/[^)\s]+\.(?:jpe?g|png|webp)|\/(?:__l5e\/assets-v1|images)\/[^)\s]+\.(?:jpe?g|png|webp))(?:\s+"[^"]*")?\)/i,
                        );
                        if (!heading || !image) return null;
                        const body = chunk
                          .replace(/^#{1,4}\s+.+$/m, "")
                          .replace(image[0], "")
                          .split(/Social media & sharing icons powered by/i)[0]
                          .replace(/\n{3,}/g, "\n\n")
                          .trim();
                        return { heading, imageAlt: image[1] || heading, imageSrc: image[2], body };
                      })
                      .filter(Boolean) as { heading: string; imageAlt: string; imageSrc: string; body: string }[];

                    if (profiles.length > 0) {
                      return (
                        <>
                          {introChunks.map((chunk, i) => (
                            <div key={`intro-${i}`}>{renderMd(chunk, `intro-${i}`)}</div>
                          ))}
                          <div className="mt-10 space-y-7">
                            {profiles.map((profile, index) => {
                              const reversed = index % 2 === 1;
                              const imageBlock = (
                                <figure className="m-0 mx-auto md:mx-0 w-full max-w-[320px] lg:max-w-[380px]">
                                  <img
                                    src={resolveAssetUrl(profile.imageSrc)}
                                    alt={profile.imageAlt}
                                    loading="lazy"
                                    className="block w-full h-auto rounded-lg border border-[#f5c518] bg-white object-contain shadow-md"
                                  />
                                </figure>
                              );
                              const textBlock = (
                                <div className="min-w-0 pt-0 md:pt-1">
                                  <h3 className="mt-0 mb-3 border-b-2 border-[#129199]/30 pb-2 font-display text-xl font-semibold text-[#129199]">
                                    {profile.heading}
                                  </h3>
                                  {renderMd(profile.body, `trustee-${index}`)}
                                </div>
                              );
                              return (
                                <section
                                  key={profile.heading}
                                  className={`grid gap-5 sm:gap-7 items-start rounded-xl border border-[#f5c518] bg-white p-4 sm:p-5 shadow-sm ${
                                    reversed
                                      ? "md:grid-cols-[minmax(0,1fr)_320px] lg:grid-cols-[minmax(0,1fr)_380px]"
                                      : "md:grid-cols-[320px_minmax(0,1fr)] lg:grid-cols-[380px_minmax(0,1fr)]"
                                  }`}
                                >
                                  {reversed ? <>{textBlock}{imageBlock}</> : <>{imageBlock}{textBlock}</>}
                                </section>
                              );
                            })}
                          </div>
                        </>
                      );
                    }
                  }

                  // Career Guidance & Placement Cell Infrastructure: render
                  // each image + heading + description as an alternating
                  // zigzag (image-left/right) layout, similar to the ATME
                  // Trust profile blocks.
                  if (
                    /^career-guidance-and-placement-cell\/career-guidance-placement-cell-infrastructure\/?$/i.test(
                      key,
                    )
                  ) {
                    const imgRe =
                      /!\[([^\]]*)\]\((https?:\/\/[^)\s]+\.(?:jpe?g|png|webp)|\/(?:__l5e\/assets-v1|images)\/[^)\s]+\.(?:jpe?g|png|webp))(?:\s+"[^"]*")?\)/i;
                    type Block = { heading: string; imageAlt: string; imageSrc: string; body: string };
                    const blocks: Block[] = [];
                    const intro: string[] = [];
                    // Pair each ###/#### heading with the image that
                    // immediately precedes (or follows) it, then take the
                    // remaining paragraph text as the body.
                    let pendingImg: RegExpMatchArray | null = null;
                    for (const chunk of sections) {
                      const headingMatch = chunk.match(/^#{2,4}\s+(.+)$/m);
                      // In this page, the image for heading N appears at the
                      // END of chunk N-1 (after the prior section's text).
                      // Strip the trailing image off the chunk and carry it
                      // forward as pendingImg.
                      let working = chunk;
                      const allImgs = [...working.matchAll(new RegExp(imgRe.source, "gi"))];
                      const trailingImg = allImgs.length > 0 ? allImgs[allImgs.length - 1] : null;
                      let ownImg: RegExpMatchArray | null = null;
                      if (headingMatch && trailingImg) {
                        const headIdx = working.search(/^#{2,4}\s+/m);
                        const imgIdx = trailingImg.index ?? -1;
                        if (imgIdx > headIdx) {
                          // Image after heading — belongs to NEXT heading.
                          working = working.slice(0, imgIdx) + working.slice(imgIdx + trailingImg[0].length);
                        } else {
                          ownImg = trailingImg;
                        }
                      } else if (!headingMatch && trailingImg) {
                        // Standalone image — carry to next heading.
                        // (Strip from working so it isn't re-rendered.)
                        working = working.slice(0, trailingImg.index ?? 0) +
                          working.slice((trailingImg.index ?? 0) + trailingImg[0].length);
                      }

                      if (headingMatch) {
                        const heading = headingMatch[1].trim();
                        const isTitle =
                          /^career\s*guidance\s*&?\s*placement\s*cell\s*infrastructure$/i.test(
                            heading,
                          );
                        const body = working
                          .replace(/^#{2,4}\s+.+$/m, "")
                          .replace(/\n{3,}/g, "\n\n")
                          .trim();
                        const img = ownImg || pendingImg;
                        if (isTitle) {
                          if (body) intro.push(body);
                          // Don't consume pendingImg for the title row.
                        } else if (img) {
                          blocks.push({
                            heading,
                            imageAlt: img[1] || heading,
                            imageSrc: img[2],
                            body,
                          });
                          pendingImg = null;
                        } else if (blocks.length > 0) {
                          blocks[blocks.length - 1].body += body ? `\n\n${body}` : "";
                        } else if (body) {
                          intro.push(`### ${heading}\n\n${body}`);
                        }

                        pendingImg = trailingImg && (trailingImg.index ?? 0) > (working.search(/^#{2,4}\s+/m) ?? 0)
                          ? null
                          : null;
                        // After consuming, the image that was AFTER this heading becomes the pendingImg
                        if (headingMatch && trailingImg) {
                          const headIdx = chunk.search(/^#{2,4}\s+/m);
                          const imgIdx = trailingImg.index ?? -1;
                          if (imgIdx > headIdx) pendingImg = trailingImg;
                        }
                      } else {
                        if (trailingImg) pendingImg = trailingImg;
                        // Strip leading H1 (duplicates page title) and admin/banner images.
                        const rest = working
                          .replace(/^#\s+.+$/m, "")
                          .replace(/!\[[^\]]*\]\([^)]*admin-ajax[^)]*\)/gi, "")
                          .trim();
                        if (rest) {
                          if (blocks.length > 0) {
                            blocks[blocks.length - 1].body += `\n\n${rest}`;
                          } else {
                            intro.push(rest);
                          }
                        }
                      }

                    }


                    if (blocks.length >= 2) {
                      return (
                        <>
                          {intro
                            .filter(Boolean)
                            .map((chunk, i) => (
                              <div key={`cgpc-intro-${i}`}>
                                {renderMd(chunk, `cgpc-intro-${i}`)}
                              </div>
                            ))}
                          <div className="mt-8 space-y-7">
                            {blocks.map((block, index) => {
                              const reversed = index % 2 === 1;
                              const imageBlock = (
                                <figure className="m-0 w-full">
                                  <img
                                    src={resolveAssetUrl(block.imageSrc)}
                                    alt={block.imageAlt}
                                    loading="lazy"
                                    className="block w-full h-56 sm:h-64 md:h-72 object-cover rounded-lg border border-[#f5c518] bg-white shadow-md"
                                  />
                                </figure>
                              );
                              const textBlock = (
                                <div className="min-w-0 pt-0 md:pt-1">
                                  <h3 className="mt-0 mb-3 border-b-2 border-[#129199]/30 pb-2 font-display text-xl font-semibold text-[#129199]">
                                    {block.heading}
                                  </h3>
                                  {renderMd(block.body, `cgpc-${index}`)}
                                </div>
                              );
                              return (
                                <section
                                  key={`${block.heading}-${index}`}
                                  className={`grid gap-5 sm:gap-7 items-center rounded-xl border border-[#f5c518] bg-white p-4 sm:p-5 shadow-sm ${
                                    reversed
                                      ? "md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
                                      : "md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
                                  }`}
                                >
                                  {reversed ? (
                                    <>
                                      {textBlock}
                                      {imageBlock}
                                    </>
                                  ) : (
                                    <>
                                      {imageBlock}
                                      {textBlock}
                                    </>
                                  )}
                                </section>
                              );
                            })}
                          </div>
                        </>
                      );
                    }
                  }



                  // Tab-style nav lists (a bullet list where every item
                  // self-links to /p/<currentKey>) → render the matching
                  // sections as interactive accordions instead of a static
                  // checklist. The source site uses these as tabbed panels.
                  const escKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                  const selfLink = `/p/${escKey}`;

                  // Sectioned page: 3+ `#### [TITLE](selflink)` headings each
                  // followed by their own block (typically a table). The
                  // source site rendered these as tabs; we render them as a
                  // single accordion with one item per heading.
                  {
                    const secHeadRe = new RegExp(
                      `^#{2,6}\\s+\\[([^\\]]+)\\]\\(${selfLink}\\)\\s*$`,
                      "gm",
                    );
                    const sm = [...bodyMd.matchAll(secHeadRe)];
                    if (sm.length >= 3) {
                      const preface = bodyMd.slice(0, sm[0].index ?? 0).trim();
                      const items = sm.map((mm, i) => {
                        const start = (mm.index ?? 0) + mm[0].length;
                        const end =
                          i + 1 < sm.length
                            ? (sm[i + 1].index ?? bodyMd.length)
                            : bodyMd.length;
                        return { label: mm[1].trim(), body: bodyMd.slice(start, end).trim() };
                      });
                      return (
                        <>
                          {preface && <div>{renderMd(preface, "preface")}</div>}
                          <TabbedAccordion
                            items={items.map((it, ii) => ({
                              label: it.label,
                              content: it.body ? (
                                <div>{renderMd(it.body, `sec-${ii}`)}</div>
                              ) : null,
                            }))}
                          />
                        </>
                      );
                    }
                  }

                  const navListRe = new RegExp(
                    `(?:^- \\[[^\\]]+\\]\\(${selfLink}\\)\\s*\\n?){3,}`,
                    "m",
                  );
                  if (navListRe.test(bodyMd)) {
                    const stripped = bodyMd.replace(navListRe, "").trim();
                    const anchorRe = new RegExp(
                      `^\\[([^\\]]+)\\]\\(${selfLink}\\)\\s*$`,
                      "gm",
                    );
                    const matches = [...stripped.matchAll(anchorRe)];
                    if (matches.length >= 2) {
                      const items: { label: string; body: string }[] = [];
                      matches.forEach((m, i) => {
                        const start = (m.index ?? 0) + m[0].length;
                        const end = i + 1 < matches.length ? (matches[i + 1].index ?? stripped.length) : stripped.length;
                        items.push({ label: m[1], body: stripped.slice(start, end).trim() });
                      });
                      const preface = stripped.slice(0, matches[0].index ?? 0).trim();
                      // Inside any tab body, detect nested `#### [Label](selfLink#hash)`
                      // section markers and turn them into a nested
                      // TabbedAccordion (used e.g. for per-department Scholar
                      // detail PDFs under "Scholars Details").
                      const nestedHeadRe = new RegExp(
                        `^#{2,6}\\s+\\[([^\\]]+)\\]\\(${selfLink}#[^)]+\\)\\s*$`,
                        "gm",
                      );
                      const buildTabContent = (body: string, ii: number) => {
                        const nm = [...body.matchAll(nestedHeadRe)];
                        if (nm.length >= 2) {
                          const nestedPreface = body.slice(0, nm[0].index ?? 0).trim();
                          const nestedItems = nm.map((m, ni) => {
                            const start = (m.index ?? 0) + m[0].length;
                            const end = ni + 1 < nm.length ? (nm[ni + 1].index ?? body.length) : body.length;
                            return { label: m[1].trim(), body: body.slice(start, end).trim() };
                          });
                          return (
                            <>
                              {nestedPreface && (
                                <div>{renderMd(nestedPreface, `tab-${ii}-pre`)}</div>
                              )}
                              <TabbedAccordion
                                items={nestedItems.map((nit, nii) => ({
                                  label: nit.label,
                                  content: nit.body ? (
                                    <div>{renderMd(nit.body, `tab-${ii}-n-${nii}`)}</div>
                                  ) : null,
                                }))}
                              />
                            </>
                          );
                        }
                        return body ? <div>{renderMd(body, `tab-${ii}`)}</div> : null;
                      };
                      return (
                        <>
                          {preface && (
                            <div>{renderMd(preface, "preface")}</div>
                          )}
                          <TabbedAccordion
                            items={items.map((it, ii) => ({
                              label: it.label,
                              content: buildTabContent(it.body, ii),
                            }))}
                          />
                        </>
                      );

                    }
                  }


                  // Single-portrait "person" page (Chairman's / Principal's
                  // message, About Principal etc.) — render the whole body
                  // adjacent to the portrait so the long message wraps next
                  // to the image rather than dropping below it.
                  const personRe =
                    /!\[([^\]]*)\]\((https?:\/\/[^)\s]+\.(?:jpe?g|png|webp)|\/(?:__l5e\/assets-v1|images)\/[^)\s]+\.(?:jpe?g|png|webp))(?:\s+"[^"]*")?\)/gi;
                  const allMatches = [...bodyMd.matchAll(personRe)];
                  const personLike = (alt: string, src: string) => {
                    const a = (alt || "").toLowerCase();
                    const s = (src || "").toLowerCase();
                    if (/admin-ajax|logo|banner|cover|hero|slide|naac|nabl|vtu|home-|gallery|chart|graph|infographic|ranked|medal/.test(a + " " + s)) return false;
                    return /chairman|principal|director|dean|sir|madam|message|secretary|portrait|\d{2,4}x\d{2,4}/.test(a + " " + s);
                  };
                  const portraits = allMatches.filter((m) => personLike(m[1], m[2]));
                  const isPersonPage = /chairman|principal|director|dean|secretary|message/.test(key.toLowerCase());
                  if (portraits.length === 1 && isPersonPage) {
                    const portrait = portraits[0];
                    const bodyOnly = bodyMd.replace(portrait[0], "").replace(/\n{3,}/g, "\n\n");
                    return (
                      <div className="grid gap-6 sm:gap-8 sm:grid-cols-[200px_1fr] md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] items-start">
                        <figure className="m-0 mx-auto sm:mx-0 max-w-[240px] sm:max-w-none w-full sm:sticky sm:top-24 self-start">
                          <img
                            src={resolveAssetUrl(portrait[2])}
                            alt={portrait[1] || page.title}
                            loading="eager"
                            className="w-full h-auto max-h-[360px] rounded-xl border border-[#f5c518] shadow-md bg-white object-contain"
                          />
                        </figure>
                        <div className="min-w-0">
                          {renderMd(bodyOnly, "person")}
                        </div>
                      </div>
                    );
                  }

                  if (sections.length <= 1) {
                    return <>{renderMd(bodyMd, "body")}</>;
                  }

                  const renderChunk = (chunk: string, i: number | string) => {
                    const allImgs = [
                      ...chunk.matchAll(
                        /!\[([^\]]*)\]\((https?:\/\/[^)\s]+\.(?:jpe?g|png|webp)|\/(?:__l5e\/assets-v1|images)\/[^)\s]+\.(?:jpe?g|png|webp))(?:\s+"[^"]*")?\)/gi,
                      ),
                    ];
                    const headingMatch = chunk.match(/^#{1,4}\s+(.+)$/m);
                    const headingText = (headingMatch?.[1] || "").toLowerCase();
                    const headingLooksLikePerson =
                      /chairman|secretary|treasurer|trustee|president|vice|principal|director|dean|hod|h\.o\.d|prof\.|dr\.|mr\.|mrs\.|ms\.|shri|sri\.|smt\.|member|founder/.test(headingText);
                    const isPortraitImg = (alt: string, src: string) => {
                      const a = (alt || "").toLowerCase();
                      const s = (src || "").toLowerCase();
                      if (/admin-ajax|logo|banner|cover|hero|slide|naac|nabl|vtu|home-|gallery|chart|graph|infographic|ranked|medal/.test(a + " " + s)) return false;
                      return /chairman|principal|director|dean|hod|h\.o\.d|sir|madam|message|prof\.|dr\.|secretary|trustee|president|vice|portrait|person|profile|\d{2,4}x\d{2,4}/.test(a + " " + s);
                    };
                    // Portrait detection: match by image metadata, OR fall back
                    // to heading text when the chunk has exactly one image and
                    // the heading names a person/role (covers trustees whose
                    // image filenames are just surnames like "veeresh.jpg").
                    const portrait =
                      allImgs.find((m) => isPortraitImg(m[1], m[2])) ||
                      (allImgs.length === 1 && headingLooksLikePerson ? allImgs[0] : undefined);
                    // Only use the adjacent image+text layout when the chunk
                    // contains EXACTLY ONE image and that image is a portrait.
                    // Chunks with multiple images, or with bigger/non-portrait
                    // images, fall through to the normal renderer where every
                    // image is centered above the text.
                    if (portrait && headingMatch && allImgs.length === 1) {
                      const bodyOnly = chunk.replace(portrait[0], "").replace(/\n{3,}/g, "\n\n");
                      return (
                        <div
                          key={i}
                          className="grid gap-6 sm:gap-8 sm:grid-cols-[180px_1fr] md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] items-start mb-10"
                        >
                          <figure className="m-0 mx-auto sm:mx-0 max-w-[220px] sm:max-w-none w-full">
                            <img
                              src={resolveAssetUrl(portrait[2])}
                              alt={portrait[1] || headingMatch[1]}
                              loading="lazy"
                              className="w-full h-auto max-h-[320px] rounded-xl border border-[#f5c518] shadow-md bg-white object-contain"
                            />
                          </figure>
                          <div className="min-w-0 trustee-section">
                            {renderMd(bodyOnly, `chunk-${i}`)}
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div key={i} className="trustee-section">
                        {renderMd(chunk, `chunk-${i}`)}
                      </div>
                    );
                  };

                  // Detect year-range headings like "2024 - 25", "2024-25",
                  // "AY 2024-25", "2018-2019" — these were tabs on the source
                  // site and should become collapsed accordions.
                  const yearLabel = (chunk: string): string | null => {
                    const m = chunk.match(/^#{1,4}\s+(.+)$/m);
                    if (!m) return null;
                    // Strip markdown link syntax to get plain heading text.
                    const text = m[1].replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").trim();
                    if (/^(?:AY\s+)?\d{4}\s*[-–to]+\s*\d{2,4}$/i.test(text)) return text;
                    return null;
                  };

                  // Group consecutive year-range chunks into one accordion.
                  const out: any[] = [];
                  let yearGroup: { label: string; chunk: string; idx: number }[] = [];
                  const flushYearGroup = () => {
                    if (yearGroup.length === 0) return;
                    const first = yearGroup[0].idx;
                    out.push(
                      <TabbedAccordion
                        key={`yr-${first}`}
                        items={yearGroup.map((y, yi) => {
                          const body = y.chunk.replace(/^#{1,4}\s+.+$/m, "").trim();
                          return {
                            label: y.label,
                            content: body ? (
                              <div>{renderMd(body, `yr-${y.idx}-${yi}`)}</div>
                            ) : null,
                          };
                        })}
                      />,
                    );
                    yearGroup = [];
                  };

                  sections.forEach((chunk, i) => {
                    const lbl = yearLabel(chunk);
                    if (lbl) {
                      yearGroup.push({ label: lbl, chunk, idx: i });
                    } else {
                      flushYearGroup();
                      out.push(renderChunk(chunk, i));
                    }
                  });
                  flushYearGroup();
                  return out;
                })()}
              </div>
            </div>

            {/* Trailing "Documents & Downloads" section removed — PDFs now
                render inline as clickable links within the body markdown. */}


          </article>


          {/* In-page TOC sidebar removed — pages render full width */}

        </div>
      </div>

      {key === "about-us/about-college" && <AboutCollegeExtras />}

    </Layout>
  );
}
