import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { SECTION_BANNER } from "@/lib/sectionBanners";
import { Users, Shield, FileText, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/administration")({
  head: () => ({
    meta: [
      { title: "Administration — ATME College of Engineering" },
      { name: "description", content: "Deans, committees, cells and institutional policies at ATME College of Engineering, Mysuru." },
      { property: "og:title", content: "Administration at ATME" },
      { property: "og:description", content: "Leadership, cells, committees and policies that run ATME College of Engineering." },
    ],
  }),
  component: AdministrationHub,
});

const leadership = [
  { slug: "dean-academics",                       role: "Dean — Academics",        body: "Curriculum, examinations, accreditation and academic governance." },
  { slug: "atme-research-message-dean-research",  role: "Dean — Research",         body: "Research strategy, sponsored projects, IPR and publications." },
  { slug: "dr-srinivasa-k",                       role: "Dean — Student Affairs",  body: "Student welfare, mentoring, discipline and co-curricular life." },
];

function AdministrationHub() {
  return (
    <Layout>
      <PageHero
        eyebrow="Administration"
        title="Administration & Governance"
        subtitle="The deans, cells, committees and policies that make ATME run — with transparency and student welfare at the core."
        bgImage={SECTION_BANNER.administration}
      />

      <section className="container-page py-14">
        <div className="flex items-end justify-between gap-4 border-b border-border pb-3 mb-6">
          <h2 className="text-2xl font-bold">Leadership</h2>
          <div className="text-sm text-muted-foreground">Deans of the college</div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {leadership.map((p) => (
            <Link
              key={p.slug}
              to="/p/$"
              params={{ _splat: p.slug }}
              className="group rounded-2xl border border-border bg-card hover:border-primary hover:shadow-md transition-all p-6 flex flex-col"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
                <Users className="h-5 w-5" />
              </div>
              <h4 className="mt-4 font-display text-lg font-bold group-hover:text-primary transition-colors">{p.role}</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.body}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                View profile <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page pb-10 grid md:grid-cols-2 gap-5">
        <div className="rounded-2xl bg-primary text-primary-foreground p-8">
          <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary-foreground/15">
            <Shield className="h-5 w-5" />
          </div>
          <h3 className="mt-4 font-display text-xl font-bold">Cells & Committees</h3>
          <p className="mt-2 text-primary-foreground/85">
            Women Cell, Anti-Ragging, IIC, E-Cell, RPC and centres of excellence governing day-to-day institutional life.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
            <FileText className="h-5 w-5" />
          </div>
          <h3 className="mt-4 font-display text-xl font-bold">Policies</h3>
          <p className="mt-2 text-muted-foreground">
            Admission, placement, library, leave and NISP policies published for full transparency.
          </p>
        </div>
      </section>
    </Layout>
  );
}
