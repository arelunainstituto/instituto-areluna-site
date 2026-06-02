import SEO from "@/lp/components/SEO";
import LPTracking from "@/lp/components/LPTracking";
import Header from "@/lp/components/Header";
import HeroSection from "@/lp/components/sections/HeroSection";
import FinalCTASection from "@/lp/components/sections/FinalCTASection";
import BeforeAfter from "@/lp/components/BeforeAfter";
import BenefitsImplantes from "@/lp/components/BenefitsImplantes";
import HowItWorks from "@/lp/components/HowItWorks";
import Testimonials from "@/lp/components/Testimonials";
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
    question: "Em quanto tempo recupero o sorriso com All-on-Four?",
    answer:
      "Com a técnica All-on-Four é possível sair da clínica com a prótese fixa colocada em 24 horas após a cirurgia, devolvendo de imediato a função mastigatória e a estética do sorriso.",
  },
  {
    question: "É preciso fazer enxerto ósseo?",
    answer:
      "Na maioria dos casos não. A técnica All-on-Four foi concebida precisamente para tirar partido do osso disponível, evitando enxertos e reduzindo o tempo total de tratamento.",
  },
  {
    question: "Quanto custam os implantes dentários no Instituto Areluna?",
    answer:
      "O orçamento é sempre personalizado e elaborado após avaliação clínica gratuita, com possibilidade de planos de pagamento adaptados a cada paciente.",
  },
  {
    question: "Os implantes dentários doem?",
    answer:
      "A cirurgia é realizada sob anestesia local e protocolos de conforto, sendo um procedimento bem tolerado. O pós-operatório é, em regra, ligeiro e controlado com medicação habitual.",
  },
]);

const Implantes = () => {
  return (
    <main id="main-content" tabIndex={-1} className="lp-scope">
      <SEO
        title="Implantes Dentários All-on-Four em 24h | Porto"
        description="Recupere o seu sorriso em 24 horas com a técnica All-on-Four no Porto. Apenas 4 implantes por arcada, sem enxertos. Marque a sua avaliação gratuita."
        keywords="implantes dentários Porto, all-on-four Porto, implantes 24 horas, prótese fixa implantes, reabilitação oral Porto"
        path="/implantes"
        jsonLd={[
          organizationSchema,
          buildServiceSchema({
            name: "Implantes Dentários All-on-Four",
            description:
              "Reabilitação oral completa com 4 implantes por arcada e prótese fixa entregue em 24 horas, sem necessidade de enxertos ósseos.",
            path: "/implantes",
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
        titleTop="Volte a Sorrir"
        titleHighlight="em até 24 Horas"
        subtitle="Com a técnica All-on-Four, o seu sorriso fixo, bonito e funcional está a um dia de distância."
        description="Reabilitação oral completa com apenas 4 implantes — sem enxertos e com estética natural. Ideal para quem quer deixar a prótese móvel no passado."
        ctaLabel="🔘 Quero marcar a minha avaliação"
        formInteresse="Implantes Dentários"
        formDescription="Descubra se é candidato ao All-on-Four"
        formTitle="Avaliação de Implantes"
        formWebhookUrl={LEAD_WEBHOOK_URL}
      />
      <BeforeAfter />
      <BenefitsImplantes />
      <HowItWorks />
      <Testimonials />
      <Authority />
      <FinalCTASection
        titlePrefix="Chegou a hora de mudar."
        titleHighlight="O seu sorriso pode estar pronto amanhã."
        description="Marque a sua avaliação e descubra se pode fazer o tratamento All-on-Four com entrega em 24h."
        ctaLabel="🔘 Quero marcar a minha avaliação"
        trustIndicators={[
          { label: "Avaliação sem compromisso" },
          { label: "Atendimento personalizado" },
          { label: "Resultados garantidos" },
        ]}
      />
      <Footer />
    </main>
  );
};

export default Implantes;
