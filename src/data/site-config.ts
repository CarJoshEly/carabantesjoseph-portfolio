export const siteConfig = {
  name: "Joseph Carabantes Portfolio",
  title: "Joseph Carabantes — Full Stack Developer",
  description:
    "Portafolio profesional de desarrollador Full Stack especializado en Next.js, NestJS, TypeScript y análisis de datos. Explora proyectos, experiencia y forma de contacto.",
  url: "https://carabantesjoseph-portfolio.vercel.app/",
  ogImage: "/og-image.png",
  author: {
    name: "Joseph Carabantes",
    role: "Full Stack Developer",
    email: "carabantesjoseph7@gmail.com",
    location: "Honduras",
  },
  links: {
    github: "https://github.com/CarJoshEly",
    linkedin: "https://www.linkedin.com/in/josephcarabantes/",
  },
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Sobre mí", href: "/sobre-mi" },
    { label: "Contacto", href: "/contacto" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
