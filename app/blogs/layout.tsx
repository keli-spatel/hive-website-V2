import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Automation Blog | Hive Automation",
  description:
    "Read Hive Automation articles on Siemens PLC programming, SCADA, DCS, industrial networking, retrofit strategy, and automation engineering.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Industrial Automation Blog | Hive Automation",
    description:
      "Read Hive Automation articles on Siemens PLC programming, SCADA, DCS, industrial networking, retrofit strategy, and automation engineering.",
    url: "https://hiveautomation.in/blogs",
    type: "website",
  },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
