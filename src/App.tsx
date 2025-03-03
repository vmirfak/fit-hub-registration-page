import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";

interface StepProps {
  nextStep: () => void;
  prevStep?: () => void;
}

const AnamneseDesportiva = () => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(20);
  const totalSteps = 5;

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      setProgress(((step + 1) / totalSteps) * 100);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      setProgress(((step - 1) / totalSteps) * 100);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <DadosPessoais nextStep={nextStep} />;
      case 2:
        return <ObjetivosForm nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <HistoricoDesportivo nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <NutricaoHabitos nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <PlanoEscolha nextStep={nextStep} prevStep={prevStep} />;
      default:
        return <DadosPessoais nextStep={nextStep} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-zinc-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        {step === 1 && (
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-stone-800 sm:text-5xl">
              Transforma o teu corpo e a tua vida
            </h1>
            <p className="mt-4 text-xl text-stone-700">
              Planos personalizados de treino e nutrição adaptados às tuas
              necessidades
            </p>
          </div>
        )}

        {/* Progress Bar */}
        <div className="mb-8">
          <Progress value={progress} className="h-2 bg-blue-200" />
          <div className="flex justify-between mt-2 text-stone-800 text-sm">
            <span>Dados</span>
            <span>Objetivos</span>
            <span>Histórico</span>
            <span>Nutrição</span>
            <span>Plano</span>
          </div>
        </div>

        {/* Current Step Form */}
        <Card className="border-none shadow-2xl bg-white bg-opacity-95">
          {renderStep()}
        </Card>
      </div>
    </div>
  );
};

const DadosPessoais = ({ nextStep }: StepProps) => {
  return (
    <>
      <CardHeader className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-t-sm">
        <CardTitle className="text-2xl">Dados Pessoais</CardTitle>
        <CardDescription className="text-blue-100">
          Vamos começar por te conhecer melhor
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 pb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome Completo</Label>
            <Input id="nome" placeholder="Introduz o teu nome completo" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="exemplo@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone</Label>
            <Input id="telefone" placeholder="+351 XXX XXX XXX" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nascimento">Data de Nascimento</Label>
            <Input id="nascimento" type="date" className="cursor-pointer" />
          </div>
          <div className="space-y-2">
            <Label>Género</Label>
            <RadioGroup defaultValue="masculino" className="flex space-x-4">
              <div className="flex items-center space-x-1">
                <RadioGroupItem
                  value="masculino"
                  id="masculino"
                  className="cursor-pointer"
                />
                <Label htmlFor="masculino">Masculino</Label>
              </div>
              <div className="flex items-center space-x-1">
                <RadioGroupItem
                  value="feminino"
                  id="feminino"
                  className="cursor-pointer"
                />
                <Label htmlFor="feminino">Feminino</Label>
              </div>
              <div className="flex items-center space-x-1">
                <RadioGroupItem
                  value="outro"
                  id="outro"
                  className="cursor-pointer"
                />
                <Label htmlFor="outro">Outro</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="profissao">Profissão</Label>
            <Input id="profissao" placeholder="Escreve a tua profissão" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="altura">Altura (cm)</Label>
            <Input id="altura" type="number" placeholder="175" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="peso">Peso Atual (kg)</Label>
            <Input id="peso" type="number" placeholder="70" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end pt-2 pb-6 cursor-pointer">
        <Button
          onClick={nextStep}
          className="bg-blue-700 hover:bg-blue-800 cursor-pointer"
        >
          Próximo Passo
        </Button>
      </CardFooter>
    </>
  );
};

