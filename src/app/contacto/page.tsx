import type { Metadata } from "next";
import { Mail, MapPin, Code2, Users } from "lucide-react";
import { generateMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/shared/MotionWrapper";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = generateMetadata({
  title: "Contacto",
  description: `Ponte en contacto con ${siteConfig.author.name} para hablar de un proyecto, una vacante o una colaboración.`,
  path: "/contacto",
});

/**
 * Página de Contacto (Prompt 1 y 3, sección 16): formulario a un lado,
 * información de contacto directo al otro — para quien prefiera no usar
 * el formulario. Layout de 2 columnas en desktop, apilado en mobile.
 */
export default function ContactoPage() {
  return (
    <Section className="pt-32 sm:pt-36">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <Reveal>
            <span className="font-mono text-sm uppercase tracking-widest text-primary">Contacto</span>
            <h1 className="mt-3 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
              ¿Trabajamos juntos?
            </h1>
            <p className="mt-4 max-w-md text-text-secondary">
              Completa el formulario y te responderé lo antes posible, o escríbeme directamente
              por cualquiera de estos medios.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="flex items-center gap-3 text-sm text-text-secondary transition-colors duration-200 hover:text-primary"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border">
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                </span>
                {siteConfig.author.email}
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-text-secondary transition-colors duration-200 hover:text-primary"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border">
                  <Code2 className="h-4 w-4" strokeWidth={1.5} />
                </span>
                GitHub
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-text-secondary transition-colors duration-200 hover:text-primary"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border">
                  <Users className="h-4 w-4" strokeWidth={1.5} />
                </span>
                LinkedIn
              </a>
              <div className="flex items-center gap-3 text-sm text-text-secondary">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} />
                </span>
                {siteConfig.author.location}
              </div>
            </div>
          </Reveal>

          <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
