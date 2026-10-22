import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import { PdfEmbed } from "@/components/site/PdfEmbed";
import { pdf } from "@/data/pdfs";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/vtu-honor-degree")({
  head: () =>
    seo({
      title: "VTU Honor Degree — ATME College of Engineering",
      path: "/vtu-honor-degree",
      description: "VTU Honor Degree programme details offered at ATME College of Engineering, Mysuru.",
    }),
  component: VtuHonorDegreePage,
});

function VtuHonorDegreePage() {
  return (
    <InfoPage
      eyebrow="Departments · Academic Programmes"
      title="VTU Honor Degree"
      subtitle="Programme details and curriculum"
    >
      <PdfEmbed
        url={pdf("ATME-VTU-Honours-Degree-Details.pdf")}
        title="VTU Honor Degree — Programme Details"
      />
    </InfoPage>
  );
}
