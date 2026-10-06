import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { PageHero, HeroStat } from "@/components/site/PageHero";

const TreatmentsHeroSection = () => {
  const { t } = useTranslation();
  const stats = [
    { number: t('treatments_page.hero.stats.experience.value'), label: t('treatments_page.hero.stats.experience.label') },
    { number: t('treatments_page.hero.stats.smiles.value'), label: t('treatments_page.hero.stats.smiles.label') },
    { number: t('treatments_page.hero.stats.satisfaction.value'), label: t('treatments_page.hero.stats.satisfaction.label') },
    { number: t('treatments_page.hero.stats.treatments.value'), label: t('treatments_page.hero.stats.treatments.label') },
  ];

  return (
    <PageHero
      image={"https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954598/instituto-areluna/97a1febf-3c27-4a63-a583-b2522013f3f4.jpg"}
      imageAlt=""
      eyebrow={t('treatments_page.hero.badge')}
      title={t('treatments_page.hero.title_start')}
      highlight={t('treatments_page.hero.title_highlight')}
      description={t('treatments_page.hero.description')}
      actions={
        <>
          <Button asChild variant="gold-leaf" size="cta">
            <a href="https://wa.me/351910098226" target="_blank" rel="noopener noreferrer">
              {t('treatments_page.hero.cta_schedule')}
            </a>
          </Button>
          <Button
            variant="outline-gold"
            size="cta"
            onClick={() => document.getElementById('tratamentos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('treatments_page.hero.cta_view_all')}
          </Button>
        </>
      }
    >
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s, i) => (
          <HeroStat key={i} value={s.number} label={s.label} />
        ))}
      </div>
    </PageHero>
  );
};

export default TreatmentsHeroSection;
