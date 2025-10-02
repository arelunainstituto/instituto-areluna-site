import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="min-h-screen bg-pure-white">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left side - Content */}
          <div className="flex items-center justify-center p-12 lg:p-20">
            <div className="max-w-lg space-y-8">
              <div className="space-y-4">
                <h3 className="text-sm font-vivant-light tracking-widest uppercase text-battleship">
                  CONTATO
                </h3>
                <h2 className="text-4xl lg:text-5xl font-vivant-light text-jet leading-tight">
                  AGENDE SUA<br />
                  CONSULTA
                </h2>
              </div>
              
              <p className="text-lg text-battleship leading-relaxed font-light">
                Estamos prontos para ajudá-lo a alcançar a beleza natural que sempre desejou. 
                Entre em contato e descubra como podemos transformar seu sorriso.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-1 h-1 bg-gold-leaf rounded-full"></div>
                  <span className="text-jet">+351 21 123 4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-1 h-1 bg-gold-leaf rounded-full"></div>
                  <span className="text-jet">info@areluna.pt</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-1 h-1 bg-gold-leaf rounded-full"></div>
                  <span className="text-jet">Rua das Flores, 123 - Lisboa</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Button variant="outline-gold" size="lg" className="font-light tracking-wide">
                  MARCAR CONSULTA
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="relative">
            <div className="w-full h-full bg-gradient-to-br from-gold-leaf/20 to-battleship/20 flex items-center justify-center">
              <div className="text-center text-battleship/60">
                <p className="text-lg font-vivant-light">Imagem de Contato</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-jet/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;