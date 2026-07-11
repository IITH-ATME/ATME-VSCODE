import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { SECTION_BANNER } from "@/lib/sectionBanners";
import { Beaker, BookOpen, Lightbulb, Award, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research at ATME College of Engineering" },
      { name: "description", content: "Research initiatives, funding, publications, IPR and the IIRS-ISRO network centre at ATME, Mysuru." },
      { property: "og:title", content: "Research at ATME" },
      { property: "og:description", content: "Research vision, funding, publications and MoUs at ATME College of Engineering." },
    ],
  }),
  component: ResearchHub,
});

const pillars = [
  { icon: Beaker,    title: "Applied Research",  body: "Multi-disciplinary projects spanning engineering, sciences and management — solving real industry problems." },
  { icon: BookOpen,  title: "Publications",      body: "Faculty and students publish in peer-reviewed Scopus and SCI indexed journals across domains." },
  { icon: Lightbulb, title: "IPR & Innovation",  body: "Patent filings, design registrations and a steady pipeline of innovation from labs and centres of excellence." },
  { icon: Award,     title: "Funded Projects",   body: "Sponsored research from VGST, AICTE, KSCST and industry partners." },
];

function ResearchHub() {
  return (
    <Layout>
      <PageHero
        eyebrow="Research"
        title="Research at ATME"
        subtitle="A culture of inquiry — from undergraduate projects to sponsored research, publications and intellectual property."
        bgImage={SECTION_BANNER.research}
      />

      <section className="container-page py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="mt-4 font-display text-lg font-bold">{title}</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="rounded-2xl bg-primary text-primary-foreground p-8 md:p-10 grid md:grid-cols-[1fr_auto] items-center gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">Industry & Academia</div>
            <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold">Call for Research Proposals, Conferences & Sponsorships</h3>
            <p className="mt-3 text-primary-foreground/85 max-w-2xl">
              ATME invites researchers and industry partners to collaborate on funded research, sponsored conferences and joint MoUs.
            </p>
          </div>
          <Link
            to="/p/$"
            params={{ _splat: "call-for-research-proposals-conferences-and-sponsorships" }}
            className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground text-primary px-5 py-3 font-semibold hover:bg-secondary transition-colors"
          >
            View proposal call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
