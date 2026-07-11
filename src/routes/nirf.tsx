import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { DocSectionTabs, type DocSection } from "@/components/site/DocSectionTabs";
import { pdf } from "@/data/pdfs";
import { Mail, User } from "lucide-react";

export const Route = createFileRoute("/nirf")({
  head: () => ({
    meta: [
      { title: "NIRF Rankings & Reports — ATME College of Engineering" },
      {
        name: "description",
        content:
          "NIRF Institution Data and Ranking Reports for ATME College of Engineering — Engineering, Overall, Innovation and SDG categories from 2022 to 2026.",
      },
      { property: "og:title", content: "NIRF Rankings & Reports — ATME College of Engineering" },
      {
        property: "og:description",
        content:
          "Download NIRF Engineering, Overall, Innovation and SDG ranking reports submitted by ATME College of Engineering.",
      },
    ],
  }),
  component: NirfPage,
});

const sections: DocSection[] = [
  {
    title: "NIRF 2026",
    description: "Institution data submissions for the NIRF 2026 ranking cycle.",
    pdfs: [
      {
        url: "https://old.atme.edu.in/wp-content/uploads/2026/04/ATME-College-of-Engineering_Engineering.pdf",
        label: "Engineering Ranking Report",
      },
      { url: pdf("ATME-College-of-Engineering_Overall.pdf"), label: "Overall Ranking Report" },
      {
        url: "https://old.atme.edu.in/wp-content/uploads/2026/04/ATME-College-of-Engineering_Innovation.pdf",
        label: "Innovation Ranking Report",
      },
    ],
  },
  {
    title: "NIRF 2025",
    description: "Institution data submissions for the NIRF 2025 ranking cycle.",
    pdfs: [
      {
        url: pdf("NIRF_2025_ENGINEERING_ATME-College-of-Engineering.pdf"),
        label: "Engineering Ranking Report",
      },
      {
        url: pdf("NIRF_2025_OVERALL_ATME-College-of-Engineering.pdf"),
        label: "Overall Ranking Report",
      },
      {
        url: pdf("NIRF_2025_Innovation_ATME-College-of-Engineering.pdf"),
        label: "Innovation Ranking Report",
      },
      {
        url: pdf("NIRF_2025_SDG_ATME-College-of-Engineering.pdf"),
        label: "SDG Ranking Report",
      },
    ],
  },
  {
    title: "NIRF 2024",
    description: "Institution data submissions for the NIRF 2024 ranking cycle.",
    pdfs: [
      {
        url: "https://old.atme.edu.in/wp-content/uploads/2024/03/ATME-College-of-Engineering_Engineering.pdf",
        label: "Engineering Ranking Report",
      },
      {
        url: pdf("ATME-College-of-Engineering_Overall-Data.pdf"),
        label: "Overall Ranking Report",
      },
      {
        url: "https://old.atme.edu.in/wp-content/uploads/2024/03/ATME-College-of-Engineering_Innovation-Data.pdf",
        label: "Innovation Ranking Report",
      },
    ],
  },
  {
    title: "NIRF 2023",
    description: "Institution data submission for the NIRF 2023 ranking cycle.",
    pdfs: [
      {
        url: pdf("NIRF_2023_ATME-College-of-Engineering-.pdf"),
        label: "Engineering Ranking Report",
      },
    ],
  },
  {
    title: "NIRF 2022",
    description: "Institution data submission for the NIRF 2022 ranking cycle.",
    pdfs: [
      {
        url: pdf("ATME-College-of-Engineering_NIRF-2022.pdf"),
        label: "Engineering Ranking Report",
      },
    ],
  },
];

function NirfPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Rankings & Accreditation"
        title="NIRF — National Institutional Ranking Framework"
        subtitle="Institution data and ranking reports submitted by ATME College of Engineering"
      />
      <section className="container-page py-12 max-w-5xl">
        <Reveal>
          <div className="rounded-2xl border border-border bg-white p-5 sm:p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground">
              For any queries / details, please reach out to:
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border/60 bg-[#f1f8f9] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#0d6f76]">
                  <User className="h-4 w-4" /> Principal
                </div>
                <div className="mt-1 font-medium">Dr. L. Basavaraj</div>
                <a
                  href="mailto:principal@atme.edu.in"
                  className="mt-1 inline-flex items-center gap-1.5 text-sm text-primary hover:underline break-all"
                >
                  <Mail className="h-3.5 w-3.5" /> principal@atme.edu.in
                </a>
              </div>
              <div className="rounded-xl border border-border/60 bg-[#f1f8f9] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#0d6f76]">
                  <User className="h-4 w-4" /> Nodal Officer / SPOC
                </div>
                <div className="mt-1 font-medium">Mr. Shreeshayana R</div>
                <a
                  href="mailto:shreeshayanar_ee@atme.edu.in"
                  className="mt-1 inline-flex items-center gap-1.5 text-sm text-primary hover:underline break-all"
                >
                  <Mail className="h-3.5 w-3.5" /> shreeshayanar_ee@atme.edu.in
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10">
            <h2 className="text-2xl font-bold tracking-tight">NIRF Institution Data</h2>
            <p className="mt-2 text-foreground/75">
              Year-wise ranking reports across Engineering, Overall, Innovation and SDG categories.
            </p>
            <div className="mt-5">
              <DocSectionTabs sections={sections} label="NIRF year sections" />
            </div>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
