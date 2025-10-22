import { motion } from 'framer-motion';
import { useState } from 'react';
import { Building2, Leaf, ShieldCheck, LineChart, Users, CheckCircle2 } from 'lucide-react';

const trustMetrics = [
  { stat: '10,000+ satisfied clients', detail: 'Across the United Kingdom' },
  { stat: '£5m+ saved on contracts', detail: 'Through smart energy switching' },
  { stat: '4.9/5 customer rating', detail: 'Based on verified reviews' },
];

const services = [
  {
    icon: <Building2 className="w-6 h-6 text-[#0D76FA]" />,
    title: 'Business energy procurement',
    description: 'Tailored tariffs and contract management for SMEs and large enterprises.',
  },
  {
    icon: <Leaf className="w-6 h-6 text-[#0D76FA]" />,
    title: 'Sustainability advisory',
    description: 'Forecast consumption, source renewables and plan your net-zero roadmap.',
  },
  {
    icon: <LineChart className="w-6 h-6 text-[#0D76FA]" />,
    title: 'Usage analytics',
    description: 'Real time dashboards that highlight savings opportunities month-on-month.',
  },
];

const steps = [
  'Tell us your usage and postcode.',
  'We compare trusted UK suppliers in seconds.',
  'You choose, sign digitally and start saving.',
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

type ContractStatus = 'out_of_contract' | 'in_contract_ending_soon';

const MultiStepContactForm = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    postCode: '',
    monthlySpend: '',
    contractStatus: '' as ContractStatus | '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const next = () => {
    setError(null);
    if (!form.postCode || !form.monthlySpend || !form.contractStatus) {
      setError('Please complete all fields to continue.');
      return;
    }
    setStep(2);
  };

  const back = () => {
    setError(null);
    setStep(1);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    if (!form.firstName || !form.lastName || !form.email || !form.phone) {
      setError('Please complete all fields.');
      return;
    }
    const url = (import.meta as any).env?.VITE_N8N_WEBHOOK_URL as string | undefined;
    if (!url) {
      setError('Webhook not configured. Please set VITE_N8N_WEBHOOK_URL.');
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'voltbridge-site', step: 'contact', payload: form }),
      });
      if (!res.ok) throw new Error('Request failed');
      setMessage('Thanks! We will get back to you shortly.');
      setForm({ postCode: '', monthlySpend: '', contractStatus: '', firstName: '', lastName: '', email: '', phone: '' });
      setStep(1);
    } catch (err) {
      setError('There was a problem sending your details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="relative space-y-4" onSubmit={submit}>
      <div className="mb-2 flex items-center gap-2 text-xs text-white/60">
        <span className={`h-2 w-2 rounded-full ${step === 1 ? 'bg-[#0D76FA]' : 'bg-white/30'}`} />
        <span className={`h-2 w-2 rounded-full ${step === 2 ? 'bg-[#b100cd]' : 'bg-white/30'}`} />
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-white/75">Your post code</label>
            <input
              name="postCode"
              value={form.postCode}
              onChange={onChange}
              type="text"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#b100cd]/60 focus:outline-none focus:ring-0"
              placeholder="SW1A 1AA"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-white/75">Your current monthly energy spend (£)</label>
            <input
              name="monthlySpend"
              value={form.monthlySpend}
              onChange={onChange}
              type="number"
              min="0"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#0D76FA]/60 focus:outline-none focus:ring-0"
              placeholder="1000"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-white/75">Your current contract status</label>
            <div className="grid gap-2 sm:grid-cols-2">
              <label className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/80">
                <input
                  type="radio"
                  name="contractStatus"
                  value="out_of_contract"
                  checked={form.contractStatus === 'out_of_contract'}
                  onChange={onChange}
                />
                <span>Out of contract</span>
              </label>
              <label className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/80">
                <input
                  type="radio"
                  name="contractStatus"
                  value="in_contract_ending_soon"
                  checked={form.contractStatus === 'in_contract_ending_soon'}
                  onChange={onChange}
                />
                <span>In contract (ending soon)</span>
              </label>
            </div>
          </div>
          <div className="pt-2">
            <button type="button" onClick={next} className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#0D76FA] to-[#b100cd] px-6 py-3 text-sm font-semibold text-white shadow-[0_30px_80px_-40px_rgba(177,0,205,0.6)] transition hover:scale-105">Next</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-white/75">First Name</label>
              <input name="firstName" value={form.firstName} onChange={onChange} type="text" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#b100cd]/60 focus:outline-none focus:ring-0" placeholder="John" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-white/75">Last Name</label>
              <input name="lastName" value={form.lastName} onChange={onChange} type="text" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#b100cd]/60 focus:outline-none focus:ring-0" placeholder="Doe" />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-white/75">Email Address</label>
              <input name="email" value={form.email} onChange={onChange} type="email" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#0D76FA]/60 focus:outline-none focus:ring-0" placeholder="you@company.co.uk" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-white/75">Phone number</label>
              <input name="phone" value={form.phone} onChange={onChange} type="tel" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#0D76FA]/60 focus:outline-none focus:ring-0" placeholder="07123 456789" />
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 pt-2">
            <button type="button" onClick={back} className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-[#b100cd]/40 hover:text-[#b100cd]">Back</button>
            <button disabled={loading} type="submit" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0D76FA] to-[#b100cd] px-6 py-3 text-sm font-semibold text-white shadow-[0_30px_80px_-40px_rgba(177,0,205,0.6)] transition hover:scale-105 disabled:opacity-60">{loading ? 'Sending…' : 'Request my comparison'}</button>
          </div>
        </div>
      )}

      {error && <p className="text-sm text-red-400">{error}</p>}
      {message && <p className="text-sm text-emerald-400">{message}</p>}
    </form>
  );
};

