import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GenericProjectPage from "../../components/projects/GenericProjectPage";
import PharmaceuticalProjectPage from "../../components/projects/PharmaceuticalProjectPage";
import {
  detailedProjects,
  pharmaceuticalProject,
  projectsData,
  relatedProjects,
} from "../project-data";

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    return {};
  }

  if (slug === "pharmaceutical") {
    const seo = pharmaceuticalProject.seo;

    return {
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
      alternates: {
        canonical: "/projects/pharmaceutical",
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
        url: seo.canonical,
        siteName: "Hive Automation",
        locale: "en_IN",
        title: seo.title,
        description: seo.description,
        images: [
          {
            url: seo.ogImage,
            width: 1200,
            height: 630,
            alt: seo.ogImageAlt,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: seo.title,
        description: seo.description,
        creator: "@HiveAutomation",
        images: [seo.ogImage],
      },
      other: {
        keywords:
          "pharmaceutical automation Siemens S7-1500, GAMP 5 compliance automation India, 21 CFR Part 11 SCADA, pharmaceutical material handling PLC, WinCC SCADA pharma, GMP automation company India",
        "article:publisher": "https://www.facebook.com/hiveautomation",
        "article:section": "Pharmaceutical",
        "twitter:site": "@HiveAutomation",
        "twitter:image:alt": seo.ogImageAlt,
      },
    };
  }

  return {
    title: `${project.title} | Hive Automation`,
    description: project.subtitle,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Hive Automation`,
      description: project.subtitle,
      url: `https://hiveautomation.in/projects/${slug}`,
    },
  };
}

function getPharmaceuticalSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        headline: "GAMP 5 Compliant Pharmaceutical Material Handling Automation - Siemens S7-1500",
        description:
          "Case study: 21 CFR Part 11 and GAMP 5 compliant pharmaceutical automation system using Siemens S7-1500, 18 ET200SP stations, WinCC SCADA and wireless tablets for Emynent, Russia.",
        url: "https://hiveautomation.in/projects/pharmaceutical",
        image: "https://hiveautomation.in/src/img/pharmaceutical-1.jpeg",
        datePublished: "2024-03-31",
        author: {
          "@type": "Organization",
          name: "Hive Automation",
          url: "https://hiveautomation.in/",
        },
        publisher: {
          "@type": "Organization",
          name: "Hive Automation",
          url: "https://hiveautomation.in/",
          logo: {
            "@type": "ImageObject",
            url: "https://hiveautomation.in/src/img/header-logo.png",
          },
        },
        keywords: "GAMP 5 automation, 21 CFR Part 11, Siemens S7-1500, WinCC SCADA, pharmaceutical automation India",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hiveautomation.in/" },
          { "@type": "ListItem", position: 2, name: "Our Projects", item: "https://hiveautomation.in/our-project" },
          { "@type": "ListItem", position: 3, name: "Pharmaceutical", item: "https://hiveautomation.in/projects/pharmaceutical" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is the pharmaceutical automation system 21 CFR Part 11 compliant?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, the system was fully engineered for 21 CFR Part 11 compliance, including electronic records, electronic signatures, and audit trail on WinCC SCADA.",
            },
          },
          {
            "@type": "Question",
            name: "Which Siemens PLC platform was used?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Siemens S7-1500 CPU-1517-3 PN with 18 ET200SP distributed I/O stations.",
            },
          },
        ],
      },
    ],
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  const detailedProject = detailedProjects[slug];

  if (!detailedProject) {
    return <GenericProjectPage project={project} />;
  }

  if (slug === "pharmaceutical") {
    return (
      <PharmaceuticalProjectPage
        projectConfig={detailedProject}
        relatedProjects={relatedProjects}
        schema={getPharmaceuticalSchema()}
      />
    );
  }

  return <GenericProjectPage project={project} />;
}
