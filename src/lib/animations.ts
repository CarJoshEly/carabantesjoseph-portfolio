import { Variants } from "framer-motion";

/**
 * Tokens base del sistema de animación.
 * Ningún componente debe definir duraciones/easings sueltos: todo se
 * referencia desde aquí para mantener consistencia (ver Prompt 5).
 */
export const motionTokens = {
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
  },
  ease: {
    out: [0.16, 1, 0.3, 1] as const,
    inOut: [0.65, 0, 0.35, 1] as const,
  },
  stagger: {
    tight: 0.05,
    normal: 0.1,
  },
  distance: {
    sm: 8,
    md: 24,
  },
};

/** Fade + slide hacia arriba. Uso general para bloques de texto y secciones. */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: motionTokens.distance.md },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.ease.out,
    },
  },
};

/** Versión sutil (footer, elementos de cierre). */
export const fadeInUpSm: Variants = {
  hidden: { opacity: 0, y: motionTokens.distance.sm },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.normal,
      ease: motionTokens.ease.out,
    },
  },
};

/** Contenedor que orquesta la aparición escalonada de sus hijos. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: motionTokens.stagger.normal },
  },
};

export const staggerContainerTight: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: motionTokens.stagger.tight },
  },
};

/** Ítem individual dentro de un staggerContainer. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.normal + 0.1,
      ease: motionTokens.ease.out,
    },
  },
};

/** Secuencia de entrada del Hero (no usa whileInView, se monta al cargar). */
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: motionTokens.distance.md },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.ease.out,
    },
  },
};

/** Transición de página (App Router). Sutil: solo fade + 8px, nunca slide completo. */
export const pageTransitionVariants: Variants = {
  initial: { opacity: 0, y: motionTokens.distance.sm },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.normal,
      ease: motionTokens.ease.inOut,
    },
  },
  exit: {
    opacity: 0,
    y: -motionTokens.distance.sm,
    transition: {
      duration: motionTokens.duration.fast + 0.05,
      ease: motionTokens.ease.inOut,
    },
  },
};

/** Hover estándar de cards: solo translateY, nunca scale (ver Prompt 5, sección 4). */
export const cardHover = {
  y: -4,
  transition: { duration: motionTokens.duration.fast + 0.05, ease: motionTokens.ease.out },
};

/** Hover/tap estándar de botones. */
export const buttonHover = {
  scale: 1.02,
  transition: { duration: motionTokens.duration.fast },
};

export const buttonTap = {
  scale: 0.98,
  transition: { duration: 0.1 },
};

/** Viewport options estándar para whileInView: se anima una sola vez. */
export const viewportOnce = { once: true, margin: "-100px" as const };
export const viewportOnceTight = { once: true, margin: "-50px" as const };
