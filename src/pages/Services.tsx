import { motion } from 'framer-motion';
import { Zap, Shield, Clock, Settings, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Energy Procurement",
    description: "Strategic energy sourcing with access to exclusive market rates and flexible contracts.",
    icon: <Zap className="w-8 h-8 text-[#0D76FA]" />,
    color: "from-vb-electric-1/20 to-vb-electric-1/5"
  },
  {
    title: "Risk Management",
    description: "Advanced strategies to protect your business from market volatility and price spikes.",
    icon: <Shield className="w-8 h-8 text-[#0D76FA]" />,
    color: "from-vb-electric-2/20 to-vb-electric-2/5"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock expert assistance for all your energy management needs.",
    icon: <Clock className="w-8 h-8 text-[#0D76FA]" />,
    color: "from-vb-electric-4/20 to-vb-electric-4/5"
  },
  {
    title: "Custom Solutions",
    description: "Tailored energy solutions designed for your specific business requirements.",
    icon: <Settings className="w-8 h-8 text-[#0D76FA]" />,
    color: "from-vb-electric-6/20 to-vb-electric-6/5"
  }
];

const Services = () => {
  return (
    <div className="relative flex flex-col gap-24 pb-24 text-white">

      <section className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0D121F]/80 px-8 py-12 text-center shadow-[0_45px_140px_-60px_rgba(13,118,250,0.6)] backdrop-blur-2xl"
        >
          <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(circle at top, rgba(13,118,250,0.2), transparent 65%)' }} />
          <div className="relative mx-auto max-w-3xl space-y-5">
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/60">
              Our services
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold">
              Comprehensive <span className="bg-gradient-to-r from-[#4c00b0] to-[#b100cd] bg-clip-text text-transparent">Energy Solutions</span>
            </h1>
            <p className="text-lg text-white/70">
              We deliver end-to-end energy management services designed to optimize costs, ensure compliance, and drive sustainability for your business.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0D121F]/70 p-8 shadow-[0_30px_100px_-60px_rgba(13,118,250,0.6)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#b100cd]/40"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" style={{ background: 'linear-gradient(135deg, rgba(76,0,176,0.35), rgba(177,0,205,0.28))' }} />
              {/* Glow flotante detrás de la tarjeta */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-10 -z-10 rounded-[40px] blur-3xl"
                style={{ background: 'radial-gradient(60% 60% at 20% 15%, rgba(76,0,176,0.22), transparent 70%), radial-gradient(70% 70% at 80% 85%, rgba(177,0,205,0.18), transparent 75%)' }}
                animate={{ x: [ -10, 12, -8 ], y: [ -8, 10, -6 ] }}
                transition={{ duration: 14 + index, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-[#0D76FA]">
                {service.icon}
              </div>
              <h3 className="relative text-xl font-semibold text-white">{service.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-white/70">{service.description}</p>
              <div className="relative mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0D121F]/85 px-10 py-14 text-center shadow-[0_45px_140px_-70px_rgba(13,118,250,0.5)] backdrop-blur-2xl"
        >
          <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(circle at top, rgba(13,118,250,0.2), transparent 65%)' }} />
          <div className="relative space-y-6">
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/60">
              Ready to start?
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold">
              Transform Your <span className="bg-gradient-to-r from-[#4c00b0] to-[#b100cd] bg-clip-text text-transparent">Energy Strategy</span>
            </h2>
            <p className="text-lg text-white/70">
              Get in touch with our energy experts today and discover how we can help you achieve significant cost savings and sustainability goals.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0D76FA] to-[#b100cd] px-8 py-4 text-sm font-semibold text-white shadow-[0_30px_90px_-40px_rgba(13,118,250,0.6)] transition hover:scale-105">
                Get a Free Consultation
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
