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
    articleSection?: string;
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
  schema?: object;
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

export const oilGasProject: DetailedProjectData = {
  seo: {
    title: "Siemens PCS 7 DCS for Oil & Gas — ONGC Project | Hive Automation",
    description:
      "Case study: Siemens PCS 7 DCS for ONGC High Pressure Air Injection Plant, Ahmedabad — redundant DCS, SIL-3 Fire & Gas, HART management, 786 I/O points.",
    keywords: [
      "Siemens PCS 7 DCS oil gas India",
      "ONGC automation project",
      "oil gas DCS company Ahmedabad",
      "SIL-3 fire gas detection system",
      "high pressure air injection plant automation",
      "DCS system integrator India",
    ],
    ogImage: "https://hiveautomation.in/src/img/og-project-oil-gas.jpg",
    ogImageAlt: "Siemens PCS 7 DCS project for ONGC oil and gas plant — Hive Automation",
    canonical: "https://hiveautomation.in/projects/oil-gas",
    articleSection: "Oil & Gas",
  },
  hero: {
    label: "Case Study: Oil & Gas",
    title: "Siemens PCS 7 DCS for High Pressure Air Injection Plant - ONGC, Ahmedabad",
    subtitle:
      "Full lifecycle DCS delivery - engineering, procurement, manufacturing, installation and commissioning - for ONGC's critical High Pressure Air Injection Plant using Siemens PCS 7.",
  },
  projectInformation: [
    "Hive Automation delivered a comprehensive, full-lifecycle Distributed Control System (DCS) solution based on Siemens PCS 7 for the High Pressure Air Injection Plant of ONGC in Ahmedabad.",
    "Our scope covered the complete project lifecycle - detailed engineering, procurement, manufacturing, installation, and commissioning - making this a true single-source, end-to-end turnkey delivery for one of India's most critical oil and gas operators.",
    "The system architecture was designed for maximum reliability and safety, incorporating three separate redundant control setups on a common plant network, two Operator Stations (OS), one Engineering Station (ES), and a dedicated HART Asset Management System for field device diagnostics and calibration management.",
  ],
  architecture: [
    "Siemens PCS 7 with three separate redundant DCS setups on a common Profinet network: Compressor Control System, Process Control System, and SIL-3-rated Fire & Gas Detection System.",
    "Plant network architecture included 2 Operator Stations (OS) and 1 Engineering Station (ES) for centralised monitoring, engineering access, and process visibility.",
    "A dedicated HART Management System was integrated for field instrument lifecycle management, remote diagnostics, calibration tracking, and predictive maintenance support.",
  ],
  scope: [
    {
      label: "Detailed engineering - P&ID review, control narrative, FDS, and instrument loop documentation",
      href: "/services/distributed-control-systems",
    },
    {
      label: "Procurement - Siemens PCS 7 hardware, field instruments, and panel components",
      href: "/services/turnkey-project-execution",
    },
    {
      label: "Panel manufacturing - in-house fabrication of DCS cabinets, marshalling panels, and junction boxes",
      href: "/services/turnkey-project-execution",
    },
    {
      label: "Compressor Control System - PCS 7 configuration for reciprocating and centrifugal compressor unit control",
      href: "/services/distributed-control-systems",
    },
    {
      label: "Process Control System - full plant process variables, interlock logic, and process SCADA graphics",
      href: "/services/distributed-control-systems",
    },
    {
      label: "SIL-3 Fire & Gas Detection System - gas detectors, flame detectors, and ESD integration",
      href: "/services/industrial-networking-cybersecurity",
    },
    {
      label: "HART Management System - field device diagnostics, calibration management, and asset health monitoring",
      href: "/services/industrial-networking-cybersecurity",
    },
    {
      label: "Factory Acceptance Testing (FAT) of the complete integrated system",
    },
    {
      label: "On-site installation, loop checking, and commissioning at ONGC Ahmedabad",
      href: "/services/turnkey-project-execution",
    },
  ],
  processes: [
    "Compressor Control System - redundant controllers managing injection compressor train sequences, anti-surge control, and vibration monitoring.",
    "Process Control System - plant-wide process variables, flow, pressure, temperature, and utilities automation.",
    "SIL-3 Fire & Gas Detection System - certified SIL-3 logic solver with mapped fire and gas sensor coverage zones, voting logic, and ESD activation.",
    "HART Management System - connected to HART-capable field instruments for remote calibration, diagnostics, and predictive maintenance alerts.",
  ],
  challenge:
    "Designing and delivering a SIL-3-rated, triple-redundant DCS for a live oil and gas operator like ONGC required certified functional safety engineering, rigorous FAT documentation, and precise coordination between mechanical, electrical, and process engineering teams - all executed under a fixed project schedule.",
  outcome:
    "Full system commissioned at ONGC Ahmedabad in March 2025. Three redundant DCS subsystems - compressor, process, and fire and gas - were integrated on a common PCS 7 network with HART management, delivering real-time plant visibility and SIL-3 safety coverage from day one.",
  ioStats: [
    { value: "264", label: "Analog Inputs" },
    { value: "288", label: "Digital Inputs" },
    { value: "218", label: "Digital Outputs" },
    { value: "16", label: "Analog Outputs" },
  ],
  snapshot: [
    { label: "Project Name", value: "PCS 7 DCS for High Pressure Air Injection Plant" },
    { label: "Completion Date", value: "March 2025" },
    { label: "Scope of Work", value: "Engineering | Procurement | Manufacturing | Installation | Commissioning" },
    { label: "Location", value: "Ahmedabad, Gujarat, India" },
  ],
  gallery: [
    {
      src: "/projects/oil-1.png",
      alt: "Siemens PCS 7 DCS compressor control system cabinet for ONGC high pressure air injection plant",
    },
    {
      src: "/projects/oil-2.png",
      alt: "SIL-3 fire and gas detection system panel for ONGC oil and gas plant Ahmedabad",
    },
    {
      src: "/projects/oil-3.png",
      alt: "ONGC oil and gas DCS process control SCADA operator workstation",
    },
    {
      src: "/projects/oil-4.png",
      alt: "HART asset management system display for field instrument diagnostics - ONGC project",
    },
    {
      src: "/projects/oil-5.png",
      alt: "Siemens PCS 7 DCS engineering station and plant network topology for ONGC",
    },
  ],
  cta: {
    title: "Have a similar oil & gas automation project?",
    body:
      "We engineer full-lifecycle DCS and safety systems for oil and gas operators - from control narrative and FAT to SIL-rated fire and gas and HART management. Share your project scope for a technical proposal.",
  },
  faqs: [
    {
      q: "Has Hive Automation delivered DCS projects for ONGC?",
      a: "Yes. We delivered the complete Siemens PCS 7 DCS - including compressor control, process control, SIL-3 fire and gas, and HART management - for ONGC's High Pressure Air Injection Plant in Ahmedabad, commissioned in March 2025.",
    },
    {
      q: "What is a SIL-3 Fire & Gas Detection System?",
      a: "SIL-3 (Safety Integrity Level 3) is the highest achievable safety rating under IEC 61511 for process industries. A SIL-3 Fire and Gas system means the safety function - detecting fire or gas release and triggering ESD - operates with a probability of failure on demand between 10^-4 and 10^-3, meeting demanding oil and gas safety specifications.",
    },
    {
      q: "Can Hive Automation do full turnkey DCS delivery including procurement and panel manufacturing?",
      a: "Yes. The ONGC project was a full turnkey DCS delivery: we handled engineering, procurement, in-house panel manufacturing, installation, and commissioning as a single accountable partner.",
    },
  ],
  schema: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        headline: "Siemens PCS 7 DCS for ONGC High Pressure Air Injection Plant — Hive Automation",
        description: "Full-lifecycle Siemens PCS 7 DCS delivery for ONGC Ahmedabad: redundant compressor control, process control, SIL-3 fire & gas, HART management, 786 I/O points — commissioned March 2025.",
        url: "https://hiveautomation.in/projects/oil-gas",
        image: "https://hiveautomation.in/src/img/oil-1.png",
        datePublished: "2025-03-31",
        author: { "@type": "Organization", name: "Hive Automation", url: "https://hiveautomation.in/" },
        publisher: {
          "@type": "Organization",
          name: "Hive Automation",
          url: "https://hiveautomation.in/",
          logo: { "@type": "ImageObject", url: "https://hiveautomation.in/src/img/header-logo.png" },
        },
        keywords: "Siemens PCS 7, DCS, ONGC, oil gas automation, SIL-3, HART management, Ahmedabad",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hiveautomation.in/" },
          { "@type": "ListItem", position: 2, name: "Our Projects", item: "https://hiveautomation.in/our-projects" },
          { "@type": "ListItem", position: 3, name: "Oil & Gas", item: "https://hiveautomation.in/projects/oil-gas" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Has Hive Automation delivered DCS projects for ONGC?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We delivered the complete Siemens PCS 7 DCS for ONGC's High Pressure Air Injection Plant in Ahmedabad, commissioned March 2025.",
            },
          },
          {
            "@type": "Question",
            name: "Can Hive Automation do full turnkey DCS delivery?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The ONGC project was a full turnkey DCS delivery covering engineering, procurement, in-house panel manufacturing, installation, and commissioning.",
            },
          },
        ],
      },
    ],
  },
};

