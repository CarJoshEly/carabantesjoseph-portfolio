import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  /** Alterna el fondo entre background y background-secondary (ritmo visual). */
  tone?: "default" | "secondary";
}

/**
 * Wrapper de sección con el espaciado vertical definido en el sistema
 * de diseño: mayor separación entre secciones que dentro de ellas
 * (Prompt 2, sección 3 — "regla de oro" de espaciado).
 */
export function Section({ id, tone = "default", className, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        tone === "secondary" && "bg-background-secondary",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
