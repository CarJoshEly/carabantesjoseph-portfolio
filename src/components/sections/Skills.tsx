import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/shared/MotionWrapper";
import { skills } from "@/data/skills";
import { resolveIcon } from "@/lib/icon-map";

/** Sección Habilidades (Prompt 3, sección 4): competencias, no herramientas. */
export function Skills() {
  if (skills.length === 0) return null;

  return (
    <Section id="habilidades">
      <Container>
        <SectionHeading
          kicker="Habilidades"
          title="Cómo trabajo"
          description="Competencias transversales que aplico en cada proyecto, más allá del stack técnico."
        />

        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = resolveIcon(skill.icon);
            return (
              <RevealItem key={skill.title}>
                <div className="h-full rounded-lg border border-border bg-surface p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary-muted">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {skill.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">{skill.description}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}
