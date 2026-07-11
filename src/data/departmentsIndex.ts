// Lightweight department index for sitewide nav, footer and listing pages.
// Importing the full `departments.ts` pulls in all faculty arrays and HOD
// metadata (~45 KB). The Layout/Footer/DeptStrip and resource listing pages
// only need slug/code/name/short, so they import from here instead and the
// heavy module is only loaded by routes that render full department detail.

export type DepartmentIndexEntry = {
  slug: string;
  code: string;
  name: string;
  short: string;
};

export const departmentsIndex: DepartmentIndexEntry[] = [
  { slug: "cse", code: "CSE", name: "Computer Science & Engineering", short: "Programming, algorithms, systems, AI, cybersecurity and full-stack engineering." },
  { slug: "aiml", code: "AI&ML", name: "Computer Science Engineering – Artificial Intelligence & Machine Learning", short: "Artificial intelligence, machine learning, deep learning, data-driven systems and intelligent automation." },
  { slug: "csd", code: "CSD", name: "Computer Science & Design", short: "Computing foundations, product design, user experience and human-centred software systems." },
  { slug: "cy", code: "CY", name: "Computer Science Engineering – Cyber Security", short: "Secure systems, digital forensics, ethical hacking, network security and cyber defence." },
  { slug: "ece", code: "ECE", name: "Electronics & Communication Engineering", short: "Signals, embedded systems, VLSI, communication and IoT." },
  { slug: "eee", code: "EEE", name: "Electrical & Electronics Engineering", short: "Power systems, electric machines, control and renewable energy." },
  { slug: "me", code: "ME", name: "Mechanical Engineering", short: "Design, thermal, manufacturing and robotics." },
  { slug: "ce", code: "CE", name: "Civil Engineering", short: "Structures, transportation and sustainable construction." },
  { slug: "ds", code: "DS", name: "CSE — Data Science", short: "Statistics, machine learning, data engineering and visualisation." },
  { slug: "bca", code: "BCA", name: "Bachelor of Computer Applications", short: "Undergraduate programme focused on computer applications, software development, databases and IT fundamentals." },
  { slug: "mca", code: "MCA", name: "Master of Computer Applications", short: "Postgraduate programme focused on application development, software engineering, databases and emerging computing technologies." },
  { slug: "mba", code: "MBA", name: "Master of Business Administration", short: "Postgraduate management programme covering finance, marketing, human resources, operations and entrepreneurship." },
  { slug: "physics", code: "PHY", name: "Physics", short: "Engineering Physics — fundamentals, laboratory work and application-oriented activities for first-year engineering students." },
  { slug: "chemistry", code: "CHEM", name: "Chemistry", short: "Engineering Chemistry — interdisciplinary teaching, research and well-equipped laboratory supporting first-year engineering programmes." },
  { slug: "mathematics", code: "MATH", name: "Mathematics", short: "Engineering Mathematics — strong basic foundation, bridge courses and remedial classes for first-year engineering students." },
  { slug: "humanities", code: "HUM", name: "Humanities", short: "Communication skills, language and soft-skills training for engineering students." },
];
