import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import {
  ChevronRight,
  ChevronLeft,
  User,
  Mail,
  Home,
  Briefcase,
  Phone,
  Target,
  Activity,
  Heart,
  Clipboard,
  Utensils,
  Camera,
  CheckCircle,
  UserCheck,
  FileText,
  MessageSquare,
  Clock,
  Shield
} from "lucide-react";
import { motion } from "framer-motion";
import * as yup from 'yup';
import { FormYupValidationSchema } from "@/utils/Validation/FormYupValidationSchema";

type FormDataType = {
  nome: string;
  email: string;
  localidade: string;
  profissao: string;
  countryCode: string;
  telemovel: string;
  objetivoExercicio: string;
  praticaExercicio: string;
  vezesPorSemana: number;
  temDoresColuna: string;
  zonaColuna: string;
  temLesao: string;
  localLesao: string;
  cirurgiaRecente: string;
  localcirurgia: string;
  usaMedicamento: string;
  problemaCardiaco: string;
  dorNoPeito: string;
  perdeuConsiencia: string;
  problemaOssos: string;
  tiposmedicamentos: string;
  medicamentoPressao: string;
  impedimentoExercicio: string;
  observacoes: string;
  refeicoesPorDia: number;
  alimentosPrimeiraRefeicao: string;
  alimentosSegundaRefeicao: string;
  alimentosTerceiraRefeicao: string;
  alimentosQuartaRefeicao: string;
  alimentosQuintaRefeicao: string;
  alimentosSextaRefeicao: string;
  alimentosSetimaRefeicao: string;
  alimentosOitavaRefeicao: string;
  alimentosGosta: string;
  restricaoAlimentar: string;
  dificuldadesPlanoAlimentar: string;
  aguaConsumida: string;
  usaSuplemento: string;
  qualSuplemento: string;
  acompanhamentoDistancia: string;
  motivoAcompanhamento: string;
  pesoJejum: string;
  fotoFrontal: File[];
  fotoLateral: File[];
  fotoCostas: File[];
};

