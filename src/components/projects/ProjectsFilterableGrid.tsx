"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { Reveal } from "@/components/shared/MotionWrapper";
import { Project, ProjectCategory } from "@/types/project";

interface ProjectsFilterableGridProps {
  projects: Project[];
  categories: ProjectCategory[];
}

/**
 * Parte interactiva de /proyectos (Prompt 7, corrección P1 de rendimiento).
 * Antes, toda la página (incluyendo el heading estático y el mensaje de
 * "sin proyectos") era un único Client Component. Ahora ese contenido
 * estático vive en `app/proyectos/page.tsx` (Server Component) y este
 * componente recibe los datos ya resueltos en el servidor como props —
 * solo el estado del filtro y la animación del grid necesitan cliente.
 */
export function ProjectsFilterableGrid({ projects, categories }: ProjectsFilterableGridProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "todos">("todos");

  const filtered =
    activeCategory === "todos"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <Reveal className="mb-8">
        <ProjectFilter categories={categories} active={activeCategory} onChange={setActiveCategory} />
      </Reveal>

      <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-text-tertiary">
          No hay proyectos en esta categoría todavía.
        </p>
      )}
    </>
  );
}
