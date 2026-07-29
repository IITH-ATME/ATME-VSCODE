// Auto-generated 2026-27 (7th semester) student learning resource tables.
// Source: department-provided course-list documents + course material zips
// (Course Module / Lesson Plan / Notes / Lab Manual / PPT), rehosted on
// Cloudflare R2 under pdfs/student-learning-2026-27/<dept>/<code>/.
// Regenerate via the same course/file mapping if new semester resources arrive.
import type { ParsedSection, DocKind } from "@/routes/departments.$slug.$page";

const HEADING = "Academic Year 2026-27 (7th Semester)";
// Physics/Chemistry render this as a single page-level title above their
// per-subject sub-tables (see StudentLearningCentric), rather than as each
// individual CourseResourceTable's own heading bar.
export const FIRST_YEAR_TABLE_TITLE = "Academic Year 2026-27 First Year";

function row(sl: string, code: string, title: string, docs: Partial<Record<DocKind, string>>) {
  const out: Record<string, { label: string; url: string }[]> = {};
  for (const [k, url] of Object.entries(docs)) {
    if (url) out[k] = [{ label: "Download", url }];
  }
  return { sl, code, title, docs: out as any };
}

export const STUDENT_LEARNING_2026_27: Record<string, ParsedSection[]> = {
  "aiml": [{
    heading: HEADING,
    rows: [
      row("01", "BAI701", "Deep Learning", { module: "/pdfs/student-learning-2026-27/aiml/BAI701/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/aiml/BAI701/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/aiml/BAI701/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/aiml/BAI701/PPT.zip" }),
      row("02", "BAI702", "Machine Learning – II", { module: "/pdfs/student-learning-2026-27/aiml/BAI702/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/aiml/BAI702/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/aiml/BAI702/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/aiml/BAI702/PPT.zip" }),
      row("03", "BCS703", "Cryptography & Network Security", { module: "/pdfs/student-learning-2026-27/aiml/BCS703/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/aiml/BCS703/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/aiml/BCS703/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/aiml/BCS703/PPT.zip" }),
      row("04", "BCS714D", "Big Data Analytics", { module: "/pdfs/student-learning-2026-27/aiml/BCS714D/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/aiml/BCS714D/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/aiml/BCS714D/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/aiml/BCS714D/PPT.zip" }),
      row("05", "BCV755A", "Road Safety Engineering", { module: "/pdfs/student-learning-2026-27/aiml/BCV755A/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/aiml/BCV755A/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/aiml/BCV755A/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/aiml/BCV755A/PPT.zip" }),
      row("06", "BEE755B", "Energy Conservation and Audit", { module: "/pdfs/student-learning-2026-27/aiml/BEE755B/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/aiml/BEE755B/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/aiml/BEE755B/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/aiml/BEE755B/PPT.zip" }),
      row("07", "BCI786", "Major Project Phase-II", {  }),
    ],
  }],
  "csd": [{
    heading: HEADING,
    rows: [
      row("01", "BCG701", "Robotic Process Automation Design and Development (UiPath)", { module: "/pdfs/student-learning-2026-27/csd/BCG701/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/csd/BCG701/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/csd/BCG701/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/csd/BCG701/PPT.zip" }),
      row("02", "BCS702", "Parallel Computing", { module: "/pdfs/student-learning-2026-27/csd/BCS702/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/csd/BCS702/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/csd/BCS702/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/csd/BCS702/PPT.zip" }),
      row("03", "BCS703", "Cryptography and Network Security", { module: "/pdfs/student-learning-2026-27/csd/BCS703/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/csd/BCS703/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/csd/BCS703/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/csd/BCS703/PPT.zip" }),
      row("04", "BCS714A", "Deep Learning", { module: "/pdfs/student-learning-2026-27/csd/BCS714A/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/csd/BCS714A/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/csd/BCS714A/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/csd/BCS714A/PPT.zip" }),
      row("05", "BCV755B", "Conservation of Natural Resources", { module: "/pdfs/student-learning-2026-27/csd/BCV755B/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/csd/BCV755B/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/csd/BCV755B/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/csd/BCV755B/PPT.zip" }),
    ],
  }],
  "cse": [{
    heading: HEADING,
    rows: [
      row("01", "BCS701", "Internet of Things", { module: "/pdfs/student-learning-2026-27/cse/BCS701/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/cse/BCS701/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/cse/BCS701/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/cse/BCS701/PPT.zip" }),
      row("02", "BCS702", "Parallel Computing", { module: "/pdfs/student-learning-2026-27/cse/BCS702/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/cse/BCS702/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/cse/BCS702/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/cse/BCS702/PPT.zip" }),
      row("03", "BCS703", "Cryptography and Network Security", { module: "/pdfs/student-learning-2026-27/cse/BCS703/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/cse/BCS703/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/cse/BCS703/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/cse/BCS703/PPT.zip" }),
      row("04", "BCS714D", "Big Data Analytics", { module: "/pdfs/student-learning-2026-27/cse/BCS714D/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/cse/BCS714D/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/cse/BCS714D/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/cse/BCS714D/PPT.zip" }),
      row("05", "BCS714A", "Deep Learning", { module: "/pdfs/student-learning-2026-27/cse/BCS714A/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/cse/BCS714A/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/cse/BCS714A/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/cse/BCS714A/PPT.zip" }),
    ],
  }],
  "ce": [{
    heading: HEADING,
    rows: [
      row("01", "BCV701", "Design of Steel Structures", { module: "/pdfs/student-learning-2026-27/ce/BCV701/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/ce/BCV701/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/ce/BCV701/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/ce/BCV701/PPT.zip" }),
      row("02", "BCV702", "Estimation & Contract Management", { module: "/pdfs/student-learning-2026-27/ce/BCV702/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/ce/BCV702/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/ce/BCV702/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/ce/BCV702/PPT.zip" }),
      row("03", "BCV703", "Pre-Stressed Concrete", { module: "/pdfs/student-learning-2026-27/ce/BCV703/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/ce/BCV703/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/ce/BCV703/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/ce/BCV703/PPT.zip" }),
      row("04", "BCV714A", "Intelligent Transport System", { module: "/pdfs/student-learning-2026-27/ce/BCV714A/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/ce/BCV714A/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/ce/BCV714A/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/ce/BCV714A/PPT.zip" }),
      row("05", "BEE755B", "Energy Conservation Audit", { module: "/pdfs/student-learning-2026-27/ce/BEE755B/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/ce/BEE755B/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/ce/BEE755B/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/ce/BEE755B/PPT.zip" }),
    ],
  }],
  "cy": [{
    heading: HEADING,
    rows: [
      row("01", "BCY701", "Vulnerability Assessment and Penetration Testing", { module: "/pdfs/student-learning-2026-27/cy/BCY701/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/cy/BCY701/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/cy/BCY701/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/cy/BCY701/PPT.zip" }),
      row("02", "BCY702", "Ethical Hacking", { module: "/pdfs/student-learning-2026-27/cy/BCY702/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/cy/BCY702/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/cy/BCY702/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/cy/BCY702/PPT.zip" }),
      row("03", "BIC703", "Machine Learning", { module: "/pdfs/student-learning-2026-27/cy/BIC703/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/cy/BIC703/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/cy/BIC703/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/cy/BIC703/PPT.zip" }),
      row("04", "BCY714A", "Introduction to Cyber Forensics", { module: "/pdfs/student-learning-2026-27/cy/BCY714A/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/cy/BCY714A/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/cy/BCY714A/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/cy/BCY714A/PPT.zip" }),
      row("05", "BME755A", "Introduction to Non-Traditional Machining", { module: "/pdfs/student-learning-2026-27/cy/BME755A/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/cy/BME755A/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/cy/BME755A/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/cy/BME755A/PPT.zip" }),
    ],
  }],
  "ds": [{
    heading: HEADING,
    rows: [
      row("01", "BAD702", "Statistical Machine Learning for Data Science", { module: "/pdfs/student-learning-2026-27/ds/BAD702/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/ds/BAD702/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/ds/BAD702/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/ds/BAD702/PPT.zip" }),
      row("02", "BAD714B", "Business Analytics", { module: "/pdfs/student-learning-2026-27/ds/BAD714B/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/ds/BAD714B/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/ds/BAD714B/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/ds/BAD714B/PPT.zip" }),
      row("03", "BCS703", "Cryptography & Network Security", { module: "/pdfs/student-learning-2026-27/ds/BCS703/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/ds/BCS703/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/ds/BCS703/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/ds/BCS703/PPT.zip" }),
      row("04", "BDS701", "Parallel Computing", { module: "/pdfs/student-learning-2026-27/ds/BDS701/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/ds/BDS701/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/ds/BDS701/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/ds/BDS701/PPT.zip" }),
      row("05", "BME755A", "Introduction to Non-Traditional Machining", { module: "/pdfs/student-learning-2026-27/ds/BME755A/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/ds/BME755A/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/ds/BME755A/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/ds/BME755A/PPT.zip" }),
    ],
  }],
  "ece": [{
    heading: HEADING,
    rows: [
      row("01", "BEC701", "Microwave Engineering and Antenna Theory", { module: "/pdfs/student-learning-2026-27/ece/BEC701/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/ece/BEC701/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/ece/BEC701/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/ece/BEC701/PPT.zip" }),
      row("02", "BEC702", "Computer Networks and Protocols", { module: "/pdfs/student-learning-2026-27/ece/BEC702/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/ece/BEC702/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/ece/BEC702/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/ece/BEC702/PPT.zip" }),
      row("03", "BEC703", "Wireless Communication Systems", { module: "/pdfs/student-learning-2026-27/ece/BEC703/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/ece/BEC703/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/ece/BEC703/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/ece/BEC703/PPT.zip" }),
      row("04", "BEC714B", "Computer and Network Security", { module: "/pdfs/student-learning-2026-27/ece/BEC714B/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/ece/BEC714B/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/ece/BEC714B/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/ece/BEC714B/PPT.zip" }),
      row("05", "BEC714C", "Automotive Electronics", { module: "/pdfs/student-learning-2026-27/ece/BEC714C/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/ece/BEC714C/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/ece/BEC714C/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/ece/BEC714C/PPT.zip" }),
      row("06", "BCV755A", "Road Safety Engineering", { module: "/pdfs/student-learning-2026-27/ece/BCV755A/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/ece/BCV755A/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/ece/BCV755A/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/ece/BCV755A/PPT.zip" }),
    ],
  }],
  "eee": [{
    heading: HEADING,
    rows: [
      row("01", "BEE701", "Switchgear and Protection", { module: "/pdfs/student-learning-2026-27/eee/BEE701/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/eee/BEE701/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/eee/BEE701/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/eee/BEE701/PPT.zip" }),
      row("02", "BEE702", "Industrial Drives and Applications", { module: "/pdfs/student-learning-2026-27/eee/BEE702/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/eee/BEE702/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/eee/BEE702/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/eee/BEE702/PPT.zip" }),
      row("03", "BEE703", "Power System Analysis – II", { module: "/pdfs/student-learning-2026-27/eee/BEE703/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/eee/BEE703/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/eee/BEE703/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/eee/BEE703/PPT.zip" }),
      row("04", "BEE714D", "Big Data Analytics in Power Systems", { module: "/pdfs/student-learning-2026-27/eee/BEE714D/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/eee/BEE714D/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/eee/BEE714D/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/eee/BEE714D/PPT.zip" }),
      row("05", "BME755A", "Introduction to Non Traditional Machining", { module: "/pdfs/student-learning-2026-27/eee/BME755A/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/eee/BME755A/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/eee/BME755A/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/eee/BME755A/PPT.zip" }),
    ],
  }],
  "me": [{
    heading: HEADING,
    rows: [
      row("01", "BME701", "Finite Element Methods", { module: "/pdfs/student-learning-2026-27/me/BME701/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/me/BME701/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/me/BME701/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/me/BME701/PPT.zip" }),
      row("02", "BME702", "Hydraulics and Pneumatics", { module: "/pdfs/student-learning-2026-27/me/BME702/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/me/BME702/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/me/BME702/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/me/BME702/PPT.zip" }),
      row("03", "BME703", "Control Engineering", { module: "/pdfs/student-learning-2026-27/me/BME703/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/me/BME703/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/me/BME703/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/me/BME703/PPT.zip" }),
      row("04", "BME714A", "Additive Manufacturing", { module: "/pdfs/student-learning-2026-27/me/BME714A/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/me/BME714A/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/me/BME714A/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/me/BME714A/PPT.zip" }),
      row("05", "BCV755B", "Conversion of Natural Resources", { module: "/pdfs/student-learning-2026-27/me/BCV755B/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/me/BCV755B/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/me/BCV755B/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/me/BCV755B/PPT.zip" }),
    ],
  }],
  "physics": [
    {
      heading: "APPLIED MATHEMATICS FOR I & II SEMESTER",
      rows: [
        row("01", "1BMATE101", "Differential Calculus and Linear Algebra: EEE Stream", { module: "/pdfs/student-learning-2026-27/physics/1BMATE101/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/physics/1BMATE101/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/physics/1BMATE101/Notes-Lab-Manual.pdf", ppt: "/pdfs/student-learning-2026-27/physics/1BMATE101/PPT.pptx" }),
        row("02", "1BMATS101", "Calculus and Linear Algebra: CSE Stream", { module: "/pdfs/student-learning-2026-27/physics/1BMATS101/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/physics/1BMATS101/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/physics/1BMATS101/Notes-Lab-Manual.pdf", ppt: "/pdfs/student-learning-2026-27/physics/1BMATS101/PPT.pptx" }),
        row("03", "1BMATM101", "Differential Calculus and Linear Algebra: ME", { module: "/pdfs/student-learning-2026-27/physics/1BMATM101/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/physics/1BMATM101/Lesson-Plan.docx", notes: "/pdfs/student-learning-2026-27/physics/1BMATM101/Notes-Lab-Manual.pdf", ppt: "/pdfs/student-learning-2026-27/physics/1BMATM101/PPT.pptx" }),
        row("04", "1BMATE101", "Differential Calculus and Linear Algebra: EEE", { module: "/pdfs/student-learning-2026-27/physics/1BMATE101/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/physics/1BMATE101/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/physics/1BMATE101/Notes-Lab-Manual.pdf", ppt: "/pdfs/student-learning-2026-27/physics/1BMATE101/PPT.pptx" }),
        row("05", "1BMATC101", "Differential Calculus and Linear Algebra: CV", { module: "/pdfs/student-learning-2026-27/physics/1BMATC101/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/physics/1BMATC101/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/physics/1BMATC101/Notes-Lab-Manual.pdf", ppt: "/pdfs/student-learning-2026-27/physics/1BMATC101/PPT.pptx" }),
      ],
    },
    {
      heading: "APPLIED PHYSICS",
      rows: [
        row("01", "1BPHEC102 & 202", "Quantum Physics and Electronics Sensors", { module: "/pdfs/student-learning-2026-27/physics/1BPHEC102-202/Course-Module.docx", lesson: "/pdfs/student-learning-2026-27/physics/1BPHEC102-202/Lesson-Plan.docx", notes: "/pdfs/student-learning-2026-27/physics/1BPHEC102-202/Notes-Lab-Manual.pdf" }),
        row("02", "1BPHYS102 & 202", "Quantum Physics and Applications", { module: "/pdfs/student-learning-2026-27/physics/1BPHYS102-202/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/physics/1BPHYS102-202/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/physics/1BPHYS102-202/Notes-Lab-Manual.zip" }),
        row("03", "1BPHEE102 & 202", "Electrical Engineering Materials", { module: "/pdfs/student-learning-2026-27/physics/1BPHEE102-202/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/physics/1BPHEE102-202/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/physics/1BPHEE102-202/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/physics/1BPHEE102-202/PPT.zip" }),
        row("04", "1BPHYC102 & 202", "Physics for Sustainable Structural Systems", { module: "/pdfs/student-learning-2026-27/physics/1BPHYC102-202/Course-Module.docx", lesson: "/pdfs/student-learning-2026-27/physics/1BPHYC102-202/Lesson-Plan.docx", notes: "/pdfs/student-learning-2026-27/physics/1BPHYC102-202/Notes-Lab-Manual.pdf" }),
        row("05", "1BPHYM102 & 202", "Physics of Materials", { module: "/pdfs/student-learning-2026-27/physics/1BPHYM102-202/Course-Module.docx", lesson: "/pdfs/student-learning-2026-27/physics/1BPHYM102-202/Lesson-Plan.docx", notes: "/pdfs/student-learning-2026-27/physics/1BPHYM102-202/Notes-Lab-Manual.pdf" }),
      ],
    },
    {
      heading: "EMERGING TECHNOLOGY COURSES",
      rows: [
        row("01", "1BAIA103 & 203", "Introduction to AI & Applications", { module: "/pdfs/student-learning-2026-27/physics/1BAIA103-203/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/physics/1BAIA103-203/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/physics/1BAIA103-203/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/physics/1BAIA103-203/PPT.zip" }),
      ],
    },
    {
      heading: "COMPUTER AIDED ENGINEERING DRAWING",
      rows: [
        row("01", "1BCEDEC103 & 203", "Computer-Aided Engineering Drawing for ECE Stream", { module: "/pdfs/student-learning-2026-27/physics/1BCEDEC103-203/Course-Module.pdf", notes: "/pdfs/student-learning-2026-27/physics/1BCEDEC103-203/Notes-Lab-Manual.zip" }),
        row("02", "1BCEDE103 & 203", "Computer-Aided Engineering Drawing for EEE Stream", { module: "/pdfs/student-learning-2026-27/physics/1BCEDE103-203/Course-Module.pdf", notes: "/pdfs/student-learning-2026-27/physics/1BCEDE103-203/Notes-Lab-Manual.zip" }),
        row("03", "1BCEDC103 & 203", "Computer-Aided Engineering Drawing for CV Stream", { module: "/pdfs/student-learning-2026-27/physics/1BCEDC103-203/Course-Module.pdf", notes: "/pdfs/student-learning-2026-27/physics/1BCEDC103-203/Notes-Lab-Manual.zip" }),
        row("04", "1BCEDM103 & 203", "Computer-Aided Engineering Drawing for ME Stream", { module: "/pdfs/student-learning-2026-27/physics/1BCEDM103-203/Course-Module.pdf", notes: "/pdfs/student-learning-2026-27/physics/1BCEDM103-203/Notes-Lab-Manual.zip" }),
        row("05", "1BCEDS103 & 203", "Computer-Aided Engineering Drawing for CSE Stream", { module: "/pdfs/student-learning-2026-27/physics/1BCEDS103-203/Course-Module.pdf", notes: "/pdfs/student-learning-2026-27/physics/1BCEDS103-203/Notes-Lab-Manual.zip" }),
      ],
    },
    {
      heading: "ENGINEERING SCIENCE COURSES I & II",
      rows: [
        row("01", "1BESC104A", "Building Sciences and Mechanics", { module: "/pdfs/student-learning-2026-27/physics/1BESC104A/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/physics/1BESC104A/Lesson-Plan.docx", notes: "/pdfs/student-learning-2026-27/physics/1BESC104A/Notes-Lab-Manual.pdf", ppt: "/pdfs/student-learning-2026-27/physics/1BESC104A/PPT.zip" }),
        row("02", "1BESC104B", "Introduction to Electrical Engineering", { module: "/pdfs/student-learning-2026-27/physics/1BESC104B/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/physics/1BESC104B/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/physics/1BESC104B/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/physics/1BESC104B/PPT.zip" }),
        row("03", "1BESC104C", "Introduction to Electronics and Communication Engineering", { module: "/pdfs/student-learning-2026-27/physics/1BESC104C/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/physics/1BESC104C/Lesson-Plan.docx", notes: "/pdfs/student-learning-2026-27/physics/1BESC104C/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/physics/1BESC104C/PPT.pptx" }),
        row("04", "1BESC104D", "Introduction to Mechanical Engineering", { module: "/pdfs/student-learning-2026-27/physics/1BESC104D/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/physics/1BESC104D/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/physics/1BESC104D/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/physics/1BESC104D/PPT.zip" }),
        row("05", "1BESC104E", "Essentials of Information Technology", { module: "/pdfs/student-learning-2026-27/physics/1BESC104E/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/physics/1BESC104E/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/physics/1BESC104E/Notes-Lab-Manual.zip" }),
      ],
    },
    {
      heading: "PROGRAMMME SPECIFICA COURSES I & II",
      rows: [
        row("01", "1BCIV105 & 205", "Engineering Mechanics", { module: "/pdfs/student-learning-2026-27/physics/1BCIV105-205/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/physics/1BCIV105-205/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/physics/1BCIV105-205/Notes-Lab-Manual.pdf", ppt: "/pdfs/student-learning-2026-27/physics/1BCIV105-205/PPT.pdf" }),
        row("02", "1BECE105-205", "Fundamentals of Electronics & Communication Engineering", { module: "/pdfs/student-learning-2026-27/physics/1BECE105-205/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/physics/1BECE105-205/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/physics/1BECE105-205/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/physics/1BECE105-205/PPT.pptx" }),
        row("03", "1BEIT105 & 205", "Programming in C", { module: "/pdfs/student-learning-2026-27/physics/1BEIT105-205/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/physics/1BEIT105-205/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/physics/1BEIT105-205/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/physics/1BEIT105-205/PPT.zip" }),
      ],
    },
    {
      heading: "PROGRAMMING LANGUAGE COURSES",
      rows: [
        row("01", "1BPLC105B & 205B", "Python Programming", { module: "/pdfs/student-learning-2026-27/physics/1BPLC105B-205B/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/physics/1BPLC105B-205B/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/physics/1BPLC105B-205B/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/physics/1BPLC105B-205B/PPT.zip" }),
        row("02", "1BPLC205E & 105E", "Introduction to C Programming", { module: "/pdfs/student-learning-2026-27/physics/1BPLC205E-105E/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/physics/1BPLC205E-105E/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/physics/1BPLC205E-105E/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/physics/1BPLC205E-105E/PPT.zip" }),
      ],
    },
    {
      heading: "HUMANITIES COURSES",
      rows: [
        row("01", "1BENG106 & 206", "Communication Skills", { module: "/pdfs/student-learning-2026-27/physics/1BENG106-206/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/physics/1BENG106-206/Lesson-Plan.docx", ppt: "/pdfs/student-learning-2026-27/physics/1BENG106-206/PPT.zip" }),
        row("02", "1BSKS106 & 206", "Soft Skills", { module: "/pdfs/student-learning-2026-27/physics/1BSKS106-206/Course-Module.pdf" }),
        row("03", "1BICO107 & 207", "Indian Constitution & Engineering Ethics", { module: "/pdfs/student-learning-2026-27/physics/1BICO107-207/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/physics/1BICO107-207/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/physics/1BICO107-207/Notes-Lab-Manual.pdf", ppt: "/pdfs/student-learning-2026-27/physics/1BICO107-207/PPT.zip" }),
        row("04", "1BKSK109 (BKSK107)", "Samskrutika Kannada", { module: "/pdfs/student-learning-2026-27/physics/1BKSK109-BKSK107/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/physics/1BKSK109-BKSK107/Lesson-Plan.docx", notes: "/pdfs/student-learning-2026-27/physics/1BKSK109-BKSK107/Notes-Lab-Manual.pdf" }),
        row("05", "1BKBK109 (BKBK107)", "Balake Kannada", { module: "/pdfs/student-learning-2026-27/physics/1BKBK109-BKBK107/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/physics/1BKBK109-BKBK107/Lesson-Plan.docx" }),
      ],
    },
    {
      heading: "PROGRAMME SPECIFICA LAB COURSES I & II",
      rows: [
        row("01", "1BECEL107", "Fundamentals of Electronics & Communication Engineering (Lab)", { module: "/pdfs/student-learning-2026-27/physics/1BECEL107/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/physics/1BECEL107/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/physics/1BECEL107/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/physics/1BECEL107/PPT.pptx" }),
      ],
    },
    {
      heading: "PROJECT BASED LEARNING COURSES",
      rows: [
        row("01", "1BIDTL158", "Innovation and Design Thinking Lab", { module: "/pdfs/student-learning-2026-27/physics/1BIDTL158/Course-Module.zip", notes: "/pdfs/student-learning-2026-27/physics/1BIDTL158/Notes-Lab-Manual.pdf" }),
      ],
    },
  ],
  "chemistry": [
    {
      heading: "APPLIED MATHEMATICS FOR I & II SEMESTER",
      rows: [
        row("01", "1BMATE101", "Differential Calculus and Linear Algebra: EEE Stream", { module: "/pdfs/student-learning-2026-27/chemistry/1BMATE101/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/chemistry/1BMATE101/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/chemistry/1BMATE101/Notes-Lab-Manual.pdf", ppt: "/pdfs/student-learning-2026-27/chemistry/1BMATE101/PPT.pptx" }),
        row("02", "1BMATS101", "Calculus and Linear Algebra: CSE Stream", { module: "/pdfs/student-learning-2026-27/chemistry/1BMATS101/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/chemistry/1BMATS101/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/chemistry/1BMATS101/Notes-Lab-Manual.pdf", ppt: "/pdfs/student-learning-2026-27/chemistry/1BMATS101/PPT.pptx" }),
        row("03", "1BMATM101", "Differential Calculus and Linear Algebra: ME", { module: "/pdfs/student-learning-2026-27/chemistry/1BMATM101/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/chemistry/1BMATM101/Lesson-Plan.docx", notes: "/pdfs/student-learning-2026-27/chemistry/1BMATM101/Notes-Lab-Manual.pdf", ppt: "/pdfs/student-learning-2026-27/chemistry/1BMATM101/PPT.pptx" }),
        row("04", "1BMATE101", "Differential Calculus and Linear Algebra: EEE", { module: "/pdfs/student-learning-2026-27/chemistry/1BMATE101/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/chemistry/1BMATE101/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/chemistry/1BMATE101/Notes-Lab-Manual.pdf", ppt: "/pdfs/student-learning-2026-27/chemistry/1BMATE101/PPT.pptx" }),
        row("05", "1BMATC101", "Differential Calculus and Linear Algebra: CV", { module: "/pdfs/student-learning-2026-27/chemistry/1BMATC101/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/chemistry/1BMATC101/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/chemistry/1BMATC101/Notes-Lab-Manual.pdf", ppt: "/pdfs/student-learning-2026-27/chemistry/1BMATC101/PPT.pptx" }),
      ],
    },
    {
      heading: "APPLIED CHEMISTRY",
      rows: [
        row("01", "1BCHEC102 & 202", "Applied Chemistry for Sustainable Structures & Material Design (CV Stream)", { module: "/pdfs/student-learning-2026-27/chemistry/1BCHEC102-202/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/chemistry/1BCHEC102-202/Lesson-Plan.docx", notes: "/pdfs/student-learning-2026-27/chemistry/1BCHEC102-202/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/chemistry/1BCHEC102-202/PPT.zip" }),
        row("02", "1BCHES102 & 202", "Applied Chemistry for Smart Systems", { module: "/pdfs/student-learning-2026-27/chemistry/1BCHES102-202/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/chemistry/1BCHES102-202/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/chemistry/1BCHES102-202/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/chemistry/1BCHES102-202/PPT.zip" }),
        row("03", "1BCHEM102 & 202", "Applied Chemistry for Advanced Metal Protection & Sustainable Energy Systems", { module: "/pdfs/student-learning-2026-27/chemistry/1BCHEM102-202/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/chemistry/1BCHEM102-202/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/chemistry/1BCHEM102-202/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/chemistry/1BCHEM102-202/PPT.zip" }),
        row("04", "1BCHEE102 & 202", "Applied Chemistry for Emerging Electronics & Futuristic Devices (EEE & ECE Stream)", { module: "/pdfs/student-learning-2026-27/chemistry/1BCHEE102-202/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/chemistry/1BCHEE102-202/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/chemistry/1BCHEE102-202/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/chemistry/1BCHEE102-202/PPT.zip" }),
      ],
    },
    {
      heading: "EMERGING TECHNOLOGY COURSES",
      rows: [
        row("01", "1BAIA103 & 203", "Introduction to AI & Applications", { module: "/pdfs/student-learning-2026-27/chemistry/1BAIA103-203/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/chemistry/1BAIA103-203/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/chemistry/1BAIA103-203/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/chemistry/1BAIA103-203/PPT.zip" }),
      ],
    },
    {
      heading: "COMPUTER AIDED ENGINEERING DRAWING",
      rows: [
        row("01", "1BCEDEC103 & 203", "Computer-Aided Engineering Drawing for ECE Stream", { module: "/pdfs/student-learning-2026-27/chemistry/1BCEDEC103-203/Course-Module.pdf", notes: "/pdfs/student-learning-2026-27/chemistry/1BCEDEC103-203/Notes-Lab-Manual.zip" }),
        row("02", "1BCEDE103 & 203", "Computer-Aided Engineering Drawing for EEE Stream", { module: "/pdfs/student-learning-2026-27/chemistry/1BCEDE103-203/Course-Module.pdf", notes: "/pdfs/student-learning-2026-27/chemistry/1BCEDE103-203/Notes-Lab-Manual.zip" }),
        row("03", "1BCEDC103 & 203", "Computer-Aided Engineering Drawing for CV Stream", { module: "/pdfs/student-learning-2026-27/chemistry/1BCEDC103-203/Course-Module.pdf", notes: "/pdfs/student-learning-2026-27/chemistry/1BCEDC103-203/Notes-Lab-Manual.zip" }),
        row("04", "1BCEDM103 & 203", "Computer-Aided Engineering Drawing for ME Stream", { module: "/pdfs/student-learning-2026-27/chemistry/1BCEDM103-203/Course-Module.pdf", notes: "/pdfs/student-learning-2026-27/chemistry/1BCEDM103-203/Notes-Lab-Manual.zip" }),
        row("05", "1BCEDS103 & 203", "Computer-Aided Engineering Drawing for CSE Stream", { module: "/pdfs/student-learning-2026-27/chemistry/1BCEDS103-203/Course-Module.pdf", notes: "/pdfs/student-learning-2026-27/chemistry/1BCEDS103-203/Notes-Lab-Manual.zip" }),
      ],
    },
    {
      heading: "ENGINEERING SCIENCE COURSES I & II",
      rows: [
        row("01", "1BESC104A", "Building Sciences and Mechanics", { module: "/pdfs/student-learning-2026-27/chemistry/1BESC104A/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/chemistry/1BESC104A/Lesson-Plan.docx", notes: "/pdfs/student-learning-2026-27/chemistry/1BESC104A/Notes-Lab-Manual.pdf", ppt: "/pdfs/student-learning-2026-27/chemistry/1BESC104A/PPT.zip" }),
        row("02", "1BESC104B", "Introduction to Electrical Engineering", { module: "/pdfs/student-learning-2026-27/chemistry/1BESC104B/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/chemistry/1BESC104B/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/chemistry/1BESC104B/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/chemistry/1BESC104B/PPT.zip" }),
        row("03", "1BESC104C", "Introduction to Electronics and Communication Engineering", { module: "/pdfs/student-learning-2026-27/chemistry/1BESC104C/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/chemistry/1BESC104C/Lesson-Plan.docx", notes: "/pdfs/student-learning-2026-27/chemistry/1BESC104C/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/chemistry/1BESC104C/PPT.pptx" }),
        row("04", "1BESC104D", "Introduction to Mechanical Engineering", { module: "/pdfs/student-learning-2026-27/chemistry/1BESC104D/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/chemistry/1BESC104D/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/chemistry/1BESC104D/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/chemistry/1BESC104D/PPT.zip" }),
        row("05", "1BESC104E", "Essentials of Information Technology", { module: "/pdfs/student-learning-2026-27/chemistry/1BESC104E/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/chemistry/1BESC104E/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/chemistry/1BESC104E/Notes-Lab-Manual.zip" }),
      ],
    },
    {
      heading: "PROGRAMMME SPECIFICA COURSES I & II",
      rows: [
        row("01", "1BCIV105 & 205", "Engineering Mechanics", { module: "/pdfs/student-learning-2026-27/chemistry/1BCIV105-205/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/chemistry/1BCIV105-205/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/chemistry/1BCIV105-205/Notes-Lab-Manual.pdf", ppt: "/pdfs/student-learning-2026-27/chemistry/1BCIV105-205/PPT.pdf" }),
        row("02", "1BECE105-205", "Fundamentals of Electronics & Communication Engineering", { module: "/pdfs/student-learning-2026-27/chemistry/1BECE105-205/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/chemistry/1BECE105-205/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/chemistry/1BECE105-205/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/chemistry/1BECE105-205/PPT.pptx" }),
        row("03", "1BEIT105 & 205", "Programming in C", { module: "/pdfs/student-learning-2026-27/chemistry/1BEIT105-205/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/chemistry/1BEIT105-205/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/chemistry/1BEIT105-205/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/chemistry/1BEIT105-205/PPT.zip" }),
      ],
    },
    {
      heading: "PROGRAMMING LANGUAGE COURSES",
      rows: [
        row("01", "1BPLC105B & 205B", "Python Programming", { module: "/pdfs/student-learning-2026-27/chemistry/1BPLC105B-205B/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/chemistry/1BPLC105B-205B/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/chemistry/1BPLC105B-205B/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/chemistry/1BPLC105B-205B/PPT.zip" }),
        row("02", "1BPLC205E & 105E", "Introduction to C Programming", { module: "/pdfs/student-learning-2026-27/chemistry/1BPLC205E-105E/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/chemistry/1BPLC205E-105E/Lesson-Plan.zip", notes: "/pdfs/student-learning-2026-27/chemistry/1BPLC205E-105E/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/chemistry/1BPLC205E-105E/PPT.zip" }),
      ],
    },
    {
      heading: "HUMANITIES COURSES",
      rows: [
        row("01", "1BENG106 & 206", "Communication Skills", { module: "/pdfs/student-learning-2026-27/chemistry/1BENG106-206/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/chemistry/1BENG106-206/Lesson-Plan.docx", ppt: "/pdfs/student-learning-2026-27/chemistry/1BENG106-206/PPT.zip" }),
        row("02", "1BSKS106 & 206", "Soft Skills", { module: "/pdfs/student-learning-2026-27/chemistry/1BSKS106-206/Course-Module.pdf" }),
        row("03", "1BICO107 & 207", "Indian Constitution & Engineering Ethics", { module: "/pdfs/student-learning-2026-27/chemistry/1BICO107-207/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/chemistry/1BICO107-207/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/chemistry/1BICO107-207/Notes-Lab-Manual.pdf", ppt: "/pdfs/student-learning-2026-27/chemistry/1BICO107-207/PPT.zip" }),
        row("04", "1BKSK109 (BKSK107)", "Samskrutika Kannada", { module: "/pdfs/student-learning-2026-27/chemistry/1BKSK109-BKSK107/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/chemistry/1BKSK109-BKSK107/Lesson-Plan.docx", notes: "/pdfs/student-learning-2026-27/chemistry/1BKSK109-BKSK107/Notes-Lab-Manual.pdf" }),
        row("05", "1BKBK109 (BKBK107)", "Balake Kannada", { module: "/pdfs/student-learning-2026-27/chemistry/1BKBK109-BKBK107/Course-Module.pdf", lesson: "/pdfs/student-learning-2026-27/chemistry/1BKBK109-BKBK107/Lesson-Plan.docx" }),
      ],
    },
    {
      heading: "PROGRAMME SPECIFICA LAB COURSES I & II",
      rows: [
        row("01", "1BECEL107", "Fundamentals of Electronics & Communication Engineering (Lab)", { module: "/pdfs/student-learning-2026-27/chemistry/1BECEL107/Course-Module.zip", lesson: "/pdfs/student-learning-2026-27/chemistry/1BECEL107/Lesson-Plan.pdf", notes: "/pdfs/student-learning-2026-27/chemistry/1BECEL107/Notes-Lab-Manual.zip", ppt: "/pdfs/student-learning-2026-27/chemistry/1BECEL107/PPT.pptx" }),
      ],
    },
    {
      heading: "PROJECT BASED LEARNING COURSES",
      rows: [
        row("01", "1BIDTL158", "Innovation and Design Thinking Lab", { module: "/pdfs/student-learning-2026-27/chemistry/1BIDTL158/Course-Module.zip", notes: "/pdfs/student-learning-2026-27/chemistry/1BIDTL158/Notes-Lab-Manual.pdf" }),
      ],
    },
  ],
};
