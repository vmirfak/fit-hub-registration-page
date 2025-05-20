import { useState, ChangeEvent, useEffect, useCallback } from "react";
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
  Shield,
  Ruler,
  Calendar,
  Weight,
  AlertCircle,
  Apple,
  
} from "lucide-react";
import { motion } from "framer-motion";
import * as yup from 'yup';
import { FormYupValidationSchema } from "@/utils/Validation/FormYupValidationSchema";
import { AnamneseFormData, RadioButtonProps } from "@/types/anamnesetypes";
import { countryOptions } from "@/utils/countryOptions";
import { useAnamnese } from "@/context/useAnamnese";
import { ConditionalField } from "@/components/ui/ConditionalField";
import { InputError } from "@/components/InputError";
import { debounce } from 'lodash';
import { ConditionalMealSection } from "@/components/ui/ConditionalMealSection";
import { PiHamburger, PiSmiley, PiSmileySad } from "react-icons/pi";
import { MdOutlineTaskAlt, MdOutlineWaterDrop } from "react-icons/md"
import CustomDropdown from "@/components/CustomDropdown";

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

export default function Anamnese() {
  const [hasStarted, setHasStarted] = useState(false);
  const [formData, setFormData] = useState<AnamneseFormData>({
    nome: "",
    email: "",
    altura: 0,
    genero: "",
    tipoImpedimento: "",
    praticouModalidade: "",
    dataNascimento: "",
    localidade: "",
    restricaoAlimentar: "",
    restricoesAlimentares: [],
    profissao: "",
    countryCode: '+351',
    telemovel: '',
    objetivoExercicio: "",
    praticaExercicio: "",
    vezesPorSemana: 0,
    impedimentoExercicio: "",
    observacoes: "",
    modalidadeDesportiva: "",
    experienciaDistancia: "",
    experienciaProblemas: "",
    tempoPorSessao: "",
    preferenciaLocalTreino: "",
    materialDisponivel: "",
    nivelConfortoSozinho: "",
    temDoresColuna: "",
    zonaColuna: "",
    temLesao: "",
    localLesao: "",
    cirurgiaRecente: "",
    localcirurgia: "",
    usaMedicamento: "",
    problemaCardiaco: "",
    dorNoPeito: "",
    perdeuConsiencia: "",
    problemaOssos: "",
    tiposmedicamentos: "",
    medicamentoPressao: "",
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
    alimentosNaoGosta: "",
    dificuldadesPlanoAlimentar: "",
    aguaConsumida: "",
    usaSuplemento: "",
    qualSuplemento: "",
    acompanhamentoDistancia: "",
    motivoAcompanhamento: "",
    pesoJejum: "",
    fotoFrontal: [],
    fotoLateral: [],
    fotoCostas: [],
  });
  const { submitForm, isLoading, isSuccess, resetSubmission } = useAnamnese();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const stepFields: Record<number, (keyof yup.InferType<typeof FormYupValidationSchema>)[]> = {
    0: ['nome', 'email', 'localidade', 'countryCode', 'telemovel', 'profissao', 'pesoJejum', 'altura', 'genero', 'dataNascimento'],
    1: ['preferenciaLocalTreino', 'materialDisponivel', 'impedimentoExercicio', 'tipoImpedimento', 'objetivoExercicio', 'praticouModalidade', 'modalidadeDesportiva', 'praticaExercicio', 'vezesPorSemana', 'tempoPorSessao', 'experienciaDistancia', 'experienciaProblemas', 'nivelConfortoSozinho'],
    2: ['temDoresColuna', 'zonaColuna', 'temLesao', 'localLesao', 'cirurgiaRecente', 'localcirurgia', 'usaMedicamento', 'tiposmedicamentos', 'problemaCardiaco', 'dorNoPeito', 'perdeuConsiencia', 'problemaOssos'],
    3: ['refeicoesPorDia', 'alimentosGosta', 'alimentosNaoGosta', 'restricaoAlimentar', 'restricoesAlimentares', 'dificuldadesPlanoAlimentar', 'aguaConsumida', 'usaSuplemento', 'qualSuplemento', 'acompanhamentoDistancia', 'motivoAcompanhamento'],
    4: ['fotoFrontal', 'fotoLateral', 'fotoCostas']
  };
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});

  const validateCurrentStep = useCallback(async (data: AnamneseFormData) => {
    const fieldsToValidate = stepFields[currentStep] ?? [];

    // Filter to only validate touched fields in the current step
    const fieldsToActuallyValidate = fieldsToValidate.filter(field =>
      touchedFields[field as string]
    );

    if (fieldsToActuallyValidate.length === 0) return;

    try {
      const stepSchema = FormYupValidationSchema.pick(
        fieldsToActuallyValidate as readonly (keyof yup.InferType<typeof FormYupValidationSchema>)[]
      );
      await stepSchema.validate(data, { abortEarly: false });

      // Clear errors only for the fields we just validated
      setErrors(prev => {
        const newErrors = { ...prev };
        fieldsToActuallyValidate.forEach(field => {
          delete newErrors[field as string];
        });
        return newErrors;
      });
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const newErrors: Record<string, string> = {};
        err.inner.forEach(error => {
          if (error.path && touchedFields[error.path]) {
            newErrors[error.path] = error.message;
          }
        });
        setErrors(prev => ({ ...prev, ...newErrors }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep, touchedFields]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const debouncedValidate = debounce(validateCurrentStep, 500);
    debouncedValidate(formData);
    return () => debouncedValidate.cancel();
  }, [formData, validateCurrentStep]);

  const formatPhoneNumber = (phoneNumber: string): string => {
    if (!phoneNumber) return '';
    if (formData.countryCode === '+351') {
      const match = phoneNumber.match(/^(\d{3})(\d{3})(\d{3})$/);
      if (match) return `${match[1]} ${match[2]} ${match[3]}`;
    }
    return phoneNumber;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    let finalValue: string | number | boolean;
    if (type === 'checkbox') {
      finalValue = checked;
    } else if (type === 'number') {
      finalValue = value === '' ? '' : Number(value);
    } else {
      finalValue = value;
    }

    setFormData(prev => ({
      ...prev,
      [name]: finalValue
    }));

    // Mark the field as touched
    setTouchedFields(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const nextStep = async () => {
    // Debug: Log current step and form data
    console.group(`Next Step Attempt - Step ${currentStep}`);
    console.log('Current form data:', formData);

    try {
      // 1. Get fields to validate for current step
      const fieldsToValidate = stepFields[currentStep] ?? [];
      console.log('Fields to validate:', fieldsToValidate);

      // 2. Create validation schema for current step
      const stepSchema = FormYupValidationSchema.pick(
        fieldsToValidate as (keyof yup.InferType<typeof FormYupValidationSchema>)[]
      );
      console.log('Validation schema created');

      // 3. Validate current step
      console.log('Starting validation...');
      await stepSchema.validate(formData, { abortEarly: false });
      setErrors({});
      console.log('Validation successful');

      setTouchedFields(prev => ({
        ...prev,
        ...fieldsToValidate.reduce((acc, field) => {
          acc[field as string] = true;
          return acc;
        }, {} as Record<string, boolean>)
      }));

      // 4. Handle step transition or form submission
      if (currentStep < steps.length - 1) {
        console.log('Moving to next step...');
        setIsAnimating(true);

        // Use requestAnimationFrame for better performance debugging
        requestAnimationFrame(() => {
          console.log('Animation frame - performing transition');
          setTimeout(() => {
            setCurrentStep(prev => {
              console.log(`Updating step from ${prev} to ${prev + 1}`);
              return prev + 1;
            });
            window.scrollTo(0, 0);
            setIsAnimating(false);
            console.log('Transition complete');
          }, 400);
        });
      } else {
        // On the last step, submit the form
        console.log('Last step reached - submitting form...');
        await handleSubmit(new Event('submit') as unknown as React.FormEvent);
      }
    } catch (err) {
      console.error('Error in nextStep:', err);

      if (err instanceof yup.ValidationError) {
        console.group('Validation Errors');
        console.log('Number of errors:', err.inner.length);

        const newErrors: Record<string, string> = {};
        err.inner.forEach((error, index) => {
          console.log(`Error ${index + 1}:`, {
            path: error.path,
            message: error.message,
            value: error.value
          });

          if (error.path) {
            newErrors[error.path] = error.message;
          }
        });

        console.groupEnd();
        setErrors(newErrors);
      } else {
        // Handle non-validation errors
        console.error('Non-validation error:', err);
        // Consider adding a user-friendly error message
        setErrors({
          _general: 'An unexpected error occurred. Please try again.'
        });
      }
    } finally {
      console.groupEnd();
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

  const resetForm = () => {
    setFormData({
      nome: "",
      email: "",
      altura: 0,
      praticouModalidade: "",
      dataNascimento: "",
      genero: "",
      experienciaDistancia: "",
      localidade: "",
      profissao: "",
      countryCode: '+351',
      telemovel: '',
      tipoImpedimento: "",
      objetivoExercicio: "",
      praticaExercicio: "",
      vezesPorSemana: 0,
      temDoresColuna: "",
      zonaColuna: "",
      temLesao: "",
      localLesao: "",
      cirurgiaRecente: "",
      localcirurgia: "",
      usaMedicamento: "",
      problemaCardiaco: "",
      dorNoPeito: "",
      perdeuConsiencia: "",
      problemaOssos: "",
      tiposmedicamentos: "",
      medicamentoPressao: "",
      impedimentoExercicio: "",
      observacoes: "",
      refeicoesPorDia: 0,
      tempoPorSessao: "",
      modalidadeDesportiva: "",
      preferenciaLocalTreino: "",
      materialDisponivel: "",
      nivelConfortoSozinho: "",
      experienciaProblemas: "",
      alimentosPrimeiraRefeicao: "",
      alimentosSegundaRefeicao: "",
      alimentosTerceiraRefeicao: "",
      alimentosQuartaRefeicao: "",
      alimentosQuintaRefeicao: "",
      restricoesAlimentares: [],
      alimentosSextaRefeicao: "",
      alimentosSetimaRefeicao: "",
      alimentosOitavaRefeicao: "",
      alimentosGosta: "",
      alimentosNaoGosta: "",
      restricaoAlimentar: "",
      dificuldadesPlanoAlimentar: "",
      aguaConsumida: "",
      usaSuplemento: "",
      qualSuplemento: "",
      acompanhamentoDistancia: "",
      motivoAcompanhamento: "",
      pesoJejum: "",
      fotoFrontal: [],
      fotoLateral: [],
      fotoCostas: [],
    });
    setCurrentStep(0);
    resetSubmission();
    setHasStarted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.group('Form Submission Debug');
    console.log('Initial form data:', JSON.parse(JSON.stringify(formData)));

    try {
      console.log('Starting validation...');

      // Validate all fields before submission
      await FormYupValidationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      console.log('Validation successful - no errors');

      console.log('Submitting form data...');
      const submissionResponse = await submitForm(formData);
      console.log('Submission response:', submissionResponse);

      console.groupEnd();
    } catch (err) {
      console.error('Submission error:', err);

      if (err instanceof yup.ValidationError) {
        console.log('Validation errors found:', err.errors);
        const newErrors: Record<string, string> = {};

        err.inner.forEach((error, index) => {
          console.log(`Error #${index + 1}:`, {
            path: error.path,
            message: error.message,
            value: error.value
          });

          if (error.path) {
            newErrors[error.path] = error.message;
          }
        });

        setErrors(newErrors);
        console.log('Current errors state:', newErrors);

        // Scroll to the first error
        const firstErrorField = Object.keys(newErrors)[0];
        if (firstErrorField) {
          console.log('Scrolling to first error field:', firstErrorField);
          const element = document.querySelector(`[name="${firstErrorField}"]`);
          console.log('Found element:', element);
          element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        console.error('Non-validation error:', err);
      }

      console.groupEnd();
      throw err;
    }
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
      const mealKey = `alimentos${labels[i - 1]}Refeicao` as keyof AnamneseFormData;
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

  type ReviewFieldProps = {
    label: string;
    value: string | number | null | undefined;
    specialDefault?: string;
  };

  const ReviewField = ({ label, value, specialDefault = "Dados não introduzidos" }: ReviewFieldProps) => {
    const displayValue = value || specialDefault;
    const isEmpty = !value;

    return (
      <div>
        <p className="text-sm font-medium text-gray-600 mb-1">{label}</p>
        <div className={`px-3 py-2 rounded ${isEmpty ? 'bg-gray-50 text-gray-500' : 'bg-blue-50 text-blue-700'}`}>
          <p className="font-medium">{displayValue}</p>
        </div>
      </div>
    );
  };

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md text-center">
        <div className="mb-6">
          <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4">Formulário enviado com sucesso!</h2>
        <p className="mb-6">Obrigado por preencher o formulário. Entraremos em contato em breve.</p>
        <button
          onClick={resetForm}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Preencher outro formulário
        </button>
      </div>
    );
  }

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
                <div className="p-6 mb-10">
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
                      <InputError message={errors.nome} />
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
                      <InputError message={errors.email} />
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
                      <InputError message={errors.localidade} />
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
                      <InputError message={errors.profissao} />
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
                      <InputError message={errors.telemovel} />
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
                        <Weight className="absolute left-3 top-3.5 text-gray-400" size={18} />
                      </div>
                      <InputError message={errors.pesoJejum} />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium text-gray-700">
                        Altura (cm)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          name="altura"
                          value={formData.altura || ''}
                          onChange={handleChange}
                          className={`w-full p-3 border ${errors.altura ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                          min="100"
                          max="250"
                          step="1"
                        />
                        <Ruler className="absolute left-3 top-3.5 text-gray-400" size={18} />
                      </div>
                      <InputError message={errors.altura} />
                    </div>

                    <div>
                      <label className="block mb-1 font-medium text-gray-700">
                        Data de Nascimento
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="dataNascimento"
                          value={formData.dataNascimento || ''}
                          onChange={handleChange}
                          className={`w-full p-3 border ${errors.dataNascimento ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                          max={new Date().toISOString().split('T')[0]}
                        />
                        <Calendar className="absolute left-3 top-3.5 text-gray-400" size={18} />
                      </div>
                      <InputError message={errors.dataNascimento} />
                    </div>

                    <div>
                      <label className="block mb-2 font-semibold text-gray-800 text-sm">
                        Sexo
                      </label>
                      <select
                        name="genero"
                        value={formData.genero}
                        onChange={handleChange}
                        className={`w-full p-3 cursor-pointer border ${errors.genero ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      >
                        <option value="" disabled>Selecione o género</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                      </select>
                      <InputError message={errors.genero} />
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
                    <CustomDropdown />
                    <InputError message={errors.objetivoExercicio} />
                  </div>
                  {/* Já praticaste alguma modalidade desportiva? */}
                  <div className="mb-6">
                    <label className="block mb-2 font-medium text-gray-700">
                      Já praticaste alguma modalidade desportiva?
                    </label>
                    <div className="flex space-x-6 mt-2">
                      <RadioButton
                        name="praticouModalidade"
                        value="sim"
                        label="Sim"
                        checked={formData.praticouModalidade === "sim"}
                        onChange={() => setFormData({ ...formData, praticouModalidade: "sim" })}
                      />
                      <RadioButton
                        name="praticouModalidade"
                        value="não"
                        label="Não"
                        checked={formData.praticouModalidade === "não"}
                        onChange={() => setFormData({ ...formData, praticouModalidade: "não" })}
                      />
                      <InputError message={errors.praticouModalidade} />
                    </div>

                  </div>

                  {/* Se sim, na tua opinião o que correu mal */}
                  <ConditionalField
                    isVisible={formData.praticouModalidade === "sim"}
                    label="Que modalidades praticaste?"
                    name="modalidadeDesportiva"
                    value={formData.modalidadeDesportiva}
                    onChange={handleChange}
                    placeholder="Menciona as modalidades..."
                    rows={2}
                    fieldType="textarea"
                    error={errors.modalidadeDesportiva}
                  />

                  {/* Já tiveste alguma experiência anterior em ser acompanhada à distância? */}
                  <div className="mb-6 mt-5">
                    <label className="block mb-2 font-medium text-gray-700">
                      Já tiveste alguma experiência anterior em ser acompanhado(a) à distância?
                    </label>
                    <div className="flex space-x-6 mt-2">
                      <RadioButton
                        name="experienciaDistancia"
                        value="sim"
                        label="Sim"
                        checked={formData.experienciaDistancia === "sim"}
                        onChange={() => setFormData({ ...formData, experienciaDistancia: "sim" })}
                      />
                      <RadioButton
                        name="experienciaDistancia"
                        value="não"
                        label="Não"
                        checked={formData.experienciaDistancia === "não"}
                        onChange={() => setFormData({ ...formData, experienciaDistancia: "não" })}
                      />
                      <InputError message={errors.experienciaDistancia} />
                    </div>
                  </div>
                  <ConditionalField
                    isVisible={formData.experienciaDistancia === "sim"}
                    label="O que correu mal na tua opinião?"
                    name="experienciaProblemas"
                    value={formData.experienciaProblemas}
                    onChange={handleChange}
                    placeholder="Menciona as dificuldades..."
                    rows={2}
                    fieldType="textarea"
                    error={errors.experienciaProblemas}
                  />

                  {/* Gostarias de treinar em casa ou no ginásio */}
                  <div className="mb-6">
                    <label className="block mb-2 font-medium text-gray-700">
                      Gostarias de treinar em casa ou no ginásio?
                    </label>
                    <select
                      name="preferenciaLocalTreino"
                      value={formData.preferenciaLocalTreino}
                      onChange={handleChange}
                      className="w-full p-3 cursor-pointer border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Seleciona uma opção</option>
                      <option value="casa">Casa</option>
                      <option value="ginásio">Ginásio</option>
                    </select>
                    <InputError message={errors.preferenciaLocalTreino} />
                  </div>

                  <ConditionalField
                    isVisible={formData.preferenciaLocalTreino === "casa"}
                    label="Que material tens disponível?"
                    name="materialDisponivel"
                    value={formData.materialDisponivel}
                    onChange={handleChange}
                    placeholder="Menciona o manterial que tens dísponível em casa..."
                    rows={2}
                    fieldType="textarea"
                    error={errors.materialDisponivel}
                  />

                  {/* De 0 a 10 quão à vontade te sentes em treinar sozinho */}
                  <div className="mb-6">
                    <label className="block mb-2 font-medium text-gray-700">
                      De 0 a 10, quão à vontade te sentes em treinar sozinho?
                    </label>
                    <input
                      type="number"
                      name="nivelConfortoSozinho"
                      min="0"
                      max="10"
                      value={formData.nivelConfortoSozinho}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <InputError message={errors.nivelConfortoSozinho} />
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
                      <InputError message={errors.praticaExercicio} />
                    </div>
                  </div>
                  <ConditionalField
                    isVisible={formData.praticaExercicio === "sim"}
                    label="Quantas vezes por semana?"
                    name="vezesPorSemana"
                    value={formData.vezesPorSemana.toString()}
                    onChange={handleChange}
                    placeholder="Número de vezes em que praticas exercício..."
                    rows={2}
                    fieldType="number"
                    error={errors.vezesPorSemana}
                  />
                  {/* Quanto tempo tens disponível para treinar por sessão */}
                  <div className="mb-6">
                    <label className="block mb-2 font-medium text-gray-700">
                      Quanto tempo tens disponível para treinar por sessão?<span className="text-zinc-500"> (em minutos)</span>
                    </label>
                    <input
                      type="number"
                      name="tempoPorSessao"
                      value={formData.tempoPorSessao}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <InputError message={errors.tempoPorSessao} />
                  </div>

                  <div className="mb-6">
                    <label className="block mb-2 font-medium text-gray-700">
                      Tens alguma limitação para praticar exercício?
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
                      <InputError message={errors.possuiLimitacaoExercicio} />
                    </div>
                  </div>
                  <ConditionalField
                    isVisible={formData.impedimentoExercicio === "sim"}
                    label="Qual é o impedimento?"
                    name="tipoImpedimento"
                    value={formData.tipoImpedimento}
                    onChange={handleChange}
                    placeholder="Menciona o impedimento para a prática de exercício..."
                    rows={2}
                    fieldType="text"
                    error={errors.tipoImpedimento}
                  />
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
                        Tens dores no dia-a-dia em alguma articulação ou coluna?
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
                        <InputError message={errors.temDoresColuna} />
                      </div>
                    </div>
                    <ConditionalField
                      isVisible={formData.temDoresColuna === "sim"}
                      label="Em que zona?"
                      name="zonaColuna"
                      value={formData.zonaColuna}
                      onChange={handleChange}
                      placeholder="Menciona em que zona da coluna tens dores..."
                      rows={2}
                      fieldType="textarea"
                      error={errors.zonaColuna}
                    />

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
                        <InputError message={errors.temLesao} />
                      </div>

                    </div>
                    <ConditionalField
                      isVisible={formData.temLesao === "sim"}
                      label="Em que zona?"
                      name="localLesao"
                      value={formData.localLesao}
                      onChange={handleChange}
                      placeholder="Menciona qual é o local onde possuis a lesão..."
                      rows={2}
                      fieldType="textarea"
                      error={errors.localLesao}
                    />
                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        Já realizou alguma cirurgia?
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
                        <InputError message={errors.cirurgiaRecente} />
                      </div>
                    </div>
                    <ConditionalField
                      isVisible={formData.cirurgiaRecente === "sim"}
                      label="Que cirurgia fizeste?"
                      name="localcirurgia"
                      value={formData.localcirurgia}
                      onChange={handleChange}
                      placeholder="Menciona qual é o local onde foi a intervenção circúrgica..."
                      rows={2}
                      fieldType="textarea"
                      error={errors.localcirurgia}
                    />

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
                        <InputError message={errors.usaMedicamento} />
                      </div>
                    </div>

                    <ConditionalField
                      isVisible={formData.usaMedicamento === "sim"}
                      label="Quais medicamentos?"
                      name="tiposmedicamentos"
                      value={formData.tiposmedicamentos}
                      onChange={handleChange}
                      placeholder="Menciona quais os medicamentos..."
                      rows={2}
                      fieldType="textarea"
                      error={errors.tiposmedicamentos}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2 font-medium text-gray-700">
                          Algum médico te disse que possuis um problema cardíaco e recomendou exercícios apenas sob a supervisão médica?
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
                        <InputError message={errors.problemaCardiaco} />
                      </div>

                      <div>
                        <label className="block mb-2 font-medium text-gray-700">
                          Sentes dor no peito provocada pela prática de exercício fícico?
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
                        <InputError message={errors.dorNoPeito} />
                      </div>

                      <div>
                        <label className="block mb-2 font-medium text-gray-700">
                          Já perdeste a consciência em alguma ocasião ou sofreste alguma queda em virtude de tonturas??
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
                        <InputError message={errors.perdeuConsiencia} />
                      </div>

                      <div>
                        <label className="block mb-2 font-medium text-gray-700">
                          Tens problemas ósseos ou articulares que podem agravar-se com a prática de exercício físico?
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
                        <InputError message={errors.problemaOssos} />
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
                    <div className="relative">
                      <label className="block mb-2 font-medium text-gray-700">
                        Quantas refeições faz por dia?
                      </label>
                      <PiHamburger className="absolute left-3 top-12 text-gray-400" size={18} />
                      <input
                        type="number"
                        name="refeicoesPorDia"
                        min="0"
                        max="8"
                        value={formData.refeicoesPorDia}
                        onChange={handleChange}
                        className={`w-full p-3 border ${errors.refeicoesPorDia ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                      />
                      <InputError message={errors.refeicoesPorDia} />
                    </div>

                    {formData.refeicoesPorDia > 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`border rounded-lg p-4 ${errors.restricaoAlimentar
                          ? 'border-red-300 bg-red-50'
                          : 'border-gray-200 bg-gray-50'
                          }`}
                      >
                        <ConditionalMealSection
                          isVisible={formData.refeicoesPorDia > 0}
                          title="Descreve as tuas refeições"
                          error={errors.restricaoAlimentar}
                        >
                          {renderMealInputs()}
                        </ConditionalMealSection>

                        {errors.restricaoAlimentar && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-sm text-red-600 flex items-start"
                          >
                            <AlertCircle
                              className="h-4 w-4 mr-1 flex-shrink-0 mt-0.5"
                            />
                            <span>{errors.restricaoAlimentar}</span>
                          </motion.p>
                        )}
                      </motion.div>
                    )}

                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        Que alimentos mais gostas?
                      </label>
                      <div className="relative">
                        <PiSmiley className="absolute left-3 top-3.5 text-gray-400" size={20} />
                        <textarea
                          name="alimentosGosta"
                          value={formData.alimentosGosta}
                          onChange={handleChange}
                          className={`w-full p-3 border ${errors.alimentosGosta ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                          rows={2}
                        />
                      </div>
                      <InputError message={errors.alimentosGosta} />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        Que alimentos menos gostas?
                      </label>
                      <div className="relative">
                        <PiSmileySad className="absolute left-3 top-3.5 text-gray-400" size={20} />
                        <textarea
                          name="alimentosNaoGosta"
                          value={formData.alimentosNaoGosta}
                          onChange={handleChange}
                          className={`w-full p-3 border ${errors.alimentosNaoGosta ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                          rows={2}
                        />
                      </div>
                      <InputError message={errors.alimentosNaoGosta} />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        Tens alguma restrição alimentar?
                      </label>
                      <div className="flex space-x-6 mt-2">
                        <RadioButton
                          name="restricaoAlimentar"
                          value="sim"
                          label="Sim"
                          checked={formData.restricaoAlimentar === "sim"}
                          onChange={() => setFormData({ ...formData, restricaoAlimentar: "sim" })}
                        />
                        <RadioButton
                          name="restricaoAlimentar"
                          value="não"
                          label="Não"
                          checked={formData.restricaoAlimentar === "não"}
                          onChange={() => {
                            setFormData({
                              ...formData,
                              restricaoAlimentar: "não",
                              restricoesAlimentares: []
                            });
                          }}
                        />
                      </div>
                    </div>
                    {formData.restricaoAlimentar === "sim" && (
                      <div className="mt-6 space-y-4">
                        <fieldset>
                          <label className="block mb-2 font-medium text-gray-700">
                            Quais restrições alimentares?
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                              "Vegetariano",
                              "Vegano",
                              "Sem glúten",
                              "Sem lactose",
                              "Diabético",
                              "Halal",
                              "Kosher"
                            ].map((restricao) => (
                              <div key={restricao} className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    type="checkbox"
                                    id={`restricao-${restricao}`}
                                    name="restricoesAlimentares"
                                    value={restricao}
                                    checked={formData.restricoesAlimentares?.includes(restricao) || false}
                                    onChange={(e) => {
                                      const isChecked = e.target.checked;
                                      setFormData(prev => ({
                                        ...prev,
                                        restricoesAlimentares: isChecked
                                          ? [...(prev.restricoesAlimentares || []), restricao]
                                          : (prev.restricoesAlimentares || []).filter(r => r !== restricao)
                                      }));
                                    }}
                                    className="focus:ring-blue-500 cursor-pointer h-4 w-4 text-blue-600 border-gray-300 rounded transition"
                                    aria-describedby={`restricao-${restricao}-description`}
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor={`restricao-${restricao}`} className="font-medium text-gray-700 hover:text-gray-900 cursor-pointer">
                                    {restricao}
                                  </label>
                                  {restricao === "Outros" && (
                                    <p id={`restricao-${restricao}-description`} className="text-gray-500 mt-1">
                                      Especifique abaixo
                                    </p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                          <InputError message={errors.restricoesAlimentares} />
                        </fieldset>
                      </div>
                    )}
                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        Descreve as dificuldades para para seguir um plano alimentar
                      </label>
                      <div className="relative">
                        <MdOutlineTaskAlt className="absolute left-3 top-3.5 text-gray-400" size={20} />
                        <textarea
                          name="dificuldadesPlanoAlimentar"
                          value={formData.dificuldadesPlanoAlimentar}
                          onChange={handleChange}
                          className={`w-full p-3 border ${errors.dificuldadesPlanoAlimentar ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                          rows={2}
                        />
                      </div>

                      {errors.dificuldadesPlanoAlimentar && <p className="mt-1 text-sm text-red-600">{errors.dificuldadesPlanoAlimentar}</p>}
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        Quantidade de água consumida por dia (litros)
                      </label>
                      <div className="relative">
                        <MdOutlineWaterDrop className="absolute left-3 top-3.5 text-gray-400" size={20} />
                        <input
                          type="text"
                          name="aguaConsumida"
                          value={formData.aguaConsumida}
                          onChange={handleChange}
                          className={`w-full p-3 border ${errors.aguaConsumida ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10`}
                        />
                      </div>
                      <InputError message={errors.aguaConsumida} />
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
                        <InputError message={errors.usaSuplemento} />
                      </div>
                    </div>

                    <ConditionalField
                      isVisible={formData.usaSuplemento === "sim"}
                      label="Que suplemento(s)?"
                      name="qualSuplemento"
                      value={formData.qualSuplemento}
                      onChange={handleChange}
                      placeholder="Menciona o(s) suplemento(s) que utilizas..."
                      rows={2}
                      fieldType="text"
                    />
                    {errors.qualSuplemento && <p className="mt-1 text-sm text-red-600">{errors.qualSuplemento}</p>}

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
                        <InputError message={errors.acompanhamentoDistancia} />
                      </div>
                    </div>
                    <ConditionalField
                      isVisible={formData.acompanhamentoDistancia === "sim"}
                      label="Qual o motivo para o acompanhamento à distância?"
                      name="motivoAcompanhamento"
                      value={formData.motivoAcompanhamento}
                      onChange={handleChange}
                      placeholder="Menciona o(s) mnotivo(s) pelo(s) qual(is) estás interessado no acompanhamento à distância..."
                      rows={2}
                      fieldType="text"
                      error={errors.motivoAcompanhamento}
                    />
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
                      {/* Foto Frontal */}
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center h-48 relative">
                        <input
                          type="file"
                          accept="image/*"
                          name="fotoFrontal"
                          onChange={(e) =>
                            setFormData({ ...formData, fotoFrontal: e.target.files ? Array.from(e.target.files) : [] })
                          }
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <InputError message={errors.fotoFrontal} />
                        <Camera className="text-gray-400 mb-2" size={24} />
                        <p className="text-gray-500 text-sm">Foto Frontal</p>
                      </div>

                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center h-48 relative">
                        <input
                          type="file"
                          accept="image/*"
                          name="fotoLateral"
                          onChange={(e) =>
                            setFormData({ ...formData, fotoLateral: e.target.files ? Array.from(e.target.files) : [] })
                          }
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <InputError message={errors.fotoLateral} />
                        <Camera className="text-gray-400 mb-2" size={24} />
                        <p className="text-gray-500 text-sm">Foto Lateral</p>
                      </div>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center h-48 relative">
                        <input
                          type="file"
                          accept="image/*"
                          name="fotoCostas"
                          onChange={(e) =>
                            setFormData({ ...formData, fotoCostas: e.target.files ? Array.from(e.target.files) : [] })
                          }
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <InputError message={errors.fotoCostas} />
                        <Camera className="text-gray-400 mb-2" size={24} />
                        <p className="text-gray-500 text-sm">Foto de Costas</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 6: Review */}
              {currentStep === 5 && (
                <div className="p-6 max-w-4xl mx-auto">
                  <h2 className="text-2xl font-bold mb-6 flex items-center text-blue-700 border-b pb-3">
                    <Clipboard className="mr-3 text-blue-600" />
                    Revisão Final
                  </h2>

                  <div className="bg-blue-50 rounded-lg p-4 mb-8 border border-blue-200 shadow-sm">
                    <div className="flex items-center">
                      <CheckCircle className="text-blue-600 mr-3 flex-shrink-0" size={24} />
                      <p className="text-blue-800 font-medium">Por favor, verifica todas as informações antes de submeter o formulário</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Dados Pessoais */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-800 flex items-center">
                          <User className="mr-2 text-blue-600" size={18} />
                          Dados Pessoais
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 p-6">
                        <ReviewField label="Nome" value={formData.nome} />
                        <ReviewField label="Email" value={formData.email} />
                        <ReviewField label="Data de Nascimento" value={formData.dataNascimento} />
                        <ReviewField label="Género" value={formData.genero} />
                        <ReviewField label="Altura (cm)" value={formData.altura} />
                        <ReviewField label="Localidade" value={formData.localidade} />
                        <ReviewField label="Profissão" value={formData.profissao} />
                        <ReviewField label="Telemóvel" value={formData.telemovel ? `${formData.countryCode} ${formData.telemovel}` : null} />
                        <ReviewField label="Peso em Jejum" value={formData.pesoJejum} />
                      </div>
                    </div>

                    {/* Objetivos e Motivação */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-800 flex items-center">
                          <Target className="mr-2 text-blue-600" size={18} />
                          Objetivos e Motivação
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 p-6">
                        <ReviewField label="Motivo do Acompanhamento" value={formData.motivoAcompanhamento} />
                        <ReviewField label="Acompanhamento à Distância" value={formData.acompanhamentoDistancia} />
                      </div>
                    </div>

                    {/* Exercício Físico */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-800 flex items-center">
                          <Activity className="mr-2 text-blue-600" size={18} />
                          Exercício Físico
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 p-6">
                        <ReviewField label="Objetivo" value={formData.objetivoExercicio} />
                        <ReviewField label="Pratica exercício?" value={formData.praticaExercicio === "sim" ? "Sim" : "Não"} />

                        {formData.praticaExercicio === "sim" && (
                          <>
                            <ReviewField label="Vezes por semana" value={formData.vezesPorSemana} />
                            <ReviewField label="Modalidade Desportiva" value={formData.modalidadeDesportiva} />
                            <ReviewField label="Já praticou esta modalidade?" value={formData.praticouModalidade} />
                          </>
                        )}

                        <ReviewField label="Impedimento para exercício" value={formData.impedimentoExercicio === "sim" ? "Sim" : "Não"} />

                        {formData.impedimentoExercicio === "sim" && (
                          <ReviewField label="Tipo de Impedimento" value={formData.tipoImpedimento} />
                        )}

                        <ReviewField label="Preferência de Local de Treino" value={formData.preferenciaLocalTreino} />
                        <ReviewField label="Material Disponível" value={formData.materialDisponivel} />
                        <ReviewField label="Nível de Conforto a Treinar Sozinho" value={formData.nivelConfortoSozinho} />
                        <ReviewField label="Tempo por Sessão" value={formData.tempoPorSessao} />
                        <ReviewField label="Experiência com Treino à Distância" value={formData.experienciaDistancia} />
                        <ReviewField label="Problemas com Treino à Distância" value={formData.experienciaProblemas} />
                      </div>
                    </div>

                    {/* Saúde */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-800 flex items-center">
                          <Heart className="mr-2 text-blue-600" size={18} />
                          Saúde
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 p-6">
                        <ReviewField label="Dores na coluna" value={formData.temDoresColuna === "sim" ? "Sim" : "Não"} />

                        {formData.temDoresColuna === "sim" && (
                          <ReviewField label="Zona da coluna" value={formData.zonaColuna} />
                        )}

                        <ReviewField label="Lesão" value={formData.temLesao === "sim" ? "Sim" : "Não"} />

                        {formData.temLesao === "sim" && (
                          <ReviewField label="Local da lesão" value={formData.localLesao} />
                        )}

                        <ReviewField label="Cirurgia recente" value={formData.cirurgiaRecente === "sim" ? "Sim" : "Não"} />

                        {formData.cirurgiaRecente === "sim" && (
                          <ReviewField label="Local da cirurgia" value={formData.localcirurgia} />
                        )}

                        <ReviewField label="Usa medicamento" value={formData.usaMedicamento === "sim" ? "Sim" : "Não"} />

                        {formData.usaMedicamento === "sim" && (
                          <ReviewField label="Medicamentos" value={formData.tiposmedicamentos} />
                        )}

                        <ReviewField label="Problema Cardíaco" value={formData.problemaCardiaco} />
                        <ReviewField label="Dor no Peito" value={formData.dorNoPeito} />
                        <ReviewField label="Já perdeu consciência?" value={formData.perdeuConsiencia} />
                        <ReviewField label="Problema Ósseo/Articular" value={formData.problemaOssos} />
                        <ReviewField label="Medicamento para Pressão" value={formData.medicamentoPressao} />
                      </div>
                    </div>

                    {/* Nutrição */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-800 flex items-center">
                          <Apple className="mr-2 text-blue-600" size={18} />
                          Nutrição
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 p-6">
                        <ReviewField label="Refeições por dia" value={formData.refeicoesPorDia} />
                        <ReviewField label="Água consumida (litros)" value={formData.aguaConsumida} />
                        <ReviewField label="Alimentos preferidos" value={formData.alimentosGosta} />
                        <ReviewField label="Alimentos que não gosta" value={formData.alimentosNaoGosta} />
                        <ReviewField label="Restrições alimentares" value={formData.restricaoAlimentar} specialDefault="Nenhuma" />
                        <ReviewField label="Dificuldades com Planos Alimentares" value={formData.dificuldadesPlanoAlimentar} />
                        <ReviewField label="Usa suplemento" value={formData.usaSuplemento === "sim" ? "Sim" : "Não"} />

                        {formData.usaSuplemento === "sim" && (
                          <ReviewField label="Suplementos" value={formData.qualSuplemento} />
                        )}
                      </div>
                    </div>

                    {/* Fotos */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-800 flex items-center">
                          <Camera className="mr-2 text-blue-600" size={18} />
                          Fotos
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 p-6">
                        <div>
                          <p className="text-sm font-medium text-gray-600 mb-1">Foto Frontal</p>
                          <div className={`px-3 py-2 rounded ${formData.fotoFrontal.length > 0 ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                            <p className="font-medium flex items-center">
                              {formData.fotoFrontal.length > 0 ? (
                                <><CheckCircle size={16} className="mr-2" /> Enviada</>
                              ) : (
                                <><AlertCircle size={16} className="mr-2" /> Não enviada</>
                              )}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-600 mb-1">Foto Lateral</p>
                          <div className={`px-3 py-2 rounded ${formData.fotoLateral.length > 0 ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                            <p className="font-medium flex items-center">
                              {formData.fotoLateral.length > 0 ? (
                                <><CheckCircle size={16} className="mr-2" /> Enviada</>
                              ) : (
                                <><AlertCircle size={16} className="mr-2" /> Não enviada</>
                              )}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-600 mb-1">Foto de Costas</p>
                          <div className={`px-3 py-2 rounded ${formData.fotoCostas.length > 0 ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                            <p className="font-medium flex items-center">
                              {formData.fotoCostas.length > 0 ? (
                                <><CheckCircle size={16} className="mr-2" /> Enviada</>
                              ) : (
                                <><AlertCircle size={16} className="mr-2" /> Não enviada</>
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Observações */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-800 flex items-center">
                          <MessageSquare className="mr-2 text-blue-600" size={18} />
                          Observações
                        </h3>
                      </div>
                      <div className="p-6">
                        <p className="text-sm font-medium text-gray-600 mb-2">Observações Adicionais</p>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-gray-700">{formData.observacoes || "Nenhuma observação adicional"}</p>
                        </div>
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
                  disabled={isLoading}
                  className={`flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isLoading ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer'
                    }`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Carregando...
                    </>
                  ) : (
                    <>
                      Próximo
                      <ChevronRight className="ml-1" size={16} />
                    </>
                  )}
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`flex items-center px-4 py-2 bg-green-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${isLoading ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer'
                    }`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Formulário
                      <CheckCircle className="ml-1" size={16} />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}