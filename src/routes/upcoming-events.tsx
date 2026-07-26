import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { EventCard } from "@/components/site/EventCard";
import { SITE_EVENTS } from "@/data/siteEvents";

export const Route = createFileRoute("/upcoming-events")({
  head: () => ({
    meta: [
      { title: "Upcoming Events — ATME College of Engineering" },
      { name: "description", content: "Stay updated with all upcoming events, workshops and conferences at ATME College of Engineering, Mysuru." },
      { property: "og:title", content: "Upcoming Events — ATME College of Engineering" },
      { property: "og:description", content: "Festivals, conferences, hackathons and student activities at ATME, Mysuru." },
      { property: "og:url", content: "https://atme.edu.in/upcoming-events" },
    ],
    links: [{ rel: "canonical", href: "https://atme.edu.in/upcoming-events" }],
  }),

  component: () => {
    const today = new Date().toISOString().slice(0, 10);
    // Sorted soonest-first by date; events already past still show (flagged
    // with the "Past Event" badge) rather than the page going empty once a
    // year's events have all happened.
    const events = [...SITE_EVENTS].sort((a, b) => a.startDateISO.localeCompare(b.startDateISO));

    return (
      <Layout>
        <PageHero eyebrow="What's On" title="Upcoming Events" subtitle="Festivals, conferences and student activities" />
        <section className="container-page py-14">
          {events.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((e) => (
                <EventCard key={e.slug} event={e} isPast={e.startDateISO < today} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground text-lg py-10">
              No events are scheduled right now — check back soon.
            </p>
          )}
        </section>
      </Layout>
    );
  },
});
