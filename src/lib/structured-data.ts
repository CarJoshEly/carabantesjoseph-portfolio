import { siteConfig } from "@/data/site-config";
import { Project } from "@/types/project";

/**
 * Genera el schema.org `Person` global (Prompt 7, corrección P0 de SEO).
 * Se inyecta una sola vez en el layout raíz vía <script type="application/ld+json">.
 */
export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    jobTitle: siteConfig.author.role,
    url: siteConfig.url,
    email: siteConfig.author.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.author.location,
    },
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin].filter(Boolean),
  };
}

/**
 * Genera el schema.org `SoftwareSourceCode` para el detalle de un proyecto.
 * Se inyecta en /proyectos/[slug] con los datos reales de cada `Project`.
 */
export function getProjectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.name,
    description: project.shortDescription,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    dateCreated: project.date,
    programmingLanguage: project.technologies.map((tech) => tech.name),
    codeRepository: project.links.github,
    url: `${siteConfig.url}/proyectos/${project.slug}`,
    image: `${siteConfig.url}${project.coverImage.src}`,
  };
}
