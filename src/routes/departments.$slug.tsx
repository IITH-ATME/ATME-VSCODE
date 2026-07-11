import { createFileRoute, Outlet, notFound } from "@tanstack/react-router";
import { getDept } from "@/data/departments";

export const Route = createFileRoute("/departments/$slug")({
  loader: ({ params }) => {
    const dept = getDept(params.slug);
    if (!dept) throw notFound();
    return { dept };
  },
  component: () => <Outlet />,
});
