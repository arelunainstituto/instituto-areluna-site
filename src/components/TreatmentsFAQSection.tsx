import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { FaqSection } from "@/components/site/FaqSection";

const TreatmentsFAQSection = () => {
  const { t } = useTranslation();

  const faqs = [
    { question: t('treatments_page.faq.list.ortho_time.question'), answer: t('treatments_page.faq.list.ortho_time.answer') },
    { question: t('treatments_page.faq.list.implants_pain.question'), answer: t('treatments_page.faq.list.implants_pain.answer') },
    { question: t('treatments_page.faq.list.veneers_cost.question'), answer: t('treatments_page.faq.list.veneers_cost.answer') },
    { question: t('treatments_page.faq.list.whitening_safety.question'), answer: t('treatments_page.faq.list.whitening_safety.answer') },
    { question: t('treatments_page.faq.list.bone_graft.question'), answer: t('treatments_page.faq.list.bone_graft.answer') },
    { question: t('treatments_page.faq.list.durability.question'), answer: t('treatments_page.faq.list.durability.answer') },
    { question: t('treatments_page.faq.list.insurance.question'), answer: t('treatments_page.faq.list.insurance.answer') },
    { question: t('treatments_page.faq.list.simultaneous.question'), answer: t('treatments_page.faq.list.simultaneous.answer') },
  ];

  return (
    <FaqSection
      title={t('treatments_page.faq.title')}
      subtitle={t('treatments_page.faq.subtitle')}
      description={t('treatments_page.faq.description')}
      items={faqs}
      cta={
        <>
          <h3 className="mb-3 font-vivant text-2xl sm:text-3xl">{t('treatments_page.faq.cta_title')}</h3>
          <p className="mx-auto mb-6 max-w-xl font-vivant-light text-white/80">{t('treatments_page.faq.cta_desc')}</p>
          <Button asChild variant="gold" size="cta">
            <a href="https://wa.me/351910098226" target="_blank" rel="noopener noreferrer">
              {t('treatments_page.faq.cta_button')}
            </a>
          </Button>
        </>
      }
    />
  );
};

export default TreatmentsFAQSection;
