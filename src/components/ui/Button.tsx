"use client";

import { forwardRef, ReactNode } from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonHover, buttonTap } from "@/lib/animations";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  className?: string;
  children?: ReactNode;
}

type ButtonProps = ButtonOwnProps &
  Omit<HTMLMotionProps<"button">, keyof ButtonOwnProps>;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-text-on-primary hover:bg-primary-hover shadow-glow",
  secondary:
    "bg-surface text-text-primary border border-border hover:border-border-hover hover:bg-surface-hover",
  ghost: "bg-transparent text-text-secondary hover:text-text-primary",
  outline:
    "bg-transparent text-primary border border-primary hover:bg-primary-muted",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-6 text-sm gap-2",
  lg: "h-[52px] px-8 text-base gap-2",
};

/**
 * Botón del sistema de diseño (Prompt 2 / Prompt 5).
 * Si recibe `href`, se renderiza como Link de Next.js manteniendo
 * exactamente el mismo estilo y animación que un <button>.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      "inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 ease-out disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none whitespace-nowrap",
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    if (href) {
      const isExternal = external ?? href.startsWith("http");
      const { onClick, ...linkProps } = props as Record<string, unknown> & {
        onClick?: () => void;
      };
      return (
        <motion.span
          whileHover={disabled ? undefined : buttonHover}
          whileTap={disabled ? undefined : buttonTap}
          className="inline-block"
        >
          <Link
            href={href}
            className={classes}
            onClick={onClick}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            {...(linkProps as object)}
          >
            {children}
          </Link>
        </motion.span>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        disabled={disabled}
        whileHover={disabled ? undefined : buttonHover}
        whileTap={disabled ? undefined : buttonTap}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
