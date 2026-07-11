export type LabItem = {
  name: string;
  description: string;
  equipment?: string[];
  area?: string;
};

export const DEPARTMENT_LABS: Record<string, LabItem[]> = {
  cse: [
    { name: "Programming & Data Structures Lab", area: "120 sq.m.", description: "Foundational lab for C, C++, Java, Python programming and data-structure implementation. Used across 1st–3rd semester practicals.", equipment: ["50 networked Dell/HP workstations (i5, 8GB RAM, SSD)", "Code::Blocks, IntelliJ IDEA, Eclipse, VS Code", "Ubuntu 22.04 / Windows 11 dual-boot", "Gigabit LAN + dedicated 100 Mbps internet"] },
    { name: "Database & Web Technology Lab", area: "110 sq.m.", description: "Covers DBMS, web programming, full-stack and DevOps practicals.", equipment: ["40 workstations with MySQL 8, PostgreSQL, MongoDB", "PHP, Node.js, React, Django stacks", "Apache Tomcat & Nginx servers", "Git/GitHub classroom integration"] },
    { name: "AI & Machine Learning Lab", area: "100 sq.m.", description: "Dedicated GPU lab for AI, ML, deep learning and computer-vision projects.", equipment: ["20 systems with NVIDIA RTX 3060 GPUs", "TensorFlow 2.x, PyTorch, Keras, scikit-learn", "Jupyter Hub & Google Colab Pro accounts", "Anaconda data-science suite"] },
    { name: "Computer Networks & Cyber-Security Lab", area: "90 sq.m.", description: "Network design, packet analysis, ethical hacking and digital-forensics practice.", equipment: ["Cisco 2960 switches & 2911 routers", "Packet Tracer, GNS3, Wireshark, Nmap", "Kali Linux pentesting workstations", "Pfsense firewall test bench"] },
    { name: "Cloud & DevOps Research Lab", area: "80 sq.m.", description: "Supports student & faculty work on cloud computing, containerisation and CI/CD.", equipment: ["AWS Academy & Microsoft Azure for Students access", "Docker, Kubernetes (minikube), Jenkins", "Ansible & Terraform sandboxes"] },
    { name: "Project & Innovation Lab", area: "85 sq.m.", description: "Open access lab for final-year capstone, mini-projects, hackathons and start-up prototypes.", equipment: ["Raspberry Pi 4, Arduino, ESP32 IoT kits", "3D printer & soldering bench for embedded projects", "Smart TV & collaboration board"] },
  ],
  ece: [
    { name: "Analog & Digital Electronics Lab", area: "110 sq.m.", description: "Hands-on circuit design, breadboarding and verification of analog/digital electronic systems.", equipment: ["30 DSO (100 MHz), function generators, regulated PSUs", "Discrete IC trainer kits (74xx, 40xx, op-amp)", "Multisim & Proteus simulation suite"] },
    { name: "Microprocessor & Microcontroller Lab", area: "95 sq.m.", description: "8086, 8051, ARM Cortex and AVR programming with interfacing modules.", equipment: ["8086 & 8051 trainer kits", "ARM Cortex-M4 development boards", "Keil µVision, MPLAB X, Arduino IDE", "Logic analysers & ICE debuggers"] },
    { name: "VLSI & Embedded Systems Lab", area: "100 sq.m.", description: "VLSI design flow from RTL to layout plus embedded firmware development.", equipment: ["Xilinx Vivado, ModelSim, Cadence Virtuoso", "Spartan-6/Artix-7 FPGA boards", "Mentor Graphics tool licences", "JTAG programmers & ARM dev kits"] },
    { name: "Communication & DSP Lab", area: "95 sq.m.", description: "Analog & digital communication, optical fibre and DSP experiments.", equipment: ["AM/FM/PCM/QPSK trainer kits", "Optical-fibre communication trainer", "TMS320 DSP starter kits", "MATLAB / Simulink with Comm. toolbox"] },
    { name: "IoT & Embedded Innovation Lab", area: "80 sq.m.", description: "IoT prototyping, sensor networks and edge AI for student capstone work.", equipment: ["NodeMCU, ESP32, Raspberry Pi clusters", "ThingSpeak, AWS IoT & Blynk dashboards", "LoRa, Zigbee and BLE modules"] },
    { name: "Antenna & Microwave Lab", area: "70 sq.m.", description: "Hands-on study of microwave components, antennas and propagation.", equipment: ["Klystron & Gunn microwave benches", "Patch & horn antenna kits", "Vector network analyser", "Antenna trainer kits"] },
  ],
  eee: [
    { name: "Electrical Machines Lab", area: "180 sq.m.", description: "Performance testing of DC machines, transformers, induction motors and synchronous machines.", equipment: ["DC shunt & compound motor/generator sets", "Single & three-phase transformers", "Squirrel-cage & slip-ring induction motors", "Alternators with prime movers, loading rheostats"] },
    { name: "Power Electronics Lab", area: "110 sq.m.", description: "Characterisation of power devices and trigger-circuit/converter experiments.", equipment: ["SCR, IGBT, MOSFET, TRIAC modules", "Single & three-phase converter/inverter kits", "Chopper & cycloconverter trainers", "DSOs (100 MHz) and current probes"] },
    { name: "Power Systems & Simulation Lab", area: "100 sq.m.", description: "Load-flow, fault and stability analysis on industry-standard simulation platforms.", equipment: ["MATLAB / Simulink, PSCAD, ETAP licences", "MiPower distribution-system software", "Transmission-line simulator", "Relay test kits"] },
    { name: "Control Systems Lab", area: "85 sq.m.", description: "Time/frequency response, PID tuning and modern-control practicals.", equipment: ["DC & AC position servo trainers", "PID controller kits, magnetic-levitation rig", "MATLAB Control System Toolbox", "DSOs & data-acquisition cards"] },
    { name: "Renewable Energy Lab", area: "90 sq.m.", description: "Solar PV, wind and hybrid energy-systems experiments aligned with the energy-transition theme.", equipment: ["Solar PV trainer & rooftop array", "Wind-energy demonstrator", "MPPT charge controllers & inverters", "Battery banks for off-grid simulation"] },
    { name: "Measurements & Instrumentation Lab", area: "80 sq.m.", description: "Calibration of meters, bridges and modern digital instrumentation practice.", equipment: ["AC/DC bridges, CTs & PTs", "Energy meter test bench", "Strain-gauge & LVDT modules", "Digital storage CROs"] },
  ],
  me: [
    { name: "Mechanical Workshop", area: "320 sq.m.", description: "Foundation workshop covering fitting, smithy, welding, carpentry and sheet-metal trades.", equipment: ["Lathes, drilling & milling machines", "Arc & gas welding sets", "Forging hearths, anvils, swage blocks", "Carpentry & sheet-metal benches"] },
    { name: "Machine Shop / CNC Lab", area: "200 sq.m.", description: "Conventional and CNC machining for production-engineering practicals and projects.", equipment: ["Centre lathes, shapers, milling machines", "CNC turning & VMC trainers", "Fanuc / Siemens CNC controllers", "Mastercam & FeatureCAM software"] },
    { name: "CAD/CAM/CAE Lab", area: "120 sq.m.", description: "Digital design, simulation and manufacturing workflow with industry-standard tools.", equipment: ["40 workstations with SolidWorks, CATIA, AutoCAD", "ANSYS Workbench & ABAQUS for FEA/CFD", "Creo Parametric & NX educational licences", "3D printer (FDM) & 3D scanner"] },
    { name: "Thermal Engineering Lab", area: "180 sq.m.", description: "IC engines, refrigeration, air-conditioning and heat-transfer experiments.", equipment: ["4-stroke petrol & diesel engine test rigs", "Vapour-compression refrigeration test rig", "Window & split A/C trainer", "Conduction/convection/radiation apparatus"] },
    { name: "Fluid Mechanics & Machinery Lab", area: "160 sq.m.", description: "Characteristic curves of pumps, turbines and flow-measurement practicals.", equipment: ["Pelton, Francis & Kaplan turbine rigs", "Centrifugal & reciprocating pump test rigs", "Venturi, orifice & notch flow benches"] },
    { name: "Robotics & Mechatronics Lab", area: "90 sq.m.", description: "Robotic arms, PLC automation and Industry-4.0 demos for capstone projects.", equipment: ["6-DOF educational robotic arm", "Allen-Bradley & Siemens PLC trainers", "Pneumatic & hydraulic circuit kits", "Vision-based pick-and-place setup"] },
  ],
  ce: [
    { name: "Concrete & Highway Materials Lab", area: "180 sq.m.", description: "Mix design, strength testing and quality control of concrete, bitumen and aggregates as per BIS codes.", equipment: ["Compression testing machine (2000 kN)", "UTM (1000 kN) for steel & concrete", "Aggregate impact, crushing & abrasion testers", "Marshall stability apparatus, Penetrometer"] },
    { name: "Geotechnical Engineering Lab", area: "130 sq.m.", description: "Soil-property determination for foundation and earthwork design.", equipment: ["Triaxial shear & direct-shear apparatus", "Consolidation (oedometer) test setup", "CBR, proctor compaction & permeability rigs", "Standard penetration test (SPT) equipment"] },
    { name: "Surveying & GIS Lab", area: "110 sq.m.", description: "Conventional and modern surveying instruments with GIS-based mapping.", equipment: ["Total stations (Topcon / Sokkia)", "Digital theodolites & auto-levels", "Differential GPS (DGPS) handsets", "QGIS & AutoCAD Civil 3D workstations"] },
    { name: "Environmental Engineering Lab", area: "100 sq.m.", description: "Water & wastewater quality characterisation and treatment-process demonstration.", equipment: ["Spectrophotometer, COD/BOD reactors", "Jar-test apparatus, turbidity & pH meters", "Air-quality sampler & noise-level meter"] },
    { name: "Hydraulics & Fluid Mechanics Lab", area: "150 sq.m.", description: "Flow measurement, hydraulic-machinery and open-channel experiments.", equipment: ["Venturi & orifice meters, weirs and notches", "Centrifugal & reciprocating pump test rigs", "Hydraulic flume with adjustable slope"] },
    { name: "Structural Engineering & Analysis Lab", area: "100 sq.m.", description: "Computational structural analysis and non-destructive testing of structures.", equipment: ["STAAD.Pro, ETABS, SAP2000 software", "Rebound hammer & ultrasonic pulse velocity tester", "Strain gauges & data-acquisition systems"] },
  ],
  ds: [
    { name: "Data Science & Analytics Lab", area: "110 sq.m.", description: "Statistical computing, data wrangling and visualisation studio for all DS practicals.", equipment: ["40 workstations (i7, 16GB RAM)", "Python (pandas, NumPy, scikit-learn), R, Jupyter", "Tableau & Power BI student licences", "PostgreSQL & MongoDB databases"] },
    { name: "Machine Learning & Deep Learning Lab", area: "100 sq.m.", description: "GPU-backed lab for model training, experimentation and capstone AI projects.", equipment: ["NVIDIA RTX 3060/4060 GPU systems (20 nos.)", "TensorFlow, PyTorch, Keras, HuggingFace", "Anaconda enterprise environment", "Weights & Biases experiment tracking"] },
    { name: "Big Data & Cloud Lab", area: "90 sq.m.", description: "Distributed data processing and cloud-native analytics on managed services.", equipment: ["Hadoop, Spark, Kafka clusters", "AWS Academy & Azure for Students sandboxes", "Databricks Community Edition", "Snowflake student tier"] },
    { name: "Programming & Software Lab", area: "100 sq.m.", description: "Programming fundamentals, OOP, DSA and full-stack development practicals.", equipment: ["VS Code, IntelliJ IDEA, PyCharm", "Git/GitHub classroom integration", "Node.js, Django, Flask, React stacks"] },
    { name: "Visualization & BI Studio", area: "70 sq.m.", description: "Story-telling-with-data lab combining BI, dashboards and design thinking.", equipment: ["Large interactive display walls", "Tableau, Power BI, Looker Studio", "Adobe Illustrator for infographics"] },
    { name: "Capstone & Innovation Lab", area: "80 sq.m.", description: "Open space for industry-sponsored projects, hackathons and start-up ideation.", equipment: ["Smart whiteboard & collaboration screens", "IoT/AI prototyping kits", "Shared on-prem GPU server"] },
  ],
};

// Aliases — keep narrow & explicit
DEPARTMENT_LABS.aiml = DEPARTMENT_LABS.cse;
DEPARTMENT_LABS.csd = DEPARTMENT_LABS.cse;
DEPARTMENT_LABS.cy = DEPARTMENT_LABS.cse;
DEPARTMENT_LABS.mca = DEPARTMENT_LABS.cse;
