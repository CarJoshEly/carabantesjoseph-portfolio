import { Skill } from "@/types/skill";

/**
 * Habilidades transversales/metodológicas (no herramientas — eso va en
 * technologies.ts). Ejemplo de forma:
 * { title: "Arquitectura de APIs REST", description: "...", icon: "Server" }
 */
export const skills: Skill[] = [
  {
    title: "Desarrollo web full stack",
    description: "Construcción de aplicaciones web completas, del frontend a la API y la base de datos.",
    icon: "Globe",
  },
  {
    title: "Desarrollo móvil",
    description: "Apps móviles con notificaciones, autenticación y estadísticas de usuario.",
    icon: "Smartphone",
  },
  {
    title: "Limpieza y análisis de datos",
    description: "Procesamiento y modelado de datos para dashboards y reportes claros.",
    icon: "BarChart3",
  },
  {
    title: "Manejo de APIs",
    description: "Diseño e integración de APIs REST entre servicios y aplicaciones.",
    icon: "Server",
  },
  {
    title: "Trabajo en equipo y adaptabilidad",
    description: "Cómodo colaborando en equipos y adaptándome rápido a nuevos entornos y stacks.",
    icon: "Users",
  },
  {
    title: "Resolución de problemas",
    description: "Aprendizaje rápido de nuevas herramientas para resolver problemas concretos.",
    icon: "Lightbulb",
  },
];
