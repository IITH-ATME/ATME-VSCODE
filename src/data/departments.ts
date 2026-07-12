// Department data sourced from atme.edu.in directory pages.
// Faculty images are remote CDN URLs from the source site.
// Full CVs link back to the live profile page.
import { ceAllFaculty, cseAllFaculty, eceAllFaculty, eeeAllFaculty, meAllFaculty, mcaAllFaculty } from "./allFaculty";
import rajeshN from "@/assets/rajesh-n.png.asset.json";
import swathiCA from "@/assets/swathi-c-a.jpg.asset.json";



export type Faculty = {
  id: string;
  name: string;
  designation?: string;
  qualification?: string;
  doj?: string;
  image: string;
  cvUrl: string;
};

export type Document = { title: string; href: string };

export type Department = {
  slug: string;
  code: string;
  name: string;
  short: string;
  about: string;
  vision: string;
  mission: string[];
  peo: string[];
  po: string[];
  pso: string[];
  programmes?: { programme: string; degree: string; duration: string; intake: string }[];
  aboutBullets?: { label?: string; text?: string; children?: string[] }[];
  shortTermGoals?: string[];
  longTermGoals?: string[];
  hod?: {
    name: string;
    designation: string;
    image?: string;
    message: string;
    quote?: string;
    messageBullets?: { label?: string; text?: string; children?: string[] }[];
    closing?: string;
  };
  faculty: Faculty[];
  labs: { name: string; description: string }[];
  achievements: string[];
  research: string[];
  activities: string[];
  placements: { topRecruiters: string[]; highest: string; placementRate: string };
  documents: {
    facultyList: Document[];
    syllabus: Document[];
    timetable: Document[];
    newsletter: Document[];
    magazine: Document[];
    coe: Document[]; // calendar of events
  };
};

const eceFaculty: Faculty[] = [
  { id: "dr-l-basavaraj", name: "Dr. Basavaraj L", designation: "Principal", qualification: "Ph.D", doj: "01/02/2013", image: "/images/uploads/2022/10/BASAVARAJ.jpg", cvUrl: "https://atme.edu.in/dr-l-basavaraj/" },
  { id: "dr-prathibha-m-k", name: "Dr. Prathiba M K", designation: "Associate Professor & HOD", qualification: "Ph.D", image: "/images/uploads/2022/05/Prathiba-M-K.jpg", cvUrl: "https://atme.edu.in/dr-prathibha-m-k/" },
  { id: "dr-manjula-a-v", name: "Dr. Manjula A V", designation: "Associate Professor", qualification: "Ph.D", doj: "28/08/2025", image: "/images/uploads/2026/02/Manjula-A-V-1.jpg.jpeg", cvUrl: "https://atme.edu.in/dr-manjula-a-v/" },
  { id: "dr-veeraprathap-v", name: "Dr. Veeraprathap V", designation: "Associate Professor", qualification: "Ph.D", doj: "02/05/2024", image: "/images/uploads/2025/08/Dr.-Veeraprathap-V-2.jpg", cvUrl: "https://atme.edu.in/dr-veeraprathap-v/" },
  { id: "mrs-shalini-hanok", name: "Mrs. Shalini Hanok", designation: "Assistant Professor", qualification: "M.Tech", doj: "26/08/2022", image: "/images/uploads/2022/09/Dr.-Shalini-Hanok-2-1.jpg", cvUrl: "https://atme.edu.in/mrs-shalini-hanok/" },
  { id: "mr-guruprasad-k-n", name: "Mr. Guruprasad K N", designation: "Assistant Professor", qualification: "M.Tech in Digital Electronics & Communication Systems", doj: "", image: "/__l5e/assets-v1/7d51c4ae-bcfc-4b7f-b267-f33dde39c5c5/mr-guruprasad-k-n.png", cvUrl: "https://atme.edu.in/mr-guruprasad-k-n/" },
  { id: "mr-pradeep-kumar-y", name: "Mr. Pradeep Kumar Y", designation: "Assistant Professor", qualification: "M.Tech", doj: "15/07/2013", image: "/images/uploads/2022/09/Mr.-Pradeep-Kumar-Y-2.jpg", cvUrl: "https://atme.edu.in/mr-pradeep-kumar-y/" },
  { id: "chandra-shekar-p", name: "Mr. Chandra Shekar P", designation: "Assistant Professor", qualification: "M.Tech", doj: "15/07/2013", image: "/images/uploads/2025/08/Mr.-Chandra-Shekar-P-2.jpg", cvUrl: "https://atme.edu.in/chandra-shekar-p/" },
  { id: "mr-girish-m", name: "Mr. Girish M", designation: "Assistant Professor", qualification: "M.Tech", doj: "15/07/2015", image: "/images/uploads/2022/09/Mr.-Girish-M-2.jpg", cvUrl: "https://atme.edu.in/mr-girish-m/" },
  { id: "ms-anupama-shetter", name: "Ms. Anupama Shetter", designation: "Assistant Professor", qualification: "M.Tech", doj: "01/08/2017", image: "/images/uploads/2022/09/Mrs.-Anupama-Shetter-2.jpg", cvUrl: "https://atme.edu.in/ms-anupama-shetter/" },
  { id: "ms-mythri-r", name: "Ms. Mythri R", designation: "Assistant Professor", qualification: "M.Tech", doj: "30/06/2023", image: "/images/uploads/2023/07/Mythri.jpg", cvUrl: "https://atme.edu.in/ms-mythri-r/" },
  { id: "rajeev-gowda-r", name: "Mr. Rajeev Gowda R", designation: "Assistant Professor", qualification: "M.Tech", doj: "23/01/2023", image: "/images/uploads/2025/09/Mr.-Rajeev-Gowda-R-2.jpg", cvUrl: "https://atme.edu.in/rajeev-gowda-r/" },
  { id: "swetha-k-t", name: "Mrs. Swetha K T", designation: "Assistant Professor", qualification: "M.Tech", doj: "04/06/2024", image: "/images/uploads/2025/08/Mrs.-Swetha-K-T-2.jpg", cvUrl: "https://atme.edu.in/swetha-k-t/" },
  { id: "madhurya-b-eshwar", name: "Mrs. Madhurya B Eshwar", designation: "Assistant Professor", qualification: "M.Tech", image: "/images/uploads/2025/08/Madhurya-B-Eshwar-2.jpg", cvUrl: "https://atme.edu.in/madhurya-b-eshwar/" },
  { id: "mr-nagesh-m-s", name: "Mr. Nagesh M S", designation: "Assistant Professor", qualification: "M.Tech", doj: "05/06/2025", image: "/images/uploads/2025/09/Mr.-Nagesh-M-S-2.jpg", cvUrl: "https://atme.edu.in/mr-nagesh-m-s/" },
  { id: "mr-manjunath-k", name: "Mr. Manjunath K", designation: "Assistant Professor", qualification: "M.Tech in VLSI Design & Embedded Systems", doj: "16/07/2015", image: "/images/uploads/2022/09/manj-233x300.jpg", cvUrl: "https://old.atme.edu.in/mr-manjunath-k/" },
  { id: "mrs-juslin-f", name: "Mrs. Juslin F", designation: "Assistant Professor", qualification: "MTech in Digital Electronics & Communication Systems", doj: "08/07/2016", image: "/images/uploads/2022/05/Juslin-F.jpg", cvUrl: "https://old.atme.edu.in/mrs-juslin-f/" },
];

const eeeFaculty: Faculty[] = [
  { id: "dr-parthasarathy-l", name: "Dr. Parthasarathy L", designation: "Professor & Head", qualification: "Ph.D", doj: "18.07.2011", image: "/__l5e/assets-v1/21df3cc3-c2ed-4c77-bf76-7a1c2449949d/Dr-Parthasarathy-L-new.png", cvUrl: "https://old.atme.edu.in/dr-parthasarathy-l/" },
  { id: "mr-raghavendra-l", name: "Dr. Raghavendra L", designation: "Associate Professor", qualification: "Ph.D", doj: "18.07.2014", image: "/images/uploads/2022/09/Dr.-Raghavendra-L.jpg", cvUrl: "https://old.atme.edu.in/mr-raghavendra-l/" },
  { id: "dr-sathish-k-r", name: "Dr. Sathish K R", designation: "Assistant Professor", qualification: "Ph.D", doj: "16.07.2012", image: "/images/uploads/2022/09/Dr-Sathish-K-R-1.jpg", cvUrl: "https://old.atme.edu.in/dr-sathish-k-r/" },
  { id: "mr-praveen-kumar-m", name: "Dr. Praveen Kumar M", designation: "Assistant Professor", qualification: "Ph.D", doj: "01.02.2013", image: "/images/uploads/2022/09/Dr.-PRAVEEN-KUMAR-M.jpg", cvUrl: "https://old.atme.edu.in/mr-praveen-kumar-m/" },
  { id: "mr-shreeshayana-r", name: "Mr. Shreeshayana R", designation: "Assistant Professor", qualification: "M.Tech", doj: "17.07.2013", image: "/images/uploads/2022/09/Shreeshayana-R.jpg", cvUrl: "https://old.atme.edu.in/mr-shreeshayana-r/" },
  { id: "mohan-m", name: "Mr. Mohan M", designation: "Assistant Professor", qualification: "M.Tech", doj: "11.02.2013", image: "/images/uploads/2022/11/Mr.-Mohan-M-1.jpg", cvUrl: "https://old.atme.edu.in/mohan-m/" },
  { id: "ms-swapna-h", name: "Ms. Swapna H", designation: "Assistant Professor", qualification: "M.Tech", doj: "17.08.2016", image: "/images/uploads/2022/09/Ms.-Swapna-H-1.jpg", cvUrl: "https://old.atme.edu.in/ms-swapna-h/" },
  
  { id: "mrs-kavyashree-s", name: "Mrs. Kavyashree S", designation: "Assistant Professor", qualification: "M.Tech", doj: "12.06.2023", image: "/images/uploads/2022/09/Kavyashree-S.jpg", cvUrl: "https://old.atme.edu.in/mrs-kavyashree-s/" },
  { id: "mrs-swathi-c-a", name: "Mrs. Swathi C A", designation: "Assistant Professor", qualification: "M.Tech", doj: "12.06.2023", image: swathiCA.url, cvUrl: "https://old.atme.edu.in/mrs-swathi-c-a/" },
  { id: "shilpashri-v-n", name: "Mrs. Shilpashri V N", designation: "Assistant Professor", qualification: "M.Tech", image: "/images/uploads/2022/09/Shilpashri-V-N.jpg", cvUrl: "https://old.atme.edu.in/shilpashri-v-n/" },
  { id: "sunil-kumar-l", name: "Mr. Sunil Kumar L", designation: "Instructor", qualification: "Diploma in Electrical and Electronics Engineering", doj: "01.03.2017", image: "/__l5e/assets-v1/8406a0ad-141e-4b5d-8c3a-99cec28eaf67/sunil-kumar-l.png", cvUrl: "https://atme.edu.in/sunil-kumar-l/" },
  { id: "rajesh-n", name: "Mr. Rajesh N", designation: "Mechanic", qualification: "ITI", doj: "05.08.2024", image: rajeshN.url, cvUrl: "" },
];

