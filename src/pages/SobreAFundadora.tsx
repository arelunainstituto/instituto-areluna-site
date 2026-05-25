import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";
import draArethuzaImg from "@/assets/Dra_Arethuza_Luna.jpg";
import { Link } from "react-router-dom";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dra. Arethuza Luna",
  "jobTitle": "Médica-Dentista — Ortodontia e Harmonização Orofacial",
  "description": "Fundadora do Instituto AreLuna, pioneira em medicina dentária e harmonização orofacial no Porto. Com formação internacional em Nova Iorque e Miami, fundou a clínica que hoje é referência europeia em saúde e estética integrada.",
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

const SobreAFundadora = () => {
  const specialties = [
    "Ortodontia e Ortopedia Facial",
    "Harmonização Orofacial Avançada",
    "Medicina Dentária Integrada",
    "Master Injector (Swift Beauty, NY)",
    "Harmonização Orofacial Avançada (Miami)"
  ];

  const credentials = [
    { label: "Registo Profissional", value: "OMD 11845" },
    { label: "Formação Base", value: "Universidade Federal do Paraná" },
    { label: "Experiência Clínica", value: "+24 anos" },
    { label: "Especialização Internacional", value: "Nova Iorque e Miami" }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Dra. Arethuza Luna — Fundadora | Instituto AreLuna Porto"
        description="Dra. Arethuza Luna, OMD 11845, fundadora do Instituto AreLuna no Porto. Especialista em Ortodontia, Ortopedia e Harmonização Orofacial. Formação internacional em Nova Iorque e Miami. +24 anos de experiência."
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
                  Fundadora & Directora Clínica
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-vivant font-thin mb-6 leading-tight">
                  Dra. Arethuza<br />
                  <span className="text-[hsl(var(--gold-leaf))]">Luna</span>
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8 font-light">
                  Médica-Dentista com registo OMD 11845, especializada em Ortodontia, Ortopedia Facial e Harmonização Orofacial Avançada. Fundou o Instituto AreLuna há mais de duas décadas com uma visão clara: elevar o padrão da medicina dentária e da estética avançada em Portugal para um nível europeu de excelência.
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
                  href="https://wa.me/351910098226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[hsl(var(--gold-leaf))] text-white font-medium hover:bg-amber-500 transition-colors duration-300"
                >
                  Agendar Consulta
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
                  Especialidades
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
                  A Visão
                </h2>
                <div className="space-y-6 text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                  <p>
                    Com uma abordagem que alia medicina dentária de precisão, estética avançada e bem-estar integral, a Dra. Arethuza Luna construiu uma clínica onde cada paciente é tratado como único. O padrão IAL — desenvolvido ao longo de mais de 24 anos — é o reflexo desta filosofia.
                  </p>
                  <p>
                    A sua formação internacional — incluindo um programa de Master Injector na Swift Beauty Institute em Nova Iorque e Harmonização Orofacial Avançada em Miami — trouxe para Portugal técnicas e protocolos que anteriormente só estavam disponíveis nos maiores centros do mundo.
                  </p>
                  <p>
                    Hoje, o Instituto AreLuna é reconhecido como referência europeia, recebendo pacientes de Portugal, Brasil e de mais de 20 países, que viajam especificamente para beneficiar da combinação única de qualidade, expertise e hospitalidade portuguesa.
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
              Conheça o Instituto AreLuna
            </h2>
            <p className="text-white/70 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              Visite-nos no Porto e descubra por que razão somos a escolha de milhares de pacientes nacionais e internacionais. A sua transformação começa aqui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[hsl(var(--gold-leaf))] text-white font-medium hover:bg-amber-500 transition-colors duration-300"
              >
                Marcar Consulta
              </Link>
              <Link
                to="/tratamentos"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white font-light hover:bg-white/10 transition-colors duration-300"
              >
                Ver Tratamentos
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
