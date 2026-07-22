// Rehosted PDFs from atme.edu.in — served from the project CDN.
// Source list scraped from /circulars, /notifications, /mandatory-disclosure,
// /student-handbook, /employee-handbook, /hostel-policies, /admission-policy.
import map from "./pdfAssets.json";
import { resolveAssetUrl } from "@/lib/assetUrl";

export const PDF: Record<string, string> = map as Record<string, string>;

export function pdf(filename: string): string {
  const u = PDF[filename];
  if (!u) console.warn(`Missing rehosted PDF: ${filename}`);
  return resolveAssetUrl(u) || "#";
}

// Structured circulars list (mirrors order on atme.edu.in/circulars/)
export const circulars = [
  { title: "Higher Sem Fees Circular (3rd & 5th Sem) AY 2026-27", date: "06/07/2026", file: "higher-sem-fees-circular-3rd-5th-sem-ay-2026-27.pdf", year: "2026-27" },
  { title: "7th Sem Fee Circular AY 2026-27", date: "06/07/2026", file: "7th-sem-fee-circular-ay-2026-27.pdf", year: "2026-27" },
  { title: "Registration to B.E./B.Tech. Honours Degree Programme", date: "11/09/2025", file: "2637-Registration-to-B.E.-B.Tech_.-Honours-Degree-Programme.pdf", year: "2025-26" },
  { title: "2nd Year Fee Payment Circular", date: "28/08/2025", file: "2nd-year-fee-payment-circular.pdf", year: "2025-26" },
  { title: "Higher Semester Fees Circular", date: "28/08/2025", file: "higher-semester-fees-circular.pdf", year: "2025-26" },
  { title: "Higher Semester Fees Circular", date: "14/07/2025", file: "higher-semister-fees-circular-1.pdf", year: "2025-26" },
  { title: "Circular — Parents Teachers Meeting", date: "27/05/2025", file: "Circular-_-Parents-Teachers-meeting.pdf", year: "2024-25" },
  { title: "Honours Degree — Programme Details", date: "—", file: "ATME-VTU-Honours-Degree-Details.pdf", year: "2024-25" },
  { title: "Minor Degree — Programme Details", date: "—", file: "ATME-VTU-Minor-degree-Details.pdf", year: "2024-25" },
];

export const approvals = [
  { title: "AICTE Initial Approval", file: "AICTE-Initial-Approval.pdf" },
  { title: "AICTE Feedback", file: "AICTE_Feedback.pdf" },
  { title: "VTU Initial Approval (2010-11)", file: "VTU-Initial-Approval-2010-11.pdf" },
  { title: "VTU Affiliation 2025-2026", file: "VTU-Affiliation-2025-2026.pdf" },
  { title: "Government of Karnataka Approval", file: "Government-of-Karnataka-Approval-1.pdf" },
  { title: "ATME College of Engineering — NAAC Certificate", file: "A-T-M-E-College-of-Engineering_CERT.pdf" },
];

export const policies = [
  { title: "ATME Admission Policy", file: "18-ATME-Admission-Policy.pdf" },
  { title: "Reservation in Student Admission Policy", file: "15-ATME-Reservation-in-Student-Admission-Policy.pdf" },
  { title: "Hostel Rules & Regulations", file: "HOSTEL-Rules-Regulation-v3.pdf" },
  { title: "Student / Employee Handbook", file: "Handbook-3-3.pdf" },
  { title: "Mandatory Disclosure 2025-26", file: "Mandatory-Disclosure-2025-26.pdf" },
];
