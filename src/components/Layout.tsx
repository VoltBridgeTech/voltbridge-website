import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MotionPreferenceToggle } from './accessibility/MotionPreferenceToggle';
import { lazy, Suspense } from 'react';
import Header from './Header';
import Footer from './Footer';

// Cargar el componente Chatbot dinámicamente
const Chatbot = lazy(() => import('./Chatbot'));

const queryClient = new QueryClient();

const Layout = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Handle motion preferences
  useEffect(() => {
    setIsMounted(true);
    
    // Check for saved motion preference
    const savedPreference = localStorage.getItem('reduced-motion');
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Set data-motion attribute based on preference
    if (savedPreference === 'true' || (savedPreference === null && mediaQuery.matches)) {
      document.documentElement.setAttribute('data-motion', 'reduce');
    } else {
      document.documentElement.setAttribute('data-motion', 'allow');
    }
    
    // Listen for system preference changes
    const handleChange = () => {
      if (savedPreference === null) {
        document.documentElement.setAttribute(
          'data-motion', 
          mediaQuery.matches ? 'reduce' : 'allow'
        );
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
  const isLegalPage = location.pathname.includes('/legal');

  if (!isMounted) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground flex flex-col">
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
          
          <main 
            id="main-content" 
            className={`${isLegalPage ? 'pt-16 pb-8' : 'pt-24 md:pt-28'}`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
