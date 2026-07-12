import { Compass } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="flex min-h-[70vh] items-center pt-32">
      <Container className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-muted">
          <Compass className="h-6 w-6 text-primary" strokeWidth={1.5} />
        </div>
        <p className="mt-6 font-mono text-sm uppercase tracking-widest text-primary">Error 404</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
          Esta página no existe
        </h1>
        <p className="mx-auto mt-4 max-w-md text-text-secondary">
          La ruta que buscas no está disponible. Puede que el enlace esté roto o que la página se
          haya movido.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Volver al inicio</Button>
        </div>
      </Container>
    </Section>
  );
}
