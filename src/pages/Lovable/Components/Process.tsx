import { Check, ClipboardCheck, Clock, FileText, ArrowRight, Users, Target } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Process = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  const steps = [
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Preenche o Questionário",
      description: "Preenche a nossa avaliação detalhada sobre os teus objetivos, preferências e estilo de vida.",
      color: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-50",
      iconBorder: "border-blue-100",
      gradient: "from-blue-600/10 to-blue-600/20",
      stat: "5 a 10 min",
      statLabel: "Tempo médio",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-teal-600" />,
      title: "Análise Especializada",
      description: "Os nossos profissionais analisam os teus dados para criar um plano personalizado à tua medida.",
      color: "from-teal-500 to-teal-600",
      iconBg: "bg-teal-50",
      iconBorder: "border-teal-100",
      gradient: "from-teal-600/10 to-teal-600/20",
      stat: "50+",
      statLabel: "Pontos analisados",
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      title: "Recebe o Teu Plano",
      description: "Recebe os teus planos alimentares e treinos personalizados em até 48 horas.",
      color: "from-orange-500 to-orange-600",
      iconBg: "bg-orange-50",
      iconBorder: "border-orange-100",
      gradient: "from-orange-600/10 to-orange-600/20",
      stat: "24-48h",
      statLabel: "Tempo de entrega",
    },
    {
      icon: <Check className="w-8 h-8 text-green-600" />,
      title: "Acompanhamento Contínuo",
      description: "Acompanha o teu progresso, recebe ajustes e apoio contínuo do teu coach.",
      color: "from-green-500 to-green-600",
      iconBg: "bg-green-50",
      iconBorder: "border-green-100",
      gradient: "from-green-600/10 to-green-600/20",
      stat: "24/7",
      statLabel: "Suporte disponível",
    },
  ];

  useEffect(() => {
    // Animation timeline for steps
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [steps.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate steps in sequence
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-white to-blue-50">
      <div className="max-w-7xl mx-auto mb-20 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Como Funciona a{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-400 bg-clip-text text-transparent">
                IMVE
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-400 blur-2xl opacity-30 -z-10"></div>
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Um processo simples de quatro passos para te oferecer um acompanhamento personalizado de fitness e nutrição
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-700 hover:scale-105 ${visibleSteps.includes(index)
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className={`
                  relative bg-white p-8 rounded-3xl shadow-lg border-2 transition-all duration-300 
                  ${activeStep === index
                    ? 'border-blue-200 shadow-2xl shadow-blue-100/50 transform -translate-y-2'
                    : 'border-gray-100 hover:border-blue-100 hover:shadow-xl'
                  }
                `}>
                  {/* Background gradient */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 rounded-3xl bg-gradient-to-br ${step.gradient} transition-opacity duration-300`}></div>

                  {/* Icon container */}
                  <div className={`
                    relative ${step.iconBg} ${step.iconBorder} border-2 p-4 rounded-2xl inline-flex items-center justify-center mb-6 
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    {step.icon}
                  </div>

                  {/* Step number */}
                  <div className={`
                    absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-r ${step.color} 
                    flex items-center justify-center text-white font-bold text-lg shadow-lg
                    ${activeStep === index ? 'animate-pulse' : ''}
                  `}>
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Statistics */}
                  <div className="flex items-center justify-between">
                    <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${step.color}`}></div>
                    <div className="text-right">
                      <div className={`text-lg font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        {step.stat}
                      </div>
                      <div className="text-xs text-gray-500">
                        {step.statLabel}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center border-2 border-gray-100">
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section with enhanced stats */}
        <div className="mt-20 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">Tempo médio</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">48 horas</p>
              <p className="text-gray-600">para receberes o teu plano personalizado</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-teal-600" />
                <span className="text-sm font-medium text-teal-600">Satisfação</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">97%</p>
              <p className="text-gray-600">dos clientes recomendam</p>
            </div>

            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
                <Target className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-600">Sucesso</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">85%</p>
              <p className="text-gray-600">alcançam os objetivos em 3 meses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;