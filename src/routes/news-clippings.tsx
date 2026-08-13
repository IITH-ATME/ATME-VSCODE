import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import { Newspaper, ExternalLink, FileText, Images, ChevronLeft, ChevronRight, X, Calendar } from "lucide-react";
import { NEWS_CLIPPINGS, type Clipping } from "@/data/newsClippings";
import { resolveAssetUrl } from "@/lib/assetUrl";

export const Route = createFileRoute("/news-clippings")({
  head: () => ({
    meta: [
      { title: "In the News — ATME College of Engineering" },
      { name: "description", content: "Press coverage, newspaper clippings and media recognition for ATME College of Engineering, Mysuru." },
      { property: "og:title", content: "In the News — ATME College of Engineering" },
      { property: "og:description", content: "Press coverage, newspaper clippings and media recognition for ATME College of Engineering, Mysuru." },
      { property: "og:url", content: "https://atme.edu.in/news-clippings" },
    ],
    links: [{ rel: "canonical", href: "https://atme.edu.in/news-clippings" }],
  }),
  component: NewsClippingsPage,
});

function imagesOf(c: Clipping) {
  return c.media.filter((m) => m.type === "image");
}
function pdfsOf(c: Clipping) {
  return c.media.filter((m) => m.type === "pdf");
}
function externalOf(c: Clipping) {
  return c.media.filter((m) => m.type === "external");
}

function ClippingCard({ clipping, onOpen }: { clipping: Clipping; onOpen: () => void }) {
  const images = imagesOf(clipping);
  const pdfs = pdfsOf(clipping);
  const externals = externalOf(clipping);

  if (images.length === 0 && externals.length > 0) {
    const href = externals[0].url;
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group relative flex flex-col justify-between h-full rounded-2xl border-2 border-[#f5c518]/50 bg-gradient-to-br from-[#0d3438] to-[#129199] p-5 text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
      >
        <div className="flex items-center justify-between">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15">
            <Newspaper className="h-5 w-5" />
          </span>
          <ExternalLink className="h-4 w-4 text-[#f5c518] opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="mt-6">
          <h4 className="font-semibold leading-snug line-clamp-3">{clipping.title}</h4>
          <p className="mt-2 text-xs text-white/75 flex items-center gap-1">
            <Calendar className="h-3 w-3" /> {clipping.date}
          </p>
        </div>
        <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#f5c518] text-[#0d3438] px-3 py-1 text-[11px] font-bold">
          Read Article <ExternalLink className="h-3 w-3" />
        </span>
      </a>
    );
  }

  const thumb = images[0]?.url;
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative flex flex-col h-full overflow-hidden rounded-2xl border-2 border-[#f5c518]/50 bg-card shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-left"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0d3438]/10">
        {thumb && (
          <img
            src={resolveAssetUrl(thumb)}
            alt={clipping.title}
            loading="lazy"
            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <span className="rounded-full bg-white/95 text-[#0d3438] px-4 py-1.5 text-xs font-bold shadow">View Clipping</span>
        </div>
        {images.length > 1 && (
          <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur px-2 py-1 text-[10px] font-bold text-white">
            <Images className="h-3 w-3" /> +{images.length - 1}
          </span>
        )}
        {pdfs.length > 0 && (
          <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 rounded-full bg-[#f5c518] px-2 py-1 text-[10px] font-bold text-[#0d3438]">
            <FileText className="h-3 w-3" /> PDF
          </span>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h4 className="font-semibold text-sm leading-snug text-foreground line-clamp-3">{clipping.title}</h4>
        <p className="mt-auto pt-3 text-xs text-muted-foreground flex items-center gap-1">
          <Calendar className="h-3 w-3 text-[#129199]" /> {clipping.date}
        </p>
      </div>
    </button>
  );
}

function Lightbox({ clipping, onClose }: { clipping: Clipping; onClose: () => void }) {
  const images = imagesOf(clipping);
  const pdfs = pdfsOf(clipping);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [images.length, onClose]);

  const current = images[idx];

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="max-w-4xl w-full text-center mb-4" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-white font-semibold text-lg leading-snug">{clipping.title}</h3>
        <p className="mt-1 text-white/70 text-sm flex items-center justify-center gap-1.5">
          <Calendar className="h-3.5 w-3.5" /> {clipping.date}
        </p>
      </div>

      <div className="relative flex items-center justify-center max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        {images.length > 1 && (
          <button
            type="button"
            onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
            aria-label="Previous image"
            className="absolute left-0 sm:-left-14 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-[#f5c518] hover:text-[#0d3438] transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}
        {current && (
          <img
            src={resolveAssetUrl(current.url)}
            alt={clipping.title}
            className="max-h-[70vh] w-auto rounded-xl shadow-2xl border-2 border-[#f5c518]/40 object-contain bg-white"
          />
        )}
        {images.length > 1 && (
          <button
            type="button"
            onClick={() => setIdx((i) => (i + 1) % images.length)}
            aria-label="Next image"
            className="absolute right-0 sm:-right-14 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-[#f5c518] hover:text-[#0d3438] transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-[#f5c518]" : "w-2 bg-white/40 hover:bg-white/70"}`}
            />
          ))}
        </div>
      )}

      {pdfs.length > 0 && (
        <a
          href={resolveAssetUrl(pdfs[0].url)}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#f5c518] text-[#0d3438] px-4 py-2 text-xs font-bold hover:opacity-90 transition-opacity"
        >
          <FileText className="h-3.5 w-3.5" /> View Original Press Report (PDF)
        </a>
      )}
    </div>
  );
}

function NewsClippingsPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  const byYear = useMemo(() => {
    const m = new Map<string, Clipping[]>();
    for (const c of NEWS_CLIPPINGS) {
      if (!m.has(c.year)) m.set(c.year, []);
      m.get(c.year)!.push(c);
    }
    return m;
  }, []);
  const years = useMemo(() => Array.from(byYear.keys()).sort((a, b) => Number(b) - Number(a)), [byYear]);
  const openClipping = openId ? NEWS_CLIPPINGS.find((c) => c.id === openId) ?? null : null;

  return (
    <>
      <InfoPage
        eyebrow="Media"
        title="In the News"
        subtitle="Press coverage, newspaper clippings and media recognition"
        intro="A year-wise archive of press coverage, newspaper clippings and media features on ATME College of Engineering's events and achievements. Click any clipping to view the full image."
        afterChildren={
          <div className="space-y-14">
            {years.map((year) => (
              <div key={year}>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#129199]">CY: {year}</h2>
                  <span className="h-[3px] flex-1 rounded-full bg-gradient-to-r from-[#f5c518] to-transparent" />
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    {byYear.get(year)!.length} clipping{byYear.get(year)!.length > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                  {byYear.get(year)!.map((c) => (
                    <ClippingCard key={c.id} clipping={c} onOpen={() => setOpenId(c.id)} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        }
      />
      {openClipping && <Lightbox clipping={openClipping} onClose={() => setOpenId(null)} />}
    </>
  );
}
