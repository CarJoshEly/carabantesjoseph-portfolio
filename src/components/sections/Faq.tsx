"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/shared/MotionWrapper";
import { faqItems } from "@/data/faq";
import { motionTokens } from "@/lib/animations";

function FaqAccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${question.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="border-b border-border">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className="font-medium text-text-primary">{question}</span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: motionTokens.duration.fast, ease: motionTokens.ease.out }}
            className="shrink-0 text-text-secondary"
          >
            <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: motionTokens.duration.normal, ease: motionTokens.ease.out }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-text-secondary sm:text-base">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Sección Preguntas Frecuentes (Prompt 3, sección 15): acordeón accesible. */
export function Faq() {
  if (faqItems.length === 0) return null;

  return (
    <Section id="faq">
      <Container>
        <SectionHeading kicker="FAQ" title="Preguntas frecuentes" />
        <Reveal className="mx-auto max-w-2xl divide-y divide-border border-t border-border">
          {faqItems.map((item) => (
            <FaqAccordionItem key={item.id} question={item.question} answer={item.answer} />
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
