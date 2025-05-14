import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "João Teixeira",
      role: "Objetivo de Perda de Peso",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300",
      content: "Perdi 14 kg em 4 meses com o plano personalizado da IMVE. O meu treinador ajustou a minha nutrição quando atingi platôs, e o programa de treinos encaixou perfeitamente na minha agenda ocupada!",
      achievement: "Perdeu 14 kg em 4 meses",
    },
    {
      name: "Miguel Silva",
      role: "Objetivo de Ganho Muscular",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300",
      content: "O plano alimentar era exatamente o que eu precisava - rico em proteínas mas ainda assim delicioso. O meu treinador estava sempre disponível para responder a perguntas, e a progressão dos treinos foi perfeita.",
      achievement: "Ganhou 5 kg de músculo em 6 meses",
    },
    {
      name: "Emília Santos",
      role: "Objetivo de Bem-Estar Geral",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300",
      content: "Não procurava uma grande perda de peso, apenas mais energia e saúde. A IMVE proporcionou-me exatamente isso - durmo melhor, tenho mais energia e agora até gosto de fazer exercício!",
      achievement: "Melhorou os níveis de energia e qualidade de sono",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            O que dizem os <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">nossos clientes</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram os seus corpos e vidas
          </p>
        </div>

        {/* Testemunhos para Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{testimonial.content}</p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-blue-700">
                    <span className="text-blue-500">Conquista:</span> {testimonial.achievement}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testemunhos para Mobile */}
        <div className="md:hidden">
          <Card className="bg-white shadow-lg overflow-hidden border-0">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonials[currentIndex].content}</p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-blue-700">
                  <span className="text-blue-500">Conquista:</span> {testimonials[currentIndex].achievement}
                </p>
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-center mt-6 space-x-4">
            <Button variant="outline" size="icon" onClick={handlePrevious}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleNext}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;