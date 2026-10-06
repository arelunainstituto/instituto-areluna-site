import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, Reveal, cardBaseClasses } from "@/components/site";
import { cn } from "@/lib/utils";
import { CATEGORY_IDS, TREATMENTS, WHATSAPP_URL } from "@/components/treatments/data";

// Padrão inspirado em "features grid" do 21st.dev (cartões iguais, filtro em pílulas).
const TreatmentsSection = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<string>("todos");

  const filtered =
    activeCategory === "todos" ? TREATMENTS : TREATMENTS.filter((item) => item.category === activeCategory);

  return (
    <Section id="tratamentos" tone="light">
      <SectionHeading
        title={t("treatments.title")}
        highlight={t("treatments.power_title")}
        description={<span className="whitespace-pre-line">{t("treatments.description")}</span>}
      />

      <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label={t("treatments.title")}>
        {CATEGORY_IDS.map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => setActiveCategory(id)}
            aria-pressed={activeCategory === id}
            className={cn(
              "min-h-11 rounded-full border px-5 text-sm font-vivant-light tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf focus-visible:ring-offset-2",
              activeCategory === id
                ? "border-jet bg-jet text-pure-white dark:border-gold-leaf dark:bg-gold-leaf dark:text-jet"
                : "border-jet/20 bg-white text-jet hover:border-gold-leaf/60 dark:border-white/15 dark:bg-gray-900 dark:text-gray-200",
            )}
          >
            {t(`treatments.categories.${id}`)}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.slice(0, 9).map((item, index) => {
          const title = t(`treatments.items.${item.id}.title`);
          const description = t(`treatments.items.${item.id}.description`);
          return (
            <Reveal key={item.id} delay={(index % 3) * 80} className="h-full">
              <a
                href={`${WHATSAPP_URL}?text=Olá! Gostaria de saber mais sobre: ${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(cardBaseClasses("light"), "justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf")}
              >
                <div>
                  <h3 className="mb-2 font-vivant text-lg text-jet transition-colors group-hover:text-gold-leaf dark:text-gray-100">
                    {title}
                  </h3>
                  <p className="font-vivant-light text-sm leading-relaxed text-jet/70 dark:text-gray-300">
                    {description.length > 80 ? `${description.substring(0, 80)}...` : description}
                  </p>
                </div>
                <ArrowUpRight
                  className="h-5 w-5 self-end text-gold-leaf opacity-70 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          );
        })}
      </div>

      {filtered.length > 9 && location.pathname !== "/tratamentos" && (
        <p className="mt-8 text-center">
          <a
            href="/tratamentos"
            className="font-vivant text-sm text-jet underline decoration-gold-leaf underline-offset-4 hover:text-gold-leaf dark:text-gray-200"
          >
            {t("treatments.view_all", { count: filtered.length })}
          </a>
        </p>
      )}

      <div className="mt-14 flex justify-center">
        <Button asChild variant="gold" size="cta">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            {t("treatments.discover_label")}
          </a>
        </Button>
      </div>

      <Reveal className="mt-16">
        <div className="rounded-3xl bg-gradient-dark px-6 py-14 text-center text-pure-white sm:px-12 dark:bg-black dark:bg-none">
          <h3 className="mb-5 font-vivant text-3xl sm:text-4xl">{t("treatments.cta.title")}</h3>
          <p className="mx-auto mb-8 max-w-2xl font-vivant-light text-base leading-relaxed text-white/80 sm:text-lg">
            {t("treatments.cta.description")}
          </p>
          <Button asChild variant="outline-gold" size="cta">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              {t("treatments.cta.button")}
            </a>
          </Button>
          <p className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-vivant-light text-sm text-gold-leaf">
            <span>{t("treatments.cta.premium")}</span>
            <span aria-hidden="true">·</span>
            <span>{t("treatments.cta.tech")}</span>
            <span aria-hidden="true">·</span>
            <span>{t("treatments.cta.results")}</span>
          </p>
        </div>
      </Reveal>
    </Section>
  );
};

export default TreatmentsSection;