const ObjetivosForm = ({ nextStep, prevStep }: StepProps) => {
  return (
    <>
      <CardHeader className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-t-lg">
        <CardTitle className="text-2xl">Os teus objetivos</CardTitle>
        <CardDescription className="text-blue-100">
          O que pretendes alcançar com os nossos planos
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 pb-2">
        <div className="space-y-6">
          <div>
            <Label className="text-lg font-medium">
              Qual é o teu principal objetivo?
            </Label>
            <RadioGroup defaultValue="perder-peso" className="mt-2 space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="perder-peso"
                  id="perder-peso"
                  className="cursor-pointer"
                />
                <Label htmlFor="perder-peso">Perda de Peso/Gordura</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="ganhar-massa"
                  id="ganhar-massa"
                  className="cursor-pointer"
                />
                <Label htmlFor="ganhar-massa">Ganho de Massa Muscular</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="condicionamento"
                  id="condicionamento"
                  className="cursor-pointer"
                />
                <Label htmlFor="condicionamento">
                  Melhorar Condicionamento Físico
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="definicao"
                  id="definicao"
                  className="cursor-pointer"
                />
                <Label htmlFor="definicao">Definição Muscular</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="saude"
                  id="saude"
                  className="cursor-pointer"
                />
                <Label htmlFor="saude">Melhorar Saúde Geral</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="meta-peso">Meta de Peso (kg) - opcional</Label>
            <Input
              id="meta-peso"
              type="number"
              placeholder="65"
              className="mt-1"
            />
          </div>

          <div>
            <Label className="text-lg font-medium">
              Qual é o teu nível de prioridade?
            </Label>
            <div className="space-y-2 mt-2 cursor-pointer ">
              <div className="flex justify-between ">
                <span>Baixa</span>
                <span>Média</span>
                <span>Alta</span>
              </div>
              <Slider defaultValue={[50]} max={100} step={10} />
            </div>
          </div>

          <div>
            <Label htmlFor="tempo-meta">
              Em quanto tempo pretendes atingir o teu objetivo?
            </Label>
            <Select>
              <SelectTrigger className="mt-1 cursor-pointer">
                <SelectValue placeholder="Seleciona um período" />
              </SelectTrigger>
              <SelectContent className="mt-1 cursor-pointer">
                <SelectItem value="1-3">1-3 meses</SelectItem>
                <SelectItem value="3-6">3-6 meses</SelectItem>
                <SelectItem value="6-12">6-12 meses</SelectItem>
                <SelectItem value="12+">Mais de 12 meses</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="motivacao">
              O que te motiva a atingir este objetivo?
            </Label>
            <Textarea
              id="motivacao"
              placeholder="Partilha a tua motivação..."
              className="mt-1"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 pb-6 cursor-pointer">
        <Button onClick={prevStep} variant="outline" className="cursor-pointer">
          Anterior
        </Button>
        <Button
          onClick={nextStep}
          className="bg-blue-700 hover:bg-blue-800 cursor-pointer"
        >
          Próximo Passo
        </Button>
      </CardFooter>
    </>
  );
};

const HistoricoDesportivo = ({ nextStep, prevStep }: StepProps) => {
  return (
    <>
      <CardHeader className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-t-lg">
        <CardTitle className="text-2xl">Histórico Desportivo</CardTitle>
        <CardDescription className="text-blue-100">
          Conte-nos sobre a sua experiência com atividade física
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 pb-2">
        <div className="space-y-6">
          <div>
            <Label className="text-lg font-medium">
              Qual é o teu nível de experiência com exercício físico?
            </Label>
            <RadioGroup defaultValue="iniciante" className="mt-2 space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="iniciante"
                  id="iniciante"
                  className="cursor-pointer"
                />
                <Label htmlFor="iniciante">
                  Iniciante (nunca ou raramente pratiquei)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="intermedio"
                  id="intermedio"
                  className="cursor-pointer"
                />
                <Label htmlFor="intermedio">
                  Intermédio (prática ocasional)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="avancado"
                  id="avancado"
                  className="cursor-pointer"
                />
                <Label htmlFor="avancado">
                  Avançado (treino regularmente há pelo menos 1 ano)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="atleta"
                  id="atleta"
                  className="cursor-pointer"
                />
                <Label htmlFor="atleta">
                  Atleta (treino intenso e competitivo)
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label className="text-lg font-medium">
              Que atividades físicas praticas atualmente?
            </Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="musculacao" className="cursor-pointer" />
                <Label htmlFor="musculacao">Musculação</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="cardio" className="cursor-pointer" />
                <Label htmlFor="cardio">Cardio (corrida, ciclismo)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="crossfit" className="cursor-pointer" />
                <Label htmlFor="crossfit">CrossFit</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="natacao" className="cursor-pointer" />
                <Label htmlFor="natacao">Natação</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="desportos" className="cursor-pointer" />
                <Label htmlFor="desportos">Desportos coletivos</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="outros" className="cursor-pointer" />
                <Label htmlFor="outros">Outros</Label>
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="frequencia">
              Com que frequência treinas atualmente?
            </Label>
            <Select>
              <SelectTrigger className="mt-1 cursor-pointer">
                <SelectValue placeholder="Seleciona a frequência" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nenhuma">Não treino atualmente</SelectItem>
                <SelectItem value="1-2">1-2 vezes por semana</SelectItem>
                <SelectItem value="3-4">3-4 vezes por semana</SelectItem>
                <SelectItem value="5+">5 ou mais vezes por semana</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="duracao">
              Duração média de cada sessão de treino:
            </Label>
            <Select>
              <SelectTrigger className="mt-1 cursor-pointer">
                <SelectValue placeholder="Seleciona a duração" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">Até 30 minutos</SelectItem>
                <SelectItem value="60">30-60 minutos</SelectItem>
                <SelectItem value="90">60-90 minutos</SelectItem>
                <SelectItem value="90+">Mais de 90 minutos</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="limitacoes">
              Tem alguma limitação física ou lesão?
            </Label>
            <Textarea
              id="limitacoes"
              placeholder="Descreve qualquer limitação ou lesão..."
              className="mt-1"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 pb-6">
        <Button onClick={prevStep} variant="outline" className="cursor-pointer">
          Anterior
        </Button>
        <Button
          onClick={nextStep}
          className="bg-blue-700 hover:bg-blue-800 cursor-pointer"
        >
          Próximo Passo
        </Button>
      </CardFooter>
    </>
  );
};

