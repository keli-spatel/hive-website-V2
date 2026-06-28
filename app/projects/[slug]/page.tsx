import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GenericProjectPage from "../../components/projects/GenericProjectPage";
import PharmaceuticalProjectPage from "../../components/projects/PharmaceuticalProjectPage";
import {
  detailedProjects,
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
  const detailedProject = detailedProjects[slug];

  if (!project) {
    return {};
  }

  if (detailedProject) {
    const seo = detailedProject.data.seo;

    return {
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
      alternates: {
        canonical: seo.canonical,
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
        keywords: seo.keywords.join(", "),
        "article:publisher": "https://www.facebook.com/hiveautomation",
        "article:section": seo.articleSection ?? project.tag,
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

function getDetailedProjectSchema(slug: string) {
  const schemaProject = detailedProjects[slug];

  if (!schemaProject) {
    return null;
  }

  const data = schemaProject.data;
  return data.schema ?? null;
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

  const schema = getDetailedProjectSchema(slug);

  return (
    <PharmaceuticalProjectPage
      projectConfig={detailedProject}
      relatedProjects={relatedProjects.filter((item) => item.slug !== slug)}
      schema={schema ?? {}}
    />
  );
}
