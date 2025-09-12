import { lazy, Suspense } from 'react';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

// Lazy load non-critical components
const AboutSection = lazy(() => import("@/components/AboutSection"));
const HowItWorksSection = lazy(() => import("@/components/HowItWorksSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const WhyChooseSection = lazy(() => import("@/components/WhyChooseSection"));
const ContactForm = lazy(() => import("@/components/ContactForm"));

// Loading component for suspense fallback
const SectionLoading = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <LoadingSpinner className="h-12 w-12" />
  </div>
);

const Index = () => {
  return (
    <div className="scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        
        <Suspense fallback={<SectionLoading />}>
          <AboutSection />
          <HowItWorksSection />
          <ServicesSection />
          <ProcessSection />
          <WhyChooseSection />
          <ContactForm />
        </Suspense>
      </main>
      
      {/* Smooth scroll anchor for navigation */}
      <div id="main-content" className="sr-only" aria-hidden="true" />
    </div>
  );
};

export default Index;
