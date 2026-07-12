import { Project } from "@/types/project";

/**
 * ============================================================
 *  FUENTE DE VERDAD DE PROYECTOS
 * ============================================================
 * Para agregar un proyecto nuevo:
 *   1. Copia sus imágenes a /public/images/projects/{slug}/
 *   2. Agrega un objeto que cumpla la interfaz `Project` al array.
 *   3. Guarda. TypeScript marcará error si falta un campo obligatorio.
 *
 * No necesitas tocar ningún componente: ProjectsGrid, ProjectCard,
 * los filtros y las páginas /proyectos y /proyectos/[slug] leen
 * este array automáticamente.
 *
 * Ejemplo de forma (no un proyecto real, solo referencia de campos):
 *
 * {
 *   id: "",
 *   slug: "",
 *   name: "",
 *   shortDescription: "",
 *   longDescription: "",
 *   category: "full-stack",
 *   status: "completado",
 *   featured: false,
 *   date: "2026-01-01",
 *   coverImage: { src: "/images/projects/.../cover.webp", alt: "" },
 *   gallery: [],
 *   icon: "LayoutGrid",
 *   color: "#10B981",
 *   technologies: [{ name: "Next.js", icon: "Globe" }],
 *   tags: [],
 *   links: { github: "", demo: "" },
 * }
 * ============================================================
 */

export const projects: Project[] = [];
