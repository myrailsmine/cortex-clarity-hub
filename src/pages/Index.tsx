import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import CoreCapabilities from "@/components/CoreCapabilities";
import Differentiators from "@/components/Differentiators";
import WhyChoose from "@/components/WhyChoose";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Overview />
      <CoreCapabilities />
      <Differentiators />
      <WhyChoose />
      <Footer />
    </main>
  );
};

export default Index;
