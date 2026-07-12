"use client";

import { useMemo, useState } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/shared/MotionWrapper";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { getAllCategories, getAllProjects } from "@/lib/projects";
import { ProjectCategory } from "@/types/project";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Listado completo de proyectos (Prompt 1: /proyectos). Filtro por
 * categoría generado dinámicamente desde los datos reales (Prompt 4,
 * sección 5) — nunca hardcodeado. El grid se reacomoda con animación de
 * layout al cambiar de filtro (Prompt 5, sección 9).
 */
export function ProjectsExplorer() {
  const allProjects = useMemo(() => getAllProjects(), []);
  const categories = useMemo(() => getAllCategories(), []);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "todos">("todos");

  const filtered =
    activeCategory === "todos"
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);

  return (
    <Section id="listado-proyectos" className="pt-32 sm:pt-36">
      <Container>
        <Reveal className="mb-10 max-w-2xl">
          <span className="font-mono text-sm uppercase tracking-widest text-primary">Proyectos</span>
          <h1 className="mt-3 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
            Todo lo que he construido
          </h1>
          <p className="mt-4 text-text-secondary">
            Filtra por categoría para explorar proyectos según el tipo de problema que resuelven.
          </p>
        </Reveal>

        {allProjects.length === 0 ? (
          <p className="rounded-lg border border-dashed border-border p-10 text-center text-text-tertiary">
            Aún no hay proyectos cargados. Agrégalos en{" "}
            <code className="font-mono text-text-secondary">src/data/projects.ts</code>.
          </p>
        ) : (
          <>
            <Reveal className="mb-8">
              <ProjectFilter
                categories={categories}
                active={activeCategory}
                onChange={setActiveCategory}
              />
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
        )}
      </Container>
    </Section>
  );
}