const cseFaculty: Faculty[] = [
  { id: "dr-puttegowda-d", name: "Dr. Puttegowda D", designation: "Professor & Head", qualification: "BE, M.Tech, Ph.D", doj: "1/2/2012", image: "/images/uploads/2026/05/Dr.-PUTTEGOWDA-D.jpg", cvUrl: "https://old.atme.edu.in/dr-putte-gowda-d/" },
  { id: "dr-j-v-gorabal", name: "Dr. J V Gorabal", designation: "Professor", qualification: "BE, M.Tech, Ph.D", doj: "20-08-2020", image: "/images/uploads/2023/02/J-V-Gorabal.jpg", cvUrl: "https://old.atme.edu.in/dr-j-v-gorabal/" },
  { id: "dr-jayantkumar-a-rathod", name: "Dr. Jayantkumar A Rathod", designation: "Professor", qualification: "Ph.D", doj: "05.02.2026", image: "/images/uploads/2026/03/DR.JAYANTKUMAR-A-RATHOD.jpg.jpeg", cvUrl: "https://old.atme.edu.in/dr-jayantkumar-a-rathod/" },
  { id: "dr-nasreenfathima", name: "Dr. Nasreen Fathima", designation: "Associate Professor", qualification: "BE, M.Tech, Ph.D", doj: "23-07-2014", image: "/images/uploads/2024/03/Nasreen-Fathima-1.jpg", cvUrl: "https://old.atme.edu.in/nasreen-fathima/" },
  { id: "dr-anil-kumar-c-j", name: "Dr. Anil Kumar C J", designation: "Associate Professor", qualification: "B.E, M.Tech, Ph.D", doj: "16/07/2012", image: "/images/uploads/2025/03/ANIL-KUMAR-C-J-1-1.jpg", cvUrl: "https://old.atme.edu.in/mr-anil-kumar-c-j/" },
  { id: "dr-shilpa-b-l", name: "Dr. Shilpa B L", designation: "Associate Professor", qualification: "BE, M.Tech, Ph.D", doj: "08/07/2024", image: "/images/uploads/2024/07/Shilpa-B-L-1.jpg", cvUrl: "https://old.atme.edu.in/dr-shilpa-b-l/" },
  { id: "dr-drakshayini-k-b", name: "Dr. Drakshayini K B", designation: "Associate Professor", qualification: "Ph.D.", doj: "13/11/2025", image: "/images/uploads/2026/05/Dr.-DRAKSHAYINI-K-B.jpg", cvUrl: "https://old.atme.edu.in/dr-drakshayini-k-b/" },
  { id: "dr-padmaja-k", name: "Dr. Padmaja K", designation: "Associate Professor", qualification: "BE, M.Tech, Ph.D", doj: "01/06/2026", image: "/__l5e/assets-v1/76935ed6-7251-4568-be21-512d654514b2/padmaja-k.jpg", cvUrl: "/departments/cse/faculty/dr-padmaja-k" },
  { id: "mrs-lakshmi-shree-c-v", name: "Mrs. Lakshmi Shree C V", designation: "Assistant Professor", qualification: "BE, M.Tech", doj: "03/09/2024", image: "/images/uploads/2025/04/Lakshmi-Shree-C-V-1.jpg", cvUrl: "https://old.atme.edu.in/lakshmi-shree-c-v/" },
  { id: "sushma-v", name: "Mrs. Sushma V", designation: "Assistant Professor", qualification: "BE, M.Tech", doj: "27-07-2015", image: "/images/uploads/CSE-16-1.jpg", cvUrl: "https://old.atme.edu.in/mrs-sushma-v/" },
  { id: "keerthana-m-m", name: "Mrs. Keerthana M M", designation: "Assistant Professor", qualification: "BE, M.Tech", doj: "15-07-2015", image: "/images/uploads/2022/11/Keerthana.jpg", cvUrl: "https://old.atme.edu.in/mrs-keerthana-m-m/" },
  { id: "raghuram-a-s", name: "Mr. Raghuram A S", designation: "Assistant Professor", qualification: "BE, M.Tech", doj: "7/8/2017", image: "/images/uploads/2026/05/RAGHURAM-A-S.jpg", cvUrl: "https://old.atme.edu.in/mr-raghuram-a-s/" },
  { id: "kavyashree-e-d", name: "Mrs. Kavyashree E D", designation: "Assistant Professor", qualification: "BE, M.Tech", doj: "21-08-2017", image: "/images/uploads/2026/02/Mrs.-Kavyashree-E-D.jpg.jpeg", cvUrl: "https://old.atme.edu.in/mrs-kavyashree-e-d/" },
  { id: "kalathma-m-k", name: "Mr. Kalathma M K", designation: "Assistant Professor", qualification: "BE, M.Tech", doj: "25-08-2021", image: "/images/uploads/2026/02/KALATHMA-M-K.jpg.jpeg", cvUrl: "https://old.atme.edu.in/mr-kalathma-m-k/" },
  { id: "roopa-b", name: "Mrs. Roopa B", designation: "Assistant Professor", qualification: "BE, M.Tech", doj: "27-08-2021", image: "/images/uploads/2026/02/Roopa-B.jpg.jpeg", cvUrl: "https://old.atme.edu.in/mrs-roopa-b/" },
  { id: "sandesh-r", name: "Mr. Sandesh R", designation: "Assistant Professor", qualification: "BE, M.Tech", doj: "8/8/2022", image: "/images/uploads/2026/02/Sandesh-R.jpg.jpeg", cvUrl: "https://old.atme.edu.in/mr-sandesh-r/" },
  { id: "shrilakshmi-prasad", name: "Mrs. Shrilakshmi Prasad", designation: "Assistant Professor", qualification: "BE, M.Tech", doj: "5/6/2023", image: "/images/uploads/2026/05/SHRILAKSHMI-PRASAD.jpg", cvUrl: "https://old.atme.edu.in/mrs-shrilakshmi-prasad/" },
  { id: "mrs-ashwini-p", name: "Mrs. Ashwini P", designation: "Assistant Professor", qualification: "BE, M.Tech", doj: "19/6/2024", image: "/__l5e/assets-v1/68b8da23-7152-483b-b3c8-f9ecd8a03ba3/Ashwini-P.jpg", cvUrl: "https://old.atme.edu.in/mrs-ashwini-p/" },
  { id: "ms-b-s-vanishree", name: "Ms. B S Vanishree", designation: "Assistant Professor", qualification: "BE, M.Tech", doj: "05/06/2025", image: "/images/uploads/2025/07/Ms.-B-S-VANISHREE.jpg", cvUrl: "https://old.atme.edu.in/vanishree/" },
  { id: "mrs-bindushree-v", name: "Mrs. Bindushree V", designation: "Assistant Professor", qualification: "BE, M.Tech", doj: "28/07/2025", image: "/images/uploads/2026/02/Bindushree-V.jpg.jpeg", cvUrl: "https://old.atme.edu.in/bindushree-v/" },
  { id: "mr-kaushik-triyambaka-mysur", name: "Mr. Kaushik Triyambaka Mysur", designation: "Assistant Professor", qualification: "BE, MS", doj: "28-07-2025", image: "/images/uploads/2026/05/Kaushik-Triyambaka-Mysur.jpg", cvUrl: "https://old.atme.edu.in/kaushik-triyambaka-mysur/" },
  { id: "ms-yashaswini", name: "Ms. Yashaswini Urs", designation: "Assistant Professor", qualification: "MSc IT", doj: "1-08-2025", image: "/images/uploads/2025/08/Ms.-Yashaswini-Urs-1.jpg", cvUrl: "https://old.atme.edu.in/yashaswini-urs/" },
  { id: "ms-rakshitha-n-m", name: "Ms. Rakshitha N M", designation: "Assistant Professor", qualification: "MCA", doj: "28/08/2025", image: "/images/uploads/2026/05/RAKSHITHA-N-M.jpg", cvUrl: "https://old.atme.edu.in/ms-rakshitha-n-m/" },
  { id: "ms-kavitha-s", name: "Ms. Kavitha S", designation: "Assistant Professor", qualification: "M.Tech", doj: "26/08/2025", image: "/images/uploads/2026/05/Ms.-KAVITHA-S.jpg", cvUrl: "https://old.atme.edu.in/ms-kavitha-s/" },
  { id: "mrs-gadi-divyasree", name: "Mrs. Gadi Divyasree", designation: "Assistant Professor", qualification: "M.Tech", doj: "25/08/2025", image: "/images/uploads/2026/05/Gadi-Divyasree.jpg", cvUrl: "https://old.atme.edu.in/gadi-divyasree/" },
  { id: "mrs-darshini-m-s", name: "Mrs. Darshini M S", designation: "Assistant Professor", qualification: "M.Tech", doj: "28/08/2025", image: "/images/uploads/2026/05/DARSHINI-M-S.jpg", cvUrl: "https://old.atme.edu.in/darshini-m-s/" },
  { id: "mr-theja-n", name: "Mr. Theja N", designation: "Assistant Professor", qualification: "M.Tech", doj: "10/09/2025", image: "/images/uploads/2025/10/Mr.-Theja-N.jpg.jpeg", cvUrl: "https://old.atme.edu.in/mr-theja-n/" },
  { id: "ms-akanksha-v", name: "Ms. Akanksha V", designation: "Assistant Professor", qualification: "M.Tech", doj: "25/08/2025", image: "/images/uploads/2025/11/Akanksha-V.jpg", cvUrl: "https://old.atme.edu.in/ms-akanksha-v/" },
  { id: "ms-bhavya-dechamma-k-s", name: "Ms. Bhavya Dechamma K S", designation: "Assistant Professor", qualification: "M.Tech", doj: "17/11/2025", image: "/images/uploads/2026/05/Bhavya-Dechamma-K-S.jpg", cvUrl: "https://old.atme.edu.in/bhavya-dechamma-k-s/" },
  { id: "mrs-arpitha-a", name: "Mrs. Arpitha A", designation: "Assistant Professor", qualification: "M.Tech", doj: "15/10/2025", image: "/images/uploads/2025/12/Arpitha-A-2.jpg", cvUrl: "https://old.atme.edu.in/arpitha-a/" },
  { id: "ms-kavyashree-b-l", name: "Ms. Kavyashree B L", designation: "Assistant Professor", qualification: "M.Tech", doj: "", image: "/images/uploads/2026/05/Ms.Kavyashree-B.L.jpg", cvUrl: "https://old.atme.edu.in/ms-kavyashree-b-l/" },
  { id: "mahesha-b-p", name: "Mr. Mahesha B P", designation: "Attender", qualification: "", doj: "19/01/2026", image: "/__l5e/assets-v1/8f5e95ec-2ca8-4304-925e-a04759385bee/mahesha-b-p.png", cvUrl: "/departments/cse/faculty/mahesha-b-p" },

];

const meFaculty: Faculty[] = [
  { id: "dr-chethan-s", name: "Dr. Chethan S", designation: "Associate Professor & Head", qualification: "BE,M.Tech,Ph.D", doj: "15/07/2014", image: "/__l5e/assets-v1/1d1fac01-0255-4e42-8d7c-09a9510ac37f/srinivasa.jpg", cvUrl: "https://atme.edu.in/mechanical-engineering/mechanical-faculty-profile/" },
  { id: "dr-srinivasa-k", name: "Dr.Srinivasa K", designation: "Professor and Dean Student Affairs", qualification: "BE,M.Tech,Ph.D", doj: "13/09/2010", image: "/__l5e/assets-v1/1d1fac01-0255-4e42-8d7c-09a9510ac37f/srinivasa.jpg", cvUrl: "https://atme.edu.in/mechanical-engineering/mechanical-faculty-profile/" },
  { id: "mr-ravikumar-s", name: "Mr. Ravikumar S", designation: "Associate Professor", qualification: "BE,M.Tech,", doj: "26/05/2012", image: "/__l5e/assets-v1/1d1fac01-0255-4e42-8d7c-09a9510ac37f/srinivasa.jpg", cvUrl: "https://atme.edu.in/mechanical-engineering/mechanical-faculty-profile/" },
  { id: "mr-devaraj-m-r", name: "Mr. Devaraj M R", designation: "Associate Professor", qualification: "BE,M.Tech", doj: "19/08/2022", image: "/__l5e/assets-v1/1d1fac01-0255-4e42-8d7c-09a9510ac37f/srinivasa.jpg", cvUrl: "https://atme.edu.in/mechanical-engineering/mechanical-faculty-profile/" },
  { id: "mr-rohith-s", name: "Mr.Rohith S", designation: "Assistant Professor", qualification: "BE,M.Tech", doj: "04/07/2016", image: "/__l5e/assets-v1/1d1fac01-0255-4e42-8d7c-09a9510ac37f/srinivasa.jpg", cvUrl: "https://atme.edu.in/mechanical-engineering/mechanical-faculty-profile/" },
  { id: "mr-chetan-s", name: "Mr. Chetan S", designation: "Assistant Professor", qualification: "BE,M.Tech,Ph.D", doj: "03/02/2023", image: "/__l5e/assets-v1/1d1fac01-0255-4e42-8d7c-09a9510ac37f/srinivasa.jpg", cvUrl: "https://atme.edu.in/mechanical-engineering/mechanical-faculty-profile/" },
  { id: "mr-sukruth-sagar-b-p", name: "Mr.Sukruth Sagar B P", designation: "Assistant Professor", qualification: "BE,M.Tech", doj: "14/06/2024", image: "/__l5e/assets-v1/1d1fac01-0255-4e42-8d7c-09a9510ac37f/srinivasa.jpg", cvUrl: "https://atme.edu.in/mechanical-engineering/mechanical-faculty-profile/" },
];

