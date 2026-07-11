import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ScrapedBody } from "@/components/site/ScrapedBody";
import scrapedAll from "@/data/scrapedAll.json";
import { SECTION_BANNER } from "@/lib/sectionBanners";

type S = Record<string, { title?: string; markdown?: string }>;
const SA = scrapedAll as S;

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers — ATME" },
      { name: "description", content: "Employment notifications and career opportunities at ATME College of Engineering, Mysuru." },
    ],
  }),
});

function CareersPage() {
  const page = SA["careers"];
  const md = page?.markdown || "";
  return (
    <Layout>
      <PageHero bgImage={SECTION_BANNER.careers} eyebrow="Quick Links" title="Careers @ ATME" />
      <div className="container-page py-12 max-w-5xl content-flow">
        <ScrapedBody markdown={md} />
      </div>
    </Layout>
  );
}
