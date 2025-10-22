import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navigation Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-[#0D76FA]/80">
          <li className="flex items-center">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
          </li>
          <li className="text-[#0D76FA]/50">/</li>
          <li className="text-white font-medium">Terms of Service</li>
        </ol>
      </nav>

      {/* Hero Section with Background Image */}
      <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-xl">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/compliance/web_banner.jpeg" 
            alt="Terms of Service"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              console.error('Error loading image:', target.src);
              target.src = 'https://via.placeholder.com/1920x500/1a1a2e/ffffff?text=VoltBridge+Terms+of+Service';
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-vb-navy/90 via-vb-navy/70 to-vb-electric-1/60 z-10"></div>
        <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Terms of Service
            </h1>
            <p className="text-xl text-[#0D76FA] max-w-2xl">
              Your agreement with VoltBridge
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-vb-dark-2/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-vb-electric-1/10 mb-16"
      >
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <div className="h-1 w-20 bg-vb-electric-1 rounded-full mb-6"></div>
          <p className="text-[#0D76FA] text-lg">
            Last Updated: September 10th 2024
          </p>
        </div>
        
        <div className="space-y-6 text-white">
          <section className="mb-8">
            <p className="mb-4">
              These Terms and Conditions ("Terms") govern your use of the website [insert URL] (the "Site") operated by VoltBridge UK LTD ("VoltBridge", "we", "us", "our"). By accessing or using the Site and our services, you agree to be bound by these Terms. If you do not agree, you must discontinue use immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#0D76FA]">1. Definitions</h2>
            <p className="mb-4">
              "Client": any business or individual authorised to act on behalf of a business engaging VoltBridge services.<br/>
              "Services": energy price comparison and brokerage services provided by VoltBridge.<br/>
              "Supplier": licensed energy provider in the United Kingdom with whom contracts are arranged.<br/>
              "Contract": an energy supply agreement between the Client and a Supplier.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#0D76FA]">2. Company Information</h2>
            <p className="mb-4">
              VoltBridge UK LTD<br/>
              Flat 1, 67 Kingsland Road<br/>
              London E2 8FN<br/>
              United Kingdom<br/>
              📧 Email: legal@voltbridge.co.uk
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#0D76FA]">3. Scope of Services</h2>
            <p className="mb-4">
              3.1 VoltBridge provides independent comparisons of business energy tariffs and facilitates introductions between Clients and Suppliers.<br/>
              3.2 VoltBridge does not supply, generate, or sell energy directly.<br/>
              3.3 Any contract entered into is strictly between the Client and the chosen Supplier.<br/>
              3.4 VoltBridge may receive commissions from Suppliers; this will not affect the impartiality of recommendations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#0D76FA]">4. Use of the Site</h2>
            <p className="mb-4">
              4.1 You agree to use the Site only for lawful purposes and in accordance with these Terms.<br/>
              4.2 You must not:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;• misuse the Site by knowingly introducing viruses, malware, or harmful material;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;• attempt unauthorised access to our systems;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;• copy, reproduce, or distribute Site content without written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#0D76FA]">5. Client Obligations</h2>
            <p className="mb-4">
              5.1 You warrant that all information you provide (including consumption data, meter details, and business information) is accurate and complete.<br/>
              5.2 You acknowledge that you are responsible for reviewing and entering into any Contract with a Supplier.<br/>
              5.3 You agree not to hold VoltBridge liable for any obligations arising under the Contract with the Supplier.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#0D76FA]">6. Limitation of Liability</h2>
            <p className="mb-4">
              6.1 To the fullest extent permitted by law, VoltBridge excludes all liability for any:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;• indirect or consequential losses;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;• loss of profits, business, revenue, or goodwill;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;• damages resulting from reliance on information provided on the Site.<br/>
              6.2 Nothing in these Terms excludes liability for death or personal injury caused by negligence, fraud, or any liability that cannot be excluded under English law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#0D76FA]">7. Indemnity</h2>
            <p className="mb-4">
              You agree to indemnify and hold harmless VoltBridge, its officers, employees, and agents against any claims, liabilities, damages, losses, or expenses arising out of your breach of these Terms or misuse of the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#0D76FA]">8. Intellectual Property Rights</h2>
            <p className="mb-4">
              8.1 All intellectual property on the Site (logos, trademarks, text, graphics, software, and designs) are owned by VoltBridge or its licensors.<br/>
              8.2 You are granted a limited, non-transferable licence to access and use the Site for business purposes only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#0D76FA]">9. Data Protection and Privacy</h2>
            <p className="mb-4">
              9.1 VoltBridge will process personal and business data in accordance with applicable data protection laws, including the UK GDPR and Data Protection Act 2018.<br/>
              9.2 Please refer to our <Link to="/privacy-policy" className="text-[#0D76FA] hover:underline">Privacy Policy</Link> for details on how we collect, store, and use your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#0D76FA]">10. Regulatory Compliance</h2>
            <p className="mb-4">
              10.1 VoltBridge operates in alignment with the Third Party Intermediary (TPI) Code of Practice and the Retail Energy Code Company (RECCo) assurance framework.<br/>
              10.2 We are committed to transparency, integrity, and compliance with all applicable regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#0D76FA]">11. Termination and Suspension</h2>
            <p className="mb-4">
              11.1 We reserve the right to suspend or terminate access to the Site at any time without notice if we reasonably believe you have breached these Terms.<br/>
              11.2 Termination shall not affect any accrued rights or obligations prior to termination.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#0D76FA]">12. Changes to Terms</h2>
            <p className="mb-4">
              VoltBridge may amend these Terms from time to time. Updates will be posted on this page with the "Last Updated" date revised. Continued use of the Site after such changes constitutes acceptance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#0D76FA]">13. Severability</h2>
            <p className="mb-4">
              If any provision of these Terms is found to be unlawful or unenforceable, the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#0D76FA]">14. Entire Agreement</h2>
            <p className="mb-4">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and VoltBridge regarding your use of the Site and Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#0D76FA]">15. Governing Law and Jurisdiction</h2>
            <p className="mb-4">
              These Terms are governed by the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction over any disputes arising out of or relating to these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#0D76FA]">16. Contact Information</h2>
            <p className="mb-4">
              For any legal enquiries, please contact:<br/>
              📧 Email: <a href="mailto:legal@voltbridge.co.uk" className="text-[#0D76FA] hover:underline">legal@voltbridge.co.uk</a><br/>
              📍 Address: VoltBridge UK LTD, Flat 1, 67 Kingsland Road, London E2 8FN, United Kingdom
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsOfService;