const dsFaculty: Faculty[] = [
  { id: "dr-anitha-d-b", name: "Dr. Anitha D B", designation: "Associate Professor", qualification: "BE,M.Tech,Ph.D", doj: "24-04-2023", image: "https://atme.edu.in/wp-content/uploads/2026/03/Dr-Anitha-D-B-1.jpg.jpeg", cvUrl: "https://atme.edu.in/cse-data-science/cse-faculty-profile-data-science/" },
  { id: "dr-vinod-kumar-p", name: "Dr. Vinod Kumar P", designation: "Associate Professor", qualification: "BE,M.Tech,Ph.D", doj: "01-02-2013", image: "https://atme.edu.in/wp-content/uploads/2026/03/Dr.-Vinod-Kumar-P-1.jpg.jpeg", cvUrl: "https://atme.edu.in/cse-data-science/cse-faculty-profile-data-science/" },
  { id: "dr-neethi-m-v", name: "Dr. Neethi M V", designation: "Assistant Professor", qualification: "BE,M.Tech,Ph.D", doj: "30-06-2023", image: "https://atme.edu.in/wp-content/uploads/2026/03/Dr.-Neethi-M-V-1.jpg.jpeg", cvUrl: "https://atme.edu.in/cse-data-science/cse-faculty-profile-data-science/" },
  { id: "mrs-madhu-nagaraj", name: "Mrs. Madhu Nagaraj", designation: "Assistant Professor", qualification: "BE,M.Tech,", doj: "30-06-2023", image: "https://atme.edu.in/wp-content/uploads/2026/03/Mrs.-Madhu-Nagaraj-1.jpg.jpeg", cvUrl: "https://atme.edu.in/cse-data-science/cse-faculty-profile-data-science/" },
  { id: "ms-ambika-v", name: "Ms. Ambika V", designation: "Assistant Professor", qualification: "BE,M.Tech", doj: "03-06-2024", image: "https://atme.edu.in/wp-content/uploads/2026/03/Mrs-AMBIKA-V-1.jpg.jpeg", cvUrl: "https://atme.edu.in/cse-data-science/cse-faculty-profile-data-science/" },
  { id: "mr-j-n-karthik", name: "Mr. J N Karthik", designation: "Assistant Professor", qualification: "BE,M.Tech", doj: "01-08-2025", image: "https://atme.edu.in/wp-content/uploads/2026/03/Mr.-J-N-Karthik-1.jpg.jpeg", cvUrl: "https://atme.edu.in/cse-data-science/cse-faculty-profile-data-science/" },
  { id: "ms-sushmitha-n", name: "Ms. Sushmitha N", designation: "Assistant Professor", qualification: "BE,M.Tech", doj: "17-11-2025", image: "https://atme.edu.in/wp-content/uploads/2026/03/Ms.-Sushmitha-N-1.jpg.jpeg", cvUrl: "https://atme.edu.in/cse-data-science/cse-faculty-profile-data-science/" },
  { id: "ms-pallavi-a-r", name: "Ms. Pallavi A R", designation: "Assistant Professor", qualification: "BE,M.Tech", doj: "", image: "/__l5e/assets-v1/465712f4-c199-445b-bc11-42a72bdfa8e9/pallavi-ar.jpg", cvUrl: "https://atme.edu.in/cse-data-science/cse-faculty-profile-data-science/" },
];

const ceFaculty: Faculty[] = [
  { id: "dr-jyothi-d-n", name: "Dr. Jyothi D N", designation: "Associate Professor & HOD", qualification: "BE,M.Tech,Ph.D", doj: "14.07.2015", image: "/__l5e/assets-v1/d58517a5-8d20-4d92-a80f-34f770b297c1/JYOTHI-D-N.jpg.jpeg", cvUrl: "https://atme.edu.in/civil-engineering/cv-faculty-profile/" },
  
  { id: "mr-manu-vijay", name: "Mr. Manu Vijay", designation: "Associate Professor", qualification: "BE,M.Tech", doj: "21.08.2012", image: "/__l5e/assets-v1/b59cdb07-058b-4959-90b3-60384b9f04b6/Manu-vijay.jpg.jpeg", cvUrl: "https://atme.edu.in/civil-engineering/cv-faculty-profile/" },
  { id: "mrs-shruthi-h-g", name: "Mrs. Shruthi H G", designation: "Assistant Professor", qualification: "BE,M.Tech", doj: "17.07.2014", image: "/__l5e/assets-v1/22a782dc-4d60-4fdc-a55d-3b88781b3078/SHRUTHI-H-G.jpg.jpeg", cvUrl: "https://atme.edu.in/civil-engineering/cv-faculty-profile/" },
  { id: "mrs-bharathi-b", name: "Mrs. Bharathi B", designation: "Assistant Professor", qualification: "BE,M.Tech", doj: "10.08.2015", image: "/__l5e/assets-v1/82bb8acd-4adf-4dc4-8918-8f9396644148/BHARATHI-B.jpg.jpeg", cvUrl: "https://atme.edu.in/civil-engineering/cv-faculty-profile/" },
  { id: "mr-rudresh-a-n", name: "Mr. Rudresh A N", designation: "Assistant Professor", qualification: "BE,M.Tech", doj: "12.08.2015", image: "/__l5e/assets-v1/cf179d10-34f4-419e-8b56-246ed6196c6b/RUDRESH-A-N.jpg.jpeg", cvUrl: "https://atme.edu.in/civil-engineering/cv-faculty-profile/" },
  { id: "mr-puneeth-k", name: "Mr. Puneeth K", designation: "Assistant Professor", qualification: "BE,M.Tech", doj: "05.08.2017", image: "/__l5e/assets-v1/3cc66785-68e0-4849-8c2a-e46b91a35153/PUNEETH-K.jpg.jpeg", cvUrl: "https://atme.edu.in/civil-engineering/cv-faculty-profile/" },
  { id: "mrs-namitha-a-p", name: "Mrs. Namitha A P", designation: "Assistant Professor", qualification: "B.Sc,M.Sc", doj: "24.08.2020", image: "/__l5e/assets-v1/da144694-fde1-468a-9d02-c2d3f8c29188/NAMITHA-A-P.jpg.jpeg", cvUrl: "https://atme.edu.in/civil-engineering/cv-faculty-profile/" },
  { id: "mrs-akhila-c-g", name: "Mrs. Akhila C G", designation: "Assistant Professor", qualification: "BE,M.Tech", doj: "29.08.2022", image: "/__l5e/assets-v1/cbd327af-f086-4713-bd4b-f36986febc01/Akhila-C-G-new.jpg", cvUrl: "https://atme.edu.in/civil-engineering/cv-faculty-profile/" },
  { id: "mr-likhit-m-l", name: "Mr. Likhit M L", designation: "Assistant Professor", qualification: "BE,M.Tech", doj: "09.10.2025", image: "/__l5e/assets-v1/79318b60-4f54-4e39-ac52-addf36c86910/Likhit-M-L.jpg", cvUrl: "https://atme.edu.in/civil-engineering/cv-faculty-profile/" },
];

const newsletterCE: Document[] = [
  { title: "2024-25 EVEN SEM", href: "/__l5e/assets-v1/5c6c8fe5-f7b2-49ac-b399-10eb968f9ef4/ATME_CV-24-25_Even.pdf" },
  { title: "2024-25 ODD SEM", href: "https://atme.edu.in/wp-content/uploads/2025/04/2024-25-ODD-SEM.pdf" },
  { title: "2023-24 EVEN SEM", href: "https://atme.edu.in/wp-content/uploads/2025/01/2023-24-EVEN-SEM.pdf" },
  { title: "2023-24 ODD SEM", href: "https://atme.edu.in/wp-content/uploads/2025/01/2023-24-ODD-SEM.pdf" },
  { title: "2022-23 EVEN SEM", href: "https://atme.edu.in/wp-content/uploads/2024/02/2022-23-EVEN-SEM.pdf" },
  { title: "2022-23 ODD SEM", href: "https://atme.edu.in/wp-content/uploads/2024/02/2022-23-ODD-SEM.pdf" },
  { title: "2021-22 EVEN SEM", href: "https://atme.edu.in/wp-content/uploads/2023/08/2021-22-EVEN-SEM.pdf" },
  { title: "2021-22 ODD SEM", href: "https://atme.edu.in/wp-content/uploads/2023/03/newsletter-2021-22-Odd-sem.pdf" },
  { title: "2020-21 EVEN SEM", href: "https://atme.edu.in/wp-content/uploads/2023/03/newsletter-2020-21-Even-sem.pdf" },
  { title: "2020-21 ODD SEM", href: "https://atme.edu.in/wp-content/uploads/2023/03/newsletter-2020-21-Odd-sem.pdf" },
  { title: "2019-20 EVEN SEM", href: "https://atme.edu.in/wp-content/uploads/2022/11/2019-20-EVEN-SEM.pdf" },
  { title: "2019-20 ODD SEM", href: "https://atme.edu.in/wp-content/uploads/2022/11/2019-20-ODD-SEM.pdf" },
];

const commonPO = [
  "Engineering knowledge", "Problem analysis", "Design / development of solutions",
  "Conduct investigations of complex problems", "Modern tool usage", "The engineer and society",
  "Environment and sustainability", "Ethics", "Individual and team work", "Communication",
  "Project management and finance", "Life-long learning",
];

const make = (
  slug: string, code: string, name: string, short: string,
  faculty: Faculty[],
  extras: Partial<Department> = {}
): Department => ({
  slug, code, name, short,
  about: `The Department of ${name} at ATME College of Engineering offers a four-year BE programme affiliated to VTU, Belagavi. The department combines a strong theoretical foundation with extensive lab work, projects and industry interaction to prepare graduates who are ready for the workplace and for higher studies.`,
  vision: `To be a centre of excellence in ${name.toLowerCase()} producing competent engineers committed to ethics, innovation and lifelong learning.`,
  mission: [
    "Impart quality education through outcome-based teaching and continuous improvement.",
    "Foster a research culture among students and faculty.",
    "Build strong industry collaborations and provide platforms for practical learning.",
    "Develop professionals with ethical, social and environmental responsibility.",
  ],
  peo: [
    "Graduates will excel in professional careers in industry, academia, government and entrepreneurship.",
    "Graduates will pursue advanced studies and contribute to research and innovation.",
    "Graduates will demonstrate leadership, teamwork and lifelong learning.",
    "Graduates will uphold professional ethics and contribute positively to society.",
  ],
  po: commonPO,
  pso: [
    `Apply principles of ${name.toLowerCase()} to analyse, design and develop solutions for real-world problems.`,
    `Use modern tools and software relevant to ${code} for problem solving and prototyping.`,
    `Engage in lifelong learning and contribute to interdisciplinary domains.`,
  ],
  faculty,
  labs: extras.labs ?? [
    { name: `${code} Core Lab`, description: "Equipped with industry-standard tools and instruments for foundational practicals." },
    { name: `${code} Project Lab`, description: "Dedicated space for capstone and mini projects with mentorship support." },
    { name: `${code} Research Lab`, description: "Supports faculty and student research, paper publications and external funded projects." },
  ],
  achievements: extras.achievements ?? [
    "Students published papers in international conferences and journals.",
    "Multiple alumni placed in top-tier companies in India and abroad.",
    "Faculty research grants from government and industry bodies.",
    "Hackathon, paper presentation and project competition wins.",
  ],
  research: extras.research ?? [
    "Active research groups in domain-specific areas.",
    "Collaborations with industry on funded projects.",
    "Patents and publications by faculty and students.",
    "Annual research symposium and industry guest lectures.",
  ],
  activities: extras.activities ?? [
    "Technical clubs and student chapters",
    "Workshops, industrial visits and bootcamps",
    "Cultural fest participation and sports events",
    "Outreach and social responsibility drives",
  ],
  placements: extras.placements ?? { topRecruiters: ["TCS","Infosys","Wipro","Capgemini","Cognizant","Tech Mahindra","Accenture","Bosch"], highest: "12 LPA", placementRate: "90%+" },
  documents: extras.documents ?? {
    facultyList: [{ title: `${code} Faculty List 2025-26 (PDF)`, href: `https://atme.edu.in/wp-content/uploads/2025/09/${code}-Faculty-List-for-the-Academic-Year-2025-26.pdf` }],
    syllabus: [{ title: `VTU Scheme & Syllabus (${code})`, href: "https://vtu.ac.in/en/syllabus-of-ug-programmes/" }],
    timetable: [{ title: `${code} Time Table 2025-26`, href: "https://atme.edu.in/" }],
    newsletter: newsletterCE,
    magazine: [{ title: "Department Magazine — Latest", href: "https://atme.edu.in/" }],
    coe: [{ title: `Calendar of Events 2025-26 (${code})`, href: "https://atme.edu.in/" }],
  },
  ...extras,
});

