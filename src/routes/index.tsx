import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { HomeHero } from "@/components/site/HomeHero";
import { Reveal, Counter } from "@/components/site/Reveal";
import heroImg from "@/assets/hero-campus.jpg";
import slide1 from "@/assets/slide-1.jpg.asset.json";
import brochure from "@/assets/college-brochure.pdf.asset.json";
import {
  ArrowRight, Calendar, MapPin, Clock,
  Microscope, Trophy, GraduationCap, BookOpen,
  CheckCircle2, FileText, Award, Users, Building2, Phone, Download,
} from "lucide-react";
import { RecruiterLogoGrid } from "@/components/site/RecruiterLogoGrid";
import { resolveAssetUrl } from "@/lib/assetUrl";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ATME College of Engineering — Mysuru | VTU Affiliated" },
      { name: "description", content: "ATME College of Engineering, Mysuru — AICTE approved, VTU affiliated, NAAC A+ accredited engineering college offering 11 UG and 2 PG programmes." },
      { property: "og:title", content: "ATME College of Engineering — Mysuru" },
      { property: "og:description", content: "Established 2010 · AICTE approved · VTU affiliated · NAAC A+ · NBA · NABL · QS I-Gauge Gold." },
      { property: "og:url", content: "https://atme.edu.in/" },
      { property: "og:image", content: heroImg },
    ],
    links: [
      { rel: "canonical", href: "https://atme.edu.in/" },
      { rel: "preload", as: "image", href: resolveAssetUrl(slide1.url), fetchpriority: "high" } as unknown as { rel: string; href: string },
    ],
  }),


  component: Home,
});

// Source: new.atme.edu.in homepage
const accreditations = [
  { src: "https://new.atme.edu.in/wp-content/uploads/2026/04/naac.png", t: "NAAC A+ Accredited" },
  { src: "https://new.atme.edu.in/wp-content/uploads/2026/04/nba.png",  t: "NBA Accredited" },
  { src: "https://new.atme.edu.in/wp-content/uploads/2026/04/aicte.png",t: "AICTE Approved" },
  { src: "https://new.atme.edu.in/wp-content/uploads/2026/04/qsi.png",  t: "QS I-GAUGE Rated" },
  { src: "https://new.atme.edu.in/wp-content/uploads/2026/04/nabl.png", t: "NABL Accredited" },
];

const ugCourses = [
  { t: "Civil Engineering", img: "https://new.atme.edu.in/wp-content/uploads/2026/04/civil.png", d: "ATME College of Engineering About the Department Infrastructure Staff Details Learning Resourcses...", slug: "ce" },
  { t: "Computer Science & Design", img: "https://new.atme.edu.in/wp-content/uploads/2026/04/CS-D.png", d: "ATME College of Engineering About the Department Staff Details Learning Resourcses Achievements...", slug: "csd" },
  { t: "Computer Science and Engineering", img: "https://new.atme.edu.in/wp-content/uploads/2026/04/CSE-1.png", d: "ATME College of Engineering About the Department Infrastructure Staff Details Learning Resourcses...", slug: "cse" },
  { t: "CSE — Artificial Intelligence & Machine Learning", img: "https://new.atme.edu.in/wp-content/uploads/2026/04/cs-ai-ml.png", d: "ATME College of Engineering About the Department Staff Details Learning Resourcses Calendar...", slug: "aiml" },
  { t: "CSE — Cyber Security", img: "https://new.atme.edu.in/wp-content/uploads/2026/04/CSE-cyber-security.png", d: "ATME College of Engineering About the Department Learning Resourcses Staff Details Calendar...", slug: "cy" },
  { t: "CSE — Data Science", img: "https://new.atme.edu.in/wp-content/uploads/2026/04/CSE-data-science.png", d: "ATME College of Engineering About the Department Learning Resourcses Innovative Teaching Learning...", slug: "ds" },
  { t: "Electrical & Electronics Engineering", img: "https://new.atme.edu.in/wp-content/uploads/2026/04/EC.png", d: "ATME College of Engineering About the Department Infrastructure Staff Details Learning Resources...", slug: "eee" },
  { t: "Electronics and Communication Engineering", img: "https://new.atme.edu.in/wp-content/uploads/2026/04/EC-1.png", d: "ATME College of Engineering About the Department Infrastructure Learning Resourcses Staff Details...", slug: "ece" },
  { t: "Mechanical Engineering", img: "https://new.atme.edu.in/wp-content/uploads/2026/04/mechanical.png", d: "ATME College of Engineering About the Department Infrastructure Faculty Details Learning Resourcses...", slug: "me" },
  { t: "Bachelor of Computer Applications (BCA)", img: "https://new.atme.edu.in/wp-content/uploads/2026/04/CSE-1.png", d: "ATME College of Engineering About the Department Staff Details Learning Resourcses...", slug: "mca" },
];
const pgCourses = [
  { t: "Master of Business Administration (MBA)", img: "https://new.atme.edu.in/wp-content/uploads/2026/04/mechanical.png", d: "ATME College of Engineering About the Department Staff Details Learning Resourcses...", slug: "mba" },
  { t: "Master of Computer Applications (MCA)", img: "https://new.atme.edu.in/wp-content/uploads/2026/04/CSE-1.png", d: "ATME College of Engineering About the Department Staff Details Learning Resourcses...", slug: "mca" },
];

