import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type BadgeTone = "primary" | "secondary" | "neutral" | "success" | "warning";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

const toneClasses: Record<BadgeTone, string> = {
  primary: "bg-primary-muted text-primary",
  secondary: "bg-secondary-muted text-secondary",
  neutral: "bg-surface text-text-secondary border border-border",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
};

/** Pill pequeña usada para tags de tecnología, estado de proyecto, categorías. */
export function Badge({ tone = "neutral", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-xs font-medium leading-none",
        toneClasses[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
