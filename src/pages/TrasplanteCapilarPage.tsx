import Header from "@/components/Header";
import TrasplanteCapilarHeroSection from "@/components/TrasplanteCapilarHeroSection";
import TrasplanteCapilarSection from "@/components/TrasplanteCapilarSection";
import TrasplanteCapilarCasesSection from "@/components/TrasplanteCapilarCasesSection";
import TrasplanteCapilarFAQSection from "@/components/TrasplanteCapilarFAQSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const TrasplanteCapilarPage = () => {
  return (
    <div className="min-h-screen">
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