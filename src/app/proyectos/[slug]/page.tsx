import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { getAllProjects, getProjectBySlug, getRelatedProjects } from "@/lib/projects";
import { getProjectJsonLd } from "@/lib/structured-data";
import { PROJECT_CATEGORY_LABELS, PROJECT_STATUS_LABELS } from "@/types/project";
import { formatDate } from "@/lib/utils";
import { generateMetadata as buildMetadata } from "@/lib/metadata";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

/** Pre-renderiza una página estática por cada proyecto en build time. */
export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return buildMetadata({ title: "Proyecto no encontrado", noIndex: true });
  }

  return buildMetadata({
    title: project.name,
    description: project.shortDescription,
    path: `/proyectos/${project.slug}`,
    image: project.coverImage.src,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const related = getRelatedProjects(project);

  return (
    <Section className="pt-32 sm:pt-36">
      {/* JSON-LD (Prompt 7): schema.org SoftwareSourceCode para este proyecto */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getProjectJsonLd(project)) }}
      />
      <Container>
        <Link
          href="/proyectos"
          className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          Volver a proyectos
        </Link>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ProjectGallery cover={project.coverImage} gallery={project.gallery} />

            <div className="mt-10">
              <h2 className="font-display text-xl font-semibold text-text-primary">El proyecto</h2>
              <p className="mt-3 whitespace-pre-line text-text-secondary">
                {project.longDescription}
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-border bg-surface p-6">
              <div className="flex flex-wrap gap-2">
                <Badge tone="primary">{PROJECT_CATEGORY_LABELS[project.category]}</Badge>
                <Badge tone="neutral">{PROJECT_STATUS_LABELS[project.status]}</Badge>
              </div>

              <h1 className="mt-4 font-display text-2xl font-semibold text-text-primary">
                {project.name}
              </h1>
              <p className="mt-1 font-mono text-xs text-text-tertiary">{formatDate(project.date)}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech.name} tone="secondary">
                    {tech.name}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3">
                {project.links.demo && (
                  <Button href={project.links.demo} external className="w-full">
                    Ver demo
                    <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                  </Button>
                )}
                {project.links.github && (
                  <Button href={project.links.github} external variant="secondary" className="w-full">
                    Ver repositorio
                    <Code2 className="h-4 w-4" strokeWidth={1.5} />
                  </Button>
                )}
              </div>
            </div>

            {project.tags.length > 0 && (
              <div className="rounded-lg border border-border bg-surface p-6">
                <p className="mb-3 font-mono text-xs uppercase tracking-wide text-text-tertiary">
                  Etiquetas
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} tone="neutral">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="mb-6 font-display text-xl font-semibold text-text-primary">
              Proyectos relacionados
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((relatedProject) => (
                <ProjectCard key={relatedProject.id} project={relatedProject} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
