import { Button } from '@/components/ui/button';
import { CircleCheck } from 'lucide-react';

const CTASection = () => {
  const benefits = [
    "Personalized plans delivered within 48 hours",
    "Expert coaching and ongoing support",
    "96% client success rate",
    "Science-backed methods adapted to your needs",
    "Sustainable approach for lasting results"
  ];

  return (
    <section id="cta" className="section-padding bg-gradient-to-b from-imve-800 to-imve-900 text-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Health?</h2>
          <p className="text-lg md:text-xl mb-8 text-imve-100">
            Join the thousands who have achieved their fitness and nutrition goals with IMVE's personalized coaching.
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-10 max-w-2xl mx-auto text-left">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <CircleCheck className="h-5 w-5 text-imve-300 mr-2 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          
          <Button size="lg" className="text-lg bg-white text-imve-800 hover:bg-imve-100">
            Start Your Fitness Journey Today
          </Button>
          
          <p className="mt-6 text-imve-200 text-sm">
            No long-term contracts. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;