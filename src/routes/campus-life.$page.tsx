import { createFileRoute, notFound } from "@tanstack/react-router";
import { ReactNode } from "react";
import { InfoPage } from "@/components/site/InfoPage";
import { PdfEmbed } from "@/components/site/PdfEmbed";
import { pdfFromAtmeUrl } from "@/data/pdfRewrite";
import { resolveAssetUrl } from "@/lib/assetUrl";

const PAGES: Record<string, { title: string; subtitle: string; intro: string; img?: string; sections?: { heading: string; body: ReactNode }[] }> = {
  atmeya:                  { title: "ATMEYA", subtitle: "The annual cultural fest of ATME", intro: "ATMEYA is the flagship cultural fest of ATME — three days of music, dance, theatre, fashion and gaming, drawing students from colleges across South India." },
  hostel: {
    title: "Hostel",
    subtitle: "Separate, secure on‑campus residences",
    intro: "Spacious, well‑ventilated rooms with 24×7 power and water backup, common rooms, study halls, mess and round‑the‑clock security in separate hostels for boys and girls.",
    sections: [
      {
        heading: "Hostel Policy",
        body: (
          <div className="not-prose mt-2">
            <PdfEmbed
              url="/__l5e/assets-v1/a0c500bd-26c5-4286-8c76-e910c5e0e5cd/ATMECE-HOSTEL-Rules-Regulation-V3-2025-26.pdf"
              title="ATMECE Hostel Rules &amp; Regulation 2025‑26"
              height={780}
            />
          </div>
        ),
      },
    ],
  },
  transportation: {
    title: "Transportation",
    subtitle: "Comprehensive bus routes across Mysuru",
    intro: "A fleet of buses covers all major neighbourhoods of Mysuru and surrounding towns, with GPS tracking and dedicated route coordinators.",
    sections: [
      {
        heading: "ATMECE Transportation Policy for Students",
        body: (
          <div className="not-prose mt-2">
            <PdfEmbed
              url="https://atme.edu.in/wp-content/uploads/2023/12/ATMECE-Transportation-Policy-for-Students.pdf"
              title="ATMECE Transportation Policy for Students"
              height={780}
            />
          </div>
        ),
      },
      {
        heading: "Bus Routes (According to Stage)",
        body: (
          <div className="not-prose mt-2">
            <PdfEmbed
              url="https://atme.edu.in/wp-content/uploads/2026/01/9-ROUTES-ACCORDING-TO-STAGE-Updated.pdf"
              title="Bus Routes (According to Stage)"
              height={780}
            />
          </div>
        ),
      },
    ],
  },
  security:                { title: "Campus Security", subtitle: "Round‑the‑clock safety on a closed campus", intro: "Trained security personnel, CCTV monitoring across academic blocks and hostels, and emergency response protocols keep the campus safe at all hours." },
  "wi-fi":                 {
    title: "Wi‑Fi",
    subtitle: "Campus‑wide gigabit wireless network",
    intro: "ATME's campus is blanketed by a high‑speed Wi‑Fi network that covers every academic block, library, hostel, cafeteria and common area — giving students and faculty seamless access to learning resources, research databases and collaboration tools from anywhere on campus.",
    sections: [
      { heading: "Network Infrastructure", body: "A 1 Gbps leased internet line is distributed through enterprise‑grade access points across the academic blocks, central library, hostels, auditoriums and outdoor common areas. Redundant uplinks and a 24×7 monitored core switch keep the network available round the clock." },
      { heading: "Separate VLANs", body: "Traffic is segmented into dedicated VLANs for academic, research, administration and guest use — so heavy student downloads never slow down lab work, exam portals or NPTEL streaming, and guest devices stay isolated from internal systems." },
      { heading: "Secure Access", body: "Students and staff connect with college credentials over WPA2‑Enterprise authentication. Web filtering blocks malicious and inappropriate content, and bandwidth policies ensure fair usage during peak hours." },
      { heading: "Coverage Highlights", body: "Classrooms and tutorial rooms · Central library and reading halls · Computer, electronics and research labs · Boys' and girls' hostels · Cafeteria, seminar halls and auditorium · Outdoor seating and entrance plaza." },
      { heading: "Support", body: "On‑campus IT support is available during working hours for connection issues, device onboarding and password resets — raise a ticket at the IT helpdesk in the central library block." },
    ],
  },
  "convenience-shop":      { title: "Convenience Shop", subtitle: "Daily essentials right on campus", intro: "Stationery, snacks, hygiene products and emergency supplies — the on‑campus store stocks what students need so they never have to leave the gates." },
  cafeteria:               { title: "Cafeteria", subtitle: "Hygienic, affordable, varied menus", intro: "Multi‑cuisine cafeterias serve North Indian, South Indian and continental fare with strict hygiene protocols and nutritionist‑approved menus." },
  "student-council":       { title: "Student Council", subtitle: "Elected student leadership", intro: "The Student Council represents the student body in academic, cultural and administrative matters, organising fests, drives and inter‑college events." },
  sports:                  { title: "Sports", subtitle: "Cricket, football, basketball and more", intro: "ATME's sports infrastructure includes a cricket ground, football field, basketball and volleyball courts, athletics track, and indoor facilities for table tennis, chess and carrom." },
  "language-lab":          { title: "Language Lab", subtitle: "Communication & soft‑skills training", intro: "A dedicated language lab equipped with industry‑standard software helps students refine their English communication, pronunciation and group discussion skills." },
  atm: {
    title: "ATM",
    subtitle: "On‑campus Canara Bank ATM",
    intro: "For the convenience of staff and students, the college has installed an ATM right inside the campus. Canara Bank operates this on‑campus ATM so that the ATME community can withdraw money and access basic banking services without having to step out of the gates.",
    sections: [
      { heading: "Operated By", body: "The ATM is operated by Canara Bank and is open to all account holders across banks for cash withdrawals and balance enquiries." },
      { heading: "Who Can Use It", body: "Faculty, non‑teaching staff and students of ATME — as well as visitors on campus — can use the ATM during regular campus hours." },
      { heading: "Why It Matters", body: "An on‑campus ATM means no detour to the city for cash, quick access during long lab hours or fest days, and a safer experience for students and hostellers within the secured campus perimeter." },
    ],
  },
  "seminar-hall-auditorium": { title: "Seminar Hall & Auditorium", subtitle: "Spaces for ideas and performances", intro: "Air‑conditioned seminar halls and a fully‑equipped auditorium host conferences, guest lectures, cultural performances and convocations." },
  "clubs-associations":    { title: "Clubs & Associations", subtitle: "Find your tribe", intro: "20+ student clubs span coding, robotics, photography, debate, dance, music, social service and more — every interest finds a home at ATME." },
  "green-campus":          { title: "Green Campus", subtitle: "Sustainability woven into daily life", intro: "Tree cover, rainwater harvesting, solar generation, waste segregation and a plastic‑free policy define ATME's commitment to a greener tomorrow." },
  "entrance-plan": {
    title: "Entrance Plan",
    subtitle: "Find your way to ATME",
    intro:
      "Located on the Mysore–Kanakapura–Bangalore road, the campus is easily reached by car, bus or two-wheeler, with ample parking at the entrance. The detailed campus entrance plan below shows the main gate, administrative block, parking, academic blocks, hostels, sports facilities and future expansion area.",
    sections: [
      {
        heading: "Campus Entrance Plan",
        body: (
          <div className="not-prose mt-2">
            <PdfEmbed
              url="https://new.atme.edu.in/wp-content/uploads/2026/04/Entrance-Plan.pdf"
              title="ATME Campus Entrance Plan"
              height={780}
            />
          </div>
        ),
      },
    ],
  },
  magazine:                { title: "Magazine", subtitle: "ATME's annual student publication", intro: "The annual magazine showcases student writing, art, research highlights and major achievements of the academic year." },
  mentoring: {
    title: "Student Mentoring",
    subtitle: "Encouraging and nurturing every student to excel",
    intro:
      "Student mentoring is an important regular activity at ATME aimed at encouraging and nurturing students to excel in academics and to help them in their overall development. Each faculty mentor is allotted 20–25 students and arranges a minimum of three mentoring sessions every semester — a monthly mentoring session, one before the examination and one after the announcement of results.",
    sections: [
      {
        heading: "Purpose of Mentoring",
        body: (
          <ul className="list-disc pl-6 space-y-1">
            <li>To understand students' learning ability in academics.</li>
            <li>To help the student work out a plan for solving their difficulties.</li>
            <li>To help the student know their interests, abilities and available opportunities.</li>
            <li>To encourage special talents and develop the right attitude.</li>
          </ul>
        ),
      },
      {
        heading: "Student Mentoring Process in AIMS",
        body: (
          <ul className="list-disc pl-6 space-y-2">
            <li>The mentor collects all the details pertaining to the students and keeps a record of attendance of all the courses of the mentoring group. The report comprises theory attendance, practical attendance and IA marks. Parents can contact the mentor at any time. The mentor arranges a meeting with parents whenever there are issues such as excessively low attendance or poor performance in examinations. The Head of the Department takes necessary actions for the suggestions/issues raised during the mentoring sessions.</li>
            <li>While interacting with the students during the mentoring session, their grievances are collected and suggestions are provided by the mentor. All these details are uploaded in AIMS for that particular student.</li>
            <li>In AIMS, at the time of mentoring, the faculty can view the attendance details and IA performance, and based on this the mentor provides suggestions or guidance.</li>
            <li>The overall student progress record is depicted in AIMS, which is used to provide suitable suggestions.</li>
            <li>The allotted students continue under the same faculty mentor until the completion of the programme.</li>
            <li>A mentor of a particular group takes care of the overall development of the students allotted to them from the 2nd year till graduation.</li>
            <li>Students are encouraged to express their views and suggestions for academic and other infrastructural improvements in the college. The Head of the Department takes necessary action to implement valid suggestions.</li>
          </ul>
        ),
      },
      {
        heading: "Other Concerns Discussed During Mentoring",
        body: (
          <ol className="list-decimal pl-6 space-y-1">
            <li>Academic pressures — lack of concentration and motivation for studies, underachievement, backlogs, exam stress and unhealthy competition.</li>
            <li>Loneliness and homesickness.</li>
            <li>Peer pressure.</li>
            <li>Procrastination.</li>
            <li>Low confidence and self-esteem.</li>
          </ol>
        ),
      },
      {
        heading: "Professional Counsellor",
        body: (
          <div className="space-y-4">
            <p>
              In addition to faculty mentors, ATME provides access to a professional counsellor for students who need confidential support on personal, emotional or psychological matters — ensuring that help goes beyond academics whenever a student needs it.
            </p>
            <div className="not-prose mt-4 overflow-hidden rounded-xl border border-[#f5c518]/60 shadow-md bg-white">
              <img
                src={resolveAssetUrl("/__l5e/assets-v1/9527ed99-2f0f-44c3-89ff-c03b199a8524/professional-counsellor-circular.png")}
                alt="ATMECE circular — Ms. Sharanya N appointed as Professional Counsellor (Ref. ATMECE/PS/2022-23/530, dated 28-07-2023)"
                className="block w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        ),
      },
      {
        heading: "Mentor Details",
        body: (
          <div className="not-prose mt-2">
            <p className="mb-3">Download the consolidated mentor–mentee allocation list for the current academic year:</p>
            <a
              href={pdfFromAtmeUrl("https://atme.edu.in/wp-content/uploads/2025/09/Mentor-Details.pdf")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#129199] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#0d3438]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              Download Mentor Details (PDF)
            </a>
          </div>
        ),
      },
    ],
  },
  "drinking-water-ro":     { title: "Drinking Water & RO", subtitle: "Safe, purified water everywhere", intro: "RO water purification systems serve every block and hostel, with periodic water quality testing." },
  "health-center":         { title: "Health Center", subtitle: "On‑campus medical care", intro: "A health centre staffed with qualified medical professionals attends to routine and emergency needs, with tie‑ups for hospital referrals." },
  "solar-rooftop-system":  { title: "Solar Rooftop System", subtitle: "Powering ATME with the sun", intro: "Rooftop photovoltaic arrays generate a substantial share of the campus's daytime electricity, reducing carbon footprint and energy costs." },
  "industry-labs":         { title: "Industry Labs", subtitle: "Built with — and used by — industry", intro: "Specialised labs set up in collaboration with leading companies expose students to current industry tools, workflows and certifications." },
  alumni:                  { title: "Alumni", subtitle: "30+ countries, one ATME family", intro: "ATME alumni serve in leading roles across India and abroad — a network that mentors current students, hosts guest lectures and recruits actively from the campus." },
};

export const Route = createFileRoute("/campus-life/$page")({
  loader: ({ params }) => {
    const page = PAGES[params.page];
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.page.title} — ATME Campus Life` },
            { name: "description", content: loaderData.page.intro.slice(0, 160) },
          ],
        }
      : { meta: [{ title: "Campus Life — ATME" }] },
  notFoundComponent: () => (
    <InfoPage title="Page not found" subtitle="This Campus Life page doesn't exist yet." />
  ),
  errorComponent: ({ error }) => (
    <InfoPage title="Something went wrong" subtitle={String(error)} />
  ),
  component: () => {
    const { page } = Route.useLoaderData();
    return <InfoPage eyebrow="Campus Life" title={page.title} subtitle={page.subtitle} intro={page.intro} sections={page.sections} />;
  },
});
