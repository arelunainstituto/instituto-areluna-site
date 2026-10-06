import { useTranslation, Trans } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, Reveal, cardBaseClasses } from "@/components/site";
import draArePremium from "@/assets/dra-are-premium.jpg";

// Apresentação (inspirada nos blocos "features" / "about" do 21st.dev).
const EsteticaFacialSection = () => {
  const { t } = useTranslation("facial_aesthetics_page");

  return (
    <Section id="estetica" tone="muted">
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
                ns="facial_aesthetics_page"
                components={{
                  highlight: <span className="font-medium text-gold-leaf" />,
                }}
              >
                Deseja
                <span className="font-medium text-gold-leaf"> realçar a sua beleza natural</span> com tratamentos seguros e eficazes?
              </Trans>
            </p>
          </div>

          <p className="font-vivant-light text-base leading-relaxed text-jet/80 dark:text-gray-300 sm:text-lg">
            <Trans
              i18nKey="hero.description"
              ns="facial_aesthetics_page"
              components={{
                strong1: <strong className="text-gold-leaf" />,
                highlight: <span className="font-medium text-gold-leaf" />,
              }}
            >
                A equipa de especialistas da <strong className="text-gold-leaf">Dra. Areluna</strong> oferece os mais modernos tratamentos de
                <span className="font-medium text-gold-leaf"> estética facial</span>, combinando técnicas avançadas com produtos premium para resultados naturais.
            </Trans>
          </p>

          <p className="border-l-2 border-gold-leaf pl-4 font-vivant text-lg italic text-gold-leaf sm:text-xl">
            {t("hero.cta_text")}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: t("benefits.safe.title"), desc: t("benefits.safe.desc") },
              { title: t("benefits.natural.title"), desc: t("benefits.natural.desc") },
              { title: t("benefits.premium.title"), desc: t("benefits.premium.desc") },
              { title: t("benefits.experience.title"), desc: t("benefits.experience.desc") },
            ].map((benefit, index) => (
              <div key={index} className={cardBaseClasses("light") + " !p-4 sm:!p-4"}>
                <h4 className="font-vivant font-medium text-gold-leaf">{benefit.title}</h4>
                <p className="mt-1 font-vivant-light text-xs text-jet/70 dark:text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <Button asChild variant="gold" size="cta">
            <a href="https://wa.me/351910098226" target="_blank" rel="noopener noreferrer">
              {t("hero.button")}
            </a>
          </Button>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={120}>
          <div className="relative overflow-hidden rounded-2xl border border-gold-leaf/30 shadow-elegant">
            <img
              src={draArePremium}
              alt={t("hero.title_start")}
              loading="lazy"
              decoding="async"
              width={1200}
              height={900}
              className="aspect-[4/3] h-full w-full object-cover object-top"
            />
            <span className="absolute left-4 top-4 rounded-full bg-jet-fixed/85 px-4 py-1.5 font-vivant text-xs font-medium tracking-widest text-gold-leaf">
              DRA. ARELUNA
            </span>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default EsteticaFacialSection;
