import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Award, Target, BarChart3, Clock } from "lucide-react";

export default function Landing() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('nutrition');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Testimonials data
  const testimonials = [
    {
      name: "Miguel Santos",
      text: "Este programa transformou completamente a minha saúde. Em apenas 3 meses, perdi 12kg e ganhei muito mais energia!",
      role: "Perdeu 12kg em 3 meses"
    },
    {
      name: "Sofia Martins",
      text: "Finalmente um plano que se adapta ao meu estilo de vida agitado. Os resultados são visíveis e sustentáveis.",
      role: "Ganhou massa muscular"
    },
    {
      name: "André Costa",
      text: "O acompanhamento personalizado fez toda a diferença na minha jornada. Recomendo fortemente!",
      role: "Atleta amador"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 scroll-smooth">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="ml-2 font-bold text-xl text-gray-800">IMVE</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#howitworks" className="text-gray-700 hover:text-blue-600 font-medium">Como Funciona</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Serviços</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">Testemunhos</a>
            <a href="#cta" className="text-gray-700 hover:text-blue-600 font-medium">Começar</a>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25"></div>
              <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Transforma o teu <span className="text-blue-600">corpo</span> e a tua <span className="text-blue-600">vida</span>
              </h1>
            </div>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Agradecemos por ter entrado em contacto connosco!
              Estamos prontos para construir o teu plano personalizado de nutrição e fitness
              que se adapta ao teu estilo de vida.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl blur-lg opacity-20"></div>
            <div className="relative bg-white p-2 rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gray-200 rounded-2xl h-64 md:h-96 overflow-hidden">
                <img
                  src="https://i0.wp.com/thecutgym.com/wp-content/uploads/2024/04/andrew-before-after-body-transformation-front.webp?fit=768%2C531&ssl=1"
                  alt="Fitness Transformation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">96%</div>
              <div className="text-xs">taxa de sucesso</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="howitworks" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">Como Funciona</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Um processo simples de 4 passos para criar o teu plano personalizado
              e alcançar resultados duradouros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl"><span className="text-xl font-bold">1</span></div>,
                title: "Responde ao Questionário",
                description: "Conta-nos sobre os teus hábitos, preferências e objetivos."
              },
              {
                icon: <div className="w-12 h-12 bg-green-100 text-green-600 flex items-center justify-center rounded-xl"><span className="text-xl font-bold">2</span></div>,
                title: "Análise Aprofundada",
                description: "A nossa equipa de especialistas analisa as tuas respostas para criar uma estratégia personalizada."
              },
              {
                icon: <div className="w-12 h-12 bg-purple-100 text-purple-600 flex items-center justify-center rounded-xl"><span className="text-xl font-bold">3</span></div>,
                title: "Receba o Seu Plano",
                description: "Em até 48 horas, receberás o teu plano personalizado."
              },
              {
                icon: <div className="w-12 h-12 bg-orange-100 text-orange-600 flex items-center justify-center rounded-xl"><span className="text-xl font-bold">4</span></div>,
                title: "Acompanhamento Contínuo",
                description: "Suporte contínuo e ajustes periódicos para garantir a tua evolução."
              }
            ]
              .map((step, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="mb-5">{step.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Features Section with Tabs */}
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
              O Que Irás Receber
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in delay-100">
              Os nossos planos personalizados abrangem todos os aspectos necessários para a tua transformação.
            </p>
          </div>

          {/* Tabs */}
          <div className="max-w-xl mx-auto mb-14">
            <div className="flex justify-center space-x-1 bg-gray-100 p-1 rounded-full">
              <button
                className={`px-8 py-3 font-semibold text-lg rounded-full transition-all duration-300 ease-in-out cursor-pointer ${activeTab === 'nutrition'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
                  }`}
                onClick={() => setActiveTab('nutrition')}
              >
                Nutrição
              </button>
              <button
                className={`px-8 py-3 font-semibold text-lg rounded-full transition-all duration-300 ease-in-out cursor-pointer ${activeTab === 'training'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
                  }`}
                onClick={() => setActiveTab('training')}
              >
                Treino
              </button>
              <button
                className={`px-8 py-3 font-semibold text-lg rounded-full transition-all duration-300 ease-in-out cursor-pointer ${activeTab === 'support'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
                  }`}
                onClick={() => setActiveTab('support')}
              >
                Suporte
              </button>
            </div>
          </div>

          {/* Tab content */}
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center items-center">
              {activeTab === 'nutrition' && (
                <div className=" gap-12 items-center animate-fade-in-up">
                  <div className="order-2 md:order-1">
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transform hover:scale-[1.01] transition-transform duration-300">
                      <h3 className="text-3xl font-bold text-gray-800 mb-8">Plano Nutricional Personalizado</h3>
                      <ul className="space-y-6">
                        {[
                          {
                            title: "Cardápio adaptado às tuas preferências",
                            desc: "Receitas deliciosas que respeitam os teus gostos e restrições alimentares."
                          },
                          {
                            title: "Macronutrientes calculados",
                            desc: "Quantidade ideal de proteínas, hidratos de carbono e gorduras para os teus objetivos."
                          },
                          {
                            title: "Lista de compras semanal",
                            desc: "Facilita a tua organização com uma lista completa dos alimentos necessários."
                          }
                        ].map((item, index) => (
                          <li key={index} className="flex items-start group">
                            <div className="flex-shrink-0 mt-1 bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div className="ml-4">
                              <p className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                {item.title}
                              </p>
                              <p className="text-gray-600 mt-1">{item.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'training' && (
                <div className=" gap-12 items-center animate-fade-in-up">
                  <div className="order-2 md:order-1">
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transform hover:scale-[1.01] transition-transform duration-300">
                      <h3 className="text-3xl font-bold text-gray-800 mb-8">Treino Adaptado ao teu Nível</h3>
                      <ul className="space-y-6">
                        {[
                          {
                            title: "Exercícios específicos",
                            desc: "Rotinas criadas de acordo com teu nível físico atual e objetivos futuros."
                          },
                          {
                            title: "Vídeos explicativos",
                            desc: "Tutoriais detalhados para executar cada exercício com técnica perfeita."
                          },
                          {
                            title: "Progressão inteligente",
                            desc: "Ajustes periódicos para garantir um desafio constante e evitar estagnação."
                          }
                        ].map((item, index) => (
                          <li key={index} className="flex items-start group">
                            <div className="flex-shrink-0 mt-1 bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div className="ml-4">
                              <p className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                {item.title}
                              </p>
                              <p className="text-gray-600 mt-1">{item.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'support' && (
                <div className=" gap-12 items-center animate-fade-in-up">
                  <div className="order-2 md:order-1">
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transform hover:scale-[1.01] transition-transform duration-300">
                      <h3 className="text-3xl font-bold text-gray-800 mb-8">Suporte Contínuo</h3>
                      <ul className="space-y-6">
                        {[
                          {
                            title: "Consultas de acompanhamento",
                            desc: "Sessões regulares para avaliar o teu progresso e ajustar estratégias."
                          },
                          {
                            title: "Suporte via Mensagens",
                            desc: "Tira dúvidas e receba orientações sempre que precisares."
                          }
                        ].map((item, index) => (
                          <li key={index} className="flex items-start group">
                            <div className="flex-shrink-0 mt-1 bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div className="ml-4">
                              <p className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                {item.title}
                              </p>
                              <p className="text-gray-600 mt-1">{item.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Award className="h-8 w-8 mx-auto mb-4" />, value: "7+", label: "Anos de Experiência" },
              { icon: <Target className="h-8 w-8 mx-auto mb-4" />, value: "92%", label: "Atingem seus Objetivos" },
              { icon: <BarChart3 className="h-8 w-8 mx-auto mb-4" />, value: "500+", label: "Clientes Satisfeitos" },
              { icon: <Clock className="h-8 w-8 mx-auto mb-4" />, value: "24/7", label: "Suporte Contínuo" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                {stat.icon}
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">O que dizem os nossos clientes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Histórias reais de pessoas que transformaram as suas vidas com os nossos programas personalizados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-blue-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  <div className="mt-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">Vamos começar</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforma a tua vida hoje com a nossa ajuda!
          </p>
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <Card className="border-0 shadow-2xl overflow-hidden bg-white/90 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-blue-600 p-8 md:p-12 text-white rounded-r-2xl">
                  <h2 className="text-3xl font-bold mb-4">Pronto para Transformar sua Vida?</h2>
                  <p className="mb-6 text-blue-100">
                    Comece hoje mesmo sua jornada rumo a um corpo mais saudável e uma vida mais enérgica.
                  </p>
                  <Button
                    className="group bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-3 text-lg font-semibold rounded-lg cursor-pointer transform hover:scale-105 transition-all duration-200 shadow-lg relative overflow-hidden"
                    onClick={() => navigate("/anamnese")}
                  >
                    <span className="relative z-10 flex items-center">
                      Começar Agora
                      <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Button>
                </div>
                <div className="bg-white p-8 md:p-12">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">O que esperar:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Questionário completo em apenas 5 minutos
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Plano personalizado em até 48 horas
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Acompanhamento e ajustes contínuos
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Garantia de satisfação ou devolução do dinheiro
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <span className="ml-2 font-bold text-xl text-white">IMVE</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transformando vidas através de nutrição e fitness personalizados.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="text-sm">WA</span>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nossos Serviços</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Testemunhos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Plano Nutricional</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Treino Personalizado</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Acompanhamento Online</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consultoria Fitness</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Avaliação Física</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">📍</span>
                  <span className="text-gray-400">Felgueiras, Portugal</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">📱</span>
                  <span className="text-gray-400">+351 123 456 789</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✉️</span>
                  <span className="text-gray-400">info@IMVE.pt</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-900 hover:text-white cursor-pointer"
                  onClick={() => navigate("/contact")}
                >
                  Contacte-nos
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} IMVE. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}