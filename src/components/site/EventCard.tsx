import { Link } from "@tanstack/react-router";
import { Calendar, MapPin, Download, FileText, ImageIcon } from "lucide-react";
import { rewriteImageSrc } from "@/data/imageRewrite";
import { rewritePdfHref } from "@/data/imageRewrite";
import type { SiteEvent } from "@/data/siteEvents";

function formatDate(e: SiteEvent): string {
  return e.startTime ? `${e.startDate} · ${e.startTime}` : e.startDate;
}

/** Shared event thumbnail card used on Upcoming Events, Campus Life Events
 *  and the home page's Events sections — keeps the date/venue icon
 *  treatment and brochure/poster buttons consistent everywhere. */
export function EventCard({ event, isPast = false }: { event: SiteEvent; isPast?: boolean }) {
  const banner = event.banner ? rewriteImageSrc(event.banner) : null;
  const brochure = event.brochure ? rewritePdfHref(event.brochure) : null;
  const poster = event.poster ? rewritePdfHref(event.poster) : null;
  const samePdf = brochure && poster && brochure === poster;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:shadow-soft hover:-translate-y-1 transition-all">
      <Link to="/p/$" params={{ _splat: `event/${event.slug}` }} className="block">
        <div className="aspect-[16/10] w-full overflow-hidden bg-[#0d3438] relative">
          {banner ? (
            <img
              src={banner}
              alt={event.title}
              loading="lazy"
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-white/40">
              <ImageIcon className="h-10 w-10" />
            </div>
          )}
          {isPast && (
            <span className="absolute top-2 right-2 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
              Past Event
            </span>
          )}
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <Link to="/p/$" params={{ _splat: `event/${event.slug}` }}>
          <h3 className="font-display text-base sm:text-lg font-bold leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {event.title}
          </h3>
        </Link>
        <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 shrink-0 text-primary" />
            <span>{formatDate(event)}</span>
          </div>
          {event.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <span>{event.location}</span>
            </div>
          )}
        </div>
        {event.desc && (
          <p className="mt-3 text-sm text-foreground/80 leading-relaxed line-clamp-2">{event.desc}</p>
        )}
        {(brochure || poster) && (
          <div className="mt-4 flex flex-wrap gap-2 pt-1">
            {brochure && (
              <a
                href={brochure}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Download className="h-3.5 w-3.5" /> Download Brochure
              </a>
            )}
            {poster && !samePdf && (
              <a
                href={poster}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-primary text-primary px-3 py-1.5 text-xs font-semibold hover:bg-primary/10 transition-colors"
              >
                <FileText className="h-3.5 w-3.5" /> Download Poster
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
