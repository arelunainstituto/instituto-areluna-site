import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { FaqSection } from "@/components/site/FaqSection";
import { useContact } from "@/contexts/ContactContext";

const TourismDentarioFAQSection = () => {
  const { t } = useTranslation();
  const { contact, onContactClick } = useContact();

  const faqs = [
    { question: t('tourism_page.faq.list.included.question'), answer: t('tourism_page.faq.list.included.answer') },
    { question: t('tourism_page.faq.list.language.question'), answer: t('tourism_page.faq.list.language.answer') },
    { question: t('tourism_page.faq.list.treatments.question'), answer: t('tourism_page.faq.list.treatments.answer') },
    { question: t('tourism_page.faq.list.accommodation.question'), answer: t('tourism_page.faq.list.accommodation.answer') },
    { question: t('tourism_page.faq.list.tourism.question'), answer: t('tourism_page.faq.list.tourism.answer') },
    { question: t('tourism_page.faq.list.prices.question'), answer: t('tourism_page.faq.list.prices.answer') },
    { question: t('tourism_page.faq.list.followup.question'), answer: t('tourism_page.faq.list.followup.answer') },
    { question: t('tourism_page.faq.list.companion.question'), answer: t('tourism_page.faq.list.companion.answer') },
  ];

  return (
    <FaqSection
      title={t('tourism_page.faq.title')}
      subtitle={t('tourism_page.faq.subtitle')}
      description={t('tourism_page.faq.description')}
      items={faqs}
      cta={
        <>
          <h3 className="mb-3 font-vivant text-2xl sm:text-3xl">{t('tourism_page.faq.cta_title')}</h3>
          <p className="mx-auto mb-6 max-w-xl font-vivant-light text-white/80">{t('tourism_page.faq.cta_desc')}</p>
          <Button asChild variant="gold" size="cta">
            <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={onContactClick}>
              {t('tourism_page.faq.cta_button')}
            </a>
          </Button>
        </>
      }
    />
  );
};

export default TourismDentarioFAQSection;
