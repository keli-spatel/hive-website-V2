export interface Project {
  title: string;
  subtitle: string;
  desc: string;
  completion: string;
  endUser: string;
  scope: string;
  architecture: string;
  tag: string;
  specs: Record<string, string>;
  gallery?: string[];
}

export interface DetailedProjectFaq {
  q: string;
  a: string;
}

export interface DetailedProjectScopeItem {
  label: string;
  href?: string;
}

export interface DetailedProjectStat {
  value: string;
  label: string;
}

export interface DetailedProjectSnapshotItem {
  label: string;
  value: string;
}

export interface DetailedProjectGalleryItem {
  src: string;
  alt: string;
}

export interface RelatedProject {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
}

export interface DetailedProjectData {
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
    ogImageAlt: string;
    canonical: string;
  };
  hero: {
    label: string;
    title: string;
    subtitle: string;
  };
  projectInformation: string[];
  architecture: string[];
  scope: DetailedProjectScopeItem[];
  processes: string[];
  challenge: string;
  outcome: string;
  ioStats: DetailedProjectStat[];
  snapshot: DetailedProjectSnapshotItem[];
  gallery: DetailedProjectGalleryItem[];
  cta: {
    title: string;
    body: string;
  };
  faqs: DetailedProjectFaq[];
}

