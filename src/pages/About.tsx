import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'Fintech expert with 15+ years in blockchain and payment systems.',
      img: '/images/team/alex.jpg'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'CTO',
      bio: 'Software architect specializing in secure financial platforms.',
      img: '/images/team/sarah.jpg'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Head of Compliance',
      bio: 'Regulatory expert ensuring all operations meet financial standards.',
      img: '/images/team/michael.jpg'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Constantly pushing boundaries in fintech solutions',
      icon: '💡'
    },
    {
      title: 'Security',
      description: 'Military-grade encryption for all transactions',
      icon: '🔒'
    },
    {
      title: 'Transparency',
      description: 'Clear processes with no hidden fees',
      icon: '🔍'
    },
    {
      title: 'Customer Focus',
      description: 'Solutions designed around user needs',
      icon: '❤️'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-16 shadow-xl">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/compliance/web_banner.jpeg" 
            alt="About VoltBridge"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              console.error('Error loading image:', target.src);
              target.src = 'https://via.placeholder.com/1920x500/1a1a2e/ffffff?text=VoltBridge+About+Us';
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-vb-navy/90 via-vb-navy/70 to-vb-electric-1/60 z-10"></div>
        <div className="relative z-20 h-full flex flex-col justify-center items-center px-8 md:px-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            About VoltBridge
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-vb-electric-2 max-w-2xl"
          >
            Pioneering the future of cross-border financial solutions
          </motion.p>
        </div>
      </div>

      {/* Our Story */}
      <section className="mb-20">
        <motion.h2 
          className="text-3xl font-bold text-white mb-8 text-center"
        >
          Our Story
        </motion.h2>
        <div className="grid grid-cols-1">
          <motion.div>
            <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-vb-electric-1/20">
              <p className="text-lg text-gray-300 mb-4">
                VoltBridge emerged at a pivotal moment in the UK energy market, born from a clear vision: to transform energy from a confusing, costly expense into a strategic asset for businesses. Our founder recognised that enterprises of all sizes - from local cafés to large chains - were consistently overpaying by 15-30% due to opaque pricing structures and lack of transparent market information.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                After experiencing firsthand the frustration of navigating complex energy contracts, our founder assembled a diverse team of energy market specialists, data scientists, and customer experience experts. This multidisciplinary approach allowed us to build a unique platform that combines cutting-edge technology with deep industry knowledge.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                What began as a solution to simplify energy procurement has evolved into a comprehensive service that empowers businesses to take control of their energy strategy. We've grown rapidly by focusing on the core challenges our clients face: understanding complex tariffs, identifying hidden savings opportunities, and navigating an ever-changing regulatory landscape.
              </p>
              <p className="text-lg text-gray-300">
                Today, VoltBridge serves a growing community of businesses across the UK, helping them achieve significant savings while providing the clarity and support needed to make confident energy decisions. Our journey continues as we develop new tools and services to address emerging energy challenges in the UK market.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="mb-12 text-center max-w-3xl mx-auto">
        <motion.div
          className="bg-gradient-to-r from-vb-electric-1/20 to-vb-navy/50 rounded-2xl p-8 border border-vb-electric-1/30"
        >
          <h3 className="text-2xl font-bold text-vb-electric-1 mb-4">Trust to Choose, Savings to Grow</h3>
          <p className="text-lg text-gray-300 mb-4">
            At VoltBridge, we empower businesses to pay the right price for their energy through:
          </p>
          <ul className="text-left text-gray-300 space-y-2 max-w-xl mx-auto">
            <li className="flex items-start">
              <span className="text-vb-electric-1 mr-2">✓</span>
              <span>Comprehensive market analysis comparing 50+ suppliers</span>
            </li>
            <li className="flex items-start">
              <span className="text-vb-electric-1 mr-2">✓</span>
              <span>Streamlined digital onboarding with 80% faster contract setup</span>
            </li>
            <li className="flex items-start">
              <span className="text-vb-electric-1 mr-2">✓</span>
              <span>Dedicated account managers providing personalised support</span>
            </li>
          </ul>
          <p className="text-lg text-gray-300 mt-4">
            This unique approach saves our clients an average of 22% on energy costs while freeing up valuable time to focus on their core business.
          </p>
        </motion.div>
      </section>

      {/* Our Mission */}
      <section className="mb-20">
        <motion.h2 className="text-3xl font-bold text-white mb-8 text-center">
          Our Mission & Vision
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-vb-dark-2 rounded-xl p-6 border border-vb-dark-3">
            <h3 className="text-xl font-bold text-vb-electric-1 mb-4">Mission</h3>
            <p className="text-gray-400 mb-3">
              To help businesses reduce energy costs and make confident decisions through transparent, technology-driven services.
            </p>
            <p className="text-gray-400">
              We achieve this by demystifying energy procurement, providing actionable insights through our analytics platform, and offering ongoing support to ensure optimal energy management throughout the contract lifecycle.
            </p>
          </div>
          <div className="bg-vb-dark-2 rounded-xl p-6 border border-vb-dark-3">
            <h3 className="text-xl font-bold text-vb-electric-1 mb-4">Vision</h3>
            <p className="text-gray-400 mb-3">
              To become the UK's leading energy broker, recognised for transparency, trustworthiness, and digital solutions that simplify business operations.
            </p>
            <p className="text-gray-400">
              By 2027, we aim to serve 15% of UK SMEs while expanding our renewable energy offerings to help businesses achieve both cost savings and sustainability goals.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-20">
        <motion.h2 className="text-3xl font-bold text-white mb-12 text-center">
          Our Core Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-vb-dark-2 rounded-xl p-6 text-center border border-vb-dark-3 hover:border-vb-electric-1/50 transition-colors">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-2">Transparency</h3>
            <p className="text-gray-400">
              We present all options with clear, jargon-free explanations of contract terms, fees, and potential savings. No hidden clauses, no surprises - just straightforward information to empower your decisions.
            </p>
          </div>
          <div className="bg-vb-dark-2 rounded-xl p-6 text-center border border-vb-dark-3 hover:border-vb-electric-1/50 transition-colors">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-2">Agility</h3>
            <p className="text-gray-400">
              In a rapidly changing energy market, we maintain flexibility to adapt to new regulations and market conditions. Our digital-first approach reduces paperwork by 90% and accelerates processes.
            </p>
          </div>
          <div className="bg-vb-dark-2 rounded-xl p-6 text-center border border-vb-dark-3 hover:border-vb-electric-1/50 transition-colors">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-bold text-white mb-2">Responsibility</h3>
            <p className="text-gray-400">
              We balance cost efficiency with environmental stewardship, helping clients reduce carbon footprints while saving money. 65% of our recommended contracts include renewable energy components.
            </p>
          </div>
          <div className="bg-vb-dark-2 rounded-xl p-6 text-center border border-vb-dark-3 hover:border-vb-electric-1/50 transition-colors">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-white mb-2">Trust</h3>
            <p className="text-gray-400">
              We build long-term partnerships based on consistent results. 92% of our clients renew with us, citing our reliable service and measurable savings as key factors in their decision.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
