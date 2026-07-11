// Default, accordion-friendly markdown content used when a department's
// canonical sub-page has no scraped content yet. Keyed by canonical key
// (see canonicalSections.ts). Each value has multiple H3 sections so that
// AccordionedContent renders a proper accordion (>= 2 sections).
//
// The {{DEPT}} token is replaced with the department's display name.

export const CANONICAL_FALLBACK: Record<string, string> = {
  "industry-interface": `
### Overview

The Department of {{DEPT}} maintains an active Industry Interface cell that
bridges classroom learning with real-world engineering practice. Through
formal MoUs, visiting-expert programs, internships and joint projects, our
students gain exposure to cutting-edge tools, workflows and domain problems
solved by leading employers.

### Industry MoUs & Partnerships

The department has signed Memoranda of Understanding with reputed industry
partners covering joint curriculum delivery, faculty exchange,
student internships and sponsored final-year projects. These partnerships
are reviewed every academic year and refreshed in consultation with the
Board of Studies.

### Industrial Visits & Field Trips

Every semester students participate in supervised industrial visits to
manufacturing units, R&D centres and operational facilities relevant to
their year of study. Visit reports are evaluated as part of the
professional-practice component and shared in the department library.

### Expert Talks & Guest Lectures

Senior engineers, scientists and entrepreneurs from partner organisations
deliver guest lectures and short workshops on current technology trends,
industry-grade tools and recruitment expectations. Talks are aligned with
the running semester's course outcomes.

### Internship & Training Programs

Students are placed in 4 – 12 week structured internships during their
summer and winter breaks. The department maintains a rolling internship
database and an internal mentor for each student to ensure that learning
outcomes are tracked and graded.

### Industry-Sponsored Projects

Selected final-year project teams work on problem statements proposed by
our industry partners. These projects are co-supervised by an internal
faculty mentor and an external industry mentor, and culminate in a joint
evaluation and demonstration.
`,

  "co-curricular": `
### Overview

Co-curricular and extracurricular activities at the Department of {{DEPT}}
are designed to develop technical depth, leadership, communication and
teamwork beyond the prescribed syllabus.

### Student Technical Clubs / Forum

The department's student forum organises regular hands-on workshops,
hackathons, coding contests, design challenges and paper-presentation
events. The forum is run by students and mentored by faculty
coordinators.

### Professional Society Chapters

Active student chapters of relevant professional bodies (e.g. IEEE, ISTE,
CSI, IETE, IEI, SAE — as applicable to {{DEPT}}) provide a platform for
membership, technical magazines, certification programs and inter-college
events.

### Workshops & Skill-Development Programs

Short-term workshops on emerging tools and technologies are conducted
every semester. Recent themes include AI/ML, IoT, embedded systems,
electric vehicles, sustainable design, advanced manufacturing and
industry-grade software — adapted for each branch.

### Inter-Collegiate Competitions

Students regularly participate and win prizes in inter-collegiate technical
fests, project contests, model exhibitions, sports events and cultural
competitions. Faculty mentors travel with the teams and submit a detailed
participation report.

### Social Outreach & Community Activities

Through NSS units, blood-donation drives, village adoption programs,
energy/awareness campaigns and clean-campus initiatives, students develop
social responsibility alongside their technical training.

### Cultural & Sports Activities

Annual cultural fests, sports meets and inter-departmental tournaments
provide a balanced student experience. Achievements are celebrated at the
annual department day.
`,

  "research-initiative": `
### Overview

Research at the Department of {{DEPT}} is driven by sponsored projects,
faculty publications, student innovation and active collaborations with
academia and industry. Our focus areas are reviewed annually and aligned
with national priority programs.

### Thrust Areas

The department's identified thrust areas guide faculty research,
sponsored proposals and student final-year projects. Current focus spans
emerging technologies, sustainability, automation and applied design
relevant to {{DEPT}}.

### Sponsored & Funded Projects

Faculty members regularly apply for funded research projects from
agencies such as AICTE, VGST, KSCST, VTU and DST. A central research
committee tracks active grants and supports proposal preparation.

### Publications

Faculty and research scholars publish in Scopus / Web of Science indexed
journals and reputed international conferences. A consolidated list of
publications is maintained department-wise and updated every semester.

### Patents & IPR

The department encourages disclosure of novel ideas; an in-house IPR cell
guides faculty and students through provisional filing, drafting and
prosecution of patents.

### Research Collaborations

The department has active collaborations with academic institutions and
industry R&D centres for joint research, student exchange and access to
specialised testing facilities.

### Student Research & Innovation

Undergraduate and postgraduate students are encouraged to pursue funded
mini-projects, KSCST/SPP submissions, design competitions and innovation
challenges under faculty mentorship.
`,

  "achievements": `
### Overview

The Department of {{DEPT}} celebrates a strong record of student and
faculty achievements across academics, technical competitions, sports and
cultural events.

### Student Academic Achievements

University rank holders, top scorers and merit-list students from each
batch are recognised at the annual department day. Subject-wise toppers
are also acknowledged each semester.

### Technical Competitions

Our students have secured prizes at inter-collegiate hackathons, project
contests, design challenges and model exhibitions organised by reputed
institutions and professional bodies.

### Faculty Recognitions

Faculty members of the department have received best-paper awards, doctoral
recognitions, certifications and invited-speaker engagements from national
and international forums.

### Sports & Cultural Achievements

Department teams and individual students have represented the college at
university and state-level sports tournaments and inter-collegiate
cultural fests.
`,

  "innovative-teaching": `
### Overview

The Department of {{DEPT}} blends traditional chalk-and-talk instruction
with modern, technology-enabled pedagogy. This page lists the specific
teaching methodologies, ICT tools, virtual experiments and classroom
practices adopted by the faculty — distinct from the student-facing
course materials available under "Student Learning Centric".

### Teaching Methodologies Adopted

| Sl. No. | Methodology | Purpose | Frequency |
| --- | --- | --- | --- |
| 1 | Chalk & Talk with ICT board | Concept building | Every class |
| 2 | Flipped Classroom | Active engagement | 2 per course |
| 3 | Think-Pair-Share | Peer learning | Weekly |
| 4 | Problem-Based Learning | Application skills | Per module |
| 5 | Case-Study Discussion | Industry relevance | 1 per unit |
| 6 | Group Seminars | Communication skills | 1 per semester |
| 7 | Mini-Project | Experiential learning | 1 per course |
| 8 | NPTEL / SWAYAM Integration | Self-paced learning | Continuous |

### ICT Tools & Software in Use

| Sl. No. | Tool / Platform | Usage |
| --- | --- | --- |
| 1 | Google Classroom / MS Teams | Course delivery & assignments |
| 2 | Mentimeter / Kahoot (SRS) | Live polls and quizzes |
| 3 | Zoom / Google Meet | Online and hybrid sessions |
| 4 | OBS Studio / Camtasia | Recorded lecture videos |
| 5 | MATLAB / Scilab / Python | Simulation & analysis |
| 6 | Virtual Labs (vlab.co.in) | Remote experimentation |
| 7 | YouTube channel of dept. | Lab demo videos |

### Student Response System (SRS)

Real-time polling and quiz tools (Mentimeter, Kahoot, Google Forms) are
used during lectures to gauge understanding and trigger discussion.

| Sl. No. | Course | Tool Used | Semester |
| --- | --- | --- | --- |
| 1 | Core Course – I | Mentimeter | Odd |
| 2 | Core Course – II | Kahoot | Even |
| 3 | Elective – I | Google Forms | Odd |

### Virtual Labs

Selected experiments are conducted using nationally hosted virtual labs
to supplement physical laboratory sessions.

| Sl. No. | Experiment | Host | Academic Year |
| --- | --- | --- | --- |
| 1 | Introductory experiment set | vlab.co.in | 2022-23 |
| 2 | Advanced experiment set | vlab.co.in | 2023-24 |
| 3 | Domain-specific module | NPTEL Virtual Lab | 2024-25 |

### Flipped Classroom Sessions

Pre-recorded lectures and reading material are shared a week in advance;
class time is used for problem solving and discussion.

| Sl. No. | Course | Topic | Semester |
| --- | --- | --- | --- |
| 1 | Core Course – I | Selected unit | Odd |
| 2 | Core Course – II | Selected unit | Even |
| 3 | Elective | Selected unit | Odd |

### Lab Demonstration Videos

Faculty-recorded lab walkthroughs are published on the department channel
and shared with students before the lab session.

| Sl. No. | Lab | No. of Videos | Mode |
| --- | --- | --- | --- |
| 1 | Foundational Lab | 8 | YouTube / OneDrive |
| 2 | Programming / Domain Lab | 10 | YouTube / OneDrive |
| 3 | Advanced Lab | 6 | YouTube / OneDrive |

### Continuous Assessment Mix

| Component | Weightage | Frequency |
| --- | --- | --- |
| Internal Assessment Tests | 50% | 3 per semester |
| Assignments | 15% | 2 per course |
| Quizzes / SRS | 10% | Continuous |
| Seminar / Presentation | 10% | 1 per course |
| Mini-Project / Activity | 15% | 1 per course |

### Feedback & Continuous Improvement

Course-end and mid-semester feedback is collected from students; action
plans are reviewed in department meetings and tracked through the
academic-audit cycle. Faculty undergo regular FDPs on modern pedagogy
and outcome-based education to refine these practices.
`,
};
