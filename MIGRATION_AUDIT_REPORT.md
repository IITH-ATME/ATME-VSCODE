# Department Migration Audit Report

Read-only audit. **No files were modified to produce this report.** Source of truth for content: `https://old.atme.edu.in`. Source of truth for design/layout/components/styling/navigation: the current React app (unchanged).

Scope: all 16 live departments in `src/data/departmentsIndex.ts`. Per your instruction, `resources` (Student Learning Centric), COE, and Newsletter/Magazine pages are **out of scope** and not flagged below except where a shared bug affects them incidentally.

Method: 5 parallel research passes (grouped by department) plus a direct pass on CSE using this session's existing work, each comparing `src/data/deptScraped.json` / `departments.ts` / `allFaculty.ts` / `facultyPageOverrides.ts` / `infrastructureScraped.ts` against live fetches of `old.atme.edu.in`. Individual faculty verification was spot-checked (2-3 people per department), not exhaustive across all ~150+ faculty — full per-person verification happens during each department's actual implementation pass.

---

## Cross-cutting bugs (affect multiple departments — fix once, benefits everywhere)

1. **About pages don't render scraped content at all.** `DepartmentAboutView` in `src/routes/departments.$slug.$page.tsx` explicitly ignores `deptScraped.json` markdown and renders only curated fields (`about`, `vision`, `mission`, `peo`, `po`, `pso`, `programmes`, `shortTermGoals`, `longTermGoals`, `hod`) from `src/data/departments.ts`. Whenever a department's `make(...)` call doesn't set these fields, generic boilerplate renders instead — even when the correct department-specific text already exists, unused, in `deptScraped.json`. Confirmed affecting **ME, CE, AIML(partially), CY, DS**.
2. **Infrastructure tab ignores scraped content when `INFRA_DATA` has no entry for a department**, showing "Coming Soon" instead. `INFRA_DATA` (`src/data/infrastructureScraped.ts`) has no `physics`, `chemistry`, or `mathematics` entry. This is actively hiding real, already-scraped content for **Chemistry** (2,303 chars) and **Mathematics** (410 chars); costs nothing for Physics (its scraped page is pure boilerplate).
3. **Humanities is completely unreachable beyond its Faculty tab.** `src/data/deptPageConfig.ts` has no `humanities` entry at all, and `isCanonicalSectionAvailable`'s HOD-based gate means `/departments/humanities` unconditionally redirects to the faculty directory. Real About/Vision/Mission/PEO text already exists, unused, in `departments.ts`.
4. **Broken default faculty-list PDF links** for AIML, CSD, CY, DS — the `make()` helper's fallback template `https://atme.edu.in/wp-content/uploads/2025/09/${code}-Faculty-List-for-the-Academic-Year-2025-26.pdf` 404s for all four (AIML's is additionally malformed by the `&` in its code `AI&ML`).
5. **`eceStaff`/`eeeStaff`/similar `*Staff` arrays are empty** — technical/support staff for several departments live inside the main `*AllFaculty` array instead, which works today but isn't the pattern the type implies.
6. Every scraped page carries a `[ip stresser](https://stresserhub.org/)` spam-injection artifact from the WordPress scrape. **Already handled** — `sanitizeMarkdown.ts` strips it before render. No action needed.

---

## CSE — Computer Science & Engineering

