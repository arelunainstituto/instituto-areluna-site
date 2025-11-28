const doctorMale = "https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954116/instituto-areluna/doctor-male.jpg";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-jet">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left side - Content */}
          <div className="flex items-center justify-center p-12 lg:p-20">
            <div className="max-w-lg space-y-8">
              <div className="space-y-4">
                <h3 className="text-sm font-vivant-light tracking-widest uppercase text-battleship">
                  SOBRE NÓS
                </h3>
                <h2 className="text-4xl lg:text-5xl font-vivant-light text-pure-white leading-tight">
                  EXCELÊNCIA EM<br />
                  MEDICINA ESTÉTICA
                </h2>
              </div>
              
              <p className="text-lg text-battleship leading-relaxed font-vivant">
                A Areluna nasceu da paixão por realçar a beleza natural de cada pessoa, 
                combinando técnicas avançadas de medicina dentária e estética com um 
                atendimento personalizado e humanizado.
              </p>
              
              <div className="pt-4">
                <Button variant="outline-gold" size="lg" className="font-vivant-light tracking-wide">
                  NOSSA HISTÓRIA
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="relative">
            <img 
              src={doctorMale} 
              alt="Equipe Areluna"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-jet/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;