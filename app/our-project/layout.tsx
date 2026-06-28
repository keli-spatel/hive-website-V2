import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Automation Projects | Hive Automation India",
  description: "Explore case studies across pharmaceutical, oil & gas, chemical and infrastructure automation. Siemens PLC, DCS, SCADA & turnkey projects delivered from Ahmedabad.",
  keywords: [
    "industrial automation projects India",
    "PLC SCADA case studies",
    "Siemens DCS projects",
    "automation company Ahmedabad",
    "pharmaceutical automation case study",
    "oil gas DCS project India",
  ],
  alternates: {
    canonical: "https://hiveautomation.in/our-projects",
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
    url: "https://hiveautomation.in/our-projects",
    siteName: "Hive Automation",
    locale: "en_IN",
    title: "Industrial Automation Projects | Hive Automation India",
    description: "Explore case studies across pharmaceutical, oil & gas, chemical and infrastructure automation. Siemens PLC, DCS, SCADA & turnkey projects delivered from Ahmedabad.",
    images: [
      {
        url: "https://hiveautomation.in/src/img/og-projects-hub.jpg",
        width: 1200,
        height: 630,
        alt: "Industrial automation project portfolio — Hive Automation, Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HiveAutomation",
    creator: "@HiveAutomation",
    title: "Industrial Automation Projects | Hive Automation India",
    description: "Explore case studies across pharmaceutical, oil & gas, chemical and infrastructure automation. Siemens PLC, DCS, SCADA & turnkey projects delivered from Ahmedabad.",
    images: ["https://hiveautomation.in/src/img/og-projects-hub.jpg"],
  },
  other: {
    keywords: "industrial automation projects India, PLC SCADA case studies, Siemens DCS projects, automation company Ahmedabad, pharmaceutical automation case study, oil gas DCS project India",
    "article:publisher": "https://www.facebook.com/hiveautomation",
    "article:section": "Projects Hub",
    "twitter:image:alt": "Industrial automation project portfolio — Hive Automation, Ahmedabad",
  },
};

export default function OurProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
