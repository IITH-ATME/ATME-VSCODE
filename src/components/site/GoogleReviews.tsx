import { Star } from "lucide-react";
import { Reveal } from "./Reveal";
import type { GoogleReviewsResult } from "@/lib/api/googleReviews.functions";

const GOOGLE_MAPS_FALLBACK_URL = "https://www.google.com/maps/place/ATME+College+of+Engineering";

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20.4H24v7.2h11.3c-1.6 4.7-6 8.1-11.3 8.1-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.1-5.1C33.8 6 29.2 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6 4.4C13.9 15.1 18.6 12 24 12c3.1 0 5.8 1.1 8 3l5.1-5.1C33.8 6 29.2 4 24 4c-7.6 0-14.2 4.3-17.7 10.7z" />
      <path fill="#4CAF50" d="M24 44c5.1 0 9.7-1.9 13.2-5.1l-6.1-5.1C29.2 35.6 26.7 36.5 24 36.5c-5.2 0-9.6-3.3-11.3-7.9l-6 4.6C10 39.6 16.5 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20.4H24v7.2h11.3c-.8 2.2-2.2 4.1-4.1 5.4l6.1 5.1C40.5 35.9 44 30.4 44 24c0-1.2-.1-2.4-.4-3.5z" />
    </svg>
  );
}

function StarRow({ rating, className = "h-4 w-4" }: { rating: number; className?: string }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${className} ${i < Math.round(rating) ? "fill-[#f5c518] text-[#f5c518]" : "fill-none text-foreground/20"}`}
        />
      ))}
    </div>
  );
}

export function GoogleReviews({ data }: { data: GoogleReviewsResult | undefined }) {
  const reviews = data?.reviews ?? [];
  if (reviews.length === 0) return null;

  const mapsUrl = data?.mapsUri || GOOGLE_MAPS_FALLBACK_URL;

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-[#f5c518] uppercase text-center">Google Reviews</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-center tracking-tight text-[#129199]">
            What People Say on Google
          </h2>
          <div className="mt-4 flex flex-col items-center justify-center gap-2">
            {typeof data?.overallRating === "number" && (
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-foreground">{data.overallRating.toFixed(1)}</span>
                <StarRow rating={data.overallRating} className="h-5 w-5" />
                {typeof data.totalReviews === "number" && (
                  <span className="text-sm text-foreground/60">({data.totalReviews.toLocaleString()} reviews)</span>
                )}
              </div>
            )}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/60 hover:text-[#129199]"
            >
              <GoogleLogo className="h-3.5 w-3.5" /> Reviews from Google
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Reveal key={r.id} delay={i * 80}>
              <figure className="h-full rounded-2xl bg-white border-2 border-[#129199]/15 p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 active:-translate-y-1 transition-all flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#129199] to-amber-400" />
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-[#129199] to-amber-400 p-[2px]">
                    <div className="relative flex h-full w-full items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#129199] to-amber-400 text-white font-bold text-sm overflow-hidden">
                      <span aria-hidden>{r.author.split(" ").map((w) => w[0]).slice(0, 2).join("")}</span>
                      {r.authorPhoto && (
                        <img
                          src={r.authorPhoto}
                          alt={r.author}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                  <div className="min-w-0">
                    {r.authorUri ? (
                      <a
                        href={r.authorUri}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold leading-tight text-[#129199] text-sm hover:underline truncate block"
                      >
                        {r.author}
                      </a>
                    ) : (
                      <h4 className="font-semibold leading-tight text-[#129199] text-sm truncate">{r.author}</h4>
                    )}
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <StarRow rating={r.rating} />
                      {r.relativeTime && <span className="text-[11px] text-foreground/50">{r.relativeTime}</span>}
                    </div>
                  </div>
                  <GoogleLogo className="h-5 w-5 ml-auto shrink-0" />
                </div>
                <blockquote className="mt-4 text-sm text-foreground/80 italic leading-relaxed relative pl-5 line-clamp-6">
                  <span className="absolute left-0 top-0 text-3xl leading-none text-[#129199]/70 font-serif">&ldquo;</span>
                  {r.text}
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Read all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
