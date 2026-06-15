import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Hive Automation | Industrial Automation Services",
  description: "Get in touch with Hive Automation for your industrial automation needs. Reach out to our experts for Siemens PLC programming, SCADA integration, and consulting.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Hive Automation",
    description: "Get in touch with Hive Automation for your industrial automation needs. Reach out to our experts for Siemens PLC programming, SCADA integration, and consulting.",
    url: "https://hiveautomation.in/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
