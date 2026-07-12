import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article";
}

/** Envoltorio de ancho máximo consistente, mobile-first. */
export function Container({ className, as: Tag = "div", ...props }: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
