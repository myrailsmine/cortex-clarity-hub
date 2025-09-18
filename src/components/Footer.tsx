import { Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            RegCortex™ – The Regulatory Intelligence Portal
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Stay tuned – Portal launching soon
          </p>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/60">
            © 2024 RegCortex™. All rights reserved. | Regulatory Intelligence Platform
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;