export const siteConfig = {
  name: "Joseph Portfolio",
  title: "Joseph — Full Stack Developer",
  description:
    "Portafolio profesional de desarrollador Full Stack especializado en Next.js, NestJS, TypeScript y análisis de datos. Explora proyectos, experiencia y forma de contacto.",
  url: "https://tu-dominio.vercel.app",
  ogImage: "/og-image.png",
  author: {
    name: "Joseph",
    role: "Full Stack Developer",
    email: "tu-email@ejemplo.com",
    location: "Honduras",
  },
  links: {
    github: "https://github.com/CarJoshEly",
    linkedin: "https://linkedin.com/in/tu-usuario",
  },
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Sobre mí", href: "/sobre-mi" },
    { label: "Contacto", href: "/contacto" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
