import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, Reveal, cardBaseClasses } from "@/components/site";
import { cn } from "@/lib/utils";
import { useContact } from "@/contexts/ContactContext";
import caso13_480 from "../assets/Caso 13-480.webp";
import caso13_960 from "../assets/Caso 13-960.webp";
import caso14_480 from "../assets/14-480.webp";
import caso14_960 from "../assets/14-960.webp";
import caso16_480 from "../assets/16-480.webp";
import caso16_960 from "../assets/16-960.webp";
import caso30_480 from "../assets/30-480.webp";
import caso30_960 from "../assets/30-960.webp";
import caso23_480 from "../assets/Caso 23-480.webp";
import caso23_960 from "../assets/Caso 23-960.webp";
import caso80_480 from "../assets/80-480.webp";
import caso80_960 from "../assets/80-960.webp";

type CaseImage = { src: string; srcSet: string };
const img = (small: string, large: string): CaseImage => ({ src: large, srcSet: `${small} 480w, ${large} 960w` });
const IMPLANTS = [img(caso14_480, caso14_960), img(caso16_480, caso16_960), img(caso30_480, caso30_960)];
const FACETS = [img(caso13_480, caso13_960), img(caso23_480, caso23_960), img(caso80_480, caso80_960)];

// Padrão inspirado em "before/after gallery" do 21st.dev: imagem com aspeto fixo + legenda.
const BeforeAfterSection = () => {
  const { t } = useTranslation();
  const { contact, onContactClick } = useContact();

  const renderGroup = (kind: "implants" | "facets", images: CaseImage[], heading: string) => (
    <div className="mb-14 last:mb-0">
      <h3 className="mb-8 text-center font-vivant text-2xl text-gold-leaf sm:text-3xl">{heading}</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, i) => {
          const title = t(`before_after.cases.${kind}.${i + 1}.title`);
          return (
            <Reveal key={i} delay={i * 80} className="h-full">
              <article className={cn(cardBaseClasses("light"), "p-4 sm:p-4")}>
                <div className="relative aspect-square overflow-hidden rounded-xl bg-jet-fixed/5 dark:bg-black/30">
                  <img
                    src={image.src}
                    srcSet={image.srcSet}
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    alt={`${title} - Antes e Depois`}
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-jet-fixed px-3 py-1 font-vivant text-xs tracking-wide text-white">
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
        <div className="rounded-3xl bg-gradient-dark px-6 py-14 text-center text-white sm:px-12 dark:bg-black dark:bg-none">
          <h3 className="mb-5 font-vivant text-3xl sm:text-4xl">{t("before_after.cta.title")}</h3>
          <p className="mx-auto mb-8 max-w-2xl font-vivant-light text-base leading-relaxed text-white/80 sm:text-lg">
            {t("before_after.cta.text")}
          </p>
          <Button asChild variant="gold-leaf" size="cta">
            <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={onContactClick}>
              {t("before_after.cta.button")}
            </a>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
};

export default BeforeAfterSection;
