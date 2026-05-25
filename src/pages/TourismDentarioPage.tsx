import Header from "@/components/Header";
import TourismDentarioHeroSection from "@/components/TourismDentarioHeroSection";
import TourismDentarioSection from "@/components/TourismDentarioSection";
import CheckupIntegradoSection from "@/components/CheckupIntegradoSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import StatsSection from "@/components/StatsSection";
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
      {"@type": "ListItem","position": 2,"name": "Turismo Dentário","item": "https://www.institutoareluna.pt/turismo-dentario"}
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Turismo Dentário em Portugal",
    "description": "Programa de tratamento dentário de 3 dias no Porto para pacientes internacionais, combinando medicina dentária avançada com turismo pela cidade do Porto.",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "bodyLocation": "Mouth",
    "preparation": "Avaliação clínica e planeamento personalizado por videoconferência prévia à viagem.",
    "howPerformed": "Programa intensivo de 3 dias com avaliação completa, tratamentos dentários e estéticos, e acompanhamento turístico na cidade do Porto.",
    "followup": "Relatório clínico completo enviado ao médico de referência do paciente.",
    "performedBy": {"@type": "Dentist","name": "Instituto AreLuna","url": "https://www.institutoareluna.pt/"}
  }
];

const TourismDentarioPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Turismo Dentário em Portugal — Porto | Instituto AreLuna"
        description="Tratamentos dentários de alta qualidade em Portugal para brasileiros e europeus. Programa de 3 dias no Porto: medicina dentária, estética facial e turismo. Instituto AreLuna."
        canonical="https://www.institutoareluna.pt/turismo-dentario"
        jsonLd={schemas}
      />
      <Header />
      <TourismDentarioHeroSection />
      <TourismDentarioSection />
      <CheckupIntegradoSection />
      <StatsSection />
      <BeforeAfterSection />
      <TourismDentarioFAQSection />
      <ContactFormSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default TourismDentarioPage;