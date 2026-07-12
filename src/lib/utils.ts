import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases de Tailwind de forma segura, resolviendo conflictos
 * (ej. "px-2" y "px-4" -> se queda con la última) y permitiendo
 * condicionales con clsx.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formatea una fecha ISO ("2026-05-01") a formato legible en español.
 * Ej: "mayo 2026"
 */
export function formatDate(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00`);
  return new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "long",
  }).format(date);
}

/**
 * Formatea un rango de fechas para timelines (Experiencia/Educación).
 * Si endDate es null o undefined, se asume "Actualidad".
 */
export function formatDateRange(startDate: string, endDate?: string | null): string {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : "Actualidad";
  return `${start} — ${end}`;
}

/**
 * Convierte un string a slug (kebab-case), útil si se generan slugs
 * dinámicamente a partir de nombres.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
