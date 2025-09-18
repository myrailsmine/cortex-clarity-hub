import { BookOpen, Zap, Navigation } from "lucide-react";

const differentiators = [
  {
    icon: BookOpen,
    title: "From Rulebook to Execution",
    description: "Transform complex regulatory text into clear, actionable business requirements and implementation strategies."
  },
  {
    icon: Zap,
    title: "Capital-Aware AI",
    description: "Our AI understands the capital implications of regulatory decisions, providing cost-aware recommendations."
  },
  {
    icon: Navigation,
    title: "Regulatory Change Navigator",
    description: "Stay ahead of regulatory changes with intelligent monitoring and impact assessment capabilities."
  }
];

const Differentiators = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Unique Differentiators
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What sets RegCortex™ apart in the regulatory intelligence landscape
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {differentiators.map((diff, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto bg-gradient-hero rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-glow">
                  <diff.icon className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {diff.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;