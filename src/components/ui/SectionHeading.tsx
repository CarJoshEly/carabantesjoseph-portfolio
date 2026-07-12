"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Patrón de encabezado de sección: kicker pequeño en mono/primary + título
 * grande + descripción opcional. Usado consistentemente en todas las
 * secciones (ver Prompt 3).
 */
export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "mb-10 sm:mb-14",
        align === "center" && "mx-auto max-w-2xl text-center",
        className
      )}
    >
      <span className="font-mono text-sm uppercase tracking-widest text-primary">
        {kicker}
      </span>
      <h2 className="mt-3 text-2xl font-semibold text-text-primary sm:text-3xl lg:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-text-secondary sm:text-lg">{description}</p>
      )}
    </motion.div>
  );
}
