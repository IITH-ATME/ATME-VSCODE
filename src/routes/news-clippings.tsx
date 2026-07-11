import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import { Newspaper } from "lucide-react";

const clips = [
  { t: "ATME ranked among 'Best Emerging Private Engineering Colleges in Karnataka'", s: "Deccan Herald", d: "Mar 2026" },
  { t: "ATMECE achieves NAAC A+ accreditation in first cycle", s: "The Hindu", d: "Feb 2026" },
  { t: "ATME students secure Rs. 25 LPA offer", s: "Star of Mysore", d: "Jan 2026" },
  { t: "ATME hosts National Conference on AI & Sustainability", s: "Mysuru Mithra", d: "Dec 2025" },
];

export const Route = createFileRoute("/news-clippings")({
  head: () => ({
    meta: [
      { title: "In the News — ATME College of Engineering" },
      { name: "description", content: "Recent press coverage and news clippings featuring ATME College of Engineering, Mysuru." },
      { property: "og:title", content: "In the News — ATME College of Engineering" },
      { property: "og:description", content: "Recent press coverage and recognitions featuring ATME College of Engineering." },
      { property: "og:url", content: "https://atme.edu.in/news-clippings" },
    ],
    links: [{ rel: "canonical", href: "https://atme.edu.in/news-clippings" }],
  }),

  component: () => (
    <InfoPage eyebrow="Media" title="In the News" subtitle="Press coverage and recognitions">
      <ul className="mt-8 space-y-4">
        {clips.map((c) => (
          <li key={c.t} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover:shadow-md transition">
            <Newspaper className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold leading-tight">{c.t}</h4>
              <p className="text-xs text-muted-foreground mt-1">{c.s} · {c.d}</p>
            </div>
          </li>
        ))}
      </ul>
    </InfoPage>
  ),
});
