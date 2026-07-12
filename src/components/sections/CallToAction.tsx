import { ArrowRight, Mail } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/shared/MotionWrapper";
import { siteConfig } from "@/data/site-config";

/**
 * CTA final de Home (Prompt 3, sección 16): versión compacta que enlaza a
 * /contacto, con la misma jerarquía visual de un mini-hero para cerrar la
 * página con intención de conversión.
 */
export function CallToAction() {
  return (
    <Section id="contacto-cta" tone="secondary">
      <Container>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-xl border border-border bg-surface px-6 py-14 text-center shadow-glow sm:px-12">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-muted">
            <Mail className="h-5 w-5 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="font-display text-2xl font-semibold text-text-primary sm:text-3xl">
            ¿Trabajamos juntos?
          </h2>
          <p className="max-w-md text-text-secondary">
            Estoy disponible para nuevos proyectos y oportunidades como {siteConfig.author.role.toLowerCase()}.
            Cuéntame en qué estás trabajando.
          </p>
          <Button href="/contacto" size="lg">
            Contáctame
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
