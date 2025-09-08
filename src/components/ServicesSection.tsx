import { Building2, Home, FileText } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Business Energy Comparison",
      description: "Save money with commercial energy switching tailored to your business needs."
    },
    {
      icon: Home,
      title: "Home Energy Switching",
      description: "Residential users can easily find better rates and switch hassle-free."
    },
    {
      icon: FileText,
      title: "Contract Monitoring & Renewal",
      description: "We track your contract end dates and help you renew at better terms."
    }
  ];

  return (
    <section id="services" className="py-20 bg-surface">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground">Comprehensive energy solutions for every need</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;