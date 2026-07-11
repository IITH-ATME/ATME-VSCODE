export type ResourceLink = { label: string; href: string };
export type SubjectResource = { code: string; title: string; links: ResourceLink[] };
export type ResourceSection = { title: string; subjects: SubjectResource[] };

export const departmentResources: Record<string, ResourceSection[]> = {
  "ece": [
    {
      "title": "4th Semester",
      "subjects": [
        {
          "code": "BEC401",
          "title": "Electromagnetics Theory",
          "links": [
            {
              "label": "Course Module",
              "href": "https://atme.edu.in/wp-content/uploads/2026/04/Course-Module.zip"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2026/04/Lesson-Plan_BEC401_AY2025-26.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/04/Notes.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/04/BEC401_PPT1.pptx"
            }
          ]
        },
        {
          "code": "BEC402",
          "title": "Principles of Communication Systems",
          "links": [
            {
              "label": "Course Module",
              "href": "https://atme.edu.in/wp-content/uploads/2026/04/Syllabus.zip"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2026/04/BEC402_Lesson-Plan-WDD.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/04/Notes-2.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/04/PPTs.zip"
            }
          ]
        },
        {
          "code": "BEC403",
          "title": "Control Systems",
          "links": [
            {
              "label": "Course Module",
              "href": "https://atme.edu.in/wp-content/uploads/2026/04/Control-Systems-Syllabus.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/04/BEC403Controlsystems-AVM.zip"
            }
          ]
        },
        {
          "code": "BECL404",
          "title": "Communication Lab",
          "links": [
            {
              "label": "Course Module",
              "href": "https://atme.edu.in/wp-content/uploads/2026/04/BECL404-COURSE-MODULE.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/04/BECL404-Lab-Manual.pdf"
            }
          ]
        },
        {
          "code": "BECL405A",
          "title": "Microcontrollers",
          "links": [
            {
              "label": "Course Module",
              "href": "https://atme.edu.in/wp-content/uploads/2026/04/course-module-and-syllabus.zip"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2026/04/9.-BEC405A-LP.docx"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/04/notesall.zip"
            }
          ]
        },
        {
          "code": "BEC456A",
          "title": "Microcontrollers Lab",
          "links": [
            {
              "label": "Course Module",
              "href": "https://atme.edu.in/wp-content/uploads/2026/04/Course-Module_BEC456A_AY2025-26.pdf"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2026/04/Lesson-Plan_BEC456A_AY2025-26.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/04/Microcontroller-Lab-Manual.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/04/CO-PO_Mapping_BEC456A_AY2025-26.pdf"
            }
          ]
        }
      ]
    },
    {
      "title": "6th Semester",
      "subjects": [
        {
          "code": "22EC601",
          "title": "Embedded System Design",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BEC601-COURSE-MODULE.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BEC601-LESSON-PLAN.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/NOTES-14.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-32.zip"
            }
          ]
        },
        {
          "code": "22EC602",
          "title": "VLSI Design & Testing",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/CM_BEC602_VDT_25-26.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BEC602_LP_WD.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/NOTES-15.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-33.zip"
            }
          ]
        },
        {
          "code": "22EC613A",
          "title": "Multimedia Communication",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Course-Module-2025-26-MMC.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/LP-of-MMC.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Notes-11.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-34.zip"
            }
          ]
        },
        {
          "code": "22EC613C",
          "title": "Digital Image Processing",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/CM-DIP-BEC613C.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Lesson-Plan-DIP-BEC613C.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Notes-BEC613C_DIP.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-35.zip"
            }
          ]
        },
        {
          "code": "BECL657A",
          "title": "FPGA System Design Lab Using Verilog",
          "links": [
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BECL657A_FPGA-Lab-Manual-AY-2025-26.pdf"
            }
          ]
        },
        {
          "code": "BECL657C",
          "title": "IOT Laboratory",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Course-Module_BEC657C_IoT-Lab.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BEC657C_IOT-Lab-Manual_EVEN_2025-2026.pdf"
            }
          ]
        }
      ]
    },
    {
      "title": "5th Semester",
      "subjects": [
        {
          "code": "BEC501",
          "title": "Technological Innovation and Management Entrepreneurship",
          "links": [
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/LP_time_25-26_ay.pdf"
            },
            {
              "label": "Notes",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/OneDrive_1_8-19-2025.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/BEC501-TIME-Module-1.zip"
            }
          ]
        },
        {
          "code": "BEC502",
          "title": "Digital Signal Processing",
          "links": [
            {
              "label": "Course Module",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/AY_2025-26_CM-BEC502_DSP.pdf"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/AY_2025-26_LP-BEC502_DSP.pdf"
            },
            {
              "label": "Notes",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/Module-1_Notes.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/Module-2_Notes.pdf"
            }
          ]
        },
        {
          "code": "BEC503",
          "title": "Digital Communication",
          "links": [
            {
              "label": "Course Module",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/CM_DC_BEC503.pdf"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/LP-DC-BEC503-A-B-sec-1.pdf"
            },
            {
              "label": "Notes",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/Notes-11.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/PPT-15.zip"
            }
          ]
        },
        {
          "code": "BEC515D",
          "title": "Satellite and Optical Communication",
          "links": [
            {
              "label": "Course Module",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/Ccourse-module_BEC515D_2025-26_ODD.pdf"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/BEC515D_Lesson-plan.pdf"
            },
            {
              "label": "Notes",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/Notes-1-4.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/PPT-1-3.zip"
            }
          ]
        },
        {
          "code": "BRMK557",
          "title": "Research Methodology and IPR",
          "links": [
            {
              "label": "Course Module",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/BRMK557_SYLLABUS.pdf"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/Lesson-Plan_BRMK557_RMIPR_ODD-2025.pdf"
            },
            {
              "label": "Notes",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/BRMK557-Notes.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/PPT-16.zip"
            }
          ]
        }
      ]
    },
    {
      "title": "7th Semester",
      "subjects": [
        {
          "code": "BEC701",
          "title": "Microwave Engineering and Antenna Theory",
          "links": [
            {
              "label": "Course Module",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/CM_-MWA-BEC701.pdf"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/LP_MWA-BEC701.pdf"
            },
            {
              "label": "Notes",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/NOTES.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/PPTs.zip"
            }
          ]
        },
        {
          "code": "BEC702",
          "title": "Computer Networks and Protocols",
          "links": [
            {
              "label": "Course Module",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/CM_BEC702_CNP.pdf"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/BEC702_CNP_WEBSITE_LP-and-WD.pdf"
            },
            {
              "label": "Notes",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/TextBook.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/BEC702_NotesandPPT.zip"
            }
          ]
        },
        {
          "code": "BEC703",
          "title": "Wireless Communication Systems",
          "links": [
            {
              "label": "Course Module",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/BEC703_WCS-Course-Module.pdf"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/BEC703_WCS-LESSON-PLAN.pdf"
            }
          ]
        },
        {
          "code": "BEC714B",
          "title": "Computer and Network Security",
          "links": [
            {
              "label": "Course Module",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/AY_2025-26_CM-BEC714B_CNS.pdf"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/AY_2025-26_LP-BEC714B_CNS.pdf"
            }
          ]
        },
        {
          "code": "BEC714C",
          "title": "Automotive Electronics",
          "links": [
            {
              "label": "Course Module",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/OneDrive_2025-08-13-1.zip"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/BEC714C_Syllabus.pdf"
            },
            {
              "label": "Notes",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/OneDrive_2025-08-13-2.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/08/PPTs_BCE714C.zip"
            }
          ]
        }
      ]
    }
  ],
  "eee": [
    {
      "title": "4th Semester",
      "subjects": [
        {
          "code": "BEE403",
          "title": "Microcontrollers",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/Course-module-BEE403.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/Lesson-plan-2025-26.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/Module-2-Notes_2025-2026.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/AY_2025-2026_EVEN_BEE403_MODULE-4_PPT.zip"
            }
          ]
        },
        {
          "code": "BEEL456D",
          "title": "Arduino & Raspberry Pi based Projects",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/EEE_BEE613B_Course-Module_2025-26.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/LP_WDR_2025-26_BEEL456D.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/EEE_BEE613B_Manual_2025-26.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BEEL456D_2025-26.pdf"
            }
          ]
        },
        {
          "code": "BBOK407",
          "title": "Biology for Engineering",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BBOK407-SYLLABUS.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/EEE-BIOLOGY-LP-2025-26.docx"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/Module-2.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BBOK407-MODULE-2.zip"
            }
          ]
        }
      ]
    },
    {
      "title": "6th Semester",
      "subjects": [
        {
          "code": "BEE601",
          "title": "Power System Analysis – I",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/EEE_PSA-1-CM-25-26.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/LP-BEE601.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Notes-7.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-27.zip"
            }
          ]
        },
        {
          "code": "BEE602",
          "title": "Control Systems",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BEE602_CS_CM_AY-2025-26.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/LP-WD_BEE602-CS-AY-2025-26.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Notes-8.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-28.zip"
            }
          ]
        },
        {
          "code": "BEE613B",
          "title": "Embedded System Design",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/EEE_BEE613B_Course-Module_2025-26.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/EEE_BEE613B_Course-Module_2025-26-1.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Notes-9.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-29.zip"
            }
          ]
        },
        {
          "code": "BEE654B",
          "title": "Technologies of Renewable Energy Source",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/EEE_RES_CM.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/EEE_RES_LP.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Notes-10.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-30.zip"
            }
          ]
        },
        {
          "code": "BEEL606",
          "title": "Control System Lab",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BEEL606_CS-LAB_CM_AY-2025-26.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/LP_BEEL606-CS-Lab-AY-2025-26.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/CS-Manual-2025-26.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/CS-Manual-2025-26-1.pdf"
            }
          ]
        },
        {
          "code": "BEEL657B",
          "title": "Simulation of control of power Electronics Circuits",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Course-Module-1.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Lesson-Plan-for-Cycle-of-Experiments.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Lab-Manual.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-31.zip"
            }
          ]
        }
      ]
    },
    {
      "title": "3rd Semester",
      "subjects": [
        {
          "code": "MATE301",
          "title": "Engineering Mathematics for EEE",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/BMATE301-COURSE-MODULE.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/BMATE-301-LP.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/BMATE-301-Final-Notes.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/BMATE-301-Final-Notes.pptx"
            }
          ]
        },
        {
          "code": "BEE302",
          "title": "Electric Circuit Analysis",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/BEE302_ECA_COURSE-MODULE_2025-26.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/BEE302_ECA_Lesson_Plan_2025-26.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/notes.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/Module-1.zip"
            }
          ]
        },
        {
          "code": "BEE303",
          "title": "Analog Electronic Circuits",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/BEE303-Analog-Electronic-Circuits.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/BEE303_AEC_Lesson_Plan-AY-2025-26.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/303notes.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/303ppt.zip"
            }
          ]
        },
        {
          "code": "BEB04",
          "title": "Transformers and Generators",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/TAG_CM_2025-26.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/EEE_TAG_LPWD_2025_26.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/304notes.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/304ppt.zip"
            }
          ]
        },
        {
          "code": "BEEIS05",
          "title": "Transformers and Generators lab",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/CM_Transformers-and-Generators-Lab.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/Cycle-of-Experiments.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/BEEL305_TAG-Manual.pdf"
            }
          ]
        },
        {
          "code": "BEE306A",
          "title": "Digital Logic Circuits",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/Course-Module-DLC_BEE306A.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/5.Lesson-Plan-A-6.Work-done-Report-A.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/306Anotes.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/Module-1.pdf"
            }
          ]
        }
      ]
    },
    {
      "title": "5th Semester",
      "subjects": [
        {
          "code": "BEE501",
          "title": "Engineering Management and Entrepreneurship",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/BEE501-CM.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/BEE501-LP_WDR-without-Dates.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/501notes.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/501ppt.zip"
            }
          ]
        },
        {
          "code": "BEE502",
          "title": "Signals & DSP",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/BEE502_S-and-DSP_CM_Revised.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/LP_WDR_2025-2026_SDSP_BEE502.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/502notes.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/502ppt.zip"
            }
          ]
        },
        {
          "code": "BEE503",
          "title": "Power Electronics",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/AY-2025-26_CM_BEE503_PE.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/LP-WD_BEE503_PE_AY-2025-26.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/503notes.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/503ppt.zip"
            }
          ]
        },
        {
          "code": "BEE504",
          "title": "Power Electronics Lab",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/BEEL504_Course-Module_PEL_2025-26.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/Power-Electronics-Laboratory_Cycle-of-Experiment.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/BEEL504_POWER-ELECTRONICS-LAB_MANUAL_AY-2025-261.pdf"
            }
          ]
        },
        {
          "code": "BEE515A",
          "title": "High Voltage Engineering",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/EEE_HVE_CM_2025_26.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/HVE_LP.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/515Anotes.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/515Appt.zip"
            }
          ]
        },
        {
          "code": "BRMK557",
          "title": "Research Methodology and IPR",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/BRMK557_RMIPR_CM_AY-2025-26.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/LP_WDR_BRMK557_RMIPR_AY-2025-26-ODD_Website.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/557notes.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/557ppt.zip"
            }
          ]
        }
      ]
    },
    {
      "title": "7th Semester",
      "subjects": [
        {
          "code": "BEE701",
          "title": "Switch gear and Protection",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/Course-Module-BEE701_SGP.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/Lesson-Plan_BEE701-SGP-AY-2025-26.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/701notes.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/701ppt.zip"
            }
          ]
        },
        {
          "code": "BEE702",
          "title": "Industrial Drives and Applications",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/Course-Module_BEE702.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/LP_WDR_BEE702.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/702notes.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/702ppt.zip"
            }
          ]
        },
        {
          "code": "BEE703 (IPCC)",
          "title": "Power system analysis- II",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/BEE703_PSA2_COURSE-MODULE_2025-26.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/BEE703-LP-WDR-without-dates.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/PSA-2-scanned-copy-of-Notes.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/PSA-2-M1-PPT-MS-2025-26.zip"
            }
          ]
        },
        {
          "code": "BEE714D (PEC)",
          "title": "Big Data Analytics in Power Systems",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/EEE_Course-Module_BEE714D.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/LP_WDR_2024-25_BEE714D_With-Dates.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/Module-1-Notes_2025-26.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/Module-1_BEE714D_PPT_2025-26.zip"
            }
          ]
        },
        {
          "code": "BME755A(OEC)",
          "title": "Introduction to Non-Traditional Machining",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/Course-Module-NTM-2025-26-BME755A.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/Lesson-Plan-NTM-2025-26.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/Module-3-ECM-notes.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/12/Module 5 - LBM & EBM.zip"
            }
          ]
        }
      ]
    }
  ],
  "cse": [
    {
      "title": "4th Semester",
      "subjects": [
        {
          "code": "BCS401",
          "title": "Analysis & Design of Algorithms",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/05/CM.docx"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/05/LP.docx"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/05/Notes.docx"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-22.zip"
            }
          ]
        },
        {
          "code": "BCS40 2",
          "title": "Microcontrollers",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/05/BCS402_CM.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/05/BCS402_LP.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/05/BCS402_Notes.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/05/BCS402-PPT.pdf"
            }
          ]
        },
        {
          "code": "BCS403",
          "title": "Database Management Systems",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/05/BCS403_CM.docx"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/05/BCS403_LP.docx"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/05/BCS403_NOTES.docx"
            }
          ]
        },
        {
          "code": "BCSL404",
          "title": "Analysis & Design of Algorithms Lab",
          "links": [
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/05/ADDA-LAB-MANUAL-2025-26-NEW-ONE.docx"
            }
          ]
        }
      ]
    },
    {
      "title": "6th Semester",
      "subjects": [
        {
          "code": "BCS601",
          "title": "Cloud computing",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS601-_Course-module.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/LP.zip"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS601-Notes-Final.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-22.zip"
            }
          ]
        },
        {
          "code": "BCS602",
          "title": "Machine Learning",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/CourseModule_ML_BCS602.docx"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/LP-NEW-1.docx"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS602-Module-1-2-Notes.docx"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/ML_PPT.pdf"
            }
          ]
        },
        {
          "code": "BCSL606",
          "title": "Machine Learning Lab",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/CM.docx"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/LP.docx"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/MACHINE_LEARNING_LAB-MANUAL-2025-2026-EVEN.docx"
            }
          ]
        },
        {
          "code": "BIKS609",
          "title": "Indian Knowledge Systems",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCSL657D-CM.docx"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/LP_IKS.zip"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Notes-2.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-23.zip"
            }
          ]
        },
        {
          "code": "BCS613D",
          "title": "Advanced Java",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS613D_CM.docx"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS613D_LP.docx"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS613D_Notes.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS613D_Module-1.pptx"
            }
          ]
        },
        {
          "code": "BCSL657D",
          "title": "Devops",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BCSL657D-CM.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BCSL657D-LP.pdf"
            }
          ]
        }
      ]
    },
    {
      "title": "3rd Semester",
      "subjects": [
        {
          "code": "Digital Design & Computer Organization",
          "title": "Link",
          "links": [
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/LP_BCS302.docx"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS302_Notes.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS302_PPT.zip"
            }
          ]
        },
        {
          "code": "Data Structures and Applications",
          "title": "Link",
          "links": [
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Lesson-Plan_bcs303.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/OS__NOTES.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/bcs303_ppt.zip"
            }
          ]
        },
        {
          "code": "Object Oriented Programming with Java",
          "title": "Link",
          "links": [
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS304_LP-2024-25.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Notes.pdf"
            }
          ]
        },
        {
          "code": "Professional Elective – A",
          "title": "Link",
          "links": [
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Lesson-plan-Odd-2025-26_BCS306A.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS306A_JAVA_Notes-2.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/java-ppt-pdf.pdf"
            }
          ]
        }
      ]
    },
    {
      "title": "5th Semester",
      "subjects": [
        {
          "code": "Computer Networks",
          "title": "Link",
          "links": [
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS502_LP_.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/CN-ppt-.pdf"
            }
          ]
        },
        {
          "code": "Theory of Computation",
          "title": "Link",
          "links": [
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/TOC_LEsson-Plan_Actual-without-date-2.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS503_NOTES_TOC-1.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT_TOC.pdf"
            }
          ]
        },
        {
          "code": "Web Technology Laboratory",
          "title": "Link",
          "links": [
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Manual_Web_Technology_Lab_BCSL504_2025-26.pdf"
            }
          ]
        },
        {
          "code": "Professional Elective – A",
          "title": "Link",
          "links": [
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS515A_LP.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS515A_Notes.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/CG_Module.pdf"
            }
          ]
        },
        {
          "code": "Research Methodology and Intellectual Property Rights",
          "title": "Link",
          "links": [
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Lesson_Plan_BRMK557.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Notes_BRMK557.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BRMK557_PPT.pdf"
            }
          ]
        }
      ]
    },
    {
      "title": "7th Semester",
      "subjects": [
        {
          "code": "Internet of Things",
          "title": "Link",
          "links": [
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS701_LP.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS701-Notes.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS701-PPT-.pdf"
            }
          ]
        },
        {
          "code": "Parallel Computing",
          "title": "Link",
          "links": [
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Modules-from-1-5.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Parallel-Computing-PPTs.pdf"
            }
          ]
        },
        {
          "code": "Cryptography and Network Security",
          "title": "Link",
          "links": [
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS703-LP.docx"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS703_NOTES.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS703_PPT.zip"
            }
          ]
        }
      ]
    }
  ],
  "ds": [
    {
      "title": "3rd Semester",
      "subjects": [
        {
          "code": "BCS302",
          "title": "DIGITAL DESIGN AND COMPUTER ORGANIZATION(IPCC)",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Course-Module-DDCO-2025-26.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/DD-CO-LP-BCS302-2025-256-odd-sem.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/NOTES-6.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-11.zip"
            }
          ]
        },
        {
          "code": "BCS303",
          "title": "OPERATING SYSTEMS(IPCC)",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/25-26_BCS303_Course_Module.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/25_26_BCS303_OS_Lesson_Plan.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS303-OS.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-12.zip"
            }
          ]
        },
        {
          "code": "BCS304",
          "title": "DATA STRUCTURES AND APPLICATIONS (PCC)",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/CM_BCS304-2025-26.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS304_LP-2025-26.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/NOTES-7.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-13.zip"
            }
          ]
        },
        {
          "code": "BCSL305",
          "title": "DATA STRUCTURES LABORATORY(PCCL)",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/DSL-BCSL305-2025-26-CM.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCSL305-DATA-STRUCTURE-LAB-MANUAL-2024-25-1.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Lab-Lesson-Plan-BCSL305-DSL-25-26.pdf"
            }
          ]
        },
        {
          "code": "BDS306C",
          "title": "DATA ANALYTICS WITH R(ESC)",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Course-Module-DA-R-2025-26.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/DA-R-Lesson-Plan-BDS306C-2025-26-odd-sem.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/NOTES-8.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-14.zip"
            }
          ]
        }
      ]
    },
    {
      "title": "5th Semester",
      "subjects": [
        {
          "code": "BCS501",
          "title": "SOFTWARE ENGINEERING & PROJECT MANAGEMENT (PCC)",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/SEPM_Course-Module_BCS501_2025-26.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/SEPM_LP-BCS501-2025-26_odd-sem.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/NOTES-9.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-15.zip"
            }
          ]
        },
        {
          "code": "BCS502",
          "title": "COMPUTER NETWORKS (IPCC)",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS502_CM-1.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS502_CN_Theory_LP.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Module-1_Introduction-to-Data-Communication-1.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/CN_Module-1_Intro.pdf"
            }
          ]
        },
        {
          "code": "BCS503",
          "title": "THEORY OF COMPUTATIONS(PCC)",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS503_ToC_CM_5thsem-1.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS503_ToC_lessonplan_5thsem-1.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Theory-of-Computation.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/M1-Session-1.pdf"
            }
          ]
        },
        {
          "code": "BAIL504",
          "title": "DATA VISUALIZATION LABORATORY(PCCL)",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/25_26_BAIL504_DV_ATME.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BAIL504_-LP-1.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/DATA-VISUALIZATION_MANUAL.pdf"
            }
          ]
        },
        {
          "code": "BCD515C",
          "title": "NOSQL DATABASES",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Course-Module-DV-2025-26-Odd-Sem.docx"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/LESSON-PLAN-NOSQL.docx"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/NOTES-10.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Module-1-2.pptx"
            }
          ]
        },
        {
          "code": "BRMK557",
          "title": "RESEARCH METHODOLOGY (AEC)",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BRMK557_RMIPR_CM-1.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/25-26_BRMK557_Lesson_Plan.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/NOTES-11.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-16.zip"
            }
          ]
        },
        {
          "code": "BCS508",
          "title": "ENVIRONMENTAL STUDIES AND E-WASTE MANAGEMENT (HSMS)",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS508_-CM-2025-26.docx"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BCS508_ESEWM_LPTuesday.docx"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BESK508-Environmental-studies-MCQ-Module-1-5.docx"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Module-1_Ecosystems-Exploring-Our-Living-World.pptx"
            }
          ]
        }
      ]
    },
    {
      "title": "7th Semester",
      "subjects": [
        {
          "code": "BDS701",
          "title": "PARALLEL PROGRAMMING (IPCC)",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PP_Course-Module_BDS701_2025-26.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BDS701_Lesson_Plan.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Notes-2.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-17.zip"
            }
          ]
        },
        {
          "code": "BAD702",
          "title": "STATISTICAL MACHINE LEARNING FOR DATA SCIENCE (IPCC)",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Course-Module-SMLD-2024-25-EVEN-Sem.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/SMLDS-Lesson-Plan-2024-25-Even-Sem.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Notes-4.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-19.zip"
            }
          ]
        },
        {
          "code": "BCS703",
          "title": "CRYPTOGRAPHY & NETWORK SECURITY (PCC)",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/25-26_BCS703_Course_Module.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/25-26_BCS703_Lesson_Plan.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Notes-3.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-18.zip"
            }
          ]
        },
        {
          "code": "BAD714B",
          "title": "BUSINESS ANALYTICS (PEC)",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BAD714B_CM.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BAD714B_LP.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Module-1_Notes.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BA_Module-1.pdf"
            }
          ]
        }
      ]
    },
    {
      "title": "4th Semester",
      "subjects": [
        {
          "code": "BCS401",
          "title": "Analysis & Design Of Algorithms (Pcc)",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BCS401_CM_NEW.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BCS401_-LP_25-26.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/NOTES-3.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/ADA_Module-1_MN.zip"
            }
          ]
        },
        {
          "code": "BCS402",
          "title": "Microcontrollers (Ipcc)",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/Microcontroller_BCS402_Course_Module-1.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/Microcontroller_BCS402_Lesson_Plan_WDR-1.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/NOTES-4.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/MODULE_1_BCS_402_PPT.pptx"
            }
          ]
        },
        {
          "code": "BCS403",
          "title": "Database Management System (Ipcc)",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/DBMS_BCS403_AY_2025-26_CM.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/DBMS_BCS403_AY-2025-26_LP_WD.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/Module1_Notes.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/Module-1_PPT.pdf"
            }
          ]
        },
        {
          "code": "BCSL404",
          "title": "Analysis & Design Of Algorithms Lab (Pccl)",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BCSL404_CM_NEW.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BCSL404_-LP_NEW.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BCSL404_LAB-MANUAL-25-26.pdf"
            }
          ]
        },
        {
          "code": "BCS405A",
          "title": "Discrete Mathematical Structures(Esc)",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BCS405A-Course-Module-CS.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BCS405A-NOTES-DMS.pdf"
            }
          ]
        },
        {
          "code": "BDS456B",
          "title": "Mongodb (AEC)",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/MongoDB_BDSL456D_Course_Module.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/ATME_DS_MangoDB_LP.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BDSL456B_MongoDB_manual-1.pdf"
            }
          ]
        },
        {
          "code": "BUHK408",
          "title": "Universal Human Values",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/UHV_Course-Module_2025-26.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/UHV_LessonPlan_2025-26.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/NOTES-5.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/PPT-1.zip"
            }
          ]
        }
      ]
    },
    {
      "title": "6th Semester",
      "subjects": [
        {
          "code": "BAD601",
          "title": "BIG DATA ANALYTICS (IPCC",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/25-26_BAD601_Course_Module.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/25-26_BAD601_Lesson_Plan.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Big-Data-and-Analytics-Seema-Acharya-Z-Library-1-1.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-25.zip"
            }
          ]
        },
        {
          "code": "BDS602",
          "title": "ARTIFICIAL INTELLIGENCE & MACHINE LEARNIN",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BDS602_AI-and-ML_CM_6thsem1.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/25_26_BDS602_AI-ML_Lesson_Plan.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/chapter-01.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/M1-Session-1-1.pdf"
            }
          ]
        },
        {
          "code": "BDS613B",
          "title": "EXPLORATORY DATA ANALYSIS",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Course-Module.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/EDA-BDS613B-Lesson-Plan-2025-26-Even-Sem.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Notes-6.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/PPT-26.zip"
            }
          ]
        },
        {
          "code": "BCSL606",
          "title": "MACHINE LEARNING LAB (PCCL)",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/Course-Module-ML-Lab-25-26-Even-Sem.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/ML-Lab-Lesson-Plan-2025-26-Even-Sem.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/ML-Lab-Manual-22-scheme.pdf"
            }
          ]
        },
        {
          "code": "BAIL657C",
          "title": "GENERATIVE AI (AEC",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/CM_BAIL657C-1.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BAIL657C_-LP-1.pdf"
            },
            {
              "label": "Notes/ Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/01/BAIL657C_LAB-MANUAL-25-26.pdf"
            }
          ]
        }
      ]
    }
  ],
  "ce": [
    {
      "title": "5th Semester",
      "subjects": [
        {
          "code": "BCV501",
          "title": "Construction Management & Entrepreneurship",
          "links": [
            {
              "label": "Course Mosule",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV501_CME_CM.pdf"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/LESSON-PLAN.pdf"
            },
            {
              "label": "Notes /Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV501_CME_Module-1_Notes.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV501_CME_Module-1_PPT.pdf"
            }
          ]
        },
        {
          "code": "BCV502",
          "title": "Geotechnical Engineering",
          "links": [
            {
              "label": "Course Mosule",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/COURSE-MODULE.pdf"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV502_LP.pdf"
            },
            {
              "label": "Notes /Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/Notes.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/PPT.zip"
            }
          ]
        },
        {
          "code": "BCV503",
          "title": "Concrete Technology",
          "links": [
            {
              "label": "Course Mosule",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV503_CM.pdf"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV503_CT_LP.pdf"
            },
            {
              "label": "Notes /Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV503_Notes.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV503-PPT.pdf"
            }
          ]
        },
        {
          "code": "BCVL504",
          "title": "Environmental Engineering Laboratory",
          "links": [
            {
              "label": "Course Mosule",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV504_ENV-Lab_Manual.pdf"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV504_ENV-LAB_LP.pdf"
            },
            {
              "label": "Notes /Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV504_ENV-Lab_Manual.pdf"
            }
          ]
        },
        {
          "code": "BCV515D",
          "title": "Remote Sensing & GIS",
          "links": [
            {
              "label": "Course Mosule",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/Remote-sensing-GIS-BCV515D-Course-module-1.pdf"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV515D_RS-GIS_LP-UPDATED-2025-26.pdf"
            },
            {
              "label": "Notes /Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/RS-and-GIS_BCV515D-MODULE-1-NOTES.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/RS-and-GIS_BCV515D-MODULE-1-PPT.pdf"
            }
          ]
        },
        {
          "code": "BRMK557",
          "title": "Research Methodology & IPR",
          "links": [
            {
              "label": "Course Mosule",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BRMK557_RMIPR_CM.pdf"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BRMK557_RMIPR_LP.pdf"
            },
            {
              "label": "Notes /Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/RM-Notes_Module-1.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/RM_Module-1.pptx"
            }
          ]
        },
        {
          "code": "BESK508",
          "title": "Environmental Studies",
          "links": [
            {
              "label": "Course Mosule",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BESK508_ENVIRONMENTAL-STUDIES-CM-2-3.pdf"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/CE_BESK508-ENVIRONMENTAL-STUDIES-LESSON-PLAN-2025-26.pdf"
            },
            {
              "label": "Notes /Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/Notes-1.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BESK508-Module1ppt.zip"
            }
          ]
        }
      ]
    },
    {
      "title": "7th Semester",
      "subjects": [
        {
          "code": "BCV701",
          "title": "Design of Steel Structures",
          "links": [
            {
              "label": "Course Module",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV701_DSS_CM.pdf"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV701_DSS_LP.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/Module-1_Notes.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/DSS_Module-1.pptx"
            }
          ]
        },
        {
          "code": "BCV702",
          "title": "Estimation & Contract Management",
          "links": [
            {
              "label": "Course Module",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV702_CM.pdf"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV702_LP.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV702_Notes.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV702_PPT.pdf"
            }
          ]
        },
        {
          "code": "BCV703",
          "title": "Pre-Stressed Concrete",
          "links": [
            {
              "label": "Course Module",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV703_PSC_CM.pdf"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/LESSON-PLAN-WORK-DONE.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV703_PSC_NOTES.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV703_MODULE-1.pdf"
            }
          ]
        },
        {
          "code": "BCV714A",
          "title": "Intelligent Transport System",
          "links": [
            {
              "label": "Course Module",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV714A_ITS_CM.pdf"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/OneDrive_2025-09-04.zip"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BCV714A_ITS_Notes.pdf"
            }
          ]
        },
        {
          "code": "BEE755B",
          "title": "Energy Conservation Audit",
          "links": [
            {
              "label": "Course Module",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/BEE755B_Energy-Conservation-and-Audit_CM.pdf"
            },
            {
              "label": "Lesson Plan",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/Energy-Conservation-and-Audit_BEE755B_LP.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2025/09/PPT-1.zip"
            }
          ]
        }
      ]
    },
    {
      "title": "4th Semester",
      "subjects": [
        {
          "code": "BCV401",
          "title": "Analysis of Structures",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BCV401_CM.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BCV401_LP.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/Module_1-2.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/1.zip"
            }
          ]
        },
        {
          "code": "BCV402",
          "title": "Fluid Mechanics and Hydraulics",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BCV402_COURSE-MODULE.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BCV402_LESSON-PLAN.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BCV402_Module-1.pdf"
            }
          ]
        },
        {
          "code": "BCV403",
          "title": "Transportation Engineering",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BCV403_TE_CM.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BCV403_TE_LP_Web.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BCV403_Notes.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BCV403_TE-PPT.pdf"
            }
          ]
        },
        {
          "code": "BCV456B",
          "title": "GIS with Quantum GIS",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/QGIS-BCVL456B-Course-Module.docx"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/QGIS-BCVL456B_LP-UPDATED-2025-26.docx"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/QGIS-MANUAL-2025-26.docx"
            }
          ]
        },
        {
          "code": "BBOK407",
          "title": "Biology For Engineers",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BBOK407.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/Module-1.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/Module-1-1.zip"
            }
          ]
        },
        {
          "code": "BUHK408",
          "title": "Universal Human Value",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/UHV-Course-Module.docx"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/BUHK408_LP-UPDATED-2025-26.docx"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/NOTES.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/03/UHV-PPT.pdf"
            }
          ]
        }
      ]
    },
    {
      "title": "6th Semester",
      "subjects": [
        {
          "code": "BCV601",
          "title": "Design of RCC Structures",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/02/BCV601_CM.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/02/BCV601_LPWD.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/02/BCV601_Notes.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/02/BCV601_PPT.pdf"
            }
          ]
        },
        {
          "code": "BCV602",
          "title": "Irrigation Engineering & Hydraulic Structures",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/02/1.-COURSE-MODULE.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/02/LP-workdone-BCV602.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/02/Notes_BCV602.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/02/PPT.pdf"
            }
          ]
        },
        {
          "code": "BCV613D",
          "title": "Design and Construction of Highway Pavements",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/02/BCV613D_DCHP_CM.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/02/BCV613D_DCHP_LP-web.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/02/BCV613D_DCHP_NOTES.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/02/BCV613D_DCHP_PPT.pdf"
            }
          ]
        },
        {
          "code": "BCVL606",
          "title": "Software Application Lab",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/02/BCVL606_CM.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/02/BCVL606_LPWD.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/02/BCVL606-lab-manual.pdf"
            }
          ]
        },
        {
          "code": "BCV657D",
          "title": "Quality Control & Quality Assurance",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/02/BCV657D_QAQC_CM.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/02/BCV657D_LP.pdf"
            },
            {
              "label": "Notes / Lab Manual",
              "href": "https://atme.edu.in/wp-content/uploads/2026/02/Module-1.zip"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/02/BCV657D_MODULE1.zip"
            }
          ]
        },
        {
          "code": "BIKS609",
          "title": "Indian Knowledge System",
          "links": [
            {
              "label": "Course Module (CM)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/02/BIKS609_CM.pdf"
            },
            {
              "label": "Lesson Plan (LP)",
              "href": "https://atme.edu.in/wp-content/uploads/2026/02/BIKS609_LPWD.pdf"
            },
            {
              "label": "PPT",
              "href": "https://atme.edu.in/wp-content/uploads/2026/02/BIKS609_PPT.pdf"
            }
          ]
        }
      ]
    }
  ]
};
