import { SECTION_BANNER } from "@/lib/sectionBanners";
import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Video, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/resources/videos")({
  head: () => ({
    meta: [
      { title: "Video Lectures — ATME" },
      { name: "description", content: "Curated NPTEL, SWAYAM and YouTube playlists for engineering subjects, available to ATME students and faculty." },
      { property: "og:title", content: "Video Lectures — ATME" },
      { property: "og:description", content: "High-quality MOOCs and curated playlists from leading institutions." },
      { property: "og:url", content: "https://atme.edu.in/resources/videos" },
    ],
    links: [{ rel: "canonical", href: "https://atme.edu.in/resources/videos" }],
  }),
  component: VideosPage,
});


const sources = [
  { name: "NPTEL", desc: "Free certification courses by IITs and IISc.", url: "https://nptel.ac.in/" },
  { name: "SWAYAM", desc: "Govt. of India MOOC platform — credit-bearing courses.", url: "https://swayam.gov.in/" },
  { name: "Coursera", desc: "University and industry courses (financial aid available).", url: "https://www.coursera.org/" },
  { name: "edX", desc: "University-led courses, MicroMasters and certificates.", url: "https://www.edx.org/" },
  { name: "MIT OpenCourseWare", desc: "Free lectures, notes and assignments from MIT.", url: "https://ocw.mit.edu/" },
  { name: "YouTube — Engineering", desc: "Curated playlists by subject and semester.", url: "https://www.youtube.com/" },
];

function VideosPage() {
  return (
    <Layout>
      <PageHero eyebrow="Learning Hub" title="Video Lectures" subtitle="High-quality MOOCs and curated playlists from leading institutions."  bgImage={SECTION_BANNER.resources} />
      <section className="container-page py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sources.map((s) => (
          <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="group rounded-2xl border border-border bg-card p-6 hover:border-primary hover:shadow-soft transition-all">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary"><Video className="h-5 w-5" /></div>
            <h4 className="mt-4 font-display font-semibold">{s.name}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Visit <ExternalLink className="h-3.5 w-3.5" /></div>
          </a>
        ))}
      </section>
    </Layout>
  );
}
