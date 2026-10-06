import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site";
import { useTranslation } from "react-i18next";
import ClinicalDisclaimer from "@/components/ClinicalDisclaimer";

// Hero (inspirado no bloco "hero" do 21st.dev): fundo jet -> preto, h1 visível à primeira pintura.
const TrasplanteCapilarHeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-gradient-to-b from-jet-fixed to-black px-4 pb-16 pt-44 text-white sm:px-6 sm:pt-52 lg:min-h-[80vh] lg:pt-56">
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <Eyebrow tone="dark" className="mb-6">
          {t("hair_transplant_page.hero.badge")}
        </Eyebrow>

        <h1 className="mb-6 font-vivant text-4xl leading-tight sm:text-5xl lg:text-6xl">
          {t("hair_transplant_page.hero.title_start")}
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          <span className="text-gold-leaf">{t("hair_transplant_page.hero.title_highlight")}</span>
        </h1>

        <p className="mx-auto mb-10 max-w-3xl font-vivant-light text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
          {t("hair_transplant_page.hero.description")}
        </p>

        <div className="mb-6 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild variant="gold-leaf" size="cta">
            <a href="https://wa.me/351910098226" target="_blank" rel="noopener noreferrer">
              {t("hair_transplant_page.hero.cta_schedule")}
            </a>
          </Button>
          <Button
            variant="outline-gold"
            size="cta"
            onClick={() => document.getElementById("transplante")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("hair_transplant_page.hero.cta_results")}
          </Button>
        </div>

        <ClinicalDisclaimer className="text-white/75" />
      </div>
    </section>
  );
};

export default TrasplanteCapilarHeroSection;
