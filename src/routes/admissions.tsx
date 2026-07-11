import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHero } from "@/components/site/Layout";
import { SECTION_BANNER } from "@/lib/sectionBanners";
import { CheckCircle2, FileText, Phone, Mail, ArrowRight, Send } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const DEPT_OPTIONS = ["CSE", "ISE", "AIML", "ECE", "EEE", "ME", "Civil", "MBA", "MCA"] as const;

const ADMISSIONS_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is eligible to apply to ATME College of Engineering?",
      acceptedAnswer: { "@type": "Answer", text: "Pass in 10+2 (PUC / equivalent) with Physics and Mathematics as compulsory subjects; minimum 45% aggregate (40% for SC/ST/OBC); valid KCET / COMEDK / JEE Main score as applicable. Lateral entry available for Diploma holders into the 2nd year of BE under VTU norms." },
    },
    {
      "@type": "Question",
      name: "How do I apply for admission to ATME?",
      acceptedAnswer: { "@type": "Answer", text: "Download the brochure, appear for KCET / COMEDK / JEE Main, participate in centralised counselling and select ATME — or apply directly under the management quota. Submit documents and complete fee payment to confirm admission." },
    },
    {
      "@type": "Question",
      name: "What documents are required for admission?",
      acceptedAnswer: { "@type": "Answer", text: "10th and 12th/PUC marks cards, entrance exam score card, transfer certificate, migration certificate, caste/income certificate (if applicable), Aadhaar card, and passport-size photographs." },
    },
    {
      "@type": "Question",
      name: "What are the institute codes for ATME?",
      acceptedAnswer: { "@type": "Answer", text: "KCET: E205, COMED-K: E152, MBA: B315, MCA: C613." },
    },
  ],
});

function EnquiryForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", dept: "CSE", message: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Admissions Enquiry — ${form.name || "Prospective Student"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nDepartment of interest: ${form.dept}\n\nMessage:\n${form.message}\n`
    );
    window.location.href = `mailto:info@atme.edu.in?subject=${subject}&body=${body}`;
  };
  const inp = "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary";
  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
      <div>
        <h3 className="font-display text-xl font-bold text-foreground">Admissions Enquiry</h3>
        <p className="text-sm text-muted-foreground mt-1">Send us a quick note — we'll get back to you on email.</p>
      </div>
      <div className="space-y-3">
        <input className={inp} required placeholder="Full name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className={inp} required type="tel" placeholder="Phone *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <input className={inp} required type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <div>
          <div className="text-xs font-semibold text-foreground/80 mb-2">Department of interest</div>
          <div className="grid grid-cols-3 gap-2">
            {DEPT_OPTIONS.map((d) => (
              <label key={d} className={`cursor-pointer rounded-md border px-2 py-1.5 text-center text-xs font-semibold transition-colors ${form.dept === d ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground/80 hover:border-primary/50"}`}>
                <input type="radio" name="dept" value={d} checked={form.dept === d} onChange={() => setForm({ ...form, dept: d })} className="sr-only" />
                {d}
              </label>
            ))}
          </div>
        </div>
        <textarea className={inp} rows={4} placeholder="Your message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      </div>
      <button type="submit" className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-primary text-primary-foreground px-4 py-2.5 font-semibold hover:opacity-90 transition">
        <Send className="h-4 w-4" /> Send Enquiry
      </button>
      <p className="text-[11px] text-muted-foreground text-center">Opens your email client pre-filled to info@atme.edu.in</p>
    </form>
  );
}

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions 2026-27 — ATME College of Engineering" },
      { name: "description", content: "Admissions are open for the 2026-27 academic year at ATME College of Engineering, Mysuru. Eligibility, process, fees and scholarships." },
      { property: "og:title", content: "Admissions 2026-27 — ATME" },
      { property: "og:description", content: "Apply for BE/MBA/MCA programmes at ATME, Mysuru. VTU affiliated · NAAC accredited." },
      { property: "og:url", content: "https://atme.edu.in/admissions" },
    ],
    links: [{ rel: "canonical", href: "https://atme.edu.in/admissions" }],
  }),
  component: AdmissionsPage,
});


const eligibility = [
  "Pass in 10+2 (PUC / equivalent) with Physics and Mathematics as compulsory subjects and Chemistry / Biology / Electronics / Computer Science as optional.",
  "Minimum 45% aggregate (40% for SC/ST/OBC) in the qualifying examination.",
  "Valid KCET / COMEDK / JEE Main score as applicable.",
  "Lateral entry available for Diploma holders into the 2nd year of BE under VTU norms.",
];

const steps = [
  "Download the brochure or request a copy from the admissions office.",
  "Appear for KCET / COMEDK / JEE Main as per category.",
  "Participate in centralised counselling and select ATME — or apply directly under the management quota.",
  "Submit documents and complete fee payment to confirm admission.",
];

const documents = [
  "10th Marks Card","12th / PUC Marks Card","Entrance Exam Score Card","Transfer Certificate",
  "Migration Certificate","Caste / Income Certificate (if applicable)","Aadhaar Card","Passport-size Photographs",
];

