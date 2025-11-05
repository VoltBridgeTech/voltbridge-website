import { motion, Variants } from "framer-motion";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Clock, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { getMotionVariants, prefersReducedMotion } from "@/lib/animations";

const Footer = () => {
  console.log('Footer rendered');
  const currentYear = new Date().getFullYear();
  
  // Animation variants with TypeScript types and reduced motion support
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100
      }
    }
  };
  
  // Get motion variants that respect user preferences
  const container = getMotionVariants(containerVariants);
  const item = getMotionVariants(itemVariants);

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Insights', href: '/insights' },
        { name: 'About Us', href: '/about' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Complaints Policy', href: '/complaints-policy' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'ICO Registration', href: '/ico-registration' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { 
          name: '124 City Road, City Road, London, England, EC1V 2NX', 
          icon: <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />,
          href: 'https://maps.google.com/?q=124+City+Road,+City+Road,+London,+England,+EC1V+2NX' 
        },
        { 
          name: 'support@voltbridge.co.uk', 
          icon: <Mail className="w-4 h-4 mr-2 flex-shrink-0" />,
          href: 'mailto:support@voltbridge.co.uk' 
        },
        { 
          name: '+44 2046 342585', 
          icon: <Phone className="w-4 h-4 mr-2 flex-shrink-0" />,
          href: 'tel:+442046342585' 
        },
      ],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-vb-dark-1 text-white pt-20 pb-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzB2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRIMHYyaDR2NEg2VjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>
      
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vb-electric-1 to-vb-electric-2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={container}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div 
              key={section.title} 
              variants={item}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('http') || link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? (
                      <a 
                        href={link.href} 
                        onClick={scrollToTop}
                        className={`flex items-start text-gray-400 hover:text-vb-electric-1 transition-colors ${
                          link.icon ? 'group' : ''
                        }`}
                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                      >
                        {link.icon && (
                          <span className="mr-2 mt-0.5">
                            {link.icon}
                          </span>
                        )}
                        <span className={link.icon ? 'group-hover:translate-x-1 transition-transform' : ''}>
                          {link.name}
                        </span>
                      </a>
                    ) : (
                      <Link 
                        to={link.href}
                        onClick={scrollToTop}
                        className={`flex items-start text-gray-400 hover:text-vb-electric-1 transition-colors ${
                          link.icon ? 'group' : ''
                        }`}
                      >
                        {link.icon && (
                          <span className="mr-2 mt-0.5">
                            {link.icon}
                          </span>
                        )}
                        <span className={link.icon ? 'group-hover:translate-x-1 transition-transform' : ''}>
                          {link.name}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </motion.div>

        <motion.hr 
          className="border-gray-800 my-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ...(prefersReducedMotion() ? { duration: 0.001 } : {})
          }}
        />

        {/* Bottom Footer */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ...(prefersReducedMotion() ? { duration: 0.001 } : {})
          }}
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0 text-center md:text-left">
            &copy; {currentYear} VoltBridge UK LTD. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a 
              href="/privacy-policy" 
              className="text-gray-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">•</span>
            <a 
              href="/terms-of-service" 
              className="text-gray-500 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <span className="text-gray-600">•</span>
            <a 
              href="/cookies-policy" 
              className="text-gray-500 hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-vb-dark-3/80 hover:bg-vb-dark-2 text-white p-3 rounded-full shadow-lg backdrop-blur-sm border border-white/10 hover:border-vb-electric-1/30 transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;