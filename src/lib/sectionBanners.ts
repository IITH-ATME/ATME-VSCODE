// Per-section banner images. Sourced from new.atme.edu.in so each page hero
// uses a relevant cover; the PageHero component overlays the teal wash + ATME
// logo at the same low opacity for visual consistency.
import collegeInfra from "@/assets/college-infra.jpg.asset.json";
import { resolveAssetUrl } from "@/lib/assetUrl";

const ROOT = "https://new.atme.edu.in/wp-content/uploads";

export const SECTION_BANNER = {
  about: `${ROOT}/2026/04/about-college.jpg`,
  research: `${ROOT}/2025/12/page-bnr-img19-min.jpg`,
  administration: `${ROOT}/2026/04/1920x500-Organization-Structure.jpg`,
  admissions: `${ROOT}/2026/04/1920x500-Admissions.jpg`,
  placements: `${ROOT}/2026/04/1920x500-Placement-Statistics.jpg`,
  recruiters: `${ROOT}/2026/04/1920x500-Our-Recruiters.jpg`,
  visionMission: `${ROOT}/2026/04/1920x500-vision-mission.jpg`,
  departments: `${ROOT}/2026/04/CSE-1.png`,
  campus: resolveAssetUrl(collegeInfra.url),
  women: `${ROOT}/2025/11/e-bl-img1-11-min.jpg`,
  resources: `${ROOT}/2025/11/e-bl-img1-8-min.jpg`,
  careers: `${ROOT}/2025/11/acc-5-min.jpg`,
  contact: `${ROOT}/2026/04/about-college.jpg`,
  achievements: `${ROOT}/2025/11/acc-1-min.jpg`,
} as const;


export type SectionKey = keyof typeof SECTION_BANNER;
