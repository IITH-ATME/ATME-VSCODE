import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Layout } from "@/components/site/Layout";
import { getDept } from "@/data/departments";

import { facultyExtras } from "@/data/facultyExtras";
import { extractContactFromMarkdown } from "@/data/extractContactFromMarkdown";
import {
  cseAllFaculty, eceAllFaculty, eeeAllFaculty, meAllFaculty, ceAllFaculty, dsAllFaculty,
  cseStaff, eceStaff, eeeStaff, meStaff, ceStaff, dsStaff,
  aimlAllFaculty, csdAllFaculty, cyAllFaculty, mcaAllFaculty, mbaAllFaculty,
  aimlStaff, csdStaff, cyStaff, mcaStaff, mbaStaff,
} from "@/data/allFaculty";
import { mergeFaculty, parseQualificationList } from "@/data/facultyDerived";
import { formatFacultyName } from "@/lib/facultyName";

import { ArrowLeft, Mail, GraduationCap, BookOpen, Award, Globe, Linkedin, ExternalLink } from "lucide-react";
import { categorize } from "@/components/site/FacultyDirectory";
import { facultyPages } from "@/data/facultyPages";
import { facultyPageFallbacks } from "@/data/facultyPageFallbacks";
import { facultyPageOverrides } from "@/data/facultyPageOverrides";
import { sanitizeMarkdown } from "@/data/sanitizeMarkdown";
import { rewritePdfUrls } from "@/data/pdfRewrite";
import { parseFacultyProfile } from "@/data/parseFacultyProfile";
import { expandDesignation } from "@/lib/deptNames";
import { resolveAssetUrl } from "@/lib/assetUrl";

const scrapedMdComponents = {
  img: ({ src, alt, ...rest }: any) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img src={resolveAssetUrl(src as string)} alt={alt || ""} loading="lazy" {...rest} />
  ),
};


const ALL_BY_DEPT: Record<string, any[]> = {
  cse: [...cseAllFaculty, ...cseStaff],
  ece: [...eceAllFaculty, ...eceStaff],
  eee: [...eeeAllFaculty, ...eeeStaff],
  me: [...meAllFaculty, ...meStaff],
  ce: [...ceAllFaculty, ...ceStaff],
  ds: [...dsAllFaculty, ...dsStaff],
  aiml: [...aimlAllFaculty, ...aimlStaff],
  csd: [...csdAllFaculty, ...csdStaff],
  cy: [...cyAllFaculty, ...cyStaff],
  mca: [...mcaAllFaculty, ...mcaStaff],
  mba: [...mbaAllFaculty, ...mbaStaff],
};

// Some faculty ids in departments.ts differ slightly from the slugs the
// old.atme profile pages used, so the scraped/override key lookup misses.
// Map our internal id → the key actually used in facultyPages/overrides.
const facultyIdAliases: Record<string, string> = {
  "dr-puttegowda-d": "dr-putte-gowda-d",
  "dr-nasreenfathima": "nasreen-fathima",
  "dr-anil-kumar-c-j": "mr-anil-kumar-c-j",
  "mrs-lakshmi-shree-c-v": "lakshmi-shree-c-v",
  "sushma-v": "mrs-sushma-v",
  "keerthana-m-m": "mrs-keerthana-m-m",
  "raghuram-a-s": "mr-raghuram-a-s",
  "kavyashree-e-d": "mrs-kavyashree-e-d",
  "roopa-b": "mrs-roopa-b",
  "sandesh-r": "mr-sandesh-r",
  "shrilakshmi-prasad": "mrs-shrilakshmi-prasad",
  "ms-b-s-vanishree": "vanishree",
  "mrs-bindushree-v": "bindushree-v",
  "ms-yashaswini": "yashaswini-urs",
  "mrs-gadi-divyasree": "gadi-divyasree",
  "mrs-darshini-m-s": "darshini-m-s",
  "ms-bhavya-dechamma-k-s": "bhavya-dechamma-k-s",
  "mrs-arpitha-a": "arpitha-a",
  // DS (CSE — Data Science) faculty
  "dr-anitha-d-b": "dr-anitha-d-b-new",
  "dr-vinod-kumar-p": "dr-vinod-kumar-p-2",
  "ms-ambika-v": "mrs-ambika-v",
  "mr-j-n-karthik": "j-n-karthik",
  "dr-neethi-m-v": "mrs-neethi-m-v",
};

function getFacultyPage(facultyId: string) {
  const lookupIds = [facultyId, facultyIdAliases[facultyId]].filter(Boolean) as string[];
  for (const id of lookupIds) {
    const override = facultyPageOverrides[id];
    if (override?.md?.trim()) return override;
    const generated = facultyPages[id];
    if (generated?.md?.trim()) return generated;
    const fallback = facultyPageFallbacks[id];
    if (fallback?.md?.trim()) return fallback;
  }
  return undefined;
}


