import { Search, BarChart3, Database, FileText, Lock, LineChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const capabilities = [
  {
    icon: Search,
    title: "Basel Rule Intelligence",
    description: "Navigate complex Basel regulations with AI-powered analysis and interpretation of regulatory requirements.",
    gradient: "from-primary to-primary-glow"
  },
  {
    icon: BarChart3,
    title: "Capital Impact & Optimization Engine", 
    description: "Real-time capital impact simulation and optimization recommendations for regulatory compliance.",
    gradient: "from-secondary to-accent"
  },
  {
    icon: LineChart,
    title: "Regulatory Data Analytics Warehouse",
    description: "Advanced analytics engine for regulatory data intelligence with predictive insights and trend analysis.",
    gradient: "from-accent to-primary"
  },
  {
    icon: Database,
    title: "Dynamic Knowledge Base",
    description: "Comprehensive regulatory knowledge repository that updates automatically with regulatory changes.",
    gradient: "from-primary-glow to-secondary"
  },
  {
    icon: FileText,
    title: "BRD Genesis & Traceability Matrix™",
    description: "Intelligently generate, track, and trace business requirements from conception through implementation with full regulatory lineage and impact analysis.",
    gradient: "from-secondary to-primary"
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Security",
    description: "Bank-level security infrastructure with encryption, audit trails, and compliance monitoring.",
    gradient: "from-accent to-secondary"
  }
];

const CoreCapabilities = () => {
  return (
    <section className="py-24 section-gradient relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl" />
        <div className="floating-element absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-secondary/15 to-transparent rounded-full blur-2xl" style={{ animationDelay: '2s' }} />
        <div className="floating-element absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-xl" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Core Capabilities</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Next-generation regulatory intelligence platform that transforms complex compliance into competitive advantage
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <Card key={index} className="card-elevated border-0 h-full group cursor-pointer">
              <CardHeader className="text-center pb-6">
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${capability.gradient} rounded-2xl flex items-center justify-center pulse-glow shadow-lg group-hover:scale-110 transition-all duration-500`}>
                  <capability.icon className="w-10 h-10 text-white drop-shadow-lg" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {capability.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-8">
                <CardDescription className="text-center text-muted-foreground leading-relaxed text-base">
                  {capability.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;