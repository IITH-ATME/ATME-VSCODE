import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Smartphone, Facebook, Youtube, Linkedin, Instagram, Twitter } from "lucide-react";
import { resolveAssetUrl } from "@/lib/assetUrl";
import { ABOUT, DEPARTMENTS_NAV, type NavLink } from "@/lib/navStructure";

type FL = { label: string; href?: string; to?: string; params?: Record<string, string> };

// Pull the exact same link targets the header dropdowns use, so the footer
// can never drift out of sync with "updated" routes again. Falls back to a
// dead "#" (never expected to hit) only if a label is renamed upstream.
const ABOUT_ALL_LINKS: NavLink[] = [
  ...ABOUT.columns[0].links,
  ...ABOUT.columns[1].links,
  ...(ABOUT.columns[1].groups?.[0].links ?? []),
];
const byLabel = (links: NavLink[], label: string): FL => {
  const found = links.find((l) => l.label === label);
  return found ? { label: found.label, to: found.to, params: found.params, href: found.href } : { label, href: "#" };
};
const asFL = (l: NavLink): FL => ({ label: l.label, to: l.to, params: l.params, href: l.href });

const studentLifeLinks = DEPARTMENTS_NAV.columns
  .find((c) => c.heading === "Academic Programmes")!
  .groups!.find((g) => g.heading === "Student Life")!.links;
const findStudentLife = (label: string) => asFL(studentLifeLinks.find((l) => l.label === label)!);

// Kept as its own group, unchanged, per explicit instruction.
const OTHER_LINKS: FL[] = ["Library", "NSS Unit", "Sports"].map(findStudentLife);

// Same 25 links that used to live under "About us" / "Quick Links", now
// regrouped into the four headings from the Sahyadri-style reference layout.
const OUR_COLLEGE_LINKS: FL[] = [
  byLabel(ABOUT_ALL_LINKS, "About College"),
  byLabel(ABOUT_ALL_LINKS, "Vision & Mission"),
  byLabel(ABOUT_ALL_LINKS, "Governing Council (GC)"),
  byLabel(ABOUT_ALL_LINKS, "Chairman's Message"),
  byLabel(ABOUT_ALL_LINKS, "About Principal"),
  byLabel(ABOUT_ALL_LINKS, "Principal Message"),
  byLabel(ABOUT_ALL_LINKS, "Dean Research"),
  byLabel(ABOUT_ALL_LINKS, "Dean Student Affairs"),
  byLabel(ABOUT_ALL_LINKS, "Dean Academics"),
  byLabel(ABOUT_ALL_LINKS, "Academic Council (AC)"),
  byLabel(ABOUT_ALL_LINKS, "Statutory Declaration and Undertaking"),
];

const FACILITIES_LINKS: FL[] = [
  { label: "Women Cell", to: "/women-cell" },
  { label: "Professional Body Membership", to: "/professional-body-membership" },
  { label: "IIRS-ISRO NC", to: "/iirs-isro-nc" },
  { label: "ATME on G-Maps", href: "https://www.google.com/maps/place/ATME+College+of+Engineering" },
];

const ACADEMICS_LINKS: FL[] = [
  { label: "VTU Exam Timetable",       href: "https://vtu.ac.in/en/category/examination/time-table/" },
  { label: "VTU UG Scheme & Syllabus", href: "https://vtu.ac.in/en/b-e-scheme-syllabus/" },
  { label: "VTU E-Learning",           href: "https://vtu.ac.in/en/elearning/" },
  { label: "Careers",                  to: "/careers" },
  { label: "Youth4work",               to: "/youth4work" },
];

const DOWNLOADS_LINKS: FL[] = [
  { label: "Mandatory Disclosure", href: "/__l5e/assets-v1/a198c38a-e39e-4c3a-ab4c-a23591dd37e5/Mandatory-Disclosure-2025-26.pdf" },
  { label: "Employee Handbook",    href: "/__l5e/assets-v1/c402b7eb-a5d4-4a17-b983-1dfd193b363f/Employee-hand-book-3-0.pdf" },
  { label: "Student Handbook",     href: "/__l5e/assets-v1/ffb2c1a9-c930-4f07-8d05-7b98a9318ac3/Handbook-3-3.pdf" },
  { label: "Hostel Policy",        href: "/__l5e/assets-v1/849a2f12-1905-4bb5-8463-94e44ffaaa98/HOSTEL-Rules-Regulation-v3.pdf" },
  { label: "Privacy Policy",       to: "/privacy-policy" },
];

