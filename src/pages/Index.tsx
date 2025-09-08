import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="font-inter">
      <Header />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <ServicesSection />
      <WhyChooseSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
