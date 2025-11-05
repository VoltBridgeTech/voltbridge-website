import { motion } from 'framer-motion';
import { Zap, Flame, Plug, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Business Electricity Supply",
    description: "Compare and switch business electricity suppliers to secure the best commercial electricity rates. We analyze your usage patterns to find optimal fixed or flexible tariffs that match your business needs and budget.",
    icon: <Zap className="w-8 h-8 text-[#0D76FA]" />,
    color: "from-vb-electric-1/20 to-vb-electric-1/5"
  },
  {
    title: "Commercial Gas Supply",
    description: "Access competitive business gas prices from leading UK suppliers. Our energy brokers negotiate on your behalf to secure cost-effective gas contracts with flexible terms and transparent pricing.",
    icon: <Flame className="w-8 h-8 text-[#0D76FA]" />,
    color: "from-vb-electric-2/20 to-vb-electric-2/5"
  },
  {
    title: "Dual Fuel Business Energy",
    description: "Simplify your energy management with combined electricity and gas contracts. Align contract end dates, reduce admin, and potentially unlock additional savings by bundling your business energy requirements.",
    icon: <Plug className="w-8 h-8 text-[#0D76FA]" />,
    color: "from-vb-electric-4/20 to-vb-electric-4/5"
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
          className="relative overflow-hidden rounded-[32px] border border-white/12 bg-[#070812]/90 px-8 py-14 text-center shadow-[0_45px_140px_-60px_rgba(13,118,250,0.6)] backdrop-blur-2xl"
        >
          <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(60% 60% at 20% 15%, rgba(13,118,250,0.25), transparent 70%), radial-gradient(70% 70% at 80% 85%, rgba(177,0,205,0.18), transparent 75%)' }} />
          <div className="relative mx-auto max-w-3xl space-y-6">
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/60">
              Ready to start?
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold">
              Business Energy Broker Services | Compare & Switch Suppliers <span className="block bg-gradient-to-r from-[#4c00b0] to-[#b100cd] bg-clip-text text-transparent">Save up to 45% on Energy Bills</span>
            </h1>
            <p className="text-lg text-white/75">
              As independent business energy brokers, we help UK companies compare and switch commercial gas and electricity suppliers. Our free comparison service finds you the best energy deals from our panel of trusted suppliers.
            </p>
            <div className="flex justify-center">
              <a
                href="https://voltbridge.tickd.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0D76FA] to-[#b100cd] px-8 py-4 text-sm font-semibold text-white shadow-[0_35px_120px_-50px_rgba(13,118,250,0.65)] transition hover:scale-105"
              >
                Launch digital quoting portal
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
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
              Connect with our electricity & gas experts today and discover how we can help you achieve significant cost savings and sustainability goals.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://voltbridge.tickd.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0D76FA] to-[#b100cd] px-8 py-4 text-sm font-semibold text-white shadow-[0_30px_90px_-40px_rgba(13,118,250,0.6)] transition hover:scale-105"
              >
                Launch digital quoting portal
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
