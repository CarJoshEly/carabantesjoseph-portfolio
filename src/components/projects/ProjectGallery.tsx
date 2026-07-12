"use client";

import { useState } from "react";
import Image from "next/image";
import { ProjectImage } from "@/types/project";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  cover: ProjectImage;
  gallery?: ProjectImage[];
}

/**
 * Galería de imágenes del detalle de proyecto (Prompt 1, `/proyectos/[slug]`).
 * Imagen principal grande + tira de miniaturas seleccionables. Si no hay
 * `gallery`, solo muestra la portada sin controles adicionales.
 */
export function ProjectGallery({ cover, gallery = [] }: ProjectGalleryProps) {
  const allImages = [cover, ...gallery];
  const [activeIndex, setActiveIndex] = useState(0);
  const active = allImages[activeIndex];

  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-background-secondary">
        <Image
          src={active.src}
          alt={active.alt}
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
          className="object-cover"
          priority
        />
      </div>

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
    </div>
  );
}
