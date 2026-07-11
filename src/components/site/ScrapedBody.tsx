import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { sanitizeMarkdown } from "@/data/sanitizeMarkdown";
import { rewritePdfUrls } from "@/data/pdfRewrite";
import { titleCaseMarkdownHeadings } from "@/lib/titleCase";
import { rewriteHref } from "@/data/linkRewrite";
import { rewriteImageSrc, rewritePdfHref } from "@/data/imageRewrite";
import { Link } from "@tanstack/react-router";


const PROSE =
  "prose prose-slate max-w-none prose-headings:font-display prose-headings:text-[#129199] prose-a:text-[#129199] prose-img:rounded-lg prose-img:max-w-full prose-img:max-h-[420px] prose-img:object-contain prose-img:mx-auto prose-img:block prose-img:bg-white prose-img:border prose-img:border-border prose-p:text-justify hyphens-auto";

// Mobile-first responsive table:
// - Horizontal scroll only kicks in when the content truly exceeds the
//   viewport (the inner table uses min-w-full so short tables stay flush).
// - Cells wrap their text (whitespace-normal break-words hyphens-auto) so long
//   course/subject titles wrap to multiple lines instead of pushing the table
//   wider than the screen.
const TABLE_CLS =
  "w-full min-w-full table-auto border-collapse text-xs sm:text-sm md:text-base " +
  "border border-[#f5c518] " +
  "[&_th]:border [&_th]:border-[#f5c518] [&_td]:border [&_td]:border-[#f5c518] " +
  "[&_th]:bg-[#129199] [&_th]:text-white [&_th]:text-center " +
  "[&_th]:px-2 [&_th]:py-2 sm:[&_th]:px-3 sm:[&_th]:py-3 " +
  "[&_th]:align-middle [&_th]:whitespace-normal [&_th]:break-words [&_th]:hyphens-auto " +
  "[&_td]:px-2 [&_td]:py-2 sm:[&_td]:px-3 sm:[&_td]:py-3 " +
  "[&_td]:align-middle [&_td]:whitespace-normal [&_td]:break-words [&_td]:hyphens-auto " +
  "[&_td]:max-w-[280px] sm:[&_td]:max-w-none";

export function ScrapedBody({ markdown, deptSlug }: { markdown: string; deptSlug?: string }) {
  const cleaned = titleCaseMarkdownHeadings(sanitizeMarkdown(rewritePdfUrls(markdown || "")));
  return (
    <div className={`content-card content-prose ${PROSE}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4 pb-2 border-b-2 border-[#129199]/30 text-[#129199] font-display">{children}</h2>,
          h2: ({ children }) => <h3 className="text-xl font-semibold mt-8 mb-3 pb-2 border-b border-[#129199]/20 text-[#129199] font-display">{children}</h3>,
          h3: ({ children }) => <h4 className="text-base font-semibold mt-6 mb-2 text-[#129199] font-display">{children}</h4>,
          h4: ({ children }) => <h4 className="text-base font-semibold mt-6 mb-2 text-[#129199] font-display">{children}</h4>,
          h5: ({ children }) => <h4 className="text-base font-semibold mt-6 mb-2 text-[#129199] font-display">{children}</h4>,
          h6: ({ children }) => <h4 className="text-base font-semibold mt-6 mb-2 text-[#129199] font-display">{children}</h4>,
          a: ({ href, children }) => {
            const result = rewriteHref(href, deptSlug);
            if (result.kind === "drop") return <span className="font-semibold text-[#0d3438]">{children}</span>;
            if (result.kind === "facultyInternal") {
              return (
                <Link
                  to="/departments/$slug/faculty/$facultyId"
                  params={{ slug: result.deptSlug, facultyId: result.facultyId }}
                  className="text-[#129199] underline hover:text-[#0d3438]"
                >
                  {children}
                </Link>
              );
            }
            const finalHref = rewritePdfHref(result.href);
            return (
              <a href={finalHref} target={finalHref?.startsWith('http') ? '_blank' : undefined} rel={finalHref?.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-[#129199] underline hover:text-[#0d3438]">
                {children}
              </a>
            );
          },
          table: ({ children }) => (
            <div className="my-6 -mx-2 md:mx-0 rounded-lg border border-[#f5c518] overflow-x-auto">
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
        {cleaned}
      </ReactMarkdown>
    </div>
  );
}
