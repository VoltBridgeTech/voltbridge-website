import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleContact = () => {
    navigate('/contact');
    setMobileOpen(false);
    setTimeout(() => {
      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-40 flex justify-center px-4 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl' : 'backdrop-blur-0'
      }`}
    >
      <div className="relative w-full max-w-6xl">
        <div
          className={`relative mt-2 flex items-center justify-between rounded-full border border-white/10 bg-[#090912]/80 px-5 py-3 text-white shadow-[0_25px_80px_-40px_rgba(0,0,0,0.65)] transition-all duration-500 ${
            scrolled ? 'shadow-[0_20px_70px_-40px_rgba(0,0,0,0.7)]' : ''
          }`}
        >
          <Link to="/" className="flex items-center gap-3">
            <img src="/isotipo_SF.png" alt="VoltBridge isotipo" className="h-8 w-auto" />
            <img src="/logotipo_sf.png" alt="VoltBridge logotipo" className="hidden h-20 w-auto object-contain sm:inline" />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => {
              const active = location.pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`relative text-sm font-medium uppercase tracking-[0.3em] transition duration-300 ${
                    active ? 'text-white' : 'text-white/45 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] w-full origin-center rounded-full bg-gradient-to-r from-[#0D76FA] to-[#b100cd] transition-transform duration-300 ${
                      active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={handleContact}
              className="hidden rounded-full bg-gradient-to-r from-[#0D76FA] to-[#b100cd] px-5 py-2 text-sm font-semibold text-white shadow-[0_20px_60px_-30px_rgba(177,0,205,0.6)] transition hover:scale-105 sm:inline-flex"
            >
              Get a free quote
            </button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 md:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Abrir menú"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="md:hidden absolute left-0 right-0 mt-4 rounded-3xl border border-white/10 bg-[#090912]/95 p-5 text-center shadow-[0_25px_80px_-50px_rgba(0,0,0,0.75)]"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium uppercase tracking-[0.35em] text-white/70"
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  onClick={handleContact}
                  className="rounded-full bg-gradient-to-r from-[#2F6BFF] via-[#7F5CFF] to-[#9DFF00] px-5 py-3 text-sm font-semibold text-[#05050A]"
                >
                  Get a free quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;