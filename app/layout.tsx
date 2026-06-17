import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://hiveautomation.in"),
  title: "Industrial Automation & Siemens PLC Experts | Hive Automation",
  description:
    "Hive Automation - India's trusted Siemens PLC programming, SCADA system integration, and industrial process control solutions company. Expert automation services for Pharma, Oil & Gas, Chemicals, and more.",
  keywords:
    "PLC programming, SCADA, DCS, Siemens PLC, industrial automation, process control, Hive Automation, Ahmedabad, industrial networking",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hive Automation - Industrial Automation & Siemens PLC Experts",
    description:
      "Siemens PLC, SCADA and DCS automation experts delivering turnkey industrial solutions across India.",
    type: "website",
    url: "https://hiveautomation.in",
    siteName: "Hive Automation",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Hive Automation - Industrial Automation Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Automation & Siemens PLC Experts | Hive Automation",
    description:
      "Expert Siemens PLC programming, SCADA system integration, and industrial process control solutions by Hive Automation.",
    images: ["/hero-bg.png"],
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://hiveautomation.in/#organization",
      name: "Hive Automation",
      url: "https://hiveautomation.in",
      logo: "https://hiveautomation.in/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-99786-03840",
        contactType: "customer service",
        email: "info@hiveautomation.in",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Gujarati"],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://hiveautomation.in/#localbusiness",
      name: "Hive Automation",
      url: "https://hiveautomation.in",
      image: "https://hiveautomation.in/hero-bg.png",
      telephone: "+91-99786-03840",
      email: "info@hiveautomation.in",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "33, B N Industrial Estate, Near Kathwada GIDC Gate No 5, S P Ring Road, Near Nikol, Odhav",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "382415",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.0245,
        longitude: 72.6582,
      },
      priceRange: "$$",
      description:
        "India's trusted Siemens PLC, SCADA & DCS automation experts delivering turnkey industrial solutions.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
