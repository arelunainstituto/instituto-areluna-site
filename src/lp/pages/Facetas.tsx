import SEO from "@/lp/components/SEO";
import LPTracking from "@/lp/components/LPTracking";
import Header from "@/lp/components/Header";
import HeroSection from "@/lp/components/sections/HeroSection";
import FinalCTASection from "@/lp/components/sections/FinalCTASection";
import BeforeAfterEstetica from "@/lp/components/BeforeAfterEstetica";
import BenefitsFacetas from "@/lp/components/BenefitsFacetas";
import HowItWorksEstetica from "@/lp/components/HowItWorksEstetica";
import TestimonialsEstetica from "@/lp/components/TestimonialsEstetica";
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
      "As lentes de contacto dental são facetas ultrafinas, com espessuras a partir de 0,2 mm, que exigem desgaste mínimo do dente. Ambas corrigem cor, forma e alinhamento.",
  },
  {
    question: "Quanto tempo duram as facetas dentárias?",
    answer:
      "Com cuidados adequados, as facetas em cerâmica duram, em média, entre 10 e 20 anos, mantendo o brilho e a estética originais.",
  },
  {
    question: "Quantas consultas são necessárias para colocar facetas?",
    answer:
      "O tratamento envolve, em regra, 2 a 3 consultas: avaliação e planeamento digital, preparação dos dentes e colocação final das facetas.",
  },
  {
    question: "As facetas dentárias estragam os dentes?",
    answer:
      "Não. Quando bem indicadas e colocadas por equipa especializada, preservam grande parte da estrutura dental e protegem o dente original.",
  },
]);

const Facetas = () => {
  return (
    <main id="main-content" tabIndex={-1} className="lp-scope">
      <SEO
        title="Facetas Dentárias no Porto | Instituto Areluna"
        description="Transforme o seu sorriso com facetas dentárias ultrafinas no Porto. Resultado natural, durável e personalizado, com planeamento digital no Instituto Areluna."
        keywords="facetas dentárias Porto, lentes de contacto dental, facetas em cerâmica, sorriso branco, estética dental Porto"
        path="/facetas"
        jsonLd={[
          organizationSchema,
          buildServiceSchema({
            name: "Facetas Dentárias",
            description:
              "Facetas dentárias ultrafinas em cerâmica para correção de cor, forma e alinhamento dos dentes. Resultado estético natural e duradouro.",
            path: "/facetas",
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
        titleTop="Transforme o seu Sorriso"
        titleHighlight="com Facetas Dentárias"
        subtitle="Lentes de contato dental ultrafinas para um sorriso perfeito e natural em poucos dias."
        description="Correção de formato, cor e alinhamento dos dentes com tecnologia de ponta. Resultado imediato e duradouro para o sorriso dos seus sonhos."
        ctaLabel="🔘 Quero marcar a minha avaliação"
        formInteresse="Facetas"
        formDescription="Descubra se as facetas são ideais para si"
        formTitle="Avaliação de Facetas"
        formWebhookUrl={LEAD_WEBHOOK_URL}
      />
      <BeforeAfterEstetica />
      <BenefitsFacetas />
      <HowItWorksEstetica />
      <TestimonialsEstetica />
      <AuthorityEstetica />
      <FinalCTASection
        titlePrefix="Chegou a hora de transformar."
        titleHighlight="Seu sorriso perfeito com facetas."
        description="Marque a sua avaliação e descubra se pode fazer o tratamento com facetas dentárias."
        ctaLabel="🔘 Quero marcar a minha avaliação"
        trustIndicators={[
          { label: "Avaliação sem compromisso" },
          { label: "Design digital do sorriso" },
          { label: "Resultado natural" },
        ]}
      />
      <Footer />
    </main>
  );
};

export default Facetas;
