import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { PageHero } from "@/components/site/PageHero";
import ClinicalDisclaimer from "@/components/ClinicalDisclaimer";
import { useContact } from "@/contexts/ContactContext";

const TreatmentsHeroSection = () => {
  const { t } = useTranslation();
  const { contact, onContactClick } = useContact();

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
            <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={onContactClick}>
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
      <ClinicalDisclaimer className="-mt-8 text-white/75" />
    </PageHero>
  );
};

export default TreatmentsHeroSection;
