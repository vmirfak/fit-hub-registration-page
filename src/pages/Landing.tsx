import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Registe-se para um Plano Personalizado
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Responda ao nosso questionário de anamnese alimentar e de treino para
          receber um plano adaptado às suas necessidades e objetivos.
        </p>
      </motion.div>

      <Card className="mt-10 w-full max-w-lg shadow-lg">
        <CardContent className="p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Como funciona?
          </h2>
          <ul className="text-gray-600 text-left space-y-3">
            <li>
              ✅ <strong>Preencha o questionário</strong> sobre os seus hábitos
              alimentares e nível de atividade física.
            </li>
            <li>
              ✅ <strong>Análise especializada</strong> feita pela nossa equipa
              de nutricionistas e especialistas em treino.
            </li>
            <li>
              ✅ <strong>Receba um plano personalizado</strong>, ajustado às
              suas necessidades e objetivos.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
            O que inclui o plano?
          </h2>
          <ul className="text-gray-600 text-left space-y-3">
            <li>🍽️ Plano alimentar equilibrado e ajustado aos seus gostos.</li>
            <li>🏋️ Programa de treino personalizado, adaptado ao seu nível.</li>
            <li>
              📊 Acompanhamento contínuo e possibilidade de ajustes ao longo do
              tempo.
            </li>
            <li>
              💡 Dicas e sugestões para manter a motivação e a disciplina.
            </li>
          </ul>
          <Button
            className="mt-6 px-6 py-3 text-lg cursor-pointer"
            onClick={() => navigate("/anamnese")}
          >
            Iniciar Anamnese
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
