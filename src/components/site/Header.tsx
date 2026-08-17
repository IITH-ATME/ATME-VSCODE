import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, Phone, ChevronDown, Search } from "lucide-react";
import logoAsset from "@/assets/atme-logo.png.asset.json";
import { resolveAssetUrl } from "@/lib/assetUrl";
import {
  ABOUT, DEPARTMENTS_NAV, RESEARCH, ADMISSIONS, ADMINISTRATION, PLACEMENTS, CAMPUS_LIFE,
  type NavSection, type NavLink,
} from "@/lib/navStructure";

type Group = {
  label: string;
  to?: string;
  columns?: { heading: string; links: NavLink[]; groups?: { heading: string; links: NavLink[] }[]; width?: string }[];
};

function toGroup(s: NavSection): Group {
  return { label: s.label, to: s.hub, columns: s.columns };
}

const LEFT: Group[] = [
  { label: "Home", to: "/" },
  toGroup(ABOUT),
  toGroup(ADMINISTRATION),
  toGroup(ADMISSIONS),
];
const RIGHT: Group[] = [
  toGroup(DEPARTMENTS_NAV),
  toGroup(RESEARCH),
  toGroup(PLACEMENTS),
  toGroup(CAMPUS_LIFE),
];

const TOPBAR_LINKS: Array<{ label: string; to?: string; href?: string; params?: Record<string, string> }> = [
  { label: "Campus Tour",     to: "/campus-tour" },
  { label: "Circulars",       to: "/circulars" },
  { label: "Upcoming Events", to: "/upcoming-events" },
  { label: "NIRF",            to: "/nirf" },
  { label: "NABL",            to: "/p/$", params: { _splat: "nabl" } },
  { label: "Virtual Lab",     to: "/virtual-lab" },
  { label: "A-IMS FACULTY LOGIN", href: "https://aims.atme.edu.in/atme/" },
  { label: "A-IMS STUDENT LOGIN", href: "https://aims.atme.edu.in/portal/" },
];


const CET_CODES: Array<{ k: string; v: string }> = [
  { k: "CET",     v: "E205" },
  { k: "COMED-K", v: "E152" },
  { k: "MBA",     v: "B372" },
  { k: "MCA",     v: "C553" },
];

