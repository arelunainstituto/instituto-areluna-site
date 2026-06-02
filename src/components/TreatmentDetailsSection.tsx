import { useState } from "react";
import { Button } from "@/components/ui/button";

const TreatmentDetailsSection = () => {
  const [activeCategory, setActiveCategory] = useState("ortodontia");

  const categories = [
    { id: "ortodontia", name: "Ortodontia", icon: "🦷" },
    { id: "implantes", name: "Implantes", icon: "⚕️" },
    { id: "estetica", name: "Estética", icon: "✨" },
    { id: "proteses", name: "Próteses", icon: "🔧" },
    { id: "cirurgia", name: "Cirurgia", icon: "🏥" },
    { id: "periodontica", name: "Periodontica", icon: "🩺" }
  ];

  const treatments = {
    ortodontia: [
      {
        name: "Aparelho Invisível",
        description: "Alinhadores transparentes removíveis para correção discreta dos dentes.",
        duration: "12-24 meses",
        price: "Desde €2.500",
        features: ["Invisível", "Removível", "Confortável", "Resultados previsíveis"],
        image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop"
      },
      {
        name: "Aparelho Fixo Metálico",
        description: "Tratamento ortodôntico tradicional com brackets metálicos de alta qualidade.",
        duration: "18-30 meses",
        price: "Desde €1.800",
        features: ["Eficaz", "Durável", "Preciso", "Mais económico"],
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop"
      },
      {
        name: "Aparelho Cerâmico",
        description: "Brackets cerâmicos discretos que se misturam com a cor natural dos dentes.",
        duration: "18-30 meses",
        price: "Desde €2.200",
        features: ["Discreto", "Estético", "Resistente", "Eficaz"],
        image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop"
      }
    ],
    implantes: [
      {
        name: "Implante Unitário",
        description: "Substitução de um único dente com implante de titânio e coroa cerâmica.",
        duration: "3-6 meses",
        price: "Desde €1.200",
        features: ["Permanente", "Natural", "Preserva osso", "Alta durabilidade"],
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop"
      },
      {
        name: "All-on-4",
        description: "Reabilitação completa da arcada com apenas 4 implantes.",
        duration: "1 dia",
        price: "Desde €8.000",
        features: ["Carga imediata", "Menos invasivo", "Resultado rápido", "Função total"],
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop"
      },
      {
        name: "Implante com Enxerto",
        description: "Implante precedido de enxerto ósseo para casos com pouco osso.",
        duration: "6-9 meses",
        price: "Desde €1.800",
        features: ["Reconstrói osso", "Base sólida", "Longa duração", "Resultado natural"],
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop"
      }
    ],
    estetica: [
      {
        name: "Facetas de Porcelana",
        description: "Lâminas ultra-finas de porcelana para transformação completa do sorriso.",
        duration: "2-3 sessões",
        price: "Desde €600/dente",
        features: ["Resultado natural", "Resistente", "Duradouro", "Personalizado"],
        image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop"
      },
      {
        name: "Branqueamento Profissional",
        description: "Clareamento dentário com tecnologia LED para resultados superiores.",
        duration: "1 sessão",
        price: "Desde €300",
        features: ["Rápido", "Seguro", "Eficaz", "Duradouro"],
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop"
      },
      {
        name: "Harmonização Facial",
        description: "Tratamentos estéticos para harmonizar o sorriso com a face.",
        duration: "30-60 min",
        price: "Desde €400",
        features: ["Naturalidade", "Rejuvenescimento", "Harmonia", "Resultado imediato"],
        image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop"
      }
    ],
    proteses: [
      {
        name: "Prótese Total",
        description: "Dentadura completa personalizada para substituição total dos dentes.",
        duration: "4-6 sessões",
        price: "Desde €800",
        features: ["Conforto", "Estética", "Função", "Durabilidade"],
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop"
      },
      {
        name: "Prótese Parcial",
        description: "Prótese removível para substituição de alguns dentes perdidos.",
        duration: "3-4 sessões",
        price: "Desde €600",
        features: ["Removível", "Confortável", "Estética", "Funcional"],
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop"
      },
      {
        name: "Prótese sobre Implantes",
        description: "Prótese fixa suportada por implantes para máxima estabilidade.",
        duration: "3-6 meses",
        price: "Desde €3.000",
        features: ["Fixa", "Estável", "Duradoura", "Natural"],
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop"
      }
    ],
    cirurgia: [
      {
        name: "Extração de Sisos",
        description: "Remoção segura dos dentes do siso com técnicas minimamente invasivas.",
        duration: "30-60 min",
        price: "Desde €150",
        features: ["Seguro", "Rápido", "Indolor", "Recuperação rápida"],
        image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop"
      },
      {
        name: "Cirurgia Periodontal",
        description: "Tratamento cirúrgico das doenças da gengiva e estruturas de suporte.",
        duration: "60-90 min",
        price: "Desde €400",
        features: ["Preserva dentes", "Melhora saúde", "Técnica avançada", "Resultados duradouros"],
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop"
      },
      {
        name: "Apicectomia",
        description: "Cirurgia endodôntica para preservação de dentes com lesões na raiz.",
        duration: "45-75 min",
        price: "Desde €350",
        features: ["Preserva dente", "Técnica precisa", "Alta taxa de sucesso", "Mínima invasão"],
        image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop"
      }
    ],
    periodontica: [
      {
        name: "Destartarização",
        description: "Limpeza profunda para remoção de tártaro e placa bacteriana.",
        duration: "60 min",
        price: "Desde €80",
        features: ["Preventivo", "Indolor", "Melhora saúde", "Hálito fresco"],
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop"
      },
      {
        name: "Curetagem",
        description: "Tratamento periodontal para limpeza profunda das raízes dentárias.",
        duration: "90-120 min",
        price: "Desde €200",
        features: ["Trata gengivite", "Previne perda óssea", "Melhora saúde", "Duradouro"],
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop"
      },
      {
        name: "Enxerto Gengival",
        description: "Procedimento para corrigir retração gengival e melhorar estética.",
        duration: "60-90 min",
        price: "Desde €300",
        features: ["Melhora estética", "Protege raízes", "Resultado natural", "Duradouro"],
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop"
      }
    ]
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--gold-leaf)) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Background text sutil */}
      <div className="absolute top-32 -right-32 pointer-events-none overflow-hidden">
        <span className="text-[12rem] xs:text-[14rem] sm:text-[16rem] lg:text-[18rem] font-vivant text-[hsl(var(--gold-leaf))]/5 select-none whitespace-nowrap">
          Tratam
        </span>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center bg-[hsl(var(--gold-leaf))]/10 dark:bg-[hsl(var(--gold-leaf))]/20 rounded-full px-4 xs:px-6 py-2 xs:py-3 mb-6 xs:mb-8">
            <div className="w-2 h-2 bg-[hsl(var(--gold-leaf))] rounded-full mr-3"></div>
            <span className="text-[hsl(var(--gold-leaf))] font-vivant text-xs xs:text-sm font-medium tracking-wide">
              TRATAMENTOS ESPECIALIZADOS
            </span>
          </div>

          <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-vivant text-jet dark:text-white mb-6">
            Nossos Tratamentos
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-[hsl(var(--jet))] to-[hsl(var(--ring))] mx-auto mb-6 sm:mb-8 rounded-full"></div>

          <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-2xl xs:text-3xl sm:text-4xl font-vivant text-jet mb-4 sm:mb-6">
              Tecnologia Avançada, Cuidado Personalizado
            </h3>
            <p className="text-base sm:text-lg text-jet/70 dark:text-gray-300 font-vivant-light leading-relaxed">
              Cada tratamento é cuidadosamente planejado para suas necessidades específicas,
              utilizando as mais avançadas técnicas e tecnologias disponíveis.
            </p>
          </div>
        </div>

        {/* Categorias */}
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:flex sm:flex-wrap sm:justify-center gap-2 xs:gap-3 sm:gap-4 mb-12 sm:mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full transition-all duration-300 text-xs xs:text-sm sm:text-base font-vivant-light tracking-wide min-h-[44px] flex items-center justify-center ${activeCategory === category.id
                ? 'bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] dark:from-black dark:via-gray-900 dark:to-black text-white shadow-lg transform scale-105'
                : 'bg-white/70 dark:bg-gray-800/70 text-jet dark:text-gray-300 hover:bg-[hsl(var(--gold-leaf))]/10 dark:hover:bg-[hsl(var(--gold-leaf))]/20 border border-[hsl(var(--gold-leaf))]/20'
                }`}
            >
              <span className="mr-1 xs:mr-2">{category.icon}</span>
              <span className="truncate">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Grid de tratamentos */}
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
          {treatments[activeCategory as keyof typeof treatments].map((treatment, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-[hsl(var(--gold-leaf))]/10 dark:border-[hsl(var(--gold-leaf))]/30 hover:border-[hsl(var(--gold-leaf))]/30 dark:hover:border-[hsl(var(--gold-leaf))]/50 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-xl"
            >
              {/* Imagem */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>


              </div>

              <div className="p-4 xs:p-5 sm:p-6">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-vivant text-jet dark:text-white mb-2 xs:mb-3 group-hover:text-[hsl(var(--gold-leaf))] dark:group-hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 line-clamp-2">
                  {treatment.name}
                </h3>

                <p className="text-sm xs:text-base text-gray-600 dark:text-gray-400 mb-3 xs:mb-4 font-vivant-light leading-relaxed line-clamp-3">
                  {treatment.description}
                </p>

                <div className="flex items-center justify-between mb-3 xs:mb-4 text-xs xs:text-sm text-gray-500 dark:text-gray-500">
                  <span>⏱️ {treatment.duration}</span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 xs:gap-2 mb-4 xs:mb-6">
                  {treatment.features.slice(0, 4).map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-[hsl(var(--gold-leaf))]/10 dark:bg-[hsl(var(--gold-leaf))]/20 text-[hsl(var(--gold-leaf))] rounded-md text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-[hsl(var(--gold-leaf))] group-hover:text-white group-hover:border-[hsl(var(--gold-leaf))] transition-all duration-300 min-h-[44px] text-xs xs:text-sm"
                >
                  SABER MAIS
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] dark:from-black dark:via-gray-900 dark:to-black backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-[hsl(var(--gold-leaf))]/20">
            <h3 className="text-2xl xs:text-3xl sm:text-4xl font-vivant text-white mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Oferecemos uma gama completa de tratamentos personalizados.
              Agende uma consulta para encontrarmos a solução ideal para você.
            </p>
            <a href="https://wa.me/351916880662" target="_blank" rel="noopener noreferrer">
              <Button variant="gold" size="lg" className="px-8 py-4 text-sm xs:text-base tracking-wider font-vivant-light">
                AGENDAR CONSULTA
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentDetailsSection;