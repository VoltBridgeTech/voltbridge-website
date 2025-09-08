import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-energy.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/90 via-brand-navy/70 to-primary/80" />
      
      {/* Content */}
      <div className="relative z-10 section-container text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Smarter Energy for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Homes and Businesses
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Compare deals. Switch providers. Start saving.
          </p>
          
          <Button 
            onClick={scrollToForm}
            className="btn-hero text-xl px-12 py-6"
          >
            Get My Free Quote
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;