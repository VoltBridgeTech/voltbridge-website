const WhyChooseSection = () => {
  const features = [
    "100% independent & unbiased",
    "Transparent pricing",
    "No hidden fees",
    "Fast and secure switching",
    "Expert UK-based support",
    "Works for both homes and businesses"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground">The trusted choice for energy switching across the UK</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="feature-check text-lg">
                  {feature}
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-primary to-primary-hover p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Saving?</h3>
              <p className="text-lg mb-6 text-gray-100">
                Join thousands of satisfied customers who have switched to better energy deals with VoltBridge.
              </p>
              <div className="bg-white/20 rounded-lg p-4">
                <p className="text-sm text-gray-200 mb-2">Average annual savings</p>
                <p className="text-3xl font-bold">£400+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;