import { useState } from "react";
import { useLocation } from "react-router-dom";

const TreatmentsSection = () => {
  const location = useLocation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("todos");

  const categories = [
    { id: "todos", name: "Todos" },
    { id: "medicina-dentaria", name: "Medicina Dentária" },
    { id: "harmonizacao-orofacial", name: "Harmonização Orofacial" },
    { id: "estetica-facial", name: "Estética Facial" },
    { id: "estetica-corporal", name: "Estética Corporal" },
    { id: "terapia-capilar", name: "Terapia Capilar" },
    { id: "transplante-capilar", name: "Transplante Capilar" },
    { id: "nutricao", name: "Nutrição" },
    { id: "endocrinologia", name: "Endocrinologia" },
    { id: "ansiedade", name: "Ansiedade Clínica" }
  ];

  const treatments = [
    // Medicina Dentária
    {
      id: 1,
      title: "Estética Dentária",
      description: "Tratamentos estéticos avançados para transformação completa do sorriso.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/estetica-dentaria_ggqhqz.jpg",
      highlight: true,
      duration: "2-4 sessões",
      category: "medicina-dentaria",
      features: ["Facetas", "Clareamento", "Restaurações", "Natural"]
    },
    {
      id: 2,
      title: "Alinhadores Invisíveis",
      description: "Correção ortodôntica discreta com alinhadores transparentes removíveis.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/alinhadores-invisiveis_ggqhqz.jpg",
      highlight: false,
      duration: "12-24 meses",
      category: "medicina-dentaria",
      features: ["Invisível", "Removível", "Confortável", "Previsível"]
    },
    {
      id: 3,
      title: "Ortodontia Tradicional",
      description: "Tratamento ortodôntico com brackets para correção de má oclusão.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/ortodontia-tradicional_ggqhqz.jpg",
      highlight: false,
      duration: "18-36 meses",
      category: "medicina-dentaria",
      features: ["Eficaz", "Durável", "Preciso", "Económico"]
    },
    {
      id: 4,
      title: "Implantologia e Cirurgia Avançada",
      description: "Implantes dentários e cirurgias orais com tecnologia de ponta.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/implantologia_ggqhqz.jpg",
      highlight: true,
      duration: "3-6 meses",
      category: "medicina-dentaria",
      features: ["Carga imediata", "Biocompatível", "Duradouro", "Natural"]
    },
    {
      id: 5,
      title: "Endodontia",
      description: "Tratamento de canal radicular para preservação de dentes comprometidos.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/endodontia_ggqhqz.jpg",
      highlight: false,
      duration: "1-3 sessões",
      category: "medicina-dentaria",
      features: ["Preserva dente", "Indolor", "Microscopia", "Sucesso"]
    },
    {
      id: 6,
      title: "Periodontologia",
      description: "Tratamento especializado das gengivas e estruturas de suporte.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/periodontologia_ggqhqz.jpg",
      highlight: false,
      duration: "60-120 min",
      category: "medicina-dentaria",
      features: ["Laser", "Regeneração", "Prevenção", "Saúde"]
    },
    // Harmonização Orofacial Avançada
    {
      id: 7,
      title: "Bioestimuladores de Colagénio",
      description: "Sculptra e Radiesse para estimulação natural de colagénio facial.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/bioestimuladores_ggqhqz.jpg",
      highlight: true,
      duration: "2-3 sessões",
      category: "harmonizacao-orofacial",
      features: ["Natural", "Duradouro", "Rejuvenesce", "Sculptra"]
    },
    {
      id: 8,
      title: "Lipoenzimática de Papada",
      description: "Redução não cirúrgica da gordura localizada na região do queixo.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/lipoenzima_ggqhqz.jpg",
      highlight: false,
      duration: "2-4 sessões",
      category: "harmonizacao-orofacial",
      features: ["Não invasivo", "Eficaz", "Contorno", "Definição"]
    },
    {
      id: 9,
      title: "Fios de Sustentação Facial",
      description: "Lifting facial não cirúrgico com fios absorvíveis para firmeza.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/fios-sustentacao_ggqhqz.jpg",
      highlight: false,
      duration: "60-90 min",
      category: "harmonizacao-orofacial",
      features: ["Lifting", "Firmeza", "Natural", "Imediato"]
    },
    {
      id: 10,
      title: "Preenchimento de Olheiras",
      description: "Correção de olheiras e sulcos com ácido hialurónico de alta qualidade.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/preenchimento-olheiras_ggqhqz.jpg",
      highlight: false,
      duration: "30-45 min",
      category: "harmonizacao-orofacial",
      features: ["Rejuvenesce", "Natural", "Hidrata", "Suaviza"]
    },
    {
      id: 11,
      title: "Rinoplastia Não Cirúrgica",
      description: "Correção do nariz com ácido hialurónico sem necessidade de cirurgia.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/rinoplastia_ggqhqz.jpg",
      highlight: true,
      duration: "30-60 min",
      category: "harmonizacao-orofacial",
      features: ["Sem cirurgia", "Imediato", "Reversível", "Harmonia"]
    },
    // Estética Facial Médica
    {
      id: 12,
      title: "Peelings Médicos",
      description: "Peelings químicos e enzimáticos para renovação e rejuvenescimento.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/peelings_ggqhqz.jpg",
      highlight: false,
      duration: "45-60 min",
      category: "estetica-facial",
      features: ["Renovação", "Textura", "Luminosidade", "Anti-idade"]
    },
    {
      id: 13,
      title: "Skinbooster e Mesoterapia",
      description: "Hidratação profunda e revitalização da pele facial.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/skinbooster_ggqhqz.jpg",
      highlight: false,
      duration: "30-45 min",
      category: "estetica-facial",
      features: ["Hidratação", "Luminosidade", "Firmeza", "Vitaminas"]
    },
    {
      id: 14,
      title: "Rejuvenescimento com PRP",
      description: "Plasma Rico em Plaquetas para regeneração natural da pele.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/prp-facial_ggqhqz.jpg",
      highlight: true,
      duration: "60-90 min",
      category: "estetica-facial",
      features: ["Natural", "Regeneração", "Colagénio", "Autólogo"]
    },
    {
      id: 15,
      title: "Microagulhamento",
      description: "Estimulação de colagénio através de microlesões controladas.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/microagulhamento_ggqhqz.jpg",
      highlight: false,
      duration: "45-60 min",
      category: "estetica-facial",
      features: ["Colagénio", "Textura", "Cicatrizes", "Firmeza"]
    },
    // Estética Corporal
    {
      id: 16,
      title: "Radiofrequência Corporal",
      description: "Tratamento para flacidez corporal com tecnologia de radiofrequência.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/radiofrequencia_ggqhqz.jpg",
      highlight: false,
      duration: "60-90 min",
      category: "estetica-corporal",
      features: ["Firmeza", "Colagénio", "Contorno", "Não invasivo"]
    },
    {
      id: 17,
      title: "Mesoterapia Corporal",
      description: "Tratamento para gordura localizada e celulite com microinjeções.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/mesoterapia-corporal_ggqhqz.jpg",
      highlight: false,
      duration: "45-60 min",
      category: "estetica-corporal",
      features: ["Celulite", "Gordura", "Drenagem", "Modelagem"]
    },
    {
      id: 18,
      title: "Drenagem Linfática",
      description: "Massagem especializada para recuperação pós-cirúrgica e bem-estar.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/drenagem_ggqhqz.jpg",
      highlight: false,
      duration: "60-90 min",
      category: "estetica-corporal",
      features: ["Pós-cirúrgico", "Detox", "Relaxante", "Recuperação"]
    },
    // Terapia Capilar
    {
      id: 19,
      title: "PRP Capilar",
      description: "Plasma Rico em Plaquetas para estimular crescimento capilar.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/prp-capilar_ggqhqz.jpg",
      highlight: true,
      duration: "60-90 min",
      category: "terapia-capilar",
      features: ["Crescimento", "Natural", "Densidade", "Regeneração"]
    },
    {
      id: 20,
      title: "Microinfusão Capilar (MMP)",
      description: "Infusão de medicamentos diretamente no couro cabeludo.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/microinfusao_ggqhqz.jpg",
      highlight: false,
      duration: "30-45 min",
      category: "terapia-capilar",
      features: ["Medicamentos", "Precisão", "Eficácia", "Direcionado"]
    },
    {
      id: 21,
      title: "Mesoterapia Capilar",
      description: "Aplicação de vitaminas e nutrientes para fortalecimento capilar.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/mesoterapia-capilar_ggqhqz.jpg",
      highlight: false,
      duration: "30-45 min",
      category: "terapia-capilar",
      features: ["Vitaminas", "Fortalece", "Nutrição", "Vitalidade"]
    },
    // Transplante Capilar
    {
      id: 22,
      title: "Transplante FUE",
      description: "Técnica FUE sem cortes visíveis para transplante capilar natural.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/transplante-fue_ggqhqz.jpg",
      highlight: true,
      duration: "6-8 horas",
      category: "transplante-capilar",
      features: ["Sem cicatrizes", "Natural", "Permanente", "Tecnologia"]
    },
    {
      id: 23,
      title: "Avaliação com Dermatoscopia",
      description: "Análise digital avançada do couro cabeludo antes do transplante.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/dermatoscopia_ggqhqz.jpg",
      highlight: false,
      duration: "45-60 min",
      category: "transplante-capilar",
      features: ["Digital", "Precisão", "Planeamento", "Análise"]
    },
    // Nutrição Clínica
    {
      id: 24,
      title: "Nutrição Anti-inflamatória",
      description: "Planos nutricionais para combater inflamação e otimizar saúde.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/nutricao_ggqhqz.jpg",
      highlight: false,
      duration: "60-90 min",
      category: "nutricao",
      features: ["Anti-inflamatória", "Personalizada", "Saúde", "Bem-estar"]
    },
    // Endocrinologia
    {
      id: 25,
      title: "Avaliação Hormonal",
      description: "Análise completa do perfil hormonal para adultos e jovens.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/endocrinologia_ggqhqz.jpg",
      highlight: false,
      duration: "60-90 min",
      category: "endocrinologia",
      features: ["Hormonal", "Completa", "Metabólica", "Personalizada"]
    },
    // Ansiedade Clínica
    {
      id: 26,
      title: "Apoio para Ansiedade Dentária",
      description: "Suporte especializado para pacientes com medo ou trauma dentário.",
      image: "https://res.cloudinary.com/dxm1cikvp/image/upload/v1735745234/ansiedade_ggqhqz.jpg",
      highlight: false,
      duration: "45-60 min",
      category: "ansiedade",
      features: ["Apoio", "Conforto", "Segurança", "Especializado"]
    }
  ];

  const filteredTreatments = activeCategory === "todos"
    ? treatments
    : treatments.filter(treatment => treatment.category === activeCategory);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white dark:bg-gray-100 relative overflow-hidden">
      {/* Background text sutil */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 pointer-events-none overflow-hidden">
        <span className="text-[18rem] font-vivant text-[hsl(var(--gold-leaf))]/5 select-none whitespace-nowrap">
          Tratamentos
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
            Tratamentos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(var(--gold-leaf))] to-amber-400 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-vivant text-[hsl(var(--gold-leaf))] mb-4 sm:mb-6">
              O Poder de um Sorriso
            </h3>
            <p className="text-base sm:text-lg text-jet/70 dark:text-gray-700 font-vivant-light leading-relaxed">
              Aqui, tratamos sorrisos como extensão da identidade de cada paciente.
              <br /><br />
              Unimos tecnologia de ponta, cuidado multidisciplinar e sensibilidade estética para transformar não apenas o sorriso — mas também a forma como você se vê e se sente.
              <br /><br />
              Tudo com conforto, precisão e a excelência que faz do Instituto Areluna uma referência em reabilitação oral.
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
            <button className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-vivant-light font-medium text-white transition-all duration-300 bg-[hsl(var(--gold-leaf))] rounded-full hover:bg-[hsl(var(--gold-leaf))]/90 hover:scale-105 hover:shadow-lg">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
              <span className="relative flex items-center gap-2">
                DESCUBRA O TRATAMENTO IDEAL PARA VOCÊ
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
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
                  Ver todos os {filteredTreatments.length} tratamentos →
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
                Transforme o Seu Sorriso
              </h3>
              <p className="text-white/90 font-vivant-light text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                Agende uma consulta e descubra como podemos criar o sorriso dos seus sonhos com nossos tratamentos personalizados e tecnologia de vanguarda.
              </p>

              {/* Botão premium */}
              <div className="relative inline-block group">
                <div className="absolute inset-0 bg-[hsl(var(--gold-leaf))] rounded-full blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <button className="relative bg-white/95 backdrop-blur-sm text-gray-800 font-vivant font-semibold px-10 py-5 rounded-full hover:bg-white transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-3xl border border-[hsl(var(--gold-leaf))]/20 group-hover:border-[hsl(var(--gold-leaf))]/40">
                  <span className="relative z-10">Agendar Consulta Exclusiva</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>

              {/* Indicador de qualidade */}
              <div className="mt-8 flex justify-center items-center space-x-2 text-[hsl(var(--gold-leaf))]/80 text-sm font-vivant-light">
                <div className="w-2 h-2 bg-[hsl(var(--gold-leaf))]/60 rounded-full"></div>
                <span>Atendimento Premium</span>
                <div className="w-1 h-1 bg-[hsl(var(--gold-leaf))]/40 rounded-full"></div>
                <span>Tecnologia Avançada</span>
                <div className="w-1 h-1 bg-[hsl(var(--gold-leaf))]/40 rounded-full"></div>
                <span>Resultados Garantidos</span>
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