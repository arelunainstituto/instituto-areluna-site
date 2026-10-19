import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";
import draArethuzaImg from "@/assets/Dra_Arethuza_Luna.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Section, Reveal, Eyebrow } from "@/components/site";
import { useTranslation } from "react-i18next";
import { useContact } from "@/contexts/ContactContext";

const SobreAFundadora = () => {
  const { t } = useTranslation();
  const { contact, onContactClick } = useContact();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dra. Arethuza Luna",
    "jobTitle": "Médica-Dentista — Ortodontia e Harmonização Orofacial",
    "description": t('founder.seo.description'),
    "image": "https://www.institutoareluna.pt/og-institutoareluna-logo.jpg",
    "url": "https://www.institutoareluna.pt/sobre-a-fundadora",
    "worksFor": {
      "@type": "Dentist",
      "name": "Instituto AreLuna",
      "url": "https://www.institutoareluna.pt/"
    },
    "alumniOf": [
      { "@type": "CollegeOrUniversity", "name": "Universidade Federal do Paraná" },
      { "@type": "CollegeOrUniversity", "name": "Swift Beauty Institute, Nova Iorque" },
      { "@type": "CollegeOrUniversity", "name": "Harmonização Orofacial Avançada, Miami" }
    ],
    "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "name": "OMD 11845 — Ordem dos Médicos Dentistas" },
      { "@type": "EducationalOccupationalCredential", "name": "Formação em Ortodontia e Ortopedia Facial (Brasil)" },
      { "@type": "EducationalOccupationalCredential", "name": "Master Injector — Swift Beauty, Nova Iorque" },
      { "@type": "EducationalOccupationalCredential", "name": "Harmonização Orofacial Avançada — Miami" }
    ],
    "knowsAbout": [
      "Ortodontia",
      "Ortopedia Facial",
      "Harmonização Orofacial",
      "Estética Facial Avançada",
      "Medicina Dentária Integrada"
    ],
    "sameAs": [
      "https://www.instagram.com/dra.arethuzaluna",
      "https://www.instagram.com/institutoareluna"
    ]
  };

  const specialties = t('founder.specialties', { returnObjects: true }) as string[];

  const credentials = [
    { label: t('founder.credentials.registry'), value: t('founder.credentials.registry_val') },
    { label: t('founder.credentials.education'), value: t('founder.credentials.education_val') },
    { label: t('founder.credentials.international'), value: t('founder.credentials.international_val') }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title={t('founder.seo.title')}
        description={t('founder.seo.description')}
        canonical="https://www.institutoareluna.pt/sobre-a-fundadora"
        jsonLd={personSchema}
      />
      <Header />

      <main>
        {/* Hero (inspirado nos blocos "hero" / "team" do 21st.dev) */}
        <section className="bg-gradient-dark px-4 pb-16 pt-28 text-white dark:bg-black dark:bg-none sm:px-6 lg:pb-24 xl:pt-48">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 overflow-hidden rounded-2xl border border-gold-leaf/30 shadow-elegant lg:order-1">
              <img
                src={draArethuzaImg}
                alt="Dra. Arethuza Luna — fundadora do Instituto AreLuna, médica dentista (OMD n.º 11845) com formação em ortodontia e harmonização orofacial, no Porto"
                loading="eager"
                {...{ fetchpriority: "high" }}
                decoding="async"
                className="max-h-[600px] w-full object-cover lg:max-h-[700px]"
              />
            </div>

            <div className="order-1 lg:order-2">
              <Eyebrow tone="dark" className="mb-5">
                {t('founder.role')}
              </Eyebrow>
              <h1 className="mb-6 font-vivant text-4xl leading-tight sm:text-5xl lg:text-6xl">
                {t('founder.title')}
                <br />
                <span className="text-gold-leaf">{t('founder.subtitle')}</span>
              </h1>
              <p className="mb-8 font-vivant-light text-base leading-relaxed text-white/80 sm:text-lg">
                {t('founder.bio')}
              </p>

              <div className="mb-8 grid grid-cols-2 gap-3 sm:gap-4">
                {credentials.map((c, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="mb-1 font-vivant text-xs uppercase tracking-widest text-gold-leaf">{c.label}</p>
                    <p className="font-vivant-light text-sm text-white">{c.value}</p>
                  </div>
                ))}
              </div>

              <Button asChild variant="gold-leaf" size="cta">
                <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={onContactClick}>
                  {t('founder.cta_whatsapp')}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Formação & Especialidades */}
        <Section tone="light">
          <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="mb-8 font-vivant text-3xl leading-tight text-jet dark:text-white sm:text-4xl">
                {t('founder.specialties_title')}
              </h2>
              <ul className="space-y-4">
                {specialties.map((spec, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-leaf" aria-hidden="true" />
                    <span className="font-vivant-light leading-relaxed text-jet/80 dark:text-gray-300">{spec}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="mb-8 font-vivant text-3xl leading-tight text-jet dark:text-white sm:text-4xl">
                {t('founder.vision_title')}
              </h2>
              <div className="space-y-6 font-vivant-light leading-relaxed text-jet/80 dark:text-gray-300">
                <p>{t('founder.vision_p1')}</p>
                <p>{t('founder.vision_p2')}</p>
                <p>{t('founder.vision_p3')}</p>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* CTA (inspirado no bloco "cta" do 21st.dev) */}
        <Section tone="dark" width="narrow" className="text-center">
          <h2 className="mb-6 font-vivant text-3xl leading-tight sm:text-4xl lg:text-5xl">
            {t('founder.cta_title')}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl font-vivant-light leading-relaxed text-white/75">
            {t('founder.cta_desc')}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild variant="gold-leaf" size="cta">
              <Link to="/contato">{t('founder.cta_button_contact')}</Link>
            </Button>
            <Button asChild variant="outline-gold" size="cta">
              <Link to="/tratamentos">{t('founder.cta_button_treatments')}</Link>
            </Button>
          </div>
        </Section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default SobreAFundadora;