const noFaculty: Faculty[] = [];

const physicsFaculty: Faculty[] = [
  { id: "dr-mahesh-lohith-k-s", name: "Dr. Mahesh Lohith K S", designation: "Associate Professor & Head", qualification: "M.Sc, Ph.D", doj: "08/08/2016", image: "/__l5e/assets-v1/b719f9de-1149-4209-b1eb-60860b9b163d/dr.-mahesh-lohith-k-s.jpg-1.jpg", cvUrl: "https://atme.edu.in/physics/about-the-department/" },
  { id: "ramachandra-m-n", name: "Mr. Ramachandra M N", designation: "Assistant Professor", qualification: "M.Phil., M.Sc", doj: "02/09/2010", image: "/__l5e/assets-v1/95663b69-6825-49f8-a23c-a478632b4c7a/ramachandra-m-n.png", cvUrl: "https://atme.edu.in/physics/about-the-department/" },
  { id: "rani-t", name: "Mrs. Rani T", designation: "Assistant Professor", qualification: "M.Sc", image: "/__l5e/assets-v1/405791ee-e2cb-40e5-b60d-04d5fdd0ed54/rani-t.jpg", cvUrl: "https://atme.edu.in/physics/about-the-department/" },
  { id: "dr-madhusudhana-r", name: "Dr. Madhusudhana R", designation: "Assistant Professor", qualification: "B.Sc, M.Sc, M.Phil, M.Tech in Nanotechnology, Ph.D", doj: "30/08/2023", image: "/__l5e/assets-v1/a4fc710f-7685-428f-8e16-c5d2b286e4b4/dr.-madhusudhana-r.jpg", cvUrl: "https://atme.edu.in/physics/about-the-department/" },
  { id: "raghavendra-r", name: "Mr. Raghavendra R", designation: "Assistant Professor", qualification: "B.Sc, M.Sc", doj: "25/08/2021", image: "/__l5e/assets-v1/7a50ee25-a496-4c02-b0cf-f89c55f85b27/mr.-raghavendra-r.jpg", cvUrl: "https://atme.edu.in/physics/about-the-department/" },
  { id: "anjan-kumar-j", name: "Mr. Anjan Kumar J", designation: "Assistant Professor", qualification: "B.Sc, M.Sc, B.Ed", doj: "27/08/2021", image: "/__l5e/assets-v1/56ec31bf-88ba-47e8-9205-6d52b1e14ac7/anjan-kumar-j.jpg", cvUrl: "https://atme.edu.in/physics/about-the-department/" },
];

const chemistryFaculty: Faculty[] = [
  { id: "dr-avinash-k", name: "Dr. Avinash K", designation: "Professor & Head", qualification: "M.Sc, Ph.D", doj: "15/07/2012", image: "/__l5e/assets-v1/a9cb945a-b2ba-4ad2-b84b-dff66c1831ec/dr.-avinash-k.jpg-1.jpg", cvUrl: "https://atme.edu.in/chemistry/chem-about-the-department/" },
  { id: "dr-chaitra-t-k", name: "Dr. Chaitra T K", designation: "Assistant Professor", qualification: "M.Sc, Ph.D", doj: "01/08/2024", image: "/__l5e/assets-v1/c6ae85b9-b06f-4d59-a80f-c07f960a22de/dr.-chaitra-t-k.jpg-1.jpg", cvUrl: "https://atme.edu.in/chemistry/chem-about-the-department/" },
  { id: "dr-halligudra-guddappa", name: "Dr. Halligudra Guddappa", designation: "Assistant Professor", qualification: "M.Sc, Ph.D", doj: "22/08/2023", image: "/__l5e/assets-v1/3f5f6fc1-271c-444b-bc70-3b96e6e9f71c/dr.-halligudra-guddappa.jpg", cvUrl: "https://atme.edu.in/chemistry/chem-about-the-department/" },
  { id: "anusha-h-s", name: "Mrs. Anusha H S", designation: "Assistant Professor", qualification: "B.Sc, M.Sc", doj: "28/08/2023", image: "/__l5e/assets-v1/d06e3320-4eca-4852-82d1-63eba0629c90/anusha-h-s.jpg", cvUrl: "https://atme.edu.in/chemistry/chem-about-the-department/" },
  { id: "mahendra-kumar-h-s", name: "Mr. Mahendra Kumar H S", designation: "Assistant Professor", qualification: "B.Sc, M.Sc, B.Ed", doj: "13/05/2024", image: "/__l5e/assets-v1/f3171e17-f7b2-42f2-9d99-13179a26abb7/mr.-mahendra-kumar-h-s.jpg", cvUrl: "https://atme.edu.in/chemistry/chem-about-the-department/" },
  { id: "thejas-gowda-b", name: "Mr. Thejas Gowda B", designation: "Assistant Professor", qualification: "B.Sc, M.Sc", doj: "15/01/2025", image: "/__l5e/assets-v1/d244fc0f-b0f6-463e-a991-c9f6ba0431f7/thejas-gowda-b.jpg", cvUrl: "https://atme.edu.in/chemistry/chem-about-the-department/" },
  { id: "tejaswini-b-m", name: "Mrs. Tejaswini B M", designation: "Assistant Professor", qualification: "B.Sc, M.Sc", doj: "20/02/2025", image: "/__l5e/assets-v1/07dad2e8-8626-4276-86de-fea090bb6c79/tejaswini-b-m.jpg", cvUrl: "https://atme.edu.in/chemistry/chem-about-the-department/" },
];

const mathematicsFaculty: Faculty[] = [
  { id: "dr-sudhakar-n", name: "Dr. Sudhakar N", designation: "Associate Professor & Head", qualification: "M.Sc, M.Phil, Ph.D", doj: "03/08/2015", image: "/__l5e/assets-v1/4bbe02a0-7454-4879-8284-232dddba3f81/sudhakar-n.jpg", cvUrl: "https://atme.edu.in/mathematics/about-the-department/" },
  { id: "dr-madhusudhan-k-v", name: "Dr. Madhusudhan K V", designation: "Associate Professor", qualification: "M.Sc, Ph.D", doj: "02/09/2010", image: "/__l5e/assets-v1/9730fa9c-1caa-4b6a-9d7b-7e2bf01002a0/dr-madhusudhan-k-v.jpeg", cvUrl: "https://atme.edu.in/mathematics/about-the-department/" },
  { id: "priyanka-n-b", name: "Mrs. Priyanka N B", designation: "Assistant Professor", qualification: "B.Sc, M.Sc", doj: "02/09/2013", image: "/__l5e/assets-v1/70742bb7-4ceb-49a5-ae33-216c3ab08066/priyanka-n-b.jpeg", cvUrl: "https://atme.edu.in/mathematics/about-the-department/" },
  { id: "divya-k", name: "Mrs. Divya K", designation: "Assistant Professor", qualification: "M.Sc, M.Phil", doj: "01/08/2012", image: "/__l5e/assets-v1/b10a88c0-43eb-4100-b7a8-7dd0a143a3f1/divya-k.jpeg", cvUrl: "https://atme.edu.in/mathematics/about-the-department/" },
  { id: "sarada-pratapa", name: "Mrs. Sarada Pratapa", designation: "Assistant Professor", qualification: "B.Sc, M.Sc", doj: "13/12/2021", image: "/__l5e/assets-v1/acad436a-c0e9-4eb1-a7bf-d3c374b0fde8/mrs.-sarada-pratapa.jpg", cvUrl: "https://atme.edu.in/mathematics/about-the-department/" },
  { id: "rangaswamy-s", name: "Mr. Rangaswamy S", designation: "Assistant Professor", qualification: "B.Sc, M.Sc", doj: "05/08/2022", image: "/__l5e/assets-v1/ca34487e-8118-44e1-873a-c3bab879e97a/mr.-rangaswamy-s.jpg", cvUrl: "https://atme.edu.in/mathematics/about-the-department/" },
  { id: "bhanupriya-j", name: "Mrs. Bhanupriya J", designation: "Assistant Professor", qualification: "B.Sc, M.Sc", doj: "05/06/2023", image: "/__l5e/assets-v1/c08ddd9a-0d43-4e3e-ae17-eea3b1c2866c/bhanupriya-j.jpeg", cvUrl: "https://atme.edu.in/mathematics/about-the-department/" },
  { id: "krupa-n", name: "Mrs. Krupa N", designation: "Assistant Professor", qualification: "B.Sc, M.Sc", doj: "03/10/2025", image: "/__l5e/assets-v1/098ee120-3c06-42f7-9a4e-5de63f97d7ae/krupa-n.jpg", cvUrl: "https://atme.edu.in/mathematics/about-the-department/" },
  { id: "nandeesha-k-n", name: "Mr. Nandeesha K N", designation: "Attender", qualification: "SSLC", image: "/__l5e/assets-v1/59632dcd-5913-4afd-8fe2-a1f23a90a619/mr.-nandeesha-k-n-1.jpg", cvUrl: "https://old.atme.edu.in/mr-nandeesha-k-n/" },
];

const humanitiesFaculty: Faculty[] = [
  { id: "chandrashekhar-c", name: "Mr. Chandrashekhar C", designation: "Assistant Professor", qualification: "MA, LLB", image: "/__l5e/assets-v1/03e8315f-8947-4e54-905b-6ffc06638f10/chandrashekhar-c.jpg", cvUrl: "https://old.atme.edu.in/humanities/humanities-faculty/" },
  { id: "bharathi-r", name: "Ms. Bharathi R", designation: "Assistant Professor", qualification: "MSc, MA, PGDE", doj: "15/10/2018", image: "/__l5e/assets-v1/fdde1262-e74b-4f98-bb5d-0e40d29d7928/bharathi-r.jpg", cvUrl: "https://old.atme.edu.in/humanities/humanities-faculty/" },
  { id: "leelavathi-c-r", name: "Mrs. Leelavathi C R", designation: "Assistant Professor", qualification: "MA, B.Ed", doj: "14/12/2022", image: "/images/uploads/2026/03/Mrs.-Leelavathi-C-R.jpg.jpeg", cvUrl: "https://old.atme.edu.in/humanities/humanities-faculty/" },
  { id: "rakshitha-v", name: "Ms. Rakshitha V", designation: "Assistant Professor", qualification: "MA, B.Ed", doj: "16/04/2025", image: "/images/uploads/2026/03/Ms.-RAKSHITHA-V.jpg.jpeg", cvUrl: "https://old.atme.edu.in/humanities/humanities-faculty/" },
];

const bsCommon = {
  vision: "Development of academically excellent, culturally vibrant, socially responsible and globally competent human resources.",
  mission: [
    "To keep pace with advancements in knowledge and make the students competitive and capable at the global level.",
    "To create an environment for the students to acquire the right physical, intellectual, emotional and moral foundations and shine as torchbearers of tomorrow's society.",
    "To strive to attain ever-higher benchmarks of educational excellence.",
  ],
  peo: [
    "Acquire the competence of efficiently applying the fundamental concepts and skill sets of science in engineering and technology.",
    "Adapt to the engineering profession with communication skills, knowledge of constitution, professional ethics and environmental awareness to serve the wider community of society.",
  ],
};


