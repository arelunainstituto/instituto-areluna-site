import Header from "@/components/Header";
import TourismDentarioHeroSection from "@/components/TourismDentarioHeroSection";
import TourismDentarioSection from "@/components/TourismDentarioSection";
import CheckupIntegradoSection from "@/components/CheckupIntegradoSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TourismDentarioFAQSection from "@/components/TourismDentarioFAQSection";
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
      {"@type": "ListItem","position": 2,"name": "Pacientes internacionais","item": "https://www.institutoareluna.pt/turismo-dentario"}
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Acompanhamento de pacientes que vivem fora de Portugal",
    "description": "Acompanhamento de pacientes que vivem fora de Portugal: avaliação presencial no Porto, plano de tratamento escrito com o número de deslocações previsto e preços iguais para todos os pacientes.",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "bodyLocation": "Mouth",
    "preparation": "Consulta de avaliação presencial e exames, quando necessários.",
    "howPerformed": "Plano de tratamento escrito, com o número de deslocações previsto, definido após a avaliação presencial.",
    "followup": "Relatório clínico entregue ao paciente, que o pode partilhar com o seu médico dentista no país onde vive.",
    "performedBy": {"@type": "Dentist","name": "Instituto AreLuna","url": "https://www.institutoareluna.pt/"}
  }
];

const TourismDentarioPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Pacientes que vivem fora de Portugal — Porto | Instituto AreLuna"
        description="Acompanhamento de pacientes que vivem fora de Portugal: avaliação presencial no Porto, plano escrito com o número de deslocações e preços iguais para todos. Instituto AreLuna."
        canonical="https://www.institutoareluna.pt/turismo-dentario"
        jsonLd={schemas}
      />
      <Header />
      <TourismDentarioHeroSection />
      <TourismDentarioSection />
      <CheckupIntegradoSection />
      <BeforeAfterSection />
      <TourismDentarioFAQSection />
      <ContactFormSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default TourismDentarioPage;