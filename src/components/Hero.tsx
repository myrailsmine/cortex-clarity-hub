import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80" />
      
      {/* Animated Geometric Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary-glow rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 border border-secondary rounded-lg rotate-45 animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="block">RegCortex™</span>
            <span className="block text-3xl md:text-5xl font-light text-primary-glow">
              Turning Basel Complexity into Business Clarity
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            An AI-powered regulatory intelligence platform that transforms Basel regulations 
            into actionable insights for financial institutions.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button 
            variant="hero"
            size="lg" 
            className="px-12 py-6 text-lg font-semibold rounded-xl group relative overflow-hidden"
          >
            <Sparkles className="w-6 h-6 mr-3 group-hover:animate-spin" />
            Launch Portal – Coming Soon
          </Button>
          
          <p className="text-sm text-white/70 font-medium">
            Join the waitlist for early access
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;