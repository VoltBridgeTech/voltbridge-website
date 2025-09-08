import { MapPin, Search, CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MapPin,
      title: "Tell us about your energy usage",
      description: "Enter your postcode and monthly spend"
    },
    {
      icon: Search,
      title: "We compare the best deals",
      description: "Our smart platform searches top UK energy providers"
    },
    {
      icon: CheckCircle,
      title: "You switch and save",
      description: "Lock in better rates in minutes"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">Simple steps to start saving on your energy bills</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold z-10">
                  {index + 1}
                </div>
                
                {/* Icon Circle */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;