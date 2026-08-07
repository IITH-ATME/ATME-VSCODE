import { useEffect, useState, createContext, useContext, isValidElement, type ReactNode } from "react";
import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, ClipboardList } from "lucide-react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Layout, PageHero } from "@/components/site/Layout";
import { DeptSubNav } from "@/components/site/DeptSubNav";
import { getDept, resolveDeptSlug } from "@/data/departments";
import { pdfFromAtmeUrl, rewritePdfUrls } from "@/data/pdfRewrite";
import { sanitizeMarkdown } from "@/data/sanitizeMarkdown";
import { DEPT_PAGES } from "@/data/deptPageConfig";
import { PdfThumbCard } from "@/components/site/PdfThumbCard";
import { ArrowLeft, Download } from "lucide-react";
import { PdfEmbed } from "@/components/site/PdfEmbed";
import atmeLogo from "@/assets/atme-logo.png.asset.json";


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  PLACEHOLDER_PREFIX,
  getCanonicalByKey,
  isCanonicalSectionAvailable,
  DEPT_EXCLUDED_SECTIONS,
} from "@/data/canonicalSections";
import { getCanonicalFallback, NEW_NEWSLETTERS } from "@/data/deptCanonicalFallbacks";

import { DEPARTMENT_LABS, type LabItem } from "@/data/departmentLabs";
import { INFRA_DATA } from "@/data/infrastructureScraped";
import { titleCase, titleCaseMarkdownHeadings, stripMdEmphasis } from "@/lib/titleCase";
import { expandDesignation } from "@/lib/deptNames";
import { formatFacultyName } from "@/lib/facultyName";
import { rewriteHref } from "@/data/linkRewrite";
import { rewriteImageSrc, rewritePdfHref } from "@/data/imageRewrite";
import { resolveAssetUrl } from "@/lib/assetUrl";
import { STUDENT_LEARNING_2026_27, FIRST_YEAR_TABLE_TITLE } from "@/data/studentLearningCourses2026";

// Context lets the MD <a> renderer know which department it's rendering for,
// so it can route faculty-profile links to the internal /departments/<dept>/
// faculty/<id> route instead of the dead atme.edu.in/<slug>/ URL.
const DeptContext = createContext<string | undefined>(undefined);



type ScrapedMap = Record<string, Record<string, { title: string; markdown: string; sourceURL: string }>>;

/**
 * Some scraped pages combine an "E - News Letter" section and an
 * "E - Magazine" section on the same page (e.g. ECE). Given the combined
 * markdown and a target ("news-letter" or "magazine"), return only the
 * subsection's markdown. Returns null when the page doesn't actually
 * contain both sections (so the caller can keep the original markdown).
 */
