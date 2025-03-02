import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';

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
          return <PlanoEscolha nextStep={nextStep} prevStep={prevStep}/>;
      default:
        return <DadosPessoais nextStep={nextStep} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-300 to-indigo-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        {step === 1 && (
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              Transforme Seu Corpo e Sua Vida
            </h1>
            <p className="mt-4 text-xl text-blue-200">
              Planos personalizados de treino e nutrição adaptados às suas necessidades
            </p>
          </div>
        )}

        {/* Progress Bar */}
        <div className="mb-8">
          <Progress value={progress} className="h-2 bg-blue-200" />
          <div className="flex justify-between mt-2 text-white text-sm">
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

        {/* Testimonials - Show on first step only */}
        {step === 1 && (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="bg-white bg-opacity-10 border-none text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="mr-2">⭐⭐⭐⭐⭐</span> Carolina, 32
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>"Perdi 15kg em 6 meses seguindo os planos personalizados. A abordagem nutricional mudou completamente minha relação com a comida!"</p>
              </CardContent>
            </Card>
            <Card className="bg-white bg-opacity-10 border-none text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="mr-2">⭐⭐⭐⭐⭐</span> Marcos, 28
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>"Aumentei minha massa muscular e melhorei meu condicionamento físico. Os treinos são desafiadores mas totalmente ajustados ao meu nível."</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

const DadosPessoais = ({ nextStep }: StepProps) => {
  return (
    <>
      <CardHeader className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-t-lg">
        <CardTitle className="text-2xl">Dados Pessoais</CardTitle>
        <CardDescription className="text-blue-100">
          Vamos começar conhecendo você melhor
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 pb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome Completo</Label>
            <Input id="nome" placeholder="Digite seu nome completo" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="seu@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone</Label>
            <Input id="telefone" placeholder="+351 XXX XXX XXX" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nascimento">Data de Nascimento</Label>
            <Input id="nascimento" type="date" className='cursor-pointer' />
          </div>
          <div className="space-y-2">
            <Label>Gênero</Label>
            <RadioGroup defaultValue="masculino" className="flex space-x-4">
              <div className="flex items-center space-x-1">
                <RadioGroupItem value="masculino" id="masculino" className='cursor-pointer' />
                <Label htmlFor="masculino">Masculino</Label>
              </div>
              <div className="flex items-center space-x-1">
                <RadioGroupItem value="feminino" id="feminino" className='cursor-pointer' />
                <Label htmlFor="feminino">Feminino</Label>
              </div>
              <div className="flex items-center space-x-1">
                <RadioGroupItem value="outro" id="outro" className='cursor-pointer' />
                <Label htmlFor="outro">Outro</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="profissao">Profissão</Label>
            <Input id="profissao" placeholder="Digite sua profissão" />
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
        <Button onClick={nextStep} className="bg-blue-700 hover:bg-blue-800 cursor-pointer">
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
        <CardTitle className="text-2xl">Seus Objetivos</CardTitle>
        <CardDescription className="text-blue-100">
          O que você deseja alcançar com nossos planos
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 pb-2">
        <div className="space-y-6">
          <div>
            <Label className="text-lg font-medium">Qual é o seu principal objetivo?</Label>
            <RadioGroup defaultValue="perder-peso" className="mt-2 space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="perder-peso" id="perder-peso" className='cursor-pointer' />
                <Label htmlFor="perder-peso">Perda de Peso/Gordura</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ganhar-massa" id="ganhar-massa" className='cursor-pointer' />
                <Label htmlFor="ganhar-massa">Ganho de Massa Muscular</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="condicionamento" id="condicionamento" className='cursor-pointer' />
                <Label htmlFor="condicionamento">Melhorar Condicionamento Físico</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="definicao" id="definicao" className='cursor-pointer' />
                <Label htmlFor="definicao">Definição Muscular</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="saude" id="saude" className='cursor-pointer' />
                <Label htmlFor="saude">Melhorar Saúde Geral</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="meta-peso">Meta de Peso (kg) - opcional</Label>
            <Input id="meta-peso" type="number" placeholder="65" className="mt-1" />
          </div>

          <div>
            <Label className="text-lg font-medium">Qual é seu nível de prioridade?</Label>
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
            <Label htmlFor="tempo-meta">Em quanto tempo deseja atingir seu objetivo?</Label>
            <Select>
              <SelectTrigger className="mt-1 cursor-pointer">
                <SelectValue placeholder="Selecione um período" />
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
            <Label htmlFor="motivacao">O que está te motivando a atingir esse objetivo?</Label>
            <Textarea id="motivacao" placeholder="Compartilhe sua motivação..." className="mt-1" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 pb-6 cursor-pointer">
        <Button onClick={prevStep} variant="outline">
          Anterior
        </Button>
        <Button onClick={nextStep} className="bg-blue-700 hover:bg-blue-800 cursor-pointer">
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
          Conte-nos sobre sua experiência com atividade física
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 pb-2">
        <div className="space-y-6">
          <div>
            <Label className="text-lg font-medium">Qual é o seu nível de experiência com exercícios?</Label>
            <RadioGroup defaultValue="iniciante" className="mt-2 space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="iniciante" id="iniciante" className='cursor-pointer'/>
                <Label htmlFor="iniciante">Iniciante (nunca ou raramente praticou)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="intermediario" id="intermediario" className='cursor-pointer'/>
                <Label htmlFor="intermediario">Intermediário (prática ocasional)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="avancado" id="avancado" className='cursor-pointer'/>
                <Label htmlFor="avancado">Avançado (treina regularmente há pelo menos 1 ano)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="atleta" id="atleta" className='cursor-pointer'/>
                <Label htmlFor="atleta">Atleta (treino intenso e competitivo)</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label className="text-lg font-medium">Que atividades físicas você pratica atualmente?</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="musculacao" className='cursor-pointer'/>
                <Label htmlFor="musculacao">Musculação</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="cardio" className='cursor-pointer'/>
                <Label htmlFor="cardio">Cardio (corrida, ciclismo)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="crossfit" className='cursor-pointer'/>
                <Label htmlFor="crossfit">CrossFit</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="natacao" className='cursor-pointer'/>
                <Label htmlFor="natacao">Natação</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="esportes" className='cursor-pointer'/>
                <Label htmlFor="esportes">Esportes coletivos</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="outros" className='cursor-pointer'/>
                <Label htmlFor="outros">Outros</Label>
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="frequencia">Com que frequência você treina atualmente?</Label>
            <Select>
              <SelectTrigger className="mt-1 cursor-pointer">
                <SelectValue placeholder="Selecione a frequência" />
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
            <Label htmlFor="duracao">Duração média de cada sessão de treino:</Label>
            <Select>
              <SelectTrigger className="mt-1 cursor-pointer">
                <SelectValue placeholder="Selecione a duração" />
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
            <Label htmlFor="limitacoes">Você possui alguma limitação física ou lesão?</Label>
            <Textarea id="limitacoes" placeholder="Descreva qualquer limitação ou lesão..." className="mt-1" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 pb-6 cursor-pointer">
        <Button onClick={prevStep} variant="outline">
          Anterior
        </Button>
        <Button onClick={nextStep} className="bg-blue-700 hover:bg-blue-800 cursor-pointer">
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
            <Label className="text-lg font-medium">Como você descreveria seus hábitos alimentares atuais?</Label>
            <RadioGroup defaultValue="regular" className="mt-2 space-y-2 ">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="desestruturado" id="desestruturado" className='cursor-pointer'/>
                <Label htmlFor="desestruturado">Desestruturado (sem padrão definido)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="regular" id="regular" className='cursor-pointer'/>
                <Label htmlFor="regular">Regular (3 refeições por dia)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="estruturado" id="estruturado" className='cursor-pointer'/>
                <Label htmlFor="estruturado">Estruturado (4-6 refeições planejadas)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="restricao" id="restricao" className='cursor-pointer'/>
                <Label htmlFor="restricao">Com restrição calórica</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label className="text-lg font-medium">Você possui alguma restrição alimentar?</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="vegetariano" className='cursor-pointer'/>
                <Label htmlFor="vegetariano">Vegetariano</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="vegano" className='cursor-pointer'/>
                <Label htmlFor="vegano">Vegano</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="lactose" className='cursor-pointer'/>
                <Label htmlFor="lactose">Intolerância à lactose</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="gluten" className='cursor-pointer'/>
                <Label htmlFor="gluten">Intolerância ao glúten</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="alergias" className='cursor-pointer'/>
                <Label htmlFor="alergias">Alergias alimentares</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="outras" className='cursor-pointer'/>
                <Label htmlFor="outras">Outras</Label>
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="agua">Consumo diário de água (litros):</Label>
            <Select>
              <SelectTrigger className="mt-1 cursor-pointer">
                <SelectValue placeholder="Selecione o consumo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="menos1">Menos de 1L</SelectItem>
                <SelectItem value="1-2">1-2L</SelectItem>
                <SelectItem value="2-3">2-3L</SelectItem>
                <SelectItem value="mais3">Mais de 3L</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-lg font-medium">Suplementos que utiliza atualmente:</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="proteina" className='cursor-pointer'/>
                <Label htmlFor="proteina">Proteína (Whey, vegetal)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="creatina" className='cursor-pointer'/>
                <Label htmlFor="creatina">Creatina</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="bcaa" className='cursor-pointer'/>
                <Label htmlFor="bcaa">BCAA</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="vitaminas" className='cursor-pointer'/>
                <Label htmlFor="vitaminas">Multivitamínicos</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="pre-treino" className='cursor-pointer'/>
                <Label htmlFor="pre-treino">Pré-treino</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="outros-suplementos" className='cursor-pointer'/>
                <Label htmlFor="outros-suplementos">Outros</Label>
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="dieta-anterior">Já fez alguma dieta específica antes? Qual foi o resultado?</Label>
            <Textarea id="dieta-anterior" placeholder="Descreva suas experiências anteriores..." className="mt-1" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 pb-6">
        <Button onClick={prevStep} variant="outline" className='cursor-pointer'>
          Anterior
        </Button>
        <Button onClick={nextStep} className="bg-blue-700 hover:bg-blue-800 cursor-pointer">
          Próximo Passo
        </Button>
      </CardFooter>
    </>
  );
};

const PlanoEscolha = ({ prevStep }: StepProps) => {
  return (
    <>
      <CardHeader className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-t-lg">
        <CardTitle className="text-2xl">Escolha Seu Plano</CardTitle>
        <CardDescription className="text-blue-100">
          Selecione a opção que melhor se adapta às suas necessidades
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 pb-2">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
              <CardTitle>Plano Standard</CardTitle>
              <CardDescription>
                Ideal para iniciantes e pessoas com objetivos gerais
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-3xl font-bold mb-4">29,99€ <span className="text-sm font-normal">/mês</span></p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span> Plano de treino personalizado
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span> Plano nutricional básico
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span> Atualizações mensais
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span> Suporte por email
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Selecionar</Button>
            </CardFooter>
          </Card>

          <Card className="border-2 border-blue-500 shadow-lg relative">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
              MAIS POPULAR
            </div>
            <CardHeader className="bg-gradient-to-r from-blue-100 to-blue-200">
              <CardTitle>Plano Premium</CardTitle>
              <CardDescription>
                Perfeito para quem busca resultados acelerados
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-3xl font-bold mb-4">49,99€ <span className="text-sm font-normal">/mês</span></p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span> Plano de treino personalizado avançado
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span> Plano nutricional detalhado com receitas
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span> Atualizações quinzenais
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span> Suporte prioritário por WhatsApp
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span> Acompanhamento semanal de progresso
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span> Acesso a conteúdo exclusivo
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-700 hover:bg-blue-800">Selecionar</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-lg font-medium mb-2">Garantia de 14 dias</h3>
          <p className="text-gray-600">
            Se não estiver completamente satisfeito com seu plano nos primeiros 14 dias, 
            devolveremos 100% do seu investimento.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 pb-6">
        <Button onClick={prevStep} className="text-black bg-white hover:bg-blue cursor-pointer">
          Anterior
        </Button>
        <Button className="bg-green-600 hover:bg-green-700 cursor-pointer">
          Finalizar e Criar Conta
        </Button>
      </CardFooter>
    </>
  );
};

export default AnamneseDesportiva;