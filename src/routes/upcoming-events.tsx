import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { EventCard } from "@/components/site/EventCard";
import { SITE_EVENTS } from "@/data/siteEvents";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/upcoming-events")({
  head: () =>
    seo({
      title: "Upcoming Events — ATME College of Engineering",
      path: "/upcoming-events",
      description: "Stay updated with all upcoming events, workshops and conferences at ATME College of Engineering, Mysuru.",
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