export const departments: Department[] = [
  make("cse", "CSE", "Computer Science & Engineering", "Programming, algorithms, systems, AI, cybersecurity and full-stack engineering.", cseAllFaculty, {
    about: "The department of Computer Science & Engineering was established in the year 2010 with intake of 60 students and was enhanced to 180 students in 2024. The department is a pioneering academic centre for higher education, research, and innovations in key areas of Computer Science. It has been imparting quality education to meet the technological advancements and industrial requirements. This has been made possible due to highly qualified and experienced faculties with excellent academic track record. There is a proportionate mix of academic and industrial experience amongst the faculty which is influential in imparting the right blend of theoretical and practical knowledge to the students. The department has state of the art laboratories and excellent infrastructural facilities that provide the students with quality education that matches global standards. The first initiative taken by the department was to start the student branch of 'Computer Society of India' – CSI, a professional body at National level, in the year 2012, all the students in the department were enrolled as student members. The College also obtained CSI Institutional Membership and most of the staff members are Life Members of CSI. Department Library has been set up with more than 1110 Volumes on shelves.",
    hod: { name: "Dr. Puttegowda D", designation: "Professor & Head, CSE", image: "/images/uploads/2026/05/Dr.-PUTTEGOWDA-D.jpg", message: "Department of Computer Science & Engineering commits to work towards developing dedicated professionals with a rich blend of competent, technical, managerial and social skills to contribute nation building. The Department with highly qualified and experienced team of faculty with industry and research background dedicates to strengthen effective teaching learning process in the ambiance of conducive environment with well supported and stuffed curricular and co-curricular activities. The Department of Computer Science & Engineering has a state of the art facility that provides the students with quality education that matches global standards and truly an academic ambiance of excellence. The Department is wide open to innovative ideas, methodologies to establish itself as the most sought excellent learning center." },
    vision: "To develop highly talented individuals in Computer Science and Engineering to deal with real world challenges in industry, education, research and society.",
    mission: [
      "To inculcate professional behavior, strong ethical values, innovative research capabilities and leadership abilities in the young minds & to provide a teaching environment that emphasizes depth, originality and critical thinking.",
      "Motivate students to put their thoughts and ideas adoptable by industry or to pursue higher studies leading to research.",
    ],
    peo: [
      "PEO1: Empower students with a strong basis in the mathematical, scientific and engineering fundamentals to solve computational problems and to prepare them for employment, higher learning and R&D.",
      "PEO2: Gain technical knowledge, skills and awareness of current technologies of computer science engineering and to develop an ability to design and provide novel engineering solutions for software/hardware problems through entrepreneurial skills.",
      "PEO3: Exposure to emerging technologies and work in teams on interdisciplinary projects with effective communication skills and leadership qualities.",
      "PEO4: Ability to function ethically and responsibly in a rapidly changing environment by applying innovative ideas in the latest technology, to become effective professionals in Computer Science to bear a life-long career in related areas.",
    ],
    po: [
      "PO1. Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
      "PO2. Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
      "PO3. Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
      "PO4. Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
      "PO5. Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.",
      "PO6. The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
      "PO7. Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
      "PO8. Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
      "PO9. Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
      "PO10. Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
      "PO11. Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
      "PO12. Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
    ],
    pso: [
      "PSO1: Ability to apply skills in the field of algorithms, database design, web design, cloud computing and data analytics.",
      "PSO2: Apply knowledge in the field of computer networks for building network and internet based applications.",
    ],
    shortTermGoals: [
      "To conduct programs for students to acquire technical skills, soft skills and leadership qualities.",
      "To conduct student technical paper contest at national level in association with professional bodies.",
      "To conduct certification courses in collaboration with software giants like Microsoft, Phillips, IBM, CISCO, Infosys, HP etc.",
      "Establish research laboratories under industry-institution collaboration.",
      "Organize national / international / seminar / conference / workshop in the latest technologies.",
      "To conduct faculty development programs regularly for skills upgradation.",
    ],
    longTermGoals: [
      "To promote research and consultancy activities.",
      "To strengthen the industry-institute interaction.",
      "To have more number of publications and patents in the emerging areas of information technology.",
      "To be among the top ten leading institute in India and be recognized as the best department in terms of research and innovation.",
      "To take up research projects from government / AICTE / VTU and other funding organizations.",
    ],
    programmes: [
      { programme: "Computer Science and Engineering", degree: "B.E (CSE)", duration: "4 Years", intake: "180" },
    ],
  }),
  make("aiml", "AI&ML", "Computer Science Engineering – Artificial Intelligence & Machine Learning", "Artificial intelligence, machine learning, deep learning, data-driven systems and intelligent automation.", noFaculty, {
    about: "The Department of AIML at ATMECE is dedicated to impart constructive and quality technical education with high standards at undergraduate level. The faculty members of the department are committed to make our students by providing the expertise and proficiency in Artificial Intelligence and Machine Learning to tackle the issues of societies. Department is well equipped with all modern computing facilities to meet the academic and industrial requirements. AIML can be used to create computer programs that mimic human conversation. AIML can also be used to create virtual assistants, which are computer programs that can perform tasks such as scheduling appointments and sending emails. Additionally, AIML can be used to create educational software, which can be used to teach people about topics such as history or science.\n\nThe objective of the program is to provide an experiential learning opportunities such as hands-on experience and project-based learning, indulge in research projects, and internships which provide a strong foundation to work across the globe.\n\nWe at ATMECE more prominence is placed on elevating the students learning experience by providing value-added courses, skill-enhancement programs, and motivate students to participate in technical symposiums, hackathons organized by premier institutes across the nation. The students, faculty, and staff of AIML at ATMECE, we believe in teamwork, we inspire, encourage each other, we help each other, and, most importantly, we trust each other. This is the key to make our students success at AIML program at ATMECE. To bring the success and laurels to the department we focus more on constructive engagements which will enable employment opportunities to our students.\n\nI am confident that the Department of Artificial Intelligence & Machine Learning at ATMECE is stalwartly prepared to face the new societal issues and challenges in this new IT era with Indian Talent (IT). We hope and assure that we transform our students in all dimensions of their student life to become better citizen of this nation for better India and better world.",
    hod: { name: "Dr. Anil Kumar C J", designation: "Professor & Head, CSE (AI&ML)", image: "/images/uploads/2022/05/Mr.-Anil-Kumar-C-J.jpg", message: "I am confident that the Department of Artificial Intelligence & Machine Learning at ATMECE is stalwartly prepared to face the new societal issues and challenges in this new IT era with Indian Talent (IT). At AIML we believe in teamwork — we inspire, encourage and help each other, and, most importantly, we trust each other. This is the key to our students' success. The department focuses on constructive engagements which will enable employment opportunities for our students. We hope and assure that we transform our students in all dimensions of their student life to become better citizens of this nation for a better India and a better world." },
    vision: "To impart technical education in the field of Artificial Intelligence and Machine Learning of topnotch quality with a high level of professional competence, social obligation, and global cognizance among the students.",
    mission: [
      "To impart technical education that is up to date, relevant and makes students to compete at global level.",
      "Fostering an ambiance where students can adopt the suitable moral, intellectual, emotional, and physical attributes to shine as the leaders of tomorrow's society.",
      "To strive to meet ever higher educational standard.",
    ],
    peo: [
      "PEO1: Graduates will be able to hone their problem-solving abilities and capacity to offer solutions to challenges that arise in the actual world.",
      "PEO2: Able to design and develop AI based solutions to real-world problems in a business, research, or social environment.",
      "PEO3: Graduates shall acquire and inculcate corporate culture, core attributes, and leadership qualities as well as professional etiquettes and lifelong learning.",
    ],
    pso: [
      "PSO1: Ability to design and develop artificial intelligent based solutions by applying optimal algorithms to solve real world issues.",
      "PSO2: Ability to apply suitable AI tools and techniques to offer solutions in the various domains of engineering.",
    ],
    po: [
      "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
      "Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
      "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
      "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
      "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
      "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
      "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
      "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
      "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
      "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
      "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
      "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
    ],
    programmes: [
      { programme: "Computer Science & Engineering – Artificial Intelligence & Machine Learning", degree: "B.E (CSE – AI & ML)", duration: "4 Years", intake: "60" },
    ],
  }),
  make("csd", "CSD", "Computer Science & Design", "Computing foundations, product design, user experience and human-centred software systems.", noFaculty, {
    about: "Computing and computer technology have become integral to nearly every aspect of our daily lives, with a rising demand for digital tools and applications across various sectors. The fusion of creativity, design and software development skills is now more sought after than ever. Beyond mere coding, Computer Science and Design (CSD) represents a burgeoning research area, utilising computational tools to extract, filter and create knowledge to support professional endeavours. The significance of Interaction Design and Design Methods is rapidly growing in IT products and services, aligning with the heightened focus on user experience. This programme covers a diverse range of subjects including Programming Languages, Software Development, Website Construction, Image Processing, Spatial Computing, Media Computing, Animation and Graphics, Game Design and Development, and the Fundamentals of Video and Photography for Engineers. The Bachelor's degree in Computer Science and Design is designed to prepare students for thriving careers in the IT industry, digital design and media sectors such as gaming, animation, virtual/augmented reality, user interfaces, robotics, entertainment and digital analytics.",
    hod: { name: "Dr. Nasreen Fathima", designation: "Associate Professor & Head, CSD", image: "/__l5e/assets-v1/db350da0-0ba0-4c01-8bc0-0c37f7194717/Nasreen-Fathima-1.jpg", message: "This course emphasises the development of techniques and abilities to address problems through a Human-Computer Interaction design process. The curriculum equips students for immediate industry roles while also laying a solid foundation for further studies in Computer Science or Design. I extend a warm invitation to all prospective students to join this innovative branch, where together we can form a creative team that makes a positive difference." },
  }),
  make("cy", "CY", "Computer Science Engineering – Cyber Security", "Secure systems, digital forensics, ethical hacking, network security and cyber defence.", noFaculty, {
    about: "The Undergraduate Cyber Security Department offers a comprehensive education in safeguarding digital landscapes. Students delve into cutting-edge topics such as network security, cryptography and ethical hacking, gaining practical skills to combat evolving cyber threats. The curriculum bridges theoretical knowledge with hands-on experiences, preparing graduates for real-world challenges. As cyber-attacks continue to escalate globally, the department meets the industry demand for skilled professionals by cultivating expertise in risk management, incident response and secure coding practices. Graduates contribute significantly to private enterprises and governmental organisations, playing a vital role in national security. The department's focus on ethical hacking promotes responsible knowledge use, instilling principles of integrity in cyber defence. With a commitment to staying abreast of technological advancements, the department remains at the forefront of preparing students to secure digital infrastructures and contribute to a safer, more resilient digital future.",
    hod: { name: "Dr. Nasreen Fathima", designation: "Associate Professor & Head, CSE – Cyber Security", image: "/__l5e/assets-v1/db350da0-0ba0-4c01-8bc0-0c37f7194717/Nasreen-Fathima-1.jpg", message: "Our department is not just a learning space; it is a community where each member plays a vital role. Whether you are a student navigating the complexities of cybersecurity or a faculty member shaping minds and research, your contribution is invaluable. I encourage you to take full advantage of the resources and opportunities provided — industry collaborations, networking events and career development initiatives. Together, we will ensure that our graduates not only meet but exceed the demands of the ever-evolving cybersecurity landscape." },
    vision: "To nurture competent and ethical cyber security professionals capable of contributing to secure and resilient digital ecosystems.",
    mission: [
      "M1: To provide a strong foundation in cyber security principles, technologies and practices through a comprehensive and up-to-date curriculum.",
      "M2: To foster research and industry collaboration for the development of innovative cyber security solutions.",
      "M3: To instill ethical values, leadership qualities and social responsibility among students to promote responsible use of cyber security knowledge.",
      "M4: To encourage lifelong learning and adaptability to keep pace with the rapidly evolving cyber security landscape.",
    ],
    peo: [
      "PEO1: Graduates will have successful careers as cyber security professionals in industry, government and academia.",
      "PEO2: Graduates will demonstrate technical competence in identifying, analysing and mitigating cyber security threats and vulnerabilities.",
      "PEO3: Graduates will exhibit ethical, professional and socially responsible conduct in the practice of cyber security.",
    ],
    pso: [
      "PSO1: Ability to design, develop and implement secure systems and networks using appropriate cyber security tools and techniques.",
      "PSO2: Ability to analyse and respond to cyber security incidents through digital forensics, ethical hacking and risk management practices.",
      "PSO3: Ability to apply ethical and legal principles in the practice of cyber security for the benefit of society.",
    ],
  }),
  make("ece", "ECE", "Electronics & Communication Engineering", "Signals, embedded systems, VLSI, communication and IoT.", eceAllFaculty, {
    hod: { name: "Dr. Prathiba M K", designation: "Associate Professor & HOD, ECE", image: "/__l5e/assets-v1/e02f9b1e-3cbd-4232-b31b-89535724fbae/dr-prathibha-m-k.jpg", message: "Electronics & Communication Department feels proud of the quality & need based instruction & Practical training imparted to its students to face the challenges of the fast changing corporate and technical world. Because of the dedicated faculty & excellent coaching in both theoretical and practical, students coming out from the portal of the ECE department are placed in top ranking companies in India & abroad, many students have gone for higher studies. In ECE department, students will study wide variety of Theoretical & Industry oriented subjects. The students will also implement their theoretical knowledge through mini & major projects which involve the innovative ideas & social relevance. It also provides a platform for the Research in the emerging areas through its research center & exhibit student co-curricular activities, paper presentation, innovative ideas, technical talents through IETE. ECE department is a right place to reach the goal and shape up the career." },
    about: "The Department of Electronics and Communication Engineering at ATME College of Engineering, Mysuru, has been a hub of innovation and excellence since its inception in 2010, with intake enhanced to 120 students in 2012. Over the years, the department has continuously evolved, achieving significant milestones in academics, research, and innovation. Set up a dedicated Research Center in 2014 to promote research culture. Department achieved NBA Accreditation in 2019 and Re-accreditation in 2022, ensuring quality standards in engineering education. It has successfully executed funded projects including a 2.22 Crore DST Project, AICTE MODROB (₹10.7 Lakhs), and SERB-funded research projects. In 2025, the department proudly introduced B.E. Honors, reflecting its commitment to academic advancement. With a strong focus on research, innovation, and student development, the department nurtures students to become competent engineers, researchers, and entrepreneurs, contributing to society and industry with cutting-edge solutions.",
    vision: "To develop highly skilled and globally competent professionals in the field of Electronics and Communication Engineering to meet industrial and social requirements with ethical responsibility.",
    mission: [
      "To provide State-of-art technical education in Electronics and Communication at undergraduate and post-graduate levels, to meet the needs of the profession and society and achieve excellence in teaching-learning and research.",
      "To develop talented and committed human resource, by providing an opportunity for innovation, creativity and entrepreneurial leadership with high standards of professional ethics, transparency and accountability.",
      "To function collaboratively with technical Institutes/Universities/Industries, offer opportunities for interaction among faculty-students and promote networking with alumni, industries and other stake-holders.",
    ],
    peo: [
      "PEO1: To produce graduates to excel in the profession, higher education and pursue research exercises in Electronics and Communication Engineering.",
      "PEO2: To create technically able alumni with the capacity to examine, plan, to create and execute Electronics and Communication frameworks thereby involving in deep routed learning.",
    ],
    pso: [
      "PSO1: To have the capability to understand and adopt the technological advancements with the usage of modern tool to analyze and design embedded system or processes for variety of applications.",
      "PSO2: To work effectively in a group as an independent visionary, team member and leader having the ability to understand the requirement and develop feasible solutions to emerge as potential core or electronic engineer.",
    ],
    programmes: [
      { programme: "Electronics & Communication Engineering", degree: "B.E (ECE)", duration: "4 Years", intake: "120" },
    ],
    shortTermGoals: [
      "To improve academic performance of students using innovative and creative methods of teaching.",
      "To conduct programs for students to acquire better skills.",
      "To encourage research activities.",
      "To strengthen the department infrastructure and human resources.",
      "To conduct workshops/conferences/seminars for knowledge sharing.",
    ],
    longTermGoals: [
      "To take up sponsored projects from private and government organizations.",
      "To establish a research center for facilitating research activities in various domains of Electronics and communication Engineering.",
      "To offer consultancy services to industries.",
      "To establish and strengthen industry-institute interaction.",
      "To have more number of publications and patents in the emerging areas of Electronics and Communication Engineering.",
      "To be among top ten leading institutes in India and abroad and be recognized as the best department in terms of research and innovation.",
      "To create entrepreneurs in the area of Electronics and Communication Engineering.",
    ],
  }),
  make("eee", "EEE", "Electrical & Electronics Engineering", "Power systems, electric machines, control and renewable energy.", eeeAllFaculty, {
    about: "",
    aboutBullets: [
      { label: "Established", text: "2010 | Initial Intake: 60 | Current Strength: 167 students (2nd to 4th year)" },
      { label: "VTU Recognized Research Centre", text: "offering Ph.D. programs." },
      {
        label: "Faculty Expertise in",
        children: [
          "Power Systems",
          "Power Electronics",
          "Energy Systems & Management",
          "Computer Applications in Industrial Drives",
          "Bio-Medical Signal Processing & Instrumentation",
          "VLSI Design & Embedded Systems",
          "Energy Management Systems",
        ],
      },
      {
        label: "Facilities & Infrastructure",
        children: [
          "Laboratories as per VTU norms + upcoming state-of-the-art research labs.",
          "Spacious infrastructure: 2,025 sq.m with ICT-enabled lecture halls, seminar hall, and modern labs.",
        ],
      },
      {
        label: "Training & Industry Linkages",
        children: [
          "Domain-Specific Training in Industrial Automation and Embedded Systems.",
          "Active membership in ISTE, IEI, and IAENG.",
          "Research in Power Systems, Nanomaterials, Bio-Medical Devices, etc.",
          "Consultancy in transformer design validation, earth pit testing, auxiliary transformer & DG set testing.",
        ],
      },
    ],
    hod: {
      name: "Dr. Parthasarathy L",
      designation: "Professor & Head, EEE",
      image: "/__l5e/assets-v1/75a1c81f-534b-4385-b261-9bfaf5270391/parthasarathy-l-2026.jpg",
      quote: "Emitting Elite Energy",
      message: "",
      messageBullets: [
        {
          label: "Educational Approach",
          children: [
            "Outcome-Based Education (OBE)",
            "Experiential Learning for strong theoretical & practical skills.",
            "Collaboration with reputed training institutes for industry-relevant skills.",
            "Encouragement for NPTEL/MOOC Certifications for Honors/Minor Degrees.",
          ],
        },
        {
          label: "Notable Achievements",
          children: [
            "Ms. Safeena Shazia (Batch 2011–15) — 8th Rank in VTU.",
            "AICTE-MODROB funding for Cyber Security in Power Systems.",
            "Grants from KTECH-NAIN & KSCST for innovative projects.",
            "Faculty have served as Academic Council Member, BOE Members, Conference Reviewers.",
          ],
        },
        {
          label: "Student Excellence",
          children: [
            "Winners in Technical Project Competitions, Hackathons, and Sports (University, State & District level).",
            "Active participation in social awareness programs integrated into the curriculum.",
            "Annual cultural fests themed around impactful societal causes.",
          ],
        },
      ],
      closing: "We are committed to shaping future-ready engineers through innovation, values, and industry-aligned learning.",
    },
    vision: "To create Electrical and Electronics Engineers who excel to be technically competent and fulfil the cultural and social aspirations of the society.",
    mission: [
      "To provide knowledge to students that builds a strong foundation in the basic principles of electrical engineering, problem solving abilities, analytical skills, soft skills and communication skills for their overall development.",
      "To offer outcome based technical education.",
      "To encourage faculty in training & development and to offer consultancy through research & industry interaction.",
    ],
    peo: [
      "PEO1: To produce competent and ethical Electrical and Electronics Engineers who will exhibit the necessary technical and managerial skills to perform their duties in society.",
      "PEO2: To make graduates continuously acquire and enhance their technical and socio-economic skills.",
      "PEO3: To aspire graduates on R&D activities leading to offering solutions and excel in various career paths.",
      "PEO4: To produce quality engineers who have the capability to work in teams and contribute to real time projects.",
    ],
    po: [
      "PO1 — Engineering Knowledge: Apply knowledge of mathematics, natural science, computing, engineering fundamentals and an engineering specialization as specified in WK1 to WK4 respectively to develop to the solution of complex engineering problems.",
      "PO2 — Problem Analysis: Identify, formulate, review research literature and analyze complex engineering problems reaching substantiated conclusions with consideration for sustainable development. (WK1 to WK4)",
      "PO3 — Design/Development of Solutions: Design creative solutions for complex engineering problems and design/develop systems/components/processes to meet identified needs with consideration for the public health and safety, whole-life cost, net zero carbon, culture, society and environment as required. (WK5)",
      "PO4 — Conduct Investigations of Complex Problems: Conduct investigations of complex engineering problems using research-based knowledge including design of experiments, modelling, analysis & interpretation of data to provide valid conclusions. (WK8)",
      "PO5 — Engineering Tool Usage: Create, select and apply appropriate techniques, resources and modern engineering & IT tools, including prediction and modelling recognizing their limitations to solve complex engineering problems. (WK2 and WK6)",
      "PO6 — The Engineer and The World: Analyze and evaluate societal and environmental aspects while solving complex engineering problems for its impact on sustainability with reference to economy, health, safety, legal framework, culture and environment. (WK1, WK5, and WK7)",
      "PO7 — Ethics: Apply ethical principles and commit to professional ethics, human values, diversity and inclusion; adhere to national & international laws. (WK9)",
      "PO8 — Individual and Collaborative Team work: Function effectively as an individual, and as a member or leader in diverse/multi-disciplinary teams.",
      "PO9 — Communication: Communicate effectively and inclusively within the engineering community and society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations considering cultural, language, and learning differences.",
      "PO10 — Project Management and Finance: Apply knowledge and understanding of engineering management principles and economic decision-making and apply these to one's own work, as a member and leader in a team, and to manage projects and in multidisciplinary environments.",
      "PO11 — Life-Long Learning: Recognize the need for, and have the preparation and ability for (i) independent and life-long learning, (ii) adaptability to new and emerging technologies, and (iii) critical thinking in the broadest context of technological change. (WK8)",
    ],
    pso: [
      "PSO1: Apply the concepts of Electrical & Electronics Engineering to evaluate the performance of power systems and also to control industrial drives using power electronics.",
      "PSO2: Demonstrate the concepts of process control for Industrial Automation, design models for environmental and social concerns and also exhibit continuous self-learning.",
    ],
    shortTermGoals: [
      "Leveraging technology for Teaching & Learning Process: Video based Learning, NPTEL & MOOCS.",
      "Professional Body Activities — ISTE, IEI, IEEE.",
      "Endeavour to obtain sponsors for Workshops and FDPs.",
      "Encourage the Faculty members to publish papers in reputed International Journals and Conferences.",
    ],
    longTermGoals: [
      "To achieve recognition of excellence in undergraduate education in the fields of Electrical & Electronics Engineering.",
      "To achieve distinguished academic results.",
      "To participate in the project sponsored by NGO's, State & Central government bodies.",
      "Work in close cooperation with industry and professional bodies.",
    ],
    programmes: [
      { programme: "Electrical & Electronics Engineering", degree: "B.E (EEE)", duration: "4 Years", intake: "60" },
    ],
  }),
  make("me", "ME", "Mechanical Engineering", "Design, thermal, manufacturing and robotics.", meAllFaculty, {
    hod: { name: "Dr. Chethan S", designation: "Associate Professor & Head, ME", image: "/__l5e/assets-v1/e19510b2-7ab1-462d-b546-e8a8a71fc37c/dr.-chethan-s.jpg", message: "Ever since its inception, the primary goal of the department has been to train students with high-quality education. The department is committed to preparing the best graduates by imparting holistic teaching-learning methods. The Department of Mechanical Engineering aims to disseminate knowledge and technology through quality teaching, research and its application in mechanical and allied disciplines. The department houses dedicated faculty with rich educational backgrounds and strives to inculcate young graduates with leadership, management and technical skills. Faculty encourage students to take up internships, industrial visits, workshops and seminars, and to participate in various curricular and co-curricular development activities. The department is equipped with state-of-the-art laboratories that are constantly upgraded with changes in technology. With this, I welcome you all to the Mechanical Engineering Department." },
    about: "The Department was established in 2010 with the intake of 60 students and present intake is 30 students affiliated to Visvesvaraya Technological University. The Department has a total built area of 2000 sq. m. with well-equipped laboratories and state of the art facilities in order to foster the growth of students. The Department is recognized as Research Centre by VTU during 2015-16. The Faculties of the Department are actively involved in research and consultancy works in the areas of Composite Materials, Fracture Mechanics, Fuels & Lubricants, Energy Systems Engineering and Renewable Energy.",
    vision: "To impart excellent technical education in mechanical engineering to develop technically competent, morally upright and socially responsible mechanical engineering professionals.",
    mission: [
      "To provide an ambience which impart excellent technical education in Mechanical Engineering.",
      "To enable the students to acquire skill development, knowledge of Research and recent trends in mechanical engineering which will engage them in lifelong learning.",
      "To engage students in co-curricular and extra-curricular activities to impart social & ethical values and imbibe leadership quality.",
    ],
    peo: [
      "PEO1: Graduates will be able to have successful professional career in the allied areas and be proficient to perceive higher education.",
      "PEO2: The Graduates will attain the ability to understand the need, technical ability to analyze, design and manufacture the product.",
      "PEO3: Work effectively, ethically and socially responsible in allied fields of mechanical engineering.",
      "PEO4: Work in a team to meet personal and organizational objectives and to contribute to the development of the society in large.",
    ],
    pso: [
      "PSO1: Ability to apply and interpret the acquired mechanical engineering knowledge for advancement in Industrial, Societal, and Environmental arenas.",
      "PSO2: Ability to meet the needs of Industries in the field of design, manufacturing and testing using mechanical engineering software.",
    ],
    programmes: [
      { programme: "Mechanical Engineering", degree: "BE (ME)", duration: "4Yrs", intake: "60" },
    ],
    shortTermGoals: [
      "To ensure students graduate themselves with first class (FC) and First Class with Distinction (FCD). To achieve 100% percent academic results.",
      "To implement effective measures to ensure faculty members under goes continuing education program and acquire higher degrees and qualification.",
      "To implement good number of certificate programs and short-term programs to bridge industry – academic gap.",
      "To increase the living standards of rural population by promoting research in the field of agriculture and allied disciplines.",
    ],
    longTermGoals: [
      "To establish the mechanical engineering department as an \"Excellent Academic Centre\" through holistic education, adopting modern teaching learning methods and with state of the art laboratories in place.",
      "To establish renowned research Centre in the disciplines of \"Manufacturing, Design and Thermal Engineering\".",
      "To collaborate strong alliance with industries, institutions of National & International importance.",
      "To attain autonomy in order to foster to the requirements of current industrial needs.",
    ],
  }),

  make("ce", "CE", "Civil Engineering", "Structures, transportation and sustainable construction.", ceAllFaculty, {
    hod: { name: "Dr. Jyothi D N", designation: "Associate Professor & Head, CE", image: "/images/uploads/2022/09/JYOTHI-D-N.jpg.jpeg", message: "The Department of Civil Engineering is emerging as one of the fastest-growing branches by imparting quality education to students in all the major areas of civil engineering. All faculty in the department are well qualified with experience in both teaching and industry. The department is forecasting the vision of the college and striving hard to make students technically excellent, culturally vibrant, socially responsible and globally competent. Students are exposed to practical real-time studies, training them to analyse and provide solutions. Along with the curriculum, students are trained in all dimensions through seminars, workshops, hands-on work, technical talks, industrial visits, internships and site visits. This provides a well-built platform to enhance their enthusiasm and practical knowledge, making them confident to tackle any civil engineering challenges and to be innovative with growing technology." },
    about: "The Department of civil engineering is growing tremendously over the years. With this small span of time the department has nurtured young minds to produce bright able civil engineers to the society. The department has expertise in almost the entire spectrum of civil engineering namely in Highway technology, Planning, Design, Construction and Management. The department with its multifaceted faculty continues to maintain and cultivate its strong links with infrastructural industry, academics and research. Many of our faculty members and students are involved in research activities in various areas of civil engineering. The department is developing strong links with the building and construction industry and academics. Along with the curricular the department encourages its students to take part in various cultural-sports-art festivals in and around the country. The future civil engineers here are always taught with the practical applications by the field expertise. The department is also very active in conducting workshops, short term seminars etc. and at the threshold of planning of the technical festival. Various lab facilities are provided to students here. The labs here provide expertise in Structural Engineering, Transportation Engineering, Geotechnical Engineering, Environmental Engineering, Hydraulics and Surveying. With these state of art infrastructure the students involves them in research with the guidance of expertise faculties.",
    vision: "To develop globally competent civil engineers who excel in academics, research and are ethically responsible for the development of the society.",
    mission: [
      "To provide quality education through faculty and state of the art infrastructure.",
      "To identify current problems in the society pertaining to Civil Engineering disciplines and to provide solution effectively and efficiently.",
      "To inculcate the habit of research, leadership and entrepreneurship in our graduates to explore current infrastructure needs of society.",
    ],
    peo: [
      "PEO1: Engaged in professional practices, such as construction, environmental, geotechnical, structural, transportation, water resource engineering by using technical, communication and management skills.",
      "PEO2: Engaged in higher studies and research activities in various civil engineering fields and life time commitment to learn ever changing technologies to satisfy increasing demand of sustainable infrastructural facilities.",
      "PEO3: Serve in a leadership position in any professional or community organization or local or state engineering board.",
      "PEO4: Registered as professional engineer or developed a strong ability leading to professional licensure being an entrepreneur.",
    ],
    po: [
      "PO1. Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
      "PO2. Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
      "PO3. Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
      "PO4. Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
      "PO5. Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.",
      "PO6. The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
      "PO7. Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
      "PO8. Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
      "PO9. Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
      "PO10. Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
      "PO11. Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
      "PO12. Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
    ],
    pso: [
      "PSO1: Provide necessary solutions to build infrastructure for all situations through competitive plans, maps and designs with the aid of a thorough Engineering Survey and Quantity Estimation.",
      "PSO2: Assess the impact of anthropogenic activities leading to environmental imbalance on land, in water & in air and provide necessary viable solutions revamping water resources and transportation for a sustainable development.",
    ],
    programmes: [
      { programme: "Civil Engineering", degree: "B.E", duration: "4 year", intake: "30" },
    ],
    shortTermGoals: [
      "To Build and promote teams of Experts in curricular and Co-Curricular activities.",
      "Professional growth of Faculty.",
      "Motivate and Promote Students and faculties and Organize and Participate in national/International symposiums, Conferences.",
      "To Collaborate with Corporates to enhance the Practical knowledge.",
      "Promotion of R&D Activities in of science and technology with special emphasis on emerging domain.",
    ],
    longTermGoals: [
      "To continuously upgrade the physical and laboratory infrastructure.",
      "Establishing centre of excellence of different specialized areas.",
      "To motivate the faculty to remain exposed to the industrial processes and activities.",
      "To promote quality research and undertake research projects keeping in view their relevance to the needs and requirements of technology.",
    ],
    documents: {
      facultyList: [{ title: "CE Faculty Profile", href: "https://atme.edu.in/civil-engineering/cv-faculty-profile/" }],
      syllabus: [{ title: "VTU Scheme & Syllabus (CE)", href: "https://vtu.ac.in/en/syllabus-of-ug-programmes/" }],
      timetable: [{ title: "CE Time Table 2025-26", href: "https://atme.edu.in/" }],
      newsletter: newsletterCE,
      magazine: [{ title: "CE Magazine — Latest", href: "https://atme.edu.in/" }],
      coe: [{ title: "Calendar of Events 2025-26 (CE)", href: "https://atme.edu.in/" }],
    },
  }),
  make("ds", "DS", "CSE — Data Science", "Statistics, machine learning, data engineering and visualisation.", dsFaculty, {
    hod: { name: "Dr. Anitha D B", designation: "Associate Professor, CSE-DS", image: "/__l5e/assets-v1/6e0859dd-fc91-478a-b5e9-c348e9187b39/Dr-Anitha-D-B.jpg.jpeg", message: "Data Science is a multidisciplinary field that combines computer science, statistics and domain knowledge to extract meaningful insights from data. At ATMECE, the CSE — Data Science programme is designed to equip students with strong fundamentals in programming, mathematics, machine learning, big data, data visualization and analytics, alongside hands-on exposure to modern tools and real-world datasets. Our dedicated faculty mentor students through capstone projects, internships, hackathons and research collaborations, encouraging them to build data-driven products, publish technical work and pursue higher studies. We are committed to preparing graduates who can responsibly use data to solve societal and industrial problems and excel in the rapidly evolving data-driven economy." },
  }),
  make("bca", "BCA", "Bachelor of Computer Applications", "Undergraduate programme focused on computer applications, software development, databases and IT fundamentals.", noFaculty, {
    about: "In today's technology-driven world, computer applications play a central and increasingly important role from communication, accessing information to harnessing the power of AI to drive innovation, automation, and intelligent decision-making across various domains. Concerning the Department of Computer Applications (BCA Programme), we intend to assure a standard of excellence in imparting higher education by practicing Hands-on Labs and Projects, Interactive Lectures, Case studies, Problem-solving sessions, Technology Integration, providing Networking opportunities and involving students in Research opportunities — leading bachelor students to benefit from a well-rounded education for the dynamic and evolving field of computer applications. The Department facilitates students to flourish their talent, enrich their expertise and competency. Students are also made spirited to become Entrepreneurs through expert talks by diversified resource persons. The duration of the BCA program is three years (Six Semesters). The curriculum, designed by VTU, is aimed at broadcasting a wide spectrum of practice and knowledge in the computing domain in the latest and emerging technologies. The Department of BCA inculcates innovative teaching-learning methods and Outcome Based Education (OBE) to enable students to become intellectual as well as competent professionals.",
    hod: { name: "Dr. Shakunthala C", designation: "Associate Professor & Head, BCA", image: "/__l5e/assets-v1/0b67a2fa-efff-46b2-896c-f268b9356396/Dr-Shakunthala-C.jpg", message: "Welcome to the Department of Computer Applications (BCA Programme) at ATME College of Engineering. Our mission is to nurture undergraduate students into competent, ethical and innovative computing professionals through a balanced blend of rigorous academics, hands-on lab work, interactive lectures, case studies and problem-solving sessions. We integrate the latest technologies — AI, data analytics, cloud, web and mobile application development — with strong fundamentals in software engineering and databases. Our dedicated faculty mentor students through projects, internships, industry interactions and research initiatives, while expert talks from diversified resource persons inspire them to take up entrepreneurship. We strive to develop graduates who are intellectually strong, technically competent and ready to contribute meaningfully to the dynamic and ever-evolving world of computer applications." },
    documents: {
      facultyList: [{ title: "BCA Faculty List 2025-26 (PDF)", href: "https://atme.edu.in/wp-content/uploads/2025/09/BCA-Faculty-List-for-the-Academic-Year-2025-26.pdf" }],
      syllabus: [{ title: "VTU Scheme & Syllabus (BCA)", href: "https://vtu.ac.in/en/syllabus-of-ug-programmes/" }],
      timetable: [{ title: "BCA Time Table 2025-26", href: "https://atme.edu.in/" }],
      newsletter: [],
      magazine: [{ title: "Department Magazine — Latest", href: "https://atme.edu.in/" }],
      coe: [{ title: "Calendar of Events 2025-26 (BCA)", href: "https://atme.edu.in/" }],
    },
  }),


  make("mca", "MCA", "Master of Computer Applications", "Postgraduate programme focused on application development, software engineering, databases and emerging computing technologies.", mcaAllFaculty, {
    about: "In today's technology-driven world, computer applications play a central and increasingly important role from communication, accessing information to harnessing the power of AI to drive innovation, automation, and intelligent decision-making across various domains. Concerning the Department of Master of Computer Applications, we intend to assure a standard of excellence in imparting higher education by practicing Hands-on Labs and Projects, Interactive Lectures, Case studies, Problem-solving sessions, Technology Integration, providing Networking opportunities and involving students in Research opportunities — leading master students to benefit from a well-rounded education for the dynamic and evolving field of computer applications. The Department facilitates students to flourish their talent, enrich their expertise and competency. Students are also made spirited to become Entrepreneurs through expert talks by diversified resource persons. The current intake of the MCA program is 120 and the duration is two years (Four Semesters). The curriculum, designed by VTU, is aimed at broadcasting a wide spectrum of practice and knowledge in the computing domain in the latest and emerging technologies. The Department of MCA inculcates innovative teaching-learning methods and Outcome Based Education (OBE) to enable students to become intellectual as well as competent professionals.",
    hod: { name: "Dr. Shakunthala C", designation: "Associate Professor & Head, MCA", image: "/__l5e/assets-v1/0b67a2fa-efff-46b2-896c-f268b9356396/Dr-Shakunthala-C.jpg", message: "Welcome to the Department of Master of Computer Applications at ATME College of Engineering. Our mission is to nurture postgraduate students into competent, ethical and innovative computing professionals through a balanced blend of rigorous academics, hands-on lab work, interactive lectures, case studies and problem-solving sessions. We integrate the latest technologies — AI, data analytics, cloud, web and mobile application development — with strong fundamentals in software engineering and databases. Our dedicated faculty mentor students through projects, internships, industry interactions and research initiatives, while expert talks from diversified resource persons inspire them to take up entrepreneurship. We strive to develop graduates who are intellectually strong, technically competent and ready to contribute meaningfully to the dynamic and ever-evolving world of computer applications." },
    po: [
      "Foundation Knowledge: Apply knowledge of mathematics, programming logic and coding fundamentals for solution architecture and problem solving.",
      "Problem Analysis: Identify, review, formulate and analyse problems for primarily focussing on customer requirements using critical thinking frameworks.",
      "Development of Solutions: Design, develop and investigate problems with an innovative approach for solutions incorporating ESG/SDG goals.",
      "Modern Tool Usage: Select, adapt and apply modern computational tools such as development of algorithms with an understanding of the limitations including human biases.",
      "Individual and Teamwork: Function and communicate effectively as an individual or a team leader in diverse and multidisciplinary groups. Use methodologies such as agile.",
      "Project Management and Finance: Use the principles of project management such as scheduling, work breakdown structure and be conversant with the principles of Finance for profitable project management.",
      "Ethics: Commit to professional ethics in managing software projects with financial aspects. Learn to use new technologies for cyber security and insulate customers from malware.",
      "Life-long learning: Change management skills and the ability to learn, keep up with contemporary technologies and ways of working.",
    ],
    programmes: [
      { programme: "Master of Computer Applications", degree: "MCA", duration: "2 Years (4 Semesters)", intake: "120" },
    ],
    documents: {
      facultyList: [{ title: "MCA Faculty List 2025-26 (PDF)", href: "https://atme.edu.in/wp-content/uploads/2025/09/MCA-Faculty-List-for-the-Academic-Year-2025-26.pdf" }],
      syllabus: [{ title: "VTU Scheme & Syllabus (MCA)", href: "https://vtu.ac.in/en/syllabus-of-ug-programmes/" }],
      timetable: [{ title: "MCA Time Table 2025-26", href: "https://atme.edu.in/" }],
      newsletter: [{ title: "CA Navonmesha", href: "/__l5e/assets-v1/417964e5-cb20-4893-b557-7a89ac5522a6/MCA-Navonmesha.pdf" }],
      magazine: [{ title: "Department Magazine — Latest", href: "https://atme.edu.in/" }],
      coe: [{ title: "Calendar of Events 2025-26 (MCA)", href: "https://atme.edu.in/" }],
    },

  }),
  make("mba", "MBA", "Master of Business Administration", "Postgraduate management programme covering finance, marketing, human resources, operations and entrepreneurship.", noFaculty, {
    about: "The Master of Business Administration (MBA) programme at ATMECE is designed to shape tomorrow's business leaders. Combining academic rigour with real-world relevance, our MBA equips students with the tools and insights needed to thrive in today's dynamic global economy. The dynamic curriculum blends theoretical knowledge with real-world application, helping students develop expertise in key areas such as finance, marketing, Human resource, business analytics, operations, strategy and leadership. The programme offers the tools and networks to advance a career, start a business or pivot into a new field.",
    hod: { name: "Dr. Oscar Abhishek", designation: "Associate Professor & Head, Department of MBA", image: "/__l5e/assets-v1/60feae26-b62a-4fd3-bbe0-d3669cf1c34d/Oscar-Abhishek-1.jpg", message: "Welcome to the Department of Master of Business Administration at ATME College of Engineering, Mysuru. The Department of MBA, established in 2024, is committed to nurturing competent, responsible and dynamic management professionals who can make meaningful contributions to the business world and society at large. We integrate rigorous academics with experiential learning through case studies, industry interactions, workshops and corporate interface programmes. Students are regularly exposed to industry professionals, entrepreneurs and academicians through guest lectures, seminars and industrial visits that bridge the gap between theory and practice. Supported by a team of highly qualified and experienced faculty, we foster a learning environment that encourages innovation, critical thinking, collaboration and holistic development, and prepare every MBA graduate to emerge as a confident, competent and ethical business leader." },
    vision: "Develop visionary leaders with strong business acumen, cultural awareness, social responsibility, and global competence to drive innovation, inspire change, and support sustainable development.",
    mission: [
      "To equip students with cutting-edge business knowledge, leadership skills, and global perspectives to enable them to succeed in a dynamic and competitive world.",
      "To foster an inclusive environment that nurtures ethical, emotional, and intellectual growth, empowering students to become responsible leaders.",
      "To encourage students to contribute responsibly to the betterment of society and the global business community.",
    ],
    peo: [
      "MBA is a two-year full-time programme, aimed at nurturing and training young minds with contemporary skills of management, adept in handling diverse sectors of the economy.",
      "The programme intends to inculcate leadership qualities in individuals to strategically position themselves in all emerging platforms of idea generation, creation of pragmatic knowledge, skills and competency development.",
      "The diverse course curriculum enables a high degree of academic flexibility for fostering innovation and creativity. It instils resilience and adaptability in students for facing the challenges of the contemporary business world.",
    ],
    po: [
      "Apply knowledge of management theories and practices to solve business problems.",
      "Foster analytical and critical thinking abilities for data based decision making.",
      "Ability to develop value-based leadership.",
      "Ability to understand, analyse and communicate global, economic, legal and ethical aspects of business.",
      "Ability to lead themselves and others in the achievement of organizational goals contributing effectively to a team environment.",
    ],
    pso: [
      "Comprehend the contemporary features and characteristics of Business Management Science and its administration.",
      "Analyse and interpret the dynamic situations for making Business Management strategies and decisions at the national and global level.",
      "Handle responsibility with the ethical values for all actions undertaken by them.",
      "Adapt and focus on achieving the organisational goal and objectives with complete zeal and commitment.",
    ],
  }),
  make("physics", "PHY", "Physics", "Engineering Physics — fundamentals, laboratory work and application-oriented activities for first-year engineering students.", physicsFaculty, {
    about: "The department of physics was all set to work in the year 2010 with optimum infrastructure. The department consists of a spacious and well-equipped laboratory, darkroom, HOD's cabin, staff room, and storeroom. The department of physics is determined to train the engineering aspirants in the fundamentals of physics so that they could apply the basic laws and theories of physics in engineering and technology. The department owns an ergonomically designed and well-equipped Engineering Physics Laboratory with modern equipment and a spacious darkroom for optics experiments. A set of well qualified dedicated faculty members and very enthusiastic and skilled supporting staff together work towards the academic and technical excellence of the students. As an initiative, the Department of Physics has introduced a research set up with simple equipment to carry out studies in the field of tribology and allied topics.",
    hod: { name: "Dr. Mahesh Lohith K S", designation: "Associate Professor & Head, Physics", image: "https://atme.edu.in/wp-content/uploads/2022/05/phy_hod-180x180-1.jpg", message: "\"What one man calls God, another calls the Laws of Physics.\" — Nikola Tesla. Physics is the fundamental science. Physics means \"nature\". Thus physics is the most important basis for engineering and technology. To understand nature one has to do careful observations — observations play a decisive role in the study of nature. To become a good engineer one must clutch the basic principles and laws of nature. The study of nature is possible through assumptions, theories, mathematical formulations, experiments, results, analysis and logical reasoning. Understanding the principles of physics is worth enjoying. I am proud and elated to be a physicist." },
    vision: bsCommon.vision,
    mission: bsCommon.mission,
    peo: bsCommon.peo,
  }),
  make("chemistry", "CHEM", "Chemistry", "Engineering Chemistry — interdisciplinary teaching, research and well-equipped laboratory supporting first-year engineering programmes.", chemistryFaculty, {
    about: "The main focus of teaching and research in the department is centred on interdisciplinary themes and pledges itself in the broadest and most liberal manner to encourage the advancement of all branches of engineering through its practically skilled education and service missions. The department has a well equipped laboratory with modern infrastructure. The faculty members of the department are well qualified, experienced and have expertise in most frontier areas of research. They have contributed towards publication of a good number of research papers in national and international journals and conferences. The department is recognized as a research centre by VTU and has a separate R & D centre. Many students have registered to pursue Ph.D from various institutes. The department also organizes workshops, seminars, induction programmes and other curricular and co-curricular activities.",
    hod: { name: "Dr. Avinash K", designation: "Professor & Head, Chemistry", image: "/__l5e/assets-v1/2a528e75-11da-463f-9cfd-e91c76e79d69/Dr-Avinash-K.jpg", message: "Chemistry is a colourful fundamental subject of science which has a lot of importance in engineering and technology. The subject places more emphasis on applications of chemistry in today's world and provides solutions to many problems we are facing today. Nowadays, the world is focused on interdisciplinary studies, hence students should give importance to the subject for their future studies, career and to excel academically. The faculty members of our department are highly qualified, experienced and involved in research activities in core areas of the subject and engineering applications. Best utilization of faculty, infrastructure and a keen interest in studies gives a strong foundation to budding engineers. \"Chemistry must become the astronomy of the molecular world.\" — Alfred Werner." },
    vision: bsCommon.vision,
    mission: bsCommon.mission,
    peo: bsCommon.peo,
  }),
  make("mathematics", "MATH", "Mathematics", "Engineering Mathematics — strong basic foundation, bridge courses and remedial classes for first-year engineering students.", mathematicsFaculty, {
    about: "The Department of Mathematics was started in the year 2010. The number of students grew in leaps and bounds year after year. The department has grown in strength and now has 6 faculty members and 2 of them are actively involved in research. The department interacts with other departments and provides solutions to their mathematical problems. The department is committed to continuous improvement in quality education by enhancing the knowledge of students and faculty members. Bridge courses are conducted for Diploma Students. Needy students are identified and special classes are engaged to enhance their performance. The dedicated efforts of the faculty of the department are yielding good results.",
    hod: { name: "Dr. Sudhakar N", designation: "Associate Professor & Head, Mathematics", image: "https://atme.edu.in/wp-content/uploads/2022/09/Sudhakar-N.jpg", message: "The Department of Mathematics provides a strong basic foundation to enable students to meet the fast-changing needs of industry, supported by dedicated faculty and excellent coaching. We encourage students to participate in mathematics talent competitions conducted across various colleges, and we conduct bridge courses for diploma entrants along with special remedial classes for students who need additional support. The department actively interacts with other engineering departments to provide solutions to their mathematical problems and is committed to continuous improvement in quality education by enhancing the knowledge of both students and faculty." },
    vision: bsCommon.vision,
    mission: bsCommon.mission,
    peo: bsCommon.peo,
  }),
  make("humanities", "HUM", "Humanities", "Communication skills, language and soft-skills training for engineering students.", humanitiesFaculty, {
    about: "The Department of Humanities at ATMECE focuses on developing strong communication, language and soft-skills among engineering students. Through structured courses, value-added programmes and personality development activities, the department helps students become confident communicators and socially responsible professionals ready for the global workplace.",
    vision: bsCommon.vision,
    mission: bsCommon.mission,
    peo: bsCommon.peo,
  }),
];


const DEPT_ALIASES: Record<string, string> = {
  "civil-engineering": "ce",
  "computer-science-and-engineering": "cse",
  "computer-science-engineering-data-science": "ds",
  "cse-data-science": "ds",
  "computer-science-engineering-artificial-intelligence-machine-learning": "aiml",
  "cse-ai-ml": "aiml",
  "computer-science-design": "csd",
  "cse-design": "csd",
  "computer-science-engineering-cyber-security": "cy",
  "cse-cyber-security": "cy",
  "electronics-and-communication-engineering": "ece",
  "electronics-communication-engineering": "ece",
  "electrical-electronics-engineering": "eee",
  "electrical-and-electronics-engineering": "eee",
  "department-of-mechanical-engineering": "me",
  "mechanical-engineering": "me",
  "master-of-computer-applications-mca": "mca",
  "master-of-business-administration-mba": "mba",
  "physics-department": "physics",
  "chemistry-department": "chemistry",
  "mathematics-department": "mathematics",
  "humanities-department": "humanities",
};


export const resolveDeptSlug = (slug: string) => DEPT_ALIASES[slug] ?? slug;

export const getDept = (slug: string) => departments.find((d) => d.slug === resolveDeptSlug(slug));

export const DEPT_SECTIONS = [
  { id: "about", label: "About The Department" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "faculty", label: "Staff Details" },
  { id: "achievements", label: "Achievements" },
  { id: "research", label: "Research Initiative" },
  { id: "slc", label: "Student Learning Centric" },
  { id: "itlm", label: "Innovative Teaching Learning Methods" },
  { id: "industry", label: "Industry Interface" },
  { id: "placements", label: "Placement and Higher Studies" },
  { id: "activities", label: "Co-curricular & Extracurricular Activities" },
  { id: "newsletter", label: "News Letter" },
  { id: "coe", label: "Calendar of Events (COE)" },
  { id: "magazine", label: "Magazine" },
] as const;


export type DeptSection = typeof DEPT_SECTIONS[number]["id"];
