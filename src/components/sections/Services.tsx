import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/shared/MotionWrapper";
import { services } from "@/data/services";
import { resolveIcon } from "@/lib/icon-map";

/** Sección Servicios (Prompt 3, sección 9): qué puedes ofrecer a un cliente. */
export function Services() {
  if (services.length === 0) return null;

  return (
    <Section id="servicios" tone="secondary">
      <Container>
        <SectionHeading
          kicker="Servicios"
          title="En qué puedo ayudarte"
          description="Tipos de proyectos y problemas que puedo resolver para tu equipo o negocio."
        />

        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = resolveIcon(service.icon);
            return (
              <RevealItem key={service.id}>
                <div className="h-full rounded-lg border border-border bg-surface p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary-muted">
                    <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">{service.description}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}
