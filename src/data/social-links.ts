import { siteConfig } from "@/data/site-config";

export interface SocialLink {
  name: string;
  href: string;
  /** Clave resuelta vía lib/icon-map.ts — usa nombres presentes en el mapa */
  icon: "Globe" | "Server" | string;
}

/**
 * Redes sociales mostradas en Navbar/Footer/Contacto.
 * Se derivan de site-config.ts para no duplicar URLs en dos lugares.
 */
export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: siteConfig.links.github, icon: "Code2" },
  { name: "LinkedIn", href: siteConfig.links.linkedin, icon: "Users" },
  { name: "Email", href: `mailto:${siteConfig.author.email}`, icon: "MessageSquareCode" },
];
