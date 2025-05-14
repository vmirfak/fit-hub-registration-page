import { CheckCheck, Award, Calendar, Layout, Dumbbell, User } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <CheckCheck className="w-6 h-6 text-white" />,
      title: "Planos Personalizados",
      description: "Planos de refeições e treinos adaptados ao teu corpo, objetivos e preferências.",
      color: "bg-gradient-to-br from-blue-600 to-teal-500",
    },
    {
      icon: <Award className="w-6 h-6 text-white" />,
      title: "Especialistas Certificados",
      description: "Acompanha-te com profissionais experientes em nutrição e fitness.",
      color: "bg-gradient-to-br from-teal-500 to-green-500",
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Ajustes Regulares",
      description: "Planos que evoluem contigo à medida que o teu corpo se adapta e os objetivos mudam.",
      color: "bg-gradient-to-br from-orange-500 to-rose-500",
    },
    {
      icon: <Layout className="w-6 h-6 text-white" />,
      title: "Acompanhamento Simples",
      description: "Ferramentas práticas para acompanhares o teu progresso e manteres o foco.",
      color: "bg-gradient-to-br from-purple-600 to-blue-600",
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-white" />,
      title: "Abordagem Flexível",
      description: "Programas que se adaptam ao teu estilo de vida — e não o contrário.",
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
    },
    {
      icon: <User className="w-6 h-6 text-white" />,
      title: "Apoio Personalizado",
      description: "Contacto direto com o teu coach para esclarecer dúvidas e receber orientação.",
      color: "bg-gradient-to-br from-blue-700 to-indigo-700",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-r from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Funcionalidades Pensadas para <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">Resultados</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Tudo o que precisas para transformar o teu corpo e melhorar a tua saúde
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-4xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${feature.color} p-3 rounded-4xl inline-flex items-center justify-center mb-5`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
