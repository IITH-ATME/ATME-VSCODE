import { createFileRoute } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Layout, PageHero } from "@/components/site/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PdfThumbCard } from "@/components/site/PdfThumbCard";
import scrapedAll from "@/data/scrapedAll.json";
import { SECTION_BANNER } from "@/lib/sectionBanners";

type S = Record<string, { title?: string; markdown?: string }>;
const SA = scrapedAll as S;

export const Route = createFileRoute("/women-cell")({
  component: WomenCellPage,
  head: () => ({
    meta: [
      { title: "Women Cell — ATME College of Engineering" },
      { name: "description", content: "Women Cell at ATME — empowerment, awareness programmes, MOMs, AFH activities and annual reports." },
    ],
  }),
});

type Section = {
  title: string;
  level: number;
  body: string;
  children: Section[];
};

/** Parse the women-cell markdown into a tree of H4 sections each with H3 children. */
function parseSections(md: string): Section[] {
  const lines = md.split("\n");
  const top: Section[] = [];
  let h4: Section | null = null;
  let h3: Section | null = null;

  // Skip preamble before the first heading we care about.
  const stripLink = (t: string) => t.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").trim();

  for (const raw of lines) {
    const m4 = /^####\s+(.+?)\s*$/.exec(raw);
    const m3 = /^###\s+(.+?)\s*$/.exec(raw);
    if (m4) {
      h4 = { title: stripLink(m4[1]), level: 4, body: "", children: [] };
      h3 = null;
      top.push(h4);
      continue;
    }
    if (m3 && h4) {
      h3 = { title: stripLink(m3[1]), level: 3, body: "", children: [] };
      h4.children.push(h3);
      continue;
    }
    if (h3) h3.body += raw + "\n";
    else if (h4) h4.body += raw + "\n";
  }

  return top;
}

const PDF_RE = /\[([^\]]+?)\]\((https?:[^)]+?\.pdf)\)/gi;

function extractPdfs(body: string): { title: string; url: string }[] {
  const out: { title: string; url: string }[] = [];
  const seen = new Set<string>();
  let m: RegExpExecArray | null;
  PDF_RE.lastIndex = 0;
  while ((m = PDF_RE.exec(body))) {
    const url = m[2];
    if (seen.has(url)) continue;
    seen.add(url);
    out.push({ title: m[1].replace(/\\_/g, "_").trim(), url });
  }
  return out;
}

function stripPdfLinks(body: string): string {
  return body
    .replace(/\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\.pdf\)\s*[A-Z\s]*/gi, "")
    .replace(PDF_RE, "")
    .replace(/^\s*[-*]\s*$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function MarkdownBlock({ md }: { md: string }) {
  if (!md.trim()) return null;
  return (
    <div className="overflow-x-auto">
      <div className="prose prose-sm max-w-none text-foreground/90 [&_p]:text-left sm:[&_p]:text-justify [&_p]:hyphens-auto [&_p]:leading-relaxed [&_ul]:pl-5 [&_ol]:pl-5 [&_li]:my-1 [&_li]:text-left [&_table]:w-full [&_table]:border-collapse [&_table]:my-3 [&_th]:border [&_th]:border-[#f5c518] [&_th]:bg-[#129199]/10 [&_th]:p-2 [&_th]:text-left [&_th]:align-top [&_td]:border [&_td]:border-[#f5c518]/60 [&_td]:p-2 [&_td]:align-top [&_h2]:font-display [&_h2]:text-[#129199] [&_h2]:mt-4 [&_h3]:font-display [&_h3]:text-[#129199] [&_h3]:mt-3 [&_a]:text-[#129199] [&_a:hover]:underline [&_strong]:text-[#0d3438]">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
      </div>
    </div>
  );
}

function SectionBody({ section }: { section: Section }) {
  // If this section has H3 sub-sections, render each as a sub-block.
  if (section.children.length > 0) {
    const preamble = section.body.trim();
    return (
      <div className="space-y-6">
        {preamble && <MarkdownBlock md={stripPdfLinks(preamble)} />}
        {section.children.map((sub) => {
          const pdfs = extractPdfs(sub.body);
          const text = stripPdfLinks(sub.body);
          return (
            <div key={sub.title} className="rounded-xl border border-[#f5c518]/40 bg-card p-4">
              <h3 className="font-display text-base font-bold text-[#0d3438] mb-3">{sub.title}</h3>
              {text && <MarkdownBlock md={text} />}
              {pdfs.length > 0 && (
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {pdfs.map((p) => (
                    <PdfThumbCard key={p.url} url={p.url} title={p.title} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  const pdfs = extractPdfs(section.body);
  const text = stripPdfLinks(section.body);
  return (
    <div className="space-y-4">
      {text && <MarkdownBlock md={text} />}
      {pdfs.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {pdfs.map((p) => (
            <PdfThumbCard key={p.url} url={p.url} title={p.title} />
          ))}
        </div>
      )}
    </div>
  );
}

function WomenCellPage() {
  const md = SA["women-cell-atme"]?.markdown || "";
  const sections = parseSections(md).filter(
    (s) => s.body.trim() || s.children.length > 0,
  );

  return (
    <Layout>
      <PageHero
        bgImage={SECTION_BANNER.women}
        eyebrow="Administration"
        title="Women Cell"
        subtitle="Empowering women through awareness programmes, mentorship, MOMs and AFH partnerships."
      />
      <section className="container-page py-10 max-w-5xl">
        <Accordion
          type="multiple"
          defaultValue={sections.length > 0 ? [sections[0].title] : []}
          className="space-y-3"
        >
          {sections.map((s) => (
            <AccordionItem
              key={s.title}
              value={s.title}
              className="rounded-2xl border-2 border-[#129199]/30 bg-card overflow-hidden data-[state=open]:border-[#129199]"
            >
              <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-[#129199]/5 text-left">
                <span className="font-display text-base sm:text-lg font-bold text-[#0d3438]">
                  {s.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5 pt-0">
                <SectionBody section={s} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </Layout>
  );
}
