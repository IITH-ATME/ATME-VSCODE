// Per-page markdown body overrides.
//
// Some scraped pages on the source site rely on JavaScript-driven tabs that
// did not capture cleanly during scraping (only "Page 1 / X" placeholders
// remain). For those pages we re-publish a clean, fully-typed markdown body
// here so that the renderer's existing tab/accordion detection picks up the
// content and surfaces it under the original tab labels.
//
// The map is keyed by the URL slug (no leading/trailing "/").

const SELF = (key: string) => `/p/${key}`;

const RESEARCH_CENTERS_KEY = "atme-research/research-centers";

const researchCentersBody = `
# Research Centers

ATMECE houses six VTU-recognised research centres along with active research
groups in Civil Engineering and Mathematics.

- [Research Code of Ethics](${SELF(RESEARCH_CENTERS_KEY)})
- [Centres / Departments](${SELF(RESEARCH_CENTERS_KEY)})
- [Research Supervisors](${SELF(RESEARCH_CENTERS_KEY)})
- [Scholars Details](${SELF(RESEARCH_CENTERS_KEY)})

[Research Code of Ethics](${SELF(RESEARCH_CENTERS_KEY)})

ATMECE upholds the highest standards of research integrity. The full
Research Policy / Code of Ethics document is embedded below.

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/Research-Policy.pdf[/pdfviewer]

[Centres / Departments](${SELF(RESEARCH_CENTERS_KEY)})

## Research Centres in ATMECE

ATMECE has the following 6 VTU-recognised Research Centres:

| Sl. No. | Research Centre Name | Scholars pursuing PhD | Scholars awarded PhD |
| --- | --- | --- | --- |
| 1 | Computer Science and Engineering | 16 | 4 |
| 2 | Electronics and Communication Engineering | 7 | 9 |
| 3 | Electrical and Electronics Engineering | 1 | – |
| 4 | Mechanical Engineering | 1 | 2 |
| 5 | Physics | 2 | – |
| 6 | Chemistry | 2 | 1 |
| **Total** | **All six research centres** | **29** | **16** |

[Research Supervisors](${SELF(RESEARCH_CENTERS_KEY)})

## Research Supervisors in ATMECE

| Sl. No. | Research Centre | Research Supervisor |
| --- | --- | --- |
| 1 | Electronics and Communication Engineering | Dr. L Basavaraj |
| 2 | Electronics and Communication Engineering | Dr. Bhagyashree S R |
| 3 | Electronics and Communication Engineering | Dr. Prathibha M K |
| 4 | Electronics and Communication Engineering | Dr. Anitha D B |
| 5 | Electronics and Communication Engineering | Dr. Pavithra A C |
| 6 | Electronics and Communication Engineering | Dr. Shalini Hanok |
| 7 | Electronics and Communication Engineering | Dr. Veeraprathap V |
| 8 | Electronics and Communication Engineering | Dr. Hussana Johar R B |
| 9 | Electronics and Communication Engineering | Dr. Uma Mahesh |
| 10 | Computer Science and Engineering | Dr. Puttegowda D |
| 11 | Computer Science and Engineering | Dr. J V Gorabal |
| 12 | Computer Science and Engineering | Dr. Deepu R |
| 13 | Computer Science and Engineering | Dr. Nasreen Fathima |
| 14 | Computer Science and Engineering | Dr. Sunitha Patel M S |
| 15 | Computer Science and Engineering | Dr. Anil Kumar C J |
| 16 | Computer Science and Engineering | Dr. Pavithra M S |
| 17 | Computer Science and Engineering | Dr. Shilpa B L |
| 18 | Electrical and Electronics Engineering | Dr. Parthasarathy L |
| 19 | Electrical and Electronics Engineering | Dr. Sathish K R |
| 20 | Electrical and Electronics Engineering | Dr. Shakunthala C |
| 21 | Electrical and Electronics Engineering | Dr. Vinod Kumar P |
| 22 | Electrical and Electronics Engineering | Dr. Praveen Kumar M |
| 23 | Mechanical Engineering | Dr. Govinde Gowda M S |
| 24 | Mechanical Engineering | Dr. Srinivasa K |
| 25 | Mechanical Engineering | Dr. Chethan S |
| 26 | Mechanical Engineering | Dr. Mohan Kumar K C |
| 27 | Mechanical Engineering | Dr. Rathnakar G |
| 28 | Mechanical Engineering | Dr. Chetana S |
| 29 | Civil Engineering | Dr. Jyothi D N |
| 30 | Physics | Dr. Mahesh Lohith K S |
| 31 | Physics | Dr. Madhusudhana R |
| 32 | Chemistry | Dr. Avinash K |
| 33 | Chemistry | Dr. Kiran Kumar P |
| 34 | Chemistry | Dr. Halligudra Guddappa |
| 35 | Chemistry | Dr. Chiatra T K |

[Scholars Details](${SELF(RESEARCH_CENTERS_KEY)})

Detailed scholar lists for each research centre are published below. Tap a
department to view the full scholar register (embedded PDF).

#### [Electronics & Communication Engineering — Scholars](${SELF(RESEARCH_CENTERS_KEY)}#scholars)

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/EC_Research-Scholar-Details-website-18-3-2024.pdf[/pdfviewer]

#### [Computer Science & Engineering — Scholars](${SELF(RESEARCH_CENTERS_KEY)}#scholars)

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/CSE_Research-Scholar-Details-website-18-3-2024.pdf[/pdfviewer]

#### [Electrical & Electronics Engineering — Scholars](${SELF(RESEARCH_CENTERS_KEY)}#scholars)

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/EEE_Research-Scholar-Details-website-18-3-2024.pdf[/pdfviewer]

#### [Mechanical Engineering — Scholars](${SELF(RESEARCH_CENTERS_KEY)}#scholars)

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/ME_Research-Scholar-Details-website-18-3-2024.pdf[/pdfviewer]

#### [Physics — Scholars](${SELF(RESEARCH_CENTERS_KEY)}#scholars)

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/PHY_Research-Scholar-Details-website-18-3-2024.pdf[/pdfviewer]

#### [Chemistry — Scholars](${SELF(RESEARCH_CENTERS_KEY)}#scholars)

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/CHE_Research-Scholar-Details-website-18-3-2024.pdf[/pdfviewer]

#### [Civil Engineering — Scholars](${SELF(RESEARCH_CENTERS_KEY)}#scholars)

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/CE_Research-Scholar-Details-website-18-3-2024-.pdf[/pdfviewer]

#### [Mathematics — Scholars](${SELF(RESEARCH_CENTERS_KEY)}#scholars)

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/Maths_Research-Scholar-Details-website-18-3-2024.pdf[/pdfviewer]

#### [AIML — Scholars](${SELF(RESEARCH_CENTERS_KEY)}#scholars)

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/AIML_Research-Scholar-Details-website-18-3-2024.pdf[/pdfviewer]
`;


const ariia2021Body = `
## ARIIA 2021

ATME College of Engineering's submission to the Atal Ranking of Institutions on
Innovation Achievements (ARIIA) 2021, conducted by the Ministry of Education,
Government of India.

[pdfviewer width="1200px" height="800px"]https://atme.edu.in/wp-content/uploads/2022/10/ARI-C-1244.pdf[/pdfviewer]
`;

const coeVtuBody = `
## VTU — Affiliation & Approvals

ATME College of Engineering is affiliated to Visvesvaraya Technological
University (VTU), Belagavi. Statutory VTU letters are embedded below.

#### [VTU Initial Approval (2010-11)](/p/coe-vtu)

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/VTU-Initial-Approval-2010-11.pdf[/pdfviewer]

#### [VTU Affiliation 2025-2026](/p/coe-vtu)

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/VTU-Affiliation-2025-2026.pdf[/pdfviewer]
`;

const dravyaBody = `
## DRAVYA – Centre for Advanced Materials (CAM)

DRAVYA is ATMECE's centre for advanced materials research. The official
profile document is embedded below.

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/CV-Letter-for-website.pdf[/pdfviewer]
`;

const rpcCommitteeBody = `
## Research Publication and Co-Curricular Activities Committee

The Research, Publication and Co-Curricular Activities (RPC) Committee
oversees research output, publication quality and co-curricular research
engagement at ATMECE. The committee constitution document is embedded below.

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/Research-Publication-and-Co-Curricular-Activities-Committee.pdf[/pdfviewer]
`;


const mandatoryDisclosureBody = `
## Mandatory Disclosure

As per AICTE guidelines, ATME College of Engineering publishes the institutional
mandatory disclosure document each academic year. The latest disclosure is
embedded below for direct viewing and download.

[pdfviewer width="1200px" height="800px"]https://atme.edu.in/wp-content/uploads/2026/01/Mandatory-Disclosure-2025-26.pdf[/pdfviewer]
`;

const eoaAicteBody = `
## Extension of Approval (EoA) — AICTE

AICTE Extension of Approval letter for the current academic year.

#### [EoA Report 2026-2027](/p/eoa-aicte)

[pdfviewer width="1200px" height="800px"]https://atme.edu.in/wp-content/uploads/2026/04/EOA-Report-2026-27.pdf[/pdfviewer]

#### [EoA Letters 2011-2023 (Historical)](/p/eoa-aicte)

[pdfviewer width="1200px" height="800px"]https://atme.edu.in/wp-content/uploads/2023/06/EOA_letters_2011-2023.pdf[/pdfviewer]
`;

const nablBody = `
## NABL Accredited — ATME Civil Engineering Material Testing Facility (Mechanical)

The ATME Civil Engineering Material Testing Laboratory is dedicated to ensuring top quality testing services for Civil Engineering materials. The Civil Engineering Department offers a wide range of services, including Soil Testing, Sub-Soil Investigation, Highway Materials Testing, Concrete & Reinforced Structure Testing, Non-Destructive Testing, Third-Party Inspections for Quality Control and Assurance, and Consultancy Services.

#### [About us](/p/nabl)

**NABL ACCREDITED — ATME CIVIL ENGINEERING MATERIAL TESTING FACILITY (MECHANICAL)**

The ATME Civil Engineering Material Testing Laboratory is dedicated to ensuring top quality testing services for Civil Engineering materials. The Civil Engineering Department offers a wide range of services, including:

- **Soil Testing**
- **Sub-Soil Investigation**
- **Highway Materials Testing**
- **Concrete & Reinforced Structure Testing**
- **Non-Destructive Testing**
- **Third-Party Inspections for Quality Control and Assurance**
- **Consultancy Services**

The department is established in a 800 sq. ft. laboratory, fully equipped with the latest testing equipment for accurate soil and material analysis. All testing equipment and machinery are regularly calibrated and maintained by an NABL-approved laboratory, overseen by engineers with extensive experience in quality control across various fields.

The Civil department has a competent workforce with qualifications ranging from Doctorates, Post Graduates, Graduates and Diploma levels. Continuous training is provided to employees to further enhance their expertise. All tests are conducted in compliance with relevant National and International Standards.

**Our proud clients**

- Skill Tech Engineers and Contractors Pvt. Ltd., Mysore
- Vision Structural Design Aid, Bangalore
- Mytech Estate Developers & Builders Pvt. Ltd., Mysore
- Bunts Sangha Mysore Charitable Trust (Regd.)
- Citizen Welfare Society, Mysore
- Ramakrishna House Building Co-operative Society

**Contact Details**
Head of the Department, Department of Civil Engineering
ATME College of Engineering, Mysore
Phone: +91-9738806913

#### [Quality Policy](/p/nabl)

**Quality Policy**

The Quality Policy of ATMECE Material Testing Lab is committed to providing services that fully satisfy customer expectations. The organization is focused on meeting customer needs and continuously improving the effectiveness of its Quality Management System (QMS). Management routinely reviews operations to ensure that working methods, available instruments, and the skills of technicians are adequate to deliver accurate and timely results.

**Objectives**

- Ensure all testing instruments are calibrated and valid for each sample tested
- Complete sample testing within 15 working days
- Use analytical standards traceable to certified reference materials

#### [NABL Certificate](/p/nabl)

[pdfviewer width="1200px" height="800px"]https://atme.edu.in/wp-content/uploads/2025/01/ATME_NABL-Accreditation-Certificate.pdf[/pdfviewer]

#### [Scope of Accreditation](/p/nabl)

[pdfviewer width="1200px" height="800px"]https://atme.edu.in/wp-content/uploads/2025/01/ATME_NABL_Scope-of-Accreditation.pdf[/pdfviewer]

#### [Designs & Proof Checking](/p/nabl)

Conducting proof checking and peer reviews of structural designs and drawings for buildings and other structures:

- Ensure the accuracy and quality of design outputs.
- Reviewing soil investigation data for accuracy and relevance.
- Assess load-bearing elements and stress management.
- Verifying compliance with relevant codes and standards related to loadings and design procedures.
- Performing independent 3D analysis to assess the structure's behaviour.
- Evaluating the safety of the structure, as well as the cost-effectiveness of member sizes and reinforcement.
- Utilized software tools include STAAD.Pro, AutoCAD, and in-house Excel sheets.

#### [Geotechnical Investigations Scope](/p/nabl)

- Field investigations and site assessments
- Laboratory testing of materials
- Analysis and recommendations for foundation systems
- Design of ground improvement techniques
- Design of earth structures
- Quality control for earthworks

**Laboratory Testing**

- Moisture Content, Water Absorption, Specific Gravity (Pycnometer & Density Bottle)
- Free Swell Ratio
- Grain Size Analysis — Sieve Analysis (Dry & Wet)
- Field Density Test — Core Cutter, Sand Replacement Method
- Compaction Test (MDD & OMC) — Light & Heavy Compaction
- Atterberg's Limits — Liquid Limit, Plastic Limit, Shrinkage Limit
- Direct Shear Test (Cohesion & Angle of Internal Friction)
- Unconfined Compressive Strength Test
- Laboratory Permeability Test — Fine & Coarse Grained Soil
- Laboratory C.B.R. Test — Light & Heavy Compaction (Soaked & Unsoaked)

#### [Material Testing Laboratory - Scope](/p/nabl)

**MECHANICAL**

Conducting tests on a wide range of building materials, including bitumen, cement, concrete mix designs, and geotechnical materials.

- Equipped with advanced, state-of-the-art testing equipment.
- Expertise and facilities to perform testing of construction materials in compliance with BIS, ASTM, BS, EN, MORTH, NHAI, Railway, CPWD, DRDO, and FIP specifications.

**Testing of Steel Products** — Tensile Strength Test for Mild Steel and Structural Steel.

**Testing of Cement & SCM** — Normal Consistency, Initial & Final Setting Time, Fineness, Soundness (Le-Chatelier's Expansion), Compressive Strength, Physical tests on Cement, Flyash, GGBS, Silica Fume, Metakaolin.

**Testing of Concrete & Products** — Cube / Core Compressive Strength, Flexure Strength, Split Tensile Strength, Concrete Mix Design, Paver Block Compressive Strength & Water Absorption, Cubes/Cores/Beams (Physical), Hollow/Solid Concrete Blocks, Paver Blocks / Kerb Stone / Flagging Blocks.

**Concrete Mix Proportioning** — Standard Concrete (M20 to M55), High Strength / High Performance Concrete (M60 to M80), Self-Compacting Concrete.

**Testing of Flooring Materials** — Ceramic / Vitrified Tiles.

**Brick Testing (Physical)** — Colour, Soundness, Hardness, Size & Shape, Crushing Strength, Water Absorption.

**Fine and Coarse Aggregate Testing** — Gradation, Specific Gravity, Material Finer than 75 Micron, Water Absorption, Bulk Density & Voids, Crushing Strength, Los Angeles Abrasion, Impact Strength, Aggregate Indices, Angularity Number, % Silt and Clay Content.

**Bitumen Testing** — Penetration, Softening Point, Viscosity, Ductility.

#### [Non-Destructive Testing, Investigation, Renovation & Restoration](/p/nabl)

Assessment of quality / strength of RC members through appropriate field tests.

**Test Facilities**

- Rebound Hammer test (Concrete / Bricks / Mortar)
- Ultrasonic Pulse Velocity test

Monitoring construction quality through regular site visits. Supervising quality through daily inspections and certification of bills.

**Key Aspects:** Construction Materials, Construction Methodology, Workmanship Quality, Adopted Quality Standards, Performance Test Witnessing, Technical Support for Site Issues, Documentation of Quality Standards.

#### [Feedback Form](/p/nabl)

[pdfviewer width="1200px" height="800px"]https://atme.edu.in/wp-content/uploads/2025/02/FEED-BACK-FORM.doc.pdf[/pdfviewer]

#### [Brochure](/p/nabl)

[pdfviewer width="1200px" height="800px"]https://atme.edu.in/wp-content/uploads/2026/02/NABL-Brochure.pdf[/pdfviewer]
`;

const aicteBody = `
## AICTE

AICTE statutory approval letters, feedback documents and campus walk-through
videos for ATME College of Engineering.

#### [Initial Approval](/p/aicte)

[pdfviewer width="1200px" height="800px"]https://atme.edu.in/wp-content/uploads/2023/06/AICTE-Initial-Approval.pdf[/pdfviewer]

#### [Extension of Approval (EoA) 2026-27 — Latest](/p/aicte)

[pdfviewer width="1200px" height="800px"]https://atme.edu.in/wp-content/uploads/2026/04/EOA-Report-2026-27.pdf[/pdfviewer]

#### [Extension of Approval (EoA): 2011-2023](/p/aicte)

[pdfviewer width="1200px" height="800px"]https://atme.edu.in/wp-content/uploads/2023/06/EOA_letters_2011-2023.pdf[/pdfviewer]

#### [AICTE Feedback](/p/aicte)

[pdfviewer width="1200px" height="800px"]https://atme.edu.in/wp-content/uploads/2023/06/AICTE_Feedback-3.pdf[/pdfviewer]

#### [Campus video for existing / New Programs / Courses](/p/aicte)

Walk-through videos showcasing ATME's new programmes, classroom facilities
and institutional infrastructure.

- [New program MCA facilities — ATME College of Engineering, Mysore](https://www.youtube.com/watch?v=dpdFQdgATHI)
- [Institutional admin and other facilities — ATME College of Engineering, Mysore](https://www.youtube.com/watch?v=BUd4JwNY4Nk)
- [First year New UG classroom facilities — ATME College of Engineering, Mysore](https://www.youtube.com/watch?v=SOkXtPZXZok)
`;

const NEW = "https://new.atme.edu.in/wp-content/uploads/2026/04";

const researchIncentivesBody = `
## Research Incentives

ATMECE recognises and rewards research output of its faculty through annual
Research Incentives. Year-wise incentive registers are embedded below.

#### [2023-24](/p/research-incentives)

[pdfviewer width="1200px" height="800px"]${NEW}/23-24.pdf[/pdfviewer]

#### [2022-23](/p/research-incentives)

[pdfviewer width="1200px" height="800px"]${NEW}/22-23.pdf[/pdfviewer]

#### [2021-22](/p/research-incentives)

[pdfviewer width="1200px" height="800px"]${NEW}/21-22.pdf[/pdfviewer]
`;

const iprPdf = (file: string) =>
  `<div class="not-prose w-full max-w-full overflow-hidden">
<iframe src="${NEW}/${file}" class="block w-full max-w-full h-[55vh] min-h-[320px] sm:h-[65vh] sm:min-h-[420px] lg:h-[75vh] rounded-md border border-border bg-white" loading="lazy"></iframe>
<div class="mt-2 text-sm"><a href="${NEW}/${file}" target="_blank" rel="noreferrer" class="text-primary font-medium hover:underline">Open PDF in new tab ↗</a></div>
</div>`;

const subAcc = (title: string, inner: string) =>
  `<details class="nested-accordion group not-prose my-3 sm:my-4 rounded-lg border border-border bg-card shadow-sm overflow-hidden">
<summary class="cursor-pointer select-none flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 bg-primary text-primary-foreground text-sm sm:text-base font-semibold hover:opacity-95 transition-opacity"><span class="flex-1 min-w-0 pr-2 break-words">${title}</span><span class="shrink-0 text-xs opacity-90 transition-transform duration-200 group-open:rotate-180">▾</span></summary>
<div class="p-3 sm:p-4 space-y-2 border-t border-border">${inner}</div>
</details>`;

const innerAcc = (title: string, inner: string) =>
  `<details class="nested-accordion group not-prose my-2 rounded-md border border-border bg-background overflow-hidden">
<summary class="cursor-pointer select-none flex items-center justify-between gap-3 px-3 py-2.5 sm:px-4 sm:py-3 bg-secondary/40 text-sm sm:text-base font-medium text-foreground hover:bg-secondary/60 transition-colors"><span class="flex-1 min-w-0 pr-2 break-words">${title}</span><span class="shrink-0 text-xs text-muted-foreground transition-transform duration-200 group-open:rotate-180">▾</span></summary>
<div class="p-3 sm:p-4 border-t border-border">${inner}</div>
</details>`;

const topAcc = (title: string, inner: string, open = false) =>
  `<details${open ? " open" : ""} class="nested-accordion group not-prose my-3 sm:my-4 rounded-lg border border-border bg-card shadow-sm overflow-hidden">
<summary class="cursor-pointer select-none flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 bg-primary text-primary-foreground text-sm sm:text-base font-semibold hover:opacity-95 transition-opacity"><span class="flex-1 min-w-0 pr-2 break-words">${title}</span><span class="shrink-0 text-xs opacity-90 transition-transform duration-200 group-open:rotate-180">▾</span></summary>
<div class="p-3 sm:p-4 space-y-2 border-t border-border">${inner}</div>
</details>`;

const iprBody = `
## Intellectual Property Rights (IPR)

ATMECE actively encourages faculty and students to file patents and design
registrations. Complete IPR filings, year-wise patent details, design patents
and utility patents are organised below.

${topAcc("1. List of Patents Filed and Published",
  subAcc("Published Patents — Complete Details (as on 03 Apr 2025)", iprPdf("Published-Patent-Complete-Details-IPR-03rd-April-2025-1.pdf")) +
  subAcc("Patent Details — 2024", iprPdf("Patent-Details-2024.pdf")) +
  subAcc("Patent Details — 2023", iprPdf("Patent-Details_2023.pdf")) +
  subAcc("Patent Details — 2022", iprPdf("Patent-Details_2022.pdf")) +
  subAcc("Patent Details — 2021", iprPdf("Patent-Details_2021.pdf")),
  true,
)}

${topAcc("2. List of Design Patents",
  subAcc("Design Patents Granted", iprPdf("Design-Patents-Granted.pdf")) +
  subAcc("Design Patents Under Processing", iprPdf("Design-Patents-under-processing-1.pdf")),
)}

${topAcc("3. List of Utility Patents Under the Process of Grant",
  iprPdf("Utility-Patents-under-the-process-of-Grant.pdf"),
)}
`;

const fundedResearchKey = "atme-research/funded-research-projects";
const fundedResearchBody = `
## Funded Research Projects

Year-wise list of sponsored and funded research projects awarded to ATMECE
faculty by national and state funding agencies.

#### [2024-25](/p/${fundedResearchKey})

[pdfviewer width="1200px" height="800px"]${NEW}/Funding-_-2024-2025-.pdf[/pdfviewer]

#### [2023-24](/p/${fundedResearchKey})

[pdfviewer width="1200px" height="800px"]${NEW}/Funding-_-2023-2024.pdf[/pdfviewer]

#### [2022-23](/p/${fundedResearchKey})

[pdfviewer width="1200px" height="800px"]${NEW}/Funding-_-2022-23.pdf[/pdfviewer]

#### [2021-22](/p/${fundedResearchKey})

[pdfviewer width="1200px" height="800px"]${NEW}/Funding-_-2021-22.pdf[/pdfviewer]

#### [2020-21](/p/${fundedResearchKey})

[pdfviewer width="1200px" height="800px"]${NEW}/Funding-_-2020-21.pdf[/pdfviewer]

#### [2019-20](/p/${fundedResearchKey})

[pdfviewer width="1200px" height="800px"]${NEW}/Funding-_-2019-20.pdf[/pdfviewer]

#### [2018-19](/p/${fundedResearchKey})

[pdfviewer width="1200px" height="800px"]${NEW}/Funding-_-2018-19.pdf[/pdfviewer]
`;

const publicationsKey = "atme-research/publications";
const pubPdf = (file: string) => iprPdf(file);

type PubDept = {
  name: string;
  journals?: string[];
  conferences?: string[];
  books?: string[];
};
const pubData: { year: string; depts: PubDept[] }[] = [
  { year: "2025", depts: [
    { name: "Artificial Intelligence & Machine Learning", journals: ["AIML.pdf"] },
    { name: "Basic Sciences & Humanities", journals: ["BSH.pdf"] },
    { name: "Civil Engineering", journals: ["Civil.pdf"] },
    { name: "Computer Science & Design / Cyber Security", journals: ["CSD-CY_Journal_2025.pdf", "CSD.pdf"], books: ["CSD-CY_2025_Books.pdf"] },
    { name: "Computer Science & Engineering", journals: ["CSE.pdf"] },
    { name: "Electronics & Communication Engineering", journals: ["ECE.pdf"] },
    { name: "Electrical & Electronics Engineering", journals: ["EEE.pdf"] },
    { name: "Mechanical Engineering", journals: ["ME.pdf"] },
  ]},
  { year: "2024", depts: [
    { name: "Artificial Intelligence & Machine Learning", journals: ["AIML-1.pdf", "AI_ML.pdf"] },
    { name: "Basic Sciences & Humanities", journals: ["BSH-1.pdf", "BSH-2.pdf"] },
    { name: "Civil Engineering", journals: ["Civil-1.pdf", "Civil-2.pdf", "Civil-3.pdf"] },
    { name: "Computer Science & Engineering", journals: ["CSE-1.pdf", "CSE-2.pdf", "CSE-3.pdf"] },
    { name: "Electronics & Communication Engineering", journals: ["ECE-1.pdf"] },
    { name: "Electrical & Electronics Engineering", journals: ["EEE-1.pdf", "EEE-2.pdf"] },
    { name: "Mechanical Engineering", journals: ["ME-1.pdf", "ME-2.pdf", "ME-3.pdf"] },
  ]},
  { year: "2023", depts: [
    { name: "Basic Sciences & Humanities", journals: ["2023_BSH_Journal.pdf"], conferences: ["2023_BSH_Conference.pdf"] },
    { name: "Civil Engineering", conferences: ["2023_CE_Conference.pdf"] },
    { name: "Computer Science & Engineering", journals: ["2023_CSE_Journal.pdf"], conferences: ["2023_CSE_Conference.pdf"] },
    { name: "Electronics & Communication Engineering", journals: ["2023_ECE_Journal.pdf"], conferences: ["2023_ECE_Conference.pdf"], books: ["2023_ECE_Book-Chapter.pdf"] },
    { name: "Electrical & Electronics Engineering", journals: ["2023_EEE_Journal.pdf"], conferences: ["2023_EEE_Conference.pdf"] },
    { name: "Mechanical Engineering", journals: ["2023_ME_Journal.pdf"], conferences: ["2023_ME_Conference.pdf"] },
  ]},
  { year: "2022", depts: [
    { name: "Basic Sciences & Humanities", journals: ["2022_BSH_Journal.pdf"] },
    { name: "Civil Engineering", conferences: ["2022_CE_Conference.pdf"] },
    { name: "Computer Science & Engineering", journals: ["2022_CSE_Journal.pdf"], conferences: ["2022_CSE_Conference.pdf"] },
    { name: "Electronics & Communication Engineering", journals: ["2022_ECE_Journal.pdf"], conferences: ["2022_ECE_Conference.pdf"], books: ["2022_ECE_Book-Chapter.pdf"] },
    { name: "Electrical & Electronics Engineering", journals: ["2022_EEE_Journal.pdf"], conferences: ["2022_EEE_Conference.pdf"] },
    { name: "Mechanical Engineering", journals: ["2022_ME_Journal.pdf"], conferences: ["2022_ME_Conference.pdf"] },
  ]},
  { year: "2021", depts: [
    { name: "Basic Sciences & Humanities", journals: ["2021_BSH_Journal.pdf"], conferences: ["2021_BSH_Conference.pdf"] },
    { name: "Civil Engineering", journals: ["2021_CE_Journal.pdf"], conferences: ["2021_CE_Conference.pdf"] },
    { name: "Computer Science & Engineering", journals: ["2021_CSE_Journal.pdf"], conferences: ["2021_CSE_Conference.pdf"] },
    { name: "Electronics & Communication Engineering", journals: ["2021_ECE_Journal.pdf"], conferences: ["2021_ECE_Conference.pdf"] },
    { name: "Electrical & Electronics Engineering", journals: ["2021_EEE_Journal.pdf"], conferences: ["2021_EEE_Conference.pdf"] },
    { name: "Mechanical Engineering", journals: ["2021_ME_Journal.pdf"], conferences: ["2021_ME_Conference.pdf"] },
  ]},
  { year: "2020", depts: [
    { name: "Basic Sciences & Humanities", journals: ["2020_BSH_Journal.pdf"] },
    { name: "Civil Engineering", journals: ["2020_CE_Journal.pdf"], conferences: ["2020_CE_Conference.pdf"] },
    { name: "Computer Science & Engineering", journals: ["2020_CSE_Journal.pdf"], conferences: ["2020_CSE_Conference.pdf"] },
    { name: "Electronics & Communication Engineering", journals: ["2020_ECE_Journal.pdf"], conferences: ["2020_ECE_Conference.pdf"] },
    { name: "Electrical & Electronics Engineering", journals: ["2020_EEE_Journal.pdf"], conferences: ["2020_EEE_Conference.pdf"] },
    { name: "Mechanical Engineering", journals: ["2020_ME_Journal.pdf"], conferences: ["2020_ME_Conference.pdf"] },
  ]},
];

