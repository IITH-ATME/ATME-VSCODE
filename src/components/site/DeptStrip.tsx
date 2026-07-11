import { Link } from "@tanstack/react-router";
import { departmentsIndex as departments } from "@/data/departmentsIndex";

/**
 * Horizontal department strip — no icons, fits full screen width on all devices.
 * Single row on md+, horizontal scroll on small. Tabs are sized to fill width.
 */
export function DeptStrip({ activeSlug }: { activeSlug?: string }) {
  return (
    <nav
      aria-label="Departments"
      className="w-full bg-white border-y border-border"
      style={{ borderTopColor: "#129199" }}
    >
      <ul className="w-full flex flex-nowrap lg:grid lg:grid-cols-5 xl:grid-cols-10 overflow-x-auto lg:overflow-visible no-scrollbar">
        {departments.map((d) => {
          const active = activeSlug === d.slug;
          return (
            <li key={d.slug} className="flex-1 min-w-[150px] md:min-w-0">
              <Link
                to="/departments/$slug"
                params={{ slug: d.slug }}
                className={
                  "block text-center px-3 py-3 text-[13px] md:text-sm font-semibold tracking-wide whitespace-nowrap border-r border-border last:border-r-0 transition-colors " +
                  (active
                    ? "text-white"
                    : "text-foreground hover:text-white hover:bg-[#129199]")
                }
                style={active ? { backgroundColor: "#129199" } : undefined}
              >
                {d.code} <span className="hidden lg:inline opacity-80 font-normal">— {d.name.replace(/Engineering$/i, "Engg").replace(/\s*\(.*?\)\s*/g, "")}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
