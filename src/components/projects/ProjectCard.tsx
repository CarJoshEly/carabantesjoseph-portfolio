import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Code2 } from "lucide-react";
import { Project, PROJECT_STATUS_LABELS } from "@/types/project";
import { resolveIcon } from "@/lib/icon-map";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  /** La primera card destacada puede ocupar doble ancho en el grid (Prompt 3, sección 8). */
  featured?: boolean;
}

const statusTone: Record<Project["status"], "success" | "primary" | "warning" | "neutral"> = {
  completado: "success",
  "en-progreso": "primary",
  pausado: "warning",
  archivado: "neutral",
};

/**
 * Card de proyecto (Prompt 4 y Prompt 5, sección 9).
 * Componente 100% presentacional: recibe un `Project` completo y no
 * decide qué proyectos mostrar ni en qué orden — esa lógica vive en
 * lib/projects.ts. Hover: contenedor se desplaza -4px, imagen interna
 * hace zoom leve (dos movimientos independientes, nunca scale en la card).
 */
export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const Icon = resolveIcon(project.icon);

  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-border-hover hover:shadow-md",
        featured && "sm:col-span-2"
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-background-secondary">
        <Image
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          fill
          sizes={featured ? "100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/80 to-transparent" />
        <div
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-md backdrop-blur-md"
          style={{ backgroundColor: `${project.color}26` }}
        >
          <Icon className="h-4 w-4" style={{ color: project.color }} strokeWidth={1.5} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-2">
          <Badge tone={statusTone[project.status]}>{PROJECT_STATUS_LABELS[project.status]}</Badge>
        </div>

        <h3 className="font-display text-lg font-semibold text-text-primary">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-sm text-text-secondary">{project.shortDescription}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech.name} tone="secondary">
              {tech.name}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge tone="neutral">+{project.technologies.length - 4}</Badge>
          )}
        </div>

        {(project.links.github || project.links.demo) && (
          <div className="mt-4 flex items-center gap-4 border-t border-border pt-4 text-sm text-text-tertiary">
            {project.links.github && (
              <span className="flex items-center gap-1.5">
                <Code2 className="h-3.5 w-3.5" strokeWidth={1.5} />
                Repositorio
              </span>
            )}
            {project.links.demo && (
              <span className="flex items-center gap-1.5">
                <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
                Demo
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
