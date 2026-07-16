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
    tagline: "Precision logic for precise control custom PLC programs engineered for Siemens, Allen-Bradley and Schneider platforms.",
    desc: "We develop custom PLC programs tailored to your process and production goals. Whether youâ€™re upgrading an existing system or building from scratch, our logic design ensures safety, flexibility, and performance.",
    icon: "âš™ï¸",
    features: [
      "Siemens S7-200 Smart / S7-300 / S7-400 / S7-1200 / S7-1500 platform programming",
      "TIA Portal and classic Step 7 programming and migration",
      "Allen-Bradley ControlLogix, CompactLogix and Studio 5000 programming",
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
          "A Programmable Logic Controller (PLC) is the brain of any automated production line it reads inputs from sensors, executes control logic, and drives outputs to motors, valves, and actuators in real time. The quality of PLC programming directly determines your plant's uptime, safety compliance, and ability to scale. Poorly structured PLC code leads to nuisance faults, unsafe interlocks, and expensive downtime; well-engineered PLC programming reduces changeover time, simplifies troubleshooting, and extends equipment life.",
          "As a dedicated PLC programming company, Hive Automation builds control logic that plant engineers can actually maintain clearly structured, well-commented, and documented to IEC 61131-3 standards across Ladder Logic, Function Block Diagram (FBD), and Structured Text (ST)."
        ]
      },
      {
        heading: "Our PLC Programming & Integration Capabilities",
        paragraphs: [
          "We provide full-cycle PLC programming and integration services from control philosophy and logic design through commissioning and long-term support."
        ],
        bullets: [
          "Siemens S7-200 Smart / S7-300 / S7-400 / S7-1200 / S7-1500 platform programming",
          "TIA Portal and classic Step 7 programming and migration",
          "Allen-Bradley (Rockwell) ControlLogix, CompactLogix and Studio 5000 programming",
          "Redundant and fault-tolerant PLC architecture for 24/7 critical processes",
          "Safety PLC integration fail-safe logic, SIL-rated systems, and emergency interlocks",
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
          "1. Requirement study & control philosophy understanding your process, safety requirements, and existing architecture",
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
          "Hive Automation has been delivering PLC programming and integration services since 2017 from our Ahmedabad, Gujarat facility, serving clients across India in pharmaceutical, oil & gas, and chemical manufacturing. We work directly with plant engineering teams not through layers of subcontracting so every PLC program we deliver is documented, supportable, and built around your operators' real-world workflow, not a generic template.",
          "From single-machine PLC retrofits to multi-PLC plant-wide control architecture, our engineers are equally comfortable on Siemens, Allen-Bradley, and Schneider platforms meaning you are not locked into a single vendor ecosystem."
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
    tagline: "Centralized command. Complete plant control — Siemens PCS 7 and DCS solutions engineered for scalable, integrated process control.",
    desc: "Hive Automation engineers and implements robust Distributed Control Systems for batch and continuous process industries. From a single Siemens PCS 7 operator station to plant-wide redundant DCS architecture, our team delivers the accuracy, safety, and uptime that pharmaceutical, oil & gas, and chemical processing plants depend on around the clock.",
    icon: "🖥️",
    features: [
      "Siemens PCS 7, Simatic Batch, and APL (Advanced Process Library) configuration",
      "Redundant servers, controllers, and network architecture for zero single-point-of-failure designs",
      "Alarm management strategy and rationalization, aligned to ISA-18.2",
      "Process historian integration for trend analysis and regulatory traceability",
      "Batch management and reporting aligned to ISA-88 standards",
      "High-availability architecture engineered for 24/7 continuous operation",
      "Fieldbus integration — Profibus, Profinet, and HART instrument communication",
      "DCS lifecycle management, version control, and change management (MoC)"
    ],
    idealFor: "Pharma production, Oil & Gas terminals, utilities, and chemical processing plants.",
    seo: {
      title: "DCS Integration Services | Siemens PCS 7 | Hive Automation",
      description: "Siemens PCS 7 & DCS integration for pharma batch production, oil & gas terminals and chemical plants across India. Redundant, ISA-88 compliant systems.",
      keywords: [
        "distributed control system services",
        "DCS integration company",
        "DCS automation services",
        "Siemens PCS 7 integration",
        "DCS system integrator India",
        "process control system company",
        "Siemens PCS 7 Simatic Batch implementation company",
        "DCS system for pharmaceutical batch production",
        "redundant DCS architecture for continuous process plants",
        "DCS alarm management and historian integration services",
        "ISA-88 batch management implementation",
        "fieldbus Profibus Profinet integration for DCS",
        "DCS integration company in Ahmedabad",
        "Siemens PCS 7 system integrator Gujarat",
        "distributed control system company India",
        "DCS automation for oil and gas terminals India",
        "process control automation company Ahmedabad"
      ],
      ogImage: "https://hiveautomation.in/src/img/og-dcs-integration.jpg",
      ogImageAlt: "Distributed Control System Integration Services – Hive Automation",
      canonical: "https://hiveautomation.in/services/distributed-control-systems",
      articleSection: "Services",
      ogType: "article",
    },
    contentSections: [
      {
        heading: "What Is a DCS and When Do You Need One Over a PLC?",
        paragraphs: [
          "A Distributed Control System (DCS) coordinates control across an entire plant — multiple process units, hundreds or thousands of I/O points, and several operator stations — through a unified, redundant architecture. While a PLC is ideal for a single machine or skid, a DCS is built for plant-wide, continuous, or batch processes where centralized visibility, historian data, and high availability are non-negotiable.",
          "Hive Automation specializes in Siemens PCS 7, one of the most widely deployed DCS platforms in pharmaceutical and process manufacturing, alongside integration support for other major DCS platforms used across Indian process industries."
        ]
      },
      {
        heading: "Our DCS Engineering & Integration Capabilities",
        paragraphs: [
          "We deliver complete DCS lifecycle services — engineering, configuration, commissioning, and long-term lifecycle management."
        ],
        bullets: [
          "Siemens PCS 7, Simatic Batch, and APL (Advanced Process Library) configuration",
          "Redundant servers, controllers, and network architecture for zero single-point-of-failure designs",
          "Alarm management strategy and rationalization, aligned to ISA-18.2",
          "Process historian integration for trend analysis and regulatory traceability",
          "Batch management and reporting aligned to ISA-88 standards",
          "High-availability architecture engineered for 24/7 continuous operation",
          "Fieldbus integration — Profibus, Profinet, and HART instrument communication",
          "DCS lifecycle management, version control, and change management (MoC)"
        ]
      },
      {
        heading: "Industries We Serve",
        paragraphs: ["Our DCS engineering work is concentrated in industries where centralized, redundant process control is mission-critical:"],
        bullets: [
          "Pharmaceutical batch production (API and formulation plants)",
          "Oil & gas terminals, tank farms, and custody transfer systems",
          "Utilities — power generation, water and effluent treatment",
          "Chemical continuous process plants",
          "Petrochemical process plants",
          "Large multi-unit process facilities requiring centralized control and historian visibility"
        ]
      },
      {
        heading: "Our DCS Implementation Process",
        paragraphs: ["DCS projects involve more moving parts than a single PLC — our process is built to manage that complexity without surprises:"],
        bullets: [
          "1. Process study and control narrative development with your process engineering team",
          "2. DCS architecture design — server redundancy, network topology, and I/O distribution",
          "3. Configuration of control modules, batch sequences, and HMI graphics in Siemens PCS 7",
          "4. Alarm rationalization and historian/reporting setup",
          "5. Factory Acceptance Testing (FAT) of the full system before shipment",
          "6. Phased on-site commissioning to avoid disrupting existing production",
          "7. Operator training and documentation handover, with ongoing lifecycle support"
        ]
      },
      {
        heading: "Why Choose Hive Automation for DCS Projects in India",
        paragraphs: [
          "Since 2017, Hive Automation has built deep, hands-on Siemens PCS 7 expertise serving pharmaceutical and process plants across India from our Ahmedabad base. DCS projects require engineers who understand both control philosophy and plant operations — our team works closely with your process and validation teams so the final system is not just technically correct, but operable and auditable from day one.",
          "We support every stage of the DCS lifecycle — from greenfield design to upgrading an aging DCS installation — so you have a single accountable partner rather than juggling multiple vendors."
        ]
      }
    ],
    relatedLinks: [
      { href: "/services/plc-programming-integration", label: "DCS handles plant-wide control; for single-machine logic, see our PLC programming services." },
      { href: "/services/scada-hmi-development", label: "Pair your DCS with custom operator graphics — see SCADA & HMI development." },
      { href: "/services/analytics-reporting", label: "Turn DCS historian data into compliance-ready reports — see Analytics & Reporting." },
      { href: "/services/industrial-networking-cybersecurity", label: "Secure your DCS network architecture — see Industrial Networking & Cybersecurity." },
      { href: "/projects/pharmaceutical", label: "See our pharmaceutical DCS project examples." },
      { href: "/projects/oil-gas", label: "See our oil & gas DCS project examples." }
    ],
    faqs: [
      { q: "What is the difference between a DCS and a PLC?", a: "A PLC typically controls a single machine or process skid, while a DCS coordinates control across an entire plant with redundant servers, centralized historian data, and multiple operator stations — built for continuous or batch processes at scale." },
      { q: "Does Hive Automation work with Siemens PCS 7?", a: "Yes, Siemens PCS 7 (including Simatic Batch and APL libraries) is our core DCS platform, used extensively in pharmaceutical and process manufacturing projects we deliver." },
      { q: "Can you integrate a DCS with existing PLCs and SCADA systems?", a: "Yes. We regularly integrate DCS platforms with existing PLC-based skids and SCADA/HMI layers using Profibus, Profinet, and OPC connectivity, so you are not forced into a full rip-and-replace." },
      { q: "Is DCS implementation suitable for batch pharmaceutical production?", a: "Yes — we configure ISA-88-aligned batch management and Simatic Batch sequences specifically for GMP pharmaceutical batch production, including recipe management and audit-ready reporting." }
    ],
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          serviceType: "Distributed Control System Integration",
          name: "Distributed Control Systems (DCS) Integration Services",
          description: "Siemens PCS 7 and DCS engineering for pharmaceutical batch production, oil & gas terminals, and chemical processing plants, including redundant architecture, ISA-88 batch management, and fieldbus integration.",
          provider: {
            "@type": "Organization",
            name: "Hive Automation",
            url: "https://hiveautomation.in/",
            telephone: "+91-99786-03840",
            email: "info@hiveautomation.in",
            address: {
              "@type": "PostalAddress",
              streetAddress: "33, B N Industrial Estate, Near Kathwada GIDC Gate No 5, S P Ring Road, Near Nikol, Odhav",
              addressLocality: "Ahmedabad",
              addressRegion: "Gujarat",
              postalCode: "382415",
              addressCountry: "IN"
            }
          },
          areaServed: [
            { "@type": "Country", name: "India" },
            { "@type": "AdministrativeArea", name: "Gujarat" }
          ],
          url: "https://hiveautomation.in/services/distributed-control-systems"
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://hiveautomation.in/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://hiveautomation.in/our-services" },
            { "@type": "ListItem", position: 3, name: "Distributed Control Systems (DCS)", item: "https://hiveautomation.in/services/distributed-control-systems" }
          ]
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is the difference between a DCS and a PLC?",
              acceptedAnswer: { "@type": "Answer", text: "A PLC typically controls a single machine or process skid, while a DCS coordinates control across an entire plant with redundant servers, centralized historian data, and multiple operator stations, built for continuous or batch processes at scale." }
            },
            {
              "@type": "Question",
              name: "Does Hive Automation work with Siemens PCS 7?",
              acceptedAnswer: { "@type": "Answer", text: "Yes, Siemens PCS 7, including Simatic Batch and APL libraries, is our core DCS platform for pharmaceutical and process manufacturing projects." }
            },
            {
              "@type": "Question",
              name: "Can you integrate a DCS with existing PLCs and SCADA systems?",
              acceptedAnswer: { "@type": "Answer", text: "Yes, we integrate DCS platforms with existing PLC-based skids and SCADA/HMI layers using Profibus, Profinet, and OPC connectivity." }
            },
            {
              "@type": "Question",
              name: "Is DCS implementation suitable for batch pharmaceutical production?",
              acceptedAnswer: { "@type": "Answer", text: "Yes, we configure ISA-88-aligned batch management and Simatic Batch sequences for GMP pharmaceutical batch production, including recipe management and audit-ready reporting." }
            }
          ]
        }
      ]
    }
  },
  "scada-hmi-development": {
    title: "SCADA & HMI Development",
    tagline: "Smart visuals for smarter decisions SCADA and HMI interfaces built for real-time monitoring, clarity, and safety.",
    desc: "Hive Automation designs and develops SCADA and HMI systems that give plant operators and engineers a clear, real-time view of every process variable that matters. From legacy panel replacement to brand-new enterprise dashboards, our SCADA/HMI development is built around usability first because an interface operators don't trust is an interface they won't use correctly under pressure.",
    icon: "ðŸ“Š",
    features: [
      "New panel and PLC programming concept readiness review",
      "New graphics development alarms, trends, mimic screens, and navigation built for operator clarity",
      "Collaborative concept design sessions with your operations and engineering teams",
      "Factory Acceptance Testing (FAT), Integrated FAT (IFAT), and Site Acceptance Testing (SAT)",
      "Full site commissioning and operator training and handover",
      "Old system study at site auditing existing SCADA/HMI and PLC architecture before any redesign",
      "Old PLC program study to ensure new graphics map correctly to existing control logic",
      "Footprint and panel-fit verification for hardware replacement projects"
    ],
    idealFor: "Pharmaceutical, Operator panels, control rooms, mobile monitoring, and enterprise-level dashboards.",
    seo: {
      title: "SCADA & HMI Development Services | Hive Automation India",
      description: "Custom SCADA & HMI development for real-time plant monitoring. Wonderware, Siemens WinCC, FAT/SAT testing & commissioning for plants across India.",
      keywords: [
        "SCADA development company",
        "HMI development services",
        "SCADA HMI integration",
        "SCADA system design",
        "HMI panel programming",
        "SCADA software development India",
        "Wonderware InTouch SCADA development company",
        "SCADA HMI development for pharmaceutical plants",
        "operator interface design for control rooms",
        "SCADA FAT SAT testing and site commissioning services",
        "custom SCADA dashboard development for manufacturing",
        "HMI graphics development for industrial automation",
        "SCADA HMI development company in Ahmedabad",
        "SCADA system integrator Gujarat",
        "HMI panel programming services India",
        "SCADA software company for pharma plants India",
        "industrial automation SCADA company Ahmedabad"
      ],
      ogImage: "https://hiveautomation.in/src/img/og-scada-hmi.jpg",
      ogImageAlt: "SCADA and HMI Development Services â€“ Hive Automation",
      canonical: "https://hiveautomation.in/services/scada-hmi-development",
      articleSection: "Services",
      ogType: "article",
    },
    contentSections: [
      {
        heading: "What Is SCADA & HMI Development and Why It Matters",
        paragraphs: [
          "SCADA (Supervisory Control and Data Acquisition) and HMI (Human-Machine Interface) systems are how your operators see and interact with the process alarms, trends, setpoints, and control commands all flow through this layer. A well-designed SCADA/HMI system reduces operator error, speeds up fault diagnosis, and turns raw PLC/DCS data into decisions your team can act on in seconds, not minutes.",
          "Hive Automation builds SCADA and HMI systems on industry-standard platforms including Wonderware InTouch, Siemens WinCC, and other major SCADA software, tailored to each plant's process and operator workflow rather than a generic template."
        ]
      },
      {
        heading: "Our SCADA & HMI Development Capabilities",
        paragraphs: ["We follow a structured discovery-to-commissioning approach for every SCADA/HMI project, whether it's a full replacement or an upgrade of an existing system."],
        bullets: [
          "Old system study at site auditing existing SCADA/HMI and PLC architecture before any redesign",
          "Old PLC program study to ensure new graphics map correctly to existing control logic",
          "Footprint and panel-fit verification for hardware replacement projects",
          "New panel and PLC programming concept readiness review",
          "Collaborative concept design sessions with your operations and engineering teams",
          "New graphics development alarms, trends, mimic screens, and navigation built for operator clarity",
          "Factory Acceptance Testing (FAT), Integrated FAT (IFAT), and Site Acceptance Testing (SAT)",
          "Full site commissioning and operator training and handover"
        ]
      },
      {
        heading: "Industries We Serve",
        paragraphs: ["Our SCADA/HMI development work spans facilities where real-time visibility is critical to safe, compliant operation:"],
        bullets: [
          "Pharmaceutical manufacturing and packaging plants",
          "Operator panels for individual machines and process skids",
          "Centralized control rooms for plant-wide monitoring",
          "Mobile and remote monitoring dashboards for field and management visibility",
          "Enterprise-level dashboards aggregating multiple lines or sites",
          "Utility and process systems requiring alarm, trend, and operator control visibility"
        ]
      },
      {
        heading: "Our SCADA & HMI Development Process",
        paragraphs: ["Every project follows the same disciplined sequence to minimize risk on running production lines:"],
        bullets: [
          "1. On-site study of existing systems and PLC programs",
          "2. Concept design and stakeholder sign-off with operations teams",
          "3. Graphics and screen development in your chosen SCADA platform",
          "4. Internal FAT/IFAT testing before deployment",
          "5. Site Acceptance Testing (SAT) under real process conditions",
          "6. Commissioning, cutover, and operator training",
          "7. Post-commissioning support and minor change requests"
        ]
      },
      {
        heading: "Why Choose Hive Automation for SCADA & HMI Projects",
        paragraphs: [
          "Since 2017, Hive Automation has developed SCADA and HMI systems for pharmaceutical and process plants across India, with deep familiarity in both Wonderware InTouch and Siemens WinCC environments. We don't just write graphics we study your existing PLC program and operator workflow first, so the final interface actually reflects how your team works the floor, not a generic out-of-the-box template.",
          "Our structured FAT/IFAT/SAT process means fewer surprises during commissioning and a faster, safer go-live on running production lines."
        ]
      }
    ],
    relatedLinks: [
      { href: "/services/plc-programming-integration", label: "SCADA visualizes the data from your PLC see our PLC programming services." },
      { href: "/services/distributed-control-systems", label: "For plant-wide DCS operator graphics, see our DCS integration services." },
      { href: "/services/analytics-reporting", label: "Turn your SCADA historian data into KPI dashboards and compliance reports." },
      { href: "/services/system-upgrade-retrofits", label: "Replacing an aging SCADA/HMI panel? See our system upgrade & retrofit services." },
      { href: "/our-projects", label: "See case studies wherever SCADA/HMI screenshots or projects are shown." }
    ],
    faqs: [
      { q: "Which SCADA platforms does Hive Automation work with?", a: "We develop on Wonderware InTouch, Siemens WinCC, and other major SCADA/HMI platforms, selecting the right tool based on your existing infrastructure and plant requirements." },
      { q: "Can you upgrade our existing SCADA system without a full shutdown?", a: "Yes. We start with an on-site study of your existing system and PLC program, then plan a phased cutover and SAT process designed to minimize production downtime." },
      { q: "What is the difference between FAT, IFAT and SAT?", a: "FAT (Factory Acceptance Testing) validates the system in our facility before shipment. IFAT (Integrated FAT) tests the SCADA/HMI together with the PLC or DCS as an integrated system. SAT (Site Acceptance Testing) is final validation on-site under real process conditions before go-live." },
      { q: "Do you provide operator training after commissioning?", a: "Yes, operator and engineering team training is included as part of our standard SCADA/HMI commissioning process." }
    ],
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          serviceType: "SCADA and HMI Development",
          name: "SCADA & HMI Development Services",
          description: "Custom SCADA and HMI development on Wonderware InTouch and Siemens WinCC, including legacy system study, graphics development, FAT/IFAT/SAT testing, and site commissioning for industrial plants.",
          provider: {
            "@type": "Organization",
            name: "Hive Automation",
            url: "https://hiveautomation.in/",
            telephone: "+91-99786-03840",
            email: "info@hiveautomation.in",
            address: {
              "@type": "PostalAddress",
              streetAddress: "33, B N Industrial Estate, Near Kathwada GIDC Gate No 5, S P Ring Road, Near Nikol, Odhav",
              addressLocality: "Ahmedabad",
              addressRegion: "Gujarat",
              postalCode: "382415",
              addressCountry: "IN"
            }
          },
          areaServed: [
            { "@type": "Country", name: "India" },
            { "@type": "AdministrativeArea", name: "Gujarat" }
          ],
          url: "https://hiveautomation.in/services/scada-hmi-development"
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://hiveautomation.in/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://hiveautomation.in/our-services" },
            { "@type": "ListItem", position: 3, name: "SCADA & HMI Development", item: "https://hiveautomation.in/services/scada-hmi-development" }
          ]
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which SCADA platforms does Hive Automation work with?",
              acceptedAnswer: { "@type": "Answer", text: "We develop on Wonderware InTouch, Siemens WinCC, and other major SCADA/HMI platforms, selecting the right tool based on your existing infrastructure and plant requirements." }
            },
            {
              "@type": "Question",
              name: "Can you upgrade our existing SCADA system without a full shutdown?",
              acceptedAnswer: { "@type": "Answer", text: "Yes, we start with an on-site study of your existing system and PLC program, then plan a phased cutover and SAT process designed to minimize production downtime." }
            },
            {
              "@type": "Question",
              name: "What is the difference between FAT, IFAT and SAT?",
              acceptedAnswer: { "@type": "Answer", text: "FAT validates the system in our facility before shipment, IFAT tests the SCADA/HMI together with the PLC or DCS as an integrated system, and SAT is final validation on-site under real process conditions before go-live." }
            },
            {
              "@type": "Question",
              name: "Do you provide operator training after commissioning?",
              acceptedAnswer: { "@type": "Answer", text: "Yes, operator and engineering team training is included as part of our standard SCADA/HMI commissioning process." }
            }
          ]
        }
      ]
    }
  },
  "turnkey-project-execution": {
    title: "Turnkey Project Execution",
    tagline: "End-to-end project delivery from design to commissioning, under one roof.",
    desc: "Hive Automation delivers complete automation solutions as a single accountable partner from the first control philosophy discussion to final site commissioning and handover. Our engineers stay engaged through every project phase, so you are never left managing multiple vendors, conflicting documentation, or finger-pointing when something doesn't fit.",
    icon: "ðŸ—ï¸",
    features: [
      "Control philosophy development and Functional Design Specification (FDS) documentation",
      "Electrical panel design and PLC cabinet fabrication to relevant safety and wiring standards",
      "Instrument selection, specification, and integration with the control system",
      "Factory Acceptance Testing (FAT) and Site Acceptance Testing (SAT) execution and documentation",
      "Loop checking and full system commissioning",
      "On-site installation support and supervision through go-live"
    ],
    idealFor: "Greenfield projects, plant expansions, modernization efforts.",
    seo: {
      title: "Turnkey Automation Project Execution | Hive Automation",
      description: "End-to-end turnkey automation: control philosophy, panel fabrication, FAT/SAT and commissioning under one roof. Greenfield & expansion projects across India.",
      keywords: [
        "turnkey automation project execution",
        "turnkey automation solutions provider",
        "EPC automation company",
        "control panel fabrication company",
        "turnkey industrial automation company India",
        "automation EPC contractor",
        "end to end automation project execution company",
        "PLC control panel design and fabrication services",
        "functional design specification FDS automation project",
        "FAT SAT execution and documentation services",
        "greenfield automation project execution company",
        "loop checking and commissioning services",
        "turnkey automation company in Ahmedabad",
        "control panel fabrication company Gujarat",
        "automation EPC contractor India",
        "turnkey automation project execution Ahmedabad",
        "industrial automation system integrator Gujarat"
      ],
      ogImage: "https://hiveautomation.in/src/img/og-turnkey.jpg",
      ogImageAlt: "Turnkey Automation Project Execution â€“ Hive Automation",
      canonical: "https://hiveautomation.in/services/turnkey-project-execution",
      articleSection: "Services",
      ogType: "article",
    },
    contentSections: [
      {
        heading: "What Is Turnkey Project Execution in Industrial Automation?",
        paragraphs: [
          "A turnkey automation project means one partner owns the full scope engineering design, panel fabrication, software, installation, and commissioning and hands you a system that is ready to run. This eliminates the coordination overhead and accountability gaps that come from splitting a project across a design consultant, a panel fabricator, a programmer, and a commissioning contractor.",
          "Hive Automation operates as a single-window turnkey automation EPC partner for plants across India, managing the entire project lifecycle so your internal team can focus on production, not vendor management."
        ]
      },
      {
        heading: "Our Turnkey Project Execution Capabilities",
        paragraphs: ["We cover every phase of project delivery in-house, ensuring consistency from concept to commissioning."],
        bullets: [
          "Control philosophy development and Functional Design Specification (FDS) documentation",
          "Electrical panel design and PLC cabinet fabrication to relevant safety and wiring standards",
          "Instrument selection, specification, and integration with the control system",
          "Factory Acceptance Testing (FAT) and Site Acceptance Testing (SAT) execution and documentation",
          "Loop checking and full system commissioning",
          "On-site installation support and supervision through go-live"
        ]
      },
      {
        heading: "Industries We Serve",
        paragraphs: ["Our turnkey project execution work spans process-critical industries where consistent delivery and single-point accountability matter most:"],
        bullets: [
          "Pharmaceutical manufacturing and packaging facilities requiring validated, documentation-driven execution",
          "Oil & gas terminals, utility skids, and process systems with critical commissioning requirements",
          "Chemical and process manufacturing plants needing coordinated engineering, fabrication, and site handover",
          "Greenfield automation projects where a single partner owns the delivery from design to commissioning",
          "Plant expansion and capacity addition projects integrated into existing live facilities",
          "Modernization and capital improvement projects across regulated and process-critical industries"
        ]
      },
      {
        heading: "Our Turnkey Execution Process",
        paragraphs: ["Every turnkey project follows a structured, documented sequence to keep scope, cost, and schedule under control:"],
        bullets: [
          "1. Requirement gathering and control philosophy workshop with your team",
          "2. Functional Design Specification (FDS) development and client sign-off",
          "3. Panel design, PLC/DCS programming, and fabrication",
          "4. Instrument procurement, selection, and integration planning",
          "5. Factory Acceptance Testing (FAT) with full documentation",
          "6. On-site installation, loop checking, and supervision",
          "7. Site Acceptance Testing (SAT), commissioning, and as-built handover"
        ]
      },
      {
        heading: "Why Choose Hive Automation for Turnkey Automation Projects",
        paragraphs: [
          "Since 2017, Hive Automation has executed turnkey automation projects across pharmaceutical, oil & gas, and chemical industries from our Ahmedabad facility. Because we control engineering, fabrication, and commissioning in-house, project decisions move faster and documentation stays consistent there is no gap between what was designed on paper and what actually gets commissioned on site.",
          "Whether you are building a greenfield facility or expanding an existing line, our turnkey model gives you a single point of contact and a single point of accountability for the entire automation scope."
        ]
      }
    ],
    relatedLinks: [
      { href: "/services/plc-programming-integration", label: "Turnkey projects include full PLC programming see our PLC services in detail." },
      { href: "/services/scada-hmi-development", label: "Turnkey delivery includes SCADA/HMI graphics see our SCADA & HMI development." },
      { href: "/services/industrial-networking-cybersecurity", label: "We also design the secure network backbone for your turnkey project." },
      { href: "/our-projects", label: "See completed turnkey automation projects across pharma, oil & gas, and chemicals." },
      { href: "/about", label: "Learn about our turnkey, single-window project delivery model." }
    ],
    faqs: [
      { q: "What does turnkey mean in an automation project?", a: "Turnkey means one partner Hive Automation handles the entire project scope, from control philosophy and panel fabrication through FAT, installation, and final commissioning, so the system is ready to run when handed over." },
      { q: "Do you handle both control panel fabrication and PLC programming in-house?", a: "Yes. We design and fabricate control panels and program the PLC/SCADA/DCS logic in-house, which keeps engineering and fabrication tightly coordinated and reduces integration risk." },
      { q: "Can Hive Automation execute projects outside Gujarat?", a: "Yes, we execute turnkey automation projects for clients across India, with on-site installation and commissioning support wherever the facility is located." },
      { q: "What documentation do we receive at project handover?", a: "You receive Functional Design Specification documents, FAT/SAT reports, loop check sheets, as-built drawings, and program backups as part of standard project handover." }
    ],
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          serviceType: "Turnkey Automation Project Execution",
          name: "Turnkey Project Execution Services",
          description: "End-to-end turnkey automation project delivery including control philosophy, FDS, panel fabrication, instrument integration, FAT/SAT execution, and on-site commissioning for greenfield and expansion projects.",
          provider: {
            "@type": "Organization",
            name: "Hive Automation",
            url: "https://hiveautomation.in/",
            telephone: "+91-99786-03840",
            email: "info@hiveautomation.in",
            address: {
              "@type": "PostalAddress",
              streetAddress: "33, B N Industrial Estate, Near Kathwada GIDC Gate No 5, S P Ring Road, Near Nikol, Odhav",
              addressLocality: "Ahmedabad",
              addressRegion: "Gujarat",
              postalCode: "382415",
              addressCountry: "IN"
            }
          },
          areaServed: [
            { "@type": "Country", name: "India" }
          ],
          url: "https://hiveautomation.in/services/turnkey-project-execution"
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://hiveautomation.in/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://hiveautomation.in/our-services" },
            { "@type": "ListItem", position: 3, name: "Turnkey Project Execution", item: "https://hiveautomation.in/services/turnkey-project-execution" }
          ]
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What does turnkey mean in an automation project?",
              acceptedAnswer: { "@type": "Answer", text: "Turnkey means one partner handles the entire project scope, from control philosophy and panel fabrication through FAT, installation, and final commissioning, so the system is ready to run when handed over." }
            },
            {
              "@type": "Question",
              name: "Do you handle both control panel fabrication and PLC programming in-house?",
              acceptedAnswer: { "@type": "Answer", text: "Yes, we design and fabricate control panels and program the PLC, SCADA and DCS logic in-house, which keeps engineering and fabrication tightly coordinated." }
            },
            {
              "@type": "Question",
              name: "Can Hive Automation execute projects outside Gujarat?",
              acceptedAnswer: { "@type": "Answer", text: "Yes, we execute turnkey automation projects for clients across India with on-site installation and commissioning support wherever the facility is located." }
            },
            {
              "@type": "Question",
              name: "What documentation do we receive at project handover?",
              acceptedAnswer: { "@type": "Answer", text: "You receive Functional Design Specification documents, FAT and SAT reports, loop check sheets, as-built drawings, and program backups as part of standard project handover." }
            }
          ]
        }
      ]
    }
  },
  "system-upgrade-retrofits": {
    title: "System Upgrades & Retrofits",
    tagline: "Modernize without disrupting production legacy control system upgrades engineered for minimal downtime.",
    desc: "Hive Automation upgrades aging PLC and DCS systems including legacy Siemens S5 and S7-300 hardware to modern, fully supported platforms like S7-1500 and TIA Portal. Our retrofit strategies are built around your production schedule, not the other way around, so you get future-ready performance without a costly, disruptive shutdown.",
    icon: "ðŸ”„",
    features: [
      "Legacy Siemens S5 / S7-300 to S7-1500 and TIA Portal migration",
      "Hardware replacement and I/O rewiring, mapped against existing field cabling",
      "PLC code translation from legacy languages into current Ladder/SCL/FBD standards, with full testing",
      "Backward-compatible, phased migration strategies that allow partial cutover",
      "Obsolescence risk assessment and forward-looking lifecycle management planning"
    ],
    idealFor: "Aging production lines, obsolete PLC/DCS systems, M&A integration.",
    seo: {
      title: "PLC & Control System Upgrade & Retrofit | Hive Automation",
      description: "Upgrade legacy Siemens S5/S7-300 to S7-1500 & TIA Portal with minimal downtime. Hardware replacement, code translation & phased migration in India.",
      keywords: [
        "PLC retrofit services",
        "control system upgrade company",
        "legacy PLC migration services",
        "Siemens S5 to S7 migration",
        "PLC obsolescence management",
        "automation system modernization",
        "Siemens S5 to S7-1500 retrofit company",
        "legacy PLC to TIA Portal migration services",
        "PLC hardware replacement and I/O rewiring services",
        "obsolete PLC system upgrade company India",
        "phased migration strategy for plant automation upgrade",
        "code translation services for legacy PLC systems",
        "PLC retrofit company in Ahmedabad",
        "legacy automation upgrade services Gujarat",
        "Siemens S5 S7 migration company India",
        "control system modernization company Ahmedabad",
        "obsolete PLC replacement services India"
      ],
      ogImage: "https://hiveautomation.in/src/img/og-retrofit.jpg",
      ogImageAlt: "PLC and Control System Upgrade and Retrofit â€“ Hive Automation",
      canonical: "https://hiveautomation.in/services/system-upgrade-retrofits",
      articleSection: "Services",
      ogType: "article",
    },
    contentSections: [
      {
        heading: "Why Legacy PLC & Control Systems Become a Business Risk",
        paragraphs: [
          "Siemens officially discontinued support and spare parts for the S5 series years ago, and S7-300 hardware has followed the same path. Running production on unsupported PLC hardware means every failure is a gamble sourcing parts on the grey market, no manufacturer support, and growing difficulty finding engineers who can still program in the old environment. The risk compounds every year the upgrade is delayed.",
          "A planned retrofit, executed by a team that understands both the legacy platform and the modern replacement, converts that risk into a controlled, budgeted project instead of an unplanned outage."
        ]
      },
      {
        heading: "Our System Upgrade & Retrofit Capabilities",
        paragraphs: ["We specialize in moving plants off obsolete control hardware onto current, supported platforms without starting from a blank sheet of paper."],
        bullets: [
          "Legacy Siemens S5 / S7-300 to S7-1500 and TIA Portal migration",
          "Hardware replacement and I/O rewiring, mapped against existing field cabling",
          "PLC code translation from legacy languages into current Ladder/SCL/FBD standards, with full testing",
          "Backward-compatible, phased migration strategies that allow partial cutover",
          "Obsolescence risk assessment and forward-looking lifecycle management planning"
        ]
      },
      {
        heading: "Industries We Serve",
        paragraphs: [
          "We deliver retrofit and upgrade projects across process-critical industries where obsolete control systems create real operational risk."
        ],
        bullets: [
          "Pharmaceutical equipment and utility systems (validated upgrades with compliance-focused documentation)",
          "Oil & gas terminals, process skids, and utility control systems on obsolete PLC/DCS platforms",
          "Chemical and process manufacturing plants requiring phased migration to supported hardware",
          "Compressor stations and rotating equipment packages with unsupported legacy controllers",
          "Packaging, conveying, and dosing systems where downtime-sensitive cutovers are essential",
          "Plant utilities including HVAC, WFI, boilers, water treatment, and distribution systems"
        ]
      },
      {
        heading: "Our Retrofit & Upgrade Process",
        paragraphs: ["Every retrofit project is planned around your production calendar, with downtime windows agreed upfront:"],
        bullets: [
          "1. On-site audit of existing PLC/DCS hardware, code, and I/O architecture",
          "2. Obsolescence risk assessment and upgrade roadmap proposal",
          "3. Code translation and offline testing of the migrated logic",
          "4. Hardware procurement and panel modification planning",
          "5. Phased cutover scheduled around planned maintenance windows",
          "6. On-site commissioning, loop verification, and parallel-run validation",
          "7. As-built documentation and operator/maintenance team handover"
        ]
      },
      {
        heading: "Why Choose Hive Automation for Your Control System Retrofit",
        paragraphs: [
          "Migrating legacy logic isn't just a hardware swap it requires engineers who can actually read and translate old Siemens S5/S7-300 code accurately, not just replace the panel. Hive Automation has handled this exact migration path repeatedly for pharmaceutical, oil & gas, and chemical plants across India since 2017, which means fewer surprises in your legacy code and a tighter, more predictable cutover window.",
          "We plan every retrofit around minimizing production downtime, with phased migration options so you are never forced into an all-or-nothing shutdown."
        ]
      }
    ],
    relatedLinks: [
      { href: "/services/plc-programming-integration", label: "All retrofit projects include fresh PLC programming see our PLC services." },
      { href: "/services/scada-hmi-development", label: "Pair your hardware retrofit with a modern SCADA/HMI upgrade." },
      { href: "/services/turnkey-project-execution", label: "For a full panel rebuild alongside your retrofit, see turnkey project execution." },
      { href: "/services/industrial-networking-cybersecurity", label: "Modern PLCs need a secure network see our networking & cybersecurity services." },
      { href: "/our-projects", label: "Case studies mentioning legacy upgrades should link here." }
    ],
    faqs: [
      { q: "Is Siemens S5 still supported?", a: "No. Siemens has discontinued manufacturer support and spare parts for the S5 series. Plants still running S5 hardware face increasing risk of unplanned downtime with no official support path, which is why migration to S7-1500/TIA Portal is strongly recommended." },
      { q: "How much downtime does a PLC retrofit require?", a: "It depends on system complexity, but our phased migration approach is specifically designed to minimize downtime often allowing cutover during existing planned maintenance windows rather than requiring a dedicated shutdown." },
      { q: "Can you reuse our existing field wiring and instruments?", a: "In most cases, yes. We assess existing I/O wiring and field instruments during the audit phase and design the retrofit to reuse compatible infrastructure wherever possible, reducing both cost and downtime." },
      { q: "Do you provide a risk assessment before recommending a retrofit?", a: "Yes, every retrofit engagement starts with an on-site obsolescence risk assessment so you can make a budgeted, informed decision rather than reacting to an emergency failure." }
    ],
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          serviceType: "Control System Upgrade and Retrofit",
          name: "System Upgrades & Retrofits",
          description: "Legacy Siemens S5 and S7-300 to S7-1500/TIA Portal migration, hardware replacement, I/O rewiring, code translation, and phased migration planning for obsolete PLC and DCS systems.",
          provider: {
            "@type": "Organization",
            name: "Hive Automation",
            url: "https://hiveautomation.in/",
            telephone: "+91-99786-03840",
            email: "info@hiveautomation.in",
            address: {
              "@type": "PostalAddress",
              streetAddress: "33, B N Industrial Estate, Near Kathwada GIDC Gate No 5, S P Ring Road, Near Nikol, Odhav",
              addressLocality: "Ahmedabad",
              addressRegion: "Gujarat",
              postalCode: "382415",
              addressCountry: "IN"
            }
          },
          areaServed: [
            { "@type": "Country", name: "India" }
          ],
          url: "https://hiveautomation.in/services/system-upgrade-retrofits"
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://hiveautomation.in/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://hiveautomation.in/our-services" },
            { "@type": "ListItem", position: 3, name: "System Upgrades & Retrofits", item: "https://hiveautomation.in/services/system-upgrade-retrofits" }
          ]
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is Siemens S5 still supported?",
              acceptedAnswer: { "@type": "Answer", text: "No, Siemens has discontinued manufacturer support and spare parts for the S5 series, which is why migration to S7-1500/TIA Portal is strongly recommended for plants still running S5 hardware." }
            },
            {
              "@type": "Question",
              name: "How much downtime does a PLC retrofit require?",
              acceptedAnswer: { "@type": "Answer", text: "It depends on system complexity, but our phased migration approach is designed to minimize downtime, often allowing cutover during existing planned maintenance windows." }
            },
            {
              "@type": "Question",
              name: "Can you reuse our existing field wiring and instruments?",
              acceptedAnswer: { "@type": "Answer", text: "In most cases yes, we assess existing I/O wiring and field instruments during the audit phase and design the retrofit to reuse compatible infrastructure wherever possible." }
            },
            {
              "@type": "Question",
              name: "Do you provide a risk assessment before recommending a retrofit?",
              acceptedAnswer: { "@type": "Answer", text: "Yes, every retrofit engagement starts with an on-site obsolescence risk assessment so you can make a budgeted, informed decision." }
            }
          ]
        }
      ]
    }
  },
  "industrial-networking-cybersecurity": {
    title: "Industrial Networking & Cybersecurity",
    tagline: "Secure, scalable communication infrastructure from control level to enterprise level, built for performance and uptime.",
    desc: "Hive Automation designs industrial networks that are resilient, properly segmented, and secure by design not bolted on after the fact. As plants connect more PLCs, SCADA systems, and remote access points to the network, the line between IT and OT keeps blurring. Our networking and cybersecurity services are built to keep that convergence productive without exposing your control systems to risk.",
    icon: "ðŸ”’",
    features: [
      "Industrial Ethernet design and implementation Profinet, Modbus TCP, and Ethernet/IP",
      "Managed switch configuration, VLAN segmentation, and firewall rule design",
      "Secure remote access solutions using VPN and encrypted tunnelling for vendor and engineering access",
      "Network segmentation aligned to ISA-95 and the Purdue Model (Level 0 field devices through Level 5 enterprise)",
      "Cybersecurity risk assessments and system hardening for PLC, SCADA, and DCS environments",
      "IT/OT integration architecture for secure, controlled data flow between plant floor and enterprise systems"
    ],
    idealFor: "Digitization, remote monitoring, IT/OT convergence, and audit compliance.",
    seo: {
      title: "Industrial Networking & OT Cybersecurity | Hive Automation",
      description: "Industrial network design & OT cybersecurity hardening aligned to IEC 62443 and the Purdue Model. Secure remote access, VLANs & firewalls across India.",
      keywords: [
        "industrial networking services",
        "OT cybersecurity company",
        "industrial cybersecurity services",
        "IT OT network segmentation",
        "industrial ethernet integration",
        "ICS cybersecurity company India",
        "IEC 62443 OT cybersecurity assessment company",
        "Purdue Model network segmentation services",
        "secure remote access for industrial control systems",
        "IT OT convergence services for manufacturing plants",
        "Profinet Modbus TCP industrial network design",
        "cybersecurity risk assessment for SCADA and PLC systems",
        "industrial cybersecurity company in Ahmedabad",
        "OT network security services Gujarat",
        "ICS cybersecurity company India",
        "industrial networking company Ahmedabad",
        "IT OT integration services for plants in India"
      ],
      ogImage: "https://hiveautomation.in/src/img/og-cybersecurity.jpg",
      ogImageAlt: "Industrial Networking and OT Cybersecurity â€“ Hive Automation",
      canonical: "https://hiveautomation.in/services/industrial-networking-cybersecurity",
      articleSection: "Services",
      ogType: "article",
    },
    contentSections: [
      {
        heading: "Why Industrial Networks Need Purpose-Built Security",
        paragraphs: [
          "Operational Technology (OT) networks were historically designed assuming they were physically isolated but remote monitoring, vendor support access, and IT/OT data integration have closed that air gap at most modern plants. A flat, unsegmented network means a single compromised laptop or remote connection can reach your PLCs and DCS directly. The IEC 62443 standard the primary international framework for industrial cybersecurity exists specifically to address this, using zones and conduits to contain risk rather than relying on a single perimeter firewall.",
          "Hive Automation designs and hardens industrial networks with this zones-and-conduits approach from day one, so security is structural rather than an afterthought bolted onto an existing flat network."
        ]
      },
      {
        heading: "Our Industrial Networking & Cybersecurity Capabilities",
        paragraphs: ["We deliver both the physical/network layer and the cybersecurity hardening layer as one integrated service."],
        bullets: [
          "Industrial Ethernet design and implementation Profinet, Modbus TCP, and Ethernet/IP",
          "Managed switch configuration, VLAN segmentation, and firewall rule design",
          "Secure remote access solutions using VPN and encrypted tunnelling for vendor and engineering access",
          "Network segmentation aligned to ISA-95 and the Purdue Model (Level 0 field devices through Level 5 enterprise)",
          "Cybersecurity risk assessments and system hardening for PLC, SCADA, and DCS environments",
          "IT/OT integration architecture for secure, controlled data flow between plant floor and enterprise systems"
        ]
      },
      {
        heading: "Industries We Serve",
        paragraphs: [
          "Our industrial networking and OT cybersecurity work spans facilities where secure communication and segmentation are critical to safe, uninterrupted production:"
        ],
        bullets: [
          "Pharmaceutical manufacturing and validated utility systems requiring controlled access and audit-friendly architecture",
          "Oil & gas terminals, process skids, and DCS environments with safety-critical communication paths",
          "Chemical and process manufacturing plants with mixed PLC, SCADA, DCS, and historian networks",
          "Compressor stations and rotating equipment packages needing reliable remote diagnostics and secure vendor access",
          "Packaging, conveying, and machine-level automation systems integrated into wider plant OT networks",
          "Plant utilities and infrastructure systems including HVAC, water treatment, boilers, and distribution networks"
        ]
      },
      {
        heading: "Our Network & Cybersecurity Implementation Process",
        paragraphs: ["We assess before we change anything OT environments don't tolerate trial-and-error network changes during production:"],
        bullets: [
          "1. Network and asset discovery mapping existing PLC, SCADA, DCS, and IT connections",
          "2. Risk assessment against IEC 62443 zones-and-conduits methodology",
          "3. Target architecture design segmentation, VLANs, firewall rules, and remote access strategy",
          "4. Phased implementation scheduled around planned maintenance windows",
          "5. Validation testing to confirm process communication is unaffected",
          "6. Documentation handover and ongoing hardening recommendations"
        ]
      },
      {
        heading: "Why Choose Hive Automation for OT Networking & Security",
        paragraphs: [
          "Because we also build the PLC, SCADA, and DCS systems that sit on these networks, Hive Automation understands which security controls are safe to implement on a live process network and which ones risk breaking real-time communication. That control-systems-first perspective is the difference between a network that is secure on paper and one that is secure without disrupting production.",
          "We design every industrial network and cybersecurity engagement around your specific plant architecture not a generic IT security checklist."
        ]
      }
    ],
    relatedLinks: [
      { href: "/services/distributed-control-systems", label: "Securing your DCS network is part of every DCS engagement see our DCS services." },
      { href: "/services/scada-hmi-development", label: "SCADA systems depend on a secure network layer see SCADA & HMI development." },
      { href: "/services/analytics-reporting", label: "Secure IT/OT integration enables safe ERP and database reporting see Analytics & Reporting." },
      { href: "/services/system-upgrade-retrofits", label: "Modernizing your PLC is the right time to modernize your network too." },
      { href: "/about", label: "Learn more about our IEC 62443-aligned OT networking approach." }
    ],
    faqs: [
      { q: "What is the difference between IT security and OT cybersecurity?", a: "IT security prioritizes data confidentiality, while OT cybersecurity prioritizes process availability and safety first. Standard IT security tools and patching schedules can disrupt real-time control communication, so OT cybersecurity requires control-systems-aware design, typically aligned to IEC 62443." },
      { q: "What is the Purdue Model and why does it matter for network design?", a: "The Purdue Model is a reference architecture that segments industrial networks into levels, from field devices (Level 0) up to enterprise IT (Level 5). It provides the logical structure used to define zones and conduits under IEC 62443, limiting how far a network compromise can spread." },
      { q: "Can you set up secure remote access for our vendors and engineers without exposing the whole network?", a: "Yes, we design VPN and encrypted tunnelling solutions scoped to specific zones and systems, so remote access is available without giving external connections a direct path to your entire OT network." },
      { q: "Will implementing network segmentation disrupt our current production?", a: "Segmentation changes are planned and validated in phases around your maintenance windows specifically to avoid disrupting live process communication." }
    ],
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          serviceType: "Industrial Networking and OT Cybersecurity",
          name: "Industrial Networking & Cybersecurity Services",
          description: "Industrial network design and OT cybersecurity hardening aligned to IEC 62443 and the Purdue Model, including IT/OT segmentation, secure remote access, and managed switch/firewall configuration.",
          provider: {
            "@type": "Organization",
            name: "Hive Automation",
            url: "https://hiveautomation.in/",
            telephone: "+91-99786-03840",
            email: "info@hiveautomation.in",
            address: {
              "@type": "PostalAddress",
              streetAddress: "33, B N Industrial Estate, Near Kathwada GIDC Gate No 5, S P Ring Road, Near Nikol, Odhav",
              addressLocality: "Ahmedabad",
              addressRegion: "Gujarat",
              postalCode: "382415",
              addressCountry: "IN"
            }
          },
          areaServed: [
            { "@type": "Country", name: "India" }
          ],
          url: "https://hiveautomation.in/services/industrial-networking-cybersecurity"
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://hiveautomation.in/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://hiveautomation.in/our-services" },
            { "@type": "ListItem", position: 3, name: "Industrial Networking & Cybersecurity", item: "https://hiveautomation.in/services/industrial-networking-cybersecurity" }
          ]
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is the difference between IT security and OT cybersecurity?",
              acceptedAnswer: { "@type": "Answer", text: "IT security prioritizes data confidentiality, while OT cybersecurity prioritizes process availability and safety first, requiring control-systems-aware design typically aligned to IEC 62443." }
            },
            {
              "@type": "Question",
              name: "What is the Purdue Model and why does it matter for network design?",
              acceptedAnswer: { "@type": "Answer", text: "The Purdue Model is a reference architecture that segments industrial networks into levels from field devices up to enterprise IT, providing the logical structure used to define zones and conduits under IEC 62443." }
            },
            {
              "@type": "Question",
              name: "Can you set up secure remote access without exposing the whole network?",
              acceptedAnswer: { "@type": "Answer", text: "Yes, we design VPN and encrypted tunnelling solutions scoped to specific zones and systems, so remote access does not give external connections a direct path to the entire OT network." }
            },
            {
              "@type": "Question",
              name: "Will implementing network segmentation disrupt our current production?",
              acceptedAnswer: { "@type": "Answer", text: "Segmentation changes are planned and validated in phases around maintenance windows specifically to avoid disrupting live process communication." }
            }
          ]
        }
      ]
    }
  },
  "analytics-reporting": {
    title: "Analytics & Reporting",
    tagline: "Transform raw data into actionable insight — real-time KPIs, historical trends, and compliance-ready reports built into your control system.",
    desc: "Hive Automation integrates reporting tools and dashboards directly into your PLC, SCADA, and DCS systems, giving your team real-time access to KPIs, historical trends, and compliance logs — without exporting data into disconnected spreadsheets after the fact. The result is faster decisions on the plant floor and audit-ready documentation when regulators or customers ask for it.",
    icon: "📈",
    features: [
      "Real-Time & Historical Data Reports — pulling data directly from PLCs, HMIs, SCADA, and DCS systems into customizable, automated formats",
      "Batch Reports — ISA-88 and GMP-compliant batch process reports for validation, traceability, and audit readiness",
      "PDF, Excel, or Web-Based Reports — choose your output format and delivery method: printed, emailed, or available via live dashboard",
      "Audit Trails & Event Logs — timestamped event reports and electronic signatures aligned to 21 CFR Part 11, FDA, and ISO standards",
      "KPI & Efficiency Dashboards — OEE (Overall Equipment Effectiveness), downtime analysis, and throughput trend reporting",
      "Database & ERP Integration — connecting reports to SQL databases, cloud storage, or enterprise systems like SAP for centralized visibility"
    ],
    idealFor: "Plant efficiency measurement, batch traceability, and compliance reporting across regulated and high-throughput facilities.",
    seo: {
      title: "Industrial Analytics & Reporting Services | Hive Automation",
      description: "Turn PLC, SCADA & DCS data into OEE dashboards, GMP batch reports & 21 CFR Part 11 audit trails. PDF, Excel & web reports for plants across India.",
      keywords: [
        "industrial analytics and reporting services",
        "OEE reporting software company",
        "manufacturing data analytics company",
        "batch reporting ISA-88 GMP",
        "SCADA historian reporting services",
        "production KPI dashboard company",
        "21 CFR Part 11 compliant batch reporting services",
        "OEE and downtime analysis dashboard development",
        "SQL database and SAP ERP reporting integration for plants",
        "real-time production KPI dashboard development company",
        "audit trail and electronic signature reporting for pharma",
        "SCADA historian trend report development services",
        "industrial analytics and reporting company in Ahmedabad",
        "OEE dashboard development services Gujarat",
        "batch reporting compliance company India",
        "manufacturing KPI dashboard company Ahmedabad",
        "production reporting automation company India"
      ],
      ogImage: "https://hiveautomation.in/src/img/og-analytics.jpg",
      ogImageAlt: "Industrial Analytics and Reporting Services – Hive Automation",
      canonical: "https://hiveautomation.in/services/analytics-reporting",
      articleSection: "Services",
      ogType: "article",
    },
    contentSections: [
      {
        heading: "Why Raw Plant Data Isn't Enough",
        paragraphs: [
          "Most PLCs, SCADA systems, and DCS platforms already generate enormous amounts of data — but if that data lives only in scattered historian tags or gets manually exported into spreadsheets, it never becomes a decision-making tool. Plants lose visibility into downtime causes, batch deviations go unnoticed until an audit, and management ends up making capacity decisions on gut feel instead of actual throughput numbers.",
          "Hive Automation builds the reporting layer that turns that raw data into something your operations, quality, and management teams can actually act on — automatically, in the format each audience needs."
        ]
      },
      {
        heading: "Our Analytics & Reporting Capabilities",
        paragraphs: ["We design reporting systems around five core needs we see repeatedly across pharmaceutical, oil & gas, and chemical manufacturing plants."],
        bullets: [
          "Real-Time & Historical Data Reports — pulling data directly from PLCs, HMIs, SCADA, and DCS systems into customizable, automated formats",
          "Batch Reports — ISA-88 and GMP-compliant batch process reports for validation, traceability, and audit readiness",
          "PDF, Excel, or Web-Based Reports — choose your output format and delivery method: printed, emailed, or available via live dashboard",
          "Audit Trails & Event Logs — timestamped event reports and electronic signatures aligned to 21 CFR Part 11, FDA, and ISO standards",
          "KPI & Efficiency Dashboards — OEE (Overall Equipment Effectiveness), downtime analysis, and throughput trend reporting",
          "Database & ERP Integration — connecting reports to SQL databases, cloud storage, or enterprise systems like SAP for centralized visibility"
        ]
      },
      {
        heading: "Industries We Serve",
        paragraphs: ["Our analytics and reporting work is concentrated in regulated and high-throughput environments where data accuracy has real operational and compliance consequences:"],
        bullets: [
          "Pharmaceutical manufacturing — GMP batch records, 21 CFR Part 11 audit trails, electronic signatures",
          "Oil & gas — production accounting, custody transfer reporting, terminal throughput tracking",
          "Chemical processing — batch traceability and regulatory compliance reporting",
          "General manufacturing — OEE, downtime, and efficiency reporting for continuous improvement programs",
          "Utilities and process plants requiring historian-based trend and exception reporting",
          "Multi-line production facilities needing centralized KPI dashboards and management visibility"
        ]
      },
      {
        heading: "Our Analytics & Reporting Implementation Process",
        paragraphs: ["Reporting systems are only useful if they reflect how your teams actually need to see the data — we start there, not with the software."],
        bullets: [
          "1. Stakeholder workshops with operations, quality, and management to define required KPIs and report formats",
          "2. Data source mapping across existing PLC, SCADA, DCS, and historian systems",
          "3. Report and dashboard design, including PDF/Excel/web output configuration",
          "4. ERP/database integration (SAP, SQL, cloud storage) where required",
          "5. Validation testing against known production data for accuracy",
          "6. Deployment, user training, and documentation handover"
        ]
      },
      {
        heading: "Why Choose Hive Automation for Analytics & Reporting",
        paragraphs: [
          "Because we also build the PLC, SCADA, and DCS systems generating your data, Hive Automation designs reporting solutions that pull directly from the source — not a fragile, manually maintained export process that breaks every time something changes on the plant floor. Our reporting projects are built with compliance in mind from day one, particularly for pharmaceutical clients who need 21 CFR Part 11-aligned audit trails and electronic signatures.",
          "Whether you need a single OEE dashboard for one line or a plant-wide reporting system feeding into SAP, we design the solution around the decisions your team actually needs to make."
        ]
      }
    ],
    relatedLinks: [
      { href: "/services/distributed-control-systems", label: "Our DCS historian integration feeds directly into these reporting systems." },
      { href: "/services/scada-hmi-development", label: "SCADA systems are a primary data source for these dashboards — see SCADA & HMI development." },
      { href: "/services/industrial-networking-cybersecurity", label: "Secure IT/OT data flow makes ERP and cloud reporting integration possible." },
      { href: "/projects/pharmaceutical", label: "See how batch reporting supports GMP compliance in pharmaceutical case studies." },
      { href: "/our-services", label: "Explore how this reporting layer complements our broader automation service portfolio." }
    ],
    faqs: [
      { q: "Can you integrate reporting with our existing SCADA or DCS historian?", a: "Yes, we pull data directly from existing PLC, SCADA, HMI, and DCS historian systems rather than requiring a separate data collection layer, minimizing disruption to your current architecture." },
      { q: "Do your batch reports support 21 CFR Part 11 compliance?", a: "Yes, we build audit trails, event logs, and electronic signature workflows aligned to 21 CFR Part 11, FDA, and ISO standards for pharmaceutical and regulated manufacturing clients." },
      { q: "Can reports be delivered automatically by email or only viewed on a dashboard?", a: "Both. Reports can be configured as PDF or Excel files delivered automatically by email, printed on a schedule, or accessed live through a web-based dashboard — whichever fits your team's workflow." },
      { q: "Can you integrate plant data with our SAP or ERP system?", a: "Yes, we integrate plant-floor reporting with SQL databases, cloud storage, and enterprise systems including SAP for centralized, plant-wide visibility." }
    ],
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          serviceType: "Industrial Analytics and Reporting",
          name: "Analytics & Reporting Services",
          description: "Real-time and historical reporting, ISA-88/GMP batch reports, 21 CFR Part 11 audit trails, OEE dashboards, and SAP/SQL/ERP integration built directly into PLC, SCADA and DCS systems.",
          provider: {
            "@type": "Organization",
            name: "Hive Automation",
            url: "https://hiveautomation.in/",
            telephone: "+91-99786-03840",
            email: "info@hiveautomation.in",
            address: {
              "@type": "PostalAddress",
              streetAddress: "33, B N Industrial Estate, Near Kathwada GIDC Gate No 5, S P Ring Road, Near Nikol, Odhav",
              addressLocality: "Ahmedabad",
              addressRegion: "Gujarat",
              postalCode: "382415",
              addressCountry: "IN"
            }
          },
          areaServed: [
            { "@type": "Country", name: "India" }
          ],
          url: "https://hiveautomation.in/services/analytics-reporting"
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://hiveautomation.in/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://hiveautomation.in/our-services" },
            { "@type": "ListItem", position: 3, name: "Analytics & Reporting", item: "https://hiveautomation.in/services/analytics-reporting" }
          ]
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Can you integrate reporting with our existing SCADA or DCS historian?",
              acceptedAnswer: { "@type": "Answer", text: "Yes, we pull data directly from existing PLC, SCADA, HMI, and DCS historian systems rather than requiring a separate data collection layer." }
            },
            {
              "@type": "Question",
              name: "Do your batch reports support 21 CFR Part 11 compliance?",
              acceptedAnswer: { "@type": "Answer", text: "Yes, we build audit trails, event logs, and electronic signature workflows aligned to 21 CFR Part 11, FDA, and ISO standards for pharmaceutical and regulated manufacturing clients." }
            },
            {
              "@type": "Question",
              name: "Can reports be delivered automatically by email or only viewed on a dashboard?",
              acceptedAnswer: { "@type": "Answer", text: "Both. Reports can be configured as PDF or Excel files delivered automatically by email, printed on a schedule, or accessed live through a web-based dashboard." }
            },
            {
              "@type": "Question",
              name: "Can you integrate plant data with our SAP or ERP system?",
              acceptedAnswer: { "@type": "Answer", text: "Yes, we integrate plant-floor reporting with SQL databases, cloud storage, and enterprise systems including SAP for centralized, plant-wide visibility." }
            }
          ]
        }
      ]
    }
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

  const seo = ("seo" in service ? service.seo : undefined) as
    | {
      title?: string;
      description?: string;
      keywords: string[];
      ogImage?: string;
      ogImageAlt?: string;
      canonical?: string;
      articleSection?: string;
      ogType?: "article" | "website";
    }
    | undefined;
  const title = seo?.title ?? `${service.title} | Hive Automation`;
  const description = seo?.description ?? service.desc;
  const url = seo?.canonical ?? `https://hiveautomation.in/services/${slug}`;

  return {
    title,
    description,
    keywords: seo?.keywords,
    alternates: {
      canonical: seo?.canonical ?? `/services/${slug}`,
    },
    robots: seo
      ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
      : undefined,
    twitter: seo
      ? {
        card: "summary_large_image",
        site: "@HiveAutomation",
        creator: "@HiveAutomation",
        title,
        description,
        images: seo.ogImage ? [seo.ogImage] : undefined,
      }
      : undefined,
    other: seo
      ? {
        keywords: seo.keywords.join(", "),
        "article:publisher": "https://www.facebook.com/hiveautomation",
        "article:section": seo.articleSection ?? "Services",
        "twitter:image:alt": seo.ogImageAlt ?? service.title,
      }
      : undefined,
    openGraph: {
      title,
      description,
      url,
      type: seo?.ogType ?? "website",
      siteName: seo ? "Hive Automation" : undefined,
      locale: seo ? "en_IN" : undefined,
      images: seo?.ogImage
        ? [
          {
            url: seo.ogImage,
            width: 1200,
            height: 630,
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
          "Precision logic for precise control custom PLC programs engineered for Siemens, Allen-Bradley and Schneider platforms.",
        body:
          "Hive Automation designs, programs, and integrates Programmable Logic Controllers (PLCs) for manufacturing, process, and packaging lines across India. Whether you are building a new control system from scratch or upgrading a legacy installation, our PLC programming services are engineered for safety, flexibility, and long-term performance backed by hands-on experience since 2017 across pharmaceutical, oil & gas, and chemical plants.",
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
    "schema" in service
      ? service.schema
      : slug === "plc-programming-integration"
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
                    <span style={{ color: "#FF3434" }}>â˜…</span>
                    <span>Certified Siemens Integrators</span>
                  </li>
                  <li style={{ fontSize: 13, display: "flex", gap: 8, color: "#1B1B1B" }}>
                    <span style={{ color: "#FF3434" }}>â˜…</span>
                    <span>21 CFR Part 11 Pharma Compliant</span>
                  </li>
                  <li style={{ fontSize: 13, display: "flex", gap: 8, color: "#1B1B1B" }}>
                    <span style={{ color: "#FF3434" }}>â˜…</span>
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
                const isIntroConcept = !isCapabilities && !isIndustries && !isProcess && !isWhy && index === 0;
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
                    className={`service-doc-section ${sectionClass} ${isIntroConcept ? "service-doc-section-concept-intro" : ""}`}
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
                        className={`service-doc-bullets ${isCapabilities
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
          <div className="pharma-related-scroll" style={{ marginTop: "50px" }}>
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
        <section className="section" style={{ paddingBottom: 0 }}>
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
