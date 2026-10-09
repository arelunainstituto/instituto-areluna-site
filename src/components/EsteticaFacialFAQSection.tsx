import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Section, SectionHeading, Reveal } from "@/components/site";
import ClinicalDisclaimer from "@/components/ClinicalDisclaimer";
import { useContact } from "@/contexts/ContactContext";

// FAQ (inspirado no bloco "faq" do 21st.dev): acordeão acessível do shadcn/ui.
const EsteticaFacialFAQSection = () => {
  const { t } = useTranslation();
  const { contact, onContactClick } = useContact();

  const faqs = [
    { question: t("facial_aesthetics_page.faq.list.types.question"), answer: t("facial_aesthetics_page.faq.list.types.answer") },
    { question: t("facial_aesthetics_page.faq.list.pain.question"), answer: t("facial_aesthetics_page.faq.list.pain.answer") },
    { question: t("facial_aesthetics_page.faq.list.results_time.question"), answer: t("facial_aesthetics_page.faq.list.results_time.answer") },
    { question: t("facial_aesthetics_page.faq.list.duration.question"), answer: t("facial_aesthetics_page.faq.list.duration.answer") },
    { question: t("facial_aesthetics_page.faq.list.recovery.question"), answer: t("facial_aesthetics_page.faq.list.recovery.answer") },
    { question: t("facial_aesthetics_page.faq.list.suitability.question"), answer: t("facial_aesthetics_page.faq.list.suitability.answer") },
    { question: t("facial_aesthetics_page.faq.list.safety.question"), answer: t("facial_aesthetics_page.faq.list.safety.answer") },
    { question: t("facial_aesthetics_page.faq.list.combination.question"), answer: t("facial_aesthetics_page.faq.list.combination.answer") },
  ];

  return (
    <Section tone="muted" width="narrow">
      <SectionHeading
        title={t("facial_aesthetics_page.faq.title")}
        description={
          <>
            <span className="mb-2 block font-vivant text-xl text-jet dark:text-white">{t("facial_aesthetics_page.faq.subtitle")}</span>
            {t("facial_aesthetics_page.faq.description")}
          </>
        }
      />

      <Accordion type="single" collapsible defaultValue="faq-0" className="space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="rounded-2xl border border-jet/10 bg-white px-5 transition-colors duration-300 data-[state=open]:border-gold-leaf/50 dark:border-white/10 dark:bg-gray-900 sm:px-6"
          >
            <AccordionTrigger className="min-h-[56px] py-4 text-left font-vivant text-base text-jet hover:text-gold-leaf hover:no-underline dark:text-white sm:text-lg">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="font-vivant-light text-sm leading-relaxed text-jet/70 dark:text-gray-300 sm:text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Reveal className="mt-12 lg:mt-16">
        <div className="rounded-2xl bg-gradient-dark p-6 text-center text-white sm:p-8">
          <h3 className="mb-3 font-vivant text-xl sm:text-2xl">{t("facial_aesthetics_page.faq.cta_title")}</h3>
          <p className="mx-auto mb-6 max-w-xl font-vivant-light text-sm text-white/75 sm:text-base">{t("facial_aesthetics_page.faq.cta_desc")}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild variant="gold-leaf" size="cta">
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={onContactClick}>
                {t("facial_aesthetics_page.faq.cta_button_schedule")}
              </a>
            </Button>
            <Button
              variant="outline-gold"
              size="cta"
              onClick={() => document.getElementById("estetica")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("facial_aesthetics_page.faq.cta_button_treatments")}
            </Button>
          </div>
          <ClinicalDisclaimer className="mt-6 text-white/75" />
        </div>
      </Reveal>
    </Section>
  );
};

export default EsteticaFacialFAQSection;
