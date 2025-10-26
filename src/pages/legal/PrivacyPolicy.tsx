import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navigation Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-[#0D76FA]/80">
          <li className="flex items-center">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
          </li>
          <li className="text-[#0D76FA]/50">/</li>
          <li className="text-white font-medium">Privacy Policy</li>
        </ol>
      </nav>

      {/* Hero tarjeta (sin imagen), coherente con el resto del sitio) */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[32px] border border-white/12 bg-[#07070D]/88 px-8 py-12 text-center shadow-[0_40px_130px_-80px_rgba(0,0,0,0.85)] backdrop-blur-xl mb-12"
      >
        <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(60% 60% at 20% 15%, rgba(13,118,250,0.18), transparent 70%), radial-gradient(70% 70% at 80% 85%, rgba(177,0,205,0.12), transparent 75%)' }} />
        <div className="relative mx-auto max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">Privacy Policy (UK GDPR)</h1>
          <p className="text-[#0D76FA]">Your privacy is important to us</p>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-vb-dark-2/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-vb-electric-1/10 mb-16"
      >
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Privacy Policy (UK GDPR)
          </h1>
          <div className="h-1 w-20 bg-vb-electric-1 rounded-full mb-6"></div>
          <p className="text-[#0D76FA] text-lg">
            Last Updated: September 10th 2025
          </p>
        </div>
        
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            VoltBridge Ltd ("VoltBridge", "we", "us", "our") is committed to protecting your personal data and respecting your privacy.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-[#0D76FA]">1. Who we are</h2>
          
          <div className="bg-vb-dark-3 p-6 rounded-lg mb-8">
            <ul className="space-y-3">
              <li className="flex">
                <span className="text-[#0D76FA] mr-2">•</span>
                <span><span className="font-medium">Controller:</span> VoltBridge Ltd (Company No. 16574977)</span>
              </li>
              <li className="flex">
                <span className="text-[#0D76FA] mr-2">•</span>
                <span><span className="font-medium">ICO Registration:</span> ZB968646</span>
              </li>
              <li className="flex">
                <span className="text-[#0D76FA] mr-2">•</span>
                <span>
                  <span className="font-medium">Registered Office:</span> Voltbridge Ltd<br />
                  124 City Road<br />
                  London EC1V 2NX<br />
                  United Kingdom
                </span>
              </li>
              <li className="flex">
                <span className="text-[#0D76FA] mr-2">•</span>
                <span><span className="font-medium">Contact for privacy matters:</span> <a href="mailto:privacy@voltbridge.co.uk" className="text-[#0D76FA] hover:underline">privacy@voltbridge.co.uk</a></span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-[#0D76FA]">2. What data we collect</h2>
          <p className="text-lg leading-relaxed">
            We may collect and process the following categories of personal data (primarily B2B):
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><span className="font-medium">Identification & contact:</span> Full name, job title, business name, email, phone/WhatsApp, postal address & postcode.</li>
            <li><span className="font-medium">Energy & account details (for quotes):</span> Current supplier(s), MPAN/MPRN or meter numbers, meter type (HH/NHH/Smart), contract end date, usage/consumption (kWh), spend estimates, and recent bill data.</li>
            <li><span className="font-medium">Communications:</span> Emails, messages (e.g., WhatsApp), call notes, call recordings (where applicable), and chat transcripts from our AI/website forms.</li>
            <li><span className="font-medium">Website data:</span> Device, IP address, general location, pages viewed, and cookies/analytics (see Cookie Policy).</li>
            <li><span className="font-medium">Compliance & complaints:</span> Complaint details and related correspondence; Ombudsman references where applicable.</li>
          </ul>
          
          <p className="text-lg leading-relaxed mt-6">
            We may collect data directly from you, from your colleagues/representatives, from public sources (e.g., Companies House), from brokers/partners you authorise, and from suppliers in connection with quotes/contracts.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-[#0D76FA]">3. Purposes & lawful bases</h2>
          <p className="text-lg leading-relaxed">
            We use your data for:
          </p>
          <ol className="list-decimal pl-6 space-y-4 mt-4">
            <li>
              <span className="font-medium">Providing quotes and brokering energy contracts with licensed suppliers.</span><br />
              <span className="text-[#0D76FA]">Lawful bases:</span> Contract, Legitimate Interests (to respond to B2B enquiries and source competitive rates).
            </li>
            <li>
              <span className="font-medium">Customer service, account management & complaint handling.</span><br />
              <span className="text-[#0D76FA]">Lawful bases:</span> Contract, Legitimate Interests, Legal Obligation.
            </li>
            <li>
              <span className="font-medium">Business communications & B2B marketing about similar services (you can opt out anytime).</span><br />
              <span className="text-[#0D76FA]">Lawful bases:</span> Legitimate Interests and PECR compliance for corporate subscribers.
            </li>
            <li>
              <span className="font-medium">Security, fraud prevention, audit & legal compliance (including Ombudsman, ADR, and regulatory requests).</span><br />
              <span className="text-[#0D76FA]">Lawful bases:</span> Legal Obligation, Legitimate Interests.
            </li>
            <li>
              <span className="font-medium">Analytics and service improvement (including training our human team and AI assistants).</span><br />
              <span className="text-[#0D76FA]">Lawful bases:</span> Legitimate Interests.
            </li>
          </ol>
          
          <p className="text-lg leading-relaxed mt-6">
            Where we rely on consent (e.g., certain cookies or optional marketing), you can withdraw it at any time.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-[#0D76FA]">4. Sharing your data</h2>
          <p className="text-lg leading-relaxed">
            We share data where necessary with:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><span className="font-medium">Energy suppliers and partners</span> to obtain quotes, validate metering/consumption, and set up contracts you authorise.</li>
            <li><span className="font-medium">Service providers / processors</span> acting on our instructions (e.g., CRM/databases such as Airtable, communication tools such as email/WhatsApp integrations, workflow automation such as n8n, cloud hosting and IT support). We have appropriate data processing terms in place.</li>
            <li><span className="font-medium">Professional services</span> (legal/accounting), insurers, dispute resolution bodies (e.g., Ombudsman), and authorities where legally required.</li>
            <li><span className="font-medium">Business change:</span> In the event of a merger, acquisition, or asset transfer, data may be disclosed under appropriate safeguards.</li>
          </ul>
          
          <p className="text-lg leading-relaxed mt-6">
            We do not sell your personal data.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-[#0D76FA]">5. International transfers</h2>
          <p className="text-lg leading-relaxed">
            Some providers may process data outside the UK. Where this occurs, we use appropriate safeguards (e.g., the UK International Data Transfer Agreement (IDTA), UK Addendum to the EU SCCs, or an adequacy decision) to protect your rights.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-[#0D76FA]">6. Retention</h2>
          <p className="text-lg leading-relaxed">
            We keep data only as long as necessary for the purposes above:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><span className="font-medium">Leads/enquiries:</span> up to 24 months from last interaction.</li>
            <li><span className="font-medium">Contracts and records:</span> generally 6 years after the end of our relationship (to meet legal/audit requirements).</li>
            <li><span className="font-medium">Complaints:</span> generally 6 years from closure.</li>
            <li><span className="font-medium">Cookies/analytics:</span> per our Cookie Policy.</li>
          </ul>
          
          <p className="text-lg leading-relaxed mt-6">
            We may retain data longer if required by law, to resolve disputes, or enforce agreements.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-[#0D76FA]">7. Your rights</h2>
          <p className="text-lg leading-relaxed">
            Under the UK GDPR you have rights to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Access your data and receive a copy.</li>
            <li>Rectify inaccurate or incomplete data.</li>
            <li>Erase data (in certain circumstances).</li>
            <li>Restrict or object to processing, including B2B marketing.</li>
            <li>Data portability (where applicable).</li>
            <li>Withdraw consent where processing relies on consent.</li>
          </ul>
          
          <p className="text-lg leading-relaxed mt-6">
            To exercise your rights, contact <a href="mailto:privacy@voltbridge.co.uk" className="text-[#0D76FA] hover:underline">privacy@voltbridge.co.uk</a>. We may need to verify your identity. You also have the right to complain to the Information Commissioner's Office (ICO) if you are unhappy with how we handle your data.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-[#0D76FA]">8. Security</h2>
          <p className="text-lg leading-relaxed">
            We implement technical and organisational measures appropriate to the risk, including access controls, encryption in transit where supported, least‑privilege permissions, logging, and staff training.
          </p>

          <div className="mt-12 pt-8 border-t border-vb-dark-3">
            <p className="text-[#0D76FA]/80 text-sm">
              If you have any questions about this privacy policy, please contact us at{' '}
              <a href="mailto:privacy@voltbridge.co.uk" className="text-[#0D76FA] hover:underline">
                privacy@voltbridge.co.uk
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