type Level = "all" | "ug" | "pg";

const events: { img: string; t: string; d: string; href: string; level: Exclude<Level, "all"> }[] = [
  { level: "ug", img: "https://new.atme.edu.in/wp-content/uploads/2026/04/atmeya-2026.png", t: "ATMEYA 2K26", d: "April 10, 2026 · 09:00 AM – 03:40 PM · ATME College of Engineering, Mysuru", href: "https://new.atme.edu.in/events/atmeya-2k26/" },
  { level: "ug", img: "https://new.atme.edu.in/wp-content/uploads/2026/04/grammer.png", t: "Importance of Grammar in Languages, Maths and Basic Rights..", d: "April 25, 2026 · 09:00 AM – 03:40 PM · ATME College of Engineering, Mysuru", href: "https://new.atme.edu.in/events/state-level-technical-fest-urja-2k26/" },
  { level: "pg", img: "https://new.atme.edu.in/wp-content/uploads/2026/04/world-environment-month-celebration.jpg", t: "World Environment Month Celebration", d: "March 12, 2026 · 09:00 AM – 03:40 PM · ATME College of Engineering, Mysuru", href: "https://new.atme.edu.in/events/pranotsava/" },
  { level: "pg", img: "https://new.atme.edu.in/wp-content/uploads/2025/12/traffic-rules-1.jpg", t: "Report on Traffic Rules Awareness Program", d: "January 10, 2026 · 09:00 AM – 03:40 PM · ATME College of Engineering, Mysuru", href: "https://new.atme.edu.in/events/importance-of-grammar-in-languages-maths-and-basic-rights-of-the-citizens/" },
];

const notices: { t: string; d: string; level: Exclude<Level, "all"> }[] = [
  { level: "ug", t: "Circular — Parents-Teachers Meeting – 27/05/2025", d: "April 21, 2026" },
  { level: "ug", t: "Higher Semester Fees Circular – 14/07/2025",       d: "April 21, 2026" },
  { level: "pg", t: "Higher Semester Fees Circular – 28/08/2025",       d: "April 21, 2026" },
];


// Testimonials sourced from atme.edu.in homepage ("Our Happy Students")
const testimonials = [
  {
    n: "Suhas S",
    r: "CSE — Data Science · Associate Software Engineer, Light & Wonder",
    img: "https://old.atme.edu.in/wp-content/uploads/2026/06/suhas-120x120.png",
    q: "I sincerely thank the Career Guidance and Placement Department at ATME for their continuous support and guidance throughout my placement journey. The training on aptitude, technical skills, mock interviews, communication, resume building and interview preparation greatly enhanced my confidence and helped me secure my placement at Light & Wonder.",
  },
  {
    n: "Spoorthi S H",
    r: "ECE",
    img: "https://old.atme.edu.in/wp-content/uploads/2026/06/Spoorthi-S-H-120x120.jpg",
    q: "The aptitude training, technical workshops, mock interviews and career guidance programs at ATME greatly improved my confidence, communication and technical skills. I truly appreciate the dedicated efforts of the placement team and faculty in helping me prepare and secure a placement opportunity.",
  },
  {
    n: "Abhilash Hebbar M. U.",
    r: "CSE",
    img: "https://old.atme.edu.in/wp-content/uploads/2026/06/abhilash-120x120.jpg",
    q: "The CGP Department has been a great support throughout my placement journey — encouraging students to participate in technical programs and career development activities. Their continuous support and motivation played an important role in my growth and success.",
  },
  {
    n: "Vedaswi PV",
    r: "ECE",
    img: "https://old.atme.edu.in/wp-content/uploads/2026/01/VEDASWI-PV-.jpg",
    q: "The relationship between faculty and students is cordial. Here, faculties make the college what it is today with a positive attitude — knowledgeable, approachable and readily available to students in their needs.",
  },
  {
    n: "Sara Simran",
    r: "ECE",
    img: "https://old.atme.edu.in/wp-content/uploads/2026/01/Sara-Simran.jpg",
    q: "Quality of teaching is great and the faculty are reputed and understanding. The curriculum is in par with the latest trends in education and the faculty constantly improve with evolving practices. They are the spark that makes me study and stay ready for placements.",
  },
  {
    n: "Chingakham Romita Chanu",
    r: "ECE",
    img: "https://old.atme.edu.in/wp-content/uploads/2026/01/Chingakham-Romita-Chanu.jpg",
    q: "The teachers are great, enthusiastic and caring. They make sure students understand topics with real-world examples — the classes are interactive. They are concerned about students' careers and always go out of the way for those who need them.",
  },
];

