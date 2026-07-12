import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/shared/MotionWrapper";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

/**
 * Sección Proyectos en Home (Prompt 3, sección 8): solo proyectos
 * `featured: true`, máximo peso visual de todo el sitio. El primero se
 * muestra en doble ancho para darle jerarquía de "proyecto insignia".
 * Se oculta por completo si aún no hay proyectos cargados en data/projects.ts.
 */
export function ProjectsGrid() {
  const featured = getFeaturedProjects();

  if (featured.length === 0) return null;

  return (
    <Section id="proyectos" tone="secondary">
      <Container>
        <SectionHeading
          kicker="Proyectos"
          title="Trabajo reciente"
          description="Una selección de proyectos donde llevé una idea de principio a fin."
        />

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <RevealItem key={project.id} className={index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}>
              <ProjectCard project={project} featured={index === 0} />
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-10 flex justify-center">
          <Button href="/proyectos" variant="secondary">
            Ver todos los proyectos
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