function splitCombinedNewsletterMagazine(
  md: string,
  want: "news-letter" | "magazine"
): string | null {
  if (!md) return null;
  const lines = md.split("\n");
  const sectionStarts: { idx: number; kind: "magazine" | "news-letter" }[] = [];
  for (let i = 0; i < lines.length; i++) {
    const ln = lines[i];
    const h = ln.match(/^#{2,4}\s+(?:\[)?\s*([^\]\n]+?)\s*(?:\]\([^)]*\))?\s*$/);
    if (!h) continue;
    const text = h[1].toLowerCase().replace(/\\/g, "");
    if (/news\s*[-\s]?\s*letter|newsletter/.test(text)) {
      sectionStarts.push({ idx: i, kind: "news-letter" });
    } else if (/magazine|magzine/.test(text)) {
      sectionStarts.push({ idx: i, kind: "magazine" });
    }
  }
  const hasBoth =
    sectionStarts.some((s) => s.kind === "news-letter") &&
    sectionStarts.some((s) => s.kind === "magazine");
  if (!hasBoth) return null;
  const parts: string[] = [];
  for (let s = 0; s < sectionStarts.length; s++) {
    const cur = sectionStarts[s];
    const next = sectionStarts[s + 1];
    if (cur.kind !== want) continue;
    const end = next ? next.idx : lines.length;
    parts.push(lines.slice(cur.idx, end).join("\n"));
  }
  const firstIdx = sectionStarts[0].idx;
  const preamble = lines.slice(0, firstIdx).join("\n");
  return (preamble ? preamble + "\n" : "") + parts.join("\n");
}

/**
 * Normalize a newsletter markdown blob so the latest issue renders first.
 * Prepends the dept's latest 2026 issue (from NEW_NEWSLETTERS), skipping the
 * prepend when that URL is already present in the body. The rest of the
 * document — headings, ordering, per-year/per-section grouping — is left
 * untouched so PdfGridSections can group PDFs under their real "Academic
 * Year ..." headings instead of a single flattened, re-sorted list.
 */
function normalizeNewsletterMd(md: string, deptSlug: string): string {
  if (!md) return md;
  const latest = NEW_NEWSLETTERS[deptSlug];
  if (!latest) return md;
  const alreadyHasLatest = md.includes(latest.url);
  if (alreadyHasLatest) return md;
  const prefix = `## Latest Issue\n\n### ${latest.heading}\n\n[${latest.heading}](${latest.url})\n\n`;
  return prefix + md;
}

export const Route = createFileRoute("/departments/$slug/$page")({
  loader: async ({ params }) => {
    const dept = getDept(params.slug);
    if (!dept) throw notFound();

    // Redirect any "Faculty"-labeled scraped page to our internal directory.
    const cfg = DEPT_PAGES[resolveDeptSlug(params.slug)] || [];
    const facultyKeys = cfg.filter((i) => i.label === "Faculty").map((i) => i.key);
    if (facultyKeys.includes(params.page)) {
      throw redirect({ to: "/departments/$slug/faculty", params: { slug: params.slug } });
    }

    const { default: scraped } = await import("@/data/deptScraped.json");
    const DATA = scraped as ScrapedMap;
    const pages = DATA[resolveDeptSlug(params.slug)] || {};

    // Placeholder route: canonical section without scraped content yet.
    if (params.page.startsWith(PLACEHOLDER_PREFIX)) {
      const canonKey = params.page.slice(PLACEHOLDER_PREFIX.length);
      // Staff Details = faculty directory; redirect.
      if (canonKey === "staff-details") {
        throw redirect({ to: "/departments/$slug/faculty", params: { slug: params.slug } });
      }
      const canon = getCanonicalByKey(canonKey);
      if (!canon) throw notFound();
      // Block placeholder sections that this department shouldn't expose
      // (e.g. Humanities only has Faculty on old.atme.edu.in).
      const hasFacultyScraped = cfg.some((p) => p.label === "Faculty" && pages[p.key]);
      const hasInfra = (INFRA_DATA[resolveDeptSlug(params.slug)]?.sections?.length ?? 0) > 0
        || (INFRA_DATA[params.slug]?.sections?.length ?? 0) > 0;
      const allowed = isCanonicalSectionAvailable(canonKey, {
        hasScraped: false,
        hasHod: Boolean(dept.hod),
        hasFaculty: (dept.faculty?.length ?? 0) > 0 || hasFacultyScraped,
        hasInfra,
        slug: resolveDeptSlug(params.slug),
      });
      if (!allowed || DEPT_EXCLUDED_SECTIONS[resolveDeptSlug(params.slug)]?.has(canonKey)) throw notFound();
      // For Student Learning Centric, try to source the markdown from a scraped
      // resources page if one exists for this department.
      let placeholderMd = "";
      let placeholderTitle = canon.label;
      if (canonKey === "student-learning-centric") {
        const resKey = Object.keys(pages).find((k) => /resource|resourse/i.test(k));
        if (resKey) {
          placeholderMd = pages[resKey].markdown || "";
          placeholderTitle = pages[resKey].title || canon.label;
        }
      }
      // COE / Magazine / News Letter: pull from a department-specific
      // scrapedAll entry so every dept shows year-wise PDFs/accordions.
      if (!placeholderMd && (canonKey === "coe" || canonKey === "magazine" || canonKey === "news-letter")) {
        const fb = await getCanonicalFallback(resolveDeptSlug(params.slug), canonKey);
        if (fb) {
          placeholderMd = fb.markdown;
          if (fb.title) placeholderTitle = fb.title;
        }
        if (placeholderMd && (canonKey === "magazine" || canonKey === "news-letter")) {
          const want = canonKey === "magazine" ? "magazine" : "news-letter";
          placeholderMd = splitCombinedNewsletterMagazine(placeholderMd, want) || placeholderMd;
          placeholderTitle = canon.label;
        }
        if (canonKey === "news-letter") {
          placeholderMd = normalizeNewsletterMd(placeholderMd, resolveDeptSlug(params.slug));
        }
      }
      const placeholder = {
        title: placeholderTitle,
        markdown: placeholderMd,
        sourceURL: "",
      };
      return { dept, page: placeholder, pageKey: params.page, isPlaceholder: placeholderMd.length === 0, canonKey, allPages: pages };

    }

    const page = pages[params.page];
    if (!page) throw notFound();
    // If a sidebar-linked page (e.g. ECE "e-news-letter") combines News Letter
    // and Magazine sections on the same page, strip the magazine portion so
    // the route shows only newsletter content. The magazine canonical link
    // routes through the placeholder branch above and shows just magazine.
    let pageMd = page.markdown || "";
    if (/news[\s-]?letter|newsletter/i.test(params.page)) {
      const split = splitCombinedNewsletterMagazine(pageMd, "news-letter");
      if (split) pageMd = split;
      pageMd = normalizeNewsletterMd(pageMd, resolveDeptSlug(params.slug));
    }
    const adjustedPage = pageMd === page.markdown ? page : { ...page, markdown: pageMd };
    return { dept, page: adjustedPage, pageKey: params.page, isPlaceholder: false, canonKey: null as string | null, allPages: pages };

  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.page.title || loaderData.pageKey} — ${loaderData.dept.name} — ATME` },
      { name: "description", content: `${loaderData.page.title} at ${loaderData.dept.name}, ATME College of Engineering, Mysuru.` },
    ] : [],
  }),
  notFoundComponent: () => (
    <Layout><PageHero title="Page not found" subtitle="The requested page does not exist." /></Layout>
  ),
  errorComponent: ({ error }) => (
    <Layout><PageHero title="Something went wrong" subtitle={error.message} /></Layout>
  ),
  component: DeptSubPage,
});

function pickBannerImage(md: string): { src: string; alt: string; raw: string } | null {
  const re = /!\[([^\]]*)\]\(([^)\s]+\.(?:jpe?g|png|webp))(?:\s+"[^"]*")?\)/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(md))) {
    const alt = (m[1] || "").toLowerCase();
    const src = m[2];
    const s = src.toLowerCase();
    if (/logo|favicon|admin-ajax|placeholder|spacer|1x1|pixel|base64-image-removed/.test(s)) continue;
    if (/icons_theme|share_icons|visit_icons|ultimate-social/.test(s)) continue;
    if (/atme-final-logo/.test(s)) continue;
    if (/logo/.test(alt)) continue;
    return { src, alt: m[1] || "", raw: m[0] };
  }
  return null;
}

/** Strip markdown link syntax, escapes, and stray URL fragments from a heading. */
function cleanHeading(s: string): string {
  return s
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\\([_*#~`])/g, "$1")
    .replace(/https?:\/\/\S+/g, "")
    .replace(/[\[\]()]/g, "")
    .replace(/\\#\S*/g, "")
    .replace(/!+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Promote standalone bold or italic lines (e.g. `**Department MoU's**`,
 *  `_NSS Camp at Dinka Village_`) to H3 so they render with the same teal
 *  highlight as real headings inside prose — event captions on activity
 *  pages use the italic form so they don't spawn their own nested accordion,
 *  but should still stand out visually as sub-headings. Skips label-style
 *  lines (ending with `:`) and contact-like lines (email/phone). */
function promoteBoldHeadings(md: string): string {
  if (!md) return md;
  const contactLikeRe = /(@|\bemail\b|\bmob\b|\bph\b|\bphone\b|\btel\b|\bfax\b|\bweb\b|\bpin\b|\d{5,})/i;
  return md.split("\n").map((line) => {
    const m = line.match(/^\s*(?:\*\*([^*][^\n]*?)\*\*|_([^_][^\n]*?)_)\s*:?\s*$/);
    if (!m) return line;
    const inner = (m[1] ?? m[2]).trim();
    if (!inner || inner.length > 120) return line;
    if (/[:：]\s*\S/.test(inner)) return line; // "Email: foo" style
    if (contactLikeRe.test(inner)) return line;
    return `### ${cleanHeading(inner)}`;
  }).join("\n");
}

/** Split markdown into top-level sections by H1..H4 headings. */
function splitSections(md: string) {
  const lines = md.split("\n");
  const sections: { title: string; body: string; depth: number }[] = [];
  let current: { title: string; body: string; depth: number } | null = null;
  let preamble: string[] = [];
  // Match a standalone bold pseudo-heading like `**Achievements in 2022-23**`
  // or `**VTU Events:**`. The scraped pages use these instead of real
  // markdown headings to introduce each sub-table inside an accordion;
  // promoting them to depth-5 sections keeps the matching table beneath the
  // right label.
  const boldHeadingRe = /^\s*\*\*([^*\n][^*\n]{1,80}?)\*\*\s*:?\s*$/;
  // Lines that look like contact / address data must never be promoted to a
  // pseudo-heading even when scraped as standalone bold text — e.g.
  // "**Email: foo@bar.com**", "**Mob: 9845…**", "**#72, 3rd floor**",
  // "**Mysore – 570008**". These belong in the section body, not as a
  // separate accordion title.
  const contactLikeRe = /(@|\bemail\b|\be[\s-]?mail\b|\bmob\b|\bph\b|\bphone\b|\btel\b|\bfax\b|\bweb\b|\bpin\b|^\s*#\d|[-–]\s*\d{6}\b|\d{5,})/i;
  let sawRealHeading = false;
  for (const line of lines) {
    const m = /^(#{1,4})\s+(.+?)\s*$/.exec(line);
    const bm = !m ? boldHeadingRe.exec(line) : null;
    if (m && m[1].length <= 4) {
      if (current) sections.push(current);
      current = { title: cleanHeading(m[2]), body: "", depth: m[1].length };
      sawRealHeading = true;
    } else if (
      bm &&
      sawRealHeading &&
      !contactLikeRe.test(bm[1]) &&
      // Don't open a new pseudo-section when the previous section is also a
      // pseudo (depth 5) with no body yet — that means we're sitting in a
      // run of bold lines (org name + address + phone + email). Keep the
      // first bold as the heading and let the rest become body content.
      !(current && current.depth === 5 && !current.body.trim())
    ) {
      if (current) sections.push(current);
      current = { title: cleanHeading(bm[1]), body: "", depth: 5 };
    } else if (current) {
      current.body += line + "\n";
    } else {
      preamble.push(line);
    }
  }
  if (current) sections.push(current);
  return { preamble: preamble.join("\n").trim(), sections: sections.filter((s) => s.body.trim() || s.title) };
}


type SectionNode = { title: string; body: string; depth: number; children: SectionNode[] };
function buildSectionTree(flat: { title: string; body: string; depth: number }[]): SectionNode[] {
  const root: SectionNode[] = [];
  const stack: SectionNode[] = [];
  for (const s of flat) {
    const node: SectionNode = { ...s, children: [] };
    while (stack.length && stack[stack.length - 1].depth >= s.depth) stack.pop();
    if (stack.length) stack[stack.length - 1].children.push(node);
    else root.push(node);
    stack.push(node);
  }
  return root;
}

/** Extract a top-level (####) section block by title regex. Everything from
 *  the matching H4 line until the next H4 (exclusive) — H1..H3 in between
 *  are treated as belonging inside the H4 block. Returns the extracted
 *  markdown (including its H4 header) and the remaining markdown with that
 *  block removed. */
function extractH4Block(md: string, titleRe: RegExp): { extracted: string; remaining: string } {
  const lines = md.split("\n");
  const out: string[] = [];
  const ext: string[] = [];
  let inBlock = false;
  for (const line of lines) {
    const h4 = /^####\s+(.+?)\s*$/.exec(line);
    if (h4) {
      const cleanT = cleanHeading(h4[1])
        .replace(/\*\*/g, "")
        .replace(/[:：]+$/, "")
        .trim();
      if (titleRe.test(cleanT)) {
        inBlock = true;
        ext.push(line);
        continue;
      } else if (inBlock) {
        inBlock = false;
      }
    }
    if (inBlock) ext.push(line);
    else out.push(line);
  }
  return { extracted: ext.join("\n").trim(), remaining: out.join("\n") };
}

function extractLabVideos(md: string): { extracted: string; remaining: string } {
  const byHeading = extractH4Block(md, /^lab\s*videos?$/i);
  const channelLines: string[] = [];
  let remainingLines = byHeading.remaining.split("\n").filter((line) => {
    if (/department\s+youtube\s+channel\s+for\s+lab\s+videos?/i.test(line)) {
      channelLines.push(line.trim().replace(/^#{1,6}\s*/, ""));
      return false;
    }
    return true;
  });
  // Drop the matched "#### Lab Videos" wrapper heading line itself — callers
  // only want the video content beneath it. (The fallback path below never
  // includes a wrapper heading in the first place, so both code paths now
  // consistently return wrapper-free content.)
  let extracted = byHeading.extracted.replace(/^####\s+.*\n?/, "");

  // `sanitizeMarkdown` removes the empty "Lab Videos" wrapper heading when
  // the first real content is a nested heading. In that case, recover the
  // consecutive video-link sections (mp4/wmv/OneDrive video links) directly.
  if (!extracted.trim()) {
    const isHeading = (line: string) => /^(#{1,6})\s+/.test(line);
    const hasVideo = (chunk: string) => /\.(?:mp4|wmv)\b|sharepoint\.com\/:v:/i.test(chunk);
    let start = -1;
    let end = -1;
    for (let i = 0; i < remainingLines.length; i++) {
      if (!isHeading(remainingLines[i])) continue;
      let j = i + 1;
      while (j < remainingLines.length && !isHeading(remainingLines[j])) j++;
      const chunk = remainingLines.slice(i, j).join("\n");
      if (!hasVideo(chunk)) continue;
      start = i;
      end = j;
      while (end < remainingLines.length && isHeading(remainingLines[end])) {
        let next = end + 1;
        while (next < remainingLines.length && !isHeading(remainingLines[next])) next++;
        const nextChunk = remainingLines.slice(end, next).join("\n");
        if (!hasVideo(nextChunk)) break;
        end = next;
      }
      break;
    }
    if (start >= 0) {
      extracted = remainingLines.slice(start, end).join("\n").trim();
      remainingLines = [...remainingLines.slice(0, start), ...remainingLines.slice(end)];
    }
  }
  return {
    extracted: [...channelLines, extracted].filter((part) => part.trim()).join("\n\n").trim(),
    remaining: remainingLines.join("\n"),
  };
}


/** Parse infrastructure markdown into image/text blocks for a zigzag layout. */
function parseInfraBlocks(md: string): { image: string | null; alt: string; text: string; title: string }[] {
  const blocks: { image: string | null; alt: string; text: string; title: string }[] = [];
  const lines = md.split("\n");
  let cur: { image: string | null; alt: string; text: string; title: string } = { image: null, alt: "", text: "", title: "" };
  const flush = () => {
    if (cur.image || cur.text.trim() || cur.title) blocks.push(cur);
    cur = { image: null, alt: "", text: "", title: "" };
  };
  const LAB_NAME_RE = /^\s*(?:[*_]{1,3})?\s*lab\s*name\s*[–\-:]\s*(.+?)\s*(?:[*_]{1,3})?\s*$/i;
  // Matches a broken image reference left as just "!" or "![...]()" with no
  // resolvable src — the markdown parser would otherwise render it as a stray
  // exclamation mark at the top of a card.
  const BROKEN_IMG_RE = /^\s*!\s*(?:\[[^\]]*\]\(\s*\))?\s*$/;
  for (const line of lines) {
    const h = /^(#{1,4})\s+(.+?)\s*$/.exec(line);
    const labName = LAB_NAME_RE.exec(line);
    const img = /!\[([^\]]*)\]\(([^)\s]+\.(?:jpe?g|png|webp))(?:\s+"[^"]*")?\)/.exec(line);
    if (h) {
      flush();
      cur.title = h[2]
        .replace(/\[([^\]]+)\]\([^)]*\)?/g, "$1")
        .replace(/[\[\]()]/g, "")
        .replace(/\\#\S+/g, "")
        .replace(/https?:\/\/\S+/g, "")
        .replace(/\s+/g, " ")
        .trim();
    } else if (labName) {
      // Treat "Lab Name – X" as the start of a new lab block.
      flush();
      cur.title = labName[1].replace(/[*_`]+/g, "").trim();
    } else if (img) {
      const src = img[2];
      const lower = src.toLowerCase();
      if (/logo|favicon|admin-ajax|share_icons|visit_icons|ultimate-social|atme-final-logo|icons_theme|placeholder|spacer/.test(lower)) continue;
      if (cur.image) flush();
      cur.image = src;
      cur.alt = img[1] || "";
    } else if (BROKEN_IMG_RE.test(line)) {
      // Skip broken image artefacts entirely.
      continue;
    } else {
      cur.text += line + "\n";
    }
  }
  flush();
  return blocks.filter((b) => b.image || b.text.trim().length > 20 || b.title);
}

const PROSE_CLS = "prose prose-slate max-w-none prose-headings:font-display prose-headings:text-[#129199] prose-a:text-[#129199] prose-img:rounded-lg prose-img:w-auto prose-img:h-auto prose-img:max-w-full prose-img:max-h-[420px] prose-img:object-contain prose-img:mx-auto prose-img:block prose-img:bg-white prose-img:border prose-img:border-border prose-p:text-justify hyphens-auto";

const TABLE_CLS = "w-full table-auto border-collapse text-sm md:text-base border border-[#f5c518] [&_th]:border [&_th]:border-[#f5c518] [&_td]:border [&_td]:border-[#f5c518] [&_th]:bg-[#129199] [&_th]:text-white [&_th]:text-center [&_th]:p-3 [&_th]:align-middle [&_th]:whitespace-normal [&_th]:break-words [&_td]:p-3 [&_td]:text-left [&_td]:align-middle [&_td]:whitespace-normal [&_td]:break-words";

function reactNodeToText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(reactNodeToText).join("");
  if (isValidElement(node)) return reactNodeToText((node.props as { children?: ReactNode }).children);
  return "";
}

// Visit-report meta labels (Date of Visit, Venue, Convenor, Accompanying
// Faculty) get a distinct teal/yellow-underline centered treatment on DS —
// makes the report header fields easy to scan against the surrounding prose.
const DS_VISIT_META_RE = /^(Date of Visit|Venue|Industry Visit Convenor|Accompanying Faculty Members)\s*[:\-]/i;

// PEO/PO/PSO list items lead with a code like "PEO1", "PO1", "PSO1" — bold
// and teal-color just that code (not the whole line) instead of numbering the list.
const OUTCOME_LABEL_RE = /^((?:PEO|PSO|PO)\s*\d+)/;
function OutcomeItem({ text }: { text: string }) {
  const m = text.match(OUTCOME_LABEL_RE);
  if (!m) return <p className="leading-relaxed">{text}</p>;
  return (
    <p className="leading-relaxed">
      <span className="font-bold text-[#129199]">{m[1]}</span>
      {text.slice(m[1].length)}
    </p>
  );
}

function MD({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ children }) => <h3 className="text-xl font-semibold mt-8 mb-3 pb-2 border-b border-[#129199]/20 text-[#129199] font-display">{children}</h3>,
        h2: ({ children }) => <h3 className="text-xl font-semibold mt-8 mb-3 pb-2 border-b border-[#129199]/20 text-[#129199] font-display">{children}</h3>,
        h3: ({ children }) => <h4 className="text-base font-semibold mt-6 mb-2 text-[#129199] font-display">{children}</h4>,
        h4: ({ children }) => <h4 className="text-base font-semibold mt-6 mb-2 text-[#129199] font-display">{children}</h4>,
        h5: ({ children }) => <h4 className="text-base font-semibold mt-6 mb-2 text-[#129199] font-display">{children}</h4>,
        h6: ({ children }) => <h4 className="text-base font-semibold mt-6 mb-2 text-[#129199] font-display">{children}</h4>,
        a: ({ href, children }) => {
          const deptSlug = useContext(DeptContext);
          const result = rewriteHref(href, deptSlug);
          if (result.kind === "drop") {
            return <span className="font-semibold text-[#0d3438]">{children}</span>;
          }
          if (result.kind === "facultyInternal") {
            return (
              <Link
                to="/departments/$slug/faculty/$facultyId"
                params={{ slug: result.deptSlug, facultyId: result.facultyId }}
                className="text-[#129199] border border-[#f5c518] rounded px-1.5 py-0.5 hover:bg-[#fff4c2] transition-colors inline-block my-0.5"
              >
                {children}
              </Link>
            );
          }
          const finalHref = rewritePdfHref(result.href);
          return (
            <a
              href={finalHref}
              target={finalHref?.startsWith('http') ? '_blank' : undefined}
              rel={finalHref?.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-[#129199] border border-[#f5c518] rounded px-1.5 py-0.5 hover:bg-[#fff4c2] transition-colors inline-block my-0.5"
            >
              {children}
            </a>
          );
        },

        p: ({ children }) => {
          const deptSlug = useContext(DeptContext);
          if (deptSlug === "ds" && DS_VISIT_META_RE.test(reactNodeToText(children).trim())) {
            return (
              <p className="text-center font-semibold text-[#129199] underline decoration-[#f5c518] decoration-2 underline-offset-4">
                {children}
              </p>
            );
          }
          return <p>{children}</p>;
        },

        table: ({ children }) => (
          <div className="table-scroll my-6 -mx-2 md:mx-0 rounded-lg overflow-hidden border border-[#f5c518]">
            <table className={TABLE_CLS}>{children}</table>
          </div>
        ),
        img: ({ src, alt }) => {
          const resolved = rewriteImageSrc(String(src || ""));
          if (!resolved) return null;
          return <img src={resolved} alt={alt || ""} loading="lazy" className="mx-auto my-6 block h-auto max-h-[420px] max-w-full rounded-lg border border-border bg-white object-contain" />;
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

function DeptSubPage() {
  const { dept, page, pageKey, isPlaceholder, canonKey, allPages } = Route.useLoaderData();
  // Prefer the sidebar menu label (e.g. "Industry Interface") over the raw
  // scraped page title (which often includes the dept prefix like
  // "Civil Industry Interface" or "CV Industry Interface").
  const cfgItems = DEPT_PAGES[resolveDeptSlug(dept.slug)] || [];
  const menuLabel = cfgItems.find((i) => i.key === pageKey)?.label;
  const rawTitle = titleCase(
    stripMdEmphasis(
      menuLabel ||
        (page.title?.replace(/\s*-\s*ATME.*$/i, "").trim() || pageKey.replace(/-/g, " "))
    )
      .replace(/\s+\d+\s*$/, "")
      .trim()
  );
  // Normalize titles like "Cs Infrastructure", "Ec Infrastructure",
  // "Me Infrastructure" down to a clean "Infrastructure" heading across
  // every department page hero.
  const niceTitle = /infrastructure/i.test(rawTitle) ? "Infrastructure" : rawTitle;
  const rewritten = rewritePdfUrls(page.markdown || "");
  const cleaned = sanitizeMarkdown(rewritten);
  // Remove any in-page banner image so it doesn't render twice; we always
  // show the department's consistent banner instead. Scoped to the About
  // page only — DepartmentAboutView never renders bodyMd at all, so this is
  // a no-op there. On every other page type (Achievements, Placements,
  // Research, Activities…) the "first image" is real content (e.g. a
  // recruiters logo grid or an event photo), not a redundant hero banner,
  // so it must not be stripped.
  const isAboutForBanner =
    canonKey === "about" ||
    /^about[-_]|about-the-department|about-mechanical-department|ee-about-the-department|chem-about-the-department/.test(
      (canonKey || pageKey).toLowerCase()
    );
  const inlineBanner = !isPlaceholder && isAboutForBanner ? pickBannerImage(cleaned) : null;
  let bodyMd = titleCaseMarkdownHeadings(cleaned);
  if (inlineBanner) bodyMd = bodyMd.replace(inlineBanner.raw, "").replace(/^\s*\n+/, "");

  // Lab Videos: aggregate from all of this department's scraped pages
  // (typically `innovative-teaching-learning-methods` for CSE and the
  // `resources` page for other departments). Strip them out of any page
  // they originally appeared on so we don't render them twice.
  const deptPagesAll = allPages;
  const normalize = (raw: string) =>
    raw ? titleCaseMarkdownHeadings(sanitizeMarkdown(rewritePdfUrls(raw))) : "";
  const labVideosParts: string[] = [];
  for (const kk of Object.keys(deptPagesAll)) {
    const rawPmd = titleCaseMarkdownHeadings(rewritePdfUrls(deptPagesAll[kk].markdown || ""));
    if (!rawPmd) continue;
    const { extracted } = extractLabVideos(rawPmd);
    const cleanedExtracted = normalize(extracted);
    if (cleanedExtracted.trim()) labVideosParts.push(cleanedExtracted.trim());
  }
  // Dedupe identical blocks (same content can appear in two scraped pages).
  const labVideosMd = Array.from(new Set(labVideosParts)).join("\n\n");
  // Always strip Lab Videos from the current page body so it only renders
  // inside the dedicated LabVideosPanel on Student Learning.
  bodyMd = extractLabVideos(bodyMd).remaining;

  // Identify special layouts based on either canonical key or scraped key text.
  const k = (canonKey || pageKey).toLowerCase();
  const isAbout = canonKey === "about" || /^about[-_]|about-the-department|about-mechanical-department|ee-about-the-department|chem-about-the-department/.test(k);
  const isInfra = /infrastructure/.test(k);
  // Pages that should always render as a heading-segregated PDF grid
  // (COE, Magazine, Newsletter). Achievements / Industry Interface /
  // Activities are rendered as nested accordions instead (see isAccordionPage).
  const forcePdfGrid =
    canonKey === "coe" ||
    canonKey === "magazine" ||
    canonKey === "news-letter" ||
    /magazine|magzine|news.?letter|e-news|coe-|calendar.of.events/.test(k);
  const forceAccordion =
    canonKey === "achievements" ||
    canonKey === "industry-interface" ||
    canonKey === "co-curricular" ||
    /achievement|achivement|industry|co-curricular|extra-curricular|extracurricular|activit|professional-society/.test(k);
  const isAccordionPage = forceAccordion || (!forcePdfGrid && /research|innovative|teaching|placement|student-learning/.test(k));
  const isPdfGrid = forcePdfGrid || /magazine|news|coe|magzine|letter|calendar/.test(k);
  const hasManyPdfs = (bodyMd.match(/\.pdf(?![a-z])/gi) || []).length >= 3;
  const useGrid = !isAccordionPage && (isPdfGrid || hasManyPdfs);
  // Plain-text length of bodyMd (strip md syntax) to detect "thin" pages.
  const plainTextLen = bodyMd
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/[`*_#>|\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim().length;
  const isThin = plainTextLen < 400;

  // CSE-only exception: Lab Videos belongs under Teaching Methods (matching
  // the old site), not Student Learning like every other department.
  // `canonKey` is null for real scraped pages (only placeholder pages set
  // it), so match against `k` — the already-lowercased canonKey/pageKey
  // fallback used by every other branch below.
  const isCseTeachingMethods = dept.slug === "cse" && k === "innovative-teaching-learning-methods";
  // ECE/EEE's Student Learning page shouldn't show the bottom Course Videos
  // panel — it duplicated the department YouTube channel link already
  // shown in the top resource card. Physics/Chemistry keep it: their panel
  // carries a per-experiment lab-video table, not just the channel link.
  const suppressLabVideos = STUDENT_LEARNING_2026_27[dept.slug] && dept.slug !== "physics" && dept.slug !== "chemistry";
  const studentLearningLabVideosMd = suppressLabVideos ? "" : labVideosMd;

  return (
    <DeptContext.Provider value={dept.slug}>
    <Layout>

      <section
        className="relative w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, #0a2a2d 0%, #0d3438 25%, #129199 70%, rgba(18,145,153,0.9) 100%)",
        }}
      >
        <div aria-hidden className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(245,197,24,0.25), transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.15), transparent 50%)" }} />
        <img
          src={resolveAssetUrl(atmeLogo.url)}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 h-24 sm:h-36 md:h-48 w-auto opacity-15"
        />
        <div aria-hidden className="absolute left-0 right-0 bottom-0 h-1.5" style={{ background: "linear-gradient(90deg, #f5c518, #ffd95a, #f5c518)" }} />
        <div className="relative container-page py-10 sm:py-12 md:py-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white max-w-3xl mx-auto leading-tight drop-shadow-lg">
            {niceTitle}
          </h1>
          <div className="mt-4 mx-auto h-1 w-20 rounded-full" style={{ backgroundColor: "#f5c518" }} />
        </div>
      </section>



      <DeptSubNav slug={dept.slug} activeKey={pageKey} />

      <nav aria-label="Breadcrumb" className="w-full bg-[#f8fafb] border-b border-[#129199]/10">
        <div className="container-page py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="text-[#129199] hover:underline">Home</Link>
            </li>
            <li><ChevronRight className="h-3.5 w-3.5" /></li>
            <li>
              <Link to="/departments" className="text-[#129199] hover:underline">Departments</Link>
            </li>
            <li><ChevronRight className="h-3.5 w-3.5" /></li>
            <li>
              <Link
                to="/departments/$slug"
                params={{ slug: dept.slug }}
                className="text-[#129199] hover:underline"
              >
                {dept.name}
              </Link>
            </li>
            <li><ChevronRight className="h-3.5 w-3.5" /></li>
            <li className="font-semibold text-foreground" aria-current="page">{niceTitle}</li>
          </ol>
        </div>
      </nav>

      <article className="container-page pb-20 content-flow">
        <div className="content-card content-prose">
          {/* Student Learning Centric — semester tables (renders for both
              placeholder and scraped variants so the layout stays uniform). */}
          {canonKey === "student-learning-centric" || /student-learning|rd-for-students|^resources?$|^resourses?$|-resources?$|^civil-resources$|^cyber-security-resources$|^mca-resources$|^resources-mba$|^teachers-teaching-analysis$/.test(k) ? (
            <StudentLearningCentric md={bodyMd} deptName={dept.name} slug={dept.slug} labVideosMd={studentLearningLabVideosMd} />
          ) : isAbout ? (
            <DepartmentAboutView dept={dept} md={isPlaceholder || isThin ? "" : bodyMd} />
          ) : canonKey === "infrastructure" || isInfra ? (
            (() => {
              const scraped = INFRA_DATA[dept.slug];
              if (scraped && scraped.sections.length > 0) {
                return <InfraScrapedView data={scraped} deptName={dept.name} deptSlug={dept.slug} />;
              }
              return <ContentComingSoon title="Infrastructure" deptName={dept.name} />;
            })()

          ) : isPlaceholder ? (
            <ContentComingSoon title={niceTitle} deptName={dept.name} />


          ) : forcePdfGrid || (useGrid && !/research/.test(k)) ? (
            <PdfGridSections
              md={bodyMd}
              fallbackTitle={niceTitle}
              flat={canonKey === "achievements" || canonKey === "co-curricular"}
            />

          ) : canonKey === "achievements" || /achievement|achivement/.test(k) ? (
            (() => {
              const { images: posterImages, remaining } = extractLeadingPosterImages(bodyMd);
              return (
                <>
                  <PosterCarousel images={posterImages} />
                  <SimpleTwoLevelAccordion md={remaining} />
                </>
              );
            })()
          ) : isAccordionPage ? (
            <>
              <SimpleTwoLevelAccordion
                md={bodyMd}
                openFirst={/research/.test(k)}
                inlineTablePdfs={canonKey === "co-curricular" || canonKey === "industry-interface" || /co-curricular|extra-curricular|extracurricular|activit|industry/.test(k)}
                // AIML's Research page source is a strict bullet-list outline
                // (Research / Publications, each with several levels of pure
                // grouping labels) — every grouping label should become its
                // own nested accordion instead of flattening to the default
                // plain-divider treatment used elsewhere.
                alwaysAccordion={dept.slug === "aiml" && pageKey === "aiml-research"}
                // Placed-student photo cards already carry their own baked-in
                // yellow border — render them uncropped in a 4-column grid
                // instead of the shared 300x250 row-image box.
                cropImages={!(dept.slug === "ds" && pageKey === "cseds-placements")}
              />
              {isCseTeachingMethods && labVideosMd && <LabVideosPanel md={labVideosMd} deptName={dept.name} />}
            </>
          ) : (
            <div className={PROSE_CLS}>
              <MD>{bodyMd}</MD>
            </div>
          )}
        </div>
      </article>
    </Layout>
    </DeptContext.Provider>
  );
}



function ContentComingSoon({ title, deptName }: { title: string; deptName: string }) {
  return (
    <div className="rounded-2xl border border-[#129199]/20 bg-white p-8 md:p-12 text-center shadow-sm">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#129199]/10 text-[#129199]">
        <ClipboardList className="h-7 w-7" />
      </div>
      <h2 className="font-display text-xl md:text-2xl font-bold text-[#129199]">
        {title}
      </h2>
      <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
        Coming Soon
      </p>
    </div>
  );
}



function InfrastructureZigzag({ md, slug, deptName }: { md: string; slug?: string; deptName?: string }) {
  // Prefer the recently-added, curated INFRA_DATA for this dept over the
  // older scraped markdown (which often references broken image URLs).
  const scraped = slug ? INFRA_DATA[slug] : undefined;
  if (scraped && scraped.sections.length > 0) {
    return <InfraScrapedView data={scraped} deptName={deptName || ""} deptSlug={slug} />;
  }
  const blocks = parseInfraBlocks(md);
  if (blocks.length === 0) {
    return null;
  }


  return (
    <div className="space-y-10">
      {blocks.map((b, i) => {
        const reverse = i % 2 === 1;
        return (
          <div
            key={i}
            className={`grid gap-6 md:gap-10 ${b.image ? "md:grid-cols-2" : "md:grid-cols-1"} items-center rounded-2xl border border-[#129199]/15 bg-white p-5 md:p-8 shadow-sm ${b.image && reverse ? "md:[&>div:first-child]:order-2" : ""}`}
          >
            {b.image && (
              <div>
                <img
                  src={b.image}
                  alt={b.alt || b.title || "Lab"}
                  loading="lazy"
                  className="w-full h-64 md:h-72 object-cover rounded-xl border border-[#f5c518] bg-white"
                  onError={(e) => { const el = e.currentTarget as HTMLImageElement; el.style.display = "none"; const parent = el.parentElement; if (parent) parent.style.display = "none"; }}
                />
              </div>
            )}
            <div>
              {b.title && (
                <h3 className="font-display text-xl md:text-2xl font-bold text-[#129199] mb-3">
                  {titleCase(b.title)}
                </h3>
              )}
              <div className={PROSE_CLS}>
                <MD>{b.text.trim()}</MD>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}


function AccordionedContent({ md, openFirst = false, flat = false }: { md: string; openFirst?: boolean; flat?: boolean }) {
  const { preamble, sections: rawSections } = splitSections(md);
  // Matches the WordPress "[table 'N' not found /]" shortcode that the
  // scraper picks up, with optional escaping backslashes around the brackets.
  const tableMissingRe = /\\?\[\s*table\s+["'`]?\d+["'`]?\s+not\s+found[^\]]*\\?\]/gi;
  // Strip noise tokens (missing-table placeholders, stray "\" / "/" lines,
  // page-X-of-Y / zoom-100% scraper artefacts) so we can correctly detect
  // sections that are effectively empty.
  function cleanBody(b: string): string {
    let out = b
      .replace(tableMissingRe, "")
      .replace(/^\s*[\\/]+\s*$/gm, "")
      // Strip PDF-viewer chrome artefacts the scraper picked up, including
      // when wrapped in markdown emphasis (**Page 1 / 2**, *Zoom 100%*, etc.)
      .replace(/^\s*[*_`]*\s*page\s+\d+\s*\/\s*\d+\s*[*_`]*\s*$/gim, "")
      .replace(/^\s*[*_`]*\s*zoom\s+\d+\s*%\s*[*_`]*\s*$/gim, "")
      // Strip any line that is only punctuation / escape chars left behind.
      .replace(/^[\s\\/`*_~\-]+$/gm, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
    // If after cleaning the section contains no links, no tables, and no
    // real prose (only short bold labels like "**Virtual Lab 2021-22**"
    // orphaned by missing PDF embeds / missing tables), treat as empty.
    // A genuine bullet list (even a short one, e.g. a 2-event activities
    // year) counts as real content and must not be discarded by the length
    // heuristic below.
    const hasLink = /\[[^\]]+\]\([^)]+\)/.test(out);
    const hasTable = /\|/.test(out);
    const hasList = /^\s*[-*]\s+\S/m.test(out);
    const stripped = out
      .replace(/^#+\s.*$/gm, "")
      .replace(/[*_`#>]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (!hasLink && !hasTable && !hasList && stripped.length < 80) return "";
    return out;
  }
  let sections = rawSections.map((s) => ({ ...s, body: cleanBody(s.body) }));
  let extraPreamble = "";
  if (flat && sections.length > 0) {
    // For achievements / activities pages, flatten everything: drop a single
    // wrapping H2/H3 header ("## Achievements") whose only role is to title
    // the page, then treat every remaining heading (H2..H4) as a sibling
    // top-level accordion. Bold pseudo-headings (depth 5) stay nested as
    // children of the immediately preceding top-level heading.
    const realDepths = sections.filter((s) => s.depth <= 4).map((s) => s.depth);
    const minRealDepth = realDepths.length ? Math.min(...realDepths) : 4;
    if (minRealDepth < 4 && sections.length > 1) {
      // Strip a single leading wrapper section if its title is generic
      // ("Achievements", "Activities", "Co-Curricular …"). Its body becomes
      // preamble so any intro images/text aren't lost.
      const first = sections[0];
      const wrapperRe = /^(achievement|achivement|activit|co[\s-]?curricular|extra[\s-]?curricular|extracurricular|industry|professional society)/i;
      if (first.depth === minRealDepth && wrapperRe.test(cleanSectionTitle(first.title))) {
        if (first.body.trim()) extraPreamble = first.body;
        sections = sections.slice(1);
      }
    }
    // Re-stamp depths so every real heading is depth 4 (top-level accordion)
    // and bold pseudo-headings stay at depth 5 (nested inside).
    sections = sections.map((s) => ({ ...s, depth: s.depth <= 4 ? 4 : 5 }));
    // Merge any leading pseudo-heading sections (depth 5) that appear before
    // the first real heading into preamble. Also drop sections whose title is
    // clearly contact / address data ("Email: …", "Mob: …", "CR-5, …",
    // "Mysore – 570 008"). These are body lines that the scraper bolded and
    // we never want them shown as accordion headings.
    const contactTitleRe = /@|\bemail\b|\be[\s-]?mail\b|\bmob\b|\bph\b|\bphone\b|\btel\b|\bfax\b|\bweb\b|\bpin\b|\b\d{5,}\b|[-–]\s*\d{3}\s*\d{3}\b|^#\d|^\d+\b/i;
    const merged: typeof sections = [];
    let leadingBuf = "";
    let seenRealAt = -1;
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].depth === 4) { seenRealAt = i; break; }
    }
    for (let i = 0; i < sections.length; i++) {
      const s = sections[i];
      const titlePlain = cleanSectionTitle(s.title);
      // Bold pseudo before the first real heading → fold into preamble.
      if (seenRealAt > 0 && i < seenRealAt && s.depth === 5) {
        leadingBuf += `**${titlePlain}**\n${s.body}\n`;
        continue;
      }
      // Contact-data titles → fold into the previous section's body.
      if (contactTitleRe.test(titlePlain)) {
        if (merged.length) {
          merged[merged.length - 1].body += `\n**${titlePlain}**\n${s.body}`;
        } else {
          leadingBuf += `**${titlePlain}**\n${s.body}\n`;
        }
        continue;
      }
      merged.push(s);
    }
    if (leadingBuf.trim()) extraPreamble = (extraPreamble + "\n\n" + leadingBuf).trim();
    sections = merged;
  }
  if (sections.length < 2) {
    const cleaned = cleanBody(md);
    if (!cleaned) return null;
    return <div className={PROSE_CLS}><MD>{cleaned}</MD></div>;
  }
  const tree = buildSectionTree(sections);
  // Recursively prune nodes whose body is empty AND have no surviving children.
  function prune(nodes: SectionNode[]): SectionNode[] {
    const out: SectionNode[] = [];
    for (const n of nodes) {
      const children = prune(n.children);
      const body = cleanBody(n.body);
      if (!body && children.length === 0) continue;
      out.push({ ...n, body, children });
    }
    return out;
  }
  // Dedupe sibling nodes that share the same normalized title — the scraped
  // achievements pages sometimes repeat sections like "AWARDS" / "BOOKS
  // PUBLISHED" / "FACULTIES WITH PHD". Merge their bodies and children into
  // the first occurrence so each accordion appears only once.
  function dedupe(nodes: SectionNode[]): SectionNode[] {
    const seen = new Map<string, SectionNode>();
    const out: SectionNode[] = [];
    for (const n of nodes) {
      const key = cleanSectionTitle(n.title).toLowerCase().replace(/\s+/g, " ").trim();
      const existing = key ? seen.get(key) : undefined;
      if (existing) {
        if (n.body.trim()) {
          existing.body = (existing.body + "\n\n" + n.body).trim();
        }
        existing.children = dedupe([...existing.children, ...n.children]);
      } else {
        const node = { ...n, children: dedupe(n.children) };
        if (key) seen.set(key, node);
        out.push(node);
      }
    }
    return out;
  }
  const pruned = dedupe(prune(tree));
  const fullPreamble = [preamble, extraPreamble].filter((s) => s && s.trim()).join("\n\n");
  if (pruned.length === 0 && !fullPreamble.trim()) return null;
  return (
    <div className="space-y-6">
      {fullPreamble && (
        <div className={PROSE_CLS}><MD>{promoteBoldHeadings(fullPreamble)}</MD></div>
      )}
      <NestedAccordion nodes={pruned} level={0} keyPrefix="s" openFirst={openFirst} />
    </div>
  );
}

/** Pull a leading run of poster/banner images (e.g. event posters dropped
 *  right under the page's own "## Achievements" wrapper heading, before any
 *  real section) out of the markdown so they can render as a standalone
 *  carousel instead of getting swallowed into the first accordion. Only
 *  fires when the wrapper heading's body is images and nothing else — real
 *  content there is left untouched. */
function extractLeadingPosterImages(md: string): { images: { alt: string; src: string }[]; remaining: string } {
  const imgOnlyLineRe = /^\s*(?:!\[[^\]]*\]\([^)\s]+(?:\s+"[^"]*")?\)\s*)+$/;
  const imgTokenRe = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
  const headingRe = /^#{1,4}\s+.+$/;
  const lines = md.split("\n");
  const firstHeadingIdx = lines.findIndex((l) => headingRe.test(l));
  if (firstHeadingIdx === -1) return { images: [], remaining: md };
  let j = firstHeadingIdx + 1;
  const images: { alt: string; src: string }[] = [];
  while (j < lines.length && !headingRe.test(lines[j])) {
    const line = lines[j];
    if (line.trim() === "") { j++; continue; }
    if (!imgOnlyLineRe.test(line)) return { images: [], remaining: md };
    imgTokenRe.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = imgTokenRe.exec(line))) images.push({ alt: m[1], src: m[2] });
    j++;
  }
  if (images.length < 2) return { images: [], remaining: md };
  const remainingLines = [...lines.slice(0, firstHeadingIdx), ...lines.slice(j)];
  return { images, remaining: remainingLines.join("\n") };
}

function PosterCarousel({ images }: { images: { alt: string; src: string }[] }) {
  const [active, setActive] = useState(0);
  if (images.length === 0) return null;
  const cur = images[active];
  return (
    <div className="mb-8">
      <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md rounded-2xl border border-[#129199]/15 bg-white shadow-sm overflow-hidden">
        <img
          src={resolveAssetUrl(rewriteImageSrc(cur.src))}
          alt={cur.alt || `Poster ${active + 1}`}
          className="w-full h-40 sm:h-52 md:h-60 object-contain bg-white"
        />
        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous poster"
              onClick={() => setActive((i) => (i - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[#129199] shadow hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next poster"
              onClick={() => setActive((i) => (i + 1) % images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[#129199] shadow hover:bg-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {images.map((im, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show poster ${i + 1}`}
              className={`h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                i === active ? "border-[#f5c518]" : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img src={resolveAssetUrl(rewriteImageSrc(im.src))} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/** Split markdown into a flat list of top-level "#"-heading sections, each
 *  optionally holding nested standalone-`**Bold**`-line sub-sections. Used by
 *  achievements pages, which need a reliable two-level accordion (top-level
 *  headings like "Faculty Achievements" / "Student Achievements", nested
 *  bold sub-groups like "Sports Achievements") without the extra generality
 *  (wrapper-stripping, contact-line detection, depth-flattening) that the
 *  shared splitSections/AccordionedContent "flat" pipeline applies. */
// Strip known WordPress-scraper noise (missing-table shortcode remnants,
// stray blank-line runs) without touching real content — deliberately
// conservative so no genuine section body is ever silently dropped.
function cleanAccordionBody(b: string): string {
  return b
    .replace(/\\?\[\s*table\s+["'`]?\d+["'`]?\s+not\s+found[^\]]*\\?\]/gi, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function pruneAccordionTree(nodes: SectionNode[]): SectionNode[] {
  const out: SectionNode[] = [];
  for (const n of nodes) {
    const children = pruneAccordionTree(n.children);
    const body = cleanAccordionBody(n.body);
    if (!body && children.length === 0) continue;
    out.push({ ...n, body, children });
  }
  return out;
}

function normalizeAccordionTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[“”"'’‘]/g, "")
    .replace(/^_+|_+$/g, "")
    .replace(/[:.\s]+$/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// A WordPress report body routinely restates its own heading as the very
// first line, in bold, on its own line — that line splits out as a
// standalone-bold "pseudo-heading" child (see boldHeadingRe below), sitting
// alongside whatever other bold sub-headings (e.g. "Objectives:",
// "Outcomes:") follow it at the same depth. Left alone, the real heading
// (now with an empty body) renders as a divider immediately followed by an
// accordion with the identical title — a visible duplicate — while the
// "Objectives"/"Outcomes" siblings float outside it instead of nesting
// inside. Fix: find the same-titled child, absorb its body as the parent's
// own body, and splice its children into the parent's children in its place
// so they end up nested under the real heading like everything else.
function mergeSelfTitledChild(nodes: SectionNode[]): SectionNode[] {
  return nodes.map((n) => {
    let body = n.body;
    let children = n.children;
    if (!body.trim()) {
      const idx = children.findIndex(
        (c) => normalizeAccordionTitle(c.title) === normalizeAccordionTitle(n.title)
      );
      if (idx !== -1) {
        const self = children[idx];
        body = self.body;
        children = [...children.slice(0, idx), ...self.children, ...children.slice(idx + 1)];
      }
    }
    return { ...n, body, children: mergeSelfTitledChild(children) };
  });
}

// Merge sibling nodes that share the same title (the scraper sometimes
// restates a heading at a different depth right above the real content).
function dedupeAccordionTree(nodes: SectionNode[]): SectionNode[] {
  const seen = new Map<string, SectionNode>();
  const out: SectionNode[] = [];
  for (const n of nodes) {
    const key = n.title.toLowerCase().replace(/\s+/g, " ").trim();
    const existing = key ? seen.get(key) : undefined;
    if (existing) {
      if (n.body.trim()) existing.body = (existing.body + "\n\n" + n.body).trim();
      existing.children = dedupeAccordionTree([...existing.children, ...n.children]);
    } else {
      const node = { ...n, children: dedupeAccordionTree(n.children) };
      if (key) seen.set(key, node);
      out.push(node);
    }
  }
  return out;
}

const ACCORDION_TRIGGER_COLORS = ["#129199", "#0e7a80", "#0b6066", "#094d52"];

// A bare academic-year label ("2024-25", "2021-22") is always worth
// collapsing on its own — unlike other empty pure-grouping headings (e.g.
// "Events Conducted by the Department"), a year heading routinely wraps a
// large amount of nested content, so it becomes a real accordion (see
// YEAR_TITLE_RE branch below) instead of the plain-divider default.
const YEAR_TITLE_RE = /^\d{4}\s*[-–—]\s*\d{2,4}$/;

// A run of siblings that are all "YYYY-YY Batch" style groups (e.g. a
// Toppers List broken out per graduating batch) is really one topic split
// into repeated same-shape entries — unlike a divider like "Events
// Conducted by the Department" whose children are genuinely different
// topics. When every child matches this shape, the parent becomes a real
// accordion (see isYearGroup below) instead of a plain divider, so the
// batches nest inside one "Toppers List" box rather than sprawling as
// separate top-level accordions.
const BATCH_TITLE_RE = /^\d{4}\s*[-–—]\s*\d{2,4}\s*batch$/i;

// A divider whose children ALL mention a year range somewhere in their
// title (e.g. "Placement Report 2024-25" / "2023-24" / "2022-23", or
// "Industry Internship" broken into "2024-25" / "2023-24" tabs) is the same
// same-topic-split-by-year pattern as the Batch case above, just without
// the literal "Batch" suffix or an exact bare-year title. Requiring at
// least 3 such children (and that every child — not just some — carries a
// year) keeps this from firing on a divider whose children are genuinely
// different topics that merely happen to mention a year once or twice.
const CONTAINS_YEAR_RANGE_RE = /\d{4}\s*[-–—]\s*\d{2,4}/;

// A single report/event (e.g. "ATME College of Engineering signs MOU with
// CADDESK, Mysuru", or "Industrial Visit Report — Infosys, Mysuru") is
// often scraped with all of its own prose living in bold-pseudo sub-lines
// ("Outcome", "Objectives:", "1. Introduction", "2. Objectives" …) rather
// than in the heading's own body. That leaves the heading with an empty
// body, which — same as the year/batch cases above — makes it collapse
// into a plain divider, so its own subsections visually "escape" and look
// like flat siblings of whatever other real report titles surround it.
// When every child is shaped like a report subsection (a numbered item, or
// a known subsection label), the parent becomes a real accordion instead,
// so the subsections nest inside the one report they actually belong to.
const NUMBERED_ITEM_RE = /^\d+[.)]\s+\S/;
const REPORT_SUBSECTION_RE =
  /^(introduction|objective|participant|outcome|key\s*highlight|highlight|conclusion|summary|background|overview|methodology|learning\s*outcome|photo|gallery|purpose|agenda|proceeding|resource\s*person|glimpse|impact\s*analysis|interactive|q\s*&\s*a|fun\s*activit|about\s*the|acknowledg|feedback|list\s*of\s*(students?|participants?|attendees?)|attendee)/i;

// An "Events Conducted During <year>" / "Events Organised For AY: <year>"
// divider groups events by category (Industrial Visit, Tech Talk,
// Workshops …) with no intro prose of its own, same shape as the report
// divider above. Unlike a topical divider (e.g. "Student Achievements"),
// this one is purely a year label, so it reads better as its own collapsed
// accordion — with the category groups nested one level inside it — rather
// than spilling every category flush onto the page for every year at once.
const EVENTS_YEAR_GROUP_TITLE_RE = /^events?\s+(conducted|organi[sz]ed)\b.*\d{4}/i;

// Recursively render a real heading-depth tree: a node with no body of its
// own (a pure grouping heading like "Student Achievements") renders as a
// plain centered divider — never a clickable accordion — with its children
// rendered directly beneath it at the same visual level. A node with real
// content becomes an accordion box, and its own children nest one shade
// darker inside it, however many levels deep.
function renderAccordionTree(
  nodes: SectionNode[],
  level: number,
  keyPrefix: string,
  inlineTablePdfs: boolean,
  cropImages: boolean,
  openFirst: boolean,
  // When set, every pure-grouping heading becomes a real clickable accordion
  // instead of the default plain-divider treatment — used for pages (e.g.
  // AIML Research) whose source document is itself a strict bullet-list
  // outline, where every grouping label should nest as its own accordion
  // rather than flattening its descendants up to the surrounding level.
  alwaysAccordion = false
) {
  return nodes.map((n, i) => {
    const key = `${keyPrefix}-${i}`;
    const allChildrenAreBatches =
      n.children.length > 0 && n.children.every((c) => BATCH_TITLE_RE.test(c.title.trim()));
    const allChildrenHaveYearRange =
      n.children.length >= 3 && n.children.every((c) => CONTAINS_YEAR_RANGE_RE.test(c.title));
    const allChildrenAreReportSubsections =
      n.children.length > 0 &&
      n.children.every((c) => {
        const t = c.title.trim();
        return NUMBERED_ITEM_RE.test(t) || REPORT_SUBSECTION_RE.test(t);
      });
    const isYearGroup =
      !n.body.trim() &&
      n.children.length > 0 &&
      (YEAR_TITLE_RE.test(n.title.trim()) ||
        EVENTS_YEAR_GROUP_TITLE_RE.test(n.title.trim()) ||
        allChildrenAreBatches ||
        allChildrenHaveYearRange ||
        allChildrenAreReportSubsections);
    if (!alwaysAccordion && !n.body.trim() && n.children.length > 0 && !isYearGroup) {
      return (
        <div key={key} className="w-full space-y-3">
          <div className={level === 0 ? "pt-2 text-center" : "pt-1 text-center"}>
            <h3
              className={
                level === 0
                  ? "font-display text-lg md:text-xl font-bold text-[#0d3438]"
                  : "font-display text-sm md:text-base font-semibold text-[#0d3438]"
              }
            >
              {n.title}
            </h3>
            <div
              className={level === 0 ? "mx-auto mt-2 h-1 w-1/2 rounded-full" : "mx-auto mt-1.5 h-0.5 w-1/3 rounded-full"}
              style={{ backgroundColor: "#f5c518" }}
            />
          </div>
          <div className="w-full space-y-3">
            {renderAccordionTree(n.children, level, key, inlineTablePdfs, cropImages, openFirst, alwaysAccordion)}
          </div>
        </div>
      );
    }
    const bg = ACCORDION_TRIGGER_COLORS[Math.min(level, ACCORDION_TRIGGER_COLORS.length - 1)];
    return (
      <details
        key={key}
        open={openFirst && level === 0 && i === 0}
        className={`group rounded-xl overflow-hidden ${level === 0 ? "border-2 border-[#f5c518]" : "border border-[#129199]/30"}`}
      >
        <summary
          className="flex items-center justify-between gap-3 px-5 py-3.5 cursor-pointer text-left text-white list-none [&::-webkit-details-marker]:hidden"
          style={{ backgroundColor: bg }}
        >
          <span className="font-display text-base md:text-lg font-semibold text-white">{n.title}</span>
          <ChevronRight className="h-4 w-4 shrink-0 text-white transition-transform group-open:rotate-90" />
        </summary>
        <div className="px-4 md:px-5 pb-5 pt-4 bg-white space-y-5">
          {n.body.trim() && <AccordionBody md={n.body.trim()} inlineTablePdfs={inlineTablePdfs} cropImages={cropImages} />}
          {n.children.length > 0 && (
            <div className="w-full space-y-3">
              {renderAccordionTree(n.children, level + 1, key, inlineTablePdfs, cropImages, false, alwaysAccordion)}
            </div>
          )}
        </div>
      </details>
    );
  });
}

function SimpleTwoLevelAccordion({ md, openFirst = false, inlineTablePdfs = false, cropImages = true, alwaysAccordion = false }: { md: string; openFirst?: boolean; inlineTablePdfs?: boolean; cropImages?: boolean; alwaysAccordion?: boolean }) {
  const { preamble, sections: rawSections } = splitSections(md);
  const tree = mergeSelfTitledChild(dedupeAccordionTree(pruneAccordionTree(buildSectionTree(rawSections))));
  const cleanedPreamble = cleanAccordionBody(preamble);
  if (tree.length === 0 && !cleanedPreamble) return null;
  return (
    <div className="w-full space-y-3">
      {cleanedPreamble && <AccordionBody md={cleanedPreamble} inlineTablePdfs={inlineTablePdfs} cropImages={cropImages} />}
      {renderAccordionTree(tree, 0, "s", inlineTablePdfs, cropImages, openFirst, alwaysAccordion)}
    </div>
  );
}

function cleanSectionTitle(title: string): string {
  return titleCase(
    title
      .replace(/\*\*/g, "")
      .replace(/^#+\s*/, "")
      .replace(/\\#/g, "")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .trim()
  );
}

function NestedAccordion({
  nodes,
  level,
  keyPrefix,
  openFirst = false,
}: {
  nodes: SectionNode[];
  level: number;
  keyPrefix: string;
  openFirst?: boolean;
}) {
  if (nodes.length === 0) return null;
  // Teal trigger; nested levels slightly lighter for contrast
  const triggerBg = level === 0 ? "#129199" : level === 1 ? "#0e7a80" : "#0b6066";
  const defaults = openFirst && level === 0 && nodes.length > 0 ? [`${keyPrefix}-0`] : [];
  return (
    <Accordion type="multiple" defaultValue={defaults} className="w-full space-y-3">
      {nodes.map((s, i) => {
        const value = `${keyPrefix}-${i}`;
        const hasChildren = s.children.length > 0;
        const ownBody = s.body.trim();
        return (
          <AccordionItem
            key={value}
            value={value}
            className="rounded-xl border-2 border-[#f5c518] overflow-hidden"
          >
            <AccordionTrigger
              className="px-5 py-3.5 hover:no-underline text-left text-white [&>svg]:text-white hover:brightness-95"
              style={{ backgroundColor: triggerBg }}
            >
              <span className="font-display text-base md:text-lg font-semibold text-white">
                {cleanSectionTitle(s.title)}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-4 md:px-5 pb-5 pt-4 bg-white">
              <div className="space-y-5">
                {ownBody && <AccordionBody md={ownBody} />}
                {hasChildren && (
                  <NestedAccordion nodes={s.children} level={level + 1} keyPrefix={value} />
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}


type BodySegment =
  | { type: "text"; content: string }
  | { type: "images"; images: { alt: string; src: string }[] };

/** Split markdown into an ordered run of text chunks and image-only-line
 *  clusters, so consecutive photos (common on event/activity pages) can be
 *  laid out as a compact grid instead of one full-width block each. */
function segmentBodyImageGroups(md: string): BodySegment[] {
  const imgOnlyLineRe = /^\s*(?:!\[[^\]]*\]\([^)\s]+(?:\s+"[^"]*")?\)\s*)+$/;
  const imgTokenRe = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;

  const lines = md.split("\n");
  const segments: BodySegment[] = [];
  let textBuf: string[] = [];
  let imgBuf: { alt: string; src: string }[] = [];

  const flushText = () => {
    const joined = textBuf.join("\n").replace(/\n{3,}/g, "\n\n").trim();
    if (joined) segments.push({ type: "text", content: joined });
    textBuf = [];
  };
  const flushImages = () => {
    if (imgBuf.length) segments.push({ type: "images", images: imgBuf });
    imgBuf = [];
  };

  // A run of blank lines only *separates* two image groups when nothing but
  // more blank lines sits between them and the next image-only line — i.e.
  // it's a real gap before non-image content, not just markdown spacing
  // between adjacent photos. Any number of consecutive image-only lines
  // (however many blank lines apart) therefore collapses into one group,
  // instead of the previous approach of iteratively collapsing one gap at a
  // time (capped at 5 passes), which silently left longer runs — 6+ images —
  // split into several one-image groups.
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim() && imgOnlyLineRe.test(line)) {
      flushText();
      imgTokenRe.lastIndex = 0;
      let m: RegExpExecArray | null;
      while ((m = imgTokenRe.exec(line))) imgBuf.push({ alt: m[1], src: m[2] });
      continue;
    }
    if (!line.trim() && imgBuf.length) {
      let j = i;
      while (j < lines.length && !lines[j].trim()) j++;
      if (j < lines.length && imgOnlyLineRe.test(lines[j])) continue; // stay in the image run
    }
    flushImages();
    textBuf.push(line);
  }
  flushText();
  flushImages();
  return segments;
}

/** URLs of .pdf links that appear inside a markdown table row (a line whose
 *  trimmed content starts with "|"), e.g. a "Report" column cell. Used so
 *  callers can leave those links in place — rendered as an inline button by
 *  the normal table-cell link styling — instead of stripping them into a
 *  separate card/grid below the table. */
function pdfUrlsInTableRows(md: string): Set<string> {
  const urls = new Set<string>();
  const linkRe = /\[[^\]]+\]\((https?:[^)\s]+\.pdf|\/[^)\s]+\.pdf)(?:\s+"[^"]*")?\)/gi;
  for (const line of md.split("\n")) {
    if (!line.trim().startsWith("|")) continue;
    linkRe.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = linkRe.exec(line))) urls.add(m[1]);
  }
  return urls;
}

function AccordionBody({ md, inlineTablePdfs = false, cropImages = true }: { md: string; inlineTablePdfs?: boolean; cropImages?: boolean }) {
  const rawPdfs = extractPdfs(md);
  const tablePdfUrls = inlineTablePdfs ? pdfUrlsInTableRows(md) : new Set<string>();
  // Remove ALL PDF/viewer markdown links from the body so they don't render
  // as plain "View Fullscreen" / "Download File" text alongside the cards.
  // (Links already sitting inside a table row are left alone when
  // inlineTablePdfs is set, so they render in place as a normal button.)
  let stripped = md;
  for (const p of rawPdfs) {
    if (tablePdfUrls.has(p.url)) continue;
    const esc = p.url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`\\[[^\\]]+\\]\\(${esc}(?:\\s+\"[^\"]*\")?\\)`, "g");
    stripped = stripped.replace(re, "");
  }
  // Also strip any remaining bare viewer.html links the regex missed.
  stripped = stripped
    .replace(/\[[^\]]+\]\([^)]*pdf[^)]*viewer\.html\?[^)]*\)/gi, "")
    .replace(/^\s*[-*]\s*$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  // Dedupe cards by direct .pdf URL (drop viewer wrappers). Compare by the
  // *resolved* CDN url rather than the raw one — the same PDF can appear in
  // the source markdown once already rewritten to its CDN copy (a direct
  // link) and once still pointing at raw atme.edu.in (inside a URL-encoded
  // pdf-poster viewer wrapper, which rewritePdfUrls' regex can't see through
  // since the path there is percent-encoded) — those two raw strings differ
  // even though they're the same file, so a raw-string Set silently let
  // duplicates through.
  const seen = new Set<string>();
  const pdfs: { url: string; label: string }[] = [];
  for (const p of rawPdfs) {
    if (!/\.pdf(?:$|[?#])/i.test(p.url)) continue;
    if (tablePdfUrls.has(p.url)) continue;
    const resolvedKey = pdfFromAtmeUrl(p.url);
    if (seen.has(resolvedKey)) continue;
    seen.add(resolvedKey);
    // Replace generic labels with a filename-derived title so each card is
    // labelled meaningfully instead of "Download File" / "View Fullscreen".
    const label = !p.label || GENERIC_PDF_LABELS.test(p.label) || URL_LIKE_LABEL.test(p.label) || /^\s*\d+\s*$/.test(p.label)
      ? filenameToTitle(p.url)
      : p.label;
    pdfs.push({ url: p.url, label });
  }
  // Break the body into an ordered run of text / image-group chunks so
  // clusters of adjacent photos (a common pattern on event/activity pages)
  // render as a compact side-by-side grid instead of each image being its
  // own full-width block — which, for the small (~300px) source thumbnails
  // typically used here, stretches them and makes them look blurry.
  const segments = segmentBodyImageGroups(stripped);
  return (
    <div className="space-y-5">
      {segments.map((seg, i) =>
        seg.type === "text" ? (
          <div key={i} className={PROSE_CLS}>
            <MD>{promoteBoldHeadings(seg.content)}</MD>
          </div>
        ) : seg.images.length === 1 ? (
          (() => {
            const resolved = rewriteImageSrc(seg.images[0].src);
            if (!resolved) return null;
            // Single accordion image: shown large (bigger than the grid rows
            // below) at its full aspect ratio — object-contain never crops or
            // upscale-blurs it, just letterboxes inside a generous frame.
            // `!h-*` forces the fixed height past the ambient `.content-prose
            // img { height: auto }` rule (src/styles.css), which otherwise
            // wins on specificity and lets every image fall back to its own
            // natural aspect ratio.
            return (
              <img
                key={i}
                src={resolved}
                alt={seg.images[0].alt || ""}
                loading="lazy"
                className="mx-auto !h-72 sm:!h-80 md:!h-96 w-full max-w-2xl object-contain rounded-lg border border-border bg-white"
              />
            );
          })()
        ) : cropImages ? (
          <div
            key={i}
            className={`grid grid-cols-2 gap-3 ${seg.images.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}
          >
            {seg.images.map((p, j) => {
              const resolved = rewriteImageSrc(p.src);
              if (!resolved) return null;
              // Standard 300x250 box for every accordion row image, so a row
              // of differently-sized/aspect source photos still lines up
              // edge-to-edge at the same height. `!h-*`/`!w-*` force this
              // past the ambient `.content-prose img { height: auto }` rule
              // (src/styles.css), which otherwise wins on specificity and
              // lets each image fall back to its own natural aspect ratio —
              // the unequal-height bug.
              return (
                <img
                  key={j}
                  src={resolved}
                  alt={p.alt || ""}
                  loading="lazy"
                  className="mx-auto !w-[300px] !h-[250px] max-w-full object-cover rounded-lg border border-border bg-white"
                />
              );
            })}
          </div>
        ) : (
          // cropImages=false: each source image already carries its own
          // baked-in yellow border (e.g. placed-student cards), so cropping
          // to a shared box would clip content and a second CSS border would
          // double up. Lay them out as an individually-bordered 4-column
          // grid instead, at their natural aspect ratio (no crop/upscale).
          <div key={i} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {seg.images.map((p, j) => {
              const resolved = rewriteImageSrc(p.src);
              if (!resolved) return null;
              return (
                <img
                  key={j}
                  src={resolved}
                  alt={p.alt || ""}
                  loading="lazy"
                  className="mx-auto w-full h-auto max-w-[280px] object-contain bg-white"
                />
              );
            })}
          </div>
        )
      )}
      {pdfs.length >= 2 ? (
        // Multiple PDFs → render as a compact thumbnail card grid (used by
        // Activities / COE / Magazines / Industry / MOU accordions).
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pdfs.map((p) => (
            <PdfThumbCard key={p.url} url={p.url} title={p.label} />
          ))}
        </div>
      ) : pdfs.length === 1 ? (
        <div className="rounded-xl border-2 border-[#f5c518]/70 bg-white overflow-hidden">
          <div className="flex items-center justify-between gap-3 px-4 py-2.5" style={{ backgroundColor: "#129199" }}>
            <span className="text-sm font-semibold text-white truncate">{pdfs[0].label}</span>
            <a
              href={pdfFromAtmeUrl(pdfs[0].url)}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-1.5 rounded-md bg-[#f5c518] px-2.5 py-1 text-xs font-semibold text-[#0d3438] hover:brightness-95"
            >
              <Download className="h-3.5 w-3.5" /> Download
            </a>
          </div>
          <PdfEmbed url={pdfs[0].url} title={pdfs[0].label} height={560} />
        </div>
      ) : null}
    </div>
  );
}


/** Pick the canonical key whose section this scraped key belongs to. */
function inferCanonKey(pageKey: string): string | null {
  const k = pageKey.toLowerCase();
  if (/industry/.test(k)) return "industry-interface";
  if (/co-curricular|extra-curricular|extracurricular|activit|professional-society/.test(k)) return "co-curricular";
  if (/research/.test(k)) return "research-initiative";
  if (/achievement|achivement/.test(k)) return "achievements";
  if (/innovative-teaching|teaching-learning/.test(k)) return "innovative-teaching";
  return null;
}

/** Renders scraped markdown as accordion. If the markdown is too thin
 *  (no sections / very short), falls back to the canonical accordion
 *  content for that section so the page is never bare. */
function AccordionedContentWithFallback({
  md,
  canonKey,
  deptName,
  openFirst = false,
  flat = false,
}: {
  md: string;
  canonKey: string | null;
  deptName: string;
  openFirst?: boolean;
  flat?: boolean;
}) {
  void canonKey;
  void deptName;
  const { sections } = splitSections(md);
  const plainLen = md.replace(/!\[[^\]]*\]\([^)]*\)/g, "").replace(/\s+/g, " ").trim().length;
  const isThin = sections.length < 2 && plainLen < 120;
  if (isThin && sections.length === 0 && plainLen < 60) return null;
  return <AccordionedContent md={md} openFirst={openFirst} flat={flat} />;
}

/** Generic / non-descriptive PDF link labels emitted by the scraped
 *  pdf-poster plugin. When a PDF's link text is one of these we derive a
 *  friendlier title from the nearest preceding heading or the filename. */
const GENERIC_PDF_LABELS = /^(view\s*fullscreen|download(\s*file)?|click(\s*here)?|view|open|pdf|document|here|link|file)$/i;
const URL_LIKE_LABEL = /^https?:\/\//i;

/** Convert a PDF filename (or final URL segment) to a readable title. */
function filenameToTitle(url: string): string {
  try {
    const last = decodeURIComponent(url.split("?")[0].split("/").pop() || "");
    const base = last.replace(/\.pdf$/i, "").replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
    if (!base) return "Document";
    return base.replace(/\b\w/g, (c) => c.toUpperCase());
  } catch {
    return "Document";
  }
}

/** Strip markdown link syntax + emphasis from a heading line so it can be used as a plain title. */
function cleanHeadingText(s: string): string {
  return s
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Parse markdown into sections grouped by major heading; each PDF inside a
 *  section is titled by the nearest preceding sub-heading (any deeper level)
 *  or, failing that, by a cleaned-up filename. Generic labels emitted by the
 *  scraped pdf-poster plugin ("View Fullscreen", "Download File", …) are
 *  always replaced. Direct .pdf URLs and pdf-poster viewer URLs that point
 *  at the same file are de-duplicated. */
function parsePdfSections(md: string): {
  preamble: string;
  sections: { title: string; intro: string; pdfs: { url: string; label: string }[]; year: string | null }[];
} {
  const lines = md.split("\n");
  type Sec = { title: string; intro: string; pdfs: { url: string; label: string }[]; level: number; year: string | null };
  const sections: Sec[] = [];
  const preambleLines: string[] = [];
  let cur: Sec | null = null;
  let lastSubHeading = "";
  let yearContext: string | null = null;
  const seenFiles = new Set<string>();
  const pdfLink = /\[([^\]]+)\]\(((?:https?:[^)\s]+|\/[^)\s]+)\.pdf(?:\?[^)\s]*)?)\)/gi;
  const viewerLink = /\[([^\]]+)\]\((https?:[^)\s]+pdfjs[^)\s]*\?file=([^)&\s]+)[^)\s]*)\)/gi;
  const YEAR_HEADING_RE = /(?:^|[^0-9])(?:AY\s*)?(20\d{2})(?:\s*[-–_/]\s*(?:20)?\d{2,4})?/i;
  const isYearTitle = (t: string) => YEAR_HEADING_RE.test(t);


  const extractCanonicalPdf = (raw: string): string => {
    try {
      const u = new URL(raw, "https://atme.edu.in");
      const file = u.searchParams.get("file");
      if (file && /\.pdf$/i.test(file)) return decodeURIComponent(file);
    } catch { /* ignore */ }
    return raw;
  };

  // Previously we dropped PDFs whose URL still pointed at the live
  // WordPress site after rewrite. The live atme.edu.in URLs are reachable
  // and the user wants every linked PDF preserved, so keep them all.
  const addPdf = (rawUrl: string, rawLabel: string) => {
    // Dedupe by the *resolved* CDN url, not the raw extracted one — the same
    // PDF can appear once as a direct link (already CDN-rewritten upstream by
    // rewritePdfUrls) and once inside a pdf-poster viewer wrapper (whose
    // percent-encoded path rewritePdfUrls' regex can't match, so it stays as
    // the raw atme.edu.in url) — those two raw strings differ even though
    // they're the same file, letting duplicates slip past a raw-string Set.
    const canonical = pdfFromAtmeUrl(extractCanonicalPdf(rawUrl));
    if (seenFiles.has(canonical)) return;
    seenFiles.add(canonical);

    if (!cur) cur = { title: "Documents", intro: "", pdfs: [], level: 1, year: yearContext };
    const c: Sec = cur;

    const label0 = rawLabel.replace(/\s+/g, " ").trim();
    const isGeneric = !label0 || GENERIC_PDF_LABELS.test(label0) || URL_LIKE_LABEL.test(label0);
    let title = isGeneric ? (lastSubHeading || filenameToTitle(canonical)) : label0;
    const sameTitle = c.pdfs.filter((p) => p.label === title).length;
    if (sameTitle > 0 && isGeneric) title = `${title} — ${filenameToTitle(canonical)}`;
    c.pdfs.push({ url: canonical, label: title });
  };


  const NOISE_RE = /^(pdf\.js viewer|thumbnails|toggle sidebar|find|previous|next|highlight all|match case|match diacritics|whole words|zoom in|zoom out|automatic zoom|actual size|page fit|page width|highlight|color|size|draw|opacity|tools|file name|file size|title|author|subject|keywords|creation date|modification date|creator|pdf producer|pdf version|page count|page size|fast web view|close|cancel|cancelok|cancelsave|cancelnot|save|delete|deletedownload|preparing document|downloading|enter the password|choose an option|mark as decorative|add a description|aim for|this is used|short description|this alt text|create alt text|couldn[’']t create|please write|automatic alt text|alt text|edit alt text|image alt text|short description|suggests descriptions|runs locally|helps you make|show alt text|add or edit images|×|⁨[\s\S]+⁩%)/i;

  for (const line of lines) {
    const h = /^(#{1,6})\s+(.+?)\s*$/.exec(line);
    if (h) {
      const level = h[1].length;
      const title = cleanHeadingText(h[2]);
      if (!title) continue;


      // Year headings (e.g. "AY 2025-26", "2024-25") set the year context
      // for subsequent sub-sections but do not create a section themselves
      // when they carry no PDFs — they become the outer accordion label.
      if (isYearTitle(title)) {
        if (cur && (cur.pdfs.length || cur.intro.trim())) sections.push(cur);
        cur = { title, intro: "", pdfs: [], level, year: title };
        yearContext = title;
        lastSubHeading = title;
        continue;
      }
      // Every other heading starts a new accordion section so PDFs are
      // grouped under the most specific heading that introduces them.
      if (cur && (cur.pdfs.length || cur.intro.trim())) sections.push(cur);
      cur = { title, intro: "", pdfs: [], level, year: yearContext };
      lastSubHeading = title;
      continue;
    }

    let foundPdf = false;
    let m: RegExpExecArray | null;
    viewerLink.lastIndex = 0;
    while ((m = viewerLink.exec(line))) { foundPdf = true; addPdf(m[2], m[1]); }
    pdfLink.lastIndex = 0;
    while ((m = pdfLink.exec(line))) { foundPdf = true; addPdf(m[2], m[1]); }
    if (!foundPdf) {
      if (/^\s*\|/.test(line)) continue;
      // Strip leading whitespace, blockquote `>`, table `|`, and list bullets
      // (`- ` / `* `). Do NOT strip a leading `**` — that's bold markdown
      // and stripping it leaves a stray trailing `**` in the rendered text.
      let clean = line.replace(/^\s+/, "").replace(/^(?:>|\||(?:[-*]\s+))+/, "").trim();
      // Drop only stray image links that point at known-dead atme.edu.in
      // thumbnails (`-800x800` size suffix). Keep other image markdown so
      // the MD renderer can display them (rewriteImageSrc falls back to
      // old.atme.edu.in for the originals).
      clean = clean.replace(/!\[[^\]]*\]\([^)\s]*-\d+x\d+\.(?:jpe?g|png|gif|webp)\)/gi, "")
        .replace(/\s+/g, " ").trim();
      if (!clean || /^[|=\-:]+$/.test(clean) || NOISE_RE.test(clean)) continue;
      if (cur) {
        if (cur.intro.length < 320) cur.intro += (cur.intro ? " " : "") + clean;
      } else {
        preambleLines.push(clean);
      }
    }

  }
  if (cur && (cur.pdfs.length || cur.intro.trim())) sections.push(cur);
  return {
    preamble: preambleLines.join(" ").replace(/\s+/g, " ").trim(),
    sections: sections.filter((s) => s.pdfs.length > 0),
  };
}

function PdfGridSections({ md, fallbackTitle, flat = false, mergeAll = false }: { md: string; fallbackTitle: string; flat?: boolean; mergeAll?: boolean }) {
  const { preamble, sections: parsedSections } = parsePdfSections(md);
  // Newsletter pages sometimes parse into two headed sections (e.g. a
  // prepended "Latest Issue" plus the original scraped section) that both
  // list the same run of PDFs. Retain a single section with everything,
  // deduped by URL, rather than showing the archive twice.
  const sections = mergeAll && parsedSections.length > 1
    ? (() => {
        const seen = new Set<string>();
        const pdfs: typeof parsedSections[number]["pdfs"] = [];
        for (const s of parsedSections) {
          for (const p of s.pdfs) {
            if (seen.has(p.url)) continue;
            seen.add(p.url);
            pdfs.push(p);
          }
        }
        return [{ ...parsedSections[0], pdfs }];
      })()
    : parsedSections;




  if (sections.length === 0) {
    return <div className={PROSE_CLS}><MD>{md}</MD></div>;
  }
  const total = sections.reduce((n, s) => n + s.pdfs.length, 0);

  const renderSectionBody = (s: typeof sections[number]) => (
    <>
      {s.intro && (
        <div className={`${PROSE_CLS} mb-4`}>
          <MD>{s.intro}</MD>
        </div>
      )}
      <div className="space-y-6">
        {s.pdfs.map((p) => (
          <div key={p.url} className="rounded-xl border-2 border-[#f5c518]/70 bg-white overflow-hidden">
            <div className="flex items-center justify-between gap-3 px-4 py-2.5" style={{ backgroundColor: "#129199" }}>
              <span className="text-sm font-semibold text-white truncate">{p.label}</span>
              <a
                href={pdfFromAtmeUrl(p.url)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-[#f5c518] px-2.5 py-1 text-xs font-semibold text-[#0d3438] hover:brightness-95"
              >
                Open
              </a>
            </div>
            <PdfEmbed url={p.url} title={p.label} height={560} />
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="space-y-6">
      {preamble && (
        <div className={PROSE_CLS}>
          <MD>{preamble}</MD>
        </div>
      )}
      <div className="rounded-xl border border-[#129199]/20 bg-[#129199]/5 px-4 py-3 text-sm text-foreground/80">
        <strong className="text-[#129199]">{total}</strong> document{total === 1 ? "" : "s"} available across{" "}
        <strong className="text-[#129199]">{sections.length}</strong> section{sections.length === 1 ? "" : "s"}.
      </div>
      {flat ? (
        <div className="space-y-8">
          {sections.map((s, i) => (
            <section
              key={i}
              className="rounded-xl border-2 border-[#f5c518] bg-white overflow-hidden shadow-sm"
            >
              <header
                className="flex items-center justify-between gap-3 px-4 md:px-5 py-3"
                style={{ backgroundColor: "#129199" }}
              >
                <h3 className="font-display text-base md:text-lg font-bold text-white">
                  {titleCase(s.title || fallbackTitle)}
                </h3>
                <span className="text-xs font-semibold text-white/85 whitespace-nowrap">
                  {s.pdfs.length} PDF{s.pdfs.length === 1 ? "" : "s"}
                </span>
              </header>
              <div className="px-4 md:px-5 py-5">{renderSectionBody(s)}</div>
            </section>
          ))}
        </div>
      ) : (
        (() => {
          // Group sections by the year context attached by parsePdfSections
          // (e.g. "AY 2025-26"). Sub-sections like "Odd Semester" / "Even
          // Semester" nest inside the year they follow.
          type Group = { year: string | null; sections: typeof sections };
          const groups: Group[] = [];
          const byYear = new Map<string, Group>();
          for (const s of sections) {
            const key = s.year;
            if (key) {
              let g = byYear.get(key);
              if (!g) {
                g = { year: key, sections: [] };
                byYear.set(key, g);
                groups.push(g);
              }
              // Skip the bare year heading itself when it has no PDFs — it
              // already drives the outer accordion label.
              if (s.title === key && s.pdfs.length === 0) continue;
              g.sections.push(s);
            } else {
              groups.push({ year: null, sections: [s] });
            }
          }
          const hasYears = groups.some((g) => g.year);

          if (!hasYears) {
            return (
              <div className="space-y-3">
                {sections.map((s, i) => (
                  <details key={i} className="group rounded-xl border-2 border-[#f5c518] overflow-hidden">
                    <summary
                      className="flex items-center justify-between gap-3 px-4 md:px-5 py-3 cursor-pointer text-left text-white list-none [&::-webkit-details-marker]:hidden"
                      style={{ backgroundColor: "#129199" }}
                    >
                      <div className="flex flex-1 items-center justify-between gap-3 pr-2">
                        <h3 className="font-display text-base md:text-lg font-bold text-white">
                          {titleCase(s.title || fallbackTitle)}
                        </h3>
                        <span className="text-xs font-semibold text-white/85 whitespace-nowrap">
                          {s.pdfs.length} PDF{s.pdfs.length === 1 ? "" : "s"}
                        </span>
                      </div>
                      <ChevronRight className="h-4 w-4 shrink-0 text-white transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="px-4 md:px-5 pb-5 pt-4 bg-white">
                      {renderSectionBody(s)}
                    </div>
                  </details>
                ))}
              </div>
            );
          }
          return (
            <div className="space-y-3">
              {groups.map((g, gi) => {
                const total = g.sections.reduce((n, s) => n + s.pdfs.length, 0);
                const label = g.year || g.sections[0]?.title || fallbackTitle;
                return (
                  <details key={gi} className="group rounded-xl border-2 border-[#f5c518] overflow-hidden">
                    <summary
                      className="flex items-center justify-between gap-3 px-4 md:px-5 py-3 cursor-pointer text-left text-white list-none [&::-webkit-details-marker]:hidden"
                      style={{ backgroundColor: "#129199" }}
                    >
                      <div className="flex flex-1 items-center justify-between gap-3 pr-2">
                        <h3 className="font-display text-base md:text-lg font-bold text-white">
                          {titleCase(label)}
                        </h3>
                        <span className="text-xs font-semibold text-white/85 whitespace-nowrap">
                          {total} PDF{total === 1 ? "" : "s"}
                        </span>
                      </div>
                      <ChevronRight className="h-4 w-4 shrink-0 text-white transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="px-4 md:px-5 pb-5 pt-4 bg-white">
                      {g.sections.length === 1 && (!g.year || g.sections[0].title === g.year) ? (
                        renderSectionBody(g.sections[0])
                      ) : (
                        <div className="space-y-2">
                          {g.sections.map((s, i) => (
                            <details key={i} className="group rounded-lg border border-[#f5c518]/70 overflow-hidden">
                              <summary
                                className="flex items-center justify-between gap-3 px-3 md:px-4 py-2.5 cursor-pointer text-left text-white list-none [&::-webkit-details-marker]:hidden"
                                style={{ backgroundColor: "#0e7a80" }}
                              >
                                <div className="flex flex-1 items-center justify-between gap-3 pr-2">
                                  <span className="font-display text-sm md:text-base font-semibold text-white">
                                    {titleCase(s.title || fallbackTitle)}
                                  </span>
                                  <span className="text-xs font-semibold text-white/85 whitespace-nowrap">
                                    {s.pdfs.length} PDF{s.pdfs.length === 1 ? "" : "s"}
                                  </span>
                                </div>
                                <ChevronRight className="h-4 w-4 shrink-0 text-white transition-transform group-open:rotate-90" />
                              </summary>
                              <div className="px-3 md:px-4 pb-4 pt-3 bg-white">
                                {renderSectionBody(s)}
                              </div>
                            </details>
                          ))}
                        </div>
                      )}
                    </div>
                  </details>
                );
              })}
            </div>
          );
        })()

      )}
    </div>
  );
}

/** Extract all PDF links from markdown with their visible labels. */
function extractPdfs(md: string): { url: string; label: string }[] {
  const out: { url: string; label: string }[] = [];
  // 1) Direct .pdf links
  const re = /\[([^\]]+)\]\((https?:[^)\s]+\.pdf|\/[^)\s]+\.pdf)(?:\s+"[^"]*")?\)/gi;
  // 2) pdf-poster viewer URLs: viewer.html?file=<encoded .pdf>
  const viewerRe = /\[([^\]]+)\]\((https?:\/\/[^)\s]*pdf[^)\s]*viewer\.html\?[^)\s]*file=([^&)\s]+)[^)\s]*)\)/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(md))) {
    const url = m[2];
    const label = m[1].replace(/\s+/g, " ").trim();
    if (!out.some((p) => p.url === url)) out.push({ url, label });
  }
  while ((m = viewerRe.exec(md))) {
    try {
      const inner = decodeURIComponent(m[3]);
      if (!/\.pdf(?:$|[?#])/i.test(inner)) continue;
      // Prefer the direct .pdf entry already collected; otherwise add the
      // viewer-derived one. Mark the viewer link as "consumed" by also
      // recording its full URL so AccordionBody can strip it from the body.
      const existing = out.find((p) => p.url === inner);
      const label = m[1].replace(/\s+/g, " ").trim();
      if (!existing) out.push({ url: inner, label });
      // Always record the viewer wrapper URL so it's stripped from the body
      // (use the same label so the strip regex matches).
      out.push({ url: m[2], label });
    } catch {
      // ignore decode errors
    }
  }
  return out;
}

/** Try to associate a PDF with a semester roman (I..VIII) based on its label/URL. */
function semesterOf(label: string, url: string): number | null {
  const s = (label + " " + url).toLowerCase();
  const map: Record<string, number> = {
    "1st": 1, "first": 1, "sem-1": 1, "sem1": 1, "semester-1": 1, "_i_": 1, "-i-": 1,
    "2nd": 2, "second": 2, "sem-2": 2, "sem2": 2, "semester-2": 2, "_ii_": 2, "-ii-": 2,
    "3rd": 3, "third": 3, "sem-3": 3, "sem3": 3, "semester-3": 3, "_iii_": 3, "-iii-": 3,
    "4th": 4, "fourth": 4, "sem-4": 4, "sem4": 4, "semester-4": 4, "_iv_": 4, "-iv-": 4,
    "5th": 5, "fifth": 5, "sem-5": 5, "sem5": 5, "semester-5": 5, "_v_": 5, "-v-": 5,
    "6th": 6, "sixth": 6, "sem-6": 6, "sem6": 6, "semester-6": 6, "_vi_": 6, "-vi-": 6,
    "7th": 7, "seventh": 7, "sem-7": 7, "sem7": 7, "semester-7": 7, "_vii_": 7, "-vii-": 7,
    "8th": 8, "eighth": 8, "sem-8": 8, "sem8": 8, "semester-8": 8, "_viii_": 8, "-viii-": 8,
  };
  for (const k of Object.keys(map)) if (s.includes(k)) return map[k];
  return null;
}

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

export type DocKind = "module" | "lesson" | "notes" | "ppt";
export type DocLink = { label: string; url: string };
export type CourseRow = { sl: string; code: string; title: string; docs: Partial<Record<DocKind, DocLink[]>> };
export type ParsedSection = { heading: string; rows: CourseRow[] };

const DOC_KIND_HEADERS: { key: DocKind; label: string }[] = [
  { key: "module", label: "Course Module" },
  { key: "lesson", label: "Lesson Plan" },
  { key: "notes", label: "Notes / Lab Manual" },
  { key: "ppt", label: "PPT" },
];

/** Extract all markdown link {label,url} pairs from a table cell. */
function cellLinks(cell: string): DocLink[] {
  const out: DocLink[] = [];
  const re = /\[([^\]]*)\]\(([^)\s]+)\)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(cell)) !== null) {
    out.push({ label: m[1].trim() || "Download", url: m[2] });
  }
  return out;
}

/** Strip markdown formatting from a cell to plain text. */
function cellText(cell: string): string {
  return cell
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\*\*/g, "")
    .replace(/\\([_*#])/g, "$1")
    .trim();
}

/** Identify a doc-kind column from its header text. */
function headerToKind(h: string): DocKind | null {
  const s = h.toLowerCase();
  if (/\bppt\b|presentation|slide/.test(s)) return "ppt";
  if (/lesson\s*plan|\blp\b/.test(s)) return "lesson";
  if (/notes|lab\s*manual|manual/.test(s)) return "notes";
  if (/course\s*mo[sd]ule|\bcm\b|module/.test(s)) return "module";
  return null;
}

/** Parse markdown into heading-scoped course-resource tables. */
function parseCourseTables(md: string): ParsedSection[] {
  const lines = md.split("\n");
  const sections: ParsedSection[] = [];
  let currentHeading = "";
  let lastSemHeading = "";
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const h = /^(#{1,6})\s+(.+?)\s*$/.exec(line);
    if (h) {
      const title = cellText(h[2]).replace(/https?:\/\/\S+/g, "").replace(/[\[\]()]/g, "").trim();
      currentHeading = title;
      if (/semester|sem\b|odd|even/i.test(title)) lastSemHeading = title;
      i++;
      continue;
    }
    // Detect a markdown table: header row + separator row
    if (/^\s*\|.*\|\s*$/.test(line) && i + 1 < lines.length && /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
      let headerCells = line.split("|").slice(1, -1).map((c) => cellText(c));
      i += 2;
      const bodyRows: string[][] = [];
      while (i < lines.length && /^\s*\|.*\|\s*$/.test(lines[i])) {
        bodyRows.push(lines[i].split("|").slice(1, -1));
        i++;
      }
      // Some scraped tables have a blank header row + separator, with the real
      // header as the first body row. Promote it when all header cells are empty.
      if (headerCells.every((c) => !c.trim()) && bodyRows.length > 0) {
        const first = bodyRows[0].map((c) => cellText(c));
        const looksLikeHeader = first.some((c) =>
          /sl\.?\s*no|s\.?\s*no|code|subject|name|title|module|lesson|notes|manual|ppt|presentation|slide/i.test(c)
        );
        if (looksLikeHeader) {
          headerCells = first;
          bodyRows.shift();
        }
      }
      // Map columns
      const colMap: Partial<Record<"sl" | "code" | "name" | DocKind, number>> = {};
      headerCells.forEach((h, idx) => {
        const s = h.toLowerCase();
        if (/sl\.?\s*no|s\.?\s*no|^#$/.test(s)) colMap.sl = idx;
        else if (/code/.test(s)) colMap.code = idx;
        else if (/name|title|subject/.test(s)) colMap.name = idx;
        else {
          const k = headerToKind(h);
          if (k) colMap[k] = idx;
        }
      });
      // Require at least name/code column + one doc kind column
      const hasNameCol = colMap.name !== undefined || colMap.code !== undefined;
      const docCols = DOC_KIND_HEADERS.filter((k) => colMap[k.key] !== undefined);
      if (hasNameCol && docCols.length >= 2) {
        const rows: CourseRow[] = [];
        let autoSl = 1;
        for (const cells of bodyRows) {
          const get = (k?: number) => (k !== undefined ? cells[k] ?? "" : "");
          const title = cellText(get(colMap.name));
          const code = cellText(get(colMap.code));
          const sl = cellText(get(colMap.sl)) || String(autoSl);
          if (!title && !code) continue;
          const docs: Partial<Record<DocKind, DocLink[]>> = {};
          for (const dk of DOC_KIND_HEADERS) {
            const idx = colMap[dk.key];
            if (idx === undefined) continue;
            const links = cellLinks(cells[idx] ?? "");
            if (links.length) docs[dk.key] = links;
          }
          rows.push({ sl, code, title: title || code, docs });
          autoSl++;
        }
        if (rows.length) sections.push({ heading: lastSemHeading || currentHeading || "Course Resources", rows });
      }
      continue;
    }
    i++;
  }
  return sections;
}

function CourseResourceTable({ section }: { section: ParsedSection }) {
  return (
    <div className="rounded-2xl border-2 border-[#f5c518] bg-white overflow-hidden">
      <div
        className="px-4 py-3 text-white font-display font-bold flex items-center justify-between"
        style={{ backgroundColor: "#129199" }}
      >
        <span>{section.heading}</span>
        <span className="text-xs font-semibold bg-white/15 px-2 py-0.5 rounded">
          {section.rows.length} course{section.rows.length === 1 ? "" : "s"}
        </span>
      </div>
      <div className="table-scroll">
        <table className="text-sm w-full border-collapse [&_th]:border [&_th]:border-[#f5c518] [&_td]:border [&_td]:border-[#f5c518]/40">
          <thead>
            <tr className="bg-[#129199]/10 text-[#129199]">
              <th className="text-left p-2 border-b border-[#f5c518] w-10">Sl.No.</th>
              <th className="text-left p-2 border-b border-[#f5c518]">Course Title</th>
              <th className="text-left p-2 border-b border-[#f5c518] w-44">Course Code</th>
              {DOC_KIND_HEADERS.map((h) => (
                <th key={h.key} className="text-center p-2 border-b border-[#f5c518] w-28 whitespace-nowrap">
                  {h.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((r, i) => (
              <tr key={i} className="border-b border-[#f5c518]/40 last:border-0">
                <td className="p-2 align-top text-muted-foreground">{r.sl || i + 1}</td>
                <td className="p-2 align-top font-medium">{r.title}</td>
                <td className="p-2 align-top text-muted-foreground">{r.code || "—"}</td>
                {DOC_KIND_HEADERS.map((h) => {
                  const links = r.docs[h.key];
                  return (
                    <td key={h.key} className="p-2 align-top text-center">
                      {links && links.length > 0 ? (
                        <div className="flex flex-wrap gap-1 items-center justify-center">
                          {links.map((lnk, li) => (
                            <a
                              key={li}
                              href={pdfFromAtmeUrl(lnk.url)}
                              target="_blank"
                              rel="noopener noreferrer"
                              download
                              aria-label={`Download ${h.label}`}
                              title={`Download ${h.label}`}
                              className="inline-flex items-center justify-center rounded-md bg-[#129199] text-white h-8 w-8 hover:brightness-110"
                            >
                              <Download className="h-4 w-4" />
                            </a>
                          ))}
                        </div>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LabVideosPanel({ md, deptName }: { md: string; deptName: string }) {
  // `extractLabVideos` already strips the "Lab Videos" wrapper heading, so
  // `md` here is wrapper-free video content ready to hand to AccordionedContent.
  const cleaned = md.trim();
  if (!cleaned) return null;
  return (
    <section className="rounded-2xl border-2 border-[#f5c518] bg-white overflow-hidden">
      <div
        className="px-4 py-3 text-white font-display font-bold"
        style={{ backgroundColor: "#129199" }}
      >
        Course Videos — {deptName}
      </div>
      <div className="p-4 md:p-6">
        <p className="text-sm text-foreground/80 mb-4">
          Recorded course lectures aligned with the syllabus. Click any link to
          open the video in a new tab.
        </p>
        <AccordionedContent md={cleaned} openFirst />
      </div>
    </section>
  );
}

const DEPT_YOUTUBE: Record<string, string> = {
  cse: "https://www.youtube.com/@ATME_CSE/videos",
  ce: "https://www.youtube.com/c/ATMECEOfficial",
  chemistry: "https://www.youtube.com/channel/UChSac99JWA3-sOKFjAzWcTg",
  physics: "https://www.youtube.com/channel/UChSac99JWA3-sOKFjAzWcTg",
  mba: "https://www.youtube.com/c/ATMECEOfficial",
  cy: "https://www.youtube.com/@CSE-CYATMECE",
  ece: "https://www.youtube.com/c/ATMEYAElectrocrats",
  eee: "https://www.youtube.com/channel/UCM0Yw9M401B6P1W1dLyKWFw",
  mca: "https://www.youtube.com/@atmemca",
  aiml: "https://www.youtube.com/c/ATMECEOfficial",
  ds: "https://www.youtube.com/@atmecomputersciencedatascience",
  csd: "https://www.youtube.com/@CSDATMECE",
};

function SyllabusLinks({ slug }: { slug: string }) {
  const yt = DEPT_YOUTUBE[slug] || "https://www.youtube.com/c/ATMECEOfficial";
  return (
    <div className="grid gap-4 sm:grid-cols-2 mb-6">
      <a
        href="https://vtu.ac.in/b-e-scheme-syllabus/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 rounded-xl border border-[#129199]/25 bg-white p-4 shadow-sm transition hover:shadow-md hover:border-[#129199]/60"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#129199]/10 text-[#129199]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
        </div>
        <div className="min-w-0">
          <div className="text-xs font-semibold uppercase tracking-wide text-[#129199]">VTU Scheme & Syllabus</div>
          <div className="text-sm font-semibold text-foreground truncate">vtu.ac.in/b-e-scheme-syllabus</div>
          <div className="text-xs text-foreground/60">Official VTU curriculum portal</div>
        </div>
      </a>
      <a
        href={yt}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 rounded-xl border border-[#c8102e]/25 bg-white p-4 shadow-sm transition hover:shadow-md hover:border-[#c8102e]/60"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#c8102e]/10 text-[#c8102e]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1 31.3 31.3 0 0 0 .5-5.8 31.3 31.3 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>
        </div>
        <div className="min-w-0">
          <div className="text-xs font-semibold uppercase tracking-wide text-[#c8102e]">Course Videos</div>
          <div className="text-sm font-semibold text-foreground truncate">{yt.replace(/^https?:\/\/(www\.)?/, "")}</div>
          <div className="text-xs text-foreground/60">Recorded course lectures & walkthroughs</div>
        </div>
      </a>
    </div>
  );
}

// Curated MCA semester course sections — merges the Course List (I–III sem)
// with download links from the Study Materials section so each course in the
// official course list has download icons next to its CM/LP/Notes/PPT.
const MCA_COURSE_SECTIONS: ParsedSection[] = [
  {
    heading: "MCA — I Semester",
    rows: [
      { sl: "01", code: "MMC101", title: "Programming and Problem Solving in C", docs: {
        module: [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/Course_Module_MMC101.pdf" }],
        lesson: [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/LESSON-PLAN-both.pdf" }],
        notes:  [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/MMC101-PPSC-IMCA.pdf" }],
        ppt:    [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/PPT.zip" }],
      }},
      { sl: "02", code: "MMC102", title: "Discrete Mathematics and Graph Theory", docs: {} },
      { sl: "03", code: "MMC103", title: "Database Management Systems", docs: {
        module: [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/Course-Module-DBMS.docx" }],
        lesson: [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/Lesson-Plan-DBMS.docx" }],
        ppt:    [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/MCA103-Module2.zip" }],
      }},
      { sl: "04", code: "MMC104", title: "Operating System", docs: {
        module: [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/Course_Module_OS.docx" }],
        lesson: [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/lesson-plan-OS-A.docx" }],
        notes:  [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/OneDrive_2_5-20-2025.zip" }],
        ppt:    [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/OneDrive_3_5-20-2025.zip" }],
      }},
      { sl: "05", code: "MMC105", title: "Web Technologies", docs: {
        module: [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/Course_Module_MMC105.pdf" }],
        lesson: [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/Lesson_Plan_MMC105.pdf" }],
        notes:  [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/OneDrive_4_5-20-2025.zip" }],
        ppt:    [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/Module-2.zip" }],
      }},
      { sl: "06", code: "MMCL106", title: "DBMS & Web Technologies Laboratory", docs: {} },
      { sl: "07", code: "MRMI107", title: "Research Methodology and IPR (Online)", docs: {} },
    ],
  },
  {
    heading: "MCA — II Semester",
    rows: [
      { sl: "01", code: "MMC201", title: "Machine Learning and Data Analytics using Python", docs: {
        module: [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/COURSE-MODULE-ml.pdf" }],
        lesson: [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/LESSON-PLAN-MLP-IISEM.pdf" }],
        notes:  [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/OneDrive_6_5-20-2025.zip" }],
        ppt:    [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/Module_1_Intro_to_ML_and_Python.zip" }],
      }},
      { sl: "02", code: "MMC202", title: "Object Oriented Programming using Java", docs: {
        module: [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/Course_Module_MMC202.pdf" }],
        lesson: [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/Lesson-plan.pdf" }],
        notes:  [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/JAVA_lab_Manual_MCA_II-Sem-2.pdf" }],
      }},
      { sl: "03", code: "MMC203", title: "Data Structures & Algorithm", docs: {
        module: [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/Course_Module_MMC202.pdf" }],
        lesson: [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/Lesson-Plan-DS.docx" }],
        ppt:    [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/OneDrive_8_5-20-2025.zip" }],
      }},
      { sl: "04", code: "MMC204", title: "Software Engineering", docs: {
        module: [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/COURSE-MODULE-SE.pdf" }],
        lesson: [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/LESSON-PLAN-SE-IISEM-MCA.pdf" }],
        notes:  [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/SE-NOTES.pdf" }],
        ppt:    [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/SOFTWARE-ENGINEERING-Module-1.zip" }],
      }},
      { sl: "05", code: "MMC205", title: "Web Application Development", docs: {
        module: [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/Course_Module_MMC205.pdf" }],
        lesson: [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/Lesson_Plan_MMC105-Google-Docs.pdf" }],
        notes:  [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/OneDrive_10_5-20-2025.zip" }],
        ppt:    [{ label: "Download", url: "https://atme.edu.in/wp-content/uploads/2025/05/OneDrive_11_5-20-2025.zip" }],
      }},
      { sl: "06", code: "MMCL206", title: "Object Oriented Programming using Java Lab", docs: {} },
      { sl: "07", code: "MMCL207", title: "Data Structure with Algorithms Lab", docs: {} },
      { sl: "08", code: "MAEC258", title: "Ability Enhancement Courses and Seminar — I", docs: {} },
    ],
  },
  {
    heading: "MCA — III Semester",
    rows: [
      { sl: "01", code: "MMCB311A", title: "Web Development Using Full Stack Open", docs: {} },
      {
        sl: "02",
        code: "MMCB311C",
        title: "Web Development Using PHP & MYSQL",
        docs: {
          lesson: [{ label: "Download", url: "/__l5e/assets-v1/fdfdfa40-d3c6-466a-95ef-092c321a41a2/MMCB311C-Lesson-Plan.pdf" }],
          notes:  [{ label: "Download", url: "/__l5e/assets-v1/c84ccffc-5ad6-442d-8f54-d18da6f3dcc7/MMCB311C-Notes.zip" }],
        },
      },
      {
        sl: "03",
        code: "MMCB311D",
        title: "Enterprise Application Programming",
        docs: {},
      },
      {
        sl: "04",
        code: "MMCH311A",
        title: "Ethical Hacking",
        docs: {
          module: [{ label: "Download", url: "/__l5e/assets-v1/abe976ae-f284-42a1-9ca0-06f62a40a21c/MMCH311A-Course-Module.pdf" }],
          lesson: [{ label: "Download", url: "/__l5e/assets-v1/bc41311a-605a-4346-96dd-cec4ba16b05d/MMCH311A-Lesson-Plan.docx" }],
          notes:  [{ label: "Download", url: "/__l5e/assets-v1/55f12c37-d8e7-4c11-816f-711cc704e524/MMCH311A-Notes.zip" }],
          ppt:    [{ label: "Download", url: "/__l5e/assets-v1/43709aca-46e5-429f-8bcd-86dd1d2e8f42/MMCH311A-PPT.zip" }],
        },
      },
      {
        sl: "05",
        code: "MMCH311B",
        title: "Cyber Security",
        docs: {
          notes: [{ label: "Download", url: "/__l5e/assets-v1/2bfb341c-b7f8-4e7b-b674-80ae64ded16a/MMCH311B-Notes.zip" }],
          ppt:   [{ label: "Download", url: "/__l5e/assets-v1/a61796cb-3cfd-4375-840e-d0ce2da69e82/MMCH311B-PPT.zip" }],
        },
      },
      {
        sl: "06",
        code: "MMCH311D",
        title: "Block Chain Technologies",
        docs: {
          module: [{ label: "Download", url: "/__l5e/assets-v1/d498d702-cfce-4471-91d0-4295d2df70d5/MMCH311D-Course-Module.pdf" }],
          lesson: [{ label: "Download", url: "/__l5e/assets-v1/8e8ea40b-5896-4e51-af0a-40900ac485b3/MMCH311D-Lesson-Plan.pdf" }],
          notes:  [{ label: "Download", url: "/__l5e/assets-v1/8eff8450-307d-448a-b7f8-09965e29835a/MMCH311D-Notes.zip" }],
          ppt:    [{ label: "Download", url: "/__l5e/assets-v1/0978210c-9793-49cc-b839-9cb2557274b4/MMCH311D-PPT.zip" }],
        },
      },
    ],
  },
];

function StudentLearningCentric({ md, deptName, slug, labVideosMd = "" }: { md: string; deptName: string; slug: string; labVideosMd?: string }) {

  const tableSections = STUDENT_LEARNING_2026_27[slug] ?? (slug === "mca" ? MCA_COURSE_SECTIONS : parseCourseTables(md));
  if (tableSections.length > 0) {
    return (
      <div className="space-y-8">
        <SyllabusLinks slug={slug} />
        <div className="rounded-xl border border-[#129199]/20 bg-[#129199]/5 px-4 py-3 text-sm text-foreground/80">

          Semester-wise course materials, lesson plans, notes / lab manuals and
          presentation slides for {deptName}. For pedagogy and classroom methods
          adopted by faculty, refer to the <em>Innovative Teaching Learning Methods</em> page.
        </div>
        {(slug === "physics" || slug === "chemistry") && (
          <h3 className="font-display text-lg md:text-xl font-bold text-[#129199]">
            {FIRST_YEAR_TABLE_TITLE}
          </h3>
        )}
        <div className="space-y-6">
          {tableSections.map((s, i) => (
            <CourseResourceTable key={i} section={s} />
          ))}
        </div>
        {labVideosMd && <LabVideosPanel md={labVideosMd} deptName={deptName} />}
      </div>
    );
  }

  // Fallback: derive from plain PDF links (no tables in source)
  const pdfs = extractPdfs(md);
  function classify(url: string, label: string): DocKind {
    const s = (label + " " + url).toLowerCase();
    if (/\.pptx?$|\bppt\b|slide|presentation/.test(s)) return "ppt";
    if (/lesson[-_ ]?plan|teaching[-_ ]?plan|\blp[-_ ]/.test(s)) return "lesson";
    if (/notes|lab[-_ ]?manual|manual|hand[-_ ]?out|material/.test(s)) return "notes";
    return "module";
  }
  function prettyTitle(url: string): { title: string; code: string } {
    const fname = decodeURIComponent(url.split("/").pop() || "")
      .replace(/\.pdf$|\.pptx?$/i, "")
      .replace(/[_]+/g, " ");
    const codeMatch = fname.match(/\b([0-9]{0,2}[A-Z]{2,4}-?[0-9]{2,3}[A-Z]?)\b/);
    const code = codeMatch ? codeMatch[1].replace(/-/g, "").toUpperCase() : "";
    let title = fname
      .replace(codeMatch ? codeMatch[0] : "", "")
      .replace(/\b(sem(ester)?[-_ ]?[ivx0-9]+)\b/gi, "")
      .replace(/\b20\d{2}[-_ ]?\d{2,4}\b/g, "")
      .replace(/\b(course[-_ ]?contents?|module|notes|lesson[-_ ]?plan|lab[-_ ]?manual|manual|ppt|slides?)\b/gi, "")
      .replace(/[-_]+/g, " ")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-:,.]+|[\s\-:,.]+$/g, "")
      .trim();
    title = title.replace(/\b\w/g, (c) => c.toUpperCase()) || "Course Material";
    return { title, code };
  }
  const bySem: Record<number, CourseRow[]> = {};
  for (const p of pdfs) {
    const sem = semesterOf(p.label, p.url) ?? 1;
    const kind = classify(p.url, p.label);
    const { title, code } = prettyTitle(p.url);
    const key = code || title.toLowerCase();
    (bySem[sem] ||= []);
    let row = bySem[sem].find((r) => (r.code && r.code === code) || r.title.toLowerCase() === key);
    if (!row) {
      row = { sl: "", code, title, docs: {} };
      bySem[sem].push(row);
    }
    if (!row.docs[kind]) row.docs[kind] = [{ label: "Download", url: p.url }];
  }
  const fallbackSections: ParsedSection[] = ROMAN
    .map((roman, idx) => ({ heading: `Semester ${roman}`, rows: bySem[idx + 1] || [] }))
    .filter((s) => s.rows.length > 0);

  const hasRealFallbackContent = md && md.replace(/\s+/g, " ").trim().length > 0;
  const noContentAtAll = fallbackSections.length === 0 && !hasRealFallbackContent;

  return (
    <div className="space-y-8">
      <SyllabusLinks slug={slug} />
      {!noContentAtAll && (
        <div className="rounded-xl border border-[#129199]/20 bg-[#129199]/5 px-4 py-3 text-sm text-foreground/80">

          Semester-wise learning resources for {deptName}. Course module, lesson plan,
          notes / lab manual and presentation slides are linked under each course below.
          For pedagogy and classroom methods adopted by faculty, refer to the{" "}
          <em>Innovative Teaching Learning Methods</em> page.
        </div>
      )}
      {fallbackSections.length === 0 ? (
        hasRealFallbackContent ? (
          <section className="rounded-2xl border-2 border-[#f5c518] bg-white p-4 md:p-6 overflow-hidden">
            <h3 className="font-display text-lg md:text-xl font-bold text-[#129199] mb-3">
              {deptName} — Course Materials & Resources
            </h3>
            <div className={PROSE_CLS}>
              <MD>{md}</MD>
            </div>
          </section>
        ) : null
      ) : (
        <div className="space-y-6">
          {fallbackSections.map((s, i) => (
            <CourseResourceTable key={i} section={s} />
          ))}
        </div>
      )}
      {labVideosMd && <LabVideosPanel md={labVideosMd} deptName={deptName} />}
    </div>
  );
}

function StudentLearningSupplements({ deptName }: { deptName: string }) {
  return (
    <div className="space-y-6">
      <h2 className="font-display text-xl md:text-2xl font-bold text-[#129199]">
        Additional Learning Resources
      </h2>
      <p className="text-sm text-foreground/80">
        Curated resources for {deptName} students — beyond regular lecture
        notes and lab manuals — to support self-paced learning, exam
        preparation and project work.
      </p>

      <ResourceTable
        title="Library E-Resources"
        headers={["Sl. No.", "Resource", "Type", "Access"]}
        rows={[
          ["1", "IEEE Xplore Digital Library", "Journals & Conferences", "Campus / Remote"],
          ["2", "Springer Engineering Collection", "Journals & E-Books", "Campus / Remote"],
          ["3", "Elsevier ScienceDirect", "Journals", "Campus"],
          ["4", "DELNET Consortium", "Inter-library loan", "Library Portal"],
          ["5", "National Digital Library (NDLI)", "E-Books & Articles", "Free"],
          ["6", "Knimbus Discovery", "Unified E-Resource Search", "Campus / Remote"],
        ]}
      />

      <ResourceTable
        title="NPTEL / SWAYAM / MOOC Courses (Recommended)"
        headers={["Sl. No.", "Course Area", "Platform", "Duration"]}
        rows={[
          ["1", "Foundation courses for the discipline", "NPTEL / SWAYAM", "8–12 weeks"],
          ["2", "Programme core electives", "NPTEL / SWAYAM", "8–12 weeks"],
          ["3", "Emerging-area electives", "Coursera / edX", "4–8 weeks"],
          ["4", "Skill / certification tracks", "Infosys Springboard", "Self-paced"],
          ["5", "Soft-skills & aptitude", "SWAYAM", "4 weeks"],
        ]}
      />

      <ResourceTable
        title="Recommended Reference E-Books"
        headers={["Sl. No.", "Subject Area", "No. of Titles", "Access"]}
        rows={[
          ["1", "Programme core subjects", "40+", "Library E-Resources"],
          ["2", "Mathematics & Sciences", "20+", "NDLI / Library"],
          ["3", "Open-electives", "15+", "Library E-Resources"],
          ["4", "Project & research references", "30+", "IEEE / Springer"],
        ]}
      />

      <ResourceTable
        title="Question Banks & Previous Year Papers"
        headers={["Sl. No.", "Resource", "Scope"]}
        rows={[
          ["1", "VTU Previous Year Question Papers", "All semesters"],
          ["2", "Internal Assessment Question Bank", "Course-wise"],
          ["3", "Model Question Papers", "End-semester preparation"],
          ["4", "Solved University Papers", "Selected core courses"],
        ]}
      />

      <ResourceTable
        title="Project & Internship Support"
        headers={["Sl. No.", "Resource", "Coordinator"]}
        rows={[
          ["1", "Mini-Project Guidelines & Templates", "Project Coordinator"],
          ["2", "Major Project Repository (past batches)", "Project Coordinator"],
          ["3", "Internship Listings & MoU Partners", "T&P Cell"],
          ["4", "Research Paper Writing Toolkit", "R&D Coordinator"],
        ]}
      />
    </div>
  );
}

function ResourceTable({
  title,
  headers,
  rows,
}: {
  title: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="rounded-xl border-2 border-[#f5c518] overflow-hidden bg-white">
      <div className="px-4 py-2.5 text-white font-display text-base font-semibold" style={{ backgroundColor: "#129199" }}>
        {title}
      </div>
      <div className="table-scroll">
        <table className="text-sm">
          <thead className="bg-[#129199]/10">
            <tr>
              {headers.map((h) => (
                <th key={h} className="text-left px-3 py-2 font-semibold text-[#0d3438] border-b border-[#129199]/20">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#129199]/5"}>
                {r.map((c, j) => (
                  <td key={j} className="px-3 py-2 text-foreground/85 border-b border-[#129199]/10">{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}



function InfrastructurePlaceholder({ deptName, slug }: { deptName: string; slug: string }) {
  const scraped = INFRA_DATA[slug];
  if (scraped && scraped.sections.length > 0) {
    return <InfraScrapedView data={scraped} deptName={deptName} deptSlug={slug} />;
  }
  // No scraped infrastructure available — render nothing (per user request).
  return null;
}


/** Render scraped per-dept infrastructure as a zigzag of {image, content} blocks.
 *  Pairs each meaningful section with the next available image; sections beyond
 *  the image pool render without an image column. */
function InfraScrapedView({ data, deptName, deptSlug }: { data: typeof INFRA_DATA[string]; deptName: string; deptSlug?: string }) {
  const images = data.images;
  // Some scraped sections end with a trailing "Lab Name – X" paragraph that
  // actually labels the NEXT lab. Pull those labels off and apply them as the
  // heading of the following section instead of leaving them stranded at the
  // bottom of the previous card.
  const LAB_NAME_RE = /^\**\s*lab\s*name\s*[–\-:]\s*(.+?)\s*\**\s*$/i;
  const pending: string[] = [];
  const rebuilt = data.sections.map((s) => {
    const paras = [...s.paras];
    const nextLabels: string[] = [];
    while (paras.length) {
      const m = LAB_NAME_RE.exec((paras[paras.length - 1] || "").trim());
      if (!m) break;
      nextLabels.unshift(m[1].replace(/\*+/g, "").trim());
      paras.pop();
    }
    const headingOverride = pending.shift() || null;
    pending.push(...nextLabels);
    return { ...s, paras, headingOverride };
  });
  const isJunkPara = (p: string) => {
    const t = (p || "").trim();
    if (!t) return true;
    if (LAB_NAME_RE.test(t)) return true;
    if (t.length <= 2 && !/[a-z0-9]/i.test(t)) return true;
    return false;
  };
  const sections = rebuilt
    .map((s) => ({
      ...s,
      paras: s.paras.filter((p) => !isJunkPara(p)),
      heading: s.headingOverride || s.heading,
    }))
    .filter((s) => (s.heading && s.heading.trim()) || s.paras.length > 0 || s.items.length > 0)
    // Drop wrapper sections like "Laboratory Details" that only existed to
    // hold a Lab Name label which we just stripped above.
    .filter((s) => !(/^laboratory\s+details$/i.test((s.heading || "").trim()) && s.paras.length === 0 && s.items.length === 0));
  // Split a section's paragraphs into individual lab sub-sections when the
  // scraped content packs many "Lab Name + description" pairs under one
  // umbrella heading (e.g. ECE "Laboratories with UPS support").
  const splitParasIntoLabs = (
    paras: string[]
  ): { heading?: string; paras: string[] }[] => {
    const isLabel = (p: string) => {
      const t = (p || "").trim();
      if (!t) return false;
      if (t.length > 160) return false;
      if (/^[-•▸]/.test(t)) return false;
      if (/\((?:IPCC|PCC|AEC|HSMC|ESC|UHV|BSC)\)/i.test(t)) return true;
      if (/\bLab(oratory)?\b/i.test(t) && t.length < 120 && !/[.!?]\s*$/.test(t)) return true;
      if (/\s[–-]\s/.test(t) && t.length < 120 && !/[.!?]\s*$/.test(t)) return true;
      if (t.length < 90 && !/[.!?]\s*$/.test(t)) return true;
      return false;
    };
    const out: { heading?: string; paras: string[] }[] = [];
    let cur: { heading?: string; paras: string[] } | null = null;
    for (const p of paras) {
      if (isLabel(p)) {
        if (cur) out.push(cur);
        cur = { heading: p.replace(/\*+/g, "").trim(), paras: [] };
      } else {
        if (!cur) cur = { heading: undefined, paras: [] };
        cur.paras.push(p);
      }
    }
    if (cur) out.push(cur);
    if (out.length === 0) return [{ heading: undefined, paras }];
    return out;
  };

  type Row = {
    heading?: string;
    paras: string[];
    items: string[];
    intro: boolean;
    groupHeader: boolean;
    noImage?: boolean;
    image?: { url: string; alt: string };
    subsections?: { heading: string; paras: string[]; items: string[]; table?: { headers: string[]; rows: string[][] } }[];
    table?: { headers: string[]; rows: string[][] };
  };
  const isIntro = (s: { heading?: string }, i: number) =>
    i === 0 && /infrastructure(\s*&?\s*facilities)?/i.test((s.heading || "").trim());

  const rows: Row[] = [];
  sections.forEach((s, i) => {
    const intro = isIntro(s, i);
    if (intro) {
      rows.push({ heading: s.heading, paras: s.paras, items: s.items, intro: true, groupHeader: false, table: s.table });
      return;
    }
    // If section already declares subsections, render as a single nested row.
    if (s.subsections && s.subsections.length > 0) {
      rows.push({ heading: s.heading, paras: s.paras, items: s.items, intro: false, groupHeader: false, noImage: s.noImage, image: s.image, subsections: s.subsections, table: s.table });
      return;
    }
    // A section that's just a heading with no paragraphs/items/table of its
    // own is a section-group divider (e.g. "Lab Infrastructure" introducing
    // the block of lab cards that follow) — render as the same borderless
    // h2 divider used for multi-lab group headers, not an empty white card.
    if (s.heading && s.paras.length === 0 && s.items.length === 0 && !s.table) {
      rows.push({ heading: s.heading, paras: [], items: [], intro: false, groupHeader: true });
      return;
    }
    const chunks = splitParasIntoLabs(s.paras);
    const hasMultiLabs = chunks.length > 1 && chunks.some((c) => c.heading);
    if (!hasMultiLabs) {
      rows.push({ heading: s.heading, paras: s.paras, items: s.items, intro: false, groupHeader: false, noImage: s.noImage, image: s.image, table: s.table });
      return;
    }
    if (s.heading) {
      rows.push({ heading: s.heading, paras: [], items: [], intro: false, groupHeader: true });
    }
    chunks.forEach((c, idx) => {
      const items = idx === chunks.length - 1 ? s.items : [];
      rows.push({ heading: c.heading, paras: c.paras, items, intro: false, groupHeader: false, noImage: s.noImage, image: idx === 0 ? s.image : undefined });
    });
  });



  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-[#129199]/20 bg-[#129199]/5 px-4 py-3 text-sm text-foreground/80">
        The Department of {deptName} is equipped with the following laboratories and infrastructure to support
        academic instruction, project work and research.
      </div>
      <div className="space-y-8">
        {(() => {
          const labImages = rows.some((r) => r.intro) ? images.slice(1) : images;
          let labIdx = 0;
          let imgRowCount = 0;
          return rows.map((r, i) => {
            const wantsImg = !r.intro && !r.groupHeader && !r.noImage;
            let img: { url: string; alt: string } | null = null;
            if (wantsImg) {
              if (r.image) {
                img = r.image;
              } else if (labIdx < labImages.length) {
                img = labImages[labIdx];
                labIdx += 1;
              }
            }
            // Alternate photo-left/photo-right per row that actually shows an
            // image (a stable zigzag), not per image-pool cursor — a row with
            // no image (or a custom r.image) shouldn't skip/repeat the pattern.
            let reverse = false;
            if (img) {
              reverse = imgRowCount % 2 === 1;
              imgRowCount += 1;
            }

            if (r.groupHeader) {
              return (
                <div key={i} className="pt-2">
                  <h2 className="font-display text-xl md:text-2xl font-bold text-[#129199] border-b-2 border-[#f5c518] pb-2">
                    {r.heading}
                  </h2>
                </div>
              );
            }
            return (
              <InfraRow
                key={i}
                img={img}
                heading={r.heading}
                paras={r.paras}
                items={r.items}
                subsections={r.subsections}
                table={r.table}
                reverse={wantsImg && reverse}
                deptName={deptName}
                squareImage={deptSlug === "cy"}
                highlightHeading={deptSlug === "eee"}
              />
            );
          });
        })()}
      </div>
    </div>
  );
}

function InfraDataTable({ table }: { table: { headers: string[]; rows: string[][] } }) {
  return (
    <div className="my-3 overflow-x-auto rounded-lg border border-[#f5c518]/70">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {table.headers.map((h, i) => (
              <th key={i} className="px-3 py-2 text-left font-semibold text-white" style={{ backgroundColor: "#129199" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={ri} className={ri > 0 ? "border-t" : ""} style={{ borderColor: "#f5c518" }}>
              {row.map((cell, ci) => (
                <td key={ci} className="px-3 py-2 align-top text-foreground/85">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function InfraRow({
  img,
  heading,
  paras,
  items,
  subsections,
  table,
  reverse,
  deptName,
  squareImage = false,
  highlightHeading = false,
}: {
  img: { url: string; alt: string } | null;
  heading?: string;
  paras: string[];
  items: string[];
  subsections?: { heading: string; paras: string[]; items: string[]; table?: { headers: string[]; rows: string[][] } }[];
  table?: { headers: string[]; rows: string[][] };
  reverse: boolean;
  deptName: string;
  squareImage?: boolean;
  highlightHeading?: boolean;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImg = !!img && !imgFailed;
  return (
    <div
      className={`grid gap-6 md:gap-10 ${showImg ? "md:grid-cols-2" : "md:grid-cols-1"} items-stretch rounded-2xl border border-[#129199]/15 bg-white p-5 md:p-8 shadow-sm ${showImg && reverse ? "md:[&>div:first-child]:order-2" : ""}`}
    >
      {showImg && img && (
        <div className={squareImage ? "flex justify-center" : undefined}>
          <img
            src={resolveAssetUrl(img.url)}
            alt={img.alt || heading || `${deptName} lab`}
            loading="lazy"
            className={
              squareImage
                ? "w-[500px] h-[500px] max-w-full object-cover rounded-xl border border-[#129199]/15"
                : "w-full h-56 md:h-full min-h-[224px] object-cover rounded-xl border border-[#129199]/15"
            }
            onError={() => setImgFailed(true)}
          />
        </div>
      )}
      <div className="min-w-0">
        {heading && (
          highlightHeading ? (
            <h3 className="inline-block font-display text-lg md:text-xl font-bold text-[#0d3438] bg-[#f5c518]/25 border border-[#f5c518] rounded-lg px-3 py-1 mb-3">{heading}</h3>
          ) : (
            <h3 className="font-display text-lg md:text-xl font-bold text-[#129199] mb-3">{heading}</h3>
          )
        )}
        {table && <InfraDataTable table={table} />}
        {paras.map((p, j) => {
          const labelMatch = p.match(/^([A-Z][A-Za-z\s]+):\s*/);
          if (labelMatch) {
            const label = labelMatch[1];
            const rest = p.slice(labelMatch[0].length);
            return (
              <p key={j} className="text-sm md:text-[15px] text-foreground/85 leading-relaxed mb-2 text-left sm:text-justify hyphens-auto">
                <span className="font-semibold text-[#129199]">{label}:</span> {rest}
              </p>
            );
          }
          return (
            <p key={j} className="text-sm md:text-[15px] text-foreground/85 leading-relaxed mb-2 text-left sm:text-justify hyphens-auto">{p}</p>
          );
        })}
        {items.length > 0 && (
          <ul className="mt-2 space-y-1 text-sm text-foreground/80">
            {items.map((it, j) => (
              <li key={j} className="flex gap-2"><span className="text-[#f5c518] shrink-0">▸</span><span>{it}</span></li>
            ))}
          </ul>
        )}
        {subsections && subsections.length > 0 && (
          <div className="mt-5 space-y-4">
            {subsections.map((sub, k) => (
              <div key={k} className="rounded-lg border border-[#129199]/15 bg-[#129199]/5 p-4">
                <h4 className="font-display text-base md:text-lg font-semibold text-[#129199] mb-2">{sub.heading}</h4>
                {sub.table && <InfraDataTable table={sub.table} />}
                {sub.paras.map((p, j) => (
                  <p key={j} className="text-sm md:text-[15px] text-foreground/85 leading-relaxed mb-2 text-left sm:text-justify hyphens-auto">{p}</p>
                ))}
                {sub.items.length > 0 && (
                  <ul className="mt-1 space-y-1 text-sm text-foreground/80">
                    {sub.items.map((it, j) => (
                      <li key={j} className="flex gap-2"><span className="text-[#f5c518] shrink-0">▸</span><span>{it}</span></li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


function DepartmentAboutView({
  dept,
  md,
}: {
  dept: NonNullable<ReturnType<typeof getDept>>;
  md: string;
}) {
  // Curated dept fields already cover About / HOD / Vision / Mission / PEOs / POs / PSOs.
  // The scraped markdown duplicates this content (sometimes as bold paragraphs that escape
  // heading-based dedup), so we intentionally do not render it here.
  void md;

  return (
    <div className="space-y-8">

      <section className="rounded-2xl border-2 border-[#f5c518] bg-white p-4 sm:p-6 md:p-8 shadow-sm min-w-0">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#129199] mb-4">
          About the Department
        </h2>
        {dept.aboutBullets && dept.aboutBullets.length > 0 ? (
          <ul className="space-y-3 text-foreground/85 leading-relaxed">
            {dept.aboutBullets.map((b, i) => (
              <li key={i} className="pl-5 relative">
                <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#f5c518]" />
                {b.label && (
                  <span className="font-semibold text-[#0d3438]">{b.label}{b.text ? ": " : ""}</span>
                )}
                {b.text && <span>{b.text}</span>}
                {b.children && b.children.length > 0 && (
                  <ul className="mt-2 ml-2 space-y-1.5 list-disc pl-5 text-sm">
                    {b.children.map((c, j) => (
                      <li key={j} className="leading-relaxed">{c}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-foreground/85 leading-relaxed space-y-3">
            {dept.about.split(/\n{2,}/).map((para, i) => (
              <p key={i} style={{ textAlign: "justify", textJustify: "inter-word" }}>{para.trim()}</p>
            ))}
          </div>
        )}
      </section>



      {dept.hod && (dept.hod.message || dept.hod.messageBullets || dept.hod.quote) && (
        <section className="rounded-2xl border-2 border-[#f5c518] bg-[#129199]/5 p-4 sm:p-6 md:p-8 min-w-0">
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start">
            <div className="relative w-32 md:w-44 aspect-[4/5] rounded-xl overflow-hidden border-2 border-[#129199]/30 bg-white shrink-0 shadow-md">
              {(() => {
                const resolved = dept.hod.image ? rewriteImageSrc(dept.hod.image) : null;
                return resolved ? (
                  <img
                    src={resolved}
                    alt={dept.hod.name}
                    loading="eager"
                    decoding="async"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.display = "none";
                      const fallback = img.nextElementSibling as HTMLElement | null;
                      if (fallback) fallback.style.display = "grid";
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : null;
              })()}
              <div
                aria-hidden
                className="absolute inset-0 grid place-items-center text-4xl font-bold text-[#129199]/70 bg-[#129199]/5"
                style={{ display: dept.hod.image ? "none" : "grid" }}
              >
                {dept.hod.name?.[0] ?? "?"}
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-center sm:text-left">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#f5c518] mb-1">
                  Message From The HOD
                </div>
                <h3 className="font-display text-xl font-semibold text-[#129199]">
                  {formatFacultyName(dept.hod.name)}
                </h3>

                <div className="text-xs text-muted-foreground mb-3">
                  {expandDesignation(dept.hod.designation)}
                </div>
              </div>
              {dept.hod.quote && (
                <blockquote className="my-3 rounded-lg border-l-4 border-[#f5c518] bg-[#f5c518]/15 px-4 py-3 font-display text-lg md:text-xl font-bold italic text-[#129199] shadow-sm">
                  &lsquo;{dept.hod.quote}&rsquo;
                </blockquote>
              )}
              <div className="text-foreground/85 leading-relaxed hyphens-auto break-words space-y-3">
                {dept.hod.messageBullets && dept.hod.messageBullets.length > 0 ? (
                  <ul className="space-y-3">
                    {dept.hod.messageBullets.map((b, i) => (
                      <li key={i} className="pl-5 relative">
                        <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#f5c518]" />
                        {b.label && (
                          <span className="font-semibold text-[#0d3438]">{b.label}{b.text ? ": " : ""}</span>
                        )}
                        {b.text && <span>{b.text}</span>}
                        {b.children && b.children.length > 0 && (
                          <ul className="mt-2 ml-2 space-y-1.5 list-disc pl-5 text-sm">
                            {b.children.map((c, j) => (
                              <li key={j} className="leading-relaxed">{c}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  dept.hod.message
                    .split(/\n{2,}|(?<=[.!?])\s{2,}/)
                    .map((para, i) => (
                      <p key={i} style={{ textAlign: "justify", textJustify: "inter-word" }}>{para.trim()}</p>
                    ))
                )}
                {dept.hod.closing && (
                  <p className="font-semibold text-[#0d3438] pt-2">{dept.hod.closing}</p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}


      <div className="grid gap-6 md:grid-cols-2">
        {dept.vision && (
          <section className="rounded-2xl border-2 border-[#f5c518] bg-white p-4 sm:p-6 shadow-sm min-w-0">
            <h3 className="font-display text-lg font-bold text-[#129199] mb-2 pb-2 border-b border-[#129199]/20">
              Vision
            </h3>
            <p className="text-foreground/85 leading-relaxed text-justify text-sm">
              {dept.vision}
            </p>
          </section>
        )}
        {dept.mission && dept.mission.length > 0 && (
          <section className="rounded-2xl border-2 border-[#f5c518] bg-white p-4 sm:p-6 shadow-sm min-w-0">
            <h3 className="font-display text-lg font-bold text-[#129199] mb-2 pb-2 border-b border-[#129199]/20">
              Mission
            </h3>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-foreground/85">
              {dept.mission.map((m: string, i: number) => (
                <li key={i} className="leading-relaxed">{m}</li>
              ))}
            </ol>
          </section>
        )}
      </div>

      {dept.peo && dept.peo.length > 0 && (
        <section className="rounded-2xl border-2 border-[#f5c518] bg-white p-4 sm:p-6 shadow-sm min-w-0">
          <h3 className="font-display text-lg font-bold text-[#129199] mb-3 pb-2 border-b border-[#129199]/20">
            Programme Educational Objectives (PEOs)
          </h3>
          <div className="space-y-2 text-sm text-foreground/85">
            {dept.peo.map((p: string, i: number) => (
              <OutcomeItem key={i} text={p} />
            ))}
          </div>
        </section>
      )}
      {dept.po && dept.po.length > 0 && (
        <section className="rounded-2xl border-2 border-[#f5c518] bg-white p-4 sm:p-6 shadow-sm min-w-0">
          <h3 className="font-display text-lg font-bold text-[#129199] mb-3 pb-2 border-b border-[#129199]/20">
            Programme Outcomes (POs)
          </h3>
          <div className="space-y-2 text-sm text-foreground/85">
            {dept.po.map((p: string, i: number) => (
              <OutcomeItem key={i} text={p} />
            ))}
          </div>
        </section>
      )}
      {dept.pso && dept.pso.length > 0 && (
        <section className="rounded-2xl border-2 border-[#f5c518] bg-white p-4 sm:p-6 shadow-sm min-w-0">
          <h3 className="font-display text-lg font-bold text-[#129199] mb-3 pb-2 border-b border-[#129199]/20">
            Programme Specific Outcomes (PSOs)
          </h3>
          <div className="space-y-2 text-sm text-foreground/85">
            {dept.pso.map((p: string, i: number) => (
              <OutcomeItem key={i} text={p} />
            ))}
          </div>
        </section>
      )}
      {dept.programmes && dept.programmes.length > 0 && (
        <section className="rounded-2xl border-2 border-[#f5c518] bg-white p-4 sm:p-6 shadow-sm min-w-0">
          <h3 className="font-display text-lg font-bold text-[#129199] mb-3 pb-2 border-b border-[#129199]/20">
            Course
          </h3>
          <div className="table-scroll rounded-lg border border-[#129199]/20">
            <table className="text-sm">
              <thead className="bg-[#129199]/10">
                <tr>
                  <th className="text-left px-3 py-2 font-semibold text-[#0d3438] border-b border-[#129199]/20">Programme</th>
                  <th className="text-left px-3 py-2 font-semibold text-[#0d3438] border-b border-[#129199]/20">Leading to…</th>
                  <th className="text-left px-3 py-2 font-semibold text-[#0d3438] border-b border-[#129199]/20">Duration</th>
                  <th className="text-left px-3 py-2 font-semibold text-[#0d3438] border-b border-[#129199]/20">Intake</th>
                </tr>
              </thead>
              <tbody>
                {dept.programmes.map((p, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#129199]/5"}>
                    <td className="px-3 py-2 text-foreground/85 border-b border-[#129199]/10">{p.programme}</td>
                    <td className="px-3 py-2 text-foreground/85 border-b border-[#129199]/10 whitespace-nowrap">{p.degree}</td>
                    <td className="px-3 py-2 text-foreground/85 border-b border-[#129199]/10 whitespace-nowrap">{p.duration}</td>
                    <td className="px-3 py-2 text-foreground/85 border-b border-[#129199]/10 whitespace-nowrap">{p.intake}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {((dept.shortTermGoals && dept.shortTermGoals.length > 0) || (dept.longTermGoals && dept.longTermGoals.length > 0)) && (
        <div className="grid gap-6 md:grid-cols-2">
          {dept.shortTermGoals && dept.shortTermGoals.length > 0 && (
            <section className="rounded-2xl border-2 border-[#f5c518] bg-white p-4 sm:p-6 shadow-sm min-w-0">
              <h3 className="font-display text-lg font-bold text-[#129199] mb-3 pb-2 border-b border-[#129199]/20">
                Short Term Goals
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-foreground/85">
                {dept.shortTermGoals.map((g, i) => (
                  <li key={i} className="leading-relaxed">{g}</li>
                ))}
              </ol>
            </section>
          )}
          {dept.longTermGoals && dept.longTermGoals.length > 0 && (
            <section className="rounded-2xl border-2 border-[#f5c518] bg-white p-4 sm:p-6 shadow-sm min-w-0">
              <h3 className="font-display text-lg font-bold text-[#129199] mb-3 pb-2 border-b border-[#129199]/20">
                Long Term Goals
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-foreground/85">
                {dept.longTermGoals.map((g, i) => (
                  <li key={i} className="leading-relaxed">{g}</li>
                ))}
              </ol>
            </section>
          )}
        </div>
      )}

      <ClassInchargeTable deptCode={dept.code} />


    </div>
  );
}

type InchargeRow = { sem: string; section: string; incharge: string; email?: string; phone?: string };

const CLASS_INCHARGE_BY_DEPT: Record<string, InchargeRow[]> = {
  CSE: [
    { sem: "3rd", section: "A", incharge: "Prof. Shrilakshmi Prasad", email: "shrilakshmiprasad_cs@atme.edu.in" },
    { sem: "3rd", section: "B", incharge: "Prof. Roopa B", email: "roopab.cs@atme.edu.in" },
    { sem: "3rd", section: "C", incharge: "Prof. Sandesh R", email: "shandesh_cs@atme.edu.in" },
    { sem: "5th", section: "A", incharge: "Prof. Ashwini P", email: "ashwinip.cs@atme.edu.in" },
    { sem: "5th", section: "B", incharge: "Prof. Kavyashree E D", email: "kavyashreeed_cs@atme.edu.in" },
    { sem: "7th", section: "B", incharge: "Prof. Keerthana M M", email: "keerthanamm_cs@atme.edu.in" },
  ],
  CE: [
    { sem: "3rd", section: "A", incharge: "Prof. Akhila C G", email: "akhilacg_cv@atme.edu.in", phone: "9743726895" },
    { sem: "5th", section: "A", incharge: "Prof. Rudresh A N", email: "rudreshan_cv@atme.edu.in", phone: "9743580290" },
    { sem: "7th", section: "A", incharge: "Prof. Bharathi B", email: "bharathib_cv@atme.edu.in", phone: "8496009262" },
  ],
  EEE: [
    { sem: "II", section: "A", incharge: "Prof. Swapna H", email: "swapnah_ee@atme.edu.in", phone: "9591562578" },
    { sem: "III", section: "A", incharge: "Dr. Sathish K R", email: "dr.sathishkr_ee@atme.edu.in", phone: "9611982696" },
    { sem: "IV", section: "A", incharge: "Prof. Shreeshayana R", email: "shreeshayanar_ee@atme.edu.in", phone: "9739002631" },
  ],
  ECE: [
    { sem: "3rd", section: "A", incharge: "Dr. Shalini Hanok", email: "dr.shalinihanok_ec@atme.edu.in", phone: "8095078557" },
    { sem: "3rd", section: "B", incharge: "Mrs. Madhurya Eshwar", email: "madhuryabeshwar.ec@atme.edu.in", phone: "8861414341" },
    { sem: "5th", section: "A", incharge: "Dr. Manjula A V", email: "Dr.Manjulaav.ec@atme.edu.in", phone: "8277417079" },
    { sem: "5th", section: "B", incharge: "Mr. Manjunath K", email: "manjunathk_EC@atme.edu.in", phone: "9738403734" },
    { sem: "7th", section: "A", incharge: "Mrs. Swetha K T", email: "swethakt.ec@atme.edu.in", phone: "8428249852" },
    { sem: "7th", section: "B", incharge: "Mr. Chandra Shekar P", email: "CHANDRASHEKARP_EC@atme.edu.in", phone: "9538584312" },
  ],
  ME: [
    { sem: "4th", section: "A", incharge: "Mr. Niranjan Kumar V S", email: "niranjankumarvs_mech@atme.edu.in", phone: "9945614138" },
    { sem: "6th", section: "A", incharge: "Mr. Raghu", email: "raghu_mech@atme.edu.in", phone: "8970425914" },
    { sem: "8th", section: "A", incharge: "Mr. Ravi Kumar S", email: "ravikumars_mech@atme.edu.in", phone: "9880543740" },
  ],
  "AI&ML": [
    { sem: "3rd", section: "A", incharge: "Prof. Apoorva S M", email: "apoorvasm.ci@atme.edu.in" },
    { sem: "5th", section: "A", incharge: "Prof. Likitha D", email: "likithad.ci@atme.edu.in" },
    { sem: "7th", section: "A", incharge: "Prof. Vanitha G Naik", email: "vanithagnaik_cs@atme.edu.in" },
  ],
  DS: [
    { sem: "2", section: "—", incharge: "Ms Madhu Nagaraj", email: "madhunagaraj_cd@atme.edu.in" },
    { sem: "3", section: "—", incharge: "Dr. Neethi M V", email: "Dr.neethimv_cd@atme.edu.in" },
    { sem: "4", section: "—", incharge: "Ms. Sushmitha N", email: "sushmithan.cd@atme.edu.in" },
  ],
};

function ClassInchargeTable({ deptCode }: { deptCode: string }) {
  const real = CLASS_INCHARGE_BY_DEPT[deptCode];
  // Only render when we have a real, hand-authored allocation. Per user
  // instruction, do not show the "To be announced" placeholder rows in
  // departments that don't have a real class-incharge table.
  if (!real || real.length === 0) return null;
  const rows: InchargeRow[] = real;
  const showContact = true;
  // EEE-specific: the college now labels this "Academic Year 2026–27" and
  // uses "Year" instead of "Semester" as the column header there.
  const academicYear = deptCode === "EEE" || deptCode === "ECE" || deptCode === "CE" || deptCode === "DS" ? "2026–27" : "2025–26";
  const semesterColLabel = deptCode === "EEE" || deptCode === "DS" ? "Year" : "Semester";
  // DS's table has no Section/Phone data (source doc lists only Year, Faculty
  // Incharge, and Mail ID), so those columns are dropped for this dept.
  const showSection = deptCode !== "DS";
  const showPhone = deptCode !== "DS";
  return (
    <section className="rounded-2xl border-2 border-[#f5c518] bg-white p-4 sm:p-6 shadow-sm min-w-0">
      <h3 className="font-display text-lg font-bold text-[#129199] mb-3 pb-2 border-b border-[#129199]/20">
        Class Incharge — {deptCode} (Academic Year {academicYear})
      </h3>
      <div className="table-scroll rounded-lg border border-[#129199]/20">
        <table className="text-sm">
          <thead className="bg-[#129199]/10">
            <tr>
              <th className="text-left px-3 py-2 font-semibold text-[#0d3438] border-b border-[#129199]/20">Sl. No.</th>
              <th className="text-left px-3 py-2 font-semibold text-[#0d3438] border-b border-[#129199]/20">{semesterColLabel}</th>
              {showSection && <th className="text-left px-3 py-2 font-semibold text-[#0d3438] border-b border-[#129199]/20">Section</th>}
              <th className="text-left px-3 py-2 font-semibold text-[#0d3438] border-b border-[#129199]/20">Class Incharge</th>
              <th className="text-left px-3 py-2 font-semibold text-[#0d3438] border-b border-[#129199]/20">Mail ID</th>
              {showPhone && <th className="text-left px-3 py-2 font-semibold text-[#0d3438] border-b border-[#129199]/20">Phone</th>}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#129199]/5"}>
                <td className="px-3 py-2 text-foreground/85 border-b border-[#129199]/10">{i + 1}</td>
                <td className="px-3 py-2 text-foreground/85 border-b border-[#129199]/10">{r.sem}</td>
                {showSection && <td className="px-3 py-2 text-foreground/85 border-b border-[#129199]/10">{r.section}</td>}
                <td className="px-3 py-2 text-foreground/85 font-medium border-b border-[#129199]/10">{r.incharge}</td>
                <td className="px-3 py-2 text-foreground/85 border-b border-[#129199]/10 break-all">
                  {r.email ? <a href={`mailto:${r.email}`} className="text-[#129199] hover:underline">{r.email}</a> : "—"}
                </td>
                {showPhone && (
                  <td className="px-3 py-2 text-foreground/85 border-b border-[#129199]/10 whitespace-nowrap">
                    {r.phone ? <a href={`tel:${r.phone}`} className="text-[#129199] hover:underline">{r.phone}</a> : "—"}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}


/** Pull standalone images out of a department about markdown blob, and strip
 *  sections (h2..h4) whose headings duplicate curated content above. */
function extractAboutImagesAndStripDuplicates(md: string): {
  images: { src: string; alt: string }[];
  cleanedMd: string;
} {
  if (!md) return { images: [], cleanedMd: "" };
  const images: { src: string; alt: string }[] = [];
  const imgRe = /^!\[([^\]]*)\]\(([^)\s]+\.(?:jpe?g|png|webp))(?:\s+"[^"]*")?\)\s*$/i;
  const lines = md.split("\n");
  const keptLines: string[] = [];
  for (const line of lines) {
    const m = imgRe.exec(line.trim());
    if (m) {
      const src = m[2];
      const alt = m[1] || "";
      const s = src.toLowerCase();
      if (/logo|favicon|admin-ajax|placeholder|spacer|1x1|pixel|base64-image-removed|atme-final-logo|icons_theme|share_icons|visit_icons|ultimate-social/.test(s)) continue;
      if (/logo/.test(alt.toLowerCase())) continue;
      images.push({ src, alt });
      continue;
    }
    keptLines.push(line);
  }

  const DUP = /^(about(\s+the)?\s+department|vision(\s+of\s+the\s+department)?|mission(\s+of\s+the\s+department)?|programme?\s+educational\s+objectives.*|programme?\s+outcomes.*|programme?\s+specific\s+outcomes.*|peos?\b.*|pos?\b.*|psos?\b.*)$/i;
  const out: string[] = [];
  let skipping = false;
  let skipDepth = 0;
  for (const line of keptLines) {
    const h = /^(#{1,6})\s+(.+?)\s*$/.exec(line);
    if (h) {
      const depth = h[1].length;
      const title = h[2].replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/[*_`]/g, "").trim();
      if (DUP.test(title)) {
        skipping = true;
        skipDepth = depth;
        continue;
      }
      if (skipping && depth <= skipDepth) {
        skipping = false;
      }
    }
    if (!skipping) out.push(line);
  }
  return { images, cleanedMd: out.join("\n").trim() };
}

function DeptImageSlider({
  images,
  deptName,
}: {
  images: { src: string; alt: string }[];
  deptName: string;
}) {
  const [i, setI] = useState(0);
  const n = images.length;
  useEffect(() => {
    if (n <= 1) return;
    const id = setInterval(() => setI((p) => (p + 1) % n), 4500);
    return () => clearInterval(id);
  }, [n]);
  if (n === 0) return null;
  const go = (d: number) => setI((p) => (p + d + n) % n);
  return (
    <section className="relative overflow-hidden rounded-2xl border-2 border-[#f5c518] bg-[#0d3438] shadow-sm">
      <div className="relative aspect-[16/7] w-full">
        {images.map((img, idx) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt || `${deptName} ${idx + 1}`}
            loading={idx === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      {n > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[#0d3438] shadow hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[#0d3438] shadow hover:bg-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to image ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-6 bg-[#f5c518]" : "w-2.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}



