import { ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/shared/MotionWrapper";
import { certifications } from "@/data/certifications";
import { resolveIcon } from "@/lib/icon-map";
import { formatDate } from "@/lib/utils";

/** Sección Certificaciones (Prompt 3, sección 7): se oculta si no hay ninguna. */
export function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <Section id="certificaciones">
      <Container>
        <SectionHeading kicker="Certificaciones" title="Formación verificable" />

        <RevealGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => {
            const Icon = resolveIcon(cert.icon);
            const Wrapper = cert.credentialUrl ? "a" : "div";
            return (
              <RevealItem key={cert.id}>
                <Wrapper
                  {...(cert.credentialUrl
                    ? { href: cert.credentialUrl, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-start gap-3 rounded-lg border border-border bg-surface p-4 transition-colors duration-200 hover:border-border-hover"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary-muted">
                    <Icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-text-primary">{cert.name}</p>
                    <p className="text-xs text-text-tertiary">
                      {cert.issuer} · {formatDate(cert.date)}
                    </p>
                  </div>
                  {cert.credentialUrl && (
                    <ExternalLink
                      className="h-4 w-4 shrink-0 text-text-tertiary transition-colors duration-200 group-hover:text-primary"
                      strokeWidth={1.5}
                    />
                  )}
                </Wrapper>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}
