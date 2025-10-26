import { motion } from 'framer-motion';
import { useState } from 'react';
import { Building2, Leaf, ShieldCheck, LineChart, Users, CheckCircle2 } from 'lucide-react';

const trustMetrics = [
  { stat: '£12.4m', detail: 'in negotiated savings for UK business portfolios' },
  { stat: '1,300+', detail: 'commercial sites managed nationwide' },
  { stat: '98%', detail: 'renewal retention achieved with our ongoing support' },
];

const services = [
  {
    icon: <Building2 className="w-6 h-6 text-[#0D76FA]" />,
    title: 'Strategic procurement',
    description: 'Tendering and negotiating multi-site energy contracts with leading UK suppliers.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#0D76FA]" />,
    title: 'Energy risk management',
    description: 'Hedging, staggered fixing and alerts to stay ahead of market volatility.',
  },
  {
    icon: <LineChart className="w-6 h-6 text-[#0D76FA]" />,
    title: 'Intelligence & ESG reporting',
    description: 'Consumption dashboards, ESG reporting and advisory to accelerate your net-zero roadmap.',
  },
];

const caseStudies = [
  {
    sector: 'National logistics group',
    outcome: '£18,700 annual saving',
    detail: 'Restructured a multi-site gas contract with price caps and consolidated billing.',
  },
  {
    sector: 'Industrial manufacturing',
    outcome: '21% tariff reduction',
    detail: 'Implemented dual-fuel hedging with flex clauses to soften market spikes.',
  },
  {
    sector: 'Hospitality & leisure',
    outcome: '8-week onboarding',
    detail: 'Integrated with finance systems to track consumption and avoid penalty charges.',
  },
];

