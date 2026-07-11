import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — ATME College of Engineering" },
      { name: "description", content: "How ATME College of Engineering collects, uses and protects personal information submitted through our website forms and services." },
      { property: "og:title", content: "Privacy Policy — ATME College of Engineering" },
      { property: "og:description", content: "Our commitments on data collection, cookies, security and contact for the ATME College of Engineering website." },
      { property: "og:url", content: "https://atme.edu.in/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "https://atme.edu.in/privacy-policy" }],
  }),
});

function PrivacyPage() {
  return (
    <Layout>
      <div className="bg-primary text-white">
        <div className="container-page py-12"><h1 className="text-3xl md:text-4xl font-display font-bold">Privacy Policy</h1></div>
      </div>
      <div className="container-page py-12 max-w-4xl space-y-4 text-foreground/85 leading-relaxed">
        <p>ATME College of Engineering respects the privacy of every visitor to our website. This policy outlines how we collect, use, and protect any information that you provide while using our site.</p>
        <p><strong>Information we collect:</strong> contact details you voluntarily submit through enquiry, admission, or feedback forms.</p>
        <p><strong>How we use it:</strong> to respond to your enquiries, process admissions, and improve services. We do not sell or share your personal information with third parties for marketing purposes.</p>
        <p><strong>Cookies:</strong> our website may use cookies to enhance user experience and analyse traffic. You can disable cookies in your browser settings.</p>
        <p><strong>Security:</strong> reasonable measures are taken to protect data from unauthorised access. However, no method of transmission over the internet is 100% secure.</p>
        <p>For questions about this policy, contact <a href="mailto:info@atme.edu.in" className="text-primary hover:underline">info@atme.edu.in</a>.</p>
      </div>
    </Layout>
  );
}
