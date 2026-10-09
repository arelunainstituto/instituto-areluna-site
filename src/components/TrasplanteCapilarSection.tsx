import { useTranslation, Trans } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, Reveal, cardBaseClasses } from "@/components/site";
import caso2 from "@/assets/Caso 2.webp";
import ClinicalDisclaimer from "@/components/ClinicalDisclaimer";
import { useContact } from "@/contexts/ContactContext";

// Apresentação (inspirada nos blocos "features" / "about" do 21st.dev).
const TrasplanteCapilarSection = () => {
  const { t } = useTranslation("hair_transplant_page");
  const { contact, onContactClick } = useContact();

  return (
    <Section id="transplante" tone="muted">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 space-y-8 lg:order-1">
          <SectionHeading
            align="left"
            className="mb-0"
            eyebrow={t("hero.badge")}
            title={t("hero.title_start")}
            highlight={t("hero.title_highlight")}
          />

          <div className="rounded-2xl border border-gold-leaf/30 bg-white p-6 shadow-elegant dark:bg-gray-900 sm:p-8">
            <p className="font-vivant text-xl leading-relaxed text-jet dark:text-white sm:text-2xl">
              <Trans
                i18nKey="hero.question"
                ns="hair_transplant_page"
                components={{
                  highlight: <span className="font-medium text-gold-leaf" />,
                }}
              >
                Sofre de
                <span className="font-medium text-gold-leaf"> calvície ou perda capilar</span> e quer saber se o transplante está indicado para si?
              </Trans>
            </p>
          </div>

          <p className="font-vivant-light text-base leading-relaxed text-jet/80 dark:text-gray-300 sm:text-lg">
            <Trans
              i18nKey="hero.description"
              ns="hair_transplant_page"
              components={{
                strong1: <strong className="text-gold-leaf" />,
                highlight: <span className="font-medium text-gold-leaf" />,
              }}
            >
                A <strong className="text-gold-leaf">Clínica Areluna</strong> oferece transplante capilar com a técnica
                <span className="font-medium text-gold-leaf"> FUE (Follicular Unit Extraction)</span>, após consulta de avaliação.
            </Trans>
          </p>

          <p className="border-l-2 border-gold-leaf pl-4 font-vivant text-lg italic text-gold-leaf sm:text-xl">
            {t("hero.cta_text")}
          </p>

          <div>
            <Button asChild variant="gold" size="cta">
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={onContactClick}>
                {t("hero.button")}
              </a>
            </Button>
            <ClinicalDisclaimer className="mx-0 mt-4 text-jet/60 dark:text-gray-400" />
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={120}>
          <div className="relative overflow-hidden rounded-2xl border border-gold-leaf/30 shadow-elegant">
            <img
              src={caso2}
              alt={t("hero.title_highlight")}
              loading="lazy"
              decoding="async"
              width={1200}
              height={900}
              className="aspect-[4/3] h-full w-full object-cover object-center"
            />
            <span className="absolute left-4 top-4 rounded-full bg-jet-fixed/85 px-4 py-1.5 font-vivant text-xs font-medium tracking-widest text-gold-leaf">
              CASO REAL
            </span>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default TrasplanteCapilarSection;