export const pharmaceuticalProject: DetailedProjectData = {
  seo: {
    title: "GAMP 5 Pharma Material Handling Automation | Hive Automation",
    description:
      "Case study: 21 CFR Part 11 & GAMP 5 compliant pharmaceutical automation for Emynent Russia using Siemens S7-1500, 910 I/O, WinCC SCADA & wireless tablets.",
    keywords: [
      "pharmaceutical automation company India",
      "Siemens S7-1500 pharma automation",
      "GAMP 5 automation",
      "21 CFR Part 11 SCADA system",
      "pharmaceutical material handling automation",
      "GMP automation company",
      "Siemens S7-1500 pharmaceutical material handling automation case study",
      "21 CFR Part 11 compliant SCADA for pharmaceutical plant India",
      "GAMP 5 automation for powder transfer and tablet production",
      "WinCC SCADA with wireless tablet for pharma operations",
      "GMP automation company for pharma packaging lines India",
      "pharma automation company Ahmedabad",
      "Siemens pharma automation Gujarat",
      "pharmaceutical PLC SCADA company India",
    ],
    ogImage: "https://hiveautomation.in/src/img/og-project-pharmaceutical.jpg",
    ogImageAlt: "GAMP 5 compliant pharmaceutical material handling automation - Hive Automation",
    canonical: "https://hiveautomation.in/projects/pharmaceutical",
  },
  hero: {
    label: "Case Study: Pharmaceutical",
    title: "GAMP 5 Compliant Pharmaceutical Material Handling Automation - Siemens S7-1500 & WinCC SCADA",
    subtitle:
      "GAMP 5 & 21 CFR Part 11 compliant automation for powder transfer, tablet injection, FBD, RMG, AHU and isolator systems - delivered for a Russian pharmaceutical manufacturer.",
  },
  projectInformation: [
    "Hive Automation delivered a fully automated, GAMP 5-compliant control system for a pharmaceutical powder transfer and production facility for Emynent, Russia - executed through one of our established OEM partners.",
    "The scope covered multiple integrated pharmaceutical processes from a single unified control architecture, including Powder Transfer, Tablet Injector, Isolator, Fluid Bed Dryer (FBD), Rapid Mixer Granulator (RMG), Comil, Air Handling Unit (AHU), and Heating & Cooling systems.",
    "The entire solution was engineered for full compliance with 21 CFR Part 11, ensuring secure operations, tamper-proof electronic records, and complete audit trail coverage suitable for regulated GMP environments.",
    "PLC, HMI, and SCADA programming were developed in-house and subjected to a rigorous Factory Acceptance Testing (FAT) programme before on-site commissioning in Russia.",
  ],
  architecture: [
    "Siemens S7-1500 series CPU-1517-3 PN (CPU) with 18 ET200SP distributed I/O stations.",
    "Supervisory layer: WinCC SCADA with Wireless Tablet operation using WinCC Explorer for mobile operator access.",
    "Full 21 CFR Part 11 configuration including electronic signatures, audit trail, and user access management.",
  ],
  scope: [
    {
      label:
        "PLC programming - Siemens S7-1500 (TIA Portal), all process units integrated under a unified control architecture",
      href: "/services/plc-programming-integration",
    },
    {
      label:
        "SCADA development - WinCC SCADA with custom process mimics, alarms, trends, and 21 CFR Part 11 audit trail",
      href: "/services/scada-hmi-development",
    },
    {
      label: "Wireless Tablet HMI - WinCC Explorer configuration for mobile operator access across the facility floor",
      href: "/services/scada-hmi-development",
    },
    {
      label: "In-house Factory Acceptance Testing (FAT) of the complete integrated system before shipment",
    },
    {
      label: "On-site commissioning at the customer facility in Russia",
    },
    {
      label: "21 CFR Part 11 compliance - electronic records, electronic signatures, user access control",
      href: "/services/analytics-reporting",
    },
    {
      label: "GAMP 5-aligned software lifecycle documentation",
    },
  ],
  processes: [
    "Powder Transfer - vacuum transfer, weighing, dosing, and containment interlock sequences",
    "Tablet Injector - automated feed, compression monitoring, and ejection control",
    "Isolator - differential pressure management, gloveport access interlocks, VHP integration",
    "FBD (Fluid Bed Dryer) - inlet air temperature, product temperature, and drying cycle control",
    "RMG (Rapid Mixer Granulator) - impeller/chopper speed, torque monitoring, granulation endpoint logic",
    "Comil - rotor speed, screen selection, and load monitoring",
    "AHU (Air Handling Unit) - zone pressure, temperature, humidity, and fresh-air damper control",
    "Heating & Cooling - utility loop management with setpoint tracking and alarm management",
  ],
  challenge:
    "Delivering a fully compliant, multi-process GAMP 5 automation system across 18 distributed I/O stations for an international pharmaceutical client - with FAT completed in India and commissioning executed in Russia - required tight documentation discipline, remote coordination, and a control architecture that could be validated end-to-end without on-site access during development.",
  outcome:
    "System successfully commissioned in Russia with full 21 CFR Part 11 and GAMP 5 documentation package. 910 I/O points across 18 ET200SP stations integrated into a single, unified WinCC SCADA with wireless tablet access - enabling paperless batch operations and continuous audit trail generation from day one of production.",
  ioStats: [
    { value: "118", label: "Analog Inputs" },
    { value: "240", label: "Digital Inputs" },
    { value: "496", label: "Digital Outputs" },
    { value: "56", label: "Analog Outputs" },
  ],
  snapshot: [
    { label: "End User", value: "Emynent, Russia" },
    { label: "Completion Date", value: "March 2024" },
    { label: "Delivery Scope", value: "PLC Programming | WinCC SCADA | HMI | Wireless Tablet | FAT | Site Commissioning" },
    { label: "Execution Footprint", value: "Russia (developed and tested in Ahmedabad, India)" },
  ],
  gallery: [
    {
      src: "/projects/pharmaceutical-1.jpeg",
      alt: "GAMP 5 compliant pharmaceutical automation panel with Siemens S7-1500 CPU for powder transfer system",
    },
    {
      src: "/projects/pharmaceutical-2.jpeg",
      alt: "WinCC SCADA operator screen for pharmaceutical material handling with 21 CFR Part 11 audit trail",
    },
  ],
  cta: {
    title: "Have a similar pharmaceutical automation project?",
    body:
      "We engineer GAMP 5 and 21 CFR Part 11 compliant automation for pharmaceutical manufacturers - from single-machine HMIs to integrated plant-wide WinCC SCADA systems. Share your project scope and we will prepare a technical proposal.",
  },
  faqs: [
    {
      q: "Is the pharmaceutical automation system 21 CFR Part 11 compliant?",
      a: "Yes. The Emynent project was fully engineered for 21 CFR Part 11 compliance, including electronic records, electronic signatures, and audit trail generation on WinCC SCADA.",
    },
    {
      q: "Which Siemens PLC platform was used for this pharmaceutical project?",
      a: "Siemens S7-1500 (CPU-1517-3 PN) with 18 ET200SP distributed I/O stations - a platform that fully supports GAMP 5 and 21 CFR Part 11-aligned automation.",
    },
    {
      q: "Can Hive Automation deliver pharmaceutical automation projects internationally?",
      a: "Yes. This project was engineered and tested in our Ahmedabad facility and commissioned on-site in Russia - a model we follow for international projects to minimise on-site time and risk.",
    },
  ],
};