export const chemicalProject: DetailedProjectData = {
  seo: {
    title: "Steam Turbine Control System — Siemens S7-400H | Hive Automation",
    description:
      "Case study: Redundant Siemens S7-400H PLC for steam turbine control for Siemens Energy / KLJ Petroplast Gujarat — 788 I/O, WinCC SCADA, 3 turbines, wireless tablet HMI.",
    keywords: [
      "steam turbine control system PLC",
      "Siemens S7-400H redundant PLC",
      "chemical plant automation India",
      "steam turbine SCADA",
      "Siemens Energy automation project",
      "turbine control engineering company",
    ],
    ogImage: "https://hiveautomation.in/src/img/og-project-chemical.jpg",
    ogImageAlt: "Siemens S7-400H redundant PLC steam turbine control system — Hive Automation",
    canonical: "https://hiveautomation.in/projects/chemical",
    articleSection: "Chemical",
  },
  hero: {
    label: "Case Study: Chemical / Energy",
    title: "Control System Engineering for Steam Turbine Application - Siemens S7-400H Redundant PLC",
    subtitle:
      "End-to-end PLC, HMI, and SCADA engineering for a high-reliability 3-turbine steam control system - delivered for Siemens Energy with end user KLJ Petroplast, Gujarat.",
  },
  projectInformation: [
    "Hive Automation provided complete control system engineering services for a Steam Turbine application for Siemens Energy, with end user KLJ Petroplast, Gujarat.",
    "The scope covered detailed engineering, PLC and SCADA software development, in-house Factory Acceptance Testing, and on-site commissioning for a high-reliability steam turbine control system managing three turbine units.",
    "The architecture was built on a redundant Siemens S7-400H (CPU-414-5H) platform with ET200SP distributed I/O stations - ensuring zero unplanned production stops through CPU redundancy and hot-standby switchover.",
    "The plant network featured two Operator Stations, one Engineering Station, and two local HMIs at the turbine floor, enabling both centralised SCADA oversight and local operator control.",
  ],
  architecture: [
    "Siemens S7-400H redundant PLC (CPU-414-5H) with 18 ET200SP Remote I/O stations controlling three turbine systems from one unified architecture.",
    "WinCC SCADA deployment with 2 Operator Stations (OS) and 1 Engineering Station (ES) for trends, alarms, event history, and central supervisory control.",
    "Two local Siemens KTP-series HMI panels at the turbine floor, plus wireless tablet operation for roving operator access across the plant.",
  ],
  scope: [
    {
      label: "Control system architecture design - redundancy philosophy, network topology, panel GA and wiring drawings",
      href: "/services/turnkey-project-execution",
    },
    {
      label: "PLC programming - Siemens S7-400H ladder, FBD, and SCL logic for 3-turbine control",
      href: "/services/plc-programming-integration",
    },
    {
      label: "HMI development - Siemens panel HMI screens for local turbine floor operation",
      href: "/services/scada-hmi-development",
    },
    {
      label: "SCADA development and integration - WinCC (2 OS + 1 ES) with turbine trend, alarm, and event reporting",
      href: "/services/scada-hmi-development",
    },
    {
      label: "In-house Factory Acceptance Testing (FAT) of complete integrated system",
    },
    {
      label: "On-site commissioning at KLJ Petroplast, Gujarat",
      href: "/services/turnkey-project-execution",
    },
  ],
  processes: [
    "Steam turbine governor control for three turbine units under one unified redundant PLC architecture.",
    "Anti-surge, speed control, lube oil, seal gas, and vibration monitoring sequences integrated into plant-wide control logic.",
    "Central WinCC SCADA supervision with local HMI operation for turbine floor control and troubleshooting.",
    "Redundant CPU hot-standby switchover strategy for continuous operation in energy-critical service.",
  ],
  challenge:
    "Controlling three separate turbine units - each with its own speed governor, anti-surge, lube oil, seal gas, and vibration monitoring sequences - from a single, unified redundant PLC architecture required precise control logic partitioning and thorough FAT to validate all permissive, interlock, and shutdown sequences before going live.",
  outcome:
    "Three-turbine steam control system successfully commissioned at KLJ Petroplast Gujarat in October 2023. The redundant S7-400H architecture delivered continuous operation, while WinCC SCADA provided full process visibility and event history across 788 I/O points.",
  ioStats: [
    { value: "272", label: "Analog Inputs" },
    { value: "320", label: "Digital Inputs" },
    { value: "144", label: "Digital Outputs" },
    { value: "52", label: "Analog Outputs" },
  ],
  snapshot: [
    { label: "Project Name", value: "Control System Engineering for Steam Turbine Application" },
    { label: "Completion Date", value: "October 2023" },
    { label: "Scope of Work", value: "Control System Design | PLC, HMI & SCADA Programming | Testing | Site Commissioning" },
    { label: "Location", value: "Gujarat, India" },
  ],
  gallery: [
    {
      src: "/projects/chemical-1.png",
      alt: "Siemens S7-400H redundant PLC cabinet for steam turbine control system at KLJ Petroplast",
    },
    {
      src: "/projects/chemical-6.png",
      alt: "WinCC SCADA operator station with turbine process graphics for chemical energy plant",
    },
    {
      src: "/projects/chemical-3.png",
      alt: "ET200SP remote I/O field cabinet for steam turbine distributed control",
    },
    {
      src: "/projects/chemical-4.png",
      alt: "Siemens HMI panel at turbine floor for local steam turbine operation",
    },
    {
      src: "/projects/chemical-5.png",
      alt: "Wireless tablet operator interface for roving access to turbine control system",
    },
  ],
  cta: {
    title: "Have a similar chemical automation project?",
    body:
      "We engineer redundant PLC and SCADA systems for turbines, compressors, and continuous process plant applications - for energy sector OEMs and end users across India. Contact us with your scope for a technical assessment.",
  },
  faqs: [
    {
      q: "Has Hive Automation worked with Siemens Energy as a project partner?",
      a: "Yes. We provided complete control system engineering services for a Steam Turbine application for Siemens Energy, with end user KLJ Petroplast, Gujarat - completed in October 2023.",
    },
    {
      q: "Why is a redundant PLC used for steam turbine control?",
      a: "Steam turbine control is safety-critical and must be continuous. The Siemens S7-400H provides hot-standby redundancy with millisecond switchover on CPU failure, preventing turbine trip and protecting production from unplanned downtime.",
    },
    {
      q: "Can you control multiple turbines from a single PLC architecture?",
      a: "Yes. This project controlled three steam turbine units from one unified Siemens S7-400H redundant PLC architecture with WinCC SCADA, using logical partitioning within Step 7 and ET200SP distributed I/O at each turbine skid.",
    },
  ],
  schema: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        headline: "Siemens S7-400H Redundant PLC for Steam Turbine Control — Siemens Energy / KLJ Petroplast",
        description: "Control system engineering for 3-turbine steam application: Siemens S7-400H redundant PLC, WinCC SCADA, 2 OS + 1 ES, wireless tablet HMI, 788 I/O points — commissioned October 2023.",
        url: "https://hiveautomation.in/projects/chemical",
        image: "https://hiveautomation.in/src/img/chemical-1.png",
        datePublished: "2023-10-31",
        author: { "@type": "Organization", name: "Hive Automation", url: "https://hiveautomation.in/" },
        publisher: {
          "@type": "Organization",
          name: "Hive Automation",
          url: "https://hiveautomation.in/",
          logo: { "@type": "ImageObject", url: "https://hiveautomation.in/src/img/header-logo.png" },
        },
        keywords: "Siemens S7-400H, redundant PLC, steam turbine control, WinCC SCADA, chemical plant automation, Siemens Energy",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hiveautomation.in/" },
          { "@type": "ListItem", position: 2, name: "Our Projects", item: "https://hiveautomation.in/our-projects" },
          { "@type": "ListItem", position: 3, name: "Chemical", item: "https://hiveautomation.in/projects/chemical" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Has Hive Automation worked with Siemens Energy?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We provided complete control system engineering for a Steam Turbine application for Siemens Energy with end user KLJ Petroplast, Gujarat, completed October 2023.",
            },
          },
          {
            "@type": "Question",
            name: "Why is redundant PLC used for steam turbine control?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Steam turbine control is safety-critical and continuous. The Siemens S7-400H provides hot-standby redundancy with millisecond switchover on CPU failure, preventing turbine trip.",
            },
          },
        ],
      },
    ],
  },
};

