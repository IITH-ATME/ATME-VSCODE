import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import {
  ExternalLink,
  CheckCircle2,
  Building2,
  GraduationCap,
  Wrench,
  Cpu,
  Zap,
  Radio,
  Code2,
  FlaskConical,
  Beaker,
  Atom,
  Sparkles,
  LifeBuoy,
} from "lucide-react";

export const Route = createFileRoute("/virtual-lab")({
  head: () => ({
    meta: [
      { title: "Virtual Labs — ATME College of Engineering" },
      { name: "description", content: "Virtual Labs @ ATME — an MoE, Government of India initiative under NMEICT enabling simulation-based experiments anytime, anywhere." },
      { property: "og:title", content: "Virtual Labs — ATME College of Engineering" },
      { property: "og:description", content: "Access simulation-based laboratory experiments developed by IITs, IIITs and NITs across engineering and science disciplines." },
    ],
  }),
  component: VirtualLabPage,
});

const BENEFITS = [
  "Access laboratory experiments anytime and anywhere.",
  "Learn through interactive simulations and virtual experimentation.",
  "Strengthen theoretical concepts with practical applications.",
  "Improve laboratory preparedness before performing physical experiments.",
  "Enhance problem-solving and analytical skills.",
  "Support outcome-based education and continuous learning.",
  "Access learning resources developed by premier institutions of India.",
];

const DEVELOPED_BY = [
  "IIT Delhi",
  "IIT Bombay",
  "IIT Kanpur",
  "IIT Kharagpur",
  "IIT Roorkee",
  "IIT Guwahati",
  "IIIT Hyderabad",
  "NITK Surathkal",
  "Other leading institutions",
];

const DISCIPLINES: { name: string; icon: typeof Wrench }[] = [
  { name: "Civil Engineering", icon: Building2 },
  { name: "Mechanical Engineering", icon: Wrench },
  { name: "Electrical Engineering", icon: Zap },
  { name: "Electronics & Communication Engineering", icon: Radio },
  { name: "Computer Science & Engineering", icon: Code2 },
  { name: "Biotechnology Engineering", icon: FlaskConical },
  { name: "Chemical Engineering", icon: Beaker },
  { name: "Physical Sciences", icon: Atom },
  { name: "Chemical Sciences", icon: FlaskConical },
  { name: "Other Interdisciplinary Domains", icon: Sparkles },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-xl md:text-2xl font-bold text-[#129199] border-l-4 border-[#f5c518] pl-3">
      {children}
    </h2>
  );
}

function VirtualLabPage() {
  return (
    <InfoPage
      eyebrow="Learn Anywhere"
      title="Virtual Labs @ ATME College of Engineering"
      subtitle="An initiative of the Ministry of Education (MoE), Government of India under NMEICT"
      intro="Virtual Labs provide students with access to high-quality simulation-based laboratory experiments through an online platform — enabling remote experimentation, interactive learning of laboratory concepts, and practical exposure beyond conventional laboratory hours."
    >
      <div className="mt-8 space-y-12">
        {/* About Virtual Labs */}
        <section className="space-y-4">
          <SectionHeading>About Virtual Labs</SectionHeading>
          <p className="text-foreground/85 leading-relaxed">
            Virtual Labs is an initiative of the Ministry of Education (MoE), Government of India, under the
            National Mission on Education through ICT (NMEICT). It is developed and maintained by premier
            institutions across the country.
          </p>
          <p className="text-foreground/85 leading-relaxed">
            The platform enables students to perform experiments remotely, learn laboratory concepts through
            interactive simulations, and gain practical exposure beyond conventional laboratory hours.
          </p>

          <div className="rounded-lg border border-[#f5c518] bg-[#fffdf3] p-5">
            <h3 className="font-semibold text-foreground mb-3">Developed &amp; Maintained By</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm text-foreground/85">
              {DEVELOPED_BY.map((inst) => (
                <li key={inst} className="flex items-start gap-2">
                  <GraduationCap className="h-4 w-4 mt-0.5 text-[#129199] shrink-0" />
                  <span>{inst}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Virtual Labs at ATME */}
        <section className="space-y-3">
          <SectionHeading>Virtual Labs at ATME</SectionHeading>
          <p className="text-foreground/85 leading-relaxed">
            <strong>ATME College of Engineering</strong> is committed to providing innovative learning
            opportunities to its students. Through Virtual Labs, students and faculty can access a wide range
            of laboratory experiments, simulations, tutorials, videos, and self-assessment resources across
            various engineering and science disciplines.
          </p>
          <p className="text-foreground/85 leading-relaxed">
            The Virtual Labs platform supplements physical laboratory sessions and promotes experiential
            learning, self-paced study, and enhanced conceptual understanding.
          </p>
        </section>

        {/* Benefits */}
        <section className="space-y-3">
          <SectionHeading>Benefits of Virtual Labs</SectionHeading>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {BENEFITS.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-md border border-[#f5c518]/60 bg-[#fffdf3] p-3 text-foreground/85 leading-relaxed"
              >
                <CheckCircle2 className="h-5 w-5 mt-0.5 text-[#129199] shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Disciplines */}
        <section className="space-y-4">
          <SectionHeading>Disciplines Available</SectionHeading>
          <p className="text-foreground/85 leading-relaxed">
            Virtual Labs provide experiments and learning resources in:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {DISCIPLINES.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex items-center gap-3 rounded-lg border border-[#f5c518] bg-white p-3 hover:bg-[#fff4c2] transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#129199]/10 text-[#129199] shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-foreground">{name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Access Virtual Labs */}
        <section className="space-y-4">
          <SectionHeading>Access Virtual Labs</SectionHeading>
          <p className="text-foreground/85 leading-relaxed">
            Students and faculty members can access the Virtual Labs portal using the link below:
          </p>
          <div className="rounded-xl border-2 border-[#129199] bg-gradient-to-br from-[#129199]/5 to-[#f5c518]/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm uppercase tracking-wide text-[#129199] font-semibold mb-1">
                Virtual Labs Portal
              </div>
              <div className="font-display text-lg md:text-xl font-bold text-foreground">
                www.vlab.co.in
              </div>
            </div>
            <a
              href="https://www.vlab.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#129199] px-5 py-3 text-white font-semibold hover:bg-[#0e7479] transition-colors"
            >
              Visit Portal
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Faculty and Student Usage */}
        <section className="space-y-3">
          <SectionHeading>Faculty and Student Usage</SectionHeading>
          <p className="text-foreground/85 leading-relaxed">
            All students are encouraged to utilize Virtual Labs as part of their academic learning, laboratory
            preparation, project work, and self-learning activities. Faculty members are encouraged to integrate
            Virtual Lab experiments into their teaching-learning process wherever applicable.
          </p>
          <p className="text-foreground/85 leading-relaxed">
            ATME College of Engineering actively supports the adoption of Virtual Labs to enhance digital
            learning, improve practical knowledge, and bridge the gap between theory and practice.
          </p>
        </section>

        {/* For Assistance */}
        <section className="space-y-3">
          <SectionHeading>For Assistance</SectionHeading>
          <div className="flex items-start gap-4 rounded-lg border border-[#f5c518] bg-[#fffdf3] p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#129199]/10 text-[#129199] shrink-0">
              <LifeBuoy className="h-6 w-6" />
            </div>
            <p className="text-foreground/85 leading-relaxed">
              For any support related to Virtual Labs access and utilization, students may contact their
              respective <strong>department coordinators</strong> or <strong>faculty members</strong>.
            </p>
          </div>
        </section>
      </div>
    </InfoPage>
  );
}
