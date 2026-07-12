import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { socialLinks } from "@/data/social-links";
import { resolveIcon } from "@/lib/icon-map";
import { Reveal } from "@/components/shared/MotionWrapper";

/**
 * Footer (Prompt 3 / Prompt 5, sección 10): el elemento más silencioso
 * del sitio — fondo `background-secondary`, tipografía pequeña, animación
 * mínima (fadeInUp sutil, sin stagger).
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-secondary">
      <Reveal className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-text-primary">
              {siteConfig.author.name}
              <span className="text-primary">.</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-text-tertiary">
              {siteConfig.author.role} — {siteConfig.author.location}
            </p>
          </div>

          <nav className="flex flex-col gap-2 md:items-center">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-text-secondary transition-colors duration-200 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3 md:justify-end">
            {socialLinks.map((link) => {
              const Icon = resolveIcon(link.icon);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-colors duration-200 hover:border-border-hover hover:text-primary"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-text-tertiary sm:flex-row">
          <p>
            © {year} {siteConfig.author.name}. Todos los derechos reservados.
          </p>
          <p className="font-mono">Diseñado y desarrollado por {siteConfig.author.name}</p>
        </div>
      </Reveal>
    </footer>
  );
}
