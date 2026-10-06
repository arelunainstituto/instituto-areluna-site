import { useState } from "react";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { useTranslation } from 'react-i18next';
import imgD1_38 from "@/assets/Clinica-AreLuna-D1-38.jpg";
import img96 from "@/assets/Instituto-Areluna-Clinicas-96.jpg";
import imgD1_3 from "@/assets/Clinica-AreLuna-D1-3.jpg";
import imgD1_28 from "@/assets/Clinica-AreLuna-D1-28.jpg";
import imgD1_44 from "@/assets/Clinica-AreLuna-D1-44.jpg";
import imgD1_2 from "@/assets/Clinica-AreLuna-D1-2.jpg";
import img38 from "@/assets/Instituto-Areluna-Clinicas-38.jpg";
import img80 from "@/assets/Instituto-Areluna-Clinicas-80.jpg";

const GallerySection = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: imgD1_38,
      alt: t('gallery.img1_alt')
    },
    {
      src: img96,
      alt: t('gallery.img2_alt')
    },
    {
      src: imgD1_3,
      alt: t('gallery.img3_alt')
    },
    {
      src: imgD1_28,
      alt: t('gallery.img4_alt')
    },
    {
      src: imgD1_44,
      alt: t('gallery.img5_alt')
    },
    {
      src: imgD1_2,
      alt: t('gallery.img6_alt')
    },
    {
      src: img38,
      alt: t('gallery.img7_alt')
    },
    {
      src: img80,
      alt: t('gallery.img8_alt')
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
            {t('gallery.title')}
          </h2>
          <p className="text-base sm:text-lg text-jet/80 dark:text-gray-700 font-medium tracking-wide max-w-2xl mx-auto px-4">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Grid uniforme com quadrados perfeitos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square group relative overflow-hidden rounded-lg bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <OptimizedImage
                className="w-full h-full object-cover cursor-pointer transition-all duration-300 group-hover:scale-110"
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                onClick={() => openModal(image.src)}
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
              <OptimizedImage
                src={selectedImage}
                alt={t('gallery.fullscreen_alt')}
                width={1200}
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