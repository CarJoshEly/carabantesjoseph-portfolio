"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  activeHref: string;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

/**
 * Menú móvil (Prompt 5, sección 6 + Prompt 7, corrección P0 de accesibilidad).
 * Overlay con backdrop-blur + links animados en stagger. Ahora además:
 * - Atrapa el foco dentro del panel mientras está abierto (WCAG 2.4.3).
 * - Se cierra con Escape.
 * - Bloquea el scroll del body mientras está abierto.
 * - Devuelve el foco al elemento que abrió el menú (el botón hamburguesa) al cerrarse.
 */
export function MobileMenu({ open, onClose, activeHref }: MobileMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  // Abrir: guarda el foco previo, bloquea scroll, mueve el foco al botón de cerrar.
  useEffect(() => {
    if (!open) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      previouslyFocusedRef.current?.focus();
    };
  }, [open]);

  // Escape para cerrar + Tab/Shift+Tab atrapados dentro del panel.
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !containerRef.current) return;

      const focusable = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={containerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden"
        >
          <div className="flex h-14 items-center justify-end px-4">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Cerrar menú"
              className="flex h-10 w-10 items-center justify-center rounded-full text-text-primary"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          <motion.nav
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            aria-label="Navegación principal"
            className="flex flex-col items-center gap-2 px-6 pt-8"
          >
            {siteConfig.nav.map((item) => (
              <motion.div key={item.href} variants={staggerItem} className="w-full">
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={activeHref === item.href ? "page" : undefined}
                  className={`block w-full rounded-md px-4 py-3 text-center font-display text-xl font-medium ${
                    activeHref === item.href
                      ? "text-primary"
                      : "text-text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={staggerItem} className="mt-4 w-full px-4">
              <Button href="/contacto" className="w-full" onClick={onClose}>
                Contáctame
              </Button>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