type RadioButtonProps = {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const FormLandingPage = ({ onStartForm }: { onStartForm: () => void }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const iconAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="max-w-2xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
        >
          <motion.div
            className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 shadow-md"
            variants={iconAnimation}
          >
            <Activity className="w-12 h-12 text-blue-600 mx-auto" />
          </motion.div>
          <motion.h1
            className="text-4xl font-bold text-gray-900 mb-3"
            variants={fadeInUp}
          >
            Anamnese de Fitness & Nutrição
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600"
            variants={fadeInUp}
          >
            Um questionário completo para personalizarmos o teu programa
          </motion.p>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          variants={staggerContainer}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            variants={fadeInUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <motion.div variants={iconAnimation}>
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            </motion.div>
            <h3 className="font-semibold text-gray-900 mb-2">100% Confidencial</h3>
            <p className="text-gray-600 text-sm">Todas as informações são mantidas em segurança</p>
          </motion.div>
          <motion.div
            className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            variants={fadeInUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <motion.div variants={iconAnimation}>
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            </motion.div>
            <h3 className="font-semibold text-gray-900 mb-2">10-15 Minutos</h3>
            <p className="text-gray-600 text-sm">Tempo estimado para conclusão</p>
          </motion.div>
          <motion.div
            className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            variants={fadeInUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <motion.div variants={iconAnimation}>
              <UserCheck className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            </motion.div>
            <h3 className="font-semibold text-gray-900 mb-2">Personalizado</h3>
            <p className="text-gray-600 text-sm">Plano criado especificamente para ti</p>
          </motion.div>
        </motion.div>

        {/* Instructions Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 mb-8"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-2xl font-semibold mb-6 text-blue-600 flex items-center"
            variants={fadeInUp}
          >
            <MessageSquare className="mr-3" />
            Antes de Começar
          </motion.h2>

          <motion.div
            className="space-y-6"
            variants={staggerContainer}
          >
            <motion.div
              className="border-l-4 border-blue-500 pl-6"
              variants={fadeInUp}
            >
              <h3 className="font-semibold text-gray-900 mb-2">O que iremos recolher:</h3>
              <p className="text-gray-700">
                Informações importantes sobre a tua saúde, estado de fitness atual e objetivos nutricionais
                para criarmos o plano perfeito para ti.
              </p>
            </motion.div>

            <motion.div
              className="border-l-4 border-green-500 pl-6"
              variants={fadeInUp}
            >
              <h3 className="font-semibold text-gray-900 mb-2">Prepara os seguintes dados:</h3>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3"
                variants={staggerContainer}
              >
                <motion.div
                  className="flex items-center"
                  variants={fadeInUp}
                >
                  <FileText className="w-5 h-5 text-gray-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Dados pessoais básicos</span>
                </motion.div>
                <motion.div
                  className="flex items-center"
                  variants={fadeInUp}
                >
                  <Activity className="w-5 h-5 text-gray-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Medidas corporais atuais</span>
                </motion.div>
                <motion.div
                  className="flex items-center"
                  variants={fadeInUp}
                >
                  <UserCheck className="w-5 h-5 text-gray-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Histórico médico relevante</span>
                </motion.div>
                <motion.div
                  className="flex items-center"
                  variants={fadeInUp}
                >
                  <Utensils className="w-5 h-5 text-gray-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Hábitos alimentares</span>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="border-l-4 border-purple-500 pl-6"
              variants={fadeInUp}
            >
              <h3 className="font-semibold text-gray-900 mb-2">Segurança e Privacidade:</h3>
              <p className="text-gray-700">
                Todas as informações são tratadas com máxima confidencialidade e utilizadas
                exclusivamente para criar o teu programa personalizado.
              </p>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-center flex-col"
            variants={fadeInUp}
          >
            <div className="text-center">
              <motion.button
                onClick={onStartForm}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-4 px-8 rounded-lg transition duration-200 flex items-center justify-center shadow-lg hover:shadow-xl text-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Começar Questionário
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ChevronRight className="ml-3" size={24} />
                </motion.div>
              </motion.button>
              <motion.p
                className="text-gray-500 text-sm mt-3"
                variants={fadeInUp}
              >
                Clica no botão para começar - podes fazer pausa e retomar a qualquer momento
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const steps = [
  { name: "Dados Pessoais", icon: <User size={20} /> },
  { name: "Exercício", icon: <Activity size={20} /> },
  { name: "Saúde", icon: <Heart size={20} /> },
  { name: "Nutrição", icon: <Utensils size={20} /> },
  { name: "Fotos", icon: <Camera size={20} /> },
  { name: "Revisão", icon: <Clipboard size={20} /> }
];

const countryOptions = [
  { name: 'Portugal', code: 'PT', dialCode: '+351', flag: '🇵🇹' },
  { name: 'España', code: 'ES', dialCode: '+34', flag: '🇪🇸' },
  { name: 'United Kingdom', code: 'GB', dialCode: '+44', flag: '🇬🇧' },
  { name: 'United States', code: 'US', dialCode: '+1', flag: '🇺🇸' },
  { name: 'France', code: 'FR', dialCode: '+33', flag: '🇫🇷' },
  { name: 'Deutschland', code: 'DE', dialCode: '+49', flag: '🇩🇪' },
  { name: 'Italia', code: 'IT', dialCode: '+39', flag: '🇮🇹' },
  { name: 'Brasil', code: 'BR', dialCode: '+55', flag: '🇧🇷' },
  { name: 'Canada', code: 'CA', dialCode: '+1', flag: '🇨🇦' },
  { name: 'Australia', code: 'AU', dialCode: '+61', flag: '🇦🇺' },
  { name: 'Nederland', code: 'NL', dialCode: '+31', flag: '🇳🇱' },
  { name: 'Suisse', code: 'CH', dialCode: '+41', flag: '🇨🇭' },
  { name: 'Belgique', code: 'BE', dialCode: '+32', flag: '🇧🇪' },
  { name: 'Luxembourg', code: 'LU', dialCode: '+352', flag: '🇱🇺' },
  { name: 'Angola', code: 'AO', dialCode: '+244', flag: '🇦🇴' },
  { name: 'Moçambique', code: 'MZ', dialCode: '+258', flag: '🇲🇿' },
];

export default function Anamnese() {
  const [hasStarted, setHasStarted] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    nome: "",
    email: "",
    localidade: "",
    profissao: "",
    countryCode: '+351',
    telemovel: '',
    objetivoExercicio: "",
    praticaExercicio: "não",
    vezesPorSemana: 0,
    temDoresColuna: "não",
    zonaColuna: "",
    temLesao: "não",
    localLesao: "",
    cirurgiaRecente: "não",
    localcirurgia: "",
    usaMedicamento: "não",
    problemaCardiaco: "não",
    dorNoPeito: "não",
    perdeuConsiencia: "não",
    problemaOssos: "não",
    tiposmedicamentos: "",
    medicamentoPressao: "não",
    impedimentoExercicio: "não",
    observacoes: "",
    refeicoesPorDia: 0,
    alimentosPrimeiraRefeicao: "",
    alimentosSegundaRefeicao: "",
    alimentosTerceiraRefeicao: "",
    alimentosQuartaRefeicao: "",
    alimentosQuintaRefeicao: "",
    alimentosSextaRefeicao: "",
    alimentosSetimaRefeicao: "",
    alimentosOitavaRefeicao: "",
    alimentosGosta: "",
    restricaoAlimentar: "",
    dificuldadesPlanoAlimentar: "",
    aguaConsumida: "",
    usaSuplemento: "não",
    qualSuplemento: "",
    acompanhamentoDistancia: "não",
    motivoAcompanhamento: "",
    pesoJejum: "",
    fotoFrontal: [],
    fotoLateral: [],
    fotoCostas: [],
  });
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const stepFields: Record<number, (keyof yup.InferType<typeof FormYupValidationSchema>)[]> = {
    0: ['nome', 'email', 'localidade', 'countryCode', 'telemovel', 'profissao', 'pesoJejum'],
    1: ['objetivoExercicio', 'praticaExercicio', 'vezesPorSemana'],
    2: ['temDoresColuna', 'zonaColuna', 'temLesao', 'localLesao', 'cirurgiaRecente', 'localcirurgia', 'usaMedicamento', 'tiposmedicamentos'],
    3: ['refeicoesPorDia', 'alimentosGosta', 'restricaoAlimentar', 'dificuldadesPlanoAlimentar', 'aguaConsumida', 'usaSuplemento', 'qualSuplemento', 'acompanhamentoDistancia', 'motivoAcompanhamento'],
  };

  const formatPhoneNumber = (phoneNumber: string): string => {
    if (!phoneNumber) return '';
    if (formData.countryCode === '+351') {
      const match = phoneNumber.match(/^(\d{3})(\d{3})(\d{3})$/);
      if (match) return `${match[1]} ${match[2]} ${match[3]}`;
    }
    return phoneNumber;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const checked = (e.target as HTMLInputElement).type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const nextStep = async () => {
    try {
      const fieldsToValidate = stepFields[currentStep] ?? [];
      const stepSchema = FormYupValidationSchema.pick(
        fieldsToValidate as (keyof yup.InferType<typeof FormYupValidationSchema>)[]
      );

      await stepSchema.validate(formData, { abortEarly: false });
      setErrors({});

      if (currentStep < steps.length - 1) {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentStep(prev => prev + 1);
          window.scrollTo(0, 0);
          setIsAnimating(false);
        }, 400);
      }
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const newErrors: Record<string, string> = {};
        err.inner.forEach(error => {
          if (error.path) {
            newErrors[error.path] = error.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };


  const prevStep = () => {
    if (currentStep > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(prev => prev - 1);
        window.scrollTo(0, 0);
        setIsAnimating(false);
      }, 400);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Formulário enviado com sucesso!");
    console.log(formData);
  };

  const RadioButton = ({ name, value, label, checked, onChange }: RadioButtonProps) => {
    return (
      <label className="flex items-center space-x-2 cursor-pointer">
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${checked ? "border-blue-600" : "border-gray-400"}`}>
          {checked && <div className="w-3 h-3 bg-blue-600 rounded-full"></div>}
        </div>
        <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="hidden" />
        <span className="text-sm">{label}</span>
      </label>
    );
  };

  const renderMealInputs = () => {
    const inputs = [];
    const labels = ["Primeira", "Segunda", "Terceira", "Quarta", "Quinta", "Sexta", "Setima", "Oitava"];
    for (let i = 1; i <= formData.refeicoesPorDia && i <= labels.length; i++) {
      const mealKey = `alimentos${labels[i - 1]}Refeicao` as keyof FormDataType;
      inputs.push(
        <div key={mealKey} className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Refeição {i}</label>
          <textarea
            name={mealKey}
            value={formData[mealKey] as string}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows={2}
          />
        </div>
      );
    }
    return inputs;
  };

  if (!hasStarted) {
    return <FormLandingPage onStartForm={() => setHasStarted(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Anamnese de Fitness & Nutrição</h1>
          <p className="text-gray-600">Completa o teu formulário.</p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center ${index <= currentStep ? "text-blue-600" : "text-gray-400"}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 transition-all duration-500 ${index <= currentStep ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"}`}>
                  {step.icon}
                </div>
                <span className="text-xs hidden sm:block">{step.name}</span>
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <form onSubmit={handleSubmit}>
            <div
              className={`transition-all duration-500 transform ${isAnimating ? "opacity-0 translate-x-full" : "opacity-100 translate-x-0"}`}
            >
              {/* Step 1: Personal Data */}
              {currentStep === 0 && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6 flex items-center">
                    <User className="mr-2 text-blue-600" />
                    Dados Pessoais
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-1 font-medium text-gray-700">
                        Nome Completo
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          className={`w-full p-3 border ${errors.nome ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                          required
                        />
                        <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
                      </div>
                      {errors.nome && <p className="mt-1 text-sm text-red-600">{errors.nome}</p>}
                    </div>

                    <div>
                      <label className="block mb-1 font-medium text-gray-700">
                        Email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                          required
                        />
                        <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
                      </div>
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block mb-1 font-medium text-gray-700">
                        Localidade
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="localidade"
                          value={formData.localidade}
                          onChange={handleChange}
                          className={`w-full p-3 border ${errors.localidade ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                          required
                        />
                        <Home className="absolute left-3 top-3.5 text-gray-400" size={18} />
                      </div>
                      {errors.localidade && <p className="mt-1 text-sm text-red-600">{errors.localidade}</p>}
                    </div>

                    <div>
                      <label className="block mb-1 font-medium text-gray-700">
                        Profissão
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="profissao"
                          value={formData.profissao}
                          onChange={handleChange}
                          className={`w-full p-3 border ${errors.profissao ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                        />
                        <Briefcase className="absolute left-3 top-3.5 text-gray-400" size={18} />
                      </div>
                      {errors.profissao && <p className="mt-1 text-sm text-red-600">{errors.profissao}</p>}
                    </div>

                    <div>
                      <label className="block mb-1 font-medium text-gray-700">Telemóvel</label>
                      <div className="relative flex">
                        {/* Country Code Select */}
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className="p-3 border border-gray-300 rounded-l-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer appearance-none"
                          required
                        >
                          {countryOptions.map((country) => (
                            <option key={country.code} value={country.dialCode}>
                              {country.name} {country.dialCode}
                            </option>
                          ))}
                        </select>

                        {/* Phone Input */}
                        <div className="relative flex-1">
                          <input
                            type="tel"
                            name="telemovel"
                            value={formatPhoneNumber(formData.telemovel)}
                            onChange={(e) => {
                              const onlyNumbers = e.target.value.replace(/\D/g, "");
                              setFormData(prev => ({ ...prev, telemovel: onlyNumbers }));
                            }}
                            className={`w-full p-3 border ${errors.telemovel ? 'border-red-500' : 'border-gray-300'} rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                            required
                            placeholder="912 345 678"
                          />
                          <Phone className="absolute right-3 top-3.5 text-gray-400" size={18} />
                        </div>
                      </div>
                      {errors.telemovel && <p className="mt-1 text-sm text-red-600">{errors.telemovel}</p>}
                    </div>
                    <div>
                      <label className="block mb-1 font-medium text-gray-700">
                        Peso em Jejum (kg)
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="pesoJejum"
                          value={formData.pesoJejum}
                          onChange={handleChange}
                          className={`w-full p-3 border ${errors.pesoJejum ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                        />
                      </div>
                      {errors.pesoJejum && <p className="mt-1 text-sm text-red-600">{errors.pesoJejum}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Exercise */}
              {currentStep === 1 && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6 flex items-center">
                    <Activity className="mr-2 text-blue-600" />
                    Exercício Físico
                  </h2>

                  <div className="mb-6">
                    <label className="block mb-2 font-medium text-gray-700">
                      Qual é o teu objetivo com o exercício?
                    </label>
                    <div className="relative">
                      <textarea
                        name="objetivoExercicio"
                        value={formData.objetivoExercicio}
                        onChange={handleChange}
                        className={`w-full p-3 border ${errors.objetivoExercicio ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                        rows={3}
                      />
                      <Target className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    </div>
                    {errors.objetivoExercicio && <p className="mt-1 text-sm text-red-600">{errors.objetivoExercicio}</p>}
                  </div>

                  <div className="mb-6">
                    <label className="block mb-2 font-medium text-gray-700">
                      Praticas exercício físico atualmente?
                    </label>
                    <div className="flex space-x-6 mt-2">
                      <RadioButton
                        name="praticaExercicio"
                        value="sim"
                        label="Sim"
                        checked={formData.praticaExercicio === "sim"}
                        onChange={() => setFormData({ ...formData, praticaExercicio: "sim" })}
                      />
                      <RadioButton
                        name="praticaExercicio"
                        value="não"
                        label="Não"
                        checked={formData.praticaExercicio === "não"}
                        onChange={() => setFormData({ ...formData, praticaExercicio: "não" })}
                      />
                    </div>
                  </div>

                  {formData.praticaExercicio === "sim" && (
                    <div className="mb-6">
                      <label className="block mb-2 font-medium text-gray-700">
                        Quantas vezes por semana?
                      </label>
                      <input
                        type="number"
                        name="vezesPorSemana"
                        min="0"
                        max="7"
                        value={formData.vezesPorSemana}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      {errors.vezesPorSemana && <p className="mt-1 text-sm text-red-600">{errors.vezesPorSemana}</p>}
                    </div>
                  )}

                  <div className="mb-6">
                    <label className="block mb-2 font-medium text-gray-700">
                      Tens algum impedimento para praticar exercício?
                    </label>
                    <div className="flex space-x-6 mt-2">
                      <RadioButton
                        name="impedimentoExercicio"
                        value="sim"
                        label="Sim"
                        checked={formData.impedimentoExercicio === "sim"}
                        onChange={() => setFormData({ ...formData, impedimentoExercicio: "sim" })}
                      />
                      <RadioButton
                        name="impedimentoExercicio"
                        value="não"
                        label="Não"
                        checked={formData.impedimentoExercicio === "não"}
                        onChange={() => setFormData({ ...formData, impedimentoExercicio: "não" })}
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block mb-2 font-medium text-gray-700">
                      Observações adicionais sobre a tua rotina de exercícios
                    </label>
                    <textarea
                      name="observacoes"
                      value={formData.observacoes}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={3}
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Health */}
              {currentStep === 2 && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6 flex items-center">
                    <Heart className="mr-2 text-blue-600" />
                    Saúde
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        Tens dores na coluna?
                      </label>
                      <div className="flex space-x-6 mt-2">
                        <RadioButton
                          name="temDoresColuna"
                          value="sim"
                          label="Sim"
                          checked={formData.temDoresColuna === "sim"}
                          onChange={() => setFormData({ ...formData, temDoresColuna: "sim" })}
                        />
                        <RadioButton
                          name="temDoresColuna"
                          value="não"
                          label="Não"
                          checked={formData.temDoresColuna === "não"}
                          onChange={() => setFormData({ ...formData, temDoresColuna: "não" })}
                        />
                      </div>
                    </div>

                    {formData.temDoresColuna === "sim" && (
                      <div>
                        <label className="block mb-1 font-medium text-gray-700">
                          Em que zona da coluna?
                        </label>
                        <input
                          type="text"
                          name="zonaColuna"
                          value={formData.zonaColuna}
                          onChange={handleChange}
                          className={`w-full p-3 border ${errors.zonaColuna ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                        />
                        {errors.zonaColuna && <p className="mt-1 text-sm text-red-600">{errors.zonaColuna}</p>}
                      </div>
                    )}

                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        Tens alguma lesão?
                      </label>
                      <div className="flex space-x-6 mt-2">
                        <RadioButton
                          name="temLesao"
                          value="sim"
                          label="Sim"
                          checked={formData.temLesao === "sim"}
                          onChange={() => setFormData({ ...formData, temLesao: "sim" })}
                        />
                        <RadioButton
                          name="temLesao"
                          value="não"
                          label="Não"
                          checked={formData.temLesao === "não"}
                          onChange={() => setFormData({ ...formData, temLesao: "não" })}
                        />
                      </div>
                    </div>

                    {formData.temLesao === "sim" && (
                      <div>
                        <label className="block mb-1 font-medium text-gray-700">
                          Onde é a lesão?
                        </label>
                        <input
                          type="text"
                          name="localLesao"
                          value={formData.localLesao}
                          onChange={handleChange}
                          className={`w-full p-3 border ${errors.localLesao ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                        />
                        {errors.localLesao && <p className="mt-1 text-sm text-red-600">{errors.localLesao}</p>}
                      </div>
                    )}

                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        Fizeste alguma cirurgia recentemente?
                      </label>
                      <div className="flex space-x-6 mt-2">
                        <RadioButton
                          name="cirurgiaRecente"
                          value="sim"
                          label="Sim"
                          checked={formData.cirurgiaRecente === "sim"}
                          onChange={() => setFormData({ ...formData, cirurgiaRecente: "sim" })}
                        />
                        <RadioButton
                          name="cirurgiaRecente"
                          value="não"
                          label="Não"
                          checked={formData.cirurgiaRecente === "não"}
                          onChange={() => setFormData({ ...formData, cirurgiaRecente: "não" })}
                        />
                      </div>
                    </div>

                    {formData.cirurgiaRecente === "sim" && (
                      <div>
                        <label className="block mb-1 font-medium text-gray-700">
                          Que cirurgia fizeste?
                        </label>
                        <input
                          type="text"
                          name="localcirurgia"
                          value={formData.localcirurgia}
                          onChange={handleChange}
                          className={`w-full p-3 border ${errors.localcirurgia ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                        />
                        {errors.localcirurgia && <p className="mt-1 text-sm text-red-600">{errors.localcirurgia}</p>}
                      </div>
                    )}

                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        Usas algum medicamento?
                      </label>
                      <div className="flex space-x-6 mt-2">
                        <RadioButton
                          name="usaMedicamento"
                          value="sim"
                          label="Sim"
                          checked={formData.usaMedicamento === "sim"}
                          onChange={() => setFormData({ ...formData, usaMedicamento: "sim" })}
                        />
                        <RadioButton
                          name="usaMedicamento"
                          value="não"
                          label="Não"
                          checked={formData.usaMedicamento === "não"}
                          onChange={() => setFormData({ ...formData, usaMedicamento: "não" })}
                        />
                      </div>
                    </div>

                    {formData.usaMedicamento === "sim" && (
                      <div>
                        <label className="block mb-1 font-medium text-gray-700">
                          Quais medicamentos?
                        </label>
                        <textarea
                          name="tiposmedicamentos"
                          value={formData.tiposmedicamentos}
                          onChange={handleChange}
                          className={`w-full p-3 border ${errors.tiposmedicamentos ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                          rows={2}
                        />
                        {errors.tiposmedicamentos && <p className="mt-1 text-sm text-red-600">{errors.tiposmedicamentos}</p>}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2 font-medium text-gray-700">
                          Tens problemas cardíacos?
                        </label>
                        <div className="flex space-x-6 mt-2">
                          <RadioButton
                            name="problemaCardiaco"
                            value="sim"
                            label="Sim"
                            checked={formData.problemaCardiaco === "sim"}
                            onChange={() => setFormData({ ...formData, problemaCardiaco: "sim" })}
                          />
                          <RadioButton
                            name="problemaCardiaco"
                            value="não"
                            label="Não"
                            checked={formData.problemaCardiaco === "não"}
                            onChange={() => setFormData({ ...formData, problemaCardiaco: "não" })}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 font-medium text-gray-700">
                          Sentes dor no peito?
                        </label>
                        <div className="flex space-x-6 mt-2">
                          <RadioButton
                            name="dorNoPeito"
                            value="sim"
                            label="Sim"
                            checked={formData.dorNoPeito === "sim"}
                            onChange={() => setFormData({ ...formData, dorNoPeito: "sim" })}
                          />
                          <RadioButton
                            name="dorNoPeito"
                            value="não"
                            label="Não"
                            checked={formData.dorNoPeito === "não"}
                            onChange={() => setFormData({ ...formData, dorNoPeito: "não" })}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 font-medium text-gray-700">
                          Já perdeste a consciência?
                        </label>
                        <div className="flex space-x-6 mt-2">
                          <RadioButton
                            name="perdeuConsiencia"
                            value="sim"
                            label="Sim"
                            checked={formData.perdeuConsiencia === "sim"}
                            onChange={() => setFormData({ ...formData, perdeuConsiencia: "sim" })}
                          />
                          <RadioButton
                            name="perdeuConsiencia"
                            value="não"
                            label="Não"
                            checked={formData.perdeuConsiencia === "não"}
                            onChange={() => setFormData({ ...formData, perdeuConsiencia: "não" })}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 font-medium text-gray-700">
                          Tens problemas ósseos?
                        </label>
                        <div className="flex space-x-6 mt-2">
                          <RadioButton
                            name="problemaOssos"
                            value="sim"
                            label="Sim"
                            checked={formData.problemaOssos === "sim"}
                            onChange={() => setFormData({ ...formData, problemaOssos: "sim" })}
                          />
                          <RadioButton
                            name="problemaOssos"
                            value="não"
                            label="Não"
                            checked={formData.problemaOssos === "não"}
                            onChange={() => setFormData({ ...formData, problemaOssos: "não" })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Nutrition */}
              {currentStep === 3 && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6 flex items-center">
                    <Utensils className="mr-2 text-blue-600" />
                    Nutrição
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        Quantas refeições faz por dia?
                      </label>
                      <input
                        type="number"
                        name="refeicoesPorDia"
                        min="0"
                        max="8"
                        value={formData.refeicoesPorDia}
                        onChange={handleChange}
                        className={`w-full p-3 border ${errors.refeicoesPorDia ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                      />
                      {errors.refeicoesPorDia && <p className="mt-1 text-sm text-red-600">{errors.refeicoesPorDia}</p>}
                    </div>

                    {formData.refeicoesPorDia > 0 && (
                      <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                        <h3 className={`font-medium border ${errors.restricaoAlimentar ? 'border-red-500' : 'border-gray-300'} text-gray-800 mb-4 `}>Descreve as tuas refeições</h3>
                        {renderMealInputs()}
                        {errors.restricaoAlimentar && <p className="mt-1 text-sm text-red-600">{errors.restricaoAlimentar}</p>}
                      </div>
                    )}

                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        Que alimentos mais gostas?
                      </label>
                      <textarea
                        name="alimentosGosta"
                        value={formData.alimentosGosta}
                        onChange={handleChange}
                        className={`w-full p-3 border ${errors.alimentosGosta ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                        rows={2}
                      />
                      {errors.alimentosGosta && <p className="mt-1 text-sm text-red-600">{errors.alimentosGosta}</p>}
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        Tens alguma restrição alimentar?
                      </label>
                      <textarea
                        name="restricaoAlimentar"
                        value={formData.restricaoAlimentar}
                        onChange={handleChange}
                        className={`w-full p-3 border ${errors.restricaoAlimentar ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                        rows={2}
                      />
                      {errors.restricaoAlimentar && <p className="mt-1 text-sm text-red-600">{errors.restricaoAlimentar}</p>}
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        Descreve as dificuldades para para seguir um plano alimentar
                      </label>
                      <textarea
                        name="dificuldadesPlanoAlimentar"
                        value={formData.dificuldadesPlanoAlimentar}
                        onChange={handleChange}
                        className={`w-full p-3 border ${errors.dificuldadesPlanoAlimentar ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                        rows={2}
                      />
                      {errors.dificuldadesPlanoAlimentar && <p className="mt-1 text-sm text-red-600">{errors.dificuldadesPlanoAlimentar}</p>}
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        Quantidade de água consumida por dia (litros)
                      </label>
                      <input
                        type="text"
                        name="aguaConsumida"
                        value={formData.aguaConsumida}
                        onChange={handleChange}
                        className={`w-full p-3 border ${errors.aguaConsumida ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                      />
                      {errors.aguaConsumida && <p className="mt-1 text-sm text-red-600">{errors.aguaConsumida}</p>}
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        Usas algum suplemento?
                      </label>
                      <div className="flex space-x-6 mt-2">
                        <RadioButton
                          name="usaSuplemento"
                          value="sim"
                          label="Sim"
                          checked={formData.usaSuplemento === "sim"}
                          onChange={() => setFormData({ ...formData, usaSuplemento: "sim" })}
                        />
                        <RadioButton
                          name="usaSuplemento"
                          value="não"
                          label="Não"
                          checked={formData.usaSuplemento === "não"}
                          onChange={() => setFormData({ ...formData, usaSuplemento: "não" })}
                        />
                      </div>
                    </div>

                    {formData.usaSuplemento === "sim" && (
                      <div>
                        <label className="block mb-1 font-medium text-gray-700">
                          Que suplemento(s)?
                        </label>
                        <input
                          type="text"
                          name="qualSuplemento"
                          value={formData.qualSuplemento}
                          onChange={handleChange}
                          className={`w-full p-3 border ${errors.qualSuplemento ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                        />
                        {errors.qualSuplemento && <p className="mt-1 text-sm text-red-600">{errors.qualSuplemento}</p>}
                      </div>
                    )}

                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        Estás interessado em acompanhamento à distância?
                      </label>
                      <div className="flex space-x-6 mt-2">
                        <RadioButton
                          name="acompanhamentoDistancia"
                          value="sim"
                          label="Sim"
                          checked={formData.acompanhamentoDistancia === "sim"}
                          onChange={() => setFormData({ ...formData, acompanhamentoDistancia: "sim" })}
                        />
                        <RadioButton
                          name="acompanhamentoDistancia"
                          value="não"
                          label="Não"
                          checked={formData.acompanhamentoDistancia === "não"}
                          onChange={() => setFormData({ ...formData, acompanhamentoDistancia: "não" })}
                        />
                      </div>
                    </div>

                    {formData.acompanhamentoDistancia === "sim" && (
                      <div>
                        <label className="block mb-1 font-medium text-gray-700">
                          Qual o motivo para o acompanhamento à distância?
                        </label>
                        <textarea
                          name="motivoAcompanhamento"
                          value={formData.motivoAcompanhamento}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          rows={2}
                        />
                        {errors.motivoAcompanhamento && <p className="mt-1 text-sm text-red-600">{errors.motivoAcompanhamento}</p>}
                      </div>

                    )}
                  </div>
                </div>
              )}

              {/* Step 5: Photos */}
              {currentStep === 4 && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6 flex items-center">
                    <Camera className="mr-2 text-blue-600" />
                    Fotos Corporais
                  </h2>

                  <div className="space-y-8">
                    <div className="text-center">
                      <p className="text-gray-600 mb-4">
                        Para uma melhor avaliação, por favor envia fotos de diferentes ângulos
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center h-48">
                        <Camera className="text-gray-400 mb-2" size={24} />
                        <p className="text-gray-500 text-sm">Foto Frontal</p>
                      </div>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center h-48">
                        <Camera className="text-gray-400 mb-2" size={24} />
                        <p className="text-gray-500 text-sm">Foto Lateral</p>
                      </div>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center h-48">
                        <Camera className="text-gray-400 mb-2" size={24} />
                        <p className="text-gray-500 text-sm">Foto de Costas</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 6: Review */}
              {currentStep === 5 && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6 flex items-center">
                    <Clipboard className="mr-2 text-blue-600" />
                    Revisão Final
                  </h2>

                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="text-blue-600 mr-2" size={20} />
                      <p className="text-blue-800 font-medium">Verifica todas as informações antes de enviar</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-gray-800 border-b pb-2 mb-3">Dados Pessoais</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Nome</p>
                          <p className="font-medium">{formData.nome || "Dados não introduzidos"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-medium">{formData.email || "Dados não introduzidos"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Localidade</p>
                          <p className="font-medium">{formData.localidade || "Dados não introduzidos"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Profissão</p>
                          <p className="font-medium">{formData.profissao || "Dados não introduzidos"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Telemóvel</p>
                          <p className="font-medium">{formData.telemovel || "Dados não introduzidos"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Peso em Jejum</p>
                          <p className="font-medium">{formData.pesoJejum || "Dados não introduzidos"}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-800 border-b pb-2 mb-3">Exercício Físico</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Objetivo</p>
                          <p className="font-medium">{formData.objetivoExercicio || "Dados não introduzidos"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Pratica exercício?</p>
                          <p className="font-medium">{formData.praticaExercicio === "sim" ? "Sim" : "Não"}</p>
                        </div>
                        {formData.praticaExercicio === "sim" && (
                          <div>
                            <p className="text-sm text-gray-500">Vezes por semana</p>
                            <p className="font-medium">{formData.vezesPorSemana}</p>
                          </div>
                        )}
                        <div>
                          <p className="text-sm text-gray-500">Impedimento para exercício</p>
                          <p className="font-medium">{formData.impedimentoExercicio === "sim" ? "Sim" : "Não"}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-800 border-b pb-2 mb-3">Saúde</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Dores na coluna</p>
                          <p className="font-medium">{formData.temDoresColuna === "sim" ? "Sim" : "Não"}</p>
                        </div>
                        {formData.temDoresColuna === "sim" && (
                          <div>
                            <p className="text-sm text-gray-500">Zona da coluna</p>
                            <p className="font-medium">{formData.zonaColuna}</p>
                          </div>
                        )}
                        <div>
                          <p className="text-sm text-gray-500">Lesão</p>
                          <p className="font-medium">{formData.temLesao === "sim" ? "Sim" : "Não"}</p>
                        </div>
                        {formData.temLesao === "sim" && (
                          <div>
                            <p className="text-sm text-gray-500">Local da lesão</p>
                            <p className="font-medium">{formData.localLesao}</p>
                          </div>
                        )}
                        <div>
                          <p className="text-sm text-gray-500">Cirurgia recente</p>
                          <p className="font-medium">{formData.cirurgiaRecente === "sim" ? "Sim" : "Não"}</p>
                        </div>
                        {formData.cirurgiaRecente === "sim" && (
                          <div>
                            <p className="text-sm text-gray-500">Local da cirurgia</p>
                            <p className="font-medium">{formData.localcirurgia}</p>
                          </div>
                        )}
                        <div>
                          <p className="text-sm text-gray-500">Usa medicamento</p>
                          <p className="font-medium">{formData.usaMedicamento === "sim" ? "Sim" : "Não"}</p>
                        </div>
                        {formData.usaMedicamento === "sim" && (
                          <div>
                            <p className="text-sm text-gray-500">Medicamentos</p>
                            <p className="font-medium">{formData.tiposmedicamentos}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-800 border-b pb-2 mb-3">Nutrição</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Refeições por dia</p>
                          <p className="font-medium">{formData.refeicoesPorDia}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Água consumida (litros)</p>
                          <p className="font-medium">{formData.aguaConsumida || "Dados não introduzidos"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Alimentos preferidos</p>
                          <p className="font-medium">{formData.alimentosGosta || "Dados não introduzidos"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Restrições alimentares</p>
                          <p className="font-medium">{formData.restricaoAlimentar || "Nenhuma"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Usa suplemento</p>
                          <p className="font-medium">{formData.usaSuplemento === "sim" ? "Sim" : "Não"}</p>
                        </div>
                        {formData.usaSuplemento === "sim" && (
                          <div>
                            <p className="text-sm text-gray-500">Suplementos</p>
                            <p className="font-medium">{formData.qualSuplemento}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation buttons */}
            <div className="bg-gray-50 px-6 py-4 flex justify-between border-t">
              {currentStep > 0 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
                >
                  <ChevronLeft className="mr-1" size={16} />
                  Anterior
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
                >
                  Próximo
                  <ChevronRight className="ml-1" size={16} />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center px-4 py-2 bg-green-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"
                >
                  Enviar Formulário
                  <CheckCircle className="ml-1" size={16} />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}