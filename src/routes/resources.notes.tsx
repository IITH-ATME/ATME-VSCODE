import { SECTION_BANNER } from "@/lib/sectionBanners";
import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { departmentsIndex as departments } from "@/data/departmentsIndex";
import { FileText, Download } from "lucide-react";

export const Route = createFileRoute("/resources/notes")({
  head: () => ({
    meta: [
      { title: "Notes & Study Material — ATME" },
      { name: "description", content: "Subject-wise lecture notes organised by branch and semester for ATME engineering students." },
      { property: "og:title", content: "Notes & Study Material — ATME" },
      { property: "og:description", content: "Browse subject-wise lecture notes by branch and semester." },
      { property: "og:url", content: "https://atme.edu.in/resources/notes" },
    ],
    links: [{ rel: "canonical", href: "https://atme.edu.in/resources/notes" }],
  }),
  component: NotesPage,
});


const SEMS = [1,2,3,4,5,6,7,8];

function NotesPage() {
  return (
    <Layout>
      <PageHero eyebrow="Learning Hub" title="Notes & Study Material" subtitle="Browse subject-wise lecture notes by branch and semester."  bgImage={SECTION_BANNER.resources} />
      <section className="container-page py-16 space-y-10">
        {departments.map((d) => (
          <div key={d.slug}>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">{d.code}</span>
              <h2 className="font-display text-xl font-semibold">{d.name}</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {SEMS.map((s) => (
                <a key={s} href={`https://atme.edu.in/${d.slug}/`} target="_blank" rel="noreferrer" className="group rounded-xl border border-border bg-card p-4 text-center hover:border-primary hover:shadow-card transition-all">
                  <FileText className="h-5 w-5 text-primary mx-auto" />
                  <div className="mt-2 text-xs font-semibold">Semester {s}</div>
                  <div className="text-[10px] text-muted-foreground">Notes & PDFs</div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