export const refineryProject: DetailedProjectData = {
  seo: {
    title: "SIL-2 Reciprocating Compressor Control — Rockwell ControlLogix | Hive Automation",
    description:
      "Case study: SIL-2 redundant Rockwell ControlLogix PLC for 4 reciprocating compressors — Siemens Energy / YPF USA. PLC, HMI, SCADA programming & commissioning.",
    keywords: [
      "SIL-2 compressor control system",
      "Rockwell ControlLogix redundant PLC",
      "reciprocating compressor automation",
      "compressor control programming India",
      "safety PLC for oil gas compressor",
      "anti-surge compressor control",
    ],
    ogImage: "https://hiveautomation.in/src/img/og-project-rotary-equipment.jpg",
    ogImageAlt: "SIL-2 Rockwell ControlLogix compressor control system — Hive Automation",
    canonical: "https://hiveautomation.in/projects/refinery",
    articleSection: "Rotary Equipment Control",
  },
  hero: {
    label: "Case Study: Rotary Equipment Control",
    title: "SIL-2 Compressor Control System for Reciprocating Compressor Application - Rockwell ControlLogix",
    subtitle:
      "SIL-2 rated PLC and SCADA solution for 4 reciprocating compressor units - Make-Up and Recycle service - delivered for Siemens Energy with end user YPF, USA.",
  },
  projectInformation: [
    "Hive Automation delivered a complete, SIL-2 rated control system automation solution for a Reciprocating Compressor application developed for Siemens Energy, with end user YPF, USA.",
    "This project focused on ensuring precise, safe, and efficient control of four compressor units - two Make-Up service and two Recycle service - in a critical process environment.",
    "Our scope covered end-to-end PLC, HMI, and SCADA software development, rigorous in-house testing, and successful site commissioning.",
    "The system was built on a redundant SIL-2 Rockwell ControlLogix (1756-L72) architecture - providing hot-standby CPU redundancy, redundant I/O for critical signals, IPC-based operator workstations, and local HMIs at each compressor unit for on-site operation.",
  ],
  architecture: [
    "Redundant SIL-2 Rockwell ControlLogix (CPU 1756-L72) with redundant I/O stations for critical safety signals across all four compressor units.",
    "IPC-based operator workstations in the centralised control room, with FactoryTalk View used for SCADA and HMI development and plant-wide supervision.",
    "Local HMIs at each of the four compressor units with Studio 5000 Logix Designer used for PLC programming, sequencing, interlocks, and shutdown logic.",
  ],
  scope: [
    {
      label: "Control system architecture design - SIL-2 redundancy scheme, panel GA, and wiring drawings",
      href: "/services/plc-programming-integration",
    },
    {
      label: "PLC programming - Rockwell ControlLogix (Studio 5000) for all 4 compressor unit sequences",
      href: "/services/plc-programming-integration",
    },
    {
      label: "HMI development - local panel HMIs for on-site compressor operation",
      href: "/services/scada-hmi-development",
    },
    {
      label: "SCADA integration and deployment - FactoryTalk View centralised monitoring for all 4 units",
      href: "/services/scada-hmi-development",
    },
    {
      label: "In-house Factory Acceptance Testing (FAT) and SIL verification activities",
    },
    {
      label: "On-site commissioning at the USA facility",
      href: "/services/turnkey-project-execution",
    },
  ],
  processes: [
    "Four reciprocating compressor units under one unified SIL-2 control architecture for Make-Up and Recycle service.",
    "Safety-critical functions including vibration trip, high-pressure shutdown, lube oil low-pressure, and ESD with cause-and-effect matrix programming and bypass management.",
    "Anti-surge sequences, startup permissives, shutdown logic, and alarm handling validated through FAT and SIL verification activities.",
    "Centralised SCADA visibility with local HMI panels at each compressor unit for on-site operation and diagnostics.",
  ],
  challenge:
    "Engineering a unified SIL-2 control system for four independent compressor units - each with its own startup permissives, anti-surge sequences, vibration monitoring, and ESD logic - required careful cause-and-effect documentation, SIL verification, and a FAT that validated all shutdown functions against the safety requirements specification.",
  outcome:
    "SIL-2 Rockwell ControlLogix compressor control system successfully commissioned for YPF, USA, in October 2022. All four compressor units - Make-Up and Recycle service - now operate under unified centralised SCADA with local HMI panels at each unit.",
  ioStats: [
    { value: "96", label: "AI (per unit)" },
    { value: "112", label: "DI (per unit)" },
    { value: "112", label: "DO (per unit)" },
    { value: "16", label: "AO (per unit)" },
  ],
  snapshot: [
    { label: "Project Name", value: "Control System SIL-2 Programming for Reciprocating Compressor Application" },
    { label: "Completion Date", value: "October 2022" },
    { label: "Scope of Work", value: "PLC | HMI | SCADA Programming | Testing | Site Commissioning" },
    { label: "Location", value: "USA (engineered and tested in Ahmedabad, India)" },
  ],
  gallery: [
    {
      src: "/projects/refinery-1.png",
      alt: "Rockwell ControlLogix SIL-2 compressor control system panel - Hive Automation",
    },
    {
      src: "/projects/refinery-2.png",
      alt: "Reciprocating compressor control SCADA operator workstation with process graphics",
    },
    {
      src: "/projects/refinery-3.png",
      alt: "Field instrumentation and junction box wiring for compressor control system",
    },
    {
      src: "/projects/refinery-4.png",
      alt: "SIL-2 safety instrumented system logic solver panel for compressor ESD",
    },
    {
      src: "/projects/refinery-5.png",
      alt: "Compressor control SCADA trends and alarm management - FactoryTalk View",
    },
  ],
  cta: {
    title: "Have a similar rotary equipment control automation project?",
    body:
      "We engineer SIL-rated compressor and rotating equipment control systems for oil and gas and refinery applications - using Rockwell ControlLogix and Siemens platforms. Contact us with your compressor specifications for a technical proposal.",
  },
  faqs: [
    {
      q: "What is a SIL-2 compressor control system?",
      a: "SIL-2 (Safety Integrity Level 2) means the safety functions within the control system - such as high-pressure shutdown, vibration trip, and ESD activation - achieve a Probability of Failure on Demand between 10^-3 and 10^-2, as defined by IEC 61511 and IEC 62061. It requires redundant hardware, verified logic, and documented SIL assessment.",
    },
    {
      q: "Does Hive Automation work with Rockwell Allen-Bradley PLC platforms?",
      a: "Yes. We program Rockwell ControlLogix and CompactLogix platforms using Studio 5000 Logix Designer, in addition to our Siemens S7 platform expertise.",
    },
    {
      q: "Can you handle compressor control projects for international end users?",
      a: "Yes. This project was engineered and tested in Ahmedabad and commissioned on-site in the USA for YPF - one of several international compressor and rotating equipment projects we have delivered through OEM partners.",
    },
  ],
  schema: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        headline: "SIL-2 Reciprocating Compressor Control — Rockwell ControlLogix — Siemens Energy / YPF USA",
        description: "SIL-2 Rockwell ControlLogix redundant PLC for 4 reciprocating compressors (Make-Up and Recycle service) for YPF USA via Siemens Energy — commissioned October 2022.",
        url: "https://hiveautomation.in/projects/refinery",
        image: "https://hiveautomation.in/src/img/refinery-1.png",
        datePublished: "2022-10-31",
        author: { "@type": "Organization", name: "Hive Automation", url: "https://hiveautomation.in/" },
        publisher: {
          "@type": "Organization",
          name: "Hive Automation",
          url: "https://hiveautomation.in/",
          logo: { "@type": "ImageObject", url: "https://hiveautomation.in/src/img/header-logo.png" },
        },
        keywords: "SIL-2 compressor control, Rockwell ControlLogix, reciprocating compressor, SCADA, oil gas automation",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hiveautomation.in/" },
          { "@type": "ListItem", position: 2, name: "Our Projects", item: "https://hiveautomation.in/our-projects" },
          { "@type": "ListItem", position: 3, name: "Rotary Equipment Control", item: "https://hiveautomation.in/projects/refinery" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Does Hive Automation work with Rockwell Allen-Bradley PLCs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We program Rockwell ControlLogix and CompactLogix platforms using Studio 5000 Logix Designer.",
            },
          },
          {
            "@type": "Question",
            name: "What is a SIL-2 compressor control system?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "SIL-2 means the safety functions achieve a PFD between 10^-3 and 10^-2 per IEC 61511, requiring redundant hardware and verified safety logic.",
            },
          },
        ],
      },
    ],
  },
};

