import { Search, BarChart3, Database, FileText, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const capabilities = [
  {
    icon: Search,
    title: "Basel Rule Intelligence",
    description: "Navigate complex Basel regulations with AI-powered analysis and interpretation of regulatory requirements."
  },
  {
    icon: BarChart3,
    title: "Capital Impact & Optimization Engine",
    description: "Real-time capital impact simulation and optimization recommendations for regulatory compliance."
  },
  {
    icon: Database,
    title: "Dynamic Knowledge Base",
    description: "Comprehensive regulatory knowledge repository that updates automatically with regulatory changes."
  },
  {
    icon: FileText,
    title: "Automated BRD Generator",
    description: "Generate business requirement documents automatically from regulatory analysis and specifications."
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Security",
    description: "Bank-level security infrastructure with encryption, audit trails, and compliance monitoring."
  }
];

const CoreCapabilities = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Core Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive regulatory intelligence platform designed for modern financial institutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <Card key={index} className="card-elevated border-0 h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {capability.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
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