export const projectsData: Record<string, Project> = {
  pharmaceutical: {
    title: "GAMP 5 Compliant Automation for Pharmaceutical Material Handling",
    subtitle: "WinCC Explorer & Wireless Tablet operation for Emynent, Russia",
    desc: "We delivered a fully automated control solution for a pharmaceutical powder transfer system for Emynent, Russia, through one of our OEM partners. The scope included PLC, HMI, and SCADA programming with in-house testing and on-site commissioning.\n\nThe system covered multiple integrated processes, including Powder Transfer, Tablet Injector, Isolator, FBD, RMG, Comil, AHU, and Heating & Cooling systems. The entire solution was developed in full compliance with 21 CFR Part 11, ensuring secure operations, electronic records, and audit trails suitable for regulated environments.",
    completion: "March 2024",
    endUser: "Emynent, Russia",
    scope: "Programming, Testing & Site Commissioning",
    architecture:
      "Siemens S7-1500 series CPU-1517-3 PN with 18 Nos ET200SP I/O stations, WinCC SCADA, and Wireless Tablet operation with WinCC Explorer.",
    tag: "Pharmaceutical",
    specs: {
      "Analog Inputs": "118",
      "Digital Inputs": "240",
      "Digital Outputs": "496",
      "Analog Outputs": "56",
      "Total I/O Points": "910",
    },
    gallery: ["/projects/pharmaceutical-1.jpeg", "/projects/pharmaceutical-2.jpeg"],
  },
  chemical: {
    title: "Control System Engineering for Steam Turbine Application",
    subtitle: "Redundant Siemens S7-400H control for KLJ Petroplast",
    desc: "We provided end-to-end control system engineering services for a Steam Turbine application for Siemens Energy. The project included the development and implementation of PLC, HMI, and SCADA software, ensuring seamless integration with turbine control and monitoring systems.\n\nOur scope covered detailed engineering, software development, in-house testing, and on-site commissioning for a high-reliability steam turbine control system. The architecture managed three turbine systems via a redundant Siemens S7-400H (CPU-414-5H) setup with ET200SP I/O stations, two operator stations, one engineering station, and two local HMIs - ensuring real-time control and compliance with energy sector standards.",
    completion: "October 2023",
    endUser: "Siemens Energy (End User: KLJ Petroplast, Gujarat)",
    scope: "Control System Design, PLC, HMI & SCADA Programming, Testing, and Site Commissioning",
    architecture:
      "Redundant Siemens S7-400H (CPU-414-5H) with ET200SP IO stations, WinCC SCADA, Operator & Engineering stations.",
    tag: "Chemical",
    specs: {
      "Analog Inputs": "272",
      "Digital Inputs": "320",
      "Digital Outputs": "144",
      "Analog Outputs": "52",
      "Total I/O Points": "788",
    },
    gallery: ["/projects/chemical-1.png", "/projects/chemical-6.png", "/projects/chemical-3.png", "/projects/chemical-4.png", "/projects/chemical-5.png"],
  },
  refinery: {
    title: "Control System SIL-2 Programming for Recip Compressor Application",
    subtitle: "Redundant SIL-2 Rockwell ControlLogix setup for YPF, USA",
    desc: "We delivered a complete control system automation solution for a Reciprocating Compressor application developed for Siemens Energy, with the end user being YPF, USA. This project focused on ensuring precise, safe, and efficient control of multiple compressor units in a critical process environment.\n\nOur responsibilities included end-to-end PLC, HMI, and SCADA software development, in-depth testing, and successful site commissioning. The system controlled four compressor units (Make-Up and Recycle service) using a redundant SIL-2 Rockwell ControlLogix (1756-L72) system architecture, featuring local HMIs for on-site operation.",
    completion: "October 2022",
    endUser: "Siemens Energy (End User: YPF, USA)",
    scope: "PLC, HMI & SCADA Programming | Testing | Site Commissioning",
    architecture: "Redundant SIL-2 Rockwell ControlLogix (1756-L72) with local HMIs, Rockwell FactoryTalk SCADA.",
    tag: "Refinery",
    specs: {
      "Analog Inputs": "96",
      "Digital Inputs": "112",
      "Digital Outputs": "112",
      "Analog Outputs": "16",
      "Total I/O Points": "336",
    },
  },
  "oil-gas": {
    title: "PCS7 DCS for High Pressure Air Injection Plant",
    subtitle: "Complete Siemens PCS 7 system setup with HART management for ONGC",
    desc: "We successfully delivered a comprehensive Distributed Control System (DCS) solution based on Siemens PCS7 for the High Pressure Air Injection Plant of ONGC in Ahmedabad. Our scope encompassed the complete lifecycle - from detailed engineering and procurement to manufacturing, installation, and commissioning. The advanced DCS ensures reliable automation and optimized control for critical operations in the oil and gas sector, enhancing safety, efficiency, and system responsiveness.",
    completion: "March 2025",
    endUser: "ONGC, Ahmedabad",
    scope: "Engineering, Procurement, Manufacturing, Installation, and Commissioning",
    architecture: "Siemens PCS7 DCS with three separate redundant setups on common network with 2 OS, 1 ES, and HART Management system.",
    tag: "Oil & Gas",
    specs: {
      "Analog Inputs": "264",
      "Digital Inputs": "288",
      "Digital Outputs": "218",
      "Analog Outputs": "16",
      "Total I/O Points": "786",
    },
    gallery: ["/projects/oil-1.png", "/projects/oil-2.png", "/projects/oil-3.png", "/projects/oil-4.png", "/projects/oil-5.png"],
  },
  "hydrogenation-plant": {
    title: "Automation & Control System for 100 TPD Hydrogenation Plant",
    subtitle: "End-to-end control system and panel manufacturing for Ricor Mills",
    desc: "We provided a complete automation solution for a 100TPD Hydrogenation Plant for Ricor Mills Corporation, covering the entire lifecycle from control system design and panel manufacturing to software development, testing, and on-site commissioning.\n\nOur scope also included the development of PLC logic and SCADA systems, tailored for precise control and real-time monitoring of critical hydrogenation processes. All panels were manufactured in-house to meet the highest quality and safety standards. This turnkey solution ensures reliable operation, enhanced process visibility, and optimized plant performance, aligned with the demands of modern chemical manufacturing environments.",
    completion: "October 2022",
    endUser: "Ricor Mills Corporation, Philippines",
    scope: "Control System Engineering | Panel Manufacturing | PLC, HMI & SCADA Programming | Testing | Site Commissioning",
    architecture: "Siemens S7-1500 / TIA Portal & WinCC SCADA, custom control panels manufactured in-house.",
    tag: "Chemical",
    specs: {
      "Analog Inputs": "32",
      "Digital Inputs": "112",
      "Digital Outputs": "80",
      "Analog Outputs": "12",
      "Total I/O Points": "236",
    },
  },
  "ethyl-acetate": {
    title: "Automation & Control System for 10 TPD Ethyl Acetate Plant",
    subtitle: "Redundant Siemens S7-1500 CPU setup for Egyptian Sugar & Integrated Industries",
    desc: "We delivered a fully integrated automation and control solution for a 10 TPD Ethyl Acetate Plant for Egyptian Sugar & Integrated Industries Company. The project scope spanned the entire automation lifecycle - from system design and control panel manufacturing to PLC & SCADA development, in-house testing, and site commissioning.\n\nThe automation system was built on a Siemens S7-1500 redundant CPU (CPU-1513R) platform with ET200SP I/O stations, offering precise control and real-time monitoring of key process parameters. All control panels were designed and fabricated in-house to ensure full compliance with industry standards for quality and safety. This end-to-end solution delivered robust process control, improved plant visibility, and streamlined operations - fully aligned with the high standards of modern chemical manufacturing.",
    completion: "October 2022",
    endUser: "Egyptian Sugar & Integrated Industries Company",
    scope: "Control System Engineering | Panel Manufacturing | PLC, HMI & SCADA Programming | Testing | Site Commissioning",
    architecture: "Redundant Siemens S7-1500 (CPU-1513R) with ET200SP IOs, WinCC SCADA.",
    tag: "Chemical",
    specs: {
      "Analog Inputs": "92",
      "Digital Inputs": "112",
      "Digital Outputs": "48",
      "Analog Outputs": "24",
      "Total I/O Points": "276",
    },
  },
  "asphalt-batching": {
    title: "Asphalt Batching Plant Automation System - 260 TPH",
    subtitle: "Streamlined dosing, loading and recipe control for Roads & Buildings Department",
    desc: "We developed and implemented a fully automated control system for a 260TPH Asphalt Batching Plant, designed to streamline and optimize the complete mixing process - from raw material dosing to final batch delivery.\n\nThis SCADA-based solution integrates real-time control, monitoring, and visualization for all key processes, including truck loading automation, raw aggregate dosing, burner control, and recipe management. This automation system enhances process efficiency, reduces manual errors, and ensures consistent mix quality - making it ideal for modern road construction and infrastructure projects.",
    completion: "2023",
    endUser: "R&B (Roads & Buildings Department)",
    scope: "Control System Design, PLC & SCADA Programming, Commissioning",
    architecture: "SCADA-based plant automation with real-time aggregate dosing and truck loading control.",
    tag: "Infrastructure",
    specs: {
      "Analog Inputs": "16",
      "Digital Inputs": "64",
      "Digital Outputs": "64",
      "Analog Outputs": "8",
      "Total I/O Points": "152",
    },
  },
  "retrofit-upgrade": {
    title: "Retrofit & Upgrade Solutions for Legacy Industrial Systems",
    subtitle: "Powder Handling, HMI/SCADA and Logic conversions with minimal downtime",
    desc: "Modernizing legacy automation systems is essential for ensuring long-term reliability, compliance, and performance. We offer comprehensive retrofit solutions for obsolete or aging control systems across pharmaceutical, chemical, and industrial plants.\n\nOur retrofit services involve upgrading outdated PLCs, HMIs, SCADA systems, and control panels with the latest automation platforms - while minimizing downtime and preserving critical process knowledge.\n\nOur Retrofit Scope Includes Powder Handling Technology (PHT), HMI & SCADA Upgrades (21 CFR Part 11 compliant), Control Panel Revamp, and Software Conversion.",
    completion: "Ongoing",
    endUser: "Multiple Industrial Plants (Pharma, Chemical, Industrial)",
    scope: "PLC & SCADA Upgrades, Panel Revamp, Software Conversion, Documentation & Validation",
    architecture: "Conversion of legacy Siemens S5/S7-300 or older systems to TIA Portal S7-1500 with updated electrical designs.",
    tag: "Retrofit",
    specs: {
      "Analog Inputs": "Varies (typically 50-200)",
      "Digital Inputs": "Varies (typically 100-500)",
      "Digital Outputs": "Varies (typically 100-500)",
      "Analog Outputs": "Varies (typically 20-50)",
      "Total I/O Points": "Scalable configurations",
    },
  },
};

