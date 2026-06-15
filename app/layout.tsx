import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Industrial Automation & Siemens PLC Experts | Hive Automation",
  description:
    "Hive Automation — India's trusted Siemens PLC programming, SCADA system integration, and industrial process control solutions company. Expert automation services for Pharma, Oil & Gas, Chemicals, and more.",
  keywords:
    "PLC programming, SCADA, DCS, Siemens PLC, industrial automation, process control, Hive Automation, Ahmedabad",
  openGraph: {
    title: "Hive Automation — Industrial Automation & Siemens PLC Experts",
    description:
      "PLC, SCADA and DCS automation experts delivering turnkey industrial solutions across India.",
    type: "website",
    url: "https://hiveautomation.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        style={{
          fontFamily:
            'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