const renderPubGroup = (label: string, files?: string[]) => {
  if (!files || files.length === 0) return "";
  const inner = files.map((f) => pubPdf(f)).join("\n");
  return innerAcc(label, inner);
};

const renderPubDept = (d: PubDept) => {
  const inner =
    renderPubGroup("Journals", d.journals) +
    renderPubGroup("Conferences", d.conferences) +
    renderPubGroup("Book Chapters", d.books);
  if (!inner) return "";
  return innerAcc(d.name, inner);
};

const publicationsBody = `
## Research Publications

Year-wise list of journal articles, conference papers and book chapters
published by ATMECE faculty across all departments. Expand a year to see
all departmental publication lists.

${pubData.map((y, idx) =>
  topAcc(y.year,
    y.depts.map(renderPubDept).join("\n"),
    idx === 0,
  ),
).join("\n")}
`;


const mouKey = "mou-with-institution-industry-research-centers";
const mouBody = `
## MoUs — Institutions, Industry & Research Centres

ATMECE has signed strategic MoUs at the institutional and departmental level
with industries, research centres and partner institutions. The current
register of MoUs is embedded below.

#### [Institute Level MoUs](/p/${mouKey})

[pdfviewer width="1200px" height="800px"]${NEW}/MoU-Details-Institute-Level.pdf[/pdfviewer]

#### [Electronics & Communication Engineering](/p/${mouKey})

[pdfviewer width="1200px" height="800px"]${NEW}/MoU-Details-ECE.pdf[/pdfviewer]

#### [Computer Science & Engineering](/p/${mouKey})

[pdfviewer width="1200px" height="800px"]${NEW}/MoU-Details-CSE.pdf[/pdfviewer]

#### [Electrical & Electronics Engineering](/p/${mouKey})

[pdfviewer width="1200px" height="800px"]${NEW}/MoU-Details-EEE.pdf[/pdfviewer]

#### [Mechanical Engineering](/p/${mouKey})

[pdfviewer width="1200px" height="800px"]${NEW}/MoU-Details-ME.pdf[/pdfviewer]

#### [Civil Engineering](/p/${mouKey})

[pdfviewer width="1200px" height="800px"]${NEW}/MoU-Details_Civil-Engineering.pdf[/pdfviewer]
`;

const admissionPolicyBody = `
## ATME Admission Policy

The institutional admission policy of ATME College of Engineering is published in full below for direct viewing and download.

[pdfviewer width="1200px" height="900px"]/__l5e/assets-v1/bc3d7d8d-cd19-46eb-8745-60fdabb28bb5/18-ATME-Admission-Policy.pdf[/pdfviewer]
`;

const reservationPolicyBody = `
## Reservation in Student Admission Policy

ATME College of Engineering adheres to the reservation norms of the Government of Karnataka and AICTE. The complete policy document is embedded below.

[pdfviewer width="1200px" height="900px"]/__l5e/assets-v1/e022e995-90d1-4606-ba2b-bd0d5925174a/15-ATME-Reservation-in-Student-Admission-Policy.pdf[/pdfviewer]
`;

const antiRaggingKey = "admissions/anti-ragging-policy";
const antiRaggingBody = `
## Anti Ragging Policy

ATME College of Engineering strictly enforces a zero-tolerance, ragging-free campus in accordance with UGC, AICTE and Supreme Court of India directives. Use the quick links below to access official policy pages, download the undertaking format, or register online.

<a href="tel:18001805522" class="not-prose w-full flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-4 my-6 rounded-2xl bg-gradient-to-br from-[#129199] to-[#0d6f76] text-white text-center font-bold px-4 sm:px-6 py-5 hover:shadow-xl hover:scale-[1.01] transition-all shadow-lg ring-2 ring-[#f5c518] min-w-0 max-w-full box-border">
<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 sm:h-8 sm:w-8 shrink-0 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
<span class="text-[11px] sm:text-xs uppercase tracking-widest opacity-90">National Anti-Ragging Helpline</span>
<span class="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide whitespace-nowrap">1800 180 5522</span>
<span class="text-[11px] sm:text-xs uppercase tracking-widest opacity-90">24×7 Toll Free</span>
</a>

<div class="not-prose my-6" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:0.75rem;">
<a href="https://www.aicte.gov.in/grievance/anti" target="_blank" rel="noreferrer" class="rounded-xl bg-primary text-primary-foreground text-center font-semibold px-5 py-4 hover:opacity-90 transition shadow-sm" style="display:flex;align-items:center;justify-content:center;">Anti Ragging Policy — AICTE</a>
<a href="https://www.ugc.ac.in/page/Ragging-Related-Circulars.aspx" target="_blank" rel="noreferrer" class="rounded-xl bg-primary text-primary-foreground text-center font-semibold px-5 py-4 hover:opacity-90 transition shadow-sm" style="display:flex;align-items:center;justify-content:center;">Anti Ragging Policy — UGC</a>
<a href="https://new.atme.edu.in/wp-content/uploads/2026/04/AntiRagging_HowToFillUndertaking.pdf" target="_blank" rel="noreferrer" class="rounded-xl bg-primary text-primary-foreground text-center font-semibold px-5 py-4 hover:opacity-90 transition shadow-sm" style="display:flex;align-items:center;justify-content:center;">Steps to fill Undertaking</a>
<a href="https://www.antiragging.in/affidavit_affiliated_form.php" target="_blank" rel="noreferrer" class="rounded-xl bg-primary text-primary-foreground text-center font-semibold px-5 py-4 hover:opacity-90 transition shadow-sm" style="display:flex;align-items:center;justify-content:center;">Click to Register Online</a>
<a href="https://www.antiragging.in/undertaking_request.php" target="_blank" rel="noreferrer" class="rounded-xl bg-primary text-primary-foreground text-center font-semibold px-5 py-4 hover:opacity-90 transition shadow-sm" style="display:flex;align-items:center;justify-content:center;">Click to Download Form</a>
</div>

**Nearest Police Station:** Varuna Police Station

### RAGGING: PROHIBITION, PREVENTION AND PUNISHMENT

In 2009, University Grants Commission (UGC) passed UGC REGULATION ON CURBING THE MENACE OF RAGGING IN HIGHER EDUCATIONAL INSTITUTIONS, 2009. These regulations mandate every college's responsibility to curb the menace of ragging, including strict pre-emptive measures, like lodging freshers in a separate hostel, surprise raids especially at nights by the anti-ragging squad and submission of affidavits by all senior students and their parents taking oath not to indulge in ragging.

In view of the above regulation on curbing the menace of Ragging, the undersigned has formed an Anti Ragging Committee (ARC) and Anti Ragging Squad Committee (ARSC) constituting a Chairman and members. The ARC Chairman is authorized to implement stringent measures and ensure discipline, and to ensure there are no instances of Ragging in the college campus.

If any instances of Ragging are found, the Chairman shall take appropriate measures immediately and submit a detailed action-taken report to the Principal. The ARC Chairman conducts regular meetings with ARC members along with ARSC committee members to review/update the status of ground realities and submits a report to the principal annually.

#### Forms of Ragging

- Display of noisy, disorderly conduct, teasing, excitement by rough or rude treatment or handling, including rowdy, undisciplined activities causing annoyance, undue hardship, physical or psychological harm or apprehensive fear in a fresher.
- Any conduct by any student, by words spoken or written or by an act, which has the effect of teasing, treating or handling with rudeness a fresher or any other student.
- Indulging in rowdy or indiscipline activities causing annoyance, hardship, physical or psychological harm or fear to any fresher or other student.
- Asking any student to do any act which causes a sense of shame, torment or embarrassment so as to adversely affect the physique or psyche of such fresher or other student.
- Any act by a senior that prevents, disrupts or disturbs the regular academic activity of any other student or fresher.
- Any act of financial extortion or forceful expenditure burden put on a fresher or any other student.
- Any act of physical abuse including sexual abuse, homosexual assaults, stripping, forcing obscene and lewd acts, gestures, causing bodily harm or any other danger.
- Any act or abuse by spoken words, emails, post or public insults, or deriving perverted, vicarious or sadistic pleasure from participating in the discomfiture of any fresher or other student.
- Any act that affects the mental health and self-confidence of a fresher or any other student.

#### Action To Be Taken By The Head Of The Institution

On receipt of any information concerning a reported incident of ragging, the Head of Institution shall immediately determine if a case under the penal laws is made out and, if so, file a First Information Report (FIR) within twenty-four hours with the police and local authorities under the appropriate penal provisions relating to abetment to ragging, criminal conspiracy, unlawful assembly and rioting, public nuisance, violation of decency and morals, injury to body, wrongful restraint or confinement, use of criminal force, assault, sexual or unnatural offences, extortion, criminal trespass, offences against property, criminal intimidation, attempts or threats to commit any of these offences, and physical or psychological humiliation.

#### Administrative Action In The Event Of Ragging

The Anti-Ragging Committee may, depending on the nature and gravity of the guilt established by the Anti-Ragging Squad, award one or more of the following punishments: suspension from attending classes and academic privileges; withholding/withdrawing scholarship/fellowship and other benefits; debarring from appearing in any test/examination or evaluation process; withholding results; debarring from representing the institution in any regional, national or international meet/tournament/youth festival; suspension/expulsion from the hostel; cancellation of admission; rustication for one to four semesters; expulsion and consequent debarring from admission to any other institution for a specified period; fine up to ₹25,000/-.

If persons committing or abetting ragging are not identified, the institution shall resort to collective punishment. Appeals against orders of punishment lie with the Vice-Chancellor (for affiliated/constituent colleges), the Chancellor (for Universities), or the Chairman/Chancellor (for institutions of national importance).

#### Responsibilities of Anti-Ragging Squads

Squad in-charges are responsible for ensuring display of anti-ragging instructions at prominent places, preparing duty charts and carrying out regular and surprise checks, maintaining duty attendance registers, informing the chairman of any incident, briefing all members on their duties, forwarding daily feedback reports before 11:00 AM and 4:00 PM, maintaining the updated list of students with addresses and contact numbers, and conducting regular meetings with annual reports to the Principal.

<details class="not-prose my-6 rounded-xl border border-border bg-card shadow-sm overflow-hidden group">
<summary class="cursor-pointer select-none flex items-center justify-between gap-3 px-5 py-4 bg-primary text-primary-foreground font-semibold text-base hover:opacity-95"><span>Anti-Ragging Committee Members</span><span class="text-xs opacity-90 group-open:hidden">Click to view</span><span class="text-xs opacity-90 hidden group-open:inline">Click to collapse</span></summary>
<div class="p-5 space-y-4">
<p class="text-sm text-foreground/80">As part of our continued commitment to maintaining a ragging-free campus, the following members have been appointed for 2024–25, in accordance with UGC and Supreme Court of India guidelines.</p>
<div class="overflow-x-auto">
<table class="w-full text-sm border-collapse">
<thead class="bg-muted"><tr><th class="text-left p-2 border border-border">Sl No</th><th class="text-left p-2 border border-border">Name</th><th class="text-left p-2 border border-border">Position</th><th class="text-left p-2 border border-border">Contact</th></tr></thead>
<tbody>
<tr><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Dr. L Basavaraj</td><td class="p-2 border border-border">Chairman</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9448285641">9448285641</a></td></tr>
<tr><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Dr. Srinivasa K</td><td class="p-2 border border-border">Member Secretary</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9945045415">9945045415</a></td></tr>
<tr><td class="p-2 border border-border">3</td><td class="p-2 border border-border">Police Inspector, Varuna Police Station</td><td class="p-2 border border-border">Rep. of Police Administration</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9449391667">9449391667</a></td></tr>
<tr><td class="p-2 border border-border">4</td><td class="p-2 border border-border">Dr. Parthasarathy L</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9035064022">9035064022</a></td></tr>
<tr><td class="p-2 border border-border">5</td><td class="p-2 border border-border">Dr. Chethan S</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9844928905">9844928905</a></td></tr>
<tr><td class="p-2 border border-border">6</td><td class="p-2 border border-border">Dr. Puttegowda D</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9900622014">9900622014</a></td></tr>
<tr><td class="p-2 border border-border">7</td><td class="p-2 border border-border">Manu Vijay</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:8105598832">8105598832</a></td></tr>
<tr><td class="p-2 border border-border">8</td><td class="p-2 border border-border">Dr. Anitha D B</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9731251316">9731251316</a></td></tr>
<tr><td class="p-2 border border-border">9</td><td class="p-2 border border-border">Dr. Anil Kumar C J</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9900477621">9900477621</a></td></tr>
<tr><td class="p-2 border border-border">10</td><td class="p-2 border border-border">Dr. Nazreen Fathima</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9986617206">9986617206</a></td></tr>
<tr><td class="p-2 border border-border">11</td><td class="p-2 border border-border">Dr. Avinash K</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9148623123">9148623123</a></td></tr>
<tr><td class="p-2 border border-border">12</td><td class="p-2 border border-border">Dr. Muralidhar MP</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9611551921">9611551921</a></td></tr>
<tr><td class="p-2 border border-border">13</td><td class="p-2 border border-border">Devaraj M R</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9972322811">9972322811</a></td></tr>
<tr><td class="p-2 border border-border">14</td><td class="p-2 border border-border">Anupama Shetter</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9738484396">9738484396</a></td></tr>
<tr><td class="p-2 border border-border">15</td><td class="p-2 border border-border">Yogesh N</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9663170150">9663170150</a></td></tr>
<tr><td class="p-2 border border-border">16</td><td class="p-2 border border-border">Bharathi R</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9845075297">9845075297</a></td></tr>
<tr><td class="p-2 border border-border">17</td><td class="p-2 border border-border">Raghavendra R</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9590828662">9590828662</a></td></tr>
<tr><td class="p-2 border border-border">18</td><td class="p-2 border border-border">Leelavathi N</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:7899571411">7899571411</a></td></tr>
<tr><td class="p-2 border border-border">19</td><td class="p-2 border border-border">Nandeesh H G</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:8747899855">8747899855</a></td></tr>
<tr><td class="p-2 border border-border">20</td><td class="p-2 border border-border">Nagesh J</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9886975772">9886975772</a></td></tr>
<tr><td class="p-2 border border-border">21</td><td class="p-2 border border-border">Somasundar</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9110655005">9110655005</a></td></tr>
<tr><td class="p-2 border border-border">22</td><td class="p-2 border border-border">Vedamurthy KV</td><td class="p-2 border border-border">Parents' Representative</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9448049550">9448049550</a></td></tr>
<tr><td class="p-2 border border-border">23</td><td class="p-2 border border-border">Kumar E</td><td class="p-2 border border-border">Parents' Representative</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:7760344418">7760344418</a></td></tr>
</tbody>
</table>
</div>
</div>
</details>
`;

const admissionQueriesBody = `
## Admission Queries

Our admissions team is happy to guide you. Reach out by phone, email, fill the enquiry form below, or visit either of our offices.

<div class="not-prose my-8 max-w-3xl mx-auto">

<form action="mailto:admissions@atme.edu.in" method="post" enctype="text/plain" class="rounded-2xl border-2 border-[#f5c518] bg-gradient-to-br from-[#129199] to-[#0d6f76] p-6 sm:p-7 shadow-md space-y-4 !text-white">
<div>
<h3 class="font-display text-2xl font-bold text-white mb-1">Send an Enquiry</h3>
<p class="text-sm" style="color: rgba(255,255,255,.88) !important;">Fill the form — we'll get back to you on email.</p>
</div>
<div class="space-y-3">
<input required name="Name" placeholder="Full name *" class="w-full rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#f5c518]/60 focus:border-[#f5c518] transition"/>
<input required name="Phone" type="tel" placeholder="Phone number *" class="w-full rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#f5c518]/60 focus:border-[#f5c518] transition"/>
<input required name="Email" type="email" placeholder="Email address *" class="w-full rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#f5c518]/60 focus:border-[#f5c518] transition"/>
<select required name="Programme" class="w-full rounded-lg border border-white/30 bg-white/10 text-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#f5c518]/60 focus:border-[#f5c518] transition">
<option value="" class="text-foreground">Programme of interest *</option>
<option class="text-foreground">BE — Civil Engineering</option>
<option class="text-foreground">BE — Computer Science & Engineering</option>
<option class="text-foreground">BE — CSE (AI & ML)</option>
<option class="text-foreground">BE — CSE (Data Science)</option>
<option class="text-foreground">BE — CSE (Cyber Security)</option>
<option class="text-foreground">BE — CSE (Computer Science & Design)</option>
<option class="text-foreground">BE — Electronics & Communication</option>
<option class="text-foreground">BE — Electrical & Electronics</option>
<option class="text-foreground">BE — Mechanical Engineering</option>
<option class="text-foreground">BCA</option>
<option class="text-foreground">MBA</option>
<option class="text-foreground">MCA</option>
</select>
<textarea name="Message" rows="4" placeholder="Your question / message" class="w-full rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#f5c518]/60 focus:border-[#f5c518] transition resize-y"></textarea>
</div>
<button type="submit" class="w-full rounded-lg bg-[#f5c518] text-[#0d6f76] px-4 py-3 font-bold hover:bg-amber-300 active:scale-[0.98] transition">Send Enquiry →</button>
<p class="text-[11px] text-center" style="color: rgba(255,255,255,.78) !important;">Opens your email client pre-filled to admissions@atme.edu.in</p>
</form>

</div>

<div class="not-prose my-8" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1.5rem;">


<div class="rounded-2xl border-2 border-[#f5c518] bg-gradient-to-br from-[#129199] to-[#0d6f76] p-6 shadow-lg relative overflow-hidden group hover:shadow-xl transition-shadow duration-300 !text-white">
<div class="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full -mr-4 -mt-4 transition-transform duration-300 group-hover:scale-110"></div>
<div class="relative">
<div class="flex items-center gap-3 mb-3">
<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
<h3 class="font-display text-xl font-bold text-white">Corporate Office</h3>
</div>
<p class="font-semibold" style="color: rgba(255,255,255,.96) !important;">ATME College of Engineering</p>
<p class="leading-relaxed text-sm mt-1" style="color: rgba(255,255,255,.9) !important;">#2904, 2nd Floor, Kantharaj Urs Road,<br/>Next to Fire Brigade, Saraswathipuram,<br/>Mysore – 570 009, Karnataka</p>
<div class="mt-4 space-y-2 text-sm">
<div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> <a href="tel:+918214191551" class="text-white font-semibold hover:text-[#f5c518] transition">+91-821-41 91 551</a></div>
<div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> <a href="mailto:info@atme.edu.in" class="text-white font-semibold hover:text-[#f5c518] transition">info@atme.edu.in</a></div>
<div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> <a href="mailto:admissions@atme.edu.in" class="text-white font-semibold hover:text-[#f5c518] transition">admissions@atme.edu.in</a></div>
</div>
</div>
</div>

<div class="rounded-2xl border-2 border-[#f5c518] bg-gradient-to-br from-[#129199] to-[#0d6f76] p-6 shadow-lg relative overflow-hidden group hover:shadow-xl transition-shadow duration-300 !text-white">
<div class="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full -mr-4 -mt-4 transition-transform duration-300 group-hover:scale-110"></div>
<div class="relative">
<div class="flex items-center gap-3 mb-3">
<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
<h3 class="font-display text-xl font-bold text-white">College Address</h3>
</div>
<p class="font-semibold" style="color: rgba(255,255,255,.96) !important;">ATME College of Engineering</p>
<p class="leading-relaxed text-sm mt-1" style="color: rgba(255,255,255,.9) !important;">13th Kilometer, Mysore – Kanakapura – Bangalore Road,<br/>Mysore – 570 028, Karnataka</p>
<div class="mt-4 space-y-2 text-sm">
<div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> <a href="tel:+918212954081" class="text-white font-semibold hover:text-[#f5c518] transition">+91-821-2954081</a></div>
<div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> <a href="tel:+918212954011" class="text-white font-semibold hover:text-[#f5c518] transition">+91-821-2954011</a> <span class="text-white/70 text-xs">(Principal)</span></div>
<div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> <a href="mailto:principal@atme.edu.in" class="text-white font-semibold hover:text-[#f5c518] transition">principal@atme.edu.in</a></div>
</div>
</div>
</div>

</div>

<div class="not-prose my-6">
<h3 class="font-display text-2xl sm:text-3xl font-bold text-[#129199] text-center mb-6">For Admissions — Contact</h3>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:1rem;">

<div class="rounded-2xl border-2 border-[#f5c518] bg-gradient-to-br from-[#129199] to-[#0d6f76] p-5 shadow-lg text-center relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div class="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-full -mr-2 -mt-2"></div>
<div class="relative">
<div class="mx-auto mb-3 h-12 w-12 rounded-full bg-white/15 flex items-center justify-center border border-white/20"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
<a href="tel:+919036926363" class="block font-bold text-xl text-[#f5c518] hover:text-white transition">+91 90369 26363</a>
</div>
</div>
<div class="rounded-2xl border-2 border-[#f5c518] bg-gradient-to-br from-[#129199] to-[#0d6f76] p-5 shadow-lg text-center relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div class="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-full -mr-2 -mt-2"></div>
<div class="relative">
<div class="mx-auto mb-3 h-12 w-12 rounded-full bg-white/15 flex items-center justify-center border border-white/20"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg></div>
<div class="text-white/90 text-xs uppercase tracking-wide font-semibold mb-1">Principal</div>
<a href="tel:+919448285641" class="block font-bold text-lg text-white hover:text-[#f5c518] transition">+91 94482-85641</a>
</div>
</div>
<div class="rounded-2xl border-2 border-[#f5c518] bg-gradient-to-br from-[#129199] to-[#0d6f76] p-5 shadow-lg text-center relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div class="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-full -mr-2 -mt-2"></div>
<div class="relative">
<div class="mx-auto mb-3 h-12 w-12 rounded-full bg-white/15 flex items-center justify-center border border-white/20"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg></div>
<div class="text-white/90 text-xs uppercase tracking-wide font-semibold mb-1">AO</div>
<a href="tel:+919448678271" class="block font-bold text-lg text-white hover:text-[#f5c518] transition">+91 94486-78271</a>
</div>
</div>
<div class="rounded-2xl border-2 border-[#f5c518] bg-gradient-to-br from-[#129199] to-[#0d6f76] p-5 shadow-lg text-center relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div class="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-full -mr-2 -mt-2"></div>
<div class="relative">
<div class="mx-auto mb-3 h-12 w-12 rounded-full bg-white/15 flex items-center justify-center border border-white/20"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
<div class="text-white/90 text-xs uppercase tracking-wide font-semibold mb-1">AAO</div>
<a href="tel:+919448285644" class="block font-bold text-lg text-white hover:text-[#f5c518] transition">+91 94482-85644</a>
</div>
</div>
</div>
</div>

</div>
`;

