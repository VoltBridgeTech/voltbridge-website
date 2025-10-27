import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Zap, Flame, Droplets } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
gsap.registerPlugin(useGSAP);

const energyOptions = [
  { label: 'Energy', icon: Zap },
  { label: 'Gas', icon: Flame },
  { label: 'Both', icon: Droplets },
];

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subHeadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const splineWrapperRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const calloutRef = useRef<HTMLParagraphElement>(null);
  const optionRefs = useRef<(HTMLAnchorElement | null)[]>([]);
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
        x: xRatio * 30,
        duration: 0.6,
        ease: 'power2.out',
      });
    };
    const resetPosition = () => {
      gsap.to(wrapper, { rotateY: 0, x: 0, duration: 0.8, ease: 'power3.out' });
    };
    window.addEventListener('mousemove', handleMouseMove);
    wrapper.addEventListener('mouseleave', resetPosition);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      wrapper.removeEventListener('mouseleave', resetPosition);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      optionRefs.current.forEach((el) => {
        if (!el) return;
        gsap.set(el, { opacity: 1, y: 0, scale: 1 });
      });
      if (orbitRef.current) {
        gsap.set(orbitRef.current, { opacity: 1, rotateY: 0, rotateX: 0, z: 0 });
      }
      if (calloutRef.current) {
        gsap.set(calloutRef.current, { opacity: 1, y: 0 });
      }
      return;
    }

    const orbit = orbitRef.current;
    if (!orbit) return;

    gsap.set(optionRefs.current, { opacity: 0, y: 26, scale: 0.9 });
    if (calloutRef.current) {
      gsap.set(calloutRef.current, { opacity: 0, y: 24 });
    }

    const tl = gsap.timeline();
    tl.fromTo(
      orbit,
      { opacity: 0, rotateY: -540, rotateX: 28, z: -160, transformPerspective: 900 },
      { opacity: 1, rotateY: 180, rotateX: 10, z: -40, duration: 1.4, ease: 'power2.inOut' }
    )
      .to(orbit, { rotateY: 0, rotateX: 0, z: 0, duration: 0.8, ease: 'power3.out' }, '>-0.05')
      .to(
        optionRefs.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          ease: 'power3.out',
          stagger: 0.12,
        },
        '-=0.4'
      )
      .to(
        calloutRef.current,
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.2'
      );

    return () => {
      tl.kill();
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const cards = optionRefs.current.filter(Boolean) as HTMLAnchorElement[];
    const enterHandlers: Array<() => void> = [];
    const leaveHandlers: Array<() => void> = [];

    cards.forEach((card) => {
      const handleEnter = () => {
        gsap.to(card, {
          y: -14,
          scale: 1.06,
          duration: 0.32,
          ease: 'power2.out',
        });
        gsap.to(card.querySelector('.option-glow'), {
          opacity: 1,
          scale: 1.05,
          duration: 0.32,
          ease: 'power2.out',
        });
      };

      const handleLeave = () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: 'power3.out',
        });
        gsap.to(card.querySelector('.option-glow'), {
          opacity: 0.65,
          scale: 1,
          duration: 0.4,
          ease: 'power3.out',
        });
      };

      card.addEventListener('mouseenter', handleEnter);
      card.addEventListener('mouseleave', handleLeave);
      enterHandlers.push(handleEnter);
      leaveHandlers.push(handleLeave);
    });

    return () => {
      cards.forEach((card, index) => {
        card.removeEventListener('mouseenter', enterHandlers[index]);
        card.removeEventListener('mouseleave', leaveHandlers[index]);
      });
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
            B2B ENERGY & GAS BROKERAGE
          </div>
          <div className="space-y-6">
            <h1 ref={headlineRef} className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-[#4c00b0] via-[#8900d5] to-[#b100cd] bg-clip-text text-transparent">Smart Moves, Low Bills.</span>
            </h1>
            <p ref={subHeadlineRef} className="mx-auto max-w-xl text-lg text-[#B0B0C0] lg:mx-0">
              VoltBridge negotiates and manages corporate energy & gas contracts across the UK, delivering measurable savings without adding workload to your team.
            </p>
            <ul className="mx-auto grid max-w-xl gap-3 text-left text-base text-white/75 lg:mx-0">
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#0D76FA]"></span> Corporate only pricing and renewal management for multi site estates.</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#b100cd]"></span> Hedging strategies to shield your budget from market volatility.</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-white/80"></span> Dedicated analysts that integrate with your finance and procurement processes.</li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              ref={ctaRef}
              href="https://voltbridge.tickd.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0D76FA] to-[#b100cd] px-8 py-4 text-base font-semibold text-white shadow-[0_25px_70px_-20px_rgba(13,118,250,0.5)] transition duration-300 hover:scale-105 hover:shadow-[0_35px_80px_-25px_rgba(177,0,205,0.55)]"
            >
              Get a free quote
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
            <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/8 to-transparent mix-blend-overlay" />
            <img
              src="/volt-removebg.png"
              alt="VoltBridge mascot"
              className="h-full w-full object-contain select-none pointer-events-none"
              style={{ background: 'transparent' }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/10" />
            <div className="absolute bottom-16 left-1/2 flex w-[94%] max-w-[410px] -translate-x-1/2 flex-col items-center gap-5 px-2 sm:px-0">
              <div
                ref={orbitRef}
                className="flex w-full flex-col gap-4 sm:flex-row"
                style={{ transformStyle: 'preserve-3d', perspective: 1100 }}
              >
                {energyOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <a
                      key={option.label}
                      ref={(el) => {
                        optionRefs.current[index] = el;
                      }}
                      href="https://voltbridge.tickd.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex flex-1 flex-col items-center gap-3 rounded-[22px] border border-[#5ad0ff]/70 bg-[#041836]/35 px-6 py-6 text-center backdrop-blur-xl"
                      style={{
                        boxShadow: '0 26px 80px -60px rgba(80,205,255,0.95)',
                      }}
                    >
                      <div className="option-glow pointer-events-none absolute -inset-3 rounded-[26px] bg-gradient-to-br from-[#1d7cff]/45 via-[#28caf7]/25 to-transparent blur-2xl opacity-65 transition-opacity duration-300" />
                      <div className="absolute inset-[1px] rounded-[20px] border border-[#81e5ff]/25" />
                      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#052b5a]/80">
                        <Icon className="h-7 w-7 text-[#7de1ff]" />
                      </span>
                      <span className="relative text-sm font-semibold uppercase tracking-[0.38em] text-[#7de1ff]">
                        {option.label}
                      </span>
                    </a>
                  );
                })}
              </div>
              <p
                ref={calloutRef}
                className="px-4 text-center text-xs font-semibold uppercase tracking-[0.45em] text-[#7de1ff] drop-shadow-[0_0_12px_rgba(125,225,255,0.65)] sm:text-sm"
              >
                Find out your potential savings
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
