import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, Reveal, cardBaseClasses } from "@/components/site";
import { cn } from "@/lib/utils";
import caso13 from "../assets/Caso 13.webp";
import caso14 from "../assets/14.webp";
import caso16 from "../assets/16.webp";
import caso30 from "../assets/30.webp";
import caso23 from "../assets/Caso 23.webp";
import caso80 from "../assets/80.webp";

const IMPLANTS = [caso14, caso16, caso30];
const FACETS = [caso13, caso23, caso80];

// Padrão inspirado em "before/after gallery" do 21st.dev: imagem com aspeto fixo + legenda.
const BeforeAfterSection = () => {
  const { t } = useTranslation();

  const renderGroup = (kind: "implants" | "facets", images: string[], heading: string) => (
    <div className="mb-14 last:mb-0">
      <h3 className="mb-8 text-center font-vivant text-2xl text-gold-leaf sm:text-3xl">{heading}</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, i) => {
          const title = t(`before_after.cases.${kind}.${i + 1}.title`);
          return (
            <Reveal key={i} delay={i * 80} className="h-full">
              <article className={cn(cardBaseClasses("light"), "p-4 sm:p-4")}>
                <div className="relative aspect-square overflow-hidden rounded-xl bg-jet/5 dark:bg-black/30">
                  <img
                    src={image}
                    alt={`${title} - Antes e Depois`}
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-jet px-3 py-1 font-vivant text-xs tracking-wide text-pure-white">
                    {t("before_after.card.case_badge")} {i + 1}
                  </span>
                </div>
                <div className="px-2 pb-2 pt-5 text-center">
                  <h4 className="mb-2 font-vivant text-xl text-jet transition-colors group-hover:text-gold-leaf dark:text-gray-100">
                    {title}
                  </h4>
                  <p className="font-vivant-light text-sm leading-relaxed text-jet/70 dark:text-gray-300">
                    {t(`before_after.cases.${kind}.${i + 1}.desc`)}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );

  return (
    <Section id="casos-clinicos" tone="light">
      <SectionHeading
        title={t("before_after.title")}
        highlight={t("before_after.subtitle")}
        description={t("before_after.description")}
      />

      {renderGroup("implants", IMPLANTS, t("before_after.implants_title"))}
      {renderGroup("facets", FACETS, t("before_after.facets_title"))}

      <Reveal className="mt-16">
        <div className="rounded-3xl bg-gradient-dark px-6 py-14 text-center text-pure-white sm:px-12 dark:bg-black dark:bg-none">
          <h3 className="mb-5 font-vivant text-3xl sm:text-4xl">{t("before_after.cta.title")}</h3>
          <p className="mx-auto mb-8 max-w-2xl font-vivant-light text-base leading-relaxed text-white/80 sm:text-lg">
            {t("before_after.cta.text")}
          </p>
          <Button asChild variant="outline-gold" size="cta">
            <a href="https://wa.me/351910098226" target="_blank" rel="noopener noreferrer">
              {t("before_after.cta.button")}
            </a>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
};

export default BeforeAfterSection;