const generalInformationBody = `
## General Information

<div class="not-prose my-8" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1.5rem;">

<div class="rounded-2xl border-2 border-[#f5c518] bg-gradient-to-br from-[#129199] to-[#0d6f76] p-6 shadow-lg relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div class="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full -mr-4 -mt-4 transition-transform duration-300 group-hover:scale-110"></div>
<div class="relative">
<div class="flex items-center gap-3 mb-3">
<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
<h3 class="font-display text-xl font-bold text-white">Corporate Office</h3>
</div>
<p class="font-semibold !text-white">ATME College of Engineering</p>
<p class="!text-white/90 leading-relaxed text-sm mt-1">#2904, 2nd Floor, Kantharaj Urs Road,<br/>Next to Fire Brigade, Saraswathipuram,<br/>Mysore – 570 009, Karnataka</p>
<div class="mt-4 space-y-2 text-sm">
<div class="flex items-center gap-2 !text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> <a href="tel:+918214191551" class="!text-white font-semibold hover:!text-[#f5c518] transition">+91-821-41 91 551</a></div>
<div class="flex items-center gap-2 !text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> <a href="mailto:info@atme.edu.in" class="!text-white font-semibold hover:!text-[#f5c518] transition">info@atme.edu.in</a></div>
<div class="flex items-center gap-2 !text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> <a href="mailto:admissions@atme.edu.in" class="!text-white font-semibold hover:!text-[#f5c518] transition">admissions@atme.edu.in</a></div>
</div>
</div>
</div>

<div class="rounded-2xl border-2 border-[#f5c518] bg-gradient-to-br from-[#129199] to-[#0d6f76] p-6 shadow-lg relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div class="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full -mr-4 -mt-4 transition-transform duration-300 group-hover:scale-110"></div>
<div class="relative">
<div class="flex items-center gap-3 mb-3">
<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
<h3 class="font-display text-xl font-bold text-white">College Address</h3>
</div>
<p class="font-semibold !text-white">ATME College of Engineering</p>
<p class="!text-white/90 leading-relaxed text-sm mt-1">13th Kilometer, Mysore – Kanakapura – Bangalore Road,<br/>Mysore – 570 028, Karnataka</p>
<div class="mt-4 space-y-2 text-sm">
<div class="flex items-center gap-2 !text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> <a href="tel:+918212954081" class="!text-white font-semibold hover:!text-[#f5c518] transition">+91-821-2954081</a></div>
<div class="flex items-center gap-2 !text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> <a href="tel:+918212954011" class="!text-white font-semibold hover:!text-[#f5c518] transition">+91-821-2954011</a> <span class="!text-white/80 text-xs">(Principal)</span></div>
<div class="flex items-center gap-2 !text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> <a href="mailto:principal@atme.edu.in" class="!text-white font-semibold hover:!text-[#f5c518] transition">principal@atme.edu.in</a></div>
</div>
</div>
</div>

</div>

<div class="not-prose my-6">
<h3 class="font-display text-2xl sm:text-3xl font-bold text-[#129199] text-center mb-6">For Admissions — Contact</h3>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:1rem;">
<div class="rounded-2xl border-2 border-[#f5c518] bg-gradient-to-br from-[#129199] to-[#0d6f76] p-5 shadow-lg text-center relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div class="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-full -mr-2 -mt-2"></div>
<div class="relative">
<div class="mx-auto mb-3 h-12 w-12 rounded-full bg-white/15 flex items-center justify-center border border-white/20"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
<a href="tel:+919036926363" class="block font-bold text-xl text-[#f5c518] hover:text-white transition">+91 90369 26363</a>
</div>
</div>
<div class="rounded-2xl border-2 border-[#f5c518] bg-gradient-to-br from-[#129199] to-[#0d6f76] p-5 shadow-lg text-center relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div class="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-full -mr-2 -mt-2"></div>
<div class="relative">
<div class="mx-auto mb-3 h-12 w-12 rounded-full bg-white/15 flex items-center justify-center border border-white/20"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg></div>
<div class="text-white/90 text-xs uppercase tracking-wide font-semibold mb-1">Principal</div>
<a href="tel:+919448285641" class="block font-bold text-lg text-white hover:text-[#f5c518] transition">+91 94482-85641</a>
</div>
</div>
<div class="rounded-2xl border-2 border-[#f5c518] bg-gradient-to-br from-[#129199] to-[#0d6f76] p-5 shadow-lg text-center relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div class="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-full -mr-2 -mt-2"></div>
<div class="relative">
<div class="mx-auto mb-3 h-12 w-12 rounded-full bg-white/15 flex items-center justify-center border border-white/20"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg></div>
<div class="text-white/90 text-xs uppercase tracking-wide font-semibold mb-1">AO</div>
<a href="tel:+919448678271" class="block font-bold text-lg text-white hover:text-[#f5c518] transition">+91 94486-78271</a>
</div>
</div>
<div class="rounded-2xl border-2 border-[#f5c518] bg-gradient-to-br from-[#129199] to-[#0d6f76] p-5 shadow-lg text-center relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div class="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-full -mr-2 -mt-2"></div>
<div class="relative">
<div class="mx-auto mb-3 h-12 w-12 rounded-full bg-white/15 flex items-center justify-center border border-white/20"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#f5c518]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
<div class="text-white/90 text-xs uppercase tracking-wide font-semibold mb-1">AAO</div>
<a href="tel:+919448285644" class="block font-bold text-lg text-white hover:text-[#f5c518] transition">+91 94482-85644</a>
</div>
</div>
</div>
</div>

### KEA Vacant Seats for AY 2024-25 (Govt. Quota)

ATME College of Engineering — College Code: **E205**

| Branch | Approved Intake | No. of seats unfilled |
| --- | --- | --- |
| Computer Sciences Engineering | 120 | 10 |
| Computer Sciences & Design | 60 | 14 |
| Computer Sciences (AI & ML) | 60 | 01 |
| Computer Sciences (Data Science) | 60 | 06 |
| Computer Sciences (Cyber Security) | 30 | 07 |
| Electronics & Communication Engineering | 120 | 13 |
| Electrical & Electronics | 60 | 17 |
| Mechanical Engineering | 30 | 26 |
| Civil Engineering | 60 | 52 |

### Total Intake Seats

#### UG Programmes

| Sl. No. | Course | Intake |
| --- | --- | --- |
| 1 | Civil Engg. | 30 |
| 2 | Computer Science & Engg. | 180 |
| 3 | Computer Science & Engg. — Data Science | 60 |
| 4 | Computer Science & Engg. — Artificial Intelligence and Machine Learning | 60 |
| 5 | Computer Science & Engg. — Computer Science & Design | 60 |
| 6 | Computer Science & Engineering (Cyber Security) | 60 |
| 7 | Electronics & Communication Engg. | 120 |
| 8 | Electrical & Electronics Engg. | 60 |
| 9 | Mechanical Engineering | 30 |
| 10 | Bachelor of Computer Applications (BCA) | 60 |

#### PG Programmes

| Sl. No. | Course | Intake |
| --- | --- | --- |
| 1 | Master of Computer Applications (MCA) | 120 |
| 2 | Master of Business Administration (MBA) | 60 |

### Research Centres at ATMECE

| Sl. No. | Department |
| --- | --- |
| 1 | Computer Science Engineering |
| 2 | Electronics & Communication Engineering |
| 3 | Electrical & Electronics Engineering |
| 4 | Mechanical Engineering |
| 5 | Chemistry |
| 6 | Physics |
`;

const courseInfoBody = `
## Course Information

<h3 class="text-center font-display font-bold text-2xl sm:text-3xl text-[#129199] mt-10 mb-6 relative pb-3 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#129199] after:rounded-full">UG Programmes</h3>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 not-prose my-6 max-w-5xl mx-auto" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr))">
<a href="/p/civil-engineering/about-the-department-2" class="group rounded-2xl border border-border bg-card hover:bg-primary/5 hover:border-primary transition shadow-sm overflow-hidden text-center p-4 hover:-translate-y-1 hover:shadow-lg duration-200"><div class="mx-auto h-20 w-20 rounded-full bg-[#129199] flex items-center justify-center shadow-md ring-2 ring-[#129199]/20"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 transition group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><path d="M14 6a6 6 0 0 1 6 6v3"/></svg></div><h4 class="mt-3 text-sm sm:text-base font-bold text-center text-[#f5c518] group-hover:text-[#129199] transition">Civil Engineering</h4></a>
<a href="/p/computer-science-and-engineering/about-the-department" class="group rounded-2xl border border-border bg-card hover:bg-primary/5 hover:border-primary transition shadow-sm overflow-hidden text-center p-4 hover:-translate-y-1 hover:shadow-lg duration-200"><div class="mx-auto h-20 w-20 rounded-full bg-[#129199] flex items-center justify-center shadow-md ring-2 ring-[#129199]/20"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 transition group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg></div><h4 class="mt-3 text-sm sm:text-base font-bold text-center text-[#f5c518] group-hover:text-[#129199] transition">Computer Science & Engineering</h4></a>
<a href="/p/cse-data-science" class="group rounded-2xl border border-border bg-card hover:bg-primary/5 hover:border-primary transition shadow-sm overflow-hidden text-center p-4 hover:-translate-y-1 hover:shadow-lg duration-200"><div class="mx-auto h-20 w-20 rounded-full bg-[#129199] flex items-center justify-center shadow-md ring-2 ring-[#129199]/20"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 transition group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/></svg></div><h4 class="mt-3 text-sm sm:text-base font-bold text-center text-[#f5c518] group-hover:text-[#129199] transition">CSE — Data Science</h4></a>
<a href="/p/ai-ml" class="group rounded-2xl border border-border bg-card hover:bg-primary/5 hover:border-primary transition shadow-sm overflow-hidden text-center p-4 hover:-translate-y-1 hover:shadow-lg duration-200"><div class="mx-auto h-20 w-20 rounded-full bg-[#129199] flex items-center justify-center shadow-md ring-2 ring-[#129199]/20"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 transition group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/></svg></div><h4 class="mt-3 text-sm sm:text-base font-bold text-center text-[#f5c518] group-hover:text-[#129199] transition">CSE — AI & Machine Learning</h4></a>
<a href="/p/cse-computer-science-design" class="group rounded-2xl border border-border bg-card hover:bg-primary/5 hover:border-primary transition shadow-sm overflow-hidden text-center p-4 hover:-translate-y-1 hover:shadow-lg duration-200"><div class="mx-auto h-20 w-20 rounded-full bg-[#129199] flex items-center justify-center shadow-md ring-2 ring-[#129199]/20"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 transition group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M11 9h4a2 2 0 0 0 2-2V3"/><circle cx="9" cy="9" r="2"/><path d="M7 21v-4a2 2 0 0 1 2-2h4"/><circle cx="15" cy="15" r="2"/></svg></div><h4 class="mt-3 text-sm sm:text-base font-bold text-center text-[#f5c518] group-hover:text-[#129199] transition">Computer Science & Design</h4></a>
<a href="/p/electronics-communication-engineering/about-the-department-2" class="group rounded-2xl border border-border bg-card hover:bg-primary/5 hover:border-primary transition shadow-sm overflow-hidden text-center p-4 hover:-translate-y-1 hover:shadow-lg duration-200"><div class="mx-auto h-20 w-20 rounded-full bg-[#129199] flex items-center justify-center shadow-md ring-2 ring-[#129199]/20"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 transition group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1"/></svg></div><h4 class="mt-3 text-sm sm:text-base font-bold text-center text-[#f5c518] group-hover:text-[#129199] transition">Electronics & Communication</h4></a>
<a href="/p/electrical-and-electronics-engineering/ee-about-the-department" class="group rounded-2xl border border-border bg-card hover:bg-primary/5 hover:border-primary transition shadow-sm overflow-hidden text-center p-4 hover:-translate-y-1 hover:shadow-lg duration-200"><div class="mx-auto h-20 w-20 rounded-full bg-[#129199] flex items-center justify-center shadow-md ring-2 ring-[#129199]/20"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 transition group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg></div><h4 class="mt-3 text-sm sm:text-base font-bold text-center text-[#f5c518] group-hover:text-[#129199] transition">Electrical & Electronics</h4></a>
<a href="/p/mechanical-engineering/about-mechanical-department" class="group rounded-2xl border border-border bg-card hover:bg-primary/5 hover:border-primary transition shadow-sm overflow-hidden text-center p-4 hover:-translate-y-1 hover:shadow-lg duration-200"><div class="mx-auto h-20 w-20 rounded-full bg-[#129199] flex items-center justify-center shadow-md ring-2 ring-[#129199]/20"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 transition group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg></div><h4 class="mt-3 text-sm sm:text-base font-bold text-center text-[#f5c518] group-hover:text-[#129199] transition">Mechanical Engineering</h4></a>
<a href="/p/cyber-security" class="group rounded-2xl border border-border bg-card hover:bg-primary/5 hover:border-primary transition shadow-sm overflow-hidden text-center p-4 hover:-translate-y-1 hover:shadow-lg duration-200"><div class="mx-auto h-20 w-20 rounded-full bg-[#129199] flex items-center justify-center shadow-md ring-2 ring-[#129199]/20"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 transition group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg></div><h4 class="mt-3 text-sm sm:text-base font-bold text-center text-[#f5c518] group-hover:text-[#129199] transition">CSE — Cyber Security</h4></a>
<div class="group rounded-2xl border border-border bg-card shadow-sm overflow-hidden text-center p-4"><div class="mx-auto h-20 w-20 rounded-full bg-[#129199] flex items-center justify-center shadow-md ring-2 ring-[#129199]/20"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg></div><h4 class="mt-3 text-sm sm:text-base font-bold text-center text-[#f5c518]">Bachelor of Computer Applications (BCA)</h4></div>
</div>

<h3 class="text-center font-display font-bold text-2xl sm:text-3xl text-[#129199] mt-12 mb-6 relative pb-3 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#129199] after:rounded-full">PG Programmes</h3>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 not-prose my-6 max-w-5xl mx-auto" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr))">
<a href="/p/master-of-computer-applications" class="group rounded-2xl border border-border bg-card hover:bg-primary/5 hover:border-primary transition shadow-sm overflow-hidden text-center p-4 hover:-translate-y-1 hover:shadow-lg duration-200"><div class="mx-auto h-20 w-20 rounded-full bg-[#129199] flex items-center justify-center shadow-md ring-2 ring-[#129199]/20"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 transition group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg></div><h4 class="mt-3 text-sm sm:text-base font-bold text-center text-[#f5c518] group-hover:text-[#129199] transition">Master of Computer Applications (MCA)</h4></a>
<a href="/p/master-of-business-administration-mba" class="group rounded-2xl border border-border bg-card hover:bg-primary/5 hover:border-primary transition shadow-sm overflow-hidden text-center p-4 hover:-translate-y-1 hover:shadow-lg duration-200"><div class="mx-auto h-20 w-20 rounded-full bg-[#129199] flex items-center justify-center shadow-md ring-2 ring-[#129199]/20"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 transition group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg></div><h4 class="mt-3 text-sm sm:text-base font-bold text-center text-[#f5c518] group-hover:text-[#129199] transition">Master of Business Administration (MBA)</h4></a>
</div>

Check the link below to view the Schemes & Syllabus of all the Departments.

B.E. Scheme, Syllabus & Academic Calendar — [VTU Schemes & Syllabus](https://vtu.ac.in/b-e-scheme-syllabus/)

### Research Centres

| Sl. No. | Department Research Centre |
| --- | --- |
| 1 | Physics |
| 2 | Chemistry |
| 3 | Computer Science Engineering |
| 4 | Electrical & Electronics Engineering |
| 5 | Electronics & Communication Engineering |
| 6 | Mechanical Engineering |
`;

const admissionProcessBody = `
## Admission Process

**ADMISSION PROCESS FOR UG (BE) PROGRAMME**

Admissions are done as per Government of Karnataka and AICTE norms.

### Eligibility Criteria

- Candidate should have passed 2nd PUC / 12th Std / equivalent exam with English as one of the languages and obtained a minimum of **45%** in aggregate in Physics and Mathematics along with Chemistry / Bio-Technology / Biology / Electronics / Computer (**40%** for SC, ST, Cat-1, 2A, 2B, 3A and 3B category candidates).
- Candidate should have a qualifying rank in either **CET** or **COMEDK** entrance test.

### Branch-wise Seat & Quota Availability

| Sl. No. | Course | Sanctioned Intake | CET Quota (45%) | COMEDK Quota (30%) | Management Quota (25%) |
| --- | --- | --- | --- | --- | --- |
| 1 | Civil Engg. | 30 | 14 | 9 | 7 |
| 2 | Computer Science & Engg. | 120 | 54 | 36 | 30 |
| 3 | CSE — Data Science | 60 | 27 | 18 | 15 |
| 4 | CSE — Artificial Intelligence & Machine Learning | 60 | 27 | 18 | 15 |
| 5 | CSE — Computer Science & Design | 60 | 27 | 18 | 15 |
| 6 | CSE — Cyber Security | 60 | 27 | 18 | 15 |
| 7 | Electronics & Communication Engg. | 120 | 54 | 36 | 30 |
| 8 | Electrical & Electronics Engg. | 60 | 27 | 18 | 15 |
| 9 | Mechanical Engineering | 30 | 14 | 9 | 7 |

### Admission Process

**CET Quota** — For CET Quota, the test is conducted by the Karnataka Examination Authority for candidates of Karnataka domicile. For details visit [kea.kar.nic.in](https://kea.kar.nic.in/).

**COMEDK Quota** — For COMEDK Quota, the test is conducted by the Karnataka Unaided Private Engineering Colleges Association Authority for both Karnataka and non-Karnataka candidates. For details visit [comedk.org](https://www.comedk.org/).

**Management Quota** — For Management Quota seats, ATME invites applications from eligible candidates who fulfill the minimum norms specified above. Based on personal counselling, seats are allotted on merit. Application details and counselling notifications are announced on this site (typically in May/June).
`;

