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

const TourismDentarioPage = () => {
  return (
    <div className="min-h-screen">
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