const NutricaoHabitos = ({ nextStep, prevStep }: StepProps) => {
  return (
    <>
      <CardHeader className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-t-lg">
        <CardTitle className="text-2xl">Nutrição e Hábitos</CardTitle>
        <CardDescription className="text-blue-100">
          Entenda seus padrões alimentares para um plano mais eficaz
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 pb-2">
        <div className="space-y-6">
          <div>
            <Label className="text-lg font-medium">
              Como descreves os teus hábitos alimentares atuais?
            </Label>
            <RadioGroup defaultValue="regular" className="mt-2 space-y-2">
              {[
                {
                  value: "desestruturado",
                  label: "Desestruturado (sem padrão definido)",
                },
                { value: "regular", label: "Regular (3 refeições por dia)" },
                {
                  value: "estruturado",
                  label: "Estruturado (4-6 refeições planejadas)",
                },
                { value: "restricao", label: "Com restrição calórica" },
              ].map(({ value, label }) => (
                <div key={value} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={value}
                    id={value}
                    className="cursor-pointer"
                  />
                  <Label htmlFor={value}>{label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div>
            <Label className="text-lg font-medium">
              Possuis alguma restrição alimentar?
            </Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {[
                "Vegetariano",
                "Vegano",
                "Intolerância à lactose",
                "Intolerância ao glúten",
                "Alergias alimentares",
                "Outras",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox
                    id={item.toLowerCase()}
                    className="cursor-pointer"
                  />
                  <Label htmlFor={item.toLowerCase()}>{item}</Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="agua">Consumo diário de água (litros):</Label>
            <Select>
              <SelectTrigger className="mt-1 cursor-pointer">
                <SelectValue placeholder="seleciona o consumo" />
              </SelectTrigger>
              <SelectContent>
                {["Menos de 1L", "1-2L", "2-3L", "Mais de 3L"].map(
                  (item, index) => (
                    <SelectItem
                      key={index}
                      value={item.toLowerCase().replace(/\s/g, "-")}
                    >
                      {item}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-lg font-medium">
              Suplementos que utilizas atualmente:
            </Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {[
                "Proteína (Whey, vegetal)",
                "Creatina",
                "BCAA",
                "Multivitamínicos",
                "Pré-treino",
                "Outros",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox
                    id={item.toLowerCase().replace(/\s/g, "-")}
                    className="cursor-pointer"
                  />
                  <Label htmlFor={item.toLowerCase().replace(/\s/g, "-")}>
                    {item}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="dieta-anterior">
              Já fizeste alguma dieta específica antes? Qual foi o resultado?
            </Label>
            <Textarea
              id="dieta-anterior"
              placeholder="Descreve as tuas experiências anteriores..."
              className="mt-1"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 pb-6">
        <Button onClick={prevStep} variant="outline" className="cursor-pointer">
          Anterior
        </Button>
        <Button
          onClick={nextStep}
          className="bg-blue-700 hover:bg-blue-800 cursor-pointer"
        >
          Próximo Passo
        </Button>
      </CardFooter>
    </>
  );
};

const PlanoEscolha = ({ prevStep, nextStep }: StepProps) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const planos = [
    {
      id: "alimentar",
      titulo: "Plano Alimentar",
      descricao: (
        <ul>
          <li>
            ✔️ Plano alimentar personalizado com receitas adaptadas ao teu
            estilo de vida e objetivos.
          </li>
          <li>✔️ Acompanhamento nutricional contínuo.</li>
          <li>
            ✔️ Sugestões de refeições para melhorar a tua saúde e bem-estar.
          </li>
          <li>
            ✔️ Ideal para quem deseja uma alimentação equilibrada e adaptada ao
            seu ritmo.
          </li>
        </ul>
      ),
      preco: "19,99€",
    },
    {
      id: "treino",
      titulo: "Plano de Treino",
      descricao: (
        <ul>
          <li>
            ✔️ Plano de treino personalizado para atingir os teus objetivos de
            fitness.
          </li>
          <li>
            ✔️ Inclui treinos progressivos, vídeos explicativos e dicas de
            execução.
          </li>
          <li>
            ✔️ Focado em ganho muscular, emagrecimento ou aumento de
            resistência.
          </li>
          <li>✔️ Acompanhamento de treinos para maximizar os resultados.</li>
        </ul>
      ),
      preco: "24,99€",
    },
    {
      id: "alimentar_treino",
      titulo: "Plano Alimentar + Treino",
      descricao: (
        <ul>
          <li>
            ✔️ Combinação de plano alimentar balanceado e treinos
            personalizados.
          </li>
          <li>
            ✔️ Ideal para quem deseja transformar o corpo e melhorar o
            desempenho.
          </li>
          <li>
            ✔️ Inclui suporte contínuo de nutricionista e treinador
            especializado.
          </li>
          <li>
            ✔️ Perfeito para alcançar um estilo de vida saudável e resultados
            duradouros.
          </li>
        </ul>
      ),
      preco: "39,99€",
    },
  ];

  return (
    <>
      <CardHeader className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-t-lg">
        <CardTitle className="text-2xl">Escolhe o Teu Plano</CardTitle>
        <CardDescription className="text-blue-100">
          Seleciona a opção que melhor se adapta às tuas necessidades
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 pb-2">
        <div className="grid gap-6 md:grid-cols-3">
          {planos.map((plano) => (
            <Card
              key={plano.id}
              className={`border-2 cursor-pointer transition-all ${
                selectedPlan === plano.id
                  ? "border-blue-700 shadow-lg"
                  : "border-gray-200 hover:border-blue-300"
              }`}
              onClick={() => setSelectedPlan(plano.id)}
            >
              <CardHeader className="bg-gradient-to-r ">
                <CardTitle>{plano.titulo}</CardTitle>
                <CardDescription>{plano.descricao}</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-3xl font-bold mb-4">
                  {plano.preco}{" "}
                  <span className="text-sm font-normal">/mês</span>
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer"
                  onClick={() => setSelectedPlan(plano.id)}
                >
                  Selecionar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-lg font-medium mb-2">Garantia de 14 dias</h3>
          <p className="text-gray-600">
            Se não estiveres completamente satisfeito com o teu plano nos
            primeiros 14 dias, devolveremos 100% do teu investimento.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 pb-6">
        <Button
          onClick={prevStep}
          className="text-black bg-white hover:bg-blue cursor-pointer"
        >
          Anterior
        </Button>
        <Button
          onClick={nextStep}
          className={`bg-green-600 hover:bg-green-700 cursor-pointer ${
            selectedPlan ? "" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!selectedPlan}
        >
          Finalizar e Criar Conta
        </Button>
      </CardFooter>
    </>
  );
};

export default AnamneseDesportiva;
