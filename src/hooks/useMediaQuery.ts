"use client";

import { useEffect, useState } from "react";

/**
 * Hook genérico para media queries, ej. useMediaQuery("(min-width: 768px)").
 * Útil cuando la lógica de un componente necesita ramificarse por breakpoint
 * más allá de lo que Tailwind puede resolver solo con CSS.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);

    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
