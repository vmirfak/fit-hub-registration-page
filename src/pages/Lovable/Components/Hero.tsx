import { Button } from "@/components/ui/button";
import { Play, Check, ArrowRight, Zap, Award, Users } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [, setAnimatedCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations when component mounts
    setIsVisible(true);

    // Animate the customer count
    const duration = 2000;
    const steps = 50;
    const increment = 2000 / steps;
    const stepDuration = duration / steps;

    let currentCount = 0;
    const countInterval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= 2000) {
        setAnimatedCount(2000);
        clearInterval(countInterval);
      } else {
        setAnimatedCount(Math.floor(currentCount));
      }
    }, stepDuration);

    return () => clearInterval(countInterval);
  }, []);

  const features = [
    { icon: <Zap className="w-5 h-5" />, text: "Resultados em 30 dias" },
    { icon: <Award className="w-5 h-5" />, text: "Certificado por especialistas" },
    { icon: <Users className="w-5 h-5" />, text: "Suporte 24/7" }
  ];

  return (
    <div className="py-20 bg-gradient-to-r from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 pb-20 md:pt-24 md:pb-28 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            {/* Animated heading */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Acompanhamento Personalizado de{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-400 bg-clip-text text-transparent">
                    Fitness
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-400 blur-2xl opacity-20 -z-10"></div>
                </span>{" "}
                &{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                    Nutrição
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 blur-2xl opacity-20 -z-10"></div>
                </span>
              </h1>
            </div>

            {/* Animated description */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
                Planos de refeições e programas de treino personalizados, desenhados de acordo com os teus objetivos, preferências e estilo de vida. Alcança resultados sustentáveis com orientação especializada.
              </p>
            </div>

            {/* Features list */}
            <div className={`mt-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
              <div className="flex flex-wrap gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-200">
                    <div className="text-blue-600">{feature.icon}</div>
                    <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`mt-10 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="group relative overflow-hidden text-white bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 hover:from-blue-700 hover:via-purple-700 hover:to-teal-600 px-8 py-6 rounded-xl text-lg font-medium cursor-pointer hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <a href="#letsbegin" className="relative z-10 flex items-center gap-2">
                    Começa a Tua Jornada
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced image section */}
          <div className={`md:w-1/2 mt-12 md:mt-0 relative transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
            <div className="relative">
              {/* Main image container */}
              <div className="relative rounded-3xl shadow-2xl overflow-hidden w-full h-[400px] md:h-[500px] group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/20 via-transparent to-teal-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="https://www.trainerize.com/blog/wp-content/uploads/2023/10/BLOG-HEADER-OVERLAYS-1200-X-800-4.png"
                  alt="Acompanhamento de fitness IMVE"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-6 transform transition-all duration-300 hover:scale-110 hover:bg-white/30 opacity-0 group-hover:opacity-100">
                    <Play className="w-12 h-12 text-white fill-white" />
                  </button>
                </div>
              </div>

              <div className="absolute -left-4 bottom-8 bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform duration-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Treino Completo</p>
                    <p className="text-sm font-semibold text-gray-700">85% dos objetivos</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-4 text-white ">
                <div className="text-center">
                  <p className="text-2xl font-bold">-5kg</p>
                  <p className="text-xs opacity-90">Este mês</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;