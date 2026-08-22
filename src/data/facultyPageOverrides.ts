// Hand-authored faculty profile overrides used when the auto-scraped
// markdown in `facultyPages.ts` or `facultyPageFallbacks.ts` is stale,
// missing the real profile content, or pointing at the wrong source page
// (e.g. the department staff-list page got captured instead of the
// individual profile). Overrides win over both scraped files.

export type FacultyPageOverride = { name: string; url: string; md: string };

export const facultyPageOverrides: Record<string, FacultyPageOverride> = {
  "dr-manjula-a-v": {
    name: "Dr. Manjula A V",
    url: "",
    md: `## Professional Experience

- Teaching: 17
- Research: 12
- Industry: 02

## Contact Details

- **Email ID:** Official: [Dr.Manjulaav.ec@atme.edu.in](mailto:Dr.Manjulaav.ec@atme.edu.in)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/472329>
- **Google Scholar ID:** <https://scholar.google.com/citations?user=h5lihqQAAAAJ&hl=en>
- **Scopus ID:** <https://www.scopus.com/authid/detail.uri?authorId=57194389351>
- **Orcid ID:** <https://orcid.org/0000-0002-9722-6270>
- **Web of Science Researcher ID:** <https://www.webofscience.com/wos/author/record/OOK-4442-2025>
- **LinkedIn ID:** <https://www.linkedin.com/in/manjula-ramesh-8a9b2bb0/>

## Academic Details

- **Qualification**
- **Ph.D** in Electronics.
- **M.Tech** in Computer Application in Industrial Drives (CAID)
- **B.E** in Electronics and communication

## Areas of Interest

1. Wireless Communication
2. Signal Processing
3. Power Electronics & Control

## Publication Details

**International**

1. K., Varsha Bhat, K.,G., Sanjan, G.,A.V., Manjula, Anekal Venkatesh,D.R., Rao, Dhanya R.,M.B., Yashwanth, Mopidevi B,"Rasberry Pi-based thermal and Optical detection system with Automated targeting and real time monitoring
2. Kavitha S, R. Manjunatha, S. Pushpalatha, Manjula A V, Thanuja M, P G Chilveri "Hybrid Deep Learning algorithm for Abnormal Heart Beat detection using ECG Signals " in Journal of Information systems Engineering and Management, Vol. 10 No. 38s (2025)
3. Dr.Manjula AV, Chetan BK, Bharath KN "Musical Instrument Recognition using Machine Learning Approaches" in IEEE proceeding 2025
4. HarshithaC, SahanaS,Shravana K,Dr.Manjula A V, " Automobile Blackbox System For Accident Analysis" in IJAREEIE, Volume 13, Issue 5, May 2024
5. Devika I L,Pooja Chowdaiah, Sagarika L, Shikha Shetty ,Manjula A.V," Hand Gesture Recognition And Conversion System For Dumb People in International Journal of Innovative Research in Science, Engineering and Technology (IJIRSET) |e-ISSN: 2319-8753, p-ISSN: 2347-6710| www.ijirset.com | Impact Factor: 8.423| A Monthly Peer Reviewed & Refereed Journal , Volume 13, Issue 5, May 2024.
6. Likitha T D, Varalakshmi M, Vinutha E, Yashaswini M Y, Dr Manjula A V, "Energy Efficient Electric Vehicles Using Regenerative Braking System ", in IJAREEIE Volume 13, Issue 4, April 2024
7. N.Shwetha & P, Sindhu & B, Vandana & A V, Manjula. (2022). VEHICLE SAFETY CONTROLLER FOR DUMPTRUCKS. 2395-0056 in International Research Journal of Engineering and Technology (IRJET) e-ISSN: 2395-0056 Volume: 08 Issue: 08 | Aug 2021
8. Kaushik, T. S., Chandan Prasad, V. Prajwal, and A. V. Manjula. "Anomaly detection in pharmaceutical pills using image processing." (2021).
9. Dr.MAV Yashas H M, K Sharmila, Shashanka Krishna S, Sachin N R,"Smart forming" INTERNATIONAL JOURNAL OF ENGINEERING RESEARCH & TECHNOLOGY (IJERT) 8 (13)(2020)
10. Manjula AV, Muralidhara KN. Hybrid Zadoff‐Chu and multilateral piecewise exponential companding transform–based PAPR reduction technique in OFDM systems. Int J Commun Syst. 2019; e4183. https://doi.org/10.1002/dac.4183
11. Divan Saleem Khan , Manjula A V and Ratnakanth E K" Replacement of Relay Box in Dump Truck Using Microcontroller and Solid State Power Devices", IJRECE Vol. 6 Issue 3 ( July - September 2018) ISSN: 2393-9028 (PRINT) |ISSN: 2348-2281 (ONLINE)
12. Dhanush, M., Ashish Jain, S. C. Moulyashree, Aaneesh Melkot, and Manjula A.V. "ECG based authentication using Autocorrelation and Artificial Neural Networks." In 2016 International Conference on Computing, Analytics and Security Trends (CAST), pp. 238-243. IEEE, 2016.
13. Manjula A.V and Dr. K.N.Muralidhara, "Comparative Performance Analysis of Hybrid PAPR Reduction Techniques in OFDM Systems," Springer Nature Singapore Pte Ltd. 2019 V. Sridhar et al. (eds.), Emerging Research in Electronics, Computer Science and Technology, Lecture Notes in Electrical Engineering 545, https://doi.org/10.1007/978-981-13-5802-9_92
14. Manjula A.V and Dr.K.N.Muralidhara, "Hybrid Zadoff Chu Matrix Transform and SLM Technique for PAPR Reduction in OFDM Systems," International Journal of Electrical Engineering and Technology(IJEET), vol 09, Issue 6, pp.47-56, Nov.-Dec. 2018, ISSN Print : 0976 - 6545 and ISSN Online : 0976-6553
15. Manjula A.V and Dr.K.N.Muralidhara, "Low Complexity modified mapping PAPR Reduction technique in OFDM Systems," International Journal of Computer Networks and Wireless Communications(IJCNWC),vol. 8, No.5, Page No.54-58, Sep-Oct 2018 , ISSN : 2250-3501
16. Manjula A.V, Dr.K.N.Muralidhara and Ashish Jain,"Low Complexity Adaptive mapping PAPR Reduction Technique in OFDM Systems," International Journal of Research in Electronics and Computer Engineering(IJRECE), vol. 6 issue 3 Page No. 1652-1655, July-Sep 2018, ISSN : 2348-2281 (Online)
17. Manjula A.V. and Dr.K.N.Muralidhara, "PAPR Reduction in OFDM systems using RCF and SLM Techniques," International Journal of Computer Applications (IJCA), Volume 158 - No.6, January 2017 Page No..6-9. ISSN - 0975-8887.
18. Manjula A.V. and Dr.K.N.Muralidhara , "A survey on different PAPR reduction techniques in OFDM systems," International Journal Of Engineering And Computer Science (IJECS) Volume 5 Issue 12 Dec.2016, Page No.1940 1-19404. ISSN 2393-9028(Print) / ISSN : 2348 - 2281 (Online)

## Membership in Professional Bodies

- MIE, Institution of Engineers(India)

## Honours/Awards/Achievements

**Honours Received**

1. External evaluator for 2nd National Level Inter College Project Competition "DBIT–TeXpo-2022" (Online) on 20th July 2022.
2. Taking up the role of Session Chair for the 2nd IETE National Level Student Technical Paper Presentation held on 21st June 2020 organized by IETE Mysuru Centre, Mysuru.
3. Taking up the role of Session Chair for the 2nd National Conference on communication and Data Science (NCCDS-2020)-A Virtual conference held on 15th July 2020 at GSSS Institute of Engineering and Technology for women, Mysuru.
4. Served as a Board of Examiners (BoE) member under the EC/TE (Composite) Board at Visvesvaraya Technological University, Belagavi, during the academic year 2024–25.
5. Served as a Board of Examiners (BoE) member under the EC/TE (Composite) Board at Visvesvaraya Technological University, Belagavi, during the academic year 2025–26.

## FDPs/Conferences/Workshops/STTP/MOOC Certification

**Conference Papers**

1. Manjula A.V and Dr. K.N. Muralidhara , " Comparative Performance Analysis of Hybrid PAPR Reduction Techniques in OFDM Systems" , ICERECT - 2018 , August 23rd -24th - 2018, PESCE ,Mandya, India
2. Manjula AV., and Dr. K.N.Muralidhara. "An Overview of Different PAPR Reduction Techniques in OFDM Systems" IEEE sponsored International Conference on Science, Technology, Engineering and Management (ICONSTEM - 2016) JEPPIAAR Engineering College, 30-31 March 2016.
3. Manjula AV., and Dr. K.N.Muralidhara. " A Study of RCF & SLM PAPR Reduction Techniques in OFDM Systems" IEEE sponsored International Conference on Science, Technology, Engineering and Management (ICONSTEM - 2016) JEPPIAAR Engineering College, 30-31 March 2016.
4. Dhanush M, Ashish Jain, Moulyashree S.C, Aaneesh Melkot and Manjula A.V, "ECG based authentication using Autocorrelation and Artificial Neural Networks ", 2016 International Conference on Computing, Analytics and Security Trends (CAST) Year: 2016

**Workshops Attended**

1. Participated in Women's Day Celebrations jointly organized by Women in Engineering Affinity Group of IEEE Bangalore Section and Infosys on 4th Mar' 2020 at Infosys Campus, Bangalore.
2. Participated in " IEEE Faculty Conclave " organized by IEEE Bangalore on 29th Feb' 2020 held at NIE Institute of Technology, Mysuru.
3. Participated in IEEE , 2 day workshop on "Research Methodology" on 7th - 8th Sept'2018 organized in association with IEEE Communications Society, Bengalure, held at NIE Institute of Technology, Mysuru.
4. Participated workshop on " Prior Art Search " on 29th & 30th June'2018 , Centre for Intellectual Property Rights, held at NIE Institute of Technology, Mysuru.
5. Participated workshop on "New Model Curriculum for First Year BE/B.Tech - CBCS Detailed Syllabus (2018-19) as per Outcome - Based Education ( OBE) format including Course Outcomes (CO) and Bloom's Taxonomy under TEQIP- 1.3 on 19th May'2018 held at Sahyadri College of Engineering & Management, Mangalore organized by VTU, Belagavi.
6. Participated workshop on " Information Literacy for Academic Research & Publication" on 30th Jan' 2018 held at NIE Institute of Technology, Mysuru.
7. Presented paper with entitled " Replacement of Relay Box in Dump Truck Using Microcontroller and Solid State Power Devices", in National Conference on Electronics (NCESC) - 2017 jointly organized by Department of Electronics and Communication Engineering & Department of Telecommunication Engineering in association with IETE Mysuru Centre and International Journal of Computer Applications on 29th May 2017 conducted at GSSS Institute of Engineering and Technology for Women, Mysuru.
8. Participated in one day National Seminar on "Recent Trends in PCB Technology organized by Department of Electronics and Communication Engineering held on 3rd Apr'2017 at NIE Institute of Technology, Mysuru.
9. Participated in one day National Seminar on "Recent Advances in Communication Technologies - A Power System Perspective" organized by Department of Electrical and Electronics Engineering held on 18th March 2017 at NIE Institute of Technology, Mysuru.
10. Participated in International Symposium on "SMART GRID TECHNOLOGIES : Recent Initiatives , Challenges & Opportunities from Jan 27th - 28th 2017 held at NIE Institute of Technology, Mysuru
11. Participated workshop in ISTE STTP on "CMOS , Mixed Signal and Radio Frequency VLSI Design" conducted by IIT Kharagpur from 30th January 2017 to 4th February 2017 - held at Remote Center MIT - Mysuru. This workshop was held under the National Mission on Education through ICT (MHRD)
12. Participated in Workshop on "Applications of MATLAB for Electrical Sciences" from 26th to 30th July 2016 organized by Department of Electrical and Electronics Engineering in association with GAT - GLARE held at Global Academy of Technology, Bangalore.
13. Participated workshop on " Holistic Approach to Research " on 20th & 21th July 2016 , organized by PET Research Foundation under (TEQIP-II Funded) held at PESCE, Mandya.
14. Participated in connecting Researchers Workshop on "Challenges and Opportunities in Research" , Science - Engineering Technology conclave from 2nd to 7th May 2016 held at NIE Institute of Technology, Mysuru.
15. Participated in "Technical Paper Publishing Workshop" conducted by IEEE , Bangalore Section on 29th April'2016 held at NIEIT, Mysuru.
16. Participated in one day Workshop on "Experimentations with Analog Systems Lab Kit" organized by Department of Electronics & Communication Engineering in association with Texas Instruments, Bangalore on 8th January 2016 held at NIE Institute of Technology, Mysuru.
17. Participated in International Conference on "Emerging Research in Electronics, Computer Science and Technology (ICERECT-2015)" from 17th December to 19th December 2015 held at PES College of Engineering, Mandya.
18. Participated in National Workshop on "Statistical and Numerical Trends in Engineering" jointly organized by Bangalore Institute of Technology and Karnataka Science and Technology Academy (KSTA), DST, GoK during 29th to 30th July 2015 held at Bangalore Institute of Technology, Bangalore
19. Participated one day Awareness Programme on "Intellectual Property Rights for MSME's Researchers and Academicians " organized by National Law School of India University , Centre for Intellectual Property Rights and Advocacy (CIPRA) and Ministry of Micro, Small and Medium Enterprises (MSME) in association with The Confederation of Indian Industry (CIL), Mysuru and NIE Institute of Technology, Mysuru.
20. Participated one day workshop on "Computer- Aided Diagnosis of Retinopathy of Prematurity " on 23rd December 2014 held at PES College of Engineering, Mandya.
21. Participated in Workshop on "Practical Aspects of Networking" from 1st July'2014 to 3rd July 2014 held at Regional Telecom Training Centre, BSNL, Mysuru.
22. Participated in 2-week ISTE Workshop on "Signals and Systems " conducted by IIT Kharagpur under National Mission on Education through ICT ( MHRD, Govt of India) from 2nd January to 12th January 2014 held at PESCE, Mandya.
23. Participated in one day Complimentary Seminar on "MATLAB & Simulink for Engineering Education" on 30th Nov'2012 organized by Math Works India, Mysuru.
24. Participated at IGNIEIT as Organizer on 16th to 17th March, 2012 held at NIE Institute of Technology, Mysuru.
25. Participated one day Workshop on " Teaching Skills for Engineering Teachers " , organized by Department of Information Science & Engineering on 28th July 2011 at NIE Institute of Technology, Mysuru.
26. Participated in 2-week ISTE Workshop on " Basic Electronics" conducted by IIT Bombay under National Mission on Education through ICT ( MHRD, Govt of India) from 28th June to 8th July, 2011 held at Sri Jayachamarajendra College of Engineering, Mysuru.
27. Participated in one day Workshop on "SDR Based Wireless Communication System Design" on 27th November 2009 organized by Department of Telecommunication Engineering, Sponsored by BENCHMARK ELECTRONIC SYSTEMS PVT LTD., Chennai, held at BMS College of Engineering, Bangalore.

**MOOC Certifications**

1. NPTEL Courses
2. Precision Agriculture
3. Internet of Things
4. Evolution of Air Interface towards 5G
5. Introduction to professional Communication
6. Introduction to Wireless and Cellular Communications
7. Principles of Modern CDMA/MIMO/OFDM Wireless Communication
8. Control Engineering
9. Course Era Coutrses
10. Exploring C
11. 5G for everyone
12. Databases and SQL for Data science with Python
13. 5G Network architecture protocols
14. Principles and Technologies of 5G Mobile Networks
15. Spoken Tutorial Course
16. Java Programming

## Proposal/Funding/Project Financial Assistance

- Received Financial Assistance from KSCST for 6 student projects

## Patent

1. Title: Design And Development Of Wearable Assistive Device Support System For Blind And Visually Impaired People. Published/Granted: Patent published on 6/10/2023. Patent No: 202341065259
2. Title: AI Enhanced Natural Language Sentiment Analysis Device. Published/Granted: Published on 20/2/2026. Patent No: 479628-001

## Roles and Responsibilities: Institute Level

1. served as Head of the Department ,ECE in NIEIT Mysuru from 2023 to 2025
2. Served as Research coordinator from 2021 to 2022 at NIEIT
3. served as Convener ,Endowment Committee from 2023 to 2025
4. Member of IQAC Committee at NIEIT,Mysuru

## Roles and Responsibilities: Department Level

1. MoU Coordinator
2. Class Teacher
3. Served as Project coordinator for 3yrs at NIEIT
4. Served as Student Association Coordinator for 5yrs
5. Served as Head of the Department for 2terms`,
  },
  "ms-anupama-shetter": {
    name: "Prof. Anupama Shetter",
    url: "",
    md: `## Professional Experience

- Teaching: 9 years
- Research: 3 years
- Industry: 1 year

## Contact Details

- **Email ID:** Official: [anupamashetter_ec@atme.edu.in](mailto:anupamashetter_ec@atme.edu.in)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/201873>
- **Google Scholar ID:** <https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=anupama+shetter&btnG=>
- **Scopus ID:** <https://www.scopus.com/authid/detail.uri?authorId=57205387732>
- **Orcid ID:** <https://orcid.org/0000-0002-9727-5304>
- **Web of Science Researcher ID:** <https://www.webofscience.com/wos/author/record/AAB-1537-2019>
- **LinkedIn ID:** <https://www.linkedin.com/in/anupama-shetter-1279b8140?trk=contact-info>

## Academic Details

- **Qualification**
- **PhD** - pursuing in Medical Image Processing
- PG - Digital Electronics
- UG - Instrumentation Technology

## Areas of Interest

1. . Image Processing
2. Bio-Medical
3. Machine Learning & Deep learning

## Publication Details

**International**

1. Scopus-Indexed Journal Publications
2. Anupama Shetter, et al "Emerging Biomarkers in Cancer Diagnosis and Prognosis: Novel Approaches for Precision Oncology", Onkologia i Radioterapia, Vol. 18(9), 2024.
3. Non-Scopus-Indexed Journal Publications
4. Anupama Shetter, et al "Fusion of Computational Mathematics and Artificial Intelligence for Intelligent Decision-Making in Engineering and Technology," International Journal of Advances in Signal and Image Sciences, Vol. 12, No. 2s, pp. 1148–1164, Published on 10 February 2026, DOI: 10.29284/s6eze156.

## Membership in Professional Bodies

1. IAENG – International Association of Engineers
2. IEEE – Institute of Electrical and Electronics Engineers

## Honours/Awards/Achievements

**Awards Received**

1. Awarded with the Best Teacher Award for the academic year 2018–2019 by ATME College of Engineering, Mysuru.

**Notable Achievements**

1. Co-authored a textbook titled "Microprocessor and Its Applications", published by SIP Publications in September 2024. The ISBN for this publication is 978-9366746135.
2. The second book, titled "Artificial Intelligence and Machine Learning", is co-authored and is published under ISBN 978-93-48151-76-6.

## FDPs/Conferences/Workshops/STTP/MOOC Certification

**Faculty Development Programs (FDPs)**

1. Completed "The BodhiTree and SAFE Tools for Effective Online Teaching" Organized by: Teaching Learning Centre (ICT), IIT Bombay, Date: 20 June 2020
2. Completed "LaTeX101x: LaTeX for Students, Engineers, and Scientists", Organized by: IITBombayX, Duration: 24 Sep – 2 Dec 2019 | Grade A+
3. Completed 4-week online course on Workplace Communication, Platform: IIT BombayX, Duration: Jan – May 2021
4. Completed "Python" Spoken Tutorial Certification, Organized by: IIT Bombay, 2020
5. Participated in Two-Week FDP (40 hrs) on "Deep Learning & Applications (Parallel Architectures)" Organized by: E&ICT Academies – IIT Guwahati, IIT Kanpur, IIT Roorkee, MNIT Jaipur, NIT Patna, NIT Warangal, IIITDM Jabalpur, Duration: Aug 23 – Sep 3, 2021
6. Participated in AICTE-ATAL FDP – "Internet of Things (IoT)", Babasaheb Bhimrao Ambedkar University (5–9 Oct 2020)
7. Participated in AICTE-ATAL FDP – "Intelligence and Machine Learning in Biomedical Engineering", UBDTCE (21–25 Sep 2020)
8. Attended AICTE-Sponsored STTP (Phase III) – "Design of Knowledge-Based Systems using AI/ML for Agriculture & Food Products", MIT MAHE (12–17 Oct 2020)
9. Attended FDP on "Engineering Statistics and Linear Algebra", VVCE, Mysuru (27–31 Jan 2020)
10. Attended 3-Day FDP on "Intellectual Property Rights in Engineering Education", ATMECE, Mysuru (29–31 Jul 2020)
11. Attended 3-Day FDP on "Importance of NAAC Accreditation in HEI"
12. Participated in FDP on "How to Crack VTU Ph.D. Coursework in Research Methodology and IPR (16PHDRM)", JNNCE, Shimoga (2–6 Nov 2020)

**Conference Papers**

1. IEEE Xplore / Scopus-Indexed Conference Publications
2. Anupama Shetter, Raj V.G., Vishveshwara B.S., et al., "Standalone Platform-Level Interrupt Controller with Pre-Interrupt Thresholds," 17th International Conference on Advances in Computing, Control and Telecommunication Technologies (ACT 2026), 2026.
3. Anupama Shetter, Sneha M., Shobith B.R., et al., "Nightfall-EX Advanced: An Offline TinyML-Based Portable ECG Monitoring and Emergency Alert System," Proceedings of the International Conference on Emerging Research in Smart Electronics and Machine Informatics (ECMI 2026), 2026. DOI: 10.1109/ECMI68341.2026.11603095.
4. Anupama Shetter, et al., "Efficient Image and Video Data Coding with DWT and Adaptive Huffman for Intelligent Decision Systems," 2025 International Conference on Decision Aid Sciences and Applications (DASA), IEEE, 2025. DOI: 10.1109/DASA68193.2025.11499062
5. Anupama Shetter, et al., "Nightfall-EX Advanced: An Offline TinyML-Based Portable ECG Monitoring and Emergency Alert System," 2026 International Conference on Emerging Research in Smart Electronics and Machine Informatics (ECMI), IEEE, 2026. DOI: 10.1109/ECMI68341.2026.11603095
6. Anupama Shetter, et al., "Musical Instrument Classification Using Deep Learning CNN Models", 2024 IEEE International Conference on Intelligent Computing and Intelligent Systems (ICI-CIS), IEEE Xplore, DOI: 10.1109/ICIICS63763.2024.10859695, pp. 1–7.
7. Anupama Shetter, et al "Blockchain Based Authentication Scheme to Secure Fog Enabled IoT Devices", 2023 IEEE International Conference on Contemporary Computing and Communications (InC4), Apr 21–22, 2023. IEEE Xplore.
8. IEEE Xplore: <https://ieeexplore.ieee.org/document/10859695>
9. Anupama Shetter, et al., "Digital Image Watermarking Based on Sine Transformation with Constant Co-Efficient", International Conference on Inventive Research in Computing Applications (ICIRCA 2018), IEEE, pp. 21–24, ISBN: 978-1-5386-2456-1.
10. IEEE Link: <https://doi.org/10.1109/ICIRCA.2018.8597431>
11. Anupama Shetter, et al., "Digital Image Watermarking using Tenth Root of Exponential Function", 2018 3rd IEEE International Conference on Recent Trends in Electronics, Information & Communication Technology (RTEICT-2018), IEEE Xplore, ISBN: 978-1-5386-2440-1.
12. IEEE Link: <https://ieeexplore.ieee.org/document/8502580>
13. Anupama Shetter, et al., "Finger Print Image Enhancement using Thresholding and Binarization Techniques", 2nd International Conference on Inventive Communication and Computational Technologies (ICICCT 2018), IEEE Xplore Compliant, ISBN: 978-1-5386-1974-2.
14. Anupama Shetter, et al., "Image De-Noising using Filtering and Equalization Techniques", 3rd IEEE International Conference on Recent Trends in Electronics, Information & Communication Technology (RTEICT-2018).
15. Anupama Shetter, et al., "Rural eLearning: An Efficient Strategy to Educate Farmers or Villagers", International Conference on Recent Trends in Science and Technology – July 14–15, 2022.
16. Other Conferences (ICRTST – ATME Mysuru, National Conferences)
17. Anupama Shetter, "MEMORY CONTROLLER WITH AN AHB PROTOCOL", International Conference on Recent Trends in Science and Technology (ICRTST – 2023), Mysuru.
18. ICRTST 2023 Conference Link: <https://icrtst.atme.edu.in/>
19. Swapna H, Anupama Shetter, "Low-Cost Design of Women's Safety Jacket with GPS and GSM Integration", ICRTST – 2023, Mysuru.
20. ICRTST 2023 Conference Link: <https://icrtst.atme.edu.in/>
21. Anupama Shetter, et al., "Development of an Autonomous Wall Painting Mobile Robot using Raspberry Pi", ICRTST – 2022, July 2022.
22. Anupama Shetter, et al., "Self-activating Sanistation and Real-time Mask Detection System", ICRTST – 2021, Mysuru.
23. Anupama Shetter, et al., "MRI Medical Image Denoising and Enhancement using Fundamental Filters", ICRTST – 2021, Mysuru.
24. Anupama Shetter, et al., "Detection of Various Stages of Lung Cancer", ICRTST – 2020, Mysuru.
25. Anupama Shetter, et al., "Agricultural Automation Using IoT", International Conference on Recent Trends in Science and Technology (ICRTST – 2020), International Journal of Research in Engineering and Technology (IJRET), pp. 489–493, ISSN: 2395-0072.
26. Other Journal Publications
27. Anupama Shetter, et al., "High Speed DAS using Aurora Protocol with Error Detection", International Journal of Engineering Science and Computing (IJESC), Volume 6, Issue 6, ISSN: 2321 3361, 2016.
28. Anupama Shetter, et al., "Selection & Performance Analysis of Spreading Sequences for DS-CDMA Systems", International Journal of Innovative Research in Science, Engineering and Technology (IJIRSET), Volume 7, Issue 6, June 2018.

**Workshops Attended**

1. 5 Days workshop on "PCB Design and Fabrication" conducted by Altium Training Centre at Bannari Amman Institute of Technology, Sathyamangalam, Tamil Nadu from 13th Oct 2025 to 17th Oct 2025.
2. Twelve-Day Workshop on "Emerging Design, Innovation and Technology (EDIT): Medical Device Design", Organized by: Department of Design, IIT Roorkee, Date: 23rd May 2023
3. Participated in National Workshop on Outcome-Based Education & Accreditation, GH Raisoni Institute, Nagpur (11 Sep 2020)
4. Participated in 3-Day Workshop – "Innovative Technologies to Improve Quality of Teaching & Learning", GH Raisoni Institute, Nagpur
5. Attended Webinar and Workshop – "LabVIEW", LabVIEW Academy, SJBIT, Bengaluru (4–8 May 2020)
6. Industrial Trainings
7. Completed 2-Week Faculty Industrial Training on "Electronics Manufacturing & PCB Assembly with Quality Control" at SS Technology, Mysuru, from 26 June 2026 to 11 July 2026.
8. Completed Industrial Training at Renal Health Care Products Pvt. Ltd., Bangalore (27 Sep – 1 Oct 2021)

**STTP (Short-Term Training Programmes)**

1. Five-Day STC on "Artificial Intelligence and Machine Learning Techniques for Engineering Applications: Theory and Practice", Organized by: NIT Puducherry, Department of EEE Duration: 26th Feb – 1st Mar 2024

**MOOC Certifications**

1. Completed NPTEL-SWAYAM Course on "Education for Sustainable Development", AY 2025–26 (Jan–Apr 2026).
2. Completed NPTEL-SWAYAM Course on "Intellectual Property", AY 2025–26 (Jan–Apr 2026).
3. Completed NPTEL-SWAYAM Course on "Introduction to Internet of Things", AY 2025–26 (Jan–Apr 2026).
4. Completed Course on "Altium Designer Essentials – On Demand (English)", November 2025.
5. Completed Course on "Patent Filing India", AY 2025–26.
6. Completed Course on "Python for Machine Learning & Data Science", AY 2025–26.
7. Completed ARPIT-SWAYAM Course on "Pedagogical Innovations & Research Methodology", 2019–20
8. Completed NPTEL Course – "Teaching and Learning in General Programs (TALG)", 2019
9. NITTTR – AICTE NITTT Modules Completed
10. Module 1: Orientation Towards Technical Education & Curriculum Aspects (Sep–Oct 2020)
11. Module 2: Professional Ethics & Sustainability (Apr–May 2021)
12. Module 3: Communication Skills & Knowledge Dissemination (Apr–May 2021)
13. Module 4: Instructional Planning and Delivery (Sep–Oct 2021)
14. Module 5: Technology Enabled Learning & Lifelong Self-Learning (Apr–May 2022)
15. Module 6: Student Assessment and Evaluation (Apr–May 2022)
16. Module 7: Creative Problem Solving, Innovation and Meaningful R&D (Completed)
17. Module 8: Digital Skills (Completed)

## Proposal/Funding/Project Financial Assistance

1. Guide for KSCST Sponsored Student Project (49th Series, 2025–26): "Agricultural Robot for Plant Disease Detection, Fertilizer Spraying, and Weed Cutting", sanctioned by Karnataka State Council for Science and Technology (KSCST), Government of Karnataka. with a sanctioned amount of ₹5,500
2. Guided the project titled "IoT-Based Food Spoiling Detection using Arduino and GSM", funded by KSCST under the 48th Series (AY 2024–2025) with a sanctioned amount of ₹4,000 (Ref. No. 48S_BE_5044).
3. Guided the project titled "Spine Serenity: Smart Relief Massager", funded by KSCST under the 47th Series (AY 2023–2024) with a grant of ₹6,500 (Ref. No. 47S_BE_4623).
4. Guided the project titled "Detection and Surveillance of UAV Based on RF and Radar Technology", funded by KSCST in the 46th Series (AY 2022–2023) with a sanctioned amount of ₹6,000 (Ref. No. 46S_BE_4182).
5. Guided the project "Development of an Autonomous Wall Painting Mobile Robot using Raspberry Pi", funded by KSCST in the 45th Series (AY 2021–2022) with a grant of ₹6,000 (Ref. No. 45S_BE_4133).
6. Guided the project "Agricultural Robot using IoT", funded by KSCST in the 43rd Series (AY 2019–2020) with a sanctioned amount of ₹5,000 (Ref. No. 43S_BE_0873).
7. Guided the project titled "Self-activating Sanistation and Real-time Mask Detection System", which received funding support from VTU Financial Assistance Scheme for the academic year 2020–2021.
8. Guided the innovation project titled "Farm to Table", funded under the K-Tech NAIN scheme through ATME College of Engineering, Mysuru, with ₹6,0000 promoting entrepreneurial solutions in agriculture and supply chain

## Patent

1. Title: Integrated Smart Building Management System Using Arduino and LabVIEW. Published/Granted: Published. Patent No: 202541122550 A
2. Title: Sustainable Power Generation through Integrated Waste-to-Energy Systems. Published/Granted: Published. Patent No: 202541122446 A
3. Title: Adaptive Saffron Aeroponic Chamber with Multi-Parameter Climate Optimization. Published/Granted: Published. Patent No: 202541122549 A
4. Title: A Novel Deep Learning Based Automated Cybersecurity System and Method Thereof. Published/Granted: Published. Patent No: 202441024310 A
5. Title: Sensor-Based Intelligent Wearable Neck Patch to Detect and Diagnose Early Warning Signs of Strokes. Published/Granted: Published. Patent No: 202241061148 A
6. Title: IoT-Based Infectious Disease Examination System and Method. Published/Granted: Published. Patent No: 202241056170 A

## Roles and Responsibilities: Institute Level

1. Member – Anti-Ragging Committee
2. Member – Grievance Redressal Committee
3. Member – IQAC Core Committee
4. Treasurer – Alumni Association Executive Committee
5. Member- STUDENTS COMPETITION & EXHIBITION COMMITTEE
6. Member- LIBRARY COMMITTEE
7. Member- ACCREDITATION & ISO

## Roles and Responsibilities: Department Level

1. Department Secreatary
2. ISF (IETE Students' Forum) Coordinator
3. NBA Coordinator
4. Co-curricular & Extra Curricular Coordinator
5. Academic coordinator`,
  },
  "ms-mythri-r": {
    name: "Ms. Mythri R",
    url: "",
    md: `## Professional Experience

- Teaching: 6.5
- Research: 2
- Industry: 0

## Contact Details

- **Email ID:** Official: [mythrir_ec@atme.edu.in](mailto:mythrir_ec@atme.edu.in)
- **Vidwan ID:** 455139
- **Google Scholar ID:** Nil
- **Scopus ID:** Scopus Author ID: 57216223289
- **Orcid ID:** 0000-0001-5137-5310
- **Web of Science Researcher ID:** Nil
- **LinkedIn ID:** linkedin.com/in/mythri-r-b48b09a3

## Academic Details

- **Qualification**
- PG – Industrial Electronics
- UG – Electronics and Communication Engineering

## Areas of Interest

1. Embedded
2. VLSI.

## Publication Details

**National**

1. Akshay Sai, Prajwal Joshi, Mythri R, Lavanya M S, Parameshwara S " Simulation on effect of graphene nanofillers interaction with epoxy matrix nanocomposite" National Conference on Recent advancements in mechanical and material sciences (NCRAMMS)" The National Institute of Engineering , Mysuru, Karnataka , India. 7th -8th July 2022.

**International**

1. Santhy P. Kuruvilla, N. M. Renukappa, Mythri R and J Sundara Rajan; "Assessment of Hydrophobicity of Silicone and Fibre reinforced filled Epoxy Composites under contamination" IEEE Transactions on Dielectrics and Electrical Insulation, Vol. 27, No. 2, 2020
2. Hadimani Shivakumar , N. M. Renukappa , Mythri R , Kunigal Shivakumar "Thermal properties of Epoxy-GnP based Nanodielectrics" International Conference on Electrical, Electronics, Computers, Communication, Mechanical and Computing (EECCMC), Priyadarshini Engineering College, Vellore District, Tamil Nadu, India. 28th-29th January 2018
3. Hadimani Shivakumar, N. M. Renukappa, Mythri.R and SundaraRajan "High k Dielectric properties of Epoxy-GnP Nanocomposites" 3rd international Conference on Innovative ,Design ,Analysis & Development Practices in Aerospace and Automotive Engineering (I-DAD), Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Chennai,Tamil Nadu, India. 22th -24th February, 2018
4. Santhy P. Kuruvilla, N. M. Renukappa, Mythri R, "Investigation on Leakage Current Characteristics of Glass fiber Reinforced Epoxy Composite Insulator under Different levels of Pollution" International conference on Recent Advances in Materials and Manufacturing Technology(ICRAMMT), Marri Laxman Reddy Institute of Technology & Management, Telangana, India. 19th -20th November 2018

## Membership in Professional Bodies

- Nil

## Honours/Awards/Achievements

- Nil

## FDPs/Conferences/Workshops/STTP/MOOC Certification

**Faculty Development Programs (FDPs)**

1. Participated in 1 week ATAL FDP on Bits to Qubits: Transforming Technology with Quantum Computing at HKBK college of Engineering from 05th to 10th Jan 2026.
2. Participated in 3 days State level FDP on "Unlocking Gen AI – foundation to NLP to prompt engineering" from 10th – 12th feb 2025, held at ATME college of Engineering, Mysuru.
3. Participated in 2 week ATAL advanced FDP on "Next-Gen system on chip design for advanced semiconductor solution" at RV college of Engineering , from 12th to 24th Aug 2024.
4. Participated in 3 days national level symposium on "Application of Image processing technique in the field of Electronics communication and civil engineering" from 6th - 8th Nov 2023, held at ATME college of Engineering, Mysuru.
5. Participated in 5 days FDP on "VLSI to system design : Silicon to end application" organized by AICTE, Arm Education and STMicroelectronics, on 31th July- 4th Aug 2023.
6. Participated in 5 days FDP on "Innovation VLSI physical design using Innovus" organized by Dept. of Congnitive Computing, SIMATS school of Engineering , Chennai on 9th - 13th Jan 2023.
7. Participated in 3 days FDP on "SoC Design Methodology using Intel FPGAs" organized by Dept. of ECE, NITK Surathkal in association with Intel India on 1st - 3rd Dec 2022.
8. Participated in 5 days workshop on "Advances in VLSI design using Cadence" organized by Dept. of ECE, The National institute of Engineering , Mysuru on 17th - 21st Oct 2022.
9. Participated & completed successfully AICTE ATAL academy, Online Elementary FDP on "Intelligent and Collaborative Robotics" from 13th - 17th Sep 2021 at Birla Institute of Technology & Science, Pilani, Pilani Campus.
10. Participated in 3 days workshop on "Embedded systems-An application driven approach" organized by AICTE ATAL academy, STMicroelectronics and ARM education, from 25th - 27th Aug 2021.

**MOOC Certifications**

1. NPTEL Online Certification : Fundamentals of Electronic Device Fabrication, 4 week July - Aug 2025
2. NPTEL Online Certification : The joy of computing using python, 12 weeks , July - Oct 2024
3. NPTEL Online Certification : VLSI Design Flow – RTL to GDS , 12 weeks , July - Oct 2023

## Roles and Responsibilities: Institute Level

1. Promotional Team Activity
2. UHV cell member

## Roles and Responsibilities: Department Level

- EMS coordinator`,
  },
  "dr-veeraprathap-v": {
    name: "Dr. Veeraprathap V",
    url: "",
    md: `## Professional Experience

- Teaching: 14
- Research: 06
- Industry: 0

## Contact Details

- **Email ID:** Official: [Dr.Veeraprathapv.ec@atme.edu.in](mailto:Dr.Veeraprathapv.ec@atme.edu.in)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/523382>
- **Google Scholar ID:** <https://scholar.google.com/citations?user=DlLwrvYAAAAJ&hl=en>
- **Scopus ID:** <https://www.scopus.com/authid/detail.uri?authorId=58538673700>
- **Orcid ID:** <https://orcid.org/0000-0003-3354-1826>
- **Web of Science Researcher ID:** Nil
- **LinkedIn ID:** <https://www.linkedin.com/in/dr-veeraprathap-veerabhadraiah-21a2aa26/>

## Academic Details

- **Qualification**
- **PhD** - Wireless Sensor Networks From UVCE, Bangalore University
- PG - Digital Electronics
- UG - Electronics & Communication Engineering

## Areas of Interest

1. Wireless Sensor Networks
2. Signals & Systems
3. Digital Signal Processing
4. Digital System Design
5. Digital Electronics
6. Digital Communication.

## Publication Details

**International**

1. Enhanced machine learning models for accurate breast cancer mammogram classification-2025/1/1 Global Transitions
2. Automated raga recognition in Indian classical music using machine learning techniques-2025 Journal of Integrated Science and Technology
3. Advanced machine learning techniques for prognostic analysis in breast cancer-2025/1/28 The Open Bioinformatics Journal
4. Optimized machine learning techniques for precise breast cancer detection in mammograms-2025/4/15 SN Computer Science
5. Machine learning based 64-QAM classification techniques for enhanced optical communication-2023/10 Optical and Quantum Electronics
6. An optimized efficientnet-b0 framework for multi-class brain tumour detection and classification from mri images-2026/6/1 Biomedical and Pharmacology Journal
7. Automated raga recognition in Indian classical music using machine learning -Journal of Integrated Science and Technology
8. Accurate Mammogram classification for Breast Cancer detection using Transfer Learning-based CNN models-2026/3/17 Journal of Integrated Science and Technology
9. Optimized Image Compression Using Multiple Compressed Sensing Techniques-2025/4/10 SN Computer Science
10. Enhanced machine learning models for accurate breast cancer mammogram classification -Global Transitions 2025/3/22
11. INTELLIGENT SYSTEMS AND APPLICATIONS IN ENGINEERING

## Membership in Professional Bodies

- ISTE,IEI,IAENG

## Honours/Awards/Achievements

- Nil

## FDPs/Conferences/Workshops/STTP/MOOC Certification

**Faculty Development Programs (FDPs)**

1. Five-day Faculty Development Program on "Cyber Security Awareness and Emerging Technologies "at ATMECE,Mysuru from 10th to 14th March 2025
2. Three-day Workshop on "Patent Drafting, Filing & Interpretation" "at ATMECE, Mysuru from 12th to 14th June 2025.
3. 5 Day FDP on "AI for Disaster Resilience: Prediction, Preparedness, and Post-Disaster management at NIT Calicut from Dec 15-19 2025

**Conference Papers**

1. International Conference on Data Science and Network Security (ICDSNS) at Tiptur Karnataka on 26/07/2024
2. International Conference on Data Science and Exploration in Artificial Intelligence (CODE AI 2025)At MAHE campus Dubai on 7th & 8th April 2025
3. 5th National Conference on Electronics and Communication Engineering (NCIEC-2025) at East point Institute of Technology Bengaluru on 5th May 2025.

**MOOC Certifications**

1. Psychology of Everyday
2. NBA Accreditation and Teaching and learning in Engineering (NATE)
3. Introduction to Internet of Things
4. OBE and Accreditation
5. Patent Law for Engineers and Scientists
6. Computer Network & Internet Protocol

## Proposal/Funding/Project Financial Assistance

- Nil

## Patent

1. Title: IOT based electric fencing monitoring system in agricultural farm. Published/Granted: Published. Patent No: 202341025395.
2. Title: Design and Implementation of Stochastic Resource Algorithm for Interweave and Underlay Conditions in Cognitive Radio Networks. Published/Granted: : Published. Patent No: 202341052412.

## Roles and Responsibilities: Institute Level

1. Institute Level SEEL Coordinator
2. Institute Level Research grants/Proposal Coordinator

## Roles and Responsibilities: Department Level

1. NBA 5 Criterion Coordinator
2. NAAC 1 Criterion Coordinator
3. Internship Coordinator
4. Vertical Head`,
  },
  "mrs-shalini-hanok": {
    name: "Dr. Shalini Hanok",
    url: "",
    md: `## Professional Experience

- Teaching: 10 Years
- Research: 8 Years
- Industry: NIL

## Contact Details

- **Email ID:** Official: [dr.shalinihanok_ec@atme.edu.in](mailto:dr.shalinihanok_ec@atme.edu.in)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/294599>
- **Google Scholar ID:** <https://scholar.google.com/citations?user=qsAtHvgAAAAJ&hl=en>
- **Scopus ID:** <https://www.scopus.com/authid/detail.uri?authorId=58133866900>
- **Orcid ID:** <https://orcid.org/my-orcid?orcid=0000-0001-5639-8415>
- **Web of Science Researcher ID:** <https://www.webofscience.com/wos/author/record/GRO-7241-2022>
- **LinkedIn ID:** <https://www.linkedin.com/in/dr-shalini-hanok-2262a6162/>

## Academic Details

- **Qualification**
- **PhD** – Network Security
- PG – Mtech in Digital Electronics and Communication
- UG – BE in Electronics and Communication Engineering

## Areas of Interest

1. Cybersecurity
2. Machine Learning and Deep Learning
3. Data science and AI
4. Python Programming

## Publication Details

**International**

1. Journal Publication:
2. Gagana, S. L., Hanok, S., Ganavi, B. N., Akash, L. & Gowda, M. M. (2026). "Maize Identification and Categorization of Leaf Diseases Using Machine Learning. Indiana Journal of Multidisciplinary Research, 6(4), ISSN (Online)- 2583-3820, Volume-06|Issue-04|2026, 164-168. https://doi.org/10.5281/zenodo.21600476.
3. Meghana, T., Hanok, S., Dharanya, R.,Aishwarya, K. N. & Dhanush, C. (2026). "Leaf Disease Detection Using Deep Learning. Indiana Journal of Multidisciplinary Research", ISSN (Online)- 2583-3820, Volume-06|Issue-04|2026 , 6(4), 169-172.
4. Sachin B Jadhav, Shalini Hanok, Tigulla Rajitha, Dr. R. Balakrishnan, Mr. Venkoba Kutagamari, Dr. Rajendra Kumar Ganiya. (2026). "Digital Rights and Data Privacy In The Era Of Artificial Intelligence: Legal Challenges, Ethical Considerations, And Global Regulatory Frameworks." Scientific Culture, 12(4), Vol. 12, No. 4, (2026), pp. 7359-7368 https://doi.org/10.5281/zenodo.20078691
5. Chethan Raj C, Jeevitha R, Shoieb Ahamed , Kavyashree M K, Nandini G S, Shalini Hanok "Optimized Hybrid Learning Approach For Autism Spectrum Disorder Detection" International Journal Of Applied Mathematics Volume 38 No. 12s, 2025 ISSN: 1311-1728, ISSN: 1314-8060, 2nd December 2025.
6. Vijay, C.P., Thejaswini, R., Hanok Shalini. et al. Deep Learning Models for Accurate Detection of COVID-19 Pneumonia from Chest X-Ray Images. SN COMPUT. SCI. 6, 758 (2025). https://doi.org/10.1007/s42979-025-04301-w
7. Paramesha, K., Jalapur, Shalini Hanok, S. et al. Machine Learning and Deep Learning Approaches for Guava Disease Detection. SN COMPUT. SCI. 6, 361 (2025). https://doi.org/10.1007/s42979-025-03886-6.
8. Shalini Hanok, Navya N, Kavyashree M K, Anupama S "Statistical Authentication Technique for Facebook using Social Network Analysis" Journal of Propulsion Technology (Scopus-Q3), December 2023.
9. Shalini Hanok and Shankaraiah "In Loco Identity Fraud Detection Model using Statistical Analysis for Social Networking Sites: A case study with Facebook"- International Arab Journal of Information Technology (IAJIT) (SCI Expanded Journal, Impact factor - 0.967, Q3), March 2023. doi: 10.34028/iajit/20/2/15.
10. Shalini P and Shankaraiah "Multimodal Biometric Decision Fusion Security Technique to Evade Immoral Social Networking Sites for Minor"--Applied Intelligence (SCI Journal, Impact factor - 5.086, Q1), May 2022. https://doi.org/10.1007/s10489-022-03538-9
11. Shalini P and Shankaraiah "Social Behavioral Biometric Multimodal Union to Evade Fake Account Creation in Facebook"-- Multimedia Tools and communication (SCI Expanded Journal, Impact factor - 2.577, Q1), May 2022. https://doi.org/10.1007/s11042-022-13104-7.

## Membership in Professional Bodies

1. ISTE Lifetime membership ID: LM145733
2. IAENG membership number is: 391326.

## Honours/Awards/Achievements

**Awards Received**

1. Indian Excellence Award for "Best Researcher Award" by Jataayu Staffing Force Private Limited, Mysuru on 19th June 2022.

**Notable Achievements**

1. Completed AICTE-QIP-PG Program on "Cybersecurity" at IIIT Dharwad. 1 month-offline and 5 months online with a CGPA of 9.7.

## FDPs/Conferences/Workshops/STTP/MOOC Certification

**Faculty Development Programs (FDPs)**

1. Online FDP on "AI Driven Technologies in Electronics and Communication Engineering" from 2nd to 6th March 2026.
2. One day FDP on "Growing Globally Competitive Currency in Higher Education" Delivered by Futred Innovation Studios, Australia on 8th October 2025 at ATMECE,Mysuru.
3. Offline FDP on "Cybersecurity Phase 1" from 7th July 2025 to 18th July 2025 at IIIT Dharward.
4. Offline FDP on "Cybersecurity Phase 2" from 8th December 2025 to 20th December 2025 at IIIT Dharward.
5. Symposium on "Application of image processing techniques in the field of Electronics and Communication and Civil Engineering" 6th to 10th November 2023, ATME College of Engineering, Mysore.
6. Offline FDP on "Advanced communication using USRP and LabView" from 25 th September to 27 th September 2023, ATME College of Engineering, Mysore.
7. Offline FDP on "Inculcating Universal Human Values in Technical Education" from 7th September to 9th September 2023, Vidya Vardhaka College of Engineering, Mysore.
8. Online FDP on "Outcome Based Education and Essential AI Tools for Teachers" from 10th August to 18th August 2023, organised by the Internal Quaiity Assurance Cell (IQAC) of Carmel College (Autonomous), Mala in association with The Kerala State Higher Education Council (KSHEC).
9. Faculty Development Program on "Cybersecurity, Network Simulators and Research Challenges in Networking", from 21st to 25th January 2019, Department of Computer Science & Engineering, Vidyavardhaka College of Engineering, Mysuru, Karnataka.
10. Offline FDP on "Network Simulator-2", from 17th to 19th August 2017, Department of Computer Science & Engineering, Vidyavardhaka College of Engineering, Mysuru, Karnataka.

**Conference Papers**

1. Gagana S L, d Shalini Hanok, Ganavi BN, Akash L, Mrudula M Gowda "Maize Identification and Categorization of Leaf Diseases Using Machine Learning" Springer conference proceeding International Conference on Digital Technology and Engineering (ICDTE -2025), 16th & 17th October, 2025.
2. Meghana T, Shalini Hanok, Dharanya R, hAishwarya K N, Dhanush C "Leaf Disease Detection Using Deep Learning" Springer conference proceeding International Conference on Digital Technology and Engineering (ICDTE -2025), 16th & 17th October, 2025.
3. Shalini Hanok, Veeraprathap V, and Swetha K T and Simran Pal R "Unimodal Biometric Authentication System using Social Network Analysis" International conference on 'Next generation devices & smart computing application" (ICNGSDSCA-2024) In association with Springer, Cambridge institute of technology, Bangalore, December 2024.
4. Shalini P and Shankaraiah, "A Novel Technique to regulate access to immoral content for Minors"-Accepted and published in IEEE conference on 2019, 7th International Conference on Smart Computing & Communications (ICSCC-2019), Miri, Sarawak, Malaysia.
5. Shalini P and Kavyashree M K, "Survey On Various Mac Layer Backoff Algorithms in IEEE 802.15.4" International Conference On Emerging Trends In Science And Engineering(Icetse-2017), Coorg Institute Of Technology, Ponnampet, Kodugu, Karnataka.

**Workshops Attended**

1. Workshop on "Research proposal writing" by Indian ledge system organized by ICMR, Hyderabad from 17th -18th February 2023. Submitted research proposal on 25th Feb 2023.
2. Workshop on "Research Proposal Preparation", from 5th to 6th September 2019, Department of Electronics and Communication Engineering, SJCE, JSS Science and Technology University, JSS TI Campus, Mysuru, Karnataka.
3. A Tutorials on "Deriving a Machine Learning Model for Identifying Meteoroids", 28th June 2019, Miri, Sarawak, Malaysia.
4. Workshop on "Cybersecurity for Water Management Systems in 21st Century", 29th June 2019, Miri, Sarawak, Malaysia.
5. Workshop on "Hands on Practice with VISUAL TCAD", from 9th March to 15th March 2019, Department of Electronics and Communication Engineering, SJCE, JSS Science and Technology University, JSS TI Campus, Mysuru, Karnataka.
6. Workshop on "Research Methodologies", from 18th to 19th November 2017, JSS Science and Technology University, JSS TI Campus, Mysuru, Karnataka.

**STTP (Short-Term Training Programmes)**

1. 5-day Short Term Training Program on "Application of Deep Learning in Multidisciplinary Area" organized by the Department of Information Technology, National Institute of Technology Karnataka (An Institute of National Importance under Ministry of Education, Govt. of India), Suratkal-575025 from 1st -5th July 2024.

**MOOC Certifications**

1. Online Udemy course on "Innovation and Technology for Teaching and Learning" 22nd June 2026
2. Online FDP on "AI Driven Technologies in Electronics and Communication Engineering" from 2nd to 6th March 2026.
3. NPTEL course on "Computer Networks and Internet Protocol" Jan- April 2026
4. NPTEL course on "NBA Accreditation and Teaching and Learning in Engineering (NATE)" Jan-April 2025
5. Completed Advanced certification in "Data Science and AI" for a duration of September 2022 to September 2023, from IIT Madras-Digital Skills Academy's Programme, Intellipaat Software Solutions Pvt. Ltd.

## Proposal/Funding/Project Financial Assistance

- Nil

## Patent

1. Title: Floating Waste Collecting Robot. Published/Granted: Published. Patent No: 202541122442.

## Roles and Responsibilities: Institute Level

- Member IIC committee

## Roles and Responsibilities: Department Level

1. Department Research coordinator
2. MoU file Incharge
3. Internship Coordinator
4. NAAC Criteria 3 Coordinator
5. NBA Criteria 5 Coordinator
6. Class teacher 3rd sem for AY:2026-27`,
  },
  "mr-girish-m": {
    name: "Mr. Girish M",
    url: "",
    md: `## Professional Experience

- Teaching: 11 Years
- Research: Nil
- Industry: Nil

## Contact Details

- **Email ID:** Official: [girishm_ec@atme.edu.in](mailto:girishm_ec@atme.edu.in)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/201866>
- **Google Scholar ID:** <https://scholar.google.com/citations?user=HFf8vrIAAAAJ&hl=en>
- **Scopus ID:** <https://www.scopus.com/authid/detail.uri?authorId=57215744207>
- **Orcid ID:** <https://orcid.org/0000-0002-3681-1513>
- **Web of Science Researcher ID:** Nil
- **LinkedIn ID:** <https://www.linkedin.com/in/girish-m-53493078/>

## Academic Details

- **Qualification**
- PhD - Pursuing
- PG - M.Tech in Digital Electronics and Communication Systems
- UG - B.E in Electronics and Communication Engineering

## Areas of Interest

1. Embedded Systems
2. Electromagnetics, Microwaves and antenna

## Publication Details

**National**

1. Word Repetition Analysis in Stuttered Speech Using MFCC and Dynamic Time Warping, International Journal of Science, Engineering and Technology (IJSET),PP 2395-4752.

**International**

1. Rural E-learning: An Efficient Strategy To Educate Farmers Or Villagers, conference paper ICRTST, Year 2022
2. IoT BUILDING MANAGEMENT SYSTEM FOR SCIENCE AND TECHNLOGY INOVATIVE HUB FOR RURAL DEVELOPMENT, conference proceedings ICRTST, Year 2022
3. 5G Phased-array Beamforming Antenna Design for Future Communication technologies, conference proceedings ICRTST, Year 2021
4. ARDUINO BASED AQUARIUM MONOTORING SYSTEM , journal article, IRJET, Year 2019
5. Switching Control of Multi- LQRs for UPFC in Power System, conference paper International Conference for Convergence in Technology 2018, Volume 6, Year 2018
6. Double stegging design to hide message in video using AES and DWT methods, conference paper IEEE, Year 2018
7. Vehicular Communication Based Intelligent Collision Warning System, article IJCAR, Year 2018
8. EFFICIENT APPROACH FOR DIGITAL AUDIO WATERMARKING SCHEME, article IJCRT, Year 2018
9. Automated Toll Collection per Kilometer in Toll Plaza, article IJSRD, Year 2018
10. Image Compression using AMBTC, article International Journal of Electronics, Electrical and Computational System, Volume 5, Year 2016

## Membership in Professional Bodies

1. Indian Society for Technical Education (ISTE) Lifetime member
2. IAENG

## Honours/Awards/Achievements

**Awards Received**

1. Best Paper Award, KIT, Tiptur
2. Obtained CLAD (Certified LabVIEW Associate Developer) Certification from NI LabVIEW.
3. Guided Project on "Automated toll collection per Kilometer in toll plaza" is Approved and Sanctioned with fund from Govt. body KSCST
4. Guided Project on "Intellivision: Blind Assist System" is Approved and Sanctioned with fund from Govt. body KSCST

## FDPs/Conferences/Workshops/STTP/MOOC Certification

**Faculty Development Programs (FDPs)**

1. One week FDP on Introduction to Swift Language
2. One week FDP on Recent Trends in IoT and Cloud Computing
3. Two-week FDP on Python
4. One week FDP on Machine Learning using Python
5. One week FDP on contemporary tools in Education 4.0
6. Organized Three-day FDP on Importance of NAAC Accreditation in HEI
7. Organized three Day FDP on Intellectual Property Rights in Education
8. Participated one week workshop on Industry export management system conducted by DIC, Mysore
9. Participated one week workshop on NAAC conducted by Govt Tool Room, Jharkhand
10. PCB Design using Altium at BIT, Tamilnadu
11. OBE and NBA Accreditation at GEC Wayanad

**Conference Papers**

1. Rural E-learning: An Efficient Strategy To Educate Farmers Or Villagers, conference paper ICRTST, Year 2022
2. IoT BUILDING MANAGEMENT SYSTEM FOR SCIENCE AND TECHNLOGY INOVATIVE HUB FOR RURAL DEVELOPMENT, conference proceedings ICRTST, Year 2022

**Workshops Attended**

1. Import Export Management System conducted by District Industry Centre, Mysuru
2. LabVIEW Interfacing with hardwares conducted by Nagarjuna College of Engineering, Bengaluru

**MOOC Certifications**

1. Certified LabVIEW Associate Developer

## Proposal/Funding/Project Financial Assistance

1. IoT based food spoilage detection system in 2025-26 funded by KSCST
2. Intellivision: Blind Assist System 2023-24 funded by KSCST
3. Automated Toll Collection per Kilometer in Toll Plaza funded by KSCST SPP in the year 2017-18

## Patent

1. Title: Sustainable Power Generation through Integrated Waste-to-Energy Systems. Published/Granted: Published. Patent No: 202541122446.

## Roles and Responsibilities: Institute Level

1. Member of Accreditation Committee
2. Member of Internal Quality Assurance Cell (IQAC)
3. Member of Project Competition & Exhibition Committee

## Roles and Responsibilities: Department Level

- NBA & NAAC Coordinator`,
  },
  "mr-guruprasad-k-n": {
    name: "Mr. Guruprasad K N",
    url: "",
    md: `## Professional Experience

- Teaching: 15
- Research: 5
- Industry: 1

## Contact Details

- **Email ID:** Official: [GURUPRASADKN_EC@atme.edu.in](mailto:GURUPRASADKN_EC@atme.edu.in)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/201862>
- **Google Scholar ID:** <https://scholar.google.com/citations?user=EVVGFLMAAAAJ&hl=en>
- **Scopus ID:** Nil
- **Orcid ID:** <https://orcid.org/0000-0001-6897-044X>
- **Web of Science Researcher ID:** <https://www.webofscience.com/wos/author/record/NKQ-0365-2025>
- **LinkedIn ID:** <https://www.linkedin.com/in/guruprasad-kn-48229876/>

## Academic Details

- **Qualification**
- PhD – pursuing
- PG - Digital Electronics & Communication Systems
- UG - Electronics & Communication Engineering

## Areas of Interest

1. Machine Learning & Deep Learning
2. Analog Electronics

## Publication Details

**National**

1. Guruprasad K N, Mohammed Yahya, Nooralesh C B,Prajwal B, Mohammed Umar Taqi, "Airbag Enabled Safety Jackets for Riders", 7th National Conference on "Emerging Trends in Engineering, Science & Technology", 30 April 2024.
2. Dr. Bhagyashree S R, Mr. Guruprasad K N, Jyothi H S, Meghana B K, Manju G P, Adarsh E, "Soil Health Monitoring System to help the Farmers for Improving the Yield of the Crop", National Conferences on Communication and Data Science (NCCDS), GSSS Institute of Engineering and Technology for Women, Mysuru, 26th April 2019.
3. Guruprasad K N, Shobitha, Afifa Khan, Nikitha M, "IOT based Patient Monitoring system using ESP8266", National Conferences on Communication and Data Science (NCCDS), GSSS Institute of Engineering and Technology for Women, Mysuru, 26th April 2019.

**International**

1. Guruprasad K N, Mahesh P K, "Comparative Evaluation of Optimization Strategies for Fine-Tuning Autoencoders Using Deep Learning", 3rd International Conference on Wireless Communication and Internet of Everything (ICWCIE - 2026), Sharnbasva University, Kalaburagi, 7th February 2026.
2. Guruprasad K N, Spandana K G, Manasa G, Hemashree G M, Balaji G V, "Medical Based System for Accurate Blood Donor Matching Prediction Using Machine Learning", International Conference on Recent Trends in Engineering, Science and Technology (RTEST-2025), Xavier Institute for Research and Development, 25 October 2025.
3. Guruprasad K N, Poorvitha S, Varsha H S, Suchithra J, "Artificial Nose using Support Vector Machine", International Conference on Recent Trends in Engineering, Science and Technology (RTEST-2025), Xavier Institute for Research and Development, 25 October 2025.
4. Guruprasad K N, Manasa G, Spandana K G, Navyashree B R, Hemashree G M, "Third Eye for the Blind: An Assistive Vision System Using IoT", Technix International Journal for Engineering Research (TIJER), Volume 12, Issue 11, November 2025.
5. Guruprasad K N, Poorvitha S, Varsha H S, Suchithra J, "Smart Home Automation System Using Wi-Fi and Bluetooth", Technix International Journal for Engineering Research (TIJER), Volume 12, Issue 10, October 2025.
6. Guruprasad K N, Mahesh P K, "A Comprehensive Review of Optimization Techniques for Fine-Tuning Autoencoders with Deep Learning", International Research Journal of Engineering and Technology (IRJET), Volume 12 Issue 07, July 2025.
7. Guruprasad K N, Ullas R, Chandan S M, Jayakumar J, Sagar S "Agri Bot & Eco Pathogen Detection", International Journal of Innovative Research in Computer and Communication Engineering (IJIRCCE), Volume 13, Issue 5, May 2025. DOI:10.15680/IJIRCCE.2025.1305291.
8. Guruprasad K N, Madan S, Bhuvan B M, Kushal U, "Bluetooth Controlled Robotic ARM Rover", International Journal of Innovative Research in Computer and Communication Engineering (IJIRCCE), Volume 13, Issue 5, May 2025. DOI:10.15680/IJIRCCE.2025.1305279.
9. Guruprasad K N, Girish M, "Wireless Sensor Network Based Smart BMS using LabVIEW", International Conference on Recent Trends in Science and Technology (ICRTST), ATME College of Engineering, Mysuru, 18-19 July 2023.
10. Guruprasad K N, P Balakrishna, Chethan S, Nithin Gowda A M and Dasharatha A M, "Smart Water Management and Monitoring System for Apartments using IoT Environment", International Conference on Recent Trends in Science and Technology (ICRTST, ATME College of Engineering, Mysuru, 16-07 July 2022.
11. K N Guruprasad, Keerthi A Kumbar, "Fingerprint Authorization Based Driving License Checking System", International Conference on Recent Trends in Science and Technology (ICRTST), ATME College of Engineering, Mysuru, 08-09 July 2021.
12. K N Guruprasad, Keerthi A Kumbar, "Arduino Inclinometer using MPU6050", International Conference on Recent Trends in Science and Technology (ICRTST), ATME College of Engineering, Mysuru, 17-18 June 2020.

## Membership in Professional Bodies

1. Member of Indian Society for Technical Education (ISTE)
2. Member of International Association of Engineers (IAENG)

## Honours/Awards/Achievements

**Honours Received**

1. Emerged as the Class Topper by securing the highest marks in the M. Tech First Semester University Examinations (2011–2012).
2. Achieved the highest marks in the M. Tech Third Semester University Examinations (2012–2013) and became the Class Topper.

**Awards Received**

1. Received the 'Best Presentation Award' at the RIT Research Conclave 2026, a one-day Research Conclave organized by the Department of Computer Science, Rajeev Institute of Technology, Hassan, on 27 July 2026.
2. Awarded the SET (Staff of Electronics & Telecommunications) Certificate of Excellence by the Department of Electronics & Communication / Telecommunication Engineering for securing highest marks in the 1st semester M. Tech examinations (2011-2012).

**Notable Achievements**

1. Authored the book 'Basic Electronics' published by Notion Press, co-written by Dr. S. R. Bhagyashree, Pradeep Kumar Y, Shalini V S, and Harini R.
2. The book is available at https://notionpress.com/in/read/basic-electronics-1321963/

## FDPs/Conferences/Workshops/STTP/MOOC Certification

**Faculty Development Programs (FDPs)**

1. Participated in a 12-week Faculty Development Programme (FDP) on "Artificial Intelligence: Concepts and Techniques", conducted from 21 July 2025 to 10 October 2025 during the academic year 2025–2026, organized by IIT Madras
2. Successfully completed a 12-week Faculty Development Programme (FDP) on "Soft Skills", conducted from 21 July 2025 to 10 October 2025 during the academic year 2025–2026, organized by IIT Madras.
3. Participated in a one-week Faculty Development Programme (FDP) titled "Integrating AI into Academia: One-week FDP on Advancements in AI" (FDP Application No.: 1741600241) from 21st to 26th July 2025, organized by the Department of Computer Science, Christ College (Autonomous), Irinjalakuda North P.O, Irinjalakuda, Thrissur, Kerala.
4. Participated in a 3-day FDP on "Patent Drafting, Filing & Interpretation" from 12th to 14th June 2025, organized by ATME College of Engineering, Mysuru.
5. Successfully completed a 5-day FDP on "Artificial Intelligence and Machine Learning Techniques for Engineering Applications - Theory and Practice" from 26th February to 1st March 2024, organized by NIT, Puducherry.
6. Engaged in a 5-day FDP on "Cyber Security Awareness and Emerging Technologies for Secure Social Media and Banking Applications" from 10th to 14th March 2025, organized by ATME College of Engineering, Mysuru.
7. Was part of a 3-day FDP on "Advanced Communication using STSOP and LabVIEW" from 25th to 27th September 2023, organized by ATME College of Engineering, Mysuru.
8. Participated in a 3-day FDP on "Application of Image Processing Technique in the field of Electronics Communication and Civil Engineering" from 6th to 8th November 2023, organized by ATME College of Engineering, Mysuru.
9. Completed a 5-day FDP on "Designing Embedded AI Systems using STMicroelectronics AI Ecosystem" from 12th to 14th October 2023, organized by DigiToad Technologies Pvt. Ltd., Bangalore in collaboration with STMicroelectronics at N.M.A.M Institute of Technology, Nitte.
10. Took part in a 7-day National Level Online FDP on "Outcome Based Education and Essential AI Tools for Teachers" from 10th to 18th August 2023, organized by Carmel College (Autonomous), Mala, Kerala.
11. Participated in a 5-day FDP on "Advanced Microcontrollers & Python Programming" from 17th to 21st August 2020, organized by Dept. of ECE, Jyothi Institute of Technology, Bengaluru.
12. Completed a 5-day FDP on "Recent Trends in Deep Learning" from 1st to 7th July 2022, organized by Department of Artificial Intelligence, C G H Raisoni Institute of Engineering and Technology, Nagpur.
13. Engaged in a 1-week FDP on "Innovative Technical Educational Practices and Academic Leadership" from 7th to 11th February 2022, organized by Shri Shankaracharya Technical Campus, Bhilai.
14. Successfully completed a 1-week FDP & Online Training on "LaTex" from 27th April to 2nd May 2020, organized by Spoken Tutorial Project, IIT Bombay.
15. Participated in a 1-week FDP on "Usage of Technology in COVID-19" from 28th May to 2nd June 2020, organized by Dept. of IT, Terna Engineering College, Mumbai.
16. Engaged in a 2-week FDP on "Deep Learning & its Application (Parallel Architecture)" from 23rd August to 3rd September 2021, organized by IIT Guwahati, IIT Kanpur, IIT Roorkee, MNIT Jaipur, NIT Patna, NIT Warangal, and PDPM IIITDM Jabalpur.
17. Was part of a 2-week FDP on "Advanced Communication and Antennas" from 15th to 26th February 2021, organized by Electronics & ICT Academy.
18. Participated in a 5-day FDP on "Machine Learning" from 11th to 15th May 2020, organized by DataTeach Labs, Bangalore.
19. Completed a 2-week Faculty Development Program on "Python" from 22nd June to 4th July 2020, organized by Dept. of Electronics and Communication Engineering, JSS Academy of Technical Education, Noida.
20. Participated in a 2-week FDP for Training & Placement Officers/Faculty Members from 21st February to 2nd March 2018, organized by VTU-HRDC, Centre for PG Studies, Muddenahalli, in association with CLHRD, Mangaluru.
21. Was part of a 5-day FDP on "How to Crack VTU-PhD Course Work in Research Methodology and IPR" from 2nd to 6th November 2020, organized by Dept. of Management Studies, JNNCE, Shimoga.
22. Successfully completed a 3-day FDP on "Importance of NAAC Accreditation in Higher Education Institutions" from 9th to 11th November 2020, organized by ATME College of Engineering, Mysuru.
23. Participated in a 3-day FDP on "Intellectual Property Rights in Engineering Education" from 29th to 31st July 2020, organized by Dept. of Electronics and Communication, ATME College of Engineering, Mysuru.
24. Successfully completed a 5-day FDP on "Real Time Multi Core Design Engineering in the field of Communication" from 21st to 24th March 2018, organized by Dept. of ECE, VVIT, Mysuru.
25. Participated in a 1-week National Level Faculty Development Program on "Recent Trends in Deep Learning" from 1st to 7th July 2022, organized by Department of Artificial Intelligence, C G H Raisoni Institute of Engineering and Technology, Nagpur.

**Conference Papers**

1. Participated in the IEEE Third International Conference on 'Technology, Engineering, Management for Societal Impact using Marketing, Entrepreneurship and Talent' for 2 days, held from 10th to 11th February 2023 at Vidya Vikas Institute of Engineering & Technology (VVIET), Mysore."
2. Participated in the IEEE International Conference on New Trends in Engineering and Technology (ICNTET-2018), held at GRT Institute of Engineering and Technology, Tiruvallur, Chennai, on 07–08 September 2018, and presented the paper titled "Design and Implementation of Arduino Based Dual Axis Autonomous Solar Tracker

**Workshops Attended**

1. Participated in a 3-day Workshop on "Generative AI, Agentic AI and Quantum Computing", conducted from 23-25 February 2026 during the academic year 2025–2026, organized by Department of Computer Science-Data Science, ATME College of Engineering, Mysuru.
2. Successfully participated in a Workshop on "Art of Counselling" from 2nd to 9th July 2019, organized by Dept. of Mechanical Engineering, ATME College of Engineering, in association with Samadhana Counselling Centre, Bangalore.
3. Engaged in a Workshop on "Analysis of Biomedical Signals and their Mathematical Modelling" from 24th to 28th December 2018, organized by Dept. of Electronics and Instrumentation & Dept. of Mathematics, SJCE, Mysuru.

**STTP (Short-Term Training Programmes)**

1. Participated in a 6-day Short-Term Training Programme (STTP) on "Design Thinking for Higher Order Learning and Student Transformation", conducted from 29 June 2026 to 4 July 2026 during the academic year 2025–2026, organized by the Malaviya Mission Teacher Training Centre (MMTTC), National Institute of Technology (NIT) Warangal.
2. Successfully finished a 5-day STP on "Advanced Embedded Systems" from 21st to 25th August 2023, organized by NITTR, Chandigarh.
3. Engaged in a 1-week Pedagogy Training on "Technical Education" from 16th to 20th January 2018, organized by VTU-HRDC, Centre for PG Studies, Muddenahalli, Chikkaballapur.
4. Took part in a Webinar on "Satellite and Automation" from 11th to 13th May 2020, organized by GSSSIETW, IEEE Student Branch, in association with IEEE Bangalore Section & CAS Society.

**MOOC Certifications**

1. Successfully earned a 12-week NPTEL online certification course on Artificial Intelligence: Concepts and Techniques, conducted from 21 July 2025 to 10 October 2025 during the academic year 2025–2026, offered by IISc Bangalore, with Elite + Silver certification.
2. Successfully completed a 12-week NPTEL online certification course on Soft Skills, conducted from 21 July 2025 to 10 October 2025 during the academic year 2025–2026, offered by IIT Roorkee, with Elite + Silver certification and ranked in the Top 2%.
3. Earned 8 weeks Online Certification in Academic Leadership in Cross Cultural Context of Higher Educational Institutions from 20th January 2025 to 15th May 2025 organized by National Institute of Technical Teachers Training and Research (NITTTR), Chennai.
4. Successfully accomplished 12 weeks Online Certification in Machine Learning and Deep Learning - Fundamentals and Applications from 24th July 2023 to 13th October 2023 organized by IIT, Guwahati.
5. Awarded certification for 5 days STP on Advanced Embedded Systems from 21st August 2023 to 25th August 2023 organized by NITTTR, Chandigarh.
6. Certified in 8 weeks Online Program NITTTR - Module 8: Institutional Management & Administrative Procedures from 1st October 2022 to 30th November 2022 organized by NITTTR, Chennai.
7. Certified in 8 weeks Online Program NITTTR - Module 7: Creative Problem Solving, Innovation and Meaningful R&D from 1st October 2022 to 30th November 2022 organized by NITTTR, Chennai.
8. Successfully certified in 8 weeks Online Program NITTTR - Module 6: Student Assessment and Evaluation from 1st April 2022 to 31st May 2022 organized by NITTTR, Chennai.
9. Successfully accomplished 8 weeks Online Certification in NITTTR - Module 5: Technology Enabled Learning & Life Long Self Learning from 1st April 2022 to 31st May 2022 organized by NITTTR, Chennai.
10. Earned 8 weeks Online Certification in NITTTR - Module 4: Instructional Planning and Delivery from 1st September 2021 to 31st October 2021 organized by NITTTR, Chennai.
11. Certified in 8 weeks Online Certification Course NITTTR - Module 3: Communication Skills, Modes & Knowledge Dissemination from 1st April 2021 to 31st May 2021 organized by NITTTR, Chennai.
12. Successfully certified in 8 weeks Online Program NITTTR - Module 2: Professional Ethics & Sustainability from 1st April 2021 to 31st May 2021 organized by NITTTR, Chennai.
13. Accomplished 8 weeks Online Certification in NITTTR - Module 1: Orientation towards Technical Education & Curriculum Aspects from 1st September 2020 to 31st October 2020 organized by NITTTR, Chennai.
14. Acquired proficiency through 4 months Online Certification in Workplace Communication from 26th January 2021 to 28th May 2021 organized by IIT BombayX.
15. Achieved certification in 12 weeks Online Certification Course Analog Electronic Circuits from 14th September 2020 to 4th December 2020 organized by IIT Madras.
16. Certified with Elite in 8 weeks Online Certification Course Body Language: Key to Professional Success from 14th September 2020 to 6th October 2020 organized by IIT Roorkee.
17. Successfully certified in 1 week FDP & Online Training on LaTex from 27th April to 2nd May 2020 organized by Spoken Tutorial Project, IIT Bombay.
18. Accomplished 1 month Hands-On Workshop on The BodhiTree and SAFE Tools for Effective Online Teaching on 20th June 2020 organized by Teaching Learning Centre (ICT) at IIT Bombay.
19. Successfully earned 3 months ARPIT Online Certification in Pedagogical Innovations and Research Methodology from 1st October 2019 to 31st January 2020 organized by SWAYAM in association with Guru Jambheshwar University of Science & Technology, Hisar, Haryana.

## Proposal/Funding/Project Financial Assistance

1. "Sanctioned an amount of Rs. 17.90 Lakhs by the Department of Science and Technology (DST), National Council for Science & Technology Communication Division, Government of India, for implementing the project titled 'SciFest – Science Fiesta for School Children: 7th to 12th Standard', with active contribution as the Co-Principal Investigator".
2. "Received an amount of Rs. 6,000/- from the Karnataka State Council for Science and Technology (KSCST) for the student project proposal titled 'Solar Panel Cleaning Robot' (Project Proposal Reference No.: 46S_BE_4086), which has been approved by the Council under the 'Student Project Programme – 46th Series', in the year 2022-2023".
3. "Secured an amount of Rs. 5,500/- from the Karnataka State Council for Science and Technology (KSCST) for the student project proposal titled 'Smart Cabin Using IoT for Physically Challenged People' (Project Proposal Reference No.: 44S_BE_2172), approved under the 'Student Project Programme – 44th Series' in the year 2020-2021".

## Patent

1. Title: 'A Smart Farming Management System and Method'. Published/Granted: Granted. Patent No: 542900.

## Roles and Responsibilities: Institute Level

1. Admin – Aptitude Verbal & Reasoning (AVR)
2. IIRS-ISRO Outreach Program Coordinator
3. Member Director – ATME Staff Welfare Association

## Roles and Responsibilities: Department Level

1. Faculty Placement Coordinator
2. Domain Specific Training Coordinator
3. NAAC Criteria 5 and NBA Criteria 4
4. Mentoring
5. Lab In charge`,
  },
  "mr-shreeshayana-r": {
  "name": "Prof. Shreeshayana R",
  "url": "https://old.atme.edu.in/mr-shreeshayana-r/",
  "md": "[](https://old.atme.edu.in/)\n\n|     |     |     |\n| --- | --- | --- |\n| **Faculty Profile** |\n| |     |     |\n| --- | --- |\n|  | **Faculty Name: Prof. Shreeshayana R**\n\n**Designation: Assistant Professor**\n\n**Program: Electrical and Electronics Engineering**\n\n**Professional Experience:**\n\n|     |     |     |\n| --- | --- | --- |\n| **Teaching: 13** | **Research: 4** | **Industry: 0.5** | | |\n| **Contact Details** |\n| |     |     |     |\n| --- | --- | --- |\n| **Email ID** | **Official:** [shreeshayanar_ee@atme.edu.in](mailto:shreeshayanar_ee@atme.edu.in) | **Personal:** [shreeshayana@gmail.com](mailto:shreeshayana@gmail.com) |\n| **Vidwan ID** | [https://vidwan.inflibnet.ac.in/profile/201262](https://vidwan.inflibnet.ac.in/profile/201262) |\n| **Google Scholar ID** | [https://scholar.google.com/citations?user=ZB8KKEkAAAAJ&hl=en](https://scholar.google.com/citations?user=ZB8KKEkAAAAJ&hl=en) |\n| **Scopus ID** | [https://www.scopus.com/authid/detail.uri?authorId=57440025100](https://www.scopus.com/authid/detail.uri?authorId=57440025100) |\n| **Orcid ID** | [https://orcid.org/0000-0002-3149-7393](https://orcid.org/0000-0002-3149-7393) |\n| **Web of Science Researcher ID** | [https://www.webofscience.com/wos/author/rid/HHD-1191-2022](https://www.webofscience.com/wos/author/rid/HHD-1191-2022) |\n| **LinkedIn ID** | [https://in.linkedin.com/in/shree-shayana-r-b1338922](https://in.linkedin.com/in/shree-shayana-r-b1338922) |\n\n|     |     |     |\n| --- | --- | --- |\n| **Academic Details** |\n| **Qualification**<br>- Persuing **Ph.D** in Electrical Engineering<br>- **M.Tech** in Biomedical Signal Processing & Instrumentation<br>- **B.E** in Electrical & Electronics Engineering |\n| **Areas of Interest** |\n| Biomedical Prosthetics, Bio-Signal Processing and Devices, AI-ML, IoT, Robotics, Microcontrollers, Energy Harvesting, Electric Vehicles |\n| **Publication Details** |\n**Journals**\n\n- National: -\n- International: 14\n\n**Conference (Published/Presented)**\n\n- National: 1\n- International: 11\n\n| **Citations** |\n\n|     |     |     |     |     |     |\n| --- | --- | --- | --- | --- | --- |\n| **Scopus/WoS** | **CROSSREF** | **H-Index (Scopus/WoS)** | **Google Scholar** | **H-Index (Google Scholar)** | **i-10 Index** |\n| 82 | 73 | 4 | 114 | 6 | 4 |\n\n**Conference**\n\n1. A. A. S. Anshad, H. S. Saghra, M. Kumari, D. Deepa, R. Shreeshayana, and A. Kubba, \"Towards Accurate Glioma Segmentation: A Modified HTTU-Net with Multi-Scale Feature Encoding,\" Proceedings of the 5th Asian Conference on Innovation in Technology (ASIANCON 2025), 2025. doi: 10.1109/ASIANCON66527.2025.11281349. **(Scopus)**\n2. N. Kale, R. Shreeshayana, L. Mangala, Tanu, A. Mohammad, and M. S. Parveen, \"Enhancing Cloud Data Security against Quantum Threats Using E91 QRD and Lattice-Based Encryption,\" in Proc. 2025 Int. Conf. Emerging Engineering Technologies and Applications (IC-EETA), Indore, India, Nov. 6–8, 2025. IEEE, doi: 10.1109/IC-EETA66496.2025.11548388\n3. D Anil, R Shreeshayana, B Kiran, “Advanced Malware Detection Methods for Polymorphic Virus Identification”, 2024 5th International Conference on Communication, Computing & Industry 6.0 (C2I6), IEEE Xplore, 2024. **(Scopus)** 10.1109/C2I663243.2024.10895844\n4. R Shreeshayana, Manjunath V Gudur, G Ezhilarasan, “2024 15th International Conference on Computing Communication and Networking Technologies (ICCCNT)”, IEEE Xplore, 2024. **(Scopus)** 10.1109/ICCCNT61001.2024.10726044\n5. R Ranjitha, Pooja Ahuja, R Shreeshayana, D Anil, “Edge Intelligence for Traffic Flow Detection: A Deep Learning Approach”, 2023 International Conference on Quantum Technologies, Communications, Computing, Hardware and Embedded Systems Security (iQ-CCHESS), IEEE Xplore, 2023. **(Scopus)** 10.1109/iQ-CCHESS56596.2023.10391493\n6. Manjunath V Gudur, Parthasarathy, P., Shreeshayana, R., Mallaiah, P.K., “Enhanced Classification of Epileptogenic and Non epileptogenic EEG Signals using ANN-FDM”, 12th IEEE International Conference on Advanced Computing, ICoAC 2023, IEEE Xplore, 2023. **(Scopus)** [https://ieeexplore.ieee.org/document/10249012](https://ieeexplore.ieee.org/document/10249012)\n7. Shreeshayana, R., Raghavendra, L., Manjunatha, K.B., Hemanth, B.S., “Portable Baby Incubator for Monitoring Sleep Apnea”, 14th International Conference on Advances in Computing, Control, and Telecommunication Technologies, ACT 2023, 2023, 2023-June, pp. 1196–1204. **(Scopus)**\n8. Kumar, V.P., Kamala, N., Shreeshayana, R., “Controlling a Two-Wheeled Self-balancing Robot (TWSBR) with Gyroscope”, 14th International Conference on Advances in Computing, Control, and Telecommunication Technologies, ACT 2023, 2023, 2023-June, pp. 1212–1216. **(Scopus)**\n9. Shreeshayana R, Manjunath V Gudur, Niranjan L, Sreekantha B, “Ergonomic Automated Dry and Wet Waste Segregation and Compost Production for Innovative Waste Management”, IEEE 3rd Global Conference for Advancement in Technology (GCAT)-2022. **(Scopus)** [https://ieeexplore.ieee.org/document/9972230/](https://ieeexplore.ieee.org/document/9972230/)\n10. Niranjan L, Manjunath V Gudur, Shreeshayana R, Sreekantha, “IoT Based Innovative Smart Monitoring of Aquaponics System Using Atmega 328P and ESP 8266”, IEEE 3rd Global Conference for Advancement in Technology (GCAT)-2022. **(Scopus)** [https://ieeexplore.ieee.org/document/9972203/](https://ieeexplore.ieee.org/document/9972203/)\n11. M Pradeep Kumar, Manjunath V Gudur, Shreeshayana R, D S Sriramu “VLSI implementation of Digital Watermarking Technique for security and authentication of Digital Data”, International Conference on Smart Generation Computing, Communication and Networking (SMART GENCON), IEEE Xplore: 21st December 2021. **(Scopus)** [https://ieeexplore.ieee.org/document/9645910](https://ieeexplore.ieee.org/document/9645910)\n12. Santhosh Kumar R, Shreeshayana R, “Power Factor Correction Using Boost Converter with IC UC3854”, National Conference on Recent trends in Electrical, Electronics, Computing and Information Technology, Sep 24th, 2016\n\n**Journal**\n\n1. A. Mohammad, N. Praveen, S. Pandiarajan, R. Shreeshayana, S. Jagadeesh, A. Raj, B. Patil, Y. H. Bhosale, S. M. Nagaraj, and D. Anil, \"NetPhish-Mix: A Multi-Modal Phishing Detection Method Utilizing URL Graphs and Page Screenshot Vision Transformer,\" Engineering, Technology & Applied Science Research (ETASR), vol. 16, no. 1, pp. 31209–31214, Feb. 2026, doi: 10.48084/etasr.15759. **(Scopus)**\n2. Senthil Kumaran VN, M Venkatesh, R Shreeshayana, Manjunath V Gudur, P Parthasarathy, “Analysis on density of states and ION/IOFF ratio of GaN/GaN-graphene nanoribbon tunnel FET for enhanced bio-sensing applications”, IOP Publishing, Physica Scripta, 2024. **(Scopus)**\n3. R. Shreeshayana, M. U. Rani, R. Shanmuga Priya, D. Anil, and K. P. Chandar, \"Optimizing Brain Tumour Classification in MRI Images using EfficientNetB0 and Transfer Learning,\" in Proc. 16th Int. Conf. Advances in Computing, Control and Telecommunication Technologies (ACT 2025), 2025. Extended version published in Grenze International Journal of Engineering & Technology (GIJET), vol. 11, part 2, p. 3531, 2025. **(Scopus)**\n4. R Roja, R Shreeshayana, J Anitha Murrey Neeladri, “Utilizing Deep Learning for the Early Detection of Pneumonia in Chest X-Ray Images”, Frontiers in Health Informatics, 2024 (UGC Care)\n5. Shreeshayana R, L. Lakshmaiah, Kavya P O, Anil D, “Smart Traffic Control and Management System using Machine Learning Techniques”, Tuijin Jishu/Journal of Propulsion Technology, Volume 44, Issue-5, Pages 1889-1896, 2023.\n6. Shreeshayana R, Simrah Fathima, “Sanitary Napkin Vending Machine with Incinerator for Menstrual Hygiene”, International Research Journal of Engineering and Technology (IRJET), Volume: 08, Special Issue, Oct 2021. (Google Scholar) [https://www.irjet.net/archives/V8/i10/ICRTST-2021/IRJET-V8I1007.pdf](https://www.irjet.net/archives/V8/i10/ICRTST-2021/IRJET-V8I1007.pdf)\n7. Sangeetha B, Shreeshayana R, “Design of Motorised Wheelchair for Paraplegic”, International Research Journal of Engineering and Technology (IRJET), Volume: 08, Special Issue, Oct 2021. (Google Scholar) [https://www.irjet.net/archives/V8/i10/ICRTST-2021/IRJET-V8I1002.pdf](https://www.irjet.net/archives/V8/i10/ICRTST-2021/IRJET-V8I1002.pdf)\n8. Manjunath V Gudur, Shreeshayana R, Dr.Naveen K B, Naveen H, “Auto Segmentation of Retinal Blood Vessel Image using 2-D Gaussian Filter and its First and Second Order Derivative”, Test Engineering and Management, Vol. 83, 12495 – 12505, March-April-2020. **(Scopus)** [http://www.testmagzine.biz/index.php/testmagzine/article/view/5878/4669](http://www.testmagzine.biz/index.php/testmagzine/article/view/5878/4669)\n9. Raghavendra L, Shreeshayana R, Parthasarathy L “Modelling of Compact Fluorescent Lamp and Mitigation of Harmonic Distortion with Passive Filter”, IJCRT, Vol.6, Issue 1, Jan 2018. (Google Scholar) [https://ijcrt.org/papers/IJCRT1801032.pdf](https://ijcrt.org/papers/IJCRT1801032.pdf)\n10. Shreeshayana R, Raghavendra L, “Piezoelectric Energy Harvesting using PZT in Floor Tile Design”, International Journal of Advanced Research in Electrical, Electronics and Instrumentation Engineering, Vol. 6, Issue 12, December 2017. (Google Scholar) [https://www.ijareeie.com/upload/2017/december/18_Paper%20id%20E61212619-IJAREEIE.pdf](https://www.ijareeie.com/upload/2017/december/18_Paper%20id%20E61212619-IJAREEIE.pdf)\n11. Santhosh Kumar R, Shreeshayana R, “Design and Simulation Analysis of Power Factor Correction Using Boost Converter with IC UC3854”, IJIRSET, Vol. 6, Issue 5, May 2017. Impact Factor:6.2 (Google Scholar) [http://www.ijirset.com/upload/2017/may/214_Design.pdf](http://www.ijirset.com/upload/2017/may/214_Design.pdf)\n12. Santhosh Kumar R, Shreeshayana R, Vinod Kumar P, “Design and Simulation of Control Circuit for Single Phase Cycloconverter”, International Journal of Innovative Research in Computer and Communication Engineering, Vol. 3, Issue 7, July 2015. Impact Factor:5.6. (Google Scholar) [http://ijircce.com/admin/main/storage/app/pdf/8pxUAROGd1FHudi73pnhhAZCN5Inxcj4i6DVssmu.pdf](http://ijircce.com/admin/main/storage/app/pdf/8pxUAROGd1FHudi73pnhhAZCN5Inxcj4i6DVssmu.pdf)\n13. Shreeshayana R, Udayashankara V, “Glioma Multiforme Brain Tumor Segmentation using Soft Computing Techniques with Integrated Radiology Study Maker”, International Conference on Electronics and Communication Engineering. Bengaluru; 2013, ISBN: 978-93-83060-04-7. (Google Scholar) [https://www.yumpu.com/en/document/read/24691758/glioma-multiforme-brain-tumor-segmentation-using-irnet-explore](https://www.yumpu.com/en/document/read/24691758/glioma-multiforme-brain-tumor-segmentation-using-irnet-explore) |\n| **Membership in Professional Bodies** |\n| - ISTE-Indian Society for Technical Education<br>- IAENG-International Association of Engineers<br>- IEI-Institute of Engineers (AMIE)<br>- IEEE |\n| **Honours/Awards/ Achievements** |\n| **Awards**<br>- Best Teacher Award by ATME College of Engineering, Mysuru for the year 2020-2021<br>- Best Teacher Award by ATME College of Engineering, Mysuru for the year 2016-17.<br>- KSNA has given Award of Excellence in M. Tech for good academic performance.<br><br>**Achievements**<br>- Course Expert: Basic Electrical Engineering, Central University, Telangana<br>- NAAC C-II External Expert Committee Members, SIRMVT, Bengaluru: 2023-24<br>- Project Guide for Best Project of the Year Award during 2022-23, 2020-21, 2019-20 under Karnataka State Council for Science & Technology<br>- Guided Students towards the Best Project at DBIT, Bengaluru, GSSSIETW, Mysuru, ATME College of Engineering Mysuru during 2020-2021.<br>- Guided Students towards Best Project Presentation at GSSIETW, Mysuru during 2019-2020. |\n| **FDPs/Conferences/Workshops/STTP/MOOC Certification** |\n| **SWAYAM/NPTEL Certification**<br>- Swayam -Foundation of Cognitive Robotics: 4 Weeks<br>- Swayam-Design, Technology and Innovation: 8 Weeks<br>- Swayam -Introduction to Intellectual Property Rights: 12 Weeks<br>- Swayam- Biomechanics-12 Weeks<br>- Swayam- Data science for Engineers: 8 Weeks<br><br>**National Institute of Technical Teachers' Training and Research (NITTTR) Certification: All Modules Completed**<br>- Module 1: Orientation Towards Technical Education & Curriculum Aspects<br>- Module 2: Professional Ethics & Sustainable Development<br>- Module 3: Communication Skills, Modes and Knowledge Dissemination<br>- Module 4: Instructional Planning and Delivery<br>- Module 5: Technology Enabled Learning and Life-Long Self Learning<br>- Module 6: Student Assessment and Evaluation<br>- Module 7: Creative Problem Solving, Innovation and Meaningful R & D<br>- Module 8: Institutional Management and Administrative Procedures |\n\n**Faculty Development Programs (FDPs)**\n\n|     |     |     |     |\n| --- | --- | --- | --- |\n| **Academic Year** | **Title / Topic** | **Organizer / Venue** | **Duration / Date** |\n| 2024–25 | AICTE Training and Learning (ATAL) Academy FDP on Power Electronics Applications in Microgrid using AI (PEAMGAI2024) | JAIN (Deemed-to-be University), Faculty of Engineering and Technology | 09/12/2024 – 14/12/2024 |\n| 2023–24 | Universal Human Values | ATME College of Engineering, Mysuru (in collaboration with AICTE) | 02/11/2023 – 04/11/2023 |\n| 2023–24 | New Opportunities for Emerging 2D Materials in Bioelectronics and Biosensors | Department of ECE, CMRIT, Bengaluru | 11/09/2023 – 15/09/2023 |\n| 2022–23 | Research Publication Indexing | IEEE-EBSCO and ATME College of Engineering, Mysuru | 13/06/2022 |\n| 2021–22 | Deep Learning & Applications (Parallel Architectures) | Electronics and ICT Academies at IIT Guwahati, IIT Kanpur, IIT Roorkee, MNIT Jaipur, NIT Patna, NIT Warangal & PDPM IIITDM Jabalpur | 23/08/2021 – 03/09/2021 (Online) |\n| 2020–21 | Advances in Power Electronic Applications | BMSIT, Bengaluru | 04/08/2020 – 08/08/2020 (Online) |\n| 2020–21 | Academic & Research Writing | ATME College of Engineering, Mysuru | 25/03/2021, 26/03/2021 & 29/03/2021 – 31/03/2021 |\n| 2020–21 | New Avenues and Role of Faculty in Effective Implementation of NEP 2020 in HEIs | ATME College of Engineering, Mysuru | 29/01/2021 |\n| 2020–21 | Importance of NAAC Accreditation in Higher Education Institutions | ATME College of Engineering, Mysuru | 09/11/2020 – 11/11/2020 (Online) |\n| 2019–20 | Contemporary Scenario in Power Systems | Department of EEE, ATME College of Engineering, Mysuru | 25/07/2020 – 30/07/2020 (Online) |\n| 2019–20 | PCB Design | Department of EEE, VVIET, Mysuru | 29/06/2020 – 03/07/2020 (Online) |\n| 2019–20 | Research Avenues in Healthcare Technology | Department of IT, SJCE, Mysuru | 21/07/2020 – 25/07/2020 (Online) |\n| 2019–20 | Modern Trends in Optimization Techniques – A Power Quality and Reliability Approach | Electric Power Grid Modernisation: Trends, Challenges and Opportunities, NIE, Mysuru | 17/07/2020 – 24/07/2020 (Online) |\n| 2019–20 | Sensors & Their Applications | Department of ECE, IEEE Sensors Council, Bangalore Section | 13/07/2020 – 17/07/2020 (Online) |\n| 2018–19 | Zonal Level FDP on GNU Linux Operating System in Electrical and Electronics Engineering | Department of EEE, ATME College of Engineering, Mysuru | 10/01/2019 – 12/01/2019 |\n| 2017–18 | Industrial Automation | Department of EEE, ATME College of Engineering, Mysuru | 16/01/2018 – 20/01/2018 |\n| 2017–18 | Energy Conservation Building Code | Department of EEE, GSSSIETW, Mysuru | 25/07/2018 – 28/07/2018 |\n| 2016–17 | Embedded Programming & its Applications using AVR ATMEGA328 | Department of EEE, ATME College of Engineering, Mysuru | 18/01/2016 – 23/01/2016 |\n\n**Workshops Attended**\n\n|     |     |     |     |\n| --- | --- | --- | --- |\n| **Academic Year** | **Title / Topic** | **Organizer / Venue** | **Duration / Date** |\n| 2025–26 | Training Program on PCB Design and Fabrication | BIT Altium Training Centre, Bannari Amman Institute of Technology | 13/10/2025 – 16/10/2025 |\n| 2024–25 | Patent Drafting, Filing & Interpretation | IPR Cell in association with IIC, ATME College of Engineering, Mysuru | 12/06/2025 – 14/06/2025 |\n| 2023–24 | Cyber Security and Digital Forensics | Department of EEE, ATME College of Engineering, Mysuru | 21/08/2023 – 25/08/2023 |\n| 2023–24 | ChatGPT and AI Hacks with MS Office | Skill Nation | 25/11/2023 (Online) |\n| 2023–24 | Power BI | Skill Nation | 19/11/2023 (Online) |\n| 2022–23 | Recent Advances in Industrial Artificial Intelligence, Data Fusion and Computing | IISc, Bengaluru | 27/02/2023 – 28/02/2023 |\n| 2022–23 | NIRF Workshop | IAE Telangana | 21/12/2022 – 22/12/2022 (Online) |\n| 2020–21 | eSim – A First Course in the IoT Series for Teachers | IIT Bombay NMEICT in association with ATMECE Remote Centre, Mysuru | 21/09/2019 (Online) |\n| 2018–19 | Art of Counselling Workshop | ATME College of Engineering | 02/07/2019 – 09/07/2019 |\n| 2017–18 | Workshop on MATLAB Applications and Its Features | NIE, Mysuru | 23/10/2017 – 24/10/2017 |\n| 2015–16 | Recent Trends in Renewable Energy Sources | SIR MVIT, Bengaluru | 23/07/2015 – 24/07/2015 |\n| 2015–16 | Interfacing Innovation and IPR for Diffusion of Technology | National Workshop, ATME College of Engineering, Mysuru | 19/01/2015 |\n| 2015–16 | LabVIEW – Zonal Level Workshop | ATME College of Engineering, Mysuru | 08/01/2015 |\n\n**Industry Training & Industry–Academia Meets**\n\n|     |     |     |     |     |\n| --- | --- | --- | --- | --- |\n| **Academic Year** | **Category** | **Title / Topic** | **Organizer / Venue** | **Duration / Date** |\n| 2022–23 | Industry Training | Industrial Training Program on Microcontroller Technology | Not Specified | 01/04/2023 – 03/06/2023 |\n| 2016–17 | Industry–Academia Meet | 20th ARDSI Meet | AIISH, Mysuru | 10/12/2016 – 11/12/2016 |\n| 2015–16 | Industry–Academia Meet | IEEE India CDSIG Meet – Meet of IEEE India Special Interest Group on Communication Disability | AIISH, Mysuru | 12/09/2015 |\n\n**Seminars Attended**\n\n|     |     |     |     |\n| --- | --- | --- | --- |\n| **Academic Year** | **Title / Topic** | **Organizer / Venue** | **Duration / Date** |\n| 2021–22 | Usage of MS Word and EndNote for Writing Technical Papers | ATME College of Engineering, Mysuru | 17/08/2021 |\n| 2019–20 | Power Intelligence and Asset Management in Smart Grid | Anurag University, Hyderabad | 30/05/2020 |\n| 2019–20 | SAP | KLE Society | 27/07/2020 (Online) |\n| 2019–20 | Teaching Pedagogy | Department of ECE, ATME College of Engineering, Mysuru | 17/07/2020 |\n| 2019–20 | Physical Unclonable Functions – IoT Security for Smart Grids | Cambridge Institute, Bengaluru | 22/05/2020 (Online) |\n| 2019–20 | How to Get Patent | Department of CSE, Dr. Ambedkar Institute of Technology, Bengaluru | 25/07/2020 (Online) |\n| 2019–20 | An Introduction and Overview of AWS Cloud Computing Services | Department of ECE, Vemana Institute, Bengaluru | 24/06/2020 (Online) |\n| 2019–20 | Telecom Mediation | KLE Society | 23/07/2020 (Online) |\n| **Proposal/Funding/Project Financial Assistance** |\n| - Portable Baby Incubator with Sleep Apnea Monitoring for Premature Infants, Product Development, 1 Lakh, Sanctioned from KTECH New Age Incubation Network.<br>- Student Capstone Projects with Financial assistance under SPP Karnataka State Council for Science and Technology for the Year: AY:2017-18, 2019-2020, 2020-21, 2022-23, 2023-24, 2024-25.<br>- Student Capstone Project with Financial assistance under VTU during 2021-2022.<br>- Proposal approved by MHRD-Innovation Cell. Title: Artificial Intelligence Based Smart Irrigation System (AISIS)-2020.<br>- Student Project Proposal with Financial assistance under India Innovation Challenge Design Contest 2019 powered by AICTE mission, DST & Texas Instruments anchored by NSRCEL. |\n| **Patent** |\n| **Patents Published** |\n| **Integrated Portable Ventilation and Multi-Parameter Vital Sign Monitoring System with Adaptive Closed-Loop Control**<br>- Patent Application No.: 202541122458 A<br>- Applied Date: 05/12/2025<br>- Published Date: 02/01/2026<br>- Applicants: Shreeshayana R, ATME College of Engineering, Mysuru, Dr. Shakunthala C<br>- Inventors: Shreeshayana R, Dr. Shakunthala C, Dr. Parthasarathy L, Dr. Praveen Kumar M, Dr. Sathish K R |\n| **System and Method for 3D Printing Using Recycled Polymer Filament**<br>- Patent Application No.: 202541122459 A<br>- Applied Date: 05/12/2025<br>- Published Date: 02/01/2026<br>- Applicants: Shreeshayana R, ATME College of Engineering, Mysuru, Dr. Sathish K R<br>- Inventors: Shreeshayana R, Dr. Sathish K R, Dr. Parthasarathy L, Dr. Raghavendra L, Kavyashree S, Swathi C A, Maria Sushma S, Swapna H, Dr. Praveen Kumar M, Dr. Shakunthala C |\n| **A Myoelectric Prosthetic Arm Utilizing Enhanced EMG Acquisition and Multi-Axis Servo Motion Control**<br>- Patent Application No.: 202541122460 A<br>- Applied Date: 05/12/2025<br>- Published Date: 02/01/2026<br>- Applicants: Shreeshayana R, ATME College of Engineering, Mysuru<br>- Inventors: Shreeshayana R, Dr. Parthasarathy L, Karthik R, Dr. Shakunthala C, Dr. Vinod Kumar P, Dr. Praveen Kumar M, Dr. Sathish K R, Swapna H, Maria Sushma S |\n| **Smart Microcontroller-Integrated Pulses Weigh-Fill Automation System**<br>- Patent Application No.: 202541122486 A<br>- Applied Date: 05/12/2025<br>- Published Date: 02/01/2026<br>- Applicants: Dr. Vinod Kumar P, ATME College of Engineering, Mysuru<br>- Inventors: Dr. Vinod Kumar P, Ambika V, Dr. Hussana Johar R B, Dr. Praveen Kumar M, Dr. Neethi M V, Shreeshayana R, Dr. Anitha D B, Dr. Parthasarathy L |\n| **Automated Waste Segregation Solution for Efficient Urban Domestic Waste Management**<br>- Patent Application No.: 202541122522 A<br>- Applied Date: 05/12/2025<br>- Published Date: 02/01/2026<br>- Applicants: Dr. Praveen Kumar M, ATME College of Engineering, Mysuru<br>- Inventors: Dr. Praveen Kumar M, Shreeshayana R, Dr. Vinod Kumar P, Dr. Parthasarathy L, Dr. Sathish K R, Kavyashree S, Swapna H, Maria Sushma S, Dr. Shakunthala C, Dr. Raghavendra L |\n| **Automated Book Digitization Apparatus with Page-Turning Mechanism**<br>- Patent Application No.: 202541122523 A<br>- Applied Date: 05/12/2025<br>- Published Date: 02/01/2026<br>- Applicants: Maria Sushma S, ATME College of Engineering<br>- Inventors: Maria Sushma S, Dr. Parthasarathy L, Syed Danish, Kavyashree S, Swathi C A, Swapna H, Shreeshayana R, Dr. Sathish K R, Dr. Praveen Kumar M, Misbah Afsheen |\n| **Adaptive Saffron Aeroponic Chamber with Multi-Parameter Climate Optimization**<br>- Patent Application No.: 202541122549 A<br>- Applied Date: 05/12/2025<br>- Published Date: 02/01/2026<br>- Applicants: Anupama Shetter, Swapna H, ATME College of Engineering, Mysuru<br>- Inventors: Swapna H, Dr. Parthasarathy L, Anupama Shetter, Maria Sushma S, Swathi C A, Kavyashree S, Dr. Raghavendra L, Dr. Sathish K R, Shreeshayana R, Dr. Praveen Kumar M |\n| **Design of a Myoelectric Prosthetic Arm with Functionality and Adaptability for Below Elbow Amputees**<br>- Application No: 423206-001<br>- Cbr Date: 15.7.2024<br>- FER Generated on: 21.08.2024 |\n| **A Novel Deep Learning based Automated Cyber Security System and Method Thereof**<br>- Filed: 2024-03-26<br>- Published: 2024-04-05 |\n| **Risk Combating Personal Protection Equipment**<br>- Published/Granted: Published<br>- Patent No.: 20224100793<br>- Date of filing of Application: 15/02/2022<br>- Publication Date: 25/02/2022<br>- [https://www.quickcompany.in/patents/risk-combating-personal-protection-equipment](https://www.quickcompany.in/patents/risk-combating-personal-protection-equipment) |\n| **A Single Window Documentation Procedure for Multiple Assessment and Appraisal Requirements**<br>- Published/Granted: Published<br>- Patent No.: 202041029920 A<br>- Date of filing of Application: 14/07/2020<br>- Publication Date: 13/11/2020<br>- [http://ipindia.gov.in/writereaddata/Portal/IPOJournal/1_4925_1/Part-1.pdf](http://ipindia.gov.in/writereaddata/Portal/IPOJournal/1_4925_1/Part-1.pdf) |\n| **Roles and Responsibilities: Institute Level** |\n| - NIRF Nodal Officer<br>- Times Ranking Coordinator<br>- NAAC C-II Coordinator<br>- IPR Cluster Head |\n| **Roles and Responsibilities: Department Level** |\n| - Program NBA Coordinator<br>- Internship Coordinator (Final Year)<br>- Class In-Charge<br>- Major Project Coordinator |"
},
  "chandrashekar-k": {
    name: "Chandrashekar K",
    url: "https://atme.edu.in/chandrashekar-k/",
    md: `**Chandrashekar K**

Attender

**Department:** ELECTRONICS & COMMUNICATION ENGINEERING

**Date of Joining Institution:** 17/08/2015

**Mobile Number:** 9742542026

**Present Address:** #845,near ganapathi temple,mellahalli,harohalli post,mysuru taluk.
`,
  },
  "deepak-k-n": {
    name: "Deepak K N",
    url: "https://atme.edu.in/deepak-k-n/",
    md: `**Deepak K N**
Attender

**Department:** COMPUTER SCIENCE AND ENGINEERING

**Date of Joining Institution:** 22-2-2022

**E-mail:** Deepakhooda11898@gmail.com

**Mobile Number:** 8496933599

**Total Experience:** 10 Months

**Present Address:** Kothathi village, kothathi hobble post, Mandya-571478
`,
  },
  "dhananjaya-k-s": {
    name: "Dhananjaya K S",
    url: "https://atme.edu.in/dhananjaya-k-s/",
    md: `**Dhananjaya K S**

**Attender**

**Department:** Computer Science & Engineering

**Date of Joining:** 19/03/2014

**Mobile number:** 9164603126

**Present Address:** S/o K N Shivananjegowda, Kothathi Village, Mandya
`,
  },
  "madesha-s": {
    name: "MADESHA S",
    url: "https://atme.edu.in/madesha-s/",
    md: `**MADESHA S**

Foreman

**Department:** Mechanical Engineering

**Date of Joining Institution:** 25-07-2011

**E-mail:** smades804@gmail.com

**Mobile Number:** 8105670647

**Qualification:** Diploma in Mechanical Engineering

**Total Experience in Years:** 20 Years

**Present Address:** No.788/133, 14th Cross, Ramanuja Road, Mysore.

**Land mark:** Near Gopika Agarabathis
`,
  },
  "mr-ananda-c": {
    name: "Mr. Ananda C",
    url: "https://atme.edu.in/mr-ananda-c/",
    md: `**Mr. Ananda C**

Attender

**Department:** Mechanical Engineering

**Date of Joining Institution:** 09/09/2024

**E-mail:** [anandabc36@gmail.com](mailto:anandabc36@gmail.com) **Mobile Number:** 9380157090

**Present Address:** s/o Chikkeeraiah, Varuna (H), Vajamangala (P), Bhugathagalli, Mysuru – 570010
`,
  },
  "mr-lohit-kumar-m-c-2": {
    name: "Mr. Lohit Kumar M C",
    url: "https://atme.edu.in/mr-lohit-kumar-m-c-2/",
    md: `**Mr. Lohit Kumar M C**

Attender

**Department:** Electrical and Electronics Engineering

**Date of Joining Institution:** 27/08/2015

**E-mail:** [lohitkumarmc@gmail.com](mailto:lohitkumarmc@gmail.com)

**Mobile Number:** 9986862104

**Present Address:** S/0 Chinnaswamy M, Mellahalli Varuna Hobli, Harohalli Post, Mysore Taluk & District -570028.
`,
  },
  "mr-manjunatha-h-r": {
    name: "MANJUNATHA H R",
    url: "https://atme.edu.in/mr-manjunatha-h-r/",
    md: `**MANJUNATHA H R**

Foreman

**Department:** ELECTRONICS & COMMUNICATION ENGINEERING

**Date of Joining Institution:** 20/01/2012

**E-mail:** manjunathahr\\_ec@atme.edu.in Mobile Number: 9845984554

**Qualification:** Diploma in Electronics and Communication Engineering

**Total Experience in Years:** 27 Years

**Present Address:** #1438/1 1st Floor, Renukacharya Temple Road, KR Mohalla Mysuru.
`,
  },
  "mr-nandan-gowda-j-t": {
    name: "Mr. Nandan Gowda J T",
    url: "https://atme.edu.in/mr-nandan-gowda-j-t/",
    md: `**Mr. Nandan Gowda J T**

Instructor

**Department:** Department of Chemistry

**Date of Joining Institution:** 01-08-2024

**E-mail:** nandangowdajt705@gmail.com

**Mobile Number**: 8431303899

**Qualification:** B.Sc

**Total Experience in Years:** Fresher

**Present Address:** Jainahalli, akkihabbal hobli, K.R.Pete taluk Mandya-571605
`,
  },
  "mrs-akshatha-a": {
    name: "MRS AKSHATHA A",
    url: "https://atme.edu.in/mrs-akshatha-a/",
    md: `**MRS AKSHATHA A**

ASSISTANT PROFESSOR

**E-mail**: Akshatagowda93@gmail.com

**Qualification**

UG: BE

PG: M.TECH

**Total Experience in Years**

Teaching: 1.3

**Papers Published**

International: 1
`,
  },
  "mrs-anusha-b-s": {
    name: "Mrs. Anusha B S",
    url: "https://atme.edu.in/mrs-anusha-b-s/",
    md: `**Mrs. Anusha B S**

Attender

**Department:** Electrical and Electronics Engineering

**Date of Joining Institution:** 19.02.2026

**E-mail:** [as3609159@gmail.com](mailto:as3609159@gmail.com)

**Mobile Number:** 7411137833

**Present Address: Mahadevpura, M H Puttaswamy Beedhi, Srirangapattana Taluk, Mandya District, Mahadevpurabore-571415.**
`,
  },
  "mrs-kavitha-g": {
    name: "Mrs. Kavitha G",
    url: "https://atme.edu.in/mrs-kavitha-g/",
    md: `**Mrs. Kavitha G**

**Attender**

**Department:** Computer Science & Engineering

**Date of Joining:** 20/09/2024

**Mobile number:** 9643983712

**Present Address:** Mahadeshwara Layout, Citizen School Back, Nanhanagud Town.
`,
  },
  "nagendra-r": {
    name: "NAGENDRA R",
    url: "https://atme.edu.in/nagendra-r/",
    md: `**NAGENDRA R**

ATTENDER

**Department:** Mechanical Engineering Department

**Date of Joining Institution:** 01/03/2014

**E-mail:** Nagendra.ramegowda@gmail.com

**Mobile Number:** 9980659589

**Qualification:** SSLC

**Present Address:** No-1813/1C,2nd Cross Hullinabeedi, K R Mohalla, Mysore-570004
`,
  },
  "nagesh-j": {
    name: "Nagesh J",
    url: "https://atme.edu.in/nagesh-j/",
    md: `**Nagesh J**
Programmer

**Department:** COMPUTER SCIENCE AND ENGINEERING

**Date of Joining Institution:** 10-12-2019

**E-mail:** [Nageshj.admin@atme.edu.in](mailto:Nageshj.admin@atme.edu.in) **Total Experience in Years:** 19 years
`,
  },
  "naveen-s": {
    name: "Mr. Naveen S",
    url: "https://atme.edu.in/naveen-s/",
    md: `**Mr. Naveen S**
Programmer

**Department:** COMPUTER SCIENCE AND ENGINEERING

**Date of Joining Institution:** 9-3-2016

**E-mail:** [Naveens-cs@atme.edu.in](mailto:Naveens-cs@atme.edu.in) **Qualification:** UG, B.E(CS)

**Total Experience in Years:** 13 years
`,
  },
  "pavithra-hm": {
    name: "Pavithra HM",
    url: "https://atme.edu.in/pavithra-hm/",
    md: `**Pavithra HM**
Programmer

**Department:** COMPUTER SCIENCE AND ENGINEERING

**Date of Joining Institution:** 8-9-2022

**E-mail:** Pavitrahm-cs@atme.edu.in

**Mobile Number:** 8050453975

**Qualification:** UG, BE (IS)

**Total Experience in Years:** 4.9 year

**Present Address:**#659, 7th main 2nd stage 80feet road, Police layout Sardhar Vallabhai Patel,Nagar
`,
  },
  "pragathi-b": {
    name: "Pragathi B",
    url: "https://atme.edu.in/pragathi-b/",
    md: `**Pragathi B**
Programmer

**Department:** COMPUTER SCIENCE AND ENGINEERING

**Date of Joining Institution:** 7-11-2022

**E-mail:** [Pragathib-cs@atme.edu.in](mailto:Pragathib-cs@atme.edu.in) **Total Experience in Years:** 4 years
`,
  },
  "ravi-a-r": {
    name: "Ravi A R",
    url: "https://atme.edu.in/ravi-a-r/",
    md: `**Ravi A R**

Programmer

**Department:** COMPUTER SCIENCE AND ENGINEERING

**Designation:** Attender

**Date of Joining Institution:** 18-02-2014

**Email ID**: raviaratme@gmail.com

**Mobile No:** 7760290047

**Total Experience in Year:** 27 years

**Present address:** No. 35/30 Indiranagara, hathalli, T narasipura talluk, Bannur Hobli, Mysuru district. 571101
`,
  },
  "shashikumar-c-2": {
    name: "Shashikumar C",
    url: "https://atme.edu.in/shashikumar-c-2/",
    md: `**Shashikumar C**

**Designation: Attender**

**Department :** Electrical and Electronics Engineering

**Date of joining Institution :** 7/08/2012

**Mobile number :** 8746044647

**Qualification :** SSLC

**Present address :** Bhugathagalli, Varuna Hobli, Vajamagala post, Mysore.
`,
  },
  "shashikumar-c": {
    name: "Shashikumar C",
    url: "https://atme.edu.in/shashikumar-c/",
    md: `**Shashikumar C**
Programmer

**Department:** COMPUTER SCIENCE AND ENGINEERING

**Date of Joining Institution:** 7-8-2012

**E-mail:** Shashikumarc363@gmail.com

**Mobile Number:** 8746044647

**Total Experience in Years:** 10 years

**Present Address:**#300 Ambedkar colony,varuna hobli,Vajamangala post bhugathagalli Mysore 570028
`,
  },
  "shivaprasanna-dm": {
    name: "Department:",
    url: "https://atme.edu.in/shivaprasanna-dm/",
    md: `Shivaprasanna DM
Attender

**Department:** COMPUTER SCIENCE AND ENGINEERING

**Date of Joining Institution:** 2-2-2018

**E-mail:** Dmshivaprasanna88@gmail.com

**Mobile Number:** 9844883839

**Total Experience in Years:** 6 years

**Present Address:** Danayakanapura, Kasaba hobali,T narasipura taluk,Mysore (D)-571124
`,
  },
  "sowmya-kn": {
    name: "Sowmya KN",
    url: "https://atme.edu.in/sowmya-kn/",
    md: `**Sowmya KN**
Programmer

**Department:** COMPUTER SCIENCE AND ENGINEERING

**Date of Joining Institution:** 5-9-2022

**E-mail:** [Sowmyakn-cs@atme.edu.in](mailto:Sowmyakn-cs@atme.edu.in) **Qualification:** UG, B.E(CS)

**Total Experience in Years: 11** months
`,
  },
  "sudhakar-m": {
    name: "SUDHAKAR M",
    url: "https://atme.edu.in/sudhakar-m/",
    md: `**SUDHAKAR M**

Attender

**Department:** ELECTRONICS & COMMUNICATION ENGINEERING

**Date of Joining Institution:** 08/07/2013

**Mobile Number:** 9008178146

**Present Address:** #569,4th cross, swarnasandra, mandya,570401.
`,
  },
  "yogesha-k-c": {
    name: "YOGESHA K C",
    url: "https://atme.edu.in/yogesha-k-c/",
    md: `**YOGESHA K C**

Attender

**Department:** ELECTRONICS & COMMUNICATION ENGINEERING

**Date of Joining Institution:** 05/12/2018

**Mobile Number:** 9740976835

**Present Address:** #215,nanjungudu road, Kadakola,mysuru taluk and district,571311
`,
  },
  "dr-s-r-bhagyashree": {
    name: "Dr. S R Bhagyashree",
    url: "https://old.atme.edu.in/dr-s-r-bhagyashree/",
    md: "## Education Details\n- **Diploma (Telecommunication Engineering)**\n- **B.E (Electronics & Communication Engineering)**\n- **M.Tech (VLSI & Embedded systems Design)**\n- **PhD (Electronics)**\n\n## Professional Experience\n- Currently Working as Dean Research & Professor Dept. of Electronics & Communication Engineering, ATMECE, Mysuru since 6th August 2020.\n- Working as Professor Dept. of Electronics & Communication Engineering, ATMECE, Mysuru since Jan 2017.\n- Worked as Associate Professor & Head Dept. of Electronics & Communication Engineering, ATMECE, Mysuru from 1st October 2014 to 31st December 2016.\n- Worked as Assistant Professor & Head Dept. of Electronics & Communication Engineering, ATMECE, Mysuru from 15th July 2011 to 30th September 2014.\n- Worked as. Senior Lecturer & HOD, Department of Telecommunication Engineering, GSSSIETW, Mysuru, from 6th May 2008 to 17th June 2011.\n- Worked as Lecturer, Dept. of Electronics & Communication Engineering, GSSSIETW, Mysuru from 16th August 2006 to 5th May 2008.\n- Worked as Lecturer, Dept. of Electronics & Communication Engineering, Srimath Polytechnic, Mysuru from 10th July 2003 to 14th August 2006.\n- Worked as Design Engineer, Smart Micro Systems, Mysuru \u00a0 from \u00a0 18th October 1993 to 30th June 2002\n- Worked as Supervisor ACE Components & Electronics Pvt. Ltd., Mysuru, 1st January 1993 to 16th October 1993\n- Worked as Lab Instructor SBRR Mahajana\u2019s First Grade college, Mysuru, 1st November 1991 to 30th May 1992\n\n## Publication Details\n**Text Book:**\n\nDr. S R Bhagyashree, Guru Prasad K N, Pradeep Kumar Y, Shalini V S, Harini R on \u201dBasic Electronics\u201d,\u00a0 ISBN No 978-1-64429-040-8, May 2021\n\n**Book Chapters:**\n\n1. Garg S., Dr. Bhagyashree S.R. (2020) Detection and Classification of Tumors Using Medical Imaging Techniques: A Survey. In: Balaji S., Rocha \u00c1., Chung YN. (eds) Intelligent Communication Technologies and Virtual Mobile Networks. ICICV 2019. Lecture Notes on Data Engineering and Communications Technologies, Vol. 33. Springer, Cham, https://doi.org/10.1007/978-3-030-28364-3\\_35, Online ISBN978-3-030-28364-3\n2. Sheetal Garg, and S. R. Bhagyashree Spinal Cord MRI Segmentation Techniques and Algorithms: A Survey, SN Computer Science\u00a02.3 (2021): 1-9. [[10.1007/s42979-021-00618-4](https://doi.org/10.1007/s42979-021-00618-4)](https://link.springer.com/article/[10.1007/s42979-021-00618-4](https://doi.org/10.1007/s42979-021-00618-4)), May 2021\n3. Dr. Bhagyashree S R, Sonal Singh T and Likhitha S Padmini Kiran J \u201cVehicle Speed Warning System and Wildlife Detection Systems to Avoid Wildlife-Vehicle Collisions\u201d, Springer Lecture Notes in Electrical Engineering, Vol .545, pp961-968, April 2019, DOI:\u00a0[10.1007/978-981-13-5802-9\\_84](https://doi.org/10.1007/978-981-13-5802-9\\_84),Part of [ISBN 978-981-13-5802-9](https://www.worldcat.org/isbn/9789811358029)\n4. Dr. Bhagyashree S R, Dr. Murali Krishna, \u201cInvestigating the Impact of Various Feature Selection Techniques on the Attributes used in the Diagnosis of Alzheimer\u2019s Disease\u201d, Springer Lecture Notes in Electrical Engineering, Vol .30, pp1815-1823, Jan 2019, DOI:\u00a0[10.1007/978-3-030-00665-5\\_166](https://doi.org/10.1007/978-3-030-00665-5\\_166), Part of\u00a0ISBN:\u00a0[ISBN 978-3-030-00664-8](https://www.worldcat.org/isbn/9783030006648)\n5. Dr. Bhagyashree S R, Dr. Sheshadri H S, Alzheimer\u2019s disease, DEMENTIA: ADVANCES AND TREATMENT, pp1-16, May 2018, ISBN:\u00a0[978-93-87500-12-9](https://www.worldcat.org/isbn/9789387500129)\n6. Dr. H S Sheshadri, Dr. A. Kandaswamy, Dr. Arunkumar M.N, Bhagyashree S R, Manoj kumar.S. B, Manojkumar S.B, C. Anjanappa \u201cMEDICAL IMAGE ANALYSIS A RESEARCH OUTCOME\u201d, published by RIP \u00a0 Research India Publications, ISBN: 978-93-84443-21-4, 2016\n\n**H-Indexed journals**\n\n1. Sheetal Garg, and S. R. Bhagyashree. \u201cCOMPARATIVE ANALYSIS OF VARIOUS FILTERS FOR DENOISING OF THE SPINAL CORD MRIs.\u201d\u00a0Biomedical Engineering: Applications, Basis and Communications\u00a0(2022): 2250027, DOI:\u00a0[[10.4015/S1016237222500272](https://doi.org/10.4015/S1016237222500272)](http://dx.doi.org/10.4015/S1016237222500272), June 2022( **Scopus Indexed, Q4 Rank, H index -23**)\n2. Dr. S R Bhagyashree, Kiran Nagaraj, Fall Caroline H.\u00a0D.\u00a0Martin Prince & Murali Krishna, \u201cDiagnosis of Dementia by Machine learning methods in Epidemiological studies: a pilot exploratory study from south India\u201d, Springer-Social psychiatry and psychiatric epidemiology, 53(1), pp 77-86, July 2017, ISSN 0933-7954, DOI: [10.1007/s00127-017-1410-0](https://doi.org/10.1007/s00127-017-1410-0), ( **Scopus Indexed, Q1 Rank, H index -108**)\n3. Bhagya Shree S R and Dr. H S Sheshadri, \u201cDiagnosis of Alzheimer\u2019s disease using na\u00efve Bayesian classifier\u201d, Springer \u2013NCAA, vol. 27, Issue-6, pp 1-10, Aug-16, ISSN: 0941-0643, doi.org/ 10.1007/s00521-016-2416-3, ( **Scopus Indexed, Q2 Rank, H index -57**)\n4. S R Bhagya Shree, Dr. H S Sheshadri, Dr. Murali Krishna \u201cDiagnosis of Alzheimer\u2019s Disease Using Rule Based Approach\u201d, Indian Journal of Science and Technology, Vo9, Issue3, PP 1-6, April 2016, ISSN: 9746846, DOI:\u00a0[[10.17485/ijst/2016/v9i13/84496](https://doi.org/10.17485/ijst/2016/v9i13/84496)](http://dx.doi.org/10.17485/ijst%2F2016%2Fv9i13%2F84496)( **Scopus Indexed, Q2 Rank(2016),\u00a0 H index -33**)\n\n**IEEE Proceedings**\n\n1. Dr. Bhagyashree S R and Murali krishna, \u201cDiagnosis of Alzheimer\u2019s Disease using Multi-Layer Perceptron Network,\u201d 2022 IEEE India Council International Subsections Conference (INDISCON), August 2022, pp. 1-5, IEEE ISBN:978-1-6654-6601-1, DOI: [10.1109/INDISCON54605.2022.9862895](https://doi.org/10.1109/INDISCON54605.2022.9862895)\n2. Dr. Bhagyashree S R and Muralikrishna, \u201cClinical Diagnosis of Alzheimer\u2019s Disease Employing Support Vector Machine,\u201d 2022 IEEE International Conference on Distributed Computing and Electrical Circuits and Electronics (ICDCECE), June 2022, pp. 1-5, IEEE ISBN:978-1-6654-8316-2 DOI: [10.1109/ICDCECE53908.2022.9792897](https://doi.org/10.1109/ICDCECE53908.2022.9792897).\n3. Dr. Bhagyashree S R and Prajwala simha S N \u201c\u00a0 Image Encryption using Discrete Radon Transformation and Non chaotic Substitution\u201d Proc. of IEEE International Conference on Signal Processing and Communication, Vol. 2, Tamilnadu, India,\u00a0 November 2017 ,\u00a0 pp. 1-4, IEEE ISBN: 978-1-5090-3239-6, 2017,\u00a0 DOI:\u00a0[[10.1109/ICECCT.2017.8117847](https://doi.org/10.1109/ICECCT.2017.8117847)](https://doi.org/10.1109/ICECCT.2017.8117847)\n4. Dr. H S Sheshadri, S R Bhagya Shree and Murali Krishna, \u201cDiagnosis of Alzheimer\u2019s disease employing neuropsychological and classification techniques\u201d, Kaulalampur, Malaysia August 24th-27th, 2015, IEEE ISBN: 978-1-4673-6537-6/15,\u00a0 DOI:\u00a0[[10.1109/ICITCS.2015.7292973](https://doi.org/10.1109/ICITCS.2015.7292973)](https://doi.org/10.1109/ICITCS.2015.7292973)\n5. S R Bhagya Shree, Dr. H S Sheshadri, R Shiva Kumar and H S Vinay Kumar, \u201cDesign of Embedded system for tracking and locating the patient suffering from Alzheimer\u2019s disease\u201d, PARK College of Engineering and Technology, Coimbatore-641659, Tamilnadu, India, Dec 18th \u2013 20th, 2014, IEEE ISBN: 978-1-4799-3975-6, \u00a0DOI:\u00a0[[10.1109/ICCIC.2014.7238291](https://doi.org/10.1109/ICCIC.2014.7238291)](https://doi.org/10.1109/ICCIC.2014.7238291)\n6. S R Bhagya Shree and Dr. H S Sheshadri, \u201cAn initial investigation in the diagnosis of Alzheimer's disease using various classification techniques\u201d, PARK College of Engineering and Technology, Coimbatore-641659, Tamilnadu, India Dec 18th \u2013 20th, 2014, IEEE Digital explore IEEE ISBN: 978-1-4799-3975-6,\u00a0 DOI:[10.1109/ICCIC.2014.7238300](https://doi.org/10.1109/ICCIC.2014.7238300)\n7. Bhagya Shree S R and Dr. H S Sheshadri, \u201cAn approach to preprocess data in the diagnosis of Alzheimer's disease\u201d Changchun, China 13-14 Dec., 2014. IEEE Digital explore IEEE ISBN No 978-1-4799-4765-2, pp135-139, EI Compendex Accession No. 2015160075195 Article no. 7062522\u2033,\u00a0 DOI:[10.1109/CCIOT.2014.7062522](https://doi.org/10.1109/CCIOT.2014.7062522)\n8. S R Bhagya Shree, P Chandra Shekar, A Arjun, GR Manoj, A Nithin and Ravitheja S Raj, \u201cAutomated Medication Dispensing System\u201d, K L University, Vijayawada, AP, 11th -13th September,2014, IEEE Digital explore IEEE ISSN: 2151-7703\u00a0 DOI:[10.1109/WOCN.2014.6923079](https://doi.org/10.1109/WOCN.2014.6923079)\n9. Manoj Kollam, S R Bhagyashree, \u201cZigBee wireless sensor for better interactive Industrial automation\u201d , Anna University, Chennai 6-8 Dec 2011, pp 304-308, IEEE Digital explore IEEE ISBN:978-1-4673-0671-3,\u00a0 DOI:[10.1109/ICoAC.2011.6165193](https://doi.org/10.1109/ICoAC.2011.6165193)\n\n**International Journals:**\n\n01. Bhagyashree S R, Pradeep Kumar \u201cMachine Learning and EEG in Diagnosing Depression: A Survey\u201d, INTERNATIONAL RESEARCH JOURNAL OF ENGINEERING AND TECHNOLOGY (IRJET) 7, 560-565, June 2020, ISSN, 2395-0056, Google Scholar\n02. Bhagyashree S R, Sukrutha A Jain, Pooja R, Swathi B S Review on Technological Aspects of Magnetic Resonance Imaging and Functional Magnetic Resonance Imaging IJETT, \u2013 Volume 59, Issue 2, pp 96-104, May 2018, ISSN: 2231-5381, Google Scholar\n03. Bhagyashree S R, Prajwala Simha S N, Sukrutha A Jain, and Pooja B G, \u201cReview on Diagnosis of Alzheimer\u2019s Disease using MRI\u201d, International Journal of Innovative Research in Science, Engineering and Technology, Vol. 6, Issue 1, PP-1246-1249, Jan 2017, doi.org/10.115680/IJIRSET.2017.0601135\n04. Bhagyashree S R, Chandan G N, and Girish M, \u201cImage Compression using AMBTC\u201d, International Journal of Electronics, Electrical and Computational System Vol.5, Issue-10, pp 46-54, Oct-16, ISSN 2348-117X\n05. Bhagya Shree S R and Vidya, \u201cFirefly Algorithm based data hiding technique\u201d, International Research Journal of Engineering and Technology (IRJET) Vol.9, issue 8, August- 2016, ISSN 2395-0056\n06. S R Bhagya Shree, Dr.\u00a0 H S Sheshadri and S Joshi, \u201cA Review on the Method of Diagnosing Alzheimer\u2019s Disease using Data Mining\u201d, International Journal of Engineering Research & Technology (IJERT), vol. \u2013 3, Issue-3, pp 2417-2420, Mar-14, ISSN: 2278-0181\n07. Bhagya Shree S R, Yathisha L \u201cDesign of UPS using SOC Technology\u201d, International Journal of Electronics, Electrical and Computational System\u201d Vol.-2, Issue-2, pp 135 \u2013 139, Feb-14, ISSN 2348-117X\n08. S R Bhagya Shree, \u201cAn Approach in the Diagnosis of Alzheimer Disease \u2013 A Survey\u201d, International Journal of Engineering Trends and Technology (IJETT) Vol. 7, issue- 1, pp 41-43, Jan-14, doi.org/10.1109/CCIOT.2014.7062522, ISSN: 2231-5381\n09. Chandan G N, S R Bhagya shree and Pavithra A C, \u201cWired and Wireless Online Transaction System on ARM9\u201d, IJCA, pp 19-23, Jul-15, ISBN 973-93-80888-47-3\n10. S R Bhagya Shree, Anitha Raghavendra and Supraja Pranesh \u201cMICROCONTROLLER BASED OIL DISPENSING UNIT\u201d, IJEEDC Vol.1 issue 10 ISSN: 2320-2084 pp 1 \u2013 2, Dec-13.\n\n**International Conference:**\n\n01. Bhagyashree S R and Murali Krishna\u00a0 \u201c [Diagnosis of Alzheimer\u2019s using Multi-Layer Perceptron Network](https://ieeexplore.ieee.org/abstract/document/9792897/)\u201d IEEE India Council (INDISCON 2022), organized by IEEE Bhubaneshwar Sub-section, Odisha during 15th \u2013 17th July 2022\n02. Bhagyashree S R, Dhanush, Chetan, Mahadeva Deepak \u201cImpact of music on Depression \u2013 A Survey\u201d, ICRTST 2022, ATME College of Engineering, Mysuru, 14th and 15th July 2022.\n03. Bhagyashree S R, Dhanush, Chetan, Mahadeva Deepak \u201cImpact of Pranayama on Health care\u201d, ICRTST 2022, ATME College of Engineering, Mysuru, 14th and 15th July 2022.\n04. Bhagyashree S R, Dhanush, Chetan, Mahadeva Deepak \u201cImpact of Yoga on Health care\u201d, ICRTST 2022, ATME College of Engineering, Mysuru, 14th and 15th July 2022.\n05. Bhagyashree S R and Murali Krishna\u00a0 \u201c [Clinical Diagnosis of Alzheimer\u2019s Disease Employing Support Vector Machine](https://ieeexplore.ieee.org/abstract/document/9792897/)\u201d 2022 IEEE International Conference on Distributed Computing and Electrical Circuits and Electronics (ICDCECE), organized by Ballari Institute of Technology & Management, Ballari, India on 23rd & 24th April 2022\n06. Bhagyashree S R, Pradeep Kumar Y \u201cA survey on Neuropsychiatric Tools and Machine Learning Approaches used in the Diagnosis of Depression\u201d in ICRTST-2021 organized by ATME College of Engineering, Mysuru, 8th and 9th July 2021\n07. Dr Bhagyashree S R, Chaitra B, Dhanush M C, Chandan R V, D Rajkumar \u201cAutomatic watering to the plants and detection of wild animals around the field\u201d, ICRTST 2021, ATME College of Engineering, Mysuru, 8th and 9th July 2021.\n08. Dr S R Bhagyashree, Ragashree P, Ananya C and Thanya M. \u201cA REVIEW ON COVID-19, ICRTST 2021, ATME College of Engineering, Mysuru, 8th and 9th July 2021.\n09. Sheetal Garg & Dr. Bhagyashree S R,\u201d Comparative analysis of the various filters for denoising of spinal card MRIs\u201d, ICRTST 2021, ATME College of Engineering, Mysuru, 8th and 9th July 2021.\n10. Bhagyashree S R, Sangeetha V, Shruthi A, Saima Sadaf \u201cSampark-IoT Based Display Board\u201d, ICRTST 2021, ATME College of Engineering, Mysuru, 8th and 9th July 2021.\n11. Bhagyashree S R, Abhishek S, Priya Prasad, Ranjitha N \u201cSelf Activated Medicaments Dispensing System\u201d, ICRTST 2021, ATME College of Engineering, Mysuru, 8th and 9th July 2021.\n12. Dr Bhagyashree S R, Pradeep Kumar Y \u201cMachine Learning and EEG in Diagnosing Depression: A Survey\u201d ICRTST 2020, ATME College of Engineering, Mysuru, 17th & 18th June 2020.\n13. Dr Bhagyashree S R \u201cDiagnosis of Alzheimer\u2019s Disease using multi-layer perceptron network for urban population\u201d ICRTST 2020, ATME College of Engineering, Mysuru, 17th & 18th June 2020.\n14. Sheetal Garg & Dr. Bhagyashree S R, \u201cDetection and Classification of tumors using Medical Imaging Techniques: A Survey\u201d, ICICV 2019, Francis Xavier Engineering College, Tirunelveli, 14thand 15th February 2019.\n15. Bhagyashree S R, Sonal Singh T, Likhitha S Padmini and Kiran J, \u201cVehicle speed warning system and wildlife detection system to avoid wildlife-vehicle collisions\u201d, ICERECT \u2013 2018, PESCE, Mandya, August 2018.\n16. Bhagyashree S R and Prajwala simha S N, \u201cImage Encryption using Discrete Radon Transformation and Non chaotic Substitution\u201d Proc. of IEEE International Conference on Signal Processing and Communication, Coimbatore, Tamilnadu, India, Feb 2017 (IEEE ISBN: 978-1-5090-3239-6, 2017 Vol. 2, pp. 1-4).\n17. Bhagya Shree S R, Dr Caroline HD Fall and Dr Martin Prince, Dr. Murali Krishna, Dr. Sheshadri H S, Dr. Kumaran Kalyanaraman, Dr. Vijay Dhanivas \u201cDiagnosis of Dementia using Rule Based Approach in the Community in South India\u201d, World Psychiatric Congress, Cochin, Sept.2015.\n18. H S Sheshadri, S R Bhagya Shree and Murali Krishna, \u201cDiagnosis of Alzheimer\u2019s disease employing neuro psychological and classification techniques\u201d, Kaulalampur, Malaysia, 24th -27th August 2015(IEEE Digital explore IEEE ISBN: 978-1-4673-6537-6/15, doi.org/10.1109/ICITCS.2015.7292973)\n19. S R Bhagya Shree, Kiran, Chandan, Pradeep, Hamsini, Revathi and Apoorva, \u201cAutomated moisture level control of irrigation field for improving a yield of a crop\u201d, at 2nd International conference On Networks information and communication, ICNIC \u2013 2015, 18th -20th May 2015 at SVCE, Bangalore.\n20. Bhagyashree S R and Dr. H S Sheshadri, \u201cAn approach to preprocess data in the diagnosis of Alzheimer's disease\u201d Changchun, China 13-14 Dec., 2014. (IEEE Digital explore IEEE ISBN No 978-1-4799-4765-2, pp135-139, EI Compendex Accession No. 2015160075195 Article no. 7062522\u2033, doi.org/10.1109/CCIOT.2014.7062522)\n21. S R Bhagyashree, P Chandra Shekar, A Arjun, GR Manoj, A Nithin and Ravitheja S Raj, \u201cAutomated Medication Dispensing System\u201d, K L University, Vijayawada, AP, 11th -13th September, 2014 (IEEE Digital explore IEEE ISSN: 2151-7703 doi.org/10.1109/WOCN.2014.6923079)\n22. R. Bhagya Shree G. N. Chandan, R. Anitha, P. Supraja and L. Shwethashree, \u201cA Vital Parameter Monitoring System using GSM\u201d, Elsevier proceedings, Sri Venkateshwara College of Engineering, ICNIC-2014, 18th\u2013 20th May 2014, SVCE, Bangalore.\n\n## Funding Projects\n- Funded by AICTE under the scheme MODROB- ASP for establishing \u201cCyber security in Power systems\u201d. March 2022, F.No.9-ssllDC/MOD- ASP/Policy -l 12021 -22\n- Funded from AICTE to conduct ATAL FDP on \u201cImplementation of National Education Policy 2020\u201d from 24th January 2022 to 28th January 2022. F.No.2-23/AICTE/ATAL-HQ/2021-22/2101\n- Funded from Cognitive Science Research Initiative (CSRI) DST for a multicentric work with the title \u201cImproving diagnosis and access to health care services for persons with dementia using Android based applications by community health workers\u201d for the years 2018-2021.\n\n## Patent\n1. Dr. Bhagyashree S R, Pavithra A C, Dhanush H V,\u00a0 Chethan P, Mahadevdeepak P, Nikhith Urs \u201cMACHINE LEARNED CROP PREDICTION SYSTE\u201d with patent application Number 202241042713 published on 19/08/2022\n2. Dr. Bhagyashree S R (EC), Pooja R, Sheethal N , SUKRUTHA A JAIN ,SWATHI B S \u201cA HANDHELD VISITOR GUIDANCE DEVICE, A SYSTEM AND A METHOD\u201d with patent application Number 202241007931 with publication Date 25/02/2022\n3. Dr. Bhagyashree S R, Keerthi A Kumbar, Mohammed Umar, Mohammed Adnan, Nayana N Poornima S \u201cIOT BASED INFECTIOUS DISEASE EXAMINATION SYSTEM AND METHOD\u201d with patent application Number 202141056445 with publication Date 11/02/2022\n4. Dr. Bhagyashree S R along with Chandrashekhar P Assistant Professor, students Priya Prasad, Abhishek S, N Ranjitha, Manoj G R, Arjun A, Nithin, Ravitheja S Raj has applied for patent on \u201cSMART Medication Dispensing System\u201d with patent application Number 201841011210.\n\n## Achievements\n**PC Member:**\n\n- International Conference on Computer science and Machin learning, January 2-3, 2023, Zurich, Switzerland https://aisca2023.org/csml/committee\n- 9th\u00a0International Conference on Artificial Intelligence and Applications (AIFU 2023), March 18-19, 2023, Vienna, Austria https://www.ccsea2023.org/aifu/committee\n- 4th\u00a0International Conference on Artificial Intelligence and Big Data (AIBD 2023), January 28-29, 2023, Copenhagen, Denmark https://acsty2023.org/aibd/committee\n- 4th\u00a0International Conference on Machine Learning and Soft Computing (MLSC 2023), January 28-29, 2023, Copenhagen, Denmark https://acsty2023.org/mlsc/committee\n- 4th\u00a0International Conference on Natural Language Processing, Information Retrieval and AI (NIAI 2023)\u00a0February 18-19, 2023, Dubai, UAE \u00a0https://ccseit2023.org/niai/committee\n- 8th\u00a0International Conference on Software Security (ICSS 2022) on December 23 ~ 24, 2022, Sydney, Australia https://cndc2022.org/icss/committee\n- 3rd\u00a0International Conference on Data Science and Applications (DSA 2022) on December 23 ~ 24, 2022, Sydney, Australia https://cndc2022.org/dsa/committee\n- 9th International Conference on Artificial Intelligence & Applications (ARIA 2022), September 17~18, 2022, Copenhagen, Denmark\n- 8th International Conference on Information Technology Converge Services (ITCON 2022)\n- November 19 ~ 20, 2022, Zurich, Switzerland\n- 8th International Conference on Fuzzy Logic Systems (Fuzzy 2022), November 19 ~ 20, 2022, Zurich, Switzerland\n- 8th International Conference on Artificial Intelligence (ARIN 2022)\u00a0to be held in\u00a0Sydney, Australia\u00a0on\u00a0June 18 ~ 19, 2022.\n- 8th International Conference on Artificial Intelligence and Soft Computing (AIS 2022) Conference held in\u00a0 \u00a0August 20~21, 2022, Chennai, India. \u00a0https://csit2022.org/ais/committee\n- 3rd International Conference on Natural Language Processing and Applications (NLPA 2022), August 20 -21, 2022, Chennai, India \u2013 \u00a0https://csit2022.org/nlpa/committee\n- 5th International Conference on Civil Engineering and Urban Planning (CEU 2022)\n- [International Conference on Advances in Computing & Information Technologies (CACIT 2021)](https://inwes2021.org/cacit/committee)\n- International Conference On Electronics, Communication, Computer Technologies and Optimization Techniques (ICEECCOT-2017), 15 \u2013 16 December 2017, GSSS Institute of Engineering & Technology for Women\n\n**Editorial Board member:**\n\n- Member of Editorial Team International Journal of Applied Mathematics and Machine Learning IJAMML (ISSN NO: 2394-2258)\n- Board Member IJETT (Seventh Sense Research Group) Thomson Reuters, Google Scholar\n- Editorial Board member IRJET Google Scholar\n- Member of Program Committee ICITCS 2017 IEEE\n- Editorial Panel member EC Psychology and Psychiatry PubMed\n- Editorial Board Member Journal of Child and Adolescent psychiatry Scopus\n- Editorial Board Member Journal of Precision Medicine and Public Health Google Scholar, PubMed\n- Editorial Board member international journal of thyroid research\n- Editorial Board member \u00a0 Journal of Child and Adolescent psychiatry Scopus\n- Editorial Board member \u00a0 Journal of Precision Medicine and Public Health Google Scholar, PubMed\n- Editorial Panel Member Surgery Clinics Journal\n- Editorial Panel member SM Journal of Clinical & Diagnostic Research\n- Member of Editorial Team International Journal of Applied Mathematics and Machine Learning IJAMML (ISSN NO: 2394-2258)\n- Board Member IJETT (Seventh Sense Research Group) Thomson Reuters, Google Scholar\n- Editorial Board member \u00a0 IRJET \u00a0 Google Scholar\n- Member of Program Committee ICITCS 2017 IEEE\n- Editorial Panel member EC Psychology and Psychiatry \u00a0 PubMed\n\n**Session Chair:**\n\n- Session Chair for IEEE International conference IEEE International Conference on Data Science and Information systems ICDSIS\u00a0 2022 organized by Malnad College of Engineering, Hassan, India on 29th & 30th July 2022.\n- Session chair for IEEE international conference on Distributed computing and electrical circuits and electronics ICDCECE- 2022 organized by Ballari Institute of Technology and Management, Ballari, on 23rh & 24th April 2022.\n- Session chair for IETE National conference held in IETE Mysore center on Saturday, 4th May 2019.\n- Session chair for IEEE International conference ICNTET organized by GRT Institute of Engineering &Technology, Tiruttani, Tamilnadu on 7th & 8th September 2018\n- Session chair for IEEE International conference ICIETS 2018 organized by NIE Institute of Technology, Mysore on 20th & 21st September 2018\n- Session Chair for National Conference held at GMIT Davanagere on 4th September 2015\n\n**Jury member:**\n\n- Jury member for the National level project exhibition organized by NIE Mysuru on 27th April 2022.\n- Jury member for the Open Day Project Exhibition Shakthi Sthaavara- 2019 organized by the Dept. of Electrical and Electronics Engineering, GSSSIETW, Mysore on Friday, 3rd May 2019\n- Jury Member for Project expo organized at IETE, Mysore on 4th May 2019\n- Jury Member for Project expo organized by the Dept. of Electrical and Electronics Engineering, ATMECE, Mysore on 10th May 2019\n- Jury Member for TechNIEIT 2016 held on 2nd May 2016\n\n**Reviewer:**\n\n- IEEE MYSURUCON 2022\n- IEEECONNECT2022\n- ICDCECE 2022\n- IEEECONNECT2021\n- IEEE Region10 Humanitarian Technology Conference R10HTC2021\n- 2021 International conference on Circuits, Controls and Communications CCUBE-21\n- International Conference on Mobile Networks and Wireless Communications (ICMNWC-2021)\n- Inderscience Submissions \u2013 \u00a0IJMEI\n- Brain Imaging and Behavior, Springer Nature, Scopus Indexed Journal\n- IEEE MYSURUCON 2021\n- IEEE B-HTC 2020\n- IEEE ICEECCOT 2018\n- ERCICA, 2018\n- IEEE ICETC2017\n- IEEE ICEECCOT 2017\n- Reviewer of International conference 4th International Conference on Emerging Research in Computing, Information, Communication and Applications (Springer) ERCICA 2016\n- IEEE ICEECCOT 2016\n- IEEE Conference TENCON2016\n- IJERT ISSN: 2278-0181 Google Scholar\n- SM Journal of Psychiatry & Mental Health\n- Archives of Gerontology and Geriatrics Elsevier\n- Advanced Practices in Nursing OMICS Publishing Group Medical Journals\n- BMC Neurology SCImago, SCOPUS, PubMed\n- Reviewer IJERT ISSN: 2278-0181 Google Scholar\n- SM Journal of Psychiatry & Mental Health\n- Archives of Gerontology and Geriatrics Elsevier\n- Advanced Practices in Nursing OMICS Publishing Group Medical Journals\n\n**Resource person:**\n\n- Resource person on the topic \u201cHuman Values; The Panacea for Humanity\u201d\u00a0an ATAL FDP dated\u00a06-03-2022 organized by VTU.\n- Resource person on the topic \u201cResearch policy and Initiatives\u201d held on 27th April 2021 during the FDP held between 26th to 28th April 2021.\n- Developing e-content for _Digital System Design_ under e-Shikshana Programme-04 from 14th September to 30th January 2021\n- Developing e-content for _Microcontroller_ under e-Shikshana Programme-03 from 12th February 2021 to 15th May 2021\n- Developing e-content for _Basic Electronics_ under e-Shikshana Programme-01 from 18th February 2019 to 10th May 2019.\n- Resource person for LATEX workshop organized for PG students on 29th & 30th March 2016 at ATMECE Mysuru\n- Resource person for LATEX workshop organized for UG students from 22nd & 27th February 2016 at ATMECE Mysuru\n- Resource person for One-day international Symposium on neurocognitive disorders held at AIISH on 29th September 2015.\n- Resource person for FDP on LATEX at on 22nd 2015 at IETE Mysuru.\n- Resource person for LATEX workshop organized for UG students on 9th Feb 2015 at Dept. CSE, ATMECE Mysuru.\n- Guest Lecture on \u201cIntroduction to electronics\u201d on 11th Oct 2012 at Vidya Vikas Institute of Engineering and Technology, Mysore\n- Guest lecture in JSS Polytechnic for Women, Mysore\n- Resource person for \u201cLATEX\u201d workshops organized by IETE and ATMECE Mysuru.\n\n**Other achievements:**\n\n- Participated as a mentor in the Grand Finale Smart India Hackathon 2022 held at Crescent University Chennai, from 24th August 2022 to 29th August 2022.\n- Member of Management Committee, Sadvidhya Education Institutions, Mysuru since 2022\n- VTU Nominee for Final year student innovative project 2021-2022\n- Member of LIC VTU 2022\n- Member of Advisory board of e-Shikshana of Visweswaraya Technological University 2020-21\n- Member of Governing Body of Sadvidhya Education Institutions, Mysuru since 2020\n- Member of Governing council ATME college of Engineering since 28th September 2017\n- VTU Nominee for Final year student innovative project 2020-2021\n- Initiated MOU with Intellect Bastion, New Delhi\n- Initiated MoU with Aspire For Her, Bombay\n- Participated\u00a0 as a mentor for a shortlisted team of Toycathon2021\n- Member of Advisory board of e-Shikshana of Visweswaraya Technological University 2019-20\n- Subject expert for staff selection held at NIEIT, Mysore on 4th May 2019 and 6th May 2019.\n- Member of Advisory board of e-Shikshana of Visweswaraya Technological University 2018-19\n- Participated as a mentor in Smart India Hackathon 2017 held at Amritsar on 1st and 2nd April 2017\n- BOE Member NIE 2018-19\n- BOE Member NIE 2017-18\n- BOE member KSOU 2015\n- BOE member KSOU 2014\n- BOE Member NIE 2013-14\n- Initiated ISF (National Level Professional body) at ATME college of Engineering 2013\n- BOE Member NIE 2012-13\n- BOE Member NIE 2011-12\n- Director of Alumni Association JSS Polytechnic for Women, Mysore.\n\n## Certifications\n**MOOC/ ARPIT/ SWAYAM certifications**\n\n- Completed \u201cAgile Leadership Principles and Practices\u201d on January 17, 2022, a course of study offered by USMx, an online learning initiative of the University System of Maryland.\n- Completed SWAYAM's \u201cANNUAL REFRESHER PROGRAMME IN TEACHING (ARPIT) \u2013 2021\u201d during 2020-21.\n- Completed SWAYAM's \u201cBasic course in Bio Medical Research\u201d May- June 2020\n- Completed GSE3x: Introduction to Data Wise: A Collaborative Process to Improve Learning & Teaching, a course of study offered by HarvardX, an online learning initiative of Harvard University. 17th May 2020\n\n**FDP/ Workshop attended:**\n\n- Participated in AICTE-ISTE approved Orientation/Refresher Programme on \u201cAccreditation: An Accelerator for Quality Improvement in Engineering Education\u201d held during 22nd April 2021 to 28th April 2021 organized by S.D.M. College of Engineering and Technology, Dharwad, Karnataka.\n- Participated in FDP on \u201cNew Avenues and Role of Faculty in Effective Implementation of NEP-2020 in HEIs\u201d organized on 29th January 2021 by ATME College of Engineering, Mysuru\n- Participated in the National Education conclave on \u201cRe- imagining University Education with a Heart- centered approach\u201d on 12th & 13th January 2021organized by Heart Fullness Education Trust\n- Participated in the Three Days Faculty Development Program on \u201cImportance of NAAC Accreditation in Higher Education Institutions\u201d from 09-11-2020 to 11-11-2020, Organized by ATME College of Engineering, Mysuru.\n\n- Participated and successfully completed the online workshop on Universal Human Value on the theme \u201cInculcating Universal Human Values in Technical Education\u201d during 26th -30th May, 2020 as organized by All India Council for Technical Education(AICTE).\n- Participated and successfully completed the online workshop on Universal Human Value on the theme \u201cInculcating Universal Human Values in Technical Education\u201d during 2nd \u2013 6th May, 2020 as organized by All India Council for Technical Education(AICTE).\n- Participated and successfully completed 3-days \u201cFaculty Development Program for Student Induction (FDP-SI)\u201d during 18th \u2013 20th June, 2018 at Sahyadri College of Engineering and Management, Mangalore organized by All India Council for Technical Education(AICTE).\n- Participated in three days FDP on \u201cARM Cortex and M3 controllers\u201d from 14th December to 16th December 2017, organized by Department of ECE, ATMECE, Mysuru in association with VTU Belagavi, ALS Bengaluru & IETE Mysuru center.\n- Participated in one-day National level workshop on \u201cInterfacing innovation and IPR for Diffusion of Technology\u201d organized by ATME College of Engineering, Mysuru on 19th January 2015.\n- Participated in FDP on \u201cLabVIEW\u201d organized by Department of ECE, ATME College of Engineering, Mysuru on 8th January 2015.\n\n**Webinar/seminar/ attended:**\n\n- Participated in National webinar on \u201cNEP 2020: Vision to Action\u201d on 13th May 2021, IIIT Kalyani\n- Participated in the Webinar on \u201cHow to write Proposals for Funding\u201d organized on 31st December 2020 by ATME College of Engineering in association with IEEE Student Branch Bangalore Section\n- Participated in the Webinar on \u201cImportance of Citations and Indexing\u201d on 21st October 2020 organized by ATME College of Engineering in association with IEEE Student Branch Bangalore Section.\n- Participated in the Webinar on \u201cScientific Writing for journals\u201d on 30th September 2020 organized by Springer Nature in collaboration with VTU\n- Participated in the Webinar on \u201cTeaching Pedagogy\u201d on 17th July 2020, organized by the Department of Electronics and Communication Engineering, ATME College of Engineering, Mysuru.\n- Participated in the Webinar on \u201cLong-term Impact of COVID-19 Pandemic on Healthcare Scenario in India\u201d, held on 13 JULY 2020 organized by Field Outreach Bureau, Mysuru,Ministry of Information and Broadcasting in association with Sarada Vilas College of Pharmacy, Mysuru, Alzheimer\u2019s & Related Disorders Society of India, Mysuru (ARDSI),Apna Desh, Mysuru, Association of Pharmaceutical Scientists & Educators (APSE)\n\n- Participated in three days\u2019 webinar on \u201cLatest Technologies\u201d (Cloud Computing, Machine Learning, Artificial Intelligence), from 9th July 2020 to 11th July 2020, organized by Department of Computer Science and Engineering, ATME College of Engineering, Mysuru,\n- Participated in online Webinar on the topic \u201cWomen Rights under Constitution\u201d and \u201cVishaka Guidelines on Sexual Harassment\u201d on 04th July 2020, organized under Women Cell, Visvesvaraya Technological University, \u201cJnana Sangama\u201d, Belagavi\n- Participated in Webinar series on \u201cHumanitarian Technologies\u201d during 13th to 23rd April 2020, Organized by IEEE Bangalore section\n\n## Roles and Responsibility\n**Convener**\n\n- Convener of an awareness program on Women Empowerment at Varuna village on 11-05-2022.\n- Convener of a webinar on \u201cGender equality today for a sustainable tomorrow\u201d by Dr N Vanishree on 16th March 2022.\n- Convener of International Women's Day celebrations 2022\n- Convener of \u00a0 Webinar on \u201cINFOCUS Session 6: Journalism in Digital Age \u201d by Rica Roy and Prachi Jatania on 14-12-2021.\n- Convener of World Human Rights Day held on 10th December 2021\n- Convener of \u00a0 Webinar on \u201cINFOCUS Session 5: Critic & Analysis of Film Credits \u201d by Rashi Lamba and Deepti Gupta on 08- 12-2021.\n- Convener of \u00a0 Webinar on \u201cStory Telling & Film Production\u201d by Chhitra Subramaniam on 02-12-2021.\n- Convener of Webinar on \u201cINFOCUS Session 3: Destress With Drama\u201d by Raell Padamsee, Managing Director & CEO Ace Productions Pvt Ltd\u201d Raell Padamsee. On 23-11-2021.\n- Convener of Webinar on \u201cINFOCUS Session 2: How to turn Passion into Profession \u201d by Meghna Ghai Puri and Arati Kadav on 16-11-2021\n- Convener of Webinar on \u201cINFOCUS: Film, Broadcasting, Journalism\u201d by Megha Tata , M D Discovery Communications( South Asia), Madhura Das Guptha Sinha, Founder &, CEO of Aspire For Her on\u00a0 11 \u2013 11-2021.\n- Convener of Webinar on \u201cMaximize your Potential\u201d by Navya Nanda and Apurva\u00a0 Purohit on\u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 09- 11-2021.\n- Convener of Webinar on \u201cA TETE \u2013ATETE\u201d with two EntrepreNaaris by Ms. Navya Nanda, Founder Project Naveli Co-Founder Aara Health and Ms. Masoom Mainawala, Fashion Influencer Founder, Empower on 22-10-2021.\n- Convenor of Webinar on \u201cMindfulness\u201d in association with AFH, IBM-on 20th September 2021\n- Convenor of Webinar on \u201cBig DATA 101\u201d in association with AFH, IBM-on 18th September 2021\n- Convener of Webinar on \u201cPatent Registration Procedure and Enforcement Scenario\u201d on 3rd September 2021\n- Convenor of Webinar on \u201cPrinciples of Visual Design\u201d in association with AFH, IBM-on 28th August 2021\n- Convenor of Webinar on \u201cA process Approach to Writing Research Articles \u2013for Beginners\u201d in association with CSI on 26th August 2021\n- Convenor of Webinar on \u201cIntroduction to Data science\u201d in association with AFH, IBM, on 23rd August 2021\n- Convenor of Webinar on \u201cIntroducing AFH (Aspire For Her) and Career Opportunities\u201d in association with AFH on 19th August 2021\n- Convener of Webinar on \u201cAwareness on Women Safety at Work Place\u201d on 18th August 2021\n- Convenor of Webinar on \u201cUsage of MS Word and EndNote for Writing Technical Papers\u201d in association with CSI on 17th August 2021\n- Convened IETE Chairpersons' conclave held at GSSSIETW on 3rd & 4th August 2021.\n- Convenor of Webinar on \u201cMind and Health\u201d by Shakunthala Venugopal on 23rd June 2021\n- Convened Webinar on \u201cIntelligent receiver design and future communication for 6G technology\u201d organized by IETE Mysuru Centre held on 13th March 2021.\n- Convened Webinar on \u201cImage processing and machine learning applications\u201d organized by IETE Mysuru Centre held on 19th February 2021.\n- Convened Webinar on IETE Students\u2019 Day organized by IETE Mysuru Centre held on 01st February 2021\n- Convened IETE Students\u2019 Day organized by IETE Mysuru Centre held on 01st February 2021\n- Convened Webinar on \u201cDeep learning for Disaster Management\u201d organized by IETE Mysuru Centre held on 30th January 2021\n- Convened Webinar on \u201cCareer Insights & Way forward- Post Covid\u201d organized by IETE Mysuru Centre held on 15th January 2021.\n- Convened Webinar on \u201cOrientation towards MS program\u201d organized by IETE Mysuru Centre held on 30th December 2020.\n- Convened Webinar on \u201cJoy of Computing\u201d organized by IETE Mysuru Centre held on 15th December 2020.\n- Convened Webinar on \u201cAn AI Decision system for Secure cyber network Architecture\u201d organized by IETE Mysuru Centre held on 17th November 2020.\n- Convened Webinar on \u201c67th IETE Foundation Day\u201d organized by IETE Mysuru Centre held on 2nd November 2020.\n- Convened Webinar on \u201cUnderstanding online Falsehood: the virus on Social media\u201d organized by IETE Mysuru Centre held on 31st October 2020.\n- Convened Webinar on \u201cSkills & attitude for New-Normal\u201d organized by IETE Mysuru Centre held on 30th October 2020.\n- Convened International Webinar on \u201c6G: Vision, Requirements, Technical Challenges, Standardization & Implementations\u201d organized by IETE Mysuru Centre held on 15th October, 2020.\n- Convened Webinar on \u201cApplying Artificial Intelligence to Improve Business Value\u201d organized by IETE Mysuru Centre held on 30th September, 2020.\n- Convened Webinar on \u201cStress Management\u201d organized by IETE Mysuru Centre held on 31st August 2020.\n- Convener of 2nd national conference held in IETE on 21st June 2020\n- Convener for webinar series of IETE 2020-2021\n- Convener of activities of IETE 2019- to date\n- Panel member for Webinar organized by ARDSI, Mysuru\n- Convener of International Women's Day celebrations 2020-21\n- Convened Webinar series on \u201cATMANIRBHARA BARATH\u201d in association with Field Outreach Bureau, Ministry of Information and Broadcasting, Mysuru, 2020-21\n- Convener of three-week Student Induction program for first-year students \u2013 2019-20\n- Convener of International Women's Day celebrations 2019-20\n- Convener of three-week Student Induction program for first-year students \u2013 2018-19\n- Convener of FDP on FDP on ARM CORTEX M3 and Microcontrollers held from 14/12/2017 To \u00a0 16/12/2017\n- Convener of ATMEeya Vidhaaya 2015, 2016, 2017, 2018\n- Convener of Graameena Kreede organized for staff of ATMECE during ATMEeya 2K18\n- Convener of an awareness program at the Institutional level on \u201cLegal rights of women\u201d, Initiated by National Commission for Women, India, funded by NCW, New Delhi, 2017-18.\n- Convener of International Women's Day celebrations 2018-19\n- Convener of FDP's, Workshops, Internship Programmes and Industrial visits conducted in the Department 2011-2016.\n- Convener of the webinar on \u201cImportance of citation & Indexing\u201d on 21.10. 2020.\n- Convener of the webinar on \u201c IPR and its role in research and innovation\u201d on\u00a0 20.11.2020.\n- Convener of the webinar on \u201cPatent Registration Procedures and Enforcement Scenario\u201d on 03.09.2021.\n\n- Convener of the webinar on \u201cUser Awareness Program on the usage of IEEE and Springer\u00a0 \u00a0 \u00a0 Nature E-Resources\u201d on 24 Nov 2021.\n\n- Convener of the webinar on \u201c A process Approach to writing Research Articles \u2013for Beginners\u201d on 26.08.2021.\n- \u00a0Convener of the webinar on \u201cHow to Write Proposals for Funding\u201d on 30. 12. 2020.\n- Convener of the webinar on \u201cUsage of M S Word & End Note for Writing Technical Papers\u201d on 17.08.2021.\n\n**Chairperson**\n\n- Chairperson of CICC \u2013 2022-23\n- Chairperson of Women\u2019s cell -2022-23\n- Chairperson of Research Publication & co-curricular activity committee- 2022-23\n- Chairperson of CICC \u2013 2021-22\n- Chairperson of Women\u2019s cell\n- Chairperson of Research Publication & co-curricular activity committee 2021-22\n- Chairperson of CICC \u2013 2020-21\n- Chairperson of CICC \u2013 2019-20\n- Chairperson of TLP & Classroom Teaching Evaluation committee- 2018-19\n- Chairperson of Research Committee -2018-19\n- Chairperson for Internal squad team for Internals 2018-19\n- Chairperson of CICC \u2013 2018-19\n- Chairperson for Internal squad team for Internals 2018-19\n- Chairperson of CICC initiated during the academic year 2018-19\n- Chairperson of stage program committee for the formal function of ATMEeya 2K18.\n- Chairperson for Internal squad team for Internals 2017-18\n- Chairperson of CICC during the academic year 2017-18\n\n**Coordinator**\n\n- Member of Institutional committees\n- Coordinator of EC-IRC cell 2017-18\n- Coordinator of Echelon\n\n**Member**\n\n- Member of Advisory Committee of ICRTST 2022\n- Member of organizing committee of International conference in Recent Trends in Science and Technology \u2013 ICRTST 2021\n- Member of organizing committee of International conference in Recent Trends in Science and Technology \u2013 ICRTST 2020\n- Member Laboratory Requirement and Evaluation Committee -2018-19\n- Member of Program Assessment Committee 2018-19\n- Member of Department Advisory Committee 2018-19\n\n**Other role & responsibilities**\n\n- Student Counsellor for academic year from 2011-12 till 2021\n- Setting up of laboratories\n- Guiding UG and PG students\n- Preparation of teaching material and imparting knowledge through Innovative methods\n- Preparation of scientific papers and publishing, participating in National and International conferences\n\n## Professional body membership\n- Vice-Chairperson IETE Mysore Chapter 2022- 24.\n- Vice-Chairperson IETE Mysore Chapter 2020- 22.\n- Joint Secretary ARDSI Mysore Chapter 2020-22.\n- Fellow IEI since 4th August 2021\n- Honorary Secretary IETE Mysore Chapter 2018- 20.\n- Joint Secretary ARDSI Mysore Chapter 2018-20.\n- Senior Member IEEE\n- Fellow IETE\n- Joint Secretary ARDSI Mysore chapter 2016-18\n- Treasurer- IETE 2010-12\n- EC member \u2013 ARDSI Mysore chapter since 2012\n- EC member \u2013 IETE since 2009\n- Chartered Engineer\n- Member Association for Computing Machinery\n- Life member ISTE\n\n## Research and Ph.D Guidance\n- Mr. Pradeep Kumar \u2013 Course work Completed\n- Mrs. Sheetal\u00a0 Garg \u2013 Comprehensive Viva-Voce Completed\n\n## Research area of Interest\nMachine learning, Power electronics, Embedded system, Neuro psychology\n\n",
  },
  "dr-mahesh-lohith-k-s": {
    name: "Dr. Mahesh Lohith K S",
    url: "https://old.atme.edu.in/dr-mahesh-lohith-k-s/",
    md: `## Professional Experience

- Teaching: 28
- Research: 18
- Industry:

## Contact Details

- **Email ID:** Official: [dr.maheshlohithks_phy@atme.edu.in](mailto:dr.maheshlohithks_phy@atme.edu.in) | Personal: [maheshlohithks@gmail.com](mailto:maheshlohithks@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/201965>
- **Google Scholar ID:** <https://scholar.google.com/citations?user=PW1Jh8kAAAAJ>
- **Scopus ID:** <https://www.scopus.com/authid/detail.uri?authorId=25422579000>
- **Orcid ID:** <https://orcid.org/0000-0003-3457-040X>
- **Web of Science Researcher ID:** <https://www.webofscience.com/wos/author/record/ADJ-9050-2022>
- **LinkedIn ID:** <https://www.linkedin.com/in/dr-mahesh-lohith-k-s-71059aa2/>

## Academic Details

- **Qualification**
- **Ph.D** in Applied Science – Materials and Tribology (VTU)
- **M.Sc** in Physics (University of Mysore)
- **B.Sc** in Physics, Maths & Computer Science (Sarada Vilasa College, University of Mysore)
- **M.Tech**., (Information Technology), K S O U.
- **Honours Diploma** in Space Sciences. St. Joseph's College, Bangalore.

## Areas of Interest

1. Materials and Tribology
2. Energy storage Devices

## Publication Details

**Book Publication:**

1. Scientific foundation of health, Publisher - Infinite Learning Solutions, ISBN : 978-81-955465-6-5
2. Principles and Practices in Nanotechnology, Publisher - AMKcorp Academics, Book code – AMKEDTB112438 pgs: 277, ISBN(E) -978-93-6556-349-8, ISBN(P) – 978-93-6556-010-7
3. Engineering Physics, e-Book, J Balasubrayamanyam, Mahesh Lohith K S, Sujith Thomas, Research Gate.

**Journal Publications:**

1. Karthik, G., Mahesh Lohith K S., Sunil Kumar, K. C., Nagaraju, G., Avinash, K., Harshitha, H. S., Pooja, K. R., Lakshmi Ranganatha, V., & Mallikarjunaswamy, C. (2026). Electrochemical performance of BiOCl for battery applications: Structural, optical, and charge-storage properties. Ceramics International.
2. Kumar, C. S. C., Mahesh Lohith K S., Ramachandra, M. N., Divakara, T. R., & Sumesh, P. (2025). Rapid and sensitive electrochemical detection of paracetamol using EuZrO₃-modified carbon paste electrode. Scientific Reports, 15, Article 43560.
3. Kumar, C. S. C., Ramachandra, M. N., Mahesh Lohith K S., Padmavathy, N., & Sumesh, P. (2026). CoCu₂O₄ modified electrodes via facile synthesis for ultrasensitive dopamine detection in physiological conditions. Electrochimica Acta, 548, Article 147892.
4. Nikhil Y Gangadhara, P Kiran Kumar, Avinash Krishnegowda, Honnur Krishna, KS Mahesh Lohith, Ravishankar H Sadashivanna, Raghavendra Ravikumar. (2025). Oxygen deficient MoO₃ nanoparticles as peroxidase substitutes, their substrate–nanozyme interactions and real-time validation in human serum sample. Journal of Pharmaceutical and Biomedical Analysis, Article 117119.
5. HI Nazar Malik, Sudhair Abbas Bangash, Hamza Sohail Bhatti, George Burton, Mahesh Lohith K S, (2025) The Role of Electronic Health Records (Ehr) In Reducing Healthcare Costs and Improving Patient Outcomes. A Systematic Review, Journal of Neonatal Surgery 14 (32S), 5142-5155
6. Mahesh Lohith K S, Sadashivanna, R. H., Krishna, H., Shivakumar, A., Gangadhara, N. Y., & Krishnegowda, A. (2024). Oxalic acid capped tungsten oxide nanozyme mimicking peroxidase activity, its synthesis characterization, and kinetic data validation via spectrophotometric studies. Nano-Structures & Nano-Objects, 40, 101340.
7. Nadeem, T., Rafique, T., Khan, W., Khandakar, S., Alkhayyat, A., Mahesh Lohith K S., ... & Brahim, S. M. (n.d.). Nanotechnology meets quantum computing: Advancing quantum bits (qubits) and devices for next generation computing.
8. Raghavendra R., Mahesh Lohith K. S., & Krishnegowda, A. (2023). An account of the influence of TMDC anodic materials on Li/Na-ion battery capacity. Grenze International Journal of Engineering & Technology, 9(1).
9. Supriya B. S., Mahesh Lohith K. S. Avinash Krishnegowda (2023). Spectrophotometric assay based on horseradish peroxidase-catalysed hydrogen peroxide using amino antipyrine and resorcinol as chromogenic reagents for sensitive detection of peroxidase in plant extracts.
10. Mahesh Lohith K. S. (2022). A Brief Discussion on the Influencing Factors and Conditions on Tribometry using a Pin-on-Disc Tribometer, Journal of The Institution of Engineers (India): Series D 103 (1), 355–362
11. Mahesh Lohith K. S., Sondur, V. B., & Sondur, V. V. (2014). The effect of cryogenic treatment on the hardness, friction and wear resistance of austenitic ductile iron type D3 tool steel. International Journal of Modern Engineering Research, 4, 24–29.
12. Mahesh Lohith K. S., Sondur, V. B., & Sondur, V. V. (2014). Influence of cryogenic treatment on the friction coefficient of nylon 6 and caprolactam–graphite composite. IPSAJ International Journal of Mechanical Engineering, 1(6), 10–15.
13. Gopala Krishna, K., Divakar, C., Venkatesh, K., Mohan, C. B., & Mahesh Lohith K S. (2010). Bulk temperature estimation during wear of a polymer composite pin. Wear, 268(1), 346–351.
14. Gopala Krishna, K., Divakar, C., Venkatesh, K., Mohan, C. B., & Mahesh Lohith K. S., (2009). Tribological studies of polymer-based ceramic–metal composites processed at ambient temperature. Wear, 266(7), 878–883.
15. Mohan, C. B., Divakar, C., Venkatesh, K., Gopala Krishna, K., Mahesh Lohith K S., & Naveen, T. N. (2009). Design and development of an advanced linear reciprocating tribometer. Wear, 267(5), 1111–1116.
16. Mohan, C. B., Gopala Krishna, K., Mahesh Lohith K S., Venkatesh, K., Divakar, C., Mithun, R. B., & Naveen, T. N. (2008). Coolant lubricity and coolant–lube compatibility with regard to slideway behavior. Journal of the Brazilian Society of Mechanical Sciences and Engineering, 30(4).

**CONFERENCE PUBLICATIONS**

1. "Some Studies on coolant deterioration", C. Diwakar, K. Venkatesh, K. Gopala Krishna, C. B. Mohan, K. S. Mahesh Lohith, R. B. Mithun, T. N. Naveen, International Conference on Industrial tribology, 2006, Tribology society of India, IISC, Bangalore.
2. Low friction stability and low wear of some self-lubricating engineered polymer composites under heavy loading conditions, Ramachandra M N, Mahesh Lohith K S, Nandan P, Chandrakala N C, National Conference on Recent Trends in Geoscience, Material Science & Civil Engineering. ATME College of Engineering, Mysuru, RTGMCE-2017, Sep 2017, EXCEL India Publications New Delhi, ISBN-ISSN:978-93-86256-67-6.

**SEMINAR PUBLICATIONS**

1. "Applications of Nano-Technology in education through simple experiments", K. Venkatesh, R. Geeta Balakrishna, K. S. Mahesh Lohith, All India seminar on Vistas of Nano-Technology, Institute of Engineers,2005, Bangalore.

## Membership in Professional Bodies

- Life Member, Tribology Society of India (TSI), Since 2004
- Life Member, Indian Society for Technical Education (ISTE), Since 2003

## Honours/Awards/ Achievements

**University Level**

1. Member, Board of Studies (Physics), VTU, Belagavi, 2025-28.
2. Member, Board of Studies (Physics), BEC, Bagalakote, 2025-28.
3. Chairman, BOE (Board of Examiners) VTU, Physics, 2024-25.
4. Member, BOE (Board of Examiners) VTU Physics, 2023-24.
5. Reviewer of Examination Process, BEC, Bagalakote, 27th Nov 2023
6. Member, Board of Studies - Basic Sciences and Humanities (Composite Board), 2022-25.
7. Member, Board of Studies (Vidya Vardhaka College of Engineering), 2022-25.
8. Member, Board of Examiners (Physics), 2021.

**Resource Person for FDP/SDP/STTP**

1. Resource Person: "Short Term Course in Nano-sciences and Engineering", Organized by VTU, 2006
2. Resource Person – Physics, VTU e-Shikshana, Maxwell's Equations and EM Waves, 2021.
3. Resource Person, Faculty Orientation Program, 2022 New Scheme, REC Hulkoti, Belgaum and Gulbarga Region. 2022
4. Resource Person, Faculty Orientation Program, 2022 New Scheme, VVCE, Mysore, Mysore Region.2022.
5. Resource Person, Faculty Orientation Program, 2022 New Scheme, BMSCE Bangalore, Bangalore Region. 2022.
6. Resource Person, Faculty Development Program, "Introduction to Python Programming and Applications" – Module 3 and 4, BPLCK105B., VTU, Belagavi, Online Mode, 2023
7. Resource Person, Faculty Development Program, "Introduction to Python Programming and Applications" – Module 3 and 4, BPLCK105B., VTU, Belagavi, Online Mode, 2024
8. Resource Person, SDP, Physics of Animations, Dayanand Sagar College of Engineering, Bangalore, 2023
9. Resource Person, SDP, Physics of Animations, VVCE, Mysuru, 2023
10. Resource Person, FDP, "Physics of Animation and Physical Interactive Simulator", Shrinivasa I T, Mangalore, 2023
11. Resource Person, FDP, "Physics of Animation and Interactive Physical Simulator, BIT, Bangalore, Online, 2023.
12. Resource Person, SDP, "Physics of Animation and Physical Interactive Simulator", JNNCE, Shimoga, 2023.
13. Resource Person, FDP, "Physics of Animation and Interactive Physical Simulator, Cambridge Institute of Technology, Bangalore, Online, 2023.
14. Resource Person, SDP, Physics of Animations, VVCE, Mysuru, 2024
15. Resource Person, Faculty Orientation Program, JNNCE, Shivamogga, Aug 2025
16. Resource Person, FDP, Non-Destructive Testing, Cambridge Institute of Technology, Bangalore, 2025

**College Level**

1. A Talk on "Preparing Presentations using Latex Beamer"
2. A Talk on "How to write a research paper"
3. Workshop on "Latex Beamer", MCA Students, ATMECE, Mysore.
4. Workshop on "Latex Type Setting", CSE Students, ATMECE, Mysore.

**Other achievements**

1. IBM Rational trainer, Center for Emerging Technologies, SBMJCE, Bangalore.
2. Team Member, Micro-satellite Project, Center for Emerging Technologies, SBMJCE, Bangalore
3. Trained on Ultra Precise Molding Techniques, Indo-German Institute of Technology, Bangalore
4. Expertise in the evaluation and characterization of tribological properties of materials (Reciprocating and POD tribometers)
5. ITC, Information Technology Center, Head, Management of Resources and Facilities – Planning, Setup and Management.
6. "KAAVYA" Examination Qualified in Sanskrit
7. Retired as Junior Under Officer (JUO) with a total service of 7 years in NCC.
8. Recognition of outstanding Performance in XRD Quiz, Malvern Panalytical

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. Workshop on Teaching Methodology, 2002, Sapthagiri College of Engineering Bangalore.
2. Workshop on Nano-technology, 2005, BTL Institute of Technology, Bangalore.
3. One day national seminar on nanomaterials, 2006, R. V. College of Engineering, Bangalore.
4. "All India seminar on vistas of nano applications", Institute of Engineers,2006, Bangalore.
5. International Conference on Industrial Tribology, Indian Institute of Science, 30th Nov 2006 to 2nd Dec 2006, Bangalore.
6. Symposium on Nanotechnology and Smart materials, 2007, PES Institute of Technology, Bangalore.
7. One Day Faculty Development Program on "Recent Trends in Science and Mathematics - RTSM-2017." GSSIETW, Mysuru.
8. National conference on "Recent Trends in Geo-science, Material Science and Civil Engineering, RTGMCE-2017, 22nd and 23rd March 2017, ATMECE, Mysuru.
9. State level symposium on Recent Developments in Science, Engineering and Technology, 10th OCT 2017, ATMECE, MYRUSU
10. Faculty development program on Python application Programming, 17th TO 21st JAN 2018,
11. TEQIP 1.3 – Workshop on "New model curriculum for first year BE/BTech – CBCS detailed syllabus (2018-19) as per outcome-based education (OBE) format including course outcomes and Bloom's Taxonomy", Conducted by VTU at Sahyadri College of Engineering, Mangaluru. 19th May 2018.
12. Six days workshop on – "Art of Counseling", 2nd to 9th July 2019, ATME College of Engineering, Mysuru, in association with Samadhana Counseling Center Bangalore, Mysuru.
13. TEQIP 1.3 – Five-day FDP on "Outcome Based Education and NBA Accreditation", 7th to 11th Jan 2020, GSSSIETW, Mysuru.
14. Online workshop on Advanced Techniques for Material Characterization (ATMC – 2020), 6th to 10th July 2020, Malavia National Institute Technology, Jaipur.
15. Two-day online workshop on Advanced Functional Materials (WAFM), 25th and 26th July 2020, Punjab Engineering College, deemed to be University, Chandigarh.
16. Eight days FDP on "Mentoring Pedagogy and Teaching in Higher Education", 3rd to 10th Aug 2020, E&ICT Academy, IIT Guwahati, in association with Bapatla Engineering College, Bapatla.
17. TEQIP-3 sponsored webinar on "Characterization of Nanomaterials", 26th June 2020, The National Institute of Engineering, Autonomous, Mysuru.
18. Webinar on "Teaching Pedagogy", 17th July 2020, Department of E & C, ATMECE, Mysore.
19. Webinar on "Fundamentals of Electromagnetism, 6th July 2020, Vidya Vardhaka College of Engineering, Mysuru.
20. Webinar on "Quantum Computing Fundamentals and Practical Implementation", 18th July 2020, GSSSIETW, Mysuru.
21. Webinar on "Sustainability Through Startup India and Related Schemes", 5th Aug 2020, Govt. of India, Field Outreach Bureau, Mysuru.
22. Two Days FDP Program on "Importance of Functionalizing Materials and its Applications", 12th and 13th Aug 2020, VVCE, Mysuru.
23. Webinar on "Aatma Nirbhar Bharath – Swatantra Bharathada Shreshta Nirmanakke Nirbhara Bharatha Tatvada Koduge", 12th August 2020, Govt. of India. Field Outreach Bureau, Mysuru.
24. International Webinar on "Raman Spectroscopy", Lecture Series 2020, 1st June 2020, Department of Physics and IQAC, T. K. Madhavan Memorial College, Gangiarkulagara, Kerala, India.
25. Three days faculty development program on "Importance of NAAC accreditation in higher education institutions", 9th to 11th Nov 2020, ATME College of Engineering, Mysuru.
26. Five Day STTP on "Thermoelectric Materials and its Applications", Center for Continuing Education, Indian Institute of Science, 15th to 19th Nov 2021. (online)
27. One-Day webinar on "Photo Electric Effect: 100 Years" organized by Department of Physics, BIT, Bangalore, 1st Dec 2021.
28. A Five-day FDP on "Advances in Characterization Techniques", Presidency University, Bangalore, 10th to 14th Oct 2022.
29. International Webinar, "Semiconductor Hetero-structure based detectors for optical communication", Adichunchanagiri University, BG Nagara, Mandya Dist., 26th Aug 2022.
30. Three days face-to-face FDP on the theme, "Inculcating Universal Human Values in Technical Education" Organized by AICTE at ATME College of Engineering, Mysuru from 2nd – 4th Nov 2023.
31. Five-day FDP on Essentials of Sciences on Engineering and Research 2024, 26th Feb to 1st Mar 2024, ATME College of Engineering, Mysuru – 28.
32. Three-day FDP on Essentials of Sciences in Engineering and Research 2025, 15th to 17th Jan 2025, ATME College of Engineering Mysuru – 28.
33. 4th International Faculty Development Programme (FDP) on Advanced Functional Materials: Energy, Environment, and Sustainable Development – 2026, Department of Physics, SRM TRP Engineering College, Tiruchirappalli, Tamilnadu, 28th Feb to 6th March 2025.
34. 4th International Faculty Development Programme (FDP) on Advanced Functional Materials: Energy, Environment, and Sustainable Development – 2026, Department of Phuysics, SRM TRP Engineering College, Tiruchirappalli, Tamilnadu, 27th Feb to 6th March 2026.
35. Five Days FDP on Universal Human Values II (UHV II), Jyothi Engineering College, Cheruthuruthi, Thrissur, Kerala.

## Proposal/Funding/Project Financial Assistance

- Seed Money of Rs 65,000/- sanctioned by ATME College of Engineering for the project proposal titled "Tribological Investigations of Plant-Based Polymer Composites for Industrial Applications". Principal Investigator Dr. Mahesh Lohith K S, Head, Research Centre, Physics, ATMECE and Co-Investigator Sunim M H, Research Scholar, Research Centre (Physics), ATMECE.

## Patent

- Nil

## Roles and Responsibilities: Institute Level

- Head of the Department (Physics)
- Head, Research Center (Physics)
- Coordinator – Physics Cycle
- Coordinator NBA, (Basic Sciences and Humanities)
- Member of various college level committees (Academic Council, Research, UHV Cell, etc.,)
- Examinations (DCS)
- Coordinator - Induction Program

## Roles and Responsibilities: Department Level

- Research Supervisor
- Guiding Three Research Scholars
- Mentor and Counselor`,
  },
  "ramachandra-m-n": {
    name: "Mr. Ramachandra M N",
    url: "https://old.atme.edu.in/mr-ramachandra-m-n/",
    md: `## Professional Experience

- Teaching: 20 Years
- Research: 5 Years
- Industry: Nil

## Contact Details

- **Email ID:** Official: [ramachandramn_phy@atme.edu.in](mailto:ramachandramn_phy@atme.edu.in) | Personal: [ramu.mnr@gmail.com](mailto:ramu.mnr@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/202647>
- **Google Scholar ID:** <https://scholar.google.co.in/citations?user=NrZnWoMAAAAJ>
- **Scopus ID:** <http://www.scopus.com/authid/detail.url?authorId=57216847437>
- **Orcid ID:** <http://www.orcid.org/0000-0001-7373-8047>
- **Web of Science Researcher ID:** <https://www.webofscience.com/wos/author/record/QMR-7747-2026>
- **LinkedIn ID:** <https://www.linkedin.com/in/ramachandra-m-n-64097358/>

## Academic Details

- **Qualification**
- **Ph.D** in Physics-Radiations (Pursuing)
- **M.phil**
- **M.Sc** in Physics
- **B.Sc** in Physics, Chemistry and Mathematics

## Areas of Interest

- Radiation Physics

## Publication Details

1. "Rapid and sensitive electrochemical detection of paracetamol using EuZrO3-modified carbon paste electrode", CSC Kumar, KSM Lohith, MN Ramachandra, TR Divakara, P Sumesh, Scientific Reports, volume 15, Article number: 43560 (2025).
2. "CoCu2O4 Modified Electrodes via Facile Synthesis for Ultrasensitive Dopamine Detection in Physiological Conditions", CSC Kumar, MN Ramachandra, KSM Lohith, N Padmavathy, P Sumesh, Electrochimica Acta, Volume 548, 1 February 2026, 147892. <https://doi.org/10.1016/j.electacta.2025.147892>
3. "Measurement of Interior and Exterior Gamma Dose Rate in Air in Mandya City, Karnataka." R MN, TS Shashikumar, Grenze International Journal of Engineering & Technology (GIJET) 9 (1), 2023.
4. "Estimation of indoor and outdoor effective doses and lifetime cancer risk from gamma dose rates in and around Mandya district, Karnataka", TS Shashikumar, MN Ramachandra, Chandrashekar, S Gowda, Radiation Protection Dosimetry 198 (20), 1540-1545, (2022).
5. "Measurement of Radon soil gas in and around Bharathinagara, Mandya District" T S Shashikumar, S Revanna, M N Ramachandra, G V Ashok, C Ningappa, Shivalinge Gowda. Radiation Protection Dosimetry, Volume 187, Issue 1, December 2019, Pages 83–87.
6. "Low friction stability and low wear of some self-lubricating engineered polymer composites under heavy loading conditions" Ramachandra M N, Mahesh Lohith K S, Nandan P, Chandrakala N C, Conference: Recent Trends in Geo Science, Material Science and Civil Engineering, ATME College of Engineering, Mysuru, Karnataka, India Volume: 23-24 March 2017.
7. "Micropropagation of Caralluma stalagmifera var. longipetala: A rare succulent medicinal plant from Karnataka, India", MN Ramachandra, S Karuppusamy, YL Krishnamurthy, African Journal of Biotechnology 13 (35), 2014.

## Membership in Professional Bodies

- Life member ISTE Chapter

## Honours/Awards/ Achievements

- Distinguished Service Award

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. "One week online FDP on VTU's Revised Physics Curriculum". Organized by Cambridge Institute of Technology, Bengaluru from 27th Oct to 1st Nov 2025.
2. "One day FDP on Revised Applied Physics - 2025 Curriculum" Organised by Vidya Vardhaka College of Engineering on 30th Aug 2025.
3. Three Days Faculty Development Program for Student Induction Program from 18th to 20th June 2018 at Sahyadri College of Engineering & Management, Mangaluru
4. Seven Days Faculty Development Program for Student Induction Program from 16th to 22nd July 2018 at Sahyadri College of Engineering & Management, Mangaluru
5. Organised- Universal Human Values

**SCIENCE FIESTA**

1. Faculty coordinator for ATME Science Fiesta – 2K19, in association with Incubation Club, ATMECE, on 20th December 2019

**WORKSHOP**

1. Five days online workshop on Advanced Techniques for material characterization (ATMC-2020) 6th to 10th of July 2020, Malavia National Institute of Technology, Jaipur.
2. One day workshop on New model curriculum for First year BE/B.Tech - CBCS Detailed syllabus (2018-19) On 19th May 2018.
3. A Technical talk, was organized in the college on 20-02-2014 by the Department of Basic Science on the Topic 'Basics and Applications in the Field of Nanotechnology'
4. One day national workshop on "Material Science & Nano Technology" was jointly organized by Dept of Chemistry, VidyaVikas Institute of Engineering & Technology with KSTA, on 29-08-2015.
5. One day national workshop on "Interfacing Innovation & IPR for Diffusion of Technology. Organized by NRDC in collaboration with Basic Sciences & Humanities Dept, ATMECE, on 19th January 2015

## Proposal/Funding/Project Financial Assistance

- Life member ISTE Chapter.

## Patent

- Nil

## Roles and Responsibilities: Institute Level

- EMS Coordinator.
- Student Scholarship Coordinator`,
  },
  "rani-t": {
    name: "Mrs. Rani T",
    url: "https://old.atme.edu.in/mrs-rani-t/",
    md: `## Contact Details

- **Email ID:** Official: [ranit_phy@atme.edu.in](mailto:ranit_phy@atme.edu.in) | Personal: [ranit1972@gmail.com](mailto:ranit1972@gmail.com)

## Professional Experience

- Teaching: 12 Years

## Academic Details

- **Qualification**
- **M.Sc** in Physics – University of Mysuru
- **B.Sc** in Physics, Chemistry and Mathematics`,
  },
  "dr-madhusudhana-r": {
    name: "Dr. Madhusudhana R",
    url: "https://old.atme.edu.in/dr-madhusudhana-r/",
    md: `## Professional Experience

- Teaching: 18 Years
- Research: 13 Years
- Industry: Nil

## Contact Details

- **Email ID:** Official: [madhusudhanar.phy@atme.edu.in](mailto:madhusudhanar.phy@atme.edu.in) | Personal: [madhu84nano@gmail.com](mailto:madhu84nano@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/384877>
- **Google Scholar ID:** <https://scholar.google.com/citations?user=6TNXNlMAAAAJ&hl=en>
- **Scopus ID:** <https://www.scopus.com/authid/detail.uri?authorId=57195919112>
- **Orcid ID:** <https://orcid.org/my-orcid?orcid=0000-0002-2345-8781>
- **Web of Science Researcher ID:** JPA-0893-2023
- **LinkedIn ID:** <https://www.linkedin.com/in/dr-madhusudhana-r-a165b543/>

## Academic Details

- **Qualification**
- **Ph.D.** in Physics
- **M.Tech.** in Nanoscience and Nanotechnology (University 1st Rank & Gold Medallist)
- **M.Phil.** in Physics
- **K-SET** in Physics
- **M.Sc.** in Physics
- **B.Sc.** in Physics, Chemistry, Maths

## Areas of Interest

1. Surface Engineering (Thin Film Coatings)
2. Nanostructured Material Synthesis and Characterisation
3. Nanostructured Coatings by DC/RF Magnetron Sputtering and Thermal Evaporation Techniques

## Publication Details

1. Guddappa Halligudra, Chitrabanu C. Paramesh, Amulya Giridasappa, Chetana Sabbanahalli, Kunal Roy, Madhusudhana Ramanna, Dinesh Rangappa, Prasanna Daddakunche Shivaramu, Catalytic Reduction of Organic Pollutants and Anticancerous Activity of Eco-Friendly Synthesized ZnO Nanoparticles Using Dill Seed Extract, Topics in Catalysis, (2026) 69:1493–1507, (Q2 Journal) Scopus Indexed, <https://doi.org/10.1007/s11244-025-02236-3>
2. Vidyashree K P, Udayabalan B, Shilpa M S, Madhusudhana R, Nandini S, Bhagyalakshmi R, Shivani T, Machine learning-based detection and classification of leaf diseases in rooftop gardens, Journal of Integrated Science & Technology, J. Integr. Sci. Technol. 2026, 14(5), 1571 (Q3 Journal) Scopus Indexed, <https://pubs.thesciencein.org/journal/index.php/jist/article/view/a1571>
3. H., Guddappa, Halligudra, S., Chetana, S., S., Singh, Seema, Madhusudhana R, Shantharaja, S., Lo, Shang-Lien; Catalytic behaviour of iron-based nanomaterials for the remediation of hazardous chemicals from wastewater: A Review, Journal of Physics and Chemistry of Solids (Q2 Journal, IF: 4.9, SNIP: 0.991), Vol. 203, 112735, (2025), Scopus indexed, <https://doi.org/10.1134/S1063776124601186>
4. Ravikiran, B. Sachin, R. Madhusudhana, S. L. Aravind & Gurukiran Kashyaup; Investigation of Viscosity and Tribological Characteristics of Cashew Nutshell Oil and Castor Oil Blends using ZDDP as Additives, Book Chapter - Advances in Science, Technology & Innovation, IEREK Interdisciplinary Series for Sustainable Development, Scopus indexed, Springer Nature (2025), <https://doi.org/10.1007/978-3-031-73816-6_19>
5. B Sachin; Charitha M Rao; Ravikiran.; Amit Tiwari; T Raghavendra; R Madhusudhana; A Eswaran; C. Durga Prasad "Interactive Design and Development of an Intelligent Vision-Driven 3D Printed Precision Sorting Mechanism for Silk Cocoons", International Journal on Interactive Design and Manufacturing – Springer (Q2 Journal, IF: 2.5, SNIP: 1.267) Scopus Indexed, Electronic ISSN 1955-2505; Print ISSN 1955-2513; (2024), <https://doi.org/10.1007/s12008-024-02086-5>
6. Ravikiran, Kupparavalli Ramamurthy Prakash, Aravind Surendran Lathika, Madhusudhana Ramanna, Sachin Bandadka, Ajay Anand, "Experimental Study on Tribological, Rheological and Bio-degradability Characteristics of Canola oil with TiO2 Nanoparticles as Bio-nanolubricants", Tribology in Industry (Q3 Journal, IF: 1.87, SNIP: 0.681) Scopus Indexed, SNIP – 0.785, Volume 46, Number 1, (2024), ISSN: 0354-8996, <https://doi.org/10.24874/ti.1591.12.23.02>
7. Vinaykumar Linganna, Madhusudhana Ramanna, Bhuvan Lokesh Marenahalli, Siddaram Nadigar, Mallesha Lingappa, Synthesis and Characterisation of Triazole, Pyrimidyl, Fluoroaniline, and Nitrobenzamide Derived Picrate Salts in the Journal "Letters in Applied NanoBiosciences", (Q3 Journal, IF: 0.91, SNIP: 0.396) Scopus Indexed, Volume 13, Issue 2, 2024, 81, (2024) <https://doi.org/10.33263/LIANBS132.081>
8. Ravikiran, Savant, A., Patil, D., Muraleedharan, A.V., Ramanna Madhusudhana, Design and Development of Helium-Assisted Quadcopter with Object Recognition, AIP Conference Proceedings, (IF: 0.91, SNIP: 0.204), Scopus Indexed, SNIP - 0.291, Volume 2766, Issue 1, (2023) <https://doi.org/10.1063/5.0139353>
9. Madhusudhana R, R. Gopalakrishne Urs, L. Krishnamurthy, "ZrO2-TiO2 Multi-layered Nanostructured Coatings on AA5052 Substrate as Corrosion and Thermal Barrier Coatings", SSRG International Journal of Material Science and Engineering, Volume 8 Issue 3, 1-5, ISSN: 2394 – 8884, (2022) <https://doi.org/10.14445/23948884/IJMSE-V8I3P101>
10. Ravikiran, Srikara Kundaragi, S. L. Aravind, V. M. Akhil, R. Madhusudhana, "Rheological and Tribological Characterization of Completely Biogenic Grease" Springer Proceedings in Materials, (Q3 Journal, IF: 0.91, SNIP: 0.174), Scopus Indexed, Vol. 18, (2022), <https://doi.org/10.1007/978-981-19-5395-8_12>
11. Madhusudhana R, R. Gopalakrishne Urs, L. Krishnamurthy, "Thermal Analysis of Yttrium and Cerium Based Nanostructured Powders for High Temperature Applications" - International Journal of Innovative Research in Technology, (2022), Volume 9 Issue 3 | ISSN: 2349-6002
12. Madhusudhana R., Sushma K. L., L. Krishnamurthy, Chandra Sekhar K., Gopalakrishne Urs R., Sangamesha M.A., "Nanostructured Anti-glare Coatings for Night Visibility" – IOP Conference Series – Material Science and Engineering, (SNIP: 0.622), Scopus Indexed, Volume 1065, ISSN: 1757-899X, (2021) <https://doi.org10.1088/1757-899X/1065/1/012017>
13. Madhusudhana R., Lovesome Benedict S., L. Krishnamurthy, Gopalakrishne Urs R. L. Vinaykumar, "Synthesis and Characterization of Yttrium Nanostructured Coatings" – IOP Conference Series – Material Science and Engineering, (SNIP: 0.622), Scopus Indexed, Volume 1065, ISSN: 1757-899X, (2021) <https://doi.org/10.1088/1757-899X/1065/1/012018>
14. Madhusudhana R., Navyashree K. C., L. Krishnamurthy, Gopalakrishne Urs R., "Synthesis and Characterization of Zirconium Oxide (ZrO2) Films on AA5052 and Glass substrates" – IOP Conference Series – Material Science and Engineering, (SNIP: 0.622), Volume 1065, ISSN: 1757-899X, (2021) <https://doi.org/10.1088/1757-899X/1065/1/01201>
15. Madhusudhana R., Navyashree K. C., L. Krishnamurthy, R. Gopalakrishne Urs., "Advancements in Quantum Computing – A Review", International Journal of Scientific Engineering and Research (IJSER), ISSN (Online): 2347-3878, Volume 8, Issue 12, (2020) Paper ID: SE20121320360
16. Madhusudhana R., Lovesome Benedict S., Sushma S, L. Krishnamurthy, R. Gopalakrishne Urs, Sachin D., "Thermal Barrier Coatings for Aerospace Applications" in UGC-CARE Journal ISSN – 2348-2397, SHODH SARITA Vol. 7, Issue 27 (III), (2020)
17. B. R. Thejashwini, Vijay Khopkar, Madhusudhana R., B. Sahoo, "Crystal growth and dielectric properties of ammonium dihydrogen phosphate (ADP) single crystal", Journal of Material Science: Materials in Electronics – Springer, (Q2 Journal, IF: 2.779, SNIP: 0.712), Scopus Indexed, <https://doi.org/10.1007s10854-020-03603-4>, (2020)
18. Yaseen K. R. Shariff, Harish K. Choudhary, Vijay Khopkar, Ankit Yadav, Madhusudhana R., Balaram Sahoo, "Sol-Gel Auto-Combustion Synthesis of Ba-Sr Hexaferrite Ceramic Powders", Ceramic International – Elsevier Publications, (Q1 Journal, IF: 2.779, SNIP: 1.257), Scopus Indexed, <https://doi.org/10.1016/j.ceramint.2020.07.034> (2020)
19. Madhusudhana R., Madhurya S., L. Krishnamurthy, R. Gopalakrishne Urs, "A Review on TiO2 in Photo Catalytic Activity and Self-Cleaning Effect", International Journal of Advanced Science and Technology, 29 (3), 10023-10031, (2020), <http://sersc.org/journals/index.php/IJAST/article/view/27037>
20. Madhusudhana R., Naveen Kumar J.R., S. Vainatheya, "Electroless Co-P Coated Nanocenosphere /Polymer/Filler Composite for EMI Shielding Effectiveness", Elsevier, Material Today Proceedings, (IF: 1.937, SNIP: 0.838), Scopus Indexed, Volume 4, Issue 11P3 (2017), Pages 12130-12137, (2017)
21. Madhusudhana R., Sairani R., C. Shivakumara, Siddharth Joshi, "Combustion synthesis and characterization of Eu3+ activated Y2O3 red nanophosphors for display device applications", International Journal of Nanotechnology, Inderscience Publishers, (Q4 Journal, IF: 0.3, SNIP: 0.128), Scopus Indexed, (2017)
22. Madhusudhana R., L. Krishnamurthy, Gopalakrishne Urs R., Sangamesha M.A., "Synthesis and Characterization of Zirconia (ZrO2) by simple Sol-Gel Route", International Journal of Advanced Research, Volume 2, Issue 4, 433-436, ISSN: 2320-5407 (2014)

## Membership in Professional Bodies

- Indian Nuclear Society – Bhabha Atomic Research Centre (India) – Membership No. LM-12034/31-03-2016 (Life Member)
- Fellow of The Society of Innovative Educationalists & Scientific Research Professionals (FSIESRP) - Regd.No. LM171899333 (Life Member)

## Honours/Awards/ Achievements

- 2026: Received the Best Researcher Award during the Engineering Faculty Awards (17th May, 2026) from Academy of Maritime Education and Training (AMET) University and Dr. J. Ramachandran Maritime Foundation, Chennai.
- 2026: Successfully obtained the Drone Pilot License to fly drones (Small Category) from Garuda Aerospace Ltd., Chennai and authorized by the Directorate General of Civil Aviation (DGCA), Govt. of India
- 2025-26: Selected for the Prestigious AICTE Industry Faculty Fellowship for Faculty members of Engineering Colleges across the country and opted to work at Garuda Aerospace Pvt. Ltd., Chennai (Jan. 2026 – Jan. 2027)
- 2022: Authored a book titled "Nanoscience and Nanotechnology" published by Scientific International Publishing House (SIPH), registered under the Ministry of SME, Govt. of India. (ISBN: 978-93-5625-535-7) on Nov. 1, 2022
- 2021: Best Young Researcher award in International Conference on "Nanotechnology for Better Living (NBL-2021)", Sep 7 - 11, 2021 organized by National Institute of Technology (NIT) - Srinagar, Jammu and Kashmir.
- 2021: Programme Co-ordinator - Project Proposal was selected and granted 0.93 Lakhs from ATAL—AICTE, New Delhi, to conduct a Faculty Development Programme for AICTE-approved faculty throughout India.
- 2021: Best Young Researcher award in International Conference on Physical Sciences (ICPS-2021), February 05 - 06, 2021 organized by National Institute of Technology (NIT) - Surat.
- 2020: NIE – Centre for Research and Development sanctioned with Rs. 10,000/- to carry out research on "Black Cotton Soil Stabilisation using Nanocomposite-based Hydrogel"
- 2020: Best Innovative Technological Researcher & Dedicated Teaching Professional Award, Specialization: Nanotechnology from The Society of Innovative Educationalist & Scientific Research Professional (SIESRP), Chennai
- 2020: Awarded "Certified Digital Teacher" badge on successful completion of "Certificate Course on Digital Teaching Techniques" from ICT Academy, Tamil Nadu from June 29 – July 4, 2020
- 2020: Best Oral Presentation at 1st International Conference on "Accelerating Innovations in Materials Science" (AIMS – 2020), Organized by BMS Institute of Technology and Management, Bengaluru from Aug. 4 – 7, 2020
- 2019: Guest Editor for "American Journal of Materials Synthesis and Processing", Science Publishing Group (USA)
- 2018-24: Executive Committee Member – Indian Nuclear Society (Bhabha Atomic Research Centre), Mysuru Chapter.
- 2015-16: A Research Grant of Rs. 50,000/- Sanctioned from University Grants Commission (UGC – MRP), Minor Research Project Scheme from Govt. of India, India
- 2015: 1st Prize in National Level Technical Paper Presentation Contest (cogNIEscience – 2015) held at NIE, Mysuru, India
- 2014: 1st Prize in National Level Technical Paper Presentation Contest (cogNIEscience – 2014) held at NIE, Mysuru, India
- 2013-14: Project selected and granted with Rs. 30,000/- from Vision Group on Science and Technology (VGST), Government of Karnataka, Department of Information Technology, Biotechnology and Science & Technology, Science Projects in College Education (SPiCE / SSP-UG), Karnataka, India
- 2012: 1st Rank & Gold Medalist in M.Tech – Nanotechnology, Kuvempu University, Karnataka, India
- 2012: Jawaharlal Nehru Memorial Merit Fund award from the Government of India, India
- 2012: Qualified for the prestigious INSPIRE fellowship from DST - Govt. of India, India

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. AICTE- ATAL FDP on "Transforming Technical Education and Research through Gen AI" Malnad College of Engineering, Hassan, from 10.11.2026 to 15.11.2026 (6 Days)
2. STTP on "Research Pathways, Research Writing, Funding, Collaboration in Physical Science" organized by NCERT – RIE –Mysuru from Dec. 8 - 13, 2025
3. AICTE- ATAL FDP on "Recent Advances in Energy Harvesting and Sustainable Developments" by The National Institute of Engineering, Mysuru from 06.01.2025 to 11.01.2025 (6 Days)
4. AICTE- ATAL FDP on "Next-Generation Energy Storage: Integrating Advanced Electronics and Sensor Technologies" organized by Srinivas University Institute of Engineering & Technology, Mukka, Mangaluru from 18.11.2024 to 23.11.2024 (6 Days)
5. 1-Week Online STTP on "Transformative AI Tools for Research Writing" organized by MLR Institute of Technology, Hyderabad, Telangana & RSP Science Hub, Coimbatore from 30/09/2024 to 05/10/2024 (6 Days)
6. 6-Day Online FDP on Universal Human Values (UHV) - II organized by AICTE in May. 27, 2024 to Jun. 1, 2024
7. 6-day FDP on "Bharatiya Gyan Paramapara (IKS)" jointly organized by Inter-University Centre for Teacher Education (IUCTE), BHU, Varanasi & Vidya Bharti Uccha Shiksha Sansthan, Karnataka under the patronage of JSS Mahavidyapeetha, Mysuru held at Sutturu from Dec. 29, 2023 to Jan. 3, 2024
8. 3-Day FDP on "Inculcating Universal Human Values in Technical Education" organized by AICTE held at ATME College of Engineering, Mysuru from Nov. 02, 2023 to Nov. 04, 2023
9. Certified "Digital Teacher", Certificate Course on "Digital Teaching Techniques" from ICT Academy, Tamil Nadu from June 29 – July 4, 2020
10. Online Live FDP on "Digital Manufacturing using Autodesk Fusion 360" organized by ICT Academy, Tamil Nadu from June 22 - 27, 2020
11. Short Term Course on "Tribology in Machine Elements: Fundamentals & Recent Advances" organized by Dept. of Mechanical Engineering, IIT – Jammu during Dec. 9 - 13, 2019
12. One Day FDP on "Inspirational Teaching" organized by Dept. of Computer Science and Engineering, NIE, Mysuru held on Nov. 2, 2019
13. Short Term Course on "Fabrication and Characterization of Nano Hybrid Composites and Ceramic Materials and its impact on Mechanical, Tribology and Electrical Properties", organized by NIT, Manipur during Dec. 24 – 18, 2018
14. Training Program on "Synthesis and Characterization Techniques" organized by Dept. of Nanoscience & Technology, Sathyabhama University, Tamil Nadu during April 20 – 21, 2018
15. Three Days FDP on "Recent Trends in Nanoscience & Technology" (RTNST-2017), organized by GSSS Institute of Engineering & Technology for Women, Mysuru from Oct. 12 – 14, 2017
16. Workshop on "Nano Characterization" organized by Central Manufacturing Technology Institute (CMTI), Bengaluru on Sept. 15, 2017
17. TEQIP –II Sponsored Three-day Faculty Development Programme (FDP) on "Micro and Nano Scale Heat Transfer for the Application of Electronic Cooling" during Feb. 27 – March 1, 2017 organized by NIE, Mysuru, Karnataka, India
18. Short Term Course on "Modeling and Simulation of Nano-Transistors" organized by Dept. of Electrical Engineering, IIT – Kanpur on Feb. 13 – 17, 2017
19. Completed 2 modules on "Essentials and Decision making" in the UNESCO Bangkok e-learning series on Information Communication Technology in Education held on Jan. 13, 2017
20. Training Program on "Technology Enabled Teaching Learning Process" conducted by National Institute of Technical Teachers Training and Research held during Jan. 3 – 8, 2017 organized by NIE, Mysuru, Karnataka, India
21. TEQIP – II sponsored Two-day Workshop on "MATLAB" hands-on training on Nov. 10 – 11, 2016 at NIE, Mysuru, Karnataka, India
22. TEQIP – II sponsored One-day Workshop on "Proposal Writing to Funding Agencies" on Oct. 6, 2016 at NIE, Mysuru, Karnataka, India
23. One Day Workshop on "Thin Film Characterization – Basic Principles and Practices" organized by Department of Physics, IIT Madras on Feb. 21, 2016
24. International Workshop on "Nanostructured, Smart and Electronic Materials" (IWNSE-2016) organized by Rajarajeshwari College of Engineering on Jan. 8, 2016, Bengaluru, Karnataka, India
25. One Day Workshop on "Nanomaterials" organized by VTU Regional Office, Bengaluru on Dec. 14, 2015, Bengaluru, Karnataka, India
26. Seminar on "Benefits of Nuclear and Material Sciences in day-to-day life (BNMS-2015) organized jointly by Indian Nuclear Society and University of Mysore, Mysuru on Aug. 21-22, 2015, Mysuru, Karnataka, India
27. Workshop and hands-on training on "Physics Experiments using expEYES" conducted by the Indian Institute of Science (IISc), Bengaluru, Karnataka, India on Aug. 16, 2015
28. Three-Day Workshop on "Research Methodologies & Latex" organized by VTU e-Learning Centre, Mysuru from Dec. 29 – 31, 2014 at Vidya Vikas Institute of Engineering & Technology, Mysuru, Karnataka, India
29. National Workshop on Nanoscience and Technology (NW-NST' 2013) held at Mangalore Institute of Engineering & Technology, Moodabidri on Oct. 18 – 19, 2013, Mangaluru, Karnataka, India
30. TEQIP –II Sponsored Two-day Faculty Development Programme (FDP) on "Emerging Trends in Nano-Electronics and Device Packaging" during Sept. 30 – Oct. 1, 2013, NIE, Mysuru, Karnataka, India
31. One-day state-level seminar on "Nano Science & Technology" held on March 25, 2013, organized by Dept. of Physics, JSS College for Women, Saraswathipuram, Mysuru, Karnataka, India
32. International Conference at 5th Bangalore Nano, Dec. 5-7, 2012, organized by Dept. of IT, BT and S&T, Govt. of Karnataka, Bengaluru, India
33. Participated and presented a model in "Kuvempu University Silver Jubilee Exhibition" Feb. 16 – 19, 2012 organized by Committee for Popularization of Science Education, Kuvempu University, Shivammogga, Karnataka, India
34. Pre-Conference Workshop - 3rd International Conference on Frontiers in Nanoscience and Technology. (Cochin Nano – 2011), Aug. 14-17, 2011, Department of Physics, CUSAT. Kochi, Kerala, India
35. 3rd International Conference on Frontiers in Nanoscience and Technology. (Cochin Nano – 2011), Aug. 14-17, 2011, Department of Physics, CUSAT, Kochi, Kerala.
36. National Workshop on "Usage of Instruments for Nanotechnology Applications" on April 25, 2011 organized by the Dept. of Nanoscience & Technology, Kuvempu University, Shivammogga, Karnataka, India

## Proposal/Funding/Project Financial Assistance

**Granted**

- 2021: Programme Co-ordinator - Project Proposal submitted to ATAL – AICTE, New Delhi selected and granted with 0.93 Lakhs to conduct Faculty Development Programme for AICTE approved faculty throughout India.
- 2020: NIE – Centre for Research and Development sanctioned with Rs. 10,000/- to carry out research on "Black Cotton Soil Stabilization using Nanocomposite based Hydrogel"
- 2015-16: University Grants Commission (UGC - MRP), INR 50,000/-, "Fabrication and Optimization of Nano-structured TBS for Turbine Blades using Taguchi Design"
- 2013-14: Project selected and granted with Rs. 30,000/- from Vision Group on Science and Technology (VGST), Government of Karnataka, Department of Information Technology, Biotechnology and Science & Technology, Science Projects in College Education (SPiCE) /(SSP-UG), Karnataka, India

**Applied**

- Mar. 2026: "MXene-Enabled Multispectral Camouflage Materials for Advanced Soldier and Vehicle Stealth", iDEX Open Challenge, Funding amount: Rs. 1.5 Cr, Date of Submission: 30.03.2026.
- Nov. 2024: "Nano-Structured Multi-layered Environmental Thermal Barrier Coatings for Aerospace and High-Temperature Applications" to UGC-DAE (Consortium for Scientific Research – Indore Centre), Funding amount: 45,000/- (For Consumables and Rs. 15,000/- for Travel, Total: 60,000/-), Ref. no.: CRS/2024-25/1789, Date of Submission: 29.11.2024.
- June 2024: "Nano-Structured Multi-Layered Thermal Barrier Coatings for High-Temperature Applications", VGST-K-FIST: L1, Funding amount: 17,42,858/-, Ref. no.: VRN/000259/23-24, Date of Submission: 20.06.2024.
- Apr. 2024: "Development of Coating Materials used in High-Temperature Environments", (As PI) to ISRO-RESPOND, Funding amount: Rs. 75,92,560/-, Ref. No.: H7.3, Date of Submission: 06.02.2024.
- Nov. 2023: Topic titled "Nano-structured Multi-layered Environmental Thermal Barrier Coating Systems for High-Temperature Applications in Aerospace Industry" applied to SERB – SURE Scheme for a funding of Rs. 29,95,263/-, Ref. No.: 132023001592, on 22.11.2023.

## Patent

- Design Patent, Appln. No.: 484473-001, CBR No.: 228143, CBR Date: 19/12/2025, Title: Machine learning Device for Personalized Diet Tracking and Nutrient Analysis, Applicants: Dr. C. Solaimuthu, Dr. Madhusudhana R, Dr. Sunil Shreedhara Murthy, Dr. Manjunatha Neralakere Kenchegowda, Dr. N. V. Sushma, Dr. Mahadeva Prasad P., Dr. N. Sandhya Rani, Dr. Rudresh B M, Design Accepted and published, Journal No. is 11/2026 dated 13.03.2026

## Roles and Responsibilities: Institute Level

1. Regular roles and responsibilities as per the college curriculum
2. Research

## Roles and Responsibilities: Department Level

- Research`,
  },
  "raghavendra-r": {
    name: "Mr. Raghavendra R",
    url: "https://old.atme.edu.in/mr-raghavendra-r/",
    md: `## Professional Experience

- Teaching: 8 Years
- Research: 3 Years
- Industry: Nil

## Contact Details

- **Email ID:** Official: [raghavendrar_phy@atme.edu.in](mailto:raghavendrar_phy@atme.edu.in) | Personal: [rraghavendra2509@gmail.com](mailto:rraghavendra2509@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/235984>
- **Google Scholar ID:** <https://scholar.google.co.in/citations?user=AGZ-AxoAAAAJ>
- **Scopus ID:** <https://www.scopus.com/authid/detail.uri?authorId=58653752900>
- **Orcid ID:** <http://www.orcid.org/0000-0002-6008-6294>
- **Web of Science Researcher ID:** [rid28894](https://www.researchid.co/rid28894)
- **LinkedIn ID:** <https://www.linkedin.com/in/raghavendra-r-3063111ab/>

## Academic Details

- **Qualification**
- **Ph.D.** pursuing – Batteries.
- **M.Sc** in Physics – University of Mysore.
- **B.Sc** in Physics, Mathematics & Electronics – University of Mysore.

## Areas of Interest

- Energy Storage Devices

## Publication Details

1. "Creatinine conjugated copper oxide nanomaterial as peroxidase mimicking nanozyme and study of its biological activity" Next Materials - 2026. Elsevier. <https://doi.org/10.1016/j.nxmate.2025.101453>
2. "Oxygen deficient MoO3 nanoparticles as peroxidase substitutes, their substrate-nanozyme interactions and real time validation in human serum sample" Journal of Pharmaceutical and Biomedical Analysis - Volume 266, 15 December 2025, 117119. <https://doi.org/10.1016/j.jpba.2025.117119>
3. "An accont of influenceof TMDCs for anodic materialsof Li/Na-ion battery capacity" - ICRTST - 2022, 9(1):777-786.
4. "Synthesis and Characterization of Ag2O and MnO doped Ag2O nanocomposites for Antibacterial activity against E.Coli". Tuijin Jishu/Journal of Propulsion Technology ISSN: 1001-4055 Vol. 44 No. 5 (2023).
5. "Fe3O4 Nanoparticles as Nanozymefor the Quantification of Hydrogen Peroxide using 3-Methyl-2-Benzothiazolinonehydrazone Hydrochloride with N-(1-Naphthyl) Ethylenediamine Dihydrochloride as Chromogenic Probe". Tuijin Jishu/Journal of Propulsion Technology ISSN: 1001-4055 Vol. 44 No. 5 (2023).

## Membership in Professional Bodies

- IAPT - Indian Association of Physics teachers.

## Honours/Awards/ Achievements

- Certification courses on ecology (Usha charitable trust) and attended rescue camp in Daroji wildlife sanctuary.
- Sahayog – Job skills training programme (HR)
- NCC - C certificate, attended 4 National level Camps, Gold medal in firing.

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. One day National Seminar on Chemistry and Chemical Biology – University of Mysuru, Manasagangotri Mysuru – 26th May 2015.
2. One week Faculty Development programme by TEQIP – Phase II on Recent trends in Micro and Nano Fluidics – PES college of Engineering, Mandya - 2nd to 7th November 2015.
3. One day workshop on X-Ray crystallography – University of Mysuru, Manasagangotri Mysuru – 10th November 2014.
4. National webinar on Theurapetic plants & Covid-19 – Tata college Chaibasa, Jharkhand – June 2020
5. Webinar on Opportunity of Higher Education and Job for B.Sc Physics Students – Department of Physics and IQAC – Raje Ramrao Mahavidyalaya, Jath - May 2020.
6. 5-Days online workshop on Quantum Chemical Calculations using Gaussian For Experimental Physicists and Chemists – Alva's Institute of Engineering & Technology – 25th – 29th Oct 2021.
7. One day International Webinar on the occasion of Albert Einstein's Nobel Prize centenary Year Celebration "Materials for Energy Application" In collaboration with Department of Physics, SIT, Tumkur and Indian Association of Physics Teachers (IAPT RC12A) – 10th Nov 2021.
8. One Week Online Teachers Training Program on "An Overview of Teaching in Scientific Foundations of Health" - AICTE-VTU Joint Training Programme for Teachers – 20th – 24th December 2021.
9. Five days Faculty Development Program on "Hybrid Materials for Multifunctional Applications" in BMS Institute of Technology & Management – 11th – 15th Oct 2022.
10. One week faculty Development Program on "Current Trend in Material Physics for Engineering Applications" – in BMS college of Engineering – 15th - 19th May 2023.
11. 3 Days face-to-face FDP on the theme "Inculcating Universal Huaman Values in Technical Education" Organized by AICTE at ATME College of Engineering, Mysuru from 2nd – 4th Nov 2023.
12. Organised "Five Days Faculty Development Program on "Essentials of Sciences for Engineering and Research - 2024" – From 26th Feb 2024 to 1st Mar 2024 in ATME College of Engineering, Mysuru.
13. Five Days Faculty Development Program on Universal Human Values II approved by AICTE and held at Vidyavardhaka College of Engineering, Mysuru from 09-01-2024 to 13.01.2024 from 9.00AM to 6.30 PM.
14. Organised "Three Days Faculty Development Program on "Essentials of Sciences for Engineering and Research - 2025" – From 15th Jan 2025 to 17th Jan 2025 in ATME College of Engineering, Mysuru.
15. "One day FDP on - Applied Physics - 2025 Curriculum" Organised by Vidya Vardhaka college of Engineering on 30th Aug 2025.
16. "One week online FDP on VTU's Revised Physics Curriculum". Organized by Cambridge institute of technology, Bengaluru from 27th Oct to 1st Nov 2025.
17. One day international FDP on Growing Globally Competitive Currency in Higher Education. Delivered by Futured Innovation Studios, Australia on 8th Oct 2025 at ATME College of Engineering, Mysuru.

## Proposal/Funding/Project Financial Assistance

- NIL

## Patent

- NIL

## Roles and Responsibilities: Institute Level

- HOSTEL COMMITTEE
- ANTI-RAGGING COMMITTEE MEMBER
- ANTI-RAGGING SQUAD MEMBER
- GRIEVANCE REDRESSAL COMMITTEE
- WEBSITE, PUBLICITY & PROMOTION COMMITTEE

## Roles and Responsibilities: Department Level

- NIRF
- Lab in-charge
- Department File management
- Mentor
- Class Teacher`,
  },
  "anjan-kumar-j": {
    name: "Mr. Anjan Kumar J",
    url: "https://old.atme.edu.in/mr-anjan-kumar-j/",
    md: `## Professional Experience

- Teaching: 9 Years

## Contact Details

- **Email ID:** Official: [anjankumarj_phy@atme.edu.in](mailto:anjankumarj_phy@atme.edu.in)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/239279>
- **Google Scholar ID:** <https://scholar.google.co.in/citations?user=0-hsa3gAAAAJ>
- **Orcid ID:** <http://www.orcid.org/0000-0001-9235-6968>
- **LinkedIn ID:** <https://www.linkedin.com/in/anjan-kumar-j-325030a7/>

## Academic Details

- **Qualification**
- **M.Sc** in Physics
- **B.Sc** in Physics, Chemistry and Mathematics
- **B.Ed**

## Areas of Interest

- Solid State Physics
- Materials

## Publication Details

- "The natural and artificial manifestations of the golden ratio and its implications on aspect ratio" – Tuijin Jishu/Journal of Propulsion Technology ISSN: 1001-4055 Vol. 44 No. 5 (2023).

## Membership in Professional Bodies

- INDIAN ASSOCIATION OF PHYSICS TEACHERS

## Honours/Awards/ Achievements

- NCC – A certificate
- 1 year training certification on Yoga – RIMSE

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. Five days Faculty Development Program on "Hybrid Materials for Multifunctional Applications" in BMS Institute of Technology & Management – 11th – 15th Oct 2022.
2. One month course on "Quantum Computing using Indigenous Quantum Simulator QSim" jointly organized by IIT Roorkee and C-DAC Hyderabad with the support of Ministry of Electronics and Information Technology, Government of India. – 6th – 28th May 2023.
3. 3 days face-to-face FDP on the theme "Inculcating Universal Huaman Values in Technical Education" Organized by AICTE at ATME College of Engineering, Mysuru from 2nd – 4th Nov 2023.
4. One Week Faculty Development Program on "Advances in Material Characterization and Data Processing" Organized by ANURAG University. 15th – 20th July 2024.
5. 5 days face-to-face FDP on the theme "Inculcating Universal Huaman Values in Technical Education" Organized by AICTE at Vidyavardhaka College of Engineering, Mysuru.
6. "One day FDP on - Applied Physics - 2025 Curriculum" Organised by Vidya Vardhaka college of Engineering on 30th Aug 2025.
7. "One-week online FDP on VTU's Revised Physics Curriculum". Organized by Cambridge Institute of technology, Bengaluru from 27th Oct to 1st Nov 2025.
8. One day international FDP on Growing Globally Competitive Currency in Higher Education. Delivered by Futured Innovation Studios, Australia on 8th Oct 2025 at ATME College of Engineering, Mysuru.
9. A short-term online course on "Basics of Wealth Management" in TCS ION on 24th June 2026.
10. A short-term online course on "Active teaching strategies" in Swayam on 8th May 2026.
11. A short-term online course on "Introduction to Data Analytics" in Coursera on 26th October 2025.

## Proposal/Funding/Project Financial Assistance

- NIL

## Patent

- NIL

## Roles and Responsibilities: Institute Level

- ISO Coordinator
- NIRF

## Roles and Responsibilities: Department Level

- Lab - Coordinator
- Sports`,
  },
  "dr-avinash-k": {
    name: "Dr. Avinash K",
    url: "https://old.atme.edu.in/dr-avinash-k/",
    md: `## Professional Experience

- Teaching: 19 Years
- Research: 21 Years
- Industry: 1.5 Years

## Contact Details

- **Email ID:** Official: [dr.avinashk_che@atme.edu.in](mailto:dr.avinashk_che@atme.edu.in) | Personal: [avinashkchemistry@gmail.com](mailto:avinashkchemistry@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/201626>
- **Google Scholar ID:** <https://scholar.google.co.in/citations?user=pe8yEdkAAAAJ>
- **Scopus ID:** <http://www.scopus.com/authid/detail.url?authorId=37033342500>
- **Orcid ID:** <http://www.orcid.org/0000-0001-8361-7660>
- **LinkedIn ID:** <https://www.linkedin.com/in/dr-avinash-k-474920a8/>

## Academic Details

- **Qualification**
- **Ph.D** in Analytical Chemistry
- **M.Sc** in Chemistry (Inorganic Chemistry)
- **B.Sc** in Physics, Chemistry & Mathematics

## Areas of Interest

- Spectrophotometric analysis of drugs, metal ions, pesticides, enzymes and biomolecules.
- Nanotechnology, Electrochemical sensors, nanozymes, enzyme kinetics, antimicrobial activities, Battery technology.

## Publication Details

1. Electrochemical performance of BiOCl for battery applications: Structural, optical, and charge-storage properties. G Karthik, KS Mahesh Lohith, KC Sunil Kumar, G Nagaraju, K Avinash, HS Harshitha, KR Pooja, V Lakshmi Ranganatha, C Mallikarjuna swamy, Ceramics International
2. Creatinine conjugated copper oxide nanomaterial as peroxidase mimicking nanozyme and study of its biological activity. Ravishankar H Sadashivanna, Honnur Krishna, Anantharaman Shivakumar, Nikhil Y Gangadhara, Raghavendra Ravikumar, Avinash Krishnegowda, Next Materials 10, 101453.
3. Oxygen deficient MoO3 nanoparticles as peroxidase substitutes, their substrate-nanozyme interactions and real time validation in human serum sample. Nikhil Y Gangadhara, P Kiran Kumar, Avinash Krishnegowda, Honnur Krishna, KS Mahesh Lohith, Ravishankar H Sadashivanna, Raghavendra Ravikumar. Journal of Pharmaceutical and Biomedical Analysis, 117119
4. Evaluation of peroxidase mimicking behaviour of V2O5 nanozymes with various morphologies and its application as glucose sensor via cascade mechanism in human serum samples. Nikhil Y Gangadhara, B Manju, P Kiran Kumar, Honnur Krishna, Anantharaman Shivakumar, Ravishankar H Sadashivanna, Avinash Krishnegowda, Biochemical and Biophysical Research Communications 762, 151758
5. Oxalic acid capped tungsten oxide nanozyme mimicking peroxidase activity, its synthesis characterization, and kinetic data validation via spectrophotometric studies. Ravishankar H Sadashivanna, Honnur Krishna, Anantharaman Shivakumar, Nikhil Y Gangadhara, KS Mahesh Lohith, Avinash Krishnegowda, Nano-Structures & Nano-Objects 40, 101340
6. Peroxidase Mimicking V2O5 Nanozymes as the Spectrophotometric Sensor for the Determination of Glucose in Human Serum Sample Employing New Chromogenic Co-Substrates. Nikhil Y Gangadhara, P Kiran Kumar, Honnur Krishna, Anantharaman Shivakumar, Ravishankar H Sadashivanna, Avinash Krishnegowda.
7. Evaluation of Strong Microwave Absorption Property of PVB-PEDOT:PSS-Ti3C2Tx MXene Nanocomposite with Materials Data-Driven Discovery. M Praveen Kumar, S Raga, S Chetana, K Avinash, A Dey, D Rangappa. Transactions on Electrical and Electronic Materials 24 (3), 235-241
8. A simple uric acid assay by using 3‐hydroxytyramine as a chromogenic colorimetric sensor in human serum samples: Density functional theory supported mechanistic approach. Honnur Krishna, Avinash Krishnegowda, Shivakumar Anantharaman, Kumar Shrestha Ashwinee, A Edalli Vijayalakshmi. Journal of the Chinese Chemical Society, 70 (4), 894-908
9. An Account of the Influence of TMDC Anodic Materials on Li/Na-ion Battery Capacity. R Ravikumar, ML KS, A Krishnegowda. Grenze International Journal of Engineering & Technology (GIJET) 9 (1)
10. Nanostructured ZnO&CoO Doped Transition Metal Oxide Nanoparticles as Antibacterial Agents. KKP Kumar, A Krishnegowda. Grenze International Journal of Engineering & Technology (GIJET) 9 (1)
11. Spectrophotometric determination of glucose in human serum samples using para‐phenylenediamine and alpha‐naphthol as a chromogenic reagent. S Besagarhally Shivappa, A Krishnegowda, International Journal of Chemical Kinetics 54 (12), 681-691
12. Evaluation of the anti-fungal efficacy of silver-doped nanoparticles with metal oxide nanoparticles. P Malathi, K Avinash, Ann. For. Res 65 (1), 5263-5271
13. Development and quantification of horseradish peroxidase using paraphenylenediamine and alpha naphthol: applications in medicinal plant sources. B S Supriya, Avinash Krishnegowda, 15 (4), 2993-2998
14. A quantitative method for the detection and validation of catalase activity at physiological concentration in human serum, plasma and erythrocytes. H Krishna, K Avinash, A Shivakumar, NGS Al-Tayar, AK Shrestha, Spectrochimica Acta Part A: Molecular and Biomolecular Spectroscopy 251, 119358
15. Recent trends in green synthesis of ZnO nanomaterials using plant extracts. M Pujar, KKP Kumar, A Krishnegowda, RH Sadashivanna, Int Res J Eng Technol 8 (05), 147-156
16. Synthesis, characterization and photoluminescence studies of samarium doped zinc sulfide nanophosphors. K Ashwini, C Pandurangappa, K Avinash, S Srinivasan, E Stefanakos, Journal of Luminescence 221, 117097
17. Design Of MEMS Sensor For The Detection Of Diabetes. Syed Shameem, D Vamsi Krishna, K Sarat Kumar, K Avinash. 2018 3rd International Conference on Inventive Computation Technologies (ICICT), 413-416
18. Spectrophotometric assay of creatinine in human serum sample. A Krishnegowda, N Padmarajaiah, S Anantharaman, K Honnur. Arabian Journal of Chemistry 10, S2018-S2024
19. Morphological change based Optical studies of Zinc sulphide Nanophosphor. K Ashwini, C Pandurangappa, K Avinash. Materials Today: Proceedings 4 (11), 12157-12167
20. Hydroxylation of 4‐Amino‐5‐hydroxynaphthalene‐2, 7‐disulfonic Acid Monosodium Salt Catalysed by Horseradish Peroxidase and Hydrogen Peroxide: Computation of Kinetic Parameters. H Krishna, P Nagaraja, A Shivakumar, K Avinash, V Lingaiah, Journal of the Chinese Chemical Society 60 (4), 452-459
21. Quantification of antioxidants in medicinal plants and foodstuffs using Ce (IV) with indigo carmine as chromogenic probe. P Nagaraja, A Suma, N Aradhana, A Shivakumar, K Avinash, H Krishna. Food Analytical Methods 5 (4), 909-919
22. Quantification of creatinine in biological samples based on the pseudoenzyme activity of copper–creatinine complex. P Nagaraja, K Avinash, A Shivakumar, H Krishna. Spectrochimica Acta Part A: Molecular and Biomolecular Spectroscopy 92, 318-324
23. Determination of catalase activity using chromogenic probe involving iso-nicotinicacidhydrazide and pyrocatechol. A Shivakumar, P Nagaraja, NA Chamaraja, H Krishna, K Avinash. Journal of biotechnology 155 (4), 406-411
24. Spectrophotometric determination of catecholamine using vanadium and eriochrome cyanine r. Padmarajaiah Nagaraja, Ashwinee Kumar Shrestha, Anantharaman Shivakumar, Naef Ghallab Saeed Al-Tayar, Avinask K Gowda. Química Nova, 34, 373-376
25. Simple and sensitive method for the quantification of total bilirubin in human serum using 3-methyl-2-benzothiazolinone hydrazone hydrochloride as a chromogenic probe. Padmarajaiah Nagaraja, Krishnegowda Avinash, Anantharaman Shivakumar, Rangappa Dinesh, Ashwinee Kumar Shrestha. Spectrochimica Acta Part A: Molecular and Biomolecular Spectroscopy, 77(4), 782-786
26. Kinetic Study of Peroxidase‐Catalyzed Coupling of Benzene‐1,4‐diamine and N‐(2‐Aminoethyl)naphthalen‐1‐amine: Development of Micromolar Hydrogen. A Shivakumar, P Nagaraja, N Aradhana, AK Gowda, Helvetica Chimica Acta 93 (6), 1227-1237
27. Use of N, N-diethyl-p-phenylenediamine sulphate for the spectrophotometric determination of some phenolic and amine drugs. P Nagaraja, AK Shrestha, A Shivakumar, AK Gowda, Acta Pharmaceutica 60 (2), 217-227
28. A simple and sensitive spectrophotometric method for the determination of trace amounts of nitrite in environmental and biological samples using 4-amino-5-hydroxynaphthalene-2. Padmarajaiah Nagaraja, Naef Ghllab S Al-Tayar, Anantharaman Shivakumar, Ashwine K Shrestha, Avinash K Gowda. Spectrochimica Acta Part A: Molecular and Biomolecular Spectroscopy, 75(5), 1411-1416
29. Spectrophotometric determination of chloroquine, pyrimethamine and trimethoprim by ion pair extraction in pharmaceutical formulation and urine. P Nagaraja, AK Shrestha, A Shivakumar, AK Gowda. Journal of Food and Drug Analysis 18 (4), 7
30. Rapid and sensitive spectrophotometric method for the determination of the trace amount of thallium (III) in water and urine samples by new oxidative coupling reaction, P Nagaraja, NGS Al-Tayar, Shivakumar, AK Shresta, AK Gowda, Journal of the Mexican Chemical Society 53 (4), 201-208
31. Spectrophotometric method for the determination of chromium (VI) in water samples. P Nagaraj, N Aradhana, A Shivakumar, AK Shrestha, A k Gowda. Environmental monitoring and assessment 157 (1), 575-582
32. Spectrophotometric determination of the trace amount of thallium in water and urine samples by novel oxidative coupling reaction. P Nagaraja, NGS Al-Tayar, A Shivakumar, AK Shresta, AK Gowda. Journal of Chemistry 6 (4), 1153-1163.

## Membership in Professional Bodies

- Karnataka State Council for Science and Technology (KSCST)
- Indian Science Congress (ISC)
- Executive Council Member of KECCTA

## Honours/Awards/ Achievements

- BOE member of VTU 2025-26.
- Doctoral Committee member for VTU PhD Students.
- Guided three students towards their doctoral degree
- Presently guiding two students for their PhD degree.
- Guided 25 students towards the dissertation programme for MSc Students.
- Organizer of one-day national-level workshop on IPR for Diffusion of Technology in collaboration with NRDC.
- Organizer of Essentials of Sciences in Engineering and Technology workshop for the academic year 2022-23, 2023-24 and 2024-25
- Organizer of a special talk on Nanotechnology by Dr. Dinesh Rangappa, Chairman, VTU Nanotechnology Dept, Bangalore.

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. Presented Research article "Synthesis and Characterization of Ag2O and MnO-doped Ag2O nanocomposites for Antibacterial activity against E. coli". Tuijin Jishu/Journal of Propulsion Technology ISSN: 1001-4055 Vol. 44 No. 5 (2023).
2. Presented Research article "Fe3O4 Nanoparticles as Nanozyme for the Quantification of Hydrogen Peroxide using 3-Methyl-2-Benzothiazolinonehydrazone Hydrochloride with N-(1-Naphthyl) Ethylenediamine Dihydrochloride as Chromogenic Probe". Tuijin Jishu/Journal of Propulsion Technology ISSN: 1001-4055 Vol. 44 No. 5 (2023).
3. 3-day face-to-face FDP on the theme "Inculcating Universal Human Values in Technical Education" Organized by AICTE at ATME College of Engineering, Mysuru from 2nd – 4th Nov 2023
4. Presented Research article "An account of influence of TMDCs for anodic materials of Li/Na-ion battery capacity" - ICRTST - 2022, 9(1):777-786.
5. One-Week Online Teachers Training Program on "An Overview of Teaching in Scientific Foundations of Health" - AICTE-VTU Joint Training Programme for Teachers – 20th – 24th December 2021
6. 5-Days online workshop on Quantum Chemical Calculations using Gaussian for Experimental Physicists and Chemists – Alva's Institute of Engineering & Technology – 25th – 29th Oct 2021
7. Presented Research article "Analytical Determination of Hemoglobin by Spectrophotometric Method" Authors: Ravishankar H Sadashivanna, Dr. Avinash Krishnegowda, Dr. Kiran Kumar P, Held at ICRTST-2022, ATMECE, Mysore
8. Presented Research article "Nanostructured ZnO & CoO doped transition metal oxide nanoparticles as antibacterial agents." Authors: Malathi Pujar, Dr. Kiran Kumar P, Dr. Avinash Krishnegowda. Held at ICRTST-2022, ATMECE, Mysore
9. Presented Research article "Current Review on Nanozymes." Authors: Nikhil Y Gangadhara, Dr. Avinash Krishnegowda, Ravishankar H Sadashivanna. Held at ICRTST-2022, ATMECE, Mysore
10. Spectrophotometric Assay Based on Horseradish Peroxidase-Catalyzed Hydrogen Peroxide Using Aminoantipyrine and Resorcinol as Chromogenic Reagents for Sensitive Detection of Peroxidase in Plant Extracts. Authors: Supriya B S, Dr. Avinash Krishnegowda, Dr. Mahesh Lohith K S
11. Online Course on "Nanotechnology, Science and Applications" online mode at NPTEL-AICTE on July-Aug 2020.
12. Online Workshop "Advanced Techniques for Materials Characterization" organized by MNIT Jaipur on July 6th to 10th 2020
13. Workshop on "Materials Characterization by SEM and XRD" organized by Centre for Incubation, Innovation, Research & Consultancy. Bangalore. On 12th July 2019.
14. One-day national seminar on Nanotechnology for Energy, Environment and Health at NIE Institute of Technology, Mysore on 28th Feb 2017.
15. One-day workshop on radiation, natural and manmade at Vidya Vikas Institute of Technology, Mysore on 29th March 2014.
16. One-day workshop on Faculty development programme at Vidya Vikas Institute of Technology, Mysore on 24th Aug 2014.
17. One-day workshop on Recent advances in chemistry at GMIT, Mandya on 10th Jan 2015.

## Book Chapters

- Phytochemicals in nutraceutical-development, regulation and market trends. PK Kumar, R Rajam, AS Raj, K Avinash, P Karthik, R Sanjana. Phytoceuticals in Food for Health and Wellness, 531-547
- Experimental Study on Strength and Durability Characteristics of Mortars with TiO2 Nanoparticles. HU Srivathsa, TM Prakash, K Puneeth, K Avinash, 85-95

## Proposal/Funding/Project Financial Assistance

- Yes

## Patent

- NIL

## Roles and Responsibilities: Institute Level

- ISO Coordinator
- NIRF Coordinator
- Research Supervisor
- Anti-Ragging Squad
- Admission Committee

## Roles and Responsibilities: Department Level

- HOD of Chemistry
- Coordinator for Chemistry Cycle
- Member of various committees`,
  },
  "dr-chaitra-t-k": {
    name: "Dr. Chaitra T K",
    url: "https://old.atme.edu.in/dr-chaitra-t-k/",
    md: `## Professional Experience

- Teaching: 8 Years
- Research: 11 Years
- Industry: Nil

## Contact Details

- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/554916>
- **Google Scholar ID:** <https://scholar.google.com/citations?user=OVbVs7IAAAAJ&hl=en>
- **Scopus ID:** <https://www.scopus.com/authid/detail.uri?authorId=56809505100>
- **Orcid ID:** <https://orcid.org/my-orcid?orcid=0000-0002-8795-2594>
- **Web of Science Researcher ID:** <https://www.webofscience.com/wos/author/record/LBI-4096-2024>
- **LinkedIn ID:** <https://www.linkedin.com/in/chaitra-t-k-452b971a2/>

## Academic Details

- **Ph.D.** in Chemistry – Title of the thesis: Synthesis and corrosion inhibition behavior of some new heterocyclic derivatives on mild steel in acid media
- **M.Sc.** in Chemistry
- **B.Sc** in PCM

## Areas of Interest

- Corrosion
- Electrochemistry
- Material science

## Publication Details

1. Turuvekere Krishnamurthy Chaitra, Kikkeri Narasimha Shetty Mohana, Harmesh Chander Tandon, Thermodynamic, electrochemical and quantum chemical evaluation of some triazole Schiff bases as mild steel corrosion inhibitors in acid media. Journal of Molecular Liquids (Impact factor 5.2, Q1) 211, 1026-1038, 2015. <https://doi.org/10.1016/j.molliq.2015.08.031>
2. Turuvekere K. Chaitra, Kikkeri N. Mohana, Doddahosuru M. Gurudatt, Harmesh C. Tandon, Inhibition activity of new thiazole hydrazones towards mild steel corrosion in acid media by thermodynamic, electrochemical and quantum chemical methods, Taiwan Institute of Chemical Engineers (Impact factor 6.9, Q1), 67, 521- 531, 2016. <https://doi.org/10.1016/j.jtice.2016.08.013>
3. T K Chaitra, K N Mohana, H C Tandon, Study of new thiazole based pyridine derivatives as potential corrosion inhibitors for mild steel: Theoretical and experimental approach, International Journal of Corrosion (Impact factor 1.5, Q3), Article ID 456901, 2016. <https://doi.org/10.1155/2016/9532809>
4. Turuvekere K. Chaitra, Kikkeri N. Mohana, Harmesh C. Tandon, Comparative study of Levofloxacin and its amide derivative as efficient water soluble inhibitors for mild steel corrosion in hydrochloric acid solution, International Journal of Industrial Chemistry (Q3), 8, 1-15, 2017. DOI: 10.1007/s40090-016-0083-y
5. Turuvekere K. Chaitra, Kikkeri N. Mohana, Harmesh C. Tandon, Evaluation of newly synthesized hydrazones as mild steel corrosion inhibitors by adsorption, electrochemical, quantum chemical and morphological studies, Arab Journal of Basic and Applied Sciences (Q2), 25, 45-55, 2017. <https://doi.org/10.1080/25765299.2018.1449347>
6. Turuvekere Krishnamurthy Chaitra, Kikkeri Narasimhashetty Mohana, Harmesh Chander Tandon, Experimental and Theoretical Studies on the Corrosion Inhibition Performance of Molecules Containing Tert-Butyl Benzyl Group on Mild Steel in Acid Media, Journal of Bio Tribo Corrosion (Q2), 4, 25, 2018. DOI: 10.1007/s40735-018-0141-4
7. Narayana U. Kudva N, Sumana Y. Kotian, Vrushabendra Basavanna, Vicas C.S, Satish K. Byrappa, Shridevi D, Srikantamurthy Ningaiah, Turuvekere Krishnamurthy Chaitra, Srinivasa Murthy V, K. Byrappa, K. M. Lokanatha Rai, Synthesis, Characterization, and Evaluation of Biological Activities of Imidazolyl-Isoxazoline Analogue, Biointerface Research in Applied Chemistry (Q3), 10 (6), 7187 – 7197, 2020. <https://doi.org/10.33263/BRIAC106.71877197>
8. Bhondanthila Radhika Rao, Hemanth Kumar. C. M., Hullukere R. Prakruthi, Chandrashekara. B. M., Doddahosuru Mahadevappa Gurudatt, Prakasha K. C., Ningaiah Srikantamurthy, Turuvekere Krishnamurthy Chaitra, Microwave Assisted Facile Synthesis of Butyl Acetate Over Dealuminated Beta Zeolite, Chemistryselect (Impact factor 2.3, Q3), 10 (1), 1-10, 2025. <https://doi.org/10.1002/slct.202304822>
9. Sahana Raju, Kothanahally S. Sharath Kumar, Yarabhally R Girish, Turuvekere Krishnamurthy Chaitra, Mohd Sajid Ali, Hamad A. Al-Lohedan, Room-temperature aerobic oxidation of alcohols into carbonyl compounds using VO@GO catalyst, Synthetic Communications (Impact factor 2, Q3), 55(6), 465-475, 2025. <https://doi.org/10.1080/00397911.2025.2461114>
10. Amogh R. Kulkarni, Mahesha Kumaraswamy, Turuvekere K. Chaitra, Doddahosur M. Gurudatt, Kanchugarakoppal S. Rangappa, Toreshettahally R. Swaroop, Basappa Basappa, Sodium hydride induced condensation of methyl ketones with S-methyl O-phenyl carbonodithioate: a regiospecific synthesis of β-oxodithioesters, Synthetic Communications (Impact factor 2, Q3), 55(19), 1464–1470, 2025. <https://doi.org/10.1080/00397911.2025.2564411>
11. M. Girish, K.R. Pooja, D.M. Gurudatt, T.K. Chaitra, H.M. Suresh Kumar, J. Manjanna, N. Srikantamurthy, M.S. Vijay Kumar, K.B. Naveen, R. Harini, G. Nagaraju, Co2SnO4 nanostructures as bi-functional materials for environmental monitoring and electrochemical sensing, Optical Materials (Impact factor 4.3, Q2), 174, 2026. <https://doi.org/10.1016/j.optmat.2026.117990>
12. S. D. Nayak, Akash, D. S. Apeksha, H. R. Chethana, D. Nagaraju, S. L. Goankar, T. K. Chaitra, D. M. Gurudatt, B. Basappa, T. R. Swaroop, Knoevenagel Condensation of Active Methylene Compounds with Aldehydes in Choline Chloride–Urea Ionic Liquid, Russian Journal of Organic Chemistry (Impact factor 0.8, Q4), 62:73, 2026. <https://doi.org/10.1134/S1070428025603917>
13. S Varun, Venkatesh Gowda G R, Gagana G R, D M Gurudatt, T. K Chaitra, Poornima H Hiremat, K. B Naveen, N Srikantamurthy, R Harini, G Nagaraju, Sustainable Sunflower Extract Derived NiV2O6 Nanoparticles For Environmental Remediation And Forensic Application, Journal of Cluster Science (Impact factor 4.1, Q1 for JCR and Q2 for SJR), 37(78), 2026. DOI: 10.1007/s10876-026-03031
14. Darshan, M., Pooja, K. R., Gurudatt, D. M., Chaitra, T. K., Suresh Kumar, H. M., Manjanna, J., Srikantamurthy, N., Naveen, K. B., Mallikarjunaswamy, C., Ranganath, L., Nagaraju, G., Influence of copper dopant concentration on the photoluminescence properties and photocatalytic activity of nanostructured ZnMn2O4, Ceramics International (Impact factor 6.1, Q1), 52(14), 2026, Pages 23967-23979. DOI: 10.1016/j.ceramint.2026.03.437

## Membership in Professional Bodies

- Life member of Indian Science Congress Association

## Honours/Awards/Achievements

1. Reviewed paper in Asian Journal of Research in Biochemistry and recognized by WOS.
2. Recognised as Research Guide from VTU since 2025.
3. Secured Second prize in University level lecture competition conducted by Karnataka Rajya Vignana Parishath on 14/02/2009 at Tumakuru.
4. Secured First prize in University level science lecture competition conducted by Kalpataru Science College, Tiptur on 07/03/2009.
5. Received meritorious (RFSMS) fellowship from UGC for research work from 04/08/2015.
6. Secured highest marks in Chemistry and obtained highest number of prizes for extra-curricular activities in college during graduation at Kalpataru Science College, Tiptur.

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. Completed NPTEL course "Roadmap for patent creation" in January 2026 semester with Elite Silver Grade.
2. Completed course on "Patent law for Engineers and Scientists" in January 2026 semester.
3. Completed a 12-week NPTEL course on "Analytical Chemistry", June 2025 semester — Elite Grade.
4. Completed a 12-week NPTEL course on "Public Speaking", June 2025 semester — Elite Grade.
5. Completed 16 weeks course in Swayam on "Chemistry of Nanomaterials" and obtained 78% in January 2025 semester.
6. Completed 12 weeks course conducted by NPTEL (FDP) on the topic "Symmetry and Group Theory" and obtained Elite Grade in January 2021 semester.
7. Attended FDP on "Innovations in Bio and Chemical Technologies for Sustainable Energy and Environment (IBCTSEE-2025)" at Dayanand Sagar College of Engineering, Bengaluru between 21/7/2025 to 28/7/2025.
8. Attended International Faculty Development Program on Growing Globally Competitive Currency in Higher Education on 08/10/2025 and 11/02/2026 conducted by Mr. Manish Malhotra, Futred Innovation Studios, Australia at ATMECE Mysuru.
9. Organized and attended three day workshop on 'Patent drafting, filing and interpretation" from 12th to 14th June 2025 organized by ATMECE, Mysuru.
10. Organized and attended FDP on "Essentials of Science for Engineering and Research 2025" at ATMECE, Mysuru between 15/01/2025 and 17/01/2025.
11. Attended workshop on "Innovations in Chemistry and their applications" conducted by DOS in Organic Chemistry, University of Mysore in collaboration with Rashtriya Uchchatar Shiksha Abhiyan between 24/01/2025 to 30/01/2025.
12. Attended seminar on "Current Trends in Chemistry" in DOS in Chemistry, Manasagangotri, University of Mysore and Rashtriya Uchchatar Shiksha Abhiyan from 29/11/2024 to 30/11/2024.
13. Completed Faculty Development Programme on "Recent Trends in Advanced Materials and Applications" from 19/10/2020 to 23/10/2020 in National Institute of Engineering, Mysuru.
14. Completed Faculty Development Programme on "Recent Trends in Engineering Materials, Nano Science and Nano Technology" from 09/11/2020 to 13/11/2020 in Global Academy of Technology, Bengaluru.
15. Participated in NSS for three years and lead Karnataka team in National Integration Camp for Women organized by Duddupudi College, Sindhanur, Raichur in 2009.
16. Participated in Bio-diversity assessment, conservation and management camp held by Maithreya Institute for Environment and Rural Science and Hasiru Hejje, Mysuru in Konehalli in June 2009.
17. Attended national conference on "Recent trends in Chemical Research" in SJCE, Mysuru on 3rd and 4th of January 2014.
18. Attended UGC sponsored two days national conference on "Recent trends in Chemical Biology: An overview" on 25th and 26th of October 2013 at Teresian college.
19. Attended "Science and Technology for education and health care", a conference conducted by KSTA and JSS college, Ooty Road, Mysuru on 21/02/2014 and 22/01/2014.
20. Participated in technical workshop on Exploring SciFinder on 04/01/2014 at UOM, Mysuru.
21. Participated in National conference on Innovations in Chemical Sciences 2020 on 30th & 31st Jan 2020 held at DoS in Chemistry, University of Mysore.

**Oral Presentation**

1. Presented a paper entitled "Electrochemical, thermodynamic and quantum chemical evaluation of some Schiff bases as mild steel corrosion inhibitors in hydrochloric acid media" on 30-01-2014 in National Conference on Pure and Applied Chemistry in DOS in Chemistry, Manasagangothri, University of Mysore, Mysuru.
2. Presented a paper entitled "Corrosion inhibition study of some Pyridine Derivatives on Mild Steel: Theoretical and Experimental Approach" in "Current trends in Chemical biology" a conference conducted by JSS college of arts, commerce and science on 2nd and 3rd March 2015.

**Poster Presentation**

1. Presented a paper (poster) entitled "Anticorrosion potential of some drug based inhibitors for mild steel in hydrochloric acid media" in Indian Science Congress conference between 03/01/2016 and 07/01/2016 at UOM, Mysuru.
2. Presented a paper (poster) entitled "Adsorption, electrochemical, quantum chemical and morphological studies of newly synthesised hydrazones as mild steel corrosion inhibitors" in International Conference on Science And Technology: Future Challenges and Solutions (STFCS-2016) on 08/08/2017 and 09/08/2017 in UOM, Mysuru.

## Proposal/Funding/Project Financial Assistance

- Nil

## Patent

- NIL

## Roles and Responsibilities: Institute Level

1. Served as the Coordinator for NAAC Criterion 3, representing the Basic Sciences and Humanities Department at ATMECE.
2. Served as the Coordinator for the Intellectual Property Rights (IPR) Cell representing the Basic Sciences and Humanities Department, ATME College of Engineering (ATMECE).
3. Served as the Coordinator for ATMEYA-2025, ATMEYA-2026, and Kannada Rajyotsava 2025 events, representing the Basic Sciences and Humanities Department.
4. Member of the Universal Human Values (UHV) Cell, ATME College of Engineering (ATMECE).
5. Member of the Scholarship Committee, ATME College of Engineering (ATMECE).
6. Actively involved in research publication activities.

## Roles and Responsibilities: Department Level

- Chemistry Laboratory In-Charge, ATME College of Engineering (ATMECE), Mysuru (August 2024 – Present).
- Evaluator for VTU UG exams.
- External examiner in practical exams for M.Sc. (Chemistry) students.
- Question paper setting for semester exams for MSc (Chemistry) students at Pooja Bhagavat Memorial Mahajana PG Centre.`,
  },
  "dr-halligudra-guddappa": {
    name: "Dr. Halligudra Guddappa",
    url: "https://old.atme.edu.in/dr-halligudra-guddappa/",
    md: `## Professional Experience

- Teaching: 3 Years
- Research: 9 Years
- Industry: 1 Year

## Contact Details

- **Email ID:** Official: [Dr.guddappahalligudra_ch@atme.edu.in](mailto:Dr.guddappahalligudra_ch@atme.edu.in) | Personal: [hguddappa.m@gmail.com](mailto:hguddappa.m@gmail.com)
- **Vidwan ID:** <https://atme.irins.org/profile/412104>
- **Google Scholar ID:** <https://scholar.google.com/citations?user=Nhg5YBgAAAAJ&hl=en>
- **Scopus ID:** <https://www.scopus.com/authid/detail.uri?authorId=58927587300>
- **Orcid ID:** <https://orcid.org/my-orcid?orcid=0000-0003-2054-5465>
- **Web of Science Researcher ID:** <https://www.webofscience.com/wos/author/record/AAB-9471-2022>
- **LinkedIn ID:** <https://www.linkedin.com/in/dr-guddappa-halligudra-940779130/>

## Academic Details

- **Qualification**
- **Ph.D.** in Chemistry
- **K-SET.** in Chemistry
- **M.Sc.** in Analytical Chemistry

## Areas of Interest

1. Nanomaterials, Heterogeneous Catalysts
2. Magnetic Materials
3. Catalysis, Photocatalysis, Electrocatalysis

## Publication Details

**2026**

1. Guddappa et al. (1st & Corresponding author), Catalytic Reduction of Organic Pollutants and Anticancerous Activity of Eco-Friendly Synthesized ZnO Nanoparticles Using Dill Seed Extract, Topics in Catalysis, Nov 17, 2026, Springer Nature. IF 3/Q2. DOI: 10.1007/s11244-025-02236-3
2. Guddappa et al. (3rd author), Insight into high-entropy oxides as anodes, cathodes, and solid-state electrolytes for advancing Li-ion batteries: A comprehensive review, Journal of Energy Storage, 2026, Elsevier. IF 9.8/Q1. DOI: 10.1016/j.est.2026.120888
3. Guddappa et al. (3rd author), Sustainable energy storage using polyaniline‐coated red bricks as supercapacitor electrodes, The Canadian Journal of Chemical Engineering, 2026, John Wiley & Sons. IF 2.2/Q2. DOI: 10.1002/cjce.70502
4. Guddappa et al. (2nd author), Implementation of the soil health monitoring system to achieve better yield, International Journal of Applied Power Engineering, 2026, IPMU & IEAS. Q2. DOI: 10.11591/ijape.v15.i1.pp308-318

**2025**

5. Guddappa et al. (1st & Corresponding author), Catalytic behaviour of iron-based nanomaterials for the remediation of hazardous chemicals from wastewater: A Review, Journal of Physics and Chemistry of Solids, March 26, 2025, Elsevier. IF 4.3/Q1. DOI: 10.1016/j.jpcs.2025.112735
6. Guddappa et al. (Co-author), Experimental and DFT studies on efficient microwave-exfoliated MXene‒polymer nanocomposites for high-performance supercapacitors, Journal of Materials Science: Materials in Electronics, 2025, Springer Nature. IF 2.8/Q2. DOI: 10.1007/s10854-025-15622-0
7. Guddappa et al. (Co-author), Investigation and Characterization of Nanoparticles from Temple Bell Composites for Regulating Microorganisms in Temple Environments, Journal of The Institution of Engineers (India): Series D, 2025, Springer Nature. Q2/0.735. DOI: 10.1007/s40033-025-00932-8
8. Guddappa et al. (Co-author), WELPSA: A Green Catalyst Mediated Microwave Assisted Efficient Synthesis of Novel 5‐Aminopyrazole‐4‐Carbonitrile Derivatives as Anticancer Agents (MCF‐7, A‐549) and In Silico Studies, Archiv der Pharmazie – Chemistry in Life Sciences, April 2025, 358, no. 4 (2025): e202500055, John Wiley & Sons. IF 4.3/Q2. DOI: 10.1002/ardp.202500055
9. Guddappa et al. (Co-author), Tribioelectrochemical Corrosion Behavior of the CNT‒Aluminum 7039 Composite, Journal of The Electrochemical Society, 2025, IOP. IF 3.1/Q1. DOI: 10.1149/1945-7111/adca08
10. Guddappa et al. (Co-author), Triphenylamine-Based Dual Chemosensor for Cu2+ and Co2+ Ions and Volatile Acid Vapour Sensor, DFT Calculations, Applied Organometallic Chemistry, March 2025, John Wiley & Sons. IF 3.7/Q2. DOI: 10.1002/aoc.70105
11. Guddappa et al. (Co-author), Selective Al3+ and Fe3+ detection using imidazole–oxadiazole sensors: bioimaging evidence from zebrafish, New Journal of Chemistry, 13 Mar 2025, Royal Society of Chemistry. IF 2.7/Q2. DOI: 10.1039/D5NJ00412H
12. Guddappa et al. (Co-author), Imidazole‐Centred Oxadiazole Sensor for Detecting Al3+ and Fe3+ Cations in Living Cells: A Zebrafish Bioimaging Approach, Applied Organometallic Chemistry, April 2025, John Wiley & Sons. IF 3.7/Q2. DOI: 10.1002/aoc.70087
13. Guddappa et al. (Co-author), Imidazole-Thiazole Based Dual Chemosensor for Cu2+ and Co2+ Ions with Identical Excitation Wavelength and Colorimetric TFA Sensing, Theoretical Validation, Journal of Molecular Structure, Volume 1324, 5 March 2025, 140816, Elsevier. IF 4/Q2. DOI: 10.1016/j.molstruc.2024.140816
14. Guddappa et al. (Co-author), Microwave expedited Cu(I) catalyzed regioselective 1,2,3-triazoles as Mycobacterium Tuberculosis H37Rv inhibitors, in vitro α-amylase and α-glucosidase inhibition, in silico studies, Journal of Molecular Structure, Volume 1322, Part 3, 15 February 2025, 140486, Elsevier. IF 4/Q2. DOI: 10.1016/j.molstruc.2024.140486

**2024**

15. Guddappa et al. (First author), Antibacterial and Antiproliferative Effect of ZnO Nanoparticles Prepared Using Origanum marjorana Plant and Garcinia indica Fruit extracts, Journal of Inorganic and Organometallic Polymers and Materials, 23 Aug 2024, 1-11, Springer Nature. IF 3.9/Q2. DOI: 10.1007/s10904-024-03349-0
16. Guddappa et al. (Co-author), Imidazole-centred cupric ions sensor: Experimental validation, theoretical understanding, and zebrafish bioimaging, Journal of Photochemistry and Photobiology A: Chemistry, Volume 452, 1 July 2024, 115565, Elsevier. IF 4.1/Q2. DOI: 10.1016/j.jphotochem.2024.115565
17. Guddappa et al. (First author), Enhanced Catalytic Reduction and Electrochemical Sensing Properties of Magnetic Fe3O4@benzothiazole-Cu(II) Nanoparticles, Journal of Inorganic and Organometallic Polymers and Materials, 06 May 2024, 34, 4349–4363, Springer Nature. IF 3.9/Q2. DOI: 10.1007/s10904-024-03091-7
18. Guddappa et al. (Co-author), Electrochemical investigation of Fe3O4/TNT/PANI composites for enhanced supercapacitor applications, Journal of Materials Science: Materials in Electronics, 18 March 2024, 35, 595, Springer. IF 2.8/Q2. DOI: 10.1007/s10854-024-12369-y
19. Guddappa et al. (Co-author), Photocatalytic and Oxygen Evolution Reaction (OER) of Novel Supercritical Fluid Synthesized Nanobiocomposite MoS2/Silk G, Asian Journal of Chemistry, 31 Jan 2024, 36, 2, 425-433, Asian Publication Corporation. Q4. DOI: 10.14233/ajchem.2024.30910

**2022**

20. Guddappa et al. (First author), Fe3O4 nanoparticles supported MoS2 nanoflowers as a magnetically recoverable heterogeneous catalyst for the reduction of organic dyes and as an electrochemical sensor for the detection of pharmaceutical samples, Ceramics International, 2022, Elsevier. IF 5.6/Q1. DOI: 10.1016/j.ceramint.2022.06.188
21. Guddappa et al. (First author), Cu(II) immobilized on guanidine functionalized Fe3O4 magnetic substrate as a heterogeneous catalyst for selective reduction of nitroarenes, Journal of Iranian Chemical Society, 2022, Springer Nature. IF 2.3/Q3. DOI: 10.1007/s13738-022-02564-1
22. Guddappa et al. (Co-author), Copper zinc tin sulfide and multi-walled carbon nanotubes nanocomposite for visible-light-driven photocatalytic applications, Materials Research Bulletin, 2022, Elsevier. IF 5.7/Q1. DOI: 10.1016/j.materresbull.2021.111606
23. Guddappa et al. (Co-author), Study on the DC supply and charging effect on the growth of carbon nanotubes and their electrochemical, Journal of Materials Science: Materials in Electronics, 2022, Springer Nature. IF 2.8/Q2. DOI: 10.1007/s10854-022-08813-6
24. Guddappa et al. (Co-author), Synthesis of Caffeic Acid Derivatives: Identification of (E)-N-(4-Cyanobenzyl)-3-(3,4-dihydroxyphenyl) acrylamide as an Anticancer Agent against Human Cervical Cancer Cells, Asian Journal of Chemistry, 2022, Asian Publication Corporation. Q4. DOI: 10.14233/ajchem.2022.23726
25. Guddappa et al. (First author), PdII on Guanidine-Functionalized Fe3O4 Nanoparticles as an Efficient Heterogeneous Catalyst for Suzuki–Miyaura Cross-Coupling and Reduction of Nitroarenes in Aqueous Media, ACS Omega, 2022, American Chemical Society. IF 4.9/Q1. DOI: 10.1021/acsomega.1c04528

**2021**

26. Guddappa et al. (Co-author), Silver nanoparticles anchored TiO2 nanotubes prepared using saponin extract as heterogeneous and recyclable catalysts for reduction of dyes, Ceramics International, 2021, Elsevier. IF 5.6/Q1. DOI: 10.1016/j.ceramint.2020.11.173
27. Guddappa et al. (Co-author), Silver nanoparticles synthesized using saponin extract of Simarouba glauca oil seed meal as effective, recoverable and reusable catalyst for reduction of organic dyes, Results in Surfaces and Interfaces, 2021, Elsevier. IF 4.4/Q1. DOI: 10.1016/j.rsurfi.2021.100005
28. Guddappa et al. (Co-author), Isolation, characterization and structural elucidation of the leaves of Amischophacelus axillaris and Canthium dicoccum, Materials Today: Proceedings, 2021, Elsevier. Q4. DOI: 10.1016/j.matpr.2021.09.067

## Book Chapters

1. Guddappa et al. (Co-author), Magnetic photocatalytic systems, In: Photocatalytic Systems by Design, 2021, Elsevier. DOI: 10.1016/B978-0-12-820532-7.00016-3
2. Guddappa et al. (1st author), Magnetic Substrate supported Heterogeneous catalysts for coupling, cyclization, and nitroarenes reduction reactions, In: Current Trends in Materials Chemistry, 2021, United Publisher. ISBN: 978-93-85682-66-7

## Edited Books

1. Water Chemistry, 2024, Infinite Research. ISBN: 978-81-969436-9-1
2. Technical and Analytical Chemistry, 2023, Infinite Research. ISBN: 978-81-967685-1-5
3. Industrial Chemicals and Environment, 2023, Infinite Research. ISBN: 978-81-967685-4-6

## Membership in Professional Bodies

- Life Member, IAENG, Hong Kong (2023)
- Life Member, National Council Teacher Scientist, India (2022)
- Life Member, Indian Science Congress Association (ISCA), Kolkata, India (2016)

## Honours/Awards/Achievements

- Best Flash Talk Presentation Award, IVaccT-2021 held at PDA College of Engineering, Kalaburagi, Karnataka, India (2021)
- Visiting Scholar, visited from VTU, Muddenahalli to Aryabhata Knowledge University, Patna, Bihar, India (2019)
- Master Trainer, Four Days Hands-on Training and Workshop on "Nanomaterials Synthesis, Characterization and Device Fabrications" held at Dept. of Nanotechnology, VTU Muddenahalli in association with Reva University, Bengaluru, India (2019)
- Best Poster Presentation Award, NESARA-2019 held at Dept. of Nanotechnology, VTU Muddenahalli, Karnataka, India (2019)
- Best Poster Presentation Award, MESSAGE-2019 held at Dept. of Nanotechnology, VTU Muddenahalli, Karnataka, India (2019)
- DST INSPIRE Award, Dept. of Science & Technology, Ministry of Science & Technology, GOI, India (2017)
- Gold Medal Award for Securing First Rank in M.Sc. Analytical Chemistry, Davanagere University, Davanagere, Karnataka, India (2014)

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. Advanced Materials Processing and Characterization Techniques, organized by AICTE-ATAL, SJC Institute of Technology, Chikkaballapura, Karnataka, 16-12-2024 to 21-12-2024
2. Indian Knowledge System (Bharatiya Gyan Parampara), organized by BHU & Vidya Bharti Uccha Shiksha Sansthan, Suttur, Mysuru, Karnataka, 29-12-2023 to 03-01-2024 (6 days)
3. Recent Advances in Energy Harvesting and Sustainable Developments, organized by AICTE-ATAL, The National Institute of Engineering, Mysuru, Karnataka, 06-01-2025 to 11-01-2025
4. Green Technology towards Sustainable Future, organized by AICTE-ATAL, Laxminarayan Innovation Technological University, Nagpur, Maharashtra, 03/02/2025 to 08/02/2025
5. One day international FDP on Growing globally competitive currency in Higher education, delivered by Futred Innovation Studios, Australia, at ATME College of Engineering, Mysuru, Karnataka, 08-10-2025
6. Transforming Technical Education & Research through Generative AI, organized by AICTE-ATAL, Malnad College of Engineering, Hassan, Karnataka, 10/11/2025 to 15/11/2025

## Proposal/Funding/Project Financial Assistance

1. Study on the influence of temple bells nanoparticles present in temple environment for the inhibition of microbial growth — ATME Seed Money, Funding amount: Rs. 35,000/-, Date of Submission: 05-09-2024. Status: On-going
2. Development of an environmentally-friendly, affordable E. coli detection vials for the water treatment technologies — ATME Seed Money, Funding amount: Rs. 10,000/-, Date of Submission: 05-09-2024. Status: On-going
3. Nanostructured Metal/Metal Oxide Based Catalysts for organic reactions — Recipient of INSPIRE Fellowship award, Ministry of Science & Technology, Department of Science & Technology, Government of India. Funding amount: Rs. 23,00,000/-. Status: Completed (2017-2022)

## Patent

- Nanocoated Solar Water Heater System and Method for Enhancing Heat Transfer Efficiency. Published/Granted: Published. Patent No.: 202341058289

## Roles and Responsibilities: Institute Level

- Conducting research activities
- Research publication work
- Project proposal writing
- Patent filing and publication work
- Mentoring students in research activities and publication
- Handling and maintaining Electrochemical Workstation
- Conducting technical events

## Roles and Responsibilities: Department Level

- Mentoring UG Students: Guiding students on research, writing, and publications.
- Develop Scholarly Works: Write papers, file patents, and prepare proposals.`,
  },
  "anusha-h-s": {
    name: "Mrs. Anusha H S",
    url: "https://old.atme.edu.in/anusha-hs/",
    md: `## Professional Experience

- Teaching: 2 Years
- Research: Nil
- Industry: Nil

## Contact Details

- **Email ID:** Official: [hsanusha@outlook.com](mailto:hsanusha@outlook.com) | Personal: [hsanusha897@gmail.com](mailto:hsanusha897@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/449953>
- **Google Scholar ID:** <https://scholar.google.co.in/citations?hl=en&user=fOWwCdsAAAAJ>
- **Orcid ID:** <https://orcid.org/0009-0007-0313-285X>
- **LinkedIn ID:** <http://www.linkedin.com/in/anusha-h-s-650b5525a>

## Academic Details

- **Qualification**
- **M.Sc.** in General Chemistry
- **B.Sc.** in Chemistry, Botany, Zoology

## Areas of Interest

- Organic Chemistry, Analytical Chemistry

## Publication Details

1. Synthesis and characterization of Ag2O and MnO doped Ag2O nanocomposites for Antibacterial Activity Against E.coli

## Membership in Professional Bodies

- NIL

## Honours/Awards/Achievements

1. Mentored through the semester of "Organic Synthesis and Spectroscopy" by Dr. Prabhu, a professor at the Indian Institute of Science in Bangalore.
2. Competed in a Seminar Competition at the "JSS Scientia T20 Orate Competition" regarding the discovery of "Natural Medicinal Products."

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. CRTC 2023 in ATME College of Engineering.
2. FDP on the theme of UHV at ATME College of Engineering.

## Proposal/Funding/Project Financial Assistance

- NIL

## Patent

- NIL

## Roles and Responsibilities: Institute Level

- NIL

## Roles and Responsibilities: Department Level

- NIL`,
  },
  "mahendra-kumar-h-s": {
    name: "Mr. Mahendra Kumar H S",
    url: "https://old.atme.edu.in/mr-mahendra-kumar-h-s/",
    md: `## Professional Experience

- Teaching: 8 Years
- Research: 5 Years
- Industry: 1 Year

## Contact Details

- **Email ID:** Official: [mahendrakumarhs.ch@atme.edu.in](mailto:mahendrakumarhs.ch@atme.edu.in) | Personal: [mahendrakumarhs5@gmail.com](mailto:mahendrakumarhs5@gmail.com)
- **Vidwan ID:** 536708
- **Google Scholar ID:** <https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=mahendra+kumar+h+s&oq=>
- **Scopus ID:** —
- **Orcid ID:** 0009-0004-0196-8280
- **Web of Science Researcher ID:** KRO-3691-2024
- **LinkedIn ID:** <http://www.linkedin.com/in/mahendra-kumar-h-s-16511029b>

## Academic Details

- **Qualification**
- **Ph.D.** (Pursuing) in Chemistry
- **KSET** – Chemical Science
- **B.Ed.**
- **M.Sc.** in General Chemistry
- **B.Sc.** in Chemistry, Sericulture, Biotechnology

## Areas of Interest

1. Coordination Compounds
2. Inorganic Chemistry
3. Organic Chemistry
4. Computational Chemistry

## Publication Details

**Research Articles**

1. M. Sonu, V. L. Yashashwini, R. Kavya, H. S. Mahendra Kumar, M. A. Sangamesha, B. S. Madhukar, Puttaswamy Madhusudan, N. S. Prema, and H. N. Girish, Synthesis and characterization of polyvinyl alcohol‑based ZnGa2O4 nanocomposites: structural, optical, and dielectric properties, Journal of Materials Science, January 2026.
2. Published paper on "Recent Developments of Coumarin Products as Potential Anticancer Agents", Journal of Chemistry and Applicable Chemistry, Volume No: 11 Issue No: 4, June 2022. <https://www.joac.info/Joac/JournalPapers?Year=2022&VolumeNo=11&PartNo=4>

## Membership in Professional Bodies

- Life Member of the IAENG Society of Chemical Engineering

## Honours/Awards/Achievements

- NIL

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. Advancements in Materials and Technologies: Thermal, Mechanical and Cryogenic Applications, conducted at Coorg Institute of Technology, Ponnampet, Karnataka, from 29-12-2025 to 03-01-2026.
2. Participated in UGC sponsored one day workshop on "Analytical techniques" on 6th March 2018 organised by JSS College of Arts, Commerce and Science, B.N. Road, Mysore – 570025.
3. Participated in UGC sponsored one day state level workshop on "Capacity building for teachers" on 16th February 2019 organised by JSS College of Arts, Commerce and Science, B.N. Road, Mysore – 570025.
4. Participated in second national conference on "Advanced materials for health energy and environment" (AMHEE 2019) held on September 6th & 7th 2019 organised by Department of Chemistry, JSS Science and Technology University, Mysore-06.
5. Participated in UGC sponsored one day state level workshop on "Teacher's capacity building" organised by JSS College of Arts, Commerce and Science, B.N. Road, Mysore – 570025 on 13th February 2020.
6. Participated in UGC sponsored one day state level "Orientation and retraining programme for teachers" initiated by IQAC & organised by JSS College of Arts, Commerce and Science, B.N. Road, Mysore – 570025 on 14th January 2022.
7. Participated in the one-day state level "Orientation and retraining programme for teachers" sponsored by UGC & initiated by IQAC organised by JSS College of Arts, Commerce and Science, B.N. Road, Mysore – 570025 on 28th February 2022.
8. Participated in the "Reorientation of faculty programme" under UGC autonomy grants conducted on 17th March 2023, at Pooja Bhagavath Memorial Mahajana Education Centre, Mysore.
9. Completed one-week teachers training programme jointly organised by SBRR Mahajana First Grade College, Jayalakshmipuram, Mysore & Guru Angad Dev Teaching Learning Centre, SGTB Khalsa College, University of Delhi under Pandit Madan Mohan Malaviya National Mission on Teachers and Teaching (PMMMNMTT) of Ministry of Education. Included hands-on activities, submission of quizzes, assignments & project and obtained 'Grade – A' as required for promotion under CAS of UGC & AICTE.
10. Participated in the three-day workshop/FDP on "Essentials of Sciences for Engineering and Research-2025" organised by Department of Basic Sciences and Humanities, ATME in collaboration with JSS College of Arts, Commerce and Science (Autonomous) and ISTE from 15th to 17th January 2025, held at ATME College of Engineering, Mysuru.
11. Participated in a one-day FDP organised by Vidyavardhaka College of Engineering, Mysuru, with Visvesvaraya Technological University, Belagavi, on "Revised Syllabus of Applied Sciences" on 30/08/2025.
12. Participated in a one-week ATAL FDP organised by Coorg Institute of Technology, Ponnampet, on "Advancements in Materials and Technologies: Thermal, Mechanical and Cryogenic Applications" from 29/12/2025 to 03/01/2026.

**Oral Presentation**

1. Presented a paper on "Design and synthesis of potent coumarin moieties and its anti-bacterial study" at International Conference on Advanced Material for Health, Energy and Environment on 28th Feb to 02nd March 2023, organized by Department of Chemistry, JSS Science and Technology University, Mysore-06.

**Poster Presentations**

1. Nithin K. S, Mahendra Kumar H S, Sunil Kumar, Vinutha and Dr. Siddaramaiah, Synthesis and optical properties of Caesium doped silver oxide nanoparticles: Effect of annealing temperature, KSTA Regional Conference on Science and Technology for Education and Health Care held on 21 & 22nd February 2014, organized by JSS College of Arts, Commerce and Science, B.N. Road, Mysore – 570025.
2. Presented the e-poster entitled "Design and synthesis, characterization of piperazine Schiff base analogue" in the Two-Day International e-Conference on Drug Discovery and Material Science organized by the IQAC and Dept. of Chemistry (UG & PG), JSS College of Arts, Commerce and Science on 15th & 16th Sep 2021.

**MOOC**

1. Completed 12 weeks of the NPTEL course on "Advanced Transition Metal Chemistry" from 21/07/2025 to 10/10/2025.
2. Completed 12 weeks of the NPTEL course on "Co-Ordination Chemistry (Chemistry of Transition Elements)" from 19/01/2026 to 10/04/2026.
3. Completed 12 weeks of the NPTEL course on "Chemistry of Main Group Elements" from 19/01/2026 to 10/04/2026.

**NITTR**

1. Completed Module-1: Orientation towards Technical Education & Curriculum Aspects of National Initiative for Technical Teachers Training, from 06/10/2025 to 30/11/2025.

## Proposal/Funding/Project Financial Assistance

- NIL

## Patent

- NIL

## Roles and Responsibilities: Institute Level

- A-IMS Coordinator
- Evaluator for VTU UG exams
- External examiner in practical exams at various institutions

## Roles and Responsibilities: Department Level

- Course Coordinator – Chemistry
- Mentor
- Class Teacher`,
  },
  "thejas-gowda-b": {
    name: "Mr. Thejas Gowda B",
    url: "https://old.atme.edu.in/thejas-gowda-b/",
    md: `## Professional Experience

- Teaching: 1 Year 5 Months
- Research: Nil
- Industry: Nil

## Contact Details

- **Email ID:** Official: [thejasgowdab.ch@atme.edu.in](mailto:thejasgowdab.ch@atme.edu.in) | Personal: [thejasb07@gmail.com](mailto:thejasb07@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/599149>
- **Google Scholar ID:** <https://scholar.google.com/citations?hl=en&user=Lkub20MAAAAJ>
- **Scopus ID:** —
- **Orcid ID:** 0009-0004-9353-6732
- **Web of Science Researcher ID:** MHP-7419-2025
- **LinkedIn ID:** <https://www.linkedin.com/in/thejas-gowda-b-030b72324?trk=contact-info>

## Academic Details

- **Qualification**
- **KSET** – Chemistry
- **M.Sc.** in General Chemistry
- **B.Sc.** in Chemistry, Botany and Zoology

## Areas of Interest

- Synthetic Organic Chemistry

## Publication Details

- NIL

## Membership in Professional Bodies

- NIL

## Honours/Awards/Achievements

- NIL

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. Participated in a one-week ATAL FDP organised by Coorg Institute of Technology, Ponnampet, on "Advancements in Materials and Technologies: Thermal, Mechanical and Cryogenic Applications" from 29/12/2025 to 03/01/2026.
2. Participated in a one-day FDP organised by Vidyavardhaka College of Engineering, Mysuru, with Visvesvaraya Technological University, Belagavi, on "Revised Syllabus of Applied Sciences" on 30/08/2025.
3. Participated in a three-day FDP organised by ATME Engineering College on "Essential Sciences for Engineering and Research" from 15th January 2025 to 17th January 2025.
4. Participated in a three-day FDP organised by ATME Engineering College on "Indian Knowledge System" from 5th – 7th March 2025.

**Workshops**

1. Attended a day state-level workshop on "Basic experiments in phytotherapy" on 3rd Aug 2022, organized by the Dept. of Botany and the Dept. of Biochemistry, Sarada Vilas College in association with Cite Worthy Lifesciences, Mysuru.
2. Attended a two-day lecture workshop on "Recent advances in life sciences" on 1st and 2nd of Dec 2022, organised by Sarada Vilas College, Mysuru, and sponsored by the Indian Academy of Sciences, Bengaluru, the Indian National Science Academy, New Delhi, and the National Academy of Sciences, Allahabad.
3. Attended a one-day national workshop on "Recent trends in research methodology" organised by the PG Department of Chemistry, Sarada Vilas College, and IQAC on 29th Jan 2024.

**MOOC**

1. Completed 12 weeks of the NPTEL course on "Advanced Transition Metal Chemistry" from 21/07/2025 to 10/10/2025.

## Proposal/Funding/Project Financial Assistance

- NIL

## Patent

- NIL

## Roles and Responsibilities: Institute Level

- NIL

## Roles and Responsibilities: Department Level

- A-IMS Coordinator
- BBOC407 – Course Coordinator`,
  },
  "tejaswini-b-m": {
    name: "Mrs. Tejaswini B M",
    url: "https://old.atme.edu.in/tejaswini-b-m/",
    md: `## Professional Experience

- Teaching: 1.5 Years
- Research: Nil
- Industry: 9 Months

## Contact Details

- **Email ID:** Official: [tejaswinibm.ch@atme.edu.in](mailto:tejaswinibm.ch@atme.edu.in) | Personal: [tejaswini2000518@gmail.com](mailto:tejaswini2000518@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/612364>
- **Google Scholar ID:** <https://scholar.google.com/citations?hl=en&user=8efCgN0AAAAJ>
- **Scopus ID:** –
- **Orcid ID:** <https://orcid.org/0009-0001-0525-1373>
- **Web of Science Researcher ID:** –
- **LinkedIn ID:** <http://www.linkedin.com/in/tejaswini-b-m-588682292>

## Academic Details

- **Qualification**
- **M.Sc.** in General Chemistry
- **B.Sc.** in Physics, Chemistry, Mathematics

## Areas of Interest

- Physical Chemistry

## Publication Details

- NIL

## Membership in Professional Bodies

- NIL

## Honours/Awards/Achievements

- NIL

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. 3-Days FDP on Indian Knowledge System at ATME College of Engineering.
2. 7-Days FDP on "Innovations in Bio and Chemical Technologies for Sustainable Energy Resources" at Dayananda Sagar College of Engineering, Bangalore.
3. One-Day FDP on "Applied Chemistry" organized by VTU at Vidyavardhaka College of Engineering, Mysuru.
4. 5-Days FDP on "Research Methodology and Advanced Materials Technology" organized by Sai Vidya Institute of Technology.
5. One-Day International Faculty Development Program on Growing Globally Competitive Currency in Higher Education at ATME College of Engineering.
6. Completed a 12-week NPTEL course on "Analytical Chemistry", June 2025 semester.

## Proposal/Funding/Project Financial Assistance

- NIL

## Patent

- NIL

## Roles and Responsibilities: Institute Level

- Website Coordinator

## Roles and Responsibilities: Department Level

1. Course Coordinator (BBOK407)
2. Mentor`,
  },
  "dr-sudhakar-n": {
    name: "Mr. Sudhakar N",
    url: "https://old.atme.edu.in/mr-sudhakar-n/",
    md: `## Professional Experience

- Teaching: 24 Years
- Research: 2 Years
- Industry: Nil

## Contact Details

- **Email ID:** Official: [sudhakarn_maths@atme.edu.in](mailto:sudhakarn_maths@atme.edu.in) | Personal: [sudhakardixith@gmail.com](mailto:sudhakardixith@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/201863>
- **Google Scholar ID:** <https://scholar.google.com/citations?user=ZXyhp_UAAAAJ&hl=en>
- **Scopus ID:** –
- **Orcid ID:** <https://orcid.org/orcid-search/search?searchQuery=0000-0002-4006-8785>
- **Web of Science Researcher ID:** –
- **LinkedIn ID:** <https://linkdin.com.in/sudhakar-n-a093a5176>

## Academic Details

- **Qualification**
- **Pursuing Ph.D.** in Operation Research
- **M.Sc.** in Mathematics
- **B.Sc.** in Mathematics

## Areas of Interest

- Operation Research

## Publication Details

- NIL

## Membership in Professional Bodies

- Life member in ISTE

## Honours/Awards/Achievements

- NIL

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. Attended three days FDP on Essentials of Sciences for Engineering and Research -2025 in ATMECE from 15th Jan to 17th Jan 2025.
2. Attended five days FDP on Essentials of Sciences for Engineering and Research -2024 in ATMECE from 26th Feb 2024 to 1st March 2024.
3. Attended three days FDP on "Importance of NAAC Accreditation in Higher Education Institutions" organized by ATME College of Engineering, Mysuru from 9 to 11-11-2020.
4. Attended three-day webinar on "Current Trends in Applied Mathematics" from 21st to 23rd September 2020 by MIT, Mysore.
5. Attended three days National Level Online FDP on "AICTE Exam Reforms – An overview" by Department of Mechanical Engineering, ATMECE, Mysuru from 27th to 29th August 2020.
6. Attended five day FDP on "Mathematics Concepts by Using Free Open Source Software's (FOSS)" organized by BMSIT&M, Bengaluru from 21st to 25th July 2020.
7. Attended TEQIP 1.3 sponsored 5 days' program on "Outcome Based Education and NBA Accreditation" from 7th to 11th Jan 2020 at GSSS Institute of Engineering & Technology for Women, Mysuru.
8. Attended three day ADMA National pre-conference workshop on Recent Advances in Signed Graphs and their Applications sponsored by TEQIP from 6th to 8th June 2016.
9. Attended two day UGC sponsored National conference on "Energy of Graphs" organized by Department of Mathematics, Maharani's Science College for Women, Mysuru from 11th and 12th March 2016.

**MOOC Certification**

1. Online Course on "Student Assessment and Evaluation", NITTT 2025.
2. Online Course on "Technology Enabled Learning & Life-long Self-learning", NITTT 2025.
3. Online Course on "Orientation towards Technical Education & Curriculum Aspects", NITTT 2021.
4. Online Course on "Regression Analysis" online mode at NPTEL-AICTE from July-Oct 2019.
5. Online Course on "Calculus of Several Real Variables" online mode at NPTEL-AICTE from Aug-Oct 2019.
6. Online course on "The Joy of Computing using Python" during Jan-Apr 2024 by NPTEL-AICTE.
7. Online course on "Constrained and Unconstrained Optimization" during Jan-Apr 2023 by NPTEL-AICTE.

## Proposal/Funding/Project Financial Assistance

- NIL

## Patent

- NIL

## Roles and Responsibilities: Institute Level

1. Grievance Redressal Committee
2. SC-ST Committee
3. Library Committee

## Roles and Responsibilities: Department Level

1. In charge HOD of Mathematics
2. Mentor`,
  },
  "dr-madhusudhan-k-v": {
    name: "Dr. Madhusudhan K V",
    url: "https://old.atme.edu.in/dr-madhusudhan-k-v/",
    md: `## Professional Experience

- Teaching: 18.5 Years
- Research: 8 Years
- Industry: Nil

## Contact Details

- **Email ID:** Official: [dr.madhusudhankv_maths@atme.edu.in](mailto:dr.madhusudhankv_maths@atme.edu.in) | Personal: [kvmadhu13@gmail.com](mailto:kvmadhu13@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/202648>
- **Google Scholar ID:** <https://scholar.google.com/citations?user=eaklov8AAAAJ>
- **Scopus ID:** <https://www.scopus.com/authid/detail.uri?authorId=57211484548>
- **Orcid ID:** <https://orcid.org/my-orcid?orcid=0000-0001-7700-8172>
- **Web of Science Researcher ID:** –
- **LinkedIn ID:** <https://www.linkedin.com/in/madhu-kv-06091918/>

## Academic Details

- **Qualification**
- **Ph.D.** in Mathematics
- **M.Sc.** in Mathematics
- **B.Sc.** (PMCS)

## Areas of Interest

- Discrete Mathematics, Combinatorics, Graph Theory, Signed Graphs

## Publication Details

1. Note on Common Neighborhood and Near Common Neighborhood Signed Graphs, International Journal of Research and Analytical Reviews (IJRAR), 5(4) (2018), 569-573. (UGC Journal No: 43602) (P-ISSN: 2349-5138, E-ISSN: 2348-1269, India)
2. Wing Signed Graphs, International Journal of Computational Engineering Research (IJCER), 8(9) (2018), 39-41. (UGC Journal No: 47631) (ISSN: 2250-3005, India)
3. Distance Divisor Signed Graphs, IOSR Journal of Engineering (IOSRJEN), 8(10) (2018), 25-27. (UGC Journal No: 48995) (ISSN (E): 2250-3021, ISSN (P): 2278-8719, India)
4. Note on Distance Coprime Signed Graphs, Journal of Computer and Mathematical Sciences, 9(10) (2018), 1473-1476. (UGC Journal No: 44720) (ISSN (E): 2319-8133, ISSN (P): 0976-5727, India)
5. Note on Detour Radial Signed Graphs, International J. Math. Combin., 2 (2019), to appear. (ISSN: 1937-1055, China)
6. Set-Prime Graph of a Finite Group, Proceedings of the Jangjeon Math. Soc., 22(3) (2019), Scopus Indexed (UGC Journal No: 38600) (ISBN: 89-87809-15-3, ISSN:1598-7264, South Korea)
7. Inverse Product Connectivity Energy of a Graph, International Journal of Engineering, Applied and Management Sciences Paradigms, 54(1) (2019), 194-198. (UGC Journal No: 42582) (ISSN: 2320-6608, India)
8. Randic type Additive Connectivity Energy of a Graph, Vladikavkaz Mathematical Journal, 21(2) (2019), 18-26. Indexed in Scopus and Web of Science, (ISSN: 1683-3412, EISSN: 1814-0807, Russia)
9. Degree Equivalence Graph of a Graph, TWMS J. App. Eng. Math, 10(2) (2020), 411-414. Indexed in Scopus and Web of Science. (UGC Journal No: 48837) (ISSN: 2146-1147, e-ISSN: 2587-1013, Turkey)
10. Negation switching equivalence in signed graphs, International J. Math. Combin., 3 (2010), 85-90. (ISSN: 1937-1055, China)
11. On Block-Line Forest Signed Graphs, International Journal of Mathematical Combinatorics, 3 (2022), 82-86. (ISSN: 1937-1055, China)
12. On Line-Block Signed Graphs, International Journal of Mathematical Combinatorics, 1 (2023), 111-115. (ISSN: 1937-1055, China)
13. Gallai Signed Graphs and Anti-Gallai Signed Graphs, 14th International Conference on Advances in Computing, Control, and Telecommunication Technologies, ACT 2023, Pg. No: 1241–1245.
14. New Bounds on Eigen Values of Normalized Signed Graph, 14th International Conference on Advances in Computing, Control, and Telecommunication Technologies, ACT 2023, Pg. No: 986-990.

## Membership in Professional Bodies

1. Member in Academy of Discrete Mathematics & Applications (ADMA)
2. Member in Indian Society of Technical Education (ISTE)

## Honours/Awards/Achievements

- NIL

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. Online Course on "Orientation towards Technical Education & Curriculum Aspects", NITTT 2021.
2. One day National Conference on "Works of Srinivasa Ramanujan" on July 03, 2010, held in the Department of Studies in Mathematics, UOM, Mysuru.
3. National Seminar on "Recent Trends and Challenges in Applied Mathematics" on December 22, 2012, RNS Institute of Technology, Bangalore.
4. Three days Workshop on "MATLAB" on January 6-7-8, 2014, ATME College of Engineering, Mysore.
5. One day National workshop on "Interfacing Innovation and IPR for Diffusion of Technology" on January 19, 2015, organized by NRDC, New Delhi, Mysore.
6. National Seminar on "Current Trends in Mathematical Sciences and Applications" on February 20, 2015, National Institute of Engineering, Mysore.
7. One day National workshop on "Graph Theory and its Applications" sponsored by TEQIP-II on October 17, 2015, SIT Tumkur.
8. Two days National Conference on "Mathematics and its Applications" on December 22-23, 2015, AIT, Chikkamangaluru.
9. Two days National Conference on "Energy of Graphs" on March 11-12, 2016, Department of Studies in Mathematics, University of Mysuru, Mysore.
10. Three days National Pre-Conference workshop on "Recent Advances in Signed Graphs and their Applications" sponsored by TEQIP-II on October 6-8, 2016, SIT Tumkur.
11. International Conference on "Discrete Mathematics (ICDM-2016)" on June 9-10-11, 2016, SIT, Tumkur.
12. One Week Online Faculty Development Programme on "ML/DL for Data Science and Analytics using Python" organized by Department of Information Technology from 15-19 February 2023.
13. International Conference on Recent Trends in Science & Technology on 14th & 15th July 2022, ATMECE, Mysuru.
14. Two Weeks "Refresher Course in Mathematics (Theme: Python & Vedic Mathematics)" organized by Teaching Learning Centre & Department of Mathematics, Ramanujan College, University of Delhi under the sponsorship of Ministry of Education, Pandit Madan Mohan Malaviya National Mission on Teachers and Teaching during 13-26 July, 2023.

## Proposal/Funding/Project Financial Assistance

- NIL

## Patent

- NIL

## Roles and Responsibilities: Institute Level

1. Member of Magazine Committee
2. Member of NSS Committee
3. Member of Cultural Committee

## Roles and Responsibilities: Department Level

1. Exam EMS Coordinator
2. IA Coordinator
3. Mentor`,
  },
  "priyanka-n-b": {
    name: "Mrs. Priyanka N B",
    url: "https://old.atme.edu.in/mrs-priyanka-n-b/",
    md: `## Professional Experience

- Teaching: 19 Years
- Research: Nil
- Industry: Nil

## Contact Details

- **Email ID:** Official: [priyankanb_maths@atme.edu.in](mailto:priyankanb_maths@atme.edu.in) | Personal: [priyabraj02@gmail.com](mailto:priyabraj02@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/201872>
- **Google Scholar ID:** <https://scholar.google.co.in/citations?user=%20hzKmQfMAAAAJ>
- **Scopus ID:** 57740654300
- **Orcid ID:** <http://www.orcid.org/0000-0002-5305-4980>
- **Web of Science Researcher ID:** –
- **LinkedIn ID:** <https://www.linkedin.com/in/priyanka-n-b-b97a6181>

## Academic Details

- **Qualification**
- **Ph.D.** (Pursuing)
- **M.Sc.**
- **B.Sc.**

## Areas of Interest

- Bio Fluid Mechanics

## Publication Details

1. "Peristaltic Flow and Heat Transfer through a Prandtl Fluid in Vertical Annulus" in Recent Advances in Mechanical Engineering, Lecture Notes in Mechanical Engineering, Springer, Singapore. <https://doi.org/10.1007/978-981-19-1388-4_16>, 25th May 2022.
2. "Effect of Heat Transfer on Peristaltic Transport of Prandtl Fluid in an Inclined Porous Channel" in Mathematics and Computing, Springer Proceedings in Mathematics & Statistics 415, <https://doi.org/10.1007/978-981-19-9307-7_45>, 15 March 2023.
3. "Peristaltic transport of Jeffrey Fluid in a Doubly Connected Region" in Journal of Propulsion Technology – Q3 journal, ISSN: 1001-4055, Vol. 44 No. 5 (2023), 18th Dec 2023, Page No: 3435 – 3446.

## Membership in Professional Bodies

- ISTE

## Honours/Awards/Achievements

- NIL

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. Online Course on "Technology Enabled Learning & Life-Long Self Learning", NITTT 2025.
2. Online certification and FDP on Graph Theory from NPTEL, Jan-March 2026.
3. Attended one week FDP on "A Multidisciplinary Approach of Mathematics in Engineering" in MSRIT from 8th Sep 2025 to 12th Sep 2025.
4. Online certification on The Joy of Computing using Python from NPTEL, Jul-Oct 2025.
5. Online certification and FDP on Engineering Mathematics – I from NPTEL, Jul-Oct 2025.
6. Attended three days FDP on Essentials of Sciences for Engineering and Research -2025 in ATMECE from 15th Jan 2025 to 17th Jan 2025.
7. Online certification and FDP on Numerical Analysis from NPTEL, Jan-April 2024.
8. Attended five days FDP on Essentials of Sciences for Engineering and Research -2024 in ATMECE from 26th Feb 2024 to 1st March 2024.
9. Participated in 8th International Conference on Mathematics and Computing (ICMC-2022) from 6th to 8th January 2022, VIT, Vellore – Online.
10. Participated in Third International Conference on 'Emerging Research in Civil, Aeronautical & Mechanical Engineering' (ERCAM) from 16th and 17th December 2021, Nitte Meenakshi Institute of Technology, Bengaluru, India.
11. Online Course on "Orientation towards Technical Education & Curriculum Aspects", NITTT 2021.
12. Mathematical Concepts by Using Free Open Source Software, 21 to 25-07-2020 (5 days), BMSIT and Management – Online.
13. Attended three days FDP on "Importance of NAAC Accreditation in Higher Education Institutions" organised by ATME College of Engineering, Mysuru from 9 to 11-11-2020.
14. Three Day National Level Online Faculty Development Program on "AICTE Exam Reforms: An Overview" – ATMECE from 27.08.2020 to 29.08.2020.
15. Annual Refresher Programme in Pedagogical Innovations and Research Methodology (Interdisciplinary), online mode at NPTEL-AICTE from Dec-Feb 2019.
16. Attended 3 days and 7 days "Faculty Development for Student Induction" from 24-26 June 2019 and 23-29 July 2019 in Belagavi and Sri Venkateshwara College of Engineering, Bangalore respectively.
17. Attended 2 days National Conference on Geometric Function Theory and its Applications, in Honour of Dr. S. Latha, on 29-30 Jan 2018.

## Proposal/Funding/Project Financial Assistance

- NIL

## Patent

- NIL

## Roles and Responsibilities: Institute Level

1. Member Secretary of Women's Cell
2. Academic Council Member
3. Student Welfare Member
4. Student Competition Coordinator

## Roles and Responsibilities: Department Level

1. Mentor
2. Time Table Coordinator
3. Course Coordinator
4. Class Teacher`,
  },
  "divya-k": {
    name: "Mrs. Divya K",
    url: "https://old.atme.edu.in/mrs-divya-k/",
    md: `## Professional Experience

- Teaching: 18 Years
- Research: Nil
- Industry: Nil

## Contact Details

- **Email ID:** Official: [divyak_maths@atme.edu.in](mailto:divyak_maths@atme.edu.in) | Personal: [divya.k015@gmail.com](mailto:divya.k015@gmail.com)
- **Vidwan ID:** <http://vidwan.inflibnet.ac.in/profile/201864>
- **Google Scholar ID:** <https://scholar.google.com/citations?hl=en&user=M7IurrYAAAAJ>
- **Scopus ID:** –
- **Orcid ID:** <https://orcid.org/0000-0001-7735-0541>
- **Web of Science Researcher ID:** –
- **LinkedIn ID:** <https://www.linkedin.com/in/divya-k-659368264/>

## Academic Details

- **Qualification**
- **Ph.D.** (Pursuing)
- **M.Sc.**
- **M.Phil.**
- **B.Sc.** (PMCS)

## Areas of Interest

- Graph Theory

## Publication Details

- NIL

## Membership in Professional Bodies

- NIL

## Honours/Awards/Achievements

- NIL

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. Attended three days FDP on Essentials of Sciences for Engineering and Research -2025 in ATMECE from 15/01/2025 to 17/01/2025.
2. Attended five days FDP on Essentials of Sciences for Engineering and Research -2024 in ATMECE from 26/02/2024 to 01/03/2024.
3. Attended 3 days FDP on the theme "Inculcating UHV in Technical Education" by AICTE at ATME College of Engineering from 2nd to 4th of November 2023.
4. Attended 3 days Pre Conference Instructional Workshop on Spectral Graph Theory from 05/06/2023 to 07/06/2023 organised by Vidya Vardhaka College of Engineering.
5. Online Course on "Orientation towards Technical Education & Curriculum Aspects", NITTT 2021.
6. Attended 2 days National Conference on Geometric Function Theory and its Applications, in honour of Dr. S. Latha, on 29th and 30th Jan 2018.
7. Attended three days FDP on "Importance of NAAC Accreditation in Higher Education Institutions" organised by ATME College of Engineering, Mysuru from 9/11/2020 to 11/11/2020.
8. Attended National Conference on the works of Srinivasa Ramanujan conducted by University of Mysore on 03/07/2010.
9. Attended National Conference on the applications of Mathematics and Statistics conducted by Yuvaraja's College of Mysore on 25/03/2011 to 26/03/2011.
10. Mathematical Concepts by Using Free Open Source Software, 21 to 25-07-2020 (5 days), BMSIT and Management.

## Proposal/Funding/Project Financial Assistance

- NIL

## Patent

- NIL

## Roles and Responsibilities: Institute Level

- Hostel Committee

## Roles and Responsibilities: Department Level

1. Ms Teams Coordinator
2. Course Coordinator
3. Class Teacher
4. Mentor`,
  },
  "sarada-pratapa": {
    name: "Mrs. Sarada Pratapa",
    url: "https://old.atme.edu.in/mrs-sarada-pratapa/",
    md: `## Professional Experience

- Teaching: 16 Years
- Research: 6 Years
- Industry: Nil

## Contact Details

- **Email ID:** Official: [saradapratapa.maths@atme.edu.in](mailto:saradapratapa.maths@atme.edu.in) | Personal: [sarada.pratapa@gmail.com](mailto:sarada.pratapa@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/268133>
- **Google Scholar ID:** <https://scholar.google.co.in/citations?user=xtmiXkAAAAAJ>
- **Scopus ID:** Nil
- **Orcid ID:** <http://www.orcid.org/0000-0001-8921-2293>
- **Web of Science Researcher ID:** Nil
- **LinkedIn ID:** <https://www.linkedin.com/in/sarada-pratapa-03b765191/>

## Academic Details

- **Qualification**
- **Ph.D.** Pursuing
- **M.Sc.** in Applied Mathematics
- **B.Sc.**

## Areas of Interest

- Fluid Mechanics

## Publication Details

1. Paper titled "Variable Viscosity and Prandtl Number Effects on Natural Convection Water Boundary Layers about a Vertical Plate" has been published in International Journal of Scientific Engineering & Research, ISSN: 2277-9655, Volume 6, Issue 7, July 2018, pp 110-113.

## Membership in Professional Bodies

- NIL

## Honours/Awards/Achievements

- NIL

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. Essentials of Sciences for Engineering and Research 2025, from 15th Jan to 17th January 2025 at ATMECE, Mysuru.
2. Essentials of Sciences for Engineering and Research 2024, from 26th Feb to 1st March 2024 at ATMECE, Mysuru.
3. Participated in Mathematical Modeling and Numerical Technics in Engineering and Science, Oct 9th-13th 2018 at Dept. of Mathematics, NITW, India.
4. Participated in IEEE two day workshop on Research Methodology at NIEIT, Mysuru on 7-8th Sep 2018.
5. Participated in the Workshop on New Model Curriculum for First Year BE/B.Tech on 19th May 2018 at SCEM, Mangalore, conducted by VTU, Belagavi.
6. Participated in workshop on Information Literacy for Academic and Research Publication on 30th Jan 2018 at NIEIT, Mysuru.
7. Participated in One week Training Programme on Instructional Design and Delivery System on 1st-6th Jan 2018 at NIEIT, Mysuru.
8. Participated in one day workshop on Awareness Programme on Intellectual Property Rights for Research and Academicians on 2nd March 2017 at NIEIT, Mysuru.
9. Participated in one day National Seminar on Nano Technology for Energy, Environment and Health on 28th Feb 2017 at NIEIT, Mysuru.
10. Participated in International Symposium on Smart Grid Technology on 27th and 28th Jan 2017 at NIEIT, Mysuru.
11. Participated in one week Faculty Development Programme on Computational Linear Algebra on 7th-11th Dec 2016 at SJCE, Mysuru.
12. Participated in Three days Workshop on "Research Methodology and Research Motivational Aspects" from 27th to 29th July 2016 at GSSS Institute of Engineering and Technology for Women, Mysuru.
13. Participated in Science-Engineering-Technology Conclave on 2nd-7th May 2016 at NIEIT, Mysuru.
14. Participated in Two day National workshop on Number Theory and Works of Srinivasa Ramanujan on 26th and 27th Feb 2016, at University of Mysuru.
15. Participated in Three Days Faculty Development Programme on "Applied Mathematics in Engineering" from 12th to 14th Jan 2016, organized by the Department of Mathematics, sponsored by TEQIP-II, at M.S. Ramaiah Institute of Technology, Bangalore.
16. Participated in Three Days Faculty Development Programme on "Applied Mathematical Modelling" from 13th to 15th July 2015, organized by the Department of Mathematics, sponsored by TEQIP-II, at M.S. Ramaiah Institute of Technology, Bangalore.

## Proposal/Funding/Project Financial Assistance

- NIL

## Patent

- NIL

## Roles and Responsibilities: Institute Level

- NIL

## Roles and Responsibilities: Department Level

1. Time Table Coordinator
2. Course Coordinator
3. Class Teacher
4. Mentor`,
  },
  "rangaswamy-s": {
    name: "Mr. Rangaswamy S",
    url: "https://old.atme.edu.in/mr-rangaswamy-s/",
    md: `## Professional Experience

- Teaching: 3 Years 11 Months
- Research: Nil
- Industry: Nil

## Contact Details

- **Email ID:** Official: [rangaswamys_maths@atme.edu.in](mailto:rangaswamys_maths@atme.edu.in) | Personal: [rangaswamy0830@gmail.com](mailto:rangaswamy0830@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/error?id=0&email=rangaswamy0830@gmail.com>
- **Google Scholar ID:** <https://scholar.google.com/citations?hl=en&user=RhhExloAAAAJ>
- **Scopus ID:** <https://www.scopus.com/freelookup/form/author.uri>
- **Orcid ID:** <https://orcid.org/0000-0002-7066-406X>
- **Web of Science Researcher ID:** –
- **LinkedIn ID:** <https://www.linkedin.com/in/rangaswamy-s-2a4969263/>

## Academic Details

- **Qualification**
- **Ph.D.** (Pursuing)
- **M.Sc.** in Mathematics
- **B.Sc.** (PMCS)

## Areas of Interest

- Complex Analysis, Differential Equations

## Publication Details

- NIL

## Membership in Professional Bodies

- NIL

## Honours/Awards/Achievements

- NIL

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. Participated in two-Day National Seminar on 'Expedition to the Matrix World (iMATH-2025)' organized by the Department of Mathematics, Seshadripuram Institute of Technology, Mysuru, held on 24–25 December 2025 through virtual mode.
2. Completed the Udemy online course 'Patent Filing in India' instructed by Monk Akarshala on 14th October 2025 (Duration: 4.5 hours).
3. Attended the One-Day Faculty Development Program (FDP) on 'Applied Mathematics' organized by Visvesvaraya Technological University (VTU), Belagavi, in association with Vidya Vardhaka College of Engineering, Mysuru, held on 30th August 2025.
4. Online certification and FDP on Linear Algebra from NPTEL, Jul-Oct 2025.
5. Attended three days FDP on Essentials of Sciences for Engineering and Research -2025 in ATMECE from 15th Jan 2025 to 17th Jan 2025.
6. Online certification and FDP on Finite Difference Approach from NPTEL, Jan-April 2024.
7. Attended five days FDP on Essentials of Sciences for Engineering and Research -2024 in ATMECE from 26th Feb 2024 to 1st March 2024.
8. Attended One Week State Level FDP, a workshop on Cyber Security and Digital Forensics in association with Institute of Engineers (India), from 21-25 August 2023, organized by EEE, ATME College of Engineering.
9. Attended 3 days FDP on the theme "Inculcating UHV in Technical Education" by AICTE at ATME College of Engineering from 2nd to 4th of November 2023.

## Proposal/Funding/Project Financial Assistance

- NIL

## Patent

- NIL

## Roles and Responsibilities: Institute Level

- NIL

## Roles and Responsibilities: Department Level

- Mentor
- Class Teacher`,
  },
  "bhanupriya-j": {
    name: "Mrs. Bhanu Priya J",
    url: "https://old.atme.edu.in/ms-bhanu-priya-j/",
    md: `## Professional Experience

- Teaching: 6 Years
- Research: Nil
- Industry: Nil

## Contact Details

- **Email ID:** Official: [bhanupriyaj_maths@atme.edu.in](mailto:bhanupriyaj_maths@atme.edu.in) | Personal: [bhanupriyaghatke@gmail.com](mailto:bhanupriyaghatke@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/201858>
- **Google Scholar ID:** <https://scholar.google.co.in/citations?user=mBZGaqgAAAAJ>
- **Scopus ID:** Nil
- **Orcid ID:** <http://www.orcid.org/0000-0002-1553-4369>
- **Web of Science Researcher ID:** Nil
- **LinkedIn ID:** <https://www.linkedin.com/in/bhanu-priya-j-7473192a8>

## Academic Details

- **Qualification**
- **M.Sc.** in Mathematics
- **B.Sc.** (PCM)

## Areas of Interest

- Complex Analysis

## Publication Details

- NIL

## Membership in Professional Bodies

- ISTE

## Honours/Awards/Achievements

- Served as a Resource Person for the Alumni Faculty Programme on the topic "Differential Equations" organized by the Department of Mathematics of MMK and SDM First Grade College for Women, Mysuru, on 31st August 2019.

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. Attended three days FDP on Essentials of Sciences for Engineering and Research -2025 in ATMECE from 15th Jan 2025 to 17th Jan 2025.
2. Attended five days FDP on Essentials of Sciences for Engineering and Research -2024 in ATMECE from 26th Feb 2024 to 1st March 2024.
3. Mathematical Concepts by Using Free Open Source Software, 21 to 25-07-2020 (5 days), BMSIT and Management.
4. Three Days Faculty Development Program on "Importance of NAAC Accreditation in Higher Education Institutions" – ATMECE from 09.11.2020 to 11.11.2020.
5. Three Day National Level Online Faculty Development Program on "AICTE Exam Reforms: An Overview" – ATMECE from 27.08.2020 to 29.08.2020.
6. One day FDP on Mathematics for Engineers and Engineering for Mathematicians at Vidyavardhaka College of Engineering, Mysuru, under Cluster Center Approach of Teaching and Learning Centre, Coimbatore Institute of Technology, on 27th September 2019.
7. One day FDP on "Basics of Linear Algebra for Machine Learning" conducted by Teaching and Learning Centre, Coimbatore Institute of Technology, under the aegis of cluster centre approach at Vidyavardhaka College of Engineering, Mysuru, on 30th September 2019.
8. Two days webinar on Number Theory and its Application to Cryptography, 10th and 11th July 2020, by The National Institute of Engineering, Mysore.
9. Webinar on Teaching Pedagogy, 17th July 2020, by ATMECE, Mysore.
10. 3 days National webinar on Mathematics and its Applications, 20, 21, 22nd of July 2020, by Bapuji Institute of Engineering and Technology, Davanagere.
11. Webinar on Moore-Penrose Inverse, Singular Values Decompositions and their Applications, 30th July 2020, by Vidyavardhaka College of Engineering, Mysore.
12. One day webinar on "How can I improve the quality of my performance", 6th August 2020, by Vidyavardhaka College of Engineering, Mysore.
13. Webinar on Probability, Sampling Theory and their Applications, 24th August 2020, by Vidyavardhaka College of Engineering, Mysore.
14. Webinar on Sarala Ganitha, 29th August 2020, by Vidyavardhaka College of Engineering, Mysore.
15. 5 days webinar series by Govt of India Field Outreach Bureau, ATMECE, Mysore.
16. 5 days Online workshop on Universal Human Value – "Inculcating Universal Human Values in Technical Education" organized by AICTE during 5-10-2020 to 9-10-2020.
17. ARPIT Course on "Pedagogical Innovations and Research Methodology" from 1-12-2020 to 31-03-2021.
18. NITTT – Module-1, from March – April 2021.

## Proposal/Funding/Project Financial Assistance

- NIL

## Patent

- NIL

## Roles and Responsibilities: Institute Level

- Women's Committee – Member

## Roles and Responsibilities: Department Level

- Mentoring Committee – Member
- Website Committee – Member
- Class Teacher
- Mentor`,
  },
  "krupa-n": {
    name: "Mrs. Krupa N",
    url: "https://old.atme.edu.in/krupa-n/",
    md: `## Professional Experience

- Teaching: 14.5 Years
- Research: Pursuing
- Industry: Nil

## Contact Details

- **Email ID:** Official: [krupan.maths@atme.edu.in](mailto:krupan.maths@atme.edu.in) | Personal: [krupanarayanc@gmail.com](mailto:krupanarayanc@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/653988>
- **Google Scholar ID:** <https://scholar.google.co.in/citations?user=mBZGaqgAAAAJ>
- **Scopus ID:** Nil
- **Orcid ID:** <http://www.orcid.org/0009-0008-3967-8165>
- **Web of Science Researcher ID:** Nil
- **LinkedIn ID:** –

## Academic Details

- **Qualification**
- **M.Sc.** in Mathematics
- **B.Sc.** (PME)

## Areas of Interest

- Graph Theory

## Publication Details

1. The Laplacian Minimum Efficient Dominating Energy of a Graph

## Membership in Professional Bodies

- NIL

## Honours/Awards/Achievements

- NIL

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. E-Learning series on Information & Communication Technology in Education – Module 1: Essentials, Module 2: Decision-Making, January 7, 2017.
2. Technical Education Quality Improvement Programme (TEQIP-II) One-day Faculty Development Programme on OBE & NBA Accreditation, January 8, 2018.
3. Technology Enabled Teaching Learning Process.
4. Instructional Design and Delivery System, January 1 to 5, 2018.
5. Engineering Faculty You Can Do Research, Learn How, February 22 to 23, 2019.
6. TEQIP-III two day's workshop on STHREE – The Blueprint to Success, June 13 to 14, 2019.
7. Augmenting Academic Skills, August 19 to 30, 2019.
8. One day FDP on "Mathematics for Engineer and Engineering for Mathematics", September 27, 2019.
9. Linear Algebra and Mathematical Modelling, December 14, 2019.
10. Online Webinar – Outcome Based Education Road-Map to E-Learning & Accreditation, May 20, 2020.
11. TEQIP-III three day's workshop on STHREE – The Blueprint to Success – A Continued Journey, January 1 to 3, 2020.
12. FDP – Dealing with Differential Equations and PDEs, June 8, 2020.
13. Linear Algebra and Its Applications, February 26 to March 03, 2021.
14. Probability Statistics and Its Application, March 5 to 10, 2021.
15. Student Induction Program – Phase II, June 6 to 15, 2022.
16. One Day Faculty Orientation Program, November 26, 2022.

## Proposal/Funding/Project Financial Assistance

- NIL

## Patent

- NIL

## Roles and Responsibilities: Institute Level

- NIL

## Roles and Responsibilities: Department Level

- NIL`,
  },
  "nandeesha-k-n": {
    name: "Mr. Nandeesha K N",
    url: "https://old.atme.edu.in/mr-nandeesha-k-n/",
    md: "<table><tbody><tr><td width=\"158\"><strong>Name of Teaching Staff</strong></td><td colspan=\"2\" width=\"368\">Mr. Nandeesha K N</td><td rowspan=\"5\" width=\"176\"><img decoding=\"async\" class=\"aligncenter size-full wp-image-24390\" src=\"/images/uploads/2022/12/Mr.-Nandeesha-K-N-2.jpg\" alt=\"\" width=\"150\" height=\"200\"></td></tr><tr><td width=\"158\"><strong>Designation</strong></td><td colspan=\"2\" width=\"368\">Attender</td></tr><tr><td width=\"158\"><strong>Department</strong></td><td colspan=\"2\" width=\"368\">Department of Mathematics&nbsp;</td></tr><tr><td width=\"158\"><strong>Date of Joining Institution</strong></td><td colspan=\"2\" width=\"368\">13/08/2012</td></tr><tr><td width=\"158\"><strong>E-mail / Mobile Number</strong></td><td width=\"237\">&nbsp;</td><td width=\"131\">9972847801</td></tr><tr><td width=\"158\"><strong>Qualification</strong></td><td colspan=\"3\" width=\"544\">SSLC</td></tr><tr><td width=\"158\"><strong>Total Experience in Years</strong></td><td colspan=\"3\" width=\"544\">23 Years</td></tr><tr><td width=\"158\"><strong>Present Address</strong></td><td colspan=\"3\" width=\"544\">#K N Nandeesha S/O Nataraju , Kothahatthi, Hale post office street, Mandya Taluk, Mandya District</td></tr></tbody></table>",
  },
  "chandrashekhar-c": {
    name: "Mr. Chandrashekhar C",
    url: "https://old.atme.edu.in/mr-chandrashekar-c/",
    md: `## Professional Experience

- Teaching: 16 Years
- Research: 0 Years
- Industry: 5 Years

## Contact Details

- **Email ID:** Official: [Chandrashekarc_HU@atme.edu.in](mailto:Chandrashekarc_HU@atme.edu.in) | Personal: [Chandrumys22@gmail.com](mailto:Chandrumys22@gmail.com)
- **Vidwan ID:** <http://vidwan.inflibnet.ac.in/profile/296120>
- **Google Scholar ID:** <https://scholar.google.com/citations?user=Gy6iCcsAAAAJ&hl>
- **Scopus ID:** Nil
- **Orcid ID:** <http://www.orcid.org/0000-0002-0641-6109>
- **Web of Science Researcher ID:** Nil
- **LinkedIn ID:** <http://www.linkedin.com/in/chandrashekar-c-749a4413b>

## Academic Details

- **Qualification**
- **Ph.D.** – Nil
- **MA** in Political Science
- **B.A., LLB** in HEP & Indian Law

## Areas of Interest

1. Law
2. Political Science
3. History

## Publication Details

- NIL

## Membership in Professional Bodies

1. Bar Council of Karnataka

## Honours/Awards/Achievements

- NIL

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. FDP – 3
2. Conferences – 2
3. MOOC – 1
4. Workshop – 2

## Proposal/Funding/Project Financial Assistance

- NIL

## Patent

- NIL

## Roles and Responsibilities: Institute Level

1. Member, CICC
2. Member Secretary, SAC – Scholarship Awareness Committee
3. Member, College Admission Committee
4. Member, Cultural Committee
5. Member, Website Committee

## Roles and Responsibilities: Department Level

1. Coordinator – Outreach Perception Team
2. Coordinator – Photography Club`,
  },
  "bharathi-r": {
    name: "Ms. Bharathi R",
    url: "https://old.atme.edu.in/mrs-bharathi-r/",
    md: `## Professional Experience

- Teaching: 21 Years
- Research: Nil
- Industry: 7 Years

## Contact Details

- **Email ID:** Official: [bharathir_hu@atme.edu.in](mailto:bharathir_hu@atme.edu.in) | Personal: [bharathib980@gmail.com](mailto:bharathib980@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/201857>
- **Google Scholar ID:** <https://scholar.google.com/citations?hl=en&user=-mZfj68AAAAJ>
- **Scopus ID:** –
- **Orcid ID:** <https://orcid.org/0000-0001-5962-6559>
- **Web of Science Researcher ID:** –
- **LinkedIn ID:** <http://www.linkedin.com/in/bharathi-b-374b79264>

## Academic Details

- **Qualification**
- **M.Sc.** in Chemistry, B.Ed.
- **M.A.** in English
- **PGDE** in English

## Areas of Interest

- Poetry, travel log, singing and dancing

## Publication Details

1. R. Bharathi, Paper I: "The Impact of Social Media on Modern English Usage: A Linguistic Perspective", published in IJCRT (www.ijcrt.org) & 7.97 impact factor by Google Scholar, Volume 12 Issue: 10th October, published 7th Oct 2024. UGC Approved Journal: 49023(18). Paper ID: IJCRT2410101, Registration ID: 269820, ISSN: 2320-2882.
2. R. Bharathi, Paper II: "Fluctuating Moods of Abha, as Represented in the Short Story 'Abha' Taken from 'Gulami Talkies and Other Stories'".
3. R. Bharathi, Paper III: "The Role of Feminism in Contemporary", published in IJCRT (www.ijcrt.org) & 7.97 impact factor by Google Scholar, Volume 13 Issue: 6th June 2025.
4. R. Bharathi, Paper IV: "How and Why Have Divorce Rates Changed Over Time", published on 13th November 2025. UGC Approved Journal: 49023(18). Paper ID: IJCRT2511548, Registration ID: 269820, ISSN: 2320-2882.

## Membership in Professional Bodies

- ELT@I

## Honours/Awards/Achievements

- NIL

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. Attended three days FDP on Essentials of Sciences for Engineering and Research -2025 in ATMECE from 15th Jan 2025 to 17th Jan 2025.
2. Attended five days FDP on Essentials of Sciences for Engineering and Research -2024 in ATMECE from 26th Feb 2024 to 1st March 2024.
3. Attended three days FDP on "Importance of NAAC Accreditation in Higher Education Institutions" organised by ATME College of Engineering, Mysuru from 9 to 11-11-2020.
4. Three-Day National Level Online Faculty Development Program on "AICTE Exam Reforms: An Overview" – ATMECE from 27.08.2020 to 29.08.2020.
5. Annual Refresher Programme in Pedagogical Innovations and Research Methodology (Interdisciplinary), online mode at NPTEL-AICTE from Dec-Feb 2019.
6. Attended 3 days and 7 days "Faculty Development for Student Induction" from 24-26 June 2019 and 23-29 July 2019 in Belagavi and Sri Venkateshwara College of Engineering, Bangalore respectively.
7. MOOC-1: Complete English course – Master English Beginner to Advanced, from Udemy.
8. Attended 'Global Trade War and Economic Uncertainty' – a National level Webinar in JSS College for Women.

## Proposal/Funding/Project Financial Assistance

- NIL

## Patent

- NIL

## Roles and Responsibilities: Institute Level

1. Member: College Canteen & Convenience Shop Committee
2. Member: College Cultural Committee
3. Member: Anti Ragging Committee
4. Member: Sports and Extra Curricular Activity Committee
5. Member: Admission and Transport Committee

## Roles and Responsibilities: Department Level

1. Class Teacher
2. Mentor: For Students
3. UHV: Co-ordinator of Basic Science and Humanities
4. Member of Scholarship Awareness Committee
5. Course Co-ordinator`,
  },
  "leelavathi-c-r": {
    name: "Mrs. Leelavathi C R",
    url: "https://old.atme.edu.in/mrs-leelavathi-c-r/",
    md: `## Professional Experience

- Teaching: 16 Years
- Research: Nil
- Industry: Nil

## Contact Details

- **Email ID:** Official: [leelavathicr_hu@atme.edu.in](mailto:leelavathicr_hu@atme.edu.in) | Personal: [leelavathicr03@gmail.com](mailto:leelavathicr03@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/339356>
- **Google Scholar ID:** <https://scholar.google.com/citations?hl=en&authuser=3&user=oju3wigAAAAj>
- **Scopus ID:** Nil
- **Orcid ID:** Nil
- **Web of Science Researcher ID:** Nil
- **LinkedIn ID:** –

## Academic Details

- **Qualification**
- **B.A., B.Ed.**
- **M.A.** in Kannada

## Areas of Interest

- Essay Writing, Speech, Teaching

## Publication Details

- NIL

## Membership in Professional Bodies

- NIL

## Honours/Awards/Achievements

- Received Best Teacher Award in Daffodils International Public School, Mandya

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. 5-days FDP on Halegannada Bhaashe Sayithya Mimamse Adhyaayana Bhodhana at JGI, Bangalore.
2. 3-days National level FDP on IKS at ATMECE, Mysuru.
3. 5-days FDP on Essentials of Sciences for Engineering & Research at ATMECE, Mysuru.
4. 3-days workshop on Essentials of Sciences for Engineering & Research at ATMECE, Mysuru.

## Proposal/Funding/Project Financial Assistance

- NIL

## Patent

- NIL

## Roles and Responsibilities: Institute Level

1. Hostel Committee Member
2. Admission Committee Member
3. Antiragging Squad Member
4. Grievance Redressal Committee Member

## Roles and Responsibilities: Department Level

- Mentor`,
  },
  "rakshitha-v": {
    name: "Ms. Rakshitha V",
    url: "https://old.atme.edu.in/ms-rakshitha-v/",
    md: `## Professional Experience

- Teaching: 1.5 Years
- Research: Nil
- Industry: Nil

## Contact Details

- **Contact Number:** 9980476763
- **Email ID:** Official: [rakshithav_hu@atme.edu.in](mailto:rakshithav_hu@atme.edu.in) | Personal: [rakshivrakshitha@gmail.com](mailto:rakshivrakshitha@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/627384>
- **Google Scholar ID:** –
- **Scopus ID:** –
- **Orcid ID:** <https://orcid.org/0009-0005-4275-6599>
- **Web of Science Researcher ID:** –
- **LinkedIn ID:** <https://www.linkedin.com/in/rakshitha-v-772894369/>

## Academic Details

- **Qualification**
- **M.A.** in English
- **B.Ed.**

## Areas of Interest

- Literature

## Publication Details

- NIL

## Membership in Professional Bodies

- NIL

## Honours/Awards/Achievements

- State Level dance performer
- Resource Person on 5E-method of teaching at Vidhya Vikas B.Ed College, Mysuru, 2025
- Resource Person on 5E-method of teaching at Vidhya Vikas B.Ed College, Mysuru, 2026

## FDPs/Conferences/Workshops/STTP/MOOC Certification

- Attended FDP at VTU

## Proposal/Funding/Project Financial Assistance

- NIL

## Patent

- National – Nil
- International – Nil

## Roles and Responsibilities: Institute Level

- Member of Women Cell Committee
- Coordinator of AFH Committee

## Roles and Responsibilities: Department Level

- Mentor`,
  },
  "dr-muralidhar-m-p": {
    name: "Dr. Muralidhar M P",
    url: "https://old.atme.edu.in/dr-muralidhar-m-p/",
    md: `## Professional Experience

- Teaching: 18 Years
- Research: –
- Industry: –

## Contact Details

- **Email ID:** Official: [dr.muralidharmp_sports@atme.edu.in](mailto:dr.muralidharmp_sports@atme.edu.in) | Personal: [mpmuralidhar7@gmail.com](mailto:mpmuralidhar7@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/297333>
- **Google Scholar ID:** <https://scholar.google.com/citations?user=VEaKaW8AAAAJ>
- **Scopus ID:** –
- **Orcid ID:** <https://orcid.org/my-orcid?orcid=0000-0003-2175-5026>
- **Web of Science Researcher ID:** –
- **LinkedIn ID:** –

## Academic Details

- **Qualification**
- **Ph.D.** in Physical Education – University of Mysore
- **M.P.Ed.** in Physical Education – University of Mysore
- **B.P.Ed.** in Physical Education – University of Mysore

## Areas of Interest

- Softball, Cricket, Baseball, Tennis, Table Tennis and Athletics

## Publication Details

- NIL

## Membership in Professional Bodies

- Regional Director – VTU, Mysuru Division
- Selection Committee Member for University Teams

## Honours/Awards/Achievements

- NIL

## FDPs/Conferences/Workshops/STTP/MOOC Certification

- NIL

## Proposal/Funding/Project Financial Assistance

- NIL

## Patent

- National – NIL
- International – NIL

## Roles and Responsibilities: Institute Level

- Anti Ragging Committee
- Sports Committee

## Roles and Responsibilities: Department Level

- Anti Ragging Committee
- Sports Committee
- Website Committee
- Magazine Committee`,
  },
  "ms-pallavi-a-r": {
    name: "Ms. Pallavi A R",
    url: "https://atme.edu.in/cse-data-science/cse-faculty-profile-data-science/",
    md: `### **Ms. Pallavi A R**

**Designation:** Assistant Professor

**Program:** CSE-Data Science

## Professional Experience

| Teaching | Research | Industry |
| --- | --- | --- |
| 9 months | NIL | NIL |

## Contact Details

| | | |
| --- | --- | --- |
| **Email ID** | Official: pallaviar.cd@atme.edu.in | Personal: pallaviar17@gmail.com |
| **Vidwan ID** | 642-443 | |
| **Google Scholar ID** | NIL | |
| **Scopus ID** | NIL | |
| **Orcid ID** | https://orcid.org/0009-0002-3687-6875 | |
| **Web of Science Researcher ID** | https://www.webofscience.com/wos/author/record/QJV-6329-2026 | |
| **LinkedIn ID** | http://linkedin.com/in/pallavi-a-r-96810612 | |

## Academic Details

**Qualification**

- **B.E** in Computer Science & Engineering from Vidya Vikas Institute of Engineering and Technology, Mysuru.
- **M. Tech** in Computer Networking and Engineering from National Institute of Engineering, Mysuru.

## Areas of Interest

1. Machine Learning
2. Deep Learning
3. Computer Networking

## Publication Details

- Pallavi A R, Annapurna V K **published paper titled "Enforcing security for smartphone user by crowd sourcing model using IOT"** International Journal of Advanced Research in Computer Science & Technology (IJARCST). Vol. 4 Issue 2, April to June 2016.

## Membership in Professional Bodies

- NIL

## Honours/Awards/Achievements

- NIL

## FDPs/Conferences/Workshops/STTP/MOOC Certification

- Attended Three days FDP on "Cryptography Network Security and Cyber law" at VVCE, Mysore.
- Attended 12 weeks Internship on "Advance Telecom Technology" at BSNL, Mysore.
- Attended "Enhancing Academic Excellence – Faculty Dialogue on Best Practices" at NIE-TLC, Mysore.

## Proposal/Funding/Project Financial Assistance

- NIL

## Patent

- NIL

## Roles and Responsibilities: Institute Level

- NIL

## Roles and Responsibilities: Department Level

1. NSS Coordinator
2. AICTE Activity Coordinator`,
  },
  "dr-basanth-kumar": {
    name: "Dr. Basanth Kumar H B",
    url: "https://atme.edu.in/dr-basanth-kumar/",
    md: `## Dr. Basanth Kumar H B

### Contact Details

- **Email ID:** Official: dr.basanthkumarhb.mca@atme.edu.in · Personal: basanth.10@gmail.com
- **Vidwan ID:** #235706
- **Google Scholar ID:** sRLTOzoAAAAJ
- **Scopus ID:** 57211542716
- **Orcid ID:** 0000-0003-3542-7533
- **Web of Science Researcher ID:** -
- **LinkedIn ID:** www.linkedin.com/in/basanth-kumar-h-b-9103137a

### Academic Details

- Qualification
- Ph.D.
- MCA (Master of Computer Applications)
- B.Sc.

### Areas of Interest

- Machine Learning
- Deep Learning
- Image Forensics
- Digital Watermarking

### Publication Details

- I. Journals
- Haranahalli Rajanna Chennamma, Basanth Kumar Halaguru Basavarajappa, Madhushree Basavaraju, Kyatanahalli Nanjappa Sowmya, and Appusamy Venkataraman Senthil Kumar, "Medical Image Authentication using Statistical Correlations", International Journal of Safety and Security Engineering, Vol. 14, No. 5, pp. 1487-1493, October 2024.
- B Madhushree, H B Basanth Kumar, Chennamma H R, "An Exhaustive Review of authentication, tamper Detection with localization and recovery techniques for Medical images", Multimedia Tools and Applications, October 2023.
- Halaguru Basavarajappa Basanth Kumar and Haranahalli Rajanna Chennamma, "Dataset for classification of computer graphic images and photographic images", IAES International Journal of Artificial Intelligence, vol. 11, No. 1, pp. 137-147, March 2022.
- Halaguru Basavarajappa Basanth Kumar and Haranahalli Rajanna Chennamma, "Classification of Computer Graphic Images and Photographic Images Based on Fusion of Color and Texture Features", Revue d'Intelligence Artificielle, vol. 35, No. 2, pp. 201-207, June 2021.

- II. Conferences
- Basanth Kumar H.B., Chennamma H.R, Classification of Computer Graphic Images Using Deep Learning. In: Sengodan, T., Murugappan, M., Misra, S. (eds) Advances in Electrical and Computer Technologies. ICAECT 2020. Lecture Notes in Electrical Engineering, vol. 711, 2021 Springer, Singapore. https://doi.org/10.1007/978-981-15-9019-1_12
- Basanth Kumar H B and H R Chennamma, "Watermarking of Computer Generated Imagery: A Review", In IEEE International Conference on Electrical, Computer and Communication Technologies (ICECCT), 2019, pp. 1-7.

- III. Patent
- H R Chennamma and H B Basanth Kumar, "A Method for Integrity Verification of DICOM Medical Images by Reversible Watermarking", Patent Application published on 3rd Feb 2023 in the Web Portal of Intellectual Property Office, India. Patent Application Number: 202341005745.

### Membership in Professional Bodies

_Nil_

### Honours / Awards / Achievements

_Nil_

### FDPs / Conferences / Workshops / STTP / MOOC Certification

- IUCEE (Felder-Brent), "Effective Teaching and Learning" Course, 2024 - 25.

### Proposal / Funding / Project Financial Assistance

_Nil_

### Patent

_Nil_

### Roles & Responsibilities — Institute Level

- Coding and Innovation Club Co-Ordinator

### Roles & Responsibilities — Department Level

- EMS Co-Ordinator
`,
  },
  "siddegowda-c-j": {
    name: "Dr. Siddegowda C J",
    url: "https://atme.edu.in/siddegowda-c-j/",
    md: `## Dr. Siddegowda C J

### Professional Experience

- Teaching: 21 Years
- Research: 5 Years
- Industry: Nil

### Contact Details

- **Email ID:** Official:siddegowdacj.mca@atme.edu.in · Personal:siddegowdacj@gmail.com
- **Vidwan ID:** 224780
- **Google Scholar ID:** [https://scholar.google.com/citations?user=OztMTpcAAAAJ&hl=en](https://scholar.google.com/citations?user=OztMTpcAAAAJ&hl=en)
- **Orcid ID:** [000-0001-8206-9367](https://orcid.org/000-0001-8206-9367)

### Academic Details

- Qualification
- Ph.D. in Computer Science
- MCA in Computer Science
- B.E

### Areas of Interest

- Deep Learning
- Networking

### Publication Details

- Published a Paper Titled "Wormhole Attacks in Mobile Cognitive Radio Networks"  in international Journal of Pharma and Bio Sciences with ISSN0975-6299
- Published a paper titled" Securing Wireless Communications of Connected Vehicles with Artificial Intelligence" in IJRTER with ISSN:2455-1457

- Published a paper titled "PROMOTE CONSEQUENTIAL VIRTUALIZATION IN NETWORK INCLOUD COMPUTING" in IJRTER with ISSN:2455-1457
- Siddegowda C. J. & Dr. Subrahmanya Bhat. 2025. Blood Vessels and Lesion Interconnected Features for The Severity Classification of Diabetic Retinopathy. JOURNAL OF APPLIED BIOANALYSIS, December 2025 p. 822-834. http://doi.org/10.53555/jab.v11si9.1318 (ISSN 2405-710X)
- Siddegowda C. J. & Dr. Subrahmanya Bhat. 2025. Blood Vessels and Lesion Interconnected Features for The Severity Classification of Diabetic Retinopathy. JOURNAL OF APPLIED BIOANALYSIS, December 2025 p. 822-834. http://doi.org/10.53555/jab.v11si9.1318 (ISSN 2405-710X)

### Membership in Professional Bodies

- IAENG

### Honours / Awards / Achievements

_Nil_

### FDPs / Conferences / Workshops / STTP / MOOC Certification

- NPTEL course completed on DBMS
- IPR course NPTEL
- Cloud Computing

### Proposal / Funding / Project Financial Assistance

_Nil_

### Patent

_Nil_

### Roles & Responsibilities — Institute Level

- Admission committee member

### Roles & Responsibilities — Department Level

- Academic coordinator
- Time Table coordinator
- Class Teacher
`,
  },
  "yeshashwini-bhandari-k-r": {
    name: "Yeshashwini Bhandari K R",
    url: "https://atme.edu.in/yeshashwini-bhandari-k-r/",
    md: `## Yeshashwini Bhandari K R

### Professional Experience

- Teaching: 10 Years
- Research: 0.2 Months
- Industry: 5 Years

### Contact Details

- **Email ID:** Official: yeshashwinibhandarikr.mca@atme.edu.in · Personal: yeshaswini.bkr@gmail.com
- **Vidwan ID:** Vidwan-554795
- **Google Scholar ID:** Google Scholar
- **Scopus ID:** Scopus-60607197800
- **Orcid ID:** [0009-0005-6582-3387](https://orcid.org/0009-0005-6582-3387)
Web of Science Researcher ID
- **LinkedIn ID:** [linkedin.com/in/yeshashwini-bhandari-61a689a9](https://www.linkedin.com/in/yeshashwini-bhandari-61a689a9/)

### Academic Details

- Qualification
- PhD. in (Pursuing)
- M. C. A (Master of Computer Applications)
- B.Sc in Computer Science

### Areas of Interest

- Edge Computing
- Cyber Security and Networking
- Blockchain Cryptography

### Publication Details

- AI-Driven Load Balancing and Energy-Efficient Resource Optimization in Mobile Edge Computing: A Comprehensive Review Proceedings - 2025 International Conference on Transformative Computing Technologies, ICTCT 2025Pages: 145 - 150 Conference Paper 2025 EID:�2-s2.0-105037439189 DOI:�[10.1109/ICTCT69201.2025.00040](https://doi.org/10.1109/ICTCT69201.2025.00040)
- K. R. Vaddempudi, M. S. S. Rukmini, Y. B. K R, R. Periyasamy, S. Kaliappan and T. P. Priyanka, "Deploying Lightweight Neural Networks on Edge Devices for Real-Time Traffic Monitoring and Management in Smart Cities,"�2025 1st International Conference on Advancement in Futuristic Technologies (ICAFT), Belagavi, India, 2025, pp. 1-8, doi: [10.1109/ICAFT66710.2025.11453005](https://doi.org/10.1109/ICAFT66710.2025.11453005).
- EFFICIENCY AND SECURITY TRADE-OFF: LIGHTWEIGHT CRYPTOGRAPHY WITH NTRU FOR ENHANCED ENCRYPTION Education and Society (?????? ??? ????) : ISSN 2278-6864 with IF=6.718 Vol. 46, Issue 04, No. 08, July - September: 2023 UGC CARE Approved, Group I, Peer Reviewed, Bilingual, Multi-disciplinary Referred Journal

### Membership in Professional Bodies

- IAENG
- IIC

### FDPs / Conferences / Workshops / STTP / MOOC Certification

- FDP on National Education Policy 2020 organized by St. Francis Institute of Management and research(26th September to 30th September 2022"
- FDP on "IOT Enabled Techniques for industrial processes at MSRIT ( 25/11/2024 to 30/11/2024)
- FDP on "AI Mastery for Educators" organized by Vislesani i-Hub IIT Patna. ( 15/05/2025 to 7/06/2025)
- Certification of Achievement on "Machine Learning Foundation" By Infosys ( September 28, 2024)
- Course Completion Certificate on "Data Analytics with Python " By NPTEL ( Jan -April, 2025)
- Innovation Ambassador training "Foundation Level".
- Innovation Ambassador training "Advanced Level".

### Proposal / Funding / Project Financial Assistance

_Nil_

### Patent

_Nil_

### Roles & Responsibilities — Institute Level

- Coding and Innovation Club
- IIC

### Roles & Responsibilities — Department Level

- AIMS Coordinator
- Website Coordinator
- Placement Coordinator
`,
  },
  "prashant-r-kaigaddi": {
    name: "Prashant R Kaigaddi",
    url: "https://atme.edu.in/prashant-r-kaigaddi/",
    md: `## Prashant R Kaigaddi

### Professional Experience

- Teaching: 1 Year
- Research: Nil
- Industry: 1 Year

### Contact Details

- **Email ID:** Official:prashantrkaigaddi.mca@atme.edu.in · Personal: pkaigaddi@gmail.com
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/562886
- **Google Scholar ID:** https://scholar.google.com/citations?view_op=new_articles&hl=en&imq=Prashant+kaigaddi#
- **Scopus ID:** https://id.elsevier.com/settings/redirect?code=MrcEVHBN8LXK27cApRQeLUG5CuhhiSz1KEUY4Ref#
- **Orcid ID:** https://orcid.org/0009-0002-9483-6011
- **Web of Science Researcher ID:** https://www.webofscience.com/wos/author/record/NWH-8466-2025
- **LinkedIn ID:** https://www.linkedin.com/in/prashant-kaigaddi-1bba351b9

### Academic Details

- Qualification
- Master of Computer Applications
- Bachelor of Computer Applications

### Areas of Interest

- AI/ML
- Data Analytics
- Agentic AI

### Publication Details

- "Quantum Authentication Techniques against Emerging threats in QKD". Presented IEEE paper in 2025 IEEE3rd Global conference on Wireless Computing and Networking(GCWCN).
- "A real time speech-to-sign language translation Framework using Transformer based Gesture Synthesis" presented IEEE paper in RMK Engineering college, Chennai  RMKMATE26

### FDPs / Conferences / Workshops / STTP / MOOC Certification

- "Stepping into Practical aspects of Cyber Security Research" One week FDP
- "Two Days Hands on Workshop on Microsoft Excel with AI and ChatGPT"
- "NPTEL Online Certification on Cloud Computing"
- "Faculty Industrial Training at Kosha Technohub Pvt Ltd, Mysore on AI/ML Domain exposure".
- "Completed Innovation Ambassador Training - Foundation Level Innovation Cell and AICTE during 2025-26".
- "Completed Innovation Ambassador Training - Advanced Level Innovation Cell and AICTE during 2025-26".

### Roles & Responsibilities — Department Level

- Academic Coordinator (BCA)
- Research Coordinator(MCA)
- Internal Assessment Coordinator(MCA,BCA)
- NIRF Coordinator(MCA)
- Domain Specific Coordinator(BCA,MCA)
`,
  },
  "tanya-r": {
    name: "Tanya R",
    url: "https://atme.edu.in/tanya-r/",
    md: `## Tanya R

### Professional Experience

- Teaching: 9 Months
- Research: Nil
- Industry: Nil

### Contact Details

- **Email ID:** Official: tanyar.mca@atme.edu.in · Personal: tanyarajesh03@gmail.com
- **Vidwan ID:** [vidwan.inflibnet.ac.in/profile/582630](https://vidwan.inflibnet.ac.in/profile/582630)
- **Google Scholar ID:** Google Scholar
- **Scopus ID:** Scopus
- **Orcid ID:** [0009-0004-6209-5102](https://orcid.org/0009-0004-6209-5102)
Web of Science Researcher ID
- **LinkedIn ID:** [linkedin.com/in/tanya-r-](http://www.linkedin.com/in/tanya-r-)

### Academic Details

- Qualification
- M. C. A (Master of Computer Applications)
- BCA (Bachelor of Computer Applications)

### Areas of Interest

- Cyber Security
- IoT
- Web Technologies

### Publication Details

- International Conference - CyberBERT: An Intelligent Transformer-Based NLP Framework for High-Accuracy Cyber Threat Classification.

### Membership in Professional Bodies

- IIC ambassador
- IAENG member

### FDPs / Conferences / Workshops / STTP / MOOC Certification

- "Design Thinking - A Primer" - MOOC Certification (NPTEL)
- "Distributed Systems" - MOOC Certification (NPTEL)
- "Cyber Security and Privacy" - MOOC Certification (NPTEL)
- "Cloud Computing" - MOOC Certification (NPTEL)
- 6 Day Faculty Development Program in Advance Cyber Security from 21-Jul-2025 to 26-Jul-2025 (Myra School of Business).
- 6 Day Faculty Development Program in Cyber Security from 24-Nov-2025 to 29-Nov-2025 (IIIT Dharwad).

### Proposal / Funding / Project Financial Assistance

_Nil_

### Patent

_Nil_

### Roles & Responsibilities — Institute Level

- Women Cell Member

### Roles & Responsibilities — Department Level

- IA Coordinator
- NAAC Criteria 5 Coordinator
`,
  },
  "vijay-kumar-s": {
    name: "Vijay Kumar S",
    url: "https://atme.edu.in/vijay-kumar-s/",
    md: `## Vijay Kumar S

### Professional Experience

- Teaching: 9 Months
- Research: Nil
- Industry: Nil

### Contact Details

- **Email ID:** Official: vijaykumars.mca@atme.edu.in · Personal: vijayvicky2276@gmail.com
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/582801
- **Google Scholar ID:** ?Vijay Kumar S? - ?Google Scholar?
- **Scopus ID:** Scopus preview - Scopus - Sources
- **Orcid ID:** [0009-0007-0389-4299](https://orcid.org/0009-0007-0389-4299)
- **Web of Science Researcher ID:** -
- **LinkedIn ID:** [Vijay Kumar S](https://www.linkedin.com/in/vijay-kumar-s-a77226289/)

### Academic Details

- Qualification
- BSC(PMCS)
- MCA

### Areas of Interest

- Machine learning
- IoT
- Cyber Security

### Publication Details

- A real-time speech-to-sign language translation framework using Transformer -based gesture Synthesis.
- A Real-Time Speech-to-Sign Language Translation Framework Using Transformer-Based Gesture Synthesis | IEEE Conference Publication | IEEE Xplore
- Advanced Gradient Boosting Models for IoT-Driven Continuous Health Monitoring: Predicting Chronic Disease Exacerbation Usaing Wearable Sensor Data.Advanced Gradient Boosting Models for IoT-Driven Continuous Health Monitoring: Predicting Chronic Disease Exacerbation Usaing Wearable Sensor Data | IEEE Conference Publication | IEEE Xplore

### Membership in Professional Bodies

- Member of Internet society

### FDPs / Conferences / Workshops / STTP / MOOC Certification

- Full stack: bitbytebynary(june-2024)
- Introduction to machine learning:Swayam(sep-2023)
- Python essentials-1:Cisco(Dec-2023)
- Cloud computing:Swayam(July-oct 2025)
- Faculty Development Programme (FDP) on "Artificial intelligence,Machine learning,and Deep   learning in the Data Revolution Era:Progress and applications" organized by Department of Computer Science and Engineering, Department of CSE (AIML)ATME colege of engineering ,Mysuru from 3rd to 5th February 2025
- Faculty Development Programme (FDP) on "Artificial intelligence,Machine learning,and Deep   learning in the Data Revolution Era:Progress and applications" organized by Department of Computer Science and Engineering, Department of CSE (AIML)ATME colege of engineering ,Mysuru from 3rd to 5th February 2025
- Faculty Development Programme (FDP) on "Unlocking Generative AI-Foundation to NLP and prompt engineering" organized by Department of CSE-Data science ,ATME colege of engineering ,Mysuru from 10th  to 12th February 2025
- Faculty Development Programme (FDP) on "Introduction to AI and its applications" jointly organized by SVIT,Bengaluru and VTU belagavi on 30th August 2025
- Faculty Development Programme (FDP) on "Advance and Innovations in Cyber security and Artificial Intelligence"  organized by E&ICT Academy IIT Guwahati in association with Atria Institute of technology ,Bengaluru from  15th  to 19th December 2025
- Faculty Development Programme (FDP) on "AI for Systems Security" organized by Department         of Computer Science and Engineering, NITK, Surathkal from 16th to 20th February 2026

### Roles & Responsibilities — Department Level

- NBA Cordinator
- Sports Cordinator
- Time table Co-cordinator
`,
  },
  "manikanta": {
    name: "Manikanta",
    url: "https://atme.edu.in/manikanta/",
    md: `## Manikanta

### Professional Experience

- Teaching: 2 Years
- Research: 1 Year
- Industry: 6 Months

### Contact Details

- **Email ID:** Official:manikanta.mca@atme.edu.in · Personal:manikantaganes1999@gmail.com
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/582633
- **Google Scholar ID:** https://scholar.google.co.in/citations?hl=en&user=MmzgidMAAAAJ
- **Scopus ID:** https://id.elsevier.com/settings/redirect?code=AjDE7U2G3ZrP7uED3Au25MuwL6ZlCKBKquAzvw7B
- **Orcid ID:** https://orcid.org/0009-0007-0771-7919
- **Web of Science Researcher ID:** https://www.webofscience.com/wos/author/record/LSL-5704-2024
- **LinkedIn ID:** https://www.linkedin.com/in/manikanta-51626b226/

### Academic Details

- Qualification
- Ph.D in Applied Sciences (Computer Applications) (Pursuing)
- Master of Computer Application
- Bachelor of  Computer Application

### Areas of Interest

- Artificial intteligence
- Cyber security
- Cloud computing

### Publication Details

- Development of an AI-Based Predictive Modeling System for Microplastic Pollution - Bulletin for Technology and History (UGC CARE Group-II, Scopus Indexed), Vol. 25, Issue 6, June 2025, Paper ID: BTH/3354.
- Neuroscientific Insights into the Cognitive Benefits of Mantra Chanting - IRJAEM, Vol. 03, Issue 05, May 2025.
- Research Work: Machine Learning Approaches for Predicting Protein-Protein Interaction and Complexes.-ijcrt
- Presented an international technical paper titled "Future-Enabled Health Assistant: Forecasting and Communication with Physicians" at ICAISDGs-2025
- Presented a paper at a national conference (Anveshana 2025) on a future AI-based health assistant for disease forecasting and personalized healthcare solutions.
- Published a paper in an international conference (ICAISDGs-2025) on an eye-tracking voice assistant for intelligent cursor control.
- Published a paper in an international conference (ICAISDGs-2025) on a future AI-based health assistant for disease forecasting and physician communication.
- Published a paper in an international conference (ICAISDGs-2025) on predictive analytics for crop yield using machine learning and soil data.
- Published a paper in an international conference (ICAISDGs-2025) on AI-enhanced imaging techniques for kidney stone detection.
- Published a paper in an international conference (ICAISDGs-2025) on bird species classification using image and audio-based deep learning.
- Published a paper in an international conference (ICAISDGs-2025) on vitamin deficiency detection using image processing and neural networks.

### Membership in Professional Bodies

- 1 Member of the International Association of Engineers (IAENG) (Membership No: 546409), recognized at the International Level..

### Honours / Awards / Achievements

_Nil_

### FDPs / Conferences / Workshops / STTP / MOOC Certification

- Participated in the National Conference on Emerging Trends in Science & Technology for Ecological Conservation (ETSTEC-2025) on 15th February 2025 and presented a paper titled "Development of an AI-Based Predictive Modelling System for Microplastic Pollution: Analyzing Pollution Sources & Environmental Mitigation Strategies," organized by Surana College, Bengaluru in association with KSTA
- Participated in the Second International Conference on Recent Trends in Science, Technology and Management (ICRTSTM 2025) on 30th June and 1st July 2025, and presented a paper titled "A Comprehensive Review of CNN-Based Thermal Signature Analysis for Advancements in Personalized Health Monitoring.
- ANVESHANA 2025, Seshadripuram Degree College, Mysuru (Apr 2025) - Presented paper on Future-Gen Health Assistant: Forecast and Communicate with Physics.
- Three days national level fdp on indian knowledge system
- Three days national level fdp on UNLOCKING GENRATIVE AI
- 6 days national level fdp on cyber security in st Philomena collage
- 3 Day training on fnris devices and eeg devices
- 8 ICETCC 2025, REVA University-SCITEPRESS (Nov 2025) - Presented paper on Trustless Authentication in Cloud Infrastructures Using Blockchain-Integrated Cryptographic Consensus Mechanisms.
- ICRTSTM 2025, BVCOEW Pune & RSP Conference Hub (Jun-Jul 2025) - Presented paper on CNN-Based Thermal Signature Analysis for Advancements in Personalized Health Monitoring.

### Proposal / Funding / Project Financial Assistance

_Nil_

### Patent

_Nil_

### Roles & Responsibilities — Institute Level

- PG INTRENSHIP COORDINATOR

### Roles & Responsibilities — Department Level

- PROJECT COORDINATOR
- INTRENSHIP COORDINATOR
- CLASS COORDINATOR
`,
  },
  "poojitha-s": {
    name: "Poojitha S",
    url: "https://atme.edu.in/poojitha-s/",
    md: `## Poojitha S

### Professional Experience

- Teaching: Nil
- Research: Nil
- Industry: Nil

### Contact Details

- **Email ID:** Official: poojithas.mca@atme.edu.in · Personal: poojithas01092000@gmail.com
Vidwan ID
https://vidwan.inflibnet.ac.in/profile/653948
- **Google Scholar ID:** https://acesse.one/kiivg
- **Scopus ID:** https://www.scopus.com/freelookup/form/author.uri
- **Orcid ID:** 0009-0008-0453-1091
Web of Science Researcher ID
- **LinkedIn ID:** https://www.linkedin.com/in/poojitha-s-90b765329

### Academic Details

- Qualification
- MCA
- BSC (PMCs)

### Areas of Interest

- Python
- Networking
- Machine Learning

### Publication Details

- Presented the paper titled " Real-Time Histopathological Cancer Diagnosis using ResNet50: Transfer Learning for Automated Tumor Detection and Classification" at the 7th International Conference on Mobile Computing and Sustainable Informatics (ICMCSI 2026) held during 7-9, January 2026 at Purbanchal University, Nepal

### FDPs / Conferences / Workshops / STTP / MOOC Certification

- Five Days Faculty Development Program on "AI for System Security" at NITK Surathkal
- from 16-02-2026 to 20-02-2026.
- "Cloud Computing"-MOOC Certification (NPTEL)-with 69% from January to April (12 weeks)

### Patent

- National
- International

- Title:
- Published/Granted:
- Patent No.:
- Title:
- Published/Granted:
- Patent No.:

### Roles & Responsibilities — Institute Level

- Roles and Responsibilities: Department Level	    - Personal File Coordinator
- Class Teacher for 1MCA Section B
- Library Coordinator
- Member of NAAC Criteria 3
`,
  },
  "gowtham-mg": {
    name: "Gowtham M G",
    url: "https://atme.edu.in/gowtham-mg/",
    md: `## Gowtham M G

### Professional Experience

- Teaching: Nil
- Research: Nil
- Industry: Nil

### Contact Details

- **Email ID:** Official: gowthammg.mca@atme.edu.in · Personal:mggowtham347@gmail.com
- **Vidwan ID:** 651945
- **Google Scholar ID:** Google Scholar
- **Scopus ID:** Scopus MG
- **Orcid ID:** 0009-0000-0843-7467
Web of Science Researcher ID
- **LinkedIn ID:** [linkedin.com/in/gowtham-m-g-7266aa325](http://linkedin.com/in/gowtham-m-g-7266aa325)

### Academic Details

- Qualification
- M. C. A (Master of Computer Applications)
- B.SC in Computer Science

### Areas of Interest

- Deep Learning and Neural Network and AI.
- Machine learning and Data Science.
- Cloud Computing.
- Big Data.

### Publication Details

- International Conference -Global Goals,Local Solutions-Integrating Sustainability in Everyday Life "Predicting Startup Status Using Machine Learning", IEEE Xplore: 18th and 19th September 2025.
- the 9th International Conference on Intelligent Computing and Control Systems (ICICCS-2026) DVD Part Number: CFP26K74-DVD; ISBN: 979-8-3315-8946-2

### Membership in Professional Bodies

_Nil_

### Honours / Awards / Achievements

_Nil_

### FDPs / Conferences / Workshops / STTP / MOOC Certification

- "Distributed Systems"-MOOC Certification (NPTEL)-with 63% from July to September (8weeks)
- "Edge Computing"-MOOC Certification (NPTEL)-with 62% from July to October (12 weeks)
- "Cloud Computing "-(NPTEL)-with 75% from January to April (12 weeks)

### Proposal / Funding / Project Financial Assistance

_Nil_

### Patent

_Nil_

### Roles & Responsibilities — Institute Level

_Nil_

### Roles & Responsibilities — Department Level

- Dean Research Office Coordination
- Placement Coordinator
- MCA Department Activities Coordinator
- Project Coordinator
- Intership Coordinator.
- NAAC Coordinator.
`,
  },
  "yathiraj-d-n": {
    name: "Yathiraj D N",
    url: "https://atme.edu.in/yathiraj-d-n/",
    md: `## Yathiraj D N

### Professional Experience

- Teaching: Nil
- Research: Nil
- Industry: Nil

### Contact Details

- **Email ID:** Official: yathirajdn.mca@atme.edu.in · Personal: yathirajraj3@gmail.com
- **Vidwan ID:** [vidwan.inflibnet.ac.in/profile/651914](https://vidwan.inflibnet.ac.in/profile/651914)
- **Google Scholar ID:** Google Scholar
- **Scopus ID:** scopus
- **Orcid ID:** [0009-0001-5539-2756](https://orcid.org/0009-0001-5539-2756)
Web of Science Researcher ID
- **LinkedIn ID:** [linkedin.com/in/yathiraj-d-n](https://www.linkedin.com/in/yathiraj-d-n/)

### Academic Details

- Qualification
- M. C. A (Master of Computer Applications)
- B.Sc in Computer Science

### Areas of Interest

- Machine learning and Data Analytics
- Data Structures and Algorithms
- Cybersecurity
- Web Technologies

### Publication Details

- International Conference -Global Goals, Local Solutions-Integrating Sustainability in Everyday Life "Detection of Cardiovascular Diseases using ECG signal Analysis", IEEE Xplore: 18th and 19th September 2025.
- International Conference on Intelligent Computing and Control Systems (ICICCS 2026)" Attention-Driven Convolutional Neural Network for Real-Time Driver Drowsiness and Inattention Awareness", organized by Nandha Engineering College, Erode on 16th to 18th March 2026

### Membership in Professional Bodies

_Nil_

### Honours / Awards / Achievements

- "Gold Medalist-Weight Lifting"-Mysore University Inter-Collegiate Competations held on 18th to 20th September 2019
- "2nd in GENIUX / IT Manager (ZERONE-2025)" Intercollegiate tech fest organized by Department of MCA, Siddaganga Institute of Technology, Tumkur.

### FDPs / Conferences / Workshops / STTP / MOOC Certification

- "Distributed Systems"-MOOC Certification (NPTEL)-with 65% from July to September (8weeks)
- "The Joy of Computing using Python"-MOOC Certification (NPTEL)-with 70% from July to October (12 weeks)
- "Cloud Computing "-(NPTEL)-with 64% from January to April (12 weeks)
- Faculty Development Programme (FDP) on "AI for Systems Security" organized by Department of Computer Science and Engineering, NITK, Surathkal from 16th to 20th February 2026

### Proposal / Funding / Project Financial Assistance

- Project Titled -"Simple Social Club Platform" has approved by the KSCST(Karnataka State Council for Science and Technology) under "Student Project Programme - 48th Series"

### Patent

_Nil_

### Roles & Responsibilities — Institute Level

- Photography Club Co-ordinator

### Roles & Responsibilities — Department Level

- Class Teacher
- Newsletter & Magazine Co-Ordinator
- NBA Co-Ordinator
- Website Co-Ordinator
- Editorial Club Co-Ordinator
- Sports Club Co-Ordinator
`,
  },
  "keerthi-h": {
    name: "Keerthi H",
    url: "https://atme.edu.in/keerthi-h/",
    md: `## Keerthi H

### Professional Experience

- Teaching: Nil
- Research: Nil
- Industry: 0.6 Years

### Contact Details

- **Email ID:** Official: keerthih.mca@atme.edu.in · Personal: keerthiguddu2001@gmail.com
- **Vidwan ID:** 653481
- **Google Scholar ID:** GOOGLE SCHOLAR
- **Scopus ID:** SCOPUS
- **Orcid ID:** https://orcid.org/0009-0002-2447-9733
Web of Science Researcher ID
- **LinkedIn ID:** https://www.linkedin.com/in/keerthi-h-536255307/

### Academic Details

- Qualification
- MCA [ Master of Computer Application]
- BCA  [ Bachelor of Computer Application]

### Areas of Interest

- C Programming
- Web Technologies
- Data Structures and Algorithms
- PHP and SQL

### Publication Details

_Nil_

### Membership in Professional Bodies

_Nil_

### Honours / Awards / Achievements

- SPECTRA 2022 - National Level Inter Collegiate Management, IT & Cultural Fest.

### FDPs / Conferences / Workshops / STTP / MOOC Certification

- "Privacy and Security in Online Social Media"- MOOC Certification (NPTEL)(12 Weeks).
- "Cloud Computing"- MOOC Certification (NPTEL)(12 Weeks).
- A State level Conference on Emerging trends in Computer Science and Technologies - IOT Based live video reporting and Bomb detection robot from military in location.

### Proposal / Funding / Project Financial Assistance

_Nil_

### Patent

_Nil_

### Roles & Responsibilities — Institute Level

_Nil_

### Roles & Responsibilities — Department Level

- SPORTS CO-ORDINATOR
- COURSE FILE CO-ORDINATOR
`,
  },
  "sushmitha-b-h": {
    name: "Sushmitha B H",
    url: "https://atme.edu.in/sushmitha-b-h/",
    md: `## Sushmitha B H

### Professional Experience

- Teaching: Nil
- Research: Nil
- Industry: 2 Years

### Contact Details

- **Email ID:** Official: sushmithabh.mca@atme.edu.in · Personal: sushmithahuchappa20@gmail.com
- **Vidwan ID:** 658898
- **Google Scholar ID:** Google Scholar
- **Scopus ID:** Scopus
- **Orcid ID:** [0009-0002-2447-9733](https://orcid.org/0009-0002-2447-9733)
- **Web of Science Researcher ID:** -
- **LinkedIn ID:** [linkedin.com/in/sushmitha-huchappa-752a29253](https://www.linkedin.com/in/sushmitha-huchappa-752a29253/)

### Academic Details

- Qualification
- M. C. A (Master of Computer Applications)
- B.Sc in Computer Science

### Areas of Interest

- Object Oriented Programming using Java
- Ddiscrete mathematics
- Cybersecurity
- Web Technologies

### Publication Details

- 2026 IEEE International Conference for Convergence in Computing Technology (I3CTCON) IEEE Xplore: 14th-15th March 2026
- 2026 International Conference on Computing Theory and Wireless Communications (ICCTWC) 1st - 2nd Apr 2026

### Membership in Professional Bodies

_Nil_

### Honours / Awards / Achievements

_Nil_

### FDPs / Conferences / Workshops / STTP / MOOC Certification

_Nil_

### Proposal / Funding / Project Financial Assistance

_Nil_

### Patent

_Nil_

### Roles & Responsibilities — Institute Level

- NIRF Co-Ordinator

### Roles & Responsibilities — Department Level

- EMS Co-Ordinator
- Cultural Co-Ordinator
`,
  },
  "clara-b": {
    name: "Clara B",
    url: "https://atme.edu.in/clara-b/",
    md: `## Clara B

### Professional Experience

- Teaching: Nil
- Research: Nil
- Industry: Nil

### Contact Details

- **Email ID:** Official: clarab.bca@atme.edu.in · Personal: clarachristin753@gmail.com
- **Vidwan ID:** [vidwan.inflibnet.ac.in/profile/711411](https://vidwan.inflibnet.ac.in/profile/711411)
- **Google Scholar ID:** Google Scholar
- **Scopus ID:** Scopus
- **Orcid ID:** [0009-0004-5779-0397](https://orcid.org/0009-0004-5779-0397)
- **Web of Science Researcher ID:** -
- **LinkedIn ID:** [linkedin.com/in/clara-b-1817aa366](https://www.linkedin.com/in/clara-b-1817aa366/)

### Academic Details

- Qualification
- M. C. A (Master of Computer Applications)
- B.C.A (Bachelor of Computer Application)

### Areas of Interest

- Artificial Intelligence
- Data Structures and Algorithms
- Java
- Python

### Membership in Professional Bodies

_Nil_

### FDPs / Conferences / Workshops / STTP / MOOC Certification

- "Distributed Systems"-MOOC Certification (NPTEL)-with 64% from July to September 2024 (8weeks)
- "Python for Data Science"-MOOC Certification (NPTEL)-with 70% from January to February (4 weeks)

### Proposal / Funding / Project Financial Assistance

_Nil_

### Patent

_Nil_

### Roles & Responsibilities — Institute Level

_Nil_

### Roles & Responsibilities — Department Level

_Nil_
`,
  },
  "teharin": {
    name: "Teharin",
    url: "https://atme.edu.in/teharin/",
    md: `## Teharin

### Professional Experience

- Teaching: Nil
- Research: Nil
- Industry: Nil

### Contact Details

- **Email ID:** Official: teharin.bca@atme.edu.in · Personal: ateharin@gmail.com
- **Vidwan ID:** [vidwan.inflibnet.ac.in/profile/709947](https://vidwan.inflibnet.ac.in/profile/709947)
- **Google Scholar ID:** Google Scholar
- **Scopus ID:** Scopus
- **Orcid ID:** [0009-0008-7146-6437](https://orcid.id/0009-0008-7146-6437)
- **Web of Science Researcher ID:** -
- **LinkedIn ID:** [linkedin.com/in/teharin-180a61251](https://www.linkedin.com/in/teharin-180a61251)

### Academic Details

- Qualification
- MCA
- BCA

### Areas of Interest

- Machine learning
- Python
- Cybersecurity
- Web Technologies

### Publication Details

_Nil_

### Membership in Professional Bodies

_Nil_

### Honours / Awards / Achievements

_Nil_

### FDPs / Conferences / Workshops / STTP / MOOC Certification

_Nil_

### Proposal / Funding / Project Financial Assistance

_Nil_

### Patent

_Nil_

### Roles & Responsibilities — Institute Level

_Nil_

### Roles & Responsibilities — Department Level

_Nil_
`,
  },
  "ravikala-k-g": {
    name: "Ravikala K G",
    url: "https://atme.edu.in/ravikala-k-g/",
    md: `## Ravikala K G

### Contact Details

- **Email ID:** Official: ravikalakg.mca@atme.edu.in · Personal: ravikalakg@gmail.com
- **Vidwan ID:** 718282
- **Google Scholar ID:** Google Scholar
- **Scopus ID:** 59483648600
- **Orcid ID:** orcid
- **Web of Science Researcher ID:** -
- **LinkedIn ID:** LinkedIn

### Academic Details

- Qualification
- M. C. A (Master of Computer Applications) in Cybersecurity
- B. C. A (Bachelor of Computer Application)

### Areas of Interest

- Machine learning and Data Analytics
- Cybersecurity
- IOT
- Wireless Communication

### Publication Details

- "A Machine Learning-Driven Framework for Modeling and Classifying Generative AI Readiness in Indian Higher Education," at the 6th International Conference on Intelligent Technologies (CONIT 2026), organized by KLE Institute of Technology, Hubballi, Karnataka, India, in association with IEEE Bangalore Section on 19th June to 21st June 2026.
- XXII Control Instrumentation Systems Conference (CISCON 2025), "Financial Stress Prediction and Student Retention Analysis Using Machine Learning", organized by the Department of Instrumentation and Control Engineering, Manipal Institute of Technology, Manipal Academy of Higher Education (MAHE), Manipal, technically co-sponsored by the IEEE Bangalore Section, held on 1st–2nd August 2025.
- 16th International IEEE Conference on Computing, Communication and Networking Technologies (ICCCNT 2025), "Data Driven Prediction Model for Campus Placements" (Paper ID: 9969), virtually hosted by Indian Institute of Technology (IIT) Indore, from 6th to 11th July 2025.
- 15th International IEEE Conference on Computing, Communication and Networking Technologies (ICCCNT 2024), "Exploring the Impact of Financial Stress on Students' Academic Performance: A Machine Learning Approach", hosted by Indian Institute of Technology (IIT) Mandi, Himachal Pradesh, from 24th to 28th June 2024.
- International Conference on Sustainable & Resilient Futures: Bridging Science, Policy, and Practice (ICSRF 2025), "Data-Driven Pathways to Resilient Education: Unveiling Lifestyle Impacts on Student Health and Academic Sustainability through Machine Learning", organized by Amrita Vishwa Vidyapeetham, Amritapuri, India.

### Membership in Professional Bodies

_Nil_

### Honours / Awards / Achievements

_Nil_

### FDPs / Conferences / Workshops / STTP / MOOC Certification

- One-Day Faculty Development Programme (FDP) titled "Professional Networking and Personal Growth for Educators on LinkedIn".
- Five-Day Faculty Development Programme (FDP) on "Mobile Application Development", organized by the Department of BCA, Amrita Vishwa Vidyapeetham, Mysuru Campus, from 9th to 13th June 2025.
- "Inculcating Universal Human Values in Technical Education", organized by the All India Council for Technical Education (AICTE), 23rd–27th December 2024 (Five-Day Online FDP).

### Proposal / Funding / Project Financial Assistance

_Nil_

### Patent

_Nil_

### Roles & Responsibilities — Institute Level

_Nil_

### Roles & Responsibilities — Department Level

_Nil_
`,
  },
  "jayaprakash": {
    name: "Jayaprakash Narayan",
    url: "https://atme.edu.in/jayaprakash/",
    md: `## Jayaprakash Narayan

### Contact Details

- **Email ID:** Official: mailto:jayaprakashnarayanaj_ec@atme.edu.in · Personal: mailto:jpnarayangowda@gmail.com
Vidwan ID
Google Scholar ID
Scopus ID
Orchid ID
Web of Science Researcher ID
LinkedIn ID

### Academic Details

- Qualification
- Diploma in Electronics and communication Engg.

### Areas of Interest

_Nil_

### Membership in Professional Bodies

_Nil_

### Honours / Awards / Achievements

_Nil_

### Proposal / Funding / Project Financial Assistance

_Nil_

### Patent

_Nil_
`,
  },
  "bhumika-v-r": {
    name: "Bhumika V R",
    url: "https://atme.edu.in/bhumika-v-r/",
    md: `## Bhumika V R

### Contact Details

- **Email ID:** Official: bhumikavr.mca@atme.edu.in · Personal: bhumikavr12@gmail.com
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/582641
- **Google Scholar ID:** Google Scholar
- **Scopus ID:** https://service.elsevier.com/app/home/supporthub/scopus
- **Orcid ID:** https://orcid.org/0009-0003-1601-4677
Web of Science Researcher ID
- **LinkedIn ID:** https://www.linkedin.com/in/bhumika

### Academic Details

- Qualification
- M. C. A (Master of Computer Applications)
- B.C.A. (Bachelor of Computer Science)

### Areas of Interest

- Machine learning and Data Analytics
- Cybersecurity
- Web Technologies

### Publication Details

- "Temporal Fusion Tranformer - Based Early Prediction of Sepsis in ICU Patients Using Multivariate Vital Signs and Laboratory Time - Series Data in 2025 1st International Conference on Advancement in Futuristic Technologies (ICAFT) during 19th to 20th December 2025.

### Membership in Professional Bodies

_Nil_

### Honours / Awards / Achievements

_Nil_

### FDPs / Conferences / Workshops / STTP / MOOC Certification

- 3- days FDP on "Unlocking Generative AI" - Foundation to NLP and prompt Engineering organized by the Department of CSE- Data Science, in association with IEI, ATME IEEE STB - 35744 & Internal Quality Assurance Cell (IQAC), ATME College of Engineering, Mysuru from 10th February to 12th February 2025.
- 5-days FDP on "AI for System Security "organized by the Department of computer science and engineering, NITK - Surathkal, from 16th February to 20th February 2026.
- "Cloud Computing"- MOOC Certification (NPTL) - with 69% from January to April (12 weeks).

### Proposal / Funding / Project Financial Assistance

_Nil_

### Patent

_Nil_

### Roles & Responsibilities — Institute Level

_Nil_

### Roles & Responsibilities — Department Level

- Maintaining Lab and Department Work.
`,
  },
  "kruthika-n": {
    name: "Kruthika N",
    url: "https://atme.edu.in/kruthika-n/",
    md: `## Kruthika N

### Contact Details

- **Email ID:** Official: kruthika.mca@atme.edu.in · Personal: kruthikan20@gmail.com
Vidwan ID
Google Scholar ID
Scopus ID
Orcid ID
Web of Science Researcher ID
LinkedIn ID

### Academic Details

- Qualification
- BCA

### Areas of Interest

- Cyber Security

### Patent

- National
- International

- Title:
- Published/Granted:
- Patent No.:
- Title:
- Published/Granted:
- Patent No.:
`,
  },
  "mr-manu-vijay": {
    name: "Mr. Manu Vijay",
    url: "https://atme.edu.in/mr-manu-vijay/",
    md: `**Faculty Name:** Manu Vijay

**Designation:** Associate Professor

**Program:** Civil Engineering

### Professional Experience

- Teaching Experience: 12 Years
- Research Experience: 0 Years
- Industry Experience: 2 Years

### Contact Details

- **Email (Official):** manuvijay_cv@atme.edu.in
- **Email (Personal):** hlmanuvijay@gmail.com
- **Vidwan ID:** 200972
- **Google Scholar ID:** [https://scholar.google.com.tw/citations?user=_D0y9HkAAAAJ&hl=en](https://scholar.google.com.tw/citations?user=_D0y9HkAAAAJ&hl=en)
- **Scopus ID:** 58653673000
- **Orcid ID:** [https://orcid.org/0000-0001-5254-4286](https://orcid.org/0000-0001-5254-4286)
- **LinkedIn ID:** [https://www.linkedin.com/in/manu-vijay-a4300046/](https://www.linkedin.com/in/manu-vijay-a4300046/)

### Academic Details

**Qualification**

- B.E in Civil Engineering at SSIT, Tumkur.
- M.Tech in Structural Engineering at UBDTCE, Davangere.
- Pursuing PhD in Structural Engineering at NIE, Mysuru.

**Areas of Interest**

Structural Engineering.

### Publication Details

1. Sanjay S J, Manu Vijay, "Simplified equation for estimating the period of vibration of buildings with moment resisting frames and shear walls", Vol no 1, pg 1647-1654, ISSN: 2348-9480.
2. Manu Vijay, Shiva Kumar M, Shrimanth R, M Aradaya, Naveen Kumar SM, "An experimental study on concrete by partial replacement of cement with marble dust and fine aggregate with sugarcane bagasse ash", Vol 13, 2 July 2015. www.ijspr.com/citations/v13n2/IJSPR_1302_143.pdf
3. Vijin Xavier, Naveen Kumar S.M, Manu Vijay, Raghu Nandan Yadav, "Study of mechanical properties in SCC by blending cement partially with Flyash and Metakaolin", IJSRD – International Journal for Scientific Research & Development, Vol. 3, Issue 10, Dec 2015, ISSN (online): 2321-0613.
4. Sanjay S J, Dr. Keshava Murthy M, Manu Vijay, Naveen Kumar S, "Study on Compressive Strength of Self Compacting Concrete with Partial Replacements of Cement and M-Sand with Granite Sludge & GGBS", IJRTI, Volume 2, Issue 10, 2017, ISSN: 2456-3315.
5. Manu Vijay, Srivathsa H U, "Study on Concrete Properties by Partially Replacing Cement by Metakaolin and Fine Aggregate by Laterite Soil", www.ijirset.com, Vol. 6, Issue 2, February 2017, ISSN (Online): 2319-8753, ISSN (Print): 2347-6710.
6. Manu Vijay, Srivathsa HU, "An Experimental Study on Enrichment of Concrete Strength by Partial Replacement of Cement by Metakaolin and Replacement of Fine Aggregate by Manufactured Sand", IJSRD – International Journal for Scientific Research & Development, Vol. 4, Issue 12, 2017, ISSN (online): 2321-0613.
7. Srivathsa H U, Manu Vijay, "Experimental study on Strength and Durability Characteristics of Concrete with Partial Replacement of Nano-Silica, Nano-Vanadium Mixture", International Journal of Innovative Science and Research Technology, ISSN: 2456-2165.
8. P Shashank, Rudresh A N, Manu Vijay, "Load Moment Interaction Behaviour of Equally Legged T Column", International Research Journal of Engineering & Technology (IRJET), Volume 5, Issue 5, May 2018, Page 1809–1812, ISSN: 2395-0056.
9. Shashank P, Manu Vijay, "Utilization of Sugarcane Bagasse ash as a partial replacement by cement with normal concrete", IJRASE International, ISSN: 2321-9653, Thomson Reuters.
10. "Utilization of Metakaolin as a Partial Replacement by Cement With Self Compacting Concrete", IRTCST-2020.
11. "Experimental Study On Fly-Ash Based Geopolymer Concrete", IWCSET-2020.
12. Manu Vijay, "Simplified Equation for Estimating Period of Vibration of Buildings with Flat Slabs and Shear Walls", ETCME 2014, Madhya Pradesh.
13. Manu Vijay, Naveen Kumar S.M., Kavan M.R, "Hardened Properties of Blended Self-Compacting Concrete using Industrial Byproduct", National Conference on Recent Trends in Geo Science, Material Science and Civil Engineering (RTGMCE-2017), ISBN: 978-93-86256-67-6.
14. Manu Vijay, Raghu Nandan Yadav, Naveen Kumar S M, Kavan M.R, "Experimental Study on Normal Concrete by Partial Replacement of Cement with Sugarcane Bagasse Ash", Two Days National Conference "Innovations and Advances in Civil Engineering And Earth Science", Chamarajanagar, Karnataka.
15. Manu Vijay, Naveen Kumar S M, "Experimental Study On Strength Of SCC By Adding Nano Silica With Metakaolin As Replacement For Cement".
16. Manu Vijay, Naveen Kumar M, "Improvement And Examine the Behaviour Of Conventional And High Strength Self-Compacting Mortar Mixes", ICRTST-2021.
17. Kumar Raju B C, Manu Vijay, Chandre Gowda C, Sanjay Shekar N C, Vijay Kumar Y, "Utilization of Metakaolin and Steel Fiber to Enhance the Concrete Properties", ICRTST-2022.
18. Amarnath Shetty, Shashank P, Naveen Kumar S M, Manu Vijay, "A Probabilistic Approach to Estimating Hardened Properties of Self Compacting Concrete".
19. Manu Vijay, Naveen Kumar S.M, Dr. Vijaya Kumar Y.M, Rahul N, "Exploring Structural Performance Through Seismic & Pushover Analysis Of G+4 Storey Building", IJEIT – Journal of Emerging Technologies and Innovative Research (JETIR).
20. Chandre Gowda C, Kumar Raju B. C., Manuvijay H L, "Modelling Flow Duration Curve for Upper Cauvery Basin", Cures of Springer Nature, Volume 13.
21. Sarange Shreepad Marotrao, R Arun Kumar, A Vijayalakshmi, Manu Vijay, Shrujal Barvaliya, Rajneesh Sharma, K Ravi Kumar, S Muthuvel, "Enhancing mechanical and microstructural properties of crushed stone concrete using alumina nanoparticles and composite fibers", Journal Conference Proceedings.
22. Manu Vijay, Dr G Ravi, "Fatigue analysis and assessment of a state highway bridge on Hunsur-Mysore Road", Civil Engineering and Architecture Journal.
23. Rahul N, Manuvijay, Naveen Kumar S.M, "Sustainable Development And Performance Evaluation Of Geopolymer Concrete (GPC): A Comprehensive Study", IOSR Journal of Mechanical and Civil Engineering (IOSR-JMCE).
24. Nazia Tabassum, Abhishek J Bowaj, Manu Vijay, S M Naveen Kumar, Shaik Kabeer Ahmed, C G Akhila, "ANN Prediction of Mechanical Properties of GGBFS and Alccofine Based High Strength Self-Compacting Concrete", IOP Conference Series: Earth and Environmental Science.
25. Manu Vijay, Shaik Kabeer Ahmed, Naveen Kumar SM, "Seismic Performance and Retrofit for Yuvaraja's College: The Case Study", Grenze International Journal of Engineering & Technology (GIJET).
26. S M Naveen Kumar, Manu Vijay, C Chandre Gowda, P Shashank, B Bharathi, "SAP2000 Software Analysis and Design of the Intze Water Tank", Recent Advances in Structural Engineering: Select Proceedings of IACESD-2023.
27. Rahul N, Manu Vijay, Naveen Kumar S.M, Dr. Vijaya Kumar Y.M, "Exploring Structural Performance Through Seismic & Pushover Analysis Of G+4 Storey Building", ijetr.com.
28. Manu Vijay, Naveen Kumar S M, "Studying The Strength Characteristics of SCC By Substituting Metakaolin For Cement As Well As Adding Nano Silica", IIP series.
29. Naveen Kumar S M, Manu Vijay, "Studying The Strength Characteristics Of SCC By Substituting Metakaolin For Cement As Well As Adding Nano Silica", Futuristic Trends in Chemical Material Sciences & Nano Technology.
30. Manu A S, Vikram M K, Aparna B P, M. Sudhagar, Manu Vijay, Raghu K, "Experimental Investigation on Effect of Coconut Shell Powder on Index Properties of Lime Treated Black Cotton Soil", Nanotechnology Perceptions.
31. Shashank P, Naveen Kumar S M, Manu Vijay, Dr. Amarnath Shetty, Sagar, "Analysis And Design Of Single Vent Box Culvert For Different Loading Condition By Using Staad Pro Software", IIIP series.
32. Amrutha, Mohammed Tauseeq Khaleel, Nithin B, Mohammed Adnan, Manu Vijay, "Experimental Study on Bendable Concrete", ijsred.com.
33. Manu Vijay, Dr G Ravi, "Fatigue Reliability – A case study of bridge to find the stress due to Moving loads", ISSN: 2248-9622, Vol. 11, Issue 7 (Series-II), July 2021, pp. 49-55.
34. Manu Vijay, Dr G Ravi, "Aged Transport Concrete Bridges Fatigue Reliability Is Evaluated Using Probabilistic Fracture Mechanics", Sea Bold Journal.

### Membership in Professional Bodies

IEI, ISTE, IAENG, SEFI, ACCE, ASCE.

### Honours / Awards / Achievements

1. Co-Organizer, Two-day International Conference ICRTST-2022 – 4 Lakhs from AICTE.
2. Organiser, Two-day International Conference ICRTST-2023.

### FDPs / Conferences / Workshops / STTP / MOOC Certification

1. FDPs – 13
2. Workshops / Symposium / Seminars – 8
3. Training Programs – 3
4. NITTT – All 8 Modules cleared
5. Conferences – 10

### Proposal / Funding / Project Financial Assistance

1. Received grant of Rs. 4,00,000/- from AICTE for organising conference under GOC scheme.
2. Received grant of Rs. 6,000/- for the B.E. project titled "An Experimental Study on Strength of Concrete Using Steel Slag" guided in the academic year 2021-22 from KSCST under 46th Series Student Project Programme.

### Roles and Responsibilities: Institute Level

1. Worked as the Head of the Civil Department (from Aug 2015 to Sep 2025).
2. NABL – Chief Executive Officer.

### Roles and Responsibilities: Department Level

1. NBA Coordinator
2. Consultancy
3. ACCE / BAI / IGBC – Extension Activities
4. LIC / AICTE / AIISHE / MOU Coordinator
5. Department Library Coordinator
6. II Year - Class Teacher
7. Concrete Lab – Incharge (Main)
`,
  },
  "dr-nalini-elizabeth-rebello": {
    name: "Dr. Nalini Elizabeth Rebello",
    url: "https://atme.edu.in/dr-nalini-elizabeth-rebello/",
    md: `**Faculty Name:** Dr. Nalini Elizabeth Rebello

**Designation:** Professor

**Program:** Civil Engineering

### Professional Experience

- Total Experience: 24 Years
- Teaching Experience: 22 Years
- Research Experience: 10 Years
- Industry Experience: 2 Years

### Contact Details

- **Email (Official):** dr.nalinier.dean@atme.edu.in
- **Vidwan ID:** 407628
- **Google Scholar ID:** [https://scholar.google.com/citations?hl=en&user=yArOLlwAAAAJ](https://scholar.google.com/citations?hl=en&user=yArOLlwAAAAJ)
- **Scopus ID:** 57189074031 and 57220428520
- **Orcid ID:** [https://orcid.org/0000-0001-7443-1020](https://orcid.org/0000-0001-7443-1020)

### Academic Details

**Qualification**

- **Ph.D** in Geotechnical Engineering, National Institute of Technology, Surathkal, Karnataka.
- **M.Tech** in Geotechnical Engineering, National Institute of Technology, Surathkal, Karnataka.
- **B.E** in Civil Engineering, AIT, Bangalore.

**Areas of Interest**

- Soil stability
- Blast induced vibrations
- Tunnelling
- Geosynthetics

### Publication Details

1. Rebello N, K. Deekshitha, Shetty, S. (2023). **Hydraulically manufactured cement and fly ash stabilized compressed earth block.** Materials Today Proceedings. https://doi.org/10.1016/j.matpr.2023.04.483.
2. K. Deekshitha, Mahima S Rao, Nalini Rebello, AT Ramprasad, A. Jayarama, Richard Pinto (2022). **A novel cross-linked PVA-Chithosan composite membrane for heavy metal filtration applications.** https://doi.org/10.1016/j.matpr.2022.06.487.
3. K. Deekshitha, N. Rebello, A.T. Ramaprasad et al. (2020) **Development of Novel Porous membrane for Filtration of dumpyard of ground water Contaminants**, Material Today; Proceedings, https://doi.org/10.1016/j.matpr.2020.02.787.
4. Nalini E. Rebello, R. Shivashankar and Vedala R. Sastry (2018). **Surface Displacements due to tunneling in granular soils in presence and absence of geosynthetic layer under footings.** Geomechanics and Engineering, Technopress. Vol. 15, No. 2 (2018), pp. 739-744. DOI: org/[10.12989/gae.2018.15.2.739](https://doi.org/10.12989/gae.2018.15.2.739).
5. R. Shivashankar, Nalini E. Rebello, V.R. Sastry and B.R. Jayalekshmi (2018). **Soil Structure Interaction Studies with Use of Geosynthetics in Soils Beneath Footings.** Shehata and Y. Rashed (eds.), Numerical Analysis of Nonlinear Coupled Problems, Sustainable Civil Infrastructures, Springer International, DOI [10.1007/978-3-319-61905-7](https://doi.org/10.1007/978-3-319-61905-7). pp. 85-97.
6. Nalini E. Rebello, R. Shivashankar and V.R. Sastry (2016). **Response of Strata and Buildings to Blast Induced Vibrations in the Presence and Absence of a Tunnel.** Journal of Geotechnical and Geological Engineering, Springer, 34:1013–1028.
7. Nalini Rebello, V.R. Sastry and R. Shivashankar (2014). **Study of Surface Displacements on Tunnelling under Buildings using 3DEC Numerical Modelling.** ISRN Civil Engineering, Hindawi Journals, Article ID 828792.
8. Nalini Rebello, Vedala Rama Sastry and R. Shivashankar (2014). **Numerical Modelling Study of Behaviour of Consolidated Strata around Tunnel.** Science, Technology, Arts Research Journal, pp. 190-196.
9. Nalini. R, V. R. Sastry, Shivashankar, and R, Lakshmi. S (2012). **Behaviour of Tunnel and Surrounding Strata using 3DEC Numerical Modelling: Case study of an U/G Metro Rail Project**, International Journal of Earth Sciences and Engineering, pp. 1763-1770.

### Book / Book Chapter Published

- Rebello, N., Safa, A., Pujar, A.Y., Joseph, B., Deekshith, V.C. (2023). **Development of Arduino Prototype for the Detection of Fire, Smoke, and Carbon Monoxide from Open Waste Burning.** In: Nandagiri, L., Narasimhan, M.C., Marathe, S. (eds) Recent Advances in Civil Engineering. CTCS 2021. Lecture Notes in Civil Engineering, vol 256. Springer, Singapore. https://doi.org/10.1007/978-981-19-1862-9_62
- Rebello N., Rao M.S., D'Souza M.R., Mahesha S.M., Rajeev V.T. (2021). **Development of Water Filtration Unit Using PVA-Based Composite Membrane and Fly Ash.** In: Narasimhan M.C., George V., Udayakumar G., Kumar A. (eds) Trends in Civil Engineering and Challenges for Sustainability. Lecture Notes in Civil Engineering, vol 99. Springer, Singapore. https://doi.org/10.1007/978-981-15-6828-2_45
- Rebello N., Harikiran R., Akarsh, Vasani S., Aseem S. (2021). **Experimental Studies on Geo-Synthetic Vertical Barrier Around the Dumpyard.** In: Narasimhan M.C., George V., Udayakumar G., Kumar A. (eds) Trends in Civil Engineering and Challenges for Sustainability. Lecture Notes in Civil Engineering, vol 99. Springer, Singapore. https://doi.org/10.1007/978-981-15-6828-2_44.

### Membership in Professional Bodies

1. Life member of Indian Society for Technical Education (Membership No – LM-113075).
2. Life Member of Indian Geotechnical Society.
3. Fellow, Institution of Engineers (IEI), India, FIE.

### Honours / Awards / Achievements

- **GATE qualified with 87.04 percentile in 2004** and received GATE Scholarship during 2004 to 2006 for PG Program at NITK, Surathkal.

### Courses Completed

- Successfully Completed Udemy Online Certification Course on "**Python Programming**" in 2022.
- Successfully completed the NPTEL Course on "**Python for Data Science**" in 2024.

### FDPs / Conferences / Workshops / STTP / MOOC Certification

- AICTE sponsored Two weeks Staff Development Program (SDP) "**Induction Training for Teachers in Engineering Education**", KREC, from 14th August to 2nd September 2000.
- Two Day Workshop on "**Ground Improvement Techniques**" conducted by Department of Civil Engineering, N.M.A.M.I.T, Nitte, from 27–28 February 2009.
- Two Day National Seminar on "**Explosives & Blasting Techniques for Mining, Quarrying & Infrastructure Industry**", NITK, Surathkal, from 27–28 Sept 2013.
- Two Day DFI-NITK Workshop on "**Recent Trends in Piling and Ground Improvement**", NITK, Surathkal, from 31st July – 1st August 2015.
- Two Day Workshop on "**Practical Approach to Recent Advancements in Civil Engineering and Sustainable Development**", NMAM Institute of Technology, Nitte, from 12th and 13th January 2017.
- Two Day Workshop on "**Applications of Remote Sensing and GIS in Civil Engineering**", A.J. Institute of Engineering and Technology, Mangalore, from 3rd and 4th May 2018.
- Five Day Workshop on "**Universal Human Values**", AICTE, 10–14 August 2020.

### Roles and Responsibilities

1. Headed the Department of Civil Engineering, SJEC from January 2015 to February 2019.
2. Set up 3 major Laboratories in the Department. Taken up responsibility of IEI membership of SJEC and all the other members. Chairperson of the Library advisory committee of SJEC, for the year 2016-2017 and 2017-2018.
3. Set up the Research Centre in SJEC in 2017.
4. Headed the Department of Civil Engineering of Sahyadri College from May 2019 to May 2020 and from May 2020 till August 2022 the Dean – Academic of the College.
5. As HoD of St. Joseph Engineering College, student Ms. Mahima Rao obtained the 1st Rank in VTU with 13 Gold Medals.
6. Carried out CSR-GHRDC Survey of the Sahyadri College and obtained 19th ranking in country of Best Engineering Colleges and 6th Ranking in State.
7. Took up the entire responsibility of NAAC work at SCEM. Filled up the QnMs and QlMs of different Criteria and prepared the Self Study Report (SSR).
8. Editor of College Newsletter, 3 times.
9. During Lockdown took the responsibility of initiating online video recording for Faculty which was highly useful and successful. Aided in preparing the Academic Statute of the College.
10. Played a major role in obtaining Autonomous Status for SCEM. Besides this, took the responsibility of Time Table preparation, Selection of Open Electives, Calculation of workload, maintenance of all Files required by Statutory Authorities at College Level etc.
11. Worked Extensively for a duration of 1.5 years, towards obtaining NAAC accreditation and successfully obtained it for the very 1st Cycle of Accreditation at BIT.
`,
  },

  "dr-j-v-gorabal": {
    name: "Dr. J V Gorabal",
    url: "https://atme.edu.in/dr-j-v-gorabal/",
    md: `### Education Details

- PhD, JNT University Anantapuram
- M.Tech Computer Science & Engineering, KBNCE Kalaburgi, VTU.
- B.E CSE, BEC, Bagalkot, KUD Dharwad

### Areas of Interest

- Image Processing
- Biometric Security

### Professional Experience

- Teaching Experience – 25 years

### University Responsibilities

1. Member BoE, VTU Belagavi for the academic year 2022-23
2. Member LIC Visit, VTU Belagavi for the academic year 2022-23

### Employment History

- 1997 – 2000 Worked as a part time lecturer in Government Polytechnic, Kushtagi for three academic years.
- 2000 – 2005 Worked as a lecturer in Department of Computee Applications at Basaveshwara Engineering College, Bagalkot.
- 2005 – 2011 Worked as Assistant Professor and Head, Department of Computer Science and Engineering at R. L. Jalappa Institute of Technology, Doddaballapur, Bangalore.
- 2011 – 2020 Worked as Associate Professor, Professor, Professor & Head CSE, & Dean Academics, Sahyadri College of Engineering and Management, Adyar Mangalore 2020-till Date: Working as Professor in CSE Department

### Research Scholars

- Two Researcher successfully completed PhD, VTU Belagavi
- Six Students presently registered and pursuing PhD, VTU Belagavi
- One Research scholar successfully completed his PhD in the year December 2021
- Four students registered to pursue their PhD in the area of Image processing

### Publications

### Journal Articles

1. S H Biradar, J V Gorabal, "Twitter Based Sentiment Analysis for Perspective and Ranking of Engineering College using Machine Learning Technique" Journal of Data Acquisition and Processing, VOl. 38(1), 2023.
2. Usha G R and J V Gorabal, Hybrid Feature Extraction and Deep Learning Classifier-Based Effective Classification for Twitter Sentiment Analysis: Journal of Data Acquisition and Processing Vol-38, pages-142-19, 2023.
3. Usha G R and J V Gorabal, "Hybrid Deep Learning Model-Based Approach for Sentiment Classification: International Journal of Intelligent systems and applications in engineering: Volume-11 Issue-2 page no -948-955, 2023.
4. Mr. L N Swamy and J V Gorabal, Score Level Fusion of two CNN using Co-Occurrence CBoW and Skip Gram Word Embedding models for Sentiment Analysis, in ICRCSIT, Vol-43, No-21, UGC Care Journal, July-September, 2020.
5. Mr. L N Swamy and J V Gorabal, "Concept of TF-IDF, Comma of Bag of Words and Word Embedding for Efficient Sentiment Classification", in International Journal of Innovation Technology and Exploring Engineering (IJITEE), ISSN: 2278–3078 (Online), Vol: 9, Issue: 6, April 2020, P: 2198 – 2201.
6. J V Gorabal, Manjaiah D H and S N Bharath Bhushan, "Novel Implementation of Multimodal Biometric Approaches to Handle Privacy and Security issues of RFID Tag", in IIOABJ Special Issue, ISSN: 0976–3104 (Online), Vol: 7, Issue: 3, April 2017, P: 60–64. (Scopus Indexed).
7. J V Gorabal and Manjaiah D H, "Image Data Encryption Approaches for Security Issues", in International Journal of Computer Engineering and Technology (IJITMIS), Vol: 5, Issue: 2, May–August 2014, P: 59–64.
8. J V Gorabal and Manjaiah D H, "Privacy and Security Issues in RFID Technology", in International Journal of Computer Engineering and Technology (IJITMIS), Vol: 5, Issue: 8, August 2014, P: 88–96.
9. J V Gorabal and Manjaiah D H, "RFID: A Smart Technology", in International Journal of Computer Engineering and Technology (IJITMIS), Vol: 5, Issue: 8, August 2014, P: 18–24.
10. J V Gorabal and Manjaiah D H, "Wavelet Energy Features for Fingerprint Identification", in International Journal of Graphics and Multimedia (IJGM), Vol: 5, Issue: 2, May–August 2014, P: 01–13.
11. J V Gorabal and Manjaiah D H, "Texture Analysis for Face Recognition", in International Journal of Graphics and Multimedia (IJGM), Vol: 4, Issue: 2, December 2013, P: 20–30.

### Conference Papers

1. S H Biradar, J V Gorabal, Gaurav "Machine Learning Tool for Exploring Sentiment Analysis on Twitter Data" International Conference on Applied Research and Engineering ICARAE 2021 26-28, November 2021, Cape Town, Western Cape, South Africa, 7335. (Elsevier-2214-7853).
2. J V Gorabal and Naithik Kumar ST "Survey on Multimodal biometric authentication System using Finger veins and Fusion at match score level" presented in International Conference on Recent Trends in Science and Technology ICRTST-2021, 8-9 July, 2021, ISSN-978-93-5473-932-3 organized by ATME College of Engineering, Mysore.
3. Mr. L N Swamy and J V Gorabal, "Product Review Analysis Using LR Method", in Third IEEE International Conference on Electrical and Electronics Communication, Computer Technologies and Optimization Techniques, Dec 14–15, 2018.
4. Rajeshwari Banni and J V Gorabal, "Citrus Leaf Disease Detection using Image Processing Approaches", in International Conference on Recent Innovations in Science, Engineering and Technology Conference, May 18–19, 2018, (Scopus Indexed).

### Book Chapter

1. Naithik and J V Gorabal, Threat and Attack Models in IoT Devices, Security of Internet of Things Nodes, Taylor and Franscis 1st Edition, 2021.

### FDPs / Conferences / Workshops / STTP / MOOC Certification

### Trainings Attended

- Participated in Faculty Development Program Series 1 on "Mathematics in Artificial Intelligence, Machine Learning and Deep Learning for Faculty & Practitioners" organized by Department of Computer Science and Engineering held during 01 to 05 September 2021.
- One week AICTE Sponsored Online STTP on "Focuses on Learning the Scope of Security Aspects and Applications", at NMAM Institute of Technology, Nitte, Karkala, from 26 to 31 July, 2021.
- Participated in the Webinar on "How to write Proposals for Funding" organized in association with IEEE Student Branch Bangalore Section on 31st December 2020.
- Three days orientation course on "Value Education" at Ramakrishna Institute of Moral and Spiritual Education, Mysore from 2 to 4 March, 2018.
- Two days workshop on "System Design in the Era of Internet of Things" by Prof. Joseph Sifakis, Turing Awardee from 11 to 12 January, 2018 at Sahyadri College of Engineering and Management, Mangaluru.
- Two days workshop on "Outcome Based Education and Blooms Taxonomy" from 10 to 11 July, 2017 at Sahyadri College of Engineering and Management, Mangaluru.
- Two days workshop on "Strategic Leadership for Excellence" from 2 to 4 January, 2014 at International Academy for Competency Enhancement, Bangalore.
- Two days workshop on "Effective Leadership on Excellence" from 9 to 10 December, 2013 at International Academy for Competency Enhancement, Bangalore.
- One week short term programme on "Quality Assurance and NBA Accreditation in Technical Institutions" sponsored by AICTE Summer School from 20 to 24 July, 2009 at NITTTR, Chandigarh.
- Three days FDP on "Computer Network Simulation" organized by TEQIP from 21 to 23 February, 2008 at Basaveshwara Engineering College, Bagalkot.
- One week short term training programme on "Vision Research and Development" organized by TEQIP from 20 to 25 March, 2006 at Basaveshwara Engineering College, Bagalkot.
- Three days workshop on "Current Industrial Software Construction Practices" from 15 to 17 February, 2006 at Department of Computer Science and Engineering, NMAMIT, Nitte, Karkala.
- Two days national seminar on "Technical Education and Challenged in the New Millennium" from 3 to 4 November, 2001 at Basaveshwara Engineering College, Bagalkot.

### Online Courses Completed

- Coursera Programming For Everybody (Getting Started with Python) offered by University of Michigan with 95% grade.
- Coursera Introduction to the Internet of Things and embedded Systems offered by University of California, Irvine with 97% grade.
- Coursera 3D Printing Applications offered by University of Illinois Urbana Champaign with 97% grade.

### Roles and Responsibility

- NAAC Citerion-3 Department coordinator
- Student Counselor.
- Member Admission committee
- Member Library Committee

### Membership in Professional Bodies

- Life Member ISTE
- Life Member CSI
- Life Member Data Science Society

### Board of Studies & Examinations

- Member Board of Studies, Post-graduation studies in Computer Science University of Mangalore, Mangalore
- Former Member Board of Examinations, VTU Belagavi, 2019
- Former member Board of Studies, PDA College of Engineering Kalburgi
`,
  },

  "dr-jayantkumar-a-rathod": {
    name: "Dr. Jayantkumar A Rathod",
    url: "https://atme.edu.in/dr-jayantkumar-a-rathod/",
    md: `**Faculty Name: Dr. Jayantkumar A Rathod**

**Designation: PROFESSOR**

**Program: Computer Science & Engineering**

### Professional Experience

- Teaching: 21 Years
- Research: 4 years
- Industry: Nil

### Contact Details

- **Email ID — Official:** Dr.jayantkumararathod@atme.edu.in **Email ID — Personal:** jayantkumarrathod@gmail.com
- **Vidwan ID:** —
- **Google Scholar ID:** https://scholar.google.com/citations?user=f0s73s4AAAAJ&hl=en
- **Scopus ID:** 57189095746
- **Orcid ID:** https://orcid.org/0000-0003-3127-391X
- **Web of Science Researcher ID:** https://www.webofscience.com/wos/author/record/JVP-1919-2024
- **LinkedIn ID:** —

### Academic Details

**Qualification**

- PhD in Faculty of Computer & Information Sciences, VTU , Belagavi , Karnataka.
- M. Tech in Computer Science and Engineering , VTU , Belagavi , Karnataka.
- B.E in Computer Science and Engineering , KUD , Dharwad , Karnataka

### Areas of Interest

- Networking , Artificial Intelligence and Machine Learning , Software Engineering

### Publication Details

- 1\] Title : Trichain: Kangaroo-Based Intrusion Detection For Secure Multipath Route Discovery and Route Maintenance In Manet Using Advanced Routing Protocol. Authors : Jayantkumar A Rathod, Manjunath Kotari Journal :   International Journal of Computer Networks and Applications (IJCNA), Vol. 11, No. 1, February 2024, pp. 61-81. https://doi.org/10.22247/ijcna/2024/224436 SCOPUS Q3
- 2\] Title :  Secure And Efficient Message Transmission In Manet Using Hybrid Cryptography And Multipath Routing Technique. Authors : Jayantkumar A Rathod, Manjunath Kotari. Journal : Multimedia Tools and Applications, June 2024, https://doi.org/10.1007/s11042-024-  19542-9. Quartile Q1
- 3\] Title : Blockchain-Based Vaccination Record Tracking System, Authors : Shwetha G K, Jayantkumar A Rathod, Naveen G, Mounesh Arkachari, Pushparani M K Journal : International Journal of Advanced Computer Science and Applications(IJACSA), Volume 15 Issue 8, 2024.   DOI: https://dx.doi.org/10.14569/IJACSA.2024.0150874 Q3 Scopus
- 4\] Title : Efficient Message Transmission Using Hybrid Cryptography Authors : Jayanthkumar A Rathod , Chandana P T,  Keerthana G ,  Shwetha R Sharma Conference: 2024 Second International Conference on Advances in Information Technology (ICAIT) ,      DOI:[10.1109/ICAIT61638.2024.10690379](https://doi.org/10.1109/ICAIT61638.2024.10690379)   Scopus Indexed
- 5\] Title : Diabetic Retinopathy Prediction using Modified Inception V3 Model Structure Author : Shwetha, G.K.; Udaya Kumar Reddy, K.R.; Rathod, J.A.; Sathyaprakash, B.P.; Lolakshi, P.K. Journal :    International Journal of Intelligent Systems and Applications in Engineering ( ISSN: 2147-6799)  Scopus Q3 , Vol. 11 No. 1 (2023)
- 6\] Title – Controlling The Micro Air Vehicle Through Voice Instructions Authors :  Mallesh Babu S, Mr. Lokesha H, Mrs.Veena S, Mr. Jayantkumar.A.Rathod, International Journal of Computer Engineering and Technology (IJCET), India, April 2015, Volume 6, Issue 4, pp. 21-27, ISSN 0976-6367(Print),  ISSN 0976 – 6375(Online).
- 7\] Title : A Novel Framework For Network Based Secure Message Transmission  Based On Fragmentation And Cryptography Authors :  Rathod, J.A.; Kotari, M. Conference : 4th International Conference on Circuits, Control, Communication and Computing, I4C 2022  (DOI: [10.1109/I4C57141.2022.10057754](https://doi.org/10.1109/I4C57141.2022.10057754) ) (ISBN: 9798350397475 ) Scopus Indexed
- 8\]  Title – Design Of Speech Based Ground Control Station For Controlling The Micro Air Vehicles Authors :  Babu S Mallesh, H.Lokesh , S.Veena ,  Jayantkumar A Rathod, 978-1-4673-6994-7/15  2015 IEEE DOI [10.1109/ICACC.2015.10](https://doi.org/10.1109/ICACC.2015.10), Scopus Indexed 2015 Fifth International Conference on Advances in Computing and Communications.
- 9\] Title – Driver Drowsiness Detection System Based On Visual Features Authors : Fouzia, Roopalakshmi R, Jayantkumar A Rathod, Ashwitha S Shetty, Supriya k 978-1-5386-1974-2/18/$31.00 ©2018 IEEE , Proceedings of the 2nd International Conference on Inventive Communication and Computational Technologies (ICICCT 2018) IEEE Xplore Compliant – Part Number: CFP18BAC-ART;       ISBN:978-1-5386-1974-2.  Scopus Indexed
- 10\] Title : Sentiment Analysis Of Smartphone Product Reviews Using Weightage  Calculation Authors : Jayantkumar A. Rathod, Shetty Vignesh, Aishwary J. Shetty, Pooja and Nikshitha © Springer Nature Singapore Pte Ltd. 2020 H. Sharma et al. (eds.), Advances in Computing and Intelligent Systems, Algorithms for Intelligent Systems, [https://doi.org/10.1007/978-981-15-0222-4\_40](https://doi.org/10.1007/978-981-15-0222-4_40)
- 11\] Title : Detection Of Diabetic Retinopathy Using Support Vector  Machine Authors :  Sahana Shetty , Kaveri B Kari , Jayantkumar A Rathod International Journal of Emerging Technologies in Computer Science & Electronics (IJETCSE) ISSN : 0976-1353 , Volume 23 , Issue 6-October 2016 (Special Issue) . P.No – 207-211
- 12\] Title : Histopathological Image Classification Of Breast Cancer Using Kervolutional Neural Networks Authors – Jayantkumar A Rathod , Darshan P B , Rakesh M R , Akshaya Shenoy , Acharya Sainath International Journal of Advanced Science & Technology(IJAST) Vol.29,No.3,(2020)   ISSN:2005-4238 IJAST
- 13\] Title : Retrieval Of The Reliable Data In Disruption Tolerant Networks Authors : Jayantkumar A Rathod , Gagana N International Journal of Engineering Research , Volume No.4, Special Issue 3 ISSN : 2319-6890 (online),2347-5013(print)
- 14\] TITLE : Active Prediction Of Heart Disease Using Techniques Of  Hybrid Machine learning Authors : Jayantkumar A Rathod , Apoorva R , M.Ramakrishna , Gowthami H R , Rachana T International Journal of Engineering an Advance Technology (IJERT) ISSN : 2249-8958 , Volume-9 , Issue-5 , June 2020
- 15\] Title : Review On Reconstruction Of Face Images Authors – Darshan P B,  Jayantkumar Arjun Rathod, Rakesh M R, Acharya Sainath Balakrishna, Akshaya Shenoy IJRAR- UGC Approved (International Journal of Research and Analytical Reviews (IJRAR) June 2018, Volume 5, Issue 3  www.ijrar.org (E-ISSN 2348-1269,   P- ISSN 2349-5138
- 16\] Published paper in IGI Global Scientific Publishing (Book Chapter Series) – Title : Monitoring Vehicle Emissions Through Intelligent Transportation Systems for Smart City Development.      DOI:[10.4018/979-8-3373-8133-6.ch003](https://doi.org/10.4018/979-8-3373-8133-6.ch003)
- 17\] Title : Multi-Pose Virtual Try-on with Identity and Clothing Detail Preservation Using ResNet, VGG19 and  MobileNet Authors : Jayantkumar A Rathod; Anusha N T; Jahnavi V; Jayaprakash P; Vimalkumar U R; Shwetha G K Published in: 2025 International Conference on Electronics, Computing, Communication and Control Technology (ICECCC).   Publisher: IEEE ,   DOI: [10.1109/ICECCC65144.2025.11064269](https://doi.org/10.1109/ICECCC65144.2025.11064269). SCOPUS
- 18\]  Title : Transforming Education with Innovative Virtual Learning Environments. Authors : G K Shwetha; Pratham S Shetty; Samarth N Baliga; Jayant Kumar A Rathod; C Divya Published in: 2024 International Conference on Recent Advances in Science and Engineering Technology (ICRASET)   Publisher : IEEE  .  DOI: [10.1109/ICRASET63057.2024.10894905](https://doi.org/10.1109/ICRASET63057.2024.10894905) SCOPUS
- 19\] Title : Plant Leaf Disease Detection using Machine Learning. Authors : Jayant Kumar Rathod, MR Nandan 15th International Conference on Advances in Computing Control and Telecommunication Technologies Act 2024. ( Journal : Grenze International Journal of Engineering & Technology (GIJET) ) SCOPUS
- 20\] Title : Efficient Message Transmission Using Hybrid Cryptography Authors : Jayanthkumar A Rathod; Chandana PT; Keerthana G; Shwetha R Sharma; Swetha S 2024 Second International Conference on Advances in Information Technology (ICAIT) 24-27 July 2024    DOI: [10.1109/ICAIT61638.2024](https://doi.org/10.1109/ICAIT61638.2024)  Publisher : IEEE    SCOPUS

### Membership in Professional Bodies

- ISTE

### Honours / Awards / Achievements

- Served as Reviewer in the 2nd IEEE International Conference on "Advances in information Technology (ICAIT-24) organized by the Department of Computer Science and Engineering, Adichunchanagiri Institute of Technology, Chikkamangaluru ,Karnataka during 24th to 27th July 2024.
- Received certificate of appreciation letter from AIET , Moodabire , for acting as chair for session on " Computer Vision , Graphics and Image Processing" in the 4th International Conference on Applied and Theoretical Computing and Communications Technology from 6-8 Sep 2018.
- Received certificate of appreciation letter from Indian Science & Engineering Fair (INSEF) Level 2 ,  from 20-21 May 2021 , hosted by AEF , Moodabidre, for judging the projects.
- Received certificate of appreciation letter from Sahyadri College of Engineering & Management for being a part of TECHVISION-2016, an intra-college project exhibition.
- Received certificate of appreciation letter from Department of ISE , SDIT , Mangalore , for  Judging the Technical  Presentation event on 22/Feb/2018.

### FDPs / Conferences / Workshops / STTP / MOOC Certification

**FDPs / Workshops**

1. Attended five days FDP on " Applications of artificial Intelligence in Brain-Computer Interface" organized by Dept of ECE, SR university , hanumakonda , from 9-05-2022 to 13-05-2022.
2. Attended five days FDP on " Next Generation Wireless Network for Autonomous Intelligent Communication " organized by Dept of ECE, Sri Venkateshwara College of Engineering , Bengaluru, from 26-12-2022 to 30-12-2022.
3. Participated one week online FDP on " Exemplary Practices in Teaching and Evaluation of Courses in Computer Science & Information Technology " jointly organized by VTU and IIIT , Allahabad , from August 3-7,2020.
4. Completed successfully AICTE Training And Learning (ATAL) Academy Online FDP on "Block Chain " from 3/11/2020 to 7/11/2020 at MCE , Hassan.
5. Participated an successfully completed online FDP on "Inculcating Human Universal Values in Technical Education" organized by AICTE from 3-7 May 2021.
6. Participated in Five Days Online FDP on "Contemporary Research Trends in Electronics & Communications , and Computer Science ' organized by VTU , Centre for PG , Kalaburgi in Association with IETE from 06/July/2020 to 10/July/2020.
7. Participated in Five days FDP in online mode on " Emerging Cyber Security Trends- A Hands-On Approach" held from 20-24 July 2020 , organized by School of Engineering , Dayananda Sagar University , Bengaluru.
8. Participated in Five Days online FDP on " Emerging Trends in Information Technology 2021" From 15-19 March 2021 , organized by SJEC , Mangalore.
9. Attened 2 days FP on " Brain Train for Effective Teaching "from 5-Feb-2007 to 6-Feb-2007 organized by ISTE-CIT chapter  in association with CITRIS Tumkur.
10. Attended 4 days FDP on " CRYPTOGRAPHY "  from 6th  to 9th  Aug-2007 organized by ISTE-CIT chapter in association with CITRIS, Tumkur.
11. Attended online ATAL FDP on " Emerging Trends in Artificial Intelligence for Smart Innovation and Sustainable Technologies in Industry 4.0 "  at    P.D. A. COLLEGE OF ENGINEERING  from 01/09/2025 to 06/09/2025.
12. Attended online (ATAL) Academy Faculty Development Program on " Digital Forensics in Cyber Security"  at ALVA'S INSTITUTE OF ENGINEERING AND TECHNOLOGY  from 05/01/2026 to 10/01/2026.

**MOOC Certificates**

1. NPTEL Online Certification Course on " Soft Skill Development" , 8 weeks course (Jul-Sep 2025)
2. NPTEL Online Certification course on " Introduction to Research" , 8 week course (Sep-Nov  2020) with Elite Certificate.
3. Completed online Coursera Course Certificate on "Understanding Research   Methods"   9th -Aug-2020.
4. Completed online Coursera Course Certificate on " Getting Started with AWS Machine Learning" , 30/May/2020.

### Patent

- NIL

### Roles and Responsibilities: Institute Level

1. Worked as Head of the Department.
2. Organized FDP at the college level.
3. NAAC Criterion 1 coordinator.
4. Worked as coordinator for NBA Criterion 1.
5. Attended BOE Meeting at NMAMIT , Nitte, for M.Tech in Software Engineering for 2015-16
6. Attended BoS meeting  for B.Sc in Computer Science  at Adichunchanagiri School of Natural Science , Bellur Cross.  2025-26.
7. Organized inter college level technical activity.

### Roles and Responsibilities: Department Level

1. Organized Workshops for Students and Faculties in the department.
2. Organized Industrial visits for students.
3. Mentoring of students.
4. Organized FDP in the department.
5. Organized technical events in the department.
`,
  },
  "arpitha-a": {
    name: "Mrs Arpitha A",
    url: "https://atme.edu.in/arpitha-a/",
    md: `### Professional Experience

- Industry: Nil
- **Teaching: 5 Years:** Research: 1 Year | Industry:Nil

### Contact Details

- **Email ID:** arpithaa.cs@atme.edu.in | arpithagayithri@gmail.com
- **Vidwan ID:** 656723
- **Google Scholar ID**
- **Scopus ID**
- **Orcid ID:** https://orcid.org/0000-0002-6456-4409
- **Web of Science Researcher ID:** KDN-9016-2024
- **LinkedIn ID:** https://www.linkedin.com/in/arpitha-a-11aa33250

### Academic Details

**Qualification**

- Pursuing Ph.D. in Visvesvaraya Technological University, Belagavi
- MTech in Computer Science and Engineering
- B.E in Computer Science and Engineering

### Areas of Interest

- Artificial Intelligance and Machine Learning
- Cybersecurity
- Computer Network

### Publication Details

- NIL

### Membership In Professional Bodies

- NIL

### Honours/Awards/ Achievements

- Qualified the K-SET for eligibility for Assistant Professor held on 24th
- Nov 2024 in the subject Computer Science and Applications.

### FDPs/Conferences/Workshops/STTP/MOOC Certification

- Attended 3 days FDP on Dynamics Of Teaching and Learning organized by CCTL,VVCE,Mysuru in association with XPLearn,Bangalore.
- Undergone 1 week Industry Immertion Program on “Home Automation” by KGTTI,
- Presented a paper titled “Video-Surveillance-and-tracking system using facial recognition” in International Conference of IEEE Mysurucon 2024,hosted by the Department of Computer Science and Engineering, Vidya Vikas Institute of Engineering and Technology, Mysuru, on 30thand 31st August 2024.
- Attended the Workshop on “Big Data Analytics and Hadoop” conducted by Geekslab Technologies at T.U PG Centre, Mysuru.
- Presented a paper titled “Women Security Application” in International Conference on “Computer Communications and Networks”(i3CN – 2015), Conducted by the Department of Computer Science and Engineering, Coorg Institute of Technology, Ponnampet, on 8th May 2015.
- Presented a paper titled “Women Security Application” in National Conference on Recent Advances in Computing, Informatics Communication and Application”(NCRACICA-2015),conducted by GSSS Institute Of Engineering & Technology Mysore in association with Computer Society Of India, on 23rd May 2015.
- Three-days FDP Research Methodology in Cybersecurity with hands-on session on Novel tools for Model validations organized by Department Of ISE NIE,Mysuru.
- Five-days FDP on Sales Force platform organized by the Department of CSE VVCE,Mysuru.
- Six-days FDP on Design Thinking for product development organized by the Department of EEE VVCE,Mysuru.
- Five-days FDP on Exploring ReactJS and building Future with IoT organized by Department Of ISE NIE,Mysuru.
- Organized two days Workshop on Software Testing in the department Of Computer Science and Engineering VVCE,Mysuru.
- Organized a technical talk on Software Development using Agile Technology in the department Of Computer Science and Engineering VVCE,Mysuru.
- Completed a course “Introduction to Robotic Process Automation”, from Infosys Springboard.
- Completed a course “Exploratory Data Analysis for Machine Learningy”,from IBM offered through Coursera.

### Proposal/Funding/Project Financial Assistance

- NIL

### Patent

- NIL

### Roles and Responsibilities: Institute Level

- NIL

### Roles and Responsibilities: Department Level

- NIL
`,
  },

  "bhavya-dechamma-k-s": {
    name: "Ms Bhavya Dechamma K S",
    url: "https://atme.edu.in/bhavya-dechamma-k-s/",
    md: `**Faculty Name: Bhavya Dechamma K S**

**Designation: Assistant Professor**

**Program: Computer Science and Engineering**

### Contact Details

- **Email ID:** Official: bhavyadechammaks.cs@atme.edu.in | Personal: bhavdechamma@gmail.com
- **Vidwan ID:** 664385
- **Google Scholar ID:** –
- **Scopus ID:** –
- **Orcid ID:** 0009-0005-8039-9174
- **Web of Science Researcher ID:** PGL-6704-2026
- **LinkedIn ID:** www.linkedin.com/in/bhavya-dechamma-ks (http://www.linkedin.com/in/bhavya-dechamma-ks)

### Academic Details

**Qualification**

- MTech in Computer Science & Engineering, Vidyavardhaka College of Engineering, Mysuru – 2025
- B.E in Computer Science & Engineering, Coorg Institute of Technology, Ponnampet, Kodagu – 2023

### Areas of Interest

- Cyber Security
- Deep Learning

### Publication Details

- Bhavya Dechamma K S, Ayesha Taranum “Enhancing stroke diagnosis: A deep learning approach to analyze neuroimages” was presented at 2nd International Conference on Recent Trends in Electrical, Electronics and Computing Technologies on 30th Oct 2025.

### Honours/Awards/ Achievements

- NIL

### FDPs/Conferences/Workshops/STTP/MOOC Certification

- NPTEL course on Distributed Systems
- Deep Learning – 3 days’ workshop at Vidyavardhaka college of Generative AI Workshop.
- 6 days Faculty Development Programme on Cybersecurity at NITK, Surathkal.

### Proposal/Funding/Project Financial Assistance

- NIL

### Patent

- NIL

### Roles and Responsibilities: Institute Level

- NIL

### Roles and Responsibilities: Department Level

- NIL
`,
  },

  "bindushree-v": {
    name: "Mrs. Bindushree V",
    url: "https://atme.edu.in/bindushree-v/",
    md: `### Professional Experience

- Teaching: 6.5 Years
- Research: 1 Year
- Industry: 1 Year

### Contact Details

- **Email ID:** Official: | Personal:
- **Vidwan ID:** 542939
- **Google Scholar ID:** https://scholar.google.com/citations?user=z4oR0sYAAAAJ&hl=en&authuser=2
- **Scopus ID:** https://www.scopus.com/authid/detail.uri?authorId=59427021500
- **Orcid ID:** https://orcid.org/0000-0003-2950-1688
- **Web of Science Researcher ID**
- **LinkedIn ID:** https://www.linkedin.com/in/bindushree-v-62b33b19b/

### Academic Details

**Qualification**

- Pursuing Ph.D. in Medical Image Processing
- MTech in Computer Science and Engineering
- B.E in Information Science and Engineering

### Areas of Interest

- Gen AI
- Image Processing

### Publication Details

- Presented a Paper “AI-Driven Multimodal Primary Forecast of Sudden Cardiac Arrest (SCA): A Comprehensive Examination” Organized by International Conference on Artificial Intelligence in Engineering Systems (ICAIES 2025).
- Investigation of Convolution neural network with motor imagery brain computer interface decoding at the Fourteenth International Conference on “Advances in Computing, Control, and Telecommunication Technologies – ACT 2023” organized by Rajeev Institute of Technology, Hassan-573201
- Pedestrain Walk Exposure System through Multiple Classifies” Published in IRJET Volume 6 Issue 9 Sep- 2019.
- “Consciousness about Mobile App Permissions” published in (IJRTE)’, ISSN: 2277-3878 (Online), Volume-8 Issue-4, November Page No.: 11384-11386.
- “Analysis of Text recognition with data mining techniques” International Journal of Scientific Research in Image Processing Vol.5, Issue.3, pp.1-5 Nov-2019, E-ISSN: 2320-
- “Securing MWSNs using Game Theory and Multiple Evidence Approach” published in ISROSET Vol.7, Issue.6, Dec-2019.

### Membership in Professional Bodies

- Indian Society for Technical Education (ISTE).
- Information Systems Audit and Control Association (ISACA).
- International Association of Engineers (IAENG).

### FDPs/Conferences/Workshops/STTP/MOOC Certification

- Successfully completed Wipro training and certified as Java Educator.
- successfully completed the workshop on Microsite Creation on Infosys
- Successfully completed the course Version control with git organized by Infosys Springboard.
- Participated in Honeywell India Youth Teckathon 2023–BOT Building Competition held on Aug 2023.
- Participated and successfully completed One Week AICTE–VTU Joint Teachers Training Programme on “Introduction to Internet of Things (IoT)” from 17th to 21st April 2023 Organized by Visvesvaraya Technological University, Centre for PG Studies, VIAT, Muddenahalli, Chikkaballapur (Dist.) – 562101.
- Successfully completed the course on Microsoft Azure under ICT Academy for Educators.
- Successfully completed the course on Cyber Security under Microsoft Cybershikshaa for Educators Program held from 03 Jan 2023 to 12 Jan 2023
- Successfully completed Microsoft India SAP India led Faculty Development Program on “Artificial Intelligence” under TechSaksham Program from 19th Dec 2022 to 23rd Dec 2022”.
- Successfully completed three weeks national level workshop on Research Methodology from 28-11-22 to 17-12-22.
- Successfully completed a one–week AICTE- ISTE Sponsored Refresher Program on “Design Thinking” held during 07th March 2022 to 12th March 2022, organized by the VTU e- learning center, Mysuru and Vidyavardhaka College of Engineering, Mysuru.
- Participated in the International Webinar on the theme “IIOT – Real Time Approach”, RVS College of Engineering on 13.06.2020
- “Online Faculty Development” Program Department of Computer Science & Engineering Jain on May 23, 2020.

### Honours/Awards/ Achievements

- Best Presentation award for Facial Emotion Recognition using Deep learning methods” at the 11th National Conference on Advancements in Information Technology NCAIT-2025.
- My idea “AI Powered Personalized Healthcare Assistant System” was accepted by Government of Karnataka for Implementation.
- Participated in Faculty Hackathon Conducted by Amity University Greater Noida, Delhi which will be patented soon.
- Cleared NET exam with 77 Percentile.

### Patents

- Applied “AI-Powered Intelligent Mobile Application for Government Schemes Integration and Personalization-2025” (SW-23803/2025-CO)
- Title Of Design of Secure IoT Healthcare Architecture with Deep Learning based Patent by IPR-2023(202341017236)

### ROLES AND RESPONSIBILITIES: DEPARTMENT LEVEL

- 1. Internship Coordinator 2. Technical Event Coordinator
`,
  },

  "darshini-m-s": {
    name: "Mrs Darshini M S",
    url: "https://atme.edu.in/darshini-m-s/",
    md: `### Professional Experience

- Teaching: 4.3 Years
- Research: 0
- Industry: 0

### Contact Details

- **Email ID:** Official: darshinims.cs@atme.edu.in | Personal: darshinisuresh3095@gmail.com
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/651230
- **Google Scholar ID:** https://scholar.google.com/citations?view_op=list_works&hl=en&user=hpaOluUAAAAJ
- **Web of Science:** Web of Science ResearcherIDPGL-6582-2026
- **Orcid ID:** https://orcid.org/0009-0002-6526-9919

### Academic Details

**Qualification**

- M.Tech in Computer Science & Engineering from VTU PG Studies,2019
- B.E in Computer Science & Engineering from ATME College of Engineering, 2017.

### Areas of Interest

- Cloud Computing Platforms
- Data MiningIoT

### Publication Details

- Published a journal paper on “An Integration of Inductive Sensors and Development of Androidbased Application Technology” on (IRJET) e-ISSN: 2395-0056 Volume: 11 Issue: 03 | Mar 2024.
- Published a paper titled “Analysis of Human Activity Detection Using Machine Learning”in Scopus Index Journal, 2022
- Published a paper titled “Airport Baggage Conveyor and voice notification using Android”in International Journal of Emerging Technologies and Innovative Research , vol 5 issue 5, 2019.
- Published a paper titled “Real Time Anti Smuggling System” in International Journal of Advanced Research in Computer and Communication Engineering, vol 8 issue 2,2019.
- Published a paper titled “Vehicle Emission Detection Using Wireless Sensor Networks” in International Research Journal of Engineering and Technology, vol 5 issue 5,2019.
- Published a paper titled “Survey paper on Airport Baggage Conveyor “ in Journals of Emerging Technologies and Research, vol 6 issue 6,2019.
- Published a paper titled “Multi Distance Smart Stick for Blind” in Journals of Emerging Technologies and Research, vol 6 issue 6,2019

### Membership in Professional Bodies

- NIL

### FDPs/Conferences/Workshops/STTP/MOOC Certification

- Completed NPTEL MOOC Course on “Introduction to Internet Of Things”
- Attended 7 days faculty development activity on “Programming Fundamentals using Python” from 15th oct 2022 to 21st oct 2022
- Attended 5 days faculty development activity on “Pathological speech signal processing: Challenges Opportunities and future directions from 2nd march 2022 to 5th march 2022.“Airport Baggage Conveyor and voice notification using Android”-National Conference on Computer Science and Management Applications (NCCSMA)“.

### Honours/Awards/ Achievements

- NIL

### Patent

- NIL

### Roles and Responsibilities: Institute Level

- NIL

### Roles and Responsibilities: Department Level

- NIL
`,
  },

  "dr-drakshayini-k-b": {
    name: "Dr. Drakshayini K B",
    url: "https://atme.edu.in/dr-drakshayini-k-b/",
    md: `### Professional Experience

- Teaching: 15
- Research: 1 year
- Industry: 3.5
- **Teaching: 15 Years:** Research:1 year | Industry: 3.5 Years

### Contact Details

- **Email ID:** Official: Dr.Drakshayinikb.cs@atme.edu.in | Personal: drakshakb@gmail.com
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/663728
- **Google Scholar ID:** https://scholar.google.co.in/citations?user=kD_lyp8AAAAJ
- **Scopus ID:** https://www.scopus.com/authid/detail.uri?authorId=58880445300
- **Orcid ID:** https://orcid.org/0000-0002-4860-2890
- **Web of Science Researcher ID:** https://www.webofscience.com/wos/author/record/IVH-6927-2023–
- **LinkedIn ID:** https://www.linkedin.com/in/dr-drakshayini-k-b-a1b961128/

### Academic Details

**Qualification**

- PhD. in Computer Science, VTU, Mysore – 2024
- MTech in Computer Network Engineering, NIE, Mysore, VTU- 2014
- B.E in Information Science & Engineering, VVCE, Mysore, VTU – 2007

### Areas of Interest

- Speech signal Processing
- Ethical hacking
- Image Processing
- Artificial Intelligence and Machine learning

### Publication Details

- B. Drakshayini, M. A. Anusuya, and H. Y. Vani, Chayadevi M L,” Detection of Stuttered Speech with Repetition Using Wavelet Packet Transformation and Neuro Fuzzy Classifier”, SN computer Science, Springer Nature journal ,2025 Available at: https://doi.org/10.1007/s42979-025-03958-7
- B. Drakshayini, M. A. Anusuya, and H. Y. Vani,” WSOLA for Reconstruction of Prolonged Speech Signal “, International Journal of Fuzzy Logic and Intelligent Systems”, vol. 23, No. 4, December 2023 Available at: https://doi.org/10.5391/IJFIS.2023.23.4.399
- K B Drakshayini, Anusuya M A, “Repetition Detection using Spectral Parameters and Multi tapering features” Indian Journal of Computer Science and Engineering (IJCSE), ISSN:0976-5166, August 2023 Available at: https:/ [/www.ijcse.com/docs/INDJCSE23-14-04-068.pdf](http://www.ijcse.com/docs/INDJCSE23-14-04-068.pdf)
- K B Drakshayini, Anusuya M A, “Hybrid Approach to Detect Prolonged Speech Segments”, International Journal of Engineering and Advanced Technology (IJEAT), ISSN: 2249-8958 (Online), Volume-12 Issue-4, April 2023 Available at: https://doi.org/10.35940/ijeat.d4106.0412423
- K Drakshayini, M A Anusuya,” Speech Disorders: A Compendious Review “, Zeichen Journal, DOI:15. 10089.ZJ. 2023.V09I04.285311.3101, Volume 09, Issue 04, March 2023 Available at: https://drive.google.com/file/d/1xk6sCgTnZGYqmvDpSujAFZaNtoN7k8fk/view
- B.Drakshyini , Anusuya M A, “Stop gap removal using spectral parameters for stuttered speech signal” in WARSE The World Academy of Research in Science and Engineering, IJATSCE, May 2021 Available at: [http://www.warse.org/IJATCSE/static/pdf/file/ijatcse521032021.pdf](http://www.warse.org/IJATCSE/static/pdf/file/ijatcse521032021.pdf)
- B.Drakshyaini , Anusuya M A, “Vector Quantization for stuttered speech Recognition” Journal of Data Mining and Management \[ISSN: 2456-9437\] NCAIT 2018 \[Awarded with best Paper of the conference\] May 2018 Available at: https://matjournals.co.in/index.php/JOIPAI/article/view/4977
- K B Drakshayini,“A survey on Women Entrepreneurship in India “Paper Published in International Journal of Science and Research Volume – 3, Issue 10, October 2014 Available at: https:/ [/www.ijsr.net/archive/v3i12/U1VCMTQ1ODM=.pdf](http://www.ijsr.net/archive/v3i12/U1VCMTQ1ODM%3D.pdf)

### Membership In Professional Bodies

- NIL

### Honours/Awards/ Achievements

- B.Drakshayini , Anusuya M A, “Vector Quantization for stuttered speech Recognition” Journal of Data Mining and Management [ISSN: 2456-9437]
- NCAIT 2018 [Awarded with best Paper of the conference ] May 2018
- Reviewer of International conference 4th International Conference on Emerging Research in Computing, Information, Communication and Applications (Springer) ERCICA 2016.
- Question Paper Setting for Judge for Cultural event at JSSSTU, Mysore as a part of “Suttur Jatra Mahotsav”
- Guest Lecture on “Computer networks” in Vidya Vardhaka College, Mysore
- Conducted workshop “Apex Application development” for Computer Science and Engineering department, JSSSTU, Mysore

### FDPs/Conferences/Workshops/STTP/MOOC Certification

- Train The Trainer(TTT) program on creating micro sites on Infosys springboard conducted by Infosys on 2021
- Faculty Development program on “Artificial Intelligence and its Applications” organized by SJCE on 2021
- Faculty Enablement program on “Python Programming through INFYTQ platform “by Infosys on 2020
- Two days Faculty development programme on “Speech signal processing and its application “at SJCE on 2015
- Attended and Presented a paper on “SURVEY ON TRAFFIC MANAGEMENT FOR HIGH SPEED on 2014
- DISTRIBUTED NETWORKS” Proceedings of the 2nd
- International Conference on Current Trends in Engineering and Management ICCTEM at VVCE, Mysore on 2014
- Workshop on “C++” conducted by Manjunath Aradhya, Srinivas Subramanya & Ravishankar Aradhya at VVIET, Mysore on 2013
- Certificate of achievement awarded for the participation in EHACK Webinar of “EHACK2013 World’s Largest Information Security Marathon “on 2013
- “InFacE -Industry update for Faculty Enrichment” in association with IEEE consumer Electronics Society, Bangalore Chapter on 2013
- “Faculty development programme” by Dr. shailaja and Swarna on  2013
- “Ruby on Rails “and Ubuntu 04” organized by the CSI student chapter on 2013
- “Recent Trends in Image Processing and Its Applications “FDP organized by CS&E dept, VVIET Mysore on 2013
- Certification Courses
- LATEX certification by Spoken Tutorial Project, IIT Bombay, funded by National Mission on Education through ICT, MHRD, Govt., of India
- GIAN certification on course “Interactive Machine translation” by MHRD
- Oracle APEX cloud developer certified Professional
- Oracle certified Associate ,Java SE 8 Programmer
- Oracle Database PLSQL Developer certified Professional
- Oracle Database SQL certified Associate

### Proposal/Funding/Project Financial Assistance

- NIL

### Patent

- NIL

### Roles and Responsibilities: Institute Level

- Coordinated for NBA and NAAC

### Roles and Responsibilities: Department Level

- Coordinated student recruitment and placement activities as department placement coordinator
- Organized Innovative technical events like seminar, workshop and competitions as department technical
- Providing a guidance to the students for developing their career as well as making them familiar with different career opportunities
- As Teaching learning Process coordinator handled work of mentoring the assistant teachers
- Coordinating for NBA and NAAC
`,
  },

  "dr-putte-gowda-d": {
    name: "Dr. Puttegowda D",
    url: "https://atme.edu.in/dr-putte-gowda-d/",
    md: `### Professional Experience

- Teaching: 21
- Research: 6
- **Teaching:  21 Years:** Research: 6 Years | Industry: 2 Years

### Contact Details

- **Email ID:** Official: dr.puttegowdad_cs@atme.edu.in | Personal: pgdatme@gmail.com
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/266958
- **Google Scholar ID:** https://scholar.google.co.in/citations?user=xNU5z3UAAAAJ
- **Scopus ID:** https://www.scopus.com/authid/detail.uri?authorId=57192094347
- **Orcid ID:** https://orchid.org/0000-0001-5547-0761
- **Web of Science Researcher ID:** –
- **LinkedIn ID:** https://www.linkedin.com/in/dr-puttegowda-d-703081100/

### Academic Details

**Qualification**

- Ph.D. in Computer Science, University of Mysore, Mysore – 2017
- M.Tech in Computer Science & Engineering, PES College of Engineering, Mandya, VTU- 2005
- B.E in Computer Science & Engineering Ghousia College of Engg., Ramanagarm , Bangalore University – 1999

### Areas of Interest

- Image/ Video Processing
- Data Mining

### Publication Details

- Puttegowda, D., Dayananda, K.J., “Color K-means, Gaussian Filter and Aperture Concept for Text Localization in Images” th International Conference on Advances in Computing, Control, and Telecommunication Technologies, ACT –June 2023, pp. 844-848
- Puttegowda, D., Harsha, A.B., Bhaskar, H.N., …Deepika, D., Monika, B.V. “Deep Learning based Container for Text Recognition” th International Conference on Advances in Computing, Control, and Telecommunication Technologies, ACT –June 2023, pp.920-926
- Rajeshwari D , D , “ Modeling a Functional Engine for the Opinion Mining as a Service using Compounded Score Computation and Machine Learning”  _International Journal of Advanced Computer Science and Applications_ _(IJACSA),_ _Vol. 12, No. 3, 2021_
- Sayeda Umera Almas, Puttegowda D Ocean Coefficient: A Feature Extraction Technique for Five Factor Model based Classifications, International Journal of Engineering and Advanced Technology (IJEAT) ISSN: 2249 – 8958, Volume-9 Issue-4, April 2020
- Sayeda Umera Almas, Puttegowda D Five Factor Model of Personality Trait Analysis on Twitter Data using Benchmark Classifier International Journal of Innovative Technology and Exploring Engineering (IJITEE) ISSN: 2278-3075, Volume-9 Issue-6, April 2020
- Dayananda K J, Puttegowda D “Performance Analysis of Color K-Means and Range Filter for Text Detection in Images or Video”, International Conference on Recent Trends in Science and Technology 2020 (ICRTST 2020), June 16,17, 2020.
- Puttegowda D, Sandya G B, Supreeth H,Thejas D, Vivechan B “Object Detection Through Symbiotic Deep Learning: Detection And Recognition On Resource Constrained Device”, International Conference on Recent Trends in Science and Technology 2020 (ICRTST 2020), June 16,17, 2020.
- Dr Puttegowda D and Dr. Padma M C, A Video Mining Framework for Event Classification using Semantic Vocabulary Learning, IEEE International Conference on New Trends in Engineering and Technology (ICNTET-2018), 7th and 8th September
- Dr Puttegowda D, Mohanesh Bevoor Mahalingappa and Shrinivasa G, Mathematical Principle Of Index of Co-Incidence And Rook Polynomial To Identify Frequent Item-set Distribution In Super Market, 2018 3rd IEEE International Conference on Recent Trends in Electronics, Information & Communication Technology (RTEICT-2018), 18th and 19th MAY 19th 2018.
- Puttegowda D and Suma A P, Detection and Classification of Human Action Events from Captured Video Streams, International Journal of Scientific Research in Computer Science, Engineering and Information Technology, Volume-3, Issue -1, PP:1870-1875, ISSN : 2456-3307, Feburary-2018
- Puttegowda D, Mohaneesh B M and Anil Kumar C J, “Mathematical Logic and Logical Equivalence Implementation to find the Intermediate Key Management for DES Encryption Algorithm” 6thWorld Conference on Applied Science and Engineering(WCASET), Goa, January-2018
- Puttegowda D and Dr. M C Padma, “Human Motion Detection and Recognising their Actions from the Video Streams”International Conference on Informatics and  Analytics (ICIA’16), Pondicherry, DOI: http://dx.doi.org/10.1145/2980258.2980290,  August-2016
- Puttegowda D and Dr. M C Padma, “A Framework for Event Classification from Video Sequences using Bayesian Neural Network”, Communications on Applied Electronics (CAE), Volume: 05, Issue: 02, Pages:1-5, DOI: [10.5120/cae2016652229](https://doi.org/10.5120/cae2016652229), ISSN : 2394 – 4714, May,2016
- Puttegowda D and Dr. U N Sinha, “A Framework for Anomaly Event Detection by Analysing the Video Sequences” , International Journal of Advanced Networking And  Applications(IJANA), pp 339-344, ISSN: 0975-0282, May special Issue-2016
- **Puttegowda D and Dr. U N Sinha, “** **A Framework for Anomaly Event Detection by Analysing the Video Sequences” 1st International Conference Innovations in  Computing & Networking  (ICICN 2016), Bangalore, May-2016**
- Puttegowda D and Dr. U N Sinha, “Video Anomaly detection using Block based Approaches”  National conference on Advances in Computing Technology, KSSEM, Bangalore, 2015
- Puttegowda D and Dr. U N Sinha, “Analysis of video sequences for anomaly detection using block based approaches ”, International Journal  of Advance Engineering and Research Development, Volume02, Issue 11, pp 411-418, ISSN (Online): 2348-4470  ISSN (P):2348-6406, November 2015
- Puttegowda D and Deepak N.A “Performance Evaluation of Parallel Mining for Association Rules using Aprior Algorithm”, NCETIT-2012, at DBIT, Bangalore on May-2012
- Puttegowda D, “Performance Evaluation of Sequential and Parallel Mining for Association Rules using Aprior Algorithm” IEEE International Conference on Recent Trends in Soft Computing and Information Technology ( RTSCIT-09) at Corporate Institute of Science & Technology, Bhopal, 2010
- Puttegowda D, “Sequential and fast parallel algorithm for mining association rules”, Journal of Intelligence System Research, Volume: 4, Issue No:1, Article No: 6, 2010
- Puttegowda D, Deepak N.A and Rajesh Shukla, “Robust Image Transmission over Nose Channel using Independent Component Analysis”, International Journal of Advanced Networking & Application, Volume: 01, Issue: 06, Pages:347-352 (2010)
- Puttegowda D, Rajesh Shukla and Deepak N.A “Performance Evaluation of Sequential and Parallel Mining for Association Rules using Aprior Algorithm”, International Journal of Advanced Networking & Application, 2010 **.**

### Membership in Professional Bodies

| Sl. No | Name of Society | Membership Number |
| --- | --- | --- |
| 1 | MISTE | LM 116840 |
| 2 | CSI | L1503790 |
| 3 | The Institute of Engineers (India) IEI | AM099859-4 |
| 4 | IEEE | 96882282 |

### FDPs/Conferences/Workshops/STTP/MOOC Certification

- Participated in Science and Engineering Research Board(SERB),New Delhi Sponsored 3-Day National Seminar on “Research Avenues in Artificial Intelligence and Allied Areas” from 24thto 26th March 2022 in ATMECE, Mysuru
- One Day National Level Online FDP on “New Avenues and Role of Faculty in Effective Implementation of NEP-2020 in HEIs” organized by ATME College of Engineering, Mysuru on 29th January 2021
- Webinar on “Scientific writing for Journals” organized by Springer Nature in collaboration with Visvesvaraya Technological University Consortium on Sep 30, 2020
- NBA Awareness Webinar on Outcome Based Education and Accreditation from, ATME COLLEGE OF ENGINEERING MYSURUon 20th October 2020, jointly organized by National Board of Accreditation, New Delhi and Visvesvaraya Technological University, Belagavi for the Engineering Colleges and Deemed to be Universities in Karnataka.
- Three Days Faculty Development Program on “Importance of NAAC Accreditation in Higher Education Institutions” Organized by ATME College of Engineering, Mysuru from 09-11-2020 to 11-11-2020.
- Two weeks online FDP on “Python” jointly organized by Department of Electronics & Communication Engineering, JSS Academy of Technical Education NOIDA and Spoken Tutorial Project IIT Bombay from 22nd June-4th July 2020.
- Six days workshop on “Art of Counselling” from 2nd July to 9th July 2019 at ATMECE, Mysuru.
- Four Days Faculty Development Program On “ PYTHON APPLICATION PROGRAMMING ” from 17th to 20th January, 2018 in Association with iQuest, Mysuru, at ATME, Mysuru.
- Attended 6 days FDP on “NETWORK SIMULATOR” at ATMECE, Mysuru on 12/12/2016 to 17/12/2016.
- Attended 3 Days FDP on “MATLAB “at ATM College of Engineering in association with IETE from 6thto 8th January 2014.
- Attended 5 Days “Train the Teacher” Conducted by IEEE Computer Scoiety from 22nd July to 26th July 2013
- Attended 3 Days FDP on “MATLAB and SIMULINK” at Solipsys Labs, Banglaore from 23rdto 25th July 2012

### Proposal/Funding/Project Financial Assistance

- Granted one Lakh from Science and Engineering Research Board(SERB),New Delhi for organising 3-Day National Seminar on “Research Avenues in Artificial Intelligence and Allied Areas” from 24thto 26th March 2022.
- Submitted DST  proposal  worth of 35 Lakhs  with entitled “ Imparting Computational Knowledge and Practical Experience in the Emerging areas of Artificial Intelligence, Cyber Security, Augmented Reality, Virtual Reality and IoT for Higher Secondary Students in Mysore District, Karnataka”  No.: TPN / 81544 during 2022-23.

### Honours/Awards/ Achievements

- BoS Member of Artificial Intelligence and Data Science, Mysore University School of Engineering, UoM, Mysore
- BoE Member of Computer Science and Engineering Board, VTU, Belagavi.
- Member of LIC Team , VTU 2021
- Session Chair person for 3rd
- National Conference on Image Processing, Computing, Communication, Networking and Data Analytics (NCICCNDA 2018) , GSSSIETW, Mysore
- Reviewer of International conference 4th International Conference on Emerging Research in Computing, Information, Communication and Applications (Springer) ERCICA 2016.
- Session Chair for Zonal Level Paper Presentation Conducted by Vidya Vikash Institute of Technology, MYSURU.
- Session Chair for Paper Presentation in State level symposium at ATME College of Engineering, MYSURU
- Question Paper Setting for University.
- Judge for State level Technical Events at GSSSIT, Banglaore.
- Guest Lecture in Vidya Vardhaka College, Mysore
- Delivered a Lecturer on  “Internet and its Advantages”  for Government Employees at  Ghousia College of Engineering, Ramanagarm

### Roles and Responsibilities: Institute Level

- College Magazine “ Dynamic”- Chairman
- ATME Alumni Association Secretary
- Organizing Committee Member for International conference ICRTST 2022 & 2021

### Roles and Responsibilities: Department Level

- Head of the Department
- Department NBA Coordinator.
- Coordinated 24 hour Hackathon “Tech Avishkar” organized by ATMECE in association with IEEE Mysuru subsection held on 21 and 22 Dec 20222.
`,
  },

  "dr-shilpa-b-l": {
    name: "Dr. Shilpa B L",
    url: "https://atme.edu.in/dr-shilpa-b-l/",
    md: `**Faculty Name:** Dr. Shilpa B L

**Designation:** Associate Professor

**Program:** Computer Science and Engineering

**Professional Experience:** 16 Years

### Professional Experience

- Teaching: 14
- Research: –
- Industry: 2

### Contact Details

- **Email ID — Official:** shilpabl.cs@atme.edu.in
- **Email ID — Personal:** blshilpa@gmail.com
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/528310/NTI4MzEw
- **Google Scholar ID:** https://scholar.google.com/citations?user=hW4BDs4AAAAJ&hl=en
- **Scopus ID:** https://www.scopus.com/authid/detail.uri?authorId=57324169400
- **Orcid ID:** https://orcid.org/0000-0002-4597-738X
- **Web of Science Researcher ID:** KVC-0219-2024
- **LinkedIn ID:** www.linkedin.com/in/dr-shilpa-bl-710a1430

### Academic Details

**Qualification**

- **Ph.D** in Computer and Information Science, VTU, Belagavi. Research Center: Dept. of ISE, BMSCE, Bengaluru.
- **M.Tech** in Computer Science & Engineering, RV College of Engineering, Bengaluru. University: VTU, Belagavi.
- **B.E** in Computer Science and Engineering, SJBIT, Bengaluru. University: VTU, Belagavi.

### Research Areas of Interest

- Predictive Analytics
- Artificial Intelligence & Machine Learning
- Natural Language Processing
- Cyber Security

### Publications Details

- B. L. Shilpa, M. R. Lamani, K. Padmaja and V. Asha, “ **Enhanced Lumpy Cattle Skin Disease Prognosis via Deep Learning Methods**,” _2024 Second International Conference on Networks, Multimedia and Information Technology (NMITCON)_, Bengaluru, India, 2024, pp. 1-6, doi: [10.1109/NMITCON62075.2024.10699233](https://doi.org/10.1109/NMITCON62075.2024.10699233)
- Have published an Q3 Web of Science Journal “Combined Deep Learning Classifiers for Stock Market Prediction: Integrating Stock Price and News Sentiments”, Kybernetes, 9th November 2021, DOI: [https://doi.org/10.1108/K-06-2021-0457](https://doi.org/10.1108/K-06-2021-0457)
- Shilpa B L, Shambhavi B R. (2022) “Structuring of Unstructured Data from Heterogeneous Sources”, Indian Journal of Science and Technology.15(41):2188 2193. (Web of Science) DOI: [https://doi.org/10.17485/IJST/v15i41.1566](https://doi.org/10.17485/IJST/v15i41.1566)
- Harshitha B , Maria Rufina P , Shilpa B L, 2021, Systematic Pricing in Toll Roads using Unmanned Toll Collection Methods, INTERNATIONAL JOURNAL OF ENGINEERING RESEARCH & TECHNOLOGY (IJERT) Volume 10, Issue 08 (August 2021)
- Prashantha S, Shravan C Y, Bharath B, Bharghavachar B N, Shilpa B L, “Agricultural Crop Commodities Price Prediction using Machine Learning Techniques”, International Research Journal of Innovations in Engineering and Technology (IRJIET), Volume 4, Issue 6, pp 69-74, June 2020.
- Nireeshma R, Rashmi R, Sangeetha M, Spoorthi M E, Shilpa B L, “Plant Leaf Disease Detection and Automated Medicine using IoT”, International Research Journal of Engineering and Technology (IRJET), Volume 7, Issue 4, April 2020.
- Prashantha S, Shravan C Y, Bharath B, Bharghavachar B N, Shilpa B L, “A Survey on Crop Analysis and Agricultural Commodities Price Prediction using Machine Learning Techniques”, International Journal for Technological Research in Engineering (IJTRE), Volume 7, Issue 7, March 2020.
- Aishwarya B K, Nirmala S, Shruthi T, Srinidhi R, Shilpa B L, “ Sentiment Analysis and Authentication of User Ratings in E-Commerce Application”, International Journal of Research in Electronics and Computer Engineering (IJRECE), Volume 7, Issue 2, April to June 2019
- Dhanush V Uttarkar, Sahana G S, Samrudh S Shetty, Spoorthi V, Shilpa B L, “ Stock Market Prediction using Deep Learning”, International Journal of Research in Electronics and Computer Engineering (IJRECE), Volume 7, Issue 2, April to June 2019
- Shilpa B L, Shambhavi B R, “Predictive Analytics: Trends, Applications and Recommendations”, International Journal of Data Mining & Emerging Technologies (IJDMET) , Volume 8, No. 1, May 2018
- Megha K S, Meghashree, Shilpa B L, “A Survey on Early Fire Alarming Using Smoke Detection”, International Journal of Science Research in Computer Science Engineering and Information Technology (IJSRCSEIT) Volume 4, Issue 6, May- June 2018, pp 123-126.
- Shilpa B L,” A study on Performance Enhancement of Cloud-based Bigdata Analytics”, International Journal of Innovative Research in Computer and Communication Engineering (IJIRCCE) Vol 4, Issue 5, May
- Shilpa B.L, “Exploration and Analysis of Unstructured Business Data using Text Analytics-A Study”, International Journal of Emerging Technology and Advanced Engineering (IJETAE) Vol 5, Issue 7, July 2015, pp 106-108. **International/ National Conferences:**
- Shilpa B L, Mayank M, Md Fakruddin S, “Adaptive Urban Traffic Control Using Camera Vision and Emergency Vehicle Mobile Interface”, Second IEEE International Conference on Computing, Semiconductor, Mechatronics, Intelligent Systems, and Communications (COSMIC-2025), scheduled on November 21-22, 2025, at Sahyadri College of Engineering and Management, Adyar, Mangaluru.
- Shilpa B L, Padmaja K, Manjunath Ramanna Lamani, Keerthana M M, “IoT-Based Traditional Organic Implementation of Jeevamrutha Using Image Processing”, Second IEEE International Conference on Computing, Semiconductor, Mechatronics, Intelligent Systems, and Communications (COSMIC- 2025), scheduled on November 21-22, 2025, at Sahyadri College of Engineering and Management, Adyar, Mangaluru.
- Bhoomika M K, Hrushitha S, Inchara C, Sunaina K, Shilpa B L, **_“Deep Learning Based Aquatic Plant Species Detection_**”, National Conference on Emerging Trends in Science & Technology (NCETST-24) organized by Government Engineering College West Champaran, Patna, 26-27th April 2024.
- Shilpa B L, Shambhavi B R, **_“Deep Learning Models for Stock Market Prediction using Optimization Approach”_**, IEEE International Conference on Network, Multimedia and Information Technology (NMITCON-2023) in association with IEEE Bangalore section and VTU Belagavi, NMIT, Bengaluru, September 2023. (Scopus Indexed) **Received Best Paper Award for the same.**
- Shilpa B L, Dr. Shambahvi B R **_, “Stock Market Price Prediction by analysing the sentiments of public using Deep Learning”,_** International Conference Data Science Machine Learning and Blockchain Technology- 2020 (AICDMB), VVCE, Mysuru, Feb 12-13 2020.
- Shilpa B L, Tejas R, Swathi N S,” **_Sentiment Analysis for Twitter Data”,_** National Conference on Recent Trends in Computer Science & Engineering ”, SJBIT, Bangalore, 09th May 2018.
- Keerthana S, Lalitha M P, Latha S, Nagapushpa R, Shilpa B L, **_“Summarization & Sentiment Analysis from User Health Post”_**, National Conference on Recent Trends in Computer Science & Engineering”, SJBIT, Bangalore, 09th May 2018.
- Megha K S, Meghashree, Shilpa B L, **_“A Survey on Early Fire Alarming Using Smoke Detection”_**, National Conference on Engineering Innovations & Solutions (NCEIS-2018), GSSSIETW, Mysuru, 7th May 2018
- Shilpa B L, Tejas R, Swathi N S, “ **_Twitter Sentiment Analysis Techniques: A Survey_**”, National Conference on Recent Trends in Computer Science & Engineering and Technical Symposium-17”, SJBIT, Bangalore, 10th May 2017.
- Shilpa B.L, Sumukha V, Sphurthi C S, “ **_A Survey on Twitter Sentiment Analysis_**”, National conference on Emerging Trends and Advances in Information Technology (NCET 2016) , AIT, Chikkamagaluru, Jan29-30,
- Chaitra D B, Shilpa B L, **_“Big Data: Issues, Challenges and Tools”,_** National Conference on Multimedia Technology and Communications System (NCMTCS 2015), MCE, Hassan, May 8-9 2015.
- Sangetha, Shilpa B L, **_“A Survey on Hadoop Distributed File System and its Applications”,_** National Conference on Advances in Computer Applications (NCACA 2013), SSIT, Tumkur, May 16-17, 2013.
- Dilip Kumar N S, Shanmuga Sundari, Shilpa B L, “ **_Web Based Control and Status Monitoring of X-Band Doppler Weather Radar”_**, National Conference on Recent Trends in Engineering, East West College of Engineering, 2013
- Shilpa B L, **_“A Mechanism to Manage on Unstructured Data”,_** International Conference on On Demand Computing (ICODC 2012), Oxford College of Engineering, Bangalore, Nov 15-16, 2012, Proceedings published by IEEE and CSI chapter, ISBN 978-93-5087-502-5, pp.9-12.
- Shilpa B L, Harish G, **_“Structuring of Unstructured Data for Text Analytics”_**, National Conference on Recent Trends in Computational Sciences and Engineering (NCRTCSE 2011), KVG College of Engineering, Sullia, 12th Feb 2011.

### Book / Book Chapter Published

- Published a Book Chapter titled "Leveraging Natural Language Processing for Enhanced Pharmacovigilance in Reproductive Health", In: Sengupta, A., Narad, P., Majumdar, G., Modi, D. (eds) Data-Driven Reproductive Health. Springer, Singapore. https://doi.org/10.1007/978-981-97-7451-7_8
- Published a Book entitled "Python Programming" published by Scientific International Publishing House (SIPH) with ISBN: 978-93-5757-799-1.

### Membership in Professional Bodies

- International Association of Engineers (IAENG): LM128365
- International Computer Science and Engineering Society (ICSES)
- Member of 'Editorial Board' of 'Blue Eyes Intelligence Engineering and Sciences Publication' and its journal(s) for year 2020-21.
- Member of 'Editorial Board' of 'Lattice Science Publication' and its journal(s) for year 2020-21.

### Honours / Awards / Achievements

- Received Best Paper Presenter award at IEEE International Conference on Network, Multimedia and Information Technology (NMITCON-2023) in association with IEEE Bangalore section and VTU Belagavi, NMIT, Bengaluru, September 2023.
- Project titled "Crop Analysis and Agriculture Commodities Price Prediction using Machine Learning Techniques" was sponsored by Karnataka State Council for Science and Technology (KSCST) under 43rd Series of Student Project Programme: 2019-20.
- Received GATE Scholarship during 2009-2011 for PG Program.
- Received Appreciation certificate from Management of GSSSIETW, Mysuru for 100% result for subjects Big Data Analytics and Storage Area Networks (VII–VIII Sem, ISE) B.E VTU Examinations held in Dec–Jan 2022-2023.
- **Advisory Committee Member**, Intrino Robotics & Technologies, Chennai *(2025 – Present)*.

### Courses Completed

- Successfully completed NPTEL Online Certification Course on **"Accreditation and Outcome Based Learning"** during Aug–Oct 2025.
- Successfully completed the course **"GCP Associate Cloud Engineer – Google Cloud Certification"** from UDEMY on July 4th 2025.
- Successfully completed the course **"Patent Filing in India"** from UDEMY on June 4th.
- Successfully completed the **NVIDIA Deep Learning Institute (DLI) Certification**, covering Generative AI, Robotics, GPU Computing, and Deep Learning workflows on April 17th.
- Successfully completed NPTEL Online Certification Course on **"Data Analytics with Python"** during Jan–Mar 2021.
- Successfully completed NPTEL Online Certification Course on **"Big Data Computing"** during Aug–Oct 2021.

### Resource Person / Guest Lecture / Session Chair

- Served as **Evaluator** for the National Screening Round – Smart India Hackathon.
- Served as **Jury Member for the IDEATHON** organized by the Datanuts Club, Department of CSE – Data Science, ATME College of Engineering, Mysuru.
- Served as Resource Person for a one-day workshop on **"Innovate. Inspire: Research Paper Writing & Publication Awareness"** on 5th November 2025 at ATMECE, Mysuru.
- Conducted a one-day workshop as Resource Person on **Business Analytics** for 2nd Semester MBA students at **Cauvery College of Management, Mysuru** (20th August 2025).
- Served as **Jury Member for TECH AVISHKAR 2.0 – a 24-hour Hackathon** organized by ATME College of Engineering in collaboration with IEEE-CEDA and IET.
- Guest Speaker at the **DHR-funded Workshop on "AI in Bioinformatics: Exploring Mechanisms and Predictive Models for Precision Medicine"** at Erode Sengunthar Engineering College, May 5–7, 2025. Delivered a talk on the convergence of AI and Bioinformatics in translational research and precision medicine.
- Participated as a session chair at the **IEEE International Conference on Computing, Semiconductor, Mechatronics, Intelligent Systems, and Communications (COSMIC-2024)**, scheduled on November 22-23, 2024, at Sahyadri College of Engineering and Management, Adyar, Mangaluru.
- Delivered a Guest Lecture at **"Embracing Future Trends and Predictions of Quantum Computing and Extended Reality (XR) in Automotive Industry"** sponsored by SERB at Erode Sengunthar Engineering College, Perundurai, Erode.
- Delivered talk at **[l-Spell] HM's In-service Course of KVS** conducted by ZIET Mysuru and gave a Lecture-cum-Practical session on the topic **"Implementation of ICT Tools & Techniques for Teaching & Learning"** on 12.06.2022.

### FDPs / Conferences / Workshops / STTP / MOOC Certification / Online Courses

1. Participated and successfully completed one day webinar on **"Intellectual Property Rights and Innovation"** on 5th of December 2025 at Government First Grade College Navabhag Vijayapur.
2. Attended one day workshop on Techno Ayurveda organized by the Government Ayurveda Research Center, Mysuru in association with VVCE Mysuru on 18th November 2025.
3. Participated and successfully completed One-week Offline ATAL FDP on **"ADAPTIVE ARTIFICIAL INTELLIGENCE FOR CYBER SECURITY: FROM ANOMALY DETECTION TO THREAT MITIGATION"** at MALLA REDDY COLLEGE OF ENGINEERING & TECHNOLOGY from 21/07/2025 to 26/07/2025.
4. Participated and successfully completed Three-day comprehensive workshop on **"Patent Drafting, Filing and Interpretation"** at ATME College of Engineering from 12/06/2025 to 14/06/2025.
5. Participated and successfully completed Two-week Faculty Development Program on **"Refresher Course on Ethics and Innovation: Integrating AI in Science and Technology Research"** at NITTTR, Chandigarh from 19/05/2025 to 30/05/2025.
6. Participated and successfully completed Faculty Development Program on **"Artificial Intelligence, Machine Learning and Deep Learning in the Data Revolution Era: Progress and Applications"** at ATME College of Engineering from 03/02/2025 to 05/02/2025.
7. Participated and successfully completed ATAL Basic FDP on **"Immersive Virtual Reality"** at DAYANANDA SAGAR UNIVERSITY from 26/08/2024 to 31/08/2024.
8. Participated and successfully completed Faculty Development Program on **"Exploring Neural Networks and Advanced NLP Techniques"** organized by Dept. of CSE (AI & ML), Nagarjuna College of Engineering and Technology, Bengaluru from 15th to 19th April 2024.
9. Attended **Cognizant Tech Talk** series as part of Faculty Enrichment Program (FEP) held at Cognizant office, Bangalore during April 2023.
10. Participated and successfully completed Faculty Development Program on **"Cloud Computing"** under TechSaksham program from 30th Jan to 3rd February 2023.
11. Participated and successfully completed Faculty Development Program on **"Artificial Intelligence"** under TechSaksham program from 20th to 24th February 2023.
12. Participated and successfully completed Faculty Development Program on **"Introduction to Python Programming & its applications"** organized by AICTE-VTU from 13th to 17th March 2023.
13. Participated and successfully completed Faculty Development Program on **"Introduction to Web Programming"** organized by AICTE-VTU from 27th to 31st March 2023.
14. Participated and successfully completed Faculty Development Program on **"Introduction to Internet of Things"** organized by AICTE-VTU from 17th to 21st April 2023.
15. Participated & completed successfully AICTE Training And Learning (ATAL) Academy Online Elementary FDP on **"Application Areas of Data Analytics"** from 2021-10-23 to 2021-10-27 at Indian Institute of Information Technology – Allahabad.
16. Participated & completed successfully AICTE Training And Learning (ATAL) Academy Online Elementary FDP on **"Artificial Intelligence and Machine Learning"** from 2021-10-04 to 2021-10-08 at National Institute of Technology, Raipur.
17. Participated and successfully completed the one-week Faculty Development Program on **"Big Data Computing"** from NPTEL-AICTE during Aug–Oct 2021.
18. Participated and successfully completed the Five-day National Level Online FDP on **"AI for ALL"** organized by the Department of Computer Science and Engineering, VVCE, Mysuru in association with ISTE from 20th to 24th September 2021.
19. Participated and successfully completed the one and half week Faculty Development Program on **"Data Analytics with Python"** from NPTEL-AICTE during Jan–April 2021.
20. Attended a Webinar on **Internet of Things using LoRa** organized by the Department of Computer Science and Engineering, GSSSIETW, Mysuru on 17th September 2021.
21. Participated in the "One Week FDP on **Awareness Programme for Knowledge Enhancement of Software Systems, Quality aspects of Academics and Research (SS&QAR)**" organized by the IQAC in association with Department of Computer Science and Engineering held during 23rd – 27th August.
22. Participated in one Week Online Faculty Development Program on **"Emerging Paradigms in Artificial Intelligence and Data Science"** organized by Department of Information Technology and Artificial Intelligence & Data Science, Vishwakarma Institute of Technology, Pune from 16th to 20th August 2021.
23. Participated & completed successfully AICTE Training And Learning (ATAL) Academy Online Elementary FDP on **"Predictive Intelligence Models and its Applications"** from 2021-07-12 to 2021-07-16 at National Engineering College.
24. Participated & completed successfully AICTE Training And Learning (ATAL) Academy Online Elementary FDP on **"Research Trends in Computer Vision and Natural Language Processing"** from 2021-07-19 to 2021-07-23 at The NorthCap University.
25. Participated & completed successfully the FDP on the topic **"Exploring Entrepreneurship & Startup Opportunities"** organized by Sri Venkateshwara College of Engineering & Technology, Puducherry, from 5th to 9th July 2021.
26. Completed **"Three Day Training on SAS for Predictive Modelling"** organized by A2Z Edu Learning Hub on 16th, 17th & 18th July 2021.
27. Participated in the Webinar on **SCIENCE OF BHAGAVAD-GITA** by Prabhakar Ballapalle, Technologist, Western Digital & Director, Bhaktivedanta Institute, Bangalore conducted by the Department of Physics, GSSS Institute of Engineering & Technology for Women, Mysuru on 29th December 2020 from 2.00 PM to 3.00 PM.
28. Attended hands on workshop on **Big Data Analytics** at GSSS Institute of Engineering & Technology for Women, Mysuru in association with AIESEC IIT-Delhi and Geekslab Technologies Pvt. Ltd from 21st to 24th Jan 2019.
29. Attended Two weeks Faculty Development Program on **"Queuing Theory and Stochastic Process for Advance Systems"** from 2/7/2018 to 13/7/2018 at BMS College of Engineering, Bengaluru.
30. One day Workshop on **"Massively Empowered Classrooms"** on 18th January 2013 at Microsoft Research India.
31. Attended **Microsoft TechVista** held in Taj Residency, Bangalore during Jan.
32. Attended Workshop on **"LaTeX and its Applications"** on 24th and 25th July 2015 held at SJBIT.
33. Attended Workshop on **"Managing Big Data"** organized by Dept. of CSE, SJBIT, Bangalore during 3rd–4th March 2016.
34. Attended Six days Faculty Development Program on **"Knowledge Discovery and Applications"** from 18th to 23rd January 2016 at SJBIT, Bangalore.
35. Attended Faculty Development Program on **"Machine Intelligence and Image Processing"** from 20th to 24th July 2015 at SJBIT, Bangalore.
36. Attended Faculty Development Program on **"Medical Data Mining and Analysis Using Open-Source Tools"** from 5th to 7th September 2014 at SJBIT, Bangalore.
37. Attended Six days Faculty Development Program on **"Real Time WSN and Network Simulator"** from 18th to 23rd July 2016 at SJBIT, Bangalore.

### Academic and Administrative Activities

1. Served on the Organizing Committee for the 5th International Conference on Data Science, Computation, and Security (IDSCS 2024). Event organized by CHRIST (Deemed to be University), Bengaluru, in collaboration with The Tejas Scientific Research Foundation (TTSRF).
2. Reviewer for the Technical papers submitted to the Second IEEE International conference on Data Science and Information System (ICDSIS-2024) held between 17-18th May 2024, organized by Malnad College of Engineering, Hassan.
3. Reviewer for the Technical papers submitted to the first IEEE International conference on Integrated Intelligence and Communication Systems (ICIICS-2023) held between 24-25th November 2023, organized by Sharnbasva University, Kalaburagi.
4. Member of Reception committee for 3rd International Conference on "Adaptive Computational Intelligence (ICACI-2022)" in association with Springer organized by GSSSIETW, Mysuru, during December 16–17, 2022.
5. Worked as NBA criterion 4 department level faculty coordinator during 2022-2024.
6. Worked as College Level SPoC for NPTEL from Oct 2021 to June 2024.
7. Worked as Department Level MOOC / NPTEL coordinator since Dec 2021 to Sep.
8. Worked as department faculty coordinator for NBA process during the year.
9. Institute level faculty in charge for NIRF during the academic year 2018.
10. Worked as NBA criterion 2 department level faculty coordinator during the academic year 2018.
11. Reviewer for the technical papers submitted to the first international conference on Intelligent Computing (ICIC 2018) held between 25th and 27th October 2018, organized by Department of Computer Science and Engineering, Amrita Vishwa Vidyapeetham, Bengaluru.
12. Alumni faculty coordinator for CSE Dept., SJBIT, Bangalore.
13. Organized Six Days Faculty Development program on "Real Time WSN and Network Simulator" in July.
14. Organized a Two-day workshop on "Managing Big Data" in association with Algosquare InfoTech for Faculties and Tech Students on 4th and 5th March 2016.
15. Accompanied 6th semester students for one day industrial visit to Wipro on 20th of April.
16. Master of Ceremony (MC) for various events like FDP, Workshops, Orientation Program and 8th semester students Farewell program.
17. Member of Reception committee for the National Conference Recent trends in Computer Science and Engineering held in CSE department during May 2016.
18. Delivered a talk on "Computer Graphics and Visual Basics" in a six days workshop for technical staff on "NS-2 and Lab Programs of VTU Syllabus" at SJBIT.
19. Event coordinator for GATE, GRE coaching classes during 2014-15 at SJBIT.
20. Guided several B.E and M.Tech projects, and worked as examiner for project work viva-voce.

### Patent

1. Published a Patent titled **"Augmented Reality based system and method for interactive college demonstration and virtual campus exploration"** on 02.01.2026.
2. Design No. 425781-001 | Title: **Autism Detecting Device** | Registered under the Indian Intellectual Property system on 04/08/2024. Contributed to the design and development of an assistive technology device aimed at early detection of autism in children.

### Roles and Responsibilities: Department Level

- Project Coordinator
- Department Level NBA Coordinator
- Department Level NACC Coordinator
- RPC Funding Coordinator

### Roles and Responsibilities: Institute Level

- IQAC Member
- Anti-Ragging Squad Member
- Internal Complaint Committee Member
`,
  },


  "gadi-divyasree": {
    name: "Mrs Gadi Divyasree",
    url: "https://atme.edu.in/gadi-divyasree/",
    md: `### Professional Experience

- Teaching: 0
- Research: 0
- Industry: 0

### Contact Details

- **Email ID:** Official: gadidvyasree.cs@atme.edu.in | Personal: divyagadi98122@gmail.com
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/661688
- **Google Scholar ID**
- **Scopus ID**
- **Orcid ID:** https://orcid.org/0009-0006-3607-4804
- **Web of Science Researcher ID:** PGL-6701-2026
- **LinkedIn ID**

### Academic Details

**Qualification**

- M.Tech in Computer Science & Engineering, JNT University, Anantapur,-2020
- B.E in Computer Science & Engineering, Siddhartha Engineering colleage., Tirupati , JNT University – 2017

### Areas of Interest

- JAVA
- Data Base Management System

### Publication Details

- K Madhavi., G Divyasree., “Efficient CT image compression using block processing compression with DWT” International Conference on Multidisciplinary Research, ACT –September 2019, pp. 978-81-941721-54.

### Membership in Professional Bodies

- NIL

### FDPs/Conferences/Workshops/STTP/MOOC Certification

- NIL

### Honours/Awards/ Achievements

- University rank holder

### Patent

- NIL

### Roles and Responsibilities: Institute Level

- NIL

### Roles and Responsibilities: Department Level

- NIL
`,
  },


  "lakshmi-shree-c-v": {
    name: "Mrs. Lakshmi Shree C V",
    url: "https://atme.edu.in/lakshmi-shree-c-v/",
    md: `### Professional Experience

- Industry: 7.4 Years
- **Placement: 1 Year:** Research: | Industry: 7.4 Years

### Contact Details

- **Email ID:** Official: tpo@atme.edu.in | Personal: bhoomi.lakshmi@gmail.com
- **Vidwan ID**
- **Google Scholar ID**
- **Scopus ID**
- **Orcid ID**
- **Web of Science Researcher ID**
- **LinkedIn ID:** https://www.linkedin.com/in/lakshmi-shree-c-v-092a841b/

### Academic Details

**Qualification**

- M.Tech in Computer Science and Engineering
- B.E in Computer Science and Engineering

### Areas of Interest

- Web Development, AI&ML

### Publication Details

- Lakshmi Shree C V, Dr. Shivamurthy R C, “Leveraging Social Media to Detect Online Bullying”, IJSDR – International Journal of Scientific Development and Research (www.IJSDR.org), ISSN:2455-2631, Vol.8, Issue 8, page no.55 – 62, August-2023

### Honours/Awards/ Achievements

- Outstanding contribution for the development of CD_SEM SW V244
- Recognition for hosting a Job Fair at Srirangapatna

### Roles and Responsibilities: Institute Level

- Director Placements
`,
  },

  "mr-anil-kumar-c-j": {
    name: "Dr. Anil Kumar C J",
    url: "https://atme.edu.in/mr-anil-kumar-c-j/",
    md: `### Professional Experience

- Teaching: 23 years
- Research: 8 years
- Industry: NIL

### Contact Details

- **Email ID:** Official: anilkumarcj_cs@atme.edu.in | Personal: anilkumarcj@gmail.com
- **Vidwan ID:** 201104
- **Google Scholar ID:** e2iC-PIAAAAJ
- **Scopus ID:** 58367945200
- **Orcid ID:** 0000-0001-5758-4367
- **Web of Science Researcher ID:** –
- **LinkedIn ID:** https://www.linkedin.com/in/anil-kumar-c-j-80058863/

### Academic Details

**Qualification**

- Ph. D in Computer Science and Engineering, VTU Belagavi
- M.Tech in Computer Science and Engineering, VTU Belagavi
- B.E in Computer Science and Engineering, Mysore University

### Work Experience


- Working as Associate professor in ATME College of Engineering, Mysuru from 16th July 2012
- Worked as Assistant Professor in Ghousia College of Engineering, Ramanagaram from Aug 2005 to June 2012
- Worked as Lecturer in BET Polytechnic K M Doddi, from Aug 2000 to May 2003


### Publication Details

- Anil Kumar C J, Dr. B K Raghavendra, “Heterogeneous Ensemble Credit Scoring Model Using Multilevel Stacking”, Chem. Bull. 2023, 12 (Special Issue 5), 1971-1984.
- Anil Kumar C J, Nagendra B, Moulya E, Rakshitha R, Charulatha V, “Development of an Artificial Intelligence Based Yoga Trainer for Personalized and Effective Yoga Practice”, IJRAR, May 2023, Volume 10, Issue 2, E-ISSN 2348-1269.
- Anil Kumar C J, Dr. B K Raghavendra, Raghavendra S, “A Credit Scoring Heterogeneous Ensemble Model Using Stacking and Voting”, Indian Journal of Science and Technology, Year: 2022, Volume: 15, Issue: 7, Pages: 300-308. DOI: https://doi.org/10.17485/IJST/v15i7.1715
- Anil Kumar C J, “Early Prediction of Sepsis from Clinical Data”, The International Conference on Recent Trends in Science and Technology (ICRTST-2021), ATME College of Engineering, Mysuru, 2021.
- Anil Kumar C J, B K Raghavendra, “An Experimental Study on Comparison of Credit Scoring Models”, International Research Journal of Engineering and Technology (IRJET), e-ISSN: 2395-0056, Volume: 07, June 2020.
- Anil Kumar C J, “An Epigrammatic Study on NLP - Tools, Challenges and its Applications”, IJIRCCE, Volume 7, Issue 1, January 2019.
- Mohanesh M B, Anil Kumar C J and Dr. Puttegowda D, “Mathematical Logic and Logical Equivalence Implementation to find the Intermediate Key Management for DES Encryption Algorithm”, 6th World Conference on Applied Science, Engineering and Technology, Goa, India, 2nd–3rd January 2018.
- Puttegowda D, Anil Kumar C J and Anil Kumar B H, “Video anomaly detection using block based approach”, International Journal of Advance Engineering and Research Development, Volume 02, Issue 06, ISSN(Online): 2348-4470, ISSN (P): 2348-6406, June 2015.
- Anil Kumar C J and Dr. B K Raghavendra, “Classification in Credit Scoring using Hybrid Model - a Literature Review”, National Conference on Advances in Computing Technology, KSSEM, Bangalore, April 2015.
- B K Raghavendra and Anil Kumar C J, “Evaluation of predictive model for classification using neural networks in credit scoring”, at NCETIT held at DBIT, Bangalore from 3rd May to 5th May 2012.
- Krishna and Anil Kumar C J, “Content Based Image Retrieval System Using Texture Features”, at National Conference on Recent Trends in Information Technology held at SJBIT, Bangalore on 12th May 2007.

### FDPs/Conferences/Workshops/STTP/MOOC Certification

- One Day National Level Online FDP on “New Avenues and Role of Faculty in Effective Implementation of NEP-2020 in HEIs” organized by ATME College of Engineering, Mysuru on 29th January 2021.
- Webinar on “Scientific writing for Journals” organized by Springer Nature in collaboration with Visvesvaraya Technological University Consortium on Sep 30, 2020.
- NBA Awareness Webinar on Outcome Based Education and Accreditation from ATME College of Engineering, Mysuru on 20th October 2020, jointly organized by National Board of Accreditation, New Delhi and Visvesvaraya Technological University, Belagavi for the Engineering Colleges and Deemed to be Universities in Karnataka.
- Three Days Faculty Development Program on “Importance of NAAC Accreditation in Higher Education Institutions” organized by ATME College of Engineering, Mysuru from 09-11-2020 to 11-11-2020.
- Two weeks online FDP on “Python” jointly organized by Department of Electronics & Communication Engineering, JSS Academy of Technical Education NOIDA and Spoken Tutorial Project IIT Bombay from 22nd June to 4th July 2020.
- Six days workshop on “Art of Counselling” from 2nd July to 9th July 2019 at ATMECE, Mysuru.
- One day workshop on Linux from IIT-Bombay at ATMECE, Mysuru on 23 Aug 2019.
- Attended FDP on “Recent Advances in Machine Learning” in GSSSIETW, Mysuru on 17th to 21st July 2018.
- Four Days Faculty Development Program on “Python Application Programming” from 17th to 20th January 2018 in association with iQuest, Mysuru, at ATME, Mysuru.
- Participated in Science and Engineering Research Board (SERB), New Delhi Sponsored 3-Day National Seminar on “Research Avenues in Artificial Intelligence and Allied Areas” from 24th to 26th March 2022 in ATMECE, Mysuru.
- Attended 5 days National Level FDP on “Data Science and Machine Learning” organized in association with Computer Society of India from 7th March 2022 to 11th March 2022.
- Attended 6 days FDP on “Network Simulator” at ATMECE, Mysuru on 12/12/2016 to 17/12/2016.


### Membership in Professional Bodies

- CSI Life Member – Membership number L1503791
- ISTE Life Member – Membership number LM116841

### Roles and Responsibilities: Institute Level

- ISO Coordinator
- Smart India Hackathon SPOC
- Disciplinary committee member

### Roles and Responsibilities: Department Level

- NBA Coordinator
- NAAC Criteria -1 Coordinator
- CSI-SBC
- Project Coordinator
`,
  },


  "mr-raghuram-a-s": {
    name: "Raghuram A S",
    url: "https://atme.edu.in/mr-raghuram-a-s/",
    md: `**Program: ming**

### Professional Experience

- Teaching: 8 Years
- Research: 2 Years
- Industry: Nil

### Contact Details

- **Email ID:** Official: raghuramas_cs@atme.edu.in | Personal: rbraghuram958@gmail.com
- **Vidwan ID:** 200965
- **Google Scholar ID:** https://scholar.google.co.in/citations?user=fDVzSvEAAAAJ
- **Scopus ID:** https://www.scopus.com/authid/detail.uri?authorId=58653924400
- **Orcid ID:** https://orcid.org/0000-0002-6833-6657
- **Web of Science**
- **LinkedIn ID:** https://www.linkedin.com/in/raghuram-a-s-3ab444264/

### Academic Details

**Qualification**

- M. Tech in Computer Science &amp;
- Engineering
- B.E in Information Science &amp; Engineering

### Areas of Interest

- Computer Networks
- Network Security

### Publication Details

- [Malware Websites Detection Using Machine Learning](https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=fDVzSvEAAAAJ&citation_for_view=fDVzSvEAAAAJ:XiVPGOgt02cC) **International Journal of Advance Research and Innovative Ideas in Education Vol:10, Issue: 3 Year 2024**
- [A SURVEY ON PLANT LEAF DISEASE DETECTION USING MACHINE LEARNING](https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=fDVzSvEAAAAJ&citation_for_view=fDVzSvEAAAAJ:bnK-pcrLprsC) **International Journal of Advance Research and Innovative Ideas in Education Vol:10, Issue: 3 Year 2024**
- **A Review on Detection of Offensive Language in Social Media Raghuram A.S.;Bhoomika B.R.;Gokul D.;Kuppanda M.;Khaleeq M. Conference Paper 14th International Conference on Advances in Computing, Control, and Telecommunication Technologies, ACT 2023, Volume 2023-June, Year 2023, Pages 899-903**
- **A Review on Food Waste Management and Donation App Raghuram A.S. Aishwarya R.K.;Kulkarni A.G.;Calvyn A.A.;Jathin C.S. Conference Paper 14th International Conference on Advances in Computing, Control, and Telecommunication Technologies, ACT 2023, Volume 2023-June, Year 2023**
- [Detection of Video and Multimedia Copy-Move Forgery using Optical Algorithm and GLSM Clustering](https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=fDVzSvEAAAAJ&citation_for_view=fDVzSvEAAAAJ:J-pR_7NvFogC) **K,Manjunath S S, Raghuram A S, Sneha N PIJITEE 9 (2S)**
- **Catching Packet Droppers and Modifiers in Wireless Sensor Network** **IJIRSET, Volume 8, Year 2019, Pages 1322-1327**
- **A Survey on Packet Droppers and Modifiers in Wireless Sensor Network** **IJIRCCE, Volume 7, Year 2019, Pages 3143-3147**
- **Security enabled de-duplication in cloud storage IJCRT, Volume 6, Year 2018, Pages 221-223**
- **Study of SDN Framework and Performance Evaluation of Software Defined Networking** **IJCRT, Volume 6, Year 2018, Pages 147-149**
- **QA System prediction using data mining approach** **IJCRT, Volume 6, Year 2018, Pages 1068-1073**
- **Python Based Machine Learning for Profile Matching** **IRJET, Volume 5, Year 2018, Pages 292-295**

### MEMBERSHIP IN PROFESSIONAL BODIES

- Life Member ISTE – LM127036
- CSI MEMBER FOR 3 YEARS
- HONOURS/AWARDS/
- ACHIEVEMENTS
- Got Best Teacher Award for the Year 2020

### FDPs/Conferences/Workshops/STTP/MOOC Certification

- Raghuram A S, ”Python Application
- Programming”, FDP in ATMECE, on 17th-21st
- Jan 2018.
- Attended fifteen days Faculty development Program on “Python” online organized by JSS.
- Attended Five days FDP on “Universal Human Values” Organized by AICTE.
- Attended Three days FDP on Mobile Application Development Lab online at BGSIT
- Attended Five days FDP on GenAI at NMAMIT, Nitte
- Completed NPTEL Course on Problem Solving through Programming in C on Jul-Oct 2019
- Completed NPTEL Course on NBA Accreditation and Teaching and learning in Engineering (NATE) on Jan-Apr 2024
- Completed ARPIT Course on Pedagogical Innovations And Research Methodology on Feb 2020
- Completed NITTTR Module 1

### Roles and Responsibilities: Institute Level

- AIMS College level Coordinator
- MOU Coordinator

### Roles and Responsibilities: Department Level

- NBA Criteria 1 Coordinator
- Student Counsellor.
- Internship Coordinator.
- NAAC Criteria 7 Coordinator
- QS-Iguage Deaprtment Coordinator
`,
  },

  "mr-sandesh-r": {
    name: "Sandesh R",
    url: "https://atme.edu.in/mr-sandesh-r/",
    md: `### Professional Experience

- Teaching: 6 Years
- Research: 5 Years
- Industry: 2 Years

### Contact Details

- **Email ID:** Official: sandeshr_cs@atme.edu.in | Personal: sandeshr1994@gmail.com
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/293112
- **Google Scholar ID:** http://scholar.google.co.in/citations?user=O7x9kdMAAAAJ
- **Scopus ID:** https://www.scopus.com/authid/detail.uri?authorId=60123982500
- **Orcid ID:** https://orchid.org/0000-0001-5646-8866
- **Web of Science**
- **LinkedIn ID:** https://www.linkedin.com/in/sandesh-r-a4a436249

### Academic Details

**Qualification**

- Pursuing Ph.D in Visvesvaraya Technological University, Belagavi
- M.Tech in Computer Science and Engineering
- B.E in Computer Science and Engineering

### Areas of Interest

- Cybersecurity
- Big Data
- Cloud Computing
- Artificial Intelligence and Machine Learning

### Publication Details

- Sandesh R, “Leveraging XGBoost based GBM for Proactive Detection of Man-in-the-Middle Cyber Attacks”, 2024 Asian Conference on Intelligent Technologies (ACOIT), IEEE, 2024.
- Sandesh R, “Detection of Malicious Bots in Twitter Network”, INTERNATIONAL JOURNAL OF ADVANCED RESEARCH AND INNOVATIVE IDEAS IN EDUCATION, 2024.
- Sandesh R, “FACE HALLUCINATION WITH FINISHING TOUCHES”, INTERNATIONAL JOURNAL OF RESEARCH AND ANALYTICAL REVIEWS (IJRAR.ORG), 2023.
- Sandesh R. “Encryption and Decryption Technique in Optically Transformed Color Images”, International Conference on Automation and Computation  (AUTOCOM 2022), Computer Science and Engineering, Graphic Era Hill University, Uttarkhand, India, December 2022.
- SANDESH R, “A Survey on Sketch to face recognition by using machine learning”, International Journal of Advanced Research in Science, Communication and Technology (IJARSCT) \|\| (ISSN: 2581-9429), Volume 2, Issue 2, July 2022.
- SANDESH R, “Augmented Reality Implementation for Virtual Furniture”, INTERNATIONAL JOURNAL OF SCIENTIFIC RESEARCH IN ENGINEERING AND MANAGEMENT (IJSREM) \|\| (ISSN: 2582-3930), Volume 5, Issue 5, May 2021.
- SANDESH R, “Smart Door Lock/Unlock using Raspberry PI” International Journal of Scientific Research in computer science engineering and Information technology \| (ISSN: 2456- 3307), June 2020.
- SANDESH R, “A Well Structured Remote Data Possession Verification Protocol in Cloud Storage”, International Journal of Creative Research Thoughts \| (ISSN: 2320-2882), Volume 6 Issue 2 April 2018.
- SANDESH R, “A survey on Remote Data Possession Verification Protocol in Cloud Storage”, International Research Journal of Engineering and Technology \| (ISSN: 2395-0056), Volume 5 Issue 4 April 2018

### MEMBERSHIP IN PROFESSIONAL BODIES

- International Association of Engineers (IAENG). IAENG membership number is: 516428.

### FDPs/Conferences/Workshops/STTP/MOOC Certification

- Completed NPTEL courses like Internet of Things, Cloud Computing with Silver Elite Certification.
- International Conference on Automation and Computation  (AUTOCOM 2022)
- National Level Faculty Development Program on Cloud Infrastructure (AWS) during the period of 21st to 25th August, 2023.
- Five days FDP on “ART OF RESEARCH PAPER WRITING AND IPR” – LEVEL 2 from 20th September to 24th September, 2022
- Three days Faculty Development Programme on “Object Oriented Programming with JAVA Laboratory” from 27-10-2022 to 29-10-2022.
- Five days FDP on “Artificial Intelligence and Applications” held at JSSTU, Mysuru from 24th May 2021 to 29th May 2021.
- One Day workshop on Effective Project Proposal writing Skills for Funding Agencies on 26th October 2019 at VVIET, Mysuru.
- Three day FDP on “Microcontroller and Embedded System” held at VVCE, Mysuru on 3rd Feb to 5th Feb 2020.
- FIVE day webinar on “BASIC COMPUTER VISION WITH PYTHON” organized by department of ISE NIE, Mysuru
- Successfully completed Train the Trainer Program on Java Programming conducted by Infosys Limited.
- Associate certified on successful completion of Android Foundation Certificate Exam.
- Completed RPA Design and Development V2.0 Educator Readiness program by UiPath.
- Completed PYTHON exam conducted by Aarupadai Veedu Institute of Technology offered by Spoken Tutorials, IIT Bombay.

### PATENT

- National / International — Sandesh R, Title: INTERNET OF THINGS (IOT), IMAGE PROCESSING AND MACHINE LEARNING TECHNIQUES IN SMART HOME SECURITY, Published/Granted: Published, Patent No.: 202241049887
- Title: DESIGNING A BLOCKCHAIN BASED FRAMEWORK FOR ANALYSING THE SECURITY AND PRIVACY OF IOT FOR FUTURE ENHANCEMENT OF SOURCE LOCATION, Published/Granted: Published, Patent No.: 202211054385
- Title: DESIGNING A BLOCKCHAIN BASED FRAMEWORK FOR ANALYSING THE SECURITY AND PRIVACY OF IOT FOR FUTURE ENHANCEMENT OF SOURCE LOCATION, Published/Granted: Published, Patent No.: 202211054385, Published/Granted: Published, Patent No.: 202441044559

### Roles and Responsibilities: Institute Level

- Admission Committee Member

### Roles and Responsibilities: Department Level

- Department AIMS Coordinator
- Domain Specific Training Coordinator
- Smart India Hackathon Coordinator
- DBMS and CG Mini Project Coordinator
- Main Project Guide
`,
  },

  "mr-theja-n": {
    name: "Mr Theja N",
    url: "https://atme.edu.in/mr-theja-n/",
    md: `### Professional Experience

- Teaching: 10 years
- Research: 1 year
- Industry: 4 years

### Contact Details

- **Email ID:** Official: THEJAN.CS@atme.edu.in | Personal: thejan.hdk@gmail.com
- **Vidwan ID:** 656714
- **Google Scholar ID:** https://scholar.google.co.in/citations?user=DE4wCI4AAAAJ
- **Scopus ID**
- **Orcid ID:** https://orcid.org/0009-0008-5839-8054
- **Web of Science Researcher ID**
- **LinkedIn ID:** www.linkedin.com/in/theja-narayana-5625b9101 (http://www.linkedin.com/in/theja-narayana-5625b9101)

### Academic Details

**Qualification**

- Pursuing Ph.D., VTU Belagavi since 2022
- M.Tech in Computer Science & Engineering, BTLIT, Bangalore, VTU Belagavi – 2012
- B.E in Computer Science & Engineering, SJCE Mysuru, VTU Belagavi – 2009

### Areas of Interest

- Machine Learning
- Image Processing
- Cloud Computing

### Publication Details

- Lane Detection For Autonomous Cars using Machine Learning, _IJSERM_, Volume 5, Issue 7, July 2021
- Joint Eye Tracking and Head Pose Estimation for Gaze Estimation, _IJIRCCE_, Volume 9, Issue 6, June 2021
- Smart Aquarium using IoT and DIP, _IJSREM_, Volume 4, Issue 6, June 2020
- IoT based Cattle Monitoring and Management, _IJSRD_, Volume 3, Issue 1, March 2020
- Detection of Cervical Cancer using Gaussian Filter and Canny Edge Detection Algorithm, 6, Issue 3, March 2019
- Survey on Detection of Cervical Cancer, _International Research Journal of Engineering and Technology (IRJET)_, Vol. 6, Issue 4, April 2019
- ERP for College Management, _International Journal of Advanced Research in Basic Engineering Science & Technology (IJARBEST)_, Vol. 4, No. 8, August 2018
- Real-Time Transportation Tracking and Management Suite, _International Journal of Advanced Research in Basic Engineering Science & Technology (IJARBEST)_, Vol. 4, No. 8, August 2018
- Convex Hull Click Based Graphical Password Scheme, _International Journal of Research in Information Technology_, Volume 4, Issue 11, November 2016, Pg. 31–36
- Aggregation of Recoverable Concealed Data in Homogeneous Wireless Sensor Networks, _International Journal of Multidisciplinary and Scientific Emerging Research_(ISSN: 2349-6037), 4, No. 2, 2015, Pg. 1111–1115
- Mobile Security in Android Mobile Technology, _International Journal of Research in Information Technology (IJRIT)_, Vol. 1, Issue 2, ISSN 2001-5569, February 2013, Pg. 30–36
- Lock Keeper: Federated Authentication Gateway, _International Journal of Advanced Technology and Engineering Research (IJATER)_, Vol. 2, Issue 4, July 2012, Pg. 32–39
- Face Recognition by Using Eigen Face Technique, _GJCER_, 2(1), ISSN 2265-2765, 2013, Pg. 216–220
- Efficient Location Protocol for Wireless Sensor Networks, _International Journal of Computer Application_, Issue 2, Volume 6, ISSN 22501797, December 2012, Pg. 16–26
- General Approach for Bluetooth Network Security System, _International Journal of Research in Computer Applications and Robotics_, Vol. 2, Issue 3, Pg. 8–16, June 2013
- An Auto Arrangement of Tree Nodes for Routing Based on Content in Mobile Adhoc Networks, _International Journal of Emerging Trends in Engineering and Development_, Issue 2, 7, ISSN 2249- 6149, November 2012, Pg. 256–265
- Finding the Leakage of Sensitive Information and Its Preventions, _International Journal of Emerging Trends in Engineering and Development_, Issue 3, 1, ISSN 2249-6149, January 2013, Pg. 181–188
- A Spatial Clustering Technique for Data Mining Neuroscience Informatics, _International Journal of Emerging Trends in Engineering and Development_, Issue 2, Vol. 8, November 2012, Pg. 443–447
- LickLider Transmission Protocol (LTP): A Protocol for Interplanetary Communication, _International Journal of Research in Information Technology_, Volume 1, Issue 9, September 2013, Pg. 306–311
- Ensuring Privacy for Users Files in Cloud With Geometry Partition Method, _IJRIT International Journal of Research in Information Technology_, Volume 1, Issue 10, October 2013, Pg. 316–322
- A Secure Distributed Nymble for Blocking Misbehaving Users in Anonymizing Networks, _CiiT International Journal of Networking and Communication Engineering_, Vol. 4, No. 8, July 2012, Pg. 485– 492

### Membership In Professional Bodies

- **Sl. No.:** Name of Society | Membership Number
- **1:** The Institution of Engineers | M-166902-2

### Honours/Awards/ Achievements

- Awarded
- Best Educator in 2024 at Infosys ETA, MS
- Awarded
- Insta Award in May, 2024 at Infosys ETA, MS
- Cleared KSET in Secured 2nd rank at Taluk level in Chinthana Mathematics Examination (2000–2001)

### FDPs/Conferences/Workshops/STTP/MOOC Certification

- NPTEL Certification in Research Methodology in September, 2025 2 Days Faculty Workshop on Google Cloud Computing Foundations Course from 12th to14th December 2019 at Christ University, Bengaluru 1 Day workshop on Effective Project Proposal Writing Skills for Funding Agencies on 26th October 2019 at VVIET, Mysuru 5 Days Faculty Development Program on Android Application Development from 18thto 22nd December 2017 at SVCE, Bengaluru 1 Day workshop on Avoiding the Risks of Plagiarism on 10th October 2015 at VVIET, Mysuru 5 Days Deep Dive Faculty Enablement Program on Foundation Program 0 from 15thto 19th December 2014 at Infosys Campus, Mangalore 1 Day Faculty Development Program on 3R’s of Research: Research, Researching and Researcher on 25th July, 2014 at VVIET, Mysuru 1 Day 5th Annual Session of PM Primer Training 12 th September 12, 2013 at Nimhans Convetion Center, Bengaluru

### Proposal/Funding/Project Financial Assistance

- Project Titled -“Simple Social Club Platform” has approved by the KSCST(Karnataka State Council for Science and Technology) under “Student Project Programme – 48th
- Series”

### Patent

- NIL

### Roles and Responsibilities: Institute Level

- NIL

### Roles and Responsibilities: Department Level

- NIL
`,
  },

  "mrs-ashwini-p": {
    name: "Mrs. Ashwini P",
    url: "https://atme.edu.in/mrs-ashwini-p/",
    md: `### Professional Experience

- Teaching: 10 Years
- Industry: Nil

### Contact Details

- **Email ID:** Official: ashwinip.cs@atme.edu.in | Personal: ashwini9986@gmail.com
- **Vidwan ID:** 553439
- **Google Scholar ID:** https://scholar.google.com/citations?hl=en&view_op=list_works&authuser=1&gmla=AH8HC4ypGy8K0vRdF2YT6NZa5sThiCCV8PR8bWtwf9CFYgEpKxtvT3nzw1-6Ajp76fL2bkmKueuWvW-7pZIYgw&user=sKBH-S0AAAAJ
- **Scopus ID**
- **Orcid ID**
- **Web of Science**
- **LinkedIn ID**

### Academic Details

**Qualification**

- M.Tech in Computer Science and Engineering
- B.E in Information Science and Engineering

### Areas of Interest

- Image ProcessingIOT
- Machine Learning

### Publication Details

- Published “ **Iot Based Prediction Of Land Degradation**” in IJCRT Volume 13 Issue 3 March 2025, ISSN:2320-2882.
- Published **“Smart Voting System Using Machine Learning”** in IJCRT Volume 13 Issue 3 March 2025, ISSN:2320-2882.
- Published **“Prediction and analysis of Stock Market using LSTM and Machine learning**” in International Research Journal of engineering and technology (IRJET), Volume 11 issue 04, April 2024.
- Published “ **IoT based Milk Adulteration detection and Identification of A and A2 milk**” in International Research Journal of engineering and technology (IRJET), Volume 11 issue 04, April 2024.
- Presented the paper “Content Based Image Retrieval System for Multi Object Images using Combined Features” in National Conference on Recent Trends in Computers, Communication & Information Technology in Dr.T.Thimmaiah institute of technology, K.G.F.
- Presented the paper “Framework for testing Database application & testing transactions with agenda“in ADVAYA-09 a National Level Technical Symposium in Shiridi sai Engineering College, Anekal, Bangalore.
- Published and Presented” Driver Drowsiness Detection System in Automotive Vehicles” in International Journal of Engineering Research & Technology (IJERT) ISSN: 2278-0181 Published by, [ijert.org](http://www.ijert.org/) NCETEIT – 2017 Conference Proceedings.
- Published “Image Retrieval Using Shot Boundary Detection and Key Frame Extraction Based Technique for Video Summarization” at IJRCM in the year 2015.
`,
  },

  "mrs-kavyashree-e-d": {
    name: "Kavyashree E D",
    url: "https://atme.edu.in/mrs-kavyashree-e-d/",
    md: `**Program: ming”**

### Professional Experience

- Teaching: 8 Years
- Research: Nil
- Industry: Nil

### Contact Details

- **Email ID:** Official: kavyashreeed_cs@atme.edu.in | Personal: kavyashreeed@gmail.com
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/201042
- **Google Scholar ID:** https://scholar.google.co.in/citations?user=DcSgOekAAAAJ
- **Scopus ID**
- **Orcid ID**
- **Web of Science**
- **Orcid ID:** https://orcid.org/0000-0002-8003-546X
- **LinkedIn ID:** https://www.linkedin.com/in/kavyashree-devaraju-a17ba2a7/

### ACADEMIC DETAILS

**Qualification**

- M.Tech in Computer Science and Engineering, GSSSIETW, Mysuru, University: VTU, Belagavi.
- B.E in Computer Science and Engineering, ATME College of Engineering Mysuru, University: VTU, Belagavi.

### AREAS OF INTEREST

- Machine Learning
- Artificial Intelligence
- Natural Language Processing
- Data Science
- Quantum Computing

### PUBLICATION DETAILS

- Prof. Kavyashree E D, Amith H M, Jhenkar B, Rohit K Kale, “Automation of Academic Result Processing Using a Database Management System”, in IJIRCCE \| Volume 14, Issue 1, pg 524 to 530, January 2026. [https://www.ijircce.com/admin/main/storage/app/pdf/77\_Automation%20of%20Academic%20Result%20Proces](https://www.ijircce.com/admin/main/storage/app/pdf/77_Automation%20of%20Academic%20Result%20Proces) sing%20Using%20a%20Database%20Management%20System.pdf
- Prof. Kavyashree E D, Kiran Kumar V, Dhanush P L, Amruthesh Chandrashekhar Annigeri, Sindhu H S, “AI-Powered Trip Planner: Personalized Travel Optimization and Recommendation Framework”, in IJIRCCE \| Volume 14, Issue 1, pg 516 to 523, January 2026. [https://www.ijircce.com/admin/main/storage/app/pdf/76\_AI-](https://www.ijircce.com/admin/main/storage/app/pdf/76_AI-) Powered%20Trip%20Planner%20Personalized%20Travel%20Optimization%20and%20Recommendation% 20Framework.pdf
- Kavyashree E D, M K Dechamma, Manjushree A, A Kavya Manjunath Patagar, Dhanush J, **“Skin Disease Detection using CNN”**, in IJIRCCE Volume 13, Issue 5, pf 11033 to 11038, May 2025. [https://ijircce.com/admin/main/storage/app/pdf/tRfYAgpvsR3geVQglEHOsXgn7LcohysXxLgrvvkz.pdf](https://ijircce.com/admin/main/storage/app/pdf/tRfYAgpvsR3geVQglEHOsXgn7LcohysXxLgrvvkz.pdf)
- Kavyashree E D, Inchara K S, Joshitha A, Nandita, Khwaja Adnan Hussain, **“Classify Song Genres from Audio Data”**, in IJIRCCE, Volume 13, Issue 3, pg 2710 to 2715, Mar 2025. [https://ijircce.com/admin/main/storage/app/pdf/nRnBBwca0bw0qRRxpnU8EbdfumtXuP8y0VChfx6U.pdf](https://ijircce.com/admin/main/storage/app/pdf/nRnBBwca0bw0qRRxpnU8EbdfumtXuP8y0VChfx6U.pdf)
- Kavyashree E D, Sathwik K, Syed Tayeeb, Syeda Afra, Tejas B V, **“Detection and Analysis of Autism Spectrum Disorder using Machine Learning”**, IJIRCCE, Volume 12, Issue 5, pg 6117 to 6121, May 2024.
- Kavyashree E D, Chirag A, Jathin Y, Kevin Moses, Dhanush B K, **“Nifty 50 Stock Prediction Using Deep Learning”**, IJIRRCE, Volume 11, Issue 4, pg 2533-2537, April 2023
- Kavyashree E D, Sowmyashree P, Anil Kumar C J, Kiran B, **“An Epigrammatic study on NLP –Tools, challenges and It’s Applications”,** in IJIRRCE, Vol 7, Issue 1, pg 148-152, January 2019.
- Sowmya Shree P,Vidyashree H D,Kavyashree E D, **“Sentiment Analysis: A Brief Overview, Classifications, Applications”**, 2018 IJSRST, Volume 4, Issue 5, ISSN: 2395-6011 \| Online ISSN: 2395-602X.
- Vidyashree H D, Kavyashree E D, Sowmya Shree P, **“A Review on Big Data- Storage Techniques and Its Challenges”**, 2018 IJSRST, Volume 4 Issue 5 ISSN: 2395-6011 \| Online ISSN: 2395-602X.
- Kavyashree E D, Vidyashree H D,Anil Kumar B H, **“A survey of Internet of Things (IoT)-Applications, Merits, Demerits & Challenges”** in IJIRCCE, Volume 6, Issue 2, pg 903-907, February 2018, ISSN(Online):2320-9801.
- Dr.G.Manoj Someswar1, Chaitrashree.V2, Gagana M.S3, Kavyashree E.D4, Deepthi Wilson5, Manju Prasad B6, **“A Review on Epigramatic Study in Network Security”**, Journal of Applied Engineering (JOAE), 5 (3), March-2017 (Volume-V, Issue-III), pg 349-351
- Dr.G.Manoj Someswar1, Kavyashree E.D2, Deepthi Wilson R3, Gagana M.S4, Chaitrashree5, Manju Prasad B6, **“Emospark: Human Emotions Through “Artificial Intelligence Console”,** An international journal of advanced computer technology, 6 (3), March-2017 (Volume-VI, Issue-III),2313-2315.
- Kavyashree E.D1, Kavya P2 **, “Survey on Cloud Computing”**, Journal of Computer Science and Engineering Volume 2 Issue 1, pg 1-6. February 2017 (Mantech Publications, Free Journal).
- Kavyashree E.D, **“Current Trends and Security Issues in Wireless Sensor Networks”**, Journal of Computer, Internet and Network Security Volume2 Issue 1, pg 1-8. February 2017 (Mantech Publications, Free Journal). **National/International Conferences**
- Kavyashree E D, Dr Puttegowda D **“Artificial Intelligence with IoT powerful combination in real time”,** Presented in ICRTST 2023, ATMECE, Mysuru.
- Anees Fathima, Bhavana M, Geetha S, Kavyashree E D, **“Hand Gesture Techniques For Sign Language Recognition”**, Presented in ICRTST 2021, ATMECE, Mysuru.
- Kavyashree E D, Anil Kumar B H, **“An Epigrammatic Study on Android Architecture, Framework and Its Challenges”,** submitted to ICRTST 2021, ATMECE, Mysuru
- Hameeda Banu1, Thamitha2, Pooja3, Kavyashree E D, **“Survey on Blockchain Technology – Merits, Demerits and Its Applications”,** submitted to ICRTST 2020, ATMECE, Mysuru.
- Anil Kumar B H, Kavyashree E D, **“Study on Network Simulation Using Cisco Packet Tracer”** submitted to ICRTST 2020, ATMECE, Mysuru.
- Kavyashree E D, **“Big Data Analytics – Tools, Challenges, Applications, Future Scope”**, Submitted to ICRTST 2020, ATMECE, Mysuru.
- Kavyashree E D, **“6Lowpan Network using Contiki Operating System”,** AIJR, DOI: https //doi.org/10.21467/proceedings.148 ,pp300-310, 2018, 3rd National Conference NCICCNDA 2018 in GSSSIETW on April 28th, 2018\. Awarded Best Paper.
- Kavyashree E.D, Manjuprasad B, **“Energy Efficient Clustering in Wireless Sensor Networks”,** National Conference on Image Processing, computing, communication, Networking, and Data Analytics,29 th July 2017, ISSN :2278-0181, pg 81-84.
- Kavyashree E.D, Manjuprasad B, **“Energy Efficient Clustering and Secure Protocol in Wireless Sensor Networks”,** National Conference in GSSSIETW May 27th, 2017\. IJERT Publications.
- Kavyashree E.D, ManjuPrasad B, “ **Enhanced Energy Efficiency Clustering for Wireless Sensor Networks”.** National Conference in BGSIT May 19th, 2017\. Awarded best paper presentation in conference.
- Kavyashree E.D, Gagana M.S, Manjuprasad B **, “A Review on Clustering Approach: LEACH and its protocols”.** National Conference in GMIT May 05th 2017.IJERT Publications.
- Kavyashree E.D, Vartika Sharma.V, **“Multi Store Database Synchronization and Reports in POS”,** Presented in NIE International Symposium proceedings, March 17th, 2017.
- Kavyashree E.D1, Gagana M.S2, Vartika Sharma3, **“Survey on Security Issues and Challenges on Mapreduce in Big Data Analytics”,** 3 rd National Conference on Emerging Trends in Electronics and Communication (NCETEC-16),2016,pg 1-4,April-2016, ISRASE Digital Library.

### MEMBERSHIP IN PROFESSIONAL BODIES

- Life Member ISTE-LM 127038
- HONOURS/AWARDS/
- ACHIEVEMENTS
- Awarded Best Paper Presentation in National conference, on “Enhanced Energy Efficiency Clustering for Wireless Sensor Networks” in BGSIT, Mandya, on May 19th, 2017.
- Awarded Best Paper Presentation in 3rd National Conference NCICCNDA on “6Lowpan Network using Contiki Operating System” in GSSSIETW, Mysuru on April 28th , 2018.
- Awarded
- Best Teacher Award for the Academic Year 2022-23 by ATME College of Engineering, Mysuru, on Sept 20th , 2024.
- FDPS/WORKSHOPS/STTP/MOOC CERTIFICATION
- Five days FDP on &quot;Emerging AI Technologies: From Machine Learning To Generative AI&quot;, from 27-01- 2026 to 31-01-2026, organized by BGS College of Engineering and Technology (BGSCET), in collaboration with Neuriq Pvt Ltd, Bangalore (Online Mode).
- 6-Day ATAL FDP on “Impact of Quantum Computing and GenAI towards AGI” at CHRIST DEEMED TO BE UNIVERSITY KENGERI CAMPUS from 16thto 21st June 2025.
- 4-Day FDP on “Machine Learning Lab”
- (Online Mode) from 05th08th
- Feb 2025. (Online Mode) 5-Day FDP on “Advanced Research Methods & Data Analysis” from 20thto 24th
- Jan 2025. (Online Mode) 3-Day FDP on “Full Stack Development”, organized by GSSSIETW, Mysuru during 23rdto 25th April 2024.
- 5-Day FDP on “Introduction to Internet of Things (IoT)” from 17thto 21st April 2023 (Online Mode) 5-Day FDP on “Introduction to Web Programming” from 27thto 31st March 2023 (Online Mode) 5-Day FDP on “Contemporary Research Methodology and Latex for Research Documentation” , Organized by GSSSIETW, Mysuru from 20thto 24th July 2020 (Online Mode).
- 1 week FDP on “E Contents and ICT Tools for Innovative and Effective Teaching”,
- Organized by KS Jain Institute of Engineering and Technology, Modinagar, Ghaziabad, Lucknow, on 15thto 21st July 2020. (Online Mode) 6-Day FDP on “Pedagogical Training for Teachers on Tools for Online Teaching Learning and Evaluation” , organized by Swami Ramanand Teerth Marathwada University, Nanded, Maharashtra, from 01stto 06th July 2020. (Online Mode)
- Two Weeks Online FDP on “Python”,
- Organized by JSS Mahavidya peetha, JSS Academy of Technical Education, Noida, from 22nd June to 04th July 2020.
- 5-Day FDP on “PhP & MySQL”, organized by Sridevi Women’s Engineering College, Hyderabad, from 8thto 12th June 2020. (Online Mode) 5-Day FDP on “NBA & NAAC Accrediation Process” , Organized by M.S Ramaiah Institute of Technology, Bengaluru, from 4thto 8th June 2020.
- One day 2nd International Seminar on “Research and Innovation in Engineering and Technology (ISRIET)”, at GSSSIETW Mysuru,on 16th
- Dec 2019.
- 5-Day FDP on “Recent Advances in Machine Learning” in GSSSIETW, Mysuru on 17thto 21st July 2018.
- 3-Day FDP on “Cryptography, Network Security and Cyber Law”, held at VVCE, Mysuru, on 22ndto 24th January 2018.
- 5-Day FDP on “Python Application Programming”, at ATMECE Mysuru, on 17thto 21st January 2018.
- 3-Day FDP on “ARM Cortex M3 Microcontrollers”, at ATMECE Mysuru on 14thto 16th December 2017.
- Workshops 3-Day workshop on “Mobile Application Development” organized by SJB Institute of Technology from 15th to 17th March 2021 (Online Mode).
- 1-Day National Level Workshop on “E Content Creation and Streaming using OBS Studio and Streamyard”
- Organized by Flipschool.com on 19th July 2020. (Online Mode)
- One day Workshop on “R Language”, IIT Bombay in ATMECE, Mysuru on 17th December 2019.
- One day Workshop on “Linux”, IIT Bombay in ATMECE, Mysuru on 23rd August 2019.
- One day workshop on “Art of Counseling” in ATMECE, Mysuru, from 2ndto 9th July 2019.
- One day Workshop on “Python”, IIT Bombay in ATMECE, Mysuru on 22nd June 2019.
- MOOC Certifications
- Completed Swayam NPTEL Online Course Certification on“Machine learning using Python
- Programming”
- Jan – April 2025 (12 Week Course).
- Completed Industrial Training in “Data Analytics using Spreadsheets”, Conducted by National Institute of Electronics and Information Technology (NIELIT), Gorakhpur, with ‘A’ Grade, from 21 st July to 04 th Aug 2025, 2 Weeks/30 hours. (Online Mode).
- Completed Swayam NPTEL, INI Online Course Certification on“Introduction to Machine Learning” from July – Sept 2024 (8 Week Course).
- Completed
- “Introduction to Intellectual Property”, Swayam NPTEL, Jan-June 2024 (12 Week Course).
- Completed
- “Introduction to Internet of Things”, Swayam NPTEL, Jan-Apr 2024 (12 Week Course).
- Completed 1 Course in NITTT, Module 7, “Creative Problem Solving, Innovation, and Meaningful R & D” , Dec 2023 to Feb 2024 (12 Week Course).
- Completed
- “Operating System Fundamentals” , Swayam NPTEL, July to Oct 2023 (12 Week Course).
- Completed Swayam ARPIT Online Course Certification on“Pedagogical Innovations and Research Methodology”, from Nov 2019 to Jan 2020.
- Completed four-week training on Module 1
- “CCNA Routing and Switching: Introduction to Networks”, at ATME College of Engineering, Mysuru on 29th July 2019.
- NITTT Courses 1. Module 1: “Orientation towards Technical Education and Curriculum Aspects”, 29 th March to 31 st May 2025, (8 Week Course).
- 2. Module 2: “Professional Ethics and Sustainability”, 29 th March to 31 st May 2025, (8 Week Course) 3. Module 7: “Creative Problem Solving, Innovation, and Meaningful R &amp; D”, 01 st Oct 2023 to 30 th Nov 2023, (8 Week Course).
- ROLES AND RESPONSIBILITIES:
- INSTITUTE LEVEL
- AVR Asst. Admin

### ROLES AND RESPONSIBILITIES: DEPARTMENT LEVEL

- Class Teacher
- NIRF Dept. Coordinator
- NBA Criteria 4 In charge
- NSS Coordinator
- EMS Coordinator
- IA Coordinator
- ISO Coordinator
- Professional CSI Coordinator
- Alumni Coordinator
`,
  },

  "mrs-keerthana-m-m": {
    name: "Keerthana M M",
    url: "https://atme.edu.in/mrs-keerthana-m-m/",
    md: `### Professional Experience

- Teaching: 10 years
- Research: Nil
- Industry: Nil

### Contact Details

- **Email ID:** Official: KEERTHANAMM_CS@atme.edu.in | Personal: keerthana6.murli@gmail.com
- **Vidwan ID:** https://vidwan.inflibnet.ac.in//profile/201172 (https://vidwan.inflibnet.ac.in/profile/201172)
- **Google Scholar ID:** https://scholar.google.com/citations?hl=en&user=KzRNyzIAAAAJ
- **Scopus ID**
- **Orcid ID:** https://orcid.org/0000-0001-6476-9052
- **Web of Science**
- **LinkedIn ID:** https://www.linkedin.com/in/keerthana-muralidharan-97499661/

### Academic Details

**Qualification**

- M.Tech in Computer Science & Engineering, VKIT, Bangalore.
- B.E in Computer Science & Engineering, GECR, Ramanagar.

### Areas of Interest

- Cloud Computing
- Big Data
- AI&ML

### Publication Details

- Mrs Keerthana M, Bhuvan s, Dheeksha S, Ananya M K and Dheeraj Thotappa has published a paper on “Implementation Of College Online Voting System” inn IJCRT Volume 13 Issue 1 January 2025 , Date of Publication: 30-January-2025.
- Mrs Keerthana M M, Raghavendra K, Subhash K V and Surya M has published a paper on “College Placement System Using Python” in IJCRT Volume 13 Issue 2 February 2025 .
- Keerthana M M, Mohammed Arshad, Mohammed Umar, Yasmeen Taj and Zayed Kifaiyatullah Mohammed has published a paper on “Attendance management system using mobile biometric technology” in IJCRT , volume 12 Issue 5 , 7-May 2024.
- KEERTHANA M M, 2Mr. MADHUSUDHAN S, 3 Mr. MAHADEV PRASAD P S, 4 Mr. MANU M, 5 Mr. VINEETH SHANDILYA M J has published a paper on “IOT ENABLED SMART BLIND STICK “ in IJCRT , volume 12 Issue 5 May 2024 **.**
- KEERTHANA M M, HAMSA A S **,** Assistant professors has presented a paper on **“** IMPLEMENTATION OF PLANT DISEASE DETECTION USING CNN ALGORITHM” in International Conference on Recent Trends in Science & Technology, on 18th & 19th Oct-2023, organized by ATMECE, Mysore.
- HAMSA A S **,** KEERTHANA M M, Assistant professors has presented a paper on **“** Prognosis of Cardiovascular Disease using Machine Learning Approach” in International Conference on Recent Trends in Science & Technology , on 18th & 19th Oct-2023, organized by ATMECE, Mysore.
- KEERTHANA M M & SNEHA N P , Asst professors has published a paper on “ Survey on Big data Analytics “ in IJCRT , Volume 9 , Issue 8 , August 2021.
- KEERTHANA M M , Asst Professor has published a paper on “ Implementation of Protein Function Detection and Classification using CNN Algorithm” in IJIRCCE , Volume 9, Issue 6 , June 2021
- KEERTHANA M M , ANIL KUMAR B H  Asst Professors has published a paper on “Study On Rip And Eigrp Routing Protocols “ in International conference on Recent Trends in science and Technology ( ICRTST) organized by ATMECE, Mysore , 17th and 18th June 2020.
- Mrs Archana M R and Ms keerthana M M, Asst professors, has published a research paper on **“Multimodel image classification through K-means clustering”** in International research journal of Engineering and technology **(IRJET) volume 5, Issue 6 June 2018.** ISSN: 2395-0056.
- Keerthana M M, Asst Prof, has published a research paper on **“Implementation of Graphical Authentication System for Shoulder surfing Attacks**” in “International Journal Of Innovative Research In Computer And Communication Engineering”. **IJIRCCE, Volume 6,Issue 2 , February 2018.** ISSN:2320-9801
- Keerthana M M, Asst Prof, has published a research paper on **“Implementation of Block Level File Operations with the Improvement of File Security on Cloud**” in “International Journal Of Innovative Research In Computer and Communication Engineering”. **IJIRCCE, Volume 5, Issue 1, January 2017.** ISSN: 2320-9798.

### Membership in Professional Bodies

- Indian Society for Technical Education (LM 116853)
- Honours/Awards/
- Achievements
- Online Certifications/ Course completed
- Completed course on Udemy “GCP Associate Cloud Engineer- Google Cloud Certification” on July 9th
- Completed course on Udemy“Patent Filing in India” June 4th
- Completed NPTEL EXAM “Big Data computing
- “ 8 Week course Aug-Oct 2024.
- Completed NPTEL EXAM “IOT “12 week course
- Jul-Oct-2024
- Completed NPTEL EXAM “Cloud Computing “12 week course
- Jul-Oct-2023
- Cleared NPTEL EXAM Feb 2020- “Pedagogical Innovations And Research Methodology (Interdisciplinary).
- Completed “Cyber security “course from Amity University.
- Completed “python for everybody “course from coursera.
- Completed Python for data science – Cognitive class.
- Completed
- NITTT-Module1 : Orientation towards technical education and curriculum aspects, Nov-Feb-2021.
- Received
- “Best paper award” for presenting a paper entitled “Authorized Public Auditing of Dynamic Big-Data with fine-grained updates on cloud” in the National conference on advances in computer science & Engineering jointly organized by CENSA, ISTE & EWIT Bangalore on 29thand 30th April 2015.

### FDPs/Conferences/Workshops/STTP/MOOC Certification

- FDP
- Attended one week FDP on on “Impact of Quantum Computing and GenAI towards AGI” at CHRIST DEEMED TO BE UNIVERSITY KENGERI CAMPUS from 16/06/2025 to 21/06/2025.
- Attended Five day Faculty development program on “Cyber security awareness and emerging technologies for secure social media and banking applications” from 10thto 14th March 2025 organized by Dept of ECE at ATME College of Engineering, Mysuru.
- Attended Three day Faculty development program on “AI, ML& DL in the data evolution era : Progress & Applications
- “from 3rdto 5th
- Feb 2025 at ATME college of Engineering, Mysuru.
- Successfully participated & completed AICTE Training And Learning (ATAL) Academy Faculty Development Program on “CyberSecurity for Industry 4.0
- “at R.V. COLLEGE OF ENGINEERING from 09/10/2023 to 14/10/2023.
- Attended Faculty Development Programme on “Cyber Security” organized by Department of Electronics & Telecommunication Engineering , Institute of Engineering and Technology, Devi Ahilya , Vishwavidhyalaya, Khandwa Road, Indore, MP from 24thto 28th August 2021.
- One Day National Level Online FDP on “New Avenues and Role of Faculty in Effective Implementation of NEP-2020 in HEIs” organized by ATME College of Engineering, Mysuru on 29th January 2021
- Three days FDP on “Importance of NAAC Accreditation in Higher Education Institutions” from 09-11-2020 to 11-11-2020 organized by ATME College of Engineering, Mysuru.
- Attended three days Faculty Development Programme on “AICTE Exam reforms- An Overview” from 27-8-2020 to 29-8-2020 at ATMECE , Mysore.
- Attended Six days National Level FDP on “Moodle and E -Content Creation “from 27-7-2020- to 1-8-2020 , organized by CIT , Coorg.
- Webinars
- Technical Talk on “Natural Language Processing” organized by Department of Computer Science and Engineering, ATME College of Engineering , Mysuru ,on 30th September 2020.
- Webinar on “Unlock your Data with Data Science” organized by Department of ComputerScience and Engineering under CSI Student Branch,, ATME College of Engineering, Mysuru, on 20.07.2020.
- Webinar on “A Process Approach to Writing Research Articles-for Beginners” organized by the Research, Publication & Co-Curricular Activities Committee, ATME College of Engineering, Mysuru, held on 26th August 2021
- Webinar on “How to write Proposals for Funding” organized in associationwith IEEE Student Branch Bangalore Section on 31st December 2020
- Webinar on “Importance of Citations and Indexing” organized in Association with IEEE Student Branch Bangalore Section on 21st October 2020.
- Webinar on “Transform in education through NEP 2020” on 31st May 2021 by BIT, Bengaluru
- Webinar on “Usage of MS word and End note for writing technical papers
- “on 17th Aug 2021 at ATMECE , Mysuru.
- Webinar on “Research funding agencies and how to write a good proposal” by Angadi Institute of Technology on 26th June 2020.
- Webinar on “Laws pertaining to women’s equality” by NIE Mysuru on 27th June 2020

### Proposal/Funding/Project Financial Assistance

- NIL

### Patent

- **National:** International
- **Title: Published/Granted: Patent No.:** Title: Published/Granted: Patent No.:

### Roles and Responsibilities: Institute Level

### Roles and Responsibilities: Department Level

- Placement coordinator
- FDP , Workshop and Technical talk coordinator
- Cultural committee coordinator
`,
  },

  "mrs-roopa-b": {
    name: "Roopa B",
    url: "https://atme.edu.in/mrs-roopa-b/",
    md: `### Professional Experience

- Teaching: 4 years
- Research: Nil
- Industry: Nil

### Contact Details

- **Email ID:** Official: Roopab.cs@atme.edu.in | Personal: roopab6194@gmail.com
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/266956
- **Google Scholar ID:** https://scholar.google.com/citations?user=c4uAmo0AAAAJ
- **Scopus ID:** Nil
- **Orcid ID:** https://orcid.org/0000-0003-1641-2942
- **Web of Science:** Nil
- **LinkedIn ID:** www.linkedin.com/in/roopa-b-36273724b (http://www.linkedin.com/in/roopa-b-36273724b)

### Academic Details

**Qualification**

- M. Tech in Digital Electronics and Communication Systems
- B.E in Electronics and Communication Engineering

### Areas of Interest

- Internet of Things
- Embedded Systems
- Digital Design

### Publication Details

- Roopa B, Dr. G. F. Ali Ahammed, “Stationary Cluster based Routing Protocol for Inter Vehicle Communication”, JETIR, Volume 5, Issue 6, June 2018.
- Roopa B, Pallavi V R, Raksha S, Rakshitha R, “Real-Time Face Mask Detection Using Deep Learning”, IJIRT, Volume 9 Issue 2, July 2022.
- Roopa B, Mithilesh A, Mohamed Farooq Hagalwadi, Mohamed Raihan, Mohammed Kizar, “Personal Windows Assistant using AI and NLP”, IJRAR, Volume 10, Issue 2, May 2023.
- Roopa B, Akash D S, Sangeetha T V, Shreeraksha A, Yashaswini B, “IoT Based Accident Detection and Reporting (RAD) System”, IJCSPUB, Volume 14, Issue 2, May 2024.
- Roopa B, Lokesh S, Mohammed Afnan, Mohammed Mueed Ahmed, Nisarga G, “IoT Based Smart Security System for Crime Detection”, IJCRT, Volume 13, Issue 6, June 2025.
- Roopa B, Vijay R Gali, Puneeth J, Vikas Sampath, Raghunandan A S, “An AI-Powered Platform for Enhanced Skill Matching and Trust in the Gig Economy: The Skill-Bridge Connect”, IJARESM, Volume 13, Issue 12, December-2025.

### MEMBERSHIP IN PROFESSIONAL BODIES

- International Association of Engineers (IAENG)

### HONOURS/AWARDS/ ACHIEVEMENTS

- Nil

### FDPS/CONFERENCES/WORKSHOPS/STTP/MOOC CERTIFICATION

- FDPS 1. NPTEL-AICTE FDP on “Introduction to Programming in C”, Feb-Apr 2022.
- 2. Five-day FDP on “5G/6G Technologies for wireless systems” from 27 th – 31 st March 2023 at ATMECE.
- 3. NPTEL-AICTE FDP on “Introduction to Internet of Things”, Jul-Oct 2023.
- 4. Three-day Face-to-Face FDP on “Inculcating Universal Human Values in Technical Education” organized by AICTE at ATME College of Engineering, Mysuru, from 2 nd – 4 th November 2023.
- 5. Five-day FDP on “PCB design and IoT Applications” from 6 th -10 th November 2023, at BMSIT&amp;M, Bangalore.
- 6. Five-day FDP on “Python and Django Framework” organized by Dept. of CSE, MRIT, Mandya from 21 st – 25 th January 2025.
- 7. Three-day National level FDP on “Indian Knowledge System (IKS)”, at ATMECE, 5 th – 7 th March 2025.
- 8. NPTEL-AICTE FDP on “Enhancing Soft Skills and Personality”, Feb-Apr 2025.
- 9. Online Five days Professional development Program Organized by NITTTTR Chennai on “IoT Projects using TinkerCad”, 7 th – 11 th July 2025.
- 10. NPTEL-AICTE FDP on “Introduction to Industry 4.0 and Industrial Internet of Things”, Jul-Oct 2025.
- WORKSHOPS/STTP 1. SERB sponsored 3-day national level seminar on “Research Avenues in Artificial Intelligence and Allied Areas” from 24 th – 26 th March 2022 at ATMECE.
- 2. One Week AICTE – VTU Joint Online Teachers Training Program On “An Overview of Teaching Techniques in Data Science and Analytics”, 25 th – 29 th April 2022.
- 3. Five-day International Webinar on &quot;Recent Developments and Trends in Electrical Engineering (Series 3: EV Technology and Battery Management Systems)&quot; from 22 nd – 27 th April 2024, organized by Department of Electrical &amp; Electronics Engineering, Dayananda Sagar College of Engineering, Bengaluru.
- 4. One day Conclave on “Addressing Student Challenges in higher education: Aligning Learning with Industry Needs” on 16 th April 2025, organized by the department of RAI &amp; TPO, JSS University Noida.
- 5. Three days workshop on “Patent Drafting, Filing and Interpretation”, at ATMECE, 12 th – 14 th June 2025.
- MOOC 1. NPTEL online Certification on “Introduction to Programming in C”, Feb-Apr 2022 (8-week course).
- 2. NPTEL online Certification on “Introduction to Internet of Things”, Jul-Oct 2023 (12-week course).
- 3. NPTEL online Certification on “Digital Design with Verilog”, Jan-Apr 2024 (12-week course).
- 4. SWAYAM online course certification on “Internet of Things: Design Concepts and Use Cases”, July to December 2024, Offered by NITTTR, Chandigarh.
- 5. NPTEL online Certification on “Enhancing Soft Skills and Personality”, Feb-Apr 2025 (8-week course).
- 6. SWAYAM online course certification on “Indian Knowledge System: Concepts and Applications in Engineering”, Feb-May 2025, Offered by IIMB and Chanakya University, Mysuru.
- 7. NPTEL online Certification on “Introduction to Industry 4.0 and Industrial Internet of Things”, Jul-Oct 2025 (12-week course).
- 8. Udemy Certification on “Patent filling in India”, Sep 2025.
- CONFERENCE 1. Roopa B, Nischitha GD, Pranam KU, Shreyas KC, Tanishka V, “IoT-Based Waste Segregation for Smart Cities”, IETE Sponsored 7th National Conference on Emerging Trends in Engineering, Science and Technology (NCETEST-7), 2024 at RNSIT, Bangalore.
- 2. Roopa B, Pradeep HS, Pratik G Alurkar, Shreyas B, Sophiya AS, “Driveaware: A Vision based traffic sign detection and text recognition system”, International Conference on Artificial Intelligence in Engineering Systems (ICAIES 2025), at RIT, Hassan.
- 3. Roopa B, Dishanth J, Harshith KV, Harshith R, Jithin Simon, “SmartFire: Real-time object-level fire detection and Suppression recommendation via YOLOv8 and IoT”, International Conference on Artificial Intelligence in Engineering Systems (ICAIES 2025), at RIT, Hassan.

### PROPOSAL/FUNDING/PROJECT FINANCIAL ASSISTANCE

- Nil

### PATENT

- FACE RECOGNITION SYSTEM AND METHOD USING DEEP LEARNING – Published on 18/11/2022.

### Roles and Responsibilities: Institute Level

- Nil

### Roles and Responsibilities: Department Level

- EMS Coordinator
- IA Coordinator
- NBA Criteria-5 Coordinator
- NIRF Publication Coordinator
- Class teacher
`,
  },

  "mrs-shrilakshmi-prasad": {
    name: "Shrilakshmi Prasad",
    url: "https://atme.edu.in/mrs-shrilakshmi-prasad/",
    md: `### Professional Experience

- Teaching: 5 years
- Research: Nil
- Industry: Nil

### Contact Details

- **Email ID:** Official: shrilakshmiprasad_cs@atme.edu.in | Personal: shrilakshmiprasad@gmail.com
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/449422/NDQ5NDIy
- **Google Scholar ID:** https://scholar.google.com/citations?user=mt8DwFEAAAAJ&hl=en
- **Scopus ID**
- **Orcid ID:** https://orcid.org/0009-0004-9774-888x
- **Web of Science**
- **LinkedIn ID:** www.linkedin.com/in/shrilakshmi-prasad-949088376 (http://www.linkedin.com/in/shrilakshmi-prasad-949088376)

### Academic Details

**Qualification**

- M.Tech in Computer Science and Engineering
- B.E in Computer Science and Engineering

### Areas of Interest

- Machine Learning
- Artificial intelligence

### Publication Details

- Ayurhealth Drug Recommendation System in IJCRT journal Volume 13 Issue 2 February 2025.
- Recommendation System based on Sentiment analysis of Drug Reviews using Machine Learning in IJCRT journal volume 12 Issue 5 May 2024.
- Shrilakshmi Prasad, Arpitha D, _“Student Attendance Tracking system using Biometrics_ “ in IRJET journal Volume 5 Issue 3 March 2018
- Arpitha D, Shrilakshmi Prasad, Prakruthi S, “ _Python Based Machine learning for profile Matching”_ in IRJET journal Volume 5 Issue 3 March 2018
- Journal paper on cloud computing is published in the International Journal Of Advance Research in Computer Science and Management Studies.

### FDPs/Conferences/Workshops/STTP/MOOC Certification

- FDP on Impact of Quantum Computing and GenAI towards AGI organized by ATAL at Christ Deemed to be University, Bengaluru from 15/6/2025 to 20/6/2025.
- FDP on Full Stack Development organized by GSSS Institute of Technology for Women, Mysuru from 23/4/2025 to 25/4/2024
- FDP on the theme “Python Application programming” organized by ATME College of Engineering, Mysuru from 17th January to 20th January 2018.
- FDP on the theme “Personality Development” organized by ATME College of Engineering, Mysuru on 19th August 2017.

### Roles and Responsibilities: Institute Level

- Women Cell Coordinator

### Roles and Responsibilities: Department Level

- IA Coordinator.
- EMS Coordinator.
- Student Councellor
- Department Library Incharge
- Honours Degree Coordinator
- Mentoring Coordinator
- NBA Criteria 2 and NAAC Criteria 3 Coordinator
`,
  },

  "ms-akanksha-v": {
    name: "Ms Akanksha V",
    url: "https://atme.edu.in/ms-akanksha-v/",
    md: `### Professional Experience

- Teaching: Nil
- Research: Nil
- Industry: Nil

### Contact Details

- **Email ID:** Official: akankshav.cs@atme.edu.in | Personal: pakankshav@gmail.com
- **Vidwan ID**
- **Google Scholar ID**
- **Scopus ID**
- **Orcid ID:** https://orcid.org/0009-0007-7113-0928
- **Web of Science Researcher ID**
- **LinkedIn ID:** www.linkedin.com/in/akanksha-v-844997224 (http://www.linkedin.com/in/akanksha-v-844997224)

### Academic Details

**Qualification**

- Master of Technology in Information Technology,2025 at The National Institute of Engineering, Bachelor of Engineering in Computer Science and Engineering at VVIET 2023.

### Areas of Interest

- Machine Learning
- Artificial intelligence
- Data Science

### Publication Details

- Journal Publications:
- Published a journal paper on “Sepsis detection using Supervised Machine Learning Algorithms”, in IJNRD | ISSN: 2456-4184

### Membership In Professional Bodies

- NIL

### Honours/Awards/ Achievements

- NIL

### FDPs/Conferences/Workshops/STTP/MOOC Certification

- FDP on “Growing Globally competitive currency in Higher Education ” , ATME college of Engineering ,Mysuru.

### Proposal/Funding/Project Financial Assistance

- NIL

### Patent

- NIL

### Roles and Responsibilities: Institute Level

- NIL

### Roles and Responsibilities: Department Level

- NIL
`,
  },

  "ms-kavitha-s": {
    name: "Ms Kavitha S",
    url: "https://atme.edu.in/ms-kavitha-s/",
    md: `### Professional Experience

- Teaching: 0
- Research: 0
- Industry: 0

### Contact Details

- **Email ID:** Official: kavithas.cs@atme.edu.in | Personal: kavithas0512@gmail.com
- **Vidwan ID**
- **Google Scholar ID**
- **Scopus ID**
- **Orcid ID:** https://orcid.org/0009-0001-0424-5633
- **Web of Science Researcher ID**
- **LinkedIn ID:** https://www.linkedin.com/in/kavitha-s-aaa692220

### Academic Details

**Qualification**

- Master of Technology in Information Technology,2025 at The National Institute of Engineering, Bachelor of Engineering in Information Science Engineering at VVIET Mysore 2023

### Areas of Interest

- C Programming
- Machine Learning
- Data Science

### Publication Details

- Journal Publications:
- “Audio to Sign Language Translation”, paper published in IRJMETS in May-2023, e-ISSN: 2582- 5208

### Membership in Professional Bodies

- NIL

### FDPs/Conferences/Workshops/STTP/MOOC Certification

- FDP on “Growing Globally competitive currency in Higher Education” , ATME college of Engineering , Mysuru

### Honours/Awards/ Achievements

- University rank holder

### Patent

- NIL

### Roles and Responsibilities: Institute Level

- NIL

### Roles and Responsibilities: Department Level

- NIL
`,
  },

  "ms-kavyashree-b-l": {
    name: "Ms.Kavyashree B.L",
    url: "https://atme.edu.in/ms-kavyashree-b-l/",
    md: `### Professional Experience

- Teaching: 3.3 Years
- Research: Nil
- Industry: 2 Years

### Contact Details

- **Email ID:** Official: kavyashreebl.cse@atme.edu.in | Personal: kavyareddybl.bdvt@gmail.com
- **Vidwan ID:** 705374
- **Google Scholar ID**
- **Scopus ID**
- **OrcidID**
- **Web of Science Researcher ID**
- **LinkedIn ID:** https://www.linkedin.com/in/kavya-shree-1b1ab986/

### Academic Details

**Qualification**

- M. Tech in Computer Science &amp; Engineering, City Engineering College, Bangalore, VTU Belagavi – 2016
- B.E in Computer Science &amp; Engineering, KIT, TIPTUR , VTU Belagavi – 2012

### Areas of Interest

- 1. Database Management Systems 2. Machine Learning 3. Python Programming

### Publication Details

- Summarizing and Re-evaluating users reviews on the network, International Journal of Computer Science and Information Technology Research, ISSN 2348-120X, Volume: 4, Issue : 2, 2016
- Estimating and Recapitalizing the clients reviews efficiently on snare ,International Conference on & Computer Science and Technology Allies In Research &ICCSTAR-2016, IJCSE

### Membership in Professional Bodies

- Honours/Awards/
- Achievements

### FDPs/Conferences/Workshops/STTP/MOOC Certification

- Participated in National Conference on &quot; Real-Time Systems &quot; NCRTS-2015
- Participated in International Conference on &quot;Advances in Computer and Communication Engineering &quot; ACCE-2015.
- Participated seminar on &quot; BIGDATA ANALYTICS 2018 held in Bangalore
- Certified course in Front end development-HTML 2021 through GREAT LEARNING ACADEMY.Below is the URL of the certificate. https://olympus1.greatlearning.in/course_certificate/NGLUYDBC
- Certified course in PYTHON for MACHINE LEARNING in the year 2021 Through GREAT LEARNING ACADEMY. Below is the URL of the certificate.
- https://olympus1.greatlearning.in/course_certificate/PHSLCCUH
- Certified course in Artificial Intelligence website Design tools 2020. Below is the URL of the certificate through UDEMY. https://www.udemy.com/certificate/UC-cc7329d5-bc7c-4582-ad4f-9d707917a635/
- Participated in Faculty Development Programme(FDP) on &quot;MACHINE LEARNING&quot; jointly organized by department of CSE and ISE in RNSIT Engineering college in the year 2018.
- Participated in 2-Day Faculty Development Programme(FDP) on “OBJECT ORIENTED PROGRAMMING WITH JAVA LABORATORY –  21CSL35”organized by the Department of AIML, G M Institute of Technlology, Davanagere in the year 2022.
- Participated in 5-Days Faculty Development Programme on “Accreditation Process-NBA with a focus on Active Learning” organized by AICTE Sponsored Share and Mentor Institutions (Margdarshan) scheme held in the year 2022.

### Patent

- NIL

### Roles and Responsibilities: Institute Level

- NIL

### Roles and Responsibilities: Department Level
`,
  },

  "ms-rakshitha-n-m": {
    name: "Ms Rakshitha N M",
    url: "https://atme.edu.in/ms-rakshitha-n-m/",
    md: `### Professional Experience

- Teaching: 1
- Research: Nil
- Industry: 1 year
- **Teaching:  1 Year:** Research:Nil | Industry: 1 year

### Contact Details

- **Email ID:** Official: rakshithanm.cs@atme.edu.in | Personal: nmrakshitha92@gmail.com
- **Vidwan ID**
- **Google Scholar ID**
- **Scopus ID**
- **Orcid ID:** 0009-0003-3323-9675
- **Web of Science Researcher ID**
- **LinkedIn ID**

### Academic Details

**Qualification**

### Areas of Interest

- Deep leaning
- Web Development

### Publication Details

- NIL

### Membership in Professional Bodies

- NIL

### FDPs/Conferences/Workshops/STTP/MOOC Certification

- CAUVERY COLLEGE GONIKOPPAL
- Organized by:
- Kamala institute of technology & science, singapur, Huzurabad, Karimnagar.
- Theme:
- Data visualization using Power BI
- Mode:
- Online
- Duration: 5 Days (2nd– 6th August 2024)
- Participation:
- Successfully completed
- COLLEGE OF ENGINEERING ( Maharashtra)
- Organized by:
- Dr. Vithalrao
- Theme:
- Augment Reality / Virtual Reality (AR/VR)
- Mode:
- Online
- Duration: 7 Days (25TH
- – 31ST August 2025)
- Participation:
- Successfully completed
- JBIET
- Organized by:
- J B Institute of Engineering & Technology (JBIET), Hydrabad, Telangana.
- Theme:
- Cloud Computing
- Mode:
- Online
- Duration: 5 Days (14TH
- – 18ST July 2025)
- Participation:
- Successfully completedSJC
- INSTITUTE OF TECHNOLOGY
- Organized by:
- Department of MBA & Research Centre, SJCIT(Chikkaballapur).
- Theme:
- Gen AI & Chat GPT Application in the Industry
- Mode:
- Online
- Duration: 5 Days (27TH
- – 31ST
- Jan 2025)
- Participation:
- Successfully completed

### Honours/Awards/ Achievements

- K-SET

### Patent

- Application Number: 202541016144, Title of Invention: A Graphical User Interface for a Video Editing Software Tool

### Roles and Responsibilities: Institute Level

- NIL

### Roles and Responsibilities: Department Level

- NIL
`,
  },

  "nasreen-fathima": {
    name: "Dr. Nasreen Fathima",
    url: "https://atme.edu.in/nasreen-fathima/",
    md: `**Faculty Name:** Dr. Nasreen Fathima

**Designation:** Associate Professor & Head

**Program:** Computer Science and Engineering – Cyber Security

### Professional Experience

- Total: 21 Years
- Teaching: 21 Years
- Research: 3 Years
- Industry: Nil

### Contact Details

- **Email ID:** Official: nasreenfathima_cs@atme.edu.in | Personal: nasreenfathima16@gmail.com
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/200921
- **Google Scholar ID:** https://scholar.google.co.in/citations?user=MwC_dScAAAAJ
- **Scopus ID:** https://www.scopus.com/authid/detail.uri?authorId=57192573293
- **Orcid ID:** https://orchid.org/0000-0002-7361-8683
- **Web of Science Researcher ID:** AAE-3648-2019
- **LinkedIn ID:** https://www.linkedin.com/in/dr-nasreen-fathima-7b3b4845/

### Academic Details

**Qualification**

- Ph.D. in Computer Science and Engineering
- M. Tech in Computer Network Engineering
- B.E in Computer Science and Engineering

### Areas of Interest

- Machine Learning
- Network Security
- Internet of Things

### Publication Details

- Kumar, H.S.R., Preethi, S., Fathima, N. et al. Deep Learning Models for Early Identification of Learning Disorders in Children with Autism Spectrum Disorder. SN COMPUT. SCI. 6, 761 (2025). https://doi.org/10.1007/s42979-025-04308-3
- Prashanth, M.V., Bharath, K.N., Fathima, N. et al. Machine Learning Approaches for Solar PV Fault Identification. SN COMPUT. SCI. 6, 839 (2025). https://doi.org/10.1007/s42979-025-04364-9.
- Dr. Nasreen Fathima, Dr. M S Sunitha Patel, Kiran B submitted a paper titled “Novel Intelligent Trust Computation for Securing Internet-of-Things using Probability based Artificial Intelligence” to Indonesian Journal of Electrical Engineering and Computer Science (IJEECS), May 2025.
- Dr. Nasreen Fathima, Mohammed Shezan, Niha Rehman, Preksha Jain M, Shishira N, published a paper titled “Conversion of 2D Blueprints into 3D Models”, in UGC care journal IJIRT ISSN: 2349-6002.
- Dr. Nasreen Fathima, Ankush Manjunath Naik, Chandan Kumar M S, Gulab Singh, Manoj Gowda K B, published paper titled “A Surveyon Available Methods for Human Computer Interaction” in DogoRangsang Research Journal, UGC Care Group I Journal, ISSN : 2347-7180. Vol-13, Issue-5, No. 5,May2023.
- Dr. Nasreen Fathima, Lakshmi C, Parineeth Sai S Kotian , Pavan Kumar D, Suhas M S, published a paper titled “Design And Implementation Of Sign-Language In A Chatbot” in UGC care journal- International journal of Cultural Studies and Social Sciences, Vol 20, Issue-01 ISSN: 2347-4777, June 2024.
- Dr. Nasreen Fathima, Ayesha Siddiqua, Bi Bi Sara, Jeevan P, Mohammad Meraj, published a paper titled “AI Powered Legal Documentation Assistant” in UGC care journal- International journal of Cultural Studies and Social Sciences, Vol 20, Issue 01 ISSN: 2347-4777, June 2024.
- Dr. Nasreen Fathima, Navya Urs. S, Anarghya Manonidhi Rashi S.D , M .S Spoorthi , and Amshu.V.Jain “A Survey On Available Aids For Guiding Blinds” in DogoRangsang Research Journal, UGC Care Group I Journal, ISSN : 2347-7180. Vol-13, Issue-4, No. 6, April 2023
- Dr. Nasreen Fathima, Dr. Reshma Banu, Dr. G F Ali Ahammed, published paper titled “Integrated Signing Procedure Based Data Transfer Security and Authentication Framework for Internet of Things Applications” in Wireless Personal Communications(WPC) March 2023. https://doi.org/10.1007/s11277-023- 10291-w
- Dr. Nasreen Fathima, Sunitha Patel published paper titled “Secure Transmission Of Data Between Nodes And Gateway in Internet of Things” in DogoRangsang Research Journal, UGC Care Group I Journal, ISSN : 2347- 7180. Volume-12 Issue-09, September 2022.
- Nasreen Fathima, Dr. Reshma Banu, Dr. G F Ali Ahammed, published paper titled “A Signature Based Data Security and Authentication Framework for Internet of Things Applications” in International Journal of Electrical and Computer Engineering (IJECE), 12, No. 3, (June 2022). http://doi.org/10.11591/ijece.v12i3.pp3298-3308
- Nasreen Fathima, Dr. Reshma Banu, Dr. G F Ali Ahammed, published paper titled “Framework for Secure Transmission between Communicating Nodes with the Internet Host in IoT” in International Journal of Disaster Recovery and Business Continuity (IJDRBC), 11, No. 1, (2020), pp. 1370-1380. http://sersc.org/journals/index.php/IJDRBC/article/view/16042
- Nasreen Fathima, Dr. Reshma Banu, Dr. G F Ali Ahammed, published paper titled “An Insight of Existing Research Approaches towards Securing IoT Communication System” in International Journal of Innovative Technology and Exploring Engineering (IJITEE), Vol-9 Issue-4 February 2020. DOI:35940/ijitee.D1621.029420 http://www.ijitee.org/wp-content/uploads/papers/v9i4/D1621029420.pdf
- Nasreen Fathima, published paper on “Hand Gesture Recognition using IOT” in IJRECE Volume 7, Issue 2, April- June 2019, ISSN- 2348-2281.
- Nasreen Fathima, published paper on “Data Mining Techniques Used To Predict Chronic Kidney Disease” in IJSRCSEIT Volume 4, Issue 6, May-June 2018, ISSN- 2456-3307.
- Nasreen Fathima, Dr. Reshma Banu, Dr. Ali Ahammed, published a paper on “A Comparitive study of Routing Approaches for Energy Constrained Devices in IoT” in IJCESR DOI: [10.21276/ijcesr](https://doi.org/10.21276/ijcesr), Volume IV Issue I, Jan – 2017.
- Nasreen Fathima, published a paper on “Review on the Research Evolution on Secure Routing in Wireless Sensor Network” in IJCA, ISBN 973-93-80887-31-0, Volume 119 No.17, June – 2015.
- Nasreen Fathima, Dr. Reshma Banu, Dr. G F Ali Ahammed, presented a paper titled “Modeling of Secure Communication in Internet-of-Things for Resisting Potential Intrusion” to International Conference 3rd Computational Methods in Systems and Software 2019 (CoMeSySo 2019) on Oct 3 to Oct 5 2019. Further the paper is published in the Springer Series: Advances in Intelligent Systems and Computing – ISSN 2194-5357. This series (proceedings) is indexed by SCOPUS and Web of Science. https://link.springer.com/chapter/[10.1007/978-3-](https://doi.org/10.1007/978-3-) 030-31362-3\_38
- Nasreen Fathima, Dr. Reshma Banu, Dr. Ali Ahammed, presented a paper on “An Approach for Security in IOT” at ICEECCOT Dec2018 at GSSSIETW, Mysuru, published in IEEE Digital Library Indexed by Scopus, Dec 15 2018.
- Nasreen Fathima, Dr. Reshma Banu, Dr. Ali Ahammed, presented a paper on “Optimized Neighbor Discovery in IoT” at ICEECCOT-2017 at GSSSIETW, Mysuru DOI: 1109/ICEECCOT.2017.8284573
- Reshma Banu, Dr. Ali Ahammed, Nasreen Fathima, presented a paper on “A Review on Biologically Inspired Approaches to Security for Internet of Things (IoT)” at ICEEOT 2016, published in IEEE Digital Library. DOI: [10.1109/ICEEOT.2016.7754848](https://doi.org/10.1109/ICEEOT.2016.7754848).

### Membership in Professional Bodies

- Life Member ISTE – LM 116842

### Honours/Awards/Achievements

1. NPTEL topper for the course Data Base Management Systems
2. GATE Qualified 2015.

### FDPs/Conferences/Workshops/STTP/MOOC Certification

**MOOC Courses:**

1. NPTEL Course on Introduction to Internet of Things Jan-Apr 2026 (12 weeks).
2. NPTEL Course on Data Structures and Algorithms Design Jul-Oct 2025 (12 weeks).
3. NBA Accreditation and Teaching and learning in Engineering (NATE) April 2024.
4. NITTT-Module 5: Technology Enabled Learning and Life Long Self Learning, February 2024.
5. NITTT-Module 1: Orientation Towards Technical Education and Curriculum Aspects 2021.
6. NPTEL Course on Computer Networks and Internet Protocol 2021 (12 weeks) - was one of the toppers.
7. NPTEL Course on DataBase Management System Jul-Sep 2019 (8 weeks) - was one of the toppers.
8. ARPIT Course on Pedagogical Innovations and Research Methodology (arp19 ap72), Feb 2020.
9. MATLAB Onramp by MathWorks April 2019.

**FDP/Workshop/STTP:**

1. Attended 1 week FDP on "High Performance Computing and Artificial Intelligence" at Mysuru Royal Institute of Technology, Mysuru held from 09-Feb 2026 to 14-Feb-2026.
2. Attended 2 week ATAL FDP on "AI and Data Science Tools for Future Generation Learning" at Navkis College of Engineering, Hassan held from 14-July 2025 to 26-July-2025.
3. Attended 5 Day Workshop on "HPC Synergy: Elevating AI with High Performance Parallel Computing" Organized by The Indian Institute of Information Technology, Sri City, Chittoor, AP from July 22 to 26, 2024.
4. One Day National Level Online FDP on "New Avenues and Role of Faculty in Effective Implementation of NEP-2020 in HEIs" organized by ATME College of Engineering, Mysuru on 29th January 2021.
5. AICTE Training and Learning (ATAL) Online Faculty Development Programme on "Building Smart Things by Leveraging IoT Technology" from 4th to 8th January 2021.
6. Webinar on "Scientific writing for Journals" organized by Springer Nature in collaboration with Visvesvaraya Technological University Consortium on Sep 30, 2020.
7. NBA Awareness Webinar on Outcome Based Education and Accreditation from ATME College of Engineering Mysuru on 20th October 2020, jointly organized by National Board of Accreditation, New Delhi and Visvesvaraya Technological University, Belagavi for the Engineering Colleges and Deemed to be Universities in Karnataka.
8. Three Days Faculty Development Program on "Importance of NAAC Accreditation in Higher Education Institutions" Organized by ATME College of Engineering, Mysuru from 09-11-2020 to 11-11-2020.
9. One day workshop on QS Ranking & Rating at IISC, Bangalore on 20th Jan 2020.
10. 4 Days Online Examination Reforms Training Workshop Organized by All India Council for Technical Education (AICTE) and KLE Technological University, Hubballi on 29th April to 2nd May 2020.
11. Two weeks online FDP on "Python" jointly organized by Department of Electronics & Communication Engineering, JSS Academy of Technical Education NOIDA and Spoken Tutorial Project IIT Bombay from 22nd June - 4th July 2020.
12. Six days workshop on "Art of Counselling" from 2nd July to 9th July 2019 at ATMECE, Mysuru.
13. One day workshop on Linux from IIT-Bombay at ATMECE, Mysuru on 23 Aug 2019.
14. Three Days Zonal Level workshop on "Internet of Things" from 17th to 19th Jan 2019 at ATMECE, Mysuru conducted by GeeksLab technologies in association with IIT Delhi.
15. Two days workshop on "Research Proposal Preparation" on 5th Sep and 6th Sep 2019 at SJCE, Mysuru.
16. Four Days Faculty Development Program On "PYTHON APPLICATION PROGRAMMING" from 17th to 20th January, 2018 in Association with iQuest, Mysuru, at ATME, Mysuru.
17. One Week National Level Faculty Development Programme on "Cyber Warfare: Techniques, Tactics & Tools for Network Security" from 24th to 28th July 2017 at GSSSIETW, Mysuru.

### Proposal/Funding/Project Financial Assistance

1. Submitted VGST proposal to organize FDP on Data Science and its Applications, Application No.: VRN/001654/22-23, during May 2023.
2. Submitted K-Tech NAIN, Project Title - Smart Glasses Oct 2023.
3. Submitted proposal for VGST Grants for Research Excellence Proposal titled "Automated Real Time Garbage Assessment System", reference No.: VRN/001114/22-23.
4. Submitted SERB Power Research Project proposal worth Rs. 30 Lakhs, project file No.: SPG/2022/000265, during Sep 2022.
5. Submitted VGST proposal to organize FDP on Blockchain technology and its Applications, Application No.: VRN/002898/20-21, during Feb 2021.

### Patent

1. System and Method For Traffic Clearance In Emergency, Application No.: 202241063006, publication date - 18/11/2022.

### Roles and Responsibilities: Institute Level

1. Heading Department of Computer Science Design and CSE-Cyber Security.
2. Associate for Dean Research from 31-August 2020 to 1-April 2022.
3. Organizing Committee Member for International conference ICRTST 2023, 2022 & 2021.
4. QS I-GAUGE Institute coordinator from 2020-2023.
5. CICC member from 2017 to 2022.
`,
  },

  "dr-pavithra-m-s": {
    name: "Dr Pavithra M S",
    url: "https://atme.edu.in/dr-pavithra-m-s/",
    md: `**Faculty Name:** Dr Pavithra M S

**Designation:** Associate Professor

**Program:** BE (CSE-Cyber Security)

### Professional Experience

- Teaching: 17
- Research: 3
- Industry: Nil

### Contact Details

- **Email ID:** Official: dr.pavithrams_mca@atme.edu.in | Personal: ngspavithra@gmail.com
- **Vidwan ID:** 3434391
- **Google Scholar ID:** 52EjjhgAAAAJ
- **Scopus ID:** 57204231482
- **Orcid ID:** 0009-0007-7968-9099
- **Web of Science Researcher ID:** -
- **LinkedIn ID:** linkedin.com/in/dr-pavithra-m-s-87b555216

### Academic Details

**Qualification**

- Ph.D in Computer Science
- Master of Computer Applications (MCA)
- BSc (Computer Science)

### Areas of Interest

- Digital Image Processing and Computer Vision
- Artificial Intelligence
- Cybersecurity

### Publication Details

**Publications in Proceedings**

1. "A Study on Development of A Finance Service of EGovernment In Karnataka Muncipalities", In the Proceedings of International Conference ICSE-2010, 2010.
2. "A robust multilingual text detection approach based on transforms and wavelet entropy", In the Proceedings of 2nd International Conference on Computer, Communication, Control and Information Technology, vol. 4, pages. 232-237, 2012.
3. "An exploration of Wavelet Transform and Level Set Method for Text Detection in Images and Video Frames". In the Proceedings of Second International Symposium on Intelligent Informatics (ISI'13) co-located with International Conference on Advances in Computing, Communications and Informatics (ICACCI'13), vol. 235, pages. 419-426, 2014.
4. "An application of LBF energy in image/video frame Text Detection", In the Proceedings of IAPR IEEE 14th International Conference on Frontiers in Handwriting Recognition (ICFHR), Crete Island, Greece, pages. 760-765, 2014.

**Publications in International Journals**

1. "Machine Learning for Art Critique Generation", Shodhkosh: Journal of Visual and Performing Arts, Vol. 6, Issue 5, pages. 373-383, 2025.
2. "Managing Contemporary Art Institutions with Predictive Insights", Shodhkosh: Journal of Visual and Performing Arts, Vol. 6, Issue 5, pages. 384-393.
3. "A Comprehensive of transforms, Gabor filter and k means clustering for text detection in images and video", Applied Computing and Informatics (ELSEVIER), Vol. 12, Issue 2, pages. 109-116, 2016.
4. "Arbitrary Oriented multilingual text detection and segmentation using level set and Gaussian mixture model", Evolutionary Intelligence (Springer-Verlag), 1-14, 2020.

### Membership in Professional Bodies

_Nil_

### Honours/Awards/Achievements

_Nil_

### FDPs/Conferences/Workshops/STTP/MOOC Certification

1. A Five-day FDP on "Cloud Computing & Cloud Security: Architectures, Technologies & Best Practices", dated 16th Feb 2026 to 20th Feb 2026 at ATME College of Engineering, Mysuru.
2. One Day ToT Workshop On "Innovation & Design Thinking", dated 10th October 2025 at Vidya Vardhaka Engineering College, Mysuru.
3. Faculty Development Programme on "Artificial Intelligence, Machine Learning & Deep Learning in the Data Revolution ERA: PROGRESS & APPLICATIONS" dated 3rd February to 5th February 2025 at ATME College of Engineering, Mysuru.
4. Faculty Development Programme on "Inculcating Universal Human Values in Technical Education" dated 2nd to 4th November 2023 at ATME College of Engineering Mysuru.
5. Workshop on "Research Methodologies & Latex" dated 25th June to 27st June 2013 at SJB Institute of Technology, Bangalore-60.
6. Workshop on "Applications of Wavelets for Signal & Image Processing in Research" dated 8th & 9th April 2013 at JSS Academy of Technical Education, Bengaluru.
7. Workshop on "Digital Video Analytics and Processing (DVAP-2012)" dated 21st & 22nd December 2012 at Indian Institute of Technology, Madras.
8. Workshop on "Reasearch Methodologies and Latex" dated 21st and 22nd November 2011 at Vidyavardaka College of Engineering, Mysore.
9. One Week Short Term Training Program on "Linear Algebra and Its Applications" dated 24th to 28th January 2011 at J.N.N. College of Engineering, Shimoga.
10. Faculty Development Programme on "Cloud Computing and Virtualization" dated 10th, 11th & 12th January 2011 at Dayananda Sagar College of Engineering, Bangalore.
11. National Workshop on "Image Processing & Computer Vision-2010" dated 2nd to 4th June 2010 at Dayananda Sagar College of Engineering, Bangalore.
12. Conference Workshop – ICSE – 2010 on "Convergence of Science & Engineering in Education and Research A Global Perspective in the New Millenium" dated 24th April 2010 at Dayananda Sagar College of Engineering, Bangalore.
13. National Workshop on "Image Processing and Computer Vision" dated 16th and 17th October 2008 at Dayananda Sagar College of Engineering, Bangalore.
14. Completed Empowered Leadership Program by Centre for Innovation & Leadership, 2007-2008 at DSI, Bangalore.
15. NAAC sponsored National Seminar on "Quality Sustenance and Enhancement of Higher Education through IQAC" dated 23rd and 24th April 2007 at BMS College for Women, Bangalore.

### Proposal/Funding/Project Financial Assistance

_Nil_

### Patent

- **Title:** AI Based Heart Rate Monitoring Device
- **Published/Granted:** Published
- **Patent No.:** 495119-001

### Roles and Responsibilities: Institute Level

_Nil_

### Roles and Responsibilities: Department Level

1. NIRF Coordinator - CSD/CY
2. NAAC Coordinator
3. MOOC/NPTEL Coordinator
`,
  },

  "suhasini": {
    name: "Suhasini",
    url: "https://atme.edu.in/suhasini/",
    md: `**Faculty Name:** Suhasini

**Designation:** Assistant Professor

**Program:** CSE-CY

### Professional Experience

- Teaching: 11
- Research: Nil
- Industry: Nil

### Contact Details

- **Email ID:** Official: suhasini.cg@atme.edu.in | Personal: suha.suchi16@gmail.com
- **Vidwan ID:** 632692
- **Google Scholar ID:** https://scholar.google.co.in/citations?view_op=new_articles&hl=en&imq=Suhasini#
- **Scopus ID:** -
- **Orcid ID:** 0009-0001-9051-726X
- **Web of Science Researcher ID:** -
- **LinkedIn ID:** linkedin.com/in/suhasini-c-4a55082b6

### Academic Details

**Qualification**

- Pursuing Ph.D
- M.Tech (2012) – CSE
- B.E (2010) – CSE

### Areas of Interest

1. Machine Learning
2. Artificial Intelligence
3. Digital Forensics
4. Cryptography

### Publication Details

1. "Voice Based Smart Wheelchair for Physically Impaired Persons", IARJSET, Volume 12, Issue 5, May 2025.
2. "AI Powered Drug Discovery", IARJSET, Volume 12, Issue 5, May 2025.
3. "IoT Based Street Light Short Circuit Detection", IRJET, Volume 11, Issue 4, April 2024.
4. "Autism Spectrum Disorder using Machine Learning", IRJET, Volume 10, Issue 5, May 2023.
5. "Squid Game and Music Synchronization", IRJET, Volume 10, Issue 4, April 2023.
6. "Age and Gender Classification using Convolutional Neural Network", IRJET, Volume 9 Issue 06, June 2022.

### Membership in Professional Bodies

- Member, The Institution of Engineers (India) [IEI]

### Honours/Awards/Achievements

- Qualified the Karnataka State Eligibility Test (KSET) for Assistant Professorship, conducted by the University of Mysore.
- Received project funding from the Karnataka State Council for Science and Technology (KSCST), Indian Institute of Science, Bengaluru, for the project titled "Smart Reader for Visually Impaired using Raspberry Pi" (2024).
- Secured Topper position in NPTEL online course on "Theory of Computation", offered by IIT, under the Ministry of Education, Government of India.

### FDPs/Conferences/Workshops/STTP/MOOC Certification

**FDP/Workshop/STTP:**

1. ATAL FDP on "Digital Forensics in Cybersecurity" held at Alva's Institute of Engineering and Technology from 05/1/2026 to 10/1/2026.
2. Attended FDP on "Effective Strategies for publishing Research Papers" at MITT on 9th and 10th May, 2025.
3. Two Day online National Level workshop on Data Analytics and Deep Learning organized by T. Thomas Elizabeth College for Women, Chennai on 2nd and 3rd March 2025.
4. ATAL FDP on "Cyber Security and Intrusion Detection Forensics" held at Don Bosco Institute of Technology from 20/1/2025 to 25/1/2025.
5. Participated in 10 Hours International Faculty Development Program on Machine Learning and Artificial Intelligence in Collaboration with ExcelR from 12th to 19th August 2024.
6. Attended Online FDP on "Recent Industry Trends and Technology in Cloud Computing" held at Manipal University, Jaipur from 15th to 19th May 2023.

**MOOC Certificates:**

1. NPTEL Course on Introduction to Machine Learning – Jan to Mar – 2026 (8 weeks)
2. NPTEL Course on Theory of Computation – Jul to Sep - 2024 (8 weeks)
3. Cloud Computing – Aug to Oct – 2019 (8 weeks)
4. Compiler Design – Jan to Apr – 2019 (12 weeks)

### Proposal/Funding/Project Financial Assistance

_Nil_

### Patent

_Nil_

### Roles and Responsibilities: Institute Level

_Nil_

### Roles and Responsibilities: Department Level

1. Academic Co-ordinator
2. NBA Co-ordinator
3. AICTE activity points Co-ordinator
4. Class Teacher
`,
  },

  "mrs-razikha-amreen-m-i": {
    name: "Razikha Amreen M I",
    url: "https://atme.edu.in/mrs-razikha-amreen-m-i/",
    md: `**Faculty Name:** Razikha Amreen M I

**Designation:** Assistant Professor

**Program:** Computer Science and Engineering – Cyber Security

### Professional Experience

- Teaching: 06 Years
- Research: Nil
- Industry: 1

### Contact Details

- **Email ID:** Official: razikhaamreen.cc@atme.edu.in | Personal: razikhareen@gmail.com
- **Vidwan ID:** 653938
- **Google Scholar ID:** https://scholar.google.co.in/citations?view_op=new_articles&hl=en&imq=Razikha+Amreen+M+I#
- **Scopus ID:** 60601435400
- **Orcid ID:** 0009-0002-9671-8609
- **Web of Science Researcher ID:** -
- **LinkedIn ID:** https://www.linkedin.com/in/razikhaamreen

### Academic Details

**Qualification**

- Pursuing Ph.D in Machine Learning and Artificial Intelligence
- M. Tech in Computer Networks
- B.E in Information Science and Engineering

### Areas of Interest

1. AIML
2. Cyber Security

### Publication Details

1. Dynamic braking energy management for electric vehicle under battery ageing: A sliding-mode approach with environmental impact assessment.
2. Machine Learning for Bearing Health Monitoring: A Controlled Experimental Benchmark Using Vibration-Based Statistical Features.
3. A route aware predictive energy management framework for solar integrated electric bus transportation systems.

### Membership in Professional Bodies

1. Internet Society, Member Id: 2367057
2. The International Association of Engineers (IAENG), Member Id: 567479

### Honours/Awards/Achievements

- Secured the Best Participant award in intensive workshop on "Effective Communication Standards in Global Teaching" held on January 2013

### FDPs/Conferences/Workshops/STTP/MOOC Certification

1. Workshop on "effective communication standards in global teaching."
2. Image and Statistical Analysis using open source tools – July 2022
3. Recent trends in Cyber Security and block chain technology – July 2022
4. AICTE Training And Learning (ATAL) Academy Faculty Development Program on Exploring the Synergy between eAcoustics and Machine Learning for Tomorrow's Technologies – December 2025
5. NITTTR FDP on Cyber Physical Systems – October 2025
6. CYSECK 6 days Residential program on cyber security – January 2026

**MOOC Certificates:**

- Udemy - Patent Filing in India
- NPTEL – Introduction to Machine Learning
- NPTEL – ICT

### Proposal/Funding/Project Financial Assistance

_Nil_

### Patent

_Nil_

### Roles and Responsibilities: Institute Level

- Industry Institute Interaction Committee - Member

### Roles and Responsibilities: Department Level

1. DST Coordinator - CY
2. Mini Project – CY
3. Editorial Coordinator - CY
`,
  },

  "ms-sandhya-g": {
    name: "Ms. Sandhya G",
    url: "https://atme.edu.in/ms-sandhya-g/",
    md: `**Faculty Name:** Ms. Sandhya G

**Designation:** Assistant Professor

**Program:** CSE-Cyber Security

### Professional Experience

- Teaching: 10 months
- Research: Nil
- Industry: Nil

### Contact Details

- **Email ID:** Official: sandhyag.cc@atme.edu.in | Personal: sandhyag7422@gmail.com
- **Vidwan ID:** 653933
- **Google Scholar ID:** -
- **Scopus ID:** -
- **Orcid ID:** 0009 0006 4085 2664
- **Web of Science Researcher ID:** -
- **LinkedIn ID:** https://www.linkedin.com/in/sandhyag604592280

### Academic Details

**Qualification**

- M. Tech – Master of Technology, 2025
- BE – Bachelor of Engineering, 2023

### Areas of Interest

1. Computer Networks
2. Artificial Intelligence
3. Deep Learning

### Publication Details

_Nil_

### Membership in Professional Bodies

_Nil_

### Honours/Awards/Achievements

_Nil_

### FDPs/Conferences/Workshops/STTP/MOOC Certification

**MOOC Certification:**

1. NPTEL Course on Computer Networks and Internet Protocol Jan – Apr 2026, 12 weeks

**FDPs:**

1. Participated in 6-days residential Faculty Development Programme on Cyber Security at IIIT Dharwad, held from 24th November to 29th November 2025.

### Proposal/Funding/Project Financial Assistance

_Nil_

### Patent

_Nil_

### Roles and Responsibilities: Institute Level

- AVR and Techoir Program Coordinator

### Roles and Responsibilities: Department Level

1. AIMS Co-ordinator (Department of CSE-Cyber Security)
2. EMS Co-ordinator (Department of CSE-Cyber Security)
`,
  },

  "mr-chetan-godinal": {
    name: "Mr. Chethan Godinal",
    url: "https://atme.edu.in/mr-chetan-godinal/",
    md: `**Faculty Name:** Mr. Chethan Godinal

**Designation:** Assistant Professor

**Program:** Computer Science Engineering – Cyber Security

### Professional Experience

- Teaching: 7 Months
- Research: NIL
- Industry: NIL

### Contact Details

- **Email ID:** Official: chetangodinal.cc@atme.edu.in | Personal: chetangodinal07@gmail.com
- **Vidwan ID:** 688283
- **Google Scholar ID:** https://scholar.google.co.in/citations?view_op=new_articles&hl=en&imq=CHETAN+GODINAL#
- **Scopus ID:** -
- **Orcid ID:** 0009-0004-1118-3591
- **Web of Science Researcher ID:** -
- **LinkedIn ID:** http://www.linkedin.com/in/chetan-godinal-88672b269

### Academic Details

**Qualification**

- M. Tech in CSE
- B E in CSE

### Areas of Interest

1. Machine Learning
2. Deep Learning
3. DBMS
4. Big Data

### Publication Details

**Conference**

1. Chetan Godinal, Dr. M R Prasad, ICAIES "An Advanced AI-Powered Tomato Leaf Disease Detection System Using Ensemble Deep Learning" in RIT, Hassan.

### Membership in Professional Bodies

_Nil_

### Honours/Awards/Achievements

_Nil_

### FDPs/Conferences/Workshops/STTP/MOOC Certification

**FDPs/Workshops:**

_Nil_

**MOOC Certificate:**

1. NPTEL course on Distributed Systems

### Proposal/Funding/Project Financial Assistance

_Nil_

### Patent

_Nil_

### Roles and Responsibilities: Institute Level

_Nil_

### Roles and Responsibilities: Department Level

1. Department Sports Coordinator - CY
2. Department Cultural Coordinator - CY
3. Stock Coordinator - CY
`,
  },

  "mrs-pallavi-r": {
    name: "Pallavi R",
    url: "https://atme.edu.in/mrs-pallavi-r/",
    md: `**Faculty Name:** Pallavi R

**Designation:** Assistant Professor

**Program:** CSE-Cyber Security

### Professional Experience

- Teaching: 2.9 yrs
- Research: Pursuing
- Industry: NIL

### Contact Details

- **Email ID:** Official: pallavir.cc@atme.edu.in | Personal: pallaviraj830@gmail.com
- **Vidwan ID:** 448955
- **Google Scholar ID:** pallaviraj830@gmail.com
- **Scopus ID:** pallaviraj830@gmail.com
- **Orcid ID:** pallaviraj830@gmail.com
- **Web of Science Researcher ID:** -
- **LinkedIn ID:** Pallaviraj830@gmail.com

### Academic Details

**Qualification**

- BE, M. TECH, (Ph.D.)

### Areas of Interest

- Machine learning

### Publication Details

1. "Air Quality Index Monitoring Using AI & ML" in International Research journal of modernization in Engineering Technology and Science (IRJMETS), Volume 07, Issue 12, December 2025.
2. Pallavi R\\*1, Kushmita S\\*2, Minchu M\\*3, Sahana KM\\*4, Vishwas A\\*5 "AUTISMNETX Screening Of Autism Through ML TECHNIQUE." in International Research journal of modernization in Engineering Technology and Science (IRJMETS), Volume 07, Issue 12, December 2025.
3. Shwetha L, Pallavi R (2025). Identification of Plant Diseases Through Artificial Neural Networks. International Journal of Innovative Research in Technology (IJIRT), 11(11), 1586-1590.
4. Pallavi R, Shwetha L (2025). AI Based Human Health Remote Supervision with Wireless Sensors. International Journal of Innovative Research in Technology (IJIRT), 11(11), 1537-1540.
5. Pallavi R1, Srinivasa H N2, Mithun Gowda H3, Surya S B4, "Skin Cancer (Melanoma) Detection Using Deep Learning", International Journal of Innovative Research in Electrical, Electronics, Instrumentation and Control Engineering, Vol. 13, Issue 12, December 2025.
6. Pallavi R, Steve Fredrick P, Yashwanth Gowda KB, Rakshith Gowda NS, "Brain Age Prediction Using MRI Data an Ensemble ANN Model," International Journal of Innovative Research in Electrical, Electronics, Instrumentation and Control Engineering (IJIREEICE), DOI 10.17148/IJIREEICE.2025.131215

### Membership in Professional Bodies

- IAENG (International Association of Engineers)

### Honours/Awards/Achievements

_Nil_

### FDPs/Conferences/Workshops/STTP/MOOC Certification

**FDPs/Workshops:**

1. FDP on "MongoDB" A project based on hands on training
2. FDP on machine learning lab
3. FDP on research methodology
4. FDP on artificial intelligence in global trends.
5. FDP on artificial intelligence: concepts and techniques.

**MOOC Certificate:**

1. Artificial intelligence: concepts and techniques. (NPTEL)
2. Python for data science. (NPTEL)
3. R ultimate 2024: r data science and machine learning. (UDEMY)

### Proposal/Funding/Project Financial Assistance

_Nil_

### Patent

_Nil_

### Roles and Responsibilities: Institute Level

_Nil_

### Roles and Responsibilities: Department Level

1. Department Website coordinator - CY
2. AICTE & LIC coordinator - CSD/CY
`,
  },

  "ms-shambhavi-k-a": {
    name: "Shambhavi K A",
    url: "https://atme.edu.in/ms-shambhavi-k-a/",
    md: `**Faculty Name:** Shambhavi K A

**Designation:** Assistant Professor

**Program:** CSE-Cyber Security

### Professional Experience

- Teaching: 1 Year
- Research: NIL
- Industry: NIL

### Contact Details

- **Email ID:** Official: shambhavika.cc@atme.edu.in | Personal: shambhavika22@gmail.com
- **Vidwan ID:** 653934
- **Google Scholar ID:** https://share.google/P56CAFxAJJqIDy27E
- **Scopus ID:** https://share.google/RukC5bRMBfti9miNp
- **Orcid ID:** -
- **Web of Science Researcher ID:** -
- **LinkedIn ID:** https://www.linkedin.com/in/shambhavika969644262

### Academic Details

**Qualification**

- MCA – Master of Computer Application in Cyber Security, 2025
- BCA – Bachelor of Computer Application, 2023

### Areas of Interest

1. Cyber Security
2. UI/UX Design
3. Machine Learning

### Publication Details

1. "Intelligent Intrusion Detection System for SDN (Software Defined Networking)" is published in IRJMETS – Volume 7: Authors: Ms. Shambhavi K A, Mahanth S, Pranav Muthappa, Yaswanth, Deemanth C. 2025

### Membership in Professional Bodies

_Nil_

### Honours/Awards/Achievements

_Nil_

### FDPs/Conferences/Workshops/STTP/MOOC Certification

**FDPs/Workshops:**

1. Three Day Comprehensive Workshop On "PATENT DRAFTING, FILING, & INTERPRETAION" organized by IPR-Cell in Association with IIC ATMECE, Mysuru.
2. 6-days residential Faculty Development Program (FDP) on "Cybersecurity", Organized by Indian Institute of Science (IISc), Center of Excellence for Cybersecurity – Karnataka (CySecK), British Asian Trust group in association with NITK Surathkal, Karnataka from 19th to 24rd Jan 2026.
3. 2-days FDP on "Globally Competitive Currency in Higher Education" organized by ATMECE, Mysuru.

**MOOC Certificate:**

1. Certificate of Completion "Patent Filing in India" by Udemy. 2025

### Proposal/Funding/Project Financial Assistance

_Nil_

### Patent

_Nil_

### Roles and Responsibilities: Institute Level

_Nil_

### Roles and Responsibilities: Department Level

1. Placement Co-ordinator (Dept of CSE-Cyber Security)
2. IA Coordinator – Dept of CSE-Cyber Security
`,
  },

  "vanishree": {
    name: "Ms. B S Vanishree",
    url: "https://atme.edu.in/vanishree/",
    md: `### Professional Experience

- Teaching: 8 months
- Research: Nil
- Industry: Nil

### Contact Details

- **Email ID:** Official: bsvanishree.cs@atme.edu.in | Personal:
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/677204
- **Google Scholar ID**
- **Scopus ID**
- **OrcidID:** https://orcid.org/0009-0003-1192-9595
- **Web of Science Researcher ID:** PGL-6689-2026
- **LinkedIn ID:** https://www.linkedin.com/in/vanishree-bs-3812861a2/

### Academic Details

**Qualification**

- Master of Technology in computer network,2025 at The National Institute of Engineering, Mysore.
- Bachelor of Engineering in computer science at PDIT Hospet  2023

### Areas of Interest

- Machine Learning
- Artificial intelligence
- Natural Language Processing
- Computer Network
- Data Science

### Publication Details

- “ **Railway Track Crack Detection and Animal Entry Prevention System using IOT”** , has been Published in Compliance Engineering Journal , volume14, issue 4, April – 2023
- **“PID – 283:AI- POWERED SURVEILLANCE SYSTEM USING COMPUTER VISION FOR PUBLIC SAFETY”** as PRESENTER for International Conference on Digital Technology and Engineering (ICDTE -2025) organized by RV Institute of Technology and Management, Bengaluru, 16-17 October, 2025.
- **AI- POWERED DECISION SUPPORT SYSTEM FOR COFFEE CULTIVATION,** at ThinkAI 2025-Third International Conference on Recent Trends in Al Enabled Technologies.

### Membership in Professional Bodies

### FDPs/Conferences/Workshops/STTP/MOOC Certification

- Workshop on “Patent Drafting , Filing and Interpretation ” Organized by IPR- cell in association with IIC ATME college of Engineering , Mysuru .
- one week FDP on “Cybersecurity” organized by IIIT Dharwad , be held from 24-29 Nov 2025, in collaboration with Indian Institute of Science (IISc), Centre of Excellence in Cybersecurity (CySeK) and British Telecom .
- COURSES
- Edge Computing (NPTEL)
- Ethics in Engineering Practice (NPTEL)
- Google Cloud Computing Foundations (NPTEL)
- Applied Social Network Analysis in Python(Coursera)
- Logistic Regression with NumPy and Python(Coursera)

### Proposal/Funding/Project Financial Assistance

- NIL

### Patent

- NIL

### Roles and Responsibilities: Institute Level

- Anti ragging committee member

### Roles and Responsibilities: Department Level

- Website coordinator
- Newsletter and magazine coordinator
`,
  },

  "yashaswini-urs": {
    name: "Ms Yashaswini",
    url: "https://atme.edu.in/yashaswini-urs/",
    md: `**Program: ming & Software Development**

### Professional Experience

- Teaching: 1
- Research: Nil
- Industry: Nil
- **Teaching:  1 Year:** Research:Nil | Industry:Nil

### Contact Details

- **Email ID:** Official: yashaswiniurs.cs@atme.edu.in | Personal: yashaswinichaluveurs09@gmail.com
- **Vidwan ID:** 642410
- **Google Scholar ID:** ‪Yashaswini Urs – ‪Google Scholar (https://scholar.google.com/citations?user=BcEjh1IAAAAJ&hl=en)
- **Scopus ID**
- **Orcid ID:** 0009-0000-2909-4555
- **Web of Science Researcher ID:** ODJ-2981-2025
- **LinkedIn ID:** (23) Yashaswini Urs | LinkedIn (https://www.linkedin.com/in/yashaswini-urs-a26841263/)

### Academic Details

**Qualification**

- Ph.D. in Data Science (Pursuing)
- M.Sc in Computer Science and Information Technology
- B.Sc in Maths, Statistics, Computer Science

### Areas of Interest

- Core Computer Science
- Programming & Software Development
- Data Science

### Publication Details

- Improving Fake Product Detection through a Priority-Based Feature Vector Approach in Machine Learning,” _International Advanced Research Journal in Science, Engineering and Technology (IARJSET)_, vol. 11, no. 3, March 2024. doi: [10.17148/IARJSET.2024.11302](https://doi.org/10.17148/IARJSET.2024.11302).

### Membership in Professional Bodies

### FDPs/Conferences/Workshops/STTP/MOOC Certification

- The National College, Jayanagar (Bengaluru)
- Organized by:
- Internal Quality Assurance Cell (IQAC)
- Theme:
- Academic Integrity, Self-Awareness, and Ethics: Journey from Teacher to Guru
- Mode:
- Offline
- Duration: 5 Days (21st – 25th July 2025)
- Participation:
- Successfully completed
- AIMS IBS Business School, Bengaluru
- Organized by:
- AIMS IBS Business School
- Theme:
- Contemporary Approaches to Research Paper Writing: Integrating Statistical Tools and AI for Enhanced Academic Publishing
- Mode:
- Online
- Duration: 5 Days (14th – 18th July 2025)
- Participation:
- Successfully completed

### Proposal/Funding/Project Financial Assistance

### Patent

- Application Number: 202441008759, Title of Invention: Digitizing Handwritten Prescriptions through Optical Character Recognition (OCR)

### Roles and Responsibilities: Institute Level

### Roles and Responsibilities: Department Level
`,
  },
  "dr-pavithra-a-c": {
    name: "Dr. Pavithra A C",
    url: "https://atme.edu.in/dr-pavithra-a-c/",
    md: `**Faculty Name:** Dr. PAVITHRA A C

**Designation:** Associate Professor

**Program:** Computer Science & Design Engineering

### Professional Experience

- Total: 18 Years 10 Months
- Teaching: 18 Years 6 Months
- Research: 8 Years
- Industry: 2 Years 5 Months

### Contact Details

- **Email ID:** Official: dr.pavithraac_ec@atme.edu.in | Personal: pavithraac26@gmail.com
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/201869
- **Google Scholar ID:** https://scholar.google.co.in/citations?user=yqsyQOwAAAAJ
- **Scopus ID:** https://www.scopus.com/feedback/author/reviewAuthorProfile.uri?authorIds=56884558400
- **Orcid ID:** https://orcid.org/0000-0003-1925-6711
- **LinkedIn ID:** https://www.linkedin.com/in/pavithra-ac-6a6013bb/

### Academic Details

**Qualification**

- B.E in Electronics and Communication at NIE, Mysuru.
- M.Tech in VLSI Design and Embedded Systems at SJCE, Mysuru.
- Ph.D in Control Systems at NIE, Mysuru.

### Areas of Interest

1. Control Systems
2. Machine Learning
3. Communication Systems

### Publication Details

1. Pavithra A C, Anupama Sindgi, M. Asha, S. R. Bhagyashree, "Energy Efficiency Analysis in Network-on Chips Transceivers with Adaptive Methods", Lecture Notes in Networks and Systems, Vol. 1255, ISSN 2367-3370, Proceedings of ISBM 2025, pp. 611-620, https://doi.org/10.1007/978-981-96-1747-0_50
2. Pavithra A C, Manjunath K, Juslin F, "Correlation of neck circumference with cardiometabolic risk factors in a tertiary care centre", 2025 3rd International Conference on Smart Systems for applications in Electrical Sciences (ICSSES) | 979-8-3315-0767-1/25/$31.00 ©2025 IEEE | DOI: [10.1109/ICSSES64899.2025.11009629](https://doi.org/10.1109/ICSSES64899.2025.11009629), Vol. 6, No. 4, June 03, 2025.
3. Pavithra A C, "Analysis of Chest X Rays Based on Mobile Net V2 Models for the Diagnosis of Symptoms of Pneumonia Using ML", Lecture Notes in Networks and Systems, Vol. 1, ISSN 3004-958X, Proceedings of 5th International Conference on Artificial Intelligence and Smart Energy ICAIS, pp. 535-547, https://doi.org/10.1007/978-3-031-90478-3
4. Pavithra A C, "AI-Based Enhanced Video Content Analysis for Multimedia Applications", Lecture Notes in Networks and Systems, Vol. 1, ISSN 3004-958X, 2nd International Conference on Multi-Strategy Learning Environment (ICMSLE 2025), 26-27, February 2025, pp. 535-547.
5. Pavithra A C, Archana N V, "Optimal Switching Techniques For Aircraft Lateral Dynamics", i-managers Journal on Instrumentation & Control Engineering, Vol. 6, No. 4, August - October 2018, pp. 27-34.
6. Pavithra A C, Archana N V, "Application and Comparison of LQR Control Techniques for Aircraft Yaw Dynamics", GIS SCIENCE JOURNAL (Scopus Indexed), Vol. 8, Issue-5, May 2021, ISSN: 1869-9391, pp. 357-362.
7. Pavithra A C, Archana N V, "Optimization Control Techniques for the Aircraft Yaw Control Lateral Dynamics", Lecture Notes in Electrical Engineering (LNEE) Springer Series, ISSN: 1876-1100.
8. Pavithra A C, Archana N V, "Hybrid Control Design Techniques for Aircraft Yaw and Roll Control System", Springer Lecture Notes in Networks and Systems (LNNS), Vol 213, chapter 34, 17-18 Feb 2022, Tirunelveli, India. ISSN: 2367-3370, DOI: [10.1007/978-981-19-2894-9](https://doi.org/10.1007/978-981-19-2894-9)
9. Pavithra A C, Archana N V, "Optimal Feedback Controllers for Aircraft Applications: A Survey", International Research Journal of Engineering and Technology (IRJET), Volume: 09, Issue-04, e-ISSN: 2395-0056. pp:1410-1417, April 2022.
10. Pavithra A C, Archana N V, "Implementing Intelligent Control Techniques in State Feedback and Estimators Control Loop for Aircraft Pitch Control" SSRG-International Journal of Engineering Trends and Technology (IJETT), Scopus Indexed, ISSN: 2231-5381 (accepted).
11. Pavithra A C, Manjunath K and Harshitha N, "Personal Health Care and Record System using Android", IJIRT, volume V, issue II, ISSN No: 2349-6002, Impact factor 5.8.
12. Pavithra A C, Harshitha N, Manjunath K, "Personal Health Care and Record System using Android", IJIRT, volume V, issue II, ISSN No: 2349-6002, Impact factor 5.8 (Google scholar).
13. Pavithra A C and Yamuna K, "GSM BASED WIRELESS NOTICE BOARD USING ARDUINO", IJERT, ISSN: 2278-0181, DOI Prefix: 10.17577 (Google scholar).
14. Pavithra A C and Subramanya Gowtham, "Obstacle Avoidance Robot Using Arduino", IJERT, ISSN: 2278-0181, DOI Prefix: 10.17577 (Google scholar).
15. Chandan G N, S.R.Bhagya Shree, Pavithra A C, "Wired and wireless online transaction system on ARM9", International journal of computer applications (IJCA) vol.1 issue – 1 ISSBN – 0975–8887 pp – 19-23 2015 (Google scholar).
16. Pavithra A C, Yathisha L, "Novel Optimal LQR Switching Control Method for the Speed Control of DC Motor", International Journal of Advances in Engineering and Emerging Technology, Emerging Research Library Vol. 5 issue 6 ISSBN 2321-452X pp 248-257 2014 (Google Scholar).
17. Mahalakshmi, Pavithra A C, "Iris Recognition and Segmentation", Indian Research Journal of Engineering and Technology, vol. 3 issue 8 ISSBN- 2395-0056 2016 (Google Scholar).
18. Pavithra A C and Yathisha L, "Optimal Switching Control for the Speed Control of DC Motor" in First National Conference on Intelligent Computing in Instrumentation and Communication NCICIC at Sai Ram College of Engineering, Chennai on 8th – 10th Mar 2013.
19. Smt. Pavithra A C, Mr. Chandan G N, Ms. Poojitha M R, "Microcontroller based digital prepaid energy meter using GSM" in NCESCO-2015 Proceedings at Mysore on Jul-15 pp 122-125.
20. Chandan G N, Mr. Girish M and Mrs. Pavithra A C, "XBee based remote controllable and energy saving room architecture", IRJET, PP, 2016, ISSN: 2395-0056.
21. Pavithra A C, Yathisha L and Archana N V, "Optimal Switching Techniques for Aircraft Lateral Dynamics", International Journal on Instrumentation and Control Engineering, Vol. 6, Issue 4, Oct 2018, pp. 27-34.
22. Prajwalasimha, S.N. and Pavithra A C, "Digital Image Watermarking based on Successive Division," Proceedings of International Conference on Communication and Electronics Systems, IEEE, 2019.
23. Pavithra A C, "Automatic Garbage Disposal System," National Conference on Communication and Data Science (NCCDS-2019) at GSSSIETW, Mysuru.
24. Pavithra A C, "Gesture Control Robot at Home," National Conference on Communication and Data Science (NCCDS-2019) at GSSSIETW, Mysuru.

### Membership in Professional Bodies

1. Member of IETE Mysuru Centre
2. Member of ISTE Mysuru

### Honours/Awards/Achievements

1. Reviewer in IEEE International Conference on Data Science and Information System (ICDSIS – 2022).
2. Reviewer for IEEE MYSURUCON 2022 – The 2nd Edition of the Mysore Subsection Flagship International Conference, 2022.
3. Reviewer in Second IEEE International Conference on Mobile Networks and Wireless Communications (ICMNWC - 2022).
4. Reviewer in Second IEEE International Conference on Recent Advances in information Technology for sustainable Development (ICRAIS - 2024), Organized by Manipal Institute of Technology, Manipal.
5. Organized technical talk for 4th semester students on "Control Systems", organized Guest lecture for 3rd semester students.
6. Under the banner of Department Association, organized technical talk for 6th semester students on "Antenna & its applications".
7. Conducted state level FDP on "VLSI Design using Cadence", Conducted Workshop on Matlab for 8th semester students.
8. Organized talk on carrier opportunities for 7th semester students.
9. Organized NI LabVIEW Workshop for EC Students.
10. Organised one day workshop on "Power Converters using PSPICE" on November for 7th semester ECE students of ATMECE, Mysuru.
11. Conducted four-week Internship program on LabVIEW and Its Applications.
12. Conducted 3 Day workshop on Advanced Embedded Systems using NI LabVIEW.
13. Completed NPTEL course "Pedagogical Innovations and Research Methodology" in Feb 2020.
14. Completed and secured grade A+ in LaTeX101x: LaTeX for Students, Engineers, and Scientists an online course conducted from 24 September 2019 to 2 December 2019, offered by IITBombayX, an online learning initiative of Indian Institute of Technology Bombay.
15. Coordinated for one day online webinar on "Advanced topics in Classical Control systems" on 25th August 2020, organized by department of ECE, ATMECE, Mysuru.
16. Obtained CLAD (Certified LabVIEW Associate Developer) certification from NI LabVIEW.
17. Received "Best Event Coordinator" from IETE, Mysuru.

### FDP/Conferences/Workshops Attended/Conducted

- Conducted Four-week Internship on "LabVIEW and its Applications".
- Coordinated Technical talk on AR/VR.
- Coordinated for Visit to Microsoft.
- Conducted one week Workshop on "Latex".

### FDPs/Conferences/Workshops/STTP/MOOC Certification

- Attended Three-day FDP on Importance of NAAC Accreditation in HEI.
- Attended Two-week FDP on Python.
- Participated & Completed successfully AICTE Training and Learning (ATAL) Academy Online FDP on "Control Systems and Sensor Technology" from 2020-11-2 to 2020-11-6 at Bhilai Institute of Technology, DURG.
- One Week Online STTP/Refresher Program on Project Based Learning.
- Recent Industrial Trends in Control and Optimization (RICO-2024).
- Inculcating Universal Human Values in Technical Education organized by All India Council for Technical Education (AICTE).

### Patent

1. 2021: ENHANCED SYSTEM AND METHOD FOR ACCIDENT PREVENTION IN UNDERGROUND COLLIERIES, Applied, Published.
2. 2021: AUTOMATED VOICE CONTROLLED ROBOT DEVICE, Applied, Published.
3. 2022: MACHINE LEARNED CROP PREDICTION SYSTEM, Applied, Published.

### Roles and Responsibilities: Institute Level

1. Students Association coordinator from August 2013 to till date.
2. Member of OBE Awareness Committee.
3. Member of Department Association Committee.
4. AICTE Coordinator.

### Roles and Responsibilities: Department Level

1. Project Coordinator
2. IA Coordinator
3. Internship Coordinator
4. Department level NBA
5. Department NAAC Coordinator
`,
  },

  "mr-yogesh-n": {
    name: "Mr. Yogesh N",
    url: "https://atme.edu.in/mr-yogesh-n/",
    md: `**Faculty Name:** Yogesh N

**Designation:** Assistant Professor

**Program:** Computer Science & Design Engineering

### Professional Experience

- Total: 18 Years 4 Months
- Teaching: 17 Years 1 Month
- Research: 1.5 Years
- Industry: 1 Year 3 Months

### Contact Details

- **Email ID:** Official: yogeshn_cg@atme.edu.in | Personal: yogeshneelappa.atme@gmail.com
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/338827
- **Google Scholar ID:** https://scholar.google.com/citations?user=ziwtFAYAAAAJ
- **Scopus ID:** https://www.scopus.com/authid/detail.uri?authorId=60642076200
- **Orcid ID:** http://www.orcid.org/0009-0006-0579-9570
- **Web of Science Researcher ID:** https://www.webofscience.com/wos/author/record/QLW-3925-2026
- **LinkedIn ID:** https://www.linkedin.com/in/yogesh-neelappa-5533742ba/

### Academic Details

**Qualification**

- Pursuing Ph.D in the field of Artificial Intelligence
- M.Tech in Computer Networks Engineering
- Post Graduate Diploma in Advanced Computing
- B.E in Electronics & Communication Engineering

### Areas of Interest

1. Image Processing
2. Artificial Intelligence
3. Cyber Security
4. Machine Learning
5. Robotics Automation
6. Teaching Pedagogy

### Publication Details

1. Yogesh N, Chinnaswamy C N, "Priority Based Queue Management with Adaptive Duty Cycle Control in WSN", International Journal of Ethics in Engineering & Management Education (IJEEE), ISSN: 2348-4748, Vol. 1, Issue 4, April 2014.
2. Supriya C, Supreetha O Naik, Vasuda S Tikare, Vinay V, Yogesh N, "Intelligent Plant Irrigation System for Fire and Intruder Detection", International Journal of Electronic and Electrical Engineering (IJEEE), ISSN 0974-2174 Volume 8, Number 1 (2015), pp. 71-75, April 2015.
3. Jyothi N, Keshav N Kowshik, Meghashree B R, Ragini R, Yogesh N, "Enhancing the QoS in WSN", International Journal for Scientific Research & Development (IJSRD), ISSN (online): 2321-0613, Vol. 5, Issue 04, 2017.
4. Amith A, Charan P V, Darshan M H, Jaiprasad S S, Yogesh N, "Atmospheric Water Generator", International Journal for Scientific Research & Development (IJSRD), ISSN (online): 2321-0613, Vol. 7, Issue 03, 2019.
5. Shashidhara K P, Vikil T N, Siddalingegowda, Vikas R, Yogesh N, "Wireless Charger", International Journal for Scientific Research & Development (IJSRD), ISSN (online): 2321-0613, Vol. 7, Issue 03, 2019.
6. Poornima M S, Nanditha N, Preeti Shivanand Talawar, Yogesh N, "Human Emotion Recognition Using Smart Sensors", Proceedings of 8th PIC 2019, Bhubaneswar, India (January 10-13, 2019), ISBN: 978-93-5346-080-8.
7. Prajwal Gowda BR, Punya B G, Shashank G, Varsha S, Yogesh N, "Degradable and Biodegradable Waste Segregation Using Smart Monitoring System", International Journal for Science & Advance Research in Technology (IJSART), Paper ID: IJSARTV6I637799, ISSN (Online): 2395-1052, Volume 6, Issue 6, June 2020.
8. Chandana B K, Hemanthini A C, Harshitha M G, Shwetha S, Yogesh N, "Smart Machine for Plastic Waste Disposal", International Journal for Science and Advance Research in Technology (IJSART), Paper ID: IJSARTV6I637755, ISSN (Online): 2395-1052, Volume 6, Issue 6, June 2020.
9. Mr. Yogesh N, Chinmaye Chinnappa H E, Karthik H K, Madhusudhan L E, Deepak N, "Intelligent Railway Track Crack and Obstacle Detection", International Journal of Advanced Research in Science, Communication and Technology (IJARSCT), ISSN (Online) 2581-9429, Volume 7, Issue 2, July 2021.
10. Mr. Yogesh N, Poornima S, Rachana M, Sanjay Kumar M S, Sneha T M, "Solar Tracking System for Optimal Power Generation", International Research Journal of Education and Technology (IRJET), ISSN: 2581-7795, Volume: 02 Issue: 03, July-2021.
11. Mr. Yogesh N, Mrs. Nethravathi, Santhosh D R, Prasanna M S, Suman S, "Face Mask Detection Using Machine Learning Techniques", International Journal of Advances in Engineering and Management (IJAEM), ISSN: 2395-5252, Volume 3, Issue 7, July 2021.
12. Dechamma A K, Swathi, Chaithali, Harshitha K, Mr. Yogesh N, "Women Safety Device with GPS Tracking & Alerting System", International Journal of Creative Research Thoughts (IJCRT), ISSN: 2320-2882, Volume 7, Issue 7, July 2022.
13. Srujan L, Manjunathaswamy Y S, Prajwal P, Praveenkumar J, Yogesh N, "Handwashing Machine by Fog Disinfection to Save Water", International Journal of Advance Research and Innovative Ideas in Education (IJARIIE), ISSN (O): 2395-4396, Vol. 8, Issue 6, 2022.
14. Bhoomika M, Chaithrashree, Prajwal G S, Sahana G D, Mr. Yogesh N, "Smart Wearable Monitoring System for Alzheimer's Patient", International Journal of Research in Engineering and Science (IJRES), ISSN (Online): 2320-9364, ISSN (Print): 2320-9356, Volume 11, Issue 5, May 2023, PP. 445-449.
15. Srujan L, Manjunathaswamy Y S, Prajwal P, Praveenkumar J, Yogesh N, "Vaidya Yantra (IoT Based Teledoctor)", International Journal of Research in Engineering and Science (IJRES), ISSN (Online): 2320-9364, ISSN (Print): 2320-9356, Volume 11, Issue 5, May 2023, PP. 463-467.
16. Yogesh N, Poojitha R, Rakshitha P, Sneha K, Ranjini A, "Cropsense: AI-Driven Predictions for Crop Patterns, Disease Management and Farming Solution", International Journal of Creative Research Thoughts (IJCRT), ISSN: 2320-2882, Volume 13, Issue 1, January 2025, PP. d701 – d706.
17. Shukthija M R, Yogesh N, Dhanush M K, Ramiz U, Sanjana L, "Market Basket Analysis and Customer Segmentation in E-Commerce using Data Analytics with Distributed System", International Journal of Innovative Research in Technology (IJIRT), ISSN: 2349-6002, Volume 11 Issue 8, January 2025, PP. 2532 – 2538.
18. Yogesh N, Charan M, Ayush R, Hruthvik P, Shravya G, "Android Application for Direct Market Access for Farmers", International Journal of Creative Research Thoughts (IJCRT), ISSN: 2320-2882, Volume 13, Issue 1, January 2025, PP. g475 – g482.
19. Uma Mahesh R N and Yogesh N, "Multi-Class Categorization of Three-Dimensional (3-D) Objects for Digital Holographic Information Using Deep Learning", in Proceedings of the 3rd International Conference on Futuristic Technology (INCOFT 2025) - Volume 2, pages 384-388, Proceedings Copyright © 2025 by SCITEPRESS – Science and Technology Publications, Lda, ISBN: 978-989-758-763-4, DOI: [10.5220/0013592800004664](https://doi.org/10.5220/0013592800004664).
20. Yogesh N, Pallavi S, T Varshitha Nanjappa, Keerthana R, Sanjana N, "Data Download Duplication Alert System Using Hashing Algorithm", International Research Journal of Modernization in Engineering Technology and Science (IRJMETS), e-ISSN: 2582-5208, Volume:07/Issue:12/December-2025, DOI: https://www.doi.org/10.56726/IRJMETS86487.
21. N. Yogesh, R. Sandesh, B. R. Nidhishree, U. Monalisha, Mohammed Sameet & K. Mohammed Rifan, "Implementation of AI-ML Based Models for Predicting Agri-Horticultural Commodity Prices for Pulses and Vegetables", International Conference on Information and Communication Technology for Competitive Strategies (ICTCS – 2025), ICT: Applications and Social Interfaces. ICTCS 2025. Lecture Notes in Networks and Systems, vol 1874. Springer, Cham. DOI: https://doi.org/10.1007/978-3-032-19681-1_41, Print ISBN 978-3-032-19680-4, pp 416–424. Published: 01 April 2026.

### Membership in Professional Bodies

- Life Member Engineers Without Borders (EWB) – PFL 200
- International Association of Engineers (IAENG) Member

### IPR/Patents

- **Title of the invention:** CropSense: AI-Driven Predictions for Crop Patterns, Disease Management, and Farming Solutions.
- **Type of Patent:** Utility Patent
- **Application Number:** 202541122599
- **Date of Filing:** 05/12/2025
- **Published Date:** 02/01/2026

### Books Published

- **Book Title:** Wireless Communications
- **Authors:** Dr. N. Jagadeesan, Yogesh N, Dr. Narayanaswamy G, Penki Rohit
- **ISBN:** 978-93-47231-71-1
- **Publisher:** BR Publications, India
- **Publication Date:** 11.11.2025
- **DOI:** https://doi.org/10.5281/zenodo.17618342

### Honours/Awards/Achievements

1. Recognized as Star Performer of the department in 2013, 2014 and 2016 (in previous institution).
2. NPTEL Active SPOC – 2018, 2019 & 2020 (in previous institution).
3. Reviewer in Hertz Journal of Engineering from 2020 to 2021.
4. Reviewer in IEEE International Conference on Data Science and Information System (ICDSIS – 2022).
5. Reviewer for IEEE MYSURUCON 2022 – The 2nd Edition of the Mysore Subsection Flagship International Conference, 2022.
6. Reviewer in Second IEEE International Conference on Mobile Networks and Wireless Communications (ICMNWC - 2022).
7. Editor in Iterative International Publishers (IIP) Proceedings for a book titled "Futuristic Trends in IoT", 2023.
8. Reviewer in International Journal of Research and Analytical Reviews (IJRAR), Feb 2023.
9. Reviewer in IEEE International Conference on Applied Intelligence and Sustainable Computing (ICAISC - 2023).
10. Reviewer in Third IEEE International Conference on Mobile Networks and Wireless Communications (ICMNWC - 2023).
11. Project Mentor for Smart India Hackathon, 2023 (Finalist team mentor).
12. K-Tech Nain Project funding from Govt. of Karnataka.
13. Elite with Silver certificate in NPTEL course on Introduction to Internet of Things.
14. Resource person for online talk on "Various Pedagogical Practices to Enhance the Learning Experiences" organized by NDLI Club of Library and Information Centre, JSS Science and Technology University, Mysuru on 12th March 2025.
15. Jury Member of URJA 2k26 – State Level Tech Fest, organized by Dept. of Electronics and Communication Engineering, ATME College of Engineering, Mysuru, in association with IETE Student Forum from 23rd to 25th March 2026.
16. Elite with Silver certificate in NPTEL course on Advanced Computer Architecture.
17. Resource person for Technical talk on "AI Tools" organized by Cauvery College of Engineering, Mysuru on 1st June 2026.

### FDPs/Conferences/Workshops/STTP/MOOC Certification

**Conferences**

1. International Conference on Signal and Image Processing (ICSIP – 2009), VVIET, Mysuru, held during 12th to 14th August 2009.
2. National Conference on Recent Advances in Science & Technology (NCST-2014), BKIT, Bhalki, held during 22nd & 23rd March 2014.

**FDPs/Workshops**

1. Two Days Faculty Development Program on "Analog System Design", VVIET, Mysuru, held during 12th & 13th July 2011.
2. Two Days Faculty Development Program on "Virtual Instrumentation – Labview", VVIET, Mysuru, held during 6th & 7th January 2012.
3. One Day Workshop "TechEd – 2012", organized by Microsoft Corporation (India) Pvt. Ltd., VVIET, Mysuru, held on 22nd March 2012.
4. One Day Faculty Development Program on "MATLAB Application for DSP, Image Processing & Control Systems", VVIET, Mysuru, held on 31st July 2012.
5. Two Days Faculty Development Program on "Soft Skills", VVIET, Mysuru, held during 23rd & 24th Jan 2013.
6. One Day Faculty Development Program on "InFacE – Industry update for Faculty Enrichment", VVIET, Mysuru, held on 2nd February 2013.
7. One Day Faculty Development Program on "Emerging Trends in Wireless Networks and Avenues for Research", VVIET, Mysuru, held on 1st July 2013.
8. One Day Workshop on "C++", VVEIT, Mysuru, held on 23rd August 2013.
9. One Day Faculty Development Program on "Protection of Potential Inventions through Patent Filing", VVIET, Mysuru, held on 27th December 2013.
10. One Day Faculty Development Program on "3-R of Research: Research, Researchers and Researching", VVIET, Mysuru, held on 25th July 2014.
11. Three Days Faculty Development Program on "ARM Cortex M3 Microcontrollers", ATME, Mysuru, held during 14th to 16th December 2017.
12. Three Days AICTE Faculty Development Program for "Student Induction Program", Sahyadri College of Engineering & Management, Mangalore, held on 18th to 20th June 2018.
13. Seven Days AICTE sponsored Faculty Development Program for "Student Induction Program", Sri Jayachamarajendra College of Engineering, (JSS University), Mysuru, held on 9th to 15th July 2018.
14. Three Days (1/2 Week) NPTEL – AICTE Faculty Development Programme on "Effective Engineering Teaching in Practice", during Feb – April 2019.
15. One week AICTE organized Online Workshop on Universal Human Values on the theme "Inculcating Universal Human Values in Technical Education", held from 2nd to 6th May 2020.
16. Five Days Online Faculty Development Program on "Swift (iOS) Programming Language" organized by MET's Institute of Engineering, Bhujbal Knowledge City, Nashik, held from 12th to 16th May 2020.
17. Technical Education Quality Improvement Programme (TEQIP-III) sponsored One-week Workshop on "Application of Power Electronics in Electric Vehicle Technology", organized by The National Institute of Engineering, Mysuru, held from 18th to 22nd May 2020.
18. Technical Education Quality Improvement Programme (TEQIP-III) sponsored Three Days online Faculty Development Programme on "Recent Advances in Automation and Networking", organized by Basaveshwar Engineering College (Autonomous), Bagalkot, held from 18th to 20th June 2020.
19. Five Days Online National Level Faculty Development Program on "PCB Design", Organized by Department of ECE, VVIET, Mysuru in association with Sienna ECAD Technologies and ESSCI from 29th June 2020 to 03rd July 2020.
20. One week AICTE – VTU Joint Training Programme for Teachers on "An Overview of Teaching Techniques in Innovation & Design Thinking" organized by VTU Human Resource Development Centre (VTU-HRDC), Centre of PG Studies, VIAT, Muddenahalli, Chikkaballapur on 6th to 10th December 2021.
21. One week AICTE – VTU Joint Training Programme for Teachers on "An Overview of Teaching Techniques in Basics of Electronics & Communication Engineering" organized by VTU Human Resource Development Centre, Centre of PG Studies, VIAT, Muddenahalli, Chikkaballapur on 13th to 17th December 2021.
22. Three Days Faculty Development Program on "Advanced Communication using USRP and LabVIEW" organized by Department of E&C Engineering, ATME College of Engineering, Mysuru in association with AICTE approved MODROB from 25th to 27th September 2023.
23. 12 Weeks NPTEL Faculty Development Program on "Introduction to Internet of Things" during July to October 2023.
24. Ten Days Online Faculty Development Program on "Machine Learning for Data Science using Python", organized by E&ICT Academy and Dept. of Computer Science & Engineering, NIT Warangal, Telangana from 15th to 24th May 2024.
25. Five Days Faculty Development Program on "Generative AI Demystified: Tools and Techniques for NextGen Applications" organized by the Department of Computer Science & Engineering in association with Wipfli LLP, India held during 20th to 24th January 2025 at NMAM Institute of Technology, Nitte.
26. Three days Faculty Development Program on "Artificial Intelligence, Machine Learning and Deep Learning in the Data Revolution Era: Progress and Applications", organized by the Department of CSE and Department of CSE-AI&ML, held during 3rd to 5th February 2025 at ATME College of Engineering, Mysuru.
27. Five days Faculty Development Program on "Cyber Security Awareness and Emerging Technologies for Secure Social Media and Banking Applications", organized by Department of Electronics and Communication Engineering, held during 10th to 14th March 2025 at ATME College of Engineering, Mysuru.
28. Two Weeks AICTE Recognized Faculty Development Program on "Refresher Course on Ethics and Innovation: Integrating AI in Science and Technology Research", organized by Applied Science Department, NITTTR, Chandigarh, held during 19th May 2025 to 30th May 2025.
29. One Week Faculty Development Program on "Advance Cyber Security", organized by CySecK K-Tech Centre of Excellence in Cyber Security in Collaboration with IISc Bengaluru, held during 21st to 26th July 2025 at Cyberverse Foundation, Mysuru.
30. Awareness session on "Product Design and Innovation Design" program organized by VTU Belagavi and Centre of Excellence in Design, Indian Institute of Science, Bengaluru on 21st November 2025 at VTU Regional Office, Mysuru.
31. One Week Faculty Development Program on "AI Driven Robotics", organized by E&ICT Academy, in association with IIT Guwahati, held during 2nd to 6th February 2026 at Jawaharlal Nehru New College of Engineering, Shivamogga, Karnataka.
32. Three Day Workshop on "Generative AI, Agentic AI and Quantum Computing" organized by Dept. of CSE (Data Science) and Dept. of EEE, ATME College of Engineering, Mysuru, held during 23rd to 25th February 2026.

**Seminars/Webinars**

1. Industry – Students Meet: "Discover New Avenues", CII, Mysuru, held on 15th September 2014.
2. One Day Seminar on "Material Science and Nanotechnology", VVIET, Mysuru, held on 29th September 2015.
3. Three Days Webinar series on "Satellite and Automation" organized by GSSSIETW in association with IEEE Bangalore section & CAS Bangalore chapter, held on during 11th to 13th May 2020.
4. One Day Webinar series on "Satellite and Telecom Network", organized by NIEIT, Mysuru, held on 25th May 2020.
5. One Day Webinar series on "Chanakya and Modern Education", organized by SkillSlate & Zovy Studios, Pune, held on 11th June 2020.
6. Webinar on "Teaching Pedagogy" organized by the ATME College of Engineering, Mysuru on 17th July 2020.
7. One Day Webinar on "Science and Technology for Self – Reliant India" organized by the Press Information Bureau, Chennai, on 16th December 2020.
8. Webinar on "The Paperless Shop Floor – The Next Industry Revolution" organized by VVCE Mysuru on 3rd June 2021.

**MOOC Certifications**

1. Introduction to Modern Application Development
2. Introduction to Research
3. Wireless Ad Hoc and Sensor Networks
4. Effective Engineering Teaching in Practice
5. NBA Accreditation and Teaching – Learning in Engineering (NATE)
6. Introduction to Internet of Things (Elite with Silver certificate)
7. Introduction to Cyber Security
8. Patent Filing in India
9. UiPath Automation Implementation Methodology Fundamentals
10. UiPath Test Cloud - October 2025 updates
11. Advanced Computer Architecture (Elite with Silver certificate)
12. Computer Vision and Image Processing – Fundamentals and Applications
13. NITTT Module 5: Technology Enabled Learning and Life Long Self Learning
14. Certified Vulnerability Accessor (CVA)

### Roles and Responsibilities: Institute Level

1. Student Welfare and Disciplinary Committee member
2. Industry Institute Interaction Committee member
3. Research, Publication & Co-Curricular Committee member
4. Student Competition and Exhibition Committee member
5. Institution's Innovation Council (IIC) member
6. Magazine & Newsletter Committee member
7. Canteen & Convenience Shop Committee member
8. Alumni Committee member
9. Training and Placement Advisory Committee member
10. E-Cell and Career Guidance Committee member

### Roles and Responsibilities: Department Level

1. Academic Coordinator
2. IA Coordinator
3. Placement Coordinator
4. VTU/LIC visit Coordinator
5. AICTE Activity Grade Points Coordinator
6. QS-I Gauge and NIRF Coordinator
7. Editorial Coordinator
8. Stock Coordinator
9. Student Clubs Faculty Mentor
10. Mini-project Coordinator
`,
  },

  "darshini-y": {
    name: "Ms. Darshini Y",
    url: "https://atme.edu.in/darshini-y/",
    md: `**Faculty Name:** Darshini Y

**Designation:** Assistant Professor

**Program:** Computer Science and Design

### Professional Experience

- Total: 3 Years 10 Months
- Teaching: 3 Years 10 Months
- Research: -
- Industry: -

### Contact Details

- **Email ID:** Official: Darshiniy_cg@atme.edu.in | Personal: darshinigowda09@gmail.com
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/453426
- **Google Scholar ID:** https://scholar.google.com/citations?hl=en&user=nJIw7AMAAAAJ
- **Scopus ID:** -
- **Orcid ID:** 0009-0008-5769-6092
- **Web of Science Researcher ID:** -
- **LinkedIn ID:** https://www.linkedin.com/in/darshini-y-8883331a6/

### Academic Details

**Qualification**

- M.Tech in Information Technology - 2020.
- B.E in Computer Science and Engineering - 2018.

### Areas of Interest

- Cyber Security
- IOT
- Software Testing
- Cryptography
- Operating System
- Computer Networks

### Publication Details

1. Darshini Y, Bhavani R, Prajwal BN, Vivek M Gowda, Paranjyothi, Aishwarya BS published a paper titled "Weed and Crop Classification System Using Smart Farming" in Smart Trends in Computing and Communications (SmartCom) 2026, Pune.
2. Prasanna Kumar Gurumallu, Rajeshwari Dembala, Darshini Yoge Gowda, Ajay Kumara, Makanahalli Annaiah, Manoj Kumar Muttyal Vasanth Kumar, Hardik Gohel published a Journal paper titled "Exploring Deep Learning Approaches for Ransomware Detection: A Comprehensive Survey" in Recent Advances in Computer Science and Communications Volume 18, Issue 2, 2025. https://www.sciencedirect.com/org/science/article/abs/pii/S2666256625000157
3. Prasanna Kumar, Darshini Y Gowda and Ashwini M. Prakash Published a student book chapter "Machine Learning in Cybersecurity: A Comprehensive Survey of Data Breach Detection, Cyber-Attack Prevention, and Fraud Detection" in IGI Global during 2024. DOI: [10.4018/979-8-3693-2639-8.ch011](https://doi.org/10.4018/979-8-3693-2639-8.ch011)
4. Darshini Y, Mohammed Afnan, Mohammed Ameen Ahmed, Pavan R, Darshan PL published a paper titled "DEEPFAKE VIDEO DETECTION USING NEURAL NETWORKS" in International Research Journal of Modernization in Engineering Technology and Science (IRJMETS), Volume:07/Issue:02/February-2025, e-ISSN: 2582-5208.
5. Darshini Y, Ganavi R, Rebecca K, Rahil Khan, Sameer Khan published a paper titled "Lost Data Retrieval" in International Journal of Creative Research Thoughts (IJCRT), Volume 13, Issue 2 February 2025 | ISSN: 2320-2882.
6. Darshini Y, Manya R, Gouthami KV, Nagaveni N, Shashank B Kadam published a paper titled "INTELLIGENT PARKING SPACE DETECTION" in International Research Journal of Modernization in Engineering Technology and Science (IRJMETS) Volume:07/Issue:12/December-2025 Impact Factor- 8.187. DOI: https://www.doi.org/10.56726/IRJMETS86559
7. Darshini Y, Keerthana MS, Sharath Bharadwaj CP, Thrisha U, Zahid Khan published a paper titled "AI POWERED PHISHING EMAIL DETECTION TOOL" in International Research Journal of Modernization in Engineering Technology and Science (IRJMETS) Volume:07/Issue:12/December-2025 Impact Factor- 8.187. DOI: https://www.doi.org/10.56726/IRJMETS86880
8. Darshini Y, Dr. Jayasri B.S, published a paper titled "Preserving security and integrity in a vehicular Ad-hoc Network using Pseudo ID-based scheme." in International Research Journal of Engineering and Technology (IRJET), Vol. 07, Issue No.05, (May 2020).

### FDPs/Conferences/Workshops/STTP

1. Attended AICTE Training and Learning (ATAL) One Week Online Faculty Development Programme on "Cloud Infrastructure" from 21st to 25th August 2023.
2. Attended 70 Hours training Program on "Microsoft Azure AI Engineer Associate" Conducted by ICT Academy on 18 August 2023.
3. Five Days Faculty Development Program on "Hack, Defend, Secure: A Journey into CyberSecurity Fundamentals" Organized by National Institute of Engineering, Mysuru from 03-02-2025 to 07-02-2025.
4. Three days workshop on "Patent Drafting, Filing and Interpretation" from 12th June to 14th June 2025 at ATMECE.

### MOOC Certification

1. 12 weeks NPTEL Online Certification on "Operating System Fundamentals" with ELITE Grade on Jul-Oct 2025.
2. Certificate of Completion "Patent Filing in India" by Udemy 2025.

### Proposal/Funding/Project Financial Assistance

- -

### Patent

- -

### Roles and Responsibilities: Institute Level

1. Website, Publicity & Promotion Committee
2. NSS, Red Cross & Social Outreach Committee

### Roles and Responsibilities: Department Level

1. EMS Coordinator (CSD)
`,
  },

  "dr-mrs-divya-n": {
    name: "Mrs. Divya N",
    url: "https://atme.edu.in/dr-mrs-divya-n/",
    md: `**Faculty Name:** Divya N

**Designation:** Assistant Professor

**Program:** CSD

### Professional Experience

- Total: 8 months
- Teaching: 3.8 years
- Research: -
- Industry: Nil

### Contact Details

- **Email ID:** Official: divyan.cg@atme.edu.in | Personal: divyasai231629@gmail.com
- **Vidwan ID:** 653937
- **Google Scholar ID:** https://scholar.google.com/citations?view_op=new_articles&hl=en&imq=Divya+2316#
- **Scopus ID:**
- **Orcid ID:** 0009-0005-4913-2105
- **Web of Science Researcher ID:**
- **LinkedIn ID:** www.linkedin.com/in/divya-n-191400259

### Academic Details

**Qualification**

- M.Tech in Computer Science and Engineering
- B.E in Computer Science and Engineering

### Areas of Interest

- Networking
- Machine learning
- Deep learning

### Publication Details

1. Divya N, Muktha, Nusrath Fathima, Sharlina A and Yusra Fathima Submitted Paper titled "Community Based Lost and Found Portal" to International Journal of Scientific Research In Engineering & Management (IJSREM) Dec 2025.
2. Divya N, Adarsh B. S, Dhruva R, Likith G, and Nithin S. have Submitted a Paper titled "Data Leakage Through Insecure Networks Channels" to an International Journal of Scientific Development and Research, December 2025.
3. Divya N, Akash S, Spoorthi C.N, Thanusha M, Yashaswini Submitted Paper titled "Skill Sharing and Micro-learning Platform" to International Journal of Scientific Research In Engineering & Management (IJSREM) Dec 2025.
4. Divya N, Dr. Bhagyajyothi K L, Dr Divya A K, Prof. Naseema C A Submitted Paper titled "Malicious Url Detection: Methods, Challenges, and Comparative Insights" to an International Journal Of Creative Research Thoughts (IJCRT) Sep 2025.

### Membership in Professional Bodies

- -

### Honours/Awards/Achievements

- -

### FDPs/Conferences/Workshops/STTP/MOOC Certification

**FDPs/Workshops** - nil

**MOOC Certificate** –

- MOOC course certification on Ethical hacking
- MOOC course certification on Distributed system

### Roles and Responsibilities: Institute Level

- -

### Roles and Responsibilities: Department Level

- Virtual Lab coordinator
- Proctoring and PTM coordinator
- Department cultural coordinator - CSD
- Department Activity report coordinator
`,
  },

  "shashank-patil": {
    name: "Mr. Shashank Patil",
    url: "https://atme.edu.in/shashank-patil/",
    md: `**Faculty Name:** Shashank Patil

**Designation:** Assistant Professor

**Program:** CSD

### Professional Experience

- Total: 7 Months
- Teaching: 7 Months
- Research: -
- Industry: Nil

### Contact Details

- **Email ID:** Official: shashankpatil.cc@atme.edu.in | Personal: shashankpatil2345@gmail.com
- **Vidwan ID:** 686803
- **Google Scholar ID:**
- **Scopus ID:**
- **Orcid ID:** https://orcid.org/0009-0007-8857-8876
- **Web of Science Researcher ID:**
- **LinkedIn ID:** https://www.linkedin.com/in/shashank-patil-a0a9b5357

### Academic Details

**Qualification**

- M.Tech – Master of Technology 2025
- B.E – Bachelor of Engineering

### Areas of Interest

- Predictive Analysis
- Artificial Intelligence
- UI/UX

### Publication Details

- -

### Membership in Professional Bodies

- -

### Honours/Awards/Achievements

- -

### FDPs/Conferences/Workshops/STTP/MOOC Certification

**FDP**

- Cloud Computing and Cloud Security: Architectures, Technologies and Best Practices, 16 Feb 2026 – 20 Feb 2026

**MOOC Certificate**

- Privacy and Security in Social Media – 8 Weeks, 2024-07-06
- Ethical Hacking – 8 Weeks, 2024-08-29

### Roles and Responsibilities: Institute Level

- -

### Roles and Responsibilities: Department Level

- Department AIMS Coordinator - CSD
- Department Sports Coordinator - CSD
- Department Website Coordinator – CSD
- DST Coordinator - CSD
`,
  },

  "harshitha-m-k": {
    name: "Mrs. Harshitha M K",
    url: "https://atme.edu.in/harshitha-m-k/",
    md: `**Faculty Name:** Harshitha M K

**Designation:** Assistant Professor

**Program:** Computer Science and Design

### Professional Experience

- Teaching: 3 Years
- Research: Nil
- Industry: Nil

### Contact Details

- **Email ID:** Official: harshithamk.cg@atme.edu.in | Personal: mk.harshitha89@gmail.com
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/543289
- **Google Scholar ID:** https://scholar.google.com/citations?user=FeqE8FYAAAAJ
- **Scopus ID:** -
- **Orcid ID:** https://orcid.org/0009-0000-5950-8341
- **Web of Science Researcher ID:** https://www.webofscience.com/wos/author/record/QLV-8361-2026
- **LinkedIn ID:** https://www.linkedin.com/in/harshitha-m-k-86974874/

### Academic Details

**Qualification**

- M.Tech in Software Engineering
- B.E in Computer Science & Engineering

### Areas of Interest

1. Artificial Intelligence
2. Machine Learning
3. Deep Learning
4. Cloud Computing
5. Computer Networks

### Publication Details

1. Harshitha M K, Dr. Padmaja K, "AIR-INK: transforming air pollution into ink", IEEE International Conference on Emerging Research in Smart Electronics and Machine Informatics-(ECMI-2026), Status – accepted.
2. Dr. Padmaja K, Harshitha M K, "Prediction and Detection of Blood Diseases using Deep Learning," Emerging Trends in Green Engineering, Business Excellence and Applied Sciences (ICETGEBEAS)-2026, Status - accepted.
3. Harshitha M. K, "Load Balancing Model for Public Cloud using Switch Mechanism", Proceedings of ERCICA-2014 International Conference, Bangalore. Published by Elsevier, 2014.

### Membership in Professional Bodies

- Nil

### Honours/Awards/Achievements

- Nil

### FDPs/Conferences/Workshops/STTP/MOOC Certification

**FDPs**

1. Completed Six-day Online FDP on "Generative & Agentic AI Tools & Demos" organized by Dept of CSE, Sardar Vallabhbhai National Institute of Technology (SVNIT), Gujarat under IEEE Gujarat Section in association with Pantech Solutions (India) Pvt Ltd. from 16th to 21st February 2026.
2. Attended One-day Offline FDP on "Embedded Systems and Edge AI - An Industry Perspective" organized by the Dept of ECE, GSSSIETW, Mysuru, under IETE Students' Forum, in association with Deshila Technology Research Institute, on 24th July 2025.
3. Completed Six-day Online FDP on "Big Data Analytics (BIS701) and Parallel Computing (BCS702): Tools, Techniques and Real-Time Implementation" organized by Dept of ISE, East Point College of Engineering & Technology, Bangalore from 1st to 7th July 2025.
4. Completed Three-day Online FDP on "Connecting Tradition and Innovation: A Faculty Exploration of Indian Knowledge Systems" organized by GSSSIETW, Mysuru from 3rd to 5th March 2025.

### Proposal/Funding/Project Financial Assistance

- Nil

### Patent

- Nil

### Roles and Responsibilities: Institute Level

- Nil

### Roles and Responsibilities: Department Level

1. Sports Coordinator
2. Department Library Coordinator
3. NBA Criteria-2 Coordinator
4. Class teacher
`,
  },
  "dr-padmaja-k": {
    name: "Dr. Padmaja K",
    url: "https://atme.edu.in/dr-padmaja-k/",
    md: `**Faculty Name:** Dr. Padmaja K (PhD, MTech, BE)

**Designation:** Associate Professor

**Program:** Computer Science and Engineering

### Professional Experience

- Total: 14 Years
- Teaching: 14
- Research: 06
- Industry: 01

### Contact Details

- **Email ID:** Official: dr.padmajak.cs@atme.edu.in | Personal: padmajakalfred@gmail.com
- **Vidwan ID:** 528289
- **Google Scholar ID:** https://scholar.google.co.in/citations?hl=en&user=NcfLU8wAAAAJ&view_op=list_works&citft=1&email_for_op=padmajak
- **Scopus ID:** 58643042500
- **Orcid ID:** https://orcid.org/0000-0002-0784-3161
- **Researcher Gate ID:** https://www.researchgate.net/profile/Padmaja-Kunda-2
- **LinkedIn ID:** https://www.linkedin.com/in/padmaja-k-184a29185/

### Academic Details

**Qualification**

- PhD in Data Science, Christ University, Bangalore — 08-Dec-2025
- MTech in CSE, BIET, Davangere (VTU, Belagavi) — 2015
- BE in CSE, Bellary Engineering College, Bellary (VTU, Belagavi) — 2005
- Diploma in CSE, Govt Diploma College, Hubli (Board of Technical Educations, Bangalore) — 2002

### Areas of Interest

- Data Science
- Deep Learning
- Artificial Intelligence & Machine Learning
- Big Data Analytics
- Quantum Computing
- Block Chain

### Publication Details

**International Conferences**

1. Paper titled "Remote monitoring and dissection of ECG data using emergency patient in ambulance using RF" at Nitte in 2026 — NMITCON 2026 (3rd International Conference on Network, Multimedia, and Information Technology, Bangalore). Status – submitted.
2. Paper entitled "AIR-INK" transforming air pollution into ink, IEEE International Conference on Emerging Research in Smart Electronics and Machine Informatics (ECMI-2026). Status – accepted.
3. Paper entitled "Prediction and Detection of Blood Diseases using Deep Learning", International Conference on Emerging Trends in Green Engineering, Business Excellence and Applied Sciences (ICETGEBEAS)-2026. Status – accepted.
4. Published at IEEE Conference, "IoT-Based Traditional Organic Implementation of Jeevamrutha Using Image Processing," 2025 Second International Conference on Computing, Semiconductor, Mechatronics, Intelligent Systems and Communications (COSMIC), Mangalore, Karnataka, India, 2025, pp. 97-102, doi: [10.1109/COSMIC67569.2025.11380853](https://doi.org/10.1109/COSMIC67569.2025.11380853). (SCOPUS Indexed)
5. Published at IEEE Conference: 2024 Second International Conference on Networks, Multimedia and Information Technology (NMITCON) on "Enhanced Lumpy Cattle Skin Disease Prognosis via Deep Learning Methods", doi: [10.1109/NMITCON62075.2024.10699233](https://doi.org/10.1109/NMITCON62075.2024.10699233), 10 August 2024. (SCOPUS Indexed)
6. Published an International Journal paper entitled "An Human Islet Cell RNA-Seq for Genome-Wide Genotype Deepsec Framework Using Deep Learning Based Diabetes Prediction," 2023 International Conference on Network, Multimedia and Information Technology (NMITCON), Bengaluru, India, 2023, pp. 1-6, doi: [10.1109/NMITCON58196.2023.10276014](https://doi.org/10.1109/NMITCON58196.2023.10276014). (SCOPUS Indexed)
7. Published an International Journal paper entitled "An Predictive Deep Learning Model is used to Identify Human Tissue-Specific Regulatory Variations For Diabetes," 2023 IEEE 4th Annual Flagship India Council International Subsections Conference (INDISCON), Mysore, India, 2023, pp. 1-5, doi: [10.1109/INDISCON58499.2023.10270496](https://doi.org/10.1109/INDISCON58499.2023.10270496). (SCOPUS Indexed)

### Book / Book Chapter Published

1. Published a Book Chapter titled "Cloud-based Interactive Framework Emergency Medical Data Sharing", Lecture Notes in Recent Trends in Computational Sciences, first edition, pages 08, CRC Press, November 2023. https://www.taylorfrancis.com/chapters/edit/[10.1201/9781003363781-17](https://doi.org/10.1201/9781003363781-17)
2. Published a Book Chapter titled "Enhancing Early Detection of Alzheimer's Disease through Integrated Deep Learning Models: A Multimodal Diagnostic Approach", Fifth Congress on Intelligent Systems. CIS 2024. Lecture Notes in Networks and Systems, vol 1278. Springer, Singapore. https://doi.org/10.1007/978-981-96-2703-5_1, 23 May 2025.

### Book Publication

1. Published a Book entitled "Python Programming", Scientific International Publishing House (SIPH), ISBN: 978-93-5757-799-1. https://sipinternationalpublishers.com/product-detail.php?PID=MTQ2Ng==
2. Published a Book entitled "Deep Learning with Python", Scientific International Publishing House (SIPH), ISBN: 978-93-5757-638-3. https://sipinternationalpublishers.com/product-detail.php?PID=MTU1NA==
3. Published a Book entitled "Neural Networks and Deep Learning", ISBN: 978-93-5757-786-1. https://sipinternationalpublishers.com/product-detail.php?PID=MTU1NQ==

### Membership in Professional Bodies

1. IEEE Member
2. MSIT (Master of Science in Information Technology)
3. CSI (Computer Society of India)
4. ISTD (Indian Society of Training and Development), HRD, New Delhi

### Student Development Programs Organized

1. Organized Two Days workshop on "Combing Artificial Intelligence Intuitive Search Engine" on 22/12/2023 to 23/12/2023 for 7th semester students, at GSSSIETW, Mysuru by Mr. Krishnananda, Corporate Technical Trainer, Hyderabad.
2. Organized Three Days workshop on "Open-Source Mobile App Development from Data Insights with Power BI to UX Excellence" on 24/10/2024 to 26/10/2024 for 5th semester at GSSSIETW, Mysuru by Bharath T S, Director, iRobo Automation Pvt. Ltd, Mysore.
3. Organized Three days' workshop on "From Bytes to Insights: Hands-On Big Data Analytics" from 8th to 10th Sept 2025 for 7th semester at GSSSIETW, Mysuru by Krinal N, Lead Trainer at Dalvik Apps, Mumbai.

### Resource Person / Guest Lecture / Session Chair

- Session Chair for "Advances in Computational Intelligence for Artificial Intelligence, Machine Learning, Internet of Things and Data Analytics" organized by "3rd International Conference on Adaptive Computational Intelligence (ICACI-2022)" in association with Springer, organized by GSSSIETW, Mysuru, during December 16 – 17, 2022.

### FDPs/Conferences/Workshops/STTP/MOOC Certification

1. Six days National Level Development Program on "Generative & Agentic AI Tools & Demos" from Pantech Pvt Ltd under IEEE Section, Gujarat, 16th to 21st Feb 2026 at Sardar Vallabhbhai National Institute of Technology.
2. AICTE Training and Learning (ATAL) Academy Faculty Development Program on Robotic Operating System 2 (ROS 2) and Artificial Intelligence for Next-Gen Robotics at GSSS Institute of Engineering & Technology for Women from 05/01/2026 to 10/01/2026.
3. "From Bytes to Insights: Hands-On Big Data Analytics" by Dalvik Apps, Mumbai, conducted from 8th to 10th Sept 2025 at GSSS Institute of Engineering and Technology For Women in collaboration with the Department of Information Science & Engineering.
4. One day FDP on "Embedded Systems and Edge AI - An Industry Perspective" by Department of Electronics and Communication Engineering under IETE Students' Forum, in association with Deshila Technology Research Institute, Mysuru on 24th July 2025 at GSSSIETW, Mysuru.
5. ISAC Cyber Crime Intervention Officer (CCIO) on 15 Jan 2025. Certificate no: O5SFIPDL.
6. "From Bytes to Insights: Hands-On Big Data Analytics" organized by GSSSIETW, Mysuru, conducted from 8th to 10th Sept 2025.
7. "Embedded Systems and Edge AI - An Industry Perspective" on 24th July 2025 at GSSSIETW, Mysuru.
8. 5 Day Boot Camp on "AWS Academy Cloud Foundations & DevOps Concepts" organized by GSSSIETW, Mysuru, 13th to 17th May 2024.
9. Six Days Faculty Development Program on "DevOps" organized by Dept. of Computer Science & Engineering, VVCE, Mysuru, 4th to 9th Nov 2024.
10. 5 Day Faculty Development Program on "Advancing Frontiers in Supercomputing, AI, and Quantum Computing: Innovations, Applications, and Integration" organized by AICTE Training, 9th to 14th Dec 2024.
11. "Introduction to Python Programming & its Applications" on 13th – 17th March 2023, AICTE – VTU-FDP.
12. "Introduction to Web Security" 27th to 31st March 2023, AICTE – VTU-FDP.
13. "Introduction to Cyber Security" on 22nd – 26th May 2023, AICTE – VTU-FDP.
14. Three weeks "Women Entrepreneurship Development Program" sponsored by Department of Science and Technology, Government of India, from 3rd May 2023 to 30th May 2023, organized by GSSS Institute of Engineering and Technology for Women, Mysuru.
15. "Universal Human Values - An Overview" on 02nd & 06th March 2022, organized by VTU Human Resource Development Centre (VTU-HRDC), Centre for PG Studies, VIAT, Muddenahalli, Chikkaballapur (Dist.) - 562101.
16. One day National Level Webinar on NEP 2020 on 26/2/2021.
17. Two day workshop on website development using WordPress from 3/2/2021 to 4/2/2021.
18. Wipro Certified Faculty training program on Wipro's Project Based Learning framework in Java-J2EE and Python, organized by Wipro on 15th Nov – 3rd Dec 2021.
19. Session coordinator for 5th International Conference on Electrical, Electronics, Communication, Computer Technologies and Optimization Techniques (ICEECCOT-2021) from 10/12/2021 to 11/12/2021.
20. AICTE Training and Learning (ATAL) Academy Online Elementary FDP on "Robot Operating System (ROS)" from 10/01/2022 to 14/01/2022.
21. One day Webinar on Internet of Things using LoRa from 17/9/2021.
22. Ten day International Faculty Development on the Art of Doing Research from 12/7/2021 to 22/7/2021.
23. One week Faculty Development Program on Wireless on Sensor Network Simulation using NS2 from 10/5/2021 to 15/5/2021.
24. Two Days workshop on website Development using WordPress from 03/02/2021 to 04/02/2021.
25. "National Skill Development Corporation (NSDC, MHRD)" online course from 12/05/2020 to 08/08/2020.
26. "Management & Entrepreneurship & Professional Skills Council (Skill India, NSDC)" online course on 06/08/2020.
27. "GuruSchool Certified Professional Trainer-Level-1" online course from 12/05/2020 to 08/08/2020.
28. "Data Science Certification" offline course from 15th Jun 2019 to 27th Sep 2019 from Software Pandits Pvt. Ltd., Mysore.
29. One day Workshop on "Android Application Development" — Overview of Android Application at Bapuji Institute of Engineering and Technology, Davangere on 26th March 2014.
30. Two days Workshop on "Big Data Analytics" — Introduction to Big Data Analytics at Bapuji Institute of Engineering and Technology, Davangere on 22nd Aug 2014 to 23rd Aug 2014.
31. Two days Workshop on "Women Empowerment" — Introduction to Women Empowerment at Bapuji Institute of Engineering and Technology, Davangere on 18th Dec 2014 to 19 Dec 2014.
32. Five days Workshop on "Feel Teacher" — Facilitating Excellence in Effective Leadership at Bapuji Institute of Engineering and Technology, Davangere on 19 April 2013 to 21 April 2013.
33. Five days Workshop on "Wipro Mission10X" — Techniques to be adopted in Teaching Field at Bapuji Institute of Engineering and Technology, Davangere on 28 May 2012 to 01 June 2012.
34. Seven days Workshop on "Teacher as the Resonating Role Model" — Details of Role of a Teacher at Siddaganga Institute Of Technology, Tumkur on 04 Aug 2009 to 10 Aug 2009.
35. Six days "Advanced Databases and Advanced Software Project Management" — Database Projects at Siddaganga Institute Of Technology, Tumkur on 20 Jan 2008 to 02 Feb 2008.
36. Six days "Linux Programming Environment" — Details of Linux at Siddaganga Institute Of Technology, Tumkur on 01 Aug 2008 to 07 Aug 2008.
37. Six days "Academic Autonomy" — Autonomy Ability of a Person at Siddaganga Institute Of Technology, Tumkur on 06 Aug 2007 to 11 Aug 2007.
38. Three days "Faculty Development Workshop on Latest Microsoft Technology" — Microsoft Technologies at Siddaganga Institute Of Technology, Tumkur on 11 Oct 2007 to 13 Oct 2007.

### Academic and Administrative Activities

1. Worked as Internship coordinator at department level AY 2025-2026 at GSSSIETW, Mysore.
2. Worked for NAAC criteria's (Criteria-3, 4 and 5) AY 2022-2026 at GSSSIETW, Mysore.
3. Worked on NBA Criteria-2 files during AY 2022-2026 at GSSSIETW, Mysore.
4. Department level Event and Workshop Coordinator during AY 2022-2023 at GSSSIETW, Mysore.
5. Worked as IA Coordinator at department level during AY 2022-2023 at GSSSIETW, Mysore.
6. Main Guide for Mini-projects and final year projects along with KSCST projects during AY 2023-2026 at GSSSIETW, Mysore.
7. Coordinated as Student Counselor for 1st Semester Students at Mysore College of Engineering and Management, Mysore 2020.
8. Coordinated as Class Coordinator for 1st Semester Students at Mysore College of Engineering and Management, Mysore 2020.
9. Coordinated as Internship Coordinator for 7th Semester Students at Mysore College of Engineering and Management, Mysore 2020.
10. Coordinated as Project Coordinator for 7th Semester Students at Mysore College of Engineering and Management, Mysore 2020.
11. Coordinated as Project Coordinator for 7th Semester Students at Bapuji Institute of Engineering and Technology, Davangere 2013.
12. Coordinated as Students Counselor for 7th Semester Students at Bapuji Institute of Engineering and Technology, Davangere 2012.
13. Coordinated as Students Counselor for 7th Semester Students at Siddaganga Institute Of Technology, Tumkur 2009.
14. Coordinated as Students Counselor for 5th Semester Students at Siddaganga Institute Of Technology, Tumkur 2009.
15. Organized and coordinated 3 days College Level Feast as Event Coordinator conducted at Siddaganga Institute Of Technology, Tumkur 2008.
16. Coordinated 7 semester Section as Class Coordinator at Siddaganga Institute Of Technology, Tumkur 2008.
17. Guided several B.E and M.Tech projects, and worked as examiner for project work viva-voce.

### Appreciation Received

1. Received Appreciation certificate for 100% result in Artificial Intelligence (B.E) for the academic year 2025-2026.
2. Received Appreciation certificate for 100% result in Artificial Intelligence (B.E) for the academic year 2024-2025.
3. Received Appreciation certificate for 100% result in Big Data Analytics (B.E) for the academic year 2020-2021.

### Technical Event Inter-college Level Coordinator / Organized Events

1. Organized Technical Event Competition at Inter-college level "7th National Level Coding Competition Code Igniter 2023" in association with Computer Society of India, CSI - Mysore Chapter on 28th June 2023 under IQAC.
2. Organized Technical Event Competition at Inter-college level "8th National Level Coding Competition Code Igniter 2025" under Computer Society of India - Mysore Chapter on 08th April 2025.

### Department Level Club Events Coordinator

1. Organized Technical Talk for all the FOSS CLUB Inter-department Students at GSSSIETW, Mysuru on "Technical talk on Linux commands" by Vaidehi M Purohit, Solution Engineer @ Telus Digital, Bangalore, on 23rd August 2025.
2. Organized Technical Talk for all the FOSS CLUB Inter-department Students at GSSSIETW, Mysuru on "MindMesh on Linux commands" on 14 November 2025.
3. Organized Technical Talk for all the FOSS CLUB Inter-department Students at GSSSIETW, Mysuru on "Safety and Reliability Engineering in Product Design" by Ms. Deepa Natarajamani, Sr. Safety Reliability Engineer, AMAZON Labs, California, USA, on 27/7/2024.
4. Organized one day Linux Quest Quiz Competition for all the FOSS CLUB Inter-department Students at GSSSIETW, Mysuru on 03rd October 2024.
5. Organized Technical Talk for all the FOSS CLUB Inter-department Students at GSSSIETW, Mysuru on "The Power of Linux: Exploring Key Operating System Concepts" by Ms. Taniya Arun Yadav, Technical Associate, Dalvik Apps, Pvt. Ltd., Mumbai, on 06/12/2024.

### Patent

1. Published Patent — (202341044979) entitled "AI Based Camera for Detecting Intruders". https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus
2. Published Patent — (202341045303) entitled "GPRS, Sensor and IOT based travel Bag". https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus
3. Published Patent — Design No. 425781-001 | Title: Autism Detecting Device | Registered under the Indian Intellectual Property system on 04/08/2024. Contributed to the design and development of an assistive technology device aimed at early detection of autism in children.
`,
  },
  "dr-shivaprasad-b-j": {
    name: "Dr. Shivaprasad B J",
    url: "/departments/cse/faculty/dr-shivaprasad-b-j",
    md: `**Faculty Name:** Dr. Shivaprasad B J

**Designation:** Associate Professor

**Program:** Computer Science and Engineering

### Professional Experience

- Total: 12 Years
- Teaching: 6
- Research: 4
- Industry: 2

### Contact Details

- **Email ID:** Official: Dr.Shivaprasadbj.cs@atme.edu.in | Personal: shivaprasad1607@gmail.com
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/721711
- **Google Scholar ID:** https://scholar.google.com/citations?hl=en&user=NL73p1sAAAAJ
- **Scopus ID:** https://www.scopus.com/authid/detail.uri?authorId=57207203830
- **Orcid ID:** https://orcid.org/0000-0001-9863-1094
- **Web of Science Researcher ID:** https://www.webofscience.com/wos/author/record/JWO-7160-2024
- **LinkedIn ID:** https://www.linkedin.com/in/shivaprasad-b-j-205754a8/

### Academic Details

**Qualification**

- Ph.D in Computer Science, Kuvempu University, Shivammoga
- M.Tech in Computer Science & Engineering, PES College of Engineering, Mandya. University: VTU, Belagavi
- B.E in Information Science and Engineering, CIT, Ponnampet. University: VTU, Belagavi

### Areas of Interest

- Medical Image Analysis
- Artificial intelligence & Machine Learning
- Document Image Processing

### Publication Details

**International Journals**

1. B. J. Shivaprasad and M. Ravikumar, "Analysis of Brain Tumor Using MR Images: A Brief Survey," International Journal of Image and Graphics, 2021. (Scopus Indexed)
2. M. Ravikumar, B. J. Shivaprasad, and D. S. Guru, "Enhancement of MRI Brain Images Using Notch Filter Based on Discrete Wavelet Transform," International Journal of Image and Graphics, Vol. 21(2), 2021. (Scopus Indexed)
3. M. Ravikumar and B. J. Shivaprasad, "Bidirectional ConvLSTMXNet for Brain Tumor Segmentation of MR Images," Tehnički Glasnik, Vol. 15(1), pp. 37–42, 2021. (Web of Science Indexed)
4. M. Ravikumar, P. G. Rachana, and B. J. Shivaprasad, "Segmentation of Tumor from Mammogram Images Using U-SegNet: A Hybrid Approach," Computer Methods in Biomechanics and Biomedical Engineering: Imaging & Visualization, 2022. (Scopus Indexed)
5. B. J. Shivaprasad and M. Ravikumar, "Enhancement of Brain Magnetic Resonance Images Using Cascade of Notch Filter and Linear Transformation Methods," Pattern Recognition and Image Analysis, 2022. (Indexed Journal)

**International/ National Conferences**

1. G. Shivakumar, M. Ravikumar, B. J. Shivaprasad, and D. S. Guru, "Extraction of Logo from Real Time Document Images Using Masking and Median Filter Approaches," 3rd International Conference for Emerging Technology (INCET), 2022.
2. G. Shivakumar, M. Ravikumar, B. J. Shivaprasad, and S. Sampathkumar, "Segmentation of Non-Text from Bilingual Real-Time Office Document Images Using U-Net Architecture," The Seybold Report, 2022.

### Book / Book Chapter Published

1. M. Ravikumar, B. J. Shivaprasad, and D. S. Guru, "Enhancement of MRI Brain Images Using Fuzzy Logic Approach," Communications in Computer and Information Science (CCIS), Springer Nature, 2020.
2. M. Ravikumar and B. J. Shivaprasad, "Segmentation of Brain Tumor from MR Images Using SegXNet Hybrid Approach," in ICTCS 2020, Springer Nature, 2020.
3. M. Ravikumar, P. G. Rachana, and B. J. Shivaprasad, "Segmentation of Tumor Region from Mammogram Images Using Deep Learning Approach," in Advanced Informatics for Computing Research, Springer Nature, 2021.
4. G. Shivakumar, M. Ravikumar, B. J. Shivaprasad, and D. S. Guru, "Signature Extraction from Bilingual Document Images Using Blobs Method," in Modern Approaches in Machine Learning & Cognitive Science, Springer Nature, 2022.
5. Mamatha, K. Abhimanyu Kumar Patro, Shweta Vincent and B. J. Shivaprasad, "CryptoSteganographic Systems for Secure Data Transmission: Concepts, Architectures, and Challenges," in Lecture Notes in Networks and Systems (LNNS), Vol. 1982, Springer Nature, 2026.

### Membership in Professional Bodies

1. Life Member, Indian Society for Technical Education (ISTE) – Membership No.: LM87797

### Honours/Awards/Achievements

1. Project Guide – Karnataka State Council for Science and Technology (KSCST) Student Project Programme (SPP) 2025–26 – Guided the KSCST-sponsored student project titled "Face Recognition Automatic Attendance Management System" under the KSCST Student Project Programme (SPP) 2025–26.
2. Wipro Certified Faculty (WCF) – Successfully cleared the Wipro TalentNext Digital Skills Readiness Program (DSRP) certification assessment and was recognized by Wipro Ltd. as a Project-Based Learning (PBL) Mentor in Java Full Stack, 15 March 2024.

**Courses Completed**

1. Advanced Java Full Stack – Successfully completed the Wipro TalentNext training program from 09 February 2026 to 20 February 2026.
2. Cloud Computing – Successfully completed the Advanced Technology Program conducted by Wipro TalentNext from 14 October 2024 to 18 October 2024.
3. Artificial Intelligence & Machine Learning (AI & ML) – Successfully completed the Advanced Technology Program conducted by Wipro TalentNext from 22 July 2024 to 26 July 2024.
4. Java Full Stack – Successfully completed the Wipro TalentNext training program from 22 January 2024 to 09 February 2024.
5. Digital Skills Readiness Program (DSRP) – Recognized as a Project-Based Learning (PBL) Mentor in Java Full Stack after successfully clearing the Wipro TalentNext Certification Assessment, 15 March 2024.

### FDPs/Conferences/Workshops/STTP/MOOC Certification

1. AICTE Training and Learning (ATAL) Academy FDP – Successfully completed a one-week Faculty Development Program on "Artificial Intelligence: Insights and Applications" at Maharaja Institute of Technology, Mysuru, 05–10 January 2026.
2. MeitY-Supported FDP – Participated in a two-week Faculty Development Program on "AI in Medical Imaging and Diagnostics: Current Trends and Challenges", jointly organized by E&ICT Academy, NIT Patna and partner institutions, 07–18 July 2025.
3. SkillDzire–AICTE FDP – Successfully completed a one-month online Faculty Development Program on "Deep Learning", organized by SkillDzire in collaboration with AICTE, July 2024.
4. Cyber Tech Associates FDP – Successfully completed a six-day Faculty Development Program on "Cyber Security" at Alva's Institute of Engineering and Technology (AIET), Moodbidri, 15–20 April 2024.
5. Participated in the seminar on "Artificial Intelligence: Challenges and Opportunities" at Sri Jayachamarajendra College of Engineering (SJCE), Mysuru, 13 January 2020.
6. Participated in the DST-Sponsored National Workshop on "Data Analytics and Learning" at the University of Mysore, 18–20 November 2019.
7. Participated in the TEQIP-III Sponsored Second National Workshop on "Data Analytics and Learning (DAL): Advanced Topics", organized by Sri Jayachamarajendra College of Engineering (SJCE), Mysuru, 29–31 August 2019.
8. Participated in the 3rd Workshop on "Brain Computing and Learning" at the Indian Institute of Science (IISc), Bengaluru, 24–28 June 2019.
9. Attended the Winter Course on "Machine Intelligence and Brain Research" at the Indian Institute of Technology (IIT) Madras, 02–09 January 2019.
10. Participated in a three-day Faculty Development Program on Advanced Topics in "Machine Learning & Applications in Engineering & Technology" at NMAM Institute of Technology (NMAMIT), Nitte, 26–28 October 2018.
11. Participated in a six-day International Workshop on "Machine Learning: Insights and Applications" at Vidyavardhaka College of Engineering (VVCE), Mysuru, 25–30 July 2018.
12. Participated in a five-day Faculty Development Program on "Machine Learning & its Applications in Engineering & Technology" at NMAM Institute of Technology (NMAMIT), Nitte, 02–06 January 2018.

### Academic and Administrative Activities

- Organizing technical events, and student club activities.
- Coordinating industry interaction, internships, and placement activities.
- Supporting admission, orientation, and outreach programmes.
`,
  },
  "mahesha-b-p": {

    name: "Mr. Mahesha B P",
    url: "/departments/cse/faculty/mahesha-b-p",
    md: `**Faculty Name:** Mr. Mahesha B P

**Designation:** Attender

**Department:** Computer Science & Engineering

**Date of Joining:** 19/01/2026

**Nature of Association:** Regular

### Contact Details

- **Mobile Number:** 8088855938

### Present Address

S/o Purushothama, Bevinahalli Village, Sosale Hobli, T N Pura Tq, Mysore Dist.
`,
  },
  "likitha-d": {
    name: "Likitha D",
    url: "https://atme.edu.in/likitha-d/",
    md: `## Professional Experience

- Teaching: Nil
- Research: Nil
- Industry: Nil

## Contact Details

- **Email ID:** Personal: [likithad17@gmail.com](mailto:likithad17@gmail.com)
- **Scopus ID:** –
- **LinkedIn ID:** <https://www.linkedin.com/in/likitha>

## Academic Details

- **Qualification**
- **MTech** in Computer Science and Engineering, at VTU CPGS Mysuru
- **B.E** in Information Science and Engineering, at VVCE Mysuru

## Areas of Interest

1. Programming – C, Java, JS, Python
2. Testing
3. Research

## Membership in Professional Bodies

- NIL

## FDPs/Conferences/Workshops/STTP/MOOC Certification

- NIL

## Roles and Responsibilities: Institute Level

- NIL

## Roles and Responsibilities: Department Level

- NIL`,
  },
  "mrs-shruthi-h-g": {
    name: "Dr. Shruthi H G",
    url: "https://atme.edu.in/mrs-shruthi-h-g/",
    md: `## Contact Details

- **Email ID:** Official: [shruthihg_cv@atme.edu.in](mailto:shruthihg_cv@atme.edu.in) | Personal: [shruthi.hg17@gmail.com](mailto:shruthi.hg17@gmail.com)
- **Vidwan ID:** 201404, <https://vidwan.inflibnet.ac.in/profile/201404>
- **Google Scholar ID:** u7bnHzMAAAAJ
- **Scopus ID:** 57679266600
- **Orcid ID:** 0000-0002-1678-356X
- **LinkedIn ID:** <https://www.linkedin.com/in/shruthi-hg-548922263/>

## Academic Details

- **Qualification**
- **Ph.D.**
- **M.Tech** in CAD Structures
- **B.E** in Civil Engineering

## Professional Experience

- Teaching: 11 Years
- Research: Nil
- Industry: 1 Year

## Areas of Interest

1. Concrete Technology
2. Construction Technology
3. Geotechnical Engineering

## Publication Details

- Shruthi H G et al.,”Effect of Polyethylene Glycol (PEG) as Curing Agents in Concrete”14th International Conference on Advances in Computing, Control, and Telecommunication Technologies, ACT 2023, pp. 1067–1072,2023-June. ( **Scopus paper**).
- Shruthi H G, et.al., “A Review of Various Masonry Blocks Employed in Wall Construction”, International Conference on Recent Tends in Science & Technology, Oct 2023.
- Shruthi H G, et.,al, “Soil stability an Experimental Investigation Utilizing Bagasse Ash in Combination with Guar Gum and Xanthan Gum Biopolymers”, International Conference on Recent Tends in Science & Technology, Oct 2023.
- Shruthi H G, Gowtham Prasad M E, “Experimental Investigations on Influence of natural fibers on strength properties of concrete”, International conference on Interdisciplinary approaches in Civil Engineering for Sustainable Development, July 2023. ( **Scopus Paper**).
- Shruthi H G, Raghavendra K S, Jhenkar G, Harshavardhan H S, Syed Imad I, “Experimental Investigation on Mechanical Properties of Concrete by Partial Replacement of WPP and SD in Concrete”, International Journal of Innovative Research in Science, Engineering and Technology (IJIRSET), Volume 12, Issue 5, ISSN:6502-6507, 2023.
- Shruthi H G, Saniya H M, Chirag N, Nishchitha J, Nandish H D, “Experimental investigation on strength properties of concrete by partial replacement of natural and synthetic fibres”, International Journal of Innovative Research in Science, Engineering and Technology (IJIRSET), Volume 12, Issue 5, ISSN:6502-6507, 2023.
- Shruthi H G, Jyothi D N and Dr. Kavitha S, “Effect of Polyethylene glycol (PEG) as curing agents in concrete”, International Conference on Recent Trends in Science and Technology, ICRTST, 14th July 2022. ( **Scopous paper**)
- Shruthi H G, M K Nayana, Tanzil Ahmed, Darshan N S, Pavan Kumar R “An experimental work on strength properties of M30 grade concrete by partial replacement of cement and fine aggregates with non-conventional construction materials” published in International Journal of Innovative Research in Science, Engineering and Technology (IJIRSET), Volume 11, Issue 7, July 2022, PP: 10054-10059, ISSN: 2319-8753 ( [http://www.ijirset.com/upload/2022/july/149\_An.pdf](http://www.ijirset.com/upload/2022/july/149_An.pdf)).
- Shruthi H G et al.,”Drought Risk Assessment Using NDVI—A Case Study “Advances in Science, Technology and Innovation,pp.243–251,2022 **.(ScopusPaper).** Shruthi H G et al.,”Enviro-Safe Stabilization of Black Cotton Soil—Experimental Study with Optimal Proportion of Stabilizer”, Advances in Science, Technology and Innovation, pp. 719–725, 2022. **.(Scopus Paper).**
- Shruthi H G, Alen Joe Fletcher, Deekshith V V, Mohammed Saqibulla, Pavithra H C “Effect of Super Absorbent Polymer (SAP) As Curing Agent in Concrete” published in International Journal of Innovative Research in Science, Engineering and Technology (IJIRSET), Volume 9, Issue 8, Aug 2020, PP: 7230-7234, ISSN: 2319-8753. ( [http://www.ijirset.com/upload/2020/august/59\_EFFECT\_NC.PDF](http://www.ijirset.com/upload/2020/august/59_EFFECT_NC.PDF)).
- Shruthi H G, Gowtham Prasad M E, “Study of split tensile strength of concrete by partial replacement of granite dust powder in cement” published in International Journal of Innovative Research in Science, Engineering and Technology (IJIRSET), Volume 9, Issue 6, June 2020, PP: 4550-4553, ISSN: 2319-8753.
- Shruthi H G, Ramitha H E, Harish K R, Prajwal M R, Shilpashree K S, “Influence of Recycled Waste Water as Mixing and Curing Agents on the Properties of Concrete” published in International Journal of Innovative Research in Science, Engineering and Technology (IJIRSET), Volume 9, Issue 8, Aug 2020, PP: 7532-7536, ISSN: 2319-8753.  ( [http://www.ijirset.com/upload/2020/august/112\_Influence\_NC.PDF](http://www.ijirset.com/upload/2020/august/112_Influence_NC.PDF)).
- Shruthi H G, Pavithra B S, Sunil S, Thejasgowda L N, Rajinikanth, “Study of Properties of Concrete with Influence of Over Burnt Bricks as Partial Replacement in Aggregate and It’s Performance in Elevated Temperature” International Journal of Innovative Research in Science, Engineering and Technology (IJIRSET), ISSN: 2319-8753, 2020-21. ( [http://www.ijirset.com/upload/2021/september/11\_Study\_NC.pdf](http://www.ijirset.com/upload/2021/september/11_Study_NC.pdf)).
- Shruthi H G, Madhushree M, Prashanth S V, Pooja S, Jayavijaya B N “Effect of Rice Husk Ash and Corn Cob Ash in Concrete with Partial Replacement in Cement” published in International Journal of Innovative Research in Science, Engineering and Technology (IJIRSET), Volume 8, Issue 6, June2019, PP: 7010-7015, ISSN: 2319-8753. ( [http://www.ijirset.com/upload/2019/june/9\_2\_Effect\_NEW.pdf](http://www.ijirset.com/upload/2019/june/9_2_Effect_NEW.pdf)).
- Shruthi H G, Harshith M K et al., “Performance Evaluation of waste coconut shells and coir fiber as a substitute for coarse and fine aggregate in structural concrete member” published in International Research Journal of Engineering and Technology (IRJET), Volume 5, Issue 6, June 2018, PP: 1349-1353, ISSN: 2395-0056. ( https://www.irjet.net/archives/V5/i6/IRJET-V5I6252.pdf).
- Shruthi H G, Pujitha Ganapathi C et al., “Utilization of waste Foundry sand and waste ceramic tiles as partial replacement for fine and coarse aggregate in concrete” published in International journal of Innovative research in science, Engineering and Technology (IJIRSET), Volume 7, Issue 5, May-2018, PP: 5066-5073, ISSN: 2319-8753. (http://www.ijirset.com/upload/2018/may/72\_9\_UTILIZATION.pdf).
- Shruthi H G, Gowtham Prasad M.E, Harsha Urs,“A Survey on Partial Replacement of Sand with Crushed Brick Powder in Concrete” published in International Journal Of Advanced Research in Engineering & Management International Journal of Innovative Research in Science, Engineering and Technology (IJIRSET), PP. 7026-7030, June 2018,ISSN: 2319-8753.
- Shruthi H G, Gowtham Prasad M.E et al., “Evaluation Of Roof Diaphragm Effects On Seismic Behaviour Of RC Buildings” published in International Journal Of Advanced Research in Engineering & Management (IJAREM), Volume: 03, Issue: 04, PP. 32-60, April 2017, ISSN: 2456-2033.
- Shruthi H G, Gowtham Prasad M.E et al., “Piezohump – A Radical Shift towards Renewable Energy Source” published in International Journal of Latest Technology in Engineering, Management & Applied Science (IJLTEMAS), Volume: 04, Issue: 04thApril 2017, ISSN: 2278-2540.
- Shruthi H G, Gowtham Prasad M.E et al., “Applicability Of HEC-HMS Tool To Western Ghats – Nethravathi River Basin” published in International Journal Of Advanced Research in Engineering & Management (IJAREM), Volume: 03, Issue: 04, PP. 70-79, April 2017, ISSN: 2456-2033.
- Shruthi H G, Gowtham Prasad, Samreen taj, Syed ruman pasha “Reuse of ceramic waste as aggregate in concrete” International Research Journal of Engineering and Technology (IRJET), Volume: 03, Issue: 07, p. 2395-0072, July-2016.
- Shruthi H G and Mr. B.S. Jayashankar Babu “Analysis of Isotropic Perforated Stiffened Plate using FEM” Published in International Journal of Engineering Research and Applications (IJERA) Vol.4, Issue 8, ISSN: 2248-9622, August 2014.

## Membership in Professional Bodies

- International Association of Engineers (IAENG)
- American society of Civil Engineers (ASCE)
- Association of Consulting Civil Engineers (ACCE)

## Honours/Awards/ Achievements

- Received best teacher award for the academic year 2021-22.

## FDPs/Conferences/Workshops/STTP/MOOC Certification

- FDP’s – 37
- Workshops/Symposium/Seminars – 9
- Training Programs – 6
- Certifications – 8
- Conferences – 13

## Proposal/Funding/Project Financial Assistance

- Received ATAL AICTE grant of Rs. 1,00,000/- for conduction of online FDP on “Innovative approaches to Disaster management & Resilient Infrastructure” for faculties. Event organized & completed in the month of Dec 9th to 14th , 2024.
- Received grant of Rs. 7000/- for the BE project which was guided in the academic year 2014-15 from KSCST under 39st Series Student Project Programme.

## Patent

- **National** — Title: M30 grade concrete using partially submitted eggshell powder and steel slag and method of preparing thereof. Published/Granted: Published in the month of October 2023. Patent No.: 202341058563

## Roles and Responsibilities: Institute Level

- NABL – DQM

## Roles and Responsibilities: Department Level

- Academic Coordinator
- Patent Coordinator
- Course File Coordinator
- Mentoring Coordinator
- SMR Report Coordinator
- IQAC Coordinator
- NAAC Criteria-4
- Concrete Lab - Incharge`,
  },
  "bharathi-b": {
    name: "Mrs. Bharathi B",
    url: "https://atme.edu.in/bharathi-b/",
    md: `## Academic Details

- **M.Tech** in Transportation Engineering (2nd Rank), REVA Institute of Technology and Management, Bangalore
- **B.E.** in Civil Engineering, PES College of Engineering, Mandya
- Pursuing PhD

## Contact Details

- **Email ID:** [bharathib_cv@atme.edu.in](mailto:bharathib_cv@atme.edu.in)
- **LinkedIn ID:** <https://www.linkedin.com/in/bharathi-raj-b7952438/>
- **Google Scholar ID:** <https://scholar.google.com/citations?user=hC0BSFcAAAAJ&hl=en>
- **Orcid ID:** <https://orcid.org/0000-0002-1858-920X>
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/201087>

## Professional Experience

- Transport Planner at Consortia of Infrastructure Engineers – 1 year
- Infrastructure Manager at Consortia of Infrastructure Engineers – 10 months
- Assistant Professor at ATMECE – 10th August 2015 to till date

## Publication Details

- "Development of noise variation and mitigative measures for SH-17, (Mandya Stretch)" in International conference on Sustainable Civil Infrastructure by ICSCI 2014 © ASCE India Section, Oct 17 – 18, 2015, Hitex, Hyderabad, Telangana, India.
- "Development of Pedestrian safety index and mathematical modelling" in International conference on Sustainable Civil Infrastructure by ICSCI 2014 © ASCE India Section, Oct 17 – 18, 2015, Hitex, Hyderabad, Telangana, India
- "Vehicular Noise modelling and mitigative measures for SH 17- (Mandya stretch)" in first National conference ACIDIC organized and held at NITK, Suratkal.
- "Experimental Study on Determination and Extraction of Heat from the Surface of Flexible Pavement by Addition of Graphene" in IJSRD International Journal for Scientific Research & Development, Vol 8, Issue 6, 2020
- "Performance Evaluation and Measurement of Heat from Bituminous Surface by Addition of Graphene" International journal for scientific research and Development, 6/4/991-994, Jul-18, ISSN 2321-0613
- "Determination of Accident Point Weightage for a Mixed Traffic Flow in Teir-2 City Mysuru: A Case Study" published in International journal for scientific research and Development, Vol 6/4/865-868, Sep-18, ISSN 2321-0613

## Conference Details

- "Determination of accident point weightage for a mixed traffic flow condition- A case study" in National Conference on Recent trends in GIS, material science and Civil Engineering organised and held at Department of Civil Engg, ATMECE, Mysuru
- Experimental Study on Strength & Durability Characteristic of Light-weight Concrete with Coal Cinder as a Replacement for Coarse Aggregate presented in the "International Conference on Recent Trends in Science and Technology (ICRTST- 2021)" organised by ATME College of Engineering at Oct-21

## Honours/Awards/ Achievements

- Secured 2nd rank in M.Tech (VTU)
- Won Best Paper award for "Development of Noise variation and mathematical modelling for SH 17- (Mandya stretch)" in Revamp held at REVA University
- Organised 4 days Webinar on "Recent Trends in Transportation Engineering"

## Membership in Professional Bodies

- ISTE
- Traffic Engineers Safety Trainers
- Resource person for INSTRUCT (A unit for training Highway Engineers)

## Areas of Interest

- Transportation Engineering

## Roles and Responsibilities: Institute Level

- NIL

## Roles and Responsibilities: Department Level

- Result Analysis
- CEA Coordinator
- QSI Gauge Coordinator
- Event Planning Coordinator
- NABL – QM (Files)
- NAAC Criteria-2
- IV Year - Class Teacher
- Concrete Lab - Incharge`,
  },
  "mr-rudresh-a-n": {
    name: "Mr. Rudresh A N",
    url: "https://atme.edu.in/mr-rudresh-a-n/",
    md: `## Academic Details

- **M.Tech** in Highway Technology at Dayananda Sagar College of Engineering, Bengaluru
- **B.E.** in Civil Engineering at Global Academy of Technology, Bengaluru

## Contact Details

- **Email ID:** [rudreshan.cv@atme.edu.in](mailto:rudreshan.cv@atme.edu.in)
- **LinkedIn ID:** <https://www.linkedin.com/in/rudresh-gowda-6614729a/>
- **Google Scholar ID:** <https://scholar.google.co.in/citations?user=jBeM8sEAAAAJ>
- **Orcid ID:** <https://orcid.org/0000-0002-9389-0019>

## Professional Experience

- Worked as Assistant Professor in R K University, Rajkot, Gujarat
- Working as Assistant Professor in Civil Engineering Department at ATME College of Engineering, Mysuru (August 2015-till date)

## Publication Details

- Rudresh A N "Effect of Random Inclusion of Sisal Fiber on strength Behaviour of Black Cotton soil" in IJERT, ISSN: 2278-0181, Vol.2 Issue 7.
- P Shashank, Rudresh A N and Manu Vijay "Load Moment Interaction Behaviour of Equally Legged T Column", Published in International Research Journal of Engineering & Technology (IRJET), Volume 5, Issue 5, ISSN: 2395-0056, May 2018, Page 1809 – 1812.
- Rudresh A N and P Shashank "Experimental study on Strength of Fibre Reinforced Concrete for Rigid Pavements", Published in International Research Journal of Engineering & Technology (IRJET), Volume 5, Issue 6, ISSN: 2395-0072, June 2018, Page 2704 – 2710.
- Rudresh A N and Puneeth K "Analysis of Reinforced Concrete (Rc) Frames Under Lateral Loads Using Steel Bracings", Published in International Journal of Innovative Science and Research Technology (IJISRT), Volume 3, Issue 11, ISSN: 2456-2165, November 2018, Page 364 – 369.
- Rudresh A N "Experimental Study on Marshall Stability of BC Mix by Adding PET as an Additive", Published in International Research Journal of Engineering & Technology (IRJET), Volume 7, Issue 5, ISSN: 2395-0072, May 2020, Page 5219 – 5223.
- Rudresh A N and Mandeep G "Experimental Study on Strength Characteristics of Concrete with Gold Ore Tailings as Fine Aggregates", Published in International Journal of Engineering Development and Research (IJEDR), Volume 8, Issue 3, ISSN: 2321-9939, August 2020, Page 72 – 75.
- Rudresh A N and Girish P "Stabilized Rammed Earth Construction Using Natural Fibres", Published in International Journal of Engineering Development and Research (IJEDR), Volume 8, Issue 3, ISSN: 2321-9939, August 2020, Page 35 – 41.
- Rudresh A N "Use of Waste Plastic With Bitumen for Surface Course quarry dust" in Recent trends in Geosciences, Material Science, and Civil Engineering, ISBN978-93-86256-67-6 Mar 2017, Pg 139-143.

## Membership in Professional Bodies

- Association of Consulting Civil Engineers (ACCE – 4461 L)
- Indian Society for Technical Education (ISTE – LM 116880)
- International Association of Engineers (IAENG – 221868)

## Proposal/Funding/Project Financial Assistance

- Received grant of Rs. 3500 for the UG Project titled "Assessment of pedestrian crossing at sub-urban junction, Mysuru" guided in the academic year 2018-19 from KSCST under 42nd series student project programme.

## FDPs/Conferences/Workshops/STTP/MOOC Certification

- Presented Poster on "Effect of RBI Grade81 on Engineering properties of Black Cotton soil" in Symposium-2018, held at ATMECE, Mysuru on 10th October.
- Attended a 6-Day FDP organized by Department of Mechanical Engineering at ATMECE from 2nd to 9th July 2019 on "Art of Counselling"
- Attended 5-Day FDP on "Geospatial Technologies" organized by JSS Science and Technology, Mysuru from 15th to 19th July 2019
- Attended a 4-Day Online Workshop on Exam Reforms organized by AICTE from 29th April to 2nd May 2020
- Attended a 6-Day Online Workshop on "Facets of Sustainable Growth in Infrastructure Development (FSGID)" organized by JSS Science and Technology University from 1st March to 6th March 2021

## Areas of Interest

- Transportation Engineering

## Roles and Responsibilities: Institute Level

- Sports Coordinator

## Roles and Responsibilities: Department Level

- IA Coordinator / EMS Coordinator
- Budget / Department Accounts
- Industry Interaction Coordinator
- DST Coordinator
- NAAC Criteria-5
- III Year - Class Teacher
- Survey Lab - Incharge`,
  },
  "puneeth-k": {
    name: "Mr. Puneeth K",
    url: "https://atme.edu.in/puneeth-k/",
    md: `## Contact Details

- **Email ID:** Official: [puneethk_cv@atme.edu.in](mailto:puneethk_cv@atme.edu.in) | Personal: [puneeth.aug@gmail.com](mailto:puneeth.aug@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/200821>
- **Google Scholar ID:** <https://scholar.google.com/citations?user=HwWduwYAAAAJ&hl=en>
- **Scopus ID:** 58653500900
- **Orcid ID:** <https://orcid.org/0000-0002-9294-680X>

## Academic Details

- **Qualification**
- **Ph.D.** – Pursuing
- **M.Tech** in Structural Engineering
- **B.E** in Civil Engineering

## Professional Experience

- Teaching: 9 Years
- Research: NIL
- Industry: 3 Months

## Areas of Interest

1. Structural Engineering
2. Building Science

## Publication Details

- A review of various Masonry Blocks Employed in wall Construction, Tuijin Jishu/Journal of Propulsion Technology, ISSN: 1001-4055, Vol. 44 No. 5 (2023), Pg No. 1019 – ( [https://www.propulsiontechjournal.com/index.php/journal/article/view/2728](https://www.propulsiontechjournal.com/index.php/journal/article/view/2728))
- Soil Stability: An Experimental Investigation Utilizing Bagasse Ash in Combination with Guar Gum and Xanthan Gum Biopolymers, Tuijin Jishu/Journal of Propulsion Technology, ISSN: 1001-4055, Vol. 44 No. 5 (2023), Pg No. 1162 – ( [https://www.propulsiontechjournal.com/index.php/journal/article/view/2744](https://www.propulsiontechjournal.com/index.php/journal/article/view/2744))
- An Empirical & Analytical Study on Composite RC Beams with Mineral Admixtures, International Journal of Innovative Research in Science, Engineering and Technology (IJIRSET), ISSN: 2319-8753, Volume 13, Issue 5, May 2024, Pg No. 9652 – ( [https://www.ijirset.com/upload/2024/may/518\_An.pdf](https://www.ijirset.com/upload/2024/may/518_An.pdf))
- Behavioral Study on the Usage of Biopolymers with Bagasse Ash on Red Soil, International Journal of Innovative Research in Science, Engineering and Technology (IJIRSET), ISSN: 2319-8753, Volume 12, Issue 5, May 2023, PP. 5921 – ( [https://www.ijirset.com/upload/2023/may/212\_Experimental%20\_NC.pdf](https://www.ijirset.com/upload/2023/may/212_Experimental%20_NC.pdf))
- Experimental Study on Usage of Guar Gum with Rice Husk Ash in Strengthening of Red Soil, International Journal of Innovative Research in Science, Engineering and Technology (IJIRSET), ISSN: 2319-8753, Volume 12, Issue 5, May 2023, PP. 5828 – 5831 ( [https://www.ijirset.com/upload/2023/may/212\_Experimental%20\_NC.pdf](https://www.ijirset.com/upload/2023/may/212_Experimental%20_NC.pdf))
- “Analytical study on Tall Building with Bundle Tube Steel Structure”, International Journal of Creative Research Thoughts (IJCRT), ISSN:2320-2882, Volume.11, Issue 4, pp.353-357, April 2023. ( [https://ijcrt.org/papers/IJCRT2304279.pdf](https://ijcrt.org/papers/IJCRT2304279.pdf))
- **Comparative Study on Properties of Soil replaced with Agro waste Stabilized using Metakaolin and Cement as Additives,** GRENZE International Journal of Engineering and Technology, Volume 9, Issue 1, Pg No: 1077- 1081, ISSN: 2395-5295(Online), Jan 2023
- Experimental Investigation on Compressed Earthen Blocks manufactured with Agro waste stabilized using additives, International Journal of Creative Research Thoughts (IJCRT), ISSN:2320-2882, Volume.10, Issue 7, July 2022, pp.784-788. ( [https://ijcrt.org/papers/IJCRT2207626.pdf](https://ijcrt.org/papers/IJCRT2207626.pdf))
- “Behaviour of Regular and Non-Regular RC Buildings with & without Floating columns using ETABS”, International Research Journal of Engineering and Technology (IRJET), ISSN: 2395-0056, Volume 8, Oct 2021. ( [https://www.irjet.net/archives/V8/i10/ICRTST-2021/IRJET-V8I1016.pdf](https://www.irjet.net/archives/V8/i10/ICRTST-2021/IRJET-V8I1016.pdf)
- “Experimental Investigation on Effect of RBI Grade81 on Properties of Black Cotton Soil”, International Research Journal of Engineering and Technology (IRJET), ISSN: 2395-0072, Volume.9, Issue 07, July 2022. ( [https://www.irjet.net/archives/V4/i9/IRJET-V4I9278.pdf](https://www.irjet.net/archives/V4/i9/IRJET-V4I9278.pdf))
- Experimental Investigation on Strengthening of Cohesive Soil using Bagasse Ash & Montmorillonite Clay, International Journal for scientific Research & Development, Vol. 8, Issue 6, Sep 2020. ( [https://www.ijsrd.com/articles/IJSRDV8I60202.pdf](https://www.ijsrd.com/articles/IJSRDV8I60202.pdf))
- Behavior of RC Buildings with Floating Columns at Various Floors Using ETABS, International Journal for scientific Research & Development, Vol. 8, Issue 8, Sep 2020. ( [https://ijsrd.com/Article.php?manuscript=IJSRDV8I60179](https://ijsrd.com/Article.php?manuscript=IJSRDV8I60179))
- “Comparative Study on Behaviour of RC Framed Buildings with Infills modelled using FEMA 356 & IS: 1893”, International Research Journal of Engineering and Technology (IRJET), ISSN: 2395-0072, Volume.7, June 2020. ( [https://www.irjet.net/archives/V7/i6/ICRTST-2020/IRJET-V7I631.pdf](https://www.irjet.net/archives/V7/i6/ICRTST-2020/IRJET-V7I631.pdf))
- “Experimental Investigation on Strengthening of Cohesive Soil Using Risk Husk Ash & Metakaolin”, International Journal of Creative Research Thoughts (IJCRT), ISSN:2320-2882, Volume.8, Issue 5, pp.1967-1971, May 2020. ( [https://ijcrt.org/viewfull.php?&p\_id=IJCRT2005257](https://ijcrt.org/viewfull.php?&p_id=IJCRT2005257))
- Experimental study on Effect of crumb rubber in concrete mix, IJSRD vol no. 6, issue 05, ISSN: 2321-0613, 2018.
- “Analysis of Reinforced Concrete (RC) frames under lateral loads using steel bracings” published in IJISRT vol no. 3, issue 11, ISSN: 2456-2165, 2018 ( [https://ijisrt.com/wp-content/uploads/2018/12/IJISRT18NV328.pdf](https://ijisrt.com/wp-content/uploads/2018/12/IJISRT18NV328.pdf))
- “Effect of location of infills on performance of Reinforced concrete (RC) framed structure” published in IJSRD vol no. 6, issue 02, ISSN: 2321-0613, 2018. ( [https://mail.ijsrd.com/Article.php?manuscript=IJSRDV6I21291](https://mail.ijsrd.com/Article.php?manuscript=IJSRDV6I21291))

## Membership in Professional Bodies

- - Life member ACCE (5256 – L)
- - Professional membership in IAENG (206095)
- - Structural Engineering Forum of India (SEFI)

## Honours/Awards/ Achievements

- - **Co – coordinator** for the Six Day Faculty Development program on “Emerging trends and its applications in civil Engineering”, from 18th to 23rd December 2023, ATMECE in association with ATAL.
- - **Convener** for Three Day National Level Symposium on “Application of Image Processing Techniques in the field of Electronics Communication & Civil Engineering held in ATMECE from 6th November to 8th November 2023 sponsored by SERB, DST.
- - **Convener** for webinar series on “Design of RC Structure, Construction Practice & its Management” organised by Department of Civil Engineering, ATMECE from 14th – 18th July 2020.

## FDPs/Conferences/Workshops/STTP/MOOC Certification

FDP’s:
- Five days Online Faculty Development Programme on “Smart Cities: Emerging Solutions and Sustainability”, organised by Swami Keshvanand Institute of Technology, Management & Gramothan, Jaipur from 27th to 31st January 2025.
- Six Day Online Faculty Development program on **“INNOVATIVE APPROACHES TO DISASTER MANAGEMENT AND RESILIENT INFRASTRUCTURE”**, from 9th to 14th December 2024, ATMECE in association with ATAL.
- Six Day Faculty Development program on **“Emerging trends and its applications in civil Engineering”**, from 18th to 23rd December 2023, ATMECE in association with ATAL.
- Three day Face to Face FDP on “ **Inculcating Universal Human Values in Technical Education”**, from 2nd November to 4th November 2023, ATMECE, Mysore.
- Five Day Faculty Development Program on **“Geotechnical Engineering Practices”** from 10th to 14th Oct, 2022, Sponsored by APJ Abdul Kalam Technological University, organized by the Department of Civil Engineering, LBS Institute of Technology for Women, in association with Indian Geotechnical Society, Thiruvananthapuram Chapter in Virtual mode.
- One week Teachers Training program on **“Earthquake Resistant Design of Structures”** from 16th to 20th May 2022, VTU In association with AICTE in virtual mode.
- One-week Faculty Development program on **“Infrastructure Works: Site Survey to Execution – Through Modern Project Management Techniques”** from 10th to 15th August 2020, was organized by DSATM in association with Indian Concrete Institute, Bengaluru Center in virtual mode.
- One Week Faculty Development Program on **“NBA & NAAC Accreditation process”** from 4th June 2020 to 8th June 2020, M.S. Ramaiah Institute of Technology under AICTE Margadarshan Scheme in virtual mode.
- Six Day Faculty Development Program on **“Art of Counselling”** from 2nd to 9th July 2019, ATMECE, Mysore.
- Three Day Faculty Development Program on **“Total station surveying and Drone Survey technology”** from 26th March to 28th March 2019, ATMECE, Mysore.
- Four Days Faculty Development Program on **“Software Application Laboratory”** from Jan 8th to Jan 11th 2018, DSATM, Bangalore.

Workshops:
- Attended 5 – Day Online workshop on “Interdisciplinary Approaches in Geotechnical and Geo-environmental Engineering, held from 17th – 21st February, 2025, organized by Department of Civil Engineering, Harcourt Butler Technical University, Kanpur.National Workshop on “Recent Advances in Geotechnics for Infrastructure” on 5th March 2024 at Maharaja Institute of Technology Mysore

MOOC Certification:
- NPTEL Course on “Modern Construction Materials”
- NPTEL Course on “Research Methodology”
- NPTEL Course on “Geotechnical Earthquake Engineering”
- NITTT Module 3 – “Communication Skills, Modes & Knowledge Dissemination”
- NITTT Module 2 – “Professional Ethics & Sustainability”
- NITTT Module 1 – “Orientation towards technical education and curriculum aspects”
- ARPIT Course on “Pedagogical Innovations in teaching & Learning”
- NPTEL Course on “Foundation Engineering”

## Proposal/Funding/Project Financial Assistance

- Received Grant of **3,13,000/-** from AICTE, ATAL for Conducting a 6 Days Faculty Development Programme on “Emerging Trends and its Applications in Civil Engineering” in the academic year 2023-24.
- Received Grant of **50,000/-** from SERB, DST for conducting Three National Level Symposium on “Application of Image Processing Techniques in the field of Electronics Communication and Civil Engineering” in the academic year 2023-24.
- **5,000/-** was awarded by VTU for students B.E project titled “A Case Study on Supply Chain Management in Residential building construction around Mysuru” during the academic year 2020-21.
- **Rs. 5,000/-** was awarded by KSCST Students B.E project titled “Comparative study on stabilization of cohesive soil using Rice Husk ash with lime powder and Metakaolin as additives” during the academic year 2018-19.

## Roles and Responsibilities: Institute Level

- NABL – Technical Manager

## Roles and Responsibilities: Department Level

- NBA Coordinator
- Dept - Website Coordinator
- Internship Coordinator
- Research Publication Coordinator
- NAAC Criteria-7
- BMT Lab - Incharge`,
  },
  "namitha-a-p": {
    name: "Mrs. Namitha A P",
    url: "https://atme.edu.in/namitha-a-p/",
    md: `## Contact Details

- **Email ID:** Official: [NamithaAP_CV@atme.edu.in](mailto:NamithaAP_CV@atme.edu.in) | Personal: [nammygowda@gmail.com](mailto:nammygowda@gmail.com)
- **Google Scholar ID:** <https://scholar.google.com/citations?user=s64HiXkAAAAJ&hl=en>
- **Scopus ID:** <https://www.scopus.com/authid/detail.uri?authorId=58653938600>
- **Orcid ID:** <https://orcid.org/my-orcid?orcid=0000-0001-6109-1856>
- **LinkedIn ID:** <https://www.linkedin.com/in/namitha-gowda-0b8b23215/>

## Academic Details

- **M.Sc** in Applied Geology
- **B.Sc** in Earth Science (Geology)

## Professional Experience

- Teaching: 5 Years
- Research: NIL
- Industry: NIL

## Areas of Interest

1. Geology
2. Hydrogeology
3. Remote sensing

## Publication Details

- Namitha, A.P., Vijay, M., Ahmed, S.K., …Kumar, N.S.M., Choubey, S.B. 15th International Conference on Advances in Computing Control and Telecommunication Technologies Act 2024 2, pp. 6700-6710
- Namitha, A.P., Puneeth, K., Rudresh, A.N. 14th International Conference on Advances in Computing Control and Telecommunication Technologies Act 2023 2023-June, pp. 1077-1081
- Namitha A P, Shashank C, Vishwas I G, Pallavi M & Karthik K, "Analysis of Rainfall and Groundwater Table Fluctuation in Mysore City Using ERDAS and ARCGIS", DOI: [10.15680/IJIRSET.2024.1305541](https://doi.org/10.15680/IJIRSET.2024.1305541)

## Membership in Professional Bodies

- Karnataka Geo Forum (KGF)

## Honours/Awards/ Achievements

- "Analysis of Rainfall and Groundwater Table Fluctuation in Mysore City Using ERDAS and ARCGIS" – Project selected for KSCST and also for poster presentation

## FDPs/Conferences/Workshops/STTP/MOOC Certification

- New Horizons In Remote Sensing-Basic And Beyond – 5 Days
- Rural Water Resource Management – 12 Weeks
- Earth Science For Civil Engineering – 8 Weeks
- Emerging Trends And Its Applications In Civil Engineering – 6 Days
- Innovative Approaches To Disaster Management And Resilient Infrastructure at ATME College Of Engineering – 6 Days
- Innovation Ambassador Training (Foundation Level) conducted by MoE's Innovation Cell & AICTE – 5 Weeks
- Innovation Ambassador Training (Advance Level) conducted by MoE's Innovation Cell & AICTE – 5 Weeks
- AICTE – VTU Joint Training Programme for Teachers on "An Overview Of Teaching Techniques In Innovation & Design Thinking" – 1 Week
- Comprehensive Landslide Risk Management – 3 Days
- Recent Avenues In Civil Engineering – 5 Days

## Proposal/Funding/Project Financial Assistance

- 47th Series of Student Project Programme – Analysis of Rainfall and Groundwater Table Fluctuation in Mysore City Using ERDAS and ARCGIS
- Project proposal on Empowering Women Through Tailoring Technology – A Path to Entrepreneurship and Economic Empowerment

## Roles and Responsibilities: Institute Level

- NIL

## Roles and Responsibilities: Department Level

- Placement and Carrier Guidance Coordinator
- AIMS / MS Team Coordinator
- Student / Outreach (Competition Presentation)
- Workshop / TT / FDP Coordinator
- NAAC Criteria-6
- Geology Lab - Incharge`,
  },
  "akhila-c-g": {
    name: "Mrs. Akhila C G",
    url: "https://atme.edu.in/akhila-c-g/",
    md: `## Contact Details

- **Email ID:** Official: [akhilacg_cv@atme.edu.in](mailto:akhilacg_cv@atme.edu.in) | Personal: [cgakhila1@gmail.com](mailto:cgakhila1@gmail.com)
- **Vidwan ID:** 294494
- **Google Scholar ID:** muX3wtoAAAAJ
- **Scopus ID:** <https://www.scopus.com/authid/detail.uri?authorId=59313264500>
- **Orcid ID:** 0000-0002-7375-6509
- **LinkedIn ID:** <https://www.linkedin.com/in/akhila-c-g-9b770115b/>

## Academic Details

- **M.Tech** in Hydraulics from NIE Institute of Engineering, Mysuru, with 85.55%
- **B.E** in Civil Engineering at ATME College of Engineering, Mysuru, with 76.24%
- Pursuing PhD

## Professional Experience

- Teaching: 3.5 Years

## Areas of Interest

- Hydraulics, Fluid mechanics, Hydrology, Irrigation, Surface water engineering, Groundwater Engineering, Environmental engineering

## Publication Details

- Published a Scopus indexed paper on topic "Testing the Appropriateness of Lumped Hydrological Model in Groundwater Recharge Estimation for a Small Catchment in Karnataka, India" in the year 2025.
- Published a Scopus indexed paper on topic "ANN prediction of mechanical properties of GGBFs and alccofine based high strength self-compacting concrete" in the year 2024.
- Published a paper on topic "Estimation of Drought Period in Karnataka: Its Impacts and Mitigation Strategies" in the year 2024.

## Membership in Professional Bodies

- IAENG

## Honours/Awards/ Achievements

- Earned "Endowment Gold Medal" in Bachelor of Engineering (B.E.) for securing highest marks in the subject Concrete Technology from Visvesvaraya Technological University (VTU), Belagavi.
- Also earned "Gold Medal" for securing second rank in M.Tech, Hydraulics from The National Institute of Engineering (NIE), Mysuru.
- Felicitated by Builder's Association of India (BAI), Mysuru for securing highest marks in Bachelor of Engineering (Civil Engineering Department).

## FDPs/Conferences/Workshops/STTP/MOOC Certification

- Completed 4 weeks NPTEL course on Advance topics in science and technology of concrete with Elite certification from Feb 2025 to Mar 2025.
- Completed 8 weeks NPTEL course on Research methodology with certification from July 2024 to Sep 2024.
- Completed 12 weeks NPTEL course on Rural Water Resources Management with Elite certification from Jan 2022 to April 2023.
- Completed 12 weeks NPTEL course on Integrated Waste management for a smart city from July to October 2023.
- Presented Paper in International Conference on Emerging technologies in science and engineering (ICETSE-2023) held on 19th & 20th June, 2025.
- Presented Paper in International Conference on Interdisciplinary Approaches in Civil Engineering for Sustainable Development (IACESD-2023) held on 7 & 8 July, 2023.
- Attended FDP on Research methodology in the year 2024.
- Attended FDP on Rural Water Resources Management in the year 2023.
- Attended FDP on Integrated Waste management for a smart city in the year 2023.
- Attended face to face FDP on the theme "Inculcating Universal Human Values in Technical Education" from 2nd to 4th November 2023.

## Roles and Responsibilities: Institute Level

- NABL – DTM
- Alumni Coordinator

## Roles and Responsibilities: Department Level

- NSS Reports / AICTE Activity Points
- NPTEL / MOOC – Faculty & Students Coordinator
- NAAC Criteria-1
- FM Lab - Incharge`,
  },
  "likhit-m-l": {
    name: "Mr. Likhit M L",
    url: "https://atme.edu.in/likhit-m-l/",
    md: `## Contact Details

- **Email ID:** Official: [likhitml.cv@atme.edu.in](mailto:likhitml.cv@atme.edu.in) | Personal: [likhit.ml@gmail.com](mailto:likhit.ml@gmail.com)
- **Vidwan ID:** 466919
- **Google Scholar ID:** <https://scholar.google.com/citations?hl=en&user=HZan6CwAAAAJ>
- **Orcid ID:** <https://orcid.org/0000-0002-3452-9952/>
- **LinkedIn ID:** <https://www.linkedin.com/in/likhitml/>

## Academic Details

- **Qualification**
- **M. Tech** in Structural Engineering
- **B.E** in Civil Engineering

## Professional Experience

- Teaching: 11 Years
- Research: 5 Years
- Industry: 4 Years

## Areas of Interest

1. Ultra-high-performance concrete, Bacterial Concrete
2. Structural Analysis
3. Rheological Characteristics of Concrete

## Publication Details

- Likhit M L, Pavan Kumar, Redeppa (2025). Performance Evaluation of Mortar Incorporating Olivine Sand as a Partial Cement Replacement: Mechanical, Microstructural, and Durability Aspects. International Journal of Innovative Research In Technology (IJIRT), 12(1), 3868-3886.
- Likhit, M.L., Alex, J. (2023). A Potential Review on Self-healing Material – Bacterial Concrete Methods and Its Benefits. In: Marano, G.C., Rahul, A.V., Antony, J., Unni Kartha, G., Kavitha, P.E., Preethi, M. (eds) Proceedings of SECON 2022. Lecture Notes in Civil Engineering, vol 284. Springer, Cham. https://doi.org/10.1007/978-3-031-12011-4\_92.
- Likhit M. L., Kishan N., Pooja M., Sanath B. and Ujwal Pinto R., “Bacillus Concrete,” International Journal of Engineering Research in Mechanical and Civil Engineering (IJERMCE), vol. 3, no. 6, pp. 22–25, Jun. 2018, ISSN 2456-1290.
- Likhit M.L., Safdar Hussain, Mahammad Asgar Ali, Mahammad Thohir, and Mohammed Tayseer (2016) “Bacteria as a biological admixture in concrete”, International Journal of Research in Engineering and Technology \[IJRET\], Volume 5 (4), Page 373.
- Likhit, M.L., Ravindranath, and Kannan, N. (2014) “Self-healing material bacterial concrete”, International Journal of Research in Engineering and Technology \[IJRET\], Volume 3(15), Page 656.
- Likhit, M.L., Ravindranath, and Kannan, N. (2014) “Effect of bacteria on partial replacement of concrete with fly-ash & ggbs”, International Journal of Research in Engineering and Technology \[IJRET\], Volume 3(15), Page 660.
- Likhit, M.L., Ravindranath, and Kannan, N. (2014) “Effect of Bacteria on Strength of Concrete”, 3 rd World Conference on Applied Sciences, Engineering & Technology 27-29 September 2014, Kathmandu, Nepal WCSET2014041 © BASHA.

## Membership in Professional Bodies

- Life Member of ISTE

## FDPs/Conferences/Workshops/STTP/MOOC Certification

FDP:
- Futuristic research in disaster resilience, held at VVCE Mysuru in association with NIDM, India, between 11/06/2021 to 13/06/2021.
- The Tech Driven Construction Revolution, held at AEC earth HUB in association with Swifterz, on 12/09/2023.
- “Research Methodology and IPR” As Per VTU Syllabus, Bengaluru Region VTU PG Centre, Muddenahalli, Bengaluru, on 01/04/2024.
- “BIM – Building Information Modelling”, held at ATRIA INSTITUTE OF TECHNOLOGY, between 04/01/2024 to 04/05/2024.
- ATAL FDP on “Sustainable and Smart Road Infrastructure”, by RV College of Engineering from 16/12/2024 to 21/12/2024.
- Advanced BIM using Autodesk Revit, held at RNSIT, between 17/02/2025 to 21/02/2025.
- Advanced Topics in Science and Technology of Concrete, AICTE, from 15/02/2025 to 15/03/2025.
- BIM using Autodesk REVIT at Vemana Institute of Technology from 04/08/2025 to 09/08/2025.

Conferences**:
- National Conference on Emerging Trends in Environment and Energy Management (NCEEM 2013), on “Self- Healing Material Bacterial Concrete”.
- National Conference on Recent Innovations in Engineering and Technology — 2014 (NCRIET 2014), on “Effect of bacteria on partial replacement of concrete with fly-ash and ggbs”.
- International Conference on Structural Engineering and Construction Management (Secon – 22), on “A potential review on bacterial concrete methods and its benefits”.
- 1st international Conference on ICITEICS, in association with IEEE, held at Vemana institute of technology on 28th and 29th
- 2nd international Conference on ICITEICS, in association with IEEE, held at Vemana institute of technology on 30th and 31st

Workshop**:
- Concrete Mix Design, by Civil Engineering Department of KDK College of Engineering, Nagpur (India) in association with Indian Concrete Institute, Nagpur Centre on 06/04/2021.
- “Innovations and Intellectual properties”, by Vemana IT from 30/01/2022 to 02/01/2022.
- Two Day Workshop on “Quality in Teaching Learning and Assessment Process” by Dr. H S Guruprasad, Professor BMS College of Engineering, Bengaluru, from 21/03/2022 to 22/03/2022.
- 2 days National workshop on ‘ Design & incubation for innovating MSME, IISC Blore, from 02/07/2023 to 03/07/2023.
- Basic Life Support by Dr. Muniraju and Team, Emergency Team, Apollo Hospitals, Bannerghatta Road, Bengaluru, on 15/09/2023.
- Three Day Workshop on Outcome Based Education and Accreditation Process under AICTE Marg darshan Scheme by Team from Dr. AIT, Bengaluru, from 07/09/2023 to 09/09/2023.
- Hands on Technical Session on MATLAB, held at Vemana Institute of technology on 13/09/2024.

Completed Mooc courses on:
- Intellectual property rights
- Research Methodology
- Advanced Topics in Science and Technology of concrete

## Proposal/Funding/Project Financial Assistance

- 1\. KSCST sponsored project entitled “Use of microorganism to repair cracks in concrete”.

## Patent

- NIL

## Roles and Responsibilities: Institute Level

- Institute Website Coordinator

## Roles and Responsibilities: Department Level

- MOM Coordinator
- Project Coordinator
- NAAC Criteria-3
- Magazine and News letter
- Institutional File (IR)
- CADD Lab - Incharge`,
  },
  "arpitha-m-s": {
    name: "Arpitha M S",
    url: "",
    md: `## Contact Details

- **Email ID:** Official: [arpithams.cd@atme.edu.in](mailto:arpithams.cd@atme.edu.in) | Personal: [arpithabharadhwaj@gmail.com](mailto:arpithabharadhwaj@gmail.com)
- **Vidwan ID:** NIL
- **Google Scholar ID:** <https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=arpitha+m+s&btnG=>
- **Scopus ID:** 57222998769
- **Orcid ID:** <https://orcid.org/0000-0002-3535-2028>
- **Web of Science Researcher ID:** NIL
- **LinkedIn ID:** <https://www.linkedin.com/in/arpitha-m-s-10137b76/>

## Qualification

1. M. Tech in Computer Science and Engineering from PES College of Engineering, Mandya.
2. B.E in Computer Science & Engineering from ATME College of Engineering, Mysuru.

## Professional Experience

- Teaching: 4.5 Years
- Research: NIL
- Industry: 01

## Areas of Interest

1. Machine Learning
2. Deep Learning

## Publication Details

- Presented paper entitled "A Multi-Model Deep Learning Framework for the Prediction of Heart Valve Disorders" at ICAIES-2025
- "BERT based approach for suicide and Depression Identification" at ICACECS-2022
- "BERT Transformer based Fake News Detection in Twitter Social Media" at 3rd International Conference on ICDICI 2022
- "Traceability of Counterfeit Medicine Supply Chain through Blockchain" in 2022 IEEE World conference on applied intelligence and computing
- "CNN based framework for Classification of Mosquitoes based on its Wing beats" in ICICV, 2021
- "Voice Pathology Classification System using Machine Learning" in International Journal of Computer science and Mobile Computing, Volume-9, Issue-5, May 2020
- "A Frame Work for Classification of Vocal Disorders without clinical Intervention" in International Journal of Computer Sciences and Engineering, Volume-8, Issue-1, Jan 2020

## Membership in Professional Bodies

- NIL

## Honours/Awards/Achievements

- Successfully co-ordinated 'Smart India Hackathon' 2025.
- Coordinated "AI and Data Science Masterclass: Tools, Trends and Transformation" a three day Bi-lingual workshop sponsored under VAANI Scheme.
- Participated in FDP on Quantum Computing in Aug 2025

## FDPs/Conferences/Workshops/STTP/MOOC Certification

- Attended Three days FDP on "Cryptography Network Security and Cyber law" at VVCE, Mysore.
- Attended 12weeks Internship on "Advance Telecom Technology" at BSNL, Mysore.
- Attended "Enhancing Academic Excellence – Faculty Dialogue on Best Practices" at NIE-TLC, Mysore.

## Proposal/Funding/Project Financial Assistance

- NIL

## Patent

- NIL

## Roles and Responsibilities: Institute Level

- NIL

## Roles and Responsibilities: Department Level

- NIL`,
  },
  "mrs-pushpalatha-h-p": {
    name: "Pushpalatha H P",
    url: "",
    md: `## Professional Experience

- Teaching: 11
- Research: 03
- Industry: 0

## Contact Details

- **Email ID:** Official: [pushpalathahp.ec@atme.edu.in](mailto:pushpalathahp.ec@atme.edu.in) | Personal: [pushpalatha944@gmail.com](mailto:pushpalatha944@gmail.com)
- **Mobile Number:** 9739700425
- **Vidwan ID:** Nil
- **Google Scholar ID:** <https://scholar.google.com/citations?hl=en&user=ODY5pJ8AAAAJ>
- **Scopus ID:** Nil
- **Orcid ID:** <https://orcid.org/my-orcid?orcid=0009-0008-2526-2708>
- **Web of Science Researcher ID:** Nil
- **LinkedIn ID:** <https://www.linkedin.com/in/pushpalatha-h-p-2aa39a46/>

## Academic Details

- **Qualification**
- **M.Tech** in VLSI Design and Embedded Systems.
- **B.E** in Electronics and Communication Engineering

## Areas of Interest

1. Image Processing
2. VLSI Design
3. Embedded Systems

## Publication Details

**International**

1. Published paper on "Intellisense Toll Management System: Automatic Vehicle number plate recognition for identity based transactions" in International Journal, IJAREEIE 2024.
2. Published paper on "Floor cleaning Robot with separating wet and dry waste using Microcontroller" in International Journal, IJAREEIE 2024.
3. Published paper on "Tree Climbing Robot with pesticide spraying and video streaming in real time using Microcontroller" in International Journal, IJAREEIE 2024.
4. Published paper on "Comprehensive Survey on Image Super Resolution using Deep learning models" in International journal for Multidisciplinary research, Volume 7, Issue 6, Nov-Dec 2025.

## Membership in Professional Bodies

- Nil

## Honours/Awards/Achievements

**Notable Achievements**

1. Class Topper in first year M.Tech

## FDPs/Conferences/Workshops/STTP/MOOC Certification

**Faculty Development Programs (FDPs)**

1. One week FDP on "Advances in Multicore Computer Architecture Design" and "IoT in Medical Imaging", at NIE, Mysuru.
2. One week FDP on "Recent Advances in Wireless Communication System" at SJCE, Mysuru.
3. One week FDP on "VLSI Design using Cadence" and "Labview" at ATMECE, Mysuru
4. One week FDP on "CMOS, Mixed Signal and Radio Frequency VLSI Design" at MIT, Mysuru
5. Participated in one week online ATAL FDP on "Recent Advances and Challenges in Nanoscale Devices: Design, Materials, and Applications Perspective" from 2021-06-01 to 2021-06-05 at National Institute of Technology Hamirpur.
6. Participated in National Seminar on "Recent trends in PCB Technology" at NIEIT
7. Participated in one week online ATAL FDP on "Telemedicine" from 2021-2-15 to 2021-2-19 at Model Engineering College.
8. Participated in one week ATAL FDP on "Hands-on approach for the Design and Implementation of Lab-on-Bread Board- A Blended learning" from 21/07/2021 to 25/07/2021 at The National Institute of Engineering Mysore.
9. Participated in one week online ATAL FDP on "Innovative VLSI Paradigms: MEMS, 3D ICs, and AI- Driven Design" at Vidya Vikas Institute of Engineering & Technology from 06/01/2025 to 11/01/2025.
10. Participated in one week online ATAL FDP "Cyber Security" from 2021-2-8 to 2021-2-12 at Sanjivani College of Engineering, Kopargaon.
11. Attended three days Technical Training Programme on "DIGITAL IMAGE PROCESSING" at NIE Mysuru from 18th to 20th February, 2022
12. Participated in FDP on LP201 practicum for Innovative Engineering held at NIE from 6/8/2024 to 8/8/2024.
13. Participated in one week ATAL FDP on Artificial Intelligence in Satellite Image Processing & Applications at CMR Institute of Technology from 20/01/2025 to 25/01/2025.
14. Coordinated and participated in one week FDP on "ARM based Microcontrollers and hardware interfacing" from Feb 10th to 14th 2025 at NIE, Mysuru
15. Participated in one week ATAL FDP on Empowering Educators: A Deep Dive into Artificial Intelligence for Teaching, Research & Innovation at Vidya Vikas Institute of Engineering & Technology from 08/12/2025 to 13/12/2025.
16. Participated in one week ATAL FDP on "Exploring the Synergy between eAcoustics and Machine Learning for Tomorrow's Technologies at DR. AMBEDKAR INSTITUTE OF TECHNOLOGY from 15/12/2025 to 20/12/2025.

**Conference Papers**

1. Presented Conference paper "An Efficient Implementation of Double Precision Floating Point Multiplier", in Proceedings of the 6th National Conference on Recent trends in Electronics and Communication Engineering (NCRTEC-2014), Organized by SJBIT, Bangalore, May 2014.
2. Presented conference paper on "Lidar-Radar based terrain mapping", in National conference on "Electronics, Signals and Communication organized by GSSS in association with IETE Mysuru and International Journal of computer applications on 2017.
3. Presented conference paper on "Internet of things based weather monitoring system", in 3rd National conference on Electronics, Signals and Communication organized by GSSS in association with IEEE Bangalore section and IJERT on 2018.

**Workshops Attended**

1. Participated in workshop on "Digital system design and Modelling using Verilog" at VVCE

**MOOC Certifications**

1. Completed NPTEL course on "Digital Image Processing", in July- October 2019.
2. Completed Coursera course on "Python for Datascience, AI & Development" on Jan 17th 2024.
3. Completed Coursera course on "Python Basics" on Jan 28th 2025.
4. Completed Coursera course on "Deep Learning with PyTorch : Generative Adversarial Network" on 19/1/2024.
5. Completed Coursera course on "Fundamentals of Digital Image and Video Processing" on Jan 2/1/26
6. Completed Coursera course on "Programming for Everybody (Getting Started with Python)" on 16/5/2025

## Proposal/Funding/Project Financial Assistance

- Project Proposal approved for sponsorship of Rs. 5,500/- under "student project programme-47th series" (KSCST) for the project tittle on "Tree Climbing Robot with pesticide spraying and video streaming in real time using Microcontroller" in 2023-24

## Patent

- Nil

## Roles and Responsibilities: Institute Level

- Nil

## Roles and Responsibilities: Department Level

1. Website Co-ordinator
2. Library Co-ordinator`,
  },
  "vineetha-s": {
    name: "Ms. Vineetha S",
    url: "",
    md: `## Professional Experience

- Teaching: 7
- Research: -
- Industry: -

## Contact Details

- **Email ID:** Official: [vineethas.ec@atme.edu.in](mailto:vineethas.ec@atme.edu.in)
- **Vidwan ID:** Nil
- **Google Scholar ID:** <https://scholar.google.com/citations?user=tF-H6BYAAAAJ&hl=en>
- **Scopus ID:** <https://www.scopus.com/authid/detail.uri?authorId=57214669525>
- **Orcid ID:** <https://orcid.org/0000-0002-7694-1734>
- **Web of Science Researcher ID:** Nil
- **LinkedIn ID:** Nil

## Academic Details

- **Qualification**
- PG - M.Tech
- UG – B.E

## Areas of Interest

- Nil

## Publication Details

- Nil

## Membership in Professional Bodies

- Nil

## Honours/Awards/Achievements

- Nil

## FDPs/Conferences/Workshops/STTP/MOOC Certification

- Nil

## Proposal/Funding/Project Financial Assistance

- Nil

## Patent

- Nil

## Roles and Responsibilities: Institute Level

- Nil

## Roles and Responsibilities: Department Level

- Nil`,
  },
  "geetha-m-a": {
    name: "Geetha M A",
    url: "",
    md: `## Professional Experience

- Teaching: 12 Years
- Research: 0
- Industry: 0

## Contact Details

- **Email ID:** Official: [geethama.ee@atme.edu.in](mailto:geethama.ee@atme.edu.in) | Personal: [Geethamar023@gmail.com](mailto:Geethamar023@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/729715>
- **Scopus ID:** Nil
- **Google Scholar ID:** Nil
- **Orcid ID:** Nil
- **LinkedIn ID:** <https://www.linkedin.com/in/geetha-m-a-29580>

## Academic Details

- **Qualification**
- **B.E** in Electrical & Electronics Engineering
- **M.Tech** in Computer Application In Industrial Drives

## Areas of Interest

1. Power Electronics Applications in Power Systems
2. Computer & AI Applications to Power Systems, control of electric drives
3. Smart Grid
4. Electric Vehicles
5. Power Systems

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. Attended a Short Term Course on "Hydraulics, Pneumatic Systems in Industrial Automation" organized by Bosch Center of Excellence, MCE, Hassan during 27th -29th January 2014.
2. Participated in 12 days AICTE sponsored FDP on "Emerging Trends in Power System Research" organized by Malnad College of Engineering, Hassan, during 23rd December 2013 – 3rd January 2014.
3. Attended three-days National Workshop on "Power Electronics in Distributed Generation", Organized by department of Electrical Engineering, NITK, Surathkal during 7th - 9th February 2014.
4. Attended One day Workshop on "Dissertation Report and Thesis Writing Skills", Organized by department of Electrical Engineering, MCE, Hassan on 18th December 2014.
5. Participated in one day National Workshop on "Patents and Innovations" organized by Malnad College of Engineering, Hassan, held on 31st August 2013.
6. Participated in two days TEQIP-II sponsored workshop on "Empowering Teachers" organized by Malnad College of Engineering and DBali iT Solutions, Hassan, during 24th and 25th October 2013.

## Membership in Professional Bodies

1. IAENG- International Association of Engineers
2. IAEEEE_- International Association of Advanced Electrical and Energetic Engineers

## Roles and Responsibilities: Institute Level

- Nil

## Roles and Responsibilities: Department Level

1. NBA Criteria 8 Co-ordinator
2. Domain Specific Training (DST) Co-ordinator for 3rd year student
3. Class Teacher for 2nd year`,
  },
  "madhurya-b-eshwar": {
    name: "Mrs. Madhurya B Eshwar",
    url: "https://old.atme.edu.in/madhurya-b-eshwar/",
    md: `## Professional Experience

- Teaching: 6.2 years
- Research: nil
- Industry: nil

## Contact Details

- **Email ID:** Official: [madhuryabeshwar.ec@atme.edu.in](mailto:madhuryabeshwar.ec@atme.edu.in)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/612517>
- **Google Scholar ID:** <https://scholar.google.com/citations?view_op=list_works&hl=id&user=F5pbyu4AAAAJ>
- **Scopus ID:** Nil
- **Orcid ID:** <https://orcid.org/0009-0006-9416-7507>
- **Web of Science Researcher ID:** Nil
- **LinkedIn ID:** Nil

## Academic Details

- **Qualification**
- PhD -
- PG - M. Tech in Digital Electronics and Communication Systems
- UG - B.E in Electronics and Communication

## Areas of Interest

1. Networking
2. Communication Systems

## Publication Details

**National**

1. Madhurya B Eshwar, S Manjunath , Mohan C , Ravi Shankar B M and Sukesh Kumar U, "Optimal Allocation of EV Charging Station using Newton-Raphson algorithm and Performance Analysis Under Plug-in Electrical Vehicle Penetration"

**International**

1. Madhurya B Eshwar, PC Srikanth "A New Trustworthy and Co-operative Nodes Based MIMO Route Discovery Algorithm for WSN", International Journal of Emerging Technology and Advanced Engineering, ISSN 2250-2459, ISO 9001:2008 Certified Journal, Volume 3, Issue 5, May 2013
2. Madhurya B Eshwar, PC Srikanth, "A New Cooperative Nodes Based Route Discovery and Game Theory Based Routing Algorithm for WSN", International Conference on Electronics and Communication Engineering, 24th April 2013

## Membership in Professional Bodies

- Nil

## Honours/Awards/Achievements

**Notable Achievements**

1. Secured VTU 2nd rank in M.Tech

## FDPs/Conferences/Workshops/STTP/MOOC Certification

**Faculty Development Programs (FDPs)**

1. Six day FDP-"Innovative VLSI Paradigms: MEMS, 3D ICs, and AI-Driven Design" organized by Vidya Vikas Institute of Engineering & Technology from 06/01/2025 to 11/01/2025
2. Three day National level FDP-"Indian Knowledge System" organized by ATMECE, Mysuru from 05/03/2025 to 07/03/25
3. Five day FDP-"Cyber Security Awareness and Emerging Technologies for Secure Social Media and Banking Applications" organized by ATMECE, Mysuru from 10/03/25 to 14/03/25
4. Three day Workshop-"Patent Drafting, Filing and Interpretation" organized by ATMECE, Mysuru from 12/06/25 to 14/06/25
5. One day FDP on "AI and its applications-2025 scheme" organized by VVCE, Mysuru in association with VTU Belagavi on 30/08/2025
6. One day International Faculty Development Program on "Growing Globally Competitive Currency in Higher Education" Delivered by Futred Innovation Studios, Australia on 08-10-2025 at ATME College of Engineering, Mysuru.
7. One day ToT workshop on "Innovation and Design Thinking" organized by VVCE, Mysuru in association with VTU in association with VTU VRIF on 10/10/2025
8. One week FDP on "Empowering research excellence" organized by Department of Management Studies VTU Centre for PGS, Mysuru from 24/11/2025 to 28/11/2025
9. One day International Faculty Development Program on "Growing Globally Competitive Currency in Higher Education" Delivered by Futred Innovation Studios, Australia on 11-02-2026 at ATME College of Engineering, Mysuru

**MOOC Certifications**

1. NPTEL Swayam 12 weeks course "Computer Networks" as topper

## Proposal/Funding/Project Financial Assistance

- Nil

## Patent

- Nil

## Roles and Responsibilities: Institute Level

- Nil

## Roles and Responsibilities: Department Level

1. Member of the College Magazine Dynamics Committee
2. Member of ECE Department Newsletter
3. Team member of NAAC Criteria 6`,
  },
  "swetha-k-t": {
    name: "Mrs. Swetha K T",
    url: "https://old.atme.edu.in/swetha-k-t/",
    md: `## Professional Experience

- Teaching: 09
- Research: NIL
- Industry: NIL

## Contact Details

- **Email ID:** Official: [swethakt.ec@atme.edu.in](mailto:swethakt.ec@atme.edu.in)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/543031>
- **Google Scholar ID:** <https://scholar.google.com/citations?user=znzcZucAAAAJ=en&user=mQDgvc8AAAAJ>
- **Scopus ID:** <https://www.scopus.com/authid/detail.uri?authorId=59700856100>
- **Orcid ID:** <https://orcid.org/0009-0003-6119-9439>
- **Web of Science Researcher ID:** Nil
- **LinkedIn ID:** <https://www.linkedin.com/in/swetha-k-t-153b563b1/>

## Academic Details

- **Qualification**
- **MTech.** in Digital Electronics & Communication Systems
- MBA (HRM Specialization)
- **PG Diploma** in HRM
- **B.E** in Electronics & Communication Engineering

## Areas of Interest

1. Signals & Systems
2. Digital Electronics
3. Electromagnetic Waves
4. Network Analysis
5. Antenna Theory

## Publication Details

**National**

1. "Automatic Driving License Test using LabVIEW" Paper presented in National Conference on "Smart Systems and Emerging Trends in Electronics and Electrical Engineering" on August 21st, 2025, at GM University Devanagere.
2. Paper titled: "Calmify AI: AI Based Mental Health Chatbot" presented in Two- Day National Conference on "Artificial Intelligence and Machine Learning for Better Tomorrow" (NCAIMLBT-2026) held on 8th and 9th January 2026, organized by Brindavan College of Engineering, Bengaluru.

**International**

1. "Music Instruments Classification using Signal Processing and Machine Learning", IEEE International Conference on Networks, Multimedia and Information Technology (NMITCON-2025), published in IEEE Xplore (Scopus Indexed)
2. "Optimized Audio Classification with Convolution Neural Network Ensembles", International Conference Recent Advances in Science & Engineering Technology (ICRASET), 2024, published in IEEE Xplore (Scopus Indexed).
3. "Unimodal Biometric Authentication System using Social Network Analysis", International Conference on "Next-Gen Semiconductor Device and Smart Computing Applications", Cambridge Institute of Technology, Bengaluru on 20th & 21st December 2024
4. Paper titled "Investigation of the effect of Training Data on the Performance of Support Vector Machine in Classification of Brain MR Images" has been published in volume 1 Issue 4 June 2014 in International Journal of Emerging Trends in Science and Technology.
5. Paper titled "Performance Analysis of Different ANN Structures in Classifying Brain MRI Images for various Training Data" has been published in volume 2 Issue 5 May 2014 in International Journal of Scientific Research and Education.
6. Presented a paper titled "Implementation of Coded OFDM using AWGN and Rayleigh Noise", Mysuru in International Conference on "Technology Management for Green Environment" (ICTMGE -2013) held during 19th to 21st September 2013 at VTU Regional Center, Mysuru.
7. Presented a paper titled "Career Planning and Development at Bajaj Allianz Life Insurance Company Limited", Mysuru in International Conference on "Technology Management for Green Environment" (ICTMGE -2013) held during 19th to 21st September 2013 at VTU Regional Center, Mysuru.

## Membership in Professional Bodies

1. Member of Indian Society of Technical Education (MISTE)
2. Member of International Association of Engineers (IAENG)

## Honours/Awards/Achievements

- Nil

## FDPs/Conferences/Workshops/STTP/MOOC Certification

**Faculty Development Programs (FDPs)**

1. Attended one-week offline FDP on "AI & Quantum Driven Image Processing from Theory to Practice" organized by Department of ECE, Dayananda Sagar College of Engineering, Bengaluru from 09th Feb 2026 to 14th Feb 2026.
2. Attended one-week online ATAL FDP on "Advanced Perspectives in IOT" organized by Government College of Engineering, Station Road Aurangabad from 09th Feb 2026 to 14th Feb 2026.
3. Attended one-week online ATAL FDP on "Digital Application Fundamentals" organized by NASSCOM from 02nd Feb 2026 to 07th Feb 2026.
4. Attended one-week online ATAL FDP on "Artificial Intelligence in Healthcare: Intelligent Systems and Applications for Modern Technical Needs" organized by Sreenidhi Institute of Science & Technology from 05th Jan 2026 to 10th Jan 2026.
5. Attended 5 Day FDP on "Real-Time Digital Signal Processing & Generative AI in Multimodal Medical Imaging" organized by ATME College of Engineering, Mysuru from 6th Jan 2026 to 10th Jan 2026.
6. Five Day Online FDP on "Inculcating Universal Human Values in Technical Education" from 9th to 14th June 2025 organized by AICTE.
7. Five Day FDP on "Cyber Security Awareness and Emerging Technologies for Secure Social Media and Banking Applications" from 10th to 14th March 2025 organized by Department of E&CE, ATME in association with ATME IEEE Chapter
8. Three Day FDP on "Unlocking Generative AI" from 10th to 12th February 2025 organized by Department of CSE – Data Science, ATME in association with IEI, ATME IEEE Chapter and IQAC.
9. AICTE Training and Learning (ATAL) Academy Faculty Development Program on "Next-Gen System-on-Chip Design for Advanced Semiconductor Solutions" at R.V. College of Engineering, Bengaluru from 12th to 24th August 2024. AICTE Training and Learning (ATAL) Academy Faculty Development Program on Next-Gen System-on-Chip Design for Advanced Semiconductor Solutions at R.V. College of Engineering, Bengaluru from 12th to 24th August 2024.
10. NPTEL-AICTE FDP Certification for the successful completion of a 8 Week course "An Introduction to Coding Theory"

**Workshops Attended**

1. Attended One-Week Workshop on "Wireless Power Transfer: Concepts and Applications" organized by Ramaiah Institute of Technology, Bengaluru from 30th June 2025 to 4th July 2025.

**MOOC Certifications**

1. NPTEL Swayam Plus Online Certification on "AI for Educators" from IITM Pravarthak Technologies Foundation during Nov 2025 - Feb 2026.
2. NPTEL Online Certification for a 12-week course "Signal Processing Techniques and its Applications" from Indian Institute of Technology, Kharagpur during January – April 2026.
3. NPTEL Online Certification for a 8-week course "Soft Skill Development" from Indian Institute of Technology, Kharagpur – March 2026.
4. NPTEL Online Certification for a 12-week course "NBA Accreditation and Teaching & Learning in Engineering" from Indian Institute of Science, Bengaluru during January – April 2025.
5. NPTEL Online Certification for a 12-week course "A Basic Course on Electric and Magnetic Circuits" from IIT, Kharagpur during July-October 2024.
6. NPTEL Online Certification for an 8-week course "An Introduction to Coding Theory" from IIT, Kanpur during July-September 2024.

## Proposal/Funding/Project Financial Assistance

- Nil

## Patent

- Nil

## Roles and Responsibilities: Institute Level

- Admission Committee

## Roles and Responsibilities: Department Level

1. NBA Criteria 2 Coordinator
2. Academic Coordinator
3. EMS Coordinator`,
  },
  "sneha-m": {
    name: "Sneha M",
    url: "https://atme.edu.in/sneha-m/",
    md: `## Professional Experience

- Teaching: 2.2 Years
- Research: –
- Industry: –

## Contact Details

- **Joining Date:** 06-07-2026
- **Email ID:** Official: [sneham.mba@atme.edu.in](mailto:sneham.mba@atme.edu.in) | Personal: [sneham3105@gmail.com](mailto:sneham3105@gmail.com)
- **Vidwan ID:** 724885
- **Google Scholar ID:** <https://scholar.google.com/citations?user=2h3iKHkAAAAJ&hl=en>
- **Scopus ID:** –
- **Orcid ID:** 0009-0001-7608-7910
- **Web of Science Researcher ID:** –
- **LinkedIn ID:** <https://www.linkedin.com/in/sneha-m-a40996294>

## Academic Details

- **Qualification**
- **MBA** in Finance, KSET 2025

## Areas of Interest

- Teaching and Training
- Corporate Training
- Student Mentoring and Career Guidance
- Event Planning and Management
- Competitive Examination Coaching
- Communication and Professional Development

## Publication Details

- –

## Membership in Professional Bodies

- –

## Honours/Awards/Achievements

- Qualified KSET (2025)
- Corporate Training Experience – L and T Industries
- Professional Engagement – TIE events, Mysuru
- Communication Skills – Certified by TCS Ion
- Accounting Fundamentals – Certified by TCS Ion
- Fundamentals of Computerised Accounting – Sakhi Foundation

## FDPs/Conferences/Workshops/STTP/MOOC Certification

- Digital Marketing – Infosys, Mysuru

## Proposal/Funding/Project Financial Assistance

- –

## Patent

- National – –
- International – –

## Roles and Responsibilities: Institute Level

- –

## Roles and Responsibilities: Department Level

- –`,
  },
  "chandra-shekar-p": {
    name: "Mr. Chandra Shekar P",
    url: "https://old.atme.edu.in/chandra-shekar-p/",
    md: `## Professional Experience

- Teaching: 13 Years
- Research: 03 Years
- Industry: Nil

## Contact Details

- **Email ID:** Official: [chandrashekarp_ec@atme.edu.in](mailto:chandrashekarp_ec@atme.edu.in) | Personal: [cspatmece@gmail.com](mailto:cspatmece@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/267805>
- **Google Scholar ID:** <https://scholar.google.com/citations?user=LqA_se4AAAAJ&hl=en&authuser=3>
- **Scopus ID:** <https://www.scopus.com/authid/detail.uri?authorId=58676596700>
- **Orcid ID:** <https://orcid.org/0000-0002-4119-541X>
- **Web of Science Researcher ID:** <https://www.webofscience.com/wos/author/record/JLS-6456-2023>
- **LinkedIn ID:** <https://in.linkedin.com/in/chandra-shekar-p-2528a644>

## Academic Details

- **Ph.D.** in VLSI (Pursuing)
- **M. Tech** in VLSI Design and Embedded System
- **B.E** in Electronics and Communication

## Areas of Interest

1. Low Power VLSI
2. Analog and Mixed Signal
3. VLSI Physical Design
4. Networking

## Publication Details

1. Published a paper on "Deep residual network for three-dimensional (3-D) objects classification using phase-only digital holographic information" in the journal of intelligent Systems 35(1) 2026 (Q2)
2. Presented a paper on "A Deep Learning Paradigm for Automated Disease Detection in Smart Healthcare Systems" in the Proceedings of the 2026 6th International Conference on Image Processing and Capsule Networks ICIPCN 2026
3. Presented a paper on "Deep Learning Approaches for Skin Lesion Classification" in 3rd IEEE International Conference on Networks Multimedia and Information Technology NMITCON 2025
4. Presented a paper on "Enhancing Glaucoma Detection through Deep Learning Algorithms" in the International Conference on Intelligent Algorithms for Computational Intelligence Systems, IACIS 2024, 2024
5. Presented a paper on "Design and Synthesizing of Floating Point Adder and Multiplier using Cadence RTL Compiler" in the 14th International Conference on Advances in Computing, Control, and Telecommunication Technologies, ACT 2023, 2023, 2023-June, pp. 1110–1115.
6. Presented a paper on "Design of a Low Pass Filter for Wireless Applications" in the 14th International Conference on Advances in Computing, Control, and Telecommunication Technologies, ACT 2023, 2023, 2023-June, pp. 1110–1115.
7. Chandra Shekar P published a paper on "Machine Learning Algorithms for Identifying Fake Currencies" in SN Computer Science (SCOPUS) volume 4, Article number: 368 (2023) on 29/April/2023.
8. Chandra Shear P participated in the 3rd International Conference on Adaptive Computational Intelligence ICACI-2022 organized by GSSS Institute of Engineering & Technology for Women, Mysuru held during 16th & 17th December 2022.
9. Chandra Shekar P "Design and Synthesizing of Floating Point Adder and Multiplier using Cadence RTL Compiler" Published a paper in ICRTST-2022 issue 1 vol. 1 July 2022
10. Chandra Shekar P and "Design Of A Low Pass Filter For Wireless Applications" Published a paper in ICRTST-2022 at ATME College of Engineering, Mysore
11. Chandra Shekar P and Abhilash G "Design of 64 X 64 single port SRAM Array Using 45nm Technology" Published a paper in ICRTST-2020 ISSN No. 978-93-5396-830-4 issue 1 vol. 1 page 64
12. Chandra Shekar P and Mrs. Shalini V S "Design of sequential circuits using adiabatic logic" published a paper in International Journal of Research Electronics – a peer reviewed bearing a ISSN No: 2349-252X in volume – 5 issue – 2 2018.
13. Chandra Shekar P and Mr. Karthik "Design, Implementation And Comparison of different QAM techniques using Cadence 180nm Technology" Presented a paper in ICSIPCA-2017 on 6th & 7th July 2017 at JSSSATE, Bengaluru.
14. Chandra Shekar P and Ms. Priyanka "Phase Lock Loop using standard cell in 45nm" Presented a paper in ICSIPCA-2017 on 6th & 7th July 2017 at JSSSATE, Bengaluru.
15. Chandra Shekar P, Mr. Karthik, Ms. Maram Jhanavi Reddy, Ms. Pallavi and Ms. Rubiya Sultan "Design and Implementation of QAM using LT Spice" in International Journal of Emerging Research in Management & Technology (IJERMT) ISSSN :2278-9359 DOI:[10.23956/ijermt](https://doi.org/10.23956/ijermt) Vol.:06, issue:05, May 2017
16. Chandra Shekar P, Ms. Priyanaka, Ms. Shusumitha and Mr. Proxith "Phase Locked Loop Using 45nm CMOS Technology" in International Journal of Emerging Research in Management & Technology (IJERMT) ISSSN :2278-9359 DOI:[10.23956/ijermt](https://doi.org/10.23956/ijermt) Vol.:06, issue:05, May 2017
17. Chandra Shekar P and Mrs. Chaya P "Securing the Wireless Sensor Network Communication" International Journal of advanced Research in Computer Engineering & Technology (IJARCET) Volume 5 Issue 3, March 2016.
18. Chandra Shekar P and Mrs. Chaya P "Mobile agent computing" presented at International conference on Standards for Engineering and Management, conducted on 15th May 2016 held at
19. Chandra Shekar P, "Design of Systolic Based Optimization Tool for FIR Filters Using Binary Tour Method." Programmable Device Circuits and Systems 5.7 (2013): 321-326.
20. Chandra Shekar P and Mrs. Bhagyashree S R, "Automated medication dispensing system." 2014 Eleventh International Conference on Wireless and Optical Communications Networks (WOCN)., IEEE Digital explore IEEE ISSN: 2151-7703 K L University, Vijayawada, AP 11th -13th September,2014 with IEEE, technical association with IEEE Hyderabad section and Computer Society of India (CSI)
21. Chandra Shekar P and Dr. Ravikumar M S, "DESIGN OF SYSTOLIC BASED OPTIMIZATION TOOL FOR FIR FILTERS USING BINARY TOUR METHOD" International Journal of VLSI and Embedded Systems-IJVES ISSN: 2249 – 6556 Vol 04, Issue 03; May -June 2013
22. Chandra Shekar P and Mrs. Divya K, "FPGA Based Implementation of Flat Panel Display Controller with DVI Interface." International Journal of Engineering Research and Technology. Vol. 2. No. 4 (April-2013). ESRSA Publications, 2013.
23. Presented a research paper entitled "Design of Systolic based optimization tool for FIR Filters Using Binary Tour Method" at the National Conferences on Green technology Concepts for Bridging the Digital Divide using ICT- Green ICT 2013 during 5th – 6th July 2013.

## Membership in Professional Bodies

1. International Society for Research and Development (ISRD)
2. International Association of Engineers (IAENG)
3. Member of Indian Society for Technical Education (MISTE)
4. Institute of Electrical and Electronics Engineers (IEEE)

## Honours/Awards/Achievements

1. Received a "Best Teacher Award – 2022-23" in occasion of Engineers Day and Teacher Day @ ATMECE
2. Undergone an industrial training for a period of 15 days in field of medical devices at Renalyx Health System Pvt. Ltd, Basavangudi, Banglore.
3. Delivered a talk on the topic "5G Technology" and "Current Trends of Technology" at On-AIR AKASHVANI, Mysore.
4. Undergone Anudaksh training cum internship program in MACHINE LEARNING and EDGE AI from 22nd July 2022 to 02nd September 2022 (6 Weeks) at IIT Guwahati, RFRF & the IoT Academy.
5. Awarded for exceptional contribution as a Pre-Screening Evaluator in Smart India Hackathon – 2022.
6. Awarded for exceptional contribution as a Primary Evaluator in Toycathon 2021.
7. Recognized as an Adjunct Reviewer for the Journal of Institute of Scholars (InSc) – International Journal of Electronics, Electrical and Communication Engineering.
8. Qualified "University Grants Commission – National Eligibility Test"
9. Represented as a Team Manager for 17th VTU Inter-Collegiate Youth Festival "Yuvakalanjali-2017".
10. Recognized as a Reviewer for Research script / IJMTES Groups of Journals (IJRE | IJREE | IJRCS | IJRME | IJMH | IJMTES)
11. Recognized as the Reviewer for Institute for Exploring Advances in Engineering (IEAE) International Journals
12. "Google Analytics for Beginners" from Google Analytics Academy is completed.

## FDPs/Conferences/Workshops/STTP/MOOC Certification

1. Five days FDP on 'Hardware Accelerators for next generation systems: PYNQ Z2 and TCL Based design Methodologies" conducted between 29-06-2026 and 03-07-2026, organized by the department of ECE (VLSI Design and technology), MMIT (Deemed to be University), Bengaluru.
2. Successfully completed SWAYAM (NPTEL) on "Op-Amp Practical Applications: Design, Simulation and Implementation" in Feb – Apr 2019 with ELITE Badge.
3. Successfully completed SWAYAM (NPTEL) on "CMOS Digital VLSI Design" in July – Aug 2019.
4. Successfully completed SWAYAM (AICTE) on "ARPIT – Pedagogical Innovations And Research Methodology (Interdisciplinary)" in Dec – Feb 2020.
5. Successfully completed NPTEL on "Analog Circuits and Systems through SPICE Simulation" in July – Aug 2017.
6. Successfully completed AICTE Training And Learning (ATAL) Academy on "Recent Trends In Data Science", successfully completed "Arm India VLSI to System Design: Silicon to End Application Approach" from the All India Council for Technical Education (AICTE), Arm Education and STMicroelectronics.
7. Successfully completed Computational Neuroscience a MOOC from the University of Washington and offered through Coursera.
8. Successfully completed Machine Learning for All a MOOC from the University of Washington and offered through Coursera.
9. Participated & completed successfully AICTE Training and Learning (ATAL) Academy Online Elementary FDP on "Artificial Intelligence & Machine Learning (AI&ML- 2021)" from 2021-7-5 to 2021-7-9 at College of Engineering & Technology Bhubaneshwar.
10. Participated & completed successfully AICTE Training and Learning (ATAL) Academy Online Elementary FDP on "Quantum Computing Algorithms and Machine Learning" from 2021-08-02 to 2021-08-06 at R V College of Engineering.
11. Participated & completed successfully AICTE Training and Learning (ATAL) Academy Online Elementary FDP on "Robot Operating System (ROS)" from 10/01/2022 to 14/01/2022 at GSSS Institute Of Engineering And Technology For Women.
12. Participated & completed successfully AICTE Training and Learning (ATAL) Academy Online Elementary FDP on "Artificial intelligence in Electronic Design Automation" from 09/08/2021 to 13/08/2021 at GITAM Deemed to be University.
13. 5-day FDP-SI UHV Online - AICTE Incorporating Universal Human Values in Education (An AICTE Initiative) 20-02-2023 to 24-02-2023
14. ATAL Sponsored Two Weeks FDP On "Analog and Digital Design Flow for VLSI Chip Application" in association with Entuple Technologies, Bengaluru at GMIT Davengere
15. Participated in online course on "Advances in SAR-Polarimetry & Interferometry" conducted by Indian Institute of Remote Sensing (IIRS), ISRO, Dehradun during 14-12-2020 to 18-12-2020
16. 3 days FDP on 'Application of Mathematics in Engineering disciplines' from 2nd June 2021 to 4th June 2021 organized by VVCE, Mysuru
17. A six days AICTE Sponsored Online Short-Term Training Program (STTP) on "Pedagogy for effective use of ICT in Engineering Education" from 7th to 12th December 2020 by Dr. Ambedkar Institute of Technology, Bangalore
18. AICTE Training and learning (ATAL) Academy online FDP on "Data Sciences" from 28-9-2020 to 2-10-2020 at IFET College of Engineering
19. A webinar on "Teaching Pedagogy" at ATME College of Engineering on 17th July 2020.
20. A One Week "Pedagogical Training for Teachers on Tools for Online Teaching Learning and Evaluation", from 1st July to 6th July 2020, organized by School of Mathematical Sciences, Swami Ramanand Teerth Marathwada University, Nanded
21. A webinar on "Sustainability through start up India and related schemes" held on 5th August 2020 by Government of India Field outreach Bureau: Mysore Ministry of Information and Broadcasting in Association with ATME College of Engineering, Mysuru
22. A webinar on "Aathmanirbhar Bharath: Swathanthra Bharathada Shreshta nirmanakke Nirbhara Bharatha Thathvada Koduge" held on 12th August 2020 by Government of India Field outreach Bureau: Mysore Ministry of Information and Broadcasting in Association with ATME College of Engineering, Mysuru
23. National Level one day awareness workshop on "Outcome Based Education and Accreditation" for engineering colleges organized by GH Raisoni Institute of Engineering and technology, Nagpur on 11th sep 2020
24. Participated in three day FDP on "Intellectual Property Rights in Engineering Educations" from 29th to 31st July 2020 organized by ATMECE, Mysuru in association with KSCST, IIsc Campus, Bengaluru
25. A five day online FDP on "Advances in artificial Intelligence, machine Learning and Robotics" held from 6th – 10th July 2020 by VVCE, Mysuru.
26. Successfully completed the course on "Google Analytics for Beginners" from Google Analytics Academy
27. A four days VTU-VGST FDP on Virtual Instrumentation Essentials for Academic and Research in Engineering, from 28-05-2014 to 31-05-2014 by Adichunchangiri Institute of Technology, Chikmagalur.
28. One day workshop on Industry – academia interaction by IEEE PES bangalore chapter in association with BMS College of Engineering, Bengaluru on 10th October 2015.
29. A Five days FDP on "GNU Radio and Software Defined Radio" by JSS Academy of Technical Education, Bengaluru in association with Tent Technetronics, Bengaluru from 27th June – 1st July 2016.
30. One day national workshop on "Interfacing Innovation and IPR for diffusion of Technology" organized by NRDC, New Delhi and ATMECE, Mysuru on 19th January 2015
31. Participated one day state level FDP on "LATEX" held on 8th August 2013 in ATMECE, Mysuru
32. Participated three days Zonal level FDP on "MATLAB" held from 6th – 8th January 2014 in ATMECE, Mysuru
33. Attended a Workshop on VLSI Design Using Mentor Graphics organized by Akshaya Institute of Technology, Tumakuru in association with Trident Techlabs, Bengaluru on 16th October 2015
34. A six days Faculty Development Program on "Network Simulator-3" held from 12th – 17th December 2016 at ATMECE Mysuru
35. A Five days National Level Workshop on "Applications of Advanced Embedded Systems Using NI LabVIEW & Arduino" from 27th to 31st October 2017, ATMECE, Mysuru, in association with VTU- Belagavi, NI LabVIEW Academy- SJBIT and IETE – Mysuru.
36. Conducted and coordinated for a three-day workshop on "Computer Network using Network Simulator" hands on with NS-2.35 tool from 2nd to 4th January 2018 organised by Dept. of ECE in association with IETE Mysuru.
37. Attended VTU TEQIP 1.3 Sponsored Five Day Program On "Outcome Based Education and NBA Accreditation" in association with Visvesvaraya Technological University Belagavi, Karnataka, Aryabhatta Knowledge University Patna, Bihar and Biju Patnaik University of Technology, Rourkela, Odisha from 7th to 11th January 2020 at GSSSIETW, Mysuru
38. Actively participated in IEEE Bangalore section researcher's forum online workshop on "IEEE Reference management Tool For Research Articles and Thesis Writing" held on 20th may 2020
39. Participated in the "One day Workshop on eSim, a First Course in the IoT Series for Teachers" held at ATME College Of Engineering on 21 September 2019, organised by the Teaching Learning Centre ICT at IIT Bombay, funded by the Pandit Madan Mohan Malaviya National Mission on Teachers and Teaching (PMMMNMTT), MHRD, Govt. of India
40. Successfully participated in Virtual workshop on "Effective Online Engineering Education: Tips and tricks on 26 April, 2020 in IEEE Bangalore Section in Association with IEEE sight, IEEETEMS and IEEE young professionals Bangalore section.
41. Participated in the "Virtual IEEE faculty conclave for Non-IEEE faculty members" organised by IEEE Bangalore section on 25th April 2020
42. Attended the Python Workshop on 22th June 2019, at ATMECE, the Teaching Learning Centre ICT at IIT Bombay, funded by the Pandit Madan Mohan Malaviya National Mission on Teachers and Teaching (PMMMNMTT), MHRD, Govt. of India
43. Participated in three days FDP on "Importance of NAAC Accreditation in Higher Education Institutions" from 9-11-2020 to 11-11-2020
44. Participated in three-day National Level Online FDP on "AICTE exam Reforms – An Overview" from 27th to 29th August 2020.
45. Participated in the webinar of the "Space Debris management" with Prof. R. Arunachalam – Scientist – URSC as a speaker conducted by TEAM 2020 community on 7th August 2020
46. Undergone 3 days training on "FPGA based signal and image processing application development" organized by M.S. Engineering college, Bangalore And Its Tools For Researchers" in Sep – oct 2020

## Proposal/Funding/Project Financial Assistance

- NIL

## Patent

- Patent with invention titled "Automated Smart Medicine Dispensing Device", under the patent application number: 201841011210A.

## Roles and Responsibilities: Institute Level

1. Research, Publication & Co-Curricular Activities Committee - Member
2. SC-ST Committee – Member Secretary
3. AICTE Activity Points

## Roles and Responsibilities: Department Level

1. NBA and NAAC Criteria – 2
2. Department Newsletter
3. AICTE Activity
4. VLSI Incubation
5. Publication coordinator
6. DST VLSI`,
  },
  "dr-prathibha-m-k": {
    name: "Dr. Prathibha M K",
    url: "",
    md: `## Professional Experience

- Teaching: 14
- Research: 14
- Industry: 0

## Contact Details

- **Email ID:** Official: [dr.prathibamk_ec@atme.edu.in](mailto:dr.prathibamk_ec@atme.edu.in)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/201876>
- **Google Scholar ID:** <https://scholar.google.com/citations?user=u5KecG8AAAAJ&hl=en>
- **Scopus ID:** <https://www.scopus.com/authid/detail.uri?authorId=55598368500>
- **Orcid ID:** <http://www.orcid.org/0000-0002-8865-189X>
- **Web of Science Researcher ID:** <https://www.webofscience.com/wos/author/record/PVD-7962-2026>
- **LinkedIn ID:** <https://www.linkedin.com/in/dr-prathibha-m-k-b5bab9112/>

## Academic Details

- **Qualification**
- **Ph.D** in Electrical and Electronics Engineering.
- **M.Tech** in Industrial Electronics.
- **B.E** in Electronics and communication Engineering

## Areas of Interest

1. Digital signal Processing
2. Digital image processing

## Publication Details

**International**

1. Prathiba M K and Dr. Basavaraj L "Online Hand Written Signature Verification System- A Review, in International Emerging Trends and Technology in Computer Science, Vol-III, Issue 2, ISSN:2278-6856 pp-263-267 year: 2014.
2. Prathiba M K and Veena N "Handwritten Signature Verification Using Neural Network" International Research Journal of Engineering and Technology (IRJET) Volume: 03, Issue: 08, August-2016
3. Prathiba M K, Bindushree B N, Bindushree T S, Chandrakala V and Sahana B R "Distance Based Verification Technique For Online Signature System" Volume: 04, Issue: 06, June-2017.
4. Prathiba M K and Karthik B K "Handwritten Signature Verification Using DCT" International Research Journal of Engineering and Technology (IRJET) Volume: 04, Issue: 06, August-2017
5. Prathiba M K and Dr. Basavaraj L "Histogram Based On Line Signature Verification System", International Journal of Applied Engineering Research ISSN 0973-4562 Volume 12, Number 22 (2017) pp. 12004-12007
6. Prathiba M K and Dr. Basavaraj L "Online Handwritten Signature Verification using DCT", IPASJ International Journal of Computer Science (IIJCS) ISSN 2321-5992 Volume 6, Issue 3, March 2018.
7. Prathibha M K, Dr. Basavaraj L, Enhanced Approach on Online Handwritten Signature Verification through Multi rate SVM with Wavelet Transformation, IJCSE, International Journal of Computer Sciences and Engineering, Vol. 6, Issue 7, July 2018, pp. 58-65. DOI:10.26438/ijcse/v6i7.5865.
8. Prathiba M K and Shalini V S "Handwritten Signature Verification Using Neural Network" International Research Journal of Engineering and Technology (IRJET) Volume: 08, October -2021
9. Prathiba M K and Anupama Shetter" Detection of various stages of Lung Cancer", Science and Engineering Journal,ISSN 0103-944X,Volume 25, Issue 2, 2021.
10. Dr. Prathibha M K, Pratyush Priyadarshi, Nithin Nindi, "Detection and Recognition of Face ", Turkish Journal of Computer and Mathematics Education, Vol.12 No.14 (2021), pp. 3517-3524.
11. Prathiba M K, Nandini G S "A Brief Review of Deep Learning Algorithms for Alzheimer's disease Detection" Tuijin Jishu/Journal of Propulsion Technology,Vol. 44 / Issue 5, 23-Dec-23
12. Dr. Somanchi Hari Krishna, Dr.Himanshu Rajput, Dr. Prathibha M K, Seva Rangnekar, Dr. R.Sethumadhavan"Impact of Nature-Based Tourism on Physical & Mental Health of Patients" Journal for Re Attach Therapy and Developmental Diversities 2023 August; 6 (10s), Pg. .No. 347-357 01-Aug-23.
13. "S. R. Ravi Kumar, M. K. Prathiba, D. Yogaraj, Nagaprasad Kudevru Suryanarayana, M. K. Venkatesh, N. Nithesh Bhaskar, Harold D'Souza, R. Santhosh Kumar, H. Govindaraju and R. Kiranransmutation of Conventional Fuel Based Two wheeler Vehicles into Electric Vehicles Journal of Mines, Metals and Fuels,Volume 72, Issue 11, Pg..No. 1179- 1185 .
14. Dr. Prathiba M K, Harshitha N R, Prajwal S, Praveenkumar B, Rakshitha S "Advanced Footstep Power Generation System " International Journal of Innovative Research in Computer and Communication Engineering, Volume-12 . issue-12 , Pg..No.13629 – 13632, December 2024.
15. Dr. Prathibha M. K , Ananya S Nayak, Anusha R, Archana A G , Harshitha S "Smart Watch for Health Monitoring System"International Journal of Innovative Research in Science, Engineering and Technology Volume 13, Issue 12,, Pg.No 220772 – 20776, December 2024.
16. G. Brindha, Preeti Narooka, M.K. Prathiba, Suhasini S. Goilkar, "Fluid-control codesign for paper-based digital biochips using volumetric memory networks: A predictive modelling approach", Integration, Volume103, 2025, 102408, ISSN 0167-9260, https://doi.org/10.1016/j.vlsi.2025.102408.
17. Dr.J. Sylvia Grace1,, M. Ulagammai, Rajat Saini, Harsimrat Kandhari, R. Rajalakshmi,, and Dr.M.K. Prathiba "A Novel Algorithm for Respiration Rate Detection Using Deep Learning and Real-Time Sensor Data", Journal of Wireless Mobile Networks, Ubiquitous Computing, and Dependable Applications (JoWUA), 2025 volume: 16, number: 3 (September), pp. 334-353.
18. Dr. Prathibha M. K , Ananya S Nayak, Anusha R, Archana A G , Harshitha S "Smart Watch for Health Monitoring System" International Journal of Innovative Research in Science, Engineering and Technology Volume 13, Issue 12,, Pg.No 220772 – 20776, December 2024.
19. Kiran Kumar, K. U., Suhas, B. G., Nagaraja, K. C., Prathibha, M. K., Srinivasan, V. R., & Babu, E. R. (2026), "Study on hot forging and n-redmud reinforced Al6061: mechanical, corrosion properties and statistical analysis of wear behaviour by Taguchi technique" Canadian Metallurgical Quarterly,1–17. https://doi.org/10.1080/00084433.2026.2652152. April 2026.

## Membership in Professional Bodies

1. ISTE Life Member – Membership number LM116810
2. International Association of Engineers (IAENG) 568613

## Honours/Awards/Achievements

**Honours Received**

1. External evaluator for 2nd National Level Inter College Project Competition "DBIT–TeXpo-2022" (Online) on 20th July 2022.
2. Taking up the role of Session Chair for the 2nd IETE National Level Student Technical Paper Presentation held on 21st June 2020 organized by IETE Mysuru Centre, Mysuru.
3. Taking up the role of Session Chair for the 2nd National Conference on communication and Data Science (NCCDS-2020)-A Virtual conference held on 15th July 2020 at GSSS Institute of Engineering and Technology for women, Mysuru.
4. Served as a Board of Examiners (BoE) member under the EC/TE (Composite) Board at Visvesvaraya Technological University, Belagavi, during the academic year 2024–25.
5. Served as a Board of Examiners (BoE) member under the EC/TE (Composite) Board at Visvesvaraya Technological University, Belagavi, during the academic year 2025–26.

## FDPs/Conferences/Workshops/STTP/MOOC Certification

**Faculty Development Programs (FDPs)**

1. Participated in the Faculty Development Program on "3-R of Research, Researchers and Researching" Organized by the Department of E & C E, VVIET, Mysore on 25th July 2014.
2. Participated in the Three Days Faculty Development Program on "Importance of NAAC Accreditation in Higher Education Institutions" Organized by ATME College of Engineering, Mysuru from 09-11-2020 to 11-11-2020.
3. Judge for online project evaluation of final year students, ViVaCious-2021 conducted on 04-08-2021.
4. Participated in International Faculty Development Program-cum-Workshop "Research Grant Proposal Writing: Strategies to Win Research Funding up to Rs.1Crore"(20-21 November 2021)Organized by Research India Foundation, Bhubaneswar, Odisha, INDIA &Dr. C V Raman University, Bilaspur, Chhattisgarh, INDIA
5. Participated in 5 days Faculty Development Program on "Research trends in Biomedical Applications" Organized by BNMIT, Bengaluru, from 22nd to 26th October 2022.
6. Participated in 3 days national level workshop on "Innovative Technologies to improve quality of teaching and learning" held on 4th to 6th April 2022, organized by G H Raisoni Institute Of Engineering & Technology, Nagpur.
7. Participated in the One Week Faculty Development Program On Artificial Intelligence, Machine Learning & Application, organized by the Bharatratna Indira Gandhi College Of Engineering, Solapur (Department of Electronics & Telecommunication Engg.), from 25th to 29th July, 2022.
8. Attended the webinar on "How to ideate a patentable work" held on 28th September 2022
9. Participated in 3 days Faculty Development Program on "Advanced Communication using USRP using LabVIEW" held on from 25th to 27th September, 2023.
10. Participated in the 3Days FDP on Inculcating Universal Human Values in Technical Education (AICTE) from 2nd to 4th November 2023.
11. Participated in the 3Days National level symposium on "Application of image processing Technique in the field of electronics communication and civil Engineering" Organized by ATME College of Engineering, Mysuru, from 06th to 08th November 2023.
12. Participated in the Three Day Comprehensive Workshop On "Patent Drafting, Filing, & Interpretation" Organized by ATME College of Engineering, Mysuru, from 12-June-2025 to 14-June-2025
13. Participated in the One Week Faculty Development Program (AICTE Sponsored) On "Intellectual Property Rights (IPR) & Entrepreneurship: Building Sustainable Business Models through Innovation", organized by the Dayananda Sagar Business Academy (DSBA), Bangalore - 560082 Karnataka. 23rd to 28th June 2025.
14. Participated in the One Week Faculty Development Program On "Cyber Security", organized by the Indian Insistute of Science in association with Centre of Excellence, CySecK and British Asian Trust hosted at the IIITD, Dharwad from 24th to 29th November 2025.

**Conference Papers**

1. "On Line Handwritten Signature Verification System Based On Bayes Theorem" In International Conference On Current Trends In Engineering Science And Technology held at DBIT, Bangalore
2. "Signature verification based on Wavelets" in the 2017 International Conference on Recent Advances in Electronics and Communication Technology held at SJBIT, Bangalore
3. "Detection of various stages of Lung Cancer" International Conference on Recent Trends in Science & Technology-2020 (ICRTST – 2020), 17th & 18th June, 2020, held at ATMECE, Mysuru.
4. "Super resolution of Single Image" International Conference on Recent Trends in Science & Technology-2020 (ICRTST – 2020), 8th & 9th July, 2021, held at ATMECE, Mysuru.
5. "A Review: Brain Tumor Detection Techniques" International Conference on Recent Trends in Science & Technology-2020 (ICRTST – 2020), 14th & 15th July, 2022, held at ATMECE, Mysuru.
6. "A Brief Review of Deep Learning Algorithms for Alzheimer's disease Detection" International Conference on Recent Trends in Science & Technology-2023 (ICRTST – 2023), 18th & 19th October, 2023, held at ATMECE, Mysuru.
7. "Transformer-Tuned Grey Wolf Optimization for Autism Spectrum Disorder Prediction" 6th International Conference on SMC IEEE Inventive Research in Computing Applications (1CIRCA 2025) organized by Department of Electrical and Electronics Engineering, RVS College of Engineering and Technology, Coimbatore, India on 25-27, June 2025.
8. "Framework for Early-Stage Alzheimer's Disease Prediction using AI Techniques: A Comprehensive Review "at the 6th International Conference on Data Intelligence and Cognitive Systems (ICDICI 2025) organized by SCAD College of Engineering & Technology, Tirunelveli, Tamil nadu on 9-11th July 2025.
9. "Advanced Machine Learning Techniques for Early Heart Disease Detection" at 2025 2nd International Conference on Computing and Data Science (ICCDS) organized by Raja Lakshmi Engineering College, Rajalakshmi Nagar, Thandalam, Chennai - 602 105, Tamil Nadu, India on July 25, 2025
10. "Nightfall-EX Advanced: An Offline TinyML-Based Portable ECG Monitoring and Emergency Alert System" 2026 International Conference on Emerging Research in Smart Electronics and Machine Informatics (ECMI), Chikkamagaluru, India, 2026, pp. 1-8, doi: 10.1109/ECMI68341.2026.11603095.
11. "Skin Lesion Classification for Melanoma Detection Using Pretrained CNN Architectures," 2026 International Conference on Signal, Systems, and Computing for Next-Gen Automation (ICSSCNA), Eluru, India, 2026, pp. 1383-1388, doi: 10.1109/ICSSCNA68616.2026.11546834.

**Workshops Attended**

1. Participated in the National workshop on "Research Methodologies & Latex" organized by Vidya Vikas Institute of Engineering & Technology, Mysore, from 29th to 31st December 2014
2. Participated in the National workshop on "Interfacing Innovation & IPR for diffusion Technology" organized by ATME College of Engineering, Mysore, on 19th January 2015
3. Participated in the workshop on "NI LabView and ARM processors" organized by GMIT, Davangere, from 27th to 28th December 2015
4. Participated in the workshop on "Recent Trends in Microwave and its application" organized by Department of E&CE, ATME College of Engineering, Mysore in association with Technilab Instrument Bengaluru, on 19th January 2016.

**MOOC Certifications**

1. Successfully Completed on line NPTEL course on Research writing- Feb-Mar 2018 (4 Week Course).
2. Successfully completed on line NPTEL course on TALE: Teaching and Learning in Engineering- Feb-Mar 2019 (8 Week Course).
3. Successfully completed on line NPTEL course on TALE 2: Course Design and Instruction of Engineering Course Jul-Sep 2019(8 Week Course).
4. Successfully Completed Annual Refresher Programme In Teaching (ARPIT) on Pedagogical Innovations and Research Methodology -February 2020
5. Successfully Completed on line NPTEL course on NBA Accreditation and Teaching -Learning in Engineering (NATE)- Jan-Apr 2020 (8 Week Course).
6. Successfully completed on line SWAYAM course on 'Introduction to Intellectual property', January 2023. (12 Week Course).
7. Successfully Completed on line course on Real Time Digital Signal Processing" July - October 2023 (12 Week Course)
8. Successfully completed on line NPTEL course on "Accreditation and Outcome Based Learning "Aug-Oct 2024 (8 Week Course).
9. Successfully completed on line NPTEL course on "Managing change in organizations" Jan-Mar 2025 (8 week course).
10. Successfully Completed on line course on Real Time Digital Image Processing" July - October 2025 (12 Week Course)
11. Successfully completed on line Udemy course on "FDP: Pedagogy on teaching Methods". 26th June 2026
12. Successfully completed on line Udemy course on "Patent filing in India". 30th June 2026

## Proposal/Funding/Project Financial Assistance

1. Funded from AICTE to conduct ATAL FDP on "Implementation of National Education Policy 2020" from 24th January 2022 to 28th January 2022. F.No.2-23/AICTE/ATAL-HQ/2021-22/2101
2. KSCST funding for the projects: Eye Movement Communicating Media for Paralyzed Person - 44S_BE_3597 (Year 2020-2021)
3. KSCST funding for the projects: Solar Power Management System - 47S_BE_5031 (Year 2023-2024)

## Patent

1. Title: An Eye Movement Based Communication Device. Published/Granted: Published. Patent No: 202141045361
2. Title: Smart Wearable Device for Real-Time Health Data Acquisition and Alert Transmission. Published/Granted: Published. Patent No: 202541122577

## Roles and Responsibilities: Institute Level

1. IPR Cell in charge
2. AICTE Coordinator

## Roles and Responsibilities: Department Level

- Head of the Department`,
  },
  "mr-nagesh-m-s": {
    name: "Mr. Nagesh M S",
    url: "",
    md: `## Professional Experience

- Teaching: 13 Years
- Research: Nil
- Industry: 1 Year

## Contact Details

- **Email ID:** Official: [nageshms.ec@atme.edu.in](mailto:nageshms.ec@atme.edu.in)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in//profile/529887>
- **Google Scholar ID:** <https://scholar.google.com/citations?user=hMqO7SkAAAAJ&hl>
- **Scopus ID:** <https://www.scopus.com/authid/detail.uri?authorId=59384352800>
- **Orcid ID:** <http://www.orcid.org/0009-0004-6343-9659>
- **Web of Science Researcher ID:** <https://www.webofscience.com/wos/author/record/OEN-2215-2025>
- **LinkedIn ID:** <https://www.linkedin.com/in/nagesh-ms-5370b07>

## Academic Details

- **Qualification**
- PhD -
- PG - Master of Technology in Industrial Automation and Robotics at The National Institute of Engineering, Mysore.
- UG - Bachelor of Engineering in Electronics and Communication at VVCE, Mysore

## Areas of Interest

1. Embedded Systems
2. Robotics
3. Automation
4. IoT

## Publication Details

**International**

1. "Peer-To-Peer Communication System Using Flex Sensor Smart Glove for Enhancing Accessibility in Speech and Hearing Challenges" ieeexplore on 22 January 2026. Doi: 10.1109/IC3IT66137.2025.11341024
2. "Hybrid Deep Learning Models for Accurate EEG-Based Cognitive State Classification" SN Computer Science – A Springer Nature Journal on September 2025. https://doi.org/10.1007/s42979-025-04338-x
3. "Implementation of Machine Learning Based Interpreter for Real Time Sign Language Detection and Action Recognition" ieeexplore on October 2024. Doi: 10.1109/NMITCON62075.2024.10699131
4. "Multi-Function Agribot" International Journal of Engineering Research & Technology (IJERT), June 2019.
5. "PLC Based Diesel Generator Automation" International Journal of Scientific Research in Computer Science, Engineering and Information Technology, May/June 2018.
6. "Design of Smart ECU for Automobiles" International Journal of Scientific Research in Computer Science, Engineering and Information Technology, May/June 2018.
7. "Multipurpose Cleaning Robot" International Journal for Science and Advance Research in Technology, May 2018
8. "Hexa Agri Robot", International Digital Library Technology & Research Special Issue, International e-Journal for Technology and Research-2017, May 2017.
9. "Fire Extinguishing Robot", International Journal of Advanced Research in Computer and Communication Engineering, December 2016.
10. "Design of Central Nursing Station and SMS Intimation to the Doctor Using LabView", International Journal of Research and Analytical Reviews, December 2016.

## Membership in Professional Bodies

- Life time member of Indian Society for Technical Education (ISTE)

## Honours/Awards/Achievements

**Notable Achievements**

1. Under my guidance students of 3rd semester have won 1st Prize in IEEE Project Exhibition "SPARK 2025" on 21st November 2025 organized by Brindavan college of Engineering, Bengaluru.
2. Under my guidance Students of 6th semester have won 1st Prize in Project Exhibition for the Project titled "IoT Based Parental Controlled e-Bike" at AIT college chikkamagaluru on 7th June 2024.
3. Under my guidance Students of 5th semester have Secured 3rd Prize in a State Level Technical Symposium "PLASMA 2K23" held at Jawaharlal Nehru College of Engineering, Shivamogga on 23rd December 2023.
4. Under my guidance Students of 7th semester students have won 1st Place in a Robotic Competition held at The National Institute of Engineering, Mysuru on 9th December 2023.
5. Under my guidance a team of 6th semester students won "BEST WOMEN'S TEAM" award with ₹1Lakh+ in Hackathon "SYMBIOT 2023 – a 24 hour build challenge" on 5th and 6th May 2023 at VVCE, Mysuru.
6. Under my guidance a team of 6th semester students won 2nd Prize with ₹6K cash prize in "Ideathon" at NIE, Mysuru on 25th March 2023
7. Under my guidance a team of 6th semester students won "BEST WOMEN'S TEAM" award with ₹1Lakh+ for an innovative idea presented for the project titled "LINE VOLTAGE MONITORING SYSTEM FOR RURAL & REMOTE AREAS" in Hackathon "SYMBIOT 2022 – a 24 hour build challenge" on 9th & 10th June 2022 at VVCE, Mysuru.

## FDPs/Conferences/Workshops/STTP/MOOC Certification

**Faculty Development Programs (FDPs)**

1. Participated in 5-day Faculty Development Program on "Hardware Accelerators for Next Generation Systems: PYNQ Z2 and TCL Based Design Methodologies" from 29th June to 03th July 2026 at Nitte Meenakshi Institute of Technology Nitte (Deemed to be University), Bengaluru.
2. Participated & successfully completed one-week AICTE Training and Learning (ATAL) Academy Faculty Development Program on "Intelligent Automation: Leveraging Robotics, AI, and IoT for Industry 4.0" at SRI JAYACHAMARAJENDRA COLLEGE OF ENGINEERING from 10th to 15th November 2025.
3. Participated in the One-week online Faculty Development Program on "Fundamentals & Applications of EDGE Computing using JETSON ORIN NANO as EDGE DEVICE" from 21st to 25th July 2025 organized by Sri Sairam College of Engineering, Bengaluru in association with IEEE Bangalore Section.
4. Participated in 3-day comprehensive workshop on "Patent Drafting, Filing & Interpretation" from 12th to 15th June 2025 organized by IPR-Cell in association with ICC, ATME College of Engineering, Mysuru.
5. Participated in the seminar on "Substrate Integrated Waveguide and Dielectric Image Line Based Circuit Components and Antennas" by Prof. Animesh Biswas, IIT, Kanpur organized by IEEE IISc MTT/AP-S Student Branch Chapter on 6th December 2024.
6. Participated in the hybrid seminar on "Transaction-Level Verilog and its Ecosystem" by Steeve Hoover organized by IEEE-IISc VLSI Chapter on December 03, 2024.
7. Participated in Faculty development Program on "Gen AI for Educators" on 26th October 2024 organized by MRIT, Mandya.
8. Participated in the One-week online International Faculty Development Program on "Advancements in Automobile Engineering for Sustainable Development" from 24th to 28th June 2024, organized by the Department of Automobile Engineering, VNR Vignana Jyothi Institute of Engineering and Technology, Hyderabad in association with the SAE Collegiate Club of VNRVJIET.
9. Participated in one day workshop on "Scientific Research Article Writing, Funding Proposal and Patent Filing" organized by ECE Research Centre, Department of ECE in association with DST-CURIE project, GSSSIETW, Mysuru on 16th May 2024.
10. Participated and successfully completed 5 days Online National Level Faculty Development Program on "Emerging Trends in Signal Processing, Image Processing and Artificial Intelligence" from 12th to 16th of September 2023, organized by department of Electronics and Communication Engineering, SJMIT, Chitradurga-577502.
11. Participated in workshop "VLSI to System Design: Silicon to End Application Approach" organized by AICTE, Arm Education and STMicroelectronics from 31st July to 4th August 2023.
12. Participated and successfully completed One-Week Online AICTE–VTU Joint Teachers Training Programme on "Introduction to Python Programming & its Applications" from 19th to 23rd June 2023 Organized by Visvesvaraya Technological University, Centre for PG Studies, VIAT, Muddenahalli, Chikkaballapur (Dist.) – 562101.
13. Participated and successfully completed One-Week Online AICTE–VTU Joint Teachers Training Programme on "Robotics & Artificial Intelligence" from 24th to 28th April 2023 Organized by Visvesvaraya Technological University, Centre for PG Studies, VIAT, Muddenahalli, Chikkaballapur (Dist.) - 562101.

**Conference Papers**

1. Presented paper titled "Peer-to-Peer Communication System using Flex Sensor Smart Glove for Enhancing Accessibility in Speech and Hearing Challenges" in IEEE International Conference on Communication, Computer, and Information Technology (IC3IT-2025) organized at Mysuru Royal Institute of Technology, Mandya, India on 24th and 25th October 2025 in association with IEEE Mysore Subsection and IEEE Bangalore Section
2. Presented paper titled "Implementation of Machine Learning Based Interpreter for Real Time Sign Language Detection and Action Recognition" in 2nd IEEE International Conference on Networks, Multimedia and Information Technology (NMITCON-2024) on 9th & 10th August 2024 in association with IEEE Bangalore Section, organized by Nitte Meenakshi Institute of Technology, Bengaluru.
3. Presented paper titled "Multilevel Garbage Disposal System in Apartments" presented by Nagesh M S in the Fourth National Conference on Communication and Data science (NCCDS - 2024) organized by the Department of Electronics and Communication Engineering, GSSSIETW, Mysuru in association with IETE (Mysuru Subsection), ISTE (Mysuru) & IJTRET on 25th April 2024.
4. Presented Paper titled "Automation of DG Sets Using PLC" 10th National Conference on Advanced Techniques in Electrical & Electronics Engineering (NCATEE-19), on 4th May, 2019 at SJBIT, Bengaluru.
5. Nagesh M S Presented paper "PLC Based Diesel Generator Automation" Second National Conference on Robotics, Automation, Controls and Embedded System (NCRACES-2018), on 7th May 2018 at GSSSIETW, Mysuru
6. Nagesh M S Presented paper "Automatic Fire Fighting Robot" National Conference on Sustainable Engineering and Management (NCSEM-17), on 26th May, 2017 at TOCE, Bengaluru.
7. Nagesh M S Presented paper "Hexa Agri Robot" in National Conference on Advanced Techniques in Electrical & Electronics Engineering (NCATEE-17), on 10th May 2017 at SJBIT, Bengaluru.

**MOOC Certifications**

1. Completed 8 weeks NPTEL Certification Course on "Mechatronics" during February – April 2026.
2. Completed 12 weeks NPTEL Certification Course on "Digital electronic and System design" during July - November 2025.
3. Completed 12 Weeks NPTEL Certification Course on "Wheeled Mobile Robotics" during January - March 2022.

## Proposal/Funding/Project Financial Assistance

1. Received ₹6000/- from KSCST for the project titled "Design of Autonomous Indoor Wall Painting Robot".
2. Received ₹5000/- from VTU for the project titled "Arm Rehabilitation Device for Stroke Patients".

## Patent

- Title: Data science, AI, ML algorithms Based Paddy-Disease Avoidance system using DNN and Image Processing approach. Published/Granted: Published. Patent No: 202241037444

## Roles and Responsibilities: Institute Level

- Member of Scholarship Awareness Committee

## Roles and Responsibilities: Department Level

1. Member of Departmental Advisory Board
2. Member of Project and Seminar Evaluation (PSE) Committee`,
  },
  "rajeev-gowda-r": {
    name: "Mr. Rajeev Gowda R",
    url: "",
    md: `## Professional Experience

- Teaching: 5.5
- Research: Nil
- Industry: 6 Months

## Contact Details

- **Email ID:** Official: [rajeevgowdar.ec@atme.edu.in](mailto:rajeevgowdar.ec@atme.edu.in)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in//profile/549370>
- **Google Scholar ID:** <https://scholar.google.com/citations?user=GbxhY08AAAAJ&hl=en>
- **Scopus ID:** 60110190300
- **Orcid ID:** <https://orcid.org/my-orcid?orcid=0009-0006-7772-1246>
- **Web of Science Researcher ID:** Nil
- **LinkedIn ID:** <https://www.linkedin.com/in/rajeev-gowda-r-a66341114>

## Academic Details

- **Qualification**
- PG - Digital Electronics and Communication System
- UG – Electronics and Communication Engineering

## Areas of Interest

1. Image Processing
2. IoT
3. Network Security

## Publication Details

**National**

1. "A Review on Medical Image Classification Approaches" International Journal of Emerging Technologies and Innovative Research (www.jetir.org), ISSN:2349-5162, Vol.5, Issue 6, page no.885-889, June-2018
2. "Recovery Analysis of Skin Transplantation Using SVM", International Journal of Emerging Technologies and Innovative Research (www.jetir.org), ISSN:2349-5162, Vol.5, Issue 6, page no.259-265, June-2018
3. ''A Novel Deep Learning Framework for Kannada Handwritten Character Recognition" 2025 6th International Conference for Emerging Technology (INCET) Karnataka, India | 979-8-3315-3103-4/25/$31.00 ©2025 IEEE | DOI: 10.1109/INCET64471.2025.1114000
4. Machine Learning-based Signature Verification using OCR and Line Sweep Technique " International Journal of Research and Scientific Innovation(IJRSI) DOI: 10.51244/IJRSI.2026.1306000429 Volume/Issue: 13/6 | Page No: 5777-5785

## Membership in Professional Bodies

- IAENG

## Honours/Awards/Achievements

**Awards Received**

1. Best paper presentation for the paper titled "Machine Learning Based Signature Verification Process using OCR and Linesweap Technique" on Two-day National Conference on " Artificial Inteligence and Machine Learning for Better Tomorrow" (NCAIMLBT-2026) held on 8th and 9th January 2026 organized by Brindavan College of Engineering, Bengaluru-560063
2. Best paper presentation for the paper titled and "ASIC implementation of RV32F Extension" on Two-day National Conference on " Artificial Inteligence and Machine Learning for Better Tomorrow" (NCAIMLBT-2026) held on 8th and 9th January 2026 organized by Brindavan College of Engineering, Bengaluru-560063

## FDPs/Conferences/Workshops/STTP/MOOC Certification

**Faculty Development Programs (FDPs)**

1. Participated in VGST-FDP on Real Time Multi Core Design Engineering in the Field of Communication at VVIET,Mysuru
2. Participated in the W@W Empower Session workshop organised by Karnataka Digital Economy Mission (KDEM) on 25th July 2023 at SJCE Campus Mysuru
3. Participated in FDP on "Computer Networks and Internet of Things" held during 03-03-2025 to 07-03-2025 Organized by JSS Polytechnic for the Differently Abled, Mysuru, Karnataka.
4. Participated in Five day FDP on "Cyber Security Awareness and Emerging Technologies for Secure Media And Banking Applications" in association with ATME IEEE STB35744 from 10th to 14th March 2025 organized by the Department of ECE at ATME College of Engineering , Mysuru.
5. Participated in the One Day International Faculty Development Program on Growing Globally Competitive Currency in Higher Education.Delivered by Futred Innovation Studios, Australia on 2025-10-08 at ATME College of Engineering, Mysuru
6. .Participated in Five-Day Faculty Development Program titled "Next Gen Research Competencies: FDP on AI Applications & Research Tools for Educators" held from 13-10-25 to 17-10-25 Department of Electronics and Communication Engineering In association with IETE Bangalore at Sambrama Institute of technology.
7. Participated in Five-day Faculty Development Program on "Real -Time Digital Signal Processing and Generative AI in Multimodal Medical Imaging" organised by Department of ECE in association with IEEE Mysuru Subsection from 6th to 10th January 2026 at ATMECE, Mysuru
8. Participated in Five-day Faculty Development Program on "Adaptive AI tools to elevate student engagement and learning" organised by Nagarjuna college of engineering and Technology from 23rd to 27th march 2026

**Conference Papers**

1. Participated in 6th International Conference of Emerging Technology at Jain College of Engineering Belagavi, India during 22nd to 24th May 2025
2. Participated in Two-day National Conference on " Artificial Inteligence and Machine Learning for Better Tomorrow" (NCAIMLBT-2026) held on 8th and 9th January 2026 organized by Brindavan College of Engineering, Bengaluru-560063

**Workshops Attended**

1. Participated in Latex training and hands-on workshop at ATME,Mysuru.
2. Participated in EETP course conducted by BSNL at RTTC,Mysuru
3. Attended the workshop Orientation regarding NSDC programmes by Aspire Knowledge and Skill India Pvt.Ltd at BMS College of Engineering on 4th March 2024
4. Participated in Three-day Comprehensive Workshop on "Patent Drafting, Filing and Interpretation" from 12th to 14th June 2025 organized by IPR-Cell in association with IIC, ATME College of Engineering , Mysuru

**MOOC Certifications**

1. Completed 8 week NPTEL course on Assessment of Student performance
2. Completed Udemy course on Basics of Electric Vehicles.
3. Completed Udemy course on Patent Filing in India

## Proposal/Funding/Project Financial Assistance

- Nil

## Patent

- Nil

## Roles and Responsibilities: Institute Level

- K-Tech NAIN Co-ordinator

## Roles and Responsibilities: Department Level

1. NBA Criteria 3 Co-ordinator
2. Faculty Placement Co-ordinator`,
  },
  "mr-pradeep-kumar-y": {
    name: "Mr. Pradeep Kumar Y",
    url: "https://old.atme.edu.in/mr-pradeep-kumar-y/",
    md: `## Professional Experience

- Teaching: 15 Years
- Research: 6
- Industry: Nil

## Contact Details

- **Email ID:** Official: [pradeepkumary_ec@atme.edu.in](mailto:pradeepkumary_ec@atme.edu.in)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/201859>
- **Google Scholar ID:** <https://scholar.google.com/citations?user=znzcZucAAAAJ=en>
- **Scopus ID:** Nil
- **Orcid ID:** <https://orcid.org/0000-0002-5514-5579>
- **Web of Science Researcher ID:** <https://www.webofscience.com/wos/author/record/JCO-9399-2023>
- **LinkedIn ID:** <https://www.linkedin.com/in/pradeep-kumar-y-87835467/>

## Academic Details

- **Qualification**
- PG - M. Tech in Digital Electronics & Communication Systems
- UG - B.E in Electronics & Communication Engineering

## Areas of Interest

1. Machine Learning
2. Biomedical Engineering
3. Digital Systems

## Publication Details

**International**

1. Pradeep Kumar Y, Sakshi K. N., Meghana H. N., Rakshitha K. S., and Chandrashekar B. J. "Noise Level Monitor and Controlling System." International Research Journal of Engineering and Technology (IRJET), vol. 12, no. 6, June 2025. p-ISSN: 2395-0072.
2. Pradeep Kumar Y, Dr. Bhagyashree S. R., and Dr. S. Andal Bhaskar. "A Survey on Machine Learning in Forecasting Success in Intrauterine Insemination." Tuijin Jishu/Journal of Propulsion Technology, vol. 44, no. 5, 2023. ISSN: 1001-4055.
3. Pradeep Kumar Y, Anusha A. R., Anees Fathima A. B., Annapoorna D., and Apoorva H. S. "Water Quality Monitoring System Based on IoT." Grenze Scientific Society, 2022.
4. Pradeep Kumar Y, and Dr. Bhagyashree S. R. "A Survey on Neuropsychiatric Tools and Machine Learning Approaches Used in the Diagnosis of Depression." International Research Journal of Engineering and Technology (IRJET), vol. 8, Special Issue ICRTST-Oct. 2021.
5. Pradeep Kumar Y, and Dr. Bhagyashree S. R. "Machine Learning and EEG in Diagnosing Depression: A Survey." International Research Journal of Engineering and Technology (IRJET), vol. 7, Special Issue ICRTST-June 2020.

## Membership in Professional Bodies

- Member of Indian Society for Technical Education (ISTE)

## Honours/Awards/Achievements

**Awards Received**

1. Best Teacher Award for the Academic Year 2023–24.

**Notable Achievements**

1. Authored the book 'Basic Electronics' published by Notion Press, co-written by Dr. S. R. Bhagyashree, Guruprasad K N, Shalini V S, and Harini R.
2. The book is available at https://notionpress.com/in/read/basic-electronics-1321963/

## FDPs/Conferences/Workshops/STTP/MOOC Certification

**Faculty Development Programs (FDPs)**

1. 5-day FDP on "Integrating AI into Academia: Advancements in AI", conducted from 21st to 26th July 2025 at CHRIST College, Irinjalakuda, organized by the AICTE Training and Learning (ATAL) Academy, All India Council for Technical Education (AICTE), New Delhi.
2. 3-day FDP on "Patent Drafting, Filing & Interpretation", conducted from 12th to 14th June 2025 by ATME College of Engineering, Mysuru.
3. 5-day FDP on "Cyber Security Awareness and Emerging Technologies for Secure Social Media and Banking Applications", conducted from 10th to 14th March 2025 at ATME College of Engineering, Mysuru.
4. 3-day FDP on "Application of Image Processing Techniques in the Field of Electronics, Communication, and Civil Engineering", organized by ATME College of Engineering, Mysuru, from 6th to 8th November 2023.
5. 5-day FDP on "Designing Embedded AI Systems using STMicroelectronics AI Ecosystem", organized by DigiToad Technologies Pvt. Ltd., Bangalore, in collaboration with STMicroelectronics, held at N.M.A.M Institute of Technology, Nitte, on 12th–14th October and 6th–7th November 2023.
6. 3-day FDP on "Advanced Communication using USRP and LabVIEW", conducted by ATME College of Engineering, Mysuru, from 25th to 27th September 2023.
7. 7-day National Level Online FDP on "Outcome Based Education and Essential AI Tools for Teachers", organized by Carmel College (Autonomous), Mala, Kerala, from 10th to 18th August 2023, in association with the Kerala State Higher Education Council.
8. 1-week National Level FDP on "Recent Trends in Deep Learning", organized by the Department of Artificial Intelligence, G. H. Raisoni Institute of Engineering and Technology, Nagpur, from 1st to 7th July 2022.
9. 5-day FDP on "Data Science", organized by ATAL FDP and JC Bose University of Science and Technology, Faridabad, from 21st to 25th February 2022.
10. 2-week FDP on "Deep Learning and Its Applications (Parallel Architecture)", organized by premier institutions including IIT Guwahati, IIT Kanpur, IIT Roorkee, MNIT Jaipur, NIT Patna, NIT Warangal, and PDPM IIITDM Jabalpur, from 23rd August to 3rd September 2021, supported by MeitY, Govt. of India.
11. 3-day FDP on "Importance of NAAC Accreditation in Higher Education Institutions", conducted by ATME College of Engineering, Mysuru, from 9th to 11th November 2020.
12. 3-day FDP on "AICTE Exam Reforms – An Overview", organized by the Department of Mechanical Engineering, ATME College of Engineering, from 27th to 29th August 2020.
13. 5-day FDP on "Advanced Microcontrollers and Python Programming", organized by the Department of ECE, Jyothy Institute of Technology, Bengaluru, from 11th to 15th August 2020.
14. 3-day FDP on "Intellectual Property Rights in Engineering Education", organized by the Department of ECE, ATME College of Engineering, Mysuru, from 29th to 31st July 2020, in association with KSCST, IISc Campus, Bengaluru.
15. 2-week FDP on "Python", conducted by JSS Academy of Technical Education, NOIDA, from 22nd June to 4th July 2020, in association with Spoken Tutorial Project, IIT Bombay, funded by MHRD.
16. 3-day FDP on "Research Methodology and LaTeX", organized by East West College of Engineering, from 18th to 20th June 2020.
17. 5-day FDP on "Machine Learning Using Python", conducted by Reva University, Bangalore, from 25th to 29th May 2020.
18. 1-week FDP and online training on "LaTeX", conducted by Spoken Tutorial Project, IIT Bombay, from 27th April to 2nd May 2020, funded by National Mission on Education through ICT, MHRD.
19. 1-week FDP on "Transforming Education – The Google Classroom Way", conducted by Aachi Institute of Management and Entrepreneur Development, from 1st to 7th June 2020.
20. 5-day FDP on "Real-Time Multi-Core Design Engineering in the Field of Communication", conducted by the Department of ECE, VVIET, Mysuru, from 21st to 24th March 2018, in association with VGST, Govt. of Karnataka.
21. 1-week FDP on "Pedagogy Training in Technical Education", organized by VTU-HRDC, from 16th to 20th January 2018, sponsored by TEQIP-III.
22. 1-day FDP on "Recent Trends in Microwaves and Its Applications", conducted by ATME College of Engineering, Mysuru, on 22nd January 2016.
23. 1-day FDP on "LabVIEW", conducted by ATME College of Engineering, Mysuru, on 8th January 2015.
24. 4-day FDP on "Virtual Instrumentation Essentials for Academics and Research in Engineering", organized by AIT, Chikmagalur, from 28th to 31st May 2014.
25. 3-day FDP on "MATLAB", organized by ATME College of Engineering, Mysuru, from 6th to 8th January 2014.

**Conference Papers**

1. Pradeep Kumar Y, Abhishek M., Nishchitha D. Gowda, Supriya H. R., and Veepthi M. A. "Smart Bin for Segregation of Biodegradable and Non-Biodegradable Waste." IETE Sponsored 7th National Conference on Emerging Trends in Engineering, Science and Technology (NCETEST-7), RNS Institute of Technology, Bangalore, 2024.
2. Pradeep Kumar Y, et al. "Quadcopter Using Arduino UNO Controller." National Conference on Communication and Data Science (NCCDS), GSSS Institute of Engineering and Technology for Women, Mysuru, 26 Apr. 2019.
3. Pradeep Kumar Y, S. R. BhagyaShree, Chandan G. N., and Hamsini. "Automated Moisture Level Control of Irrigation Field for Improving Yield of a Crop." 2nd International Conference on Networks, Information and Communications, SVCE, Bengaluru, 18–20 May 2015.
4. Guruprasad, K. N., and Y. Pradeep Kumar. "Design and Implementation of Arduino Based Dual Axis Autonomous Solar Tracker." IEEE International Conference on New Trends in Engineering & Technology (ICNTET), GRT Institute of Technology, Tiruvallur, Chennai, 7–8 Sept. 2018. Catalog: CFP18P34-PRJ: 978-1-5386-5629-7.

**Workshops Attended**

1. 5-day Workshop on "Scientific Communication for Researchers", held at the R&D Center, BMS College of Engineering, from 29th May to 2nd June 2023.
2. 1-day workshop on "eSim – A First Course in the IoT Series for Teachers", organized by Teaching Learning Centre, ICT at IIT Bombay, on 21st September 2019, under PMMMNMTT, MHRD, Govt. of India.
3. 15-day Hands-On Workshop on The BodhiTree and SAFE Tools for Effective Online Teaching, organized by Teaching Learning Centre (ICT), IIT Bombay, on 20th June 2020.
4. 6-day Workshop on the Art of Counselling, conducted by the Department of Mechanical Engineering, ATME College of Engineering, from 2nd to 9th July 2019, in association with Samadhana Counselling Centre, Bangalore.
5. 1-week workshop on "Analysis of Biomedical Signals and Their Mathematical Modelling", organized by the Departments of Electronics & Instrumentation and Mathematics, SJCE, Mysore, from 24th to 28th December 2018.
6. 1-week workshop on "Applications of Advanced Embedded Systems Using NI LabVIEW and Arduino", conducted by ATME College of Engineering, Mysuru, from 27th to 31st October 2017.
7. 2-day workshop on "NI-LabVIEW and ARM Processor", organized by GMIT, Davanagere, from 27th to 28th February 2015.
8. 1-day workshop on "Interfacing Innovation & IPR for Diffusion of Technology", organized by ATME College of Engineering, Mysuru, on 19th January 2015.

**STTP (Short-Term Training Programmes)**

1. 6-day Residential Short-Term Training on "Design Thinking for Higher Order Learning and Student Transformation", conducted from 29th June to 4th July 2026 at the Malaviya Mission Teacher Training Centre, National Institute of Technology (NIT) Warangal, under the Malaviya Mission Teacher Training Program (MMTTP) of the University Grants Commission (UGC), Ministry of Education, Government of India.
2. 5-day STC on "Artificial Intelligence and Machine Learning Techniques for Engineering Applications – Theory and Practice", organized by NIT Puducherry, from 26th February to 1st March 2024.

**MOOC Certifications**

1. Earned a 12-week NPTEL online certification in "Soft Skills" (Elite + Silver, Top 5%), conducted from July 2025 to October 2025, organized by NPTEL – IIT Roorkee.
2. Earned a 12-week NPTEL online certification in "Artificial Intelligence: Concepts and Techniques" (Elite + Silver, Top 5%), conducted from July 2025 to October 2025, organized by NPTEL – Indian Institute of Science (IISc), Bangalore.
3. Earned an 8-week online certification in Academic Leadership in Cross Cultural Context of Higher Educational Institutions, from 20th January 2025 to 15th May 2025, organized by the National Institute of Technical Teachers Training and Research (NITTTR), Chennai.
4. Completed a 12-week online certification course titled Machine Learning and Deep Learning – Fundamentals and Applications, from 24th July 2023 to 13th October 2023, conducted by IIT Guwahati.
5. Successfully completed the following 8-week online certification programs organized by the National Institute of Technical Teachers Training and Research (NITTTR), Chennai:
6. NITTTR - Module 8: Institutional Management & Administrative Procedures (1st October 2022 – 30th November 2022)
7. NITTTR - Module 7: Creative Problem Solving, Innovation and Meaningful R&D (1st October 2022 – 30th November 2022)
8. NITTTR - Module 6: Student Assessment and Evaluation (1st April 2022 – 31st May 2022)
9. NITTTR - Module 5: Technology Enabled Learning & Life Long Self Learning (1st April 2022 – 31st May 2022)
10. NITTTR - Module 4: Instructional Planning and Delivery (1st September 2021 – 31st October 2021)
11. NITTTR - Module 3: Communication Skills, Modes & Knowledge Dissemination (1st April 2021 – 31st May 2021)
12. NITTTR - Module 2: Professional Ethics & Sustainability (1st April 2021 – 31st May 2021)
13. NITTTR - Module 1: Orientation towards Technical Education & Curriculum Aspects (1st September 2020 – 31st October 2020).
14. Accomplished a 4-month online certification course titled Workplace Communication, from 26th January 2021 to 28th May 2021, offered by IITBombayX.
15. Completed a 3-month certification course titled Pedagogical Innovations and Research Methodology, from 1st October 2019 to 31st January 2020, conducted by SWAYAM in association with Guru Jambheshwar University of Science & Technology, Hisar, Haryana, under the ARPIT Online Course.
16. Successfully completed an 8-week course titled Python for Data Science, offered by Swayam NPTEL during August–September 2019.

## Proposal/Funding/Project Financial Assistance

1. Received an amount of Rs. 6,500/- from the Karnataka State Council for Science and Technology (KSCST) for the student project proposal titled 'SPINE SERENITY: SMART RELIEF MASSAGER' (Project Proposal Reference No.: 47S_BE_4623), which has been approved by the Council under the 'Student Project Programme – 47th Series', in the year 2023-2024.
2. Received an amount of Rs. 5,500/- from the Karnataka State Council for Science and Technology (KSCST) for the student project proposal titled 'IMPLEMENTATION OF ULTRAVIOLET ROOM DISINFECTANT DEVICE USING IOT' (Project Proposal Reference No.: 44S_BE_3600), which has been approved by the Council under the 'Student Project Programme – 44th Series', in the year 2020–2021

## Patent

1. Title: Energy Efficient Robotic Sanitizing Device. Published/Granted: Granted. Patent No: 537655

## Roles and Responsibilities: Institute Level

- NIL

## Roles and Responsibilities: Department Level

1. Department AIMS Coordinator
2. Department Project Coordinator
3. Department IA Coordinator
4. NBA Criteria 4 and NAAC Criteria 5
5. E-Attestation Officer for the State Scholarship Portal (SSP)`,
  },
  "mr-manjunath-k": {
    name: "Mr. Manjunath K",
    url: "https://old.atme.edu.in/mr-manjunath-k/",
    md: `## Professional Experience

- Teaching: 12
- Research: 5
- Industry: Nil

## Contact Details

- **Email ID:** Official: [manjunathk_ec@atme.edu.in](mailto:manjunathk_ec@atme.edu.in) | Personal: [manjunathatme@gmail.com](mailto:manjunathatme@gmail.com)
- **Vidwan ID:** <https://vidwan.inflibnet.ac.in/profile/201870>
- **Google Scholar ID:** <https://scholar.google.com/citations?view_op=list_works&hl=en&user=js3FgkQAAAAJ>
- **Scopus ID:** <https://www.scopus.com/authid/detail.uri?authorId=57215922311>
- **Orcid ID:** <https://orcid.org/0000-0002-4718-0091>
- **Web of Science Researcher ID:** Nil
- **LinkedIn ID:** Nil

## Academic Details

- **Qualification**
- **M. Tech** in VLSI DESIGN AND EMBEDDED SYSTEMS
- **B.E** in ELECTRONICS AND COMMUNICATION

## Areas of Interest

1. Antennas
2. VLSI
3. Embedded Systems

## Publication Details

**International**

1. Manjunath K, Pavithra A C, U. Kulsum, S. Shariff, M. Hasnain and K. K. R, "AI-Driven DTI-Prediction using Integrated Molecular and Protein Data," 2026 International Conference on AI-Driven Smart Systems and Ubiquitous Computing (ICAUC), Pathum Thani, Thailand, 2026, pp. 1573-1579, doi: 10.1109/ICAUC68182.2026.11441122.
2. Manjunath K, Harshitha H B, Pavithra A C, Juslin F, "An ML Model to detect Cyber-attacks for Wireless Sensor Networks in Microgrids," 2025 1st International Conference on Advancement in Futuristic Technologies (ICAFT), Belagavi, India, 2025, pp. 1-6, doi: 10.1109/ICAFT66710.2025.11453035.
3. Manjunath, K., Pavithra, A.C., Juslin, F. , "Correlation of Neck Circumference with Cardio-Metabolic Risk Factors in a Tertiary Care Centre", International Conference on Smart Systems for Applications in Electrical Sciences Icsses 2025
4. Manjunath, K., Kuravatti, P.," Comparison of Patch Antenna with Different Parameters using Instant and Edge Feeding", 14th International Conference on Advances in Computing Control and Telecommunication Technologies Act 2023, 2023-June, pp. 1102-1105
5. Girish M, Manjunath K and Harshitha N, "5G Phased Array Beam Forming Antenna Design for Future Communication Technologies", International Conference on Recent Trends in Science and Technology (ICRTST-2021), 8th and 9th June 2021 at ATMECE, Mysuru.
6. Bhuvan M S, Manjunath K, "Obstacle Avoiding Vehicle", International research journal of engineering and technology (IRJET), Volume: 07, Special Issue, Page no-494-497.
7. Pavithra A C, Manjunath K and Harshitha N,"Personal Health Care and Record System using Android", IJIRT, volume V, issue II, ISSN No: 2349-6002, Impact factor 5.8.
8. Girish M , Manjunath K and Harshitha N, "Vehicular communication intelligent collision Warning System", IJCAR, volume 7, issue 1, jan 2018, pp 8840-8843,ISSN: 2319-6475, impact factor 5.91.
9. Manjunath K, Juslin F and Yathisha L, "Application and Comparison of Optimal & Hybrid Control Systems for Aircraft Applications, paper accepted to appear in 1st IEEE International Conference on Power Energy, Environment and Intelligent Control (PEEIC 2018), April 2018, Noida.
10. Girish M, Manjunath K, Harshitha N, Juslin F "Double Stegging Design to Hide message in video using AES and DWT Methods" in IEEE International Conference on Recent Trends in Electronics, Information & Communication Technology held at Sri Venkateshwara College of Engineering, Bengaluru on 18th May 2018.

## Membership in Professional Bodies

1. Member of Indian Society for Technical Education (ISTE)
2. Member of International Association of Engineers (IAENG)

## Honours/Awards/Achievements

**Awards Received**

1. Obtained CLAD (Certified LabVIEW Associate Developer) Certification from NI LabVIEW.

**Notable Achievements**

1. Secured second rank in M.Tech

## FDPs/Conferences/Workshops/STTP/MOOC Certification

**Faculty Development Programs (FDPs)**

1. Attended 5-day FDP on "Emerging Research Trends in Computer Science AI and Quantum Technologies", held from 6th July 2026 to 10th July 2026 organized by Yenepoya School of Engineering & Technology, Mangalore.
2. Attended 1-Week ATAL FDP on "Impact of Quantum Computing and GenAI towards AGI", held at Christ University, Bengaluru.
3. Attended Three day FDP on Importance of NAAC Accreditation in HEI
4. Attended Two week FDP on Python

**Conference Papers**

1. Attended international conference ICRTST-2021

**Workshops Attended**

1. Conducted one week workshop on "Recent Trends in Artificial Intelligence and Machine Learning Techniques".
2. Conducted four-week Internship program on LabVIEW and Its Applications
3. Conducted 3 Day workshop on Advanced Embedded Systems using NI LabVIEW

**MOOC Certifications**

1. Completed NITTTR Module-5 and Module-6
2. Completed NPTEL course on "Soft Skill Development", in Mar-2026
3. Completed NPTEL course on "Digital Circuits", in Jul-2025
4. Completed NPTEL course " Machine Learning, ML", in Feb 2025
5. Completed NPTEL course "Pedagogical Innovations and Research Methodology" in Feb 2020.

## Proposal/Funding/Project Financial Assistance

- Submitted a project proposal on "VIGNAN SUGNAN"-Science Fair for School Children's from 5th to 10th Standard." to the NCSTC Division of Department of Science and Technology, Ministry of Science and Technology, government of India.

## Patent

- Nil

## Roles and Responsibilities: Institute Level

1. Member of the Statutory Approval & Affiliation Committee (AICTE, VTU etc.,)
2. Member of NSS, RED CROSS & SOCIAL OUTREACH COMMITTEE

## Roles and Responsibilities: Department Level

1. NIRF Coordinator
2. Alumni Coordinator
3. Class Teacher
4. NAAC criteria-4 Coordinator
5. NBA Criteria-4 Coordinator`,
  },
  "devaraj-m-r": {
    name: "Mr. Devaraj M R",
    url: "https://old.atme.edu.in/devaraj-m-r/",
    md: `## Professional Experience

- Teaching: 28
- Research: 08
- Industry: 02

## Contact Details

- **Email ID:** devarajmr_mech@atme.edu.in
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/201835
- **Google Scholar ID:** https://scholar.google.com/citations?user=9pF3AZoAAAAJ&hl=in
- **Scopus ID:** 58653839000
- **Orcid ID:** https://orcid.org/0000-0002-0532-0594
- **LinkedIn ID:** https://www.linkedin.com/in/devaraj-m-r-a4749850

## Academic Details

- PhD – Course work completed
- PG – TOOL Engineering
- UG – Mechanical Engineering

## Areas of Interest

1. Advanced Materials, Characterisation and Processes.
2. Composites and Advanced Manufacturing

## Publications Details

**International**

- Devaraj M R, Mohanakumara K C, Niranjan Kumar V S ‘Effect of Cooling Rate on Mechanical Properties of ASTM Grade Steel´ International Journal of Scientific Research in Science, Engineering and Technology, on 2022/3/15, Volume-9, Issue-9, Page-10
- DEVARAJ M R, MOHANA KUMARA K C “Effect of Chilling during Solidification on Wear Behaviour of Ferrous Based Material” paper presented at international conference in Recent Trends in Science and Technology-ICRTST-2021 at ATMECE on 8th and 9th July 2021 and sent for publication.
- DEVARAJ M R, NIRANJAN KUMAR V S “Influence of Reinforcement Materials on Mechanical, Metallurgical and Tribological Behavior of Aluminum Composites-Review” Paper published in GIS Science Journal Volume 7 Issue 5 May 2020 “An UGC care approved Group-II Journal. Paper ID: GSJ/1293
- DEVARAJ M R, Dr. JOEL HEMANTH, “Effect of Cooling Rate on Mechanical Properties of ASTM Grade Steel” published in Advances in Mathematics: Scientific Journal
- Devaraj M R, Joel Hemanth, Yathisha N, “A Study on Wear Behaviour and Mechanical Properties of Ferrous based Chilled castings”, International Journal of Innovation or Research Science Engineering and Technology (IJIRSET), Volume: 7, Issue: 1, Page No.1001-1009, January 2018.
- Yathisha N, Devaraj M R, Karthik Kumar,“Design and Fabrication of Pedal Powered Household Reciprocating Pump”, International Journal of Innovation Research science Engineering and Technology (IJIRSET), Vol. 6, issue 9, September 2017.
- Devaraj M R, Joel Hemanth, Yathisha N,“Effect of Cooling Rate on Properties and Microstructure during Solidification and Heat Treatment of Steels” International Journal of application or innovation in Engineering and Management (IJAIEM), volume 5, issue 9, Page No.23-31, September-2016.
- Devaraj M R, Joel Hemanth, Yathisha N,“Effect of Cryogenic Treatment on Mechanical Properties of Steel – A review” International journal of Engineering Science Research and Technology (IJESRT), Volume12, Issue 1, Page No. 645-655, December-2015.
- Yathisha N, Ravikumar S, Arjun M S, Devaraj M R, Suresha S, “A comparative study on stress concentration factor in a centrally notched Glass-fibre/ Epoxy plate by theoretical and finite element analysis.” (IJRST), Volume 2, issue 9; Page no.61-64, Sept.2015.
- Srinivasa K, Devaraj M R, Yathisha N, Manjunath H S” Microstructure Analysis and Wear Behaviour of Aluminium based Metal Matrix Composite reinforced with ceramic particles” International Journal of Research in Engineering and Technology (IJRET), Volume3, issue 9, Page No.332-338, September 2014.
- P.S. Mithun, Devaraj M R, “Development of Aluminium Based Composite Material “International Journal of Applied Engineering Research” (IJAER), Volume 6, Issue 1, Page No.121-130, Year -2011.
- DEVARAJ.M.R. G. BALAKUMAR “Effect of Volume Fraction Addition of Al2O3 Reinforcement on Mechanical and Tribological Properties of Al-Si Alloy Based MMC” Proceedings of National Conference on Advanced Forming Technology (AFT 2010) 15-16th April 2010 at Department of Mechanical Engineering, R.V. College of Engg, Bangalore, PP-4
- DEVARAJ.M.R., “Mechanical properties of Silicon carbide Particulates reinforced Aluminum alloy composites at different temperatures at all India seminar on Recent advances in Manufacturing technologies held at National institute of Technology, Rourkela, Orissa- 22-23, Oct. 2005
- DEVARAJ.M.R., “Press Tools” at S J C Institute of technology, Chickballapur, on Recent Trends in Mechanical Engineering in Design, Thermal, Mfg. & Management areas held between 15.11.1999 and 27.11.1999.
- Research Paper Entitled “Development and Testing of Agave fiber reinforced polymer-based composite” Published in IJMRSET, Volume 7, Issue 6, June 2024.

## Membership in Professional Bodies

- Indian Society for Technical Education (ISTE)-LM 28126
- Institution of Engineers India (IEI)-FIE-(F-115911-5)
- Tribology Society of India (TSI)

## Honours/Awards/Achievements

**Awards**

- UG guided project “Automatic Crack Detector in Railway Track” 2015-16, secured first prize at Project work exhibition-2016 held at VVIET, Mysore.

## FDPs/Conferences/Workshops/STTP/MOOC Certification

**Conferences**

- DEVARAJ M R, MOHANA KUMARA K C “Effect of Chilling during Solidification on Wear Behaviour of Ferrous Based Material” paper presented at international conference in Recent Trends in Science and Technology-ICRTST-2021 at ATMECE on 8th and 9th July 2021 and also sent for publication.
- DEVARAJ.M.R. G. BALAKUMAR “Effect of Volume Fraction Addition of Al2O3 Reinforcement on Mechanical and Tribological Properties of Al-Si Alloy Based MMC” Proceedings of National Conference on Advanced Forming Technology (AFT 2010) 15-16th April 2010 at Department of Mechanical Engineering, R.V.College of Engg, Bangalore, PP-4
- Paper Presented at International conference on Recent trends in Science & Technology ICRTST-2023 organised by ATME College of Engineering, Mysuru held on 18th and 19th October 2023. Paper Entitled “A Study on Effect of Chilling During Solidification and Copper Addition on Wear Behaviour of Steel Group Material”.
- Paper Presented at International conference on Recent trends in Science & Technology ICRTST-2023 organised by ATME College of Engineering, Mysuru held on 18th and 19th October 2023. Paper Entitled “Investigate the Effect of Extrusion Process on Porosity and Mechanical Characteristics of Al-SiCp Metal Matrix Composite Material”.

**STTP**

- One-Week International Short Term Training Program (Online) titled Coordinator Dr. Jibitesh Kumar Panda “Recent Advancements in Fuel Cell and Hydrogen Storage”, Duration: From 09th to – 13th October 2023.

## Proposal/Funding/Project Financial Assistance

- Project entitled “Development Aad Testing of Biodegradable Agave Fiber Reinforced Polymer Based Composite” was identified by KSCST 2024 (AY: 2023-24) and funded Rs. 5000/-.
- [Proposed Reference number:47S_BE_4821]

## Patent

- Nil

## Roles and Responsibilities: Institute Level

- Squad Member for internal Assessment Tests
- Teaching Learning Process and Classroom Teaching Evaluation Committee
- Anti-Ragging Committee Members
- Anti-Ragging Squad Members
- Industry-Interaction advisory committee.

## Roles and Responsibilities: Department Level

1. Mentoring Co-ordinator
2. MoU’s with industries/ Training Centres
3. Industrial Visits Co-ordinator
4. Program Assessment Committee.`,
  },
  "mr-hemanth-b-r": {
    name: "Mr. Hemanth B R",
    url: "https://atme.edu.in/mr-hemanth-b-r/",
    md: `## Contact Details

- **Email ID:** hemanthbr_me@atme.edu.in
- **Vidwan ID:** Vd__Tn8AAAAJ
- **Google Scholar ID:** https://scholar.google.com/citations?user=Vd__Tn8AAAAJ&hl=en
- **Scopus ID:** https://www.scopus.com/authid/detail.uri?authorId=57211296943
- **Orcid ID:** https://orcid.org/my-orcid?orcid=0000-0002-4685-2933
- **WoS ID:** https://www.webofscience.com/wos/author/record/PUH-6854-2026
- **LinkedIn ID:** https://www.linkedin.com/in/hemanth-b-r-a0b399169/

## Academic Details

- PhD – Pursuing in Mechanical Engineering Research Center, ATME College of Engineering, Mysuru
- PG – M. Tech in Machine Design at PES College of Engineering, Mandya affiliated to VTU.
- UG – B. E in Mechanical Engineering at ATME College of Engineering, Mysuru, affiliated to VTU.

## Areas of Interest

1. Additive Manufacturing
2. Machine Design
3. Entrepreneurship
4. Machine Learning

## Publications Details

**International**

- “Solar-Based Polygeneration Systems for a Carbon Neutral Future with Focus on Hydrogen Production: A Comprehensive Review”, G. S. Girishkumar, M. R. Kamesh, N. Shreekala, D. Yogaraj, M. Mohammed Nadeem, B. R. Hemanth and K. S. Nagaprasad, Nature Environment and Pollution Technology, Volume 25, Issue No 2, 2026
- “Design and CFD Analysis of an Indigenous Rescue Vehicle”, Ahobal N, Vishnu P, Sudharshan N, Hemanth B R, Vijayakumar Naganna Patil, Karthik M. A, International Journal of Environmental Sciences, Page no 1596 – 1602, Vol. 11 Issue No. 23s, 2025.
- “Wear Behaviour and Surface Analysis of Hybrid Al 6061 Composites Reinforced with Tungsten Carbide and Fly Ash”, D. E. Siddartha, Hemaraju, S. Chethan, Manil Raj and B. R. Hemanth, Journal of Mines, Metals and Fuels, Page no 2601 – 2609, Volume 73, Issue No 8, 2025
- “Optimized Graphene Oxide Content for Enhancement in the Mechanical Properties of Epoxy Composites”, Mohammed Asif Kattimani, M. Mohammed Nadeem, M. B. Niyaz Ahamed, B. R. Hemanth, Mohammed Mathenulla Shariff, Viswanathan Rajan, S. B. Karthik, A. Rajesh, C. Durga Prasad, J. Inst. Eng. India Ser. D, Page No 535–542, Volume No 107, Issue No 1, 2025
- “Automated Sensor based Fire Extinguisher Mounted on AGV”, Nagesha S, Preethi S, Raghu L, Mr. Hemanth B R, Mr. Rohith S, Dr. Chethan S, International Journal Of Multidisciplinary Research In Science, Engineering and Technology (IJMRSET), Page No 10394–10397, Volume No 7, Issue No 5, 2024
- “Development of Multi Crop Agricultural Insecticide Sprayer”, Rayyan Ahmed Tanveer, Adarsha M, Akshay S, Madhusudan R, Dr. Chethan S, Mr. Hemanth B R, International Journal Of Multidisciplinary Research In Science, Engineering and Technology (IJMRSET), Page No 10433–10436, Volume No 7, Issue No 5, 2024
- “Solar Driven Organic Rankine Cycle System and Hydrogen Fuel Production with Waste Heat Recovery”, G. S. Girishkumar, M. R. Kamesh, V. R. Srinivasan, Syed Mustafakhadri, D. Aravinda, S. R. Ravi Kumar, C. Somashekhar and B. R. Hemanth, Journal of Mines, Metals and Fuels, Page no 189 – 198, Volume 72, Issue No 3, 2024
- “Experimental Analysis on the Impact Behaviour of Graphite‑Filled Glass Fibre Reinforced Epoxy Composites Subjected to Sea Water Ageing and Notch Depth”, S. Chethan, B. R. Hemanth, Hemaraju, M. Jayashree, Santhosh Kumar, J. Inst. Eng. India Ser. D, Page No 969–974, Volume No 105, Issue No 2, 2024
- “Design and Fabrication of Fixture for Internal Grinding CNC Machine”, Rohith S, Ravi Kumar S, Md. Nadeem M, Chethan S, Hemanth B R, Grenze International Journal of Engineering and Technology, Pg 763-769, Jan 2023.
- “Fractal Contact Mechanic Behaviour of Base Structural Steels in Abrasion”, Chethan S, Srinivasa K, Hemanth B R, and Hemaraju, Journal of Mines, Metals and Fuels, Page no 247-253, Volume 70, Issue No 10A, 2022

## Membership in Professional Bodies

- IAENG, ISHRAE Mysuru Chapter

## Honours/Awards/Achievements

**Awards**

- Awarded as Best Innovation Ambassador award in IIC Regional Meet held at BIET, Davanagere

**Achievements**

- Completed AICTE QIP PG Programme in “MACHINE LEARNING” Conducted during June 2025 to December 2025 at Indian Institute of Information Technology, Raichur.

## FDPs/Conferences/Workshops/STTP/MOOC Certification

**FDPs**

- Attended one week ATAL – FDP on “Industry 5.0 with AI” from 3rd to 8th August 2026 at Manakula Vinayagar Institute of Technology, Pondicherry.
- Attended one week ATAL – FDP on “Application of Artificial Intelligence & Machine Learning in 3D Printing for Next-Gen Materials and Industry 4.0/5.0” from 19th – 24th January 2026 at K.S. Institute of Technology, Bengaluru, Karnataka.
- Attended one week ATAL – FDP on “Sustainable Manufacturing Practices and Environmental Impact Optimization Techniques” from 09th to 14th December 2024 at Dayananda Sagar College of Engineering, Bengaluru, Karnataka.
- Attended one week ATAL – FDP on “Impact of Industry 4.0 on Industries and Academia” from 22/01/2024 to 27/01/2024 at S.R.M Institute of Science and Technology, Chennai, Tamil Nadu.
- Attended 3-day FDP on “Introduction on Modelling and Design for Manufacturing using Fusion 360 by Autodesk” from 6th to 8th November 2023 at ATME College of Engineering, Mysuru, Karnataka.
- Attended 3-day FDP on “Inculcating Universal Human Values in Technical Education” from 2nd to 4th November 2023 organized by All India Council for Technical Education (AICTE) at ATME College of Engineering, Mysuru.
- Completed the 3-day online FDP on the theme “Innovation and Design Thinking” organized by IMPACT College of Engineering and Applied Sciences, Bengaluru from October 6 to October 8 2022.
- Attended 5-day FDP on” 3D Printing & Design - Materials, Solutions, & Applications" from 6th December to 10th December 2021 organized by All India Council for Technical Education (AICTE)  at JSS Academy of Technical Education.

**Conferences**

- “All-Conversion-in-One Converter for EVs and Renewable Energy Applications”, Swathi.K, Jayashree M, Manikannan K, Nadeem Pasha K, Hemanth B R, Raveendra R S, Proceedings of the 9th International Conference on Intelligent Computing and Control Systems (ICICCS-2026), IEEE XPlore Part Number: CFP26K74-ART; ISBN: 979-8-3315-8947-9, Page no 460-464, 2026
- Presented paper entitled “Design and Fabrication of fixture for Internal grinding CNC machine” in International Conference – ICRTST 2022 held on 14th and 15th July 2022 at ATME College of Engineering, Mysuru
- “Effect of Glass Powder and MWCNTs on Mechanical and Wear properties of Epoxy based Hybrid Composites with Added Fillers for Elevated Temperature Applications”, Md Nadeem M, Hemanth B R, Yathisha N, International Conference on Recent Trends in Science & Technology-2020 (ICRTST - 2020), Page no 415 – 428, Volume N0 07, Issue Special Issue, 2020

**STTP**

- Completed STTP on “Printed Circuit Board (PCB)” organised by Bannari Amman Institute of Technology, Sathyamangalam, Tamil Nadu in association with Altium Designers from 13th to 16th October 2025.
- Completed one Week International Short Term Training Program (Online) titled “Recent Advancements in Fuel Cell and Hydrogen Storage”, successfully organized and delivered by Department of Mechanical Engineering, School of Engineering, Anurag University, India in Collaboration with Centre for New Energy Transition Research, Federation University Australia during 09 - 13 October, 2023.
- Completed National Level Training program on “Material Characterization, Modelling and Finite Element Analysis” held during 22nd to 28th August 2022 at Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad in collaboration with GITAM University, Visakapatnam.

**MOOC Certification**

- Completed “Technology Enabled Learning and Life Long self-learning” conducted by National Initiative for Technical Teachers Training on February 2026.
- Completed 8-week NPTEL course on “Processing of Polymers and Polymer Composites” funded by the MoE, Govt. of India in Jan – Mar 2026 period.
- Completed 8-week NPTEL course on “Advanced Machining Processes” funded by the MoE, Govt. of India in Aug – Oct 2025 period.
- Completed 4-week NPTEL course on “Design Thinking – A Primer” funded by the MoE, Govt. of India in July – Aug 2024 period.
- Completed “Upskilling” training for Innovation Ambassador by MoE’s Innovation cell and AICTE during the IIC calendar year 2024-25.
- Completed “Reskilling” training for Innovation Ambassador by MoE’s Innovation cell and AICTE during the IIC calendar year 2024-25.
- Completed “Advanced level” training for Innovation Ambassador by MoE’s Innovation cell and AICTE during the IIC calendar year 2023-24.
- Completed “Foundation level” training for Innovation Ambassador by MoE’s Innovation cell and AICTE during the IIC calendar year 2022-23.

## Proposal/Funding/Project Financial Assistance

- Project entitled “Automatic adjustment of side mirrors using sensors connected to steering” was identified by KSCST 2022 and funded Rs. 8000/-

## Patent

**National**

- Title: Automatic Adjustment of side mirrors using sensors connected to steering; Published/Granted: Published; Patent No: 202641002872 A
- Title: An autonomous internet of things based robotic system for real time multi gas environmental monitoring and intelligent hazard detection; Published/Granted: Published; Patent No: 202641089559 A
- Title: IoT driven smart healthcare system for real – time patient monitoring; Published/Granted: Published; Patent No: 202641089657 A

## Roles and Responsibilities: Institute Level

- Transportation Incharge
- IIC Vice President
- Anti ragging Committee Member
- Alumni committee member

## Roles and Responsibilities: Department Level

- DST Coordinator
- NBA Criteria 5 Coordinator
- NAAC Criteria 3 Coordinator
- Department sports and cultural Coordinator`,
  },
  "mr-ravikumar-s": {
    name: "Mr. Ravikumar S",
    url: "https://old.atme.edu.in/mr-ravikumar-s/",
    md: `## Professional Experience

- Teaching: 26 years
- Research: 3 years
- Industry: 1 year

## Contact Details

- **Email ID:** Ravikumars_mech@atme.edu.in
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/201289
- **Scopus ID:** https://www.scopus.com/authid/detail.uri?authorId=58263856300
- **Orcid ID:** https://orcid.org/0000-0001-9108-1720
- **LinkedIn ID:** https://www.linkedin.com/in/ravikumar-gowda-688234126

## Academic Details

- PhD – Course work Completed
- PG – M.Sc. Engg. By Research
- UG – BE

## Publications Details

**National**

- Ravikumar S, Yathisha N“A Comparative Study on Stress Concentration Factor in a Centrally Notched Glass-Fibre/Epoxy Plate by Theoretical and Finite Element Analysis”, IJRSI journal Volume 2, Issue 9; Sep-2015.
- Ravikumar S, Harsha DN, “Study of Sustainable Utility of Biomass Energy Technologies for Rural Infrastructure and Village Power-Opportunities by Developing Bio Village Model”, IJRET journal, Volume 3, Issue 11; November 2014.
- Ravikumar S, Rangaswamy T, Partha MK,“Thermophoresis Effects on Heat and Mass Transfer in A Non-Darcy Porous Medium”, International Journal of Mechanical and Production Engineering,Volume-1, Issue-1, July-2013.

**International**

- Ravikumar S, Yathisha N“A Comparative Study on Stress Concentration Factor in a Centrally Notched Glass-Fibre/Epoxy Plate by Theoretical and Finite Element Analysis”, IJRSI journal Volume 2, Issue 9; Sep-2015.
- Ravikumar S, Harsha DN, “Study of Sustainable Utility of Biomass Energy Technologies for Rural Infrastructure and Village Power-Opportunities by Developing Bio Village Model”, IJRET journal, Volume 3, Issue 11; November 2014.
- Ravikumar S, Rangaswamy T, Partha MK, “Thermophoresis Effects on Heat and Mass Transfer in A Non-Darcy Porous Medium”, International Journal of Mechanical and Production Engineering, Volume-1, Issue-1, July-2013.
- Rohith S, Ravikumar S, Md. Nadeem M, Chethan S, Hemanth B R “Design and Fabrication of Fixture for Internal Grinding CNC Machine” Greenz International Journal of Engineering and Technology, Jan 2023.
- Ravikumar S, Chethan S, Mohandas AN, Haseebuddin M R, Hemaraju, Mohammed Nadeem M “Development of Portable 3-Axis Deployed Laser Cutting machine” , Tuijin Jishu/Journal of Propulsion technology. ISSN:1001-4055, Vol 44, No. 5 2023.
- V. R. Srinivasan, D. Yogaraj, S. Ravikumar, R. Vinayakumar, S. R. Ravikumar and  V. C. Chandra Shekara and H. Govindaraju “Optimization of Machining Parameters in Wire Electric Discharge Machining Inconel 600 Using Regression analysis” Journal of Mines, Metals and Fuels ISSN : 0022-2755 Vol 72 (6) | June 2024.

## Membership in Professional Bodies

- Life member of Indian Society for Technical Education (ISTE)
- Life member of Institute of Engineers of India (IEI)

## FDPs/Conferences/Workshops/STTP/MOOC Certification

**FDPs**

- NPTEL-AICTE Faculty Development Program on “Managing Change in Organisations” Jan-March 2025
- Six-Day ATAL FDP attended on “Cutting Edge FEM Techniques for Automotive Engineering” June 2025.
- NPTEL-AICTE Faculty Development Program on “Accreditation and Outcome Based Learning” ) Aug-Oct 2024.
- One Week International Short Term Training Program (Online) titled “Recent Advancements in Fuel Cell and Hydrogen Storage”, Oct 2023.
- Three-day Face-to-Face FDP on the theme “Inculcating Universal Human Values in Technical Education” organized by All India Council for Technical Education (AICTE), Nov 2023
- NPTEL-AICTE Faculty Development Program on “Operations Management” Jan-Apr 2023.
- Five day faculty development program on “Developing Leadership Skills for Enhancing Personal and Organizational Outcome” Sep. 2021.
- ARPIT course for Career Advancement Scheme(CAS) promotion “Refresher Course on Teacher and Teaching in Higher Education” Mar 2021.
- TEQUIP Sponsored Five Day FDP on “Outcome Based Education and NBA Accreditation” Jan 2020.
- Two-week Online FDP on “Python” (IIT Bombay organized) Jun-July 2020.
- ARPIT Course for Career Advancement Scheme(CAS) promotion “Pedagogical Innovations And Research Methodology” Feb 2020.
- NPTEL-AICTE Faculty Development Program on “Course Design and Instruction of Engineering Course” Jul-Sep 2019.

## Roles and Responsibilities: Institute Level

- Institute NBA Coordinator
- Member Secretary for College Internal Complaints Committee
- Member Secretary for Mentoring Committee.
- IQAC Coordinator.

## Roles and Responsibilities: Department Level

- Academic Coordinator
- Project and Internship Evaluation Committee member`,
  },
  "mr-rohith-s": {
    name: "Mr. Rohith S",
    url: "https://old.atme.edu.in/mr-rohith-s/",
    md: `## Professional Experience

- Teaching: 11 years
- Research: 0
- Industry: Nil

## Contact Details

- **Email ID:** rohiths_mech@atme.edu.in
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/201717
- **Google Scholar ID:** https://scholar.google.com/citations?user=yEsJeiUAAAAJ&hl=en
- **Scopus ID:** https://www.scopus.com/authid/detail.uri?authorId=58653489600
- **Orcid ID:** https://orcid.org/0000-0003-0928-1358
- **WoS ID:** https://www.webofscience.com/wos/author/author-search?state=%7B%7D
- **LinkedIn ID:** https://www.linkedin.com/in/rohith-somashekara-1142b857v

## Academic Details

- PhD – Pursuing
- PG – M.Tech in Machine Design
- UG – BE in Mechanical Engineering

## Areas of Interest

1. Machine Design
2. Material science
3. 3D Printing

## Publications Details

**International**

- “Machining Performance Improvement in Turning of EN24 Steel using Design of Experiments”, V. R. Srinivasan, A. Balthilak, S. Rohith, P. Raja, D. Yogaraj, M. R. Kamesh, H. Govindaraju, G. S. Girishkumar, Nitish Kumar B. A. Praveena, Journal of Mines, Metals and Fuels, Pg 2903-2909, Vol 73 (9), September 2025.
- “Farmer Friendly Multi-Operational Agro Machine”, Vishal S, Vijay Shankar N S, Nakul P, Arjun J R, Chethan S, Rohith S, International Journal Of Multidisciplinary Research in Science, Engineering and Technology (IJMRSET), Pg 10398-10402, Volume 7, Issue 5, May 2024.
- “Automated Sensor based Fire Extinguisher Mounted on AGV”, Nagesha S, Preethi S, Raghu L, Mr. Hemanth B R, Mr. Rohith S, Dr. Chethan S, International Journal Of Multidisciplinary Research In Science, Engineering and Technology (IJMRSET), Pg 10394- 10397, Volume 7, Issue 5, May 2024.
- “Modelling and Analysis of a Single Slope Solar Still for Desalination of Water”, G. S. Girishkumar, M. R. Kamesh, S. Rohith, D. Yogaraj, M. Abhilash, H. Sathish,R. Vinayakumar C. Somashekar, Journal of Mines, Metals and Fuels, Pg 313-321, Vol 72 (4), April 2024.
- “Design and Fabrication of Fixture for Internal Grinding CNC Machine”, Rohith S, Ravi Kumar S, Md. Nadeem M, Chethan S, Hemanth B R, Grenze International Journal of Engineering and Technology, Pg 763-769, Jan 2023.
- “Evaluation of Mechanical Properties of Jute Fiber, Boron Carbide Reinforced Epoxy Hybrid Composites”, Rohith.S, Mr. Yashwanth N, Dr. Rathnakar. G, International Conference on Recent Trends in Science & Technology-2021 (ICRTST - 2021), International Research Journal of Engineering and Technology (IRJET), Pg 191-198, Volume: 08, Special Issue | Oct 2021 Volume: 08, Special Issue Oct 2021.
- “Fabrication of Hydrogen Engine”, Rohith S, Yashwanth N, Pavan Kumar K P, International Research Journal of Engineering and Technology (IRJET), Pg 2792-2796, Volume: 08 Issue: 03, Mar 2021.
- “Design and Fabrication of Fatigue Testing Machine for Sheetmetal”, Rohith S, Yashwanth N, Swarnakiran S, International Research Journal of Engineering and Technology (IRJET), Pg 2535-2543, Volume: 06 Issue: 12, Dec 2019.
- “Stress Distribution along Outer Most Fiber in Semi Circular Curved Beam Subjected to Out-Of-Plane Load for Different Cross Sections”, Rakshith N, Karthik Kumar M, Rohith S, Ramanuja C M, International Research Journal of Engineering and Technology (IRJET), Pg 4224-4227, Volume: 05, Issue: 05, May-2018.
- “Fatigue Life Estimation of Machine Components”, Karthik Kumar M, Rakshith N, Yathisha N, Rohith S, International Research Journal of Engineering and Technology (IRJET), Pg 1328-1333, Volume: 05, Issue: 06, June-2018.
- “Numerical Analysis of Nose Landing Gear System”, Swarnakiran.S, Rohith.S, International Research Journal of Engineering and Technology (IRJET), Pg 1978-1984, Volume: 05, Issue: 04, Apr-2018.
- “Design and Fabrication of Pedal Powered Household Reciprocating Pump”, Yathisha. N, MD Nadeem M, Devaraj M R, Rohith S, Karthik Kumar M, International Journal of Innovative Research in Science, Engineering and Technology, Pg 18311-18318, Vol. 6, Issue 9, September 2017.
- “Cold Flow Simulation in an IC Engine”, Rohith. S, Dr. G.V. Naveen Prakash, International Research Journal of Engineering and Technology (IRJET), Pg 82 – 87, Volume: 02, Issue: 07, Oct-2015.

## Membership in Professional Bodies

- Life Member of Indian Society for Technical Education (ISTE)
- Life member of Institute of Engineers of India (IEI)

## Honours/Awards/Achievements

**Achievements**

- Author of Textbook Elements of Mechanical Engineering- as per new 18 Scheme

## FDPs/Conferences/Workshops/STTP/MOOC Certification

**FDPs**

- Attended one week ATAL – FDP on “Industry 5.0 with AI” from 3rd to 8th August 2026 at Manakula Vinayagar Institute of Technology, Pondicherry.
- Attended one week ATAL – FDP on “Application of Artificial Intelligence & Machine Learning in 3D Printing for Next-Gen Materials and Industry 4.0/5.0” from 19th – 24th January 2026 at K.S. Institute of Technology, Bengaluru, Karnataka.
- Attended one week ATAL – FDP on “Cutting-Edge FEM Techniques for Automotive Engineering” from 23rd to 28th June 2025 at Maharaja Institute of Technology Thandavapura, Mysuru, Karnataka.
- Attended one week ATAL – FDP on “Sustainable Manufacturing Practices and Environmental Impact Optimization Techniques” from 09th to 14th December 2024 at Dayananda Sagar College of Engineering, Bengaluru, Karnataka.
- Attended one week ATAL – FDP on “Impact of Industry 4.0 on Industries and Academia” from 22/01/2024 to 27/01/2024 at S.R.M Institute of Science and Technology, Chennai, Tamil Nadu.
- Attended 3-day FDP on “Introduction on Modelling and Design for Manufacturing using Fusion 360 by Autodesk” from 6th to 8th November 2023 at ATME College of Engineering, Mysuru, Karnataka.
- Attended 3-day FDP on “Inculcating Universal Human Values in Technical Education” from 2nd to 4th November 2023 organized by All India Council for Technical Education (AICTE) at ATME College of Engineering, Mysuru.
- Attended two-week ATAL – FDP on “Applications and Research Opportunities in 3D & 4D Printing" from 10th – 21st October 2022 at Dayananda Sagar College of Engineering, Bengaluru, Karnataka.
- Attended two-week FDP on “Recent advances in design and development of mechatronics and robotic systems” from 4th -16th December 2017 organised by Mahatma Gandhi Institute of Technology, Hyderabad.

**Conferences**

- Presented paper entitled “Design of a sustainable IoT for LPG Monitoring and leakage prevention” in International Conference on sustainable Technology 2025 held on 19th and 20th February 2025 at The National Institute of Engineering, Mysuru
- Presented paper entitled “Design and Fabrication of fixture for Internal grinding CNC machine” in International Conference – ICRTST 2022 held on 14th and 15th July 2022 at ATME College of Engineering, Mysuru
- Presented paper entitled “Evaluation of Mechanical Properties of Jute Fiber, Boron Carbide Reinforced Epoxy Hybrid Composites” in International Conference – ICRTST 2021 held on 9th and 10th July 2021 at ATME College of Engineering, Mysuru

**STTP**

- Completed STTP on “Printed Circuit Board (PCB)” organised by Bannari Amman Institute of Technology, Sathyamangalam, Tamil Nadu in association with Altium Designers from 13th to 16th October 2025.

**MOOC Certification**

- Completed “Technology Enabled Learning and Life Long self-learning” conducted by National Initiative for Technical Teachers Training on February 2026.
- Completed 8-week course Aug – Oct 2025 NPTEL course on “Advanced Machining Processes” funded by the MoE, Govt. of India.
- Completed 4-week course Jan – Feb 2025 NPTEL course on “Design Thinking” funded by the MoE, Govt. of India.
- Completed “Upskilling” training for Innovation Ambassador by MoE’s Innovation cell and AICTE during the IIC calendar year 2024-25.
- Completed “Reskilling” training for Innovation Ambassador by MoE’s Innovation cell and AICTE during the IIC calendar year 2024-25.
- Completed “Advanced level” training for Innovation Ambassador by MoE’s Innovation cell and AICTE during the IIC calendar year 2023-24.
- Completed “Foundation level” training for Innovation Ambassador by MoE’s Innovation cell and AICTE during the IIC calendar year 2022-23.
- Completed “Orientation towards Technical Education and Curriculum Aspects” conducted by National Initiative for Technical Teachers Training on February 2021.
- Completed ARPIT Course for Career Advancement Scheme (CAS) promotion “Pedagogical Innovations and Research Methodology” organised by Guru Jambeshwar University of Science & Technology Hisar, Haryana on 16th February 2020.
- Completed 8-week course Aug – Oct 2019 NPTEL course on “Manufacturing of Composites” funded by the MoE, Govt. of India.

## Proposal/Funding/Project Financial Assistance

- Project entitled “Automatic adjustment of side mirrors using sensors connected to steering” was identified by KSCST 2022 and funded Rs. 8000/-
- Project entitled “Fabrication of solar cooker by using PCM” was identified by KSCST 2021 and funded Rs. 7000/-

## Patent

**National**

- Title: Automatic Adjustment of side mirrors using sensors connected to steering; Published/Granted:  Published; Patent No: 202641002872 A
- Title: An autonomous internet of things based robotic system for real time multi gas environmental monitoring and intelligent hazard detection; Published/Granted: Published; Patent No: 202641089559 A
- Title: IoT driven smart healthcare system for real – time patient monitoring; Published/Granted: Published; Patent No: 202641089657 A

## Roles and Responsibilities: Institute Level

- Member in Admission Committee
- Member in Sports Committee
- Member in Cultural Committee
- Member in Website Committee

## Roles and Responsibilities: Department Level

- Department NBA coordinator
- Member in PAC Committee`,
  },
  "dr-mohanakumara-k-c": {
    name: "Dr. Mohanakumara K C",
    url: "https://atme.edu.in/dr-mohanakumara-k-c/",
    md: `## Contact Details

- **Email ID:** Dr.MOHANAKUMARAKC_mech@atme.edu.in
- **Vidwan ID:** https://vidwan.inflibnet.ac.in/profile/169310
- **Google Scholar ID:** https://scholar.google.com/citations?user=FLlyLQQAAAAJ&hl=en
- **Scopus ID:** https://www.scopus.com/authid/detail.uri?authorId=56458867500
- **Orcid ID:** https://orcid.org/0000-0002-7694-1734
- **WoS ID:** https://orcid.org/0000-0002-4376-1622
- **LinkedIn ID:** https://www.linkedin.com/in/dr-mohanakumara-k-c-b29a0a48/
- **Web of Science Researcher ID:** https://www.webofscience.com/wos/author/record/HHS-9720-2022

## Academic Details

- PhD – Mechanical Engg. - Composite Materials
- PG - Computer Integrated Manufacturing
- UG - Mechanical Engineering
- AICTE QIP PG Certificate in “Cyber Physical System” at IIIT Dharwad

## Areas of Interest

1. Computer Integrated Manufacturing,
2. Material science and Manufacturing Process
3. Engineering Drawing,
4. Metal Matrix Composites
5. 3D Printing Technology
6. Energy Engineering

## Publications Details

**International**

- K. C. Mohanakumara, Divakar, H. N., K. S. Keerthiprasad, M. Rakesh, Naveed Anjum, and B. Sandeep. "Influence of Silicon Carbide on the Glass Transition Temperature of Glass Fiber Reinforced Epoxy Matrix Composites: A DSC Investigation." Journal of Mines, Metals & Fuels 73, no. 12 (2025): 3805.
- KC, Mohanakumara, Niranjan Kumar VS, and Devaraj MR. "Performance Analysis of Multi Axis Solar Tracker using Ardiuno-Uno based Micro-Controller." Grenze International Journal of Engineering & Technology (GIJET) 9, no. 1 (2023): 740.
- Mohanakumara K C, Niranjan Kumar V S, Devaraj M R, ‘Effect of Cooling Rate on Mechanical Properties of ASTM Grade Steel´ International Journal of Scientific Research in Science, Engineering and Technology, on 2022/3/15, Volume-9, Issue-9, Page-10
- Ashokkumar M S, Mohanakumara K C et.al “Experimental Investigation on Mechanical na d Tribological properties of Extruded Aluminium A356- Al2O3 Stir cast MMC”, Elsevier- Material Today- Proceedings, Vol-5, 2018.
- Devaraj M.R, Mohanakumara K C et.al “Using Characteristic Analysis of Low Bio Gas Chamber using Organic Waste”, IRJET, Vol-5, Issue 5, May 2018.
- Thejkumar J, Ravikumar S, Harsha D N, Mohanakumara K C “Use of lipid Bio-fuels with Environmental Impacts for production of Low Coat Fuel”, IRJET, Vol-5, Issue 4, 2018.
- Mohanakumara K C et.al “Finite Element Analysis of Combustion Process in Biomass Rice Husk Gasifier” at ICAMS International conference, IFERP, ISBN:978-81-932966-3-9 March 2017.
- Mohanakumara K C et.al “Performance Study of Production Bio Fertilizer From Bio-fuel Waste” International Research Journal Of Engineering And Technology (IRJET), Vol-3, Issue7, pgs2145-2149, ISSN: 2395-0056, Jul 2016.
- Mohanakumara K C et.al “Development and Mechanical Properties of SiC Reinforced Cast and Extruded Al Based Metal Matrix Composite” Procedia Materials Science Volume 5,  Pages 934–943, 2014.

## Honours/Awards/Achievements

**Achievements**

- Organized several workshop, faculty development programs, Guest Lectures, Seminars
- Delivered several guest lectures at various other organization.
- UG project guided “Multi Axis Solar Tracker” was funded by Karnataka State Council for Science & Technology during 2019-20.
- UG project guided “Grading/Sorting of Vegetables in a Single Machine” was selected for state level project exhibition held at BEIT Davanagere, 10th and 11th Aug2018.
- UG project guided “Grading/Sorting of Vegetables in a Single Machine” was funded by Karnataka State Council for Science & Technology during 2017-18.
- UG project guided “Hybrid Energy Production System using Solar, Wind & Hydro Energy Sources” was funded by Karnataka State Council for Science & Technology during 2016-17.

## FDPs/Conferences/Workshops/STTP/MOOC Certification

**FDPs**

- Participated in an NPTEL-AICTE Faculty Development Programme on “Product Design and Development” funded by the MoE, Govt. of India from July–August 2024.
- Participated in a Value Added Course entitled “Digital Transformation from Industry 4.0 to Industry 5.0” held at Vellore Institute of Technology, Vellore from June 10–14, 2024.
- Participated in an NPTEL-AICTE Faculty Development Programme on “Experimental Robotics” funded by the MoE, Govt. of India from February–March 2024.
- Participated in a one-week blended-mode FDP on “Polymer Composites For Engineering Applications (PCEA-2023)” conducted by the Department of Chemistry at B.M.S. College of Engineering, Bengaluru from May 22–26, 2023.
- Participated in an NPTEL-AICTE Faculty Development Programme on “Introduction to Industry 4.0 and Industrial Internet of Things” funded by the MoE, Govt. of India from January–April 2023.
- Participated in a 5-day Face-to-Face “UHV-II FDP” organized by All India Council for Technical Education (AICTE) at RV College of Engineering, Bengaluru from September 5–9, 2022.
- Participated in a one-week online AICTE–VTU Joint Training Programme for Teachers on “An Overview of Teaching Techniques in Innovation & Design Thinking” organized by VTU-HRDC, Muddenahalli from December 6–10, 2021.
- Participated in an AICTE Training And Learning (ATAL) Academy Online Elementary FDP on “Applications of 3D Printing Technology in Engineering Education” at Dayananda Sagar College of Engineering from September 20–24, 2021.
- Participated in an “Innovation Ambassador Training Program (Advanced Level)” consisting of 16 sessions conducted in online mode by MoE's Innovation Cell & AICTE from June 30 – July 31, 2021.
- Participated in an AICTE Training And Learning (ATAL) Academy Online Elementary FDP on “Numerical simulation and soft computing techniques in advanced manufacturing processes” at Lakshmi Narain College of Technology from July 5–9, 2021.
- Participated in a one-week online FDP on “Mentoring Pedagogy & Application of ICT tools for Online Classroom Delivery of Teachers” organized by E&ICT Academy, IIT Guwahati from October 27 – November 3, 2020.
- Participated in a one-week online, hands-on FDP on “Introduction to Python Basics” conducted by the Department of Mechanical Engineering at Canara Engineering College, Mangalore from July 23–29, 2020.
- Participated in a one-week webinar on “Industry 4.0” organized by the Department of Mechanical Engineering at Nagarjuna College of Engineering and Technology from June 8–12, 2020.
- Participated in an AICTE-sponsored two-week National Level FDP on “Emphasizing Morals, Values, Ethics and Character Education for Quality Teachers” conducted by the Department of Computer Science and Engineering at P. A. College of Engineering and Technology, Pollachi from December 4–17, 2017.
- Participated in a TEQIP-II sponsored one-week FDP on “Current Trends in Robotics & Controls” conducted by the Department of Mechanical Engineering at The National Institute of Engineering, Mysuru from March 10–15, 2016.

**Conferences**

- Presented paper entitled “Effect of a Smaller Upstream Square Cylinder on Flow Dynamics and Heat Transfer in Tandem Heated Cylinders” in International Conference AMISE 5.0 organized by the Department of Mechanical Engineering, DSATM, Bengaluru, on 30 March 2026.
- Presented paper entitled “Performance Analysis of Multi Axis Solar Tracker Using Ardiuno-Uno Based Micro-Controller” in International Conference – ICRTST 2022 held on 14th and 15th July 2022 at ATME College of Engineering, Mysuru
- Mohanakumara K C, Devaraj M R, Manoj S and Madhuvardhan G “Multi Axis Solar Tracker Using Ardiuno Micro-Controller” International Conference On Recent Trends In Science & Technology (ICRTST – 2021), 8th and 9th July 2021at ATMECE Mysuru,
- Devaraj M R and Mohanakumara K C “Effect of Chilling during Solidification on Wear Behavior of Ferrous Based Material” International Conference On Recent Trends In Science & Technology (ICRTST – 2021), 8th and 9th July 2021at ATMECE Mysuru,
- Mohanakumara K C, Niranjan Kumar V S, Harsha D N and Yashwanth N “Study of Utilization of Biofuels and Environmental Impacts” International Conference On Recent Trends In Science & Technology (ICRTST - 2020), 17th and 18th June 2020 at ATMECE Mysuru.
- Mohanakumara K C, Niranjan Kumar V S, Harsha D N “Biogas Production From Jaggery Waste Using Low Cost Biogas Plant” ICFSGT-2018, ASET Chennai.
- Harsha D N , Niranjan Kumar V S and Mohanakumara K C “Performance Analysis of Utilization of Biomass Technologies for Developing Bio Village” ICFSGT-2018, ASET Chennai.
- Ashok Kumar M S, Mohana Kumara K C et.al “Evaluation of Mechanical and Tribological Behaviors of  As Cast & Extruded Aluminium A356 - AL2O3 – MoS2 Hybrid MMC’s” 9th International Conference on Industrial Tribology (ICIT-2017), December 6-9, 2017, Kolkata, India.
- Mohanakumara K C et.al “Experimental study of Fatigue characteristics of Al-SiC-MoS2 Hybrid Metal Matrix Composites”, at ICAMES-2017 International conference organized by PES Mandya on 17 March 2017.\
- Ashokkumar M.S, Mohanakumara K C et.al “Mechanical and Tribological Characterization of Aluminium based Hybrid Metal Matrix Composites”, at ICAMES-2017 International conference organized by PES Mandya on 17 March 2017.
- Mohanakumara K C et.al “Study of Parametric Influence on Mechanical Behaviour of Al-SiCp Metal Matrix Composites using Finite Element Method" for the “International NAFEMS Conference on Engineering Analysis, Modeling, Simulation and 3D-Printing (NAFEMS-3D) – 2016” at Bangalore during 29-31 August 2016.
- Mohanakumara K C et.al “Experimental Investigations on Mechanical and Tribological Properties of Extruded Aluminium A356 - AL2O3 Stir Cast MMC” ICAMA 2016 at BMS College of Engineering, Bangalore 2016.
- Mohanakumara K C et.al “Development and Mechanical Properties of SiC Reinforced Cast and Extruded Al Based Metal Matrix Composite” International Conference on Advances in Manufacturing and Materials Engineering, AMME 2014.
- Mohanakumara K C et.al “Effect of Reinforcement particle size on mechanical and Tribological characteristics of Al-SiCp metal matrix composite” ICAT14, NIT, Calicut, 21-24 February 2014.
- Ajit Prasad S L, Mohanakumara K C et.al “Tribological Study of as Cast and Extruded A356-SiC Metal Matrix Composites”5th World Tribology Congress in 2013 at Turin, Italy.
- Mohanakumara K C et.al “Dry Sliding Wear Study of Extruded Al-Sic Metal Matrix Composite”8th International Conference on Industrial Tribology in December- 2012 at Pune.

**MOOC Certification**

- Completed the NPTEL 12-week Artificial Intelligence (AI) for Management course during January–April 2026, with 4 credits
- Completed the NPTEL 12-week Data Science Using Python course during July–October 2025, with 3 credits
- Completed the NPTEL 4-week course on Product Design and Development, enhancing knowledge of product design methodologies, innovation, and product development processes. (Jul–Aug 2024)
- Completed the NPTEL 4-week course on Experimental Robotics, developing knowledge of robotic systems, experimental robotics, and practical robotics applications. (Feb–Mar 2024)
- Completed the NPTEL course on Introduction to Industry 4.0 and Industrial Internet of Things, gaining knowledge of Industry 4.0 concepts, Industrial IoT, cyber-physical systems, and smart manufacturing technologies. (2022–23)
- Completed the NPTEL 12-week course on NBA Accreditation and Teaching–Learning in Engineering (NATE), strengthening expertise in outcome-based education, NBA accreditation requirements, and effective engineering teaching–learning practices. (Jan–Apr 2020)

## Patent

**National**

- Title: “Convertible wheel Chair and stretcher system with sliding Mechanism”; Published/Granted: Published 2025; Patent Application No: 202541003099

## Roles and Responsibilities: University Level

- Worked as a Board of Examiners (BOE) Member for Visvesvaraya Technological University (VTU), Belagavi, contributing to the evaluation and quality assurance of university examinations during 2024-25.

## Roles and Responsibilities: Institute Level

- UHV Cell member
- IIC cell member
- Library committee member
- Student Welfare and Disciplinary committee member

## Roles and Responsibilities: Department Level

- NBA coordinator 2017-18-Till Date
- AIMS- Coordinator 2023-24 to Till date
- CIM/ CAD/CAM Lab In-Charge-2019-20- Till Date
- NAAC coordinator 2019 to 204-25
- EMS coordinator 2022-23
- Examination (IA) Committee:2017-18, 2018-19, 2019-20, 2020-21
- Alumni Coordinator-2015-16. 2016-17, 2020-21
- NSS Coordinator 2019-20, 2020-21
- Faculty Placement Coordinator - 2015-16, 2016-17`,
  },
};
