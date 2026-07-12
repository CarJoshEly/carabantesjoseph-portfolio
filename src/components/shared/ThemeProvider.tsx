"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

/**
 * next-themes maneja localStorage + evita flash de tema incorrecto (FOUC)
 * inyectando un script inline antes de la hidratación.
 * attribute="data-theme" porque globals.css define el modo claro en
 * `[data-theme="light"]` (Prompt 2 / Prompt 6 — sistema de tokens CSS).
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
      {children}
    </NextThemesProvider>
  );
}
