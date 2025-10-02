import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import CorpoClinicoSection from "@/components/CorpoClinicoSection";
import StatsSection from "@/components/StatsSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import CheckupIntegradoSection from "@/components/CheckupIntegradoSection";
import TourismDentarioSection from "@/components/TourismDentarioSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <GallerySection />
      <CorpoClinicoSection />
      <StatsSection />
      <TreatmentsSection />
      <CheckupIntegradoSection />
      <TourismDentarioSection />
      <BeforeAfterSection />
      <ContactFormSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
