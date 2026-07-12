import { ExperienceEntry } from "@/types/experience";

/**
 * Experiencia laboral/profesional, mostrada como timeline vertical.
 * Orden esperado: más reciente primero. Ejemplo de forma:
 * {
 *   id: "exp-1",
 *   role: "Full Stack Developer",
 *   organization: "Empresa / Proyecto",
 *   startDate: "2025-01-01",
 *   endDate: null, // null = "Actualidad"
 *   description: "...",
 *   achievements: ["Logro concreto 1", "Logro concreto 2"],
 *   technologies: ["Next.js", "NestJS"],
 * }
 */
export const experience: ExperienceEntry[] = [];
