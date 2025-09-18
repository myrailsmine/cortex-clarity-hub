import { Brain, Shield, TrendingUp } from "lucide-react";

const Overview = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Built for Financial Institutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Built for financial institutions navigating Basel capital rules. 
            Acting as a digital subject-matter expert in CCR, CVA, FRTB, and more.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">AI Intelligence</h3>
            <p className="text-muted-foreground">
              Advanced AI algorithms trained on Basel regulatory frameworks
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Compliance Ready</h3>
            <p className="text-muted-foreground">
              Enterprise-grade security with regulatory compliance built-in
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Capital Optimization</h3>
            <p className="text-muted-foreground">
              Real-time capital impact analysis and optimization insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;