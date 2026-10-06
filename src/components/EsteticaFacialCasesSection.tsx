import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, Reveal, cardBaseClasses } from "@/components/site";
import casoRinoImg from "@/assets/caso-rino.webp";
import casoLipsImg from "@/assets/caso-lips.webp";
import caso2 from "@/assets/01.webp";

// Casos (inspirado nos blocos "gallery" / "testimonials" do 21st.dev): grelha de cartões com imagem de aspeto fixo.
const EsteticaFacialCasesSection = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const { t } = useTranslation("facial_aesthetics_page");

  const cases = [
    { id: 1, title: "Caso 1", description: t("cases.items.case1.description"), image: casoRinoImg, details: t("cases.items.case1.details") },
    { id: 2, title: "Caso 2", description: t("cases.items.case2.description"), image: caso2, details: t("cases.items.case2.details") },
    { id: 3, title: "Caso 3", description: t("cases.items.case3.description"), image: casoLipsImg, details: t("cases.items.case3.details") },
  ];

  return (
    <Section tone="light">
      <SectionHeading
        eyebrow={t("cases.badge")}
        title={t("cases.title_start")}
        highlight={t("cases.title_highlight")}
        description={t("cases.description")}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {cases.map((caseItem, index) => {
          const open = selectedCase === caseItem.id;
          return (
            <Reveal key={caseItem.id} delay={index * 80}>
              <article className={cardBaseClasses("light") + " !p-0 overflow-hidden"}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={caseItem.image}
                    alt={`${caseItem.title} - Estética Facial Premium`}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-gold-leaf px-3 py-1.5 font-vivant text-xs font-medium text-jet-fixed">
                    {caseItem.title}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-vivant text-lg text-jet transition-colors duration-300 group-hover:text-gold-leaf dark:text-white sm:text-xl">
                    {caseItem.description}
                  </h3>

                  <div className={`grid transition-all duration-300 ${open ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p id={`caso-${caseItem.id}`} className="border-t border-gold-leaf/20 pt-3 font-vivant-light text-sm leading-relaxed text-jet/70 dark:text-gray-400">
                        {caseItem.details}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedCase(open ? null : caseItem.id)}
                    aria-expanded={open}
                    aria-controls={`caso-${caseItem.id}`}
                    className="mt-auto flex min-h-[44px] items-center justify-between pt-4 font-vivant-light text-xs text-gold-leaf focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf"
                  >
                    <span>Premium</span>
                    <svg className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mx-auto mt-12 max-w-2xl text-center lg:mt-16">
        <div className="rounded-2xl border border-gold-leaf/30 bg-white p-6 shadow-elegant dark:bg-gray-900 sm:p-8">
          <h3 className="mb-3 font-vivant text-xl text-jet dark:text-white sm:text-2xl">{t("cases.cta.title")}</h3>
          <p className="mb-6 font-vivant-light text-sm text-jet/70 dark:text-gray-400 sm:text-base">{t("cases.cta.description")}</p>
          <Button asChild variant="gold" size="cta">
            <a href="https://wa.me/351910098226" target="_blank" rel="noopener noreferrer">
              {t("cases.cta.button")}
            </a>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
};

export default EsteticaFacialCasesSection;
