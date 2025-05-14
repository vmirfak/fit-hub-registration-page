
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Process from "./Components/Process";
import Features from "./Components/Features";
import Testimonials from "./Components/Testimonials";
import CallToAction from "./Components/CallToAction";
import Footer from "./Components/Footer";
import FAQ from "./Components/FAQ";
import PricingComponent from "./Components/Pricing";

const WebPageLovable = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Process />
        <Features />
        <Testimonials />
        <FAQ />
        <CallToAction />
        <PricingComponent />
      </main>
      <Footer />
    </div>
  );
};

export default WebPageLovable;