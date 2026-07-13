import { Technology } from "@/types/skill";

/**
 * Tecnologías mostradas en la sección "Tecnologías", agrupadas por
 * categoría automáticamente en el componente según el campo `category`.
 *
 * Ejemplo de forma (referencia, no un dato real):
 * { name: "Next.js", icon: "Globe", category: "frontend" }
 *
 * Íconos disponibles: ver claves en src/lib/icon-map.ts
 */
export const technologies: Technology[] = [
  // Frontend
  { name: "React.js", icon: "Code2", category: "frontend" },
  { name: "Next.js", icon: "Globe", category: "frontend" },
  { name: "JavaScript", icon: "Braces", category: "frontend" },
  { name: "TypeScript", icon: "FileCode2", category: "frontend" },
  { name: "Tailwind CSS", icon: "Palette", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "Server", category: "backend" },
  { name: "Express.js", icon: "Server", category: "backend" },
  { name: "NestJS", icon: "Layers", category: "backend" },
  { name: "Python", icon: "Terminal", category: "backend" },

  // Bases de datos
  { name: "PostgreSQL", icon: "Database", category: "bases-de-datos" },
  { name: "MySQL", icon: "Database", category: "bases-de-datos" },
  { name: "MongoDB", icon: "Database", category: "bases-de-datos" },
  { name: "SQLite", icon: "Database", category: "bases-de-datos" },
  { name: "Prisma", icon: "Boxes", category: "bases-de-datos" },

  // Herramientas
  { name: "Git & GitHub", icon: "GitBranch", category: "herramientas" },
  { name: "Firebase", icon: "Cloud", category: "herramientas" },
  { name: "Dart", icon: "Smartphone", category: "herramientas" },
  { name: "Flutter", icon: "Smartphone", category: "herramientas" },

  // Datos & BI
  { name: "SQL", icon: "Table2", category: "data-bi" },
  { name: "Power BI", icon: "BarChart3", category: "data-bi" },
];
