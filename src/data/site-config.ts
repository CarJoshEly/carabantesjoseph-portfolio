export const siteConfig = {
  name: "Joseph Carabantes — Portfolio",
  title: "Joseph Carabantes — Full Stack Developer",
  description:
    "Desarrollador especializado en aplicaciones web y móviles modernas, análisis de datos, APIs y sistemas administrativos. Explora proyectos, formación y forma de contacto.",
  url: "https://tu-dominio.vercel.app",
  ogImage: "/og-image.png",
  author: {
    name: "Joseph Carabantes",
    role: "Full Stack Developer",
    email: "carabantesjoseph7@gmail.com",
    location: "Honduras",
  },
  links: {
    github: "https://github.com/CarJoshEly",
    linkedin: "https://linkedin.com/in/josephcarabantes",
  },
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Sobre mí", href: "/sobre-mi" },
    { label: "Contacto", href: "/contacto" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
