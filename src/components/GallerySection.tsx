import { useState } from "react";
import { Section, SectionHeading, Reveal } from "@/components/site";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { useTranslation } from 'react-i18next';
import imgD1_38_480 from "@/assets/Clinica-AreLuna-D1-38-480.webp";
import imgD1_38_640 from "@/assets/Clinica-AreLuna-D1-38-640.webp";
import imgD1_38_1280 from "@/assets/Clinica-AreLuna-D1-38-1280.webp";
import img96_480 from "@/assets/Instituto-Areluna-Clinicas-96-480.webp";
import img96_640 from "@/assets/Instituto-Areluna-Clinicas-96-640.webp";
import img96_1280 from "@/assets/Instituto-Areluna-Clinicas-96-1280.webp";
import imgD1_3_480 from "@/assets/Clinica-AreLuna-D1-3-480.webp";
import imgD1_3_640 from "@/assets/Clinica-AreLuna-D1-3-640.webp";
import imgD1_3_1280 from "@/assets/Clinica-AreLuna-D1-3-1280.webp";
import imgD1_28_480 from "@/assets/Clinica-AreLuna-D1-28-480.webp";
import imgD1_28_640 from "@/assets/Clinica-AreLuna-D1-28-640.webp";
import imgD1_28_1280 from "@/assets/Clinica-AreLuna-D1-28-1280.webp";
import imgD1_44_480 from "@/assets/Clinica-AreLuna-D1-44-480.webp";
import imgD1_44_640 from "@/assets/Clinica-AreLuna-D1-44-640.webp";
import imgD1_44_1280 from "@/assets/Clinica-AreLuna-D1-44-1280.webp";
import imgD1_2_480 from "@/assets/Clinica-AreLuna-D1-2-480.webp";
import imgD1_2_640 from "@/assets/Clinica-AreLuna-D1-2-640.webp";
import imgD1_2_1280 from "@/assets/Clinica-AreLuna-D1-2-1280.webp";
import img38_480 from "@/assets/Instituto-Areluna-Clinicas-38-480.webp";
import img38_640 from "@/assets/Instituto-Areluna-Clinicas-38-640.webp";
import img38_1280 from "@/assets/Instituto-Areluna-Clinicas-38-1280.webp";
import img80_480 from "@/assets/Instituto-Areluna-Clinicas-80-480.webp";
import img80_640 from "@/assets/Instituto-Areluna-Clinicas-80-640.webp";
import img80_1280 from "@/assets/Instituto-Areluna-Clinicas-80-1280.webp";

const GallerySection = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: imgD1_38_1280,
      srcSet: `${imgD1_38_480} 480w, ${imgD1_38_640} 640w, ${imgD1_38_1280} 1280w`,
      alt: t('gallery.img1_alt')
    },
    {
      src: img96_1280,
      srcSet: `${img96_480} 480w, ${img96_640} 640w, ${img96_1280} 1280w`,
      alt: t('gallery.img2_alt')
    },
    {
      src: imgD1_3_1280,
      srcSet: `${imgD1_3_480} 480w, ${imgD1_3_640} 640w, ${imgD1_3_1280} 1280w`,
      alt: t('gallery.img3_alt')
    },
    {
      src: imgD1_28_1280,
      srcSet: `${imgD1_28_480} 480w, ${imgD1_28_640} 640w, ${imgD1_28_1280} 1280w`,
      alt: t('gallery.img4_alt')
    },
    {
      src: imgD1_44_1280,
      srcSet: `${imgD1_44_480} 480w, ${imgD1_44_640} 640w, ${imgD1_44_1280} 1280w`,
      alt: t('gallery.img5_alt')
    },
    {
      src: imgD1_2_1280,
      srcSet: `${imgD1_2_480} 480w, ${imgD1_2_640} 640w, ${imgD1_2_1280} 1280w`,
      alt: t('gallery.img6_alt')
    },
    {
      src: img38_1280,
      srcSet: `${img38_480} 480w, ${img38_640} 640w, ${img38_1280} 1280w`,
      alt: t('gallery.img7_alt')
    },
    {
      src: img80_1280,
      srcSet: `${img80_480} 480w, ${img80_640} 640w, ${img80_1280} 1280w`,
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
    <Section tone="light">
      <SectionHeading title={t('gallery.title')} description={t('gallery.subtitle')} />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {images.map((image, index) => (
          <Reveal key={index} delay={(index % 4) * 80}>
            <button
              type="button"
              onClick={() => openModal(image.src)}
              aria-label={image.alt}
              className="group relative block aspect-square w-full overflow-hidden rounded-2xl border border-jet/10 bg-gray-100 transition-shadow duration-300 hover:shadow-elegant focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf focus-visible:ring-offset-2"
            >
              <OptimizedImage
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={image.src}
                srcSet={image.srcSet}
                sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
                alt={image.alt}
                width={400}
                height={400}
              />
              <span className="absolute inset-0 bg-jet-fixed/0 transition-colors duration-300 group-hover:bg-jet-fixed/20" />
            </button>
          </Reveal>
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
                aria-label="Fechar"
                className="absolute -top-4 -right-4 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-3xl text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf"
              >
                ×
              </button>
            </div>
          </div>
        )}
    </Section>
  );
};

export default GallerySection;