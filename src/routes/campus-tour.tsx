import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";

export const Route = createFileRoute("/campus-tour")({
  head: () => ({
    meta: [
      { title: "Campus Tour — ATME College of Engineering" },
      { name: "description", content: "Take a virtual tour of the ATME College of Engineering campus in Mysuru." },
    ],
  }),
  component: () => (
    <InfoPage
      eyebrow="Visit Us"
      title="Campus Tour"
      subtitle="Explore the 27‑acre ATME campus from anywhere"
      intro="Walk through our academic blocks, laboratories, library, hostels, sports facilities and lush green surroundings — a 360° look at the place 2,800+ students call home."
      afterChildren={
        <div className="h-[85vh] min-h-[600px] w-full overflow-hidden rounded-2xl border border-border bg-muted">
          <iframe
            title="ATME Campus 360 Tour"
            src="https://www.google.com/maps/embed?pb=!4v1700000000000!6m8!1m7!1sCAoSLEFGMVFpcE1iTklSSlNiQ3BFNGdHTzVqbDFPNE1kenB3b0M5YWxwODNFNzU0!2m2!1d12.3155768!2d76.7708122!3f178.98!4f-0.35!5f0.7820865974627469"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      }
    />
  ),
});
