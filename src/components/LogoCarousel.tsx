const logos = [
  { src: '/british-gas.avif', alt: 'British Gas' },
  { src: '/edf.avif', alt: 'EDF' },
  { src: '/engie.avif', alt: 'ENGIE' },
  { src: '/eon-next.avif', alt: 'E.ON Next' },
  { src: '/scottishpower.avif', alt: 'ScottishPower' },
  { src: '/sse.avif', alt: 'SSE' },
  { src: '/sefe.avif', alt: 'SEFE Energy' },
  { src: '/smartest-energy.avif', alt: 'SmartestEnergy' },
  { src: '/valda-energy.avif', alt: 'Valda Energy' },
  { src: '/ygp.avif', alt: 'YGP' },
  { src: '/yü-energy.avif', alt: 'Yü Energy' },
  { src: '/jellyfish.avif', alt: 'Jellyfish' },
];

const LogoCarousel = () => {
  // Duplicamos la lista para crear un efecto de loop continuo
  // Al desplazar el 100% del ancho, el final de la animación coincide visualmente con el inicio
  const loopedLogos = [...logos, ...logos];

  return (
    <section className="mx-auto w-full max-w-6xl px-6 lg:px-8">
      <div className="mb-6 flex flex-col items-center gap-2 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-white/50">
          Trusted by leading UK energy suppliers & partners
        </p>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#07070D]/80 px-4 py-6 shadow-[0_35px_120px_-80px_rgba(0,0,0,0.85)] backdrop-blur-xl">
        <div
          className="flex items-center gap-10 md:gap-14"
          style={{ animation: 'logo-marquee 40s linear infinite' }}
        >
          {loopedLogos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex h-14 w-32 flex-none items-center justify-center opacity-80 transition hover:opacity-100 md:h-16 md:w-40"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>

        {/* Degradados laterales para integración visual */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#07070D] via-[#07070D]/60 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#07070D] via-[#07070D]/60 to-transparent" />

        {/* Keyframes para el efecto marquee continuo */}
        <style>
          {`
            @keyframes logo-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default LogoCarousel;
