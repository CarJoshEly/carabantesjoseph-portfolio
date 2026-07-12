"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { cardHover } from "@/lib/animations";

interface CardProps extends HTMLMotionProps<"div"> {
  hoverable?: boolean;
}

/**
 * Card base del sistema de diseño (Prompt 2, sección 9): fondo `surface`,
 * borde sutil, radio 16px. El hover solo desplaza verticalmente (nunca
 * scale) — ver Prompt 5, sección 4.
 */
export function Card({ hoverable = true, className, children, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={hoverable ? cardHover : undefined}
      className={cn(
        "rounded-lg border border-border bg-surface p-6 transition-colors duration-200 hover:border-border-hover",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