// Placed students featured in Placement Excellence (sourced from new.atme.edu.in)
import vishwasImg from "@/assets/placed/vishwas.png";
import suhasImg from "@/assets/placed/suhas.png";
import shoaibImg from "@/assets/placed/shoaib.png";
import varshaImg from "@/assets/placed/varsha.png";
import rahulImg from "@/assets/placed/rahul.png";
import nikhilImg from "@/assets/placed/nikhil.png";
import charithaImg from "@/assets/placed/charitha.png";
import shivashankaraImg from "@/assets/placed/shivashankara.png";
const placedStudents = [
  { n: "Vishwas",                d: "CSE - Design",  c: "TE Connectivity",       p: "9.1 LPA",  img: vishwasImg },
  { n: "Suhas S",                d: "CSE - DS",      c: "Light & Wonder",        p: "8.5 LPA",  img: suhasImg },
  { n: "Mohammed Shoaib",        d: "CSE - AIML",    c: "EPAM Systems",          p: "8.48 LPA", img: shoaibImg },
  { n: "Varsha S",               d: "EEE",           c: "Skit.ai",               p: "8 LPA",    img: varshaImg },
  { n: "Rahul Prakash H P",      d: "CSE - Design",  c: "TCS",                   p: "7.09 LPA", img: rahulImg },
  { n: "Nikhil Kumar Purohit",   d: "CSE",           c: "TCS",                   p: "7.09 LPA", img: nikhilImg },
  { n: "Charitha Deepak",        d: "CSE - DS",      c: "Capillary Technologies",p: "6 LPA",    img: charithaImg },
  { n: "Shivashankara Murthy M", d: "CSE",           c: "TCS",                   p: "7.09 LPA", img: shivashankaraImg },
];

// Real top recruiters (Clearbit Logo API → live brand logos)
const recruiters = [
  { n: "Google",          d: "google.com",          bg: "bg-white" },
  { n: "Microsoft",       d: "microsoft.com",       bg: "bg-white" },
  { n: "Amazon",          d: "amazon.com",          bg: "bg-[#fff7ec]" },
  { n: "Infosys",         d: "infosys.com",         bg: "bg-[#eaf4ff]" },
  { n: "TCS",             d: "tcs.com",             bg: "bg-[#eef2ff]" },
  { n: "Wipro",           d: "wipro.com",           bg: "bg-[#f4ecff]" },
  { n: "IBM",             d: "ibm.com",             bg: "bg-[#eef6ff]" },
  { n: "Cognizant",       d: "cognizant.com",       bg: "bg-[#eaf5ff]" },
  { n: "Capgemini",       d: "capgemini.com",       bg: "bg-[#eef8ff]" },
  { n: "Accenture",       d: "accenture.com",       bg: "bg-[#f3ecff]" },
  { n: "HCL Tech",        d: "hcltech.com",         bg: "bg-[#eaf5ff]" },
  { n: "Tech Mahindra",   d: "techmahindra.com",    bg: "bg-[#fff0ee]" },
  { n: "L&T",             d: "larsentoubro.com",    bg: "bg-[#fff5e6]" },
  { n: "Bosch",           d: "bosch.com",           bg: "bg-[#fff0f1]" },
  { n: "ABB",             d: "abb.com",             bg: "bg-[#ffeded]" },
  { n: "Tata Motors",     d: "tatamotors.com",      bg: "bg-[#eaf4ff]" },
  { n: "Mahindra",        d: "mahindra.com",        bg: "bg-[#fff5e6]" },
  { n: "EPAM Systems",    d: "epam.com",            bg: "bg-[#f0f4ff]" },
  { n: "TE Connectivity", d: "te.com",              bg: "bg-[#fff0ec]" },
  { n: "Capillary",       d: "capillarytech.com",   bg: "bg-[#fef0ff]" },
  { n: "Mindtree",        d: "mindtree.com",        bg: "bg-[#fff7ec]" },
  { n: "Mphasis",         d: "mphasis.com",         bg: "bg-[#ecf6ff]" },
  { n: "Genpact",         d: "genpact.com",         bg: "bg-[#fff0f0]" },
  { n: "Hexaware",        d: "hexaware.com",        bg: "bg-[#fff3ec]" },
];

