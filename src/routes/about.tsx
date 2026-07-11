import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { SECTION_BANNER } from "@/lib/sectionBanners";
import { GraduationCap, Trophy, Building2, Globe2, Download } from "lucide-react";
import brochure from "@/assets/college-brochure.pdf.asset.json";
import { resolveAssetUrl } from "@/lib/assetUrl";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ATME College of Engineering — Mysuru" },
      { name: "description", content: "About ATME — quick facts, accreditations and key information." },
      { property: "og:title", content: "About ATME College of Engineering" },
      { property: "og:description", content: "Quick facts about ATME College of Engineering, Mysuru." },
    ],
  }),
  component: AboutHub,
});

const stats = [
  { icon: GraduationCap, v: "15+", l: "Years of Excellence" },
  { icon: Building2,     v: "20+",  l: "Acres Green Campus" },
  { icon: Trophy,        v: "NAAC A+", l: "Accredited" },
  { icon: Globe2,        v: "VTU",  l: "Affiliated" },
];



function AboutHub() {
  return (
    <Layout>
      <PageHero
        eyebrow="About Us"
        title="ATME College of Engineering"
        subtitle="A 20-acre green campus in Mysuru nurturing academically excellent, culturally vibrant and globally competent engineers."
        bgImage={SECTION_BANNER.about}
      />

      {/* Brochure download */}
      <section className="container-page pt-10 flex justify-center">
        <a
          href={resolveAssetUrl(brochure.url)}
          download
          className="inline-flex items-center gap-2 rounded-full bg-[#129199] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#0f7a82] transition"
        >
          <Download className="h-4 w-4" />
          Download College Brochure (2026-27)
        </a>
      </section>

      {/* Quick stats */}
      <section className="container-page py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map(({ icon: Icon, v, l }) => (
          <div key={l} className="rounded-2xl border border-border bg-card p-6">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <div className="mt-4 font-display text-3xl font-bold">{v}</div>
            <div className="text-sm text-muted-foreground">{l}</div>
          </div>
        ))}
      </section>

      {/* Who we are */}
      <section className="container-page pb-16">
        <div className="grid lg:grid-cols-[1fr_320px] gap-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#129199]">Who we are</h2>
            <p className="mt-4 text-foreground/85 leading-relaxed">
              ATME College of Engineering (ATMECE) is established by the Academy for Technical and Management Excellence (ATME) Trust to provide quality technical education in Mysuru. The institution is affiliated to Visvesvaraya Technological University (VTU), approved by AICTE and recognised by the Government of Karnataka, and is NAAC accredited with an A+ grade.
            </p>
            <p className="mt-4 text-foreground/85 leading-relaxed">
              Spread over 20 acres of green expanse, ATME has created an ecosystem of teaching that puts students first. The faculty and management are known for their academic achievements, teaching abilities and devotion to duty. Students receive complete support to hone their skills in their area of interest.
            </p>
          </div>
          <aside className="rounded-2xl border border-border bg-secondary p-6">
            <h3 className="font-display text-lg font-bold">Quick facts</h3>
            <dl className="mt-4 space-y-3 text-sm">
              {[
                ["Established", "Academy for Technical & Management Excellence Trust"],
                ["Affiliation", "Visvesvaraya Technological University (VTU)"],
                ["Approval", "AICTE, New Delhi"],
                ["Accreditation", "NAAC A+, NBA"],
                ["Location", "13th KM Stone, Bannur Road, Mysuru"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[110px_1fr] gap-3">
                  <dt className="font-semibold text-foreground/70">{k}</dt>
                  <dd className="text-foreground/85">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

    </Layout>
  );
}
