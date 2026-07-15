"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { ProjectImage } from "@/types/project";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  cover: ProjectImage;
  gallery?: ProjectImage[];
}

/**
 * Galería de imágenes del detalle de proyecto (Prompt 1, `/proyectos/[slug]`).
 * Imagen principal grande + tira de miniaturas seleccionables. Al hacer clic
 * en la imagen principal (o presionar Enter/Espacio), se abre un lightbox a
 * pantalla completa con la imagen sin recortar (Prompt 7: "que el usuario
 * pueda seleccionar una imagen y que esta se extienda, para mejor
 * visualización") — con navegación entre imágenes, cierre con Escape, clic
 * fuera, y bloqueo de scroll mientras está abierto.
 */
export function ProjectGallery({ cover, gallery = [] }: ProjectGalleryProps) {
  const allImages = [cover, ...gallery];
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const active = allImages[activeIndex];

  function openLightbox() {
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
    triggerRef.current?.focus();
  }

  function showNext() {
    setActiveIndex((i) => (i + 1) % allImages.length);
  }

  function showPrev() {
    setActiveIndex((i) => (i - 1 + allImages.length) % allImages.length);
  }

  // Bloquea el scroll del body y maneja teclado mientras el lightbox está abierto.
  useEffect(() => {
    if (!lightboxOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight" && allImages.length > 1) showNext();
      if (event.key === "ArrowLeft" && allImages.length > 1) showPrev();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, allImages.length]);

  return (
    <div>
      <button
        ref={triggerRef}
        type="button"
        onClick={openLightbox}
        aria-label={`Ampliar imagen: ${active.alt}`}
        className="group relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-background-secondary"
      >
        <Image
          src={active.src}
          alt={active.alt}
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
          className="object-cover"
          priority
        />
        <span className="absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-all duration-200 group-hover:bg-background/30 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full bg-background/80 px-4 py-2 text-sm text-text-primary backdrop-blur-sm">
            <ZoomIn className="h-4 w-4" strokeWidth={1.5} />
            Ampliar
          </span>
        </span>
      </button>

      {allImages.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
          {allImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver imagen ${index + 1} de ${allImages.length}`}
              aria-current={index === activeIndex}
              className={cn(
                "relative h-16 w-24 shrink-0 overflow-hidden rounded-md border transition-colors duration-200",
                index === activeIndex ? "border-primary" : "border-border hover:border-border-hover"
              )}
            >
              <Image src={image.src} alt={image.alt} fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md sm:p-8"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Cerrar imagen ampliada"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-surface text-text-primary sm:right-6 sm:top-6"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>

            {allImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  aria-label="Imagen anterior"
                  className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface text-text-primary sm:left-4"
                >
                  <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  aria-label="Imagen siguiente"
                  className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface text-text-primary sm:right-4"
                >
                  <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </>
            )}

            <motion.div
              key={active.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="relative h-full max-h-[85vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
