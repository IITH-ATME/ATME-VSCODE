// Single source of truth for the major section dropdowns.
// Auto-aligned with the live new.atme.edu.in menu.

export type NavLink = {
  label: string;
  to?: string;
  params?: Record<string, string>;
  href?: string;
  slug?: string;
  desc?: string;
};

export type NavGroup = { heading: string; links: NavLink[] };
export type NavColumn = { heading: string; links: NavLink[]; groups?: NavGroup[]; width?: string };

export type NavSection = {
  key: "about" | "departments" | "research" | "admissions" | "administration" | "placements" | "campus";
  label: string;
  hub?: string;
  blurb?: string;
  columns: NavColumn[];
};

const P = (slug: string, label: string, desc?: string): NavLink => ({
  label, slug, desc, to: "/p/$", params: { _splat: slug },
});

export const ABOUT: NavSection = {
  key: "about",
  label: "About us",
  hub: "/about",
  blurb: "ATME — vision, governance, leadership and accreditations.",
  columns: [

    { heading: "About us", links: [
      P("about-us/about-college", "About College"),
      P("atme-trust", "About Trust"),
      P("vision-mission", "Vision & Mission"),
      P("about-us/governing-council-gc", "Governing Council (GC)"),
      P("about-us/chairmans-message", "Chairman's Message"),
      
      P("about-us/academic-council-ac", "Academic Council (AC)"),
      P("about-us/statutory-declaration-and-undertaking", "Statutory Declaration and Undertaking"),
    ]},

    { heading: "Principal", links: [
      P("about-principal", "About Principal"),
      P("principal-message", "Principal Message"),
    ], groups: [
      { heading: "Deans", links: [
        P("atme-research/dean-research-message", "Dean Research"),
        P("atme-research/dean-student-affairs", "Dean Student Affairs"),
        P("dean-academics", "Dean Academics"),
      ]},
    ]},
    { heading: "Affiliations & Approvals", links: [
      P("nabl", "NABL"),
      P("naac", "NAAC"),
      P("aishe", "AISHE"),
      P("ariia-2021", "ARIIA 2021"),
      P("aicte", "AICTE"),
      P("coe-vtu", "VTU"),
      P("gok-recognition-letter", "GOK-Recognition Letter"),
      P("nba-approval", "NBA approval"),
      P("qs-i-gauge", "QS I-GAUGE"),
      P("iso-certification", "ISO Certification"),
      { label: "Mandatory Disclosure", to: "/mandatory-disclosure" },
    ]}
  ],
};

export const DEPARTMENTS_NAV: NavSection = {
  key: "departments",
  label: "Departments",
  hub: "/departments",
  columns: [
    { heading: "UG Programmes", width: "minmax(260px, 1.4fr)", links: [
      { label: "Civil Engineering", to: "/departments/$slug", params: { slug: "ce" } },
      { label: "Computer Science and Engineering", to: "/departments/$slug", params: { slug: "cse" } },
      { label: "CSE — Data Science", to: "/departments/$slug", params: { slug: "ds" } },
      { label: "CSE — AI & Machine Learning", to: "/departments/$slug", params: { slug: "aiml" } },
      { label: "Computer Science & Design", to: "/departments/$slug", params: { slug: "csd" } },
      { label: "CSE — Cyber Security", to: "/departments/$slug", params: { slug: "cy" } },
      { label: "Electronics and Communication Engineering", to: "/departments/$slug", params: { slug: "ece" } },
      { label: "Electrical & Electronics Engineering", to: "/departments/$slug", params: { slug: "eee" } },
      { label: "Mechanical Engineering", to: "/departments/$slug", params: { slug: "me" } },
      { label: "Bachelor of Computer Applications", to: "/departments/$slug", params: { slug: "bca" } },
    ]},
    { heading: "PG Programmes", width: "minmax(160px, 0.8fr)", links: [
      { label: "MBA", to: "/departments/$slug", params: { slug: "mba" } },
      { label: "MCA", to: "/departments/$slug", params: { slug: "mca" } },
    ], groups: [
      { heading: "Basic Sciences", links: [
        { label: "Mathematics", to: "/departments/$slug", params: { slug: "mathematics" } },
        { label: "Physics", to: "/departments/$slug", params: { slug: "physics" } },
        { label: "Chemistry", to: "/departments/$slug", params: { slug: "chemistry" } },
        { label: "Humanities", to: "/departments/$slug", params: { slug: "humanities" } },
      ]},
    ]},
    { heading: "Academic Programmes", width: "minmax(170px, 0.8fr)", links: [
      { label: "VTU Honor Degree", to: "/vtu-honor-degree" },
      { label: "VTU Minor Degree", to: "/vtu-minor-degree" },
    ], groups: [
      { heading: "Student Life", links: [
        P("nss-unit", "NSS Unit"),
        { label: "Library", to: "/p/$", params: { _splat: "library-3/library" } },
        { label: "Sports", to: "/sports" },
      ]},
    ]},
  ],
};

