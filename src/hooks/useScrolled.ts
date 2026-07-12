"use client";

import { useEffect, useState } from "react";

/**
 * Retorna `true` cuando el usuario ha hecho scroll más allá de `threshold`.
 * Usado por el Navbar para activar el fondo con blur (ver Prompt 5, sección 6).
 */
export function useScrolled(threshold = 20): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
