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
    <section className="py-24 section-gradient relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="floating-element absolute top-16 right-16 w-44 h-44 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-2xl" />
        <div className="floating-element absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-xl" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Why Choose RegCortex™</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Transform your regulatory compliance process with intelligent automation and next-generation insights
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center group-hover:from-secondary group-hover:to-accent transition-all duration-500 shadow-2xl pulse-glow group-hover:scale-110">
                <benefit.icon className="w-12 h-12 text-white drop-shadow-lg" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
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