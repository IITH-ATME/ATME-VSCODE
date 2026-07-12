import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal, Counter } from "@/components/site/Reveal";
import { rewriteImageSrc } from "@/data/imageRewrite";

export const Route = createFileRoute("/campus-life/")({
  component: CampusLife,
});

const stats = [
  { v: 20, s: "+", l: "Active Student Clubs" },
  { v: 50, s: "+", l: "Cultural Events" },
  { v: 12, s: "+", l: "Sports Activities" },
  { v: 100, s: "%", l: "Placements" },
];

type Card = { title: string; img: string; href: string; fit?: "cover" | "contain"; bg?: string };

const cards: Card[] = [
  { title: "Library", img: "/images/uploads/2026/04/Library.jpg", href: "/library" },
  { title: "ATMEYA", img: "/images/uploads/2026/02/rsz_1untitled_design.jpg", href: "/campus-life/atmeya", fit: "contain", bg: "#0b2447" },
  { title: "Hostel", img: "/images/uploads/2026/04/Hostel.jpg", href: "/p/hostel-facility" },
  { title: "Transportation", img: "/images/uploads/2026/04/Transportation.jpg", href: "/p/transportation" },
  { title: "Security", img: "/images/uploads/2026/04/Security.jpg", href: "/p/security" },
  { title: "Wi-Fi", img: "/__l5e/assets-v1/7f976a82-bb4f-4118-ada4-e5756e0f77ff/Wifi-01.jpg", href: "/campus-life/wi-fi" },
  { title: "ATM", img: "/images/uploads/2026/04/ATM.jpg", href: "/campus-life/atm" },
  { title: "Convenience Shop", img: "/images/uploads/2026/04/Convenience-Shop.jpg", href: "/p/convenience-shops" },
  { title: "Cafeteria", img: "/images/uploads/2026/04/Cafeteria.jpg", href: "/p/cafeteria-2" },
  { title: "Student Council", img: "/images/uploads/2026/04/Student-Council.jpg", href: "/p/atme-student-council" },
  { title: "Sports", img: "/images/uploads/2026/04/Sports.jpg", href: "/sports" },
  { title: "Language Lab", img: "/images/uploads/2026/04/Language-Lab.jpg", href: "/p/language-lab" },
  { title: "Events", img: "/images/uploads/2026/04/Events.jpg", href: "/upcoming-events" },
  { title: "Seminar Hall & Auditorium", img: "/images/uploads/2026/04/Sminar-Hall-Auditorium.jpg", href: "/p/seminar-auditorium-2" },
  { title: "Clubs & Associations", img: "/images/uploads/2026/04/Clubs-Associations.jpg", href: "/p/clubs-associations" },
  { title: "Scholarship", img: "/images/uploads/2026/04/Scholarship.jpg", href: "/admissions" },
  { title: "Green Campus", img: "/images/uploads/2026/04/Green-Campus.jpg", href: "/p/green-campus" },
  { title: "Entrance Plan", img: "/images/uploads/2026/04/Entrance-Plan.jpg", href: "/p/entrance-plan" },
  { title: "Magazine", img: "/images/uploads/2026/04/Magazine.jpg", href: "/p/magazine" },
  { title: "Mentoring", img: "/images/uploads/2026/04/Mentoring.jpg", href: "/campus-life/mentoring" },
  { title: "Drinking Water & RO", img: "/images/uploads/2026/04/Drinking-Water-RO.jpg", href: "/p/drinking-water-ro" },
  { title: "Health Center", img: "/images/uploads/2026/04/Health-Center.jpg", href: "/p/health-center" },
  { title: "Solar Rooftop System", img: "/images/uploads/2026/04/Solar-Rooftop-System.jpg", href: "/p/solar-rooftop-system" },
  { title: "Industry Labs", img: "/images/uploads/2026/04/Industry-Labs.jpg", href: "/p/industry-labs" },
  { title: "Alumni", img: "/images/uploads/2026/04/Alumni-1.jpg", href: "/p/alumni" },
];

function CardItem({ c, i }: { c: Card; i: number }) {
  const fit = c.fit ?? "cover";
  return (
    <Reveal delay={(i % 6) * 50}>
      <Link to={c.href}>
        <div className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-soft hover:-translate-y-1 transition-all">
          <div className="aspect-[4/3] overflow-hidden" style={c.bg ? { backgroundColor: c.bg } : undefined}>
            <img
              src={rewriteImageSrc(c.img) || c.img}
              alt={c.title}
              loading="lazy"
              className={`h-full w-full ${fit === "contain" ? "object-contain" : "object-cover group-hover:scale-110"} transition-transform duration-700`}
            />
          </div>
          <div className="px-4 py-3 text-center">
            <h4 className="font-display text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors">{c.title}</h4>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

function CampusLife() {
  return (
    <Layout>
      <section className="relative gradient-hero text-primary-foreground">
        <div className="container-page py-16 sm:py-24">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/80">ATME · Mysuru</div>
            <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold">Campus Life</h1>
            <p className="mt-4 max-w-2xl text-primary-foreground/90">
              A vibrant, inclusive campus that nurtures talent beyond the classroom — clubs, fests, sports, scholarships and world-class infrastructure.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page -mt-10 sm:-mt-14 relative z-10">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 rounded-2xl bg-card shadow-soft border border-border p-5 sm:p-8">
            {stats.map((s, i) => (
              <div key={s.l} className={`text-center ${i < 3 ? "md:border-r md:border-border md:pr-4" : ""}`}>
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="mt-1 text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="container-page py-16 sm:py-24">
        <Reveal>
          <div className="text-center mb-10">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Explore</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Life at ATME</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">From learning spaces to lifestyle amenities — everything you need to thrive.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          {cards.map((c, i) => (
            <CardItem key={c.title} c={c} i={i} />
          ))}
        </div>
      </section>
    </Layout>
  );
}