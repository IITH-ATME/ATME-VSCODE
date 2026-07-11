import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { SECTION_BANNER } from "@/lib/sectionBanners";
import { SectionTabNav } from "@/components/site/SectionTabNav";
import { sportsTabs } from "@/lib/hubTabs";

export const Route = createFileRoute("/sports")({
  head: () => ({
    meta: [
      { title: "Department of Sports — ATME College of Engineering" },
      { name: "description", content: "Sports department at ATME — facilities, committee, staff, events, scholarships and achievements." },
      { property: "og:title", content: "Department of Sports — ATME" },
      { property: "og:description", content: "Cricket, football, basketball, athletics and indoor sports facilities at ATME, Mysuru." },
    ],
  }),
  component: SportsHub,
});

function SportsHub() {
  return (
    <Layout>
      <PageHero
        eyebrow="Campus Life"
        title="Department of Sports"
        subtitle="Cricket, football, basketball, athletics and indoor sports — ATME's sports department supports a well-rounded campus experience."
        bgImage={SECTION_BANNER.campus}
      />
      <SectionTabNav items={sportsTabs} ariaLabel="Sports sections" />
      <section className="container-page py-12">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4 text-sm text-foreground/80">
          The Department of Sports at ATME pursues the mission that fitness is a key component of a well-rounded
          education. Regular physical activity enhances memory, improves cognition and problem-solving abilities,
          and elevates overall well-being. Select a section above to explore.
        </div>
      </section>
    </Layout>
  );
}
