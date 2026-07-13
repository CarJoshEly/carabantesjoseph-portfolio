import { projects } from "@/data/projects";
import { Project, ProjectCategory } from "@/types/project";

/**
 * Todos los proyectos, en el orden EN QUE ESTÁN DECLARADOS en data/projects.ts.
 * A propósito no se ordenan por fecha: el orden es una decisión de jerarquía
 * ("los más robustos primero, o mixto"), no cronológica — así que la posición
 * en el array de data/projects.ts ES el control de orden. Para reordenar,
 * mueve el objeto de proyecto a otra posición del array.
 */
export function getAllProjects(): Project[] {
  return [...projects];
}

/** Solo los proyectos marcados como `featured: true`, para el Home. */
export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

/** Busca un proyecto por su slug, usado en /proyectos/[slug]. */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Filtra proyectos por categoría. */
export function filterByCategory(
  list: Project[],
  category: ProjectCategory | "todos"
): Project[] {
  if (category === "todos") return list;
  return list.filter((p) => p.category === category);
}

/** Filtra proyectos por nombre de tecnología. */
export function filterByTech(list: Project[], techName: string | "todos"): Project[] {
  if (techName === "todos") return list;
  return list.filter((p) => p.technologies.some((t) => t.name === techName));
}

/**
 * Extrae dinámicamente las categorías presentes en los proyectos actuales.
 * El filtro de /proyectos se genera a partir de esto: si agregas un
 * proyecto con una categoría nueva, el botón de filtro aparece solo.
 */
export function getAllCategories(): ProjectCategory[] {
  const categories = new Set(projects.map((p) => p.category));
  return Array.from(categories);
}

/** Extrae dinámicamente todas las tecnologías usadas en los proyectos. */
export function getAllTechnologies(): string[] {
  const techs = new Set(projects.flatMap((p) => p.technologies.map((t) => t.name)));
  return Array.from(techs).sort();
}

/** Proyectos relacionados (misma categoría, excluyendo el actual), máx. 2. */
export function getRelatedProjects(current: Project, limit = 2): Project[] {
  return getAllProjects()
    .filter((p) => p.id !== current.id && p.category === current.category)
    .slice(0, limit);
}
