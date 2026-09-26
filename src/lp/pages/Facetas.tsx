import SEO from "@/lp/components/SEO";
import LPTracking from "@/lp/components/LPTracking";
import Header from "@/lp/components/Header";
import HeroSection from "@/lp/components/sections/HeroSection";
import FinalCTASection from "@/lp/components/sections/FinalCTASection";
import BeforeAfterEstetica from "@/lp/components/BeforeAfterEstetica";
import BenefitsFacetas from "@/lp/components/BenefitsFacetas";
import HowItWorksEstetica from "@/lp/components/HowItWorksEstetica";
import AuthorityEstetica from "@/lp/components/AuthorityEstetica";
import Footer from "@/lp/components/Footer";
import { CLINIC_IMAGE, LEAD_WEBHOOK_URL } from "@/lp/config/landingPages";
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildServiceSchema,
  organizationSchema,
} from "@/lp/lib/schema";

const faqFacetas = buildFAQSchema([
  {
    question: "Qual a diferença entre facetas e lentes de contacto dental?",
    answer:
      "As lentes de contacto dental são facetas ultrafinas, que em regra exigem menor desgaste do dente. A opção indicada depende da avaliação clínica.",
  },
  {
    question: "Quanto tempo duram as facetas dentárias?",
    answer:
      "A durabilidade depende do material, dos hábitos e da manutenção. Na consulta explicamos o que esperar no seu caso.",
  },
  {
    question: "Quantas consultas são necessárias para colocar facetas?",
    answer:
      "O tratamento envolve, em regra, 2 a 3 consultas: avaliação e planeamento digital, preparação dos dentes e colocação final das facetas.",
  },
  {
    question: "As facetas dentárias estragam os dentes?",
    answer:
      "Depende do caso. As facetas implicam, em regra, algum desgaste do dente; a indicação e o tipo de faceta são definidos na consulta de avaliação.",
  },
]);

const Facetas = () => {
  return (
    <main id="main-content" tabIndex={-1} className="lp-scope">
      <SEO
        title="Facetas Dentárias no Porto | Instituto Areluna"
        description="Facetas dentárias no Porto, com planeamento digital. A indicação depende de consulta de avaliação e diagnóstico individual. Instituto Areluna."
        keywords="facetas dentárias Porto, lentes de contacto dental, facetas em cerâmica, sorriso branco, estética dental Porto"
        path="/facetas-dentarias-porto"
        jsonLd={[
          organizationSchema,
          buildServiceSchema({
            name: "Facetas Dentárias",
            description:
              "Facetas dentárias em cerâmica para correção de cor e forma dos dentes, após avaliação clínica.",
            path: "/facetas-dentarias-porto",
            serviceType: "Estética Dentária",
          }),
          buildBreadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Facetas Dentárias", path: "/facetas" },
          ]),
          faqFacetas,
        ]}
      />
      <LPTracking />
      <Header />
      <HeroSection
        overlayImage={CLINIC_IMAGE}
        titleTop="Facetas dentárias"
        titleHighlight="no Porto"
        subtitle="Facetas em cerâmica e lentes de contacto dental, com planeamento digital."
        description="Correção de formato e cor dos dentes. O número de consultas e o tipo de faceta dependem da avaliação clínica."
        ctaLabel="🔘 Quero marcar a minha avaliação"
        formInteresse="Facetas"
        formDescription="Descubra se as facetas são ideais para si"
        formTitle="Avaliação de Facetas"
        formWebhookUrl={LEAD_WEBHOOK_URL}
      />
      <BeforeAfterEstetica />
      <BenefitsFacetas />
      <HowItWorksEstetica />
      <AuthorityEstetica />
      <FinalCTASection
        titlePrefix="Marque a sua consulta de avaliação."
        titleHighlight="Facetas dentárias no Porto."
        description="Marque a sua avaliação e descubra se pode fazer o tratamento com facetas dentárias."
        ctaLabel="🔘 Quero marcar a minha avaliação"
        trustIndicators={[
          { label: "Primeira consulta de avaliação sem custo" },
          { label: "Design digital do sorriso" },
          { label: "Plano explicado" },
        ]}
      />
      <Footer />
    </main>
  );
};

export default Facetas;
