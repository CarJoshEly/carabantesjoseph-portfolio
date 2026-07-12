import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/shared/MotionWrapper";
import { technologies } from "@/data/technologies";
import { SKILL_CATEGORY_LABELS, SkillCategory } from "@/types/skill";
import { resolveIcon } from "@/lib/icon-map";

/**
 * Sección Tecnologías (Prompt 3, sección 3 / Prompt 5, sección 8).
 * Agrupa dinámicamente por `category` — si agregas una tecnología con una
 * categoría nueva en data/technologies.ts, el grupo aparece solo, sin
 * tocar este componente.
 */
export function TechStack() {
  if (technologies.length === 0) return null;

  const categories = Array.from(
    new Set(technologies.map((t) => t.category))
  ) as SkillCategory[];

  return (
    <Section id="tecnologias" tone="secondary">
      <Container>
        <SectionHeading
          kicker="Stack técnico"
          title="Tecnologías con las que trabajo"
          description="Herramientas y lenguajes que uso de forma habitual en proyectos reales."
        />

        <div className="space-y-10">
          {categories.map((category) => (
            <div key={category}>
              <p className="mb-4 font-mono text-sm uppercase tracking-wide text-text-tertiary">
                {SKILL_CATEGORY_LABELS[category]}
              </p>
              <RevealGroup className="flex flex-wrap gap-3">
                {technologies
                  .filter((t) => t.category === category)
                  .map((tech) => {
                    const Icon = resolveIcon(tech.icon);
                    return (
                      <RevealItem key={tech.name}>
                        <div className="group flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-border-hover">
                          <Icon
                            className="h-4 w-4 text-text-secondary transition-colors duration-200 group-hover:text-primary"
                            strokeWidth={1.5}
                          />
                          <span className="text-sm text-text-primary">{tech.name}</span>
                        </div>
                      </RevealItem>
                    );
                  })}
              </RevealGroup>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
