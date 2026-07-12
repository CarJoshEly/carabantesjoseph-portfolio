"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { stats } from "@/data/stats";
import { useCountUp } from "@/hooks/useCountUp";

function StatItem({ label, value, suffix }: { label: string; value: number; suffix?: string }) {
  const ref = useCountUp(value);

  return (
    <motion.div variants={fadeInUp} className="text-center">
      <p className="font-mono text-4xl font-semibold text-primary sm:text-5xl">
        <span ref={ref}>0</span>
        {suffix}
      </p>
      <p className="mt-2 text-sm text-text-tertiary">{label}</p>
    </motion.div>
  );
}

/**
 * Sección Estadísticas (Prompt 3, sección 11 / Prompt 5, sección 2):
 * números reales y verificables únicamente, con animación de conteo
 * ascendente al entrar en viewport. Se oculta si no hay datos cargados.
 */
export function Stats() {
  if (stats.length === 0) return null;

  return (
    <Section id="estadisticas" tone="secondary">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <StatItem key={stat.id} label={stat.label} value={stat.value} suffix={stat.suffix} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