export const relatedProjects: RelatedProject[] = [
  {
    slug: "chemical",
    tag: "Chemical",
    title: "Control System Engineering for Steam Turbine Application",
    desc: "Redundant Siemens S7-400H control system engineering for critical turbine operations.",
    image: "/projects/thumbnail-chemical.png",
  },
  {
    slug: "refinery",
    tag: "Refinery",
    title: "Control System SIL-2 Programming for Recip Compressor Application",
    desc: "Redundant SIL-2 compressor control for a high-criticality refinery environment.",
    image: "/projects/thumbnail-rotary.png",
  },
  {
    slug: "oil-gas",
    tag: "Oil & Gas",
    title: "PCS7 DCS for High Pressure Air Injection Plant",
    desc: "Complete Siemens PCS 7 deployment with HART management for ONGC.",
    image: "/projects/thumbnail-oil-gas.png",
  },
  {
    slug: "retrofit-upgrade",
    tag: "Industrial",
    title: "Retrofit & Upgrade Solutions for Legacy Industrial Systems",
    desc: "Modernization work for legacy PLC, HMI, and SCADA environments.",
    image: "/projects/thumbnail-retrofit.png",
  },
];

export type SnapshotIconKey = "factory" | "calendar" | "workflow" | "map";

export interface DetailedProjectConfig {
  slug: string;
  data: DetailedProjectData;
  snapshotIcons: SnapshotIconKey[];
}

export const detailedProjects: Record<string, DetailedProjectConfig> = {
  pharmaceutical: {
    slug: "pharmaceutical",
    data: pharmaceuticalProject,
    snapshotIcons: ["factory", "calendar", "workflow", "map"],
  },
};
