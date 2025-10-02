import Header from "@/components/Header";
import TreatmentsHeroSection from "@/components/TreatmentsHeroSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TreatmentsFAQSection from "@/components/TreatmentsFAQSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const TreatmentsPage = () => {
  return (
    <div className="min-h-screen">
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