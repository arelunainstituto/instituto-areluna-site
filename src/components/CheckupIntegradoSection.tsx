import { Calendar, Clock, Globe, Heart, Stethoscope, Eye, Scissors, FlaskConical } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, FeatureCard, Reveal } from "@/components/site";
import { useContact } from "@/contexts/ContactContext";

// Padrão inspirado em "features" + "stats/benefits" do 21st.dev.
const CheckupIntegradoSection = () => {
  const { t } = useTranslation();
  const { contact, onContactClick } = useContact();

  const services = [
    { key: "dental", icon: <Stethoscope /> },
    { key: "hair", icon: <Scissors /> },
    { key: "facial", icon: <Eye /> },
    { key: "labs", icon: <FlaskConical /> },
  ];

  const benefits = [
    { key: "personal_assistant", icon: <Globe /> },
    { key: "integrated_care", icon: <Heart /> },
  ];

  return (
    <Section tone="light">
      <SectionHeading
        title={t("checkup.title.main")}
        highlight={t("checkup.title.highlight")}
        description={t("checkup.description")}
      />

      <h3 className="mb-8 text-center font-vivant text-2xl text-jet dark:text-white">
        {t("checkup.services_title.main")} <span className="text-gold-leaf">{t("checkup.services_title.highlight")}</span>
      </h3>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.key} delay={i * 80} className="h-full">
            <FeatureCard
              icon={s.icon}
              title={t(`checkup.services.${s.key}.title`)}
              description={t(`checkup.services.${s.key}.description`)}
              footer={
                <span className="inline-flex items-center gap-1.5 font-vivant-light text-xs text-jet/60 dark:text-gray-400">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {t(`checkup.services.${s.key}.duration`)}
                </span>
              }
            />
          </Reveal>
        ))}
      </div>

      <h3 className="mb-8 mt-16 text-center font-vivant text-2xl text-jet dark:text-white">
        {t("checkup.benefits_title.main")} <span className="text-gold-leaf">{t("checkup.benefits_title.highlight")}</span>
      </h3>
      <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
        {benefits.map((b, i) => (
          <Reveal key={b.key} delay={i * 80} className="h-full">
            <FeatureCard
              icon={b.icon}
              title={t(`checkup.benefits.${b.key}.title`)}
              description={t(`checkup.benefits.${b.key}.description`)}
            />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <div className="rounded-3xl bg-gradient-dark px-6 py-14 text-center text-white sm:px-12 dark:bg-black dark:bg-none">
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Button asChild variant="gold-leaf" size="cta">
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={onContactClick}>
                {t("checkup.cta.button")}
                <Calendar className="h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
            <span className="inline-flex items-center gap-2 font-vivant-light text-sm text-white/80">
              <Globe className="h-4 w-4" aria-hidden="true" />
              {t("checkup.cta.support")}
            </span>
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

export default CheckupIntegradoSection;
