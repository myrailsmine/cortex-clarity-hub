import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import regcortexLogo from "@/assets/regcortex-logo.png";

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
      <div className="absolute inset-0 opacity-25">
        <div className="floating-element absolute top-20 left-20 w-40 h-40 border-2 border-primary-glow/30 rounded-full blur-sm" />
        <div className="floating-element absolute top-32 right-32 w-32 h-32 border border-accent/40 rounded-2xl rotate-45" style={{ animationDelay: '3s' }} />
        <div className="floating-element absolute bottom-40 left-32 w-52 h-52 border-2 border-secondary/20 rounded-full blur-md" style={{ animationDelay: '1s' }} />
        <div className="floating-element absolute bottom-20 right-40 w-28 h-28 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-lg" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="mb-12">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={regcortexLogo} 
              alt="RegCortex Logo" 
              className="w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl floating-element"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
            <span className="block gradient-text drop-shadow-2xl">RegCortex™</span>
            <span className="block text-4xl md:text-6xl font-light text-white/95 mt-4 drop-shadow-lg">
              Turning Basel Complexity into Business Clarity
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            An AI-powered regulatory intelligence platform that transforms Basel regulations 
            into actionable insights for financial institutions.
          </p>
        </div>
        
        <div className="space-y-6">
          <Button 
            variant="hero"
            size="lg" 
            className="px-16 py-8 text-xl font-bold rounded-2xl group relative overflow-hidden transform transition-all duration-500 hover:scale-105 shadow-2xl"
          >
            <Sparkles className="w-7 h-7 mr-4 group-hover:animate-spin transition-transform duration-700" />
            Launch Portal – Coming Soon
          </Button>
          
          <p className="text-lg text-white/80 font-medium tracking-wide">
            Join the waitlist for early access to the future of regulatory intelligence
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;