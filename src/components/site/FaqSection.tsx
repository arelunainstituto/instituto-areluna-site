import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

/**
 * FAQ padrão (Accordion shadcn/Radix). Inspirado nos blocos "faq" do 21st.dev.
 * `cta` é o bloco final (título, texto, botões) já composto pela página.
 */
export interface FaqSectionProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  items: { question: string; answer: string }[];
  cta?: React.ReactNode;
}

export const FaqSection = ({ title, subtitle, description, items, cta }: FaqSectionProps) => (
  <Section tone="muted" width="narrow">
    <SectionHeading title={title} eyebrow={subtitle} description={description} />
    <Accordion type="single" collapsible defaultValue="faq-0" className="space-y-3">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={`faq-${i}`}
          className="rounded-2xl border border-gold-leaf/20 bg-white px-5 transition-colors data-[state=open]:border-gold-leaf/60 dark:bg-gray-800 sm:px-6"
        >
          <AccordionTrigger className="min-h-[56px] text-left font-vivant text-base text-jet hover:text-gold-leaf hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:text-white sm:text-lg">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="font-vivant-light text-sm leading-relaxed text-jet/70 dark:text-gray-300 sm:text-base">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    {cta && (
      <div className="mt-12 rounded-3xl bg-gradient-dark p-8 text-center text-pure-white dark:bg-black dark:bg-none">{cta}</div>
    )}
  </Section>
);

export default FaqSection;