// "Begin Your Journey" → admissions flow (mirrors atme-apply-now reference)
const journeySteps = [
  { n: "01", t: "Check Eligibility",   d: "10+2 with Physics, Chemistry, Maths. Min 45% marks (40% for SC/ST).", icon: CheckCircle2 },
  { n: "02", t: "Fill Application",    d: "Complete the online form on the VTU/KCET portal or visit our admissions office.", icon: FileText },
  { n: "03", t: "Entrance & Merit",    d: "KCET / COMEDK / JEE ranks considered. Management quota available.", icon: Award },
  { n: "04", t: "Counselling & Join",  d: "Attend allotment counselling, submit documents, and confirm your seat.", icon: Users },
];

const programsOffered = [
  { tag: "UG",       t: "B.E. / B.Tech", d: "4 Years", intake: "Intake: 60–180", accent: "from-[#1eb59b] to-[#0e7d6a]" },
  { tag: "PG",       t: "M.Tech",        d: "2 Years", intake: "Intake: 18–24",  accent: "from-[#f59e0b] to-[#d97706]" },
  { tag: "PG",       t: "MBA",           d: "2 Years", intake: "Intake: 60",     accent: "from-[#3b82f6] to-[#1d4ed8]" },
  { tag: "Research", t: "Ph.D.",         d: "3–5 Years", intake: "Intake: Limited", accent: "from-[#a855f7] to-[#7e22ce]" },
];

const keyDates = [
  { t: "KCET Applications Open",      d: "Jan 15, 2025",  s: "OPEN", tone: "bg-emerald-500 text-white" },
  { t: "COMEDK UGET Exam",            d: "May 11, 2025",  s: "SOON", tone: "bg-amber-500 text-white" },
  { t: "Management Quota Applications", d: "June 1, 2025", s: "SOON", tone: "bg-amber-500 text-white" },
  { t: "Classes Commence",            d: "Aug 1, 2025",   s: "SOON", tone: "bg-amber-500 text-white" },
];




