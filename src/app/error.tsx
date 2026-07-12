"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section className="flex min-h-[70vh] items-center pt-32">
      <Container className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-error/10">
          <AlertTriangle className="h-6 w-6 text-error" strokeWidth={1.5} />
        </div>
        <p className="mt-6 font-mono text-sm uppercase tracking-widest text-error">
          Algo salió mal
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
          Ocurrió un error inesperado
        </h1>
        <p className="mx-auto mt-4 max-w-md text-text-secondary">
          Intenta de nuevo. Si el problema persiste, vuelve al inicio.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button onClick={reset} variant="secondary">
            Intentar de nuevo
          </Button>
          <Button href="/">Volver al inicio</Button>
        </div>
      </Container>
    </Section>
  );
}
