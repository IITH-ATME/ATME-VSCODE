import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { TrendingUp, Briefcase, Users2, Award, Trophy, Building2 } from "lucide-react";
import { RecruiterLogoGrid } from "@/components/site/RecruiterLogoGrid";
import { recruiterCount } from "@/data/recruiters";
import { SECTION_BANNER } from "@/lib/sectionBanners";
import { resolveAssetUrl } from "@/lib/assetUrl";

export const Route = createFileRoute("/placements")({
  head: () => ({
    meta: [
      { title: "Placements — ATME College of Engineering" },
      { name: "description", content: "ATME's Career Guidance and Placement department helps students secure roles with leading recruiters across India." },
      { property: "og:title", content: "Placements at ATME" },
      { property: "og:description", content: "Career guidance, training and a strong recruiter network." },
    ],
  }),
  component: PlacementsPage,
});

const placed = [
  { n: "Vishwas",                d: "CSE - Design", c: "TE Connectivity",        p: "9.1 LPA",  img: "/images/uploads/2026/04/Screenshot-2026-04-23-at-4.47.19-PM-228x300.png" },
  { n: "Suhas S",                d: "CSE - DS",     c: "Light & Wonder",         p: "8.5 LPA",  img: "/images/uploads/2026/04/Screenshot-2026-04-23-at-4.47.37-PM-256x300.png" },
  { n: "Mohammed Shoaib",        d: "CSE - AIML",   c: "EPAM Systems",           p: "8.48 LPA", img: "/images/uploads/2026/04/Screenshot-2026-04-23-at-4.48.33-PM-270x300.png" },
  { n: "Varsha S",               d: "EEE",          c: "Skit.ai",                p: "8 LPA",    img: "/images/uploads/2026/04/Screenshot-2026-04-23-at-4.47.50-PM-300x243.png" },
  { n: "Rahul Prakash H P",      d: "CSE - Design", c: "TCS",                    p: "7.09 LPA", img: "/images/uploads/2026/04/Screenshot-2026-04-23-at-4.49.05-PM-272x300.png" },
  { n: "Nikhil Kumar Purohit",   d: "CSE",          c: "TCS",                    p: "7.09 LPA", img: "/images/uploads/2026/04/Screenshot-2026-04-23-at-4.48.46-PM-298x300.png" },
  { n: "Charitha Deepak",        d: "CSE - DS",     c: "Capillary Technologies", p: "6 LPA",    img: "/images/uploads/2026/04/Screenshot-2026-04-23-at-4.48.21-PM-300x270.png" },
  { n: "Shivashankara Murthy M", d: "CSE",          c: "TCS",                    p: "7.09 LPA", img: "/images/uploads/2026/04/Screenshot-2026-04-23-at-4.48.57-PM-264x300.png" },
];

const stats = [
  { icon: TrendingUp, v: "92%", l: "Placement rate" },
  { icon: Briefcase, v: "60+", l: "Recruiting companies" },
  { icon: Users2, v: "850+", l: "Offers in last cycle" },
  { icon: Award, v: "12 LPA", l: "Highest package" },
];

function PlacementsPage() {
  return (
    <Layout>
      <PageHero eyebrow="Career Guidance & Placements" title="Where ambition meets opportunity" subtitle="Our CGP team partners with students from year one — training, coaching and connecting them with the right recruiters." bgImage={SECTION_BANNER.placements} />

      <section className="container-page py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map(({ icon: Icon, v, l }) => (
          <div key={l} className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
            <div className="mt-4 font-display text-3xl font-bold">{v}</div>
            <div className="text-sm text-muted-foreground">{l}</div>
          </div>
        ))}
      </section>

      <section className="container-page pb-20 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold">What we offer</h2>
          <ul className="mt-5 space-y-3 text-foreground/85">
            {["Aptitude and reasoning training from year two","Technical workshops and certification support","Mock interviews and resume building clinics","Industry guest lectures and bootcamps","Soft-skills, communication and group discussion sessions","One-on-one career counselling"].map(x => (
              <li key={x} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> {x}</li>
            ))}
          </ul>
        </div>
        <figure className="rounded-2xl gradient-hero text-primary-foreground p-8">
          <blockquote className="text-lg leading-relaxed">
            "The training sessions on aptitude, technical skills, mock interviews and interview preparation greatly enhanced my confidence. I am grateful to the CGP department for helping me secure my role at Light & Wonder."
          </blockquote>
          <figcaption className="mt-5 text-sm">
            <div className="font-semibold">Suhas S</div>
            <div className="text-primary-foreground/80">CSE — Data Science</div>
          </figcaption>
        </figure>
      </section>

      {/* Recently Placed Students */}
      <section className="bg-secondary border-y border-border">
        <div className="container-page py-20">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 text-primary">
                <Trophy className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-[0.25em]">Placement Excellence</span>
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold">Recently Placed Students</h2>
              <p className="mt-3 text-muted-foreground">A glimpse of our students who have started bright careers at leading organizations.</p>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {placed.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-56 overflow-hidden bg-secondary">
                    <img src={resolveAssetUrl(s.img)} alt={s.n} loading="lazy" className="absolute inset-0 h-full w-full object-contain object-top p-2 group-hover:scale-[1.03] transition-transform duration-500" />
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-primary/85 via-primary/40 to-transparent" />
                    <span className="absolute top-3 right-3 inline-flex items-center rounded-full bg-primary text-primary-foreground text-[11px] font-bold px-2.5 py-1 shadow-lg">{s.p}</span>
                    <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                      <h4 className="text-sm font-semibold leading-tight drop-shadow">{s.n}</h4>
                      <p className="mt-0.5 text-[10px] uppercase tracking-wider opacity-90">{s.d}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2 p-3 border-t border-border bg-card">
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Placed at</p>
                      <p className="truncate text-sm font-semibold text-foreground">{s.c}</p>
                    </div>
                    <Trophy className="h-4 w-4 text-primary shrink-0" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="recruiters" className="bg-secondary/40 border-y border-border scroll-mt-24">
        <div className="container-page py-20">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase">
                <Building2 className="h-4 w-4" /> Our Recruiters
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold">{recruiterCount}+ companies hiring from ATME</h2>
              <p className="mt-3 text-muted-foreground">Real brand logos of the organizations recruiting our students across IT, core engineering, R&amp;D, consulting, BFSI and product.</p>
            </div>
          </Reveal>
          <div className="mt-10">
            <RecruiterLogoGrid cols="grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8" />
          </div>
        </div>
      </section>
    </Layout>
  );
}

