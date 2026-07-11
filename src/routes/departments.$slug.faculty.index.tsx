import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { DeptSubNav } from "@/components/site/DeptSubNav";
import { getDept } from "@/data/departments";
import {
  cseAllFaculty, eceAllFaculty, eeeAllFaculty, meAllFaculty, ceAllFaculty, dsAllFaculty,
  cseStaff, eceStaff, eeeStaff, meStaff, ceStaff, dsStaff,
  aimlAllFaculty, csdAllFaculty, cyAllFaculty, mcaAllFaculty, mbaAllFaculty,
  aimlStaff, csdStaff, cyStaff, mcaStaff, mbaStaff,
} from "@/data/allFaculty";
import { FACULTY_DESIGNATIONS } from "@/data/facultyDesignations";
import { FacultyDirectory, categorize } from "@/components/site/FacultyDirectory";
import type { Faculty } from "@/data/departments";
import { ArrowLeft } from "lucide-react";
import atmeLogo from "@/assets/atme-logo.png.asset.json";
import { resolveAssetUrl } from "@/lib/assetUrl";


const ALL_BY_DEPT: Record<string, typeof cseAllFaculty> = {
  cse: cseAllFaculty, ece: eceAllFaculty, eee: eeeAllFaculty, me: meAllFaculty, ce: ceAllFaculty, ds: dsAllFaculty,
  aiml: aimlAllFaculty, csd: csdAllFaculty, cy: cyAllFaculty, mca: mcaAllFaculty, mba: mbaAllFaculty,
};
const STAFF_BY: Record<string, typeof cseStaff> = {
  cse: cseStaff, ece: eceStaff, eee: eeeStaff, me: meStaff, ce: ceStaff, ds: dsStaff,
  aiml: aimlStaff, csd: csdStaff, cy: cyStaff, mca: mcaStaff, mba: mbaStaff,
};

/** Fill in / normalize the designation from our derived map so technical &
 *  supporting staff get split out of the teaching tab properly. */
function withDesignation(f: Faculty): Faculty {
  const fromMap = FACULTY_DESIGNATIONS[f.id];
  const raw = (f.designation || "").trim();
  // Treat these scraped placeholders as "no designation" and prefer the map.
  const isPlaceholder =
    !raw ||
    /^(faculty member|education details|date of birth|faculty name:?|designation:?|ass(istant)?$|name\s*:?\s*$)/i.test(raw);
  const finalDesg = isPlaceholder && fromMap ? fromMap : raw || fromMap || "";
  return { ...f, designation: finalDesg.replace(/<[^>]+>/g, "").trim() };
}

/** Drop entries whose name is junk extracted from a malformed scrape row. */
function isJunkName(name: string): boolean {
  const n = (name || "").trim();
  if (!n || n.length < 2) return true;
  return /^(designation|name|qualification|email|phone|department|ass)\s*[:.]?$/i.test(n);
}

export const Route = createFileRoute("/departments/$slug/faculty/")({
  loader: ({ params }) => {
    const dept = getDept(params.slug);
    if (!dept) throw notFound();
    return { dept };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `Faculty & Staff — ${loaderData.dept.name} — ATME` },
      { name: "description", content: `Teaching, technical and supporting staff of ${loaderData.dept.name} at ATME College of Engineering.` },
    ] : [],
  }),
  component: FacultyPage,
});

function FacultyPage() {
  const { dept } = Route.useLoaderData();

  const seen = new Set<string>();
  const dedupe = (list: Faculty[]) =>
    list.filter((f) => {
      if (isJunkName(f.name)) return false;
      const k = f.id + "|" + f.name.toLowerCase();
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });

  // The dept.faculty + AllFaculty arrays come from the /faculty-profile listing
  // page on atme.edu.in — those rosters are teaching faculty by default. Only
  // promote to technical/supporting when categorize() finds an explicit signal.
  const teachingPool = dedupe([...dept.faculty, ...(ALL_BY_DEPT[dept.slug] ?? [])]).map(withDesignation);
  // STAFF_BY arrays are technical + supporting staff scraped separately.
  const staffPool = dedupe(STAFF_BY[dept.slug] ?? []).map(withDesignation);

  const teaching: Faculty[] = [];
  const technical: Faculty[] = [];
  const supporting: Faculty[] = [];

  for (const f of teachingPool) {
    const cat = categorize(f.designation);
    if (cat === "technical") technical.push(f);
    else if (/attender|peon|helper|office|sweeper|gardener|driver|security/i.test(f.designation ?? "")) supporting.push(f);
    else teaching.push(f); // default for teaching-pool entries (covers blank designations)
  }
  for (const f of staffPool) {
    const cat = categorize(f.designation);
    if (cat === "technical") technical.push(f);
    else if (cat === "teaching") teaching.push(f);
    else supporting.push(f); // default for staff-pool entries
  }

  return (
    <Layout>
      <section
        className="relative w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, #0a2a2d 0%, #0d3438 25%, #129199 70%, rgba(18,145,153,0.9) 100%)",
        }}
      >
        <div aria-hidden className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(245,197,24,0.25), transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.15), transparent 50%)" }} />
        <img
          src={resolveAssetUrl(atmeLogo.url)}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 h-20 sm:h-32 md:h-44 w-auto opacity-15"
        />
        <div aria-hidden className="absolute left-0 right-0 bottom-0 h-1.5" style={{ background: "linear-gradient(90deg, #f5c518, #ffd95a, #f5c518)" }} />
        <div className="h-[140px] sm:h-[180px] md:h-[220px]" />
      </section>

      <section className="bg-white border-b border-border">
        <div className="container-page py-8 sm:py-10 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#129199]">
            Faculty & Staff Directory
          </h1>
        </div>
      </section>


      <DeptSubNav slug={dept.slug} />

      <section className="container-page py-6">
        <Link
          to="/departments/$slug"
          params={{ slug: dept.slug }}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Back to {dept.name}
        </Link>
      </section>

      <section className="container-page pb-16">
        <FacultyDirectory slug={dept.slug} groups={{ teaching, technical, supporting }} />
      </section>
    </Layout>
  );
}
