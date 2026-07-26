import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { EventCard } from "@/components/site/EventCard";
import { SITE_EVENTS } from "@/data/siteEvents";

export const Route = createFileRoute("/campus-life/events")({
  head: () => ({
    meta: [
      { title: "Events — ATME Campus Life" },
      { name: "description", content: "Every fest, workshop, FDP, conference and student activity at ATME College of Engineering, Mysuru." },
    ],
  }),

  component: () => {
    const today = new Date().toISOString().slice(0, 10);
    const events = [...SITE_EVENTS].sort((a, b) => b.startDateISO.localeCompare(a.startDateISO));

    return (
      <Layout>
        <PageHero eyebrow="Campus Life" title="Events" subtitle="Fests, workshops, FDPs, conferences and student activities through the year" />
        <section className="container-page py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((e) => (
              <EventCard key={e.slug} event={e} isPast={e.startDateISO < today} />
            ))}
          </div>
        </section>
      </Layout>
    );
  },
});