const scholarshipsBody = `
## Scholarships

### Scholarship & Fellowship Schemes

<details class="not-prose nested-accordion group my-4 rounded-xl border-2 border-[#f5c518] bg-card shadow-md overflow-hidden" open>
<summary class="cursor-pointer select-none flex items-center justify-between gap-3 px-5 sm:px-6 py-4 sm:py-5 bg-[#129199] text-white font-semibold text-base sm:text-lg hover:bg-[#0f7a80] transition-colors data-[state=open]:bg-[#0d3438]"><span class="flex-1 text-left">I. AICTE Scholarship Schemes (BE, BCA & MBA)</span><svg class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></summary>
<div class="p-5 overflow-x-auto">
<table class="w-full text-sm border-collapse">
<thead class="bg-muted"><tr><th class="text-left p-2 border border-border w-12">#</th><th class="text-left p-2 border border-border">Scheme</th><th class="text-left p-2 border border-border">Reference</th></tr></thead>
<tbody>
<tr><td class="p-2 border border-border">1</td><td class="p-2 border border-border"><b>AICTE-YASHASVI</b> — Young Achievers Scholarship Scheme for meritorious students in core branches of Engineering.</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://facilities.aicte-india.org/FAQsYashasvi%20Scheme_2024.pdf" target="_blank" rel="noreferrer">Open PDF</a></td></tr>
<tr><td class="p-2 border border-border">2</td><td class="p-2 border border-border"><b>AICTE-SWANATH</b> — For orphan students, children of COVID-affected parents, wards of armed-forces martyrs.</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://www.aicte-india.org/sites/default/files/stdc/AICTE-SWANATH-%20SCHEME-DEGREE-DIPLOMA.pdf" target="_blank" rel="noreferrer">Open PDF</a></td></tr>
<tr><td class="p-2 border border-border">3</td><td class="p-2 border border-border"><b>AICTE PRAGATHI</b> — For meritorious girls in AICTE-approved technical degree/diploma programmes.</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://www.aicte-india.org/schemes/students-development-schemes/Pragati/General-Instructions" target="_blank" rel="noreferrer">Visit</a></td></tr>
<tr><td class="p-2 border border-border">4</td><td class="p-2 border border-border"><b>AICTE SARASWATI</b> — For meritorious girl students in BBA / BMS / BCA at AICTE-approved institutions.</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://facilities.aicte-india.org/AICTE%20Saraswati%20Scholarship%20Scheme%20Guidelines_2024-Final.pdf" target="_blank" rel="noreferrer">Open PDF</a></td></tr>
<tr><td class="p-2 border border-border">5</td><td class="p-2 border border-border"><b>AICTE SAKSHAM</b> — For differently-abled students.</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://www.aicte-india.org/schemes/students-development-schemes/Saksham/General-Instructions" target="_blank" rel="noreferrer">Visit</a></td></tr>
<tr><td class="p-2 border border-border">6</td><td class="p-2 border border-border"><b>AICTE PG Scholarship</b> — Monthly stipend of ₹12,400 for GATE/GPAT-qualified PG students.</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://www.aicte-india.org/schemes/students-development-schemes/PG-Scholarship-Scheme" target="_blank" rel="noreferrer">Visit</a></td></tr>
</tbody></table>
</div></details>

<details class="not-prose nested-accordion group my-4 rounded-xl border-2 border-[#f5c518] bg-card shadow-md overflow-hidden">
<summary class="cursor-pointer select-none flex items-center justify-between gap-3 px-5 sm:px-6 py-4 sm:py-5 bg-[#129199] text-white font-semibold text-base sm:text-lg hover:bg-[#0f7a80] transition-colors data-[state=open]:bg-[#0d3438]"><span class="flex-1 text-left">II. NSP — National Scholarship Portal</span><svg class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></summary>
<div class="p-5 overflow-x-auto">
<table class="w-full text-sm border-collapse">
<thead class="bg-muted"><tr><th class="text-left p-2 border border-border w-12">#</th><th class="text-left p-2 border border-border">Scheme</th><th class="text-left p-2 border border-border">Reference</th></tr></thead>
<tbody>
<tr><td class="p-2 border border-border">1</td><td class="p-2 border border-border"><b>PM-USP Yojana</b> — Financial assistance to meritorious students from poor families for higher studies.</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://scholarships.gov.in/public/schemeGuidelines/CSSS_GUIDLINES_07022024_updated.pdf" target="_blank" rel="noreferrer">Open PDF</a></td></tr>
<tr><td class="p-2 border border-border">2</td><td class="p-2 border border-border"><b>Top Class Education — SC</b> — Department of Social Justice & Empowerment.</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://scholarships.gov.in/public/schemeGuidelines/Top_Class_Education_Scheme_2018.pdf" target="_blank" rel="noreferrer">Open PDF</a></td></tr>
<tr><td class="p-2 border border-border">3</td><td class="p-2 border border-border"><b>National Scholarship for PG Studies (UGC)</b></td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://scholarships.gov.in/public/schemeGuidelines/Guidelines_NATIONAL_SCHOLARSHIP_FOR_POSTGRADUATE_STUDIES_UGC_2324.pdf" target="_blank" rel="noreferrer">Open PDF</a></td></tr>
<tr><td class="p-2 border border-border">4</td><td class="p-2 border border-border"><b>PM YASASVI</b> — Central Sector Scheme for OBC, EBC & DNT students.</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://scholarships.gov.in/public/schemeGuidelines/ApprovedmodifieddraftofTopClassCollege.pdf" target="_blank" rel="noreferrer">Open PDF</a></td></tr>
<tr><td class="p-2 border border-border">5</td><td class="p-2 border border-border"><b>Scholarships for Students with Disabilities</b></td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://scholarships.gov.in/public/schemeGuidelines/DEPDGuidelines_1.pdf" target="_blank" rel="noreferrer">Open PDF</a> · <a class="text-primary hover:underline" href="https://depwd.gov.in/" target="_blank" rel="noreferrer">DEPwD</a></td></tr>
</tbody></table>
</div></details>

<details class="not-prose nested-accordion group my-4 rounded-xl border-2 border-[#f5c518] bg-card shadow-md overflow-hidden">
<summary class="cursor-pointer select-none flex items-center justify-between gap-3 px-5 sm:px-6 py-4 sm:py-5 bg-[#129199] text-white font-semibold text-base sm:text-lg hover:bg-[#0f7a80] transition-colors data-[state=open]:bg-[#0d3438]"><span class="flex-1 text-left">III. AICTE Fellowship Schemes</span><svg class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></summary>
<div class="p-5 overflow-x-auto">
<table class="w-full text-sm border-collapse">
<thead class="bg-muted"><tr><th class="text-left p-2 border border-border w-12">#</th><th class="text-left p-2 border border-border">Scheme</th><th class="text-left p-2 border border-border">Reference</th></tr></thead>
<tbody>
<tr><td class="p-2 border border-border">1</td><td class="p-2 border border-border"><b>AICTE Productization Fellowship (APF)</b></td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://facilities.aicte-india.org/downloads/APF%20Scheme%20Guidlines.pdf" target="_blank" rel="noreferrer">Open PDF</a></td></tr>
<tr><td class="p-2 border border-border">2</td><td class="p-2 border border-border"><b>AICTE Post-Doctoral Fellowship (PDF)</b> 2024–25</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://www.aicte-india.org/sites/default/files/AICTE%20PDF%20scheme%20Guidelines.pdf" target="_blank" rel="noreferrer">Open PDF</a></td></tr>
<tr><td class="p-2 border border-border">3</td><td class="p-2 border border-border"><b>AICTE AURA 2024</b> — Augmenting Utilization of Research Assets</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://www.aicte-india.org/sites/default/files/AICTE%20AURA%202024%20SCHEME_GUIDELINES.pdf" target="_blank" rel="noreferrer">Open PDF</a></td></tr>
<tr><td class="p-2 border border-border">4</td><td class="p-2 border border-border"><b>AICTE Vishwakarma Awards 2020</b></td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://www.aicte-india.org/AICTE%20Vishwakarma%20Award%202020" target="_blank" rel="noreferrer">Visit</a></td></tr>
<tr><td class="p-2 border border-border">5</td><td class="p-2 border border-border"><b>Smart India Hackathon</b></td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://www.aicte-india.org/Initiatives/smart-india-hackathon" target="_blank" rel="noreferrer">Visit</a></td></tr>
</tbody></table>
</div></details>

<details class="not-prose nested-accordion group my-4 rounded-xl border-2 border-[#f5c518] bg-card shadow-md overflow-hidden">
<summary class="cursor-pointer select-none flex items-center justify-between gap-3 px-5 sm:px-6 py-4 sm:py-5 bg-[#129199] text-white font-semibold text-base sm:text-lg hover:bg-[#0f7a80] transition-colors data-[state=open]:bg-[#0d3438]"><span class="flex-1 text-left">IV. State Scholarship Portal (SSP)</span><svg class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></summary>
<div class="p-5 overflow-x-auto">
<table class="w-full text-sm border-collapse">
<thead class="bg-muted"><tr><th class="text-left p-2 border border-border w-12">#</th><th class="text-left p-2 border border-border">Department</th><th class="text-left p-2 border border-border">Portal</th></tr></thead>
<tbody>
<tr><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Social Welfare Department (SC)</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://swdservices.karnataka.gov.in/SWD_New/Webpages/PostMatrix.aspx" target="_blank" rel="noreferrer">Visit</a></td></tr>
<tr><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Tribal Welfare Department (ST)</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://twd.karnataka.gov.in/" target="_blank" rel="noreferrer">Visit</a></td></tr>
<tr><td class="p-2 border border-border">3</td><td class="p-2 border border-border">Backward Classes Welfare Department (Cat-1, Other OBC)</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://bcwd.karnataka.gov.in/138/postmatric-scholarship-application-ug-and-pg/en" target="_blank" rel="noreferrer">Visit</a></td></tr>
<tr><td class="p-2 border border-border">4</td><td class="p-2 border border-border">Department of Minority Welfare</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://dom.karnataka.gov.in/english" target="_blank" rel="noreferrer">Visit</a></td></tr>
</tbody></table>
</div></details>

<details class="not-prose nested-accordion group my-4 rounded-xl border-2 border-[#f5c518] bg-card shadow-md overflow-hidden">
<summary class="cursor-pointer select-none flex items-center justify-between gap-3 px-5 sm:px-6 py-4 sm:py-5 bg-[#129199] text-white font-semibold text-base sm:text-lg hover:bg-[#0f7a80] transition-colors data-[state=open]:bg-[#0d3438]"><span class="flex-1 text-left">V. Scholarships from Private Sectors / Companies / Institutions</span><svg class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></summary>
<div class="p-5 overflow-x-auto">
<table class="w-full text-sm border-collapse">
<thead class="bg-muted"><tr><th class="text-left p-2 border border-border w-12">#</th><th class="text-left p-2 border border-border">Scheme</th><th class="text-left p-2 border border-border">Reference</th></tr></thead>
<tbody>
<tr><td class="p-2 border border-border">1</td><td class="p-2 border border-border">ONGC Scholarship — SC/ST, OBC & General</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://ongcscholar.org/#/fellowshipScheme" target="_blank" rel="noreferrer">Visit</a></td></tr>
<tr><td class="p-2 border border-border">2</td><td class="p-2 border border-border">NTPC Utkarsh — Merit scholarship for BE/B.Tech students</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://www.theglobalscholarship.org/scholarship/ntpc-scholarship-?source=main" target="_blank" rel="noreferrer">Visit</a></td></tr>
<tr><td class="p-2 border border-border">3</td><td class="p-2 border border-border">JN Tata Endowment Loan Scholarship</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://www.tatatrusts.org/our-work/individual-grants-programme/education-grants" target="_blank" rel="noreferrer">Visit</a></td></tr>
<tr><td class="p-2 border border-border">4</td><td class="p-2 border border-border">Reliance Engineering Scholarship</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://www.scholarships.reliancefoundation.org/UG_Scholarship.aspx" target="_blank" rel="noreferrer">Visit</a></td></tr>
<tr><td class="p-2 border border-border">5</td><td class="p-2 border border-border">Microsoft Scholarship for Women in Engineering</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://www.microsoft.com/en-us/diversity/programs/women-at-microsoft-scholarship" target="_blank" rel="noreferrer">Visit</a></td></tr>
<tr><td class="p-2 border border-border">6</td><td class="p-2 border border-border">Bharti Airtel Scholarship</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://bhartifoundation.org/bharti-airtel-scholarship/" target="_blank" rel="noreferrer">Visit</a></td></tr>
<tr><td class="p-2 border border-border">7</td><td class="p-2 border border-border">Sitaram Jindal Foundation Scholarship</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://www.sitaramjindalfoundation.org/scholarships-for-students-in-bangalore.php" target="_blank" rel="noreferrer">Visit</a></td></tr>
<tr><td class="p-2 border border-border">8</td><td class="p-2 border border-border">HDFC Bank Parivartan's ECSS Programme</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://unstop.com/scholarships/hdfc-bank-parivartans-ecss-programme-2023-2024-hdfc-bank-829970" target="_blank" rel="noreferrer">Visit</a></td></tr>
<tr><td class="p-2 border border-border">9</td><td class="p-2 border border-border">Siemens India Scholarship</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://scholarshipstatuscheck.com/siemens-scholarship-program/" target="_blank" rel="noreferrer">Visit</a></td></tr>
<tr><td class="p-2 border border-border">10</td><td class="p-2 border border-border">Legrand Empowering Scholarship</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://legrandscholarship.co.in/" target="_blank" rel="noreferrer">Visit</a></td></tr>
<tr><td class="p-2 border border-border">11</td><td class="p-2 border border-border">Foundation for Excellence (FFE) Scholarships</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://ffe.org/scholarships/" target="_blank" rel="noreferrer">Visit</a></td></tr>
<tr><td class="p-2 border border-border">12</td><td class="p-2 border border-border">Tata Realty Scholarship for Girls</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="https://scholarshiplearn.com/tata-realty-scholarship-for-girls/" target="_blank" rel="noreferrer">Visit</a></td></tr>
<tr><td class="p-2 border border-border">13</td><td class="p-2 border border-border">TVS Cheema Interest-Free Education Loan — 0% interest, no collateral, for financially poor but deserving students (Engineering, Diploma/Polytechnic, Paramedical/B.Sc. Nursing, Diploma Nursing). Last date: 31 August 2026.</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="/pdfs/admissions/TVS-Cheema-Interest-Free-Education-Loan.pdf" target="_blank" rel="noreferrer">Open PDF</a></td></tr>
</tbody></table>
</div></details>

### List of Mandatory Documents

1. X & XII Mark sheet
2. Entrance Rank Certificate (CET / COMEDK etc.)
3. Counselling letter for seat allotment
4. Caste & Family Income Certificate or Salary Slip or IT Return Form
5. Passport-size photo
6. Scanned copy of original Aadhaar & PAN
7. Tuition / Hostel / Mess paid receipts
8. Bank passbook copy for bank account details confirmation
9. Bonafide certificate issued by college
10. Fee structure for the course issued by college
11. NSP-OTR number

### Scholarship Awareness Committee (SAC)

<div class="overflow-x-auto not-prose my-4">
<table class="w-full text-sm border-collapse">
<thead class="bg-muted"><tr><th class="text-left p-2 border border-border">Sl. No</th><th class="text-left p-2 border border-border">Name</th><th class="text-left p-2 border border-border">Position</th><th class="text-left p-2 border border-border">Department</th><th class="text-left p-2 border border-border">Contact</th></tr></thead>
<tbody>
<tr><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Principal</td><td class="p-2 border border-border">Chairman</td><td class="p-2 border border-border">ECE</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9448285641">9448285641</a></td></tr>
<tr><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Dr. Srinivasa K</td><td class="p-2 border border-border">Convener</td><td class="p-2 border border-border">Dean SA</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9945045415">9945045415</a></td></tr>
<tr><td class="p-2 border border-border">3</td><td class="p-2 border border-border">Mr. Chandrashekar C</td><td class="p-2 border border-border">Member Secretary</td><td class="p-2 border border-border">Humanities</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9845115924">9845115924</a></td></tr>
<tr><td class="p-2 border border-border">4</td><td class="p-2 border border-border">Mr. Raghuram A S</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9448552109">9448552109</a></td></tr>
<tr><td class="p-2 border border-border">5</td><td class="p-2 border border-border">Mrs. Khateeja Ambareen</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border">AIML</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9844967242">9844967242</a></td></tr>
<tr><td class="p-2 border border-border">6</td><td class="p-2 border border-border">Mrs. Ambika V</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border">CS-Data Science</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:6361592908">6361592908</a></td></tr>
<tr><td class="p-2 border border-border">7</td><td class="p-2 border border-border">Dr. Pavithra A C</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border">Cyber Security & CS-Design</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:8884699040">8884699040</a></td></tr>
<tr><td class="p-2 border border-border">8</td><td class="p-2 border border-border">Mr. Nagesh M S</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border">ECE</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9945292800">9945292800</a></td></tr>
<tr><td class="p-2 border border-border">9</td><td class="p-2 border border-border">Ms. Maria Sushma S</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border">EEE</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9902831147">9902831147</a></td></tr>
<tr><td class="p-2 border border-border">10</td><td class="p-2 border border-border">Mr. Puneeth K</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border">CV</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9620693872">9620693872</a></td></tr>
<tr><td class="p-2 border border-border">11</td><td class="p-2 border border-border">Mr. Rohith S</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border">ME</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9739866912">9739866912</a></td></tr>
<tr><td class="p-2 border border-border">12</td><td class="p-2 border border-border">Mr. Manikanta</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border">MCA, BCA</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:9741153589">9741153589</a></td></tr>
<tr><td class="p-2 border border-border">13</td><td class="p-2 border border-border">Ms. Lakshmi M R</td><td class="p-2 border border-border">Member</td><td class="p-2 border border-border">MBA</td><td class="p-2 border border-border"><a class="text-primary hover:underline" href="tel:8951569640">8951569640</a></td></tr>
</tbody></table>
</div>

### ATME Vidyaasare Scheme — Merit Fee Concession

As per the resolution passed in the 14th Governing Council Meeting, ATME grants free-ship / scholarship / fee concession to **50 meritorious students each year** in recognition of outstanding academic, co-curricular, sports and extra-curricular achievements.

**Fee Concession comprises:**

1. Waiver/Concession of Tuition Fee
2. Waiver/Concession of College Fee
3. Waiver/Concession of Transportation Fee

#### Fee Concession Slabs — First 50 Meritorious Students

| Sl. No. | CET Rank or PCM % | Tuition Fee* | College Fee** | Transport** | Remarks |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 — 5,000 | Free | Free | Free | All 4 Years |
| 2 | 5,001 — 10,000 | 50% | 50% | 50% | All 4 Years |
| 3 | 10,001 — 20,000 | 25% | 25% | 25% | All 4 Years |
| 4 | 20,001 — 25,000 | 25% | 25% | 25% | First 2 Years |
| 5 | 25,001 — 35,000 | 25% | 25% | 25% | First Year only |

*Tuition Fee concession is extended only for direct admissions under Management Quota.
**College & Transportation Fee concessions are extended for all (CET, COMED-K & Management) quota seats.

The concession is extended to 50 students on a first-come-first-serve basis; only CET ranking is considered. Rates may vary every year by institutional notification.

### Free Engineering Education for Meritorious Students

Under this initiative, the institution sponsors the full tuition fee for a select number of meritorious CET-rank holders each academic year. Eligibility, the number of seats covered and the exact concession amount are notified by the Office of the Principal at the start of each admission cycle. For the current year's policy, please contact the Admissions Office at enquiry@atme.edu.in or call +91 90369 26363.

[pdfviewer]/__l5e/assets-v1/2eec4c24-8b8d-4e76-a301-933150cda00c/Free-Engineering-Education-Policy.pdf[/pdfviewer]


### Vidyaasare Fee Concession — Beneficiary List (AY 2021-22)

<div class="overflow-x-auto not-prose my-4">
<table class="w-full text-sm border-collapse">
<thead class="bg-muted"><tr><th class="text-left p-2 border border-border">Sl No</th><th class="text-left p-2 border border-border">Student Code</th><th class="text-left p-2 border border-border">Name</th><th class="text-left p-2 border border-border">Department</th><th class="text-left p-2 border border-border">Total Fees (₹)</th><th class="text-left p-2 border border-border">Paid Fees (₹)</th><th class="text-left p-2 border border-border">Concession (₹)</th></tr></thead>
<tbody>
<tr><td class="p-2 border border-border">1</td><td class="p-2 border border-border">2021MNCSF048</td><td class="p-2 border border-border">JOSHITHA A</td><td class="p-2 border border-border">CS</td><td class="p-2 border border-border">93,560</td><td class="p-2 border border-border">73,000</td><td class="p-2 border border-border">20,560</td></tr>
<tr><td class="p-2 border border-border">2</td><td class="p-2 border border-border">2021MNCSF032</td><td class="p-2 border border-border">M K DECHAMMA</td><td class="p-2 border border-border">CS</td><td class="p-2 border border-border">93,560</td><td class="p-2 border border-border">73,000</td><td class="p-2 border border-border">20,560</td></tr>
<tr><td class="p-2 border border-border">3</td><td class="p-2 border border-border">2021MNCSM029</td><td class="p-2 border border-border">MITHUN C G</td><td class="p-2 border border-border">CS</td><td class="p-2 border border-border">93,560</td><td class="p-2 border border-border">73,000</td><td class="p-2 border border-border">20,560</td></tr>
<tr><td class="p-2 border border-border">4</td><td class="p-2 border border-border">2021MNCSM049</td><td class="p-2 border border-border">PUNITH GOWDA S L</td><td class="p-2 border border-border">CS</td><td class="p-2 border border-border">93,560</td><td class="p-2 border border-border">73,000</td><td class="p-2 border border-border">20,560</td></tr>
<tr><td class="p-2 border border-border">5</td><td class="p-2 border border-border">2021MNECM086</td><td class="p-2 border border-border">THARUN GOWDA A V</td><td class="p-2 border border-border">EC</td><td class="p-2 border border-border">114,860</td><td class="p-2 border border-border">62,690</td><td class="p-2 border border-border">52,170</td></tr>
<tr><td class="p-2 border border-border">6</td><td class="p-2 border border-border">2021MNECF095</td><td class="p-2 border border-border">VANISHREE U</td><td class="p-2 border border-border">EC</td><td class="p-2 border border-border">93,560</td><td class="p-2 border border-border">73,000</td><td class="p-2 border border-border">20,560</td></tr>
<tr><td class="p-2 border border-border">7</td><td class="p-2 border border-border">2021MNECM065</td><td class="p-2 border border-border">JEEVAN GOWDA N K</td><td class="p-2 border border-border">EC</td><td class="p-2 border border-border">93,560</td><td class="p-2 border border-border">73,000</td><td class="p-2 border border-border">20,560</td></tr>
<tr><td class="p-2 border border-border">8</td><td class="p-2 border border-border">2021MNECF093</td><td class="p-2 border border-border">AISHWARYA C</td><td class="p-2 border border-border">EC</td><td class="p-2 border border-border">93,560</td><td class="p-2 border border-border">52,040</td><td class="p-2 border border-border">41,520</td></tr>
<tr><td class="p-2 border border-border">9</td><td class="p-2 border border-border">2021MNECF130</td><td class="p-2 border border-border">SPOORTHI S H</td><td class="p-2 border border-border">EC</td><td class="p-2 border border-border">93,560</td><td class="p-2 border border-border">10,120</td><td class="p-2 border border-border">83,440</td></tr>
<tr><td class="p-2 border border-border">10</td><td class="p-2 border border-border">2021MNECM145</td><td class="p-2 border border-border">LOKESH S</td><td class="p-2 border border-border">EC</td><td class="p-2 border border-border">93,560</td><td class="p-2 border border-border">73,000</td><td class="p-2 border border-border">20,560</td></tr>
<tr><td class="p-2 border border-border">11</td><td class="p-2 border border-border">2021MNECF171</td><td class="p-2 border border-border">MEGHANA H N</td><td class="p-2 border border-border">EC</td><td class="p-2 border border-border">150,000</td><td class="p-2 border border-border">100,000</td><td class="p-2 border border-border">50,000</td></tr>
<tr><td class="p-2 border border-border">12</td><td class="p-2 border border-border">2021MNAIM044</td><td class="p-2 border border-border">AKSHATH V</td><td class="p-2 border border-border">CS-AI ML</td><td class="p-2 border border-border">93,560</td><td class="p-2 border border-border">73,000</td><td class="p-2 border border-border">20,560</td></tr>
<tr><td class="p-2 border border-border">13</td><td class="p-2 border border-border">2021MNDSM033</td><td class="p-2 border border-border">AYAAN SHAREEF</td><td class="p-2 border border-border">CS-Data Science</td><td class="p-2 border border-border">114,860</td><td class="p-2 border border-border">88,975</td><td class="p-2 border border-border">25,885</td></tr>
<tr><td class="p-2 border border-border">14</td><td class="p-2 border border-border">2021MNCVF148</td><td class="p-2 border border-border">IQHRA ILYAZI</td><td class="p-2 border border-border">Civil</td><td class="p-2 border border-border">114,860</td><td class="p-2 border border-border">88,975</td><td class="p-2 border border-border">25,885</td></tr>
<tr><td class="p-2 border border-border">15</td><td class="p-2 border border-border">2021MNCDM169</td><td class="p-2 border border-border">SYED FAWADUDDIN</td><td class="p-2 border border-border">CS & Design</td><td class="p-2 border border-border">150,000</td><td class="p-2 border border-border">100,000</td><td class="p-2 border border-border">50,000</td></tr>
<tr><td class="p-2 border border-border">16</td><td class="p-2 border border-border">2021MNEEM321</td><td class="p-2 border border-border">VAISHNAV T A</td><td class="p-2 border border-border">EEE</td><td class="p-2 border border-border">93,560</td><td class="p-2 border border-border">52,790</td><td class="p-2 border border-border">40,770</td></tr>
</tbody></table>
</div>

### Continuing Students Scholarship — Department Toppers

ATME recognises top performers of each department for each academic year — the 1st topper of every department receives ₹1,000 and the 2nd topper receives ₹500. Year-wise records are listed below.

<details class="not-prose nested-accordion group my-4 rounded-xl border-2 border-[#f5c518] bg-card shadow-md overflow-hidden" open>
<summary class="cursor-pointer select-none flex items-center justify-between gap-3 px-5 sm:px-6 py-4 sm:py-5 bg-[#129199] text-white font-semibold text-base sm:text-lg hover:bg-[#0f7a80] transition-colors"><span class="flex-1 text-left">AY 2015-16</span><svg class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></summary>
<div class="p-5 space-y-6">

<h4 class="font-semibold">3rd Year Toppers (5th & 6th Semester)</h4>
<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead class="bg-muted"><tr><th class="text-left p-2 border border-border">Branch</th><th class="text-left p-2 border border-border">Topper</th><th class="text-left p-2 border border-border">Name</th><th class="text-left p-2 border border-border">USN</th><th class="text-left p-2 border border-border">Amount (₹)</th></tr></thead><tbody>
<tr><td class="p-2 border border-border">ECE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Sukrutha A Jain</td><td class="p-2 border border-border">4AD13EC081</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">ECE</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Habeeba Banu A</td><td class="p-2 border border-border">4AD13EC028</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Shwetha B S</td><td class="p-2 border border-border">4AD13CS080</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Raksha S</td><td class="p-2 border border-border">4AD13CS059</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">EEE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Sana Sharief</td><td class="p-2 border border-border">4AD13EE029</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">EEE</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Jayanthi S</td><td class="p-2 border border-border">4AD14EE405</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">Mechanical</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Niveditha L</td><td class="p-2 border border-border">4AD13ME062</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">Mechanical</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Deepak Madappa B J</td><td class="p-2 border border-border">4AD13ME025</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">Civil</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Poornima M S</td><td class="p-2 border border-border">4AD13CV036</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">Civil</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Atmuri Devi Sravani</td><td class="p-2 border border-border">4AD13CV009</td><td class="p-2 border border-border">500</td></tr>
</tbody></table></div>

<h4 class="font-semibold">2nd Year Toppers (3rd & 4th Semester)</h4>
<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead class="bg-muted"><tr><th class="text-left p-2 border border-border">Branch</th><th class="text-left p-2 border border-border">Topper</th><th class="text-left p-2 border border-border">Name</th><th class="text-left p-2 border border-border">USN</th><th class="text-left p-2 border border-border">Amount (₹)</th></tr></thead><tbody>
<tr><td class="p-2 border border-border">ECE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Sushma S</td><td class="p-2 border border-border">4AD14EC061</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">ECE</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Sindhu C</td><td class="p-2 border border-border">4AD14EC055</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Madni Afroze</td><td class="p-2 border border-border">4AD14CS035</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Rakshitha B H</td><td class="p-2 border border-border">4AD14CS049</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">EEE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Pooja K R</td><td class="p-2 border border-border">4AD14EE023</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">EEE</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Anusha K M</td><td class="p-2 border border-border">4AD14EE003</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">Mechanical</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Chethan Kumar K M</td><td class="p-2 border border-border">4AD14ME016</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">Mechanical</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Asha R</td><td class="p-2 border border-border">4AD14ME014</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">Civil</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Harshitha S</td><td class="p-2 border border-border">4AD14CV015</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">Civil</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Madhu R</td><td class="p-2 border border-border">4AD14CV021</td><td class="p-2 border border-border">–</td></tr>
</tbody></table></div>

<h4 class="font-semibold">1st Year Toppers (1st & 2nd Semester, CBCS)</h4>
<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead class="bg-muted"><tr><th class="text-left p-2 border border-border">Branch</th><th class="text-left p-2 border border-border">Topper</th><th class="text-left p-2 border border-border">Name</th><th class="text-left p-2 border border-border">USN</th><th class="text-left p-2 border border-border">Amount (₹)</th></tr></thead><tbody>
<tr><td class="p-2 border border-border">Mechanical</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Mohammad Faraz Raza</td><td class="p-2 border border-border">4AD15ME030</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">Mechanical</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Haroon Hakeem</td><td class="p-2 border border-border">4AD15ME015</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">ECE</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Shivakumar J G</td><td class="p-2 border border-border">4AD15EC062</td><td class="p-2 border border-border">500</td></tr>
</tbody></table></div>

</div></details>

<details class="not-prose nested-accordion group my-4 rounded-xl border-2 border-[#f5c518] bg-card shadow-md overflow-hidden">
<summary class="cursor-pointer select-none flex items-center justify-between gap-3 px-5 sm:px-6 py-4 sm:py-5 bg-[#129199] text-white font-semibold text-base sm:text-lg hover:bg-[#0f7a80] transition-colors"><span class="flex-1 text-left">AY 2016-17</span><svg class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></summary>
<div class="p-5 space-y-6">

<h4 class="font-semibold">4th Year Toppers (7th & 8th Semester)</h4>
<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead class="bg-muted"><tr><th class="text-left p-2 border border-border">Branch</th><th class="text-left p-2 border border-border">Topper</th><th class="text-left p-2 border border-border">Name</th><th class="text-left p-2 border border-border">USN</th><th class="text-left p-2 border border-border">Amount (₹)</th></tr></thead><tbody>
<tr><td class="p-2 border border-border">ECE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Sushmitha K B</td><td class="p-2 border border-border">4AD13EC084</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">ECE</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Krupa M K</td><td class="p-2 border border-border">4AD13EC036</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Shwetha B S</td><td class="p-2 border border-border">4AD13CS080</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Ayesha Baig</td><td class="p-2 border border-border">4AD13CS012</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border">3</td><td class="p-2 border border-border">Viqar Hyder Ansari</td><td class="p-2 border border-border">4AD13CS102</td><td class="p-2 border border-border">–</td></tr>
<tr><td class="p-2 border border-border">EEE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Jeevak Roy J</td><td class="p-2 border border-border">4AD13EE014</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">EEE</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Rakshitha M</td><td class="p-2 border border-border">4AD13EE026</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">Mechanical</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Niveditha L</td><td class="p-2 border border-border">4AD13ME062</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">Mechanical</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Manoj S</td><td class="p-2 border border-border">4AD13ME043</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">Civil</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Poornima M S</td><td class="p-2 border border-border">4AD13CV036</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">Civil</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Atmuri Devi Sravani</td><td class="p-2 border border-border">4AD13CV009</td><td class="p-2 border border-border">500</td></tr>
</tbody></table></div>

<h4 class="font-semibold">3rd Year Toppers (5th & 6th Semester)</h4>
<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead class="bg-muted"><tr><th class="text-left p-2 border border-border">Branch</th><th class="text-left p-2 border border-border">Topper</th><th class="text-left p-2 border border-border">Name</th><th class="text-left p-2 border border-border">USN</th><th class="text-left p-2 border border-border">Amount (₹)</th></tr></thead><tbody>
<tr><td class="p-2 border border-border">ECE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Manoj C S</td><td class="p-2 border border-border">4AD14EC026</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">ECE</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Sushma S</td><td class="p-2 border border-border">4AD14EC061</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Avita Pinto</td><td class="p-2 border border-border">4AD14CS013</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Chithra A G</td><td class="p-2 border border-border">4AD14CS020</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">EEE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Jagadeesha P M</td><td class="p-2 border border-border">4AD15EE412</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">EEE</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Anusha K M</td><td class="p-2 border border-border">4AD14EE003</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">Mechanical</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Abhilash L</td><td class="p-2 border border-border">4AD14ME002</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">Mechanical</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Sagar M K</td><td class="p-2 border border-border">4AD14ME053</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">Civil</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Madhu R</td><td class="p-2 border border-border">4AD14CV021</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">Civil</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Harshitha S</td><td class="p-2 border border-border">4AD14CV015</td><td class="p-2 border border-border">500</td></tr>
</tbody></table></div>

<h4 class="font-semibold">2nd Year Toppers (3rd & 4th Semester)</h4>
<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead class="bg-muted"><tr><th class="text-left p-2 border border-border">Branch</th><th class="text-left p-2 border border-border">Topper</th><th class="text-left p-2 border border-border">Name</th><th class="text-left p-2 border border-border">USN</th><th class="text-left p-2 border border-border">Amount (₹)</th></tr></thead><tbody>
<tr><td class="p-2 border border-border">ECE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Abhishek Tripathi</td><td class="p-2 border border-border">4AD15EC001</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">ECE</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Shivakumar Jeevanagoud Ganji</td><td class="p-2 border border-border">4AD15EC071</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Latha S</td><td class="p-2 border border-border">4AD15CS038</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Keerthana M M</td><td class="p-2 border border-border">4AD15CS034</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Zoha Afreen</td><td class="p-2 border border-border">4AD15CS093</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">EEE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Sanjana S</td><td class="p-2 border border-border">4AD15EE027</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">EEE</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Sushmitha H N</td><td class="p-2 border border-border">4AD15EE040</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">Mechanical</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Haroon Hakeem A</td><td class="p-2 border border-border">4AD15ME024</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">Mechanical</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Adarsh Gowda C M</td><td class="p-2 border border-border">4AD15ME004</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">Civil</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Jayashree T L</td><td class="p-2 border border-border">4AD15CV017</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">Civil</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Pooja S</td><td class="p-2 border border-border">4AD15CV030</td><td class="p-2 border border-border">500</td></tr>
</tbody></table></div>

<h4 class="font-semibold">1st Year Toppers (1st & 2nd Semester, CBCS)</h4>
<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead class="bg-muted"><tr><th class="text-left p-2 border border-border">Branch</th><th class="text-left p-2 border border-border">Topper</th><th class="text-left p-2 border border-border">Name</th><th class="text-left p-2 border border-border">USN</th><th class="text-left p-2 border border-border">Amount (₹)</th></tr></thead><tbody>
<tr><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Shazia Baig</td><td class="p-2 border border-border">4AD16CS072</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">Mechanical</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Yogesh M S</td><td class="p-2 border border-border">4AD16ME099</td><td class="p-2 border border-border">500</td></tr>
</tbody></table></div>

</div></details>

<details class="not-prose nested-accordion group my-4 rounded-xl border-2 border-[#f5c518] bg-card shadow-md overflow-hidden">
<summary class="cursor-pointer select-none flex items-center justify-between gap-3 px-5 sm:px-6 py-4 sm:py-5 bg-[#129199] text-white font-semibold text-base sm:text-lg hover:bg-[#0f7a80] transition-colors"><span class="flex-1 text-left">AY 2017-18</span><svg class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></summary>
<div class="p-5 space-y-6">

<h4 class="font-semibold">4th Year Toppers (7th & 8th Semester)</h4>
<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead class="bg-muted"><tr><th class="text-left p-2 border border-border">Branch</th><th class="text-left p-2 border border-border">Topper</th><th class="text-left p-2 border border-border">USN</th><th class="text-left p-2 border border-border">Name</th><th class="text-left p-2 border border-border">Amount (₹)</th></tr></thead><tbody>
<tr><td class="p-2 border border-border">ECE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">4AD14EC061</td><td class="p-2 border border-border">Sushma S</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">ECE</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">4AD14EC066</td><td class="p-2 border border-border">Yamuna K</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">4AD14CS013</td><td class="p-2 border border-border">Avita Pinto</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">4AD14CS020</td><td class="p-2 border border-border">Chithra A G</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">EEE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">4AD14EE023</td><td class="p-2 border border-border">Pooja K R</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">EEE</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">4AD15EE426</td><td class="p-2 border border-border">Nithin Raj</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">Mechanical</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">4AD14ME057</td><td class="p-2 border border-border">Sharath Rajendran</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">Mechanical</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">4AD14ME055</td><td class="p-2 border border-border">Sarthak H Sharma</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">Civil</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">4AD14CV052</td><td class="p-2 border border-border">Sukrutha N</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">Civil</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">4AD14CV021</td><td class="p-2 border border-border">Madhu R</td><td class="p-2 border border-border">500</td></tr>
</tbody></table></div>

<h4 class="font-semibold">3rd Year Toppers (5th & 6th Semester)</h4>
<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead class="bg-muted"><tr><th class="text-left p-2 border border-border">Branch</th><th class="text-left p-2 border border-border">Topper</th><th class="text-left p-2 border border-border">USN</th><th class="text-left p-2 border border-border">Name</th><th class="text-left p-2 border border-border">Amount (₹)</th></tr></thead><tbody>
<tr><td class="p-2 border border-border">ECE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">4AD15EC071</td><td class="p-2 border border-border">Shivakumar Jeevanagoud Ganji</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">ECE</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">4AD15EC034</td><td class="p-2 border border-border">Madhuri H N</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">4AD15CS047</td><td class="p-2 border border-border">Meghana P</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">4AD15CS085</td><td class="p-2 border border-border">Thanu Shree M</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">EEE</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">4AD15EE013</td><td class="p-2 border border-border">Hemanthkumar K</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">EEE</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">4AD15EE036</td><td class="p-2 border border-border">Siddiq Ahmed Khan</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">Mechanical</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">4AD15ME042</td><td class="p-2 border border-border">Mahesh N</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">Mechanical</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">4AD15ME056</td><td class="p-2 border border-border">Nithin Muralidhar</td><td class="p-2 border border-border">500</td></tr>
<tr><td class="p-2 border border-border">Civil</td><td class="p-2 border border-border">1</td><td class="p-2 border border-border">4AD14CV052</td><td class="p-2 border border-border">Supriya N</td><td class="p-2 border border-border">1,000</td></tr>
<tr><td class="p-2 border border-border">Civil</td><td class="p-2 border border-border">2</td><td class="p-2 border border-border">4AD14CS021</td><td class="p-2 border border-border">Jayashree T L</td><td class="p-2 border border-border">500</td></tr>
</tbody></table></div>

</div></details>

<details class="not-prose nested-accordion group my-4 rounded-xl border-2 border-[#f5c518] bg-card shadow-md overflow-hidden">
<summary class="cursor-pointer select-none flex items-center justify-between gap-3 px-5 sm:px-6 py-4 sm:py-5 bg-[#129199] text-white font-semibold text-base sm:text-lg hover:bg-[#0f7a80] transition-colors"><span class="flex-1 text-left">AY 2021-22 — Merit Awards & Cash Prizes</span><svg class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></summary>
<div class="p-5 overflow-x-auto">
<table class="w-full text-sm border-collapse"><thead class="bg-muted"><tr><th class="text-left p-2 border border-border">Sl. No.</th><th class="text-left p-2 border border-border">Dept.</th><th class="text-left p-2 border border-border">Name</th><th class="text-left p-2 border border-border">USN</th><th class="text-left p-2 border border-border">Category of Award</th><th class="text-left p-2 border border-border">Marks / CGPA</th><th class="text-left p-2 border border-border">Award Name</th><th class="text-left p-2 border border-border">Cash Prize (₹)</th></tr></thead><tbody>
<tr><td class="p-2 border border-border">1</td><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border">Shashank K</td><td class="p-2 border border-border">4AD18CS072</td><td class="p-2 border border-border">Branch Topper (No Backlogs)</td><td class="p-2 border border-border">9.29</td><td class="p-2 border border-border">Skill Tech Merit Award</td><td class="p-2 border border-border">3,000</td></tr>
<tr><td class="p-2 border border-border">2</td><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border">Shashank K</td><td class="p-2 border border-border">4AD18CS072</td><td class="p-2 border border-border">Highest in Mathematics (M1–M4)</td><td class="p-2 border border-border">388</td><td class="p-2 border border-border">Dr. Vishnu Reddy Memorial Award</td><td class="p-2 border border-border">5,000</td></tr>
<tr><td class="p-2 border border-border">3</td><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border">Shashank K</td><td class="p-2 border border-border">4AD18CS072</td><td class="p-2 border border-border">Highest in Automata Theory</td><td class="p-2 border border-border">85</td><td class="p-2 border border-border">Karigowda Memorial Award</td><td class="p-2 border border-border">3,000</td></tr>
<tr><td class="p-2 border border-border">4</td><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border">Shashank K</td><td class="p-2 border border-border">4AD18CS072</td><td class="p-2 border border-border">Branch Topper (Boy)</td><td class="p-2 border border-border">9.29</td><td class="p-2 border border-border">Shiva Madhappa & Parvathamma Memorial</td><td class="p-2 border border-border">5,000</td></tr>
<tr><td class="p-2 border border-border">5</td><td class="p-2 border border-border">CSE</td><td class="p-2 border border-border">Bibi Javeriya</td><td class="p-2 border border-border">4AD18CS013</td><td class="p-2 border border-border">Branch Topper (Girl)</td><td class="p-2 border border-border">8.81</td><td class="p-2 border border-border">Shiva Madhappa & Parvathamma Memorial</td><td class="p-2 border border-border">5,000</td></tr>
<tr><td class="p-2 border border-border">6</td><td class="p-2 border border-border">ME</td><td class="p-2 border border-border">Naveen M</td><td class="p-2 border border-border">4AD19ME441</td><td class="p-2 border border-border">Branch Topper</td><td class="p-2 border border-border">8.47</td><td class="p-2 border border-border">Skill Tech Merit Award</td><td class="p-2 border border-border">3,000</td></tr>
<tr><td class="p-2 border border-border">7</td><td class="p-2 border border-border">ME</td><td class="p-2 border border-border">Sunil J S</td><td class="p-2 border border-border">4AD19ME473</td><td class="p-2 border border-border">Highest in Thermodynamics</td><td class="p-2 border border-border">76</td><td class="p-2 border border-border">Karigowda Memorial Award</td><td class="p-2 border border-border">3,000</td></tr>
<tr><td class="p-2 border border-border">8</td><td class="p-2 border border-border">Civil</td><td class="p-2 border border-border">Amrutha M</td><td class="p-2 border border-border">4AD18CV003</td><td class="p-2 border border-border">Branch Topper</td><td class="p-2 border border-border">9.20</td><td class="p-2 border border-border">Skill Tech Merit Award</td><td class="p-2 border border-border">3,000</td></tr>
<tr><td class="p-2 border border-border">9</td><td class="p-2 border border-border">Civil</td><td class="p-2 border border-border">Nayana M K</td><td class="p-2 border border-border">4AD18CV016</td><td class="p-2 border border-border">Second Topper</td><td class="p-2 border border-border">8.82</td><td class="p-2 border border-border">Puttaswamaiah Memorial Award</td><td class="p-2 border border-border">2,000</td></tr>
<tr><td class="p-2 border border-border">10</td><td class="p-2 border border-border">Civil</td><td class="p-2 border border-border">Amrutha M</td><td class="p-2 border border-border">4AD18CV003</td><td class="p-2 border border-border">Highest in RC Structural Elements</td><td class="p-2 border border-border">81</td><td class="p-2 border border-border">R S Rajashekar Memorial Award</td><td class="p-2 border border-border">5,000</td></tr>
<tr><td class="p-2 border border-border">11</td><td class="p-2 border border-border">ECE</td><td class="p-2 border border-border">Sheetal K Athreya</td><td class="p-2 border border-border">4AD18EC057</td><td class="p-2 border border-border">Branch Topper</td><td class="p-2 border border-border">9.64</td><td class="p-2 border border-border">Skill Tech Merit Award</td><td class="p-2 border border-border">3,000</td></tr>
<tr><td class="p-2 border border-border">12</td><td class="p-2 border border-border">ECE</td><td class="p-2 border border-border">Sheetal K Athreya</td><td class="p-2 border border-border">4AD18EC057</td><td class="p-2 border border-border">College Topper</td><td class="p-2 border border-border">9.64</td><td class="p-2 border border-border">Pranam Merit Award</td><td class="p-2 border border-border">5,000</td></tr>
<tr><td class="p-2 border border-border">13</td><td class="p-2 border border-border">ECE</td><td class="p-2 border border-border">Sheetal K Athreya</td><td class="p-2 border border-border">4AD18EC057</td><td class="p-2 border border-border">Highest in Network Theory</td><td class="p-2 border border-border">97</td><td class="p-2 border border-border">Karigowda Memorial Award</td><td class="p-2 border border-border">3,000</td></tr>
<tr><td class="p-2 border border-border">14</td><td class="p-2 border border-border">EEE</td><td class="p-2 border border-border">Aishwarya M</td><td class="p-2 border border-border">4AD18EE003</td><td class="p-2 border border-border">Branch Topper</td><td class="p-2 border border-border">8.86</td><td class="p-2 border border-border">Skill Tech Merit Award</td><td class="p-2 border border-border">3,000</td></tr>
<tr><td class="p-2 border border-border">15</td><td class="p-2 border border-border">EEE</td><td class="p-2 border border-border">Aishwarya M</td><td class="p-2 border border-border">4AD18EE003</td><td class="p-2 border border-border">Highest in Electrical Circuit Analysis</td><td class="p-2 border border-border">71</td><td class="p-2 border border-border">Manjulamma Memorial Award</td><td class="p-2 border border-border">3,000</td></tr>
<tr><td class="p-2 border border-border" colspan="7"><b>Total</b></td><td class="p-2 border border-border"><b>54,000</b></td></tr>
</tbody></table>
</div></details>

### Need-Based Financial Aid

ATME provides financial support to students from economically weaker backgrounds based on family income. Eligibility is based on the income of the student's family. Eligible applicants should approach the Scholarship Awareness Committee.

<div class="overflow-x-auto not-prose my-4">
<table class="w-full text-sm border-collapse">
<thead class="bg-muted"><tr><th class="text-left p-2 border border-border">Sl No.</th><th class="text-left p-2 border border-border">Name</th><th class="text-left p-2 border border-border">USN</th><th class="text-left p-2 border border-border">Amount Received (₹)</th></tr></thead>
<tbody>
<tr><td class="p-2 border border-border">1</td><td class="p-2 border border-border">Chethan Kumar K C</td><td class="p-2 border border-border">4AD10EC018</td><td class="p-2 border border-border">33,148</td></tr>
<tr><td class="p-2 border border-border">2</td><td class="p-2 border border-border">Kashyap P V B</td><td class="p-2 border border-border">4AD12CS015</td><td class="p-2 border border-border">16,050</td></tr>
<tr><td class="p-2 border border-border">3</td><td class="p-2 border border-border">Yeshwanth M K</td><td class="p-2 border border-border">4AD16CV046</td><td class="p-2 border border-border">15,370</td></tr>
<tr><td class="p-2 border border-border">4</td><td class="p-2 border border-border">Kishore Kumar K V</td><td class="p-2 border border-border">4AD16EE017</td><td class="p-2 border border-border">10,000</td></tr>
</tbody></table>
</div>

### Click Here to Learn e-Attestation

<div class="not-prose my-6 aspect-video rounded-xl overflow-hidden border border-border shadow-sm">
<iframe class="w-full h-full" src="https://www.youtube.com/embed/ClyH35bMAvo" title="e-Attestation tutorial" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>
`;

