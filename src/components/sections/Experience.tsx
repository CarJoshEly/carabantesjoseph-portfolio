import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/shared/MotionWrapper";
import { experience } from "@/data/experience";
import { formatDateRange } from "@/lib/utils";

/** Sección Experiencia (Prompt 3, sección 5): timeline vertical, más reciente primero. */
export function Experience() {
  if (experience.length === 0) return null;

  const sorted = [...experience].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  return (
    <Section id="experiencia">
      <Container>
        <SectionHeading
          kicker="Trayectoria"
          title="Experiencia"
          description="Roles y proyectos donde he aplicado mi stack en contextos reales."
        />

        <div className="relative space-y-10 border-l border-border pl-8">
          {sorted.map((entry) => (
            <Reveal key={entry.id} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
              <p className="font-mono text-xs uppercase tracking-wide text-text-tertiary">
                {formatDateRange(entry.startDate, entry.endDate)}
              </p>
              <h3 className="mt-1 font-display text-xl font-semibold text-text-primary">
                {entry.role} <span className="text-text-secondary">— {entry.organization}</span>
              </h3>
              <p className="mt-2 text-sm text-text-secondary sm:text-base">{entry.description}</p>

              {entry.achievements.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {entry.achievements.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-text-secondary">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {entry.technologies.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
