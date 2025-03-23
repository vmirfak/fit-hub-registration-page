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
          Obrigado pelo seu interesse! 🌟
        </h1>
        <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Agradecemos por ter entrado em contacto connosco via WhatsApp! Estamos entusiasmados por tê-lo connosco 
          e mal podemos esperar para o ajudar a alcançar os seus objetivos.
        </p>
        <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mt-4">
          Para dar início ao seu plano personalizado, basta preencher o nosso questionário exclusivo. 
          Com base nas suas respostas, iremos criar um programa adaptado às suas necessidades e objetivos, seja em nutrição ou treino.
        </p>
      </motion.div>

      <Card className="mt-10 w-full max-w-lg shadow-xl border border-gray-200">
        <CardContent className="p-5 sm:p-6 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            Como funciona?
          </h2>
          <ul className="text-gray-700 text-sm sm:text-base text-left space-y-3 sm:space-y-4">
            <li>✅ <strong>Responda ao questionário:</strong> Conte-nos um pouco sobre os seus hábitos e metas.</li>
            <li>🔬 <strong>Análise aprofundada:</strong> Especialistas criam um plano à sua medida.</li>
            <li>🎯 <strong>Plano personalizado:</strong> Nutrição e treino ajustados a si.</li>
            <li>🚀 <strong>Acompanhamento contínuo:</strong> Progrida com apoio especializado.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">
            O que irá receber?
          </h2>
          <ul className="text-gray-700 text-sm sm:text-base text-left space-y-3 sm:space-y-4">
            <li>🍽️ <strong>Plano alimentar:</strong> Adaptado aos seus gostos e objetivos</li>
            <li>🏋️ <strong>Treino personalizado:</strong> Exercícios adequados ao seu nível</li>
            <li>📊 <strong>Monitorização inteligente:</strong> Ajustes consoante a sua evolução</li>
            <li>💡 <strong>Apoio e motivação:</strong> Estratégias para manter o foco e a disciplina</li>
          </ul>

          <Button
            className="mt-6 w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
            onClick={() => navigate("/anamnese")}
          >
            Começar agora 🚀
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
