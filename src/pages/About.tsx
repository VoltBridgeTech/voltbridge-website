import { motion } from 'framer-motion';

const stats = [
  { label: 'Clients advised', value: '250+' },
  { label: 'Average savings delivered', value: '22%' },
  { label: 'Tariffs compared', value: '50+' },
  { label: 'Renewal retention', value: '92%' },
];

const pillars = [
  {
    title: 'Energy expertise',
    description: 'Hybrid team of energy analysts and traders who negotiate corporate contracts and manage risk all year round.',
  },
  {
    title: 'Digital operations',
    description: 'Onboarding, validation and centralised reporting on our portal, reducing paperwork by up to 80%.',
  },
  {
    title: 'Client advocacy',
    description: 'Full transparency on tariffs, clauses and commissions. We handle claims and regulatory audits on your behalf.',
  },
];

const values = [
  {
    icon: '🔍',
    title: 'Transparency first',
    description: 'We share every tariff detail and explain future scenarios with complete clarity.',
  },
  {
    icon: '⚡',
    title: 'Operational agility',
    description: 'We monitor the market daily to adjust hedges, lock in prices and avoid penalties.',
  },
  {
    icon: '🌱',
    title: 'Sustainable thinking',
    description: 'We design net-zero roadmaps and prioritise suppliers with certified renewable components.',
  },
  {
    icon: '🤝',
    title: 'Long-term trust',
    description: '92% of our clients renew with us thanks to measurable outcomes and ongoing support.',
  },
];

const About = () => {
  return (
    <div className="relative mx-auto flex max-w-6xl flex-col gap-20 px-6 py-20 text-white lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[36px] border border-white/12 bg-[#07070D]/88 px-10 py-16 text-center shadow-[0_45px_150px_-70px_rgba(0,0,0,0.85)] backdrop-blur-2xl"
      >
        <div className="absolute inset-0 opacity-45" style={{ background: 'radial-gradient(120% 120% at 20% 0%, rgba(13,118,250,0.25), transparent 65%), radial-gradient(90% 90% at 80% 100%, rgba(177,0,205,0.2), transparent 70%)' }} />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/65">
            Our team
          </span>
          <h1 className="text-4xl font-semibold md:text-5xl">Bridging energy strategy with digital execution</h1>
          <p className="text-lg text-white/75">
            VoltBridge combines energy analytics, corporate negotiation and automation so organisations reduce costs, mitigate risk and advance towards ESG goals without operational friction.
          </p>
        </div>
      </motion.section>

      <section className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-[32px] border border-white/12 bg-[#080812]/85 p-8 shadow-[0_35px_120px_-60px_rgba(0,0,0,0.75)] backdrop-blur-xl"
        >
          <h2 className="text-3xl font-semibold">Our story</h2>
          <p className="mt-6 text-white/75">
            We were founded amid the UK’s energy volatility with a clear mission: to give businesses transparency and control. We identified that 70% of SMEs were overpaying due to limited information and manual processes.
          </p>
          <p className="mt-4 text-white/70">
            We brought together traders, data analysts and regulatory specialists to design a digital model that simplifies tenders, contracts and reporting. Today we manage multisite portfolios and energy transition programmes that deliver sustainable savings.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="rounded-[32px] border border-white/12 bg-[#080812]/85 p-8 shadow-[0_35px_120px_-60px_rgba(0,0,0,0.75)] backdrop-blur-xl"
        >
          <h2 className="text-3xl font-semibold">What sets us apart</h2>
          <ul className="mt-6 space-y-4 text-white/75">
            {pillars.map((pillar) => (
              <li key={pillar.title} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="mt-1 text-sm text-white/70">{pillar.description}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="rounded-[36px] border border-white/12 bg-[#07070D]/85 px-8 py-14 shadow-[0_40px_140px_-70px_rgba(0,0,0,0.85)] backdrop-blur-xl"
      >
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center">
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.35em] text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <section className="space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/60">
            Our values
          </span>
          <h2 className="mt-4 text-3xl font-semibold">Principles guiding every project</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            We build long-term relationships by combining technical precision, commercial transparency and continuous support.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="rounded-[28px] border border-white/10 bg-[#090912]/85 p-6 text-center shadow-[0_30px_100px_-60px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            >
              <div className="text-4xl">{value.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-white">{value.title}</h3>
              <p className="mt-2 text-sm text-white/70">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
