import { motion } from 'framer-motion';
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-b from-vb-dark-1 to-vb-dark-2">
      <div className="w-full max-w-2xl mx-4 sm:mx-6 lg:mx-auto">
        <div id="quote-form" className="bg-vb-dark-2/90 backdrop-blur-sm rounded-2xl shadow-xl border border-vb-electric-1/10 overflow-hidden">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
