# Portafolio — Joseph

Portafolio profesional de desarrollador Full Stack construido con Next.js 15 (App Router), TypeScript, Tailwind CSS v4 y Framer Motion.

## Stack

- **Next.js 15** (App Router, Server Components)
- **TypeScript** estricto
- **Tailwind CSS v4** (configuración CSS-first en `src/app/globals.css`)
- **Framer Motion** para animaciones
- **Lucide React** para iconografía
- **next-themes** para modo claro/oscuro

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

> **Nota sobre la primera build/dev**: `next/font/google` descarga las tipografías (Space Grotesk, Inter, IBM Plex Mono) desde Google Fonts la primera vez que compilas. Necesitas conexión a internet para ese primer `npm run dev` o `npm run build`; después quedan cacheadas.

```bash
npm run build   # build de producción
npm run start   # sirve el build de producción
npm run lint    # ESLint
```

## Cómo agregar contenido

Todo el contenido vive en `src/data/*.ts`, tipado con las interfaces de `src/types/`. **No necesitas tocar ningún componente** para agregar contenido nuevo — cada sección se oculta automáticamente si su archivo de datos está vacío y aparece sola cuando agregas el primer elemento.

| Archivo | Qué controla |
|---|---|
| `src/data/site-config.ts` | Nombre, rol, email, redes, navegación |
| `src/data/projects.ts` | Proyectos (ver estructura completa abajo) |
| `src/data/technologies.ts` | Stack técnico mostrado en "Tecnologías" |
| `src/data/skills.ts` | Habilidades transversales |
| `src/data/services.ts` | Servicios freelance ofrecidos |
| `src/data/experience.ts` | Experiencia laboral (timeline) |
| `src/data/education.ts` | Formación académica |
| `src/data/certifications.ts` | Certificaciones verificables |
| `src/data/achievements.ts` | Logros puntuales |
| `src/data/stats.ts` | Estadísticas con animación de conteo |
| `src/data/faq.ts` | Preguntas frecuentes |

### Agregar un proyecto nuevo

1. Copia sus imágenes a `public/images/projects/{slug}/`.
2. Agrega un objeto que cumpla la interfaz `Project` (`src/types/project.ts`) al array en `src/data/projects.ts`.
3. Guarda. La card aparece automáticamente en `/proyectos` y, si `featured: true`, también en Home. La página de detalle `/proyectos/[slug]` y los filtros por categoría se generan solos.

### Assets pendientes de reemplazar

- `public/images/avatar/` — tu foto o ilustración, si decides usarla en "Sobre mí".
- `public/docs/cv.pdf` — tu CV (referenciado por el botón "Descargar CV" del Hero).
- `public/og-image.png` — imagen para Open Graph/redes sociales (1200×630px).
- `src/data/site-config.ts` — reemplaza `url`, `email` y los links de `github`/`linkedin` por los reales.

## Formulario de contacto

`src/app/api/contact/route.ts` valida el mensaje server-side (con rate limiting de 5 solicitudes/10 min por IP y un campo honeypot anti-spam) y envía el correo real a través de [Resend](https://resend.com) — plan gratuito, 3,000 emails/mes, más que suficiente para un portafolio.

Para activarlo:

1. Crea una cuenta gratuita en [resend.com](https://resend.com) y genera una API key en [resend.com/api-keys](https://resend.com/api-keys).
2. Copia `.env.example` a `.env.local` y completa `RESEND_API_KEY` y `CONTACT_EMAIL_TO`.
3. En Vercel: Project → Settings → Environment Variables → agrega las mismas dos variables (Production, Preview y Development) → Redeploy.

Sin dominio propio verificado, los correos se envían desde `onboarding@resend.dev` — funciona sin configuración de DNS siempre que `CONTACT_EMAIL_TO` sea tu propio correo. Si en algún momento quieres enviar desde un dominio propio (ej. `contacto@tudominio.com`), verifica el dominio en el dashboard de Resend y define `RESEND_FROM_EMAIL`.

Si `RESEND_API_KEY` no está configurada (ej. en desarrollo local sin `.env.local`), el formulario sigue funcionando normalmente — simplemente registra el mensaje en la consola del servidor en vez de enviarlo.

## Despliegue en Vercel

1. Sube el repositorio a GitHub (`CarJoshEly/...`).
2. Importa el repo en [vercel.com/new](https://vercel.com/new).
3. Vercel detecta Next.js automáticamente — no requiere configuración adicional.
4. Si conectaste un proveedor de email, agrega las variables de entorno en el dashboard de Vercel antes del deploy.
5. Actualiza `url` en `src/data/site-config.ts` con tu dominio real de Vercel (necesario para el sitemap y las metaetiquetas Open Graph).

## Estructura del proyecto

```
src/
├── app/            # Rutas (App Router): /, /proyectos, /proyectos/[slug], /sobre-mi, /contacto, /api/contact
├── components/
│   ├── ui/         # Átomos: Button, Card, Badge, Section, Container...
│   ├── layout/     # Navbar, Footer, MobileMenu, ThemeToggle
│   ├── sections/   # Bloques de página: Hero, About, Skills, Stats, Faq...
│   ├── projects/   # ProjectCard, ProjectFilter, ProjectGallery
│   └── shared/     # ThemeProvider, PageTransition, MotionWrapper
├── data/           # Fuente de verdad de contenido (editas esto)
├── types/          # Interfaces TypeScript de cada entidad de contenido
├── lib/            # Lógica pura: utils, animations, projects, icon-map, metadata
├── hooks/          # useScrolled, useActiveSection, useCountUp, useMediaQuery
└── styles/         # Configuración de next/font
```

Accesibilidad, SEO y sistema de animaciones siguen las decisiones documentadas en el proceso de diseño previo a esta implementación (arquitectura, sistema visual, estructura de secciones, sistema de proyectos y sistema de animaciones).