export const hydrogenationPlantProject: DetailedProjectData = {
  seo: {
    title: "100 TPD Hydrogenation Plant Automation — Turnkey | Hive Automation",
    description:
      "Case study: Turnkey automation for 100 TPD hydrogenation plant — Ricor Mills Philippines. In-house MCC control panel, PLC SCADA, 236 I/O, site commissioning.",
    keywords: [
      "hydrogenation plant automation",
      "chemical plant PLC SCADA turnkey",
      "100 TPD hydrogenation control system",
      "vegetable oil hydrogenation automation",
      "MCC control panel manufacturing India",
      "chemical plant automation company",
    ],
    ogImage: "https://hiveautomation.in/src/img/og-project-hydrogenation.jpg",
    ogImageAlt: "100 TPD hydrogenation plant turnkey automation — Hive Automation",
    canonical: "https://hiveautomation.in/projects/hydrogenation-plant",
    articleSection: "Chemical / Process",
  },
  hero: {
    label: "Case Study: Chemical / Process - Hydrogenation",
    title: "Turnkey Automation for 100 TPD Hydrogenation Plant - PLC, SCADA & Panel Manufacturing",
    subtitle:
      "Complete turnkey automation - control system engineering, in-house MCC panel manufacturing, PLC logic, SCADA deployment, and site commissioning - for a 100 TPD hydrogenation plant in the Philippines.",
  },
  projectInformation: [
    "Hive Automation provided a complete, turnkey automation and control solution for a 100 TPD Hydrogenation Plant for Ricor Mills Corporation, Philippines - covering the entire project lifecycle from control system design and in-house panel manufacturing to PLC and SCADA software development, testing, and on-site commissioning at the Philippines facility.",
    "The hydrogenation process involves continuous reactor temperature and pressure control, hydrogen feed management, catalyst monitoring, and emergency shutdown - all of which were integrated into a unified PLC and SCADA system.",
    "All MCC cum Control Panels were designed and manufactured entirely in-house at our Ahmedabad facility to ensure quality compliance and faster delivery timelines.",
  ],
  architecture: [
    "Siemens S7-1200 / S7-1500 series PLC platform with distributed I/O selected for continuous process control, interlocks, and plant-wide integration.",
    "SCADA system for real-time process monitoring, operator control, alarm handling, and trend logging across the hydrogenation process.",
    "In-house manufactured MCC Cum Control Panel combining motor starters, protection relays, power distribution, and field terminations in a single fabricated enclosure.",
  ],
  scope: [
    {
      label: "Control system design - P&ID review, control philosophy, instrument list, and I/O schedule",
      href: "/services/turnkey-project-execution",
    },
    {
      label: "In-house MCC Cum Control Panel manufacturing - motor control, protection, and power distribution in a single fabricated panel",
      href: "/services/turnkey-project-execution",
    },
    {
      label: "PLC programming - sequence logic, temperature and pressure control loops, interlock and ESD logic",
      href: "/services/plc-programming-integration",
    },
    {
      label: "SCADA system deployment - real-time process monitoring, alarm management, and trend logging",
      href: "/services/scada-hmi-development",
    },
    {
      label: "In-house Factory Acceptance Testing (FAT) of complete system",
    },
    {
      label: "On-site commissioning at Ricor Mills, Philippines",
      href: "/services/turnkey-project-execution",
    },
  ],
  processes: [
    "Reactor temperature and pressure control with cascaded PID loops and high-pressure shutdown interlocks.",
    "Hydrogen feed control with mass flow and pressure regulation plus emergency isolation logic.",
    "Catalyst bed monitoring with temperature profile logging across multiple bed thermocouples.",
    "Cooling and heating utility control with heat exchanger management and utility flow control.",
    "Motor and pump sequences with automated start and stop logic plus motor protection monitoring.",
    "ESD and safety interlock logic covering process high-high trips and equipment protection sequences.",
  ],
  challenge:
    "Delivering a turnkey automation solution - including in-house panel manufacturing - for an international client in the Philippines required tight engineering documentation, rigorous FAT, and careful packaging and logistics for panel shipment before site commissioning.",
  outcome:
    "The 100 TPD Hydrogenation Plant was commissioned at Ricor Mills Philippines in October 2022. Full turnkey delivery - from control system design to in-house panel manufacturing, PLC and SCADA programming, and on-site commissioning - was completed on schedule.",
  ioStats: [
    { value: "32", label: "Analog Inputs" },
    { value: "112", label: "Digital Inputs" },
    { value: "80", label: "Digital Outputs" },
    { value: "12", label: "Analog Outputs" },
  ],
  snapshot: [
    { label: "Project Name", value: "Automation & Control System for 100 TPD Hydrogenation Plant" },
    { label: "Completion Date", value: "October 2022" },
    { label: "Scope of Work", value: "Control System Engineering | Panel Manufacturing | PLC, HMI & SCADA Programming | Testing | Site Commissioning" },
    { label: "Location", value: "Philippines (engineered and manufactured in Ahmedabad, India)" },
  ],
  gallery: [
    {
      src: "/projects/hydrogen-1.png",
      alt: "PLC control system panel for 100 TPD hydrogenation plant - Hive Automation Ahmedabad",
    },
    {
      src: "/projects/hydrogen-2.png",
      alt: "SCADA process monitoring screen for hydrogenation reactor temperature and pressure",
    },
    {
      src: "/projects/hydrogen-3.png",
      alt: "In-house manufactured MCC cum control panel for hydrogenation plant automation",
    },
    {
      src: "/projects/hydrogen-4.png",
      alt: "PLC cabinet interior showing Siemens hardware for hydrogenation plant control",
    },
    {
      src: "/projects/hydrogen-5.png",
      alt: "HMI operator interface and recipe control screen for hydrogenation plant",
    },
    {
      src: "/projects/hydrogen-6.png",
      alt: "On-site commissioning of hydrogenation plant automation at Ricor Mills Philippines",
    },
    {
      src: "/projects/hydrogen-7.png",
      alt: "Field instrumentation and wiring for hydrogenation plant process control",
    },
    {
      src: "/projects/hydrogen-8.png",
      alt: "Process safety interlock and ESD automation for hydrogenation reactor system",
    },
  ],
  cta: {
    title: "Have a similar chemical / process automation project?",
    body:
      "We deliver turnkey automation - including in-house control panel manufacturing - for chemical process plants internationally. Tell us your plant capacity and process requirements for a project proposal.",
  },
  faqs: [
    {
      q: "Can Hive Automation manufacture control panels in-house?",
      a: "Yes. We design and fabricate MCC Cum Control Panels entirely in-house at our Ahmedabad facility - from motor control and protection to power distribution and field termination - ensuring quality control and faster delivery for turnkey projects.",
    },
    {
      q: "Do you handle chemical process plant automation internationally?",
      a: "Yes. The Ricor Mills hydrogenation plant project was engineered, manufactured, and tested in Ahmedabad and commissioned on-site in the Philippines - we regularly deliver international projects through this model.",
    },
    {
      q: "What PLC platform is used for hydrogenation plant control?",
      a: "We selected Siemens S7-1200 / S7-1500 series for this project, providing the combination of processing performance, distributed I/O flexibility, and SCADA integration capability suited for a continuous chemical process plant.",
    },
  ],
  schema: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        headline: "Turnkey Automation for 100 TPD Hydrogenation Plant — Ricor Mills Philippines",
        description: "Turnkey automation delivery for 100 TPD hydrogenation plant: in-house MCC panel manufacturing, PLC SCADA programming, 236 I/O, site commissioning Philippines — October 2022.",
        url: "https://hiveautomation.in/projects/hydrogenation-plant",
        image: "https://hiveautomation.in/src/img/hydrogen-1.png",
        datePublished: "2022-10-31",
        author: { "@type": "Organization", name: "Hive Automation", url: "https://hiveautomation.in/" },
        publisher: {
          "@type": "Organization",
          name: "Hive Automation",
          url: "https://hiveautomation.in/",
          logo: { "@type": "ImageObject", url: "https://hiveautomation.in/src/img/header-logo.png" },
        },
        keywords: "hydrogenation plant automation, turnkey chemical plant, MCC panel manufacturing, PLC SCADA, Ahmedabad India",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hiveautomation.in/" },
          { "@type": "ListItem", position: 2, name: "Our Projects", item: "https://hiveautomation.in/our-projects" },
          { "@type": "ListItem", position: 3, name: "Hydrogenation Plant", item: "https://hiveautomation.in/projects/hydrogenation-plant" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can Hive Automation manufacture control panels in-house?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We design and fabricate MCC Cum Control Panels entirely in-house at our Ahmedabad facility.",
            },
          },
          {
            "@type": "Question",
            name: "Do you handle international chemical plant automation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The Ricor Mills project was engineered in Ahmedabad and commissioned in the Philippines — we regularly deliver international turnkey projects.",
            },
          },
        ],
      },
    ],
  },
};

