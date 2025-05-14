import { useRef, useState } from 'react';
import { Check, Star, Zap, Award, Heart } from 'lucide-react';

const PricingComponent = () => {
    const [billing, setBilling] = useState('monthly');
    const sectionRef = useRef(null);
    const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
    const plans = [
        {
            name: 'Plano Básico',
            icon: <Star className="h-6 w-6 text-blue-500" />,
            description: 'Ideal para quem está a começar',
            monthlyPrice: '29,99€',
            yearlyPrice: '299,99€',
            savings: 'Economize 30€',
            features: [
                'Plano alimentar básico personalizado',
                'Programa de treino básico',
                'Atualizações mensais',
                'Acompanhamento de progresso',
            ],
            highlighted: false,
        },
        {
            name: 'Plano Premium',
            icon: <Zap className="h-6 w-6 text-green-500" />,
            description: 'A nossa escolha mais popular',
            monthlyPrice: '49,99€',
            yearlyPrice: '499,99€',
            savings: 'Economize 100€',
            features: [
                'Plano alimentar avançado personalizado',
                'Programa de treino detalhado',
                'Atualizações quinzenais',
                'Acesso premium à app móvel',
                'Consulta nutricional mensal',
                'Suporte por email prioritário',
                'Receitas exclusivas',
                'Avaliação física inicial'
            ],
            highlighted: true,
        },
        {
            name: 'Plano Elite',
            icon: <Award className="h-6 w-6 text-purple-500" />,
            description: 'Para resultados máximos',
            monthlyPrice: '79,99€',
            yearlyPrice: '799,99€',
            savings: 'Economize 160€',
            features: [
                'Plano alimentar elite personalizado',
                'Programa de treino avançado',
                'Atualizações semanais',
                'Acesso completo à app móvel',
                'Consultas nutricionais semanais',
                'Suporte por chat 24/7',
                'Sessões de coaching mensais',
                'Plano de suplementação',
                'Ajustes ilimitados',
                'Comunidade exclusiva'
            ],
            highlighted: false,
        }
    ];

    return (
        <section
            id="pricing"
            ref={sectionRef}
            className="py-20 bg-gradient-to-r from-white to-blue-50">
            <div >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Plano de {" "}
                            <span className="relative">
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-400 bg-clip-text text-transparent">
                                    Preços
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-400 blur-2xl opacity-30 -z-10"></div>
                            </span>
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                            Planos de refeições e programas de treino personalizados, desenhados de acordo com os teus objetivos, preferências e estilo de vida.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="relative mt-12 flex justify-center items-center">
                            <div className="bg-gray-100 p-1 rounded-4xl inline-flex shadow-sm">
                                <button
                                    onClick={() => setBilling('monthly')}
                                    className={`px-6 cursor-pointer py-3 text-sm font-medium rounded-4xl transition-all duration-700 ${billing === 'monthly'
                                        ? 'bg-white shadow-sm text-gray-900 font-semibold'
                                        : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    Pagamento Mensal
                                </button>
                                <button
                                    onClick={() => setBilling('yearly')}
                                    className={`px-6 py-3 cursor-pointer text-sm font-medium rounded-4xl transition-all duration-700 ${billing === 'yearly'
                                        ? 'bg-white shadow-sm text-gray-900 font-semibold'
                                        : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    Pagamento Anual <span className="text-green-600 ml-1 font-bold">(16% de desconto)</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 space-y-6 sm:mt-20 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-8 lg:max-w-none lg:mx-auto">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`rounded-xl shadow-lg divide-y divide-gray-200 transition-all duration-300 transform ${plan.highlighted ? 'scale-105' : 'hover:scale-102'} ${hoveredPlan === plan.name ? 'shadow-xl' : ''}`}
                                onMouseEnter={() => setHoveredPlan(plan.name)}
                                onMouseLeave={() => setHoveredPlan(null)}
                                style={{
                                    borderTop: plan.highlighted ? '4px solid #10B981' : '4px solid #E5E7EB',
                                    boxShadow: plan.highlighted ? '0 10px 25px -5px rgba(16, 185, 129, 0.2)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                {plan.highlighted && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-6 py-1 bg-gradient-to-r from-green-400 to-green-600 text-white text-xs font-bold rounded-full shadow-lg flex items-center">
                                        <Heart className="h-3 w-3 mr-1" />
                                        MAIS POPULAR
                                    </div>
                                )}
                                <div className="p-8">
                                    <div className="flex items-center">
                                        {plan.icon}
                                        <h3 className="ml-2 text-2xl font-bold text-gray-900">{plan.name}</h3>
                                    </div>
                                    <p className="mt-3 text-gray-600">{plan.description}</p>
                                    <div className="mt-6">
                                        <div className="flex items-baseline">
                                            <span className="text-4xl font-extrabold text-gray-900">
                                                {billing === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                                            </span>
                                            <span className="ml-1 text-lg font-medium text-gray-500">
                                                /{billing === 'monthly' ? 'mês' : 'ano'}
                                            </span>
                                        </div>
                                        {billing === 'yearly' && (
                                            <div className="mt-2 text-sm font-medium text-green-600">
                                                {plan.savings}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="pt-6 pb-8 px-8">
                                    <h4 className="text-sm text-gray-900 tracking-wide">O que está incluído:</h4>
                                    <ul className="mt-6 space-y-4">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-start">
                                                <div className="flex-shrink-0">
                                                    <Check className={`h-5 w-5 ${plan.highlighted ? 'text-green-500' : 'text-blue-500'}`} />
                                                </div>
                                                <p className="ml-3 text-base text-gray-700">{feature}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gray-100 text-gray-800">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">Garantia de satisfação de 30 dias</span>
                        </div>
                        <p className="mt-6 text-base text-gray-600 max-w-2xl mx-auto">
                            Não está satisfeito? Reembolsamos o seu dinheiro sem perguntas.
                        </p>
                        <p className="mt-4 text-sm text-gray-500">
                            Tem dúvidas? <a href="#" className="text-green-600 hover:text-green-500 font-medium">Contacte a nossa equipa</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default PricingComponent;