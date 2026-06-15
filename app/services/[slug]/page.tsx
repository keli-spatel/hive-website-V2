import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Define static services data
const servicesData = {
  "plc-programming-integration": {
    title: "PLC Programming & Integration",
    tagline: "Precision logic for precise control.",
    desc: "We develop custom PLC programs tailored to your process and production goals. Whether you’re upgrading an existing system or building from scratch, our logic design ensures safety, flexibility, and performance.",
    icon: "⚙️",
    features: [
      "Siemens S7-200 Smart / S7-300 / S7-400 / S7-1200 / S7-1500 platforms",
      "TIA Portal & Step 7 programming",
      "Redundancy and fault-tolerant systems",
      "Safety PLC integration (Fail-safe)",
      "Complex interlocks and sequencing logic",
      "I/O mapping and diagnostics",
      "Remote monitoring and control"
    ],
    idealFor: "Process lines, Packaging & Pharma machinery, compressors, utilities, and critical plant systems."
  },
  "distributed-control-systems": {
    title: "Distributed Control Systems (DCS)",
    tagline: "Centralized command. Complete plant control.",
    desc: "We engineer and implement robust Siemens PCS 7 and other DCS solutions that provide scalable, integrated control of complex industrial processes. From batch to continuous processing, our DCS services ensure accuracy, safety, and uptime.",
    icon: "🖥️",
    features: [
      "Siemens PCS 7, Simatic Batch, APL libraries",
      "Redundant servers, controllers & networks",
      "Alarm management and historian integration",
      "Batch management and reporting (ISA-88)",
      "High-availability architecture for 24/7 operation",
      "Fieldbus (Profibus, Profinet) and HART integration",
      "Lifecycle management and change control"
    ],
    idealFor: "Pharma production, Oil & Gas terminals, utilities, and chemical processing plants."
  },
  "scada-hmi-development": {
    title: "SCADA & HMI Development",
    tagline: "Smart visuals for smarter decisions.",
    desc: "We create intuitive SCADA and HMI interfaces that allow operators and engineers to monitor and control processes in real time. Designed for usability, clarity, and safety.",
    icon: "📊",
    features: [
      "Old System Study at Site",
      "Old PLC Program Study",
      "Footprint check in case of Panels",
      "New Panel and PLC Programming concept readiness",
      "Customer meeting with New Concept",
      "New graphics development",
      "FAT / IFAT / SAT",
      "Site Commissioning"
    ],
    idealFor: "Pharmaceutical, Operator panels, control rooms, mobile monitoring, and enterprise-level dashboards."
  },
  "turnkey-project-execution": {
    title: "Turnkey Project Execution",
    tagline: "End-to-end project delivery-from design to commissioning.",
    desc: "We provide complete automation solutions under one roof. Our engineers collaborate from early project planning to final handover, ensuring consistency, reliability, and accountability.",
    icon: "🏗️",
    features: [
      "Control philosophy and functional design specification (FDS)",
      "Electrical panel design and PLC cabinet fabrication",
      "Instrument selection and integration",
      "FAT/SAT execution and documentation",
      "Loop checking and commissioning",
      "On-site installation support and supervision"
    ],
    idealFor: "Greenfield projects, plant expansions, modernization efforts."
  },
  "system-upgrade-retrofits": {
    title: "System Upgrades & Retrofits",
    tagline: "Modernize without disrupting production.",
    desc: "We upgrade aging control systems and legacy hardware (S5, S7-300) to modern, supported platforms (S7-1500, TIA Portal). Our retrofit strategies ensure minimal downtime and future-ready performance.",
    icon: "🔄",
    features: [
      "Legacy Siemens to TIA Portal migrations",
      "Hardware replacement and I/O rewiring",
      "Code translation and testing",
      "Backward compatibility and phased migration",
      "Obsolescence risk management"
    ],
    idealFor: "Aging production lines, obsolete PLC/DCS systems, M&A integration."
  },
  "industrial-networking-cybersecurity": {
    title: "Industrial Networking & Cybersecurity",
    tagline: "Secure, scalable communication infrastructure.",
    desc: "We design industrial networks that are resilient, segmented, and secure. From control to enterprise level, our networks are built for performance and uptime.",
    icon: "🔒",
    features: [
      "Industrial Ethernet (Profinet, Modbus TCP, Ethernet/IP)",
      "Managed switches, VLANs, firewall configuration",
      "Remote access solutions with VPN and secure tunnelling",
      "Network segmentation (ISA-95, Purdue Model)",
      "Cybersecurity risk assessments and hardening",
      "IT/OT integration and secure data flow"
    ],
    idealFor: "Digitization, remote monitoring, IT/OT convergence, and audit compliance."
  },
  "analytics-reporting": {
    title: "Analytics & Reporting",
    tagline: "Transform raw data into actionable insight.",
    desc: "We integrate reporting tools and dashboards into your control system, giving your team real-time access to KPIs, historical trends, and compliance logs.",
    icon: "📈",
    features: [
      "Real-Time & Historical Data Reports: Pull data directly from PLCs, HMIs, SCADA, and DCS systems into customizable formats.",
      "Batch Reports: Generate ISA-88 and GMP-compliant batch process reports for validation, traceability, and auditing.",
      "PDF, Excel, or Web-Based Reports: Choose your output format and delivery method — printed, emailed, or available via dashboard.",
      "Audit Trails & Event Logs: Comply with 21 CFR Part 11, FDA, or ISO standards with timestamped event reports and electronic signatures.",
      "KPI & Efficiency Dashboards: Create operational performance reports including OEE, downtime analysis, and throughput trends",
      "Database & ERP Integration: Interface reports with SQL databases, cloud storage, or enterprise systems like SAP for centralized visibility."
    ],
    idealFor: "Plant efficiency measurement, Production measurement and audit compliance."
  }
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <div style={{ marginTop: 72 }}>
      {/* Hero Header */}
      <section style={{ background: "linear-gradient(135deg,#1B1B1B,#2a2a2a)", padding: "80px 32px", overflow: "hidden" }}>
        <div
          className="container"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          {/* Text Column */}
          <div>
            {/* Breadcrumb */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20, fontSize: 12, fontWeight: 600, color: "#C5C1B9", letterSpacing: 1 }}>
              <Link href="/" style={{ color: "#C5C1B9", textDecoration: "none", fontWeight: 400 }}>Home</Link>
              <span>/</span>
              <Link href="/services" style={{ color: "#C5C1B9", textDecoration: "none", fontWeight: 400 }}>Services</Link>
              <span>/</span>
              <span style={{ color: "#FF3434" }}>{service.title}</span>
            </div>
            
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255, 52, 52,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>
                {service.icon}
              </div>
              <span style={{ fontSize: 12, fontWeight: 600, color: "#FF3434", letterSpacing: 1.5, textTransform: "uppercase" }}>
                Industrial Service
              </span>
            </div>
            
            <h1 style={{ color: "#FFFFFF", marginBottom: 16, fontSize: "clamp(30px, 4.5vw, 40px)", lineHeight: 1.2 }}>
              {service.title}
            </h1>
            <p style={{ color: "#C5C1B9", fontSize: 16, lineHeight: "26px", margin: 0, fontWeight: 500 }}>
              {service.tagline}
            </p>
          </div>

          {/* Image Column */}
          <div style={{ position: "relative", width: "100%", height: 300, borderRadius: 12, overflow: "hidden" }}>
            <Image
              src={`/services/${slug}.png`}
              alt={service.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
        <style>{`
          @media(max-width: 799px) {
            .container[style*="grid-template-columns: 1.2fr 1fr"] {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
          }
        `}</style>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.7fr 1fr", gap: 48, alignItems: "start" }}>
          {/* Details Column */}
          <div>
            <h3 style={{ marginBottom: 20 }}>Overview</h3>
            <p style={{ fontSize: 16, lineHeight: "28px", color: "#333333", marginBottom: 32 }}>
              {service.desc}
            </p>

            <h3 style={{ marginBottom: 20 }}>Key Capabilities</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, marginBottom: 32 }}>
              {service.features.map((feat, idx) => (
                <div key={idx} style={{ display: "flex", gap: 14, alignItems: "start", background: "#F9F8F6", padding: "16px 20px", borderRadius: 8, border: "1px solid #DCDAD5" }}>
                  <span style={{ color: "#575ECF", fontWeight: "bold", fontSize: 18 }}>✓</span>
                  <span style={{ fontSize: 14, fontWeight: 500, color: "#1B1B1B", lineHeight: "22px" }}>{feat}</span>
                </div>
              ))}
            </div>

            <div style={{ background: "rgba(87,94,207,0.04)", borderLeft: "4px solid #575ECF", padding: "20px 24px", borderRadius: "0 8px 8px 0" }}>
              <h4 style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#575ECF", marginBottom: 8 }}>
                Ideal Deployment
              </h4>
              <p style={{ fontSize: 14, color: "#1B1B1B", lineHeight: "22px", margin: 0, fontWeight: 500 }}>
                {service.idealFor}
              </p>
            </div>
          </div>

          {/* Sidebar CTA Column */}
          <div>
            <div className="card" style={{ padding: 32, background: "#1B1B1B", color: "#FFFFFF", borderColor: "#2A2A2A" }}>
              <h3 style={{ color: "#FFFFFF", fontSize: 20, marginBottom: 16 }}>Request Consultation</h3>
              <p style={{ color: "#C5C1B9", fontSize: 14, lineHeight: "22px", marginBottom: 24 }}>
                Discuss your engineering needs directly with our project leaders. Let us build a robust solution for your plant.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <Link href="/contact" className="btn btn-primary" style={{ textDecoration: "none", textAlign: "center", width: "100%" }}>
                  Request a Quote
                </Link>
                <Link
                  href="https://appt.link/meet-with-bhavik-bhimani-iz1nBIl5/hive-automation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    textDecoration: "none",
                    textAlign: "center",
                    width: "100%",
                    background: "transparent",
                    color: "#FFFFFF",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: 8
                  }}
                >
                  Schedule Technical Call
                </Link>
              </div>
            </div>

            <div className="card" style={{ padding: 24, marginTop: 24 }}>
              <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Why Choose Hive?</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                <li style={{ fontSize: 13, display: "flex", gap: 8, color: "#1B1B1B" }}>
                  <span style={{ color: "#FF3434" }}>★</span>
                  <span>Certified Siemens Integrators</span>
                </li>
                <li style={{ fontSize: 13, display: "flex", gap: 8, color: "#1B1B1B" }}>
                  <span style={{ color: "#FF3434" }}>★</span>
                  <span>21 CFR Part 11 Pharma Compliant</span>
                </li>
                <li style={{ fontSize: 13, display: "flex", gap: 8, color: "#1B1B1B" }}>
                  <span style={{ color: "#FF3434" }}>★</span>
                  <span>Turnkey Panel-to-SCADA execution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services link */}
      <section className="section-alt" style={{ padding: "48px 32px", textAlign: "center" }}>
        <div className="container">
          <p style={{ margin: 0, color: "#1B1B1B", fontWeight: 500 }}>
            Looking for something else? Explore{" "}
            <Link href="/services" style={{ color: "#575ECF", textDecoration: "underline" }}>
              all our industrial services
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
