import { motion } from 'framer-motion';
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-vb-dark-1 to-vb-dark-2">
      {/* Sección del Formulario */}
      <div className="py-12">
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="quote-form">
            <ContactForm />
          </div>
        </div>
      </div>
      
      {/* Sección Energy Ombudsman */}
      <div className="w-full py-8 bg-vb-dark-2/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <img 
              src="/Energy-Ombudsman-logo.png" 
              alt="Energy Ombudsman" 
              className="h-16 w-auto object-contain"
            />
            <p className="text-lg md:text-xl text-white leading-relaxed text-center md:text-left">
              VoltBridge Ltd is proudly registered with the Energy Ombudsman, ensuring trust, transparency, and customer protection
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
