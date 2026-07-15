import type { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/shared/MotionWrapper";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = generateMetadata({
  title: "Sobre mí",
  description: `Conoce más sobre ${siteConfig.author.name}, ${siteConfig.author.role.toLowerCase()}: trayectoria, formación y forma de trabajar.`,
  path: "/sobre-mi",
});

/**
 * Página "Sobre mí" (Prompt 1 y 3, sección 2): versión extendida del
 * resumen que ya aparece en Home, reutilizando las secciones de
 * Habilidades/Experiencia/Educación/Certificaciones para no duplicar
 * contenido ni componentes.
 */
export default function SobreMiPage() {
  return (
    <>
      <Section className="pb-0 pt-32 sm:pt-36">
        <Container>
          <Reveal className="max-w-2xl">
            <span className="font-mono text-sm uppercase tracking-widest text-primary">Sobre mí</span>
            <h1 className="mt-3 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
              Más sobre {siteConfig.author.name}
            </h1>
            <div className="mt-6 space-y-4 text-text-secondary">
              <p>
                Soy desarrollador especializado en aplicaciones web y móviles modernas,
                análisis de datos, APIs y sistemas administrativos, etc. Interesado en
                desarrollo full stack, automatización y soluciones tecnológicas. Capacidad
                para trabajar en equipo, aprender rápidamente y adaptarse a nuevos entornos
                tecnológicos.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Skills />
      <Experience />
      <Education />
      <Certifications />
    </>
  );
}
