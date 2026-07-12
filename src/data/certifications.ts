import { Certification } from "@/types/experience";

/**
 * Certificaciones verificables. Si no hay ninguna, la sección se oculta
 * automáticamente (ver components/sections/Certifications.tsx).
 * Ejemplo de forma:
 * {
 *   id: "cert-1",
 *   name: "Nombre del certificado",
 *   issuer: "Institución emisora",
 *   date: "2026-01-01",
 *   credentialUrl: "https://...",
 *   icon: "Award",
 * }
 */
export const certifications: Certification[] = [];
