import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { getAllProjects } from "@/lib/projects";

/** Sitemap dinámico (Prompt 1): incluye rutas estáticas + una por cada proyecto. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteConfig.url}/proyectos`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/sobre-mi`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteConfig.url}/contacto`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = getAllProjects().map((project) => ({
    url: `${siteConfig.url}/proyectos/${project.slug}`,
    lastModified: project.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
