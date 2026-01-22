import Header from "@/components/Header";
import ContatoHeroSection from "@/components/ContatoHeroSection";

import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const ContatoPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ContatoHeroSection />

      <ContactFormSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ContatoPage;