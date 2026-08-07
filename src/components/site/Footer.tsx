import { Link } from "@tanstack/react-router";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
  Twitter,
  Share2,
  Landmark,
  Building2,
  GraduationCap,
  Download,
  MoreHorizontal,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
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

const OTHER_LINKS: FL[] = ["Library", "NSS Unit", "Sports"].map(findStudentLife);

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

const SOCIALS = [
  { Icon: Facebook,  href: "https://www.facebook.com/atmeceofficial/",                               label: "Facebook" },
  { Icon: Twitter,   href: "https://twitter.com/atmece1?t=zoaaeYpkOtJxZVPWD2WYaw&s=09",              label: "Twitter" },
  { Icon: Linkedin,  href: "https://www.linkedin.com/school/atme-college-of-engineering",            label: "LinkedIn" },
  { Icon: Youtube,   href: "https://youtube.com/c/ATMECEOfficial",                                   label: "YouTube" },
  { Icon: Instagram, href: "https://www.instagram.com/atmeceofficial/",                              label: "Instagram" },
];

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function LinkCard({ icon: Icon, title, items }: { icon: LucideIcon; title: string; items: FL[] }) {
  const linkCls = "hover:text-[#129199] transition-colors";
  return (
    <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white px-5 py-6 text-center shadow-[0_2px_16px_rgba(13,52,70,0.07)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(13,52,70,0.12)]">
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#0d4f54] text-white">
        <Icon className="h-6 w-6" />
      </span>
      <h4 className="mt-3 font-display text-[14px] font-extrabold uppercase tracking-wide text-[#0d3446]">{title}</h4>
      <span className="mt-1.5 mb-4 h-[3px] w-10 rounded-full bg-[#f5c518]" />
      <ul className="w-full space-y-2.5 text-left text-[13.5px] font-medium leading-snug text-[#26414b]">
        {items.map((l) => (
          <li key={l.label} className="flex items-start gap-1.5">
            <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#f5c518]" />
            {l.href ? (
              <a href={resolveAssetUrl(l.href)} target="_blank" rel="noreferrer" className={linkCls}>{l.label}</a>
            ) : (
              <Link to={l.to as string} params={l.params as never} className={linkCls}>{l.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  children,
  iconBg,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  iconBg?: string;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-2">
      <span className={"grid h-11 w-11 shrink-0 place-items-center rounded-full " + (iconBg ?? "bg-white/10 ring-1 ring-white/15")}>
        {icon}
      </span>
      <div className="text-left">
        <div className="text-[13px] font-bold text-white">{label}</div>
        <div className="text-[13px] text-white/80 leading-snug">{children}</div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #129199 0%, #0d3446 100%)" }}>
      {/* decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      {/* Quick Links panel — edge to edge, just a thin teal margin showing at the sides */}
      <div className="relative w-full px-3 sm:px-4 pt-10 pb-8">
        <div className="rounded-3xl bg-white px-5 sm:px-8 lg:px-10 py-8 sm:py-10 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide text-[#0d3446]">
              QUICK LINKS
            </h3>
            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="h-1 w-20 sm:w-24 rounded-full bg-[#f5c518]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#129199]" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            <LinkCard icon={Landmark} title="Our College" items={OUR_COLLEGE_LINKS} />
            <LinkCard icon={Building2} title="Facilities" items={FACILITIES_LINKS} />
            <LinkCard icon={GraduationCap} title="Academics" items={ACADEMICS_LINKS} />
            <LinkCard icon={Download} title="Downloads" items={DOWNLOADS_LINKS} />
            <LinkCard icon={MoreHorizontal} title="Others" items={OTHER_LINKS} />
          </div>
        </div>
      </div>

      {/* Contact strip */}
      <div className="relative border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/15">
          <ContactItem icon={<MapPin className="h-5 w-5 text-amber-300" />} label="Location:">
            ATME College of Engineering, 13th KM, Mysore – Kanakapura – Bangalore Road, Mysore – 570 028, Karnataka
          </ContactItem>
          <ContactItem icon={<Phone className="h-5 w-5 text-amber-300" />} label="Phone:">
            <a href="tel:08212954081" className="block hover:text-white">0821-2954081</a>
            <a href="tel:08212954011" className="block hover:text-white">0821-2954011</a>
          </ContactItem>
          <ContactItem
            icon={<WhatsappIcon className="h-5 w-5 text-white" />}
            iconBg="bg-[#25D366]"
            label="Mobile:"
          >
            <a href="tel:+919448285641" className="block hover:text-white">+91 94482 85641</a>
            <a href="tel:+919448285644" className="block hover:text-white">+91 94482 85644</a>
          </ContactItem>
          <ContactItem icon={<Mail className="h-5 w-5 text-amber-300" />} label="Email:">
            <a href="mailto:info@atme.edu.in" className="hover:text-white">info@atme.edu.in</a>
          </ContactItem>
        </div>

        <div className="flex items-center justify-center gap-2.5 pb-6">
          <button
            type="button"
            onClick={() => {
              if (typeof navigator !== "undefined" && navigator.share) {
                navigator.share({ title: document.title, url: window.location.href }).catch(() => {});
              } else if (typeof navigator !== "undefined" && navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href).catch(() => {});
              }
            }}
            aria-label="Share this page"
            className="grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 text-white hover:bg-white hover:text-[#129199] hover:ring-white transition-colors"
          >
            <Share2 className="h-4 w-4" />
          </button>
          {SOCIALS.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 text-white hover:bg-white hover:text-[#129199] hover:ring-white transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
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
