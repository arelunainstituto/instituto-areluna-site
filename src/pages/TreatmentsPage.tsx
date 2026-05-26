import Header from "@/components/Header";
import TreatmentsHeroSection from "@/components/TreatmentsHeroSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TreatmentsFAQSection from "@/components/TreatmentsFAQSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem","position": 1,"name": "Instituto AreLuna","item": "https://www.institutoareluna.pt/"},
    {"@type": "ListItem","position": 2,"name": "Tratamentos","item": "https://www.institutoareluna.pt/tratamentos"}
  ]
};

const TreatmentsPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Tratamentos Dentários e Estéticos no Porto | Instituto AreLuna"
        description="Ortodontia, implantes, facetas, harmonização orofacial e transplante capilar no Porto. Tecnologia avançada e equipa multidisciplinar no Instituto AreLuna. Agende a sua consulta."
        canonical="https://www.institutoareluna.pt/tratamentos"
        jsonLd={breadcrumbSchema}
      />
      <Header />
      <TreatmentsHeroSection />
      <TreatmentsSection />
      <BeforeAfterSection />
      <TreatmentsFAQSection />
      <ContactFormSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default TreatmentsPage;