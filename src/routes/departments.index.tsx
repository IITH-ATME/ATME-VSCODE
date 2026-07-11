import { SECTION_BANNER } from "@/lib/sectionBanners";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { departmentsIndex as departments } from "@/data/departmentsIndex";

export const Route = createFileRoute("/departments/")({
  head: () => ({
    meta: [
      { title: "Departments — ATME College of Engineering" },
      { name: "description", content: "Explore UG and PG departments at ATME including CSE, AI & ML, Cyber Security, ECE, EEE, Mechanical, Civil, BCA, MCA and MBA." },
      { property: "og:title", content: "Departments at ATME" },
      { property: "og:description", content: "UG and PG departments with industry-aligned curriculum." },
    ],
  }),
  component: DeptsList,
});

const PG_SLUGS = new Set(["mca", "mba"]);

function DeptCard({ d }: { d: typeof departments[number] }) {
  return (
    <Link
      key={d.slug}
      to="/departments/$slug"
      params={{ slug: d.slug }}
      className="group rounded-2xl border border-border bg-card p-7 hover:shadow-soft hover:border-[#129199] transition-all block"
    >
      <div className="flex items-center justify-between">
        <span className="rounded-md px-2.5 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#129199" }}>{d.code}</span>
      </div>
      <h4 className="mt-5 font-display text-xl font-semibold group-hover:text-[#129199] transition-colors">{d.name}</h4>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.short}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">VTU Affiliated</span>
      </div>
    </Link>
  );
}

function DeptsList() {
  const ug = departments.filter((d) => !PG_SLUGS.has(d.slug));
  const pg = departments.filter((d) => PG_SLUGS.has(d.slug));
  return (
    <Layout>
      <PageHero eyebrow="Programmes" title="Departments with one standard of excellence" subtitle="UG and PG programmes are affiliated to VTU, Belagavi and approved by AICTE. Several are NBA accredited."  bgImage={SECTION_BANNER.departments} />
      <section className="container-page py-12 space-y-12">
        <div>
          <div className="flex items-end justify-between gap-4 pb-3 border-b-2" style={{ borderColor: "#129199" }}>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#f5c518" }}>Undergraduate</div>
              <h2 className="mt-1 font-display text-2xl md:text-3xl font-bold" style={{ color: "#129199" }}>UG Programmes (B.E.)</h2>
            </div>
            <span className="text-sm text-muted-foreground">{ug.length} departments</span>
          </div>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ug.map((d) => <DeptCard key={d.slug} d={d} />)}
          </div>
        </div>

        <div>
          <div className="flex items-end justify-between gap-4 pb-3 border-b-2" style={{ borderColor: "#129199" }}>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#f5c518" }}>Postgraduate</div>
              <h2 className="mt-1 font-display text-2xl md:text-3xl font-bold" style={{ color: "#129199" }}>PG Programmes</h2>
            </div>
            <span className="text-sm text-muted-foreground">{pg.length} departments</span>
          </div>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pg.map((d) => <DeptCard key={d.slug} d={d} />)}
          </div>
        </div>
      </section>
    </Layout>
  );
}
