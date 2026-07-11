// Curated, ordered list of department sub-pages with short, screen-friendly
// labels. Mirrors the canonical pages on atme.edu.in for each department and
// drops duplicates, old/legacy and stub pages (e.g. faculty-details vs
// faculty-details-2, about-the-department vs about-the-department-2).
//
// The DeptSubNav uses this allowlist to:
//   1. show only the listed keys (in this exact order)
//   2. render the short label instead of the raw scraped page title
//   3. silently skip keys that aren't present in deptScraped.json

export type DeptPageItem = { key: string; label: string };

export const DEPT_PAGES: Record<string, DeptPageItem[]> = {
  cse: [
    { key: "about-the-department", label: "About" },
    { key: "cse-faculty-profile", label: "HOD Profile" },
    { key: "faculty-profiles", label: "Faculty" },
    { key: "cs-infrastructure", label: "Infrastructure" },
    { key: "research-initiative", label: "Research" },
    { key: "achievements-2", label: "Achievements" },
    { key: "industry-interface-3", label: "Industry Interface" },
    { key: "placement-details", label: "Placements" },
    { key: "cse-news-letter-2", label: "Newsletter" },
    { key: "cse-magzine", label: "Magazine" },
    { key: "innovative-teaching-learning-methods", label: "Teaching Methods" },
    { key: "teachers-teaching-analysis", label: "Teaching Analysis" },
    { key: "extra-curricular-activities", label: "Activities" },
    { key: "resources", label: "Resources" },
  ],
  ece: [
    { key: "about-the-department-2", label: "About" },
    { key: "ece-faculty-profile", label: "HOD Profile" },
    { key: "faculty-details-ece", label: "Faculty" },
    { key: "infrastructure", label: "Infrastructure" },
    { key: "research-initiatives", label: "Research" },
    { key: "achievements", label: "Achievements" },
    { key: "industry-interface", label: "Industry Interface" },
    { key: "placement-higher-studies", label: "Placements" },
    { key: "e-news-letter", label: "Newsletter" },
    { key: "ece-training-internships", label: "Training & Internships" },
    { key: "rd-for-students", label: "R&D for Students" },
    { key: "co-curricular-extracurricular-activities", label: "Activities" },
    { key: "resources", label: "Resources" },
  ],
  eee: [
    { key: "ee-about-the-department", label: "About" },
    { key: "eee-faculty-profile", label: "HOD Profile" },
    { key: "faculty-profiles", label: "Faculty" },
    { key: "infrastructure", label: "Infrastructure" },
    { key: "research-initiatives", label: "Research" },
    { key: "achievements", label: "Achievements" },
    { key: "ee-industry-interface", label: "Industry Interface" },
    { key: "placement-higher-studies", label: "Placements" },
    { key: "ee-e-news-letter", label: "Newsletter" },
    { key: "professional-society-activities", label: "Professional Society" },
    { key: "teachers-teaching-analysis", label: "Teaching Analysis" },
    { key: "co-curricular-extracurricular-activities", label: "Activities" },
    { key: "ee-counselling-module", label: "Counselling" },
    { key: "resources", label: "Resources" },
  ],
  me: [
    { key: "about-mechanical-department-2", label: "About" },
    { key: "mechanical-faculty-profile", label: "HOD Profile" },
    { key: "faculty-profiles", label: "Faculty" },
    { key: "infrastructure", label: "Infrastructure" },
    { key: "research-initiative", label: "Research" },
    { key: "achivements", label: "Achievements" },
    { key: "industry-interface", label: "Industry Interface" },
    { key: "placement", label: "Placements" },
    { key: "e-news-letter", label: "Newsletter" },
    { key: "counselling-module", label: "Counselling" },
    { key: "teachers-teaching-analysis", label: "Teaching Analysis" },
    { key: "co-curricular-extra-curricular-activities", label: "Activities" },
    { key: "resourses", label: "Resources" },
  ],
  ce: [
    { key: "about-the-department-2", label: "About" },
    { key: "cv-faculty-profile", label: "HOD Profile" },
    { key: "faculty-profiles", label: "Faculty" },
    { key: "civil-research-initiatives", label: "Research" },
    { key: "civil-achievements", label: "Achievements" },
    { key: "civil-industry-interface", label: "Industry Interface" },
    { key: "placement", label: "Placements" },
    { key: "ce-news-letter", label: "Newsletter" },
    { key: "counselling-module", label: "Counselling" },
    { key: "teachers-teaching-analysis", label: "Teaching Analysis" },
    { key: "co-curricular-extra-curricular-activities", label: "Activities" },
    { key: "civil-resources", label: "Resources" },
  ],
  aiml: [
    { key: "about-the-department", label: "About" },
    { key: "ai-ml-hods-message", label: "HOD Profile" },
    { key: "cse-faculty-profile-ai-ml", label: "Faculty" },
    { key: "coe-cse-aiml", label: "COE" },
    { key: "resources", label: "Resources" },
  ],
  csd: [
    { key: "cs-infrastructure", label: "Infrastructure" },
    { key: "cse-faculty-profile-csdesign", label: "Faculty" },
    { key: "resourses", label: "Resources" },
  ],
  ds: [
    { key: "about-the-department", label: "About" },
    { key: "ds-faculty-profile", label: "HOD Profile" },
    { key: "cseds-achievements", label: "Achievements" },
    { key: "data-science-industry-interface", label: "Industry Interface" },
    { key: "cseds-placements", label: "Placements" },
    { key: "cseds-innovative-teaching-learning-methods", label: "Teaching Methods" },
    { key: "coe-cse-ds", label: "COE" },
    { key: "cseds-resources", label: "Resources" },
  ],
  cy: [
    { key: "cyber-security-profiles", label: "Faculty" },
    { key: "cyber-security-resources", label: "Resources" },
  ],
  bca: [
    { key: "about-the-department", label: "About" },
    { key: "bca-hod-message", label: "HOD Profile" },
    { key: "bca-infrastructure", label: "Infrastructure" },
    { key: "bca-program-outcomes", label: "Program Outcomes" },
    { key: "bca-course-list", label: "Course List" },
    { key: "bca-scheme-syllabus", label: "Scheme & Syllabus" },
    { key: "bca-resources", label: "Resources" },
  ],
  mca: [
    { key: "mca-facultyprofiles", label: "Faculty" },
    { key: "mca-infrastructure", label: "Infrastructure" },
    { key: "mca-resources", label: "Resources" },

  ],
  mba: [
    { key: "mba-faculty-profile", label: "Faculty" },
    { key: "co-curricular-extracurricular-activities-mba", label: "Activities" },
    { key: "resources-mba", label: "Resources" },
  ],
  physics: [
    { key: "about-the-department", label: "About" },
    { key: "faculty-details-2", label: "Faculty" },
    { key: "physics-technical-staff", label: "Technical Staff" },
    { key: "physics-supporting-staff", label: "Supporting Staff" },
    { key: "infrastructure", label: "Infrastructure" },
    { key: "research-initiatives", label: "Research" },
    { key: "achievements", label: "Achievements" },
    { key: "co-curricular-extracurricular-activities", label: "Activities" },
    { key: "resources", label: "Resources" },
  ],
  chemistry: [
    { key: "chem-about-the-department", label: "About" },
    { key: "faculty-details-2", label: "Faculty" },
    { key: "chemistry-technical-staff", label: "Technical Staff" },
    { key: "chemistry-supporting-staff", label: "Supporting Staff" },
    { key: "infrastructure", label: "Infrastructure" },
    { key: "research-initiatives", label: "Research" },
    { key: "co-curricular-extracurricular-activities", label: "Activities" },
    { key: "resources", label: "Resources" },
  ],
  mathematics: [
    { key: "about-the-department", label: "About" },
    { key: "faculty-details", label: "Faculty" },
    { key: "mathematics-supporting-staff", label: "Supporting Staff" },
    { key: "infrastructure", label: "Infrastructure" },
    { key: "research-initiative", label: "Research" },
  ],


};

export function getDeptPages(slug: string): DeptPageItem[] | null {
  return DEPT_PAGES[slug] ?? null;
}
