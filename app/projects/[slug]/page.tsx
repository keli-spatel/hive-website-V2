import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, CheckCircle2, ChevronRight, Factory, MapPin, Workflow } from "lucide-react";
import { AnimatedButton } from "../../components/ui/AnimatedButton";
import ProjectIoStats from "../../components/ProjectIoStats";

interface Project {
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

const pharmaceuticalProject = {
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
  sidebarDetails: [
    { label: "Project Name", value: "GAMP 5 Compliant Pharmaceutical Material Handling Automation" },
    { label: "End User", value: "Emynent, Russia" },
    { label: "Completion Date", value: "March 2024" },
    {
      label: "Scope of Work",
      value: "PLC Programming | WinCC SCADA | HMI | Wireless Tablet | FAT | Site Commissioning",
    },
    { label: "Location", value: "Russia (developed and tested in Ahmedabad, India)" },
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

const projectsData: Record<string, Project> = {
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

const relatedProjects = [
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

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    return {};
  }

  if (slug === "pharmaceutical") {
    const seo = pharmaceuticalProject.seo;

    return {
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
      alternates: {
        canonical: "/projects/pharmaceutical",
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },
      openGraph: {
        type: "article",
        url: seo.canonical,
        siteName: "Hive Automation",
        locale: "en_IN",
        title: seo.title,
        description: seo.description,
        images: [
          {
            url: seo.ogImage,
            width: 1200,
            height: 630,
            alt: seo.ogImageAlt,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: seo.title,
        description: seo.description,
        creator: "@HiveAutomation",
        images: [seo.ogImage],
      },
      other: {
        keywords:
          "pharmaceutical automation Siemens S7-1500, GAMP 5 compliance automation India, 21 CFR Part 11 SCADA, pharmaceutical material handling PLC, WinCC SCADA pharma, GMP automation company India",
        "article:publisher": "https://www.facebook.com/hiveautomation",
        "article:section": "Pharmaceutical",
        "twitter:site": "@HiveAutomation",
        "twitter:image:alt": seo.ogImageAlt,
      },
    };
  }

  return {
    title: `${project.title} | Hive Automation`,
    description: project.subtitle,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Hive Automation`,
      description: project.subtitle,
      url: `https://hiveautomation.in/projects/${slug}`,
    },
  };
}

function GenericProjectPage({ project }: { project: Project }) {
  return (
    <div style={{ marginTop: 82 }}>
      <section
        style={{ background: "linear-gradient(135deg,#1B1B1B,#2a2a2a)", padding: "80px 32px 64px", textAlign: "center" }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              gap: 8,
              marginBottom: 16,
              fontSize: 12,
              fontWeight: 600,
              color: "#C5C1B9",
              letterSpacing: 1,
            }}
          >
            <Link href="/" style={{ color: "#C5C1B9", textDecoration: "none", fontWeight: 400 }}>
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" style={{ color: "#C5C1B9", textDecoration: "none", fontWeight: 400 }}>
              Projects
            </Link>
            <span>/</span>
            <span style={{ color: "#FF3434" }}>{project.tag}</span>
          </div>

          <span
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: "#FF3434",
              background: "rgba(255, 52, 52,0.08)",
              padding: "6px 16px",
              borderRadius: 9999,
              marginBottom: 16,
            }}
          >
            Case Study: {project.tag}
          </span>

          <h1 style={{ marginBottom: 12 }}>{project.title}</h1>
          <p style={{ color: "#C5C1B9", fontSize: 16, lineHeight: "24px", margin: 0 }}>{project.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div
          className="container"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.7fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          <div>
            <h2 style={{ marginBottom: 20 }}>Project Information</h2>
            <p
              style={{ fontSize: 15, lineHeight: "26px", color: "#5f5e5dff", marginBottom: 32, whiteSpace: "pre-line" }}
            >
              {project.desc}
            </p>

            <h2 style={{ marginBottom: 20 }}>Technical Architecture</h2>
            <div style={{ background: "#F9F8F6", padding: 24, borderRadius: 8, border: "1px solid #DCDAD5", marginBottom: 32 }}>
              <p style={{ fontSize: 15, lineHeight: "26px", color: "#5f5e5dff", margin: 0, fontWeight: 500 }}>
                {project.architecture}
              </p>
            </div>

            <h2 style={{ marginBottom: 20 }}>Scope of Work</h2>
            <p style={{ fontSize: 15, lineHeight: "26px", color: "#5f5e5dff", marginBottom: 32 }}>{project.scope}</p>

            {project.gallery && project.gallery.length > 0 ? (
              <div style={{ marginTop: 40 }}>
                <h2 style={{ marginBottom: 20 }}>Project Gallery</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {project.gallery.map((imgUrl, imgIdx) => (
                    <div
                      key={imgIdx}
                      style={{
                        position: "relative",
                        width: "100%",
                        height: 240,
                        borderRadius: 8,
                        overflow: "hidden",
                        border: "1px solid #DCDAD5",
                      }}
                    >
                      <Image src={imgUrl} alt={`${project.title} - Image ${imgIdx + 1}`} fill style={{ objectFit: "cover" }} />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div>
            <div className="card" style={{ padding: 24, background: "#F9F8F6", borderColor: "#DCDAD5", marginBottom: 24 }}>
              <h3 style={{ marginBottom: 16 }}>Project Details</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#575ECF", textTransform: "uppercase", letterSpacing: 1 }}>
                    End User
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#1B1B1B", marginTop: 4 }}>{project.endUser}</div>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#575ECF", textTransform: "uppercase", letterSpacing: 1 }}>
                    Completion Date
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#1B1B1B", marginTop: 4 }}>{project.completion}</div>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 24, borderColor: "#DCDAD5" }}>
              <h3 style={{ marginBottom: 16 }}>I/O Capacity & Configuration</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {Object.entries(project.specs).map(([key, val]) => (
                  <div
                    key={key}
                    style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #F0EFEF", paddingBottom: 8, fontSize: 13 }}
                  >
                    <span style={{ color: "#C5C1B9", fontWeight: 500 }}>{key}</span>
                    <span style={{ color: "#1B1B1B", fontWeight: 600 }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 24, background: "#1B1B1B", color: "#FFFFFF", borderColor: "#2A2A2A", marginTop: 24 }}>
              <h3 style={{ color: "#FFFFFF", marginBottom: 8 }}>Have a similar project?</h3>
              <p style={{ color: "#C5C1B9", fontSize: 13, lineHeight: "20px", marginBottom: 16 }}>
                Let&apos;s build a custom automated solution tailored to your operational specifications.
              </p>
              <AnimatedButton href="/contact" className="w-full">
                Get a Quote
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt" style={{ padding: "48px 32px", textAlign: "center" }}>
        <div className="container">
          <p style={{ margin: 0, color: "#1B1B1B", fontWeight: 500 }}>
            Interested in other case studies? Explore{" "}
            <Link href="/projects" style={{ color: "#575ECF", textDecoration: "underline" }}>
              all our projects
            </Link>
            .
          </p>
        </div>
      </section>

      <style>{`
        @media(max-width: 799px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  if (slug !== "pharmaceutical") {
    return <GenericProjectPage project={project} />;
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        headline: "GAMP 5 Compliant Pharmaceutical Material Handling Automation - Siemens S7-1500",
        description:
          "Case study: 21 CFR Part 11 and GAMP 5 compliant pharmaceutical automation system using Siemens S7-1500, 18 ET200SP stations, WinCC SCADA and wireless tablets for Emynent, Russia.",
        url: "https://hiveautomation.in/projects/pharmaceutical",
        image: "https://hiveautomation.in/src/img/pharmaceutical-1.jpeg",
        datePublished: "2024-03-31",
        author: {
          "@type": "Organization",
          name: "Hive Automation",
          url: "https://hiveautomation.in/",
        },
        publisher: {
          "@type": "Organization",
          name: "Hive Automation",
          url: "https://hiveautomation.in/",
          logo: {
            "@type": "ImageObject",
            url: "https://hiveautomation.in/src/img/header-logo.png",
          },
        },
        keywords: "GAMP 5 automation, 21 CFR Part 11, Siemens S7-1500, WinCC SCADA, pharmaceutical automation India",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hiveautomation.in/" },
          { "@type": "ListItem", position: 2, name: "Our Projects", item: "https://hiveautomation.in/our-projects" },
          { "@type": "ListItem", position: 3, name: "Pharmaceutical", item: "https://hiveautomation.in/projects/pharmaceutical" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is the pharmaceutical automation system 21 CFR Part 11 compliant?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, the system was fully engineered for 21 CFR Part 11 compliance, including electronic records, electronic signatures, and audit trail on WinCC SCADA.",
            },
          },
          {
            "@type": "Question",
            name: "Which Siemens PLC platform was used?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Siemens S7-1500 CPU-1517-3 PN with 18 ET200SP distributed I/O stations.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="service-detail-page pharma-project-page" style={{ marginTop: 82 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="pharma-project-hero">
        <div className="container pharma-project-hero-inner">
          <nav className="pharma-project-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link href="/projects">Projects</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span>Pharmaceutical</span>
          </nav>

          <p className="section-label">{pharmaceuticalProject.hero.label}</p>
          <h1>{pharmaceuticalProject.hero.title}</h1>
          <p className="pharma-project-hero-copy">{pharmaceuticalProject.hero.subtitle}</p>
        </div>
      </section>

      <section className="section pharma-project-section">
        <div className="container pharma-project-layout">
          <div className="pharma-project-main">
            <section className="pharma-project-block">
              <div className="pharma-story-layout">
                <div className="pharma-story-head">
                  <p className="section-label">Project Overview</p>
                  <h2>Project Information</h2>
                  <p>Execution context, compliance scope, and what the plant-wide system needed to deliver.</p>
                </div>
                <div className="pharma-story-copy">
                  {pharmaceuticalProject.projectInformation.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>

            <section className="pharma-project-block">
              <div className="pharma-architecture-section">
                <div className="pharma-architecture-head">
                  <p className="section-label">System Architecture</p>
                  <h2>Technical Architecture</h2>
                  <p>Core PLC, distributed I/O, supervisory control, and the validated operator layer behind the solution.</p>
                </div>
                <div className="pharma-architecture-box">
                  {pharmaceuticalProject.architecture.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>

            <section className="pharma-project-block">
              <div className="pharma-section-head">
                <p className="section-label">Delivery Scope</p>
              <h2>Scope of Work & Key Deliverables</h2>
                <p>Everything engineered, configured, tested, documented, and commissioned for this pharmaceutical automation project.</p>
              </div>
              <ul className="pharma-bullet-list pharma-deliverables-grid">
                {pharmaceuticalProject.scope.map((item) => (
                  <li className="pharma-deliverable-card" key={item.label}>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
                  </li>
                ))}
              </ul>
            </section>

            <section className="pharma-project-block">
              <div className="pharma-section-head">
                <p className="section-label">Process Coverage</p>
              <h2>Processes Automated</h2>
                <p>Integrated production and utility systems brought together under one unified control architecture.</p>
              </div>
              <ul className="pharma-process-list pharma-process-grid">
                {pharmaceuticalProject.processes.map((item, index) => (
                  <li className="pharma-process-card" key={item}>
                    <span className="pharma-process-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="pharma-project-block">
              <div className="pharma-section-head">
                <p className="section-label">Project Impact</p>
                <h2>Challenge & Outcome</h2>
              </div>
              <div className="pharma-outcome-grid">
                <article className="pharma-outcome-card pharma-outcome-card-challenge">
                  <h3>Challenge</h3>
                  <p>{pharmaceuticalProject.challenge}</p>
                </article>
                <div className="pharma-outcome-flow" aria-hidden="true">
                  <span className="pharma-outcome-flow-track" />
                  <span className="pharma-outcome-flow-pulse" />
                  <span className="pharma-outcome-flow-core" />
                </div>
                <article className="pharma-outcome-card pharma-outcome-card-result">
                  <h3>Outcome / Result</h3>
                  <p>{pharmaceuticalProject.outcome}</p>
                </article>
              </div>
            </section>

            <section className="pharma-project-block">
              <div className="pharma-section-head">
                <p className="section-label">I/O Summary</p>
                <h2>I/O Capacity & Configuration</h2>
              </div>
              <ProjectIoStats
                items={pharmaceuticalProject.ioStats.map((stat) => ({
                  value: Number(stat.value),
                  label: stat.label,
                }))}
              />
            </section>

            <section className="pharma-project-block">
              <h2>Project Gallery</h2>
              <div className="pharma-gallery-grid">
                {pharmaceuticalProject.gallery.map((image) => (
                  <div className="pharma-gallery-card" key={image.src}>
                    <Image src={image.src} alt={image.alt} fill className="pharma-gallery-image" sizes="(max-width: 767px) 100vw, 50vw" />
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </section>

      <section className="section pharma-details-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Project Details</p>
            <h2>Project Delivery Snapshot</h2>
          </div>
          <div className="pharma-details-shell">
            <div className="pharma-details-grid">
              {pharmaceuticalProject.sidebarDetails.map((item) => (
                <article className="pharma-details-card" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </article>
              ))}
            </div>
            <div className="pharma-details-meta">
              <div className="pharma-meta-item">
                <Factory size={18} aria-hidden="true" />
                <span>End User: Emynent, Russia</span>
              </div>
              <div className="pharma-meta-item">
                <CalendarDays size={18} aria-hidden="true" />
                <span>Completion Date: March 2024</span>
              </div>
              <div className="pharma-meta-item">
                <Workflow size={18} aria-hidden="true" />
                <span>910 I/O points across 18 ET200SP distributed stations</span>
              </div>
              <div className="pharma-meta-item">
                <MapPin size={18} aria-hidden="true" />
                <span>Developed and tested in Ahmedabad, commissioned in Russia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pharma-related-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Related Projects</p>
            <h2>Explore More Industrial Automation Case Studies</h2>
          </div>
          <div className="pharma-related-scroll">
            {relatedProjects.map((item) => (
              <Link className="pharma-related-card" href={`/projects/${item.slug}`} key={item.slug}>
                <div className="pharma-related-thumb">
                  <Image src={item.image} alt={item.title} fill className="pharma-related-image" sizes="320px" />
                </div>
                <div className="pharma-related-body">
                  <span>{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="pharma-related-link">
                    <span>View Case Study</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section pharma-faq-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Frequently Asked Questions</p>
            <h2>Pharmaceutical Automation Questions, Answered</h2>
          </div>
          <div className="about-faq-grid">
            {pharmaceuticalProject.faqs.map((item) => (
              <details className="about-faq-card" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-cta-section" id="project-cta">
        <div className="container">
          <p className="section-label">Ready to Transform Your Industrial Operations?</p>
          <h2>Partner with Hive Automation for Reliable Automation Support</h2>
          <p>
            We engineer GAMP 5 and 21 CFR Part 11 compliant automation for pharmaceutical manufacturers - from single-machine HMIs to integrated plant-wide WinCC SCADA systems. Share your project scope and we will prepare a technical proposal.
          </p>
          <div className="action-row about-cta-actions">
            <AnimatedButton href="/contact">Get a Free Quote</AnimatedButton>
            <AnimatedButton href="/projects" variant="secondary">
              View All Projects
            </AnimatedButton>
          </div>
        </div>
      </section>

      <style>{`
        .pharma-project-page .container {
          width: min(1500px, calc(100% - 32px));
        }

        .pharma-project-hero {
          background: #343433;
          padding: 76px 0 64px;
        }

        .pharma-project-hero-inner {
          max-width: 980px;
          text-align: center;
        }

        .pharma-project-breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
          color: rgba(255, 255, 255, 0.74);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .pharma-project-breadcrumb a {
          color: rgba(255, 255, 255, 0.74);
          text-decoration: none;
        }

        .pharma-project-breadcrumb span {
          color: rgba(255, 255, 255, 0.9);
        }

        .pharma-project-hero h1 {
          margin: 0;
          color: #ffffff;
          font-size: var(--title-lg);
          font-weight: var(--weight-heavy);
          line-height: 1.08;
        }

        .pharma-project-hero-copy {
          max-width: 860px;
          margin: 18px auto 0;
          color: rgba(255, 255, 255, 0.82);
          font-size: var(--home-copy-size);
          font-weight: var(--home-copy-weight);
          line-height: var(--home-copy-line);
        }

        .pharma-project-page .section {
          padding: 72px 0;
        }

        .pharma-project-section {
          background: #ffffff;
        }

        .pharma-project-layout {
          display: block;
        }

        .pharma-project-main {
          min-width: 0;
          display: grid;
          gap: 40px;
          max-width: 1120px;
          margin: 0 auto;
        }

        .pharma-project-block {
          display: grid;
          gap: 24px;
          margin-bottom: 0;
        }

        .pharma-project-block h2 {
          margin: 0 0 16px;
          color: var(--black);
          font-size: var(--title-md);
          font-weight: var(--weight-heavy);
          line-height: 1.16;
        }

        .pharma-project-block p {
          margin: 0;
          color: var(--home-copy-color);
          font-size: var(--home-copy-size);
          font-weight: var(--home-copy-weight);
          line-height: var(--home-copy-line);
        }

        .pharma-section-head,
        .pharma-story-head,
        .pharma-architecture-head {
          display: grid;
          gap: 10px;
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
        }

        .pharma-section-head {
          gap: 1px;
        }

        .pharma-section-head .section-label,
        .pharma-story-head .section-label,
        .pharma-architecture-head .section-label {
          margin: 0;
        }

        .pharma-section-head h2,
        .pharma-story-head h2,
        .pharma-architecture-head h2 {
          margin: 0;
        }

        .pharma-section-head > p:not(.section-label),
        .pharma-story-head > p:not(.section-label),
        .pharma-architecture-head > p:not(.section-label) {
          max-width: 680px;
          margin: 0 auto;
          color: var(--home-copy-color);
          font-size: var(--home-copy-size);
          font-weight: var(--home-copy-weight);
          line-height: var(--home-copy-line);
        }

        .pharma-story-layout {
          display: grid;
          gap: 24px;
          align-items: start;
        }

        .pharma-story-head {
          position: static;
        }

        .pharma-story-copy {
          position: relative;
          max-width: 980px;
          margin: 0 auto;
          padding: 26px 28px;
          border: 1px solid #e4e9f0;
          border-radius: 18px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          box-shadow: 0 18px 42px rgba(17, 18, 20, 0.06);
          display: grid;
          gap: 18px;
        }

        .pharma-architecture-section {
          display: grid;
          gap: 24px;
        }

        .pharma-architecture-box,
        .pharma-outcome-card,
        .pharma-details-card,
        .pharma-details-meta {
          border: 1px solid #e4e9f0;
          border-radius: 18px;
          background: #ffffff;
          box-shadow: 0 18px 42px rgba(17, 18, 20, 0.06);
        }

        .pharma-architecture-box {
          position: relative;
          overflow: hidden;
          max-width: 980px;
          margin: 0 auto;
          padding: 26px 28px 26px 32px;
          display: grid;
          gap: 16px;
          background:
            linear-gradient(90deg, rgba(17, 18, 20, 0.04) 1px, transparent 1px),
            linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          background-size: 52px 52px, auto;
        }

        .pharma-architecture-box::before {
          content: "";
          position: absolute;
          top: 20px;
          bottom: 20px;
          left: 0;
          width: 4px;
          border-radius: 0 999px 999px 0;
          background: linear-gradient(180deg, #ff3434 0%, #ff7a7a 100%);
        }

        .pharma-bullet-list,
        .pharma-process-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .pharma-bullet-list {
          display: grid;
          gap: 12px;
        }

        .pharma-deliverables-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0;
          border: 1px solid #dfe3ea;
          background: #ffffff;
        }

        .pharma-bullet-list li {
          display: grid;
          grid-template-columns: 18px minmax(0, 1fr);
          gap: 12px;
          align-items: start;
          color: var(--home-copy-color);
          font-size: var(--home-copy-size);
          line-height: var(--home-copy-line);
        }

        .pharma-deliverable-card {
          position: relative;
          overflow: hidden;
          min-height: 100%;
          padding: 20px 18px;
          border: 1px solid #dfe3ea;
          background: rgba(255, 255, 255, 0.94);
          transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease, background 220ms ease;
        }

        .pharma-deliverable-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 52, 52, 0.12), rgba(255, 122, 122, 0.03) 48%, transparent 100%);
          opacity: 0;
          transition: opacity 220ms ease;
          pointer-events: none;
        }

        .pharma-deliverable-card:hover {
          position: relative;
          z-index: 1;
          transform: translateY(-4px);
          border-color: rgba(255, 52, 52, 0.36);
          background: #ffffff;
          box-shadow: 0 22px 42px rgba(17, 18, 20, 0.12);
        }

        .pharma-deliverable-card:hover::before {
          opacity: 1;
        }

        .pharma-bullet-list svg {
          position: relative;
          z-index: 1;
          margin-top: 3px;
          color: var(--red);
          transition: transform 220ms ease, color 220ms ease;
        }

        .pharma-bullet-list a {
          position: relative;
          z-index: 1;
          color: inherit;
          text-decoration: none;
          transition: color 220ms ease;
        }

        .pharma-bullet-list a:hover,
        .pharma-bullet-list a:focus-visible {
          color: var(--red);
          text-decoration: underline;
          outline: none;
        }

        .pharma-deliverable-card span {
          position: relative;
          z-index: 1;
          transition: color 220ms ease;
        }

        .pharma-deliverable-card:hover svg {
          transform: translateY(-1px) scale(1.06);
          color: #ff2020;
        }

        .pharma-deliverable-card:hover span,
        .pharma-deliverable-card:hover a {
          color: #243042;
        }

        .pharma-process-list {
          display: grid;
          gap: 12px;
        }

        .pharma-process-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .pharma-process-list li {
          display: grid;
          grid-template-columns: 10px minmax(0, 1fr);
          gap: 12px;
          align-items: start;
          color: var(--home-copy-color);
          font-size: var(--home-copy-size);
          line-height: var(--home-copy-line);
        }

        .pharma-process-card {
          min-height: 100%;
          grid-template-columns: 54px minmax(0, 1fr) !important;
          gap: 16px !important;
          padding: 20px 20px 20px 18px;
          border: 1px solid #e4e9f0;
          border-radius: 18px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          box-shadow: 0 12px 30px rgba(17, 18, 20, 0.05);
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .pharma-process-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 52, 52, 0.28);
          box-shadow: 0 18px 36px rgba(17, 18, 20, 0.08);
        }

        .pharma-process-index {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          border-radius: 16px;
          background: rgba(255, 52, 52, 0.08);
          color: var(--red);
          font-size: 16px;
          font-weight: var(--weight-heavy);
          line-height: 1;
        }

        .pharma-outcome-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 88px minmax(0, 1fr);
          gap: 18px;
          align-items: center;
        }

        .pharma-outcome-card {
          padding: 22px 24px;
        }

        .pharma-outcome-flow {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100%;
        }

        .pharma-outcome-flow-track {
          width: 100%;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, rgba(255, 52, 52, 0.2) 0%, rgba(255, 52, 52, 0.9) 50%, rgba(54, 211, 153, 0.92) 100%);
        }

        .pharma-outcome-flow-pulse {
          position: absolute;
          left: 10px;
          width: 26px;
          height: 26px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.12) 68%, transparent 70%);
          filter: drop-shadow(0 0 12px rgba(255, 82, 82, 0.28));
          animation: pharmaOutcomeTraverse 3s ease-in-out infinite;
        }

        .pharma-outcome-flow-core {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: linear-gradient(135deg, #ff3434 0%, #36d399 100%);
          box-shadow: 0 0 0 10px rgba(255, 52, 52, 0.08);
          animation: pharmaOutcomePulse 1.8s ease-in-out infinite;
        }

        @keyframes pharmaOutcomeTraverse {
          0% {
            transform: translateX(0) scale(0.96);
            opacity: 0.75;
          }
          50% {
            transform: translateX(42px) scale(1.08);
            opacity: 1;
          }
          100% {
            transform: translateX(78px) scale(0.96);
            opacity: 0.75;
          }
        }

        @keyframes pharmaOutcomePulse {
          0%, 100% {
            transform: scale(0.94);
            box-shadow: 0 0 0 8px rgba(255, 52, 52, 0.08);
          }
          50% {
            transform: scale(1.08);
            box-shadow: 0 0 0 14px rgba(54, 211, 153, 0.12);
          }
        }

        .pharma-outcome-card-challenge {
          background:
            linear-gradient(135deg, rgba(255, 52, 52, 0.06), transparent 45%),
            #ffffff;
        }

        .pharma-outcome-card-result {
          border-color: #2a2a2a;
          background:
            linear-gradient(135deg, rgba(255, 52, 52, 0.18), transparent 36%),
            linear-gradient(180deg, #171819 0%, #242629 100%);
          box-shadow: 0 24px 52px rgba(17, 18, 20, 0.16);
        }

        .pharma-outcome-card h3,
        .pharma-related-card h3 {
          margin: 0 0 10px;
          color: var(--black);
          font-size: var(--title-xs);
          font-weight: var(--weight-bold);
          line-height: 1.28;
        }

        .pharma-outcome-card-result h3,
        .pharma-outcome-card-result p {
          color: #ffffff;
        }

        .pharma-outcome-card-result p {
          opacity: 0.82;
        }

        .pharma-io-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .pharma-io-stat {
          min-height: 124px;
        }

        .pharma-gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .pharma-gallery-card {
          position: relative;
          min-height: 280px;
          overflow: hidden;
          border: 1px solid #e4e9f0;
          border-radius: 18px;
          background: #f8fafc;
        }

        .pharma-gallery-image,
        .pharma-related-image {
          object-fit: cover;
        }

        .pharma-related-section .section-heading {
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .pharma-related-scroll {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 18px;
        }

        .pharma-related-card {
          display: flex;
          flex-direction: column;
          width: min(320px, 100%);
          min-height: 100%;
          overflow: hidden;
          border: 1px solid #e4e9f0;
          border-radius: 18px;
          background: #ffffff;
          color: inherit;
          text-decoration: none;
          box-shadow: 0 14px 34px rgba(17, 18, 20, 0.06);
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .pharma-related-card:hover,
        .pharma-related-card:focus-visible {
          border-color: rgba(255, 52, 52, 0.28);
          box-shadow: 0 18px 38px rgba(17, 18, 20, 0.1);
          transform: translateY(-2px);
          outline: none;
        }

        .pharma-related-thumb {
          position: relative;
          min-height: 180px;
        }

        .pharma-related-body {
          display: grid;
          gap: 10px;
          padding: 18px 18px 20px;
        }

        .pharma-related-body > span {
          display: inline-flex;
          width: fit-content;
          border-radius: 999px;
          background: rgba(255, 52, 52, 0.08);
          color: var(--red);
          padding: 5px 10px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .pharma-related-body p {
          margin: 0;
          color: var(--home-copy-color);
          font-size: 14px;
          line-height: 1.65;
        }

        .pharma-related-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--red);
          font-size: 13px;
          font-weight: 700;
        }

        .pharma-details-section .section-heading {
          max-width: 760px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .pharma-details-shell {
          display: grid;
          gap: 18px;
          max-width: 1120px;
          margin: 0 auto;
        }

        .pharma-details-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .pharma-details-card {
          display: grid;
          gap: 8px;
          min-height: 100%;
          padding: 22px 24px;
        }

        .pharma-details-card span {
          color: #667085;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .pharma-details-card strong {
          color: var(--black);
          font-size: 15px;
          line-height: 1.6;
        }

        .pharma-details-meta {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px 18px;
          padding: 22px 24px;
        }

        .pharma-meta-item {
          display: grid;
          grid-template-columns: 18px minmax(0, 1fr);
          gap: 12px;
          align-items: start;
          font-size: 14px;
          line-height: 1.65;
          color: var(--black);
        }

        .pharma-meta-item svg {
          color: #ff4c4c;
          margin-top: 3px;
        }

        @media (max-width: 1023px) {
          .pharma-deliverables-grid,
          .pharma-details-grid,
          .pharma-details-meta,
          .pharma-process-grid,
          .pharma-io-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .pharma-project-page .container {
            width: min(1280px, calc(100% - 24px));
          }

          .pharma-project-hero {
            padding: 62px 0 54px;
          }

          .pharma-project-hero h1 {
            font-size: 34px;
          }

          .pharma-project-hero-copy {
            font-size: 15px;
          }

          .pharma-project-page .section {
            padding: 56px 0;
          }

          .pharma-outcome-grid,
          .pharma-details-grid,
          .pharma-details-meta,
          .pharma-deliverables-grid,
          .pharma-gallery-grid,
          .pharma-process-grid,
          .pharma-io-grid {
            grid-template-columns: 1fr;
          }

          .pharma-outcome-flow {
            min-height: 54px;
          }

          .pharma-outcome-flow-track {
            width: 2px;
            height: 100%;
            min-height: 54px;
            background: linear-gradient(180deg, rgba(255, 52, 52, 0.2) 0%, rgba(255, 52, 52, 0.9) 50%, rgba(54, 211, 153, 0.92) 100%);
          }

          .pharma-outcome-flow-pulse {
            left: auto;
            top: 8px;
            animation: pharmaOutcomeTraverseMobile 3s ease-in-out infinite;
          }

          .pharma-gallery-card {
            min-height: 240px;
          }

          .pharma-details-card,
          .pharma-details-meta,
          .pharma-outcome-card,
          .pharma-architecture-box {
            padding: 22px 20px;
          }
        }

        @keyframes pharmaOutcomeTraverseMobile {
          0% {
            transform: translateY(0) scale(0.96);
            opacity: 0.75;
          }
          50% {
            transform: translateY(14px) scale(1.08);
            opacity: 1;
          }
          100% {
            transform: translateY(30px) scale(0.96);
            opacity: 0.75;
          }
        }
      `}</style>
    </div>
  );
}