const steps = [
  'Share your consumption profile and key contract dates.',
  'We model scenarios with regulated suppliers and corporate tariffs.',
  'Internal approval, digital signature and ongoing savings oversight.',
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
    companyName: '',
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
      setError('Please complete all Step 1 fields to continue.');
      return;
    }
    setStep(2);
  };

  const back = () => {
    setError(null);
    setStep(1);
  };

  const readableStatus = form.contractStatus === 'out_of_contract'
    ? 'Out of contract'
    : form.contractStatus === 'in_contract_ending_soon'
      ? 'In contract (ending soon)'
      : 'Pending';

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    if (!form.companyName || !form.firstName || !form.lastName || !form.email || !form.phone) {
      setError('Please complete the required fields to send your request.');
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
      setMessage('Thanks! Our consultants will reach out shortly with your tailored comparison.');
      setForm({
        postCode: '',
        monthlySpend: '',
        contractStatus: '',
        companyName: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      });
      setStep(1);
    } catch (err) {
      setError('There was a problem sending your details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="relative space-y-4" onSubmit={submit}>
      <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
        <span className={`flex items-center gap-2 ${step === 1 ? 'text-white' : ''}`}>
          <span className={`h-2 w-2 rounded-full ${step === 1 ? 'bg-[#0D76FA]' : 'bg-white/30'}`} />
          Step 1
        </span>
        <span className={`flex items-center gap-2 ${step === 2 ? 'text-white' : ''}`}>
          <span className={`h-2 w-2 rounded-full ${step === 2 ? 'bg-[#b100cd]' : 'bg-white/30'}`} />
          Step 2
        </span>
      </div>

      {step === 1 && (
        <div className="space-y-5">
          <div className="space-y-2 text-left">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">Usage details</h3>
            <p className="text-sm text-white/60">Share your supply snapshot so we can model the right pricing scenarios.</p>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-white/75">Postal code</label>
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
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 text-sm">£</span>
              <input
                name="monthlySpend"
                value={form.monthlySpend}
                onChange={onChange}
                type="number"
                min="0"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 pl-9 text-sm text-white placeholder:text-white/40 focus:border-[#0D76FA]/60 focus:outline-none focus:ring-0"
                placeholder="2500"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-white/75">Your current contract status</label>
            <div className="grid gap-2 sm:grid-cols-2">
              <label className={`flex items-center gap-2 rounded-xl border ${form.contractStatus === 'out_of_contract' ? 'border-[#0D76FA]/70 bg-[#0D76FA]/10' : 'border-white/15 bg-white/5'} px-4 py-3 text-sm text-white/80 transition`}
              >
                <input
                  type="radio"
                  name="contractStatus"
                  value="out_of_contract"
                  checked={form.contractStatus === 'out_of_contract'}
                  onChange={onChange}
                />
                <span>Out of contract</span>
              </label>
              <label className={`flex items-center gap-2 rounded-xl border ${form.contractStatus === 'in_contract_ending_soon' ? 'border-[#0D76FA]/70 bg-[#0D76FA]/10' : 'border-white/15 bg-white/5'} px-4 py-3 text-sm text-white/80 transition`}
              >
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
            <button
              type="button"
              onClick={next}
              disabled={!form.postCode || !form.monthlySpend || !form.contractStatus}
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#0D76FA] to-[#b100cd] px-6 py-3 text-sm font-semibold text-white shadow-[0_30px_80px_-40px_rgba(177,0,205,0.6)] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
            <p className="font-semibold text-white">Summary</p>
            <div className="mt-3 space-y-2 text-white/70">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">Postal code</span>
                <span>{form.postCode || 'Pending'}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">Monthly spend</span>
                <span>{form.monthlySpend ? `£${form.monthlySpend}` : 'Pending'}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">Contract status</span>
                <span>{readableStatus}</span>
              </div>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-white/75">First name</label>
              <input name="firstName" value={form.firstName} onChange={onChange} type="text" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#b100cd]/60 focus:outline-none focus:ring-0" placeholder="Jane" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-white/75">Last name</label>
              <input name="lastName" value={form.lastName} onChange={onChange} type="text" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#b100cd]/60 focus:outline-none focus:ring-0" placeholder="Smith" />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-white/75">Company name</label>
              <input name="companyName" value={form.companyName} onChange={onChange} type="text" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#0D76FA]/60 focus:outline-none focus:ring-0" placeholder="VoltBridge Ltd" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-white/75">Email address</label>
              <input name="email" value={form.email} onChange={onChange} type="email" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#0D76FA]/60 focus:outline-none focus:ring-0" placeholder="you@company.co.uk" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-white/75">Phone number</label>
              <input name="phone" value={form.phone} onChange={onChange} type="tel" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#0D76FA]/60 focus:outline-none focus:ring-0" placeholder="020 1234 5678" />
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 pt-2">
            <button type="button" onClick={back} className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-[#b100cd]/40 hover:text-[#b100cd]">Back</button>
            <button disabled={loading} type="submit" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0D76FA] to-[#b100cd] px-6 py-3 text-sm font-semibold text-white shadow-[0_30px_80px_-40px_rgba(177,0,205,0.6)] transition hover:scale-105 disabled:opacity-60">{loading ? 'Sending…' : 'Send my comparison'}</button>
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
    <div className="relative flex flex-col gap-24 pb-24 pt-16 sm:pt-20 text-white">

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
              UK corporate services
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Energy solutions engineered for CFOs and operations leaders</h2>
            <p className="text-white/70 lg:max-w-2xl">
              We orchestrate procurement, risk cover and reporting so your finance team keeps energy spend under control without diverting internal resources.
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
              Our process
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">How we safeguard long-term savings</h2>
            <p className="text-white/70 lg:max-w-2xl">
              Our analysts and energy traders act as an extension of your team—from the initial audit through monthly consumption reviews and renewals.
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
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Real-world results for real businesses</h2>
            <p className="text-white/70 lg:max-w-2xl">
              These outcomes are representative of the projects we manage—complex contracts, multi-site portfolios and aggressive savings targets.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0D76FA] to-[#b100cd] px-6 py-3 text-sm font-semibold text-white shadow-[0_30px_80px_-40px_rgba(13,118,250,0.7)] transition hover:scale-105"
          >
            Request a discovery call
          </a>
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
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Let’s talk about your corporate energy spend</h2>
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
          <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at top, rgba(13,118,250,0.18), transparent 65%)' }} />
          <MultiStepContactForm />
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
