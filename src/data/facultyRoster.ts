// Every faculty/staff member who has a profile route, per department.
// Shared by the profile route (lookup), /sitemap.xml (one URL per person —
// staff profiles aren't linked from the directory, so a link crawl misses
// them) and canonical tags for people listed under several departments.

import { departments, type Faculty } from "./departments";
import {
  cseAllFaculty, eceAllFaculty, eeeAllFaculty, meAllFaculty, ceAllFaculty, dsAllFaculty,
  cseStaff, eceStaff, eeeStaff, meStaff, ceStaff, dsStaff,
  aimlAllFaculty, csdAllFaculty, cyAllFaculty, mcaAllFaculty, mbaAllFaculty,
  aimlStaff, csdStaff, cyStaff, mcaStaff, mbaStaff,
} from "./allFaculty";

export const ALL_BY_DEPT: Record<string, Faculty[]> = {
  cse: [...cseAllFaculty, ...cseStaff],
  ece: [...eceAllFaculty, ...eceStaff],
  eee: [...eeeAllFaculty, ...eeeStaff],
  me: [...meAllFaculty, ...meStaff],
  ce: [...ceAllFaculty, ...ceStaff],
  ds: [...dsAllFaculty, ...dsStaff],
  aiml: [...aimlAllFaculty, ...aimlStaff],
  csd: [...csdAllFaculty, ...csdStaff],
  cy: [...cyAllFaculty, ...cyStaff],
  mca: [...mcaAllFaculty, ...mcaStaff],
  mba: [...mbaAllFaculty, ...mbaStaff],
};

/** Everyone whose profile renders under /departments/<deptSlug>/faculty/<id>. */
export const facultyPool = (deptSlug: string, deptFaculty: Faculty[]): Faculty[] => [
  ...deptFaculty,
  ...(ALL_BY_DEPT[deptSlug] ?? []),
];

const profilePath = (deptSlug: string, id: string) => `/departments/${deptSlug}/faculty/${id}`;

// Same person listed twice under one department with different ids; the
// value is the id the department's faculty list links to.
const DUPLICATE_IDS: Record<string, string> = {
  "ms-arpitha-m-s": "arpitha-m-s",
  "dr-anitha-d-b": "dr-anitha-d-b-new",
  "dr-vinod-kumar-p": "dr-vinod-kumar-p-2",
  "mr-j-n-karthik": "j-n-karthik",
};

// A person listed under several departments gets one canonical profile: the
// first department in site order (departments.ts) that lists them.
const HOME_PATH: Record<string, string> = {};
for (const dept of departments) {
  for (const f of facultyPool(dept.slug, dept.faculty)) {
    const id = f.id ? (DUPLICATE_IDS[f.id] ?? f.id) : undefined;
    if (id && !HOME_PATH[id]) HOME_PATH[id] = profilePath(dept.slug, id);
  }
}

/** Canonical profile path for a faculty id, if that person has a profile. */
export const homeProfilePath = (id: string): string | undefined => {
  const key = id.toLowerCase();
  return HOME_PATH[DUPLICATE_IDS[key] ?? key];
};

/** One canonical profile path per person, for the sitemap. */
export const allHomeProfilePaths = (): string[] => [...new Set(Object.values(HOME_PATH))];
