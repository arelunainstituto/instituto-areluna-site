import { useState } from "react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1759411823/Clinica-AreLuna-D1-38_dmbtgg.jpg",
      alt: "Consultório dentário moderno"
    },
    {
      src: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1759411825/Instituto-Areluna-Clinicas-96_zqze6a.jpg",
      alt: "Espaço moderno da clínica"
    },
    {
      src: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1759411826/Clinica-AreLuna-D1-3_inhjk7.jpg",
      alt: "Equipamentos de última geração"
    },
    {
      src: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1759411827/Clinica-AreLuna-D1-28_lhs3vb.jpg",
      alt: "Ambiente de tratamento"
    },
    {
      src: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1759411831/Clinica-AreLuna-D1-44_ebooan.jpg",
      alt: "Sala de procedimentos"
    },
    {
      src: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1759411838/Clinica-AreLuna-D1-2_dbgdvb.jpg",
      alt: "Recepção da clínica Areluna"
    },
    {
      src: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1759411838/Instituto-Areluna-Clinicas-38_kw4afw.jpg",
      alt: "Instalações modernas"
    },
    {
      src: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1759412566/Instituto-Areluna-Clinicas-80_1_1_txumyu.jpg",
      alt: "Tecnologia avançada"
    }
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gradient-to-br dark:from-gray-900/10 dark:to-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-vivant text-jet dark:text-gray-800 mb-4">
            Clínica
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-700 font-medium tracking-wide max-w-2xl mx-auto px-4">
            Conheça nossos espaços modernos e equipamentos de última geração
          </p>
        </div>
        
        {/* Grid uniforme com quadrados perfeitos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square group relative overflow-hidden rounded-lg bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img 
                className="w-full h-full object-cover cursor-pointer transition-all duration-300 group-hover:scale-110" 
                src={image.src} 
                alt={image.alt}
                onClick={() => openModal(image.src)}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para visualizar imagem em tela cheia */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 animate-fade-in p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-7xl max-h-full">
              <img 
                src={selectedImage} 
                alt="Imagem da clínica em tela cheia" 
                className="max-w-full max-h-full object-contain rounded-lg animate-scale-in shadow-2xl"
              />
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
                className="absolute -top-4 -right-4 text-white text-3xl bg-black bg-opacity-70 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-90 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;