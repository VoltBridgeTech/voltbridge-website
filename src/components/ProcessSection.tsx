import { motion, Variants } from "framer-motion";
import { CheckCircle, Zap, Clock, BarChart, Handshake } from "lucide-react";

const ProcessSection = () => {
  const processSteps = [
    {
      id: 1,
      title: "Select your service",
      description: "Choose electricity, gas, or a dual fuel comparison.",
      icon: <Zap className="w-6 h-6" />,
      color: "from-vb-electric-1 to-vb-electric-2"
    },
    {
      id: 2,
      title: "Choose your start date",
      description: "Set when you would like your new supply to begin.",
      icon: <Clock className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 3,
      title: "Add your usage",
      description: "Enter your estimated electricity and gas consumption.",
      icon: <BarChart className="w-6 h-6" />,
      color: "from-amber-500 to-orange-500"
    },
    {
      id: 4,
      title: "Confirm company type",
      description: "Select Limited, Sole Trader, or Charity so we can tailor the tariffs.",
      icon: <Handshake className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: 5,
      title: "Enter your business name",
      description: "We automatically verify your registration details for accuracy.",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 6,
      title: "Get tailored live tariffs",
      description: "Review the most competitive business energy & gas rates in real time.",
      icon: <Zap className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
  };

  return (
    <section id="process" className="relative py-24 overflow-hidden bg-gradient-to-b from-vb-dark-1 to-vb-dark-2">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
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
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            How We <span className="bg-gradient-to-r from-vb-electric-1 to-vb-electric-2 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A simple, transparent process to find you the best energy deal with minimal effort on your part.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-vb-electric-1/30 via-vb-electric-1/50 to-transparent -ml-px"></div>
          
          <motion.div 
            className="relative space-y-16"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.id} 
                className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                variants={item}
              >
                {/* Content */}
                <div className={`w-5/12 p-6 rounded-2xl bg-vb-dark-2/50 backdrop-blur-sm border border-white/5 hover:border-vb-electric-1/30 transition-all duration-300 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
                
                {/* Step indicator */}
                <div className="w-16 h-16 rounded-full bg-vb-dark-3 border-4 border-vb-dark-2 flex items-center justify-center mx-8 flex-shrink-0 relative z-10">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {step.id}
                  </div>
                </div>
                
                {/* Spacer for even items */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 left-1/2 w-4 h-4 rounded-full bg-vb-electric-1 transform -translate-x-1/2 animate-pulse"></div>
          <div className="absolute -bottom-10 left-1/2 w-4 h-4 rounded-full bg-vb-electric-1 transform -translate-x-1/2 opacity-0"></div>
        </div>
        
        {/* CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-vb-dark-2/80 to-vb-dark-3/80 rounded-2xl border border-white/5 backdrop-blur-sm">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to start saving?</h3>
              <p className="text-white/70">Launch our digital portal to view live business energy & gas quotes in minutes.</p>
            </div>
            <a
              href="https://voltbridge.tickd.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-vb-electric-1 to-vb-electric-2 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Go to quoting portal
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