export const ethylAcetateProject: DetailedProjectData = {
  seo: {
    title: "10 TPD Ethyl Acetate Plant Automation — Siemens S7-1500 | Hive Automation",
    description:
      "Case study: Turnkey automation for 10 TPD ethyl acetate plant — Egyptian Sugar Industries. Siemens S7-1500R redundant CPU, 276 I/O, panel manufacturing, site commissioning.",
    keywords: [
      "ethyl acetate plant automation",
      "chemical plant PLC SCADA",
      "Siemens S7-1500 redundant CPU chemical process",
      "esterification plant control system",
      "solvent plant automation India",
      "chemical process automation company",
    ],
    ogImage: "https://hiveautomation.in/src/img/og-project-ethyl-acetate.jpg",
    ogImageAlt: "10 TPD ethyl acetate plant automation — Hive Automation",
    canonical: "https://hiveautomation.in/projects/ethyl-acetate",
    articleSection: "Chemical / Process",
  },
  hero: {
    label: "Case Study: Chemical / Process - Ethyl Acetate",
    title: "Turnkey Automation for 10 TPD Ethyl Acetate Plant - Siemens S7-1500 Redundant PLC",
    subtitle:
      "Full lifecycle automation - Siemens S7-1500 redundant CPU, in-house panel manufacturing, and SCADA deployment - for a 10 TPD ethyl acetate esterification plant delivered for Egyptian Sugar & Integrated Industries.",
  },
  projectInformation: [
    "Hive Automation delivered a fully integrated, turnkey automation and control solution for a 10 TPD Ethyl Acetate Plant for Egyptian Sugar & Integrated Industries Company.",
    "The project scope spanned the complete automation lifecycle - from control system engineering and in-house panel manufacturing to PLC and SCADA development, rigorous Factory Acceptance Testing, and site commissioning in Egypt.",
    "The automation system was built on a Siemens S7-1500 redundant CPU (CPU-1513R) platform with ET200SP I/O stations - providing process reliability through CPU redundancy for continuous production without single-point-of-failure risk.",
    "All control panels were designed and fabricated in-house at our Ahmedabad facility to full industry quality and safety standards before shipment.",
  ],
  architecture: [
    "Siemens S7-1500 redundant CPU (CPU-1513R) with ET200SP distributed I/O stations for reliable continuous process control and fault-tolerant operation.",
    "SCADA system for real-time process monitoring and control, including alarm management, data logging, and trend reporting across the esterification plant.",
    "In-house manufactured control panels with all electrical panels designed, fabricated, and FAT-tested in Ahmedabad before export to Egypt.",
  ],
  scope: [
    {
      label: "Control system engineering - P&ID review, I/O schedule, control philosophy, and FDS documentation",
      href: "/services/turnkey-project-execution",
    },
    {
      label: "In-house control panel manufacturing - fabrication of main control panel and MCC",
      href: "/services/turnkey-project-execution",
    },
    {
      label: "PLC programming - Siemens S7-1500 (TIA Portal) process logic, PID loops, and safety interlocks",
      href: "/services/plc-programming-integration",
    },
    {
      label: "SCADA system implementation - process mimics, alarm management, data logging, and trend reporting",
      href: "/services/scada-hmi-development",
    },
    {
      label: "In-house Factory Acceptance Testing (FAT) of full system before export",
    },
    {
      label: "On-site commissioning at Egyptian Sugar & Integrated Industries facility",
      href: "/services/turnkey-project-execution",
    },
  ],
  processes: [
    "Reactor feed flow control for ethanol and acetic acid feed rates using PID-regulated process control loops.",
    "Reactor temperature and pressure control with condensate return management for stable esterification performance.",
    "Distillation column control including column pressure, reflux ratio, and product purity control loops.",
    "Recovery section automation for solvent recovery and product purification sequences.",
    "Tank farm and utilities management covering feed storage levels, pump sequences, and utility coordination.",
    "Safety interlocks for high-temperature, high-pressure, and loss-of-flow emergency shutdown conditions.",
  ],
  challenge:
    "Engineering and manufacturing the complete control system in Ahmedabad for a chemical plant being built in Egypt required precise project documentation, export-ready panel manufacturing standards, and a thorough FAT protocol that could substitute for limited on-site development access.",
  outcome:
    "The 10 TPD Ethyl Acetate Plant was commissioned for Egyptian Sugar & Integrated Industries in October 2022. The redundant Siemens S7-1500 architecture with in-house manufactured panels enabled full turnkey delivery across 276 I/O points.",
  ioStats: [
    { value: "92", label: "Analog Inputs" },
    { value: "112", label: "Digital Inputs" },
    { value: "48", label: "Digital Outputs" },
    { value: "24", label: "Analog Outputs" },
  ],
  snapshot: [
    { label: "Project Name", value: "Automation & Control System for 10 TPD Ethyl Acetate Plant" },
    { label: "Completion Date", value: "October 2022" },
    { label: "Scope of Work", value: "Control System Engineering | Panel Manufacturing | PLC, HMI & SCADA Programming | Testing | Site Commissioning" },
    { label: "Location", value: "Egypt (engineered and manufactured in Ahmedabad, India)" },
  ],
  gallery: [
    {
      src: "/projects/Acetate-5.png",
      alt: "In-house manufactured control panel for 10 TPD ethyl acetate plant - Hive Automation",
    },
    {
      src: "/projects/Acetate-6.png",
      alt: "Siemens S7-1500 redundant CPU (1513R) for ethyl acetate process control",
    },
    {
      src: "/projects/Acetate-1.png",
      alt: "SCADA process visualization for ethyl acetate plant real-time monitoring",
    },
    {
      src: "/projects/Acetate-2.png",
      alt: "ET200SP remote I/O stations for ethyl acetate plant distributed control",
    },
    {
      src: "/projects/Acetate-3.png",
      alt: "PLC control cabinet and field wiring for ethyl acetate plant",
    },
    {
      src: "/projects/Acetate-4.png",
      alt: "On-site commissioning of ethyl acetate plant automation at Egyptian Sugar Industries",
    },
    {
      src: "/projects/Acetate-7.png",
      alt: "HMI operator workstation for ethyl acetate plant process operation",
    },
    {
      src: "/projects/Acetate-8.png",
      alt: "In-house FAT testing of ethyl acetate plant automation system before export",
    },
  ],
  cta: {
    title: "Have a similar chemical / process automation project?",
    body:
      "We deliver turnkey chemical plant automation - including in-house panel manufacturing - for esterification, solvent production, and specialty chemical plants. Contact us for a project scope discussion.",
  },
  faqs: [
    {
      q: "Can Hive Automation deliver chemical plant automation for international clients?",
      a: "Yes. The Ethyl Acetate project for Egyptian Sugar & Integrated Industries was fully engineered and manufactured in Ahmedabad, then commissioned on-site in Egypt - a model we use for multiple international chemical plant projects.",
    },
    {
      q: "What is a Siemens S7-1500 redundant CPU (1513R)?",
      a: "The S7-1513R is a redundant CPU variant of the S7-1500 series - it operates two CPUs in a hot-standby configuration, automatically switching to the standby CPU in milliseconds if the active CPU fails, ensuring continuous operation for critical chemical processes.",
    },
  ],
  schema: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        headline: "Turnkey Automation for 10 TPD Ethyl Acetate Plant — Egyptian Sugar Industries",
        description: "Turnkey automation for 10 TPD ethyl acetate plant: Siemens S7-1513R redundant PLC, in-house panel manufacturing, SCADA, 276 I/O, site commissioning Egypt — October 2022.",
        url: "https://hiveautomation.in/projects/ethyl-acetate",
        image: "https://hiveautomation.in/src/img/Acetate-5.png",
        datePublished: "2022-10-31",
        author: { "@type": "Organization", name: "Hive Automation", url: "https://hiveautomation.in/" },
        publisher: {
          "@type": "Organization",
          name: "Hive Automation",
          url: "https://hiveautomation.in/",
          logo: { "@type": "ImageObject", url: "https://hiveautomation.in/src/img/header-logo.png" },
        },
        keywords: "ethyl acetate plant automation, Siemens S7-1500, chemical process control, turnkey, panel manufacturing",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hiveautomation.in/" },
          { "@type": "ListItem", position: 2, name: "Our Projects", item: "https://hiveautomation.in/our-projects" },
          { "@type": "ListItem", position: 3, name: "Ethyl Acetate Plant", item: "https://hiveautomation.in/projects/ethyl-acetate" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can Hive Automation deliver for international chemical plant clients?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The Ethyl Acetate project was fully engineered and manufactured in Ahmedabad and commissioned on-site in Egypt.",
            },
          },
          {
            "@type": "Question",
            name: "What is the Siemens S7-1513R redundant CPU?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The S7-1513R operates two CPUs in hot-standby, automatically switching in milliseconds on CPU failure to ensure continuous process operation.",
            },
          },
        ],
      },
    ],
  },
};

