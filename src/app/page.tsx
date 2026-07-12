import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Achievements } from "@/components/sections/Achievements";
import { Stats } from "@/components/sections/Stats";
import { Faq } from "@/components/sections/Faq";
import { CallToAction } from "@/components/sections/CallToAction";

/**
 * Home (Prompt 3): orden final confirmado por el usuario —
 * Experiencia/Educación/Logros como secciones separadas, Servicios
 * incluida (freelance activo), Testimonios omitida por ahora.
 * Cada sección se auto-oculta si su fuente en data/ está vacía, así que
 * el Home crece automáticamente conforme agregues contenido real.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Skills />
      <Services />
      <ProjectsGrid />
      <Experience />
      <Education />
      <Certifications />
      <Achievements />
      <Stats />
      <Faq />
      <CallToAction />
    </>
  );
}
