import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";
import draArethuzaImg from "@/assets/Dra_Arethuza_Luna.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SobreAFundadora = () => {
  const { t } = useTranslation();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dra. Arethuza Luna",
    "jobTitle": "Médica-Dentista — Ortodontia e Harmonização Orofacial",
    "description": t('founder.seo.description'),
    "image": "https://www.institutoareluna.pt/og-institutoareluna.jpg",
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
      { "@type": "EducationalOccupationalCredential", "name": "Especialização em Ortodontia e Ortopedia" },
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
    { label: t('founder.credentials.experience'), value: t('founder.credentials.experience_val') },
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

      <main className="pt-[8.9rem]">
        {/* Hero section */}
        <section className="py-20 px-4 bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Foto */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[hsl(var(--gold-leaf))]/20 to-transparent rounded-3xl blur-2xl"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-[hsl(var(--gold-leaf))]/20">
                  <img
                    src={draArethuzaImg}
                    alt="Dra. Arethuza Luna — fundadora do Instituto AreLuna, médica-dentista especialista em ortodontia e harmonização orofacial no Porto"
                    loading="eager"
                    decoding="async"
                    className="w-full object-cover max-h-[600px] lg:max-h-[700px]"
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="text-white">
                <p className="text-[hsl(var(--gold-leaf))] text-sm font-medium tracking-widest uppercase mb-4">
                  {t('founder.role')}
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-vivant font-thin mb-6 leading-tight">
                  {t('founder.title')}<br />
                  <span className="text-[hsl(var(--gold-leaf))]">{t('founder.subtitle')}</span>
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8 font-light">
                  {t('founder.bio')}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {credentials.map((c, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <p className="text-[hsl(var(--gold-leaf))] text-xs font-medium tracking-wide uppercase mb-1">{c.label}</p>
                      <p className="text-white font-light text-sm">{c.value}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/351916880662"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[hsl(var(--gold-leaf))] text-white font-medium hover:bg-amber-500 transition-colors duration-300"
                >
                  {t('founder.cta_whatsapp')}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Formação & Especialidades */}
        <section className="py-20 px-4 bg-white dark:bg-[hsl(var(--jet))]">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Especialidades */}
              <div>
                <h2 className="text-3xl md:text-4xl font-vivant text-[hsl(var(--jet))] dark:text-white mb-8">
                  {t('founder.specialties_title')}
                </h2>
                <ul className="space-y-4">
                  {specialties.map((spec, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gold-leaf))] mt-2.5 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-light leading-relaxed">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visão */}
              <div>
                <h2 className="text-3xl md:text-4xl font-vivant text-[hsl(var(--jet))] dark:text-white mb-8">
                  {t('founder.vision_title')}
                </h2>
                <div className="space-y-6 text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                  <p>
                    {t('founder.vision_p1')}
                  </p>
                  <p>
                    {t('founder.vision_p2')}
                  </p>
                  <p>
                    {t('founder.vision_p3')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden">
          <div className="container mx-auto max-w-4xl text-center text-white">
            <h2 className="text-3xl md:text-4xl font-vivant font-thin mb-6">
              {t('founder.cta_title')}
            </h2>
            <p className="text-white/70 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('founder.cta_desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[hsl(var(--gold-leaf))] text-white font-medium hover:bg-amber-500 transition-colors duration-300"
              >
                {t('founder.cta_button_contact')}
              </Link>
              <Link
                to="/tratamentos"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white font-light hover:bg-white/10 transition-colors duration-300"
              >
                {t('founder.cta_button_treatments')}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default SobreAFundadora;
