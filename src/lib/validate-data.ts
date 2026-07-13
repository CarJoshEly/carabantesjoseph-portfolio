import { z } from "zod";

/**
 * Validación en runtime de la forma de un `Project` (Prompt 7, corrección
 * P2 de robustez). TypeScript ya protege en tiempo de compilación, pero
 * solo mientras los datos se escriban a mano en `data/projects.ts`. Si en
 * el futuro esos datos vienen de un CMS headless, un JSON externo, o un
 * fetch a una API, TypeScript deja de poder verificarlos — este schema sí
 * los valida en runtime y falla con un mensaje claro en vez de romper
 * silenciosamente un render.
 */
const projectImageSchema = z.object({
  src: z.string().min(1, "La imagen necesita una ruta (`src`)."),
  alt: z.string().min(1, "Toda imagen necesita `alt` por accesibilidad."),
});

const projectTechSchema = z.object({
  name: z.string().min(1),
  icon: z.string().optional(),
});

export const projectSchema = z.object({
  id: z.string().min(1),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "El slug debe ser kebab-case (ej. 'mi-proyecto')."),
  name: z.string().min(1),
  shortDescription: z.string().min(1).max(200, "La descripción corta debe ser breve (máx. 200 caracteres)."),
  longDescription: z.string().min(1),
  category: z.enum(["full-stack", "frontend", "backend", "data-bi", "mobile", "automatizacion"]),
  status: z.enum(["completado", "en-progreso", "pausado", "archivado"]),
  featured: z.boolean(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "La fecha debe estar en formato ISO (YYYY-MM-DD)."),
  coverImage: projectImageSchema,
  gallery: z.array(projectImageSchema).optional(),
  icon: z.string().min(1),
  color: z.string().regex(/^#[0-9A-Fa-f]{6}$/, "El color debe ser un hex de 6 dígitos (ej. '#10B981')."),
  technologies: z.array(projectTechSchema).min(1, "Cada proyecto necesita al menos una tecnología."),
  tags: z.array(z.string()),
  links: z.object({
    github: z.string().url().optional().or(z.literal("")),
    demo: z.string().url().optional().or(z.literal("")),
  }),
});

export const projectsSchema = z.array(projectSchema);

/**
 * Valida el array completo de proyectos y además revisa que no existan
 * `slug` duplicados (dos proyectos con el mismo slug pisarían la misma
 * ruta /proyectos/[slug]). Lanza un error descriptivo en build/dev time
 * en vez de fallar silenciosamente en producción.
 */
export function validateProjects(data: unknown): void {
  const result = projectsSchema.safeParse(data);

  if (!result.success) {
    const issues = result.error.issues
      .map((issue) => `  - [${issue.path.join(".")}] ${issue.message}`)
      .join("\n");
    throw new Error(
      `Datos inválidos en src/data/projects.ts:\n${issues}\n\nRevisa la interfaz \`Project\` en src/types/project.ts.`
    );
  }

  const slugs = result.data.map((project) => project.slug);
  const duplicates = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);

  if (duplicates.length > 0) {
    throw new Error(
      `Slugs duplicados en src/data/projects.ts: ${Array.from(new Set(duplicates)).join(", ")}. ` +
        "Cada proyecto necesita un slug único (se usa como URL en /proyectos/[slug])."
    );
  }
}
