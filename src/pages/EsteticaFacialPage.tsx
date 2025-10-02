import Header from "@/components/Header";
import EsteticaFacialHeroSection from "@/components/EsteticaFacialHeroSection";
import EsteticaFacialSection from "@/components/EsteticaFacialSection";
import EsteticaFacialCasesSection from "@/components/EsteticaFacialCasesSection";
import EsteticaFacialFAQSection from "@/components/EsteticaFacialFAQSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const EsteticaFacialPage = () => {
  return (
    <div className="min-h-screen">
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