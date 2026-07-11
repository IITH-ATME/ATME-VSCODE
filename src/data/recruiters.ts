// Recruiter dataset — sourced from the official CGP Recruiters Logo sheet.
// Each entry = display name + brand domain (for favicon-based logo lookup) + tinted bg.
// Logo URL used at render time: https://www.google.com/s2/favicons?domain=<d>&sz=128
// (DuckDuckGo icons + text fallback applied in component.)

export type Recruiter = { n: string; d: string; bg: string };

const tints = [
  "bg-[#eef6ff]","bg-[#fff7ec]","bg-[#f4ecff]","bg-[#eaf5ff]","bg-[#fff0f1]",
  "bg-[#eaf4ff]","bg-[#fff5e6]","bg-[#f0f4ff]","bg-[#fff0ec]","bg-[#fef0ff]",
  "bg-[#ecf6ff]","bg-[#fff3ec]","bg-[#eef8ff]","bg-[#f3ecff]","bg-[#fff0ee]",
];
const t = (i: number) => tints[i % tints.length];

// Exact companies from CGP_Recruiters_Logo PDF — in the order they appear.
const list: { n: string; d: string }[] = [
  { n: "Akamai", d: "akamai.com" },
  { n: "Accenture", d: "accenture.com" },
  { n: "Lumos Learning", d: "lumoslearning.com" },
  { n: "Light & Wonder", d: "lnw.com" },
  { n: "PG Sentry", d: "pgsentry.com" },
  { n: "NNF Technologies", d: "nnftech.com" },
  { n: "Juspay", d: "juspay.in" },
  { n: "OneTrust", d: "onetrust.com" },
  { n: "Kasmo", d: "kasmo.co" },
  { n: "L7 Informatics", d: "l7informatics.com" },
  { n: "Nilaya Construction", d: "nilayaconstruction.com" },
  { n: "Onyx Systems", d: "onyxsystemsinc.com" },
  { n: "Eleation", d: "eleation.com" },
  { n: "FCi", d: "fci-cce.com" },
  { n: "Advance Estimating", d: "advanceestimating.com" },
  { n: "DiFacto Robotics & Automation", d: "difacto.com" },
  { n: "DevRev", d: "devrev.ai" },
  { n: "DeltaX", d: "deltax.com" },
  { n: "All Grow Technologies", d: "allgrowtechnologies.com" },
  { n: "IBM", d: "ibm.com" },
  { n: "Infosys", d: "infosys.com" },
  { n: "Capillary Technologies", d: "capillarytech.com" },
  { n: "Aptus", d: "aptusdc.in" },
  { n: "Cognizant", d: "cognizant.com" },
  { n: "Evobi Automations", d: "evobi.com" },
  { n: "TCS", d: "tcs.com" },
  { n: "CloudInvent", d: "cloudinvent.com" },
  { n: "TE Connectivity", d: "te.com" },
  { n: "Encora", d: "encora.com" },
  { n: "Cleanfix", d: "cleanfix.com" },
  { n: "Tech Mahindra", d: "techmahindra.com" },
  { n: "PRDC", d: "prdcinfotech.com" },
  { n: "Transform", d: "transformco.com" },
  { n: "JK Maini", d: "jkmaini.com" },
  { n: "Total Environment", d: "total-environment.com" },
  { n: "rProcess Outsourcing", d: "rprocess.in" },
  { n: "TAP Academy", d: "thetapacademy.com" },
  { n: "Vtiger", d: "vtiger.com" },
  { n: "Wafer Space", d: "waferspace.com" },
  { n: "Roboyo", d: "roboyo.global" },
  { n: "Towell Engineering", d: "towellengineering.com" },
  { n: "Skit.ai", d: "skit.ai" },
  { n: "SolarEdge", d: "solaredge.com" },
  { n: "Tata Elxsi", d: "tataelxsi.com" },
  { n: "Sobha Constructions", d: "sobha.com" },
  { n: "Veltrix", d: "veltrix.com" },
  { n: "Toyota Kirloskar", d: "toyotabharat.com" },
  { n: "Infrrd", d: "infrrd.ai" },
];

// --- Duplicate / tagline guard --------------------------------------------
// A logo on the recruiter sheet sometimes contains a sub-tagline (e.g.
// "PG Sentry — the tech people", "Cleanfix · Swiss Made Quality"). Those are
// NOT separate companies and must never become extra entries.
//
// Strategy:
//  1. Strip known tagline phrases from each name before comparison.
//  2. Normalise (lowercase, collapse non-alphanumerics) for the comparison key.
//  3. Also key by domain so two different display names pointing at the same
//     brand domain collapse to one entry.
//  4. Keep the first occurrence; log a warning for the rest in dev so future
//     additions surface duplicates early.

const TAGLINES = [
  "the tech people",
  "step up your skills",
  "swiss made quality",
  "from concept to creation",
  "next level now",
  "driving growth through estimating",
  "robotics and automation",
  "consultancy services",
  "outsourcing",
];

function stripTaglines(name: string): string {
  let n = name.toLowerCase();
  for (const tag of TAGLINES) n = n.replace(tag, "");
  return n;
}

function normaliseKey(name: string): string {
  return stripTaglines(name)
    .replace(/[^a-z0-9]+/g, "")
    .trim();
}

function dedupeRecruiters(items: { n: string; d: string }[]): { n: string; d: string }[] {
  const seenName = new Set<string>();
  const seenDomain = new Set<string>();
  const out: { n: string; d: string }[] = [];
  for (const r of items) {
    const nameKey = normaliseKey(r.n);
    const domainKey = r.d.toLowerCase().trim();
    if (!nameKey || !domainKey) continue;
    if (seenName.has(nameKey) || seenDomain.has(domainKey)) {
      if (import.meta.env?.DEV) {
        // eslint-disable-next-line no-console
        console.warn(`[recruiters] duplicate skipped: "${r.n}" (${r.d})`);
      }
      continue;
    }
    seenName.add(nameKey);
    seenDomain.add(domainKey);
    out.push(r);
  }
  return out;
}

const deduped = dedupeRecruiters(list);

export const recruiters: Recruiter[] = deduped.map((r, i) => ({ ...r, bg: t(i) }));
export const recruiterCount = recruiters.length;

