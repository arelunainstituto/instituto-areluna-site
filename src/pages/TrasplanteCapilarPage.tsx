import Header from "@/components/Header";
import TrasplanteCapilarHeroSection from "@/components/TrasplanteCapilarHeroSection";
import TrasplanteCapilarSection from "@/components/TrasplanteCapilarSection";
import TrasplanteCapilarCasesSection from "@/components/TrasplanteCapilarCasesSection";
import TrasplanteCapilarFAQSection from "@/components/TrasplanteCapilarFAQSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem","position": 1,"name": "Instituto AreLuna","item": "https://www.institutoareluna.pt/"},
      {"@type": "ListItem","position": 2,"name": "Transplante Capilar","item": "https://www.institutoareluna.pt/transplante-capilar"}
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Transplante Capilar FUE",
    "alternateName": ["Transplante de Cabelo","Hair Transplant FUE","Transplante Capilar no Porto"],
    "description": "Transplante capilar pela técnica FUE (Follicular Unit Extraction) — sem cortes visíveis, resultados naturais e permanentes. Realizado pelo Dr. Marcos Kawasaki no Instituto AreLuna, Porto.",
    "procedureType": "https://schema.org/SurgicalProcedure",
    "bodyLocation": "Scalp",
    "preparation": "Avaliação com dermatoscopia digital e análise de densidade capilar. Suspensão de anticoagulantes conforme indicação médica.",
    "howPerformed": "Extração de unidades foliculares individualmente da área doadora (nuca) com micromotor FUE, seguida de implantação na área receptora com ângulo e direção naturais.",
    "followup": "Protocolo de cuidados pós-operatórios durante 14 dias. Acompanhamento ao 1º, 3º, 6º e 12º mês.",
    "performedBy": {
      "@type": "Person",
      "name": "Dr. Marcos Kawasaki",
      "jobTitle": "Médico especialista em Transplante Capilar e Dermatologia",
      "worksFor": {"@type": "Dentist","name": "Instituto AreLuna"}
    }
  }
];

const TrasplanteCapilarPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Transplante Capilar no Porto — Técnica FUE | Instituto AreLuna"
        description="Transplante capilar FUE no Porto com resultados naturais e permanentes. Dr. Marcos Kawasaki — especialista em Dermatologia com 17+ anos. Avaliação com dermatoscopia digital. Instituto AreLuna."
        canonical="https://www.institutoareluna.pt/transplante-capilar"
        jsonLd={schemas}
      />
      <Header />
      <TrasplanteCapilarHeroSection />
      <TrasplanteCapilarSection />
      <TrasplanteCapilarCasesSection />
      <TrasplanteCapilarFAQSection />
      <ContactFormSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default TrasplanteCapilarPage;