"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/useScrolled";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { MobileMenu } from "@/components/layout/MobileMenu";

/**
 * Navbar sticky (Prompt 2 / Prompt 5, sección 6): fondo transparente que
 * gana blur + borde inferior al hacer scroll. El indicador de sección
 * activa usa layoutId para deslizarse entre links.
 */
export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrolled(20);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-colors duration-200",
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-16 lg:px-8">
          <Link
            href="/"
            className="font-display text-lg font-semibold text-text-primary"
          >
            {siteConfig.author.name}
            <span className="text-primary">.</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm transition-colors duration-200",
                    isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute inset-x-4 -bottom-[1px] h-[2px] bg-primary"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button href="/contacto" size="sm">
              Contáctame
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
              className="flex h-10 w-10 items-center justify-center rounded-full text-text-primary"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} activeHref={pathname} />
    </>
  );
}
