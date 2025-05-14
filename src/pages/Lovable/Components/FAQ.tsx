import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const faqItems = [
    {
      question: "Quão personalizados são os planos alimentares?",
      answer: "Os nossos planos alimentares são altamente personalizados de acordo com as suas necessidades específicas, preferências e restrições alimentares. Temos em conta as suas preferências alimentares, alergias, nível de habilidade culinária, horários e até mesmo o seu orçamento para criar planos que sejam eficazes e agradáveis para si."
    },
    {
      question: "Com que frequência o meu programa de treino muda?",
      answer: "O seu programa de treino será atualizado normalmente a cada 4-6 semanas, ou mais cedo se estiver a progredir rapidamente ou se os seus objetivos mudarem. O seu treinador monitoriza o seu progresso e faz os ajustes necessários para garantir resultados ótimos."
    },
    {
      question: "Posso continuar a comer fora com o plano alimentar da IMVE?",
      answer: "Claro que sim! Criamos os nossos planos alimentares tendo em mente a vida real. O seu treinador irá fornecer estratégias para fazer escolhas inteligentes quando comer fora, e pode até analisar menus específicos de restaurantes consigo para identificar as melhores opções."
    },
    {
      question: "Preciso de um ginásio para os programas de treino?",
      answer: "Não necessariamente. Criamos programas com base nos equipamentos que tem disponíveis e nas suas preferências. Quer tenha um ginásio totalmente equipado, equipamentos básicos em casa, ou apenas o seu peso corporal, iremos criar um programa eficaz para si."
    },
    {
      question: "Quantas vezes posso comunicar com o meu treinador?",
      answer: "Terá acesso direto ao seu treinador através do nosso sistema de mensagens. A maioria dos clientes faz check-in 1-2 vezes por semana, mas pode contactar o seu treinador sempre que precisar, especialmente no início ou durante períodos mais desafiantes."
    },
    {
      question: "E se não vir resultados?",
      answer: "Com a nossa taxa de sucesso de 96%, a maioria dos clientes alcança os seus objetivos quando segue o programa. No entanto, se não estiver a ver os resultados esperados, o seu treinador irá analisar os seus dados de progresso, fazer os ajustes necessários ao seu plano e fornecer apoio adicional até começar a ver progressos."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-r from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Perguntas <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">Frequentes</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Obtenha respostas para as perguntas mais comuns sobre o nosso programa de coaching
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                  {item.question}
                </AccordionTrigger>
                <AnimatePresence>
                  <AccordionContent>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 text-gray-600">
                        {item.answer}
                      </div>
                    </motion.div>
                  </AccordionContent>
                </AnimatePresence>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;