import { ChangeEvent } from "react";

export type AnamneseFormData = {
  nome: string;
  email: string;
  genero: string;
  altura: number;
  dataNascimento: string;
  localidade: string;
  countryCode: string;
  profissao: string;
  telemovel: string;
  praticouModalidade: string;
  modalidadeDesportiva: string;
  experienciaDistancia: string;
  tempoPorSessao: string;
  preferenciaLocalTreino: string;
  experienciaProblemas: string;
  materialDisponivel: string[];
  nivelConfortoSozinho: string;
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
  tiposmedicamentos: string;
  dorNoPeito: string;
  perdeuConsiencia: string;
  problemaOssos: string;
  medicamentoPressao: string;
  impedimentoExercicio: string;
  tipoImpedimento: string;
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
  alimentosNaoGosta: string;
  restricaoAlimentar: string;
  restricoesAlimentares: string[];
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
