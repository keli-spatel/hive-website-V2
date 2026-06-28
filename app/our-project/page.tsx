import ProjectsListingPage from "../components/ProjectsListingPage";

export default function OurProjectPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Industrial Automation Projects | Hive Automation",
        url: "https://hiveautomation.in/our-projects",
        description: "Portfolio of industrial automation case studies across pharmaceutical, oil & gas, chemical and infrastructure industries delivered by Hive Automation from Ahmedabad, India.",
        publisher: { "@type": "Organization", name: "Hive Automation", url: "https://hiveautomation.in/" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hiveautomation.in/" },
          { "@type": "ListItem", position: 2, name: "Our Projects", item: "https://hiveautomation.in/our-projects" },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ProjectsListingPage />
    </>
  );
}
