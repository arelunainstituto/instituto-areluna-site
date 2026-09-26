import SEO from "@/lp/components/SEO";
import LPTracking from "@/lp/components/LPTracking";
import Header from "@/lp/components/Header";
import HeroSection from "@/lp/components/sections/HeroSection";
import FinalCTASection from "@/lp/components/sections/FinalCTASection";
import BeforeAfter from "@/lp/components/BeforeAfter";
import BenefitsImplantes from "@/lp/components/BenefitsImplantes";
import HowItWorks from "@/lp/components/HowItWorks";
import Authority from "@/lp/components/Authority";
import Footer from "@/lp/components/Footer";
import { CLINIC_IMAGE, LEAD_WEBHOOK_URL } from "@/lp/config/landingPages";
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildServiceSchema,
  organizationSchema,
} from "@/lp/lib/schema";

const faqImplantes = buildFAQSchema([
  {
    question: "Quando é colocada a prótese fixa no All-on-Four?",
    answer:
      "Em casos selecionados, após avaliação clínica e exames, pode ser colocada uma prótese fixa provisória no próprio dia ou no dia seguinte.",
  },
  {
    question: "É preciso fazer enxerto ósseo?",
    answer:
      "Depende do caso. A técnica All-on-Four foi concebida para aproveitar o osso disponível; a necessidade de enxerto é avaliada na consulta, com exames de imagem.",
  },
  {
    question: "Quanto custam os implantes dentários no Instituto Areluna?",
    answer:
      "O orçamento é elaborado após a consulta de avaliação. A primeira consulta de avaliação não tem custo; exames de imagem, se forem necessários, são orçamentados à parte.",
  },
  {
    question: "Os implantes dentários doem?",
    answer:
      "A cirurgia é realizada sob anestesia local. No pós-operatório pode haver desconforto, que é controlado com a medicação indicada pelo médico dentista.",
  },
]);

const Implantes = () => {
  return (
    <main id="main-content" tabIndex={-1} className="lp-scope">
      <SEO
        title="Implantes dentários All-on-Four no Porto | Instituto Areluna"
        description="Implantes dentários com a técnica All-on-Four no Porto. A indicação depende de consulta de avaliação e diagnóstico individual. Marque a sua consulta de avaliação."
        keywords="implantes dentários Porto, all-on-four Porto, prótese fixa implantes, reabilitação oral Porto"
        path="/implantes-dentarios-porto"
        jsonLd={[
          organizationSchema,
          buildServiceSchema({
            name: "Implantes Dentários All-on-Four",
            description:
              "Reabilitação oral com 4 implantes por arcada. Em casos selecionados, após avaliação clínica e exames, pode ser colocada uma prótese fixa provisória no próprio dia ou no dia seguinte.",
            path: "/implantes-dentarios-porto",
            serviceType: "Implantologia Dentária",
          }),
          buildBreadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Implantes Dentários", path: "/implantes" },
          ]),
          faqImplantes,
        ]}
      />
      <LPTracking />
      <Header />
      <HeroSection
        overlayImage={CLINIC_IMAGE}
        titleTop="Implantes dentários All-on-Four"
        titleHighlight="no Porto"
        subtitle="Em casos selecionados, após avaliação clínica e exames, pode ser colocada uma prótese fixa provisória no próprio dia ou no dia seguinte."
        description="Reabilitação oral com 4 implantes por arcada, para quem tem falta de dentes ou usa prótese removível. A indicação é confirmada na consulta de avaliação."
        ctaLabel="🔘 Quero marcar a minha avaliação"
        formInteresse="Implantes Dentários"
        formDescription="Descubra se é candidato ao All-on-Four"
        formTitle="Avaliação de Implantes"
        formWebhookUrl={LEAD_WEBHOOK_URL}
      />
      <BeforeAfter />
      <BenefitsImplantes />
      <HowItWorks />
      <Authority />
      <FinalCTASection
        titlePrefix="Marque a sua consulta de avaliação."
        titleHighlight="Implantes dentários All-on-Four no Porto."
        description="Na consulta avaliamos o seu caso, explicamos as opções indicadas, os riscos e os custos."
        ctaLabel="🔘 Quero marcar a minha avaliação"
        trustIndicators={[
          { label: "Primeira consulta de avaliação sem custo" },
          { label: "Atendimento personalizado" },
          { label: "Acompanhamento contínuo" },
        ]}
      />
      <Footer />
    </main>
  );
};

export default Implantes;
