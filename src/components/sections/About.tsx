import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/shared/MotionWrapper";
import { siteConfig } from "@/data/site-config";

/**
 * Sección "Sobre mí" (Prompt 3, sección 2): humaniza el perfil técnico.
 * En vez de forzar una foto, usa un panel decorativo tipo terminal como
 * elemento visual — coherente con la identidad técnica del portafolio y
 * no depende de un asset que aún no existe.
 */
export function About() {
  return (
    <Section id="sobre-mi">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <SectionHeading
              kicker="Sobre mí"
              title={`Hola, soy ${siteConfig.author.name}`}
            />
            <div className="space-y-4 text-base text-text-secondary sm:text-lg">
              <p>
                Soy desarrollador especializado en aplicaciones web y móviles modernas,
                análisis de datos, APIs y sistemas administrativos, etc. Interesado en
                desarrollo full stack, automatización y soluciones tecnológicas. Capacidad
                para trabajar en equipo, aprender rápidamente y adaptarse a nuevos entornos
                tecnológicos.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2">
            <div className="rounded-lg border border-border bg-surface p-6 font-mono text-sm shadow-md">
              <div className="mb-4 flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-error/70" />
                <span className="h-3 w-3 rounded-full bg-warning/70" />
                <span className="h-3 w-3 rounded-full bg-success/70" />
              </div>
              <p className="text-text-tertiary">$ whoami</p>
              <p className="mt-1 text-text-primary">{siteConfig.author.name.toLowerCase()}</p>
              <p className="mt-3 text-text-tertiary">$ cat rol.txt</p>
              <p className="mt-1 text-text-primary">{siteConfig.author.role}</p>
              <p className="mt-3 text-text-tertiary">$ cat ubicacion.txt</p>
              <p className="mt-1 text-text-primary">{siteConfig.author.location}</p>
              <p className="mt-3 text-primary">$ _</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
