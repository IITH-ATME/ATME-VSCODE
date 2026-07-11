import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://atme.edu.in";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const STATIC_PATHS: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/administration", changefreq: "monthly", priority: "0.7" },
  { path: "/admissions", changefreq: "monthly", priority: "0.9" },
  { path: "/departments", changefreq: "monthly", priority: "0.9" },
  { path: "/research", changefreq: "monthly", priority: "0.7" },
  { path: "/placements", changefreq: "monthly", priority: "0.8" },
  { path: "/campus-life", changefreq: "monthly", priority: "0.6" },
  { path: "/campus-tour", changefreq: "yearly", priority: "0.5" },
  { path: "/careers", changefreq: "weekly", priority: "0.6" },
  { path: "/contact", changefreq: "yearly", priority: "0.7" },
  { path: "/library", changefreq: "monthly", priority: "0.6" },
  { path: "/resources", changefreq: "monthly", priority: "0.6" },
  { path: "/resources/notes", changefreq: "monthly", priority: "0.5" },
  { path: "/resources/papers", changefreq: "monthly", priority: "0.5" },
  { path: "/resources/videos", changefreq: "monthly", priority: "0.5" },
  { path: "/resources/elibrary", changefreq: "monthly", priority: "0.5" },
  { path: "/resources/placement", changefreq: "monthly", priority: "0.5" },
  { path: "/resources/discrete-mathematical-structures", changefreq: "monthly", priority: "0.7" },
  { path: "/sports", changefreq: "monthly", priority: "0.5" },
  { path: "/news-clippings", changefreq: "monthly", priority: "0.5" },
  { path: "/upcoming-events", changefreq: "weekly", priority: "0.6" },
  { path: "/circulars", changefreq: "weekly", priority: "0.6" },
  { path: "/nirf", changefreq: "yearly", priority: "0.5" },
  { path: "/nabl", changefreq: "yearly", priority: "0.5" },
  { path: "/mandatory-disclosure", changefreq: "yearly", priority: "0.5" },
  { path: "/iirs-isro-nc", changefreq: "yearly", priority: "0.4" },
  { path: "/virtual-lab", changefreq: "yearly", priority: "0.4" },
  { path: "/vtu-honor-degree", changefreq: "yearly", priority: "0.4" },
  { path: "/vtu-minor-degree", changefreq: "yearly", priority: "0.4" },
  { path: "/women-cell", changefreq: "yearly", priority: "0.4" },
  { path: "/youth4work", changefreq: "yearly", priority: "0.4" },
  { path: "/professional-body-membership", changefreq: "yearly", priority: "0.4" },
  { path: "/student-handbook", changefreq: "yearly", priority: "0.4" },
  { path: "/employee-handbook", changefreq: "yearly", priority: "0.4" },
  { path: "/hostel-policy", changefreq: "yearly", priority: "0.4" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
];

const ABOUT_PAGES = [
  "vision-mission",
  "governing-council",
  "chairmans-message",
  "about-principal",
  "principal-message",
  "academic-council",
  "statutory-declaration",
  "dean-student-affairs",
];


const DEPARTMENT_SLUGS = ["ce", "csd", "cse", "aiml", "ds", "cy", "ece", "eee", "me", "bca", "mca", "mba", "physics", "chemistry", "mathematics", "humanities"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          ...STATIC_PATHS,
          ...ABOUT_PAGES.map((s) => ({ path: `/about/${s}`, changefreq: "monthly" as const, priority: "0.6" })),
          ...DEPARTMENT_SLUGS.map((s) => ({ path: `/departments/${s}`, changefreq: "monthly" as const, priority: "0.7" })),
        ];


        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
