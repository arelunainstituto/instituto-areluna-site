import SEO from "@/lp/components/SEO";
import LPTracking from "@/lp/components/LPTracking";
import Header from "@/lp/components/Header";
import HeroSection from "@/lp/components/sections/HeroSection";
import FinalCTASection from "@/lp/components/sections/FinalCTASection";
import BeforeAfterOrtodontia from "@/lp/components/BeforeAfterOrtodontia";
import BenefitsAlinhadores from "@/lp/components/BenefitsAlinhadores";
import HowItWorksOrtodontia from "@/lp/components/HowItWorksOrtodontia";
import TestimonialsOrtodontia from "@/lp/components/TestimonialsOrtodontia";
import AuthorityOrtodontia from "@/lp/components/AuthorityOrtodontia";
import Footer from "@/lp/components/Footer";
import { CLINIC_IMAGE, LEAD_WEBHOOK_URL } from "@/lp/config/landingPages";
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildServiceSchema,
  organizationSchema,
} from "@/lp/lib/schema";

const faqAlinhadores = buildFAQSchema([
  {
    question: "Os alinhadores invisíveis são realmente discretos?",
    answer:
      "Sim. Os alinhadores são fabricados em material transparente e adaptam-se aos dentes, sendo praticamente impercetíveis no dia a dia.",
  },
  {
    question: "Quanto tempo demora o tratamento com alinhadores?",
    answer:
      "A duração média varia entre 6 e 18 meses, dependendo da complexidade do caso. Cada plano é apresentado com a previsão exata após a avaliação clínica.",
  },
  {
    question: "Posso comer e beber com os alinhadores?",
    answer:
      "Os alinhadores devem ser retirados durante as refeições e ao beber líquidos quentes ou pigmentantes, sendo recolocados após a higienização.",
  },
  {
    question: "Quem pode usar alinhadores invisíveis?",
    answer:
      "A maioria dos adultos e adolescentes com problemas de alinhamento ligeiros a moderados é candidato. A elegibilidade é confirmada na avaliação ortodôntica.",
  },
]);

const Alinhadores = () => {
  return (
    <main id="main-content" tabIndex={-1} className="lp-scope">
      <SEO
        title="Alinhadores Invisíveis no Porto | Instituto Areluna"
        description="Alinhe os seus dentes com alinhadores invisíveis e removíveis no Porto. Tratamento ortodôntico discreto, planeamento 3D e acompanhamento clínico de excelência."
        keywords="alinhadores invisíveis Porto, ortodontia invisível, alinhador dentário transparente, aparelho invisível, ortodontia Porto"
        path="/alinhadores"
        jsonLd={[
          organizationSchema,
          buildServiceSchema({
            name: "Alinhadores Invisíveis",
            description:
              "Tratamento ortodôntico com alinhadores transparentes, removíveis e discretos, com planeamento digital 3D e acompanhamento clínico no Porto.",
            path: "/alinhadores",
            serviceType: "Ortodontia",
          }),
          buildBreadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Alinhadores Invisíveis", path: "/alinhadores" },
          ]),
          faqAlinhadores,
        ]}
      />
      <LPTracking />
      <Header />
      <HeroSection
        overlayImage={CLINIC_IMAGE}
        titleTop="Alinhe o seu sorriso"
        titleHighlight="com Alinhadores Invisíveis"
        subtitle="Transforme o seu sorriso de forma discreta e confortável com a tecnologia mais avançada em ortodontia."
        description="Alinhadores transparentes, removíveis e praticamente invisíveis. Ideal para quem quer alinhar os dentes sem comprometer a aparência no dia a dia."
        ctaLabel="🔘 Quero marcar a minha avaliação"
        formInteresse="Alinhadores"
        formDescription="Descubra se os alinhadores são ideais para si"
        formTitle="Avaliação de Alinhadores"
        formWebhookUrl={LEAD_WEBHOOK_URL}
      />
      <BeforeAfterOrtodontia />
      <BenefitsAlinhadores />
      <HowItWorksOrtodontia />
      <TestimonialsOrtodontia />
      <AuthorityOrtodontia />
      <FinalCTASection
        titlePrefix="Chegou a hora de alinhar."
        titleHighlight="Seu sorriso perfeito de forma invisível."
        description="Marque a sua avaliação e descubra se pode fazer o tratamento com alinhadores invisíveis."
        ctaLabel="🔘 Quero marcar a minha avaliação"
        trustIndicators={[
          { label: "Avaliação sem compromisso" },
          { label: "Simulação 3D gratuita" },
          { label: "Resultados previsíveis" },
        ]}
      />
      <Footer />
    </main>
  );
};

export default Alinhadores;
