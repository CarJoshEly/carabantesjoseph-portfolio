import type { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";

export const metadata: Metadata = generateMetadata({
  title: "Proyectos",
  description: "Explora todos mis proyectos de desarrollo full stack, filtrados por categoría y tecnología.",
  path: "/proyectos",
});

export default function ProyectosPage() {
  return <ProjectsExplorer />;
}
