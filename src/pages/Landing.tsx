import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-8 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Obrigado pelo seu Interesse! 🌟
        </h1>
        <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Agradecemos por entrar em contacto conosco via WhatsApp! Estamos empolgados por ter você a bordo 
          e mal podemos esperar para ajudá-lo a alcançar os seus objetivos. 
        </p>
        <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mt-4">
          Para dar início ao seu plano personalizado, basta preencher o nosso questionário exclusivo. 
          Com ele, vamos criar um programa adaptado às suas necessidades e objetivos, seja em termos de nutrição ou treino.
        </p>
      </motion.div>

      <Card className="mt-10 w-full max-w-lg shadow-xl border border-gray-200">
        <CardContent className="p-5 sm:p-6 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            Como Funciona?
          </h2>
          <ul className="text-gray-700 text-sm sm:text-base text-left space-y-3 sm:space-y-4">
            <li>✅ <strong>Responda ao questionário:</strong> Conte-nos sobre os seus hábitos e metas.</li>
            <li>🔬 <strong>Análise Profunda:</strong> Especialistas criam um plano sob medida.</li>
            <li>🎯 <strong>Plano Personalizado:</strong> Nutrição e treino ajustados para si.</li>
            <li>🚀 <strong>Acompanhamento Contínuo:</strong> Evolua com suporte especializado.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">
            O Que Vai Receber?
          </h2>
          <ul className="text-gray-700 text-sm sm:text-base text-left space-y-3 sm:space-y-4">
            <li>🍽️ <strong>Plano Alimentar:</strong> Ajustado aos seus gostos e objetivos.</li>
            <li>🏋️ <strong>Treino Personalizado:</strong> Exercícios adequados ao seu nível.</li>
            <li>📊 <strong>Monitoramento Inteligente:</strong> Ajustes conforme sua evolução.</li>
            <li>💡 <strong>Suporte e Motivação:</strong> Estratégias para manter o foco.</li>
          </ul>

          <Button
            className="mt-6 w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
            onClick={() => navigate("/anamnese")}
          >
            Começar Agora 🚀
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
