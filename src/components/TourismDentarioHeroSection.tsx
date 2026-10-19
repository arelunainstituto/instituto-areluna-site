import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { PageHero } from "@/components/site/PageHero";
import { useContact } from "@/contexts/ContactContext";
import tourismBg from "@/assets/tourism.webp";

const TourismDentarioHeroSection = () => {
  const { t } = useTranslation();
  const { contact, onContactClick } = useContact();
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
            <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={onContactClick}>
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
    />
  );
};

export default TourismDentarioHeroSection;
