import {
  Globe,
  Server,
  Database,
  Wrench,
  BarChart3,
  LayoutGrid,
  Layers,
  Boxes,
  GitBranch,
  Terminal,
  Braces,
  FileCode2,
  Cloud,
  Container,
  Workflow,
  Smartphone,
  Rocket,
  Code2,
  Palette,
  ShieldCheck,
  Lightbulb,
  Users,
  Puzzle,
  Target,
  TrendingUp,
  Award,
  Trophy,
  Star,
  Sparkles,
  FolderGit2,
  Table2,
  LineChart,
  MessageSquareCode,
  Gauge,
  Car,
  type LucideIcon,
} from "lucide-react";

/**
 * Diccionario central de íconos. Todo `data/*.ts` guarda solo el NOMBRE
 * (string) del ícono; este archivo es el ÚNICO lugar que importa
 * componentes de Lucide directamente. Si Lucide renombra un ícono en una
 * actualización, solo se corrige aquí.
 */
export const iconMap = {
  // Tecnologías / stack
  Globe,
  Server,
  Database,
  Wrench,
  BarChart3,
  LayoutGrid,
  Layers,
  Boxes,
  GitBranch,
  Terminal,
  Braces,
  FileCode2,
  Cloud,
  Container,
  Workflow,
  Smartphone,
  Code2,
  Table2,
  LineChart,

  // Habilidades / servicios / logros
  Rocket,
  Palette,
  ShieldCheck,
  Lightbulb,
  Users,
  Puzzle,
  Target,
  TrendingUp,
  Award,
  Trophy,
  Star,
  Sparkles,
  FolderGit2,
  MessageSquareCode,
  Gauge,
  Car,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

/**
 * Resuelve un nombre de ícono (string) al componente Lucide real.
 * Si el nombre no existe en el diccionario, retorna un ícono de respaldo
 * (Sparkles) en vez de romper el render.
 */
export function resolveIcon(name: string): LucideIcon {
  return iconMap[name as IconName] ?? Sparkles;
}
