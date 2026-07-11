import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ScrapedBody } from "@/components/site/ScrapedBody";
import scrapedAll from "@/data/scrapedAll.json";
import { SECTION_BANNER } from "@/lib/sectionBanners";

type S = Record<string, { title?: string; markdown?: string }>;
const SA = scrapedAll as S;

export const Route = createFileRoute("/professional-body-membership")({
  component: PBMPage,
  head: () => ({
    meta: [
      { title: "Professional Body Membership — ATME" },
      { name: "description", content: "Institutional professional society chapters and faculty/student memberships at ATME College of Engineering." },
    ],
  }),
});

function PBMPage() {
  const page = SA["professional-body-membership"] || SA["ieee-home-2"];
  const md = page?.markdown || "";
  return (
    <Layout>
      <PageHero bgImage={SECTION_BANNER.about} eyebrow="Quick Links" title="Professional Body Membership" />
      <div className="container-page py-12 max-w-5xl content-flow">
        <ScrapedBody markdown={md} />
      </div>
    </Layout>
  );
}