function Col({ title, children, className, topFill }: { title: string; children: React.ReactNode; className?: string; dark?: boolean; topFill?: React.ReactNode }) {
  return (
    <div className={className}>
      {topFill}
      <div className="px-3 py-6 h-full flex flex-col">
        <h4 className="font-display text-[13px] font-bold text-white pb-3 mb-4 border-b-2 border-white/25 relative tracking-wide whitespace-nowrap">
          <span className="absolute -bottom-[2px] left-0 w-14 h-[2px] bg-amber-300" />
          {title}
        </h4>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}


function LinkList({ items, nowrap, twoCol }: { items: FL[]; nowrap?: boolean; twoCol?: boolean }) {
  const linkCls = "hover:text-amber-300 hover:translate-x-0.5 inline-block transition-all " + (nowrap ? "whitespace-nowrap" : "break-words");
  return (
    <ul className={"text-[13px] font-medium leading-snug " + (twoCol ? "columns-2 gap-x-5" : "space-y-2")}>
      {items.map((l) => (
        <li key={l.label} className={twoCol ? "mb-2 break-inside-avoid" : undefined}>
          {l.href ? (
            <a href={resolveAssetUrl(l.href)} target="_blank" rel="noreferrer" className={linkCls}>› {l.label}</a>
          ) : (
            <Link to={l.to as string} params={l.params as never} className={linkCls}>› {l.label}</Link>
          )}
        </li>
      ))}
    </ul>
  );
}


export function Footer() {
  return (
      <footer className="relative text-white/90 bg-[#129199] overflow-hidden">
      {/* decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      {/* Full-height dark stripe that extends the Our College column to the left edge of the viewport on wide screens. */}
      <div aria-hidden className="hidden lg:block pointer-events-none absolute top-0 bottom-0 left-0 bg-[#0d4f54]"
        style={{ width: "max(0px, (100vw - 1400px) / 2)" }}
      />

      {/* top accent ribbon */}
      <div className="h-1 w-full bg-white/40" />

      {/* Footer link columns — segregated headings */}
      <div className="relative max-w-[1400px] mx-auto px-4 grid gap-3 py-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 items-stretch">
        <Col title="Our College" className="h-full lg:col-span-2 lg:bg-[#0d4f54] relative" topFill={<div className="hidden lg:block absolute -top-6 -left-4 right-0 h-6 bg-[#0d4f54]" aria-hidden="true" />}>
          <div className="hidden lg:block absolute -left-4 top-0 bottom-0 w-4 bg-[#0d4f54]" aria-hidden="true" />
          <div className="hidden lg:block absolute -bottom-6 -left-4 right-0 h-6 bg-[#0d4f54]" aria-hidden="true" />
          <LinkList items={OUR_COLLEGE_LINKS} twoCol />
        </Col>
        <Col title="Facilities" className="h-full"><LinkList items={FACILITIES_LINKS} /></Col>
        <Col title="Academics" className="h-full"><LinkList items={ACADEMICS_LINKS} /></Col>
        <Col title="Downloads" className="h-full"><LinkList items={DOWNLOADS_LINKS} /></Col>
        <Col title="Basic Sciences & Others" className="h-full"><LinkList items={OTHER_LINKS} /></Col>
      </div>

      {/* Contact strip */}
      <div className="relative border-t border-white/15 bg-[#10747b] backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-4 py-5 grid gap-6 md:grid-cols-4 text-[14px] font-normal leading-relaxed">
          <div className="flex gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 ring-1 ring-white/15">
              <MapPin className="h-5 w-5 text-amber-300" />
            </span>
            <div>
              <div className="font-semibold text-white mb-1">Location:</div>
              <div className="text-white/80 leading-relaxed">ATME College of Engineering, 13th KM, Mysore – Kanakapura – Bangalore Road, Mysore – 570 028, Karnataka</div>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 ring-1 ring-white/15">
              <Phone className="h-5 w-5 text-amber-300" />
            </span>
            <div>
              <div className="font-semibold text-white mb-1">Phone:</div>
              <a href="tel:08212954081" className="block text-white/80 hover:text-white">0821-2954081</a>
              <a href="tel:08212954011" className="block text-white/80 hover:text-white">0821-2954011</a>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 ring-1 ring-white/15">
              <Smartphone className="h-5 w-5 text-amber-300" />
            </span>
            <div>
              <div className="font-semibold text-white mb-1">Mobile:</div>
              <a href="tel:+919448285641" className="block text-white/80 hover:text-white">+91 94482 85641</a>
              <a href="tel:+919448285644" className="block text-white/80 hover:text-white">+91 94482 85644</a>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 ring-1 ring-white/15">
              <Mail className="h-5 w-5 text-amber-300" />
            </span>
            <div>
              <div className="font-semibold text-white mb-1">Email:</div>
              <a href="mailto:info@atme.edu.in" className="text-white/80 hover:text-white">info@atme.edu.in</a>
              <div className="mt-3 flex gap-2">
                {[
                  { Icon: Facebook,  href: "https://www.facebook.com/atmeceofficial/", label: "Facebook" },
                  { Icon: Twitter,   href: "https://twitter.com/atmece1?t=zoaaeYpkOtJxZVPWD2WYaw&s=09", label: "Twitter" },
                  { Icon: Linkedin,  href: "https://www.linkedin.com/school/atme-college-of-engineering", label: "LinkedIn" },
                  { Icon: Youtube,   href: "https://youtube.com/c/ATMECEOfficial", label: "YouTube" },
                  { Icon: Instagram, href: "https://www.instagram.com/atmeceofficial/", label: "Instagram" },
                ].map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-8 w-8 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-[#129199] hover:text-white hover:ring-[#129199] transition-colors">
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-[#0e686f]">
        <div className="max-w-[1400px] mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[14px] font-semibold text-white/90">
          <p>© {new Date().getFullYear()} ATME College of Engineering. Proudly owned by ATME.</p>
          <p>AICTE Approved · VTU Affiliated · NAAC A+ · NBA · NABL · QS I-Gauge Gold</p>
        </div>
      </div>
    </footer>
  );
}
