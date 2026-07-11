import { SECTION_BANNER } from "@/lib/sectionBanners";
import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";

const CONTACT_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: "ATME College of Engineering",
  url: "https://atme.edu.in",
  telephone: "+91-821-2954081",
  email: "info@atme.edu.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "13th Kilometer, Mysore – Kanakapura – Bangalore Road",
    addressLocality: "Mysuru",
    postalCode: "570028",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 12.3155768, longitude: 76.7708122 },
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ATME College of Engineering" },
      { name: "description", content: "Get in touch with ATME College of Engineering. Address, phone numbers and email for admissions and general enquiries." },
      { property: "og:title", content: "Contact ATME" },
      { property: "og:description", content: "Reach our campus, corporate office and admissions team." },
      { property: "og:url", content: "https://atme.edu.in/contact" },
    ],
    links: [{ rel: "canonical", href: "https://atme.edu.in/contact" }],
  }),
  component: ContactPage,
});


function ContactPage() {
  const blocks = [
    {
      icon: Building2,
      t: "College Address",
      lines: ["ATME College of Engineering", "13th Kilometer, Mysore – Kanakapura – Bangalore Road", "Mysore – 570 028, Karnataka"],
      contacts: [["Phone", "0821-2954081"], ["Principal", "0821-2954011"], ["Email", "principal@atme.edu.in"]],
    },
    {
      icon: MapPin,
      t: "Corporate Office",
      lines: ["ATME College of Engineering", "#2904, 2nd Floor, Kantharaj Urs Road", "Next to Fire Brigade, Saraswathipuram", "Mysore – 570 009, Karnataka"],
      contacts: [["Phone", "+91-821-41 91 551"], ["Email", "info@atme.edu.in"]],
    },
    {
      icon: Phone,
      t: "Admissions",
      lines: ["For programme enquiries, eligibility and counselling support, contact our admissions team."],
      contacts: [["Secretary", "+91 94482-85651"], ["Principal", "+91 94482-85641"], ["AO", "+91 94486-78271"], ["AAO", "+91 94482-85644"], ["Email", "admissions@atme.edu.in"]],
    },
  ];
  return (
    <Layout>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: CONTACT_JSON_LD }}
      />
      <PageHero eyebrow="Contact" title="We'd love to hear from you" subtitle="Reach our campus, corporate office or admissions team — we'll get back to you promptly."  bgImage={SECTION_BANNER.contact} /> 
      <section className="container-page py-20 grid lg:grid-cols-3 gap-6">
        {blocks.map(({ icon: Icon, t, lines, contacts }) => (
          <div key={t} className="rounded-2xl border border-border bg-card p-7 shadow-card">
            <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground"><Icon className="h-5 w-5" /></div>
            <h4 className="mt-5 font-display text-xl font-semibold">{t}</h4>
            <div className="mt-3 space-y-1 text-sm text-foreground/80">
              {lines.map(l => <div key={l}>{l}</div>)}
            </div>
            <dl className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
              {contacts.map(([k,v]) => (
                <div key={k} className="flex justify-between gap-3">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-medium text-foreground text-right">
                    {k === "Email"
                      ? <a href={`mailto:${v}`} className="text-primary hover:underline">{v}</a>
                      : k.includes("Phone") || k === "Secretary" || k === "Principal" || k === "AO" || k === "AAO"
                        ? <a href={`tel:${v.replace(/\s|-/g,"")}`} className="hover:text-primary">{v}</a>
                        : v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </section>

      <section className="container-page pb-20">
        <div className="rounded-3xl overflow-hidden border border-border shadow-card aspect-[16/7]">
          <iframe
            title="ATME Campus Map"
            src="https://www.google.com/maps?q=ATME+College+of+Engineering+Mysore&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </Layout>
  );
}
