import { useEffect, useRef, useState } from "react";
import { ExternalLink, Download, FileWarning, Info } from "lucide-react";
import { pdfFromAtmeUrl } from "@/data/pdfRewrite";

// Diagnostics toggle: append ?diag=1 (or #diag) to any /p/* URL to render a
// small badge under each PDF embed showing which render path was chosen and
// why a fallback was used. Helps quickly spot content issues without devtools.
function useDiagnostics(): boolean {
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const check = () => {
      const sp = new URLSearchParams(window.location.search);
      setOn(sp.get("diag") === "1" || window.location.hash.includes("diag"));
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);
  return on;
}

export function PdfEmbed({
  url: rawUrl,
  title,
  height = 780,
  hideDownload = false,
}: {
  url?: string | null;
  title?: string;
  height?: number;
  hideDownload?: boolean;
}) {
  const url = rawUrl ? pdfFromAtmeUrl(rawUrl) : rawUrl;
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const diag = useDiagnostics();

  // Track viewport so the embed height adapts: phones get ~70vh capped,
  // tablets/desktop get the requested fixed height.
  const [vw, setVw] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1280,
  );
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  const isMobile = vw < 640;
  const isTablet = vw >= 640 && vw < 1024;

  // Responsive frame height: phones use 70vh (min 420, max 620),
  // tablets use 80vh (max 720), desktop uses the requested height.
  const frameHeight = (() => {
    if (typeof window === "undefined") return height;
    const vh = window.innerHeight || 800;
    if (isMobile) return Math.max(420, Math.min(Math.round(vh * 0.7), 620));
    if (isTablet) return Math.min(Math.round(vh * 0.8), 720);
    return height;
  })();


  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  // ── Fallback UI when no URL was provided ────────────────────────────────
  if (!url || !url.trim()) {
    return (
      <div
        ref={ref}
        data-pdf-embed="missing"
        data-pdf-title={title || ""}
        className="my-6 overflow-hidden rounded-xl border border-dashed border-destructive/50 bg-destructive/5 shadow-sm"
      >
        <div className="flex flex-col items-center justify-center gap-3 p-8 text-center">
          <FileWarning className="h-8 w-8 text-destructive" aria-hidden />
          <p className="text-sm font-semibold text-foreground">
            {title || "Document"} — PDF URL missing
          </p>
          <p className="text-xs text-muted-foreground max-w-md">
            No source URL was provided for this section. Add a PDF link in the
            page body or in <code>src/data/pageBodyOverrides.ts</code>.
          </p>
          {diag && (
            <code className="mt-1 rounded bg-muted px-2 py-1 text-[11px] text-muted-foreground">
              diag: url=null · title={JSON.stringify(title ?? null)}
            </code>
          )}
        </div>
      </div>
    );
  }

  const absoluteUrl = (() => {
    try {
      if (/^https?:\/\//i.test(url)) return url;
      if (typeof window !== "undefined")
        return new URL(url, window.location.origin).toString();
    } catch {
      /* noop */
    }
    return url;
  })();
  const isHttp = /^https?:\/\//i.test(absoluteUrl);
  const gviewSrc = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(absoluteUrl)}`;
  const pdfjsViewerSrc = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(absoluteUrl)}`;
  const nativeSrc = `${url}#toolbar=1&navpanes=0&view=FitH`;

  const renderPath = !inView
    ? "lazy-placeholder"
    : isMobile
      ? isHttp
        ? "mobile-native-iframe"
        : "mobile-open-cta"
      : "desktop-native-object→gview-fallback";

  // Open in new tab — uses window.open so it works even when the parent
  // preview iframe lacks `allow-popups` for plain target="_blank" links.
  const openInNewTab = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const w = window.open(absoluteUrl, "_blank", "noopener,noreferrer");
      if (!w) window.location.href = absoluteUrl;
    } catch {
      window.location.href = absoluteUrl;
    }
  };

  const header = (
    <div className="flex items-center justify-between gap-3 border-b border-border bg-muted/40 px-4 py-2.5 text-sm">
      <span className="font-medium text-foreground truncate">
        {title || "Document"}
      </span>
      <div className="flex items-center gap-3 shrink-0">
        <a
          href={absoluteUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={openInNewTab}
          className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline"
        >
          <ExternalLink className="h-3.5 w-3.5" /> Open
        </a>
        {!hideDownload && (
          <a
            href={absoluteUrl}
            download
            className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline"
          >
            <Download className="h-3.5 w-3.5" /> Download
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      data-pdf-embed="ok"
      data-pdf-url={absoluteUrl}
      data-pdf-render-path={renderPath}
      className="my-6 w-full max-w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm"
    >
      {header}
      {!inView ? (
        <div
          className="grid place-items-center text-sm text-muted-foreground w-full"
          style={{ height: frameHeight }}
        >
          Loading document…
        </div>
      ) : isMobile ? (
        <div className="flex flex-col">
          {/* Google Docs viewer renders the PDF inline so the browser
             never triggers a native download prompt. Users can still
             download explicitly via the button in the header. */}
          <iframe
            src={gviewSrc}
            title={title || "PDF"}
            className="block w-full bg-white border-0"
            style={{ height: frameHeight }}
            loading="lazy"
          />
          <div className="flex items-center justify-center gap-2 border-t border-border bg-muted/30 px-3 py-2.5">
            <a
              href={absoluteUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={openInNewTab}
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground font-semibold"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Open in new tab
            </a>
            <a
              href={absoluteUrl}
              download
              className="inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-white px-3 py-1.5 text-xs text-primary font-semibold"
            >
              <Download className="h-3.5 w-3.5" /> Download
            </a>
          </div>
        </div>
      ) : (
        <iframe
          src={gviewSrc}
          title={title || "PDF"}
          className="block w-full bg-white border-0"
          style={{ height: frameHeight }}
          loading="lazy"
        />
      )}

      {diag && (
        <div className="flex flex-wrap items-center gap-2 border-t border-border bg-muted/30 px-3 py-2 text-[11px] text-muted-foreground">
          <Info className="h-3 w-3" aria-hidden />
          <span>render: <code className="text-foreground">{renderPath}</code></span>
          <span>·</span>
          <span>device: <code className="text-foreground">{isMobile ? "mobile" : "desktop"}</code></span>
          <span>·</span>
          <span>scheme: <code className="text-foreground">{isHttp ? "http(s)" : "relative"}</code></span>
          <span>·</span>
          <span className="truncate max-w-[60ch]" title={absoluteUrl}>
            url: <code className="text-foreground">{absoluteUrl}</code>
          </span>
        </div>
      )}
    </div>
  );
}
