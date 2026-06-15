import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Hive Automation | Join Our Industrial Automation Team",
  description: "Explore career opportunities at Hive Automation. Join our expert team of Siemens PLC programmers, SCADA developers, and automation engineers in India.",
  alternates: {
    canonical: "/career",
  },
  openGraph: {
    title: "Careers at Hive Automation",
    description: "Explore career opportunities at Hive Automation. Join our expert team of Siemens PLC programmers, SCADA developers, and automation engineers in India.",
    url: "https://hiveautomation.in/career",
  },
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