export const asphaltBatchingProject: DetailedProjectData = {
  seo: {
    title: "260 TPH Asphalt Batching Plant SCADA Automation | Hive Automation",
    description:
      "Case study: SCADA automation for 260 TPH asphalt batching plant — cold dosing, dryer, hot bins, bitumen handling, truck loading, batch reporting for R&B road construction.",
    keywords: [
      "asphalt batching plant SCADA automation",
      "asphalt plant control system PLC",
      "260 TPH asphalt plant automation India",
      "bitumen batching SCADA",
      "road construction plant automation",
      "asphalt batch mix plant PLC",
    ],
    ogImage: "https://hiveautomation.in/src/img/og-project-asphalt.jpg",
    ogImageAlt: "260 TPH asphalt batching plant SCADA automation — Hive Automation",
    canonical: "https://hiveautomation.in/projects/asphalt-batching",
    articleSection: "Infrastructure / R&B",
  },
  hero: {
    label: "Case Study: Infrastructure / R&B",
    title: "SCADA Automation for 260 TPH Asphalt Batching Plant - Real-Time Control, Batch Reporting & Truck Loading",
    subtitle:
      "End-to-end SCADA automation for a 260 TPH asphalt batch mixing plant - from cold aggregate dosing and dryer control to bitumen handling, fiber feeding, hot bin management, and automated truck loading.",
  },
  projectInformation: [
    "Hive Automation developed and implemented a fully automated SCADA-based control system for a 260 TPH Asphalt Batching Plant - one of the largest throughput capacities in road construction automation.",
    "The system integrates real-time control, monitoring, and visualisation for the complete mixing process, from raw aggregate dosing through final batch delivery and truck loading.",
    "The SCADA provides a centralised operator interface for all plant components - including motors, pumps, valves, heating systems, dryer burners, and weighing systems - with data logging for batch reports, truck counts, and daily production totals that enable production management and quality audit.",
  ],
  architecture: [
    "PLC-based control system with a SCADA operator station providing full plant visibility and centralised operation of the entire batch mixing process.",
    "Weighing controller integration for gravimetric batch control across aggregates, bitumen, filler, and fibre dosing.",
    "Burner Management System integration for the coal or HFO dryer burner with direct ignition control, plus data logging and batch report generation.",
  ],
  scope: [
    {
      label: "Cold aggregate dosing - graded aggregate proportioning with belt weigh feeder control",
      href: "/services/plc-programming-integration",
    },
    {
      label: "Dryer and burner control - rotary dryer temperature, coal burner management with direct ignition and combustion air control",
      href: "/services/plc-programming-integration",
    },
    {
      label: "Dust collection and cleaning unit - bag filter differential pressure management and automatic cleaning cycles",
      href: "/services/scada-hmi-development",
    },
    {
      label: "Bitumen and filler handling - bitumen tank temperature, pump sequences, and filler dosing with weight control",
      href: "/services/scada-hmi-development",
    },
    {
      label: "Mixing drum and hot bin management - hot elevator, vibrating screen segregation, and hot bin level management",
      href: "/services/plc-programming-integration",
    },
    {
      label: "Fiber feeding and weighing - gravimetric fiber dosing integration into batch recipe",
      href: "/services/scada-hmi-development",
    },
    {
      label: "Truck loading automation - loadout weigh bridge and truck count logging",
      href: "/services/analytics-reporting",
    },
  ],
  processes: [
    "Real-time display of temperatures, weights, flow rates, and current batch size on SCADA mimic screens.",
    "Integration of bitumen and fibre dosing with precise gravimetric weight control for recipe consistency.",
    "Automated order handling where production orders trigger automatic batching cycle sequences.",
    "Centralised control of all plant components including motors, pumps, valves, heating systems, and instrumentation.",
    "Batch data logging with complete batch records for material weights, temperatures, times, and batch IDs.",
    "Truck count and daily production totals for shift-wise and daily production reporting.",
  ],
  challenge:
    "Automating a 260 TPH asphalt batching plant required tight synchronisation between multiple simultaneous processes - aggregate dosing, drying, screening, hot bin management, bitumen heating, and batch weighing - all with real-time weight control accuracy and a burner management system that responds to dryer temperature demand without flame-out risk.",
  outcome:
    "The 260 TPH Asphalt Batching Plant SCADA system was commissioned and made operational with centralised plant control, automated batch reporting, truck loading, and real-time production data accessible from a single SCADA operator station.",
  ioStats: [
    { value: "260", label: "TPH Capacity" },
    { value: "1", label: "SCADA Station" },
    { value: "24/7", label: "Plant Visibility" },
    { value: "Live", label: "Batch Reporting" },
  ],
  snapshot: [
    { label: "Project Name", value: "Asphalt Batching Plant Automation System - 260 TPH" },
    { label: "Completion Date", value: "Commissioned" },
    { label: "Scope of Work", value: "PLC Programming | SCADA Development | Weighing Integration | Burner Management | Site Commissioning" },
    { label: "Location", value: "India" },
  ],
  gallery: [
    {
      src: "/projects/aphalt-batching.png",
      alt: "260 TPH asphalt batching plant SCADA control screen showing real-time process data and batch management",
    },
  ],
  cta: {
    title: "Have a similar infrastructure / r&b automation project?",
    body:
      "We develop SCADA automation for asphalt batching, concrete batching, and infrastructure plant applications - with batch reporting, gravimetric control, and truck loading automation. Contact us for a scope discussion.",
  },
  faqs: [
    {
      q: "What processes does the asphalt batching plant SCADA control?",
      a: "The system controls cold aggregate dosing, dryer and burner management including coal burner with direct ignition, dust collection, bitumen and filler handling, hot bin management, fibre feeding and weighing, mixing drum, and truck loading - all from a single centralised SCADA operator station.",
    },
    {
      q: "Does the system generate batch reports and production records?",
      a: "Yes. The SCADA logs complete batch records - material weights, temperatures, times, and batch ID - and generates daily production totals, shift reports, and truck count records for production management and quality audit.",
    },
    {
      q: "Can Hive Automation automate other infrastructure or batching plant applications?",
      a: "Yes. We apply the same PLC and SCADA approach to concrete batching plants, aggregate processing, and other infrastructure automation projects. Contact us with your plant specifications.",
    },
  ],
  schema: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        headline: "SCADA Automation for 260 TPH Asphalt Batching Plant — Hive Automation",
        description: "SCADA automation for 260 TPH asphalt batching plant covering cold dosing, dryer control, bitumen handling, hot bin management, batch reporting and truck loading automation.",
        url: "https://hiveautomation.in/projects/asphalt-batching",
        image: "https://hiveautomation.in/src/img/aphalt-batching.png",
        author: { "@type": "Organization", name: "Hive Automation", url: "https://hiveautomation.in/" },
        publisher: {
          "@type": "Organization",
          name: "Hive Automation",
          url: "https://hiveautomation.in/",
          logo: { "@type": "ImageObject", url: "https://hiveautomation.in/src/img/header-logo.png" },
        },
        keywords: "asphalt batching plant SCADA, 260 TPH, bitumen automation, batch reporting, road construction",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hiveautomation.in/" },
          { "@type": "ListItem", position: 2, name: "Our Projects", item: "https://hiveautomation.in/our-projects" },
          { "@type": "ListItem", position: 3, name: "Asphalt Batching Plant", item: "https://hiveautomation.in/projects/asphalt-batching" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What processes does the asphalt plant SCADA control?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cold aggregate dosing, dryer and burner, dust collection, bitumen and filler handling, hot bin management, fibre feeding, mixing drum, and truck loading — from a single SCADA station.",
            },
          },
          {
            "@type": "Question",
            name: "Does the system generate batch reports?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Full batch records with material weights, temperatures, times, and batch ID, plus daily production totals and truck count reports.",
            },
          },
        ],
      },
    ],
  },
};

export const pharmaProcessProject: DetailedProjectData = {
  seo: {
    title: "Pharmaceutical & Process Equipment Automation | OEM | Hive Automation",
    description:
      "GMP-ready PLC, HMI & SCADA automation for pharma OEM manufacturers — VHP sterilizers, isolators, FBD, RMG, WFI, reactors, washers & more. 21 CFR Part 11 compliant.",
    keywords: [
      "pharmaceutical process equipment automation",
      "GMP automation OEM manufacturer",
      "21 CFR Part 11 pharma SCADA",
      "VHP sterilizer automation",
      "isolator PLC programming",
      "FBD RMG automation Siemens",
      "pharma machine manufacturer automation India",
    ],
    ogImage: "https://hiveautomation.in/src/img/og-project-pharma-process.jpg",
    ogImageAlt: "Pharmaceutical process equipment automation for OEM manufacturers — Hive Automation",
    canonical: "https://hiveautomation.in/projects/pharma-process",
    articleSection: "Pharmaceutical / OEM",
  },
  hero: {
    label: "Case Study: Pharmaceutical & Process Equipment - OEM",
    title: "Pharmaceutical & Process Equipment Automation - GMP, 21 CFR Part 11 & GAMP 5 Aligned",
    subtitle:
      "End-to-end PLC, HMI, and SCADA automation for the full range of pharmaceutical process and utility equipment - GMP-ready, 21 CFR Part 11 aligned, engineered on Siemens S7-1200/1500.",
  },
  projectInformation: [
    "Hive Automation is a specialist automation partner for pharmaceutical and process equipment manufacturers - providing end-to-end PLC, HMI, and SCADA programming, control panel integration, system testing, and on-site commissioning for the full range of pharma production and utility equipment.",
    "All our solutions are engineered to meet 21 CFR Part 11, GMP, and GAMP 5 requirements, using Siemens Automation Products - S7-1200, S7-1500, ET200SP, TP/MTP HMI panels, WinCC SCADA, Drive, and Servo - as the primary platform.",
    "Whether you manufacture single-purpose process skids or integrated plant-wide pharmaceutical production lines, our automation team integrates seamlessly with your mechanical and validation teams.",
  ],
  architecture: [
    "Siemens S7-1200, S7-1500, and ET200SP PLC platforms selected based on machine complexity, I/O density, and validation requirements.",
    "Siemens TP and MTP series local HMI panels with WinCC SCADA in PC-based or server-client architecture for plant-wide visibility and operator control.",
    "Siemens SINAMICS drives and SIMOTION servo for motion control, with 21 CFR Part 11 configuration covering electronic records, signatures, audit trail, and user access management.",
  ],
  scope: [
    {
      label: "Powder Handling & Containment: PHT powder transfer, weighing and dispensing; Isolators with differential pressure and VHP; Big Bag filling and discharge; Drum filling automation",
      href: "/services/plc-programming-integration",
    },
    {
      label: "Mixing, Blending & Milling: Batch Mixer and Blender with recipe management; Micronizer with airflow and pressure regulation",
      href: "/services/plc-programming-integration",
    },
    {
      label: "Sterilization & Washing: VHP sterilizer, Dry Heat Sterilizer, Ventilator Sterilizer, and Pharmaceutical Washer automation",
      href: "/services/scada-hmi-development",
    },
    {
      label: "Water & Steam Systems: Multicolumn Distilled Water still automation; Pure Steam Generator; PW and WFI Storage and Distribution systems",
      href: "/services/scada-hmi-development",
    },
    {
      label: "Liquid Process Equipment: Aseptic process vessels and Super Skids with CIP and SIP; Liquid Oral Manufacturing; Reactors and Sterile Heat Exchangers",
      href: "/services/plc-programming-integration",
    },
    {
      label: "Specialty Systems: pH Dosing closed-loop control and ANFD filtration, washing, and drying automation sequences",
      href: "/services/analytics-reporting",
    },
  ],
  processes: [
    "Single automation partner for the entire pharma equipment range, reducing handoff complexity across OEM product lines.",
    "Deep Siemens platform expertise across S7-1200, S7-1500, WinCC, TIA Portal, and pharma-specific library development.",
    "21 CFR Part 11 and GAMP 5 alignment built into every project from the design phase rather than added during validation.",
    "Standardised HMI templates and recipe management frameworks that reduce validation effort across machine models.",
    "Factory Acceptance Test protocols developed and executed in-house to reduce commissioning risk and timeline.",
    "Seamless coordination with OEM mechanical, process, and validation teams for integrated delivery.",
  ],
  challenge:
    "Supporting a wide range of pharmaceutical OEM equipment on a standardised automation framework requires balancing machine-specific control needs with repeatable PLC, HMI, SCADA, and validation structures that can scale across multiple product lines and customer environments.",
  outcome:
    "Hive Automation continues to support pharmaceutical OEM manufacturers with an ongoing automation programme spanning process, containment, sterilization, utility, and specialty systems - all engineered on validated Siemens-based frameworks aligned to GMP, 21 CFR Part 11, and GAMP 5 expectations.",
  ioStats: [
    { value: "2017+", label: "Programme Since" },
    { value: "OEM", label: "Manufacturer Focus" },
    { value: "GMP", label: "Compliance Ready" },
    { value: "TIA", label: "Siemens Platform" },
  ],
  snapshot: [
    { label: "Project Name", value: "Pharmaceutical & Process Equipment Automation Programme" },
    { label: "Completion Date", value: "Ongoing - 2017 to present" },
    { label: "Scope of Work", value: "PLC | HMI | SCADA Programming | Control Panel Integration | FAT | Site Commissioning" },
    { label: "Location", value: "India and International" },
  ],
  gallery: [
    {
      src: "/projects/pharmaceutical-1.jpeg",
      alt: "GAMP 5 compliant pharma process equipment PLC automation panel - Hive Automation",
    },
    {
      src: "/projects/pharmaceutical-2.jpeg",
      alt: "Pharmaceutical reactor PLC control with recipe management and batch report",
    },
    {
      src: "/projects/pharmaceutical-2.jpeg",
      alt: "21 CFR Part 11 compliant SCADA audit trail interface for pharmaceutical equipment",
    },
    {
      src: "/projects/pharmaceutical-1.jpeg",
      alt: "Pharma process plant automation with validated batch reports and GMP compliance",
    },
  ],
  cta: {
    title: "Have a similar pharmaceutical / oem automation project?",
    body:
      "We are an established automation partner for pharmaceutical equipment manufacturers - providing GMP-ready Siemens PLC, HMI, and SCADA solutions for the full equipment range. Share your machine types and we will propose a standard automation framework.",
  },
  faqs: [
    {
      q: "Does Hive Automation support pharmaceutical equipment manufacturers (OEMs)?",
      a: "Yes. We are a specialist automation partner for pharma OEM manufacturers, providing PLC, HMI, and SCADA programming for the full range of pharmaceutical process and utility equipment - aligned to 21 CFR Part 11, GMP, and GAMP 5.",
    },
    {
      q: "Which Siemens products do you use for pharmaceutical equipment automation?",
      a: "We use Siemens S7-1200, S7-1500, ET200SP, TP and MTP HMI panels, WinCC SCADA, SINAMICS drives, and SIMOTION servo - the full Siemens TIA Portal ecosystem - for pharmaceutical equipment automation.",
    },
    {
      q: "Can you provide standardised HMI templates for our machine range?",
      a: "Yes. We develop standardised HMI template libraries and recipe management frameworks for OEM manufacturers, reducing development time per machine model and simplifying customer validation packages.",
    },
  ],
  schema: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        headline: "Pharmaceutical & Process Equipment Automation — GMP, 21 CFR Part 11, GAMP 5",
        description: "End-to-end PLC, HMI and SCADA automation for pharmaceutical OEM manufacturers: VHP sterilizers, isolators, FBD/RMG, WFI, reactors, washers — Siemens S7-1500, 21 CFR Part 11 aligned.",
        url: "https://hiveautomation.in/projects/pharma-process",
        image: "https://hiveautomation.in/src/img/pharma-equipment-1.png",
        author: { "@type": "Organization", name: "Hive Automation", url: "https://hiveautomation.in/" },
        publisher: {
          "@type": "Organization",
          name: "Hive Automation",
          url: "https://hiveautomation.in/",
          logo: { "@type": "ImageObject", url: "https://hiveautomation.in/src/img/header-logo.png" },
        },
        keywords: "pharmaceutical equipment automation, GMP, 21 CFR Part 11, GAMP 5, Siemens S7-1500, OEM manufacturer",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hiveautomation.in/" },
          { "@type": "ListItem", position: 2, name: "Our Projects", item: "https://hiveautomation.in/our-projects" },
          { "@type": "ListItem", position: 3, name: "Pharma & Process Equipment", item: "https://hiveautomation.in/projects/pharma-process" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Does Hive Automation support pharma OEM manufacturers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We provide PLC, HMI, and SCADA programming for the full range of pharmaceutical process and utility equipment, aligned to 21 CFR Part 11, GMP, and GAMP 5.",
            },
          },
          {
            "@type": "Question",
            name: "Which Siemens products do you use for pharma equipment automation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Siemens S7-1200, S7-1500, ET200SP, TP/MTP HMI panels, WinCC SCADA, SINAMICS drives, and SIMOTION servo — the full TIA Portal ecosystem.",
            },
          },
        ],
      },
    ],
  },
};

