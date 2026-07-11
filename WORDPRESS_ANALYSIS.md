# WordPress Export Analysis — `wordpress/export.xml`

Source file: [wordpress/export.xml](wordpress/export.xml) — a standard WordPress eXtended RSS
(WXR) export, generator `WordPress/7.0`, created `2026-07-09 12:03`, exported from
`https://old.atme.edu.in`. File size: **60.2 MB**, 810,236 lines, 9,368 `<item>` records.

This file was read only — nothing in the repository was modified to produce this report.

---

## Method

The file was parsed with a streaming XML parser (Python `xml.etree.ElementTree.iterparse`) over
every `<item>`, `<wp:category>`, and `<wp:term>` element in the WXR. One data-quality issue had
to be worked around to make the file parse at all (see §7) — it was handled by stripping illegal
characters from an **in-memory copy only**; the file on disk was not touched.

---

## 1. Total number of pages

| Metric | Count |
|---|---|
| `wp:post_type = page` items (all statuses) | **481** |
| — published (`publish`) | 478 |
| — draft | 3 |
| Top-level pages (`post_parent = 0`) | 319 |
| Sub-pages (nested under another page) | 159 |

**Caveat — not all 481 are real site content.** The export carries over the original WordPress
theme's demo/LMS boilerplate pages (the theme includes a course/LMS builder). At least **46
pages** are clearly demo scaffolding rather than college content — e.g. `Sample Page`, `LP
Checkout`, `LP Cart`, `Wishlist`, `Shop`, `Cart`, `Checkout`, `My account`, `Info Box 1–5`,
`Call To Action 1–2`, `Pricing Table 1–3`, `Instructors 1–2`, `Event Countdown 1–2`, `Testimonial
1–2`, `Section Title`, `404 Error`, `Single Course`, `Single Event`, `Single Product`. That
leaves roughly **~432 pages of actual college content** (departments, faculty, policies,
handbooks, admissions, etc.).

16 page titles are reused by more than one page (e.g. multiple pages titled `About the
Department`, `NBA Approval`, `Resources`, `Magazine`) — expected, since each department has its
own page carrying a generic title; disambiguate by `wp:post_id`/`wp:post_parent`, not by title.

---

## 2. Total number of posts

| Metric | Count |
|---|---|
| `wp:post_type = post` items | **437** (all published) |

