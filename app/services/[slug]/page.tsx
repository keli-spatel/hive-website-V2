import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { AnimatedButton } from "../../components/ui/AnimatedButton";
import { FaqAccordion } from "../../components/FaqAccordion";
import AnimatedStats from "../../components/AnimatedStats";
import { ClientCarousel } from "../../components/ui/cases-with-infinite-scroll";
import { ArrowRight, Factory, FlaskConical, Fuel, Gauge, Package, Phone, Pill } from "lucide-react";

// Define static services data
const servicesData = {
  "plc-programming-integration": {
    title: "PLC Programming & Integration Services",
    tagline: "Precision logic for precise control — custom PLC programs engineered for Siemens, Allen-Bradley and Schneider platforms.",
    desc: "We develop custom PLC programs tailored to your process and production goals. Whether you’re upgrading an existing system or building from scratch, our logic design ensures safety, flexibility, and performance.",
    icon: "⚙️",
    features: [
      "Siemens S7-200 Smart / S7-300 / S7-400 / S7-1200 / S7-1500 platform programming",
      "TIA Portal and classic Step 7 programming and migration",
      "Allen-Bradley ControlLogix, CompactLogix and Studio 5000 programming",
      "Schneider Electric Modicon and EcoStruxure-based PLC programming",
      "Redundant and fault-tolerant PLC architecture for 24/7 critical processes",
      "Safety PLC integration, fail-safe logic, SIL-rated systems, and emergency interlocks",
      "Complex interlocking and sequencing logic for batch and continuous processes",
      "I/O mapping, signal diagnostics, and field instrument integration",
      "Remote monitoring, remote access, and over-the-network PLC diagnostics"
    ],
    idealFor: "Process lines, Packaging & Pharma machinery, compressors, utilities, and critical plant systems.",
    seo: {
      title: "PLC Programming & Integration Services | Hive Automation",
      description: "Custom PLC programming for Siemens, Allen-Bradley & Schneider. Fail-safe, redundant systems for pharma, oil & gas plants across India. Get a free consultation.",
      keywords: [
        "PLC programming services",
        "PLC programming company",
        "PLC integration services",
        "industrial automation PLC programming",
        "PLC system integrator",
        "PLC panel programming",
        "custom PLC programming",
        "Siemens S7-1500 PLC programming company",
        "TIA Portal PLC programming services",
        "fail-safe PLC integration for pharma machinery",
        "PLC programming company in Ahmedabad",
        "PLC programming services in Gujarat",
        "PLC SCADA automation company India"
      ],
      ogImage: "https://hiveautomation.in/src/img/og-plc-programming.jpg",
      ogImageAlt: "PLC Programming and Integration Services - Hive Automation, Ahmedabad"
    },
    contentSections: [
      {
        heading: "What Is PLC Programming & Why It Matters",
        paragraphs: [
          "A Programmable Logic Controller (PLC) is the brain of any automated production line — it reads inputs from sensors, executes control logic, and drives outputs to motors, valves, and actuators in real time. The quality of PLC programming directly determines your plant's uptime, safety compliance, and ability to scale. Poorly structured PLC code leads to nuisance faults, unsafe interlocks, and expensive downtime; well-engineered PLC programming reduces changeover time, simplifies troubleshooting, and extends equipment life.",
          "As a dedicated PLC programming company, Hive Automation builds control logic that plant engineers can actually maintain — clearly structured, well-commented, and documented to IEC 61131-3 standards across Ladder Logic, Function Block Diagram (FBD), and Structured Text (ST)."
        ]
      },
      {
        heading: "Our PLC Programming & Integration Capabilities",
        paragraphs: [
          "We provide full-cycle PLC programming and integration services — from control philosophy and logic design through commissioning and long-term support."
        ],
        bullets: [
          "Siemens S7-200 Smart / S7-300 / S7-400 / S7-1200 / S7-1500 platform programming",
          "TIA Portal and classic Step 7 programming and migration",
          "Allen-Bradley (Rockwell) ControlLogix, CompactLogix and Studio 5000 programming",
          "Schneider Electric Modicon and EcoStruxure-based PLC programming",
          "Redundant and fault-tolerant PLC architecture for 24/7 critical processes",
          "Safety PLC integration — fail-safe logic, SIL-rated systems, and emergency interlocks",
          "Complex interlocking and sequencing logic for batch and continuous processes",
          "I/O mapping, signal diagnostics, and field instrument integration",
          "Remote monitoring, remote access, and over-the-network PLC diagnostics"
        ]
      },
      {
        heading: "Industries We Serve",
        paragraphs: [
          "Our PLC programming and integration work spans process-critical industries where downtime is not an option:"
        ],
        bullets: [
          "Pharmaceutical manufacturing & packaging lines (GMP/21 CFR Part 11-aligned logic)",
          "Oil & gas terminals, pipelines, and utility skids",
          "Chemical and process manufacturing plants",
          "Compressor stations and rotating equipment control",
          "Packaging, filling, and material-handling machinery",
          "Plant utilities including boilers, HVAC, water treatment, and effluent treatment systems"
        ]
      },
      {
        heading: "Our PLC Programming Process",
        paragraphs: [
          "We follow a structured, documentation-driven process so every PLC project is traceable, testable, and repeatable:"
        ],
        bullets: [
          "1. Requirement study & control philosophy — understanding your process, safety requirements, and existing architecture",
          "2. Functional Design Specification (FDS) sign-off before coding begins",
          "3. PLC logic development in TIA Portal / Studio 5000 / Unity Pro, following IEC 61131-3 coding standards",
          "4. Internal simulation and Factory Acceptance Testing (FAT)",
          "5. On-site installation, I/O loop checking, and commissioning",
          "6. Site Acceptance Testing (SAT) and as-built documentation handover",
          "7. Post-commissioning support and remote diagnostics"
        ]
      },
      {
        heading: "Why Choose Hive Automation for PLC Programming in India",
        paragraphs: [
          "Hive Automation has been delivering PLC programming and integration services since 2017 from our Ahmedabad, Gujarat facility, serving clients across India in pharmaceutical, oil & gas, and chemical manufacturing. We work directly with plant engineering teams — not through layers of subcontracting — so every PLC program we deliver is documented, supportable, and built around your operators' real-world workflow, not a generic template.",
          "From single-machine PLC retrofits to multi-PLC plant-wide control architecture, our engineers are equally comfortable on Siemens, Allen-Bradley, and Schneider platforms — meaning you are not locked into a single vendor ecosystem."
        ]
      }
    ],
    relatedLinks: [
      { href: "/services/distributed-control-systems", label: "For plant-wide control beyond single PLCs, see our DCS integration services." },
      { href: "/services/system-upgrade-retrofits", label: "Running a legacy Siemens S5 or S7-300? See our PLC retrofit & migration services." },
      { href: "/services/scada-hmi-development", label: "Pair your PLC program with a SCADA/HMI interface for full operator visibility." },
      { href: "/services/turnkey-project-execution", label: "Need panel fabrication and commissioning too? See our turnkey project execution." }
    ],
    faqs: [
      {
        q: "Which PLC brands does Hive Automation program?",
        a: "We program Siemens S7-200 Smart through S7-1500 using TIA Portal and Step 7, Allen-Bradley/Rockwell ControlLogix and CompactLogix using Studio 5000, and Schneider Electric Modicon and EcoStruxure PLC platforms."
      },
      {
        q: "Can you upgrade an old PLC program to a new platform?",
        a: "Yes. We migrate legacy Siemens S5 and S7-300 logic to S7-1500 and TIA Portal, including code translation, I/O remapping, and phased cutover planning to minimize production downtime."
      },
      {
        q: "Do you provide safety PLC fail-safe programming?",
        a: "Yes. We design and program fail-safe PLC systems and SIL-rated safety interlocks for pharmaceutical, chemical, and oil & gas applications where functional safety compliance is mandatory."
      },
      {
        q: "How long does a typical PLC programming project take?",
        a: "A single-machine PLC program can be delivered in 1 to 3 weeks, while plant-wide multi-PLC integration projects typically run 6 to 16 weeks including FAT/SAT and commissioning."
      }
    ]
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

function getShortServiceDescription(text: string) {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= 132) return normalized;

  const shortened = normalized.slice(0, 129);
  const lastSpace = shortened.lastIndexOf(" ");
  return `${shortened.slice(0, lastSpace > 72 ? lastSpace : shortened.length).trim()}...`;
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    return {};
  }

  const seo = "seo" in service ? service.seo : undefined;
  const title = seo?.title ?? `${service.title} | Hive Automation`;
  const description = seo?.description ?? service.desc;
  const url = `https://hiveautomation.in/services/${slug}`;

  return {
    title,
    description,
    keywords: seo?.keywords,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: seo?.ogImage
        ? [
            {
              url: seo.ogImage,
              alt: seo.ogImageAlt ?? service.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  const contentSections = "contentSections" in service ? service.contentSections : undefined;
  const relatedLinks = "relatedLinks" in service ? service.relatedLinks : undefined;
  const faqs = "faqs" in service ? service.faqs : undefined;
  const relatedServices = Object.entries(servicesData)
    .filter(([serviceSlug]) => serviceSlug !== slug)
    .slice(0, 4)
    .map(([serviceSlug, relatedService]) => ({
      slug: serviceSlug,
      title: relatedService.title,
      tag: relatedService.tagline,
      desc: getShortServiceDescription(relatedService.desc),
      image: `/services/${serviceSlug}.png`,
    }));
  const heroContent =
    slug === "plc-programming-integration"
      ? {
          title: "PLC Programming & Integration Services",
          subheadline:
            "Precision logic for precise control — custom PLC programs engineered for Siemens, Allen-Bradley and Schneider platforms.",
          body:
            "Hive Automation designs, programs, and integrates Programmable Logic Controllers (PLCs) for manufacturing, process, and packaging lines across India. Whether you are building a new control system from scratch or upgrading a legacy installation, our PLC programming services are engineered for safety, flexibility, and long-term performance — backed by hands-on experience since 2017 across pharmaceutical, oil & gas, and chemical plants.",
          cta: "Request a Free PLC Programming Consultation",
          tags: ["Siemens", "Allen-Bradley", "Schneider", "Since 2017"],
        }
      : {
          title: service.title,
          subheadline: service.tagline,
          body: service.desc,
          cta: "Request a Free Consultation",
          tags: [],
        };
  const schema =
    slug === "plc-programming-integration"
      ? {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              serviceType: "PLC Programming and Integration",
              name: "PLC Programming & Integration Services",
              description:
                "Custom PLC programming and integration services for Siemens, Allen-Bradley and Schneider platforms, including safety PLC, redundant architecture, and I/O integration for pharmaceutical, oil & gas, and chemical plants.",
              provider: {
                "@type": "Organization",
                name: "Hive Automation",
                url: "https://hiveautomation.in/",
                logo: "https://hiveautomation.in/src/img/header-logo.png",
                telephone: "+91-99786-03840",
                email: "info@hiveautomation.in",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "33, B N Industrial Estate, Near Kathwada GIDC Gate No 5, S P Ring Road, Near Nikol, Odhav",
                  addressLocality: "Ahmedabad",
                  addressRegion: "Gujarat",
                  postalCode: "382415",
                  addressCountry: "IN",
                },
              },
              areaServed: [
                { "@type": "Country", name: "India" },
                { "@type": "AdministrativeArea", name: "Gujarat" },
              ],
              url: "https://hiveautomation.in/services/plc-programming-integration",
              audience: {
                "@type": "Audience",
                audienceType: "Pharmaceutical, Oil & Gas, Chemical and Manufacturing Plant Engineers",
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://hiveautomation.in/" },
                { "@type": "ListItem", position: 2, name: "Our Services", item: "https://hiveautomation.in/our-services" },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "PLC Programming & Integration",
                  item: "https://hiveautomation.in/services/plc-programming-integration",
                },
              ],
            },
            ...(faqs
              ? [
                  {
                    "@type": "FAQPage",
                    mainEntity: faqs.map((item) => ({
                      "@type": "Question",
                      name: item.q,
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: item.a,
                      },
                    })),
                  },
                ]
              : []),
          ],
        }
      : undefined;

  return (
    <div className="service-detail-page" style={{ marginTop: 82 }}>
      {schema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ) : null}

      <section className="service-detail-hero">
        <div className="container service-detail-hero-inner">
          <div className="service-detail-hero-copy">
            <div className="service-detail-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/our-services">Our Services</Link>
              <span>/</span>
              <span>{service.title}</span>
            </div>
            
            <h1>{heroContent.title}</h1>
            <p className="service-detail-hero-subtitle" style={{ color: "#d6cece" }}>{heroContent.subheadline}</p>
            <p className="service-detail-hero-body" style={{ color: "#d6cece" }}>{heroContent.body}</p>
            <div className="service-detail-hero-action">
              <AnimatedButton href="/contact">
                {heroContent.cta}
              </AnimatedButton>
            </div>
          </div>

          <div className="service-detail-hero-media">
            <Image
              src={`/services/${slug}.png`}
              alt={slug === "plc-programming-integration" ? "PLC programming and integration services for Siemens Allen-Bradley and Schneider platforms" : service.title}
              fill
              priority
            />
            <div className="service-detail-hero-panel">
              <strong>2017+</strong>
              <span>PLC, SCADA and plant automation delivery</span>
            </div>
          </div>
        </div>
      </section>

      {false ? (
      /* Main Content */
      <section className="section">
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.7fr 1fr", gap: 48, alignItems: "start" }}>
          {/* Details Column */}
          <div>
            <h2 style={{ marginBottom: 20 }}>Overview</h2>
            <p style={{ fontSize: 16, lineHeight: "28px", color: "#333333", marginBottom: 32 }}>
              {service.desc}
            </p>

            <h2 style={{ marginBottom: 20 }}>Key Capabilities</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, marginBottom: 32 }}>
              {service.features.map((feat, idx) => (
                <div key={idx} style={{ display: "flex", gap: 14, alignItems: "start", background: "#F9F8F6", padding: "16px 20px", borderRadius: 8, border: "1px solid #DCDAD5" }}>
                  <span className="service-doc-bullet-mark" />
                  <span style={{ fontSize: 14, fontWeight: 500, color: "#1B1B1B", lineHeight: "22px" }}>{feat}</span>
                </div>
              ))}
            </div>

            <div style={{ background: "rgba(87,94,207,0.04)", borderLeft: "4px solid #575ECF", padding: "20px 24px", borderRadius: "0 8px 8px 0" }}>
              <h3 style={{ textTransform: "uppercase", letterSpacing: "1px", color: "#575ECF", marginBottom: 8 }}>
                Ideal Deployment
              </h3>
              <p style={{ fontSize: 14, color: "#1B1B1B", lineHeight: "22px", margin: 0, fontWeight: 500 }}>
                {service.idealFor}
              </p>
            </div>
          </div>

          {/* Sidebar CTA Column */}
          <div>
            <div className="card" style={{ padding: 32, background: "#1B1B1B", color: "#FFFFFF", borderColor: "#2A2A2A" }}>
              <h2 style={{ color: "#FFFFFF", marginBottom: 16 }}>Request Consultation</h2>
              <p style={{ color: "#C5C1B9", fontSize: 14, lineHeight: "22px", marginBottom: 24 }}>
                Discuss your engineering needs directly with our project leaders. Let us build a robust solution for your plant.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <AnimatedButton href="/contact" className="w-full">
                  Request a Quote
                </AnimatedButton>
                <AnimatedButton
                  href="https://appt.link/meet-with-bhavik-bhimani-iz1nBIl5/hive-automation"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="dark"
                  icon={<Phone />}
                  className="w-full border-white/30"
                >
                  Schedule Technical Call
                </AnimatedButton>
              </div>
            </div>

            <div className="card" style={{ padding: 24, marginTop: 24 }}>
              <h2 style={{ marginBottom: 16 }}>Why Choose Hive?</h2>
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
      ) : null}

      {contentSections?.length ? (
        <section className="section service-doc-section-wrap">
          <div className="container">
            <div className="service-doc-sections">
              {contentSections.map((section, index) => {
                const isCapabilities = section.heading.includes("Capabilities");
                const isIndustries = section.heading.includes("Industries");
                const isProcess = section.heading.includes("Process");
                const isWhy = section.heading.includes("Why Choose");
                const sectionClass = isCapabilities
                  ? "service-doc-section-capabilities"
                  : isIndustries
                    ? "service-doc-section-industries"
                    : isProcess
                      ? "service-doc-section-process"
                      : isWhy
                        ? "service-doc-section-why"
                        : "service-doc-section-concept";
                const eyebrow = isCapabilities
                  ? "Capability Matrix"
                  : isIndustries
                    ? "Industry Fit"
                    : isProcess
                      ? "Project Method"
                      : isWhy
                        ? "Selection Reason"
                        : "Control Logic";
                const industryIcons = [Pill, Fuel, FlaskConical, Gauge, Package, Factory];
                const industryTitles = [
                  "Pharmaceutical",
                  "Oil & Gas",
                  "Chemical Plants",
                  "Compressor Stations",
                  "Packaging Lines",
                  "Plant Utilities",
                ];

                return (
                <article
                  key={section.heading}
                  className={`service-doc-section ${sectionClass}`}
                  style={{ "--service-section-index": index + 1 } as CSSProperties}
                >
                  <div className="service-doc-head">
                    <p className="section-label">{eyebrow}</p>
                    <h2>{section.heading}</h2>
                  </div>
                  <div className="service-doc-copy">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                    >
                      {paragraph}
                    </p>
                  ))}
                  </div>
                  {section.bullets?.length ? (
                    <div
                      className={`service-doc-bullets ${
                        isCapabilities
                          ? "service-doc-bullets-capabilities"
                          : isIndustries
                            ? "service-doc-bullets-industries"
                            : isProcess
                              ? "service-doc-bullets-process"
                              : ""
                      }`}
                    >
                      {section.bullets.map((item, bulletIndex) => {
                        const IndustryIcon = industryIcons[bulletIndex % industryIcons.length];
                        const industryParts = item.match(/^([^(]+?)(?:\s*\((.+)\))?$/);
                        const industryTitle = industryTitles[bulletIndex] ?? industryParts?.[1]?.trim() ?? item;
                        const industryDetail = industryParts?.[2]?.trim();

                        return (
                          <div
                            key={item}
                            className={`service-doc-bullet-card ${isIndustries ? "service-doc-industry-card" : ""}`}
                          >
                            {isIndustries ? (
                              <span className="service-doc-industry-icon">
                                <IndustryIcon size={30} strokeWidth={1.8} />
                              </span>
                            ) : (
                              <span className="service-doc-bullet-mark">
                                {isProcess ? String(bulletIndex + 1).padStart(2, "0") : ""}
                              </span>
                            )}
                            <span>
                              {isProcess
                                ? item.replace(/^\d+\.\s*/, "")
                                : isIndustries
                                  ? industryTitle
                                  : item}
                              {isIndustries && industryDetail ? (
                                <small>{industryDetail}</small>
                              ) : null}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {false && relatedLinks?.length ? (
        <section className="section">
          <div className="container" style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="section-heading">
              <p className="section-label">Related Automation Services</p>
              <h2>Plan the Complete Control System Around Your PLC</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
              {relatedLinks?.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="card"
                  style={{
                    padding: 24,
                    color: "#1B1B1B",
                    textDecoration: "none",
                    border: "1px solid var(--line)",
                    background: "#FFFFFF",
                    fontSize: 15,
                    fontWeight: 700,
                    lineHeight: "24px",
                    transition: "border-color 180ms ease, transform 180ms ease",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section pharma-related-section">
        <div className="container" style={{ width: "min(1400px, calc(100% - 24px))", maxWidth: "none" }}>
          <div className="section-heading">
            <p className="section-label">Related Services</p>
            <h2>Explore More Industrial Automation Services</h2>
          </div>
          <div className="pharma-related-scroll"  style={{ marginTop: "50px" }}>
            {relatedServices.map((item) => (
              <Link className="pharma-related-card" href={`/services/${item.slug}`} key={item.slug}>
                <div className="pharma-related-thumb">
                  <Image src={item.image} alt={item.title} fill className="pharma-related-image" sizes="320px" />
                </div>
                <div className="pharma-related-body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="pharma-related-link">
                    <span>View Service</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="center-action">
            <AnimatedButton href="/our-services">View All Services</AnimatedButton>
          </div>
        </div>
      </section>

      <section className="section clients-carousel-section" id="service-clients">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Our Clients</p>
            <h2>Trusted by Leading Companies &amp; Brands</h2>
          </div>
          <AnimatedStats compact />
          <ClientCarousel />
        </div>
      </section>

      {faqs?.length ? (
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">Frequently Asked Questions</p>
              <h2>PLC Programming Questions, Answered</h2>
            </div>
            <FaqAccordion items={faqs} />
          </div>
        </section>
      ) : null}

      <section className="section about-cta-section" id="service-cta">
        <div className="container">
          <p className="section-label">Ready to Transform Your Industrial Operations?</p>
          <h2>Partner with Hive Automation for Reliable Automation Support</h2>
          <p>
            Get Siemens PLC expertise, complete industrial automation support, and solutions tailored
            to your business needs.
          </p>
          <div className="action-row about-cta-actions">
            <AnimatedButton href="/contact">Contact Our Automation Experts</AnimatedButton>
            <AnimatedButton
              href="https://appt.link/meet-with-bhavik-bhimani-iz1nBIl5/hive-automation"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              icon={<Phone />}
            >
              Discuss Your Project
            </AnimatedButton>
          </div>
        </div>
      </section>
      
      <style>{`
        .pharma-related-section .section-heading {
          margin-bottom: 28px;
        }

        .pharma-related-scroll {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .pharma-related-card {
          display: flex;
          flex-direction: column;
          min-height: 100%;
          overflow: hidden;
          border: 1px solid #e4e9f0;
          border-radius: 18px;
          background: #ffffff;
          text-decoration: none;
          color: inherit;
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

        .pharma-related-image {
          object-fit: cover;
          transition: transform 220ms ease;
        }

        .pharma-related-card:hover .pharma-related-image,
        .pharma-related-card:focus-visible .pharma-related-image {
          transform: scale(1.04);
        }

        .pharma-related-body {
          display: grid;
          gap: 10px;
          padding: 18px 18px 20px;
        }

        .pharma-related-card h3 {
          margin: 0;
          color: #111214;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.28;
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
          margin-top: auto;
          color: #ff3434;
          font-size: 13px;
          font-weight: 700;
          transition: color 180ms ease, transform 180ms ease;
        }

        .pharma-related-card:hover .pharma-related-link,
        .pharma-related-card:focus-visible .pharma-related-link {
          color: #df2d2d;
          transform: translateY(-1px);
        }

        @media(max-width: 799px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }

          .pharma-related-scroll {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
