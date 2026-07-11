import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import { Calendar, MapPin } from "lucide-react";

const events = [
  { t: "Atmeya 2026 — Annual Cultural Fest", d: "May 18 – 20, 2026", v: "Main Auditorium" },
  { t: "National Conference on Sustainable Engineering", d: "May 30, 2026", v: "Seminar Hall A" },
  { t: "Industry Connect: AI in Manufacturing", d: "Jun 14, 2026", v: "ME Block, Hall 3" },
  { t: "Inter‑College Sports Meet", d: "Jul 02 – 05, 2026", v: "Sports Ground" },
  { t: "Hackathon: Code for Karnataka", d: "Jul 22, 2026", v: "CSE Block" },
];

export const Route = createFileRoute("/upcoming-events")({
  head: () => ({
    meta: [
      { title: "Upcoming Events — ATME College of Engineering" },
      { name: "description", content: "Stay updated with all upcoming events, workshops and conferences at ATME College of Engineering, Mysuru." },
      { property: "og:title", content: "Upcoming Events — ATME College of Engineering" },
      { property: "og:description", content: "Festivals, conferences, hackathons and student activities at ATME, Mysuru." },
      { property: "og:url", content: "https://atme.edu.in/upcoming-events" },
    ],
    links: [{ rel: "canonical", href: "https://atme.edu.in/upcoming-events" }],
  }),

  component: () => (
    <InfoPage eyebrow="What's On" title="Upcoming Events" subtitle="Festivals, conferences and student activities">
      <div className="mt-8 grid sm:grid-cols-2 gap-5">
        {events.map((e) => (
          <div key={e.t} className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
              <Calendar className="h-4 w-4" /> {e.d}
            </div>
            <h4 className="mt-3 text-lg font-bold leading-tight">{e.t}</h4>
            <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" /> {e.v}
            </div>
          </div>
        ))}
      </div>
    </InfoPage>
  ),
});