export const Route = createFileRoute("/departments/$slug/faculty/$facultyId")({
  loader: ({ params }) => {
    const dept = getDept(params.slug);
    if (!dept) throw notFound();
    const pool = [...dept.faculty, ...(ALL_BY_DEPT[dept.slug] ?? [])];
    const raw = pool.find((f) => f.id === params.facultyId);
    if (!raw) throw notFound();
    const merged = mergeFaculty(raw);
    const faculty = { ...merged, name: formatFacultyName(merged.name) };
    return { dept, faculty };

  },

  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.faculty.name} — ${loaderData.dept.name} · ATME` },
      { name: "description", content: `${loaderData.faculty.name}, ${loaderData.faculty.designation} in the Department of ${loaderData.dept.name} at ATME College of Engineering.` },
      { property: "og:image", content: loaderData.faculty.image },
    ] : [],
  }),
  component: FacultyDetail,
});

function FacultyDetail() {
  const { dept, faculty } = Route.useLoaderData();
  const isStaffCat = categorize(faculty.designation);
  const isStaff = isStaffCat === "technical" || isStaffCat === "supporting";
  const extras = facultyExtras[faculty.id];
  // Auto-extract Contact Details from the scraped markdown so every faculty
  // with an old-atme profile page gets a populated table, not just the ones
  // manually backfilled in facultyExtras.
  const scrapedPage = getFacultyPage(faculty.id);
  const autoContact = extractContactFromMarkdown(scrapedPage?.md);
  const explicitIds: Record<string, string> = (extras?.ids as Record<string, string>) ?? {};
  // Manual entries (facultyExtras) win; auto-extracted fills any gaps.
  const ids: Record<string, string> = { ...autoContact.ids, ...explicitIds };
  const mergedEmail = (extras?.email && extras.email.trim()) ? extras.email : autoContact.email;
  const hasIds = Object.keys(ids).length > 0;

  return (
    <Layout>
      <section className="gradient-soft border-b border-border">
        <div className="container-page py-6">
          <Link to="/departments/$slug/faculty" params={{ slug: dept.slug }} className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:text-primary-dark">
            <ArrowLeft className="h-4 w-4" /> Back to {dept.name} Faculty & Staff
          </Link>
        </div>
      </section>

      <section className="container-page py-8">
        {(() => {
          const cat = categorize(faculty.designation);
          const isStaff = cat === "technical" || cat === "supporting";
          const nameLabel = cat === "technical" ? "Name of Technical Staff" : cat === "supporting" ? "Name of Supporting Staff" : "Name";
          const email = (mergedEmail ?? "").replace(/^Official:\s*/i, "").trim();
          const address = (faculty as any).address ?? "";
          void email; void address;

          // Degree-only qualification (e.g. BE, M.Tech, PhD). Strip descriptions.
          const extractDegrees = (raw: string): string[] => {
            if (!raw) return [];
            // Ordered lowest-degree-first (e.g. B.E, M.Tech, PhD) regardless of
            // the order tokens appear in the source qualification string.
            const DEGREES: { re: RegExp; label: string }[] = [
              { re: /\bDiploma\b/i, label: "Diploma" },
              { re: /\bB[\.\-\s]*Tech\b/i, label: "B.Tech" },
              { re: /\bB\.?\s*E\b/, label: "B.E" },
              { re: /\bB\.?\s*Sc\b/i, label: "B.Sc" },
              { re: /\bBCA\b/i, label: "BCA" },
              { re: /\bBBA\b/i, label: "BBA" },
              { re: /\bB\.?\s*Com\b/i, label: "B.Com" },
              { re: /\bB\.?\s*A\b/, label: "B.A" },
              { re: /\bM[\.\-\s]*Tech\b/i, label: "M.Tech" },
              { re: /\bM\.?\s*E\b/, label: "M.E" },
              { re: /\bM\.?\s*Sc\b/i, label: "M.Sc" },
              { re: /\bMCA\b/i, label: "MCA" },
              { re: /\bMBA\b/i, label: "MBA" },
              { re: /\bM\.?\s*Com\b/i, label: "M.Com" },
              { re: /\bM\.?\s*Phil\b/i, label: "M.Phil" },
              { re: /\bM\.?\s*A\b/, label: "M.A" },
              { re: /\bK[\-\s]?SET\b/i, label: "K-SET" },
              { re: /\bPh[\.\s]*D\b/i, label: "PhD" },
            ];
            const found: string[] = [];
            for (const d of DEGREES) if (d.re.test(raw) && !found.includes(d.label)) found.push(d.label);
            if (/pursuing/i.test(raw) && /ph[\.\s]*d/i.test(raw) && !found.includes("Pursuing PhD")) {
              // Replace plain PhD with Pursuing PhD when source says pursuing
              const idx = found.indexOf("PhD");
              if (idx >= 0) found.splice(idx, 1);
              found.push("Pursuing PhD");
            }
            return found;
          };
          const degrees = extractDegrees(faculty.qualification || "");
          const shortQual = degrees.join(", ");

          const isEmpty = (v: any) =>
            v == null || (typeof v === "string" && (v.trim() === "" || v.trim() === "—" || v.trim() === "-"));
          const qualValue = isEmpty(shortQual) ? "" : shortQual;
          const dojValue = isEmpty(faculty.doj) ? "" : faculty.doj;
          const rawRows = [
            { label: nameLabel, value: faculty.name },
            { label: "Designation", value: expandDesignation(faculty.designation) },
            { label: "Department", value: dept.name },
            { label: "Qualification", value: qualValue },
            { label: "Date of Joining", value: dojValue },
          ];
          const rows = rawRows.filter((r) => !isEmpty(r.value) || r.label === "Qualification" || r.label === "Date of Joining");
          void isStaff;




          return (
            <div className="relative overflow-hidden rounded-2xl border-2 shadow-card" style={{ borderColor: "#f5c518" }}>
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #129199 0%, #0e7a80 55%, #0b6066 100%)" }} />
              <div aria-hidden className="absolute -top-20 -right-20 h-56 w-56 rounded-full" style={{ background: "radial-gradient(closest-side, rgba(245,197,24,0.3), transparent 70%)" }} />

              <div className="relative grid md:grid-cols-[220px_1fr] gap-4 md:gap-6 p-4 md:p-6 items-start">
                <div className="flex flex-col items-center md:items-stretch gap-2 w-full max-w-[220px] mx-auto md:mx-0">
                  <div className="rounded-2xl border-2 border-[#f5c518] bg-card overflow-hidden w-full">
                    <div className="aspect-[4/5] w-full overflow-hidden relative bg-[#f1f5f9]">
                      {faculty.image ? (
                        <>
                          <div aria-hidden className="absolute inset-0 grid place-items-center text-4xl font-bold text-[#129199]/40">
                            {faculty.name[0]}
                          </div>
                          <img
                            src={faculty.image}
                            alt={faculty.name}
                            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                            className="relative h-full w-full object-cover object-center"
                          />
                        </>
                      ) : (
                        <div className="h-full w-full grid place-items-center text-4xl font-bold text-[#129199]">
                          {faculty.name[0]}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-center md:text-left mt-1">
                    <h1 className="font-display text-base md:text-lg font-bold text-white leading-tight">{faculty.name}</h1>
                    <div className="mt-0.5 text-xs text-white/85">{expandDesignation(faculty.designation)}</div>
                  </div>
                </div>

                <div className="rounded-xl bg-white/95 backdrop-blur p-1 shadow-md self-start">
                  <table className="w-full text-sm md:text-base">
                    <tbody>
                      {rows.map((row, i, arr) => {
                        const isQual = row.label === "Qualification";
                        const quals = isQual ? parseQualificationList(String(row.value ?? "")) : [];
                        return (
                        <tr key={row.label} className={i < arr.length - 1 ? "border-b border-[#f5c518]/40" : ""}>
                          <th className="text-left px-2.5 py-2.5 md:px-3 md:py-3 w-40 md:w-52 font-bold text-white align-top rounded-l-lg text-sm md:text-base" style={{ backgroundColor: "#129199" }}>{row.label}</th>
                          <td className="px-2.5 py-2.5 md:px-3 md:py-3 align-top break-words text-base md:text-lg font-semibold" style={{ color: "#0e7a80", fontWeight: 600 }}>
                            {(row as any).isEmail ? (
                              <a href={`mailto:${row.value}`} className="hover:underline" style={{ color: "#129199" }}>{row.value}</a>
                            ) : isQual && quals.length > 1 ? (
                              <ul className="list-disc pl-4 space-y-0.5 marker:text-[#129199]">
                                {quals.map((q, idx) => <li key={idx}>{q}</li>)}
                              </ul>
                            ) : isQual && quals.length === 1 ? quals[0] : row.value}
                          </td>
                        </tr>
                        );

                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
        })()}
      </section>


      <section className="container-page pb-10">
        <div className="min-w-0">
          {!isStaff && (
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg text-white" style={{ backgroundColor: "#129199" }}>
                  <Mail className="h-5 w-5" />
                </div>
                <h2 className="font-display text-xl font-semibold">Contact Details</h2>
              </div>
              <ContactDetailsTable email={mergedEmail} ids={ids} />
            </div>
          )}

          {!isStaff && <ScrapedProfileContent facultyId={faculty.id} isStaff={isStaff} />}

        </div>
      </section>
    </Layout>
  );
}

// Canonical contact-details rows: always rendered for every teaching faculty.
// Empty value → cell shows a faint placeholder so the table layout stays consistent.
const CONTACT_ROWS: { key: string; label: string; icon: React.ComponentType<{ className?: string }>; match: (k: string) => boolean }[] = [
  { key: "email",          label: "Email",              icon: Mail,          match: () => false },
  { key: "vidwan",         label: "Vidwan ID",          icon: GraduationCap, match: (k) => /vidwan/i.test(k) },
  { key: "googleScholar",  label: "Google Scholar ID",  icon: BookOpen,      match: (k) => /google\s*scholar/i.test(k) },
  { key: "scopus",         label: "Scopus ID",          icon: Globe,         match: (k) => /scopus/i.test(k) },
  { key: "orcid",          label: "ORCID ID",           icon: Award,         match: (k) => /orc(id|hid)/i.test(k) },
  { key: "webOfScience",   label: "Web of Science",     icon: Globe,         match: (k) => /web\s*of\s*science|researcher\s*id/i.test(k) },
  { key: "linkedin",       label: "LinkedIn",           icon: Linkedin,      match: (k) => /linkedin/i.test(k) },
];

function ContactDetailsTable({ email, ids }: { email?: string; ids: Record<string, string> }) {
  const cleanEmail = (email ?? "").replace(/^Official\s*:\s*/i, "").trim();
  const findId = (matcher: (k: string) => boolean) => {
    const entry = Object.entries(ids).find(([k]) => matcher(k));
    return entry?.[1]?.trim() ?? "";
  };

  // Compose a canonical profile URL from a bare ID. If the value is already
  // a full URL, return as-is. If it's empty, return empty.
  const composeUrl = (key: string, raw: string): string => {
    const v = (raw || "").trim();
    if (!v) return "";
    if (/^https?:\/\//i.test(v)) return v;
    const id = v.replace(/^[#:]\s*/, "").trim();
    switch (key) {
      case "vidwan":        return `https://vidwan.inflibnet.ac.in/profile/${encodeURIComponent(id)}`;
      case "googleScholar": return `https://scholar.google.com/citations?user=${encodeURIComponent(id)}`;
      case "scopus":        return `https://www.scopus.com/authid/detail.uri?authorId=${encodeURIComponent(id)}`;
      case "orcid":         return `https://orcid.org/${encodeURIComponent(id)}`;
      case "webOfScience":  return `https://www.webofscience.com/wos/author/record/${encodeURIComponent(id)}`;
      case "linkedin":      return `https://www.linkedin.com/in/${encodeURIComponent(id)}`;
      default:              return v;
    }
  };

  // Only render rows that actually have data; uniform across all profiles.
  const rowValues = CONTACT_ROWS
    .map((r) => {
      if (r.key === "email") {
        return cleanEmail ? { ...r, value: cleanEmail, href: `mailto:${cleanEmail}`, isEmail: true } : null;
      }
      const raw = findId(r.match);
      if (!raw || raw === "–" || raw === "-" || /^nil$/i.test(raw)) return null;
      return { ...r, value: raw, href: composeUrl(r.key, raw), isEmail: false };
    })
    .filter((r): r is NonNullable<typeof r> => !!r);

  if (rowValues.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-2xl border-2 bg-card shadow-sm" style={{ borderColor: "#f5c518" }}>
      <table className="w-full text-sm md:text-[15px]">
        <tbody>
          {rowValues.map((r, i, arr) => {
            const Icon = r.icon;
            return (
              <tr key={r.key} className={i < arr.length - 1 ? "border-b" : ""} style={{ borderColor: "rgba(245,197,24,0.55)" }}>
                <th className="text-left align-middle px-3 md:px-4 py-3 w-48 md:w-56 font-semibold text-white" style={{ backgroundColor: "#129199" }}>
                  <span className="inline-flex items-center gap-2">
                    <Icon className="h-4 w-4 opacity-90" />
                    {r.label}
                  </span>
                </th>
                <td className="px-3 md:px-4 py-3 align-middle break-all bg-card">
                  {r.isEmail ? (
                    <a href={r.href} className="font-medium hover:underline" style={{ color: "#129199" }}>{r.value}</a>
                  ) : (
                    <a href={r.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-medium hover:underline break-all" style={{ color: "#129199" }}>
                      {r.href} <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                    </a>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

import type { FacultyProfileItem } from "@/data/parseFacultyProfile";

type ProfileItem = FacultyProfileItem;

// Canonical section order shown on every teaching-faculty profile.
// Each entry: { title shown on the card, aliases matched against scraped section titles }.
const CANONICAL_SECTIONS: { title: string; aliases: string[] }[] = [
  { title: "Academic Details", aliases: ["academic details", "qualification", "qualifications", "educational qualification", "educational qualifications", "education details", "degrees obtained", "degrees obtained, with field, institutions and dates", "degrees obtained with field institutions and dates"] },
  { title: "Areas of Interests", aliases: ["areas of interest", "areas of interests", "area of interest", "research areas", "research area", "research interests", "research activity"] },
  { title: "Professional Experience", aliases: ["professional experience", "employment record", "employment record in institution", "employment record in institution (in order starting from present position)", "experience", "teaching experience", "work experience", "ph d guidance", "ph.d guidance", "ph.d. guidance", "phd guidance", "research guidance"] },
  { title: "Publications Details", aliases: ["publications details", "publication details", "publications", "publication", "international book chapter publications", "book chapters", "journal publications", "conference publications", "patent", "patents"] },
  { title: "Membership in Professional Bodies", aliases: ["membership in professional bodies", "professional memberships", "professional body memberships", "professional body membership", "memberships", "membership in scientific and professional societies", "membership in scientific and professional societies with abbreviations", "membership of university / institution authorities", "membership of university / institution authorities (in the reverse chronological order)", "membership of university institution authorities"] },
  { title: "FDPs/Conferences/Workshops/STTP/MOOC Certification", aliases: ["fdps/conferences/workshops/sttp/mooc certification", "fdps/conferences/workshops/sttp/mooc certification/online courses", "fdps / conferences / workshops / sttp / mooc certification", "fdps / conferences / workshops / sttp / mooc certification / online courses", "fdps conferences workshops sttp mooc certification", "fdps conferences workshops sttp mooc certification online courses", "mooc certification", "fdp", "fdps", "workshops", "conferences attended", "conference details", "conferences", "sttp", "list of short-term courses", "list of short-term courses / national level technical symposia organized", "short-term courses", "certifications", "certification"] },
  { title: "Proposal/Funding/Project Financial Assistance", aliases: ["proposal/funding/project financial assistance", "proposal / funding / project financial assistance", "funding", "funded projects", "funding projects", "projects funded", "research grants", "grants", "r&d projects executed", "r&d projects", "research projects"] },
  { title: "Honours/Awards/Achievements", aliases: ["honours/awards/achievements", "honours / awards / achievements", "honors/awards/achievements", "achievements", "awards", "honours", "honors", "awards & achievements", "awards and achievements"] },
  { title: "Roles and Responsibilities: Institute Level", aliases: ["roles and responsibilities: institute level", "roles and responsibilities institute level", "institute level responsibilities", "institute level", "roles and responsibility", "roles and responsibilities"] },
  { title: "Roles and Responsibilities: Department Level", aliases: ["roles and responsibilities: department level", "roles and responsibilities department level", "department level responsibilities", "department level"] },
];

const normalize = (s: string) => s.toLowerCase().replace(/\s+/g, " ").trim();

function ScrapedProfileContent({ facultyId, isStaff }: { facultyId: string; isStaff: boolean }) {
  const page = getFacultyPage(facultyId);
  const raw = page?.md ?? "";

  const itemProse =
    "prose prose-sm md:prose-base prose-slate max-w-none prose-a:text-[#129199] prose-strong:text-foreground prose-p:my-0 prose-p:leading-relaxed text-left";

  const sections = raw ? parseFacultyProfile(raw) : [];

  // Inject extra academic items for specific faculty without touching
  // the header qualification row or the raw markdown source.
  const ACADEMIC_INJECTIONS: Record<string, string[]> = {
    "mr-rudresh-a-n": ["Pursuing PhD"],
    "akhila-c-g": ["Pursuing PhD"],
  };
  const extraAcademic = ACADEMIC_INJECTIONS[facultyId];
  if (extraAcademic && sections.length > 0) {
    for (const s of sections) {
      if (/^(academic details|qualification|education details)$/i.test(s.title.trim())) {
        for (const text of extraAcademic) {
          if (!s.items.some((it) => new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i").test(it.text))) {
            s.items.push({ num: null, text });
          }
        }
        break;
      }
    }
  }

  // For teaching faculty: always render the canonical section list, slotting
  // scraped data into matching sections and leaving the rest as empty cards.
  if (!isStaff) {
    const byCanonical = new Map<string, ProfileItem[]>();
    let lastMatchTitle: string | null = null;
    for (const s of sections) {
      const norm = normalize(s.title);
      // Prefer an exact alias match over a substring one, and check it across
      // every canonical section before falling back to `includes()`. Without
      // this, a specific heading like "Roles and Responsibilities: Department
      // Level" gets swallowed by the broader "Roles and Responsibilities"
      // alias belonging to the (earlier, in array order) Institute Level
      // section, since its normalized text contains that shorter alias as a
      // substring.
      const match =
        CANONICAL_SECTIONS.find((c) => c.aliases.some((a) => norm === a)) ??
        CANONICAL_SECTIONS.find((c) => c.aliases.some((a) => norm.includes(a)));
      const targetTitle = match?.title ?? lastMatchTitle;
      if (!targetTitle) continue;
      const bucket = byCanonical.get(targetTitle) ?? [];
      // If this is an unmatched subheading folded into the previous card,
      // emit the subheading itself as a bold label item first.
      if (!match) {
        const sub = { num: null as number | null, text: `**${s.title.replace(/[:*]+$/, "").trim()}**` };
        if (!bucket.some((b) => normalize(b.text) === normalize(sub.text))) bucket.push(sub);
      }
      for (const it of s.items) {
        if (!bucket.some((b) => normalize(b.text) === normalize(it.text))) bucket.push(it);
      }
      byCanonical.set(targetTitle, bucket);
      if (match) lastMatchTitle = match.title;
    }

    // Move cert/NPTEL/SWAYAM/MOOC items out of non-cert cards into the
    // FDPs/Certification card so "Certification Courses" only appears once.
    const CERT_TITLE = "FDPs/Conferences/Workshops/STTP/MOOC Certification";
    const isCertText = (t: string) =>
      /\b(NPTEL|SWAYAM|ARPIT|MOOC)\b/i.test(t) ||
      /on[\s-]?line\s+(courses?|nptel|swayam)/i.test(t) ||
      /\bcertification\s+course/i.test(t);
    const certBucket = byCanonical.get(CERT_TITLE) ?? [];
    for (const [title, bucket] of byCanonical) {
      if (title === CERT_TITLE) continue;
      const keep: ProfileItem[] = [];
      for (const it of bucket) {
        if (isCertText(it.text) && !it.columns) {
          if (!certBucket.some((b) => normalize(b.text) === normalize(it.text))) certBucket.push(it);
        } else {
          keep.push(it);
        }
      }
      byCanonical.set(title, keep);
    }
    if (certBucket.length > 0) byCanonical.set(CERT_TITLE, certBucket);

    // Move department-level roles out of the Institute Level card into the
    // Department Level card. Anything mentioning "Department" or "Dept" or
    // common dept-coordinator phrases belongs under Department Level.
    const INST_TITLE = "Roles and Responsibilities: Institute Level";
    const DEPT_TITLE = "Roles and Responsibilities: Department Level";
    const isDeptRole = (t: string) => /\b(department|dept\.?|departmental)\b/i.test(t);
    const instBucket = byCanonical.get(INST_TITLE) ?? [];
    const deptBucket = byCanonical.get(DEPT_TITLE) ?? [];
    if (instBucket.length > 0) {
      const keep: ProfileItem[] = [];
      for (const it of instBucket) {
        if (isDeptRole(it.text) && !it.columns) {
          if (!deptBucket.some((b) => normalize(b.text) === normalize(it.text))) deptBucket.push(it);
        } else {
          keep.push(it);
        }
      }
      byCanonical.set(INST_TITLE, keep);
      if (deptBucket.length > 0) byCanonical.set(DEPT_TITLE, deptBucket);
    }

    // Final per-bucket dedup using a normalized signature (lowercase, strip
    // punctuation/markdown/whitespace) so near-duplicate sentences collapse.
    const sigOf = (t: string) =>
      t.toLowerCase()
        .replace(/\*\*/g, "")
        .replace(/[\u2018\u2019\u201C\u201D"'`]/g, "")
        .replace(/[^\w\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    // Heading-remnant fragments produced by upstream scraping. Any bullet
    // whose normalized text is a tail-suffix of a known card title (e.g. card
    // "Areas of Interests" → bullet "of Interests"; card "Publications
    // Details" → bullet "Details"; card "FDPs / Conferences / Workshops /
    // STTP / MOOC Certification" → bullet "Certification") is dropped.
    const remnantTails = new Set<string>();
    for (const c of CANONICAL_SECTIONS) {
      const words = sigOf(c.title).split(" ").filter(Boolean);
      for (let i = 1; i < words.length; i++) {
        remnantTails.add(words.slice(i).join(" "));
      }
      for (const a of c.aliases) {
        const aw = sigOf(a).split(" ").filter(Boolean);
        for (let i = 1; i < aw.length; i++) remnantTails.add(aw.slice(i).join(" "));
      }
    }
    for (const [title, bucket] of byCanonical) {
      const seen = new Set<string>();
      const out: ProfileItem[] = [];
      for (const it of bucket) {
        const key = it.columns ? `c:${it.columns.map(sigOf).join("|")}` : `t:${sigOf(it.text)}`;
        if (key === "t:" || seen.has(key)) continue;
        if (!it.columns) {
          const s = sigOf(it.text);
          // Drop only short stray fragments; never strip real content.
          if (s.length <= 40 && remnantTails.has(s)) continue;
        }
        seen.add(key);
        out.push(it);
      }
      byCanonical.set(title, out);
    }



    // Remove "Nil" entries from all buckets (Publications/FDPs etc.) so they
    // render as empty section cards (headings only) rather than a "Nil" bullet.
    for (const [title, bucket] of byCanonical) {
      const filtered = bucket.filter((it) => {
        const text = (it.text ?? "").replace(/^\*\*|\*\*$/g, "").trim();
        if (/^nil$/i.test(text)) return false;
        if (it.columns) {
          const allNil = it.columns.every((c) => /^nil$/i.test(c.replace(/^\*\*|\*\*$/g, "").trim()));
          if (allNil) return false;
        }
        return true;
      });
      byCanonical.set(title, filtered);
    }

    const anyCanonicalContent = Array.from(byCanonical.values()).some((v) => v.length > 0);

    // Remove the Google Scholar / Vidwan ID rows from Academic Details because
    // they are already surfaced in the Contact Details table.
    const ACADEMIC_DETAILS_TITLE = "Academic Details";
    const academicBucket = byCanonical.get(ACADEMIC_DETAILS_TITLE);
    if (academicBucket) {
      const filtered = academicBucket.filter((it) => {
        const haystack = (it.columns ?? [it.text]).join(" ").toLowerCase();
        return !/google\s*scholar|vidwan/i.test(haystack);
      });
      byCanonical.set(ACADEMIC_DETAILS_TITLE, filtered);
    }

    // Fallback for non-staff faculty whose scraped/override markdown didn't
    // map cleanly into the canonical sections (e.g. profiles stored as raw
    // HTML tables). Render the full content inside a single "Faculty Profile"
    // card so the exact content from old.atme.edu.in is still visible.
    if (!anyCanonicalContent && raw && raw.trim().length > 0) {
      let md = raw;
      md = md.replace(/^\[ip stresser\][^\n]*\n+/i, "");
      md = md.replace(/\[Skip to content\][^\n]*\n+/i, "");
      md = md.replace(/\[!\[ATME[^\]]*\]\([^)]*\)\]\([^)]*\)\s*/gi, "");
      md = md.replace(/^\[\]\(https?:\/\/atme\.edu\.in\/?\)\s*/i, "");
      md = md.replace(/^\s*!\[[^\]]*\]\([^)]*(?:wp-content\/uploads|__l5e\/assets-v1)[^)]*\)\s*$/gim, "");
      md = md.replace(/Social media & sharing icons[\s\S]*$/i, "").trim();
      md = sanitizeMarkdown(rewritePdfUrls(md));
      return (
        <div className="mt-10 overflow-hidden rounded-2xl border-2 bg-card shadow-sm" style={{ borderColor: "#f5c518" }}>
          <div className="px-4 md:px-5 py-3 text-white font-semibold font-display text-base md:text-lg" style={{ backgroundColor: "#129199" }}>
            Faculty Profile
          </div>
          <div className={`p-4 md:p-6 ${itemProse} [&_table]:w-full [&_table]:border-collapse [&_th]:bg-[#129199] [&_th]:text-white [&_th]:p-2 [&_th]:text-left [&_td]:p-2 [&_td]:align-top [&_td]:border [&_td]:border-[#f5c518]/60 [&_th]:border [&_th]:border-[#f5c518]/60`}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={scrapedMdComponents}>
              {md}
            </ReactMarkdown>
          </div>
        </div>
      );
    }

    return (
      <div className="mt-10 space-y-6">
        {CANONICAL_SECTIONS.map((c) => {
          const items = byCanonical.get(c.title) ?? [];
          return (
            <div key={c.title} className="overflow-hidden rounded-2xl border-2 bg-card shadow-sm" style={{ borderColor: "#f5c518" }}>
              <div className="px-4 md:px-5 py-3 text-white font-semibold font-display text-base md:text-lg" style={{ backgroundColor: "#129199" }}>
                {c.title}
              </div>
              <div className="p-4 md:p-6 min-h-[1.5rem]">
                {c.title === "Professional Experience" ? (
                  <>
                    <ExperienceTable items={items} />
                    {(() => {
                      const isYearsLabel = (raw: string) => {
                        const t = (raw || "").replace(/\*\*/g, "").trim();
                        // Drop "Teaching/Research/Industry: <number|nil|dash|empty>" placeholder bullets.
                        if (/^(teaching|research|industry|industrial)(\s+experience)?\s*[:\-–—|]\s*([-–—]|nil|n\/?a|none|0)?\s*(year|yr)?s?\.?\s*$/i.test(t)) return true;
                        if (/^(teaching|research|industry|industrial)(\s+experience)?\s*[:\-–—|]\s*(\d|nil)/i.test(t)) return true;
                        // Drop the redundant "Total"/"Total Experience: N years" bullet —
                        // the breakdown table above already sums to the same total.
                        return /^total(\s+experience)?\s*[:\-–—|]/i.test(t);
                      };
                      const isStray = (raw: string) => {
                        const t = (raw || "").replace(/\*\*/g, "").trim();
                        if (t === "" || /^[-–—]+$/.test(t)) return true;
                        // Drop a bare "N years/months" restating the total
                        // experience (e.g. leaked from a "Professional
                        // Experience: 13 years" heading) — the breakdown
                        // table above already shows Teaching/Research/Industry.
                        if (/^\d+(\.\d+)?\s*(years?|yrs?\.?|months?|mos?\.?)\.?$/i.test(t)) return true;
                        return false;
                      };
                      // When the scraped data has no actual Teaching/Research/
                      // Industry numbers, ExperienceTable itself falls back to
                      // rendering the raw career-history bullets as a Role |
                      // Duration table. In that case these same bullets must
                      // NOT also be re-rendered here, or every entry appears
                      // twice (once inside the fallback table, once as a
                      // duplicate list below it).
                      const numericBreakdownRe = /(teaching|research|industry|industrial)(?:\s+experience)?\s*[:\-–—|]\s*(\d|nil)/i;
                      const hasNumericBreakdown = items.some((it) =>
                        it.columns
                          ? it.columns.some((c) => numericBreakdownRe.test(c.replace(/\*\*/g, "")))
                          : numericBreakdownRe.test((it.text || "").replace(/\*\*/g, "")),
                      );
                      const narrative = hasNumericBreakdown
                        ? items.filter((it) => !it.columns && !isYearsLabel(it.text) && !isStray(it.text))
                        : [];
                      if (narrative.length === 0) return null;
                      return (
                        <div className="mt-5">
                          <SectionItems items={narrative} proseClass={itemProse} sectionTitle={c.title} />
                        </div>
                      );
                    })()}
                  </>
                ) : items.length > 0 ? (
                  <SectionItems items={items} proseClass={itemProse} sectionTitle={c.title} />
                ) : null}


              </div>

            </div>
          );
        })}
      </div>
    );
  }

  // Staff (technical/supporting) — keep the original scraped-sections rendering.
  if (sections.length > 0) {
    return (
      <div className="mt-10 space-y-6">
        {sections.map((s) => (
          <div key={s.title} className="overflow-hidden rounded-2xl border-2 bg-card shadow-sm" style={{ borderColor: "#f5c518" }}>
            <div className="px-4 md:px-5 py-3 text-white font-semibold font-display text-base md:text-lg" style={{ backgroundColor: "#129199" }}>
              {s.title}
            </div>
            <div className="p-4 md:p-6">
              <SectionItems items={s.items} proseClass={itemProse} sectionTitle={s.title} />
            </div>
          </div>
        ))}
      </div>
    );
  }

function ExperienceTable({ items }: { items: ProfileItem[] }) {
  // We ONLY surface three canonical rows: Teaching, Research, Industry.
  // Anything else from the scraped Professional Experience section (free-form
  // "Detail" paragraphs, narrative bullets, etc.) is intentionally dropped to
  // keep this card uniform across every faculty profile.
  const find = (re: RegExp): string => {
    // Capture the unit alongside the number — source data isn't always in
    // years (e.g. "Teaching: 8 months" for a recent joinee) — and default to
    // "years" only when no unit is present, instead of always assuming years.
    const pickNumber = (s: string) => {
      // A explicit "Nil/None/NA" value is real data (zero experience for a
      // newly-joined faculty member) — surface it plainly instead of falling
      // through to the narrative-table fallback below.
      if (/^\s*(nil|none|n\/?a)\.?\s*$/i.test(s)) return "Nil";
      const m = s.match(/(\d+(?:\.\d+)?)\s*(years?|yrs?\.?|months?|mos?\.?|days?)?/i);
      if (!m) return "";
      const num = parseFloat(m[1]);
      const unitRaw = (m[2] || "").toLowerCase();
      // Source data mixes whole years, decimal years ("6.5 Years"), and plain
      // months ("8 months") — normalize everything to "X Years Y Months" so
      // every row reads at the same granularity.
      if (/^d/.test(unitRaw)) {
        // Days are rare in the source data; too fine-grained to fold into a
        // years/months figure, so surface as-is rather than guessing.
        return `${m[1]} ${num === 1 ? "day" : "days"}`;
      }
      const totalMonths = Math.round(/^mo/.test(unitRaw) ? num : num * 12);
      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12;
      return `${years} ${years === 1 ? "Year" : "Years"} ${months} ${months === 1 ? "Month" : "Months"}`;
    };
    for (const it of items) {
      if (it.columns && it.columns.length >= 1) {
        for (let i = 0; i < it.columns.length; i++) {
          const cell = it.columns[i].replace(/\*\*/g, "").trim();
          // Case A: "Label: value" packed inside a single cell
          // (e.g. "Industry: 4" with no separate value column).
          const inline = cell.match(/^([A-Za-z][A-Za-z ()&/.-]{1,40}?)\s*[:\-–—]\s*(.+)$/);
          if (inline && re.test(inline[1])) {
            const num = pickNumber(inline[2]);
            if (num) return num;
          }
          // Case B: label in this cell, value in following cells.
          if (re.test(cell) && i < it.columns.length - 1) {
            const val = it.columns.slice(i + 1).join(" ").replace(/\*\*/g, "").trim();
            const num = pickNumber(val);
            if (num) return num;
          }
        }
      }
      const text = it.text.replace(/\*\*/g, "").trim();
      // Match patterns like "Teaching Experience: 12", "Teaching: 12 years",
      // "Teaching Experience — 12 yrs", etc. A single bullet sometimes packs
      // all three together (e.g. "Teaching: 21 Years: Research: 6 Years |
      // Industry: 2 Years") — scan for every "Label: value" pair in the line
      // rather than only the one starting the string, so a combined summary
      // line doesn't silently swallow the later labels.
      const pairRe = /(teaching|research|industry|industrial)(?:\s+experience)?\s*[:\-–—|]\s*([^|]*?)(?=(?:teaching|research|industry|industrial)(?:\s+experience)?\s*[:\-–—|]|$)/gi;
      for (const pm of text.matchAll(pairRe)) {
        if (re.test(pm[1])) {
          const num = pickNumber(pm[2]);
          if (num) return num;
        }
      }
    }
    return "";
  };

  const rows = [
    { label: "Teaching Experience", value: find(/teaching/i) },
    { label: "Research Experience", value: find(/research/i) },
    { label: "Industry Experience", value: find(/industry|industrial/i) },
  ];

  const hasNumbers = rows.some((r) => r.value);

  // Fallback: if no Teaching/Research/Industry numbers were extracted but the
  // scraped Professional Experience section has narrative items (e.g. "Role at
  // Company – 1 year"), render them in a two-column Role | Duration table.
  if (!hasNumbers && items.length > 0) {
    const splitRow = (raw: string): { role: string; duration: string } => {
      const t = raw.replace(/\*\*/g, "").trim();
      // Try to split on an en/em dash or hyphen that precedes a duration phrase.
      const m = t.match(/^(.+?)\s*[\u2013\u2014\-]\s*(\d.*|.*\d.*|to\s+till\s+date.*|till\s+date.*)$/i);
      if (m) return { role: m[1].trim(), duration: m[2].trim() };
      return { role: t, duration: "" };
    };
    const dataRows = items
      .filter((it) => !it.columns)
      .map((it) => splitRow(it.text))
      .filter((r) => r.role);
    if (dataRows.length > 0) {
      return (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm md:text-[15px]">
            <thead>
              <tr>
                <th className="text-left align-top px-3 py-2 font-semibold text-white" style={{ backgroundColor: "#129199" }}>Role</th>
                <th className="text-left align-top px-3 py-2 font-semibold text-white border-l w-56" style={{ backgroundColor: "#129199", borderColor: "#f5c518" }}>Duration</th>
              </tr>
            </thead>
            <tbody>
              {dataRows.map((r, i) => (
                <tr key={i} className={i > 0 ? "border-t" : ""} style={{ borderColor: "#f5c518" }}>
                  <td className="px-3 py-2 align-top text-foreground/90">{r.role}</td>
                  <td className="px-3 py-2 align-top text-foreground/90 border-l" style={{ borderColor: "#f5c518" }}>
                    {r.duration || <span className="text-muted-foreground select-none">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm md:text-[15px]">
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.label} className={i > 0 ? "border-t" : ""} style={{ borderColor: "#f5c518" }}>
              <th className="text-left align-top px-3 py-2 font-semibold text-white w-56" style={{ backgroundColor: "#129199" }}>
                {r.label}
              </th>
              <td className="px-3 py-2 align-top text-foreground/90 border-l" style={{ borderColor: "#f5c518" }}>
                {r.value || <span className="text-muted-foreground select-none">—</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



  if (!raw) return null;

  // Fallback: non-table staff pages.
  let md = raw;
  md = md.replace(/^\[ip stresser\][^\n]*\n+/i, "");
  md = md.replace(/\[Skip to content\][^\n]*\n+/i, "");
  md = md.replace(/\[!\[ATME[^\]]*\]\([^)]*\)\]\([^)]*\)\s*/gi, "");
  md = md.replace(/^\[\]\(https?:\/\/atme\.edu\.in\/?\)\s*/i, "");
  md = md.replace(/^\s*!\[[^\]]*\]\([^)]*(?:wp-content\/uploads|__l5e\/assets-v1)[^)]*\)\s*$/gim, "");
  md = md.replace(/Social media & sharing icons[\s\S]*$/i, "").trim();
  md = sanitizeMarkdown(rewritePdfUrls(md));
  const stripped = md
    .split(/\n+/)
    .filter((ln) => {
      const t = ln.trim();
      if (!t) return false;
      if (/^[-=*_]{3,}$/.test(t)) return false;
      if (/^\*{0,2}(name|designation|department|date of joining institution|e-?mail|mobile number|qualification|total experience in years|present address|faculty name|program|professional experience)\*{0,2}\s*[:|]?/i.test(t)) return false;
      return true;
    })
    .join("\n\n")
    .trim();
  if (!stripped || stripped.length < 20) return null;
  return (
    <div className="mt-10 overflow-hidden rounded-2xl border-2 bg-card shadow-sm" style={{ borderColor: "#f5c518" }}>
      <div className="px-4 md:px-5 py-3 text-white font-semibold font-display text-base md:text-lg" style={{ backgroundColor: "#129199" }}>
        Profile
      </div>
      <div className={`p-4 md:p-6 ${itemProse}`}>
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={scrapedMdComponents}>
          {stripped}
        </ReactMarkdown>
      </div>
    </div>
  );
}

function SectionItems({ items, proseClass, sectionTitle }: { items: ProfileItem[]; proseClass: string; sectionTitle?: string }) {
  const sectionCoversCert = !!sectionTitle && /(certificat|FDP|workshop|MOOC|SWAYAM|NPTEL|conference)/i.test(sectionTitle);
  // Publications Details (and the Patent/Book Chapter sections folded into it)
  // get a yellow underline on every hyperlink so citation links stand out.
  const isPublicationsSection = !!sectionTitle && /publications?\s*details/i.test(sectionTitle);
  const linkHighlightClass = isPublicationsSection
    ? "[&_a]:underline [&_a]:decoration-2 [&_a]:decoration-[#f5c518] [&_a]:underline-offset-2 [&_a]:hover:decoration-[#e0b400]"
    : "";
  const publicationsProseClass = `${proseClass} ${linkHighlightClass}`.trim();

  // A line is a sub-heading if it's short, unnumbered, and consists of an
  // emphasised label such as `**Foo**`, `**Foo`, `Foo**`, or `Foo:` — the
  // scraped markdown has many half-broken bold markers we need to tolerate.
  const subheadingMatch = (it: ProfileItem): string | null => {
    if (it.columns && it.columns.length > 1) return null;
    const t = it.text.trim();
    if (t.length > 90 || it.num != null) return null;
    const m =
      t.match(/^\*\*\s*([^*\n]+?)\s*\*\*\s*:?\s*$/) ||
      t.match(/^\*\*\s*([^*\n]+?)\s*:?\s*$/) ||
      t.match(/^([^*\n]+?)\s*\*\*\s*:?\s*$/) ||
      // Plain "Label:" line with no body — short, no sentence punctuation.
      (t.length <= 60 && !/[.?!]/.test(t.slice(0, -1)) ? t.match(/^([^*\n:]{2,60}):\s*$/) : null);
    if (m) return m[1].trim().replace(/:$/, "").trim();
    return null;
  };

  // Strip orphan ** that survive scraping so ReactMarkdown doesn't render
  // them as literal asterisks ("FDS/Workshops**" → "FDS/Workshops").
  const cleanItemText = (raw: string) => {
    let s = raw;
    // Drop trailing/leading orphan ** sequences (no closing partner on the line)
    const stars = (s.match(/\*\*/g) || []).length;
    if (stars === 1) s = s.replace(/\*\*/, "");
    if (stars % 2 === 1 && stars > 1) s = s.replace(/\*\*\s*$/, "").replace(/^\s*\*\*/, "");
    return s.trim();
  };

  type Group = { heading?: string; bullets: ProfileItem[] };
  const groups: Group[] = [{ bullets: [] }];
  for (const it of items) {
    const sub = subheadingMatch(it);
    if (sub) {
      groups.push({ heading: sub, bullets: [] });
      continue;
    }
    const inlineMatch = it.columns ? null : it.text.match(/^\*\*\s*([^*]{2,80}?)\s*:\s*\*\*\s*(.+)$/);
    if (inlineMatch && inlineMatch[2].length > 0 && inlineMatch[1].length < 70 && it.num == null) {
      groups.push({ heading: inlineMatch[1].trim(), bullets: [{ num: null, text: cleanItemText(inlineMatch[2].trim()) }] });
    } else {
      groups[groups.length - 1].bullets.push({ num: it.num, text: cleanItemText(it.text), columns: it.columns });
    }
  }

  // Auto-label runs of NPTEL / SWAYAM / online-course / ARPIT / MOOC bullets
  // as "Certification Courses" when they don't already sit under a heading.
  const isOnlineCourseRemnant = (t: string) => /^\/?\s*online\s+courses?\s*$/i.test(t.trim());
  const isCertCourse = (t: string) =>
    /\b(NPTEL|SWAYAM|ARPIT|MOOC)\b/i.test(t) ||
    /on[\s-]?line\s+(courses?|nptel|swayam)/i.test(t) ||
    /\bcertification\s+course/i.test(t);
  const splitGroups: Group[] = [];
  let certBucket: Group | null = null;
  for (const g of groups) {
    if (sectionCoversCert) { splitGroups.push(g); continue; }

    g.bullets = g.bullets.filter((b) => !isOnlineCourseRemnant(b.text));
    if (g.bullets.length === 0) { splitGroups.push(g); continue; }
    const nonCert: ProfileItem[] = [];
    const cert: ProfileItem[] = [];
    for (const b of g.bullets) {
      if (isCertCourse(b.text)) cert.push({ ...b, num: null });
      else nonCert.push(b);
    }
    // Preserve original heading with its non-cert items (or empty heading row).
    if (nonCert.length > 0 || g.heading) {
      splitGroups.push({ heading: g.heading, bullets: nonCert });
    }
    if (cert.length > 0) {
      if (!certBucket) {
        certBucket = { heading: "Certification Courses", bullets: [...cert] };
        splitGroups.push(certBucket);
      } else {
        certBucket.bullets.push(...cert);
      }
    }
  }
  groups.length = 0;
  groups.push(...splitGroups);


  const renderColumns = (cols: string[]) => {
    const cleaned = cols.map((c) => c.trim());
    return (
      <div
        className="grid gap-x-4 gap-y-1"
        style={{ gridTemplateColumns: `repeat(${cleaned.length}, minmax(0, 1fr))` }}
      >
        {cleaned.map((c, ci) => (
          <div key={ci} className={`min-w-0 break-words ${publicationsProseClass}`}>
            {c ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={scrapedMdComponents}>{c}</ReactMarkdown>
            ) : (
              <span className="text-muted-foreground">—</span>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Render a contiguous run of multi-column items as an HTML table.
  // First row is treated as the header if every cell is bold (**Foo**) or short
  // and starts with a capital letter.
  const renderTable = (rows: ProfileItem[], key: string) => {
    const stripBold = (s: string) => s.replace(/^\*\*\s*|\s*\*\*$/g, "").trim();
    const isBold = (s: string) => /^\*\*[^*]+\*\*$/.test(s.trim());
    const firstCols = rows[0].columns!;
    const firstIsHeader = firstCols.every((c) => isBold(c)) || (rows.length > 1 && firstCols.every((c) => c.length < 40 && /^[A-Z]/.test(stripBold(c))));
    const header = firstIsHeader ? firstCols.map(stripBold) : null;
    const body = firstIsHeader ? rows.slice(1) : rows;
    const colCount = Math.max(...rows.map((r) => r.columns!.length));
    return (
      <div key={key} className="my-3 overflow-x-auto rounded-xl border" style={{ borderColor: "#f5c518" }}>
        <table className="w-full text-sm md:text-[15px]" style={{ display: "table", tableLayout: "fixed", borderCollapse: "collapse" }}>
          {header && (
            <thead style={{ display: "table-header-group" }}>
              <tr style={{ display: "table-row", backgroundColor: "#129199" }}>
                {header.map((h, hi) => (
                  <th key={hi} className="text-left px-3 py-2 font-semibold text-white border-r last:border-r-0 align-top break-words" style={{ display: "table-cell", borderColor: "#f5c518", width: `${100 / colCount}%` }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody style={{ display: "table-row-group" }}>
            {body.map((row, ri) => {
              const raw = row.columns!;
              const cols = raw.length < colCount
                ? [...Array(colCount - raw.length).fill(""), ...raw]
                : raw;
              return (
                <tr key={ri} className="border-t" style={{ display: "table-row", borderColor: "#f5c518" }}>
                  {Array.from({ length: colCount }).map((_, ci) => {
                    const cell = cols[ci] ? stripBold(cols[ci]) : "";
                    // Collapse "[url](url)(url)" → "[url](url)" so the trailing
                    // raw URL doesn't render as plain text next to the link.
                    const normalized = cell.replace(/(\]\(([^)]+)\))\s*\(\2\)/g, "$1");
                    return (
                      <td key={ci} className="px-3 py-2 align-top break-words border-r last:border-r-0 text-sm md:text-[15px] leading-relaxed text-foreground/90" style={{ display: "table-cell", borderColor: "#f5c518", width: `${100 / colCount}%` }}>
                        {normalized ? (
                          <div className={`${publicationsProseClass} [&_p]:my-0`}>
                            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={scrapedMdComponents}>{normalized}</ReactMarkdown>
                          </div>
                        ) : null}
                      </td>
                    );
                  })}
                </tr>

              );
            })}
          </tbody>
        </table>
      </div>
    );
  };



  // Split bullets into runs: contiguous multi-column items (>=2 rows) → table;
  // single-row multi-column items get flattened into a bullet line.
  const renderBullets = (bullets: ProfileItem[]) => {
    const isMulti = (b: ProfileItem) => !!(b.columns && b.columns.length > 1);
    const flat: Array<ProfileItem & { __table?: ProfileItem[] }> = [];
    for (let i = 0; i < bullets.length; i++) {
      if (isMulti(bullets[i])) {
        const run: ProfileItem[] = [];
        let j = i;
        while (j < bullets.length && isMulti(bullets[j])) { run.push(bullets[j]); j++; }
        if (run.length >= 2) {
          flat.push({ ...run[0], __table: run });
        } else {
          const merged = run[0].columns!
            .map((c) => c.replace(/\*\*/g, "").trim())
            // Drop bare "Label:" placeholders with no value after the colon
            // (e.g. an empty "Patent No.:" column for a not-yet-filed patent).
            .filter((c) => c.length > 0 && !/^[A-Za-z][A-Za-z .]*:$/.test(c))
            .join(" — ");
          flat.push({ ...run[0], text: merged, columns: undefined });
        }
        i = j - 1;
      } else {
        flat.push(bullets[i]);
      }
    }

    const out: React.ReactNode[] = [];
    let i = 0;
    while (i < flat.length) {
      if (flat[i].__table) {
        out.push(renderTable(flat[i].__table!, `t-${i}`));
        i++;
      } else {
        const run: ProfileItem[] = [];
        while (i < flat.length && !flat[i].__table) { run.push(flat[i]); i++; }
        out.push(<div key={`l-${i}`}>{renderList(run)}</div>);
      }
    }
    return <>{out}</>;
  };

  const renderList = (bullets: ProfileItem[]) => {
    // Academic Details keeps its own distinct left-border style regardless of
    // whether its source items happen to be numbered — checked first so the
    // numbered-list branch below never intercepts it.
    const isAcademic = !!sectionTitle && /^academic details$/i.test(sectionTitle);
    if (isAcademic) {
      return (
        <ul className="space-y-2.5 text-sm md:text-[15px] leading-relaxed">
          {bullets.map((item, i) => (
            <li
              key={i}
              className="pl-4 break-words text-left border-l-[3px] rounded-sm"
              style={{ borderColor: "#f5c518", color: "#0e7a80" }}
            >
              <div className={`${proseClass} [&_p]:!text-[#0e7a80] [&_li]:!text-[#0e7a80] [&_strong]:!text-foreground`}>
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={scrapedMdComponents}>{item.text}</ReactMarkdown>
              </div>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <ul className="list-disc pl-5 space-y-2 text-sm md:text-[15px] leading-relaxed text-foreground/90 marker:text-[#129199]">
        {bullets.map((item, i) => (
          <li key={i} className="break-words text-left">
            <div className={publicationsProseClass}>
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={scrapedMdComponents}>{item.text}</ReactMarkdown>
            </div>
          </li>
        ))}
      </ul>
    );

  };

  return (
    <div className="space-y-5">
      {groups.map((g, gi) =>
        g.bullets.length === 0 ? null : (
          <div key={gi}>
            {g.heading && (
              <div className="mb-3 flex items-center gap-2">
                <span className="h-5 w-1 rounded-full" style={{ backgroundColor: "#f5c518" }} />
                <h3 className="font-display font-semibold text-base md:text-lg" style={{ color: "#0e7a80" }}>
                  {g.heading}
                </h3>
              </div>
            )}
            {g.bullets.length > 0 && renderBullets(g.bullets)}
          </div>
        ),
      )}

    </div>
  );
}


