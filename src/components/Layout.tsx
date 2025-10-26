import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MotionPreferenceToggle } from './accessibility/MotionPreferenceToggle';
import { lazy, Suspense } from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroSection from './HeroSection';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
gsap.registerPlugin(useGSAP);

// Cargar el componente Chatbot dinámicamente
const Chatbot = lazy(() => import('./Chatbot'));

const queryClient = new QueryClient();

type FloatingBackgroundProps = {
  prefersReducedMotion: boolean;
};

const FloatingBackground = ({ prefersReducedMotion }: FloatingBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blueOrbRef = useRef<HTMLDivElement>(null);
  const greenOrbRef = useRef<HTMLDivElement>(null);
  const accentOrbRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion) return;

      const ctx = gsap.context(() => {
        const rand = (min: number, max: number) => Math.random() * (max - min) + min;
        const animateToRandom = (el: HTMLElement | null, base: number) => {
          if (!el) return;
          const vw = window.innerWidth; 
          const vh = window.innerHeight;
          const x = rand(-vw * 0.2, vw * 0.2);
          const y = rand(-vh * 0.2, vh * 0.2);
          const z = rand(-180, 120);
          gsap.to(el, {
            x, y, z,
            rotation: rand(-15, 15),
            duration: rand(base * 0.8, base * 1.2),
            ease: 'sine.inOut',
            onComplete: () => animateToRandom(el, base),
          });
        };

        // Animación libre continua
        animateToRandom(blueOrbRef.current, 18);
        animateToRandom(greenOrbRef.current, 20);
        animateToRandom(accentOrbRef.current, 22);

        // Respiración sutil (escala)
        [blueOrbRef.current, greenOrbRef.current, accentOrbRef.current].forEach((el, i) => {
          if (!el) return;
          gsap.to(el, {
            scale: 1.04,
            duration: 6 + i,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
          });
        });
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  );

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      const xRatio = event.clientX / window.innerWidth - 0.5;
      const yRatio = event.clientY / window.innerHeight - 0.5;

      gsap.to(parallaxRef.current, {
        x: xRatio * 15,
        y: yRatio * 15,
        duration: 1.0,
        ease: 'power2.out',
      });

      gsap.to(blueOrbRef.current, {
        x: xRatio * 30,
        y: yRatio * 20,
        z: (xRatio + yRatio) * 40,
        duration: 1.0,
        overwrite: 'auto',
        ease: 'power2.out',
      });

      gsap.to(greenOrbRef.current, {
        x: xRatio * 25,
        y: yRatio * 25,
        z: (xRatio - yRatio) * 35,
        duration: 1.0,
        overwrite: 'auto',
        ease: 'power2.out',
      });

      gsap.to(accentOrbRef.current, {
        x: xRatio * 28,
        y: yRatio * 22,
        z: (yRatio) * 30,
        duration: 1.0,
        overwrite: 'auto',
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  // Scroll parallax adicional
  useEffect(() => {
    if (prefersReducedMotion) return;
    const onScroll = () => {
      const y = window.scrollY;
      gsap.to(parallaxRef.current, {
        y: y * 0.05,
        duration: 0.6,
        ease: 'power1.out',
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [prefersReducedMotion]);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-0 overflow-hidden will-change-transform">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(13,118,250,0.22),_transparent_72%)]" />
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform" style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
        <div
          ref={blueOrbRef}
          className="absolute -left-[16rem] top-[-12rem] h-[22rem] w-[22rem] rounded-full bg-[#0D76FA]/75 blur-[210px] mix-blend-screen"
        />
        <div
          ref={greenOrbRef}
          className="absolute right-[-18rem] top-[18rem] h-[24rem] w-[24rem] rounded-full blur-[230px] mix-blend-screen"
          style={{ background: 'radial-gradient(circle at 35% 35%, rgba(76,0,176,0.9), rgba(177,0,205,0.7))' }}
        />
        <div
          ref={accentOrbRef}
          className="absolute left-1/2 bottom-[-14rem] h-[20rem] w-[20rem] -translate-x-1/2 rounded-full blur-[220px] mix-blend-screen"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(76,0,176,0.65), rgba(177,0,205,0.5))' }}
        />
      </div>
    </div>
  );
};

const Layout = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Handle motion preferences
  useEffect(() => {
    setIsMounted(true);
    
    // Check for saved motion preference
    const savedPreference = localStorage.getItem('reduced-motion');
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Set data-motion attribute based on preference
    if (savedPreference === 'true' || (savedPreference === null && mediaQuery.matches)) {
      document.documentElement.setAttribute('data-motion', 'reduce');
      setPrefersReducedMotion(true);
    } else {
      document.documentElement.setAttribute('data-motion', 'allow');
      setPrefersReducedMotion(false);
    }
    
    // Listen for system preference changes
    const handleChange = () => {
      if (savedPreference === null) {
        const shouldReduce = mediaQuery.matches;
        document.documentElement.setAttribute('data-motion', shouldReduce ? 'reduce' : 'allow');
        setPrefersReducedMotion(shouldReduce);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Only handle clicks on anchor tags with hash links
      if (target.tagName === 'A') {
        const anchor = target as HTMLAnchorElement;
        const href = anchor.getAttribute('href');
        
        // Only handle internal hash links
        if (href?.startsWith('#')) {
          e.preventDefault();
          const id = href;
          if (id && id !== '#') {
            const element = document.querySelector(id);
            if (element) {
              const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
              element.scrollIntoView({ 
                behavior: prefersReducedMotion ? 'auto' : 'smooth' 
              });
              // Update URL without adding to history
              window.history.pushState(null, '', id);
            }
          }
        }
      }
    };

    // Add event listener to the document
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Add keyboard navigation class for focus styles
  useEffect(() => {
    const handleFirstTab = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
      }
    };

    window.addEventListener('keydown', handleFirstTab);
    return () => window.removeEventListener('keydown', handleFirstTab);
  }, []);

  // Skip to main content handler
  const handleSkipToContent = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const mainContent = document.querySelector('main');
      if (mainContent) {
        mainContent.setAttribute('tabindex', '-1');
        mainContent.focus();
      }
    }
  };

  const location = useLocation();
  const isHome = location.pathname === '/';

  if (!isMounted) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative min-h-screen overflow-visible bg-[#07070D] text-white">
          <FloatingBackground prefersReducedMotion={prefersReducedMotion} />
          <Toaster />
          {/* Skip to main content link */}
          <a
            href="#main-content"
            className="skip-to-content"
            onKeyDown={handleSkipToContent}
          >
            Skip to main content
          </a>
          
          <Header />
          {isHome && <HeroSection />}

          <main
            id="main-content"
            className={`${isHome ? 'relative z-30 -mt-12 sm:-mt-16 lg:-mt-20 pb-20 sm:pb-24' : 'relative z-30 pt-20 sm:pt-24 pb-20 sm:pb-24'}`}
          >
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
              <Outlet />
            </div>
          </main>
          
          <Sonner position="top-center" />
          <MotionPreferenceToggle />
          <Suspense fallback={null}>
            <Chatbot />
          </Suspense>
          
          {/* Footer */}
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default Layout;
