/** Map a department short code to its full, human-readable department name. */
const DEPT_FULL: Record<string, string> = {
  CSE: "Computer Science & Engineering Department",
  ECE: "Electronics & Communication Engineering Department",
  EEE: "Electrical & Electronics Engineering Department",
  ME: "Mechanical Engineering Department",
  CE: "Civil Engineering Department",
  DS: "Computer Science & Engineering (Data Science) Department",
  AIML: "Artificial Intelligence & Machine Learning Department",
  "AI&ML": "Artificial Intelligence & Machine Learning Department",
  CSD: "Computer Science & Design Department",
  CY: "Computer Science & Engineering (Cyber Security) Department",
  MCA: "Master of Computer Applications Department",
  MBA: "Master of Business Administration Department",
  BS: "Basic Sciences Department",
  PHY: "Physics Department",
  CHEM: "Chemistry Department",
  MATH: "Mathematics Department",
  Physics: "Physics Department",
  Chemistry: "Chemistry Department",
  Mathematics: "Mathematics Department",
};


/**
 * Expand any dept code (CE, CSE, etc.) appearing in a designation string to
 * its full department name. Matches whole-word codes after a comma, the word
 * "of", a slash, "Head", or "HOD"; also handles strings that end with the
 * bare code.
 */
export function expandDesignation(input: string | undefined | null): string {
  if (!input) return "";
  let out = input.trim();
  for (const [code, full] of Object.entries(DEPT_FULL)) {
    const escaped = code.replace(/[-/\\^$*+?.()|[\]{}&]/g, "\\$&");
    // Replace ", CE" or "of CE" or "/ CE" or "Head, CE" — preserve preceding punctuation/word.
    const re = new RegExp(`(,\\s*|\\bof\\s+|\\bin\\s+|/\\s*|\\bHead\\s+|\\bHOD\\s+)${escaped}\\b`, "g");
    out = out.replace(re, `$1${full}`);
    // Replace a trailing bare code like "Professor & Head, CSE" already handled above.
    // Also handle "(CE)" style.
    out = out.replace(new RegExp(`\\(\\s*${escaped}\\s*\\)`, "g"), `(${full})`);
  }
  return out;
}