export const UG_FEES_URL = "/pdfs/admissions/Fees-Structure-2026-27.pdf";
const PG_FEES_URL = "/__l5e/assets-v1/a29bd4c7-d469-4764-b1b2-9415d2ef9fb5/Fees-Structure-MBA-and-MCA-AY-2024-25.pdf";
const LATERAL_ENTRY_FEES_URL = "/pdfs/admissions/2nd-Year-Lateral-Entry-Fee-Structure-AY-2026-27.pdf";

const feeStructureBody = `
# Fees Structure

### UG Fee Structure for 2026-27

The complete UG fee structure for the academic year 2026-27 is embedded below.

[pdfviewer]${UG_FEES_URL}[/pdfviewer]

### 2nd Year Lateral Entry Fee Structure AY-2026-27

The complete 2nd Year Lateral Entry Fee Structure AY-2026-27 is embedded below.

[pdfviewer]${LATERAL_ENTRY_FEES_URL}[/pdfviewer]

### PG Fee Structure (MBA & MCA) for 2024-25

The PG fee structure for MBA and MCA programmes is embedded below. You may also [download](${PG_FEES_URL}) the PDF.
`;


const enrollmentBody = `
# Enrollment

Year-wise USN lists are available below. Click any year to expand the embedded PDF.

<details class="not-prose group rounded-xl border-2 border-[#f5c518] mb-3 overflow-hidden shadow-md" style="background:linear-gradient(135deg,#129199 0%,#0d6f76 100%);color:#fff;">
<summary class="cursor-pointer select-none px-5 py-4 font-semibold text-lg flex items-center justify-between hover:bg-white/10">AY 2025-26<span class="text-white group-open:rotate-180 transition-transform">▾</span></summary>
<div class="p-4 border-t border-white/30 bg-white text-foreground">
<iframe src="https://atme.edu.in/wp-content/uploads/2026/02/USN-2025-Batch-1st-Sem.pdf" class="w-full" style="height:800px;border:0;" loading="lazy" title="USN List AY 2025-26"></iframe>
<p class="mt-3"><a href="https://atme.edu.in/wp-content/uploads/2026/02/USN-2025-Batch-1st-Sem.pdf" target="_blank" rel="noopener" class="text-primary underline">Download PDF</a></p>
</div>
</details>

<details class="not-prose group rounded-xl border-2 border-[#f5c518] mb-3 overflow-hidden shadow-md" style="background:linear-gradient(135deg,#129199 0%,#0d6f76 100%);color:#fff;">
<summary class="cursor-pointer select-none px-5 py-4 font-semibold text-lg flex items-center justify-between hover:bg-white/10">AY 2024-25<span class="text-white group-open:rotate-180 transition-transform">▾</span></summary>
<div class="p-4 border-t border-white/30 bg-white text-foreground">
<iframe src="https://atme.edu.in/wp-content/uploads/2025/08/2024-Batch-USN-1st-Year.pdf" class="w-full" style="height:800px;border:0;" loading="lazy" title="USN List AY 2024-25"></iframe>
<p class="mt-3"><a href="https://atme.edu.in/wp-content/uploads/2025/08/2024-Batch-USN-1st-Year.pdf" target="_blank" rel="noopener" class="text-primary underline">Download PDF</a></p>
</div>
</details>

<details class="not-prose group rounded-xl border-2 border-[#f5c518] mb-3 overflow-hidden shadow-md" style="background:linear-gradient(135deg,#129199 0%,#0d6f76 100%);color:#fff;">
<summary class="cursor-pointer select-none px-5 py-4 font-semibold text-lg flex items-center justify-between hover:bg-white/10">AY 2023-24<span class="text-white group-open:rotate-180 transition-transform">▾</span></summary>
<div class="p-4 border-t border-white/30 bg-white text-foreground">
<iframe src="https://atme.edu.in/wp-content/uploads/2025/08/USN-LIST-2023-24.pdf" class="w-full" style="height:800px;border:0;" loading="lazy" title="USN List AY 2023-24"></iframe>
<p class="mt-3"><a href="https://atme.edu.in/wp-content/uploads/2025/08/USN-LIST-2023-24.pdf" target="_blank" rel="noopener" class="text-primary underline">Download PDF</a></p>
</div>
</details>

<details class="not-prose group rounded-xl border-2 border-[#f5c518] mb-3 overflow-hidden shadow-md" style="background:linear-gradient(135deg,#129199 0%,#0d6f76 100%);color:#fff;">
<summary class="cursor-pointer select-none px-5 py-4 font-semibold text-lg flex items-center justify-between hover:bg-white/10">AY 2022-23<span class="text-white group-open:rotate-180 transition-transform">▾</span></summary>
<div class="p-4 border-t border-white/30 bg-white text-foreground">
<iframe src="https://atme.edu.in/wp-content/uploads/2025/08/USN-LIST-22-23.pdf" class="w-full" style="height:800px;border:0;" loading="lazy" title="USN List AY 2022-23"></iframe>
<p class="mt-3"><a href="https://atme.edu.in/wp-content/uploads/2025/08/USN-LIST-22-23.pdf" target="_blank" rel="noopener" class="text-primary underline">Download PDF</a></p>
</div>
</details>
`;

const cutoffRanksBody = `
# ATME Cut off Ranks for the Academic Year 2025-26

The branch-wise CET cut-off ranks for the academic year 2025-26 are embedded below. You may also [download](https://old.atme.edu.in/wp-content/uploads/2026/02/Cut-off-Ranks-2025-26.pdf) the file.

[pdfviewer width="1200px" height="900px"]https://old.atme.edu.in/wp-content/uploads/2026/02/Cut-off-Ranks-2025-26.pdf[/pdfviewer]
`;

const applicationBody = `
# Application

### Download Application Form

Interested candidates may download the BE application form below. Duly filled application forms may be sent to the address listed in **For Admissions Contact** along with a Demand Draft for Rs. 200/- drawn in favour of "ATME College of Engineering, Mysore" payable at Mysore.

[pdfviewer]https://new.atme.edu.in/wp-content/uploads/2026/04/ATME-BE-Application.pdf[/pdfviewer]

**ATME College of Engineering**
13th Kilometer, Mysore – Kanakapura – Bangalore Road
Mysore – 570 028, Karnataka
Office: 0821-2954081 · Principal: 0821-2954011 · Telefax: +91-821-2593328

**For admissions contact**

- +91 90369 26363
- Principal: +91-94482-85641
- AAO: +91-94482-85644
- PRO: +91-98869-75772
- Email: enquiry@atme.edu.in

On receipt of the Demand Draft and Application, the ATME brochure shall be mailed to your specified address.

### Documents to be Enclosed for BE Admissions

- SSLC Marks Card (Original)
- PUC Marks Card (Original)
- Transfer Certificate (Original)
- Migration Certificate (CBSE, ICSE students) (Original)
- Study Certificate (all institutions studied — 1st to 12th) (Original)
- Character/Conduct Certificate (all institutions studied) (Original)
- ID Proof & Address Proof (Aadhaar, Passport)
- CET Rank Sheet (Mandatory) / Comed-K Rank Sheet / JEE Rank Sheet
- CET Admission Ticket (Mandatory) / Comed-K Admission Ticket / JEE Admission Ticket
- CET / Comed-K Admission Order (for CET/Comed-K admissions only)
- Passport size photographs — 5
- Stamp size photographs — 3
- Self-addressed postal envelopes — 3

Prepare 5 sets of photocopies of the above documents and get them attested by a Gazetted Officer or Notary (3 copies to be submitted along with the originals to the college and 2 copies for self use).

### Anti-Ragging Affidavit by Student

(To be printed on a Rs. 50/- stamp paper, signed by the student, notarised and submitted to the college.)

[Students Format](https://atme.edu.in/wp-content/uploads/2022/11/Anti-ragging-affidavit-student-final.pdf)

### Anti-Ragging Affidavit by Parents/Guardians

(To be printed on a Rs. 50/- stamp paper, signed by the parent/guardian, notarised and submitted to the college.)

### Fees Undertaking / Transport Agreement Undertaking

(To be signed by both the student and parent/guardian at the college and submitted to the college.)
`;

const gokRecognitionBody = `
# Government of Karnataka Recognition Letter

The official Government of Karnataka approval letter for ATME College of Engineering is embedded below. You may also [download the PDF](https://atme.edu.in/wp-content/uploads/2022/10/Government-of-Karnataka-Approval-1.pdf).

[pdfviewer width="1200px" height="900px"]https://atme.edu.in/wp-content/uploads/2022/10/Government-of-Karnataka-Approval-1.pdf[/pdfviewer]
`;

const chairmansMessageBody = `
# Chairman's Message

![Sri. L Arun Kumar — Hon'ble Chairman, ATME College of Engineering](/images/uploads/2026/04/chairman-sir-400x600-01.jpg)

Dear Students & Parents,

Welcome to the Academy for Technical & Management Excellence (ATME). Spread over 20 acres of green expanse, ATME has created an ecosystem of teaching that makes it a universally accepted place for education, and we pride ourselves in putting "students first".

Choosing a place to attend college is a big decision. It can be the key that opens the door to a lifetime of opportunities for growth and service. ATME provides an environment that encourages parent and family involvement. We take utmost care of our students and keep parents regularly updated about the development of their loved ones. As you pursue your studies, please remember that a college education is not entirely academic — it extends beyond classrooms, laboratories and workshops to campus organisations, seminars, meetings, cultural and social activities, athletic events and more.

The faculty and management are known for their energy and erudition, academic achievements, teaching abilities and devotion to duty. Students get complete support to hone their skills in whatever area of interest they have. ATME encourages students with special talent and inspires them to participate in technical, social, cultural and sports activities and competitions, enabling them to realise their dreams and ambitions.

Our state-of-the-art labs and facilities ensure ATME'ians have a distinct edge over others when they step into industry. The faculty at ATME see you as one among them — questions are answered and discussions are encouraged. We urge students to grow up with a mixture of fun and learning, and to spend the most precious time of their lives discovering who they are and what they want to be.

On behalf of the staff and management, I invite you to visit our magnificent campus, inspect the state-of-the-art facilities, meet and discuss with students and faculty, and discover the exciting opportunities that an engineering curriculum and career can offer — and why we at ATME are called "pacesetters for future society".

<div class="mt-6"><div class="font-semibold text-lg">Sri. L Arun Kumar</div><div class="text-muted-foreground">Hon'ble Chairman, ATME College of Engineering</div></div>
`;

const aboutPrincipalBody = `
# About the Principal

<div class="flex justify-center my-6"><img src="/images/uploads/2026/04/principal-sir-400x600-1.jpg" alt="Dr. L. Basavaraj — Principal, ATME College of Engineering" class="rounded-lg shadow-md" style="max-width:360px;width:100%;height:auto;" /></div>

<div class="max-w-3xl mx-auto space-y-4 text-left">

**Dr. L. Basavaraj** completed his bachelor's degree from Bapuji Institute of Engineering and Technology, Davangere. He began his teaching career as a Lecturer in Electronics and Communication Engineering at STJIT, Ranibennur, for about three years. After completing his Master's in Digital Electronics at SDM College of Engineering, Dharwad in 1994, he joined Bapuji Institute of Engineering and Technology as a Lecturer in Electronics and Communication Engineering.

He later served at Vidya Vardhaka College of Engineering as Professor and Head of the Department of Electronics and Communication for about thirteen years. Since 1st February 2013, he has been serving as the Principal of this prestigious institute.

Apart from teaching and research, he is a regular speaker on domain-specific and engineering-related topics at conferences, pedagogical training programmes and workshops. His areas of interest are VLSI, Signal Processing and Bio-Medical Signal Processing.

He served as an **academic senate member of VTU from 2019 to 2022** and is a life member of ISTE and CSE.

</div>

## Professional Experience

- **Teaching Experience:** 34 years
- **Research Experience:** 20 years
- **UG Projects Guided:** 80
- **PG Projects Guided:** 10
- **PhDs Awarded under VTU:** 6
- **Scholars currently pursuing PhD under his guidance:** 3
- **Research publications in national & international journals:** 30+
`;

const principalMessageBody = `
# Principal's Message

![Dr. L. Basavaraj — Principal, ATME College of Engineering](/images/uploads/2026/04/principal-sir-400x600-1.jpg)

It is my great pleasure to welcome you all to ATME College of Engineering. It is not enough if we produce engineers year after year, like a machine — the challenge lies in moulding students with an engineering degree who are capable of building the future nation. ATME gives more emphasis to the overall moulding of every student through quality education and in-plant training, right from the initial stages.

ATME aims at producing the best engineers in the world. The pleasing and peaceful environment in which the college is located favours students in focusing more on their studies. Well-equipped laboratories and workshops with modern, sophisticated instruments and machinery impart state-of-the-art education. Ample opportunities are provided for personality development and other extra-curricular activities, supported by well-qualified and experienced teaching faculty. Invited talks by external experts in various fields of engineering and management are organised regularly to enlarge students' horizon of knowledge.

The college functions under the able and untiring guidance and leadership of **Mr. Arunkumar L, Hon'ble Chairman** of the Trust, who is actively supported by the Governing Council and the Board of Directors. A dedicated Training and Placement Cell facilitates students in seeking job opportunities. With all these facilities in place and with the right attitude of the management, I assure you the students who pursue their education at this growing institute will greatly benefit in the future.

<div class="mt-6"><div class="font-semibold text-lg leading-tight">Dr. L. Basavaraj</div><div class="text-muted-foreground leading-tight">Principal, ATME College of Engineering</div></div>
`;

const deanResearchMessageBody = `
# Dean — Research Message

![Dr. Bhagyashree S R — Dean, Research](/__l5e/assets-v1/112ca0fe-7fe2-49bb-9dd0-66a47e6bb9a4/Dr-Bhagyashree-SR-Dean-Research.jpg)

Dear students, faculty members, researchers and esteemed visitors,

I am delighted to extend a warm welcome to you all. As the Dean of Research, it is my utmost pleasure to introduce you to the innovative and cutting-edge endeavours that define our institute.

Our institution is home to several renowned Research Centres and Departments, each dedicated to exploring diverse fields of knowledge. These centres act as hubs of innovation and collaboration, fostering interdisciplinary research that addresses real-world challenges.

At ATMECE, we firmly believe in nurturing a conducive environment for research and innovation. To recognise the exceptional contributions of our researchers, we have implemented a robust Research Incentive Policy that rewards faculty members, research scholars and students for their impactful outcomes, encouraging them to continuously strive for groundbreaking discoveries.

In our relentless pursuit of innovation, our researchers have accomplished multiple patented projects — signifying both our commitment to originality and our dedication to transforming ideas into tangible solutions that impact society positively. This commitment is mirrored in the generous funding opportunities available through various grants, sponsorships and collaborations with industry partners.

The knowledge generated at ATMECE is disseminated through a multitude of high-impact publications in esteemed journals and conferences. Collaboration is at the heart of our research strategy: we have forged strong partnerships with prestigious institutions, organisations and industries through Memorandums of Understanding (MoUs) that provide opportunities for joint research projects, knowledge exchange and international exposure.

I invite you to explore our Research section and witness the fruits of our collective pursuit of knowledge. Whether you are a student eager to engage in groundbreaking research, a faculty member looking for new collaborations, or a visitor seeking to understand our research ecosystem, you will find valuable information and inspiring stories that reflect the essence of ATMECE.

Let us together embrace the spirit of exploration and innovation, driving our college to even greater heights of research excellence.

**Warm regards,**

<div class="mt-4"><div class="font-semibold text-lg leading-tight">Dr. Bhagyashree S R</div><div class="text-muted-foreground leading-tight">Dean — Research</div><div class="text-muted-foreground text-sm leading-tight mt-1">Senior Member IEEE • FIETE • FIEI • MISTE • Chartered Engineer • MARDSI</div><div class="text-muted-foreground text-sm leading-tight">Vice-Chair, IETE Mysore Centre • Execom Member, IEEE Mysuru Sub-section • Joint Secretary, ARDSI Mysore Chapter</div><div class="text-muted-foreground text-sm leading-tight">Professor, Electronics & Communication Engineering</div></div>
`;

const deanStudentAffairsProfileBody = `
# Dean — Student Affairs

<div class="grid gap-8 md:grid-cols-[300px_1fr] md:items-start">

<div class="not-prose">
<div class="rounded-2xl border-2 border-amber-400/70 bg-card p-3 shadow-lg">
<div class="overflow-hidden rounded-xl bg-white">
<img src="https://atme.edu.in/wp-content/uploads/2023/12/Srinivasa-1.jpg" alt="Dr. Srinivasa K" class="block w-full h-auto" loading="lazy" />
</div>
<div class="px-2 pt-4 pb-2">
<div class="font-bold text-lg leading-tight">Dr. Srinivasa K</div>
<div class="text-muted-foreground leading-snug mt-1">Professor &amp; Dean Student Affairs</div>
<div class="mt-6"><a href="/p/dr-srinivasa-k" class="text-primary font-medium hover:underline">View Profile →</a></div>
</div>
</div>
</div>

<div>

## Academic Qualifications

- M.Tech (Maintenance Engineering)
- Ph.D. (Composite Materials)

## Research Interests

Composite Materials

## Contact Details

| | |
| --- | --- |
| **Email** | [dr.srinivasak_mech@atme.edu.in](mailto:dr.srinivasak_mech@atme.edu.in) |
| **LinkedIn** | [Profile](https://www.linkedin.com/in/dr-srinivasa-k-745213264) |
| **Google Scholar** | [Profile](https://scholar.google.com/citations?user=SAAx9xIAAAAJ&hl=in) |
| **ORCID** | [Profile](https://orcid.org/0000-0002-7867-9442) |
| **Vidwan** | [Profile](https://vidwan.inflibnet.ac.in/profile/201827) |
| **Scopus** | [Profile](https://www.scopus.com/authid/detail.uri?authorId=57219801439) |

## Professional Experience

- Teaching: 26 years
- Industry: 1 year

## Professional Memberships

- Life Member, Indian Society for Technical Education (ISTE)
- Member, Institute of Engineers (MIE)
- Member, IAENG
- Member, IRED

## Achievements

- Represented Mysore University Cricket Team
- Jury member and chairperson for student paper and technical talk presentations at KVGCE, Sullia
- Jury member for project exhibition and competition at VVCE, Mysuru
- Reviewer of conference papers for the International Conference on Futuristic Trends in Mechanical Engineering, Presidency University, Bengaluru
- Reviewer, *Materials Today: Proceedings* (Elsevier)
- Judge for inter-collegiate technical competitions at Maharaja Institute of Technology, Mysuru
- Chairperson, International Conference on Advances in Mechanical Engineering and Management (ICAMEM-2019), VVCE, Mysuru

</div>

</div>
`;

