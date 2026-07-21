// Auto-generated 2026-27 (7th semester) student learning resource tables.
// Source: department-provided course-list documents + course material zips
// (Course Module / Lesson Plan / Notes / Lab Manual / PPT), rehosted on
// Cloudflare R2 under pdfs/student-learning-2026-27/<dept>/<code>/.
// Regenerate via the same course/file mapping if new semester resources arrive.
import type { ParsedSection, DocKind } from "@/routes/departments.$slug.$page";

const HEADING = "Academic Year 2026-27 (7th Semester)";

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
};
