import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Smartphone, Facebook, Youtube, Linkedin, Instagram, Twitter } from "lucide-react";
import { departmentsIndex as departments } from "@/data/departmentsIndex";
import { resolveAssetUrl } from "@/lib/assetUrl";

type FL = { label: string; href?: string; to?: string; params?: Record<string, string> };

const ABOUT_LINKS: FL[] = [
  { label: "About College",                to: "/about" },
  { label: "Vision & Mission",             to: "/about/$page", params: { page: "vision-mission" } },
  { label: "Governing Council (GC)",       to: "/about/$page", params: { page: "governing-council" } },
  { label: "Chairman's Message",           to: "/about/$page", params: { page: "chairmans-message" } },
  { label: "About Principal",              to: "/about/$page", params: { page: "about-principal" } },
  { label: "Principal Message",            to: "/about/$page", params: { page: "principal-message" } },
  { label: "Dean Research",                to: "/p/$", params: { _splat: "atme-research/dean-research-message" } },
  { label: "Dean Student Affairs",         to: "/about/$page", params: { page: "dean-student-affairs" } },
  { label: "Dean Academics",               to: "/p/$", params: { _splat: "dean-academics" } },
  { label: "Academic Council (AC)",        to: "/about/$page", params: { page: "academic-council" } },
  { label: "Statutory Declaration",        to: "/about/$page", params: { page: "statutory-declaration" } },
];

const QUICK_LINKS: FL[] = [
  { label: "ATME on G-Maps",          href: "https://www.google.com/maps/place/ATME+College+of+Engineering" },
  { label: "IIRS-ISRO NC",            to: "/iirs-isro-nc" },
  { label: "Professional Body Membership", to: "/professional-body-membership" },
  { label: "Women Cell",              to: "/women-cell" },
  { label: "Careers",                 to: "/careers" },
  { label: "Youth4work",              to: "/youth4work" },
  { label: "VTU Exam Timetable",      href: "https://vtu.ac.in/en/category/examination/time-table/" },
  { label: "VTU UG Scheme & Syllabus",href: "https://vtu.ac.in/en/b-e-scheme-syllabus/" },
  { label: "VTU E-Learning",          href: "https://vtu.ac.in/en/elearning/" },
  { label: "Mandatory Disclosure",    href: "/__l5e/assets-v1/a198c38a-e39e-4c3a-ab4c-a23591dd37e5/Mandatory-Disclosure-2025-26.pdf" },
  { label: "Employee Handbook",       href: "/__l5e/assets-v1/c402b7eb-a5d4-4a17-b983-1dfd193b363f/Employee-hand-book-3-0.pdf" },
  { label: "Student Handbook",        href: "/__l5e/assets-v1/ffb2c1a9-c930-4f07-8d05-7b98a9318ac3/Handbook-3-3.pdf" },
  { label: "Hostel Policy",           href: "/__l5e/assets-v1/849a2f12-1905-4bb5-8463-94e44ffaaa98/HOSTEL-Rules-Regulation-v3.pdf" },
  { label: "Privacy Policy",          to: "/privacy-policy" },
];

// Map internal dept slugs by name where available
const internalSlugByName: Record<string, string> = {
  "Computer Science & Engineering": "cse",
  "Electronics & Communication Engineering": "ece",
  "Electrical & Electronics Engineering": "eee",
  "Mechanical Engineering": "me",
  "Civil Engineering": "ce",
  "CSE — Data Science": "ds",
  "Bachelor of Computer Applications": "bca",
};
const hasInternal = (n: string) => Boolean(departments.find(d => d.slug === internalSlugByName[n]));
const deptLink = (name: string, fallback: string): FL =>
  hasInternal(name)
    ? { label: name, to: "/departments/$slug", params: { slug: internalSlugByName[name] } }
    : { label: name, href: fallback };

const UG_DEPTS: FL[] = [
  deptLink("Civil Engineering",                                  "https://atme.edu.in/departments/civil-engineering/"),
  deptLink("Computer Science & Engineering",                     "https://atme.edu.in/departments/computer-science-and-engineering/"),
  deptLink("CSE — Data Science",                                 "https://atme.edu.in/departments/computer-science-engineering-data-science/"),
  { label: "CSE — AI & Machine Learning",  href: "https://atme.edu.in/departments/computer-science-engineering-artificial-intelligence-machine-learning/" },
  { label: "Computer Science & Design",    href: "https://atme.edu.in/departments/computer-science-design/" },
  { label: "CSE — Cyber Security",         href: "https://atme.edu.in/departments/computer-science-engineering-cyber-security/" },
  deptLink("Electronics & Communication Engineering",            "https://atme.edu.in/departments/electronics-and-communication-engineering/"),
  deptLink("Electrical & Electronics Engineering",               "https://atme.edu.in/departments/electrical-electronics-engineering/"),
  deptLink("Mechanical Engineering",                             "https://atme.edu.in/departments/department-of-mechanical-engineering/"),
  deptLink("Bachelor of Computer Applications",                  "https://atme.edu.in/departments/bachelor-of-computer-applications-bca/"),
];

