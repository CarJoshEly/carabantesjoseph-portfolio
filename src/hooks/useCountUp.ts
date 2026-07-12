"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useReducedMotion } from "framer-motion";

/**
 * Anima un número de 0 al valor final cuando el elemento entra en viewport.
 * Retorna un ref para adjuntar al elemento y actualiza su textContent
 * directamente (evita re-renders de React en cada frame).
 */
export function useCountUp(value: number, duration = 0.8) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      if (ref.current) ref.current.textContent = value.toString();
      return;
    }

    const controls = animate(motionValue, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        if (ref.current) ref.current.textContent = Math.round(latest).toString();
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration, motionValue, shouldReduceMotion]);

  return ref;
}
