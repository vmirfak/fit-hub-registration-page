import { TrendingUp, Clock, Users, CalendarCheck } from "lucide-react";

const Stats = () => {
    const stats = [
        {
            icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
            value: "96%",
            label: "Taxa de Sucesso",
            description: "Clientes que atingem os seus objetivos iniciais",
        },
        {
            icon: <Clock className="w-6 h-6 text-teal-500" />,
            value: "48h",
            label: "Tempo Médio de Entrega",
            description: "Tempo necessário para receberes o teu plano personalizado",
        },
        {
            icon: <Users className="w-6 h-6 text-orange-500" />,
            value: "2.000+",
            label: "Clientes Satisfeitos",
            description: "Com diferentes objetivos e perfis",
        },
        {
            icon: <CalendarCheck className="w-6 h-6 text-green-500" />,
            value: "90%",
            label: "Adesão ao Plano",
            description: "Clientes que mantêm as suas rotinas",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-4xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex justify-center mb-4">
                                {stat.icon}
                            </div>
                            <div className="text-4xl font-bold text-gray-900">{stat.value}</div>
                            <div className="text-lg font-semibold text-gray-700 mt-2">{stat.label}</div>
                            <p className="text-gray-500 mt-2 text-sm">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
