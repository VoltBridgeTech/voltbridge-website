import { Building2, Home, FileText, Zap, ShieldCheck, BarChart2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Business Energy Comparison",
      description: "Save money with commercial energy switching tailored to your business needs. We analyze your usage patterns to find the best rates.",
      color: "from-vb-electric-1 to-vb-electric-2"
    },
    {
      icon: Home,
      title: "Home Energy Switching",
      description: "Residential users can easily find better rates and switch hassle-free. No hidden fees, no service interruptions.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: FileText,
      title: "Contract Monitoring & Renewal",
      description: "We track your contract end dates and help you renew at better terms. Never overpay for your energy again.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Renewable Energy Solutions",
      description: "Transition to green energy with our eco-friendly power options. Reduce your carbon footprint and energy costs.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: ShieldCheck,
      title: "Energy Efficiency Audits",
      description: "Our experts analyze your energy usage and recommend ways to improve efficiency and reduce waste.",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: BarChart2,
      title: "Usage Analytics",
      description: "Gain insights into your energy consumption with our detailed analytics and reporting tools.",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      } 
    },
  };

  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzB2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNHYtNEg0djRIMHYyaDR2NEg2VjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>
      
      <div className="section-container">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-vb-electric-1 bg-vb-electric-1/10 rounded-full border border-vb-electric-1/30 mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Powering Your <span className="bg-gradient-to-r from-vb-electric-1 to-vb-electric-2 bg-clip-text text-transparent">Future</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive energy solutions designed to optimize costs, enhance efficiency, and support your sustainability goals.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="group relative p-8 bg-vb-dark-2/50 rounded-2xl border border-white/5 backdrop-blur-sm hover:border-vb-electric-1/30 transition-all duration-300 overflow-hidden"
              variants={item}
              whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(13, 118, 250, 0.3)' }}
            >
              {/* Gradient accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
              
              {/* Icon container with gradient */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-white/70 mb-6">
                {service.description}
              </p>
              
              <></>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-vb-electric-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 rounded-full bg-white/20 group-hover:bg-vb-electric-1 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-vb-dark-2/80 to-vb-dark-3/80 rounded-2xl border border-white/5 backdrop-blur-sm">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to save on your energy bills?</h3>
              <p className="text-white/70">Get a free, no-obligation quote in just 2 minutes.</p>
            </div>
            <button onClick={scrollToForm} className="px-8 py-4 bg-gradient-to-r from-vb-electric-1 to-vb-electric-2 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap">
              Get Started Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;