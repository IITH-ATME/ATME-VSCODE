import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/campus-life")({
  head: () => ({
    meta: [
      { title: "Campus Life — ATME College of Engineering, Mysuru" },
      { name: "description", content: "Explore campus life at ATME — clubs, events, sports, library, hostel, transportation, scholarships and more." },
      { property: "og:title", content: "Campus Life — ATME College of Engineering" },
      { property: "og:description", content: "Active student clubs, cultural events, sports activities and 100% placements drive campus life at ATME, Mysuru." },
    ],
  }),
  component: () => <Outlet />,
});