const Index = () => {
  return (
    <div className="relative flex flex-col gap-24 pb-24 text-white">

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
          <img src="/Energy-Ombudsman-logo.png" alt="Energy Ombudsman" className="h-12 w-auto md:h-14" />
          <p className="text-base md:text-lg font-semibold text-white/90">VoltBridge Ltd is proudly registered with the Energy Ombudsman, ensuring trust, transparency, and customer protection</p>
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
              Our services
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Our services</h2>
            <p className="text-white/70 lg:max-w-2xl">
              Everything you need to compare tariffs, secure better pricing and keep your estate aligned with sustainability goals.
            </p>
          </div>
          <a
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-[#b100cd]/40 hover:text-[#b100cd]"
          >
            Explore the full portfolio
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
              <p className="relative mt-3 text-xs uppercase tracking-[0.3em] text-white/40">Learn more</p>
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
              How it works
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">How it works</h2>
            <p className="text-white/70 lg:max-w-2xl">
              Switching energy supplier with VoltBridge is refreshingly simple. We handle the details so you can focus on your business.
            </p>
          </motion.div>
          <motion.a
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#0D76FA] px-6 py-3 text-sm font-semibold text-white shadow-[0_30px_80px_-40px_rgba(13,118,250,0.7)] transition hover:scale-105"
          >
            Start your switch
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
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#0D76FA] to-[#b100cd] text-sm font-semibold text-white">
                {index + 1}
              </span>
              <p className="relative mt-4 text-base font-medium text-white/80">{step}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Ready for a personalised quote?</h2>
          <p className="text-white/70 lg:max-w-xl">
            Share a few details and our consultants will prepare a bespoke energy comparison tailored to your premises. No obligation, no hidden fees.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#b100cd]" />
              <span className="text-sm text-white/70">Regulated advice</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#b100cd]" />
              <span className="text-sm text-white/70">UK-wide supplier network</span>
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
          <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at top, rgba(13,118,250,0.18), transparent 65%)' }} />
          <MultiStepContactForm />
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
