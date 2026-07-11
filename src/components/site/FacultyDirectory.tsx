import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUp, ArrowUpDown, Users } from "lucide-react";
import type { Faculty } from "@/data/departments";
import { mergeFaculty, normalizeFacultyImageUrl, parseQualificationList } from "@/data/facultyDerived";
import { expandDesignation } from "@/lib/deptNames";
import { formatFacultyName } from "@/lib/facultyName";



type Category = "teaching" | "technical" | "supporting";

export function categorize(designation = ""): Category {
  const d = designation.toLowerCase();
  if (/programmer|programer|foreman|instructor|technician|analyst|engineer|developer|operator|lab assistant|mechanic|electrician|fitter|welder|carpenter|plumber|workshop/.test(d)) return "technical";
  if (/professor|principal|hod|lecturer|faculty|dean/.test(d)) return "teaching";
  return "supporting";
}

const TABS: { key: Category; label: string }[] = [
  { key: "teaching", label: "Teaching Staff" },
  { key: "technical", label: "Technical Staff" },
  { key: "supporting", label: "Supporting Staff" },
];


export function FacultyDirectory({
  slug,
  faculty,
  groups,
}: {
  slug: string;
  faculty?: Faculty[];
  groups?: Partial<Record<Category, Faculty[]>>;
  initial?: string;
}) {
  const enriched = useMemo(() => {
    const dedupe = (list: Faculty[]) => {
      const byName = new Map<string, Faculty & { experience?: string }>();
      const clean = (value?: string) => value?.trim() || undefined;
      const nameKey = (value: string) => value.toLowerCase().replace(/\b(dr|mr|mrs|ms|prof)\.?\b/g, "").replace(/[^a-z0-9]/g, "");
      for (const raw of list) {
        const item = mergeFaculty(raw) as Faculty & { experience?: string };
        const key = nameKey(item.name);
        const existing = byName.get(key);
        if (!existing) { byName.set(key, item); continue; }
        const preferIncomingProfile = !/faculty-profile|faculty-profiles|faculty-details/i.test(item.cvUrl || "");
        // Prefer a "well-formatted" name: more whitespace separators, contains a dot, mixed case.
        const score = (n: string) => {
          const s = n.trim();
          if (!s) return -1;
          const spaces = (s.match(/\s/g) || []).length;
          const hasDot = /\./.test(s) ? 1 : 0;
          const mixedCase = /[a-z]/.test(s) && /[A-Z]/.test(s) ? 1 : 0;
          return spaces * 3 + hasDot * 2 + mixedCase + s.length * 0.01;
        };
        const pickName = score(existing.name) >= score(item.name) ? existing.name : item.name;
        const pickImage = (a?: string, b?: string) => {
          const av = a?.trim(); const bv = b?.trim();
          if (av && bv) {
            if (/\/__l5e\/assets-v1\//.test(av)) return av;
            if (/\/__l5e\/assets-v1\//.test(bv)) return bv;
            return /\.jpe?g\.jpeg$|\.jpeg$/i.test(av) ? av : (/\.jpe?g\.jpeg$|\.jpeg$/i.test(bv) ? bv : av);
          }
          return normalizeFacultyImageUrl(av || bv || "");
        };
        byName.set(key, {
          ...existing,
          id: preferIncomingProfile ? item.id : existing.id,
          name: pickName,
          cvUrl: preferIncomingProfile ? item.cvUrl : existing.cvUrl,
          image: pickImage(existing.image, item.image),
          designation: clean(existing.designation) || clean(item.designation) || "",
          qualification: clean(existing.qualification) || clean(item.qualification) || "",
          doj: clean(existing.doj) || clean(item.doj) || "",
          experience: clean(existing.experience) || clean(item.experience),
        });
      }
      return Array.from(byName.values());
    };

    const finalize = (list: Faculty[]) =>
      list.map((f) => ({ ...f, name: formatFacultyName(f.name) }));

    if (groups) {
      return {
        teaching: finalize(dedupe(groups.teaching ?? [])),
        technical: finalize(dedupe(groups.technical ?? [])),
        supporting: finalize(dedupe(groups.supporting ?? [])),
      } as Record<Category, Faculty[]>;
    }
    // Fallback: auto-categorize a flat list
    const flat = dedupe(faculty ?? []);
    const out: Record<Category, Faculty[]> = { teaching: [], technical: [], supporting: [] };
    for (const f of flat) out[categorize(f.designation)].push(f);
    (Object.keys(out) as Category[]).forEach((k) => { out[k] = finalize(out[k]); });
    return out;

  }, [faculty, groups]);

  const counts = useMemo(() => ({
    teaching: enriched.teaching.length,
    technical: enriched.technical.length,
    supporting: enriched.supporting.length,
  }), [enriched]);

  const visibleTabs = TABS;
  const firstNonEmpty = (visibleTabs.find((t) => counts[t.key] > 0)?.key) ?? "teaching";
  const [active, setActive] = useState<Category>(firstNonEmpty);
  const [sortKey, setSortKey] = useState<"name" | "doj" | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const baseList = enriched[active];

  const parseDoj = (s?: string): number => {
    const v = (s || "").trim();
    if (!v) return Number.POSITIVE_INFINITY;
    const t = Date.parse(v);
    if (!Number.isNaN(t)) return t;
    // Try dd-mm-yyyy / dd/mm/yyyy
    const m = v.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{2,4})$/);
    if (m) {
      const [_, d, mo, y] = m;
      const yr = y.length === 2 ? 2000 + Number(y) : Number(y);
      const t2 = Date.parse(`${yr}-${mo.padStart(2, "0")}-${d.padStart(2, "0")}`);
      if (!Number.isNaN(t2)) return t2;
    }
    // Try month yyyy
    const t3 = Date.parse("01 " + v);
    return Number.isNaN(t3) ? Number.POSITIVE_INFINITY : t3;
  };

  const filtered = useMemo(() => {
    if (!sortKey) return baseList;
    const list = [...baseList];
    list.sort((a, b) => {
      let cmp = 0;
      if (sortKey === "name") {
        cmp = a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
      } else {
        cmp = parseDoj(a.doj) - parseDoj(b.doj);
      }
      return sortDir === "asc" ? cmp : -cmp;
    });
    return list;
  }, [baseList, sortKey, sortDir]);

  const toggleSort = (key: "name" | "doj") => {
    if (sortKey !== key) { setSortKey(key); setSortDir("asc"); return; }
    if (sortDir === "asc") { setSortDir("desc"); return; }
    setSortKey(null); setSortDir("asc");
  };

  const SortIcon = ({ k }: { k: "name" | "doj" }) => {
    if (sortKey !== k) return <ArrowUpDown className="h-3.5 w-3.5 opacity-70" />;
    return sortDir === "asc" ? <ArrowUp className="h-3.5 w-3.5" /> : <ArrowDown className="h-3.5 w-3.5" />;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm text-muted-foreground inline-flex items-center gap-2">
          <Users className="h-4 w-4" style={{ color: "#129199" }} />
          <span><strong className="text-foreground">{filtered.length}</strong> members</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {visibleTabs.map((t) => {
            const isActive = active === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setActive(t.key)}
                className={
                  "px-4 py-2 rounded-full text-xs md:text-sm font-semibold border-2 transition-colors " +
                  (isActive
                    ? "bg-[#129199] text-white border-[#129199]"
                    : "bg-white text-[#129199] border-[#f5c518] hover:bg-[#129199]/5")
                }
              >
                {t.label}
                <span className={"ml-2 inline-flex items-center justify-center rounded-full px-1.5 text-[10px] " + (isActive ? "bg-white/20 text-white" : "bg-[#129199]/10 text-[#129199]")}>
                  {counts[t.key]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center text-sm text-muted-foreground">
          No members listed in this category.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map((f) => (
              <Link
                key={"card-" + f.id + f.name}
                to="/departments/$slug/faculty/$facultyId"
                params={{ slug, facultyId: f.id }}
                className="group flex flex-col rounded-2xl border-2 border-[#f5c518] bg-card overflow-hidden hover:border-[#129199] transition-colors"
              >
                <div className="aspect-[4/5] w-full overflow-hidden relative bg-[#f1f5f9]">
                  {f.image ? (
                    <>
                      <div aria-hidden className="absolute inset-0 grid place-items-center text-4xl font-bold text-[#129199]/40">
                        {f.name[0]}
                      </div>
                      <img
                        src={f.image}
                        alt={f.name}
                        loading="lazy"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                        className="relative h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
                      />
                    </>
                  ) : (
                    <div className="h-full w-full grid place-items-center text-4xl font-bold text-[#129199]">
                      {f.name[0]}
                    </div>
                  )}
                </div>
                <div className="p-3 flex flex-col gap-1 flex-1">
                  <div className="text-sm font-semibold text-foreground leading-tight line-clamp-2 group-hover:text-[#129199]">
                    {f.name}
                  </div>
                  <div className="text-[13px] md:text-sm text-muted-foreground line-clamp-2 font-medium">
                    {expandDesignation(f.designation?.trim()) || "Faculty Member"}
                  </div>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center text-[11px] font-semibold text-[#129199] group-hover:underline">
                      View Profile →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {active === "teaching" && (
            <div className="rounded-2xl border-2 border-[#f5c518] bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-[#129199] text-white">
                    <tr>
                      <th className="px-3 py-3 text-left font-semibold whitespace-nowrap">Sl. No.</th>
                      <th className="px-3 py-3 text-left font-semibold">
                        <button type="button" onClick={() => toggleSort("name")} className="inline-flex items-center gap-1.5 hover:underline">
                          Name <SortIcon k="name" />
                        </button>
                      </th>
                      <th className="px-3 py-3 text-left font-semibold">Qualification</th>
                      <th className="px-3 py-3 text-left font-semibold">Designation</th>
                      <th className="px-3 py-3 text-left font-semibold whitespace-nowrap">
                        <button type="button" onClick={() => toggleSort("doj")} className="inline-flex items-center gap-1.5 hover:underline">
                          Date of joining <SortIcon k="doj" />
                        </button>
                      </th>
                      <th className="px-3 py-3 text-left font-semibold whitespace-nowrap">Nature of association</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((f, idx) => {
                      const designation = expandDesignation(f.designation?.trim()) || "Faculty Member";
                      const nature = (f as Faculty & { nature?: string }).nature || "Regular";
                      return (
                        <tr
                          key={"row-" + f.id + f.name}
                          className={idx % 2 === 0 ? "bg-white" : "bg-[#129199]/5"}
                        >
                          <td className="px-3 py-3 align-top text-center text-foreground/80">{idx + 1}</td>
                          <td className="px-3 py-3 align-top">
                            <Link
                              to="/departments/$slug/faculty/$facultyId"
                              params={{ slug, facultyId: f.id }}
                              className="font-semibold text-[#129199] hover:underline"
                            >
                              {f.name}
                            </Link>
                          </td>
                          <td className="px-3 py-3 align-top text-foreground/85">{(() => {
                            // Show only degree tokens (e.g. BE, ME, MTech, PhD), not full descriptions.
                            // A degree still "Pursuing" is not yet held — strip those clauses so an
                            // in-progress PhD doesn't get shown as a completed one (falls through to
                            // the next, already-completed degree instead).
                            const stripPursuing = (s: string) => s.replace(/\bpursuing\b[^,|]*/gi, "");
                            const items = parseQualificationList(f.qualification).filter((it) => !/^pursuing\b/i.test(it));
                            const blob = stripPursuing(items.join(" , ") + " " + (f.qualification || ""));
                            const DEGREES: { re: RegExp; label: string }[] = [
                              { re: /\bPh[\.\s]*D\b/i, label: "PhD" },
                              { re: /\bM[\.\-\s]*Tech\b/i, label: "MTech" },
                              { re: /\bB[\.\-\s]*Tech\b/i, label: "BTech" },
                              { re: /\bM\.?\s*E\b/, label: "ME" },
                              { re: /\bB\.?\s*E\b/, label: "BE" },
                              { re: /\bM\.?\s*Sc\b/i, label: "MSc" },
                              { re: /\bB\.?\s*Sc\b/i, label: "BSc" },
                              { re: /\bMCA\b/i, label: "MCA" },
                              { re: /\bBCA\b/i, label: "BCA" },
                              { re: /\bMBA\b/i, label: "MBA" },
                              { re: /\bBBA\b/i, label: "BBA" },
                              { re: /\bM\.?\s*Phil\b/i, label: "MPhil" },
                              { re: /\bM\.?\s*A\b/, label: "MA" },
                              { re: /\bB\.?\s*A\b/, label: "BA" },
                              { re: /\bDiploma\b/i, label: "Diploma" },
                            ];
                            const found: string[] = [];
                            for (const d of DEGREES) {
                              if (d.re.test(blob) && !found.includes(d.label)) found.push(d.label);
                            }
                            return found.length ? found.join(", ") : "";
                          })()}</td>
                          <td className="px-3 py-3 align-top text-foreground/85">{designation}</td>
                          <td className="px-3 py-3 align-top whitespace-nowrap text-foreground/85">{f.doj?.trim() || "—"}</td>
                          <td className="px-3 py-3 align-top whitespace-nowrap text-foreground/85">{nature}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}

    </div>
  );
}