const deanStudentAffairsBody = `
## Dean – Student Affairs Message

It is my privilege to welcome all students, parents, alumni, and visitors to ATME College of Engineering, Mysuru.

ATME College of Engineering has been dedicated to nurturing excellence in education since its inception. As Dean of Student Affairs, I take immense pride in being part of an institution that is committed to empowering students with the knowledge, skills, values, and experiences required to succeed in a dynamic and competitive world.

At ATME, we believe that education extends far beyond academic learning. Student development is a holistic process that encompasses intellectual growth, leadership, innovation, social responsibility, and personal well-being. Our Student Affairs initiatives are designed to create an enriching campus environment where students are encouraged to actively engage in co-curricular and extracurricular activities, leadership opportunities, community service, cultural programs, and industry-oriented learning experiences.

We are committed to fostering a student-centric ecosystem that promotes creativity, discipline, inclusivity, and excellence. With dedicated faculty members, modern infrastructure, vibrant student clubs, and various support systems, we strive to ensure that every student receives the guidance and opportunities needed to achieve their fullest potential.

As you embark on your academic journey with us, I encourage you to embrace every opportunity for learning, innovation, and self-discovery. Together, let us build a future founded on knowledge, integrity, and excellence.

I warmly invite aspiring students to become a part of the ATME family and contribute to a culture of growth, achievement, and lifelong learning.

**Dr. Srinivasa K**  
Professor & Dean – Student Affairs  
ATME College of Engineering, Mysuru
`;

const seminarAuditoriumBody = `
## Seminar & Auditorium

The ATME College of Engineering has developed a state-of-the-art campus with the latest and most modern educational facilities. In line with this, we have an Auditorium equipped with a superior audio-video system with video conferencing facility which is auto-controlled without human interference, logically controlled and modulates the music and input source.

### Highlighting features of the Auditorium

- Complete soundproof acoustic with aesthetic woodwork
- 400-plus seating capacity with foldable writing pads
- Superior audio-video system with video conferencing facility
- Hall air conditioned — 60 tons ducted AC units

ATME College of Engineering has provided Seminar Halls for each department to facilitate departments in conducting activities such as workshops, exhibitions and other co-curricular activities — both in-house and inter-collegiate — to motivate students. Seminar Halls in each department have a seating capacity of about 200, and projectors are provided in each Seminar Hall.
`;

const greenCampusBody = `
## Green Campus

ATME campus is designed eco-friendly and landscaped with extensive gardens, plantation with recycled water. The entire campus is maintained as a non-smoking zone. The significant initiatives implemented are:

### Energy Conservation

- 90% LED and 10% CFL lamp bulbs provided within the campuses. In a phased manner all CFL lights will be replaced by LED.
- Staggering of electric power loads to reduce maximum demands.
- All the fans, lights and air conditioners are maintained in the switched off mode when not in use. Slogans insisting on the necessity to switch off fans, lights and ACs are displayed above all switch boards in the campus.

### Use of Renewable Energy Sources

A 100 kW solar power plant has been set up on the top of the Administrative block. EB consumption has been reduced to that extent, and consequently non-renewable energy consumption to generate 100 kW is reduced, achieving reductions in CO₂, SO₂ and SPM emissions. The output of the plant is converted to AC using 3 string inverters with MPPT controllers, which synchronise the generated power to the local grid. The plant is estimated to generate around 430 units per day.

Many solar-energy related student projects have also been undertaken in the Mechanical and Electrical Engineering programmes.

### Water Harvesting

Recharging of ground water and rain water collection and utilisation are implemented across the College. A Rain Water Harvesting System collects rain water from the roof tops of the buildings and allows it to flow into a one-lakh-litre sump behind the Electrical Engineering Block. An efficient filter system has been installed and this water is pumped to the overhead tank and reused. Rain water from the roof top of the Administrative building is taken to a scientifically planned series of ground water recharging pits to augment the ground water level.

### Solid Waste Management

Solid waste is segregated by providing separate dustbins for bio-degradable and plastic waste. Metal waste from the workshop is stored and given to authorised scrap agents for further processing.

### Sewage Treatment Plant

All septic tank waste water is collected at the Sewage Treatment Plant — processing capacity of 1,00,000 litres per day, storage of 1,00,000 litres, aeration tank, settling tank and clarifier with 3,00,000 litre capacity. The filtered water is used for gardening.

### E-Waste Management

E-waste includes discarded computer monitors, motherboards, CRTs, PCBs, mobile phones and chargers, compact discs, headphones, LCD/plasma televisions, air conditioners, refrigerators and so on. The following measures are adopted at ATME:

- **Re-evaluate.** Avoid an extra gadget by choosing one device with multiple functions.
- **Extend the life of your electronics.** Keep devices well maintained to extend life and avoid procurement of new ones.
- **Buy environmentally friendly electronics.** Look for products labelled as Energy Efficient by the Bureau of Energy Efficiency.
- **Donate used electronics to social programs** — outdated computers and other electronic gadgets are donated to social programs.
- **E-Bins** are installed to manage e-waste and are collected by KSPCB-authorised e-waste recyclers/disposers.

### Environment Awareness for Students & Public

Campus cleaning day is observed periodically with about 1,800 students participating as part of awareness creation both within the campus and nearby villages.

### No Smoking Zone

The entire campus is maintained as a non-smoking zone.
`;

export const pageBodyOverrides: Record<string, string> = {
  [RESEARCH_CENTERS_KEY]: researchCentersBody.trim(),
  "seminar-auditorium-2": seminarAuditoriumBody.trim(),
  "green-campus": greenCampusBody.trim(),
  "entrance-plan": "## Entrance Plan\n\nThe detailed entrance and campus circulation plan for ATME College of Engineering is shown below.",
  "drinking-water-ro": "## Drinking Water & RO\n\nWater purifiers at ATME are based on superior, state-of-the-art technology. Two units of Reverse Osmosis (RO), UV and UF systems power the drinking-water purification plant, each with a capacity of **300 LPH (litres per hour)** and a **600-litre SS food-grade storage tank**.\n\nA centralized, floor-wise distribution system delivers safe drinking water through **12 dedicated tap points** across the campus, each marked with clear notification details indicating that the water is safe for drinking.",
  "health-center": "## Health Center\n\n### Medical Facility in College Campus\n\nATME College of Engineering has entered into a **Memorandum of Understanding (MOU)** with **Cauvery Heart & Multi-Specialty Hospital** to facilitate the ATME College of Engineering Students, Parents & Staff for both **in-patient treatment** as well as **out-patient treatment**.\n\nThe College has also facilitated a **Medical Room in the campus** for emergency cases. The College has a well-equipped medical room with **1 set of bed, First Aid kits, Doctor Examination table**, etc.",
  "transportation": "## Transportation\n\nFrom the day the college opened in the heart of Mysore city, it has been providing transport facilities from all corners of the city to the campus. Because most engineering colleges are located away from city premises, parents and students often look for a comfortable, reliable and well-coordinated transport system alongside academics and infrastructure.\n\nBoth teaching and non-teaching staff use the same college transportation, which ensures excellent coordination between staff and students. Opting for the college bus is **not mandatory** \u2014 students may use the service if they wish. **Around 500 people** currently use these facilities.\n\n### Transportation Committee\n\n| Sl. No. | Name | Position | Contact |\n| --- | --- | --- | --- |\n| 1 | Dr. Sachidananda Murthy K L | Chairman | 9448678271 |\n| 2 | Dr. Srinivasa K | Member Secretary | 9945045415 |\n| 3 | Mr. Hemanth B R | Member | 7026251531 |\n| 4 | Mr. Mohan M | Member | 9448285647 |\n| 5 | Mr. Kumar Gowda | Transportation Service Provider | 9886992424 |\n| 6 | Mr. Jagadesh | Transportation Supervisor | 7899758265 |\n| 7 | Mr. Kalathma M K | Member | 9901209973 |\n| 8 | Mrs. Priyanka N B | Member | 9663674218 |\n| 9 | Ms. Ambika V | Member | 6361592908 |\n| 10 | Mrs. Madhu Nagaraj | Member | 9742133691 |\n| 11 | Mr. Somasundar | Member | 9739929289 |\n| 12 | Mr. Pruthvi | Member | 7619475600 |\n\n### Policy & Bus Routes",
  "solar-rooftop-system": "## Solar Rooftop System\n\n1. We have a **250 KVA transformer** with a **70 KVA** contract load from the Electricity Board, supported by a centralized distribution panel for the individual blocks with full safety equipment.\n2. As a backbone, we also have a **100 KW Diesel Generator**.\n3. We have installed a **95 KWp Solar Rooftop Photovoltaic (Grid-Tied) System**.\n\n- SERAPHIM 315 Wp solar panels making up the 95 KWp array\n- GoodWe inverters \u2014 25 KW, 4 nos.\n- Safety installations include lightning arresters, metal board and inverter earthing\n- Modules are mounted on MS skillion truss-type structures inclined at 35\u00b0; the space under the array is fully utilized\n- Contract period with the Electricity Board: **25 years** at **\u20b99.56 per unit**\n\n**Solar SRTPV Conclusion \u2014 a small effort towards an environmentally friendly campus.**\n\n|     |     |\n| --- | --- |\n| **Assured units generated \u2014 1,500 units annually per kW** \u2014 considering 1 hour of power failure per day on average, average generation of 5 units/kW, and 310 sunny days per year in Mysore. | 1,47,250 Units / Year |\n| Savings in CO\u2082 emissions \u2014 equivalent to planting 402 trees of 14 years\u2019 age yearly to neutralize CO\u2082 in nature. | 58 tons annually |",
  "magazine": "## DYNAMICS - Magazine\n\nA college magazine is an annual publication of a college. As a College magazine is an attempt to record all the activities of the students and committee, it was thought fit to name the college magazine **\u201CDYNAMICS\u201D**. It is a forum through which the young learners of the college express their juvenile ideas and knowledge on different topics.\n\nTo plan and work out logistics, a team of dedicated faculty members from each department joined together to form a Magazine Committee. The college magazine is the culmination of students' expression of thoughts, aspirations, talents, emotions and creativity of both faculty and students. It encourages them to think beyond academics and brings out hidden talents like literature, art, photography, etc.\n\n## Editions",
  "industry-labs": "## Industry Labs\n\nATME College of Engineering has established a series of **Industry-Sponsored Centres of Excellence (CoE)** in collaboration with leading technology partners. These labs expose students to current industry tools, real-world workflows and globally recognised certifications \u2014 bridging the gap between classroom learning and professional practice.\n\n### Centres of Excellence on Campus\n\n|     |     |\n| --- | --- |\n| **Lab / Centre of Excellence** | **Industry Partner & Focus** |\n| Bosch Rexroth Centre of Excellence | Hydraulics, pneumatics, factory automation and Industry 4.0 training. |\n| Siemens Centre of Excellence | Advanced manufacturing, CNC, mechatronics and PLC-based automation. |\n| Microsoft Innovation Lab | Cloud computing (Azure), AI fundamentals and developer tooling. |\n| Cisco Networking Academy | CCNA-aligned networking, cybersecurity and IoT modules. |\n| Texas Instruments Innovation Lab | Embedded systems, analog electronics and DSP development. |\n| Autodesk Design Studio | CAD/CAM, BIM and 3D modelling for engineering design. |\n\n### What students gain\n\n- Hands-on training on **industry-standard equipment and software** used by leading manufacturers and IT companies.\n- Access to **certification programmes** that strengthen placement readiness and global mobility.\n- Project work, internships and **capstone problems sourced directly from industry partners**.\n- Faculty development programmes (FDPs) and **train-the-trainer** sessions conducted by partner companies.\n- A continuous pipeline of **workshops, hackathons and skill-development bootcamps** held inside the labs.\n\n### Why it matters\n\nThe Industry Labs ensure that every ATME graduate steps into the workplace already familiar with the tools, standards and processes used by leading employers \u2014 making the transition from campus to career seamless.",
  "alumni": `## ATME Alumni Association

An alumni association is an association of graduates or, more broadly, former students of the college. The purpose of an association is to foster a spirit of loyalty and to promote the general welfare of the institution. Alumni associations exist to support the institution's goals, and to strengthen the ties between alumni, the community, and the institution.

The ATME College of Engineering Alumni Association was started in **2015** with clear objectives. The ATME College of Engineering Alumni Association was registered under **Karnataka Societal Act-1960** in the year **2021**.

### Objectives

1. To promote the advancement of the College by enlisting the support and participation of all Alumni of the college,
2. Organise one or Two Alumni Meet \u2014 Every Year,
3. Honouring The Achievers,
4. To Promote Institution and Industry Interaction,
5. To bring Alumni together and maintain an avenue by which the Alumni may remain in contact with the College,
6. To keep updated the activities and achievements of the college through News Letter,
7. Provide Access to all students information on college website,
8. To invite Alumni as resource person to share their knowledge and experience with the prospective engineers,
9. Dedicated Section for Alumni (Voice of Alumni) in the college Magazine,
10. Offer opportunities for Alumni to network with each other, students and the ATME College community,
11. To induct Alumni as office bearers,
12. To encourage, foster and promote close relations among the alumni themselves,
13. To provide and disseminate information regarding the College, its graduates, faculties and students to the Alumni,
14. To provide a forum for the Alumni for exchange of ideas on academic, cultural and social issues of the day by organizing and coordinating reunion activities of the Alumni, and
15. To let the alumni acknowledge their gratitude to the College.

---

## ATME Alumni Association Year-wise Meet and Events

- [ATME 7th Alumni Reunion \u2014 2024 (PDF)](https://old.atme.edu.in/wp-content/uploads/2024/03/ATME_7th-Alumni_Reunion-2024.pdf)
- [ATME 6th Alumni Meet Report \u2014 2023 (PDF)](https://old.atme.edu.in/wp-content/uploads/2024/03/ATME_6th_Alumni_Meet_Report_2023.pdf)
- [ATME Alumni Association Meet \u2014 2021 Report (PDF)](https://old.atme.edu.in/wp-content/uploads/ATME-Alumni-Association-Meet-2021-Report.pdf)

---

## ATME Alumni Association Executive Committee \u2014 Contact Details

### Alumni Association Executive Members

| Sl. No | Name | Designation | Dept. | Phone No. |
| --- | --- | --- | --- | --- |
| 1 | Mr. Shashank S | PRESIDENT | ECE | 9483313014 |
| 2 | Mr. Pavan S | VICE-PRESIDENT | ME | 8867098981 |
| 3 | Dr. Puttegowda D | SECRETARY | CSE | 9900622014 |
| 4 | Mrs. Akshatha A | Jt. SECRETARY | CSE | 7019363684 |
| 5 | Ms. Anupama Shetter | TREASURER | ECE | 9738484396 |
| 6 | Mr. Hemanth B R | MEMBER | ME | 7026251531 |
| 7 | Mr. Shivaraj R | MEMBER | CE | 8884722072 |
| 8 | Mr. Karthik K | MEMBER | CSE | 9738548107 |
| 9 | Ms. Amrutha R | MEMBER | EEE | 8123408770 |

### Alumni Association Department Faculty Coordinators

| Name | Designation | Dept. |
| --- | --- | --- |
| Ms. Lavanya N | Assistant Professor | CSE |
| Mrs. Sushma V | Assistant Professor | CSE |
| Mrs. Pavithra A C | Assistant Professor | ECE |
| Mrs. Harshitha N | Assistant Professor | ECE |
| Mrs. Lakshmi K | Assistant Professor | EEE |
| Mrs. Jyothi D N | Assistant Professor | CV |
| Dr. Suresh Kumar S | Associate Professor | ME |
`,

  "ariia-2021": ariia2021Body.trim(),
  "coe-vtu": coeVtuBody.trim(),
  "mandatory-disclosure": mandatoryDisclosureBody.trim(),
  "eoa-aicte": eoaAicteBody.trim(),
  "nabl": nablBody.trim(),
  "aicte": aicteBody.trim(),
  "dravya-centre-for-advanced-materials-cam": dravyaBody.trim(),
  "rpc-committee": rpcCommitteeBody.trim(),
  "research-incentives": researchIncentivesBody.trim(),
  "ipr": iprBody.trim(),
  [fundedResearchKey]: fundedResearchBody.trim(),
  [publicationsKey]: publicationsBody.trim(),
  [mouKey]: mouBody.trim(),
  "admissions/admission-policy": admissionPolicyBody.trim(),
  "admissions/reservation-in-student-admission-policy": reservationPolicyBody.trim(),
  [antiRaggingKey]: antiRaggingBody.trim(),
  "admissions/admission-queries": admissionQueriesBody.trim(),
  "admissions/general-information": generalInformationBody.trim(),
  "course-information": courseInfoBody.trim(),
  "admission-process": admissionProcessBody.trim(),
  "scholarships": scholarshipsBody.trim(),
  "admissions/fee-structure": feeStructureBody.trim(),
  "ug-fees-structure": `# UG Fee Structure for 2026-27\n\n[pdfviewer]${UG_FEES_URL}[/pdfviewer]`,
  "pg-fees-structure": `# PG Fee Structure for MBA & MCA (AY 2024-25)\n\n[pdfviewer]${PG_FEES_URL}[/pdfviewer]\n\n[Download PDF](${PG_FEES_URL})`,
  "admissions/enrollment": enrollmentBody.trim(),
  "admissions/atme-cut-off-ranks-for-the-academic-year-2025-26": cutoffRanksBody.trim(),
  "application": applicationBody.trim(),
  "gok-recognition-letter": gokRecognitionBody.trim(),
  "about-us/chairmans-message-2": chairmansMessageBody.trim(),
  "about-us/chairmans-message": chairmansMessageBody.trim(),
  "about-principal": aboutPrincipalBody.trim(),
  "about-us/about-principal": aboutPrincipalBody.trim(),
  "principal-message": principalMessageBody.trim(),
  "about-us/principal-message": principalMessageBody.trim(),
  "atme-research/dean-research-message": deanResearchMessageBody.trim(),
  "atme-research/dean-student-affairs": deanStudentAffairsBody.trim(),
  "dr-srinivasa-k": deanStudentAffairsProfileBody.trim(),
};

const deanAcademicsBody = `
# Dean — Academics Message

![Dr. Nalini Elizabeth Rebello — Dean, Academics](/__l5e/assets-v1/4f231910-afcb-45e2-a121-4ae866bf320b/Dr-Nalini-Elizabeth-Rebello.jpg)

Welcome to ATME College of Engineering, Mysuru.

At ATME, we believe that quality education is the foundation for innovation, leadership, and societal progress. Our academic framework is designed to provide students with a strong theoretical foundation complemented by practical learning experiences that prepare them to excel in a rapidly evolving technological world.

We are committed to fostering an environment that encourages critical thinking, creativity, research, and lifelong learning. Our curriculum, aligned with industry requirements and emerging technologies, is delivered by dedicated faculty members who strive to inspire and mentor students towards academic excellence and professional success.

The institution continuously strengthens its academic ecosystem through outcome-based education, industry collaborations, research initiatives, skill development programs, internships, value-added courses, and multidisciplinary learning opportunities. We emphasize not only academic achievement but also the development of ethical values, leadership qualities, communication skills, and social responsibility.

ATME College of Engineering takes pride in its state-of-the-art infrastructure, well-equipped laboratories, vibrant learning environment, and strong industry connect that collectively contribute to the holistic development of our students. Our consistent efforts towards excellence have earned recognition through NBA accreditation, NAAC A+ Grade accreditation, and various academic achievements that reflect our commitment to quality education.

As Dean Academics, I encourage every student to embrace the opportunities available at ATME, actively engage in learning, pursue innovation, and strive for excellence in all endeavors. Together, let us build a future driven by knowledge, integrity, and meaningful contributions to society.

At ATME, we are dedicated to nurturing competent professionals, responsible citizens, and future leaders who can contribute meaningfully to the nation and the global community. I invite you to be a part of this transformative learning journey and make the most of the opportunities available on our campus.

I wish all our students success in their academic pursuits and future careers.

**Warm regards,**

<div class="mt-4"><div class="font-semibold text-lg leading-tight">Dr. Nalini Elizabeth Rebello</div><div class="text-muted-foreground leading-tight">Dean — Academics</div><div class="text-muted-foreground text-sm leading-tight mt-1">ATME College of Engineering, Mysuru</div></div>
`;

const placementStatisticsBody = `
# Placement Statistics

## Placement Highlights

![Placed Students](/images/uploads/2026/04/p1.png)

![CTC Range](/images/uploads/2026/04/p2-1024x212.png)

## CTCs Offered

![](/images/uploads/2026/04/p3.png)

![](/images/uploads/2026/04/p4-1024x235.png)

`;

const ourRecruitersBody = `
# Our Recruiters

ATME College of Engineering has built strong relationships with leading recruiters across IT, core engineering, manufacturing, healthcare and service sectors. Our Career Guidance & Placement Cell coordinates recruitment drives throughout the academic year to bring diverse opportunities to our students.

## Recruiters Brochure

[Download the complete Recruiters list (PDF)](https://atme.edu.in/wp-content/uploads/2026/02/CGP_Recruiters_Logo-1.pdf)
`;

Object.assign(pageBodyOverrides, {
  "dean-academics": deanAcademicsBody.trim(),
  "about-us/dean-academics": deanAcademicsBody.trim(),
  "atme-research/dean-academics": deanAcademicsBody.trim(),
  "our-recruiters": ourRecruitersBody.trim(),
  "placement-statistics": placementStatisticsBody.trim(),
});

const isoCertificationBody = `
# ISO Certification

ATME College of Engineering is **ISO 9001:2015 Certified**.

[pdfviewer]/__l5e/assets-v1/bac75766-5b87-4d26-86e7-4a46fe28e202/ATME-ISO-Certificate.pdf[/pdfviewer]
`;

const aboutResearchBody = `
## About Research & Innovation

Research is an essential pillar of any Higher Education Institution. Research creates an innovation ecosystem in the Institution. ATMECE has a dedicated **Research wing** that **nurtures** and **promotes** the innovation eco system in the Institution through various research activities such as publication of research articles, presentation of innovative ideas in National/International conferences, publication of book chapters, the evolution of innovative projects, writing proposals for funding projects, Patent filing & publication, Collaboration with Industries, encouraging & guiding students to participate in Hackathons. etc. ATMECE is collaborated with more than **twenty-five** Industries and Institutes. A significant number of events have been organized to achieve these objectives.

The Institution has **Six Research Centers** that include Physics, Chemistry, Electronics & Communication Engineering, Computer science Engineering, Mechanical Engineering. The Research centers create an eco-system that motivates both in-house researchers and external researchers to carry out their research work. Research supervisors of various Research Centers of the institution constantly provide guidance and encouragement for both internal and external researchers in order to pursue their doctoral Degree.

The Institution has received around **4 crores** of external funding through **Grants from** various **Government funding bodies like** the Department of Science & Technology (DST), KSCST, VTU, ATAL (AICTE), MODROBS, SERB, K–Tech etc.

ATMECE has an **IPR cell** through which faculty & students are guided and encouraged to apply for patents. During last academic year, eleven patents are filed and Published across the various programs of the Institution.

**Articles** are published by the faculty and students in various **peer-reviewed Journals** and **conferences**. The articles are published in **IEEE transactions, Scopus, UGC care, and Web of Science indexed** journals.

ATEMCE has faculty having expertise in various fields of Engineering. ATMECE provides consultation in various domains related to Software, Power and civil Engineering.

ATMECE has networking with various International & National professional bodies that include **IEEE, BAI, IETE, ISTE, IEI, CSI** etc. Institution conducts Technical events in association with the professional bodies.

Students of ATMECE have been continuously participating in all the **Smart India Hackathons** conducted by MHRD & other Ministries since 2017.

With an intent to motivate and encourage research activities in the Institution and to promote faculty participation in the National/International Conferences, the Management has initiated **Faculty Incentive Policy** for the staff of ATMECE.
`;

const facultyAppraisalBody = `
# Faculty Appraisal

ATME College of Engineering has adopted a **360-degree appraisal system** to evaluate the performance of all staff members. The appraisal is implemented through the institutional EERP, so every component of the appraisal happens in real time on a single platform.

## About 360-Degree Feedback

A 360-degree feedback (also known as multi-rater feedback or multi-source assessment) is a process in which feedback from an employee's colleagues, supervisors, stakeholders and a self-evaluation by the employee themselves is gathered. In other words, an appraisal made by top management, immediate superior, peers, self and stakeholders is called a 360-Degree Appraisal.

Six parties evaluate the performance of each employee, giving feedback from every angle. This method is reliable because multiple parties — all of whom regularly interact with the employee — contribute to the evaluation. In addition to performance, the method also assesses talents, values, ethical standards, contribution to institutional growth and orientation towards research.

## The Six Appraisal Components

1. **Students' Performance and Students' Feedback** (≈ 200 marks)
2. **Self-Appraisal** (100 marks)
3. **Co-worker / Peer Appraisal** (25 marks)
4. **Head of the Department Appraisal** (75 marks)
5. **Head of the Institute (Principal) Appraisal** (50 marks)
6. **Management Appraisal** (50 marks)

### 1. Students' Performance and Feedback

In academic institutions, students are the primary stakeholders, so the maximum weightage is allotted to students. Students' feedback and students' performance are evaluated separately with equal weightage. Feedback includes parameters such as subject preparedness, communication, subject knowledge, practical application of concepts and innovative teaching methods. Students' performance results are multiplied by a **toughness factor** that varies with the complexity of the subject, so faculty handling tough subjects are not disadvantaged.

### 2. Self-Appraisal

Self-appraisal focuses on three major areas:

- **Teaching, Learning and Evaluation:** syllabus coverage, seminars, tutorials, bridge courses, innovative teaching methodologies and university-level involvement (paper setting, valuation, squad duty).
- **Co-curricular, Extension and Profession-related activities:** value-based programmes, community service, interaction with regulatory bodies, FDPs / conferences / seminars attended, sessions chaired, editorial / reviewer roles and continuous learning through certifications.
- **Research and Related Contributions:** publications in indexed journals (Scopus, Web of Science, Google Scholar), conference presentations, books / book chapters, sponsored projects, patents and technology transfer. Higher weightage is given for international publications, IEEE / Elsevier / Springer conferences and successful patent / project sanctions.

### 3. Peer (Co-worker) Appraisal

Peers work continuously with each other and are well placed to evaluate teamwork, communication skills, involvement in college and department activities, subject knowledge and attitude towards students and colleagues. Evaluated for 25 marks.

### 4. Head of the Department (HoD) Appraisal

The immediate superior evaluates punctuality, classroom effectiveness, document maintenance (lesson plan, work-done diary, attendance), teamwork and contribution of innovative ideas. Evaluated for 75 marks.

### 5. Principal's Appraisal

The Principal evaluates staff and HoDs on management of staff / students, departmental documents, interpersonal relationships, leadership, professionalism, ensuring delivery of the curriculum, contribution to departmental / institutional growth and strategic thinking. Evaluated for 50 marks.

### 6. Management Appraisal

The top management evaluates awareness of Vision, Mission, PEOs, POs, COs, policies and the faculty handbook, along with teamwork, professional development, research involvement, student engagement and job-satisfaction levels. Evaluated for 50 marks.

## Why this Matters

The 360-degree appraisal model gives every staff member a balanced, multi-perspective view of their performance and a clear roadmap for professional development. It rewards quality teaching, encourages research and innovation and reinforces the institute's culture of continuous improvement.
`;

