import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import { PdfEmbed } from "@/components/site/PdfEmbed";
import { pdf } from "@/data/pdfs";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/vtu-minor-degree")({
  head: () =>
    seo({
      title: "VTU Minor Degree — ATME College of Engineering",
      path: "/vtu-minor-degree",
      description: "VTU Minor Degree programme details offered at ATME College of Engineering, Mysuru.",
    }),
  component: VtuMinorDegreePage,
});

function VtuMinorDegreePage() {
  return (
    <InfoPage
      eyebrow="Departments · Academic Programmes"
      title="VTU Minor Degree"
      subtitle="Programme details and curriculum"
    >
      <PdfEmbed
        url={pdf("ATME-VTU-Minor-degree-Details.pdf")}
        title="VTU Minor Degree — Programme Details"
      />
    </InfoPage>
  );
}
