import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CookiesPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navigation Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-vb-electric-1/80">
          <li className="flex items-center">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
          </li>
          <li className="text-vb-electric-1/50">/</li>
          <li className="text-white font-medium">Cookie Policy</li>
        </ol>
      </nav>

      {/* Hero Section with Background Image */}
      <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-xl">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/compliance/web_banner.jpeg" 
            alt="Cookie Policy"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              console.error('Error loading image:', target.src);
              target.src = 'https://via.placeholder.com/1920x500/1a1a2e/ffffff?text=VoltBridge+Cookie+Policy';
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
              Cookie Policy
            </h1>
            <p className="text-xl text-vb-electric-2 max-w-2xl">
              How we use cookies on our website
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
            Cookie Policy
          </h1>
          <div className="h-1 w-20 bg-vb-electric-1 rounded-full mb-6"></div>
          <p className="text-white text-lg">
            Last Updated: September 10th 2025
          </p>
        </div>
        
        <div className="space-y-6 text-white">
          <section className="mb-8">
            <p className="mb-4">
              VoltBridge UK LTD ("VoltBridge", "we", "our", "us") uses cookies and similar technologies on our website [insert website URL] (the "Site") to improve user experience, analyse performance, and ensure the Site functions correctly. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-vb-electric-1">1. What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They allow the website to recognise your device and store certain information about your preferences or past actions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-vb-electric-1">2. Types of Cookies We Use</h2>
            <p className="mb-4">
              We use the following categories of cookies on our Site:
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2 text-vb-electric-1">Strictly Necessary Cookies</h3>
            <p className="mb-4">
              These cookies are essential for the proper functioning of the Site (e.g., enabling navigation, security, and access to secure areas). Without these cookies, some services cannot be provided.
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2 text-vb-electric-1">Performance & Analytics Cookies</h3>
            <p className="mb-4">
              These cookies collect information about how visitors use the Site, such as which pages are visited most often. We use this data to improve Site functionality and user experience.
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2 text-vb-electric-1">Functional Cookies</h3>
            <p className="mb-4">
              These cookies enable the Site to remember choices you make (such as language or region) and provide enhanced, personalised features.
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2 text-vb-electric-1">Advertising & Targeting Cookies</h3>
            <p className="mb-4">
              These cookies may be used to deliver relevant adverts to you and measure the effectiveness of advertising campaigns. They may also be placed by third parties (such as Google or LinkedIn).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-vb-electric-1">3. Third-Party Cookies</h2>
            <p className="mb-4">
              Some cookies on our Site are placed by third-party service providers, including but not limited to:<br/>
              • Google Analytics (for performance and traffic analysis).<br/>
              • LinkedIn / Meta platforms (for advertising and conversion tracking).<br/>
              We do not control these cookies. Please refer to the privacy policies of these providers for more information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-vb-electric-1">4. How We Use Cookies</h2>
            <p className="mb-4">
              We use cookies to:<br/>
              • Operate and secure the Site.<br/>
              • Analyse Site usage and performance.<br/>
              • Improve content and services.<br/>
              • Personalise user experience.<br/>
              • Deliver targeted advertising and measure its effectiveness.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-vb-electric-1">5. Your Choices</h2>
            <p className="mb-4">
              When you first visit our Site, you will be presented with a cookie banner asking for your consent to non-essential cookies. You can:<br/>
              • Accept all cookies.<br/>
              • Reject non-essential cookies.<br/>
              • Customise your preferences.<br/>
              <br/>
              You may also disable or delete cookies in your browser settings at any time. Please note that disabling essential cookies may affect the functionality of the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-vb-electric-1">6. Legal Basis for Processing</h2>
            <p className="mb-4">
              The use of strictly necessary cookies is based on our legitimate interest in operating a secure and functional website. For all other cookies, we rely on your consent under the Privacy and Electronic Communications Regulations (PECR) and UK GDPR.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-vb-electric-1">7. Retention of Cookies</h2>
            <p className="mb-4">
              Cookies may remain on your device for different periods:<br/>
              • Session cookies are deleted automatically once you close your browser.<br/>
              • Persistent cookies remain stored until they expire or are manually deleted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-vb-electric-1">8. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Cookie Policy from time to time. Updates will be posted on this page with the "Last Updated" date revised.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-vb-electric-1">9. Contact Us</h2>
            <p className="mb-4">
              If you have any questions regarding this Cookie Policy, please contact us:<br/>
              📧 Email: <a href="mailto:legal@voltbridge.co.uk" className="text-vb-electric-1 hover:underline">legal@voltbridge.co.uk</a><br/>
              📍 Address: VoltBridge UK LTD, Flat 1, 67 Kingsland Road, London E2 8FN, United Kingdom
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default CookiesPolicy;