*(Audited directly using this session's existing deep work on this department, plus a fresh sourceURL check.)*

### Files that would need changes
- `src/data/deptScraped.json` (7 subpage keys)

### Missing/thin content
**Only 2 of CSE's 9 in-scope content subpages have been verified/rebuilt against `old.atme.edu.in`** (Research Initiative, Extra-Curricular Activities — both already fixed this session). The other **7 are still sourced from a self-scrape of `atme.edu.in` (the new site) rather than `old.atme.edu.in`**, the same corruption pattern already found and fixed twice this session (PDF.js viewer chrome text, merged tables, missing sections, spam links):
- `cs-infrastructure` (Infrastructure)
- `industry-interface-3` (Industry Interface)
- `placement-details` (Placements)
- `about-the-department` (About)
- `cse-faculty-profile` (HOD Profile)
- `achievements-2` (Achievements)
- `teachers-teaching-analysis` (Teaching Analysis)

These need the exact same rebuild treatment already proven to work: fetch the real `old.atme.edu.in` content and replace.

### Missing images
None newly identified beyond the faculty-photo work already done this session (Ashwini P + 6 technical staff, already fixed).

### Missing PDFs
Not yet checked for the 7 unverified subpages above — will surface once they're rebuilt.

### Missing/incomplete tables
Not yet checked for the 7 unverified subpages above.

### Missing faculty information
Already substantially addressed this session (Bindushree V/Arpitha A qualification-tag bug, Puttegowda D's Industry Experience/Roles/Membership table/publication split, Vanishree's experience-unit bug, 6 missing technical staff added then corrected to the confirmed 9-person live roster). No further known gaps, but not every one of CSE's ~50+ faculty has been individually re-verified against old.atme.edu.in.

### Already correct — do not touch
- `research-initiative` (rebuilt from old.atme.edu.in this session, including the rowspan-merged scholars table)
- `extra-curricular-activities` (rebuilt from old.atme.edu.in this session, all 6 year-tabs)
- Technical Staff roster (9 people, verified against a user-supplied reference screenshot)
- Ashwini P and all faculty photo fixes made this session

---

## ECE — Electronics & Communication Engineering

### Files that would need changes
- `src/data/departments.ts` — `make("ece", ...)` (~line 402) needs `vision`, `mission`, `peo`, `po`, `pso`, `programmes`, `shortTermGoals`, `longTermGoals` added (the correct text already exists in `deptScraped.json`'s `about-the-department-2`, verified byte-for-byte against the live site — **no re-fetching needed**, just wiring)
- `src/data/allFaculty.ts` — add 3 missing Supporting Staff: **Sudhakar M, Yogesha K C, Chandrashekar K** (full profile markdown for 2 of the 3 already exists unused in `facultyPageOverrides.ts`/`facultyPages.ts`)

### Missing/thin content
About page shows generic department-agnostic boilerplate instead of real Vision/Mission/PEO/PO(with Programme table)/PSO/Goals text (see cross-cutting bug #1). Correct old-site ECE URL slug is `electronics-communication-engineering` (no "and").

### Missing images
None found (a generic hero banner replaces old-site inline photos — appears to be an intentional site-wide design choice, not a bug).

### Missing PDFs
None found — all PDF links resolve via the existing `pdfAssets.json` + `old.atme.edu.in` fallback mechanism.

### Missing/incomplete tables
Programme/Course table on the About page (blocked by the same wiring gap above).

### Missing faculty information
3 Supporting Staff missing from the roster entirely (see Files above). Spot-checked 3 teaching faculty (Dr. L Basavaraj, Dr. Prathiba M K, Mr. Manjunath K) — all fully migrated, no gaps.

### Already correct — do not touch
Infrastructure, Achievements, Research Initiatives, Industry Interface, Placements, Training & Internships, R&D for Students, Activities — all rich, verified, no gaps. HOD message/photo on About page.

**Note:** the "HOD Profile" nav item's content is actually a full staff-photo directory, not an HOD bio (the real HOD bio is correctly on the About page). This is a labeling/content-mapping question for you, not something to silently change.

---

## EEE — Electrical & Electronics Engineering

### Files that would need changes
- `src/data/allFaculty.ts` — add 2 missing Technical Staff: **Jeevan Kumar P, Swamy T**

### Missing/thin content
None — About page (Vision/Mission/PEO/PO/PSO/HOD/Programme table/Goals) is **fully and accurately curated already**, verified against the live site including the "Emitting Elite Energy" HOD quote.

### Missing images
None (same generic-hero-banner pattern as ECE, appears intentional).

### Missing PDFs
None found — resolve via existing mechanism.

### Missing/incomplete tables
None.

### Missing faculty information
2 Technical Staff missing from roster. One person (**Nagendra R**) is currently attributed to Mechanical Engineering's roster but the old EEE technical-staff page links his profile — needs a human decision on correct department. Spot-checked 3 teaching faculty — no gaps found.

### Already correct — do not touch
About page in full (Vision/Mission/PEO/PO/PSO/HOD/Goals/Programme table). Infrastructure, Achievements, Research Initiatives, Industry Interface, Placements, Professional Society Activities, Teaching Analysis, Activities, Counselling — all verified rich and correct.

**Minor flag (not necessarily a bug):** EEE's `po` field uses the newer 11-item NBA "Graduate Attributes" framework; the live old-site page shows the classic 12-item PO1–PO12 list. Worth confirming which is current with the department before touching.

---

## ME — Mechanical Engineering

### Files that would need changes
- `src/data/departments.ts` — `make("me", ...)` (~line 520): add `about`, `vision`, `mission`, `peo`, `pso`, `programmes`, `shortTermGoals`, `longTermGoals` (correct text already exists verbatim in `deptScraped.json`'s `about-mechanical-department-2` — no re-fetching needed)
- `src/data/allFaculty.ts` — add 4 missing teaching staff: **Dr. Mohana Kumar K C, Mr. Raghu, Mr. Niranjan Kumar V S, Mr. Hemanth B R**
- `src/data/deptScraped.json` — `me.counselling-module` and `me.teachers-teaching-analysis`: fix Google-Docs-viewer-wrapped PDF links so they render as proper download cards

### Missing/thin content
About page shows generic boilerplate instead of the real ME-specific Vision/Mission (3)/PEOs (4)/PSOs (2)/Courses table/Goals (same wiring gap as ECE).

### Missing images
None identified.

### Missing PDFs
Counselling Module and Teachers Feedback Analysis PDFs are present on the old site but wrapped in a broken `docs.google.com/viewer?url=` format that the app's PDF-card extractor won't recognize — needs fixing/re-verifying, not necessarily re-downloading.

### Missing/incomplete tables
Courses table, Short/Long Term Goals (blocked by the About wiring gap). Class In-Charge table doesn't exist as a concept anywhere in the app (site-wide gap, not ME-specific — flagging for your decision on whether to add it).

### Missing faculty information
4 teaching staff missing entirely (Technical and Supporting staff already match exactly). Spot-checked 3 faculty (HOD Dr. Chethan S, Dr. Srinivasa K, Mr. Ravikumar S) — no gaps found, already comprehensively migrated.

### Already correct — do not touch
`deptScraped.json`'s About markdown itself (byte-for-byte mirror of the live site — the fix is wiring it into `departments.ts`, not re-scraping). Achievements (25 sub-sections, 2015-2025), Research Initiative, Industry Interface, Activities — all comprehensive. Infrastructure (curated `INFRA_DATA['me']`, 14 lab sections + 3 images) — largely correct; old site also has separate "Staff Facilities"/"Student Facilities" headings not reflected, likely folded into the intro (worth a quick check, not a hard gap).

---

## CE — Civil Engineering

### Files that would need changes
- `src/data/departments.ts` — `make("ce", ...)` (~line 524): add `about`, `vision`, `mission`, `peo`, `pso`, `programmes`, `shortTermGoals`, `longTermGoals` (correct text already exists verbatim in `deptScraped.json`'s `about-the-department-2`)
- `src/data/allFaculty.ts` — add 2 missing teaching staff (**Dr. Syed Shakeeb Ur-Rahman, Dr. Pujitha Ganapathi C.**), 1 technical staff (**Mr. H Dharaneesha**), 1 supporting staff (**Muthegowda V**)
- `src/data/deptScraped.json` — `ce.counselling-module`/`ce.teachers-teaching-analysis` markdown has no PDF link at all, only leftover viewer chrome text

### Missing/thin content
Same About-page wiring gap as ME/ECE — real Vision/Mission (3)/PEOs (4)/PSOs (2)/Courses table/Goals text confirmed to exist in the scrape already, just not wired through.

**Infrastructure:** CE has no dedicated Infrastructure page on the live legacy site at all — `civil-engineering/infrastructure/` silently 302-redirects to ECE's infrastructure page (a WordPress quirk, not something to migrate from). CE's current Infrastructure tab instead uses curated `INFRA_DATA['ce']` content (8 lab write-ups, 5 images) that **cannot be verified against a live old-site source** since none exists — recommend department sign-off on this content rather than treating it as a normal gap.

### Missing images
None newly identified.

### Missing PDFs
**Counselling Module** (`https://old.atme.edu.in/wp-content/uploads/2022/11/Counseling-module-format.pdf`) and **Teachers Feedback Analysis** (`https://old.atme.edu.in/wp-content/uploads/2022/11/TEACHERS-FEEDBACK-ANALYSIS.pdf`) — both confirmed to exist on the old site, both entirely missing from React data.

### Missing/incomplete tables
Courses table, Goals (blocked by About wiring gap).

### Missing faculty information
4 people missing from roster (see Files above). One roster entry, **Dr. Nalini Elizabeth Rebello**, doesn't appear on the current old-site listing at all — likely a newer hire not yet reflected on the legacy site; recommend confirming rather than removing. Spot-checked 3 faculty (HOD Dr. Jyothi D N, Mr. Manu Vijay, Mrs. Shruthi H G) — no gaps found.

### Already correct — do not touch
About markdown (mirror already exists, needs wiring not re-scraping). Achievements (27K chars, 2014-2020s), Research Initiatives, Industry Interface (full MoU partner list with contacts), Activities (90K chars) — all comprehensive. Placement page verified to genuinely match the old site's own minimal one-paragraph content — not a gap.

---

## AIML — CSE (Artificial Intelligence & Machine Learning)

### Files that would need changes
- `src/data/facultyPageOverrides.ts` — 7 of 8 faculty have no detailed profile at all
- `src/data/departments.ts` — fix the broken faculty-list PDF link (code `AI&ML` breaks the URL template)

### Missing/thin content
None at the subpage-category level — old site's own AIML nav genuinely only has About, Staff Details, Resources, COE. Current config already covers everything that exists live.

### Missing images
None identified.

### Missing PDFs
Default faculty-list PDF link 404s (cross-cutting bug #4).

### Missing/incomplete tables
Faculty roster table on the old site itself is stale (omits 3 of 8 people with photos) — this is a legacy-site issue that will carry over verbatim if migrated as-is; flagging for awareness, not something to silently "fix" since it's the source of truth.

### Missing faculty information
**7 of 8 faculty (all except HOD Dr. Anil Kumar C J) have zero profile depth** — no qualification detail, publications, contact info. Confirmed a rich real profile exists for at least one (Hussana Johar R B: Ph.D., 14 yrs, Google Scholar/Scopus/ORCID/Web of Science, 12 publications, IEEE Senior Member) that's entirely unused.

### Already correct — do not touch
Vision, Mission (3), PEO (3), PSO (2), PO (12), HOD message, Programme table — all verified word-for-word correct against the live site already.

---

## CSD — Computer Science & Design

### Files that would need changes
- `src/data/deptPageConfig.ts` — add up to 7 new subpage keys (see below)
- `src/data/deptScraped.json` — scrape those new pages from `old.atme.edu.in`
- `src/data/facultyPageOverrides.ts` — 4 of 10 faculty missing overrides

### Missing/thin content — priority finding
**CSD is the most under-migrated department found in this audit.** Of 13 subpages that exist on the live old site, only 3 are configured in React (Infrastructure, Faculty, Resources). Confirmed missing: **Industry Interface, Research Initiatives, R&D for Students, Training & Internship, Co-curricular/Extracurricular Activities, Placements & Higher Studies**, and — critically — **Achievements**, which was directly verified to contain rich, ready-to-migrate content (a registered student startup "SKULLERR," a national paper award, Smart India Hackathon 2023 finalists, a 9-row student-publications table, a 9-row FDP table). About page also entirely missing (though live site itself has no dedicated About page either — only HOD message + intro text embedded in the landing page, which is already captured).

**⚠️ Suspected wrong-department content:** CSD's currently-configured Infrastructure page (`cs-infrastructure`) contains what looks like **verbatim CSE department content** (identical opening paragraph and banner image to CSE's own infrastructure page). CSD's actual dedicated URL (`csd-infrastructure/`) is different and returned inconclusive results — **recommend manually checking this in a browser before deciding whether to replace it.**

### Missing images
Not separately confirmed beyond the infra-mixup above.

### Missing PDFs
Default faculty-list PDF 404s (cross-cutting bug #4).

### Missing/incomplete tables
The Achievements page's two tables (publications, FDP participation) — entirely unmigrated since the page itself doesn't exist in React yet.

### Missing faculty information
4 of 10 faculty (**Dr. Shwetha G K, Lavanya N, Pushpa P, Janhavi Nandish**) have no profile overrides.

### Already correct — do not touch
HOD message (Dr. Nasreen Fathima, confirmed legitimately shared with CY — not a copy-paste error) and About text match the live site.

---

## CY — CSE (Cyber Security)

### Files that would need changes
- `src/data/deptPageConfig.ts` — add About
- `src/data/deptScraped.json` — scrape the About/landing page
- `src/data/departments.ts` — replace generic Vision/Mission/PEO/PSO with the real CY-specific text (already extracted verbatim during the audit, see below)
- `src/data/facultyPageOverrides.ts` — 6 of 7 faculty have zero profile depth

### Missing/thin content
Unlike CSD, CY genuinely has almost nothing on the legacy site beyond About/Faculty/Resources/COE (confirmed — Infrastructure/Achievements pages return real 404s, not just thin content). The one real, high-value gap: **About page is entirely unscraped**, and it contains substantial content already extracted during this audit — full department description, Vision, Mission (M1-M4), PEO1-3, PSO1-3, HOD photo/message.

### Missing images
None specifically identified beyond the About page banner/HOD photo not yet pulled in.

### Missing PDFs
Default faculty-list PDF 404s (cross-cutting bug #4).

### Missing/incomplete tables
None beyond the About content gap.

### Missing faculty information
**6 of 7 teaching faculty have zero profile overrides.** Confirmed a rich real profile exists for Dr. Pavithra M S (Ph.D., 12 yrs, Scopus/Google Scholar/LinkedIn, 9 publications, NIRF/NPTEL coordinator) — entirely unused. Note: her legacy profile is filed under "MCA program" — worth confirming correct department attribution before importing.

### Already correct — do not touch
Faculty and Resources subpages already correctly configured and matching the live site. `about` text and HOD message in `departments.ts` closely match (though not yet surfaced as a dedicated page — see above).

---

## DS — CSE (Data Science)

### Files that would need changes
- `src/data/deptPageConfig.ts` — add Infrastructure, Research Initiative, Co-curricular Activities, Annual Report; relabel `ds-faculty-profile` from "HOD Profile" to "Faculty" (it's actually a full staff roster, not an HOD bio — DS's HOD message lives inside the About page instead)
- `src/data/deptScraped.json` — scrape the 4 new pages
- `src/data/departments.ts` — wire in the real Vision/Mission(3)/PEO(5)/PSO(3)/Programme table (already verbatim-extracted during audit); add a Class In-Charge table if desired
- `src/data/facultyPageOverrides.ts` — 7 of 8 faculty missing overrides

### Missing/thin content
4 subpage categories exist live but aren't configured (see Files). Existing subpages: Industry Interface (thin, one event write-up), Placements (very thin, 6 images with no context/table), Teaching Methods (reasonably complete), Achievements (well migrated already — hackathons, sports, 4-tier toppers table).

### Missing images
None specifically flagged beyond the 4 unmigrated subpages.

### Missing PDFs
Default faculty-list PDF 404s (cross-cutting bug #4).

### Missing/incomplete tables
**Class In-Charge table** (Sem III/V/VII with name/email/phone) exists live, not captured anywhere. **Programme table** (B.E. CSE-DS, 4yr, intake 60) exists live, not wired in.

### Missing faculty information
**7 of 8 faculty (all except Ms. Pallavi A R) have zero profile depth.** Confirmed a rich real profile exists for Dr. Vinod Kumar P (Ph.D.+MBA, 14 yrs, 26+ publications, IEEE Senior Member, IQAC/NAAC roles) — entirely unused.

### Already correct — do not touch
`about-the-department`, Achievements, Industry Interface, Placements, Teaching Methods subpages already configured. Structured `dsFaculty` roster array (8 entries) present and matches live names — DS is the only one of these 4 CS-specialization departments with a populated structured faculty array.

---

## BCA — Bachelor of Computer Applications

### ⚠️ Needs your decision before any work proceeds
**BCA does not exist on `old.atme.edu.in` at all.** Confirmed two ways: zero `bca-*` pages in the WordPress export, and BCA is entirely absent from the live department navigation (direct URL guesses all 404). All 7 of BCA's current subpages have **empty `sourceURL` fields** — there is no way to verify where this content came from. This is a **provenance/fabrication-risk flag per your own "never fabricate content" rule**, not a normal migration gap — I'd recommend confirming with the content owner where this content originated before doing anything else with this department.

### Files that would need changes (pending your decision above)
- `src/data/allFaculty.ts` — **zero faculty data exists for BCA anywhere** (`noFaculty`)
- `src/data/deptScraped.json` — course-list page only covers Semesters I-IV of what should be a 6-semester programme

### Missing/thin content
Course list stops at Semester IV (BCA is 6 semesters). Program Outcomes read as generic engineering-PO boilerplate with "engineering" swapped for "computing."

### Missing images
None referenced anywhere across all 7 BCA pages (unusual for an Infrastructure page specifically).

### Missing PDFs
None referenced; a faculty-list PDF is referenced in `departments.ts` but points at the new-site domain and wasn't independently verified.

### Missing/incomplete tables
Course list table (missing Sem V-VI).

### Missing faculty information
**All of it** — zero structured faculty entries, zero scraped faculty page, zero `facultyPageOverrides.ts` entries, despite the department sharing an HOD (Dr. Shakunthala C) with MCA.

### Already correct
`about` and HOD message text read coherently and consistently between `departments.ts` and the scrape (though provenance is unverified, see above).

---

## MCA — Master of Computer Applications

### Files that would need changes
- `src/data/deptPageConfig.ts` — **add an About entry** (this is a real bug, not just a missing nav item — see below)
- `src/data/deptScraped.json` — add an `about`/HOD page
- `src/data/allFaculty.ts` — add 3 Technical Staff (**Jayaprakash Narayana, Bhumika V R, Kruthika N**) and 1 Supporting Staff (**Venkatesha G**)
- `src/data/facultyPageOverrides.ts` — 3 faculty missing overrides

### Missing/thin content — verified real bug, not just a gap
`departments.ts` already has real, populated About/HOD text for MCA (verified near-verbatim against the live legacy page), but **it is currently unreachable by any user** — `deptPageConfig.ts` has no "About" entry and `deptScraped.json` has no matching scraped page, and the routing logic only shows an About tab when a canonical `about` key exists among scraped pages. This is the **highest-leverage single fix found in this entire audit** — small, already-sourced, currently dead code.

(A hidden Vision/Mission/PEO/PSO/PO section does exist on the legacy page but is disabled site-wide there due to a legacy CMS bug — it's also copy-pasted AIML content, wrongly signed by AIML's HOD. Correctly, this was **not** migrated — no gap here.)

### Missing images
None found.

### Missing PDFs
None — `mca-resources` already captures 32 PDF links with verified real provenance. In good shape.

### Missing/incomplete tables
None beyond the roster gap.

### Missing faculty information
Of 15 teaching faculty, 12 have rich profiles; 3 (**HOD Dr. Shakunthala C, Harshitha H B, Umme Hani Sharrif**) have none. Plus the 4 Technical/Supporting staff missing entirely (see Files). One roster discrepancy worth confirming: the live site's #2 teaching-staff slot shows "Mr. Hemantha Kumar B N" where React has "Dr. Basanth Kumar" (DOJ listed as a near-future date) — may be a genuine staff replacement, not an error.

### Already correct — do not touch
Infrastructure and Resources pages — richly scraped with real provenance.

---

## MBA — Master of Business Administration

### Files that would need changes
- `src/data/deptPageConfig.ts` — add an About entry (same dead-code bug pattern as MCA)
- `src/data/deptScraped.json` — add an `about`/HOD page
- `src/data/allFaculty.ts` — **zero faculty data exists for MBA anywhere** (`noFaculty`) despite 6 real people with legacy profiles
- `src/data/facultyPageOverrides.ts` — currently zero MBA entries

### ⚠️ Needs your decision before any work proceeds
**`departments.ts` contains a full Vision statement, 3 Mission bullets, 3 PEOs, 5 POs, and 4 PSOs for MBA that could not be found anywhere on the live legacy site** (the real MBA About page was fetched in full and confirmed to have no Vision/Mission/PEO/PO/PSO content at all, hidden or otherwise). This may be sourced from an NBA/SAR document outside the website scrape, but it's currently **unverifiable** — flagging per your "never fabricate business information" rule for confirmation before treating this as either correct or something to fix.

### Missing/thin content
Same About-page dead-code bug as MCA — real, verified About/HOD text sits unused in `departments.ts`.

### Missing images
None beyond the faculty gap (HOD image already correctly referenced).

### Missing PDFs
None — Activities and Resources pages already have real provenance and dozens of PDF links each.

### Missing/incomplete tables
No programme/duration/intake table found on the legacy page and none in `departments.ts` — consistent, not a gap.

### Missing faculty information — largest single gap of any department in this audit
**All 6 real MBA staff (5 teaching + 1 supporting) are completely absent from the app** — no structured entries, no profile overrides. Two were individually verified to have substantial legacy profiles ready to migrate: Dr. Oscar Abhishek (Ph.D., 22 yrs experience, 4 publications, 11+ FDPs) and Lakshmi M R (full qualifications, 2 publications, 12+ FDPs, 6 institutional roles).

### Already correct — do not touch
Activities and Resources pages — the strongest content in this department, real sources, dozens of PDFs.

---

## Physics

### Files that would need changes
- `src/data/infrastructureScraped.ts` — no `physics` entry (part of cross-cutting bug #2, low priority here since the scraped content itself is boilerplate)
- `src/data/linkRewrite.ts` — `FACULTY_BY_SLUG` doesn't include physics, so Technical/Supporting Staff photo links point at dead external URLs instead of internal profile routes

### Missing/thin content
None found at the category level — old site nav is About, Infrastructure, Staff Details, Resources, COE, Achievements, Research Initiatives, Co-curricular Activities, all already configured. A possible COE gap could not be confirmed (low-confidence, low-priority).

### Missing images
HOD photo is hotlinked directly to an external `atme.edu.in` URL rather than a localized asset — availability risk, not currently broken.

### Missing PDFs
No `documents` block exists for Physics (asymmetric with MCA/MBA) — not urgent since Resources is out of scope.

### Missing/incomplete tables
Technical/Supporting Staff pages have no name/qualification table — but this **matches the live old site's own bare-photo design exactly**, not a migration regression.

### Missing faculty information
None found — the 6-person teaching roster matches the live site exactly, and 2 spot-checked profiles are rich and complete. One possible extra name (Puneeth Kumar Y M) surfaced ambiguously and needs manual verification, not a confirmed gap.

### Already correct — do not touch
About, Achievements, Research Initiatives, Co-curricular Activities all have substantial real content. Faculty tab fully populated and accurate.

---

## Chemistry

### Files that would need changes
- `src/data/infrastructureScraped.ts` — no `chemistry` entry — **this one is a real content-loss bug**, unlike Physics: real scraped infrastructure content (275 sq.m facility description, lab/HOD chamber/store room details) exists but is never shown due to cross-cutting bug #2
- `src/data/linkRewrite.ts` — same dead-link issue as Physics for Technical/Supporting Staff

### Missing/thin content
Confirmed Chemistry genuinely has **no Achievements page on the old site** — current config's omission is correct, not a gap.

### Missing images
HOD photo is already correctly localized — no issue here.

### Missing PDFs
No `documents` block — not urgent, Resources out of scope.

### Missing/incomplete tables
Technical/Supporting Staff — matches old site's bare-photo design, not a regression. One possible extra name (Mr. Magesh M) needs manual verification.

### Missing faculty information
None found — the 7-person teaching roster matches exactly; 2 spot-checked profiles complete and rich.

### Already correct — do not touch
About, Research Initiatives, Co-curricular Activities all have real content and render correctly.

---

## Mathematics

### Files that would need changes
- `src/data/infrastructureScraped.ts` — no `mathematics` entry — same real content-loss bug as Chemistry (410 chars of real library/facilities content currently hidden)

### Missing/thin content
**Mathematics is the one department where the React config is already an accurate mirror of a genuinely sparse legacy department** — old site truly only has About, Infrastructure, Staff Details, Research Initiative; no Technical Staff, Achievements, Activities, or Resources exist there either. No expansion needed beyond the Infrastructure bug.

### Missing images
HOD photo hotlinked to an external URL, not localized (same pattern as Physics).

### Missing PDFs
No `documents` block — not urgent.

### Missing/incomplete tables
Supporting Staff has no table but matches old site's bare design.

### Missing faculty information
None found — all 9 roster entries verified against the live site, full match. 2 spot-checked profiles complete and rich.

### Already correct — do not touch
About and Research Initiative pages have real, substantive content.

---

## Humanities

### ⚠️ Needs a design/routing decision, not just a content fix
Humanities is a live department (in `departmentsIndex.ts`) with **zero entry in `deptPageConfig.ts`**, **zero entry in `deptScraped.json`**, and a routing gate (`isCanonicalSectionAvailable`) that makes `/departments/humanities` **unconditionally redirect straight to the Faculty directory** — there is currently no route by which a visitor can ever see the department's About/Vision/Mission/PEO text, even though that text **already exists, unused, in `departments.ts`** (lines 628-631).

Verified against the live legacy site: Humanities genuinely has the same minimal shape there too (only a Faculty listing page exists) — so this isn't a case of missing legacy content, it's a case of **already-written React content being unreachable due to a routing/config gap**. Fixing this means either adding a minimal `humanities` entry to `deptPageConfig.ts`/`FULL_MENU_DEPTS`, or adjusting the HOD-based availability gate — a design/routing question for you, since CLAUDE.md says never modify routing without being asked. Flagging for your decision rather than acting unilaterally.

### Files that would need changes (pending your decision above)
- `src/data/deptPageConfig.ts` — no humanities entry
- `src/data/canonicalSections.ts` — `FULL_MENU_DEPTS` doesn't include humanities
- `src/data/departments.ts` — `humanitiesFaculty` (4 entries) needs a 5th person added; no `hod` field set (confirmed correct — old site has no designated HOD/Coordinator for this department either)

### Missing/thin content
About/Vision/Mission/PEO text already exists but is unreachable (see above).

### Missing images
Two of the four faculty (**Leelavathi C R, Rakshitha V**) use raw external image URLs instead of localized assets, inconsistent with the other two in the same array.

### Missing PDFs
None — no PDF-bearing pages exist for Humanities on either site.

### Missing/incomplete tables
None applicable.

### Missing faculty information
**Dr. Muralidhar M P (Director of Physical Education, Ph.D.) is missing from the 4-person roster** — verified he appears on the live site's 5-person faculty list. Also a minor designation mismatch: 3 of the 4 existing faculty are listed as "Lecturer" on the old site but "Assistant Professor" in React — worth confirming which is intended, not silently changing.

### Already correct — do not touch
The 4 existing faculty profiles are fully migrated with rich detail (contact, academic, publications, FDPs, roles) — the underlying content is ready, only the department-page wiring is broken.

---

## Summary table

| Dept | Priority issue | Faculty gaps found | Missing subpages | Provenance flag |
|---|---|---|---|---|
| CSE | 7/9 subpages still on corrupted self-scrape | none new | 0 | — |
| ECE | About-page wiring gap | 3 Support Staff | 0 | — |
| EEE | Minor PO-framework question | 2 Technical Staff | 0 | — |
| ME | About-page wiring gap + broken PDF links | 4 teaching | 0 | — |
| CE | About-page wiring gap; no live Infra source | 4 staff | 0 | CE Infrastructure content unverifiable |
| AIML | Faculty profile depth | 7/8 faculty | 0 | — |
| CSD | **Most under-migrated dept** — 7 subpages missing incl. Achievements | 4/10 faculty | 6-7 | Infra page may show wrong dept's content |
| CY | About page entirely missing (content extracted, ready) | 6/7 faculty | 1 | Dr. Pavithra M S dept attribution unclear |
| DS | 4 subpages missing; About-field wiring gap | 7/8 faculty | 4 | — |
| BCA | **Content provenance unverifiable** | all faculty | — | ⚠️ BCA absent from legacy site entirely |
| MCA | About page unreachable (dead code, easy fix) | 4 staff + 3 faculty | 0 (routing bug) | — |
| MBA | **Largest faculty gap** — 0 of 6 real staff migrated | all faculty | — | ⚠️ PEO/PO/PSO content unverifiable |
| Physics | Dead staff-photo links | 0 confirmed | 0 | — |
| Chemistry | Infrastructure content hidden by bug | 0 confirmed | 0 | — |
| Mathematics | Infrastructure content hidden by bug | 0 confirmed | 0 | Already accurately sparse |
| Humanities | **Entire department unreachable beyond Faculty tab** | 1 person | routing, not content | Needs your routing decision |

---

## Three items need your explicit decision before I touch them (flagging per CLAUDE.md's "ask instead of guessing" rule)

1. **BCA's content provenance** — no source URL anywhere, department doesn't exist on the legacy site. Confirm origin before I treat it as either correct or in need of migration.
2. **MBA's Vision/Mission/PEO/PO/PSO content** — exists in the app, cannot be found on the legacy site. Confirm source before I keep, remove, or flag it.
3. **Humanities' unreachable About content** — fixing this requires a routing/config change (deptPageConfig + canonicalSections), which CLAUDE.md says never to touch without being asked. Confirm you want this specific routing fix included in this migration, or whether it should be handled separately.

Everything else above is a standard content/data fix (no routing, component, layout, or styling changes) and I'm ready to proceed department by department once you approve.
