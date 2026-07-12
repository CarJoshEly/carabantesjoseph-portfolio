export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  startDate: string; // ISO
  endDate?: string | null; // null = actualidad
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationEntry {
  id: string;
  program: string;
  institution: string;
  startDate: string;
  endDate?: string | null;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  /** Clave resuelta vía lib/icon-map.ts */
  icon: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  /** Clave resuelta vía lib/icon-map.ts */
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  /** Clave resuelta vía lib/icon-map.ts */
  icon: string;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string; // ej. "+"
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
