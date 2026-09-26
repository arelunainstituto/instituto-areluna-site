import SEO from "@/lp/components/SEO";
import LPTracking from "@/lp/components/LPTracking";
import Header from "@/lp/components/Header";
import HeroSection from "@/lp/components/sections/HeroSection";
import FinalCTASection from "@/lp/components/sections/FinalCTASection";
import BeforeAfterOrtodontia from "@/lp/components/BeforeAfterOrtodontia";
import BenefitsAlinhadores from "@/lp/components/BenefitsAlinhadores";
import HowItWorksOrtodontia from "@/lp/components/HowItWorksOrtodontia";
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
      "Os alinhadores são fabricados em material transparente e adaptam-se aos dentes, sendo discretos no dia a dia.",
  },
  {
    question: "Quanto tempo demora o tratamento com alinhadores?",
    answer:
      "A duração depende da complexidade do caso e é indicada no plano de tratamento, após a avaliação clínica.",
  },
  {
    question: "Posso comer e beber com os alinhadores?",
    answer:
      "Os alinhadores devem ser retirados durante as refeições e ao beber líquidos quentes ou pigmentantes, sendo recolocados após a higienização.",
  },
  {
    question: "Quem pode usar alinhadores invisíveis?",
    answer:
      "A indicação depende do caso e é confirmada na consulta de avaliação ortodôntica.",
  },
]);

const Alinhadores = () => {
  return (
    <main id="main-content" tabIndex={-1} className="lp-scope">
      <SEO
        title="Alinhadores Invisíveis no Porto | Instituto Areluna"
        description="Alinhadores invisíveis e removíveis no Porto, com planeamento digital e acompanhamento clínico. A indicação depende de consulta de avaliação."
        keywords="alinhadores invisíveis Porto, ortodontia invisível, alinhador dentário transparente, aparelho invisível, ortodontia Porto"
        path="/alinhadores-invisiveis-porto"
        jsonLd={[
          organizationSchema,
          buildServiceSchema({
            name: "Alinhadores Invisíveis",
            description:
              "Tratamento ortodôntico com alinhadores transparentes, removíveis e discretos, com planeamento digital 3D e acompanhamento clínico no Porto.",
            path: "/alinhadores-invisiveis-porto",
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
        titleTop="Alinhadores invisíveis"
        titleHighlight="no Porto"
        subtitle="Tratamento ortodôntico com alinhadores transparentes e removíveis."
        description="Alinhadores transparentes e removíveis, discretos no dia a dia. A indicação é confirmada na consulta de avaliação."
        ctaLabel="🔘 Quero marcar a minha avaliação"
        formInteresse="Alinhadores"
        formDescription="Descubra se os alinhadores são ideais para si"
        formTitle="Avaliação de Alinhadores"
        formWebhookUrl={LEAD_WEBHOOK_URL}
      />
      <BeforeAfterOrtodontia />
      <BenefitsAlinhadores />
      <HowItWorksOrtodontia />
      <AuthorityOrtodontia />
      <FinalCTASection
        titlePrefix="Marque a sua consulta de avaliação."
        titleHighlight="Alinhadores invisíveis no Porto."
        description="Marque a sua avaliação e descubra se pode fazer o tratamento com alinhadores invisíveis."
        ctaLabel="🔘 Quero marcar a minha avaliação"
        trustIndicators={[
          { label: "Primeira consulta de avaliação sem custo" },
          { label: "Planeamento digital" },
          { label: "Plano explicado" },
        ]}
      />
      <Footer />
    </main>
  );
};

export default Alinhadores;