function NavItem({ g, align = "center" }: { g: Group; align?: "left" | "center" | "right" }) {
  if (!g.columns) {
    return (
      <Link to={g.to!} className="px-1.5 py-2 text-[13px] font-semibold tracking-wide text-[#129199] hover:text-[#0b5a5f] whitespace-nowrap transition-colors">
        {g.label}
      </Link>
    );
  }
  const cols = g.columns.length;
  const gridCols =
    cols >= 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" :
    cols === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" :
    cols === 2 ? "grid-cols-1 sm:grid-cols-2" :
    "grid-cols-1";
  const panelPos = align === "right" ? "right-0" : "left-0";
  const triggerClass = "px-1.5 py-2 text-[13px] font-semibold tracking-wide text-[#129199] rounded-t-md inline-flex items-center gap-1 whitespace-nowrap transition-colors relative z-[60] group-hover:text-white group-hover:bg-[#129199]";
  return (
    <div className="group relative">
      {g.to ? (
        <Link to={g.to} className={triggerClass}>
          {g.label} <ChevronDown className="h-3.5 w-3.5" />
        </Link>
      ) : (
        <button className={triggerClass}>
          {g.label} <ChevronDown className="h-3.5 w-3.5" />
        </button>
      )}
      <div className={`invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity absolute ${panelPos} top-full z-50`}>
        <div className="w-[min(96vw,720px)] lg:w-[60vw] xl:w-[50vw] lg:max-w-[1100px] lg:min-w-[760px]">
          <div className={`rounded-lg ${align === "right" ? "rounded-tr-none" : "rounded-tl-none"} border-t-4 border-[#129199] bg-white shadow-2xl p-4 md:p-6`}>
            <div className={`grid gap-5 md:gap-6 ${gridCols}`}>

              {g.columns.map((c) => (
                <div key={c.heading} className="min-w-0">
                  <div className="text-[12px] font-bold uppercase tracking-wider text-primary border-b border-primary/20 pb-2 mb-3">{c.heading}</div>
                  <ul className="space-y-2">
                    {c.links.map((l) => (
                      <li key={l.label}>
                        {l.href ? (
                          <a href={l.href} target="_blank" rel="noreferrer" className="block text-[14px] text-foreground/80 hover:text-primary hover:translate-x-0.5 transition-all break-words">{l.label}</a>
                        ) : (
                          <Link to={l.to as string} params={l.params as never} className="block text-[14px] text-foreground/80 hover:text-primary hover:translate-x-0.5 transition-all break-words">{l.label}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                  {c.groups?.map((sub) => (
                    <div key={sub.heading} className="mt-4">
                      <div className="text-[12px] font-bold uppercase tracking-wider text-primary border-b border-primary/20 pb-2 mb-3">{sub.heading}</div>
                      <ul className="space-y-2">
                        {sub.links.map((l) => (
                          <li key={l.label}>
                            {l.href ? (
                              <a href={l.href} target="_blank" rel="noreferrer" className="block text-[14px] text-foreground/80 hover:text-primary hover:translate-x-0.5 transition-all break-words">{l.label}</a>
                            ) : (
                              <Link to={l.to as string} params={l.params as never} className="block text-[14px] text-foreground/80 hover:text-primary hover:translate-x-0.5 transition-all break-words">{l.label}</Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




type SearchEntry = { label: string; to?: string; params?: Record<string, string>; href?: string; section?: string };

function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];
  const seen = new Set<string>();
  const push = (e: SearchEntry) => {
    const key = `${e.label}|${e.to ?? ""}|${JSON.stringify(e.params ?? {})}|${e.href ?? ""}`;
    if (seen.has(key)) return;
    seen.add(key);
    entries.push(e);
  };
  // Top-level routes
  const topLevel: SearchEntry[] = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Departments", to: "/departments" },
    { label: "Research", to: "/research" },
    { label: "Admissions", to: "/admissions" },
    { label: "Administration", to: "/administration" },
    { label: "Placements", to: "/placements" },
    { label: "Campus Life", to: "/campus-life" },
    { label: "Campus Tour", to: "/campus-tour" },
    { label: "Circulars", to: "/circulars" },
    { label: "Upcoming Events", to: "/upcoming-events" },
    { label: "NIRF", to: "/nirf" },
    { label: "Virtual Lab", to: "/virtual-lab" },
    { label: "Library", to: "/library" },
    { label: "Sports", to: "/sports" },
    { label: "Contact", to: "/contact" },
    { label: "Careers", to: "/careers" },
    { label: "News Clippings", to: "/news-clippings" },
    { label: "Mandatory Disclosure", to: "/mandatory-disclosure" },
    { label: "Hostel Policy", to: "/hostel-policy" },
    { label: "Women Cell", to: "/women-cell" },
    { label: "Employee Handbook", to: "/employee-handbook" },
    { label: "Student Handbook", to: "/student-handbook" },
    { label: "Professional Body Membership", to: "/professional-body-membership" },
    { label: "VTU Honor Degree", to: "/vtu-honor-degree" },
    { label: "VTU Minor Degree", to: "/vtu-minor-degree" },
    { label: "IIRS ISRO NC", to: "/iirs-isro-nc" },
    { label: "Atmeya", to: "/campus-life/atmeya" },
  ];
  topLevel.forEach(push);
  // From nav structure
  for (const section of [ABOUT, DEPARTMENTS_NAV, RESEARCH, ADMISSIONS, ADMINISTRATION, PLACEMENTS, CAMPUS_LIFE]) {
    for (const col of section.columns) {
      for (const l of col.links) push({ label: l.label, to: l.to, params: l.params, href: l.href, section: section.label });
      col.groups?.forEach((g) => g.links.forEach((l) => push({ label: l.label, to: l.to, params: l.params, href: l.href, section: section.label })));
    }
  }
  return entries;
}

const SEARCH_INDEX = buildSearchIndex();

export function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const allGroups = [...LEFT, ...RIGHT];

  const results = query.trim().length >= 2
    ? (() => {
        const q = query.trim().toLowerCase();
        const tokens = q.split(/\s+/).filter(Boolean);
        return SEARCH_INDEX
          .filter((e) => tokens.every((t) => e.label.toLowerCase().includes(t) || (e.section ?? "").toLowerCase().includes(t)))
          .slice(0, 12);
      })()
    : [];

  const closeSearch = () => { setSearchOpen(false); setQuery(""); };

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // If there is exactly one result or any results, fall through to clicking the first
    if (results.length > 0) {
      const first = results[0];
      if (first.href) {
        window.open(first.href, "_blank", "noopener");
      } else if (first.to) {
        // Use anchor navigation via location for simplicity
        const path = first.to.includes("$")
          ? first.to.replace(/\$(\w+)/g, (_, k) => (first.params?.[k] ?? ""))
          : first.to;
        window.location.assign(path);
      }
      closeSearch();
    }
  };


  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-border/60">
      {/* Topbar — single line, compact */}
      <div className="text-white text-[10px]" style={{ background: "linear-gradient(90deg, #0b5a5f 0%, #10747b 55%, #1aa39b 100%)" }}>
        <div className="max-w-[1600px] mx-auto px-2 sm:px-3 py-1 flex flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-x-2 sm:gap-x-4 gap-y-1">
          {/* Contact + CET codes */}
          <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-0.5 shrink-0">
            <a href="mailto:info@atme.edu.in" className="inline-flex items-center gap-1 hover:opacity-90">
              <Mail className="h-2.5 w-2.5 shrink-0" />
              <span className="font-semibold text-[10px] hidden sm:inline">info@atme.edu.in</span>
            </a>
            <a href="tel:+919036926363" className="inline-flex items-center gap-1 hover:opacity-90">
              <Phone className="h-2.5 w-2.5 shrink-0" />
              <span className="font-semibold text-[10px] whitespace-nowrap">+91-90369 26363</span>
            </a>
            <div className="flex items-center gap-x-1.5">
              {CET_CODES.map((c, i) => (
                <span key={c.k} className="inline-flex items-center gap-0.5 text-[10px]">
                  {i > 0 && <span className="opacity-40">|</span>}
                  <span className="font-semibold text-white/90">{c.k}:</span>
                  <span className="font-bold text-amber-300">{c.v}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Topbar nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-0.5 gap-y-0.5 text-[10px] font-semibold">
            {TOPBAR_LINKS.map((l, idx) => (
              <span key={l.label} className="inline-flex items-center">
                {idx > 0 && <span className="opacity-40 px-0.5">|</span>}
                {l.href ? (
                  <a href={l.href} target="_blank" rel="noreferrer" className="px-1 py-0.5 rounded hover:bg-white/10 hover:text-amber-200 transition-colors whitespace-nowrap">{l.label}</a>
                ) : (
                  <Link to={l.to!} params={l.params as never} className="px-1 py-0.5 rounded hover:bg-white/10 hover:text-amber-200 transition-colors whitespace-nowrap">{l.label}</Link>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>





      {/* Main header */}
      <div className="max-w-[1600px] mx-auto px-2 sm:px-3">
        <div className="flex min-[1440px]:grid min-[1440px]:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 min-[1440px]:gap-3 min-[1600px]:gap-6 py-2">
          {/* Left nav */}
          <nav className="hidden min-[1440px]:flex items-center justify-end gap-1.5 flex-nowrap">
            {LEFT.map(g => <NavItem key={g.label} g={g} align="left" />)}
          </nav>

          {/* Invisible spacer to balance search+hamburger on smaller screens */}
          <div className="flex-1 min-[1440px]:hidden" />

          {/* Center logo (nudged slightly left of true center) */}
          <Link to="/" className="shrink-0 flex items-center justify-center px-2 md:px-3 min-[1440px]:px-4 py-1 mx-auto min-[1440px]:-translate-x-4 hover:opacity-95 transition-opacity">
            <img src={resolveAssetUrl(logoAsset.url)} alt="ATME College of Engineering" className="w-36 md:w-44 lg:w-48 min-[1440px]:w-56 2xl:w-64 h-auto max-h-16 md:max-h-20 min-[1440px]:max-h-24 2xl:max-h-28 max-w-none object-contain drop-shadow-sm" />
          </Link>

          {/* Right side: nav + search + hamburger (desktop) */}
          <div className="hidden min-[1440px]:flex items-center gap-1.5">
            <nav className="flex-1 flex items-center justify-between gap-1.5 flex-nowrap">
              {RIGHT.map(g => <NavItem key={g.label} g={g} align="right" />)}
            </nav>
            <div className="flex flex-nowrap items-center gap-2 shrink-0">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setSearchOpen((v) => !v)}
                  aria-label="Search"
                  className="relative z-10 grid h-9 w-9 place-items-center rounded-full border border-border bg-white text-foreground/70 hover:text-primary hover:border-primary hover:bg-primary/5 transition-colors shrink-0"
                >
                  <Search className="h-4 w-4" />
                </button>
                {searchOpen && (
                  <div className="absolute right-0 top-full mt-2 w-[min(92vw,360px)] rounded-lg border border-border bg-white shadow-xl z-50 overflow-hidden">
                    <form onSubmit={onSearch} className="border-b border-border">
                      <input
                        autoFocus
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search pages…"
                        className="h-10 w-full bg-white px-3 text-sm outline-none focus:border-primary"
                      />
                    </form>
                    {query.trim().length >= 2 && (
                      <div className="max-h-[60vh] overflow-y-auto">
                        {results.length === 0 ? (
                          <div className="px-4 py-3 text-sm text-muted-foreground">No matches. Try different keywords.</div>
                        ) : (
                          <ul className="py-1">
                            {results.map((r, i) => (
                              <li key={i}>
                                {r.href ? (
                                  <a href={r.href} target="_blank" rel="noreferrer" onClick={closeSearch} className="block px-3 py-2 text-sm hover:bg-primary/5">
                                    <div className="font-medium text-foreground">{r.label}</div>
                                    {r.section && <div className="text-[11px] text-muted-foreground">{r.section}</div>}
                                  </a>
                                ) : (
                                  <Link to={r.to as string} params={r.params as never} onClick={closeSearch} className="block px-3 py-2 text-sm hover:bg-primary/5">
                                    <div className="font-medium text-foreground">{r.label}</div>
                                    {r.section && <div className="text-[11px] text-muted-foreground">{r.section}</div>}
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <button
                className="grid h-9 w-9 min-[1024px]:h-8 min-[1024px]:w-8 min-[1440px]:h-7 min-[1440px]:w-7 place-items-center rounded-full border border-border text-primary hover:bg-primary/5 transition-colors"
                onClick={() => setOpen(!open)}
                aria-label="Menu"
              >
                {open ? <X className="h-5 w-5 min-[1024px]:h-4 min-[1024px]:w-4 min-[1440px]:h-3.5 min-[1440px]:w-3.5" /> : <Menu className="h-5 w-5 min-[1024px]:h-4 min-[1024px]:w-4 min-[1440px]:h-3.5 min-[1440px]:w-3.5" />}
              </button>
            </div>
          </div>

          {/* Search + Hamburger (mobile) */}
          <div className="flex min-[1440px]:hidden flex-nowrap items-center gap-2 shrink-0 flex-1 justify-end">
            <div className="relative">
              <button
                type="button"
                onClick={() => setSearchOpen((v) => !v)}
                aria-label="Search"
                className="relative z-10 grid h-9 w-9 place-items-center rounded-full border border-border bg-white text-foreground/70 hover:text-primary hover:border-primary hover:bg-primary/5 transition-colors shrink-0"
              >
                <Search className="h-4 w-4" />
              </button>
              {searchOpen && (
                <div className="absolute right-0 top-full mt-2 w-[min(92vw,360px)] rounded-lg border border-border bg-white shadow-xl z-50 overflow-hidden">
                  <form onSubmit={onSearch} className="border-b border-border">
                    <input
                      autoFocus
                      type="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search pages…"
                      className="h-10 w-full bg-white px-3 text-sm outline-none focus:border-primary"
                    />
                  </form>
                  {query.trim().length >= 2 && (
                    <div className="max-h-[60vh] overflow-y-auto">
                      {results.length === 0 ? (
                        <div className="px-4 py-3 text-sm text-muted-foreground">No matches. Try different keywords.</div>
                      ) : (
                        <ul className="py-1">
                          {results.map((r, i) => (
                            <li key={i}>
                              {r.href ? (
                                <a href={r.href} target="_blank" rel="noreferrer" onClick={closeSearch} className="block px-3 py-2 text-sm hover:bg-primary/5">
                                  <div className="font-medium text-foreground">{r.label}</div>
                                  {r.section && <div className="text-[11px] text-muted-foreground">{r.section}</div>}
                                </a>
                              ) : (
                                <Link to={r.to as string} params={r.params as never} onClick={closeSearch} className="block px-3 py-2 text-sm hover:bg-primary/5">
                                  <div className="font-medium text-foreground">{r.label}</div>
                                  {r.section && <div className="text-[11px] text-muted-foreground">{r.section}</div>}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
            <button
              className="grid h-9 w-9 min-[1024px]:h-8 min-[1024px]:w-8 min-[1440px]:h-7 min-[1440px]:w-7 place-items-center rounded-full border border-border text-primary hover:bg-primary/5 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5 min-[1024px]:h-4 min-[1024px]:w-4 min-[1440px]:h-3.5 min-[1440px]:w-3.5" /> : <Menu className="h-5 w-5 min-[1024px]:h-4 min-[1024px]:w-4 min-[1440px]:h-3.5 min-[1440px]:w-3.5" />}
            </button>
          </div>
        </div>
      </div>


      {/* Decorative gradient underline */}
      <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg, #0b5a5f 0%, #1aa39b 50%, #f5b945 100%)" }} />


      {/* Mobile menu */}
      {open && (
        <div className="border-t-2 border-[#f5b945] bg-gradient-to-b from-[#0b5a5f] to-[#0d4548] max-h-[80vh] overflow-y-auto">
          <div className="max-w-[1600px] mx-auto px-4 py-4">
            {allGroups.map((g) => (
              g.columns ? (
                <details key={g.label} className="group border-b border-white/10 last:border-0">
                  <summary className="cursor-pointer flex items-center justify-between py-3 font-semibold text-white text-sm list-none">
                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#f5b945]" />
                      {g.label}
                    </span>
                    <span className="text-[#f5b945] text-lg leading-none transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="pl-4 pb-3 space-y-3 border-l-2 border-[#f5b945]/40 ml-1">
                    {g.columns.map((c) => (
                      <div key={c.heading}>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-[#f5b945] mt-2">{c.heading}</div>
                        <ul className="mt-1.5 space-y-0.5">
                          {c.links.map((l) => (
                            <li key={l.label}>
                              {l.href ? (
                                <a href={l.href} target="_blank" rel="noreferrer" className="block py-1.5 text-sm text-white/85 hover:text-[#f5b945] transition-colors">{l.label}</a>
                              ) : (
                                <Link to={l.to as string} params={l.params as never} onClick={() => setOpen(false)} className="block py-1.5 text-sm text-white/85 hover:text-[#f5b945] transition-colors">{l.label}</Link>
                              )}
                            </li>
                          ))}
                        </ul>
                        {(c as { groups?: { heading: string; links: typeof c.links }[] }).groups?.map((sub) => (
                          <div key={sub.heading} className="mt-2">
                            <div className="text-[10px] font-bold uppercase tracking-widest text-[#f5b945]/80">{sub.heading}</div>
                            <ul className="mt-1.5 space-y-0.5">
                              {sub.links.map((l) => (
                                <li key={l.label}>
                                  {l.href ? (
                                    <a href={l.href} target="_blank" rel="noreferrer" className="block py-1.5 text-sm text-white/85 hover:text-[#f5b945] transition-colors">{l.label}</a>
                                  ) : (
                                    <Link to={l.to as string} params={l.params as never} onClick={() => setOpen(false)} className="block py-1.5 text-sm text-white/85 hover:text-[#f5b945] transition-colors">{l.label}</Link>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </details>
              ) : (
                <div key={g.label} className="border-b border-white/10 last:border-0">
                  <Link to={g.to!} onClick={() => setOpen(false)} className="flex items-center gap-2 py-3 font-semibold text-white text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#f5b945]" />
                    {g.label}
                  </Link>
                </div>
              )
            ))}
            <Link to="/admissions" onClick={() => setOpen(false)} className="mt-4 block rounded-md bg-[#f5b945] hover:bg-[#e0a830] px-4 py-3 text-center text-sm font-bold text-[#0b5a5f] shadow-lg transition-colors">Apply Now →</Link>
          </div>
        </div>
      )}
    </header>
  );
}
