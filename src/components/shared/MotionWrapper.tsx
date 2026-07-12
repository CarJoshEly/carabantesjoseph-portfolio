"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Usa el viewport margin más ajustado (para elementos que empiezan más abajo). */
  tight?: boolean;
}

/**
 * Envuelve un bloque para que aparezca con fadeInUp al entrar en viewport,
 * una sola vez (Prompt 5, sección 2). Es el wrapper por defecto para
 * bloques de texto sueltos dentro de una sección.
 */
export function Reveal({ children, className }: RevealProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
}

/**
 * Contenedor que orquesta la aparición escalonada de sus hijos directos
 * (usar junto a <RevealItem /> en cada hijo). Ideal para grids de
 * Tecnologías, Proyectos, Certificaciones, Estadísticas.
 */
export function RevealGroup({ children, className }: RevealGroupProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
}

/** Ítem individual dentro de un <RevealGroup />. */
export function RevealItem({ children, className }: RevealItemProps) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}
