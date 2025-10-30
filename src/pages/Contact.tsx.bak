import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-vb-dark-1 to-vb-dark-2 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#07070D]/90 py-20">
        <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(circle at top, rgba(13,118,250,0.25), transparent 65%)' }} />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 text-center lg:flex-row lg:items-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex-1 space-y-6"
          >
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/60">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold">
              Let’s discuss your next <span className="bg-gradient-to-r from-[#4c00b0] to-[#b100cd] bg-clip-text text-transparent">energy & gas strategy</span>
            </h1>
            <p className="text-lg text-white/70">
              Book your consultation and review corporate tariffs in real time via our digital portal, or reach out directly for tailored support.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
            className="flex-1 space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h2 className="text-2xl font-semibold">Launch the quoting portal</h2>
            <p className="text-white/75">
              Access live business tariffs, enter your details and finish the process in minutes.
            </p>
            <a
              href="https://voltbridge.tickd.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#0D76FA] to-[#b100cd] px-6 py-3 text-sm font-semibold text-white shadow-[0_35px_100px_-45px_rgba(13,118,250,0.7)] transition hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Visit the online portal
            </a>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid gap-6 md:grid-cols-2"
        >
          <div className="rounded-3xl border border-white/10 bg-[#0D121F]/80 p-8 shadow-[0_35px_120px_-75px_rgba(0,0,0,0.75)]">
            <h3 className="text-xl font-semibold">Email us</h3>
            <p className="mt-3 text-white/70">
              Prefer email? Drop us a line and an analyst will respond within one working day.
            </p>
            <a
              href="mailto:hello@voltbridge.co.uk"
              className="mt-4 inline-flex items-center gap-3 text-sm font-semibold text-[#0D76FA] transition hover:text-[#b100cd]"
            >
              <Mail className="h-5 w-5" />
              hello@voltbridge.co.uk
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0D121F]/80 p-8 shadow-[0_35px_120px_-75px_rgba(0,0,0,0.75)]">
            <h3 className="text-xl font-semibold">Call us</h3>
            <p className="mt-3 text-white/70">
              Our team answers Monday to Friday, 9:00–18:00 (UK time).
            </p>
            <a
              href="tel:+442045258880"
              className="mt-4 inline-flex items-center gap-3 text-sm font-semibold text-[#0D76FA] transition hover:text-[#b100cd]"
            >
              <Phone className="h-5 w-5" />
              +44 20 4525 8880
            </a>
          </div>
        </motion.div>
      </section>

      <div className="w-full py-8 bg-vb-dark-2/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <picture>
              <source srcSet="/Energy-Ombudsman-logo.webp" type="image/webp" />
              <img
                src="/Energy-Ombudsman-logo.png"
                alt="Energy Ombudsman"
                loading="lazy"
                className="h-16 w-auto object-contain"
              />
            </picture>
            <p className="text-lg md:text-xl text-white leading-relaxed text-center md:text-left">
              VoltBridge Ltd is registered with the Energy Ombudsman, ensuring transparency, trust and protection for your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
