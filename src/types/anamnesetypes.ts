import { ChangeEvent } from "react";

export type AnamneseFormData = {
  personalInfo: {
    nome: string;
    email: string;
    genero: string;
    dataNascimento: string;
    contactInfo: {
      localidade: string;
      countryCode: string;
      telemovel: string;
    };
    physicalInfo: {
      altura: number;
      pesoJejum: string;
    };
    profissao: string;
  };

  exerciseInfo: {
    currentActivity: {
      praticaExercicio: string;
      vezesPorSemana: number;
    };
    pastExperience: {
      praticouModalidade: string;
      modalidadeDesportiva: string;
      experienciaDistancia: string;
    };
    preferences: {
      tempoPorSessao: string;
      preferenciaLocalTreino: string;
      materialDisponivel: string;
      nivelConfortoSozinho: string;
    };
    goals: {
      objetivoExercicio: string;
      experienciaProblemas: string;
    };
  };

  healthInfo: {
    spine: {
      temDoresColuna: string;
      zonaColuna: string;
    };
    injuries: {
      temLesao: string;
      localLesao: string;
    };
    surgeries: {
      cirurgiaRecente: string;
      localcirurgia: string;
    };
    conditions: {
      problemaCardiaco: string;
      dorNoPeito: string;
      perdeuConsiencia: string;
      problemaOssos: string;
      medicamentoPressao: string;
    };
    limitations: {
      impedimentoExercicio: string;
      tipoImpedimento: string;
    };
  };

  medicationInfo: {
    usaMedicamento: string;
    tiposmedicamentos: string;
  };

  nutritionInfo: {
    meals: {
      refeicoesPorDia: number;
      details: {
        primeira: string;
        segunda: string;
        terceira: string;
        quarta: string;
        quinta: string;
        sexta: string;
        setima: string;
        oitava: string;
      };
    };
    preferences: {
      alimentosGosta: string;
      alimentosNaoGosta: string;
    };
    restrictions: {
      restricaoAlimentar: string;
      restricoesAlimentares: string[];
    };
    habits: {
      aguaConsumida: string;
      dificuldadesPlanoAlimentar: string;
    };
    supplements: {
      usaSuplemento: string;
      qualSuplemento: string;
    };
  };

  coachingInfo: {
    acompanhamentoDistancia: string;
    motivoAcompanhamento: string;
  };

  photos: {
    fotoFrontal: File[];
    fotoLateral: File[];
    fotoCostas: File[];
  };

  observacoes: string;
};

export type RadioButtonProps = {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export interface CountryOption {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}
