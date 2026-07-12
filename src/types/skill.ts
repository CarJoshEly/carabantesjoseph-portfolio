export type SkillCategory =
  | "frontend"
  | "backend"
  | "bases-de-datos"
  | "herramientas"
  | "data-bi";

export interface Technology {
  name: string;
  /** Clave resuelta vía lib/icon-map.ts */
  icon: string;
  category: SkillCategory;
}

export interface Skill {
  title: string;
  description: string;
  /** Clave resuelta vía lib/icon-map.ts */
  icon: string;
}

export const SKILL_CATEGORY_LABELS: Record<SkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  "bases-de-datos": "Bases de datos",
  herramientas: "Herramientas",
  "data-bi": "Datos & BI",
};