These are blog/news-style entries — webinars, workshops, induction programs, awareness drives,
faculty talks, accreditation announcements, etc. (e.g. *"A Webinar on 'Patriotism & Moral
Education' Organised at ATMECE"*, *"Student Induction Program (SIP) Phase-I, 2021–22 Batch"*).
This maps to the current site's [news-clippings](src/routes/news-clippings.tsx) /
[upcoming-events](src/routes/upcoming-events.tsx) content, which is not yet sourced from these
posts.

---

## 3. Menu structure

The export defines **39 `nav_menu` taxonomy terms** (menus) totalling **506 `nav_menu_item`
entries**. Most are small, single-purpose menus (per-department sidebar menus, one-page/demo
menus). Item counts per menu:

| Menu | Items |
|---|---|
| ATME-Main Menu | 113 |
| Main Menu | 109 |
| home | 17 |
| Top Bar Links | 16 |
| Computer Science and Engineering | 13 |
| DS | 13 |
| cs-design | 13 |
| ECE | 12 |
| Electrical And Electronics Engineering | 12 |
| Library | 12 |
| Civil Engineering | 11 |
| Mechanical Engineering | 11 |
| ATME Research | 11 |
| ATME Departments | 10 |
| Featured Links | 8 |
| Physics | 8 |
| Sports | 8 |
| About ATME | 7 |
| Chemistry | 7 |
| Onepage Menu — Home 1–7 | 6 each |
| Explore Courses | 6 |
| Company | 6 |
| COVID – 19 | 6 |
| MCA | 5 |
| IEEE | 5 |
| MBA | 5 |
| Mathematics | 4 |
| AI and ML | 4 |
| Top bar right links | 4 |
| cyber security | 4 |
| Humanities | 1 |
| AICTE | 1 |

**Two menus matter; the rest are noise:**

- **`Main Menu` (109 items) is theme/LMS demo navigation**, not the real site nav — its branches
  are `Elements`, `Courses`, `Instructors`, `Pricing Table`, `Testimonials`, `Event Countdown`,
  etc., all pointing at the boilerplate pages from §1. Safe to ignore for content migration.
- **`ATME-Main Menu` (113 items) is the real, live primary navigation.** Full hierarchy:

  ```
  Home
  About
    ├─ ATME Trust
    ├─ ATME College of Engineering
    ├─ Vision & Mission
    ├─ Governing Council
    ├─ Chairman Message
    ├─ Affiliations & Approvals
    │    ├─ NABL · NAAC · AISHE · ARIIA 2021
    │    ├─ AICTE (Initial Approval, Extension of Approval, EoA 2010-11→2024-25, Feedback, Campus Videos)
    │    ├─ VTU (Initial Approval, Latest Approval)
    │    ├─ GOK-Recognition Letter · NBA Approval · ISO Certification · QS I-Gauge · Mandatory Disclosure
    ├─ Principal (About Principal, Principal Message)
    ├─ Deans (Research, Student Affairs)
    ├─ Academic Council
    └─ Statutory Declaration (Section 4(1)(b) RTI Act 2005)
  Departments
    ├─ UG Programs: Civil · CSE · CSE-Data Science · CSE-AI&ML · CS&Design · CSE-Cyber Security ·
    │               ECE · EEE · Mechanical
    ├─ PG Programs: MCA · MBA
    ├─ Basic Science: Chemistry · Mathematics · Physics
    ├─ Humanities
    ├─ Placements: Career Guidance & Placement Cell · Career Path · Placement Team ·
    │              Our Recruiters · Placement Statistics · Infrastructure · ED-Cell
    ├─ VTU Minor Degree · VTU Honor Degree · Library · Sports · NSS
  Research
  Administration
    ├─ Organization Structure · Administration Staff · Institutional Committees · Policies ·
    │  Governance/Institutional Support & Financial Resources · Student Support System ·
    │  Calendar of Events (COE) · Financial Audit
    ├─ Staff: PF/ESI/Gratuity · Incentives for Staff · Leave (KCSR) · Faculty Appraisal · Best Teacher
    └─ IQAC · IIC · NISP · A-IMS · Academic TimeTable & Teaching Load
  Admissions
    ├─ General Information · Course Information · Admission Process
    ├─ Fees Structure (UG, PG)
    ├─ Enrollment · Admission Policy · Reservation in Student Admission Policy · Cut off Ranks ·
    │  Application · Scholarships · Admission Queries · Anti Ragging Policy
  Placements
    └─ Career Guidance & Placement Cell · Career Path · Placement Team · Our Recruiters ·
       Placement Statistics · Infrastructure · ED-Cell
  Campus Life
  NAAC
  ```

  This maps closely (and is a useful cross-check) against the current site's own
  [src/lib/navStructure.ts](src/lib/navStructure.ts) and the [Footer](src/components/site/Footer.tsx)
  link columns.

- **`Top Bar Links` (16 items):** A-IMS Faculty/Student Login, Upcoming Events, Circulars, Swayam
  Courses, NABL, Lab Videos, In the News, Campus Tour, Grievance, Online Payments, Virtual Labs,
  Funded-Projects, K-Tech NAIN, NIRF, Student Council.
- **`Featured Links` (8 items):** Graduation, Courses, Admissions, About Us, International, Book
  Store, FAQs, Alumni — another theme-demo footer menu, empty of real URLs.

---

## 4. Categories

**Taxonomy `category` — 29 defined terms:**

| Category | Usage on pages/posts |
|---|---|
| ATME | 95 |
| CSE-faculty | 77 |
| ME-faculty | 38 |
| ECE-faculty | 37 |
| Uncategorized | 33 |
| EEE-faculty | 29 |
| Computer Science & Engineering | 26 |
| CV-faculty | 18 |
| CSE | 14 |
| Chemistry-faculty | 11 |
| MCA Faculty | 11 |
| Physics-faculty | 10 |
| Mathematics-faculty | 9 |
| Electronics & Communication | 7 |
| Civil Engineering | 6 |
| MBA faculty | 5 |
| Women Cell | 4 |
| humanities-faculty | 4 |
| Electricals & Electronics | 3 |
| Mechanical Engineering | 2 |
| DS | 2 |
| AIML | 2 |
| hackathon (child of UE-Hackathon) | 1 |
| UE-Hackathon | 1 |
| humanities | 1 |
| GMAT, IELTS | defined, unused |

Categories are used almost entirely as a **faculty-department tagging mechanism** (`*-faculty`
categories) rather than as an editorial/blog taxonomy — consistent with most `category`-tagged
items being individual faculty profile pages.

**Taxonomy `post_tag`** is used sparingly (mostly on `post`-type news items): `Webinar` (5),
`Workshop` (4), `Civil` / `Technical Talk` (3 each), and a long tail of one-off tags
(`Induction Program`, `MOU`, `Placement`, `Covid-19`, `IBM`, etc.).

**Other taxonomies present** (for non-content post types, not page/post content):
`nav_menu` (39 — see §3), `course_category`/`course_tag` (LMS demo), `ac_event_category`,
`ac_research_category`, `ac_gallery_category`, `ac_testimonial_category`, `wpcode_*`,
`monsterinsights_note_category`, `ml-slider`.

---

## 5. Images

| Metric | Count |
|---|---|
| `wp:post_type = attachment` items total | 7,311 |
| Image attachments (by URL extension) | **3,711** |
| — `.jpg` | 3,095 |
| — `.jpeg` | 307 |
| — `.png` | 305 |
| — `.webp` | 3 |
| — `.svg` | 1 |
| `<img src="...">` references found inside published page/post body content | 680 |

The 3,711 figure counts every image ever uploaded to the WordPress media library (including
unused/orphaned uploads); 680 is the count of images actually `<img>`-referenced inside the
bodies of the 478 published pages + 437 published posts analyzed.

---

## 6. PDFs

| Metric | Count |
|---|---|
| PDF attachments in the media library | **2,738** |
| `href="...pdf"` links found inside published page/post body content | 1,303 |

This is a very large document library — fee structures, admission policies, accreditation
certificates (AICTE/VTU/NAAC/NBA/ISO), circulars, handbooks, research papers, etc. It's
consistent with the sheer size of `src/assets/pdfs/` (757 files) already migrated into the React
app — the WordPress export contains roughly 3.6× more PDFs than currently exist in the React
codebase, implying a large body of documents not yet migrated (or intentionally left behind as
outdated/superseded).

---

## 7. Internal links

Across the bodies of all 478 published pages + 437 published posts, **4,280 total `href`/link
occurrences** were found:

| | Count |
|---|---|
| Internal (same-site: `*.atme.edu.in` domains, or relative URLs) | **2,656** |
| External (other domains) | 1,624 |

**Top domains referenced:**

| Domain | Occurrences |
|---|---|
| `old.atme.edu.in` (self-links, the export's own domain) | 2,145 |
| `atmemys-my.sharepoint.com` | 316 |
| `www.linkedin.com` | 162 |
| `vidwan.inflibnet.ac.in` (faculty research profiles) | 134 |
| `orcid.org` / `www.orcid.org` / `orchid.org` (typo domain) | 148 combined |
| `scholar.google.com` / `scholar.google.co.in` | 154 combined |
| `www.scopus.com` | 100 |
| `doi.org` | 60 |
| `ieeexplore.ieee.org` | 38 |
| `www.youtube.com` | 33 |
| `vtu.ac.in` | 19 |

Nearly all internal links point at `old.atme.edu.in` (the domain live at export time) — these
will need rewriting to the production domain (`atme.edu.in`) during migration, mirroring the
same `new.atme.edu.in` → `atme.edu.in` cleanup already done in
[Footer.tsx](src/components/site/Footer.tsx). The external-link volume is dominated by academic
identity/citation services (ORCID, Scopus, Google Scholar, Vidwan, IEEE Xplore) embedded in
individual faculty profile pages, plus SharePoint (likely internal document sharing) and
LinkedIn.

---

## 8. Data-quality notes (for migration planning)

- **Corrupted byte in source file:** line 645260 of `export.xml` contains a stray non-printable
  control character (`0x02`, STX) embedded mid-word inside "Els[STX]evier" in a research-paper
  citation on a faculty profile page. This breaks strict XML parsers. It was **not modified in
  the file** — this analysis stripped it from an in-memory copy only. If anything downstream
  needs to parse this XML with a strict parser (e.g. a WordPress importer or `xml2js`), it will
  need the same workaround or a one-time cleaned copy.
- **Theme/LMS demo content:** ~46 pages and the entire `Main Menu` (109 items) plus `Featured
  Links` (8 items) are leftover demo scaffolding from the WordPress theme's course/LMS builder,
  not real college content — exclude these from any content migration pass.
- **Domain naming:** all links/URLs in the export use `old.atme.edu.in`, reflecting the domain
  at scrape time (2026-07-09) — every internal URL will need rewriting during migration.
- **Draft pages:** 3 pages are still in `draft` status and were excluded from the "published"
  counts above; flag them for review before deciding whether to migrate.
- **Duplicate page titles:** 16 titles are reused across multiple pages (mostly per-department
  "About the Department" pages) — always key off `wp:post_id`, never off title, when mapping
  WordPress pages to new routes.

---

## Summary

| | |
|---|---|
| Pages (published / draft) | 478 / 3 |
| Pages that are real content (est.) | ~432 |
| Posts (published) | 437 |
| Menus defined | 39 (1 real primary nav + 1 top bar + demo/department menus) |
| Categories defined / actively used | 29 / 25 |
| Image attachments | 3,711 |
| PDF attachments | 2,738 |
| Internal links in content | 2,656 |
| External links in content | 1,624 |
