import { Variants } from 'framer-motion';

/**
 * Creates animation variants that respect reduced motion preferences
 * @param variants - The animation variants to apply when motion is allowed
 * @param reducedVariants - Optional: Custom variants for reduced motion (defaults to no animation with instant transitions)
 * @returns Variants that respect user's motion preferences
 */
export function getMotionVariants(
  variants: Variants,
  reducedVariants?: Variants
): Variants {
  // Check if window is defined (SSR compatibility)
  if (typeof window === 'undefined') return {};
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    // Return reduced motion variants if provided, otherwise default to no animation
    return reducedVariants || {
      hidden: { opacity: 1 },
      visible: { 
        opacity: 1,
        transition: { duration: 0.001 } // Instant transition
      }
    };
  }
  
  return variants;
}

/**
 * Returns transition properties that respect reduced motion preferences
 * @param transition - The transition properties to use when motion is allowed
 * @returns Transition properties or instant transition based on user preference
 */
export function getReducedMotionTransition(transition: any) {
  // Check if window is defined (SSR compatibility)
  if (typeof window === 'undefined') return transition;
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  return prefersReducedMotion 
    ? { duration: 0.001 } // Instant transition
    : transition;
}

/**
 * Returns a boolean indicating if reduced motion is preferred
 * @returns boolean - true if reduced motion is preferred
 */
export function prefersReducedMotion(): boolean {
  // Check if window is defined (SSR compatibility)
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
