import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Automation Projects | Hive Automation",
  description: "Explore our successful industrial automation projects across Pharmaceuticals, Oil & Gas, Chemicals, and Infrastructure. See how our Siemens PLC and SCADA expertise drives results.",
  alternates: {
    canonical: "/our-project",
  },
  openGraph: {
    title: "Industrial Automation Projects | Hive Automation",
    description: "Explore our successful industrial automation projects across Pharmaceuticals, Oil & Gas, Chemicals, and Infrastructure.",
    url: "https://hiveautomation.in/our-project",
  },
};

export default function OurProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
