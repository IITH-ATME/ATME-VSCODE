import { Sparkles, Trophy, Handshake, CheckCircle2, Award } from "lucide-react";

const whyAtme = [
  "Futuristic infrastructure with modern facilities.",
  "Highly qualified, experienced and dedicated faculty members.",
  "Prestigious accreditations from NBA, NAAC \u201CA+\u201D grade, and Gold Ranking by QS-i Gauge.",
  "Strong collaborations with leading industries for real-world exposure.",
  "Career counselling and guidance programs for personalized career development.",
  "Encouragement of research and innovation among students and faculty.",
  "Wide range of extracurricular activities for all-round development.",
  "Dedicated placement cell for comprehensive career support.",
  "Current-day environment for professional development to global standards.",
  "Pervasive culture of excellence.",
  "Numerous sports achievements.",
  "Certification courses from renowned industries for skill development.",
  "Digital classrooms for effective learning.",
  "Promoted by the best names in education, technology and social service.",
];

const achievements = [
  "First Engineering college in Mysore region to get NAAC A+ grade Accreditation in the first cycle.",
  "ATME Accredited by NBA (National Board of Accreditation) in 2019 — youngest college to get NBA Accreditation among VTU affiliated colleges.",
  "ATME has been ISO 9001-2015 Certified. ISO is a universal standard that helps any institution certified with the Quality Management System.",
  "Won the Brands Academy Education Excellence Award for Most Promising Upcoming Private Engineering College in Karnataka in 2012 & 2013 from MHRD, New Delhi.",
  "Identified as Remote Center from Indian Institute of Technology, Bombay to conduct seminars, FDP and Workshops in recent trends in technologies.",
  "Identified as Nodal Center for Virtual Lab — an initiative from MHRD, New Delhi, authorized to conduct workshops for students and staff.",
  "MoUs with major industries to conduct student internships & research activities.",
  "CISCO Center of Excellence for advanced Networking in association with CISCO India, offering certification courses for students.",
  "VLSI incubation with FrenusTech Pvt Limited, Bengaluru to train engineering students & staff in the emerging areas of VLSI.",
  "Conducts annual cultural fest ATMEYA with social responsibility themes to contribute its best to society.",
  "Offers the special scholarship scheme \u201CVidyaasare\u201D for meritorious students.",
  "Identified as a Research Center for pursuing Ph.D. in the emerging areas in EC, Mech, EE, CS, Physics & Chemistry.",
  "Ranks 19th overall in VTU team ranking in sports and cultural activities.",
];

const institutionalMous = [
  ...Array.from({ length: 7 }, (_, i) =>
    `https://old.atme.edu.in/wp-content/uploads/2024/08/Institutional-MOUs-0${i + 1}.jpg`
  ),
  "https://old.atme.edu.in/wp-content/uploads/2024/12/EDspire-Research.jpg",
  "https://old.atme.edu.in/wp-content/uploads/2025/07/KARNATAKA-PROFESSIONAL-CIVIL.jpg",
];

const departmentMous = Array.from({ length: 18 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `https://old.atme.edu.in/wp-content/uploads/2024/08/Department-MoUs-${n}.jpg`;
});

export function AboutCollegeExtras() {
  return (
    <>
      {/* Why ATME */}
      <section className="bg-muted/40 border-y py-16">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-[#f5c518] uppercase">
              <Sparkles className="h-4 w-4" /> Why ATME?
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#129199]">Reasons to choose ATME</h2>
            <p className="mt-3 text-muted-foreground">
              A focused environment, industry-linked curriculum and a culture of excellence that prepares students for global careers.
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyAtme.map((point) => (
              <div key={point} className="rounded-2xl border border-border bg-card p-5 flex gap-3 hover:shadow-md transition">
                <CheckCircle2 className="h-5 w-5 text-primary flex-none mt-0.5" />
                <p className="text-sm text-foreground/85 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-[#f5c518] uppercase">
              <Trophy className="h-4 w-4" /> Achievements
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#129199]">Our milestones</h2>
            <p className="mt-3 text-muted-foreground">
              Recognitions and partnerships that mark ATME&rsquo;s journey of academic and institutional excellence.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {achievements.map((a, i) => (
              <div key={a} className="rounded-2xl border border-border bg-card p-6 flex gap-4 hover:shadow-md transition">
                <div className="grid h-10 w-10 flex-none place-items-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex items-start gap-2">
                  <Award className="h-4 w-4 mt-1 text-[#f5c518] flex-none" />
                  <p className="text-sm text-foreground/85 leading-relaxed">{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MoUs */}
      <section className="bg-muted/40 border-y py-16">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-[#f5c518] uppercase">
              <Handshake className="h-4 w-4" /> Collaborations
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#129199]">MoUs &amp; Partnerships</h2>
            <p className="mt-3 text-muted-foreground">
              Institutional and department-level memorandums of understanding with industry and academic partners.
            </p>
          </div>

          <h3 className="mt-10 text-xl font-bold text-foreground">Institutional MoUs</h3>
          <p className="mt-1 text-sm text-muted-foreground">Strategic collaborations with industry, research and academic institutions.</p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
            {institutionalMous.map((src, i) => (
              <a
                key={src}
                href={src}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border-2 border-[#129199]/15 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#129199]/40 transition-all"
              >
                <img
                  src={src}
                  alt={`Institutional MoU ${i + 1}`}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-contain bg-white p-3 group-hover:scale-[1.02] transition-transform"
                />
              </a>
            ))}
          </div>

          <h3 className="mt-12 text-xl font-bold text-foreground">Department MoUs</h3>
          <p className="mt-1 text-sm text-muted-foreground">Across Civil, CSE, ECE, EEE and Mechanical Engineering departments.</p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {departmentMous.map((src, i) => (
              <a
                key={src}
                href={src}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border-2 border-[#129199]/15 bg-white overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-[#129199]/40 transition-all"
              >
                <img
                  src={src}
                  alt={`Department MoU ${i + 1}`}
                  loading="lazy"
                  className="w-full aspect-square object-contain bg-white p-2 group-hover:scale-[1.03] transition-transform"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
