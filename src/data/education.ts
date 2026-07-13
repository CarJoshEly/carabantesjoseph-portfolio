import { EducationEntry } from "@/types/experience";

/**
 * Formación académica. Ejemplo de forma:
 * {
 *   id: "edu-1",
 *   program: "Seminario Taller Software",
 *   institution: "Universidad",
 *   startDate: "2024-01-01",
 *   endDate: null,
 *   description: "...",
 * }
 */
export const education: EducationEntry[] = [
  {
    id: "edu-ucatolica",
    program: "Ingeniería en Ciencias de la Computación",
    institution: "Universidad Católica de Honduras",
    startDate: "2021-01-01",
    endDate: null,
    description:
      "Formación enfocada en desarrollo de software, bases de datos, análisis de datos y arquitectura de sistemas.",
  },
  {
    id: "edu-instituto-galvez",
    program: "Bachiller en Ciencias y Humanidades",
    institution:
      'Instituto Gubernamental Técnico Comunitario "Juan Manuel Gálvez" — Tomalá, Lempira',
    startDate: "2019-01-01",
    endDate: "2020-12-01",
  },
];
