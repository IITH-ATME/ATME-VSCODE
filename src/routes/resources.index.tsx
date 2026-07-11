import { SECTION_BANNER } from "@/lib/sectionBanners";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { BookOpen, FileText, Video, Library, Target, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title: "Student Learning Hub — ATME" },
      { name: "description", content: "Notes, previous year question papers, video lectures, e-library and placement prep — everything ATME students need in one place." },
      { property: "og:title", content: "Student Learning Hub — ATME" },
      { property: "og:description", content: "Notes, VTU papers, video lectures, e-library and placement prep for ATME students." },
      { property: "og:url", content: "https://atme.edu.in/resources" },
    ],
    links: [{ rel: "canonical", href: "https://atme.edu.in/resources" }],
  }),
  component: ResourcesHub,
});


const cards = [
  { to: "/resources/notes", icon: BookOpen, t: "Notes & Study Material", d: "Subject-wise lecture notes and reference material across semesters." },
  { to: "/resources/papers", icon: FileText, t: "Previous Year Question Papers", d: "VTU question papers organised by branch and semester." },
  { to: "/resources/videos", icon: Video, t: "Video Lectures", d: "Curated NPTEL, SWAYAM and YouTube playlists for every subject." },
  { to: "/resources/elibrary", icon: Library, t: "E-Library & Journals", d: "Access IEEE, Springer, DELNET, NDL and the open access library." },
  { to: "/resources/placement", icon: Target, t: "Placement Prep", d: "Aptitude, coding practice, mock interviews and resume kits." },
];

function ResourcesHub() {
  return (
    <Layout>
      <PageHero eyebrow="Student Learning Hub" title="Everything you need to learn — in one place" subtitle="Notes, question papers, video lectures, journals and placement prep, curated for ATME students."  bgImage={SECTION_BANNER.resources} />
      <section className="container-page py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map(({ to, icon: Icon, t, d }) => (
          <Link key={to} to={to} className="group rounded-2xl border border-border bg-card p-7 hover:border-primary hover:shadow-soft transition-all">
            <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground"><Icon className="h-5 w-5" /></div>
            <h4 className="mt-5 font-display text-lg font-semibold">{t}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
              Open <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        ))}
      </section>
    </Layout>
  );
}
