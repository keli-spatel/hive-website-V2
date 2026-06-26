import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Automation Services | Siemens PLC & SCADA | Hive Automation",
  description: "Comprehensive industrial automation services including Siemens PLC programming, DCS integration, SCADA development, network security, and turnkey project execution.",
  alternates: {
    canonical: "/our-services",
  },
  openGraph: {
    title: "Industrial Automation Services | Hive Automation",
    description: "Comprehensive industrial automation services including Siemens PLC programming, DCS integration, SCADA development, network security, and turnkey project execution.",
    url: "https://hiveautomation.in/our-services",
  },
};

export default function OurServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
