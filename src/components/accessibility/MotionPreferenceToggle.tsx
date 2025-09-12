'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Accessibility, Zap, ZapOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function MotionPreferenceToggle() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Only run on client-side
    setIsMounted(true);
    
    // Check for saved preference or system preference
    const savedPreference = localStorage.getItem('reduced-motion');
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (savedPreference !== null) {
      setReducedMotion(savedPreference === 'true');
    } else {
      setReducedMotion(mediaQuery.matches);
    }
    
    // Listen for system preference changes
    const handleChange = () => {
      if (savedPreference === null) {
        setReducedMotion(mediaQuery.matches);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Apply the motion preference to the document
  useEffect(() => {
    if (!isMounted) return;
    
    document.documentElement.style.setProperty(
      '--motion-reduce', 
      reducedMotion ? 'none' : 'initial'
    );
    
    // Save preference to localStorage
    localStorage.setItem('reduced-motion', String(reducedMotion));
    
    // Dispatch event that other components can listen to
    window.dispatchEvent(new CustomEvent('motion-preference-changed', { 
      detail: { reducedMotion } 
    }));
  }, [reducedMotion, isMounted]);

  if (!isMounted) {
    return null; // Don't render on server
  }

  const toggleMotion = () => {
    setReducedMotion(!reducedMotion);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="relative h-12 w-12 rounded-full bg-vb-dark-2/80 backdrop-blur-sm border border-white/10 hover:border-vb-electric-1/30"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Accessibility settings"
            >
              <Accessibility className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Accessibility settings</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute bottom-16 right-0 w-64 p-4 bg-vb-dark-2/90 backdrop-blur-md rounded-lg shadow-2xl border border-white/10"
          >
            <h3 className="text-sm font-medium text-white mb-3 flex items-center">
              <Accessibility className="h-4 w-4 mr-2" />
              Accessibility Settings
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white">Reduce Motion</p>
                  <p className="text-xs text-gray-400">
                    {reducedMotion ? 'Animations are disabled' : 'Animations are enabled'}
                  </p>
                </div>
                <Button
                  variant={reducedMotion ? 'default' : 'outline'}
                  size="sm"
                  onClick={toggleMotion}
                  className="h-8 w-8 p-0 rounded-full"
                  aria-label={reducedMotion ? 'Enable animations' : 'Reduce motion'}
                >
                  {reducedMotion ? (
                    <ZapOff className="h-4 w-4" />
                  ) : (
                    <Zap className="h-4 w-4" />
                  )}
                </Button>
              </div>
              
              <div className="pt-2 border-t border-white/5">
                <p className="text-xs text-gray-400">
                  {reducedMotion 
                    ? 'Some animations are disabled for a simpler experience.'
                    : 'Animations are enabled for a more dynamic experience.'
                  }
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