const PG_DEPTS: FL[] = [
  { label: "Master of Computer Applications (MCA)", to: "/departments/$slug", params: { slug: "mca" } },
  { label: "Master of Business Administration (MBA)",href: "https://atme.edu.in/departments/master-of-business-administration-mba/" },
  { label: "VTU Honor Degree",  to: "/vtu-honor-degree" },
  { label: "VTU Minor Degree",  to: "/vtu-minor-degree" },
];

const OTHER_DEPTS: FL[] = [
  { label: "Chemistry",   href: "https://atme.edu.in/programs/chemistry-about-the-department/" },
  { label: "Mathematics", href: "https://atme.edu.in/programs/maths-about-the-department/" },
  { label: "Physics",     href: "https://atme.edu.in/programs/physics-about-the-department/" },
  { label: "Humanities",  href: "https://atme.edu.in/programs/humanities-staff-details/" },
  { label: "Library",     to: "/resources/elibrary" },
  { label: "NSS",         href: "https://atme.edu.in/programs/nss/" },
  { label: "Sports",      href: "https://atme.edu.in/programs/sports-about/" },
];

function Col({ title, children, className, topFill }: { title: string; children: React.ReactNode; className?: string; dark?: boolean; topFill?: React.ReactNode }) {
  return (
    <div className={className}>
      {topFill}
      <div className="px-3 py-6 h-full flex flex-col">
        <h4 className="font-display text-[13px] font-bold text-white pb-3 mb-4 border-b-2 border-white/25 relative tracking-wide">
          <span className="absolute -bottom-[2px] left-0 w-14 h-[2px] bg-amber-300" />
          {title}
        </h4>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}


function LinkList({ items }: { items: FL[] }) {
  return (
    <ul className="space-y-2 text-[13px] font-medium leading-snug">
      {items.map((l) => (
        <li key={l.label}>
          {l.href ? (
            <a href={resolveAssetUrl(l.href)} target="_blank" rel="noreferrer" className="hover:text-amber-300 hover:translate-x-0.5 inline-block transition-all break-words">› {l.label}</a>
          ) : (
            <Link to={l.to as string} params={l.params as never} className="hover:text-amber-300 hover:translate-x-0.5 inline-block transition-all break-words">› {l.label}</Link>
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

      {/* Full-height dark stripe that extends the About us column to the left edge of the viewport on wide screens. */}
      <div aria-hidden className="hidden lg:block pointer-events-none absolute top-0 bottom-0 left-0 bg-[#0d4f54]"
        style={{ width: "max(0px, (100vw - 1400px) / 2)" }}
      />

      {/* top accent ribbon */}
      <div className="h-1 w-full bg-white/40" />

      {/* Footer columns */}
      <div className="relative max-w-[1400px] mx-auto px-4 grid gap-3 py-6 md:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,2.8fr)_minmax(0,2.2fr)_minmax(0,0.8fr)] xl:grid-cols-[minmax(0,200px)_minmax(0,240px)_minmax(0,312px)_minmax(0,305px)_minmax(0,140px)] items-stretch">

        <Col title="About us" className="h-full lg:bg-[#0d4f54] relative" topFill={<div className="hidden lg:block absolute -top-6 -left-4 right-0 h-6 bg-[#0d4f54]" aria-hidden="true" />}>
          <div className="hidden lg:block absolute -left-4 top-0 bottom-0 w-4 bg-[#0d4f54]" aria-hidden="true" />
          <div className="hidden lg:block absolute -bottom-6 -left-4 right-0 h-6 bg-[#0d4f54]" aria-hidden="true" />
          <LinkList items={ABOUT_LINKS} />
        </Col>
        <Col title="Quick Links" className="h-full"><LinkList items={QUICK_LINKS} /></Col>
        <Col title="Departments — UG" className="h-full"><LinkList items={UG_DEPTS} /></Col>
        <Col title="Departments — PG" className="h-full"><LinkList items={PG_DEPTS} /></Col>
        <Col title="Basic Sciences & Others" className="h-full"><LinkList items={OTHER_DEPTS} /></Col>
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
