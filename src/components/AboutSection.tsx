const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Who We Are
          </h2>
          
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-card-border">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              VoltBridge UK LTD is an independent energy broker based in the UK, committed to helping both households and businesses make smarter decisions when it comes to energy costs. Our mission is simple: provide transparent, reliable, and cost-effective energy solutions so our clients can focus on what matters most—growing their business or managing their home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;