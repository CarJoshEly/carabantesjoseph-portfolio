import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/shared/MotionWrapper";
import { education } from "@/data/education";
import { formatDateRange } from "@/lib/utils";
import { GraduationCap } from "lucide-react";

/** Sección Educación (Prompt 3, sección 6): cards compactas, sin timeline (pocas entradas). */
export function Education() {
  if (education.length === 0) return null;

  return (
    <Section id="educacion" tone="secondary">
      <Container>
        <SectionHeading kicker="Formación" title="Educación" />

        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {education.map((entry) => (
            <RevealItem key={entry.id}>
              <div className="h-full rounded-lg border border-border bg-surface p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary-muted">
                  <GraduationCap className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <p className="font-mono text-xs uppercase tracking-wide text-text-tertiary">
                  {formatDateRange(entry.startDate, entry.endDate)}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-text-primary">
                  {entry.program}
                </h3>
                <p className="text-sm text-text-secondary">{entry.institution}</p>
                {entry.description && (
                  <p className="mt-2 text-sm text-text-secondary">{entry.description}</p>
                )}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
