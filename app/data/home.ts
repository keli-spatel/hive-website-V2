import {
  Anvil,
  Coffee,
  FlaskConical,
  Fuel,
  Headset,
  Settings,
  ShieldCheck,
  UserCog,
  type LucideIcon,
} from "lucide-react";

export type IconLabel = {
  name: string;
  icon: LucideIcon;
};

export const homeIndustries: IconLabel[] = [
  { name: "Pharmaceutical", icon: FlaskConical },
  { name: "Oil & Gas", icon: Fuel },
  { name: "Forging", icon: Anvil },
  { name: "Food & Beverages", icon: Coffee },
];

export const trustTags: IconLabel[] = [
  { name: "Siemens Experts", icon: UserCog },
  { name: "Industrial Automation", icon: Settings },
  { name: "GAMP 5 Quality", icon: ShieldCheck },
  { name: "24/7 Support", icon: Headset },
];

export const homeServices = [
  {
    slug: "plc-programming-integration",
    title: "PLC Programming & Integration",
    desc: "We develop custom PLC programs tailored to your specific process and production goals. Whether you are upgrading an existing system or building from scratch, our PLC logic design ensures industrial safety, flexibility, and high-performance system integration.",
    icon: "cpu",
  },
  {
    slug: "distributed-control-systems",
    title: "Distributed Control Systems (DCS)",
    desc: "We engineer and implement robust Siemens PCS 7 and other DCS solutions that provide scalable, integrated control of complex industrial processes. From batch to continuous processing, our DCS services ensure accuracy, safety, and maximum uptime.",
    icon: "server",
  },
  {
    slug: "scada-hmi-development",
    title: "SCADA & HMI Development",
    desc: "We create intuitive SCADA and HMI interfaces that allow operators and engineers to monitor and control industrial processes in real time. Our SCADA systems are designed for usability, data clarity, and enhanced operational safety.",
    icon: "monitor",
  },
  {
    slug: "turnkey-project-execution",
    title: "Turnkey Project Execution",
    desc: "We provide complete automation solutions under one roof. Our engineers collaborate from early system design to final handover, ensuring consistency, reliability, and full accountability for your turnkey industrial projects.",
    icon: "workflow",
  },
  {
    slug: "system-upgrade-retrofits",
    title: "System Upgrades & Retrofits",
    desc: "We upgrade aging control systems and legacy hardware to modern, supported platforms like Siemens S7-1500 and TIA Portal. Our PLC retrofit strategies ensure minimal downtime and future-ready industrial performance.",
    icon: "wrench",
  },
  {
    slug: "industrial-networking-cybersecurity",
    title: "Industrial Networking & Cybersecurity",
    desc: "We design industrial networks that are resilient, segmented, and secure. From control to enterprise level, our networks are built for performance and uptime.",
    icon: "network",
  },
  {
    slug: "analytics-reporting",
    title: "Analytics & Reporting",
    desc: "We integrate industrial reporting tools and dashboards into your control system, giving your team real-time access to KPIs, historical trends, and compliance logs. Our analytics improve decision-making and operational transparency.",
    icon: "analytics",
  },
];

export const featuredProjects = [
  {
    href: "/projects/pharmaceutical",
    image: "/projects/thumbnail-pharma.png",
    metric: "100% FDA Compliant",
    industry: "Pharmaceutical",
    title: "GAMP 5 Compliant Automation for Pharmaceutical Material Handling",
    desc: "Achieved full FDA compliance with automated batch tracking & reporting.",
  },
  {
    href: "/projects/chemical",
    image: "/projects/thumbnail-chemical.png",
    metric: "Zero Safety Incidents",
    industry: "Chemical",
    title: "Plant-Wide Process Control & Safety Systems for Chemical Facilities",
    desc: "Integrated SIS & DCS for zero safety incidents over 3 years.",
  },
  {
    href: "/projects/refinery",
    image: "/projects/thumbnail-rotary.png",
    metric: "25% Efficiency Increase",
    industry: "Refinery",
    title: "Precision Rotary Equipment Control & Monitoring for Refineries",
    desc: "Achieved 25% efficiency increase with predictive maintenance integration.",
  },
  {
    href: "/projects/oil-gas",
    image: "/projects/thumbnail-oil-gas.png",
    metric: "20% Less Downtime",
    industry: "Oil & Gas",
    title: "Siemens PCS 7 DCS Implementation for Oil & Gas Refinery",
    desc: "Reduced downtime by 20% through legacy S5 to S7-1500 migration.",
  },
  {
    href: "/projects/hydrogenation-plant",
    image: "/projects/thumbnail-hydrogenation.png",
    metric: "99.5% Uptime",
    industry: "Refinery",
    title: "Hydrogenation Plant Control & Safety Integration",
    desc: "Delivered 99.5% uptime with advanced process safety management systems.",
  },
  {
    href: "/projects/ethyl-acetate",
    image: "/projects/thumbnail-ethyl.png",
    metric: "30% Cost Reduction",
    industry: "Plant Control",
    title: "Ethyl-Acetate Plant Automation & Optimization",
    desc: "Reduced operational costs by 30% through full process automation.",
  },
  {
    href: "/projects/asphalt-batching",
    image: "/projects/thumbnail-asphalt.png",
    metric: "260 TPH Capacity",
    industry: "R&B",
    title: "Asphalt Batching Plant Automation System - 260 TPH",
    desc: "Full automation of 260 TPH batching plant with real-time quality control.",
  },
  {
    href: "/projects/retrofit-upgrade",
    image: "/projects/thumbnail-retrofit.png",
    metric: "Future-Proof System",
    industry: "Industrial",
    title: "Retrofit & Upgrade Solutions for Legacy Industrial Systems",
    desc: "Modernised legacy PLCs to Industry 4.0 standards with zero production loss.",
  },
];

export const whyHiveReasons = [
  {
    title: "Certified Siemens Technology Experts",
    desc: "We specialize in PLCs, SCADA, and DCS systems. Our certified engineers bring deep, platform-specific expertise that ensures optimal configuration, coding standards, and lifecycle support.",
  },
  {
    title: "Industry-Specific Compliance Approach",
    desc: "From GMP validation in Pharma to HAZOP compliance in Oil & Gas, we design automation systems that are built with your environment in mind.",
  },
  {
    title: "Custom Engineered Solutions",
    desc: "No off-the-shelf templates. We analyze your process, operations, and future needs, then craft a tailored solution that integrates with your workflows, goals, and infrastructure.",
  },
  {
    title: "End-to-End Turnkey Project Ownership",
    desc: "We manage functional specs, programming, simulation, FAT/SAT testing, commissioning, handover, training, and documentation under one accountable team.",
  },
  {
    title: "Quality & Industrial Safety First",
    desc: "We follow international engineering standards, maintain clean documentation, and conduct thorough testing so your system is robust, traceable, and audit-ready.",
  },
  {
    title: "Proactive 24/7 Technical Support",
    desc: "Remote support, preventive maintenance, diagnostics, and upgrades keep your systems efficient, secure, and future-proof after commissioning.",
  },
  {
    title: "Proven Track Record with Industry Leaders",
    desc: "From oil terminals to pharmaceutical cleanrooms, we have delivered automation systems for clients who demand nothing less than excellence.",
  },
];
