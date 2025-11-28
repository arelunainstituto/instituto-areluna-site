import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

const GallerySection = lazy(() => import("@/components/GallerySection"));
const CorpoClinicoSection = lazy(() => import("@/components/CorpoClinicoSection"));
const StatsSection = lazy(() => import("@/components/StatsSection"));
const TreatmentsSection = lazy(() => import("@/components/TreatmentsSection"));
const CheckupIntegradoSection = lazy(() => import("@/components/CheckupIntegradoSection"));
const TourismDentarioSection = lazy(() => import("@/components/TourismDentarioSection"));
const BeforeAfterSection = lazy(() => import("@/components/BeforeAfterSection"));
const ContactFormSection = lazy(() => import("@/components/ContactFormSection"));

const SectionSkeleton = () => (
  <div
    className="mx-auto my-16 h-64 w-11/12 max-w-6xl animate-pulse rounded-3xl bg-gray-200/70 dark:bg-gray-800/40"
    aria-hidden="true"
  />
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <Suspense fallback={<SectionSkeleton />}>
        <GallerySection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CorpoClinicoSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TreatmentsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CheckupIntegradoSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TourismDentarioSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <BeforeAfterSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ContactFormSection />
      </Suspense>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
