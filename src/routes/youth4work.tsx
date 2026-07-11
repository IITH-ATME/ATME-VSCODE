import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ScrapedBody } from "@/components/site/ScrapedBody";
import scrapedAll from "@/data/scrapedAll.json";
import { SECTION_BANNER } from "@/lib/sectionBanners";

type S = Record<string, { title?: string; markdown?: string }>;
const SA = scrapedAll as S;

export const Route = createFileRoute("/youth4work")({
  component: Youth4workPage,
  head: () => ({
    meta: [
      { title: "Youth4work — ATME" },
      { name: "description", content: "Youth4work and AICTE collaboration for jobs, internships and skill-based assessments at ATME College of Engineering." },
    ],
  }),
});

function Youth4workPage() {
  const page = SA["youth4work"];
  const md = page?.markdown || "";
  return (
    <Layout>
      <PageHero bgImage={SECTION_BANNER.about} eyebrow="Quick Links" title="Youth4work" />
      <div className="container-page py-12 max-w-5xl content-flow">
        <ScrapedBody markdown={md} />
      </div>
    </Layout>
  );
}