Object.assign(pageBodyOverrides, {
  "iso-certification": isoCertificationBody.trim(),
  "about-us/iso-certification": isoCertificationBody.trim(),
  "about-research": aboutResearchBody.trim(),
  "atme-research/about-research": aboutResearchBody.trim(),
  "faculty-appraisal": facultyAppraisalBody.trim(),
  "administration/faculty-appraisal": facultyAppraisalBody.trim(),
});



const iqacBody = `
# Internal Quality Assurance Cell (IQAC)

The Internal Quality Assurance Cell (IQAC) at ATME College of Engineering is the
post-accreditation quality sustenance mechanism set up in line with NAAC
guidelines. IQAC drives planned, systematic and continuous improvement in the
academic and administrative performance of the institution.

## Vision

To institutionalise a culture of quality consciousness across all academic and
administrative units of ATMECE.

## Mission

- Develop a system for conscious, consistent and catalytic action to improve the academic and administrative performance.
- Promote measures for institutional functioning towards quality enhancement through internalisation of quality culture and institutionalisation of best practices.

## Objectives

- To ensure heightened levels of clarity and focus in institutional functioning towards quality enhancement.
- To ensure internalisation of the quality culture.
- To ensure enhancement and coordination among various activities of the institution.
- To channelise all efforts and measures of the institution towards academic excellence.
- To provide a sound basis for decision-making to improve institutional functioning.
- To act as a dynamic system for quality changes in higher education institutions.

## Functions

- Development and application of quality benchmarks and parameters for academic and administrative activities.
- Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation.
- Arrangement for feedback responses from students, parents and other stakeholders.
- Dissemination of information on quality parameters of higher education.
- Organisation of inter and intra-institutional workshops, seminars on quality-related themes and promotion of quality circles.
- Documentation of various programmes / activities leading to quality improvement.
- Preparation of the Annual Quality Assurance Report (AQAR) to be submitted to NAAC based on the quality parameters.

## Composition

IQAC at ATMECE is chaired by the Principal and includes senior administrative
officers, a few teachers, a few distinguished educationists, representatives of
local management, industry, alumni, parents and students. The cell is supported
by a Coordinator and a member secretary.

> For the year-wise AQAR documents and IQAC meeting minutes, please refer to
> the Affiliations & Approvals → NAAC section.
`;

const googleMapsBody = `
# ATME on Google Maps

ATME College of Engineering is located at **13th Kilometre, Bannur Road,
Mysore – 570 028, Karnataka, India**, set across a 20-acre green campus on the
outskirts of Mysuru.

## Find us

<div class="rounded-lg overflow-hidden shadow-md my-6 aspect-video">
<iframe
  src="https://www.google.com/maps?q=ATME+College+of+Engineering,+13th+Km,+Bannur+Road,+Mysore&output=embed"
  width="100%"
  height="100%"
  style="border:0"
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  allowfullscreen
  title="ATME College of Engineering on Google Maps"
></iframe>
</div>

[Open in Google Maps →](https://www.google.com/maps/dir/?api=1&destination=ATME+College+of+Engineering+Mysore)

## Getting here

- **From Mysuru city centre:** ~13 km via Bannur Road (NH-766).
- **Nearest railway station:** Mysuru Junction (~14 km).
- **Nearest airport:** Mysuru Airport (~14 km); Bengaluru International Airport (~170 km).
- **Bus routes:** KSRTC and city bus services to Bannur Road / 13th KM stop pass the campus regularly.

## Contact

- Phone: [+91-821-2954001 / 2954011](tel:+918212954001)
- Email: [office@atme.in](mailto:office@atme.in)
- Website: [https://atme.edu.in](https://atme.edu.in)
`;

const professionalBodyMembershipBody = `
# Professional Body Membership

ATME College of Engineering encourages faculty and students to engage with the
wider engineering community through institutional memberships in leading
professional bodies. These memberships give the ATMECE community access to
journals, technical events, student chapters, certification programmes and
continuing-education opportunities.

## Institutional and Student-Chapter Memberships

| Sl. No. | Professional Body | Engagement |
| --- | --- | --- |
| 1 | **IEEE** — Institute of Electrical and Electronics Engineers | Active student branch and faculty membership |
| 2 | **ISTE** — Indian Society for Technical Education | Institutional membership; faculty life members |
| 3 | **IETE** — Institution of Electronics and Telecommunication Engineers | Faculty members, student chapter activities |
| 4 | **CSI** — Computer Society of India | Student branch under the Department of CSE |
| 5 | **IEI** — The Institution of Engineers (India) | Institutional and individual fellowships |
| 6 | **ISHRAE** — Indian Society of Heating, Refrigerating and Air Conditioning Engineers | Mechanical Engineering student chapter |
| 7 | **SAE INDIA** — Society of Automotive Engineers | Mechanical Engineering student chapter |
| 8 | **ICI** — Indian Concrete Institute | Civil Engineering student chapter |
| 9 | **IGS** — Indian Geotechnical Society | Civil Engineering faculty membership |
| 10 | **ISA** — International Society of Automation | EEE/ECE student membership |
| 11 | **VTU IEEE Mysuru Subsection** | Faculty execom representation |

## Benefits to the ATMECE Community

- Access to peer-reviewed journals, conferences and technical magazines.
- Eligibility for student-run technical events, hackathons and design challenges.
- Industry mentorship through chapter activities and guest lectures.
- Recognition through chapter-level awards and certifications.
- Networking with alumni and practising engineers across India and abroad.

> Department-wise chapter activity reports are published under each department's
> "Activities" / "Events" pages.
`;


const GOV_KEY = "administration/governance-institutional-support-and-financial-resources";

const governanceBody = `
# Governance, Institutional Support & Financial Resources

ATME College of Engineering operates under a transparent, decentralised
governance model. The institution publishes its statutory committee minutes,
financial decisions, infrastructure utilisation and IT/Library spend so that
every stakeholder — student, parent, faculty and regulator — can verify how
the college is run.

- [Governance](${SELF(GOV_KEY)})
- [Service Rules and Recruitment](${SELF(GOV_KEY)})
- [Decentralization and Grievance](${SELF(GOV_KEY)})
- [Delegation of Financial Powers](${SELF(GOV_KEY)})
- [Transparency and Availability of Information](${SELF(GOV_KEY)})
- [Budget Allocation and Utilization](${SELF(GOV_KEY)})
- [Library and Internet](${SELF(GOV_KEY)})

[Governance](${SELF(GOV_KEY)})

Governing Council proceedings, statutory committee minutes (Grievance, ICC,
Anti-Ragging), Faculty Orientation records and the full set of board-approved
Institution Policies.

### GC Meeting Proceedings — 26th

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/GC-MEETIG-PROCEEDINGS-26TH.pdf[/pdfviewer]

### GC Meeting Proceedings — 29th

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/GC-MEETIG-PROCEEDINGS-29TH.pdf[/pdfviewer]

### Grievance Committee MoM

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/1.-Grievance-Commitee-Proceedings.pdf[/pdfviewer]

### CICC MoM

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/3-CICC-MOM.pdf[/pdfviewer]

### Anti-Ragging Committee MoM

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/2.-Antiraggin-Exhibit-1.pdf[/pdfviewer]

### Faculty Orientation Program (02-09-2022)

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/4.-Faculty-Arienttion-Program-held-on-02-09-2022.pdf[/pdfviewer]

### Institution Policies

The following 17 board-approved policies govern academic, administrative,
financial and student-welfare matters at ATMECE.

#### 1. ATME Employees Appraisal Policy

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/01-ATME-Employees-Appraisal-Policy-1.pdf[/pdfviewer]

#### 2. ATME Mentoring Handbook — Faculties

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/02-ATME-Mentoring-Handbook-%E2%80%93-Faculties-1.pdf[/pdfviewer]

#### 3. ATME Mentoring Handbook — Students

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/03-ATME-Mentoring-Handbook-Student-1-1.pdf[/pdfviewer]

#### 4. ATME Code of Conduct & Ethics Policy

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/04-ATME-CODE-OF-CONDUCT-ETHICS-POLICY-1.pdf[/pdfviewer]

#### 5. ATME e-Governance Policy

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/05-ATME-e-GOVERNANCE-POLICY-1.pdf[/pdfviewer]

#### 6. ATME Examination Policy

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/06-ATME-EXAMINATION-POLICY-1.pdf[/pdfviewer]

#### 7. ATME Gender Equity Policy

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/07-ATME-Gender-Equity-Policy-1.pdf[/pdfviewer]

#### 8. ATME Green Campus Policy

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/08-ATME-GREEN-CAMPUS-POLICY-1.pdf[/pdfviewer]

#### 9. ATME Grievance Redressal Policy

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/09-ATME-GREIVANCE-REDRESSAL-POLICY-1.pdf[/pdfviewer]

#### 10. ATME Information Policy

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/10-ATME-INFORMATION-1.pdf[/pdfviewer]

#### 11. ATME Infrastructure Policy

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/11-ATME-INFRASTRUCTURE-POLICY-1.pdf[/pdfviewer]

#### 12. ATME Infrastructure Utilization

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/12-ATME-Infrastructure-Utilization-1.pdf[/pdfviewer]

#### 13. ATME Campus Placement Policy

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/13-ATME-Campus-Placement-Policy-1.pdf[/pdfviewer]

#### 14. ATME Disabled-friendly / Barrier-free Environment Policy

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/14-ATME-Disabled-friendly-Barrier-free-environment-Policy-1.pdf[/pdfviewer]

#### 15. ATME Reservation in Student Admission Policy

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/15-ATME-Reservation-in-Student-Admission-Policy-2.pdf[/pdfviewer]

#### 16. ATME Resource Mobilization Policy

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/16-ATME-Resource-Mobilization-Policy-1.pdf[/pdfviewer]

#### 17. ATME Staff Recruitment Policy

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/17-ATME-STAFF-RECRUITMENT-POLICY-1.pdf[/pdfviewer]

[Service Rules and Recruitment](${SELF(GOV_KEY)})

Service rules, employee handbooks and the formal recruitment process followed
at ATME College of Engineering.

### Service Rules — Faculty Handbook (Employee Handbook v3)

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/Employee-Handbook-Version-3.pdf[/pdfviewer]

### Employee Handbook 3.0

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/Employee-hand-book-3-0.pdf[/pdfviewer]

### Recruitment Process

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/Recruitment.pdf[/pdfviewer]

[Decentralization and Grievance](${SELF(GOV_KEY)})

Evidence of decentralised authority across departments and the formal
grievance redressal mechanism.

### Decentralization of Power — Employee Handbook

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/Decentralization-of-Power-EMP-Handbook.pdf[/pdfviewer]

### Grievance and Redressal Committee

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/1-Grievance-and-Redressal-committee.pdf[/pdfviewer]

### MoM — Grievance and Redressal Committee

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/2.-MOM-Grievance-and-Redressal-committee.pdf[/pdfviewer]

[Delegation of Financial Powers](${SELF(GOV_KEY)})

Proof of decentralised financial decision-making — purchase orders approved
at the departmental level across multiple academic years.

### 1. Delegation of Financial Power — Framework

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/1.-Delegation-of-Fin-Power.pdf[/pdfviewer]

### 2. Proof of DFP — Book Paradise PO 2023-24

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/2.-Proof-DFP-Book-Paradise-PO-2023-24.-262.pdf[/pdfviewer]

### 3. Proof of DFP — MBA PO Book Paradise 2024-25

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/3.-Prof-of-DFP-MBA-PO-for-Book-Paradise-24-25.pdf[/pdfviewer]

### 4. Proof of DFP — PO Sri Book World 2022-23

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/4.-Proof-of-DFP-PO-Sri-Book-World-2022-23.pdf[/pdfviewer]

### 5. Proof of DFP — Sapna PO 2021-22

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/5.-Proof-of-DFP-Sapna-PO-2021-22.pdf[/pdfviewer]

[Transparency and Availability of Information](${SELF(GOV_KEY)})

Public-disclosure document covering transparency and availability of
institutional information.

### Transparency and Availability

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/Transparency-and-Avialability.pdf[/pdfviewer]

### Mandatory Disclosure 2025-26

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/Mandatory-Disclosure-2025-26.pdf[/pdfviewer]

[Budget Allocation and Utilization](${SELF(GOV_KEY)})

Approved and revised institutional budgets for the academic year.

### Approved Budget 2024-25 (April 2024)

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/Approved-Budget-2024-25.pdf[/pdfviewer]

### Revised Budget 2024-25 (December 2024)

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/Revised-Budget-for-the-AY-2024-25.pdf[/pdfviewer]

[Library and Internet](${SELF(GOV_KEY)})

Library resources and evidence of internet, leased-line and IT-resource
expenditure across vendors and academic years.

### Library Information

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/Library-Information.pdf[/pdfviewer]

### 1. Internet and IT Resources — Summary

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/1.-Internet-and-IT-Resources.pdf[/pdfviewer]

### 2. ATME Back-Line Incubation (Jul 2024 – Aug 2025)

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/3.-ATME-Back-Line-incubation-2-724-to-31-8-25.pdf[/pdfviewer]

### 3. ATME / Yashtel — Q2 2024-25 (Jul – Sep 2024)

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/4.-ATME-Yashtel-01-Jul-2024-To-30-Sep-2024-YCN2024-25-54.pdf[/pdfviewer]

### 4. BSNL Bill 2024-25

[pdfviewer width="1200px" height="800px"]https://new.atme.edu.in/wp-content/uploads/2026/04/5.-BSNL-Bill-2024-25-9039345671_SDCKA0053041450.pdf[/pdfviewer]
`;

const studentSupportBody = `
# Student Support System

ATMECE provides a structured, multi-channel support system that follows the
student from admission through to placement. Each section below collects the
official supporting documents — mentoring records, feedback details, facility
surveys, self-learning resources, career-guidance materials, E-Cell activity
and co-curricular engagement.

- [Mentoring Process](/p/student-support-system)
- [Feedback Details](/p/student-support-system)
- [Facility Survey](/p/student-support-system)
- [Self Learning](/p/student-support-system)
- [Career Guidance and Training](/p/student-support-system)
- [E-Cell](/p/student-support-system)
- [Co-curricular and Extra-Curricular Activities](/p/student-support-system)

[Mentoring Process](/p/student-support-system)

Every student at ATMECE is assigned a faculty mentor who tracks academic
progress, attendance, well-being and career goals across the entire
programme. Mentoring records, parent-mentor interactions and the
institution-level mentoring handbooks are maintained as evidence.

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | Supporting Documents — Student Mentoring Process | [Student Mentoring Process](https://atme.edu.in/wp-content/uploads/2025/04/9.1-Supporting-documents-for-Student-Mentoring-Process.pdf) |
| 2 | ATME Mentoring Handbook — Students | [ATME Mentoring Handbook Student](https://atme.edu.in/wp-content/uploads/2026/01/9.1-ATME-Mentoring-Handbook-Student.pdf) |
| 3 | ATME Mentoring Handbook — Faculties | [ATME Mentoring Handbook Faculties](https://atme.edu.in/wp-content/uploads/2026/01/9.1-ATME-Mentoring-Handbook-%E2%80%93-Faculties.pdf) |

[Feedback Details](/p/student-support-system)

ATMECE collects structured feedback on every course and faculty member each
semester. The feedback is analysed, shared with faculty for course
improvement and audited by the IQAC.

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | Supporting Documents — Faculty / Course Feedback Details | [Faculty Course Feedback Details](https://atme.edu.in/wp-content/uploads/2025/04/9.2-Supporting-documents-for-Faculty_Course-Feedback-details-Images.pdf) |

[Facility Survey](/p/student-support-system)

Annual student-facility surveys cover classrooms, laboratories, library,
hostel, transport, canteen and sports facilities. Action-taken reports are
published to close the feedback loop.

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | Supporting Documents — Facility Survey | [Facility Survey](https://atme.edu.in/wp-content/uploads/2025/04/9.3-Supporting-documents-for-Facility-Survey.pdf) |

[Self Learning](/p/student-support-system)

Beyond the prescribed curriculum, the institute promotes self-paced
learning through NPTEL / SWAYAM enrolments, digital library access,
language-lab modules and topic-specific certification programmes.

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | Supporting Documents — Self Learning | [Self Learning](https://atme.edu.in/wp-content/uploads/2025/04/9.4-Supporting-documents-Self-Learning.pdf) |

[Career Guidance and Training](/p/student-support-system)

The Career Guidance & Placement Cell runs aptitude, communication,
technical and soft-skills training across all four years, complemented by
mock interviews, GD sessions and industry-readiness workshops.

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | Supporting Documents — Career Guidance and Training | [Career Guidance and Training](https://atme.edu.in/wp-content/uploads/2025/04/9.5-Supporting-documents-Career-Guidance-and-Training.pdf) |

[E-Cell](/p/student-support-system)

The Entrepreneurship Development Cell (E-Cell), under the umbrella of the
Institution's Innovation Council (IIC), nurtures student start-ups through
ideation bootcamps, mentor matchmaking, prototype funding and access to
the campus incubation centre.

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | Supporting Documents — E-Cell Activities | [E-Cell Activities](https://atme.edu.in/wp-content/uploads/2025/04/9.6-Supporting-documents-E-Cell-images.pdf) |
| 2 | IIC Appreciation Letter — AY 2023-24 | [IIC Appreciation Letter 2023-24](https://atme.edu.in/wp-content/uploads/2025/04/IIC_Appreciation_Letter_AY_2023_24.pdf) |

[Co-curricular and Extra-Curricular Activities](/p/student-support-system)

Technical clubs, professional-society chapters (IEEE, ISTE, CSI, IETE,
ISHRAE, SAE INDIA, ICI), cultural fests, sports tournaments and NSS / Red
Cross outreach give every student multiple avenues to grow beyond the
classroom.

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | Supporting Documents — Co-curricular and Extra-Curricular Activities | [Co-curricular Activities](https://atme.edu.in/wp-content/uploads/2025/04/9.7-Supporting-documents-Co-curricular-and-Extra-Curricular-Activities.pdf) |
`;


const coeBody = `
# Calendar of Events (COE)

The Calendar of Events governs the entire academic year — instruction days,
internal tests, lab cycles, university examinations and holidays. ATMECE
publishes calendars at three levels: the parent VTU calendar, the
institution-level master calendar and department-wise undergraduate
calendars.

- [VTU COE](/p/administration/calendar-of-events-coe)
- [Institution COE](/p/administration/calendar-of-events-coe)
- [UG Programs COE — Odd Semester (2025-26)](/p/administration/calendar-of-events-coe)
- [UG Programs COE — Even Semester (2025-26)](/p/administration/calendar-of-events-coe)

[VTU COE](/p/administration/calendar-of-events-coe)

The Visvesvaraya Technological University publishes the master academic
calendar for all affiliated programmes. Always cross-check the VTU calendar
for examination and result dates.

[Open the VTU Academic Calendar](https://vtu.ac.in/academic-calendar/)

[Institution COE](/p/administration/calendar-of-events-coe)

The institute-level Calendar of Events consolidates all departmental
schedules into a single college-wide reference for the current semester.

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | Institute — 6th Semester COE 2025-26 | [Institute 6th Semester COE 2025-26](https://new.atme.edu.in/wp-content/uploads/2026/04/Institute_-6th-Semester-COE-2025-26.pdf) |

[UG Programs COE — Odd Semester (2025-26)](/p/administration/calendar-of-events-coe)

Semester-wise calendars for the odd semester covering 1st, 3rd, 5th and 7th
semester B.E. students across all departments.

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | Calendar of Events — 1st Semester COE 2025-26 | [Calendar of Events — 1st Semester COE 2025-26](https://new.atme.edu.in/wp-content/uploads/2026/04/Calendar-of-Events-1st-Semester-COE-2025-26.pdf) |
| 2 | Calendar of Events — 3rd Semester COE 2025-26 (Draft) | [Calendar of Events — 3rd Semester COE 2025-26 (Draft)](https://new.atme.edu.in/wp-content/uploads/2026/04/Calendar-of-Events-3rd-Sem-COE-2025-26-Draft.pdf) |
| 3 | Calendar of Events — 5th & 7th Semester COE 2025-26 | [Calendar of Events — 5th & 7th Semester COE 2025-26](https://new.atme.edu.in/wp-content/uploads/2026/04/Calendar-of-Events-5th-7th-Sem-COE-2025-26.pdf) |

[UG Programs COE — Even Semester (2025-26)](/p/administration/calendar-of-events-coe)

Department-wise 6th-semester Calendar of Events for the current even
semester. Each department publishes its own COE to reflect lab cycles,
mini-projects and elective schedules.

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | Civil Engineering — 6th Sem COE 2025-26 | [Civil Engineering — 6th Sem COE 2025-26](https://new.atme.edu.in/wp-content/uploads/2026/04/CE-dept.-6th-Sem-COE-25-26.pdf) |
| 2 | Mechanical Engineering — 6th Sem COE 2025-26 | [Mechanical Engineering — 6th Sem COE 2025-26](https://new.atme.edu.in/wp-content/uploads/2026/04/ME_Dept-6th-Semester-COE-2025-26.pdf) |
| 3 | EEE — 6th Sem COE 2025-26 | [EEE — 6th Sem COE 2025-26](https://new.atme.edu.in/wp-content/uploads/2026/04/EEE-dept.-6th-Semester-COE-2025-26.pdf) |
| 4 | ECE — 6th Sem COE 2025-26 | [ECE — 6th Sem COE 2025-26](https://new.atme.edu.in/wp-content/uploads/2026/04/ECE-dept.-6th-Semester-COE-2025-26.pdf) |
| 5 | CSE — 6th Sem COE 2025-26 | [CSE — 6th Sem COE 2025-26](https://new.atme.edu.in/wp-content/uploads/2026/04/CSE-dept.-6th-Semester-COE-2025-26.pdf) |
| 6 | CSE (AI & ML) — 6th Sem COE 2025-26 | [CSE (AI & ML) — 6th Sem COE 2025-26](https://new.atme.edu.in/wp-content/uploads/2026/04/CSE_AI_ML_dept.-6th-Semester-COE-2025-26.pdf) |
| 7 | CSE (Data Science) — 6th Sem COE 2025-26 | [CSE (Data Science) — 6th Sem COE 2025-26](https://new.atme.edu.in/wp-content/uploads/2026/04/DS-dept._6th-Semester-COE-2025-26.pdf) |
| 8 | CSD & Cyber Security — 6th Sem COE 2025-26 | [CSD & Cyber Security — 6th Sem COE 2025-26](https://new.atme.edu.in/wp-content/uploads/2026/04/CSDCY-Dept._6-Semester-COE-2025-26.pdf) |

`;

const aimsBody = `
# A-IMS

![A-IMS](/images/uploads/2026/04/admin-ajax.png)

ATME College of Engineering uses the **A-IMS** platform — a fully integrated, web-and-mobile end-to-end solution for the complete management of the college. The platform integrates every activity so that data is shared in real time between all stakeholders.

The solution covers the entire student lifecycle — from admission and classification through to alumni — including fee, affiliation, certificate, faculty, attendance, grievance, hall-ticket, USN generation, lesson planning, schema management, mentoring, knowledge library, alumni management and evaluation. It also delivers standard and analytical reports required by the university / college / school.

###### A-IMS COMMITTEE

| Sl. No. | Name | Position | Contact |
| --- | --- | --- | --- |
| 1 | Dr. L Basavaraj | Chairman | [9448285641](tel:9448285641) |
| 2 | Mr. Niranjan Kumar V S | Member Secretary | [9945614138](tel:9945614138) |
| 3 | Mr. Mohan M | Member | [9916088975](tel:9916088975) |
| 4 | Mr. Tejas N | Member | [8431187332](tel:8431187332) |
| 5 | Mr. Mahendra | Member | [7795257247](tel:7795257247) |
| 6 | Mr. Pradeep Kumar Y | Member | [9986646017](tel:9986646017) |
| 7 | Mr. Raghuram A S | Member | [9448552109](tel:9448552109) |
| 8 | Dr. Mohanakumar K C | Member | [9141559487](tel:9141559487) |
| 9 | Ms. Swapna H | Member | [9591562578](tel:9591562578) |
| 10 | Mrs. Namitha | Member | [9538343733](tel:9538343733) |
| 11 | Ms. Harshitha | Member | [9901790762](tel:9901790762) |
| 12 | Mrs. Sandya G | Member | [7483298369](tel:7483298369) |
| 13 | Mrs. Madhu Nagaraj | Member | [9742133691](tel:9742133691) |
| 14 | Mrs. Yeshashwini Bhandari K R | Member | [9742251453](tel:9742251453) |
| 15 | Ms. Lakshmi M R | Member | [8951569640](tel:8951569640) |
| 16 | Mrs. Pallavi | Member | [9342575252](tel:9342575252) |
| 17 | Mrs. Khateeja Ambreen | Member | [9844967242](tel:9844967242) |

- [For the Management](/p/administration/a-ims)
- [For the Staff / Faculty](/p/administration/a-ims)
- [For Parents](/p/administration/a-ims)
- [For Students](/p/administration/a-ims)
- [General](/p/administration/a-ims)
- [Modules](/p/administration/a-ims)
- [High-Level Deployment Framework](/p/administration/a-ims)

[For the Management](/p/administration/a-ims)

- Overview of the entire group of institutes (irrespective of geographical and physical location) — centralise or de-centralise every institute under the group
- Anywhere, anytime access to the functioning of the entire institution on a real-time basis
- Combined reports across all institutes, or per-institute reports when de-centralised
- Fee details / defaulters list at the click of a button
- Efficiency ratio for every faculty / classroom / facility on the campus
- Fee collected, pending payments and defaulters at a glance
- Manage fee concessions and discounts for financially weaker students
- Automated reminders for faculty / students / parents
- Near-paperless office encouraging a greener environment
- Automated salary processing as per institute policies
- Transparency across the system with full audit trails
- Dynamic permission management for all stakeholders
- Prevents mismanagement of funds / fees collected
- Result analysis — batch-wise, faculty-wise, subject-wise comparisons
- Student / parent / faculty feedback

[For the Staff / Faculty](/p/administration/a-ims)

- Enables faster lesson planning
- Easy student monitoring (performance, attendance, activity participation)
- Easy issuance of online NOCs to students
- More spare time for self-knowledge building and non-administrative activities
- Increases work efficiency and drives processes
- Faculty-student interaction
- Counselling sessions with parents / students
- Online examination and student evaluation
- Direct interaction with parents
- Online publishing of marks and attendance
- Student mentoring

[For Parents](/p/administration/a-ims)

- Know their ward's progress on a real-time basis
- Pay fees online from home / office
- Online availability of test / exam / assignment scores
- Know the position of their ward in the class / institute
- Periodic attendance and academic status updates
- Direct interactions with faculties of their wards
- Lodge complaints with the management
- Marks / marks-card updates through SMS / e-mail

[For Students](/p/administration/a-ims)

- Know their attendance status in real time
- Online checking of marks scored
- Direct interactions with faculties
- Lodge complaints with management
- Online submission of NOCs to speed up processes
- Submit tests / assignments online
- Take mock tests to improve knowledge and performance

[General](/p/administration/a-ims)

- Provides access to virtually all users
- Computerises the education management process
- **Faster turnaround time** — doing away with paper-based transactions cuts results-processing time by up to 94% and enables greener operations
- **Reduced costs** — automation lowers operational cost of running an institute
- **Process efficiencies** — intelligent data capture and education-domain workflows reduce errors
- **Transparency** — speedy processes with full audit trails and enhanced fraud / abuse controls
- **Multiple access points** — Web, e-mail and mobile gateways connect Chancellors, Registrar, Management, Staff, Faculty, Students and Parents in real time
- **Fast data processing** — high transaction volumes handled by splitting data into tables
- Hassle-free and easy maintenance
- **Permissions** — management can dynamically decide permissions for staff / students / parents

[Modules](/p/administration/a-ims)

- Administration
- Inquiries, Registration & Admission
- Fee Management
- Academics
- Time Table and Attendance
- HR & Payroll
- Library Management
- Transportation
- Tests and Examinations
- Training & Placement
- Inventory Management
- Hostel Management
- Alumni
- Reporting

[High-Level Deployment Framework](/p/administration/a-ims)

End-to-end deployment of every functional area:

- **Admission** — registration, student details, assigning and re-admission
- **Finance / Fee Payment** — refunds, fee structure, fine calculation, overdue, fee waiver, concession, reminders
- **Academics** — attendance, time table, syllabus, lesson planning, counselling, feedback, calendar of events, question bank
- **Tests / Exams** — eligibility criteria, seating chart, promotions, results, result analysis, NOCs
- **Communication** — attendance, reports, results, news & events, alerts, notices
- **Library** — book collection, renewal, library fee, book tracking & reservation, penalties, accession register, receipts
- **Transportation** — route mapping, GPS integration, vehicle logs, fuel consumption, vehicle status
- **HR & Payroll** — staff registration & attendance, recruitment, faculty status, payroll, payslips, relieving, secure salary approval, bank advice & automated bank payments
- **Inventory Management** — vendor management, indent, PO & invoice generation, MRN, MIN, stores, materials, estimation & e-measurements, asset tracking, breakage, NOC
- **Affiliations** — registrations & memberships, tracking of affiliations, institute details, student & faculty strength, infrastructure, certificate issuance
- **Reports** — fully configurable
- **Hostel & Mess** — room management, hostel fee & security, mess bill generation and hall-ticket mapping
- **Alumni** — database management, events & functions, circulars
- **Dashboards** — operational, educational, financial and administration views
- **Mobile** — Student Companion, Parent Companion, Micro Scorecard
- **SMS & e-mail gateway** — regular personalised updates for all stakeholders
- **Data security & fraud control**
- **MIS and Business Intelligence reporting**
- **Disaster recovery and business continuity**
`;

