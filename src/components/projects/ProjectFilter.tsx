"use client";

import { cn } from "@/lib/utils";
import { PROJECT_CATEGORY_LABELS, ProjectCategory } from "@/types/project";

interface ProjectFilterProps {
  categories: ProjectCategory[];
  active: ProjectCategory | "todos";
  onChange: (category: ProjectCategory | "todos") => void;
}

/**
 * Filtro de categorías (Prompt 4, sección 5 / Prompt 5, sección 9).
 * Las categorías se generan dinámicamente a partir de `getAllCategories()`
 * en lib/projects.ts — nunca están hardcodeadas aquí. Si agregas un
 * proyecto con una categoría nueva, el botón aparece solo.
 */
export function ProjectFilter({ categories, active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar proyectos por categoría">
      <button
        type="button"
        onClick={() => onChange("todos")}
        aria-pressed={active === "todos"}
        className={cn(
          "rounded-full border px-4 py-2 text-sm transition-colors duration-200",
          active === "todos"
            ? "border-primary bg-primary-muted text-primary"
            : "border-border text-text-secondary hover:border-border-hover hover:text-text-primary"
        )}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          aria-pressed={active === category}
          className={cn(
            "rounded-full border px-4 py-2 text-sm transition-colors duration-200",
            active === category
              ? "border-primary bg-primary-muted text-primary"
              : "border-border text-text-secondary hover:border-border-hover hover:text-text-primary"
          )}
        >
          {PROJECT_CATEGORY_LABELS[category]}
        </button>
      ))}
    </div>
  );
}