function Home() {
  const [tab, setTab] = useState<"ug" | "pg">("ug");
  const [newsFilter, setNewsFilter] = useState<Level>("all");
  const courses = tab === "ug" ? ugCourses : pgCourses;
  const filteredEvents = events.filter((e) => newsFilter === "all" || e.level === newsFilter);
  const filteredNotices = notices.filter((n) => newsFilter === "all" || n.level === newsFilter);


  return (
    <Layout>
      <h1 className="sr-only">ATME College of Engineering — Top Engineering College in Mysuru</h1>
      <HomeHero />


      {/* WELCOME / ABOUT */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <div className="text-center">
              <p className="inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-widest text-[#f5c518] uppercase">🎓 Welcome To</p>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight break-words text-[#129199]">
                ATME College of Engineering
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-2 gap-10 items-center">
            <Reveal delay={100}>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg text-justify hyphens-auto">
                  ATME College of Engineering Mysuru, established in 2010, is recognized by AICTE New Delhi and affiliated to Visvesvaraya Technological University, Belagavi, Karnataka. The college offers 11 undergraduate programs and two postgraduate programs. ATMECE has been accredited by the National Board of Accreditation (NBA). ATMECE is NABL accredited under ISO/IEC 17025:2017 for Civil Engineering Laboratory.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg text-justify hyphens-auto">
                  The college has been honored as "The Best Emerging Private Engineering College in Karnataka" along with "Most Promising Upcoming Private Engineering Colleges in Karnataka" for two consecutive years. It also holds QS I-Gauge Gold Ranking status and has been recognized as one of the "Swachh Institutes of the Country." ATMECE is NAAC accredited with an A+ grade.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-muted ring-1 ring-border">
                <iframe
                  src="https://www.youtube.com/embed/miq_BqPfA_M?rel=0"
                  title="ATME College of Engineering"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={250}>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 text-center">
              <div className="rounded-2xl border bg-white p-4 sm:p-6 min-w-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary break-words leading-tight"><Counter to={150} />+</div>
                <h3 className="mt-2 text-xs sm:text-sm font-semibold text-[#129199] font-display">Qualified Faculties</h3>
              </div>
              <div className="rounded-2xl border bg-white p-4 sm:p-6 min-w-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary break-words leading-tight"><Counter to={2800} />+</div>
                <h3 className="mt-2 text-xs sm:text-sm font-semibold text-[#129199] font-display">Students Placed</h3>
              </div>
              <div className="rounded-2xl border bg-white p-4 sm:p-6 min-w-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary break-words leading-tight"><Counter to={150} />+</div>
                <h3 className="mt-2 text-xs sm:text-sm font-semibold text-[#129199] font-display">Companies Visited</h3>
              </div>
              <div className="rounded-2xl border bg-white p-4 sm:p-6 min-w-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary break-words leading-tight"><Counter to={5000} />+</div>
                <h3 className="mt-2 text-xs sm:text-sm font-semibold text-[#129199] font-display">Students Graduated</h3>
              </div>
              <div className="rounded-2xl border bg-white p-4 sm:p-6 col-span-2 sm:col-span-3 lg:col-span-1 min-w-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary break-words leading-tight">₹<Counter to={12} /> LPA</div>
                <h3 className="mt-2 text-xs sm:text-sm font-semibold text-[#129199] font-display">Highest Package</h3>
              </div>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex justify-center">
              <a
                href={resolveAssetUrl(brochure.url)}
                download
                className="inline-flex items-center gap-2 rounded-full bg-[#129199] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#0f7a82] transition"
              >
                <Download className="h-4 w-4" />
                Download College Brochure (2026-27)
              </a>
            </div>
          </Reveal>
        </div>
      </section>



      {/* ACCREDITATIONS */}
      <section className="py-16 md:py-20 bg-muted/40 border-y">
        <div className="container mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center tracking-tight text-[#129199]">Accreditations &amp; Rankings</h2>
            <p className="mt-3 text-center text-muted-foreground">Recognised for academic excellence and quality assurance.</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {accreditations.map((a, i) => (
              <Reveal key={a.t} delay={i * 80}>
                <div className="rounded-2xl border bg-card p-6 flex flex-col items-center text-center hover:shadow-lg transition">
                  <img src={a.src} alt={a.t} className="h-20 w-20 object-contain" />
                  <h5 className="mt-4 font-semibold text-sm">{a.t}</h5>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES OFFERED */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="flex items-center gap-2 justify-center text-[#f5c518]">
              <BookOpen className="h-5 w-5" />
              <span className="text-sm font-semibold tracking-widest uppercase">Courses Offered at ATME</span>
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-center tracking-tight text-[#129199]">Departments</h2>
            <p className="mt-3 text-center text-muted-foreground">Explore our undergraduate and postgraduate programmes.</p>
          </Reveal>

          <div className="mt-8 flex justify-center gap-2">
            <button onClick={() => setTab("ug")} className={`px-5 py-2 rounded-full text-sm font-medium transition ${tab === "ug" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/70"}`}>Undergraduate</button>
            <button onClick={() => setTab("pg")} className={`px-5 py-2 rounded-full text-sm font-medium transition ${tab === "pg" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/70"}`}>Postgraduate</button>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {courses.map((c, i) => (
              <Reveal key={c.slug} delay={i * 60} className="h-full">
                <Link to="/departments/$slug" params={{ slug: c.slug }} className="h-full flex flex-col group rounded-2xl overflow-hidden border bg-card hover:shadow-xl transition-all hover:-translate-y-1 active:-translate-y-1">
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img src={c.img} alt={c.t} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex-1 flex items-center justify-center text-center">
                      <h4 className="font-semibold text-lg leading-snug group-hover:text-primary transition-colors">{c.t}</h4>
                    </div>
                    <div className="mt-3 flex items-center justify-center gap-1 text-sm font-semibold text-[#0e7a80] group-hover:text-[#0e9aa0] transition-colors">
                      View Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="py-16 md:py-24 bg-secondary border-y">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-[#f5c518]">
              <Microscope className="h-5 w-5" />
              <span className="text-sm font-semibold tracking-widest uppercase">Research &amp; Innovation</span>
            </div>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-[#129199]">Pushing the Frontiers of Knowledge</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Faculty and students at ATME are solving tomorrow's challenges through cutting-edge research.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="rounded-2xl border bg-card p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary"><Counter to={300} />+</div>
                <p className="mt-2 text-sm text-muted-foreground">Research Papers</p>
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary">₹5+ Cr</div>
                <p className="mt-2 text-sm text-muted-foreground">External Funding</p>
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary"><Counter to={25} />+</div>
                <p className="mt-2 text-sm text-muted-foreground">Industry MoUs</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BEGIN YOUR JOURNEY — admissions experience (ref: atme-apply-now) */}
      <section className="py-16 md:py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none [background:radial-gradient(circle_at_20%_20%,#fff_0,transparent_40%),radial-gradient(circle_at_80%_70%,#fff_0,transparent_40%)]" />
        <div className="container mx-auto px-4 max-w-6xl relative">
          <Reveal>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-wider uppercase">
                🎓 Admissions 2026–27
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">Begin Your Journey at ATME</h2>
              <p className="mt-4 text-white/85 text-lg max-w-2xl mx-auto">
                Join thousands of students who chose ATME for a transformative engineering education.
              </p>
            </div>
          </Reveal>

          {/* HOW TO APPLY — 4 steps */}
          <div className="mt-14">
            <h3 className="text-center text-xl md:text-2xl font-semibold mb-8">How to Apply</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {journeySteps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.n} delay={i * 90}>
                    <div className="h-full rounded-2xl bg-white text-foreground border border-white/30 shadow-lg p-6 hover:-translate-y-1 active:-translate-y-1 hover:shadow-xl transition-all">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold tracking-widest text-amber-600">STEP {s.n}</span>
                        <div className="h-10 w-10 rounded-xl bg-amber-100 grid place-items-center">
                          <Icon className="h-5 w-5 text-amber-600" />
                        </div>
                      </div>
                      <h4 className="mt-4 text-lg font-semibold text-[#129199]">{s.t}</h4>
                      <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{s.d}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* PROGRAMS OFFERED */}
          <div className="mt-16">
            <h3 className="text-center text-xl md:text-2xl font-semibold mb-8">Programs Offered</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {programsOffered.map((p, i) => (
                <Reveal key={p.t} delay={i * 90}>
                  <div className="group relative h-full rounded-2xl p-6 bg-white text-foreground shadow-xl overflow-hidden hover:-translate-y-2 active:-translate-y-1 hover:shadow-2xl transition-all duration-300 ring-1 ring-border">
                    <div className={`pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-2xl group-hover:scale-150 transition-transform duration-500`} />
                    <span className={`relative inline-flex rounded-full bg-gradient-to-br ${p.accent} text-white px-2.5 py-0.5 text-[11px] font-bold tracking-wider shadow`}>{p.tag}</span>
                    <h4 className="relative mt-4 text-xl font-bold text-[#129199]">{p.t}</h4>
                    <p className="relative mt-1 text-foreground/80">{p.d}</p>
                    <p className="relative mt-3 text-xs uppercase tracking-wider text-muted-foreground">{p.intake}</p>
                    <div className={`relative mt-4 h-0.5 w-10 bg-gradient-to-r ${p.accent} group-hover:w-full transition-all duration-500`} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* KEY DATES + APPLY CALLOUT */}
          <div className="mt-16 grid lg:grid-cols-[1.4fr_1fr] gap-6">
            <Reveal>
              <div className="rounded-2xl bg-white text-foreground p-6 md:p-8 shadow-2xl">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">Key Dates 2026–27</h3>
                <ul className="mt-5 divide-y">
                  {keyDates.map((k) => (
                    <li key={k.t} className="flex items-center justify-between py-3.5">
                      <div>
                        <p className="font-semibold text-sm">{k.t}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1"><Calendar className="h-3 w-3" />{k.d}</p>
                      </div>
                      <span className={`text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full ${k.tone}`}>{k.s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-2xl bg-gradient-to-br from-[#129199] to-[#0e686f] text-white p-6 md:p-8 shadow-2xl flex flex-col h-full ring-1 ring-white/15">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">Apply Now for 2026–27</h3>
                <p className="mt-2 text-white/90 text-sm">Seats filling fast. Don't miss out!</p>
                <div className="mt-auto pt-6 flex flex-col gap-3">
                  <a href="https://new.atme.edu.in/admissions/" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#ea580c] px-5 py-3 text-sm font-semibold hover:scale-[1.02] transition">
                    <GraduationCap className="h-4 w-4" /> Apply Online
                  </a>
                  <a href="tel:+918212954081" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 border border-white/40 px-5 py-3 text-sm font-semibold hover:bg-white/25 transition">
                    <Phone className="h-4 w-4" /> +91-821-2954081
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ADMISSIONS OPEN — form */}
      <section className="py-16 md:py-24 bg-background">

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center max-w-6xl">
          <Reveal>
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold tracking-widest text-[#f5c518] uppercase">Apply Today Now</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-[#129199]">Admissions Open Now</h2>
              <p className="mt-4 text-muted-foreground text-lg">Enroll now to begin your transformative academic journey with us.</p>
              <a href="https://new.atme.edu.in/admissions/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition">
                Apply Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <form className="rounded-2xl border bg-card p-6 md:p-8 space-y-4 shadow-sm">
              <h4 className="font-semibold text-lg">Application Form</h4>
              <input type="text" placeholder="Your name" className="w-full rounded-lg border bg-background px-4 py-3 text-sm" />
              <input type="email" placeholder="Your email" className="w-full rounded-lg border bg-background px-4 py-3 text-sm" />
              <input type="text" placeholder="Subject" className="w-full rounded-lg border bg-background px-4 py-3 text-sm" />
              <textarea placeholder="Your message (optional)" rows={4} className="w-full rounded-lg border bg-background px-4 py-3 text-sm" />
              <button type="button" className="w-full rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition">Submit Application</button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* WHAT'S HAPPENING */}
      <section className="py-16 md:py-24 bg-muted/40 border-y">
        <div className="container mx-auto px-4">
          <Reveal>
            <p className="text-sm font-semibold tracking-widest text-[#f5c518] uppercase text-center">Campus Life</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-center tracking-tight text-[#129199]">News &amp; Events</h2>
            <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">Festivals, hackathons, workshops, and sporting events — life at ATME is always vibrant.</p>
          </Reveal>

          <div className="mt-8 flex justify-center gap-2">
            {(["all", "ug", "pg"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setNewsFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${newsFilter === f ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/70"}`}
              >
                {f === "all" ? "All" : f.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {filteredEvents.length === 0 && (
                <p className="text-sm text-muted-foreground col-span-full text-center py-8">No events for this filter.</p>
              )}
              {filteredEvents.map((e, i) => (
                <Reveal key={e.t} delay={i * 80}>
                  <a href={e.href} className="block group rounded-2xl overflow-hidden border bg-card hover:shadow-lg transition">
                    <div className="aspect-[16/10] overflow-hidden bg-white relative flex items-center justify-center">
                      <img src={e.img} alt={e.t} loading="lazy" className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" />
                      <span className="absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase bg-primary text-primary-foreground px-2 py-1 rounded">{e.level}</span>
                    </div>
                    <div className="p-5">
                      <h6 className="font-semibold leading-snug group-hover:text-primary transition-colors">{e.t}</h6>
                      <p className="mt-2 text-xs text-muted-foreground flex items-start gap-1 !text-left" style={{ textAlign: "left" }}>
                        <Calendar className="h-3.5 w-3.5 mt-0.5 shrink-0" />{e.d}
                      </p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
            <Reveal delay={150}>
              <div className="rounded-2xl border bg-card p-6">
                <h4 className="font-semibold text-lg">Notices</h4>
                <ul className="mt-5 space-y-5">
                  {filteredNotices.length === 0 && (
                    <li className="text-sm text-muted-foreground">No notices for this filter.</li>
                  )}
                  {filteredNotices.map((n) => (
                    <li key={n.t} className="border-b last:border-0 pb-4 last:pb-0">
                      <div className="flex items-start gap-2">
                        <span className="text-[10px] font-bold tracking-wider uppercase bg-primary/10 text-primary px-2 py-0.5 rounded shrink-0 mt-0.5">{n.level}</span>
                        <h5 className="font-medium text-sm leading-snug">{n.t}</h5>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" />{n.d}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* PLACEMENT EXCELLENCE */}
      <section className="py-16 md:py-24 bg-secondary border-y">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-[#f5c518]">
                <Trophy className="h-5 w-5" />
                <span className="text-sm font-semibold tracking-widest uppercase">Placement Excellence</span>
              </div>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-[#129199]">Careers That Begin Here</h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                Our students land offers at India's and the world's most prestigious organizations through dedicated
                training, mentorship and an unmatched recruiter network.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="rounded-2xl border bg-card p-6 text-center"><div className="text-3xl md:text-4xl font-bold text-primary"><Counter to={92} />%</div><p className="mt-2 text-xs text-muted-foreground">Placement Rate</p></div>
            <div className="rounded-2xl border bg-card p-6 text-center"><div className="text-3xl md:text-4xl font-bold text-primary">₹<Counter to={12} /></div><p className="mt-2 text-xs text-muted-foreground">Highest LPA</p></div>
            <div className="rounded-2xl border bg-card p-6 text-center"><div className="text-3xl md:text-4xl font-bold text-primary"><Counter to={250} />+</div><p className="mt-2 text-xs text-muted-foreground">Recruiters</p></div>
            <div className="rounded-2xl border bg-card p-6 text-center"><div className="text-3xl md:text-4xl font-bold text-primary"><Counter to={2800} />+</div><p className="mt-2 text-xs text-muted-foreground">Students Placed</p></div>
          </div>

          <Reveal delay={150}>
            <h3 className="mt-14 text-center text-xl md:text-2xl font-semibold tracking-tight">Meet a few of our recently placed students</h3>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {placedStudents.map((s, i) => (
              <Reveal key={`${s.n}-${i}`} delay={i * 40}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-56 overflow-hidden bg-secondary">
                    <img
                      src={s.img}
                      alt={s.n}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-contain object-top p-2 group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-primary/85 via-primary/40 to-transparent" />
                    <span className="absolute top-3 right-3 inline-flex items-center rounded-full bg-primary text-primary-foreground text-[11px] font-bold px-2.5 py-1 shadow-lg">
                      {s.p}
                    </span>
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

          {/* OUR RECRUITERS — real brand logos with names */}
          <div className="mt-16">
            <Reveal>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-[#f5c518] text-sm font-semibold tracking-widest uppercase">
                  <Building2 className="h-4 w-4" /> Our Recruiters
                </span>
                <h3 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">250+ companies hire from ATME every year</h3>
                <p className="mt-2 text-muted-foreground text-sm">A snapshot of the brands recruiting our talent across IT, core engineering, consulting and product.</p>
              </div>
            </Reveal>
            <div className="mt-8">
              <RecruiterLogoGrid limit={32} />
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                to="/placements"
                hash="recruiters"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                View all 250+ recruiters →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* HAPPY STUDENTS / TESTIMONIALS */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#f8fafc] via-[#ecfeff] to-[#f0fdfa] relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#129199]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="container mx-auto px-4 max-w-6xl relative">
          <Reveal>
            <p className="text-sm font-semibold tracking-widest text-[#f5c518] uppercase text-center">Testimonials</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-center tracking-tight text-[#129199]">
              Students Testimonials
            </h2>
            <p className="mt-4 text-center text-foreground/70 max-w-2xl mx-auto italic">
              Innovative Learning for the Future!
            </p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.n} delay={i * 80}>
                <figure className="h-full rounded-2xl bg-white border-2 border-[#129199]/15 p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 active:-translate-y-1 transition-all flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#129199] to-amber-400" />
                  <div className="flex flex-col items-center text-center">
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-[#129199] to-amber-400 p-[3px]">
                      <div className="relative flex h-full w-full items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#129199] to-amber-400 text-white font-bold text-xl overflow-hidden">
                        <span aria-hidden>{t.n.split(" ").map((w) => w[0]).slice(0, 2).join("")}</span>
                        {t.img && (
                          <img
                            src={t.img}
                            alt={t.n}
                            loading="lazy"
                            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        )}
                      </div>
                    </div>
                    <figcaption className="mt-3">
                      <h4 className="font-semibold leading-tight text-[#129199] text-base">{t.n}</h4>
                      <h5 className="text-xs text-foreground/70 mt-1 font-normal text-center">{t.r}</h5>
                    </figcaption>
                  </div>
                  <blockquote className="mt-5 text-sm text-foreground/80 italic leading-relaxed relative pl-5">
                    <span className="absolute left-0 top-0 text-3xl leading-none text-[#129199]/70 font-serif">“</span>
                    {t.q}
                  </blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
