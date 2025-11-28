import { Button } from "@/components/ui/button";
import { getOptimizedImageUrl } from "@/lib/image-optimizer";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('${getOptimizedImageUrl('https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954598/instituto-areluna/97a1febf-3c27-4a63-a583-b2522013f3f4.jpg', 1920)}')`
      }}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.70)' }}
      ></div>

      <div
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
        style={{ color: '#FFFFFF' }}
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-vivant-skinny font-thin mb-6 leading-tight tracking-wider" style={{
          fontWeight: 200
        }}>
          O principal destino para medicina dentária<br />e estética avançada em Portugal
        </h1>

        <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 font-vivant opacity-90 max-w-2xl mx-auto">
          Transforme seu sorriso com os melhores especialistas<br />e tecnologia de ponta.
        </p>

        <div className="flex justify-center">
          <Button variant="outline-gold" size="lg" className="px-6 sm:px-8 py-3 sm:py-4 text-sm tracking-wider font-vivant-light min-h-[48px]">
            ENCONTRE O SEU PROCEDIMENTO
          </Button>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;