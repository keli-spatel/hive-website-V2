import {
  Coffee,
  Cpu,
  Factory,
  FlaskConical,
  Fuel,
  LifeBuoy,
  MonitorSmartphone,
  Network,
  PanelTop,
  Server,
  Settings,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type CardContent = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export const aboutHighlights = [
  { value: 8, label: "Years Industry Experience" },
  { value: 500, label: "Automation Projects Delivered" },
  { value: 50, label: "Industrial Clients" },
  { value: 10, label: "Major Industries Served" },
];

export const aboutExpertise: CardContent[] = [
  {
    icon: Cpu,
    title: "PLC Programming & Integration",
    desc: "Custom Siemens PLC programming and integration services for machine automation and process control applications.",
  },
  {
    icon: MonitorSmartphone,
    title: "SCADA & HMI Development",
    desc: "Advanced monitoring and visualization systems that provide real-time operational insights and control.",
  },
  {
    icon: Server,
    title: "DCS Engineering",
    desc: "Distributed Control System solutions designed for complex process industries requiring high reliability and scalability.",
  },
  {
    icon: Network,
    title: "Industrial Networking",
    desc: "Industrial communication infrastructure that ensures seamless connectivity across automation systems.",
  },
  {
    icon: PanelTop,
    title: "Control Panel Engineering & Manufacturing",
    desc: "Design, development, testing, and commissioning of industrial control panels.",
  },
  {
    icon: Workflow,
    title: "Turnkey Automation Projects",
    desc: "Complete project execution from concept design to commissioning and ongoing support.",
  },
];

export const aboutIndustries: CardContent[] = [
  {
    icon: FlaskConical,
    title: "Pharmaceutical Industry Automation",
    desc: "GMP-compliant automation solutions that ensure product quality, process consistency, and regulatory compliance.",
  },
  {
    icon: Fuel,
    title: "Oil & Gas Automation Solutions",
    desc: "Automation systems that enhance safety, monitoring, production efficiency, and operational reliability.",
  },
  {
    icon: ShieldCheck,
    title: "Chemical Plant Automation",
    desc: "Advanced process control solutions that optimize production while maintaining operational safety standards.",
  },
  {
    icon: Factory,
    title: "Manufacturing Industry Automation",
    desc: "Smart automation technologies that increase productivity, reduce manual intervention, and improve equipment effectiveness.",
  },
  {
    icon: Coffee,
    title: "Food & Beverage Automation",
    desc: "Reliable automation systems that enhance product quality and improve production efficiency.",
  },
];

export const aboutReasons: CardContent[] = [
  {
    icon: Settings,
    title: "Siemens Technology Expertise",
    desc: "Extensive experience with Siemens PLCs, SCADA systems, HMI development, and industrial communication networks.",
  },
  {
    icon: Users,
    title: "Experienced Automation Engineers",
    desc: "A highly skilled engineering team with deep expertise in industrial automation project execution.",
  },
  {
    icon: Target,
    title: "Customized Automation Solutions",
    desc: "Every project is designed around the client's specific operational goals and business requirements.",
  },
  {
    icon: Workflow,
    title: "End-to-End Project Delivery",
    desc: "Comprehensive support from system design and development to commissioning and post-project maintenance.",
  },
  {
    icon: LifeBuoy,
    title: "Long-Term Technical Support",
    desc: "Ongoing troubleshooting, upgrades, maintenance, and optimization services after project completion.",
  },
];

export const technologyGroups = [
  {
    title: "Siemens PLC Systems",
    items: [
      "Siemens S7-200 Smart",
      "Siemens S7-1200 G1/G2",
      "Siemens S7-1500 R/H/FH",
      "Siemens ET200SP Series",
      "Siemens S7-400",
      "Siemens S7-300",
    ],
  },
  {
    title: "HMI / SCADA Platforms",
    items: ["Siemens WinCC Explorer", "WinCC Advance", "WinCC Unified", "KTP / TP / MTP HMI"],
  },
  {
    title: "DCS Solutions",
    items: ["Siemens PCS 7", "Siemens PCS 7 neo", "ET200SP HA / PA"],
  },
  {
    title: "Engineering Software",
    items: ["TIA Portal", "SIMATIC Manager", "WinCC Professional", "TIA WinCC Advance"],
  },
];

export const aboutResults = [
  "Reduce operational downtime",
  "Improve process consistency",
  "Increase production efficiency",
  "Enhance plant safety",
  "Optimize resource utilization",
  "Accelerate digital transformation initiatives",
];

export const aboutFaqs = [
  {
    q: "What industrial automation services does Hive Automation provide?",
    a: "We provide PLC programming, SCADA development, DCS integration, industrial networking, control panel engineering, and turnkey automation projects.",
  },
  {
    q: "Do you specialize in Siemens automation systems?",
    a: "Yes. We specialize in Siemens PLC programming, TIA Portal development, WinCC SCADA systems, and Siemens process automation technologies.",
  },
  {
    q: "Which industries do you serve?",
    a: "We serve pharmaceutical, chemical, manufacturing, oil & gas, food processing, and other process industries.",
  },
  {
    q: "Do you provide support after project completion?",
    a: "Yes. We offer ongoing maintenance, troubleshooting, upgrades, and technical support services.",
  },
];
