import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { SECTION_BANNER } from "@/lib/sectionBanners";
import { SectionTabNav } from "@/components/site/SectionTabNav";
import { libraryTabs } from "@/lib/hubTabs";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "Central Library — ATME College of Engineering" },
      { name: "description", content: "ATME Central Library — collection, services, OPAC, digital learning, e-resources, repository and contact." },
      { property: "og:title", content: "Central Library — ATME" },
      { property: "og:description", content: "Knowledge center of ATME — print + e-book collection, VTU consortium, OPAC, digital learning and library services." },
    ],
  }),
  component: LibraryHub,
});

function LibraryHub() {
  return (
    <Layout>
      <PageHero
        eyebrow="Resources"
        title="Central Library"
        subtitle="The knowledge center of ATME — a curated print and digital collection supporting teaching, learning and research."
        bgImage={SECTION_BANNER.resources}
      />
      <SectionTabNav items={libraryTabs} ariaLabel="Library sections" />
      <section className="container-page py-12">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4 text-sm text-foreground/80">
          The ATMECE Library and Information Center, established in October 2010, is the heart of the institute.
          With <strong>74,839 volumes</strong> (print + e-books), <strong>7,918 e-journals</strong> and access to
          leading consortium databases, it serves students, faculty and research scholars across all disciplines.
          Select a section above to explore.
        </div>
      </section>
    </Layout>
  );
}