const codes = [
  { k: "KCET",    v: "E205" },
  { k: "COMED-K", v: "E152" },
  { k: "MBA",     v: "B315" },
  { k: "MCA",     v: "C613" },
];

const supportFaq = [
  { q: "Government Scholarships", a: "Students belonging to SC/ST/OBC/Minority and other reserved categories are eligible for Government of Karnataka and Government of India scholarships. The admissions office assists students with the application process and document verification.", slug: "scholarships" },
  { q: "ATME Scholarships",       a: "ATME offers merit and need-based scholarships to deserving students. Awards are based on academic performance and family income, reviewed each academic year.", slug: "atmescholarships" },
  { q: "Sports Scholarships",     a: "Students with outstanding sports achievements at state, national or international level are eligible for sports scholarships and dedicated coaching support.", slug: "sports/scholarshipsports" },
  { q: "Hostel Facility",         a: "Separate, secure hostels for boys and girls with mess, Wi-Fi, study rooms and 24×7 warden support. Limited seats — applications open with admission.", slug: "hostel-facility" },
  { q: "Transportation",          a: "College buses operate on multiple routes across Mysuru and surrounding towns. Route maps and fees are published before each academic year.", slug: "transportation" },
];

function AdmissionsPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: ADMISSIONS_JSON_LD }}
      />
      <PageHero
        eyebrow="Admissions 2026-27"
        title="Begin your engineering journey at ATME"
        subtitle="Applications are open for all BE, MBA and MCA programmes. Reach our admissions team for guidance on eligibility, counselling and scholarships."
        bgImage={SECTION_BANNER.admissions}
      />

      <section className="container-page py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {codes.map((c) => (
            <div key={c.k} className="rounded-xl border border-border bg-card px-5 py-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.k} Code</div>
              <div className="mt-1 font-display text-3xl font-bold text-primary">{c.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-2xl font-bold">Eligibility</h2>
            <ul className="mt-4 space-y-3">
              {eligibility.map((x) => (
                <li key={x} className="flex gap-3 text-foreground/85">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">How to Apply</h2>
            <ol className="mt-4 grid gap-3">
              {steps.map((s, i) => (
                <li key={s} className="flex gap-4 rounded-xl border border-border bg-card p-4">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-bold shrink-0">{i + 1}</div>
                  <div className="text-foreground/85">{s}</div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Documents Required</h2>
            <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-foreground/85">
              {documents.map((x) => (
                <li key={x} className="flex gap-2"><FileText className="h-4 w-4 text-primary mt-0.5" /> {x}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Fee Structure</h2>
            <p className="mt-2 text-muted-foreground">Programme-wise fees are published on the official fee structure pages.</p>
            <div className="mt-4 grid sm:grid-cols-3 gap-4">
              {[
                { slug: "ug-fees-structure",   t: "UG Fee Structure" },
                { slug: "pg-fees-structure",   t: "PG Fee Structure" },
                { slug: "atme-fees-structure", t: "ATME Fee Structure" },
              ].map((f) => (
                <Link key={f.slug} to="/p/$" params={{ _splat: f.slug }} className="group rounded-xl border border-border bg-card p-5 hover:border-primary hover:shadow-md transition-all">
                  <div className="font-semibold group-hover:text-primary">{f.t}</div>
                  <div className="mt-2 inline-flex items-center gap-1 text-sm text-primary">View <ArrowRight className="h-3.5 w-3.5" /></div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Scholarships & Student Support</h2>
            <Accordion type="single" collapsible className="mt-4">
              {supportFaq.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-foreground/85">{f.a}</p>
                    <Link to="/p/$" params={{ _splat: f.slug }} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Learn more about {f.q.toLowerCase()} <ArrowRight className="h-4 w-4" />
                    </Link>

                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <aside className="space-y-6 h-fit sticky top-28">
          <div className="rounded-2xl bg-primary text-primary-foreground p-7">
            <h3 className="font-display text-xl font-bold">Admissions Contact</h3>
            <p className="mt-2 text-sm text-primary-foreground/85">Speak with our team — we're happy to help you choose the right programme.</p>
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex gap-2"><Phone className="h-4 w-4 mt-0.5" /> <div><div className="font-semibold">Secretary</div>+91 94482-85651</div></div>
              <div className="flex gap-2"><Phone className="h-4 w-4 mt-0.5" /> <div><div className="font-semibold">Principal</div>+91 94482-85641</div></div>
              <div className="flex gap-2"><Phone className="h-4 w-4 mt-0.5" /> <div><div className="font-semibold">AO</div>+91 94486-78271</div></div>
              <div className="flex gap-2"><Mail className="h-4 w-4 mt-0.5" /> admissions@atme.edu.in</div>
            </div>
            <Link to="/contact" className="mt-6 inline-flex justify-center w-full rounded-lg bg-primary-foreground text-primary px-4 py-2.5 font-semibold hover:bg-secondary transition-colors">
              Get in Touch
            </Link>
          </div>

          <EnquiryForm />
        </aside>
      </section>

    </Layout>
  );
}
