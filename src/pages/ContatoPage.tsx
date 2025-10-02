import Header from "@/components/Header";
import ContatoHeroSection from "@/components/ContatoHeroSection";
import ContatoSection from "@/components/ContatoSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const ContatoPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ContatoHeroSection />
      <ContatoSection />
      <ContactFormSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ContatoPage;