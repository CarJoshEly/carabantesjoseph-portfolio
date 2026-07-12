"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { heroContainer, heroItem } from "@/lib/animations";
import { Button } from "@/components/ui/Button";

/**
 * Hero (Prompt 3 y 5, sección 1/3): única sección que no usa whileInView
 * (ya es visible al cargar). Secuencia: badge -> nombre -> tagline -> CTAs.
 * El glow de fondo respira suavemente en loop, sin llamar la atención de
 * forma consciente.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-glow blur-[100px]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={heroItem}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-text-secondary"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Disponible para nuevos proyectos
        </motion.div>

        <motion.h1
          variants={heroItem}
          className="max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] text-text-primary sm:text-5xl lg:text-6xl"
        >
          {siteConfig.author.name}, {siteConfig.author.role.toLowerCase()}
        </motion.h1>

        <motion.p
          variants={heroItem}
          className="mt-6 max-w-xl text-lg text-text-secondary"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div variants={heroItem} className="mt-10 flex flex-wrap gap-4">
          <Button href="/proyectos" size="lg">
            Ver proyectos
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Button>
          <Button href="/docs/cv.pdf" variant="secondary" size="lg" external>
            Descargar CV
            <Download className="h-4 w-4" strokeWidth={1.5} />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
