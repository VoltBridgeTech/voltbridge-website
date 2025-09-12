import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);

  const moreItems = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Compliance Policy', href: '/compliance-policy' },
    { name: 'ICO Registration', href: '/ico-registration' },
  ];

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { 
      name: 'More', 
      href: '#',
      items: moreItems
    },
    { name: 'Blog', href: '/blog', className: 'md:hidden' },
  ];
  
  const navigate = useNavigate();

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-vb-navy/95 shadow-glow-md backdrop-blur-md border-b border-vb-electric-1/20' 
          : 'py-4 bg-gradient-to-b from-vb-navy/95 to-transparent backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/logo_sinfondo.png" 
                alt="VoltBridge Logo" 
                className={`transition-all duration-300 ${
                  scrolled ? 'h-16' : 'h-20'
                } w-auto drop-shadow-glow`} 
              />
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 relative">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.items ? (
                  <button
                    className={`px-4 py-2 text-sm font-medium text-white/90 hover:text-vb-electric-1 transition-colors duration-200 flex items-center ${
                      link.items ? 'pr-6' : ''
                    }`}
                    onClick={() => setIsMoreOpen(!isMoreOpen)}
                  >
                    {link.name}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={`px-4 py-2 text-sm font-medium text-white/90 hover:text-vb-electric-1 transition-colors duration-200 flex items-center ${
                      link.className || ''
                    }`}
                    onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
                {link.items && isMoreOpen && (
                  <div className="absolute left-0 mt-2 w-64 rounded-lg shadow-lg bg-vb-navy/95 backdrop-blur-md border border-vb-electric-1/20 overflow-hidden z-50">
                    {link.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-3 text-sm text-white/90 hover:bg-vb-electric-1/10 hover:text-vb-electric-1 transition-colors"
                        onClick={() => {
                          setIsMoreOpen(false);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button 
              onClick={scrollToForm}
              className="ml-4 bg-gradient-to-r from-vb-electric-1 to-vb-electric-2 hover:from-vb-electric-2 hover:to-vb-electric-1 text-vb-navy font-semibold shadow-lg shadow-vb-electric-1/20 hover:shadow-vb-electric-1/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get Free Quote
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button 
              onClick={scrollToForm}
              className="mr-2 bg-gradient-to-r from-vb-electric-1 to-vb-electric-2 hover:from-vb-electric-2 hover:to-vb-electric-1 text-vb-navy font-semibold text-sm py-1.5 px-3"
            >
              Get Quote
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-white hover:bg-vb-dark-2 focus:outline-none focus:ring-2 focus:ring-vb-electric-1/50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.items ? (
                    <button
                      className={`w-full text-left px-4 py-3 text-base font-medium text-white/90 hover:text-vb-electric-1 transition-colors ${
                        link.className || ''
                      }`}
                      onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
                    >
                      <div className="flex items-center justify-between">
                        <span>{link.name}</span>
                        <svg 
                          className={`w-4 h-4 transition-transform duration-200 ${isMobileMoreOpen ? 'transform rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className={`block px-4 py-3 text-base font-medium text-white/90 hover:text-vb-electric-1 transition-colors ${
                        link.className || ''
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                  {link.items && isMobileMoreOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-3 text-sm text-white/80 hover:bg-vb-dark-2/80 hover:text-vb-electric-1 rounded-md"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="/blog"
                className="block px-3 py-2 rounded-md text-base font-medium text-white/90 hover:bg-vb-dark-2 hover:text-vb-electric-1 md:hidden"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;