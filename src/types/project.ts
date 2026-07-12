export type ProjectStatus = "completado" | "en-progreso" | "pausado" | "archivado";

export type ProjectCategory =
  | "full-stack"
  | "frontend"
  | "backend"
  | "data-bi"
  | "mobile"
  | "automatizacion";

export interface ProjectTech {
  /** Nombre visible, ej. "Next.js" */
  name: string;
  /** Clave que resuelve `lib/icon-map.ts` a un componente Lucide real. Opcional. */
  icon?: string;
}

export interface ProjectLinks {
  /** Opcional: no todos los proyectos tienen repo público. */
  github?: string;
  /** Opcional: no todos los proyectos tienen demo desplegado. */
  demo?: string;
}

export interface ProjectImage {
  /** Ruta relativa a /public, ej. "/images/projects/sede/cover.webp" */
  src: string;
  /** Obligatorio por accesibilidad (WCAG) */
  alt: string;
}

export interface Project {
  // Identificación
  id: string;
  slug: string;

  // Contenido principal
  name: string;
  shortDescription: string;
  longDescription: string;

  // Clasificación
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;

  // Fecha (ISO: "2026-05-01")
  date: string;

  // Visual
  coverImage: ProjectImage;
  gallery?: ProjectImage[];
  /** Nombre de ícono Lucide resuelto vía lib/icon-map.ts, ej. "LayoutGrid" */
  icon: string;
  /** Color de acento del proyecto en hex, ej. "#10B981" */
  color: string;

  // Técnico
  technologies: ProjectTech[];
  tags: string[];

  // Links
  links: ProjectLinks;
}

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  "full-stack": "Full Stack",
  frontend: "Frontend",
  backend: "Backend",
  "data-bi": "Datos & BI",
  mobile: "Mobile",
  automatizacion: "Automatización",
};

export const PROJECT_STATUS_LABELS: Record<ProjectStatus, string> = {
  completado: "Completado",
  "en-progreso": "En progreso",
  pausado: "Pausado",
  archivado: "Archivado",
};
