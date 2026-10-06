import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { PageHero, HeroStat } from "@/components/site/PageHero";
import tourismBg from "@/assets/tourism.png";

const TourismDentarioHeroSection = () => {
  const { t } = useTranslation();
  const stats = [
    { number: t('tourism_page.hero.stats.days.value'), label: t('tourism_page.hero.stats.days.label') },
    { number: t('tourism_page.hero.stats.experience.value'), label: t('tourism_page.hero.stats.experience.label') },
    { number: t('tourism_page.hero.stats.location.value'), label: t('tourism_page.hero.stats.location.label') },
  ];

  return (
    <PageHero
      image={tourismBg}
      imageAlt=""
      eyebrow={t('tourism_page.hero.badge')}
      title={t('tourism_page.hero.title_start')}
      highlight={t('tourism_page.hero.title_highlight')}
      description={t('tourism_page.hero.description')}
      actions={
        <>
          <Button asChild variant="gold-leaf" size="cta">
            <a href="https://wa.me/351910098226" target="_blank" rel="noopener noreferrer">
              {t('tourism_page.hero.cta_schedule')}
            </a>
          </Button>
          <Button
            variant="outline-gold"
            size="cta"
            onClick={() => document.getElementById('programa')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('tourism_page.hero.cta_more')}
          </Button>
        </>
      }
    >
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
        {stats.map((s, i) => (
          <HeroStat key={i} value={s.number} label={s.label} />
        ))}
      </div>
    </PageHero>
  );
};

export default TourismDentarioHeroSection;
