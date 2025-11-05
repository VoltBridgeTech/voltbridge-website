import { motion } from 'framer-motion';
import { Building2, ShieldCheck, LineChart, CheckCircle2 } from 'lucide-react';

const trustMetrics = [
  { stat: '£150,000', detail: 'in negotiated electricity & gas savings for UK business portfolios' },
  { stat: '250+', detail: 'commercial sites managed nationwide' },
  { stat: '92%', detail: 'renewal retention achieved with our ongoing support' },
];

const services = [
  {
    icon: <Building2 className="w-6 h-6 text-[#0D76FA]" />,
    title: 'Strategic procurement',
    description: 'Tendering and negotiating multi site electricity & gas contracts with leading UK suppliers.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#0D76FA]" />,
    title: 'Electricity & gas risk management',
    description: 'Hedging, staggered fixing and alerts to stay ahead of market volatility.',
  },
  {
    icon: <LineChart className="w-6 h-6 text-[#0D76FA]" />,
    title: 'Intelligence & ESG reporting',
    description: 'Consumption dashboards, ESG reporting and advisory to accelerate your net zero electricity & gas roadmap.',
  },
];

const caseStudies = [
  {
    sector: 'National logistics group',
    outcome: '£18,700 annual saving',
    detail: 'Restructured a multi site gas contract with price caps and consolidated billing.',
  },
  {
    sector: 'Industrial manufacturing',
    outcome: '21% tariff reduction',
    detail: 'Implemented dual fuel hedging with flex clauses to soften market spikes.',
  },
  {
    sector: 'Hospitality and leisure',
    outcome: '8 week onboarding',
    detail: 'Integrated with finance systems to track consumption and avoid penalty charges.',
  },
];

const steps = [
  'Select your service: Electricity, Gas, or both.',
  'Choose your start date: Set when you’d like your supply to begin.',
  'Add your usage: Enter your estimated electricity and gas consumption.',
  'Confirm your company type: Limited, Sole Trader, or Charity.',
  'Enter your business name: We’ll verify your registration automatically.',
  'Get tailored live tariffs: Access the most competitive business energy rates.',
];

const aboutHighlights = [
  {
    title: 'Energy expertise',
    description: 'Energy analysts and corporate traders who negotiate tariffs and shield your portfolio from market swings.',
  },
  {
    title: 'Digital operations',
    description: 'Single portal for onboarding, document validation and consumption reporting without internal friction.',
  },
  {
    title: 'Client advocacy',
    description: 'Full transparency on renewals, regulatory audits handled on your behalf and ongoing support.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const Index = () => {
  return (
    <div className="relative flex flex-col gap-24 pb-24 pt-16 sm:pt-20 text-white">

      <section className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold">
            Stop overpaying. Expert business energy broker delivering maximum savings across the UK.
          </h1>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#0D76FA] px-8 py-4 text-sm font-semibold text-white shadow-[0_30px_80px_-40px_rgba(13,118,250,0.7)] transition hover:scale-105"
          >
            Get your free savings analysis (5 minutes)
          </a>
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ staggerChildren: 0.12, delayChildren: 0.05 }}
        className="mx-auto w-full max-w-6xl rounded-[32px] border border-white/12 bg-[#07070D]/85 px-8 py-14 shadow-[0_35px_120px_-70px_rgba(0,0,0,0.85)] backdrop-blur-xl"
      >
        <div className="grid gap-8 md:grid-cols-3">
          {trustMetrics.map((item) => (
            <motion.div
              key={item.stat}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0F172A]/60 p-6 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.55)]"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="text-xl font-semibold text-white">{item.stat}</p>
              <p className="mt-2 text-sm text-white/70">{item.detail}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="flex items-center justify-center gap-5 text-center">
          <picture>
            <source srcSet="/Energy-Ombudsman-logo.webp" type="image/webp" />
            <img src="/Energy-Ombudsman-logo.png" alt="Energy Ombudsman" className="h-12 w-auto md:h-14" loading="lazy" />
          </picture>
          <p className="text-base md:text-lg font-semibold text-white/90">VoltBridge Ltd is proudly registered with the Electricity Ombudsman, ensuring trust, transparency, and customer protection across electricity & gas services</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#0D121F]/70 p-6 text-center">
          <p className="text-lg font-semibold">Trusted by UK businesses</p>
          <p className="text-white/80">Case studies: average savings of £18,700 per year.</p>
        </div>
      </section>

      <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-6 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left"
        >
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/60">
              UK corporate services
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Electricity & gas solutions engineered for CFOs and operations leaders</h2>
            <p className="text-white/70 lg:max-w-2xl">
              We orchestrate procurement, risk cover and reporting so your finance team keeps electricity & gas spend under control without diverting internal resources.
            </p>
          </div>
          <a
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-[#b100cd]/40 hover:text-[#b100cd]"
          >
            View all services
          </a>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0D121F]/70 p-8 shadow-[0_35px_120px_-60px_rgba(13,118,250,0.6)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#b100cd]/40"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" style={{ background: 'linear-gradient(135deg, rgba(76,0,176,0.35), rgba(177,0,205,0.28))' }} />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-10 -z-10 rounded-[40px] blur-3xl"
                style={{ background: 'radial-gradient(60% 60% at 20% 15%, rgba(76,0,176,0.22), transparent 70%), radial-gradient(70% 70% at 80% 85%, rgba(177,0,205,0.18), transparent 75%)' }}
                animate={{ x: [ -10, 12, -8 ], y: [ -8, 10, -6 ] }}
                transition={{ duration: 14 + index, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-[#0D76FA]">
                {service.icon}
              </div>
              <h3 className="relative text-xl font-semibold text-white">{service.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-white/70">{service.description}</p>
              <div className="relative mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        id="how-it-works"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.12, delayChildren: 0.05 }}
        className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[36px] border border-white/12 bg-[#07070D]/88 px-8 py-14 shadow-[0_40px_130px_-80px_rgba(0,0,0,0.85)] backdrop-blur-xl"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut' }} className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/60">
              Our process
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">How we safeguard long term electricity & gas savings</h2>
            <p className="text-white/70 lg:max-w-2xl">
              Our analysts and electricity & gas traders act as an extension of your team—from the initial audit through monthly electricity & gas consumption reviews and renewals.
            </p>
          </motion.div>
          <motion.a
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            href="https://voltbridge.tickd.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#0D76FA] px-6 py-3 text-sm font-semibold text-white shadow-[0_30px_80px_-40px_rgba(13,118,250,0.7)] transition hover:scale-105"
          >
            Get your free savings analysis (5 minutes)
          </motion.a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              variants={fadeUp}
              transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[24px] border border-white/12 bg-[#07070D]/80 p-6 backdrop-blur-xl"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(circle at top, rgba(13,118,250,0.14), transparent 70%)' }} />
              <div className="relative flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#0D76FA] to-[#b100cd] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-base font-semibold text-white">{step.split(':')[0]}</p>
              </div>
              <p className="relative mt-3 text-sm text-white/70">{step.split(':').slice(1).join(':').trim()}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="relative mx-auto w-full max-w-6xl rounded-[32px] border border-white/12 bg-[#07070D]/88 px-8 py-14 shadow-[0_38px_130px_-80px_rgba(0,0,0,0.85)] backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left"
        >
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/60">
              About VoltBridge
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">We connect energy strategy with digital execution</h2>
            <p className="text-white/70 lg:max-w-2xl">
              We blend analytics, negotiation and automation so your business controls costs, meets ESG goals and removes paperwork from energy contracts. See how we partner with finance, operations and procurement teams.
            </p>
            <a
              href="/about"
              className="inline-flex w-fit items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#b100cd]/40 hover:text-[#b100cd]"
            >
              Meet the team
            </a>
          </div>
          <div className="grid gap-4 lg:w-[420px]">
            {aboutHighlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/12 bg-white/5 px-5 py-4 text-left">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="case-studies" className="relative mx-auto w-full max-w-6xl rounded-[36px] border border-white/12 bg-[#07070D]/88 px-8 py-14 shadow-[0_40px_130px_-80px_rgba(0,0,0,0.85)] backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-6 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left"
        >
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/60">
              Success stories
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Real world electricity & gas results for real businesses</h2>
            <p className="text-white/70 lg:max-w-2xl">
              These outcomes are representative of the projects we manage: complex electricity & gas contracts, multi site portfolios and ambitious savings targets.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <motion.div
              key={study.sector}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[28px] border border-white/12 bg-[#0D121F]/75 p-7 backdrop-blur-xl"
            >
              <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 25% 20%, rgba(13,118,250,0.16), transparent 70%)' }} />
              <p className="relative text-xs uppercase tracking-[0.35em] text-white/50">{study.sector}</p>
              <h3 className="relative mt-4 text-2xl font-semibold text-white">{study.outcome}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-white/75">{study.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/60">
            Ready to support
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Let’s talk about your corporate electricity & gas spend</h2>
          <p className="text-white/70 lg:max-w-xl">
            Share a snapshot of your current situation and we’ll prepare a comparison report with the most competitive, regulated UK market scenarios.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#b100cd]" />
              <span className="text-sm text-white/70">Regulated advice</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#b100cd]" />
              <span className="text-sm text-white/70">Coverage across leading UK suppliers</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[32px] border border-white/12 bg-[#07070D]/88 p-8 shadow-[0_35px_120px_-75px_rgba(0,0,0,0.85)] backdrop-blur-xl"
        >
          <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at top, rgba(13,118,250,0.22), transparent 65%)' }} />
          <div className="relative z-10 flex flex-col gap-4 text-left">
            <h3 className="text-2xl font-semibold text-white">Launch our digital quoting portal</h3>
            <p className="text-white/70">
              Access live business electricity & gas tariffs, compare suppliers in minutes and complete your switch with guided support from our team.
            </p>
            <a
              href="https://voltbridge.tickd.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-full bg-gradient-to-r from-[#0D76FA] to-[#b100cd] px-6 py-3 text-sm font-semibold text-white shadow-[0_30px_80px_-40px_rgba(13,118,250,0.7)] transition hover:scale-105"
            >
              Visit the online portal
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
