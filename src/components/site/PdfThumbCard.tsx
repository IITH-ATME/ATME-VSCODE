import { useEffect, useRef, useState } from "react";
import { FileText, ExternalLink, Maximize2, X } from "lucide-react";
import { PdfEmbed } from "./PdfEmbed";
import { pdfFromAtmeUrl } from "@/data/pdfRewrite";

// Lazy-loaded pdfjs to keep it out of the main bundle.
let pdfjsPromise: Promise<typeof import("pdfjs-dist")> | null = null;
const getPdfjs = () => {
  if (!pdfjsPromise) {
    pdfjsPromise = import("pdfjs-dist").then(async (mod) => {
      // Worker is shipped as an ES module; resolve its URL via Vite.
      const workerUrl = (
        await import("pdfjs-dist/build/pdf.worker.min.mjs?url")
      ).default;
      mod.GlobalWorkerOptions.workerSrc = workerUrl;
      return mod;
    });
  }
  return pdfjsPromise;
};

/** Renders the first page of a PDF into a canvas as a real thumbnail. */
function PdfPageThumbnail({ url, onTitle }: { url: string; onTitle?: (t: string) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    let pdfDoc: { destroy: () => unknown } | null = null;
    (async () => {
      try {
        const pdfjs = await getPdfjs();
        const loadingTask = pdfjs.getDocument({ url, disableRange: true });
        const pdf = await loadingTask.promise;
        pdfDoc = pdf as unknown as { destroy: () => unknown };
        if (cancelled) return;
        const page = await pdf.getPage(1);
        if (cancelled) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const baseViewport = page.getViewport({ scale: 1 });
        const targetWidth = 480;
        const scale = targetWidth / baseViewport.width;
        const viewport = page.getViewport({ scale });
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        await page.render({ canvasContext: ctx, viewport, canvas }).promise;
        if (!cancelled) setStatus("ready");
        // Try to extract a better title: PDF metadata title → first-page text.
        if (onTitle && !cancelled) {
          try {
            const meta = await pdf.getMetadata();
            const info = (meta?.info ?? {}) as { Title?: string };
            const metaTitle = (info.Title || "").trim();
            if (metaTitle && metaTitle.length >= 4 && !/^untitled|^microsoft word|^document\d*$/i.test(metaTitle)) {
              onTitle(metaTitle.replace(/\.pdf$/i, "").trim());
              return;
            }
            const text = await page.getTextContent();
            const firstLine = (text.items as Array<{ str: string }>)
              .map((it) => (it.str || "").trim())
              .filter((s) => s.length > 0)
              .slice(0, 8)
              .join(" ")
              .replace(/\s+/g, " ")
              .trim();
            if (firstLine && firstLine.length >= 4) {
              onTitle(firstLine.slice(0, 120));
            }
          } catch {
            // ignore title extraction errors; fallback title stays
          }
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    })();
    return () => {
      cancelled = true;
      try {
        if (pdfDoc && typeof pdfDoc.destroy === "function") {
          pdfDoc.destroy();
        }
      } catch {
        // ignore cleanup errors from pdfjs internals
      }
    };
  }, [url, onTitle]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 m-auto max-h-full max-w-full bg-white ${
          status === "ready" ? "opacity-100" : "opacity-0"
        } transition-opacity`}
      />
      {status !== "ready" && (
        <div className="absolute inset-0 grid place-items-center text-muted-foreground">
          <FileText className={`h-10 w-10 ${status === "error" ? "opacity-40" : "opacity-60 animate-pulse"}`} />
        </div>
      )}
    </>
  );
}

/** Card-style PDF tile: first-page preview rendered via pdfjs canvas, title
 *  beneath. Click anywhere on the card to expand a full inline preview in
 *  place. An "Open" affordance opens the PDF in a new tab. */
export function PdfThumbCard({ url: rawUrl, title }: { url: string; title: string }) {
  const url = pdfFromAtmeUrl(rawUrl);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [autoTitle, setAutoTitle] = useState<string | null>(null);
  // Treat numeric-only / very short / generic titles as needing enrichment
  // from the PDF's metadata or first-page text.
  const needsAutoTitle = !title || /^\s*\d+\s*$/.test(title) || title.trim().length < 4
    || /^(document|untitled|file|pdf|view|open|download)\b/i.test(title.trim());
  const effectiveTitle = autoTitle || title;

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  if (expanded) {
    return (
      <div ref={ref} className="col-span-full">
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2 min-w-0">
            <FileText className="h-4 w-4 text-primary shrink-0" />
            <span className="font-medium text-sm truncate">{effectiveTitle}</span>
          </div>
          <button
            type="button"
            onClick={() => setExpanded(false)}
            className="inline-flex items-center gap-1 rounded-md border border-border bg-white px-2.5 py-1 text-xs font-semibold text-foreground/80 hover:text-primary hover:border-primary/40 transition-colors"
          >
            <X className="h-3.5 w-3.5" /> Close
          </button>
        </div>
        <PdfEmbed url={url} title={effectiveTitle} height={760} />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      onClick={() => setExpanded(true)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setExpanded(true);
        }
      }}
      className="group block cursor-pointer overflow-hidden rounded-xl border border-border bg-white shadow-sm hover:shadow-lg hover:border-primary/40 transition-all focus:outline-none focus:ring-2 focus:ring-primary/40"
    >
      <div className="relative h-48 sm:h-52 bg-muted/40 overflow-hidden">
        {inView ? (
          <PdfPageThumbnail url={url} onTitle={needsAutoTitle ? (t) => setAutoTitle(t) : undefined} />
        ) : (
          <div className="grid h-full place-items-center text-muted-foreground">
            <FileText className="h-10 w-10 opacity-40" />
          </div>
        )}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors" />
        <div className="absolute right-2 top-2 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-[11px] font-semibold text-primary shadow">
            <Maximize2 className="h-3 w-3" /> Preview
          </span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              try {
                const w = window.open(url, "_blank", "noopener,noreferrer");
                if (!w) window.location.href = url;
              } catch {
                window.location.href = url;
              }
            }}
            className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-[11px] font-semibold text-primary shadow hover:bg-white"
          >
            <ExternalLink className="h-3 w-3" /> Open
          </a>
        </div>
      </div>
      <div className="flex items-start gap-2 p-3 border-t border-border">
        <FileText className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
        <div className="text-sm font-medium leading-snug text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {effectiveTitle}
        </div>
      </div>
    </div>
  );
}
