import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/shared/MotionWrapper";
import { achievements } from "@/data/achievements";
import { resolveIcon } from "@/lib/icon-map";
import { formatDate } from "@/lib/utils";

/**
 * Sección Logros (Prompt 3, sección 10): hitos puntuales que no encajan
 * en Experiencia (hackathons, reconocimientos, contribuciones). Formato
 * de lista horizontal ligera, no cards pesadas — es contenido de refuerzo.
 */
export function Achievements() {
  if (achievements.length === 0) return null;

  return (
    <Section id="logros">
      <Container>
        <SectionHeading kicker="Logros" title="Hitos destacados" />

        <RevealGroup className="divide-y divide-border rounded-lg border border-border bg-surface">
          {achievements.map((achievement) => {
            const Icon = resolveIcon(achievement.icon);
            return (
              <RevealItem key={achievement.id}>
                <div className="flex items-start gap-4 p-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary-muted">
                    <Icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-display text-base font-semibold text-text-primary">
                        {achievement.title}
                      </h3>
                      <span className="font-mono text-xs text-text-tertiary">
                        {formatDate(achievement.date)}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-text-secondary">{achievement.description}</p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}
