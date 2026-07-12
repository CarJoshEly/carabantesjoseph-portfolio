"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { pageTransitionVariants } from "@/lib/animations";

/**
 * Envuelve el contenido de cada página con una transición sutil
 * (fade + 8px, nunca slide completo — Prompt 5, sección 7).
 * Usa el pathname como key para que AnimatePresence detecte el cambio.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={pageTransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
