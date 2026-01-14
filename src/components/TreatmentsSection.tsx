import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TreatmentsSection = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("todos");

  const categories = [
    { id: "todos", name: t("treatments.categories.todos") },
    { id: "medicina-dentaria", name: t("treatments.categories.medicina-dentaria") },
    { id: "harmonizacao-orofacial", name: t("treatments.categories.harmonizacao-orofacial") },
    { id: "estetica-facial", name: t("treatments.categories.estetica-facial") },
    { id: "estetica-corporal", name: t("treatments.categories.estetica-corporal") },
    { id: "terapia-capilar", name: t("treatments.categories.terapia-capilar") },
    { id: "transplante-capilar", name: t("treatments.categories.transplante-capilar") },
    { id: "nutricao", name: t("treatments.categories.nutricao") },
    { id: "endocrinologia", name: t("treatments.categories.endocrinologia") },
    { id: "ansiedade", name: t("treatments.categories.ansiedade") },
    { id: "cirurgia-plastica", name: t("treatments.categories.cirurgia-plastica") },
    { id: "dermatologia", name: t("treatments.categories.dermatologia") }
  ];

  const treatments = [
    // Medicina Dentária
    {
      id: 1,
      title: t("treatments.items.1.title"),
      description: t("treatments.items.1.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/estetica-dentaria_ggqhqz.jpg",
      highlight: true,
      duration: "2-4 sessões",
      category: "medicina-dentaria",
      features: t("treatments.items.1.features", { returnObjects: true }) as string[]
    },
    {
      id: 2,
      title: t("treatments.items.2.title"),
      description: t("treatments.items.2.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/alinhadores-invisiveis_ggqhqz.jpg",
      highlight: false,
      duration: "12-24 meses",
      category: "medicina-dentaria",
      features: t("treatments.items.2.features", { returnObjects: true }) as string[]
    },
    {
      id: 3,
      title: t("treatments.items.3.title"),
      description: t("treatments.items.3.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/ortodontia-tradicional_ggqhqz.jpg",
      highlight: false,
      duration: "18-36 meses",
      category: "medicina-dentaria",
      features: t("treatments.items.3.features", { returnObjects: true }) as string[]
    },
    {
      id: 4,
      title: t("treatments.items.4.title"),
      description: t("treatments.items.4.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/implantologia_ggqhqz.jpg",
      highlight: true,
      duration: "3-6 meses",
      category: "medicina-dentaria",
      features: t("treatments.items.4.features", { returnObjects: true }) as string[]
    },
    {
      id: 5,
      title: t("treatments.items.5.title"),
      description: t("treatments.items.5.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/endodontia_ggqhqz.jpg",
      highlight: false,
      duration: "1-3 sessões",
      category: "medicina-dentaria",
      features: t("treatments.items.5.features", { returnObjects: true }) as string[]
    },
    {
      id: 6,
      title: t("treatments.items.6.title"),
      description: t("treatments.items.6.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/periodontologia_ggqhqz.jpg",
      highlight: false,
      duration: "60-120 min",
      category: "medicina-dentaria",
      features: t("treatments.items.6.features", { returnObjects: true }) as string[]
    },
    // Harmonização Orofacial Avançada
    {
      id: 7,
      title: t("treatments.items.7.title"),
      description: t("treatments.items.7.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/bioestimuladores_ggqhqz.jpg",
      highlight: true,
      duration: "2-3 sessões",
      category: "harmonizacao-orofacial",
      features: t("treatments.items.7.features", { returnObjects: true }) as string[]
    },
    {
      id: 8,
      title: t("treatments.items.8.title"),
      description: t("treatments.items.8.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/lipoenzima_ggqhqz.jpg",
      highlight: false,
      duration: "2-4 sessões",
      category: "harmonizacao-orofacial",
      features: t("treatments.items.8.features", { returnObjects: true }) as string[]
    },
    {
      id: 9,
      title: t("treatments.items.9.title"),
      description: t("treatments.items.9.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/fios-sustentacao_ggqhqz.jpg",
      highlight: false,
      duration: "60-90 min",
      category: "harmonizacao-orofacial",
      features: t("treatments.items.9.features", { returnObjects: true }) as string[]
    },
    {
      id: 10,
      title: t("treatments.items.10.title"),
      description: t("treatments.items.10.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/preenchimento-olheiras_ggqhqz.jpg",
      highlight: false,
      duration: "30-45 min",
      category: "harmonizacao-orofacial",
      features: t("treatments.items.10.features", { returnObjects: true }) as string[]
    },
    {
      id: 11,
      title: t("treatments.items.11.title"),
      description: t("treatments.items.11.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/rinoplastia_ggqhqz.jpg",
      highlight: true,
      duration: "30-60 min",
      category: "harmonizacao-orofacial",
      features: t("treatments.items.11.features", { returnObjects: true }) as string[]
    },
    // Estética Facial Médica
    {
      id: 12,
      title: t("treatments.items.12.title"),
      description: t("treatments.items.12.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/peelings_ggqhqz.jpg",
      highlight: false,
      duration: "45-60 min",
      category: "estetica-facial",
      features: t("treatments.items.12.features", { returnObjects: true }) as string[]
    },
    {
      id: 13,
      title: t("treatments.items.13.title"),
      description: t("treatments.items.13.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/skinbooster_ggqhqz.jpg",
      highlight: false,
      duration: "30-45 min",
      category: "estetica-facial",
      features: t("treatments.items.13.features", { returnObjects: true }) as string[]
    },
    {
      id: 14,
      title: t("treatments.items.14.title"),
      description: t("treatments.items.14.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/prp-facial_ggqhqz.jpg",
      highlight: true,
      duration: "60-90 min",
      category: "estetica-facial",
      features: t("treatments.items.14.features", { returnObjects: true }) as string[]
    },
    {
      id: 15,
      title: t("treatments.items.15.title"),
      description: t("treatments.items.15.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/microagulhamento_ggqhqz.jpg",
      highlight: false,
      duration: "45-60 min",
      category: "estetica-facial",
      features: t("treatments.items.15.features", { returnObjects: true }) as string[]
    },
    // Estética Corporal
    {
      id: 16,
      title: t("treatments.items.16.title"),
      description: t("treatments.items.16.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/radiofrequencia_ggqhqz.jpg",
      highlight: false,
      duration: "60-90 min",
      category: "estetica-corporal",
      features: t("treatments.items.16.features", { returnObjects: true }) as string[]
    },
    {
      id: 17,
      title: t("treatments.items.17.title"),
      description: t("treatments.items.17.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/mesoterapia-corporal_ggqhqz.jpg",
      highlight: false,
      duration: "45-60 min",
      category: "estetica-corporal",
      features: t("treatments.items.17.features", { returnObjects: true }) as string[]
    },
    {
      id: 18,
      title: t("treatments.items.18.title"),
      description: t("treatments.items.18.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/drenagem_ggqhqz.jpg",
      highlight: false,
      duration: "60-90 min",
      category: "estetica-corporal",
      features: t("treatments.items.18.features", { returnObjects: true }) as string[]
    },
    // Terapia Capilar
    {
      id: 19,
      title: t("treatments.items.19.title"),
      description: t("treatments.items.19.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/prp-capilar_ggqhqz.jpg",
      highlight: true,
      duration: "60-90 min",
      category: "terapia-capilar",
      features: t("treatments.items.19.features", { returnObjects: true }) as string[]
    },
    {
      id: 20,
      title: t("treatments.items.20.title"),
      description: t("treatments.items.20.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/microinfusao_ggqhqz.jpg",
      highlight: false,
      duration: "30-45 min",
      category: "terapia-capilar",
      features: t("treatments.items.20.features", { returnObjects: true }) as string[]
    },
    {
      id: 21,
      title: t("treatments.items.21.title"),
      description: t("treatments.items.21.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/mesoterapia-capilar_ggqhqz.jpg",
      highlight: false,
      duration: "30-45 min",
      category: "terapia-capilar",
      features: t("treatments.items.21.features", { returnObjects: true }) as string[]
    },
    // Transplante Capilar
    {
      id: 22,
      title: t("treatments.items.22.title"),
      description: t("treatments.items.22.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/transplante-fue_ggqhqz.jpg",
      highlight: true,
      duration: "6-8 horas",
      category: "transplante-capilar",
      features: t("treatments.items.22.features", { returnObjects: true }) as string[]
    },
    {
      id: 23,
      title: t("treatments.items.23.title"),
      description: t("treatments.items.23.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/dermatoscopia_ggqhqz.jpg",
      highlight: false,
      duration: "45-60 min",
      category: "transplante-capilar",
      features: t("treatments.items.23.features", { returnObjects: true }) as string[]
    },
    // Nutrição Clínica
    {
      id: 24,
      title: t("treatments.items.24.title"),
      description: t("treatments.items.24.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/nutricao_ggqhqz.jpg",
      highlight: false,
      duration: "60-90 min",
      category: "nutricao",
      features: t("treatments.items.24.features", { returnObjects: true }) as string[]
    },
    // Endocrinologia
    {
      id: 25,
      title: t("treatments.items.25.title"),
      description: t("treatments.items.25.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/endocrinologia_ggqhqz.jpg",
      highlight: false,
      duration: "60-90 min",
      category: "endocrinologia",
      features: t("treatments.items.25.features", { returnObjects: true }) as string[]
    },
    // Ansiedade Clínica
    {
      id: 26,
      title: t("treatments.items.26.title"),
      description: t("treatments.items.26.description"),
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/ansiedade_ggqhqz.jpg",
      highlight: false,
      duration: "45-60 min",
      category: "ansiedade",
      features: t("treatments.items.26.features", { returnObjects: true }) as string[]
    }
  ];

  const filteredTreatments = activeCategory === "todos"
    ? treatments
    : treatments.filter(treatment => treatment.category === activeCategory);

  return (
    <section id="tratamentos" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white dark:bg-gray-100 relative overflow-hidden">
      {/* Background text sutil */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 pointer-events-none overflow-hidden">
        <span className="text-[18rem] font-vivant text-[hsl(var(--gold-leaf))]/5 select-none whitespace-nowrap">
          {t("treatments.title")}
        </span>
      </div>

      {/* Elementos decorativos flutuantes premium */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-[hsl(var(--gold-leaf))]/8 to-amber-400/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-32 h-32 bg-gradient-to-br from-amber-400/8 to-[hsl(var(--gold-leaf))]/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[hsl(var(--gold-leaf))]/3 to-transparent rounded-full blur-3xl"></div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--gold-leaf)) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-vivant text-jet dark:text-gray-800 mb-6">
            {t("treatments.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(var(--gold-leaf))] to-amber-400 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-vivant text-[hsl(var(--gold-leaf))] mb-4 sm:mb-6">
              {t("treatments.power_title")}
            </h3>
            <p className="text-base sm:text-lg text-jet/70 dark:text-gray-700 font-vivant-light leading-relaxed whitespace-pre-line">
              {t("treatments.description")}
            </p>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-6 py-3.5 rounded-lg font-vivant-light text-sm tracking-wide transition-all duration-500 overflow-hidden ${activeCategory === category.id
                ? 'bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] text-white shadow-xl border border-white/20'
                : 'bg-white/80 backdrop-blur-sm text-jet border-2 border-[hsl(var(--jet))]/20 hover:border-[hsl(var(--jet))]/40 hover:bg-white hover:shadow-lg'
                }`}
            >
              <span className="relative z-10 font-medium">{category.name}</span>
              {activeCategory !== category.id && (
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--jet))]/5 to-[hsl(var(--ring))]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}
            </button>
          ))}
        </div>

        {/* Grid de tratamentos - Layout Wireframe */}
        <div className="bg-white dark:bg-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-200">
          {/* Header do tratamento ideal */}
          <div className="text-center mb-8">
            <a href="https://wa.me/351910098226" target="_blank" rel="noopener noreferrer">
              <button className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-vivant-light font-medium text-white transition-all duration-300 bg-[hsl(var(--gold-leaf))] rounded-full hover:bg-[hsl(var(--gold-leaf))]/90 hover:scale-105 hover:shadow-lg">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
                <span className="relative flex items-center gap-2">
                  {t("treatments.discover_label")}
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </a>
          </div>

          {/* Grid principal de tratamentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTreatments.slice(0, 9).map((treatment, index) => (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-white rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-50 transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-300 hover:border-[hsl(var(--gold-leaf))]/30 hover:shadow-md"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-vivant text-jet dark:text-gray-800 text-lg mb-2 group-hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300">
                      {treatment.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-700 text-sm leading-relaxed">
                      {treatment.description.length > 80 ? treatment.description.substring(0, 80) + '...' : treatment.description}
                    </p>
                  </div>
                  <div className="ml-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6 text-[hsl(var(--gold-leaf))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nota sobre inserção de tratamentos */}
          {filteredTreatments.length > 9 && location.pathname !== '/tratamentos' && (
            <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-100 dark:to-red-100 rounded-2xl border border-orange-200 dark:border-orange-300">
              <div className="text-center">
                <a href="/tratamentos" className="text-[hsl(var(--gold-leaf))] hover:text-amber-600 text-sm font-medium transition-colors duration-300">
                  {t("treatments.view_all", { count: filteredTreatments.length })}
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action Premium */}
        <div className="text-center mt-16">
          <div className="relative bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] dark:from-black dark:via-gray-900 dark:to-black rounded-3xl px-10 py-16 shadow-[0_25px_80px_rgba(0,0,0,0.25)] overflow-hidden">
            {/* Elementos decorativos de fundo */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[hsl(var(--gold-leaf))]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-[hsl(var(--gold-leaf))]/15 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[hsl(var(--gold-leaf))]/5 rounded-full blur-3xl"></div>

            {/* Overlay de glassmorphism */}
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold-leaf))]/5 via-transparent to-black/10 backdrop-blur-sm"></div>

            {/* Conteúdo */}
            <div className="relative z-10">
              {/* Ornamento superior */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-px bg-[hsl(var(--gold-leaf))]/40 rounded-full"></div>
                <div className="w-3 h-3 bg-[hsl(var(--gold-leaf))]/60 rounded-full mx-4 -mt-1.5"></div>
                <div className="w-16 h-px bg-[hsl(var(--gold-leaf))]/40 rounded-full"></div>
              </div>

              <h3 className="text-4xl md:text-5xl font-vivant text-white mb-8 drop-shadow-lg">
                {t("treatments.cta.title")}
              </h3>
              <p className="text-white/90 font-vivant-light text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                {t("treatments.cta.description")}
              </p>

              {/* Botão premium */}
              <div className="relative inline-block group">
                <div className="absolute inset-0 bg-[hsl(var(--gold-leaf))] rounded-full blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <a href="https://wa.me/351910098226" target="_blank" rel="noopener noreferrer">
                  <button className="relative bg-white/95 backdrop-blur-sm text-gray-800 font-vivant font-semibold px-10 py-5 rounded-full hover:bg-white transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-3xl border border-[hsl(var(--gold-leaf))]/20 group-hover:border-[hsl(var(--gold-leaf))]/40">
                    <span className="relative z-10">{t("treatments.cta.button")}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </a>
              </div>

              {/* Indicador de qualidade */}
              <div className="mt-8 flex justify-center items-center space-x-2 text-[hsl(var(--gold-leaf))]/80 text-sm font-vivant-light">
                <div className="w-2 h-2 bg-[hsl(var(--gold-leaf))]/60 rounded-full"></div>
                <span>{t("treatments.cta.premium")}</span>
                <div className="w-1 h-1 bg-[hsl(var(--gold-leaf))]/40 rounded-full"></div>
                <span>{t("treatments.cta.tech")}</span>
                <div className="w-1 h-1 bg-[hsl(var(--gold-leaf))]/40 rounded-full"></div>
                <span>{t("treatments.cta.results")}</span>
                <div className="w-2 h-2 bg-[hsl(var(--gold-leaf))]/60 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;