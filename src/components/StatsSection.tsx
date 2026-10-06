import { useTranslation } from 'react-i18next';
import { Section, SectionHeading, Reveal } from "@/components/site";

/** Números em grelha alinhada — inspirado no bloco "stats" do 21st.dev. */
const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    { value: t('stats.specialists.value'), label: t('stats.specialists.label') },
    { value: t('stats.specialties.value'), label: t('stats.specialties.label') },
    { prefix: t('stats.patients.prefix'), value: t('stats.patients.value'), label: t('stats.patients.label') },
    { prefix: t('stats.tradition.prefix'), value: t('stats.tradition.value'), label: t('stats.tradition.label') },
  ];

  return (
    <Section tone="dark">
      <SectionHeading tone="dark" title={t('stats.title')} description={t('stats.subtitle')} />

      <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
        {stats.map((stat, index) => (
          <Reveal key={index} delay={index * 80} className="flex flex-col items-center px-2 text-center lg:px-6">
            <dd className="order-1 flex min-h-[3.5rem] flex-col items-center justify-end">
              {stat.prefix && (
                <span className="font-vivant-light text-sm text-gold-leaf">{stat.prefix}</span>
              )}
              <span className="font-vivant text-5xl leading-none text-white">{stat.value}</span>
            </dd>
            <dt className="order-2 mt-3 font-vivant-light text-sm text-white/75 sm:text-base">{stat.label}</dt>
          </Reveal>
        ))}
      </dl>

      <p className="mt-14 text-center font-vivant-light text-base text-white/70 sm:text-lg">
        {t('stats.footer_text')}
      </p>
    </Section>
  );
};

export default StatsSection;