export const RESEARCH: NavSection = {
  key: "research",
  label: "Research",
  hub: "/research",
  blurb: "Research initiatives, funding, publications and centres at ATME.",
  columns: [

    { heading: "Research", links: [
      P("atme-research/about-research", "About Research"),
      P("atme-research/dean-research-message", "Dean Research"),
      P("dravya-centre-for-advanced-materials-cam", "DRAVYA – Centre for Advanced Materials (CAM)"),
      P("rpc-committee", "RPC Committee"),
      P("atme-research/research-centers", "Research Centers"),
      P("research-incentives", "Research Incentives"),
      P("ipr", "IPR"),
      P("atme-research/funded-research-projects", "Funded Research Projects"),
      P("atme-research/publications", "Publications"),
      P("mou-with-institution-industry-research-centers", "MOU with Institution, Industry & Research Centers"),
      P("call-for-research-proposals-conferences-and-sponsorships", "Call For Research Proposals, Conferences and Sponsorships"),
    ]}
  ],
};

export const ADMISSIONS: NavSection = {
  key: "admissions",
  label: "Admissions",
  hub: "/admissions",
  blurb: "Eligibility, process, fees, scholarships and student support.",
  columns: [

    { heading: "Admissions", links: [
      P("admissions/general-information", "General Information"),
      P("course-information", "Course Information"),
      P("admission-process", "Admission Process"),
      P("admissions/fee-structure", "Fee Structure"),
      P("admissions/enrollment", "Enrollment"),
      P("admissions/admission-policy", "Admission Policy"),
      P("admissions/reservation-in-student-admission-policy", "Reservation in Student Admission Policy"),
      P("admissions/atme-cut-off-ranks-for-the-academic-year-2025-26", "Cut Off Ranks"),
      P("application", "Application"),
      P("scholarships", "Scholarships"),
      P("admissions/admission-queries", "Admission Queries"),
      P("admissions/anti-ragging-policy", "Anti Ragging Policy"),
    ]}
  ],
};

export const ADMINISTRATION: NavSection = {
  key: "administration",
  label: "Administration",
  hub: "/administration",
  blurb: "Deans, committees, cells and institutional policies.",
  columns: [

    { heading: "Administration", links: [
      P("organization-structure", "Organization Structure"),
      P("administration-staff", "Administration Staff"),
      P("list-of-committees", "Institutional Committees"),
      P("policies", "Policies"),
      P("administration/governance-institutional-support-and-financial-resources", "Governance, Institutional Support & Financial Resources"),
      P("student-support-system", "Student Support System"),
      P("administration/calendar-of-events-coe", "Calendar of Events (COE)"),
      P("financial-audit", "Financial Audit"),
      P("iqac", "IQAC"),
      P("iic", "Institution's Innovation Council (IIC)"),
      P("national-innovations-and-start-up-policy-nisp", "National Innovations and Start-up Policy (NISP)"),
      P("a-ims", "A-IMS"),
      P("academic-timetable-and-teaching-load", "Academic Timetable and Teaching Load"),
    ]},
    { heading: "Staff", links: [
      P("administration/pf-esi-gratuity-insurance", "PF, ESI, Gratuity & Insurance"),
      P("incentives-for-staff", "Incentives for Staff"),
      P("leave-as-per-karnataka-civil-service-rules-kcsr", "Leave As Per Karnataka Civil Service Rules (KCSR)"),
      P("faculty-appraisal", "Faculty Appraisal"),
      P("best-teacher-awards", "Best Teacher Awards"),
    ]}
  ],
};

export const PLACEMENTS: NavSection = {
  key: "placements",
  label: "Placements",
  hub: "/placements",
  blurb: "Career Guidance & Placement cell, training, statistics and outcomes.",
  columns: [

    { heading: "Career Guidance", links: [
      P("career-guidance-and-placement-cell", "Career Guidance & Placement Cell"),
      P("career-path", "Career Path"),
      P("placement-team", "Placement Team"),
      P("placement-policy", "Placement Policy"),
      P("career-guidance-and-placement-cell/career-guidance-placement-cell-infrastructure", "Infrastructure"),
    ]},
    { heading: "Training & Recruiters", links: [
      P("placement-training", "Placement Training"),
      P("placement-training-domain-syllabus", "Training Domain Syllabus"),
      P("our-recruiters", "Our Recruiters"),
      P("placement-statistics", "Placement Statistics"),
      { label: "Placement Preparation", to: "/resources/placement" },
    ]},


    { heading: "Entrepreneurship", links: [
      P("career-guidance-and-placement-cell/entrepreneurship-development-cell", "Entrepreneurship Development Cell"),
    ]}
  ],
};

export const CAMPUS_LIFE: NavSection = {
  key: "campus",
  label: "Campus Life",
  hub: "/campus-life",
  blurb: "Campus, sports, clubs, NSS, hostel and student life at ATME.",
  columns: [
    { heading: "Campus Life", links: [
      { label: "Campus Life Overview", to: "/campus-life" },
    ]},
  ],
};

export const ALL_SECTIONS: NavSection[] = [
  ABOUT, DEPARTMENTS_NAV, RESEARCH, ADMISSIONS, ADMINISTRATION, PLACEMENTS, CAMPUS_LIFE,
];

export function findSectionForSlug(slug: string): { section: NavSection; column: NavColumn; link: NavLink } | null {
  for (const section of ALL_SECTIONS) {
    for (const column of section.columns) {
      for (const link of column.links) {
        if (link.slug === slug) return { section, column, link };
      }
    }
  }
  return null;
}
