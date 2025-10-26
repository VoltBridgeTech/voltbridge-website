import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
gsap.registerPlugin(useGSAP);

 

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subHeadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const splineWrapperRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion) return;
      const timeline = gsap.timeline({ defaults: { duration: 0.8, ease: 'power3.out' } });
      timeline
        .from(contentRef.current, { opacity: 0, y: -24 })
        .from(headlineRef.current, { opacity: 0, y: 32 }, '-=0.4')
        .from(subHeadlineRef.current, { opacity: 0, y: 28 }, '-=0.45')
        .from(ctaRef.current, { opacity: 0, y: 20 }, '-=0.4')
        .from(splineWrapperRef.current, { opacity: 0, scale: 0.85 }, '-=0.5');
    },
    { dependencies: [prefersReducedMotion], scope: heroRef }
  );

  useEffect(() => {
    const wrapper = splineWrapperRef.current;
    if (!wrapper || prefersReducedMotion) return;
    const handleMouseMove = (event: MouseEvent) => {
      const bounds = wrapper.getBoundingClientRect();
      const xRatio = (event.clientX - bounds.left) / bounds.width - 0.5;
      gsap.to(wrapper, {
        rotateY: xRatio * 14,
        duration: 0.6,
        ease: 'power2.out',
      });
    };
    const resetPosition = () => {
      gsap.to(wrapper, { rotateY: 0, duration: 0.8, ease: 'power3.out' });
    };
    window.addEventListener('mousemove', handleMouseMove);
    wrapper.addEventListener('mouseleave', resetPosition);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      wrapper.removeEventListener('mouseleave', resetPosition);
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={heroRef}
      className="relative isolate min-h-screen overflow-hidden bg-transparent text-white"
    >
      {/* Fondo unificado: se renderiza desde Layout (FloatingBackground) */}

      <div
        ref={contentRef}
        className="relative z-20 mx-auto flex w-[min(1200px,92%)] flex-col-reverse items-center gap-16 pb-16 pt-24 lg:flex-row lg:items-stretch lg:gap-20 lg:pt-36"
      >
        <div className="flex w-full flex-1 flex-col justify-center gap-10 text-center lg:text-left">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#B0B0C0]/80">
            B2B energy brokerage
          </div>
          <div className="space-y-6">
            <h1 ref={headlineRef} className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-[#4c00b0] via-[#8900d5] to-[#b100cd] bg-clip-text text-transparent">Smart Moves, Low Bills</span> for business energy.
            </h1>
            <p ref={subHeadlineRef} className="mx-auto max-w-xl text-lg text-[#B0B0C0] lg:mx-0">
              VoltBridge negotiates and manages corporate energy contracts for CFOs and operations leaders across the UK, delivering measurable savings without adding workload to your team.
            </p>
            <ul className="mx-auto grid max-w-xl gap-3 text-left text-base text-white/75 lg:mx-0">
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#0D76FA]"></span> Corporate-only pricing and renewal management for multi-site estates.</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#b100cd]"></span> Hedging strategies to shield your budget from market volatility.</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-white/80"></span> Dedicated analysts that integrate with your finance and procurement processes.</li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              ref={ctaRef}
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0D76FA] to-[#b100cd] px-8 py-4 text-base font-semibold text-white shadow-[0_25px_70px_-20px_rgba(13,118,250,0.5)] transition duration-300 hover:scale-105 hover:shadow-[0_35px_80px_-25px_rgba(177,0,205,0.55)]"
            >
              Request an energy audit
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-white/80 transition hover:border-[#b100cd]/40 hover:text-[#b100cd]"
              href="#case-studies"
            >
              View case studies
            </a>
          </div>
        </div>

        <div
          ref={splineWrapperRef}
          className="relative flex w-full flex-1 items-center justify-center"
        >
          <div className="relative aspect-[4/5] w-full max-w-lg overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0D76FA]/15 via-[#0A0A10]/40 to-[#b100cd]/15 p-4 shadow-[0_40px_120px_-50px_rgba(13,118,250,0.8)]">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/5 to-transparent mix-blend-overlay" />
            <img
              src="/volt-removebg.png"
              alt="VoltBridge mascot"
              className="h-full w-full object-contain select-none pointer-events-none"
              style={{ background: 'transparent' }}
            />
            <div className="absolute inset-0 rounded-[32px] border border-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
