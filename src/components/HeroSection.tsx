import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import heroImage from "@/assets/hero-energy.jpg";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  // Parallax effect for background
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  
  // Check for mobile on component mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animation variants with proper TypeScript types
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as any // Type assertion for cubic-bezier values
      } 
    },
  };

  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProcess = () => {
    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="relative w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-[110vh]"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.8)',
          y: isMobile ? '0%' : yBg
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-vb-navy/90 via-vb-navy/70 to-vb-navy/90" />
      </motion.div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "url(" + encodeURI("data:image/svg+xml,<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><g fill='%23ffffff' fill-opacity='0.1'><path d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/></g></g></svg>") + ""
          }}
        />
      </div>

      {/* Animated Elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-vb-electric-1/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-[90vh] flex items-center justify-center pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto text-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white"
              variants={item}
            >
              Smart Moves,
              <motion.span 
                className="block bg-gradient-to-r from-vb-electric-1 to-vb-electric-2 bg-clip-text text-transparent mt-2"
                variants={item}
              >
                Slow Bills
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              variants={item}
            >
              Harness the power of intelligent energy solutions. Compare, switch, and start saving with VoltBridge today.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
              variants={item}
            >
              <Button 
                onClick={scrollToForm}
                size="lg"
                className="relative overflow-hidden group bg-gradient-to-r from-vb-electric-1 to-vb-electric-2 text-white font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_5px_rgba(101,175,255,0.6)] hover:scale-105"
              >
                <span className="relative z-10">Get My Free Quote</span>
                <span className="absolute inset-0 bg-gradient-to-r from-vb-electric-2 to-vb-electric-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={scrollToProcess}
                className="text-white border-white/30 hover:bg-white/10 hover:border-white/50 bg-transparent/10 backdrop-blur-sm text-lg px-8 py-6 rounded-full transition-all duration-300 group"
              >
                <span className="relative z-10 group-hover:text-vb-electric-1 transition-colors">
                  Learn More
                </span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-20 mt-20 border-t border-white/10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              } 
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { value: '10,000+', label: 'Happy Customers' },
              { value: '£5M+', label: 'Saved Annually' },
              { value: '4.9/5', label: 'Customer Rating' },
              { value: '24/7', label: 'Dedicated Support' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-vb-electric-1 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-wider text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 1.5, duration: 0.5 }
        }}
      >
        <div className="flex flex-col items-center cursor-pointer" onClick={() => window.scrollBy({ top: window.innerHeight - 100, behavior: 'smooth' })}>
          <span className="text-sm text-white/80 mb-2">Scroll to explore</span>
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center p-1 group">
            <motion.div
              className="w-1.5 h-4 bg-white rounded-full"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;