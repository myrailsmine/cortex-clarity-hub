import { Clock, Shield, FileCheck, Target } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Faster Interpretation",
    description: "Reduce regulatory analysis time from weeks to hours with AI-powered insights"
  },
  {
    icon: Shield,
    title: "Reduced Compliance Risk",
    description: "Minimize regulatory violations with comprehensive rule coverage and updates"
  },
  {
    icon: FileCheck,
    title: "AI-Powered BRDs",
    description: "Generate accurate business requirement documents automatically"
  },
  {
    icon: Target,
    title: "Capital Impact Simulation",
    description: "Understand financial implications before implementing regulatory changes"
  }
];

const WhyChoose = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Why Choose RegCortex™
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your regulatory compliance process with intelligent automation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary rounded-xl flex items-center justify-center group-hover:bg-secondary transition-colors duration-300 shadow-card">
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;