import { SECTION_BANNER } from "@/lib/sectionBanners";
import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { departmentsIndex as departments } from "@/data/departmentsIndex";
import { FileText } from "lucide-react";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/resources/papers")({
  head: () =>
    seo({
      title: "Previous Year Question Papers — ATME",
      path: "/resources/papers",
      description: "VTU and internal previous-year question papers organised by branch, semester and year.",
    }),
  component: PapersPage,
});


const YEARS = ["2024-25","2023-24","2022-23","2021-22","2020-21"];

function PapersPage() {
  return (
    <Layout>
      <PageHero eyebrow="Learning Hub" title="Previous Year Question Papers" subtitle="VTU and internal question papers organised by branch and year."  bgImage={SECTION_BANNER.resources} />
      <section className="container-page py-16 space-y-10">
        {departments.map((d) => (
          <div key={d.slug}>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">{d.code}</span>
              <h2 className="font-display text-xl font-semibold">{d.name}</h2>
            </div>
            <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {YEARS.map((y) => (
                <a key={y} href={`https://atme.edu.in/${d.slug}/`} target="_blank" rel="noreferrer" className="rounded-xl border border-border bg-card p-4 hover:border-primary hover:shadow-card transition-all">
                  <FileText className="h-5 w-5 text-primary" />
                  <div className="mt-2 text-sm font-semibold">{y}</div>
                  <div className="text-xs text-muted-foreground">All semesters · VTU papers</div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
