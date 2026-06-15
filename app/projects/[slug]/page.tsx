import Link from "next/link";
import { notFound } from "next/navigation";

const projectsData = {
  "pharmaceutical": {
    title: "GAMP 5 Compliant Automation for Pharmaceutical Material Handling",
    subtitle: "WinCC Explorer & Wireless Tablet operation for Emynent, Russia",
    desc: "We delivered a fully automated control solution for a pharmaceutical powder transfer system for Emynent, Russia, through one of our OEM partners. The scope included PLC, HMI, and SCADA programming with in-house testing and on-site commissioning.\n\nThe system covered multiple integrated processes, including Powder Transfer, Tablet Injector, Isolator, FBD, RMG, Comil, AHU, and Heating & Cooling systems. The entire solution was developed in full compliance with 21 CFR Part 11, ensuring secure operations, electronic records, and audit trails suitable for regulated environments.",
    completion: "March 2024",
    endUser: "Emynent, Russia",
    scope: "Programming, Testing & Site Commissioning",
    architecture: "Siemens S7-1500 series CPU-1517-3 PN with 18 Nos ET200SP I/O stations, WinCC SCADA, and Wireless Tablet operation with WinCC Explorer.",
    tag: "Pharmaceutical",
    specs: {
      "Analog Inputs": "118",
      "Digital Inputs": "240",
      "Digital Outputs": "496",
      "Analog Outputs": "56",
      "Total I/O Points": "910"
    }
  },
  "chemical": {
    title: "Control System Engineering for Steam Turbine Application",
    subtitle: "Redundant Siemens S7-400H control for KLJ Petroplast",
    desc: "We provided end-to-end control system engineering services for a Steam Turbine application for Siemens Energy. The project included the development and implementation of PLC, HMI, and SCADA software, ensuring seamless integration with turbine control and monitoring systems.\n\nOur scope covered detailed engineering, software development, in-house testing, and on-site commissioning for a high-reliability steam turbine control system. The architecture managed three turbine systems via a redundant Siemens S7-400H (CPU-414-5H) setup with ET200SP I/O stations, two operator stations, one engineering station, and two local HMIs—ensuring real-time control and compliance with energy sector standards.",
    completion: "October 2023",
    endUser: "Siemens Energy (End User: KLJ Petroplast, Gujarat)",
    scope: "Control System Design, PLC, HMI & SCADA Programming, Testing, and Site Commissioning",
    architecture: "Redundant Siemens S7-400H (CPU-414-5H) with ET200SP IO stations, WinCC SCADA, Operator & Engineering stations.",
    tag: "Chemical",
    specs: {
      "Analog Inputs": "272",
      "Digital Inputs": "320",
      "Digital Outputs": "144",
      "Analog Outputs": "52",
      "Total I/O Points": "788"
    }
  },
  "refinery": {
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
      "Total I/O Points": "336"
    }
  },
  "oil-gas": {
    title: "PCS7 DCS for High Pressure Air Injection Plant",
    subtitle: "Complete Siemens PCS 7 system setup with HART management for ONGC",
    desc: "We successfully delivered a comprehensive Distributed Control System (DCS) solution based on Siemens PCS7 for the High Pressure Air Injection Plant of ONGC in Ahmedabad. Our scope encompassed the complete lifecycle—from detailed engineering and procurement to manufacturing, installation, and commissioning. The advanced DCS ensures reliable automation and optimized control for critical operations in the oil and gas sector, enhancing safety, efficiency, and system responsiveness.",
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
      "Total I/O Points": "786"
    }
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
      "Total I/O Points": "236"
    }
  },
  "ethyl-acetate": {
    title: "Automation & Control System for 10 TPD Ethyl Acetate Plant",
    subtitle: "Redundant Siemens S7-1500 CPU setup for Egyptian Sugar & Integrated Industries",
    desc: "We delivered a fully integrated automation and control solution for a 10 TPD Ethyl Acetate Plant for Egyptian Sugar & Integrated Industries Company. The project scope spanned the entire automation lifecycle—from system design and control panel manufacturing to PLC & SCADA development, in-house testing, and site commissioning.\n\nThe automation system was built on a Siemens S7-1500 redundant CPU (CPU-1513R) platform with ET200SP I/O stations, offering precise control and real-time monitoring of key process parameters. All control panels were designed and fabricated in-house to ensure full compliance with industry standards for quality and safety. This end-to-end solution delivered robust process control, improved plant visibility, and streamlined operations—fully aligned with the high standards of modern chemical manufacturing.",
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
      "Total I/O Points": "276"
    }
  },
  "asphalt-batching": {
    title: "Asphalt Batching Plant Automation System – 260 TPH",
    subtitle: "Streamlined dosing, loading and recipe control for Roads & Buildings Department",
    desc: "We developed and implemented a fully automated control system for a 260TPH Asphalt Batching Plant, designed to streamline and optimize the complete mixing process—from raw material dosing to final batch delivery.\n\nThis SCADA-based solution integrates real-time control, monitoring, and visualization for all key processes, including truck loading automation, raw aggregate dosing, burner control, and recipe management. This automation system enhances process efficiency, reduces manual errors, and ensures consistent mix quality—making it ideal for modern road construction and infrastructure projects.",
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
      "Total I/O Points": "152"
    }
  },
  "retrofit-upgrade": {
    title: "Retrofit & Upgrade Solutions for Legacy Industrial Systems",
    subtitle: "Powder Handling, HMI/SCADA and Logic conversions with minimal downtime",
    desc: "Modernizing legacy automation systems is essential for ensuring long-term reliability, compliance, and performance. We offer comprehensive retrofit solutions for obsolete or aging control systems across pharmaceutical, chemical, and industrial plants.\n\nOur retrofit services involve upgrading outdated PLCs, HMIs, SCADA systems, and control panels with the latest automation platforms—while minimizing downtime and preserving critical process knowledge.\n\nOur Retrofit Scope Includes Powder Handling Technology (PHT), HMI & SCADA Upgrades (21 CFR Part 11 compliant), Control Panel Revamp, and Software Conversion.",
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
      "Total I/O Points": "Scalable configurations"
    }
  }
};

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <div style={{ marginTop: 72 }}>
      {/* Hero Header */}
      <section style={{ background: "linear-gradient(135deg,#1B1B1B,#2a2a2a)", padding: "80px 32px 64px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div style={{ display: "inline-flex", gap: 8, marginBottom: 16, fontSize: 12, fontWeight: 600, color: "#C5C1B9", letterSpacing: 1 }}>
            <Link href="/" style={{ color: "#C5C1B9", textDecoration: "none", fontWeight: 400 }}>Home</Link>
            <span>/</span>
            <Link href="/projects" style={{ color: "#C5C1B9", textDecoration: "none", fontWeight: 400 }}>Projects</Link>
            <span>/</span>
            <span style={{ color: "#FF3434" }}>{project.tag}</span>
          </div>
          
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "#FF3434", background: "rgba(255, 52, 52,0.08)", padding: "6px 16px", borderRadius: 9999, marginBottom: 16 }}>
            Case Study: {project.tag}
          </span>
          
          <h1 style={{ color: "#FFFFFF", marginBottom: 12, fontSize: "32px", lineHeight: "40px" }}>{project.title}</h1>
          <p style={{ color: "#C5C1B9", fontSize: 16, lineHeight: "24px", margin: 0 }}>
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.7fr 1fr", gap: 48, alignItems: "start" }}>
          {/* Details Column */}
          <div>
            <h3 style={{ marginBottom: 20 }}>Project Information</h3>
            <p style={{ fontSize: 16, lineHeight: "28px", color: "#333333", marginBottom: 32, whiteSpace: "pre-line" }}>
              {project.desc}
            </p>

            <h3 style={{ marginBottom: 20 }}>Technical Architecture</h3>
            <div style={{ background: "#F9F8F6", padding: 24, borderRadius: 8, border: "1px solid #DCDAD5", marginBottom: 32 }}>
              <p style={{ fontSize: 15, lineHeight: "24px", color: "#1B1B1B", margin: 0, fontWeight: 500 }}>
                {project.architecture}
              </p>
            </div>

            <h3 style={{ marginBottom: 20 }}>Scope of Work</h3>
            <p style={{ fontSize: 15, lineHeight: "24px", color: "#333333", marginBottom: 0 }}>
              {project.scope}
            </p>
          </div>

          {/* Sidebar Metadata Column */}
          <div>
            <div className="card" style={{ padding: 24, background: "#F9F8F6", borderColor: "#DCDAD5", marginBottom: 24 }}>
              <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Project Details</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#575ECF", textTransform: "uppercase", letterSpacing: 1 }}>End User</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#1B1B1B", marginTop: 4 }}>{project.endUser}</div>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#575ECF", textTransform: "uppercase", letterSpacing: 1 }}>Completion Date</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#1B1B1B", marginTop: 4 }}>{project.completion}</div>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 24, borderColor: "#DCDAD5" }}>
              <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>I/O Capacity & Configuration</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {Object.entries(project.specs).map(([key, val]) => (
                  <div key={key} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #F0EFEF", paddingBottom: 8, fontSize: 13 }}>
                    <span style={{ color: "#C5C1B9", fontWeight: 500 }}>{key}</span>
                    <span style={{ color: "#1B1B1B", fontWeight: 600 }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 24, background: "#1B1B1B", color: "#FFFFFF", borderColor: "#2A2A2A", marginTop: 24 }}>
              <h4 style={{ color: "#FFFFFF", fontSize: 16, marginBottom: 8 }}>Have a similar project?</h4>
              <p style={{ color: "#C5C1B9", fontSize: 13, lineHeight: "20px", marginBottom: 16 }}>
                Let&apos;s build a custom automated solution tailored to your operational specifications.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ textDecoration: "none", textAlign: "center", width: "100%", height: 38, padding: "8px 16px", fontSize: 13 }}>
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer links */}
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
