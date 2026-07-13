import type { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/shared/MotionWrapper";
import { ProjectsFilterableGrid } from "@/components/projects/ProjectsFilterableGrid";
import { getAllCategories, getAllProjects } from "@/lib/projects";

export const metadata: Metadata = generateMetadata({
  title: "Proyectos",
  description:
    "Explora todos mis proyectos de desarrollo full stack, filtrados por categoría y tecnología.",
  path: "/proyectos",
});

/**
 * Listado completo de proyectos (Prompt 1: /proyectos).
 * Server Component: el heading, la descripción y el estado "sin
 * proyectos" se renderizan en el servidor (Prompt 7, corrección P1) —
 * solo el filtro interactivo y el grid animado (`ProjectsFilterableGrid`)
 * se hidratan como cliente.
 */
export default function ProyectosPage() {
  const allProjects = getAllProjects();
  const categories = getAllCategories();

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
          <ProjectsFilterableGrid projects={allProjects} categories={categories} />
        )}
      </Container>
    </Section>
  );
}
