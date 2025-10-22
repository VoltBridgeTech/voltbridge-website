import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ICORegistration = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navigation Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-[#0D76FA]/80">
          <li className="flex items-center">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
          </li>
          <li className="text-[#0D76FA]/50">/</li>
          <li className="text-white font-medium">ICO Registration</li>
        </ol>
      </nav>

      {/* Hero tarjeta (sin imagen), coherente con el resto del sitio */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[32px] border border-white/12 bg-[#07070D]/88 px-8 py-12 text-center shadow-[0_40px_130px_-80px_rgba(0,0,0,0.85)] backdrop-blur-xl mb-12"
      >
        <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(60% 60% at 20% 15%, rgba(13,118,250,0.18), transparent 70%), radial-gradient(70% 70% at 80% 85%, rgba(177,0,205,0.12), transparent 75%)' }} />
        <div className="relative mx-auto max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">ICO Registration</h1>
          <p className="text-[#0D76FA]">Information about our ICO registration</p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="bg-vb-dark-3/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-vb-electric-1/20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D76FA] mb-4">
              ICO Registration Document
            </h2>
            <p className="text-lg text-vb-gray-100 max-w-3xl mx-auto">
              Download our official ICO registration document to verify our registration with the Information Commissioner's Office (ICO).
            </p>
          </div>
          
          <div className="bg-vb-dark-2/50 border border-vb-electric-1/20 rounded-xl p-6 md:p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-vb-electric-1/10 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0D76FA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              ICO Registration Certificate
            </h3>
            <p className="text-vb-gray-300 mb-6">
              Registration Number: ZB968646
            </p>
            <a 
              href="/documents/ICO REGISTRATION CERTIFICATE.pdf" 
              download="VoltBridge_ICO_Registration_Certificate.pdf"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-vb-navy bg-vb-electric-1 hover:bg-vb-electric-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vb-electric-1"
            >
              <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download PDF (1.2MB)
            </a>
            <p className="text-sm text-vb-gray-400 mt-4">
              Last Updated: September 10th 2025
            </p>
          </div>
          
          <div className="mt-12 text-center text-vb-gray-300">
            <p>
              Having trouble downloading? Email us at{' '}
              <a href="mailto:compliance@voltbridge.co.uk" className="text-[#0D76FA] hover:underline">
                compliance@voltbridge.co.uk
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ICORegistration;