export const retrofitUpgradeProject: DetailedProjectData = {
  seo: {
    title: "Control System Retrofit & Legacy PLC Upgrades | Hive Automation",
    description:
      "We retrofit obsolete PLC, HMI & SCADA systems across pharma, chemical and industrial plants — Siemens S5 to S7-1500, TIA Portal migration, panel revamp, 21 CFR compliant.",
    keywords: [
      "PLC retrofit services India",
      "legacy PLC upgrade company",
      "Siemens S5 to S7-1500 migration",
      "control system modernization India",
      "HMI SCADA upgrade pharma",
      "obsolete PLC replacement company Gujarat",
    ],
    ogImage: "https://hiveautomation.in/src/img/og-project-retrofit.jpg",
    ogImageAlt: "Control system retrofit and legacy PLC upgrade — Hive Automation",
    canonical: "https://hiveautomation.in/projects/retrofit-upgrade",
    articleSection: "Retrofit & Upgrades",
  },
  hero: {
    label: "Case Study: Retrofit & Upgrades",
    title: "Control System Retrofit & Legacy Automation Upgrades - PLC, HMI, SCADA & Panel Modernisation",
    subtitle:
      "Modernising legacy PLC, HMI, and SCADA systems across pharmaceutical, chemical, and industrial plants - with minimal production downtime and full documentation for validation and compliance.",
  },
  projectInformation: [
    "Modernising legacy automation systems is essential for ensuring long-term reliability, regulatory compliance, and operational performance.",
    "Hive Automation provides comprehensive retrofit and upgrade solutions for obsolete or aging control systems across pharmaceutical, chemical, and industrial plants - replacing outdated PLCs, HMIs, SCADA systems, and control panels with current automation platforms while preserving critical process knowledge and minimising production downtime.",
    "Our retrofit approach is phased and planned around your maintenance schedule, so you are never forced into an unplanned full-plant shutdown to upgrade.",
  ],
  architecture: [
    "Migration paths supported include Siemens S5 to S7-1500 in TIA Portal, S7-300 to S7-1500, and legacy Mitsubishi, ABB, or Rockwell systems to Siemens S7-1500 platforms.",
    "HMI replacement paths include obsolete operator panels to modern Siemens TP and KTP series terminals for improved usability and long-term supportability.",
    "SCADA replacement paths include legacy WinCC classic or third-party SCADA to current WinCC Unified or WinCC V7+ with updated documentation, security, and audit capabilities.",
  ],
  scope: [
    {
      label: "PLC & CPU Upgrades - hardware replacement from Siemens S5 or S7-300 to S7-1500, I/O rewiring, and TIA Portal code migration",
      href: "/services/system-upgrade-retrofits",
    },
    {
      label: "HMI & SCADA Upgrades - replacement of obsolete terminals with modern, 21 CFR Part 11-compliant Siemens HMI or WinCC SCADA",
      href: "/services/scada-hmi-development",
    },
    {
      label: "Control Panel Revamp - refurbishment or full replacement of electrical panels including wiring, I/O modules, power distribution, and field termination",
      href: "/services/system-upgrade-retrofits",
    },
    {
      label: "Software Conversion - redevelopment of old ladder logic, SCADA graphics, and recipes into current TIA Portal and WinCC formats with optimised performance",
      href: "/services/plc-programming-integration",
    },
    {
      label: "Documentation & Validation Support - complete updated documentation, FAT and SAT protocols, and support for validation and regulatory compliance audit readiness",
      href: "/services/analytics-reporting",
    },
  ],
  processes: [
    "Process skids and batch systems including reactors, vessels, and utilities running on obsolete PLC hardware.",
    "Pharmaceutical equipment including reactors, sterilizers, DPT, filling and sealing, vessels, washers, and AHU or HVAC systems.",
    "Utility systems such as AHU, WFI, Pure Steam, HVAC, boiler, and water treatment systems requiring modern automation platforms.",
    "Packaging, conveying, and dosing systems with unsupported legacy machine controllers needing hardware and software replacement.",
    "Older SCADA and HMI interfaces including Windows XP and Windows 7 era SCADA systems and obsolete panel HMIs needing secure modern replacements.",
    "Structured retrofit execution from on-site audit and upgrade roadmap through cutover, commissioning, and as-built documentation handover.",
  ],
  challenge:
    "Retrofit projects require preserving critical process knowledge while replacing obsolete hardware and software under tight shutdown windows. The biggest challenge is minimising production downtime while ensuring migrated logic, updated panels, and replacement SCADA or HMI systems are fully validated before cutover.",
  outcome:
    "Hive Automation continues to deliver phased retrofit and upgrade projects across pharmaceutical, chemical, and industrial plants - helping clients move from unsupported legacy automation to modern Siemens-based control systems with current documentation, validation support, and improved long-term maintainability.",
  ioStats: [
    { value: "S5", label: "Legacy Migration" },
    { value: "S7-1500", label: "Target Platform" },
    { value: "Phased", label: "Cutover Model" },
    { value: "21 CFR", label: "Compliance Support" },
  ],
  snapshot: [
    { label: "Project Name", value: "Retrofit & Upgrade Solutions - Multiple Plants" },
    { label: "Completion Date", value: "Ongoing - 2017 to present" },
    { label: "Scope of Work", value: "PLC Migration | HMI/SCADA Upgrade | Panel Revamp | Software Conversion | FAT/SAT | Validation Support" },
    { label: "Location", value: "India (pan-India site commissioning)" },
  ],
  gallery: [
    {
      src: "/projects/pharmaceutical-1.jpeg",
      alt: "Legacy PLC control system retrofit project - old S7-300 hardware being replaced by Hive Automation",
    },
    {
      src: "/projects/chemical-1.png",
      alt: "Siemens S5 to S7-1500 PLC migration project - new hardware installed alongside legacy system",
    },
    {
      src: "/projects/chemical-3.png",
      alt: "TIA Portal code translation for legacy PLC retrofit - Hive Automation engineers",
    },
    {
      src: "/projects/pharmaceutical-2.jpeg",
      alt: "Industrial plant retrofit with modern Siemens HMI and WinCC SCADA replacing obsolete system",
    },
  ],
  cta: {
    title: "Have a similar retrofit & upgrades automation project?",
    body:
      "Is your plant running on unsupported Siemens S5, S7-300, or other obsolete hardware? We plan and execute phased retrofit projects that minimise downtime and deliver a fully documented, compliance-ready modern control system. Contact us for a free risk assessment.",
  },
  faqs: [
    {
      q: "Is Siemens S7-300 still supported?",
      a: "Siemens announced end-of-sale for S7-300 hardware and its replacement by S7-1500. While some S7-300 products remain available, the platform is in its lifecycle end phase - spare parts availability is declining, and S7-1500 with TIA Portal is the recommended migration target. Planning your retrofit now avoids an emergency replacement later.",
    },
    {
      q: "How much downtime does a PLC retrofit require?",
      a: "Our phased migration approach is specifically designed to minimise downtime. In many cases, cutover is scheduled within an existing planned maintenance window. We translate and test all code offline before the site cutover, so go-live time on-site is minimised.",
    },
    {
      q: "Can you retrofit a pharmaceutical plant system and maintain 21 CFR Part 11 compliance?",
      a: "Yes. We develop updated FAT and SAT protocols, IQ and OQ documentation, and 21 CFR Part 11 configuration on the replacement SCADA and HMI platform as part of the retrofit scope, supporting your validation team throughout the process.",
    },
  ],
  schema: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        headline: "Control System Retrofit & Legacy Automation Upgrades — Hive Automation",
        description: "Retrofit services for obsolete PLC, HMI, and SCADA systems: Siemens S5/S7-300 to S7-1500 migration, panel revamp, 21 CFR Part 11 SCADA replacement, across pharma, chemical and industrial plants.",
        url: "https://hiveautomation.in/projects/retrofit-upgrade",
        image: "https://hiveautomation.in/src/img/retro-1.png",
        author: { "@type": "Organization", name: "Hive Automation", url: "https://hiveautomation.in/" },
        publisher: {
          "@type": "Organization",
          name: "Hive Automation",
          url: "https://hiveautomation.in/",
          logo: { "@type": "ImageObject", url: "https://hiveautomation.in/src/img/header-logo.png" },
        },
        keywords: "PLC retrofit, legacy automation upgrade, Siemens S5 S7-1500 migration, control system modernization, pharma SCADA upgrade",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hiveautomation.in/" },
          { "@type": "ListItem", position: 2, name: "Our Projects", item: "https://hiveautomation.in/our-projects" },
          { "@type": "ListItem", position: 3, name: "Retrofit & Upgrades", item: "https://hiveautomation.in/projects/retrofit-upgrade" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is Siemens S7-300 still supported?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "S7-300 is in its lifecycle end phase with Siemens. S7-1500 with TIA Portal is the recommended migration target to avoid declining spare parts availability.",
            },
          },
          {
            "@type": "Question",
            name: "How much downtime does a PLC retrofit require?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our phased migration approach is designed to fit within existing planned maintenance windows — code is translated and tested offline before the site cutover, minimising on-site downtime.",
            },
          },
          {
            "@type": "Question",
            name: "Can you retrofit a pharma plant and maintain 21 CFR Part 11 compliance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We develop updated FAT/SAT, IQ/OQ documentation, and 21 CFR Part 11 SCADA configuration as part of the retrofit scope, supporting your validation team throughout.",
            },
          },
        ],
      },
    ],
  },
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
    title: "Siemens PCS 7 DCS for High Pressure Air Injection Plant",
    subtitle: "Full lifecycle Siemens PCS 7 DCS delivery with SIL-3 Fire & Gas and HART management for ONGC",
    desc: "Hive Automation delivered a comprehensive, full-lifecycle Distributed Control System (DCS) solution based on Siemens PCS 7 for the High Pressure Air Injection Plant of ONGC in Ahmedabad. Our scope covered detailed engineering, procurement, manufacturing, installation, and commissioning as a single-source turnkey delivery.\n\nThe architecture incorporated three separate redundant control setups on a common plant network for compressor control, process control, and SIL-3 Fire & Gas detection, along with 2 Operator Stations, 1 Engineering Station, and a dedicated HART Asset Management System for field device diagnostics and calibration management.",
    completion: "March 2025",
    endUser: "ONGC, Ahmedabad",
    scope: "Engineering | Procurement | Manufacturing | Installation | Commissioning",
    architecture: "Siemens PCS 7 DCS with three separate redundant setups on a common Profinet network, 2 OS, 1 ES, SIL-3 Fire & Gas, and HART Management.",
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
  "pharma-process": {
    title: "Pharmaceutical & Process Equipment Automation Programme",
    subtitle: "GMP-ready Siemens PLC, HMI, and SCADA automation for pharmaceutical OEM manufacturers",
    desc: "Hive Automation is a specialist automation partner for pharmaceutical and process equipment manufacturers, delivering PLC, HMI, and SCADA programming, control panel integration, FAT, and commissioning for the full range of pharma process and utility equipment.\n\nOur solutions are engineered on Siemens S7-1200, S7-1500, ET200SP, WinCC, and TP/MTP HMI platforms with 21 CFR Part 11, GMP, and GAMP 5 alignment built into the automation framework from the start.",
    completion: "Ongoing",
    endUser: "Multiple pharmaceutical equipment OEM manufacturers",
    scope: "PLC | HMI | SCADA Programming | Control Panel Integration | FAT | Site Commissioning",
    architecture: "Siemens S7-1200 / S7-1500 / ET200SP, TP/MTP HMI, WinCC SCADA, SINAMICS drives, and SIMOTION servo with 21 CFR Part 11 features.",
    tag: "Pharmaceutical",
    specs: {
      Platform: "Siemens TIA Portal ecosystem",
      Compliance: "GMP | 21 CFR Part 11 | GAMP 5",
      Coverage: "OEM machine and process equipment automation",
      Delivery: "India and international support",
    },
    gallery: ["/projects/pharmaceutical-1.jpeg", "/projects/pharmaceutical-2.jpeg"],
  },
  "retrofit-upgrade": {
    title: "Control System Retrofit & Legacy Automation Upgrades",
    subtitle: "PLC, HMI, SCADA and panel modernisation for pharmaceutical, chemical, and industrial plants",
    desc: "Hive Automation delivers retrofit and upgrade solutions for obsolete or aging control systems across pharmaceutical, chemical, and industrial plants. We replace legacy PLCs, HMIs, SCADA systems, and control panels with modern automation platforms while preserving critical process knowledge and minimising production downtime.\n\nOur migration paths cover Siemens S5 to S7-1500, S7-300 to S7-1500, legacy HMI and SCADA replacement, panel revamp, software conversion, and documentation support for validation and compliance.",
    completion: "Ongoing - 2017 to present",
    endUser: "Multiple clients - pharmaceutical, chemical, and industrial",
    scope: "PLC Migration | HMI/SCADA Upgrade | Panel Revamp | Software Conversion | FAT/SAT | Validation Support",
    architecture: "Supported migration paths include Siemens S5 to S7-1500 in TIA Portal, S7-300 to S7-1500, legacy HMI replacement, and WinCC or SCADA modernisation.",
    tag: "Retrofit",
    specs: {
      "Migration Target": "Siemens S7-1500 / TIA Portal",
      "Upgrade Scope": "PLC | HMI | SCADA | Panels",
      "Compliance Support": "21 CFR Part 11 / FAT / SAT / IQ / OQ",
      Delivery: "Phased cutover with minimal downtime",
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
  chemical: {
    slug: "chemical",
    data: chemicalProject,
    snapshotIcons: ["factory", "calendar", "workflow", "map"],
  },
  refinery: {
    slug: "refinery",
    data: refineryProject,
    snapshotIcons: ["factory", "calendar", "workflow", "map"],
  },
  "hydrogenation-plant": {
    slug: "hydrogenation-plant",
    data: hydrogenationPlantProject,
    snapshotIcons: ["factory", "calendar", "workflow", "map"],
  },
  "ethyl-acetate": {
    slug: "ethyl-acetate",
    data: ethylAcetateProject,
    snapshotIcons: ["factory", "calendar", "workflow", "map"],
  },
  "asphalt-batching": {
    slug: "asphalt-batching",
    data: asphaltBatchingProject,
    snapshotIcons: ["factory", "calendar", "workflow", "map"],
  },
  "pharma-process": {
    slug: "pharma-process",
    data: pharmaProcessProject,
    snapshotIcons: ["factory", "calendar", "workflow", "map"],
  },
  "retrofit-upgrade": {
    slug: "retrofit-upgrade",
    data: retrofitUpgradeProject,
    snapshotIcons: ["factory", "calendar", "workflow", "map"],
  },
  "oil-gas": {
    slug: "oil-gas",
    data: oilGasProject,
    snapshotIcons: ["factory", "calendar", "workflow", "map"],
  },
};