const ttBody = `
# Academic Timetable and Teaching Load

Department-wise academic time-tables and faculty workload for the current academic year, across all UG programmes and the MCA postgraduate programme. Expand any department to preview or download the latest schedules and workload allocations.

- [Civil Engineering](/p/administration/academic-timetable-and-teaching-load)
- [Computer Science and Engineering](/p/administration/academic-timetable-and-teaching-load)
- [Computer Science and Engineering — AIML](/p/administration/academic-timetable-and-teaching-load)
- [Computer Science and Engineering — Design](/p/administration/academic-timetable-and-teaching-load)
- [Computer Science and Engineering — Cyber Security](/p/administration/academic-timetable-and-teaching-load)
- [Computer Science and Engineering — Data Science](/p/administration/academic-timetable-and-teaching-load)
- [Electronics and Communication Engineering](/p/administration/academic-timetable-and-teaching-load)
- [Electrical and Electronics Engineering](/p/administration/academic-timetable-and-teaching-load)
- [Mechanical Engineering](/p/administration/academic-timetable-and-teaching-load)
- [Master of Computer Applications (MCA)](/p/administration/academic-timetable-and-teaching-load)

[Civil Engineering](/p/administration/academic-timetable-and-teaching-load)

**Academic Time-Table**

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | Civil Engineering — Time Table (Even Sem 2025-26) | [CE Time-Table Even Sem 25-26](https://atme.edu.in/wp-content/uploads/2026/02/ATME_CE_Time-Table_Even-Sem_25-26.pdf) |

[Computer Science and Engineering](/p/administration/academic-timetable-and-teaching-load)

**Academic Time-Table**

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | CSE — Time Table (Even Sem 2024-25) | [CSE TT Even Sem 24-25](https://atme.edu.in/wp-content/uploads/2025/02/CSE_TT_EVEN-SEM_24-25.pdf) |
| 2 | CSE — 3rd Semester Time Table (2024-25) | [CSE 3rd Sem TT 2024-25](https://atme.edu.in/wp-content/uploads/2024/08/ATMECE_CSE_3rd-Semester-Time-table_2024-25.pdf) |

**Workload**

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | CSE — Faculty Workload (Even Sem 2024-25) | [CSE Even Workload 24-25](https://atme.edu.in/wp-content/uploads/2025/02/CSE_24-25_EVEN_Workload.xlsx-CSE-Work-Load-.pdf) |
| 2 | CSE — Faculty Workload (Odd Sem 2024-25) | [CSE Odd Workload 24-25](https://atme.edu.in/wp-content/uploads/2024/08/CSE_ODD_WorkLoad_AY_24-25.pdf) |

[Computer Science and Engineering — AIML](/p/administration/academic-timetable-and-teaching-load)

**Academic Time-Table**

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | CSE-AIML — 6th Sem Time Table (2025-26) | [CSE-AIML 6th Sem TT 2025-26](https://atme.edu.in/wp-content/uploads/2026/02/CSE-AIML_6TH_SEM_TT_AY_2025_26.pdf) |
| 2 | CSE-AIML — 3rd Sem Time Table (2024-25) | [CSE-AIML 3rd Sem TT 2024-25](https://atme.edu.in/wp-content/uploads/2024/08/ATME_CSE-AIML_3rd-semester-time-table.pdf) |

**Workload**

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | CSE-AIML — Faculty Workload | [CSE-AIML Workload](https://atme.edu.in/wp-content/uploads/2026/02/WORKLOAD.pdf) |

[Computer Science and Engineering — Design](/p/administration/academic-timetable-and-teaching-load)

**Academic Time-Table**

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | CSD — 4th Semester Time Table | [CSD 4th Sem](https://atme.edu.in/wp-content/uploads/2026/02/CSD-4th-sem.pdf) |
| 2 | CSD — 6th Semester Time Table | [CSD 6th Sem](https://atme.edu.in/wp-content/uploads/2026/02/CSD-6th-sem.pdf) |
| 3 | CSD — 8th Semester Time Table | [CSD 8th Sem](https://atme.edu.in/wp-content/uploads/2026/02/CSD-8th-sem-1.pdf) |
| 4 | CSD / Cyber Security — 3rd Sem Time Table | [CSD CY 3rd Sem TT](https://atme.edu.in/wp-content/uploads/2024/08/Cyber-Security-and-CSD-3rd-Sem-TT-1.pdf) |

[Computer Science and Engineering — Cyber Security](/p/administration/academic-timetable-and-teaching-load)

**Academic Time-Table**

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | Cyber Security & CSD — 3rd Sem Time Table | [CY-CSD 3rd Sem TT](https://atme.edu.in/wp-content/uploads/2024/08/Cyber-Security-and-CSD-3rd-Sem-TT-1.pdf) |

[Computer Science and Engineering — Data Science](/p/administration/academic-timetable-and-teaching-load)

**Academic Time-Table**

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | CSE-DS — Time Table (Even Sem 2025-26) | [CSE-DS TT Even 25-26](https://atme.edu.in/wp-content/uploads/2026/02/CSE-Data-Scinece-TT-25-26-Even.pdf) |
| 2 | CSE-DS — Time Table (Odd Sem 2024-25) | [CSE-DS TT Odd 24-25](https://atme.edu.in/wp-content/uploads/2024/08/CSE_TT_AY_DS_2024-25ODD.pdf) |

**Workload**

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | CSE-DS — Faculty Workload (Even Sem 2025-26) | [CSE-DS Workload Even 25-26](https://atme.edu.in/wp-content/uploads/2026/02/CSE-Data-Science-Workload-25-26-Even.pdf) |

[Electronics and Communication Engineering](/p/administration/academic-timetable-and-teaching-load)

**Academic Time-Table**

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | ECE — Time Table (Even Sem 2025-26) | [ECE TT Even Sem 25-26](https://atme.edu.in/wp-content/uploads/2026/02/ECE_TT_2025-26_EVEN-SEM.pdf) |
| 2 | ECE — Time Table (Even Sem 2024-25) | [ECE TT Even Sem 24-25](https://atme.edu.in/wp-content/uploads/2025/02/Timetable_2024-25_even_sem_ECE.pdf) |
| 3 | ECE — 3A/B Time Table (2024-25) | [ECE 3A-B TT 24-25](https://atme.edu.in/wp-content/uploads/2024/08/3A-B-TIME-TABLE-AY-24-25-V1.pdf) |

**Workload**

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | ECE — Faculty Workload | [ECE Workload](https://atme.edu.in/wp-content/uploads/2025/02/workload_rotated.pdf) |

[Electrical and Electronics Engineering](/p/administration/academic-timetable-and-teaching-load)

**Academic Time-Table**

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | EEE — Time Table (Even Sem 2025-26) | [EEE TT Even Sem 25-26](https://atme.edu.in/wp-content/uploads/2026/02/Timetable_Even-Semester_AY-2025-26.pdf) |
| 2 | EEE — III Semester Time Table (2024-25) | [EEE III Sem TT 24-25](https://atme.edu.in/wp-content/uploads/2024/08/III-Semester-Time-Table_AY-2024-25.pdf) |

**Workload**

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | EEE — Faculty Workload (2024-25) | [EEE Faculty Workload 24-25](https://atme.edu.in/wp-content/uploads/2024/08/EEE-Faculty-workload_AY_2024-25.pdf) |

[Mechanical Engineering](/p/administration/academic-timetable-and-teaching-load)

**Academic Time-Table**

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | Mechanical — 3rd Semester Time Table | [ME 3rd Sem TT](https://atme.edu.in/wp-content/uploads/2024/08/3rd-Sem-Time-Table.pdf) |

**Workload**

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | Mechanical — Faculty Workload (Odd Sem 2024-25) | [ME Odd Workload 24-25](https://atme.edu.in/wp-content/uploads/2024/08/ATME_ME-_Odd-sem_-Workload_2024-25.pdf) |

[Master of Computer Applications (MCA)](/p/administration/academic-timetable-and-teaching-load)

**Academic Time-Table**

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | MCA — Time Table (2025-26) | [MCA TT 2025-26](https://atme.edu.in/wp-content/uploads/2026/02/TT-2025-26.pdf) |

**Workload**

| Sl. No. | Document | Preview |
| --- | --- | --- |
| 1 | MCA — Workload (II Semester) | [MCA Workload II Sem](https://atme.edu.in/wp-content/uploads/2024/08/Workload-IISEM.pdf) |
`;

const bestTeacherBody = `
# Best Teacher Awards

Every year on Teachers' Day and Engineering Day, ATME College of Engineering
honours faculty members whose teaching, research and student-mentorship have
made the strongest impact across the academic year.

#### [Best Teacher - AY 2024-25](/p/best-teacher-awards)

**Teachers' Day & Engineering Day — 2025**

- Combined celebration of Teachers' Day (5 Sep) and Engineering Day (15 Sep).
- Best Teacher Awards presented across departments based on student feedback, academic performance and contributions to research.
- Cultural programmes, felicitation of senior faculty and tribute to Sir M. Visvesvaraya.

[Read the full event report (PDF)](https://atme.edu.in/wp-content/uploads/2026/02/Teachers-Engineers-day-2025-Report.pdf)

#### [Best Teacher - AY 2023-24](/p/best-teacher-awards)

**Teachers' Day & Engineering Day — 2024**

- College-wide celebration recognising outstanding teaching and mentorship.
- Awards presented to top-rated faculty from every department.
- Student-organised cultural programmes and felicitation of long-serving staff.

[Read the full event report (PDF)](https://atme.edu.in/wp-content/uploads/2025/11/Teachers-day-report-2024.pdf)

#### [Best Teacher - AY 2022-23](/p/best-teacher-awards)

**Teachers' Day & Engineering Day — 2023**

- Best Teacher Awards presented to faculty from every department.
- Tribute to Sir M. Visvesvaraya on Engineering Day with student talks and exhibits.
- Cultural events and felicitation of senior faculty members.

![Best Teacher 2023 — group photo](https://atme.edu.in/wp-content/uploads/2025/11/bt3-300x200.jpg)

![Best Teacher 2023 — award ceremony](https://atme.edu.in/wp-content/uploads/2025/11/bt4-300x183.jpg)

![Best Teacher 2023 — felicitation](https://atme.edu.in/wp-content/uploads/2025/11/bt2-150x150.jpg)

![Best Teacher 2023 — awardees](https://atme.edu.in/wp-content/uploads/2025/11/bt1-150x150.jpg)

#### [Best Teacher - AY 2021-22](/p/best-teacher-awards)

**Teachers' Day & Engineering Day — 2022**

- Joint Teachers' Day and Engineering Day celebration on campus.
- Best Teacher Awards presented to faculty selected through student feedback.
- Student speeches, cultural performances and tribute to Sir M. Visvesvaraya.

![Teachers' Day 2022](https://atme.edu.in/wp-content/uploads/2025/11/ATME-T-E-Day-1-300x201.jpg)

![Teachers' Day 2022](https://atme.edu.in/wp-content/uploads/2025/11/ATME-T-E-Day-2-300x192.jpg)

![Teachers' Day 2022](https://atme.edu.in/wp-content/uploads/2025/11/ATME-T-E-Day-3-300x203.jpg)

![Teachers' Day 2022](https://atme.edu.in/wp-content/uploads/2025/11/ATME-T-E-Day-5-300x154.jpg)

![Teachers' Day 2022](https://atme.edu.in/wp-content/uploads/2025/11/ATME-T-E-Day-6-300x212.jpg)

#### [Best Teacher - AY 2019-20](/p/best-teacher-awards)

**Teachers' Day & Engineering Day — 2020**

- Annual Teachers' Day and Engineering Day celebrated on campus.
- Best Teachers honoured from each department.
- Faculty achievements and student tributes highlighted during the ceremony.

![Teachers' Day 2020](https://atme.edu.in/wp-content/uploads/2022/05/1-1024x576-1.jpg)

![Teachers' Day 2020](https://atme.edu.in/wp-content/uploads/2022/05/3-1024x589-1.jpg)

![Teachers' Day 2020](https://atme.edu.in/wp-content/uploads/2022/05/2-1024x547-1.jpg)

![Teachers' Day 2020](https://atme.edu.in/wp-content/uploads/2022/05/5-1024x585-1.jpg)

![Teachers' Day 2020](https://atme.edu.in/wp-content/uploads/2022/05/4-1024x614-1.jpg)

#### [Best Teacher - AY 2018-19](/p/best-teacher-awards)

**Teachers' Day & Engineering Day — 2019**

- Faculty members recognised across departments for academic excellence.
- Student-led cultural programmes and felicitation of senior teachers.
- Tribute to Sir M. Visvesvaraya marking Engineering Day.

![Teachers' Day 2019](https://atme.edu.in/wp-content/uploads/2022/05/TD-1.png)

![Teachers' Day 2019](https://atme.edu.in/wp-content/uploads/2022/05/TD-2.png)

![Teachers' Day 2019](https://atme.edu.in/wp-content/uploads/2022/05/TD-3.png)

![Teachers' Day 2019](https://atme.edu.in/wp-content/uploads/2022/05/TD-4.png)

#### [Best Teacher - AY 2017-18](/p/best-teacher-awards)

**Teachers' Day & Engineering Day — 2018**

- Best Teacher Awards presented to faculty for excellence in teaching and research.
- Felicitation of senior faculty and cultural performances by students.

![Teachers' Day 2018](https://atme.edu.in/wp-content/uploads/2022/05/tex-1.jpg)

#### [Best Teacher - AY 2016-17](/p/best-teacher-awards)

**Teachers' Day & Engineering Day — 2017**

- Annual Teachers' Day celebrated with Best Teacher Awards.
- Felicitation of faculty and tribute to Sir M. Visvesvaraya on Engineering Day.

![Teachers' Day 2017](https://atme.edu.in/wp-content/uploads/2022/05/1-8.png)
`;

Object.assign(pageBodyOverrides, {
  "about-us/about-college": `
# About College

ATME College of Engineering Mysuru, established in 2010, is recognized by AICTE New Delhi and affiliated to Visvesvaraya Technological University, Belagavi, Karnataka. The college **offers 10 UG programs** and two postgraduate programs. ATMECE has been accredited by the National Board of Accreditation (NBA). ATMECE is NABL accredited under ISO/IEC 17025:2017 for Civil Engineering Laboratory.

The college has been honored as "The Best Emerging Private Engineering College in Karnataka" along with "Most Promising Upcoming Private Engineering Colleges in Karnataka" for two consecutive years. It also holds QS I-Gauge Gold Ranking status and has been recognized as one of the "Swachh Institutes of the Country." ATMECE is NAAC accredited with an A+ grade and is one among seven engineering colleges in Karnataka to achieve this rating during its first cycle. All departments at the institute have established recognized research centres. The institute has secured over Rs. 5 crores in external funding for various research and consultancy projects. The institute has collaborations with more than twenty-five industries worldwide.
  `.trim(),
  "iqac": iqacBody.trim(),
  "atme-on-google-maps": googleMapsBody.trim(),
  "professional-body-membership": professionalBodyMembershipBody.trim(),
  "administration/governance-institutional-support-and-financial-resources": governanceBody.trim(),
  "nba-governance_institutional-_support-and-financial-resources": governanceBody.trim(),
  "student-support-system": studentSupportBody.trim(),
  "administration/calendar-of-events-coe": coeBody.trim(),
  "coe-all": coeBody.trim(),
  "administration/a-ims": aimsBody.trim(),
  "a-ims": aimsBody.trim(),
  "administration/academic-timetable-and-teaching-load": ttBody.trim(),
  "academic-timetable-and-teaching-load": ttBody.trim(),
  "best-teacher-awards": bestTeacherBody.trim(),
});

const SC_KEY = "atme-student-council";
const studentCouncilBody = `
# Student Council

#### [About Student Council](/p/${SC_KEY})

The student's council of ATME College of Engineering aims at evolving a holistic approach to enhance students' life at the campus. The Student Council would take up the responsibility of building the Institute's brand image in the learners' mind and would constantly strive towards enriching congenial and enlightening experience among their students' fraternity. It is a students' forum that would inculcate desirable attitude, leadership qualities, social skills, cultural talents and focuses on the overall development of each individual student at the Institute.

The Student Council exists to promote the quality of student life within and outside the institute. It is a support system for the holistic development of the students and works in liaison with the offices of the Deans and respective Departments of the Institute. The Student Council functions under the supervision of the Dean-Student Affairs duly coordinated by the Faculty Coordinators of the Student Council from each Department.

#### [Objectives of the Student's Council](/p/${SC_KEY})

To make the students participate in the development of the Institute and develop their career, personality and organizational skills through interactive programs with the faculty, administration and society.

#### [Student Council Members - Institute Level](/p/${SC_KEY})

| Sl. No. | Name | Council Post | Department | Phone Number |
| --- | --- | --- | --- | --- |
| 1 | HARSHA V S | PRESIDENT | ECE | 9380619700 |
| 2 | RAHUL M G | VICE PRESIDENT | ECE | 9663799107 |
| 3 | KISHOR M | GENERAL SECRETARY | AIML | 9886651313 |
| 4 | NIKHITHA L | GENERAL SECRETARY (Non-technical) | MCA | 9380414678 |
| 5 | SARAHA S R | Joint SECRETARY | EEE | 9380653893 |
| 6 | DEEKSHA S | TRESURER | DS | 9933595659 |
| 7 | YASHAS VADAGA | CULTURAL HEAD | AIML | 7204860706 |
| 8 | ANKUSH SAI GOWDA | CULTURAL SECRETARY (1st. YEAR) | CSE | 8792058607 |
| 9 | YASHASWINI MC | CULTURAL SECRETARY (2nd. YEAR) | EEE | 7760468609 |
| 10 | ADITHYA M | CULTURAL SECRETARY (3th. YEAR) | AIML | 8867251018 |
| 11 | SOLIN JAMES | CULTURAL SECRETARY (Non-technical) | MBA | 7353028868 |
| 12 | PRAJWAL | SPORTS HEAD (4th. YEAR) | MECH | 7892083091 |
| 13 | TANSHU P | SPORTS SECRETARY (1st. YEAR) | DATA SCIENCE | 8310584350 |
| 14 | ANKITHA A P | SPORTS SECRETARY (2nd. YEAR) | EEE | 9591565916 |
| 15 | AKSHAY S D | SPORTS SECRETARY (3rd. YEAR) | CSE | 7892253463 |
| 16 | VARSHA K | SPORTS SECRETARY (Non-technical) | BCA | 7259973916 |
| 17 | NIDA NAWAZ KHAN | PLACEMENT SECRETARY (Circuit branch) | AIML | 9019983925 |
| 18 | DIVYASSHREE M N | PLACEMENT SECRETARY (Non-circuit branch) | Civil | 9964283672 |
| 19 | VIGNESH S | PLACEMENT SECRETARY (Non-technical) | MCA | 8762232582 |
| 20 | SUMA S ROLLI | PR and MEDIA | EEE | 7760360815 |

#### [Student Council Members - Department Level](/p/${SC_KEY})

[pdfviewer width="1200px" height="800px"]https://old.atme.edu.in/wp-content/uploads/2023/01/Department-Student-Council.pdf[/pdfviewer]

#### [Term of Office Bearers](/p/${SC_KEY})

- The term of Office Bearers of Institute Student Council should be for one academic calendar year of the institute. Any council member may at any time be removed from office by recall. He or she may be removed on the grounds that he/she is not fulfilling his/her responsibilities or lack in leadership abilities or violating institutional policies.
- Institute Student Council shall stand dissolved when the term of the members expires.
- Management may dissolve the Student Council before the expiry of its term under the following circumstances:
  - If a significant number of Council members have been implicated in a severe violation of the college's code of conduct.
  - If irregularities in the functioning of the Council.
  - When a member is removed from office or resigns, the vacancy created should be filled according to the protocols.

#### [Roles of the Members of the Institute Student Council](/p/${SC_KEY})

**President**

- The President shall have the general responsibility for coordinating the activities of the Student Council and for directing and overseeing the response to the affairs of the student
- To help the students to plan, implement and evaluate the activities of the association under his/her charge and give proper guidance and directions to the student
- To act as official spokesperson for the council in its relations with the students and the Institute
- To convene council meetings and to manage the council members' work.
- Oversees his/her associations efforts (along with Vice-president) on student activity events and planning, budget allocation, etc. and reports directly to Dean-SA and Faculty

**Vice President**

- The Vice-Presidents are responsible for assisting the President, and when the President is absent from a meeting she assumes the role of the President for that meeting.
- Oversees his/her associations efforts (along with President) on student activity events and planning, budget allocation, etc. and reports directly to Dean-SA and Faculty

**General Secretary**

- The Secretary shall be responsible for recording the
- Over sees operations of Institutes Student Council (along with Joint Secretary) and reports directly to Dean-SA and Faculty Coordinators.

**Joint Secretary**

Over sees operations of Institutes Student Council (along with General Secretary) and reports directly to Dean-SA and Faculty Coordinators.

**Treasurer**

Oversees the financial proceedings of events and obtains financial authorization from Principal and Dean-SA.

**Secretary-Cultural**

- Prepare event schedule in consultation with Cultural Committee
- Ensure event Displays on the notice
- Prepare a report on cultural
- Over sees the Cultural proceedings of events and obtains authorization for events from Institute Student Council.

**Secretary-Sports**

- Prepare event schedule in consultation with Sports Committee
- Ensure event Displays on the notice
- Prepare a report on cultural
- Over sees the Sports proceedings of events and obtains authorization for events from Institute Student Council.

**Secretary-Placement (Circuit Branch & Non-Circuit Branch)**

- Oversees the Placements Coordinates with the CGP and Student Council

**Secretary PR & Media**

Over sees the matters of Public Relations including Inviting Guests, Sponsorship, Publicity and Media Presence during events and obtains authorization for requisites from Institute Student Council.

#### [Selection Process of Institute Student Council](/p/${SC_KEY})

- The Dean, Student Affairs will be the Presiding Officer for conducting the Selection of the Office bearers of the Institute Students Council.
- The date of selection process will be intimated by the Presiding Officer, which will normally be during the beginning of every academic
- The Faculty–in–Charge of the class will go to the class and intimate the selection.
- Institute Level Student Council office bearers may be selected as follows:
  - Un-opposed nomination to office
  - In case of contention, election by members of Department Student
- All office bearers will be appointed under the condition that no more than 2 members shall be from the same department in the institute student council.
`;

Object.assign(pageBodyOverrides, {
  [SC_KEY]: studentCouncilBody.trim(),
  "library-3/staff-details-2": "",
  "sports/staff-details": `## Staff Details

**Teaching staff Details**

| Sl. No. | Name | Designation | Qualification | Specialization |
| --- | --- | --- | --- | --- |
| 01 | Dr. Muralidhar M P | Director of Physical Education | M.P.Ed., K-SET., Ph.D. | Cricket / Softball |

![Dr. Muralidhar M P](/__l5e/assets-v1/34980cd7-cc51-4009-a80a-8648cb44389f/dr-muralidhar-m-p.jpg)

**Contact Details**

|     |     |
| --- | --- |
| **Email ID** | [dr.muralidharmp_sports@atme.edu.in](mailto:dr.muralidharmp_sports@atme.edu.in) |
| **Google Scholar ID** | [https://scholar.google.co.in/citations?user=VEaKaW8AAAAJ](https://scholar.google.co.in/citations?user=VEaKaW8AAAAJ) |
| **Orcid ID** | [http://www.orcid.org/0000-0003-2175-5026](http://www.orcid.org/0000-0003-2175-5026) |
| **Vidwan ID** | [https://vidwan.inflibnet.ac.in/profile/297333](https://vidwan.inflibnet.ac.in/profile/297333) |

**Supporting Staff**

| Sl. No. | Name | Designation | Qualification | Specialization |
| --- | --- | --- | --- | --- |
| 01 | Mr. Raghavendra M A | Attender | SSLC | – |
`.trim(),
  "library-3/opac-online-public-access-catalogue-koha-library-automation-software": `## Library Automation Software: KOHA

**Features of KOHA ATME:**

[pdfviewer width="800px" height="500px"]/__l5e/assets-v1/991447f6-9a9c-4a47-8c92-f76468f96a87/KOHA-features-Version-25.05.10.pdf[/pdfviewer]

### OPAC – KOHA

**OPAC : Online Public Access Catalogue (KOHA Library Automation Software) : Fully Automated**

**[Click Here](http://118.151.209.133:8001/)**

**How to access OPAC:**

[pdfviewer width="800px" height="500px"]/__l5e/assets-v1/2c81c8d7-a625-41f4-8e61-e71c1016a31c/OPAC-Features-Usage-manual.pdf[/pdfviewer]
`.trim(),
});






export function getBodyOverride(key: string): string | null {
  const k = key.replace(/^\/+|\/+$/g, "").toLowerCase();
  return pageBodyOverrides[k] ?? null;
}
