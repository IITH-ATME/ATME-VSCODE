import { createFileRoute, Outlet } from "@tanstack/react-router";

// Layout only — SEO tags live on each child route (including the index) so
// child pages don't inherit a second canonical pointing at /campus-life.
export const Route = createFileRoute("/campus-life")({
  component: () => <Outlet />,
});
