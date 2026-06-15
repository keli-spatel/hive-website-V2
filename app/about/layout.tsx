import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Hive Automation - Siemens PLC Experts",
  description: "Learn about Hive Automation's history, mission, and expertise in delivering premium Siemens PLC programming and industrial automation solutions.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Hive Automation",
    description: "Learn about Hive Automation's history, mission, and expertise in delivering premium Siemens PLC programming and industrial automation solutions.",
    url: "https://hiveautomation.in/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
