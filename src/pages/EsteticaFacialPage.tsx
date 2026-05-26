import Header from "@/components/Header";
import EsteticaFacialHeroSection from "@/components/EsteticaFacialHeroSection";
import EsteticaFacialSection from "@/components/EsteticaFacialSection";
import EsteticaFacialCasesSection from "@/components/EsteticaFacialCasesSection";
import EsteticaFacialFAQSection from "@/components/EsteticaFacialFAQSection";
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
      {"@type": "ListItem","position": 2,"name": "Estética Facial","item": "https://www.institutoareluna.pt/estetica-facial"}
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Harmonização Orofacial",
    "alternateName": ["Harmonização Facial","Estética Facial Avançada","Harmonização Orofacial no Porto"],
    "description": "Harmonização orofacial com toxina botulínica, ácido hialurónico, bioestimuladores e fios de sustentação no Porto. Resultados naturais e personalizados pela equipa especializada do Instituto AreLuna.",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "bodyLocation": "Face",
    "preparation": "Avaliação facial completa e planeamento digital do resultado antes de qualquer procedimento.",
    "howPerformed": "Protocolo personalizado combinando técnicas minimamente invasivas: toxina botulínica para expressões dinâmicas, ácido hialurónico para volume e contorno, e bioestimuladores para regeneração da pele.",
    "followup": "Reavaliação após 2-4 semanas. Manutenção recomendada a cada 6-12 meses.",
    "performedBy": {"@type": "Dentist","name": "Instituto AreLuna","url": "https://www.institutoareluna.pt/"}
  }
];

const EsteticaFacialPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Estética Facial e Harmonização Orofacial no Porto | Instituto AreLuna"
        description="Harmonização orofacial, toxina botulínica e preenchimento no Porto. Estética facial com padrão europeu e resultados naturais. Equipa especializada. Instituto AreLuna — agende a sua avaliação."
        canonical="https://www.institutoareluna.pt/estetica-facial"
        jsonLd={schemas}
      />
      <Header />
      <EsteticaFacialHeroSection />
      <EsteticaFacialSection />
      <EsteticaFacialCasesSection />
      <EsteticaFacialFAQSection />
      <ContactFormSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default EsteticaFacialPage;