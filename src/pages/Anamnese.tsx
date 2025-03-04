import React, { useState, useRef } from "react";
import { AnamneseFormData } from "../types/anamnesetypes";
import { AiOutlineClose } from "react-icons/ai";

const Anamnese: React.FC = () => {
  const [formData, setFormData] = useState<AnamneseFormData>({
    nome: "",
    email: "",
    localidade: "",
    profissao: "",
    telemovel: "",
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
  const fotoFrontalRef = useRef<HTMLDivElement>(null);
  const fotoLateralRef = useRef<HTMLDivElement>(null);
  const fotoCostasRef = useRef<HTMLDivElement>(null);

  const [selectedFiles, setSelectedFiles] = useState<{
    [key: string]: File[];
  }>({
    fotoFrontal: [],
    fotoLateral: [],
    fotoCostas: [],
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    if (files && files.length > 0) {
      setSelectedFiles((prev) => ({
        ...prev,
        [name]: [...(prev[name] || []), ...Array.from(files)], 
      }));
    }
  };;

  const handleUpload = async () => {
    const formData = new FormData();
  
    Object.entries(selectedFiles).forEach(([key, files]) => {
      files.forEach((file) => formData.append(`${key}[]`, file)); 
    });
  
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
  
    console.log("Complete selected files:", selectedFiles);
  };
  
  

  const handleDelete = (category: string, index: number) => {
    setSelectedFiles((prev) => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== index),
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleUpload();
    console.log("Form submitted with:", formData);
  };

  const renderUploadBox = (name: string, label: string, refObj: any) => (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <div
        ref={refObj}
        onClick={() => refObj.current?.querySelector("input")?.click()}
        className="flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-300 p-6 rounded-md cursor-pointer hover:border-indigo-500 transition"
      >
        <input
          type="file"
          name={name}
          multiple
          onChange={handleFileChange}
          id={name}
          className="hidden"
          accept="image/*"
        />
        {selectedFiles[name].length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {selectedFiles[name].map((file, index) => (
              <div key={index} className="relative group">
                <img
                  src={URL.createObjectURL(file)}
                  alt={label}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <button
                  className="absolute top-1 right-1 bg-red-500 text-white text-xs p-1 rounded-full opacity-75 group-hover:opacity-100 transition cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(name, index);
                  }}
                >
                  <AiOutlineClose className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <span className="text-center text-gray-600">
            Clique para selecionar fotos
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Anamnese Desportiva e Alimentar
      </h2>

      <form onSubmit={handleSubmit}>
        {/* ANAMNESE DESPORTIVA */}
        <div className="space-y-4">
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-700"
            >
              Nome
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="localidade"
              className="block text-sm font-medium text-gray-700"
            >
              Localidade
            </label>
            <input
              type="text"
              name="localidade"
              value={formData.localidade}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="profissao"
              className="block text-sm font-medium text-gray-700"
            >
              Profissão
            </label>
            <input
              type="text"
              name="profissao"
              value={formData.profissao}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="telemovel"
              className="block text-sm font-medium text-gray-700"
            >
              Telemóvel
            </label>
            <input
              type="text"
              name="telemovel"
              value={formData.telemovel}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="objetivoExercicio"
              className="block text-sm font-medium text-gray-700"
            >
              Objetivo do exercício físico
            </label>
            <select
              name="objetivoExercicio"
              value={formData.objetivoExercicio}
              onChange={handleSelectChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
            >
              <option value="Aumento de massa muscular">
                Aumento de massa muscular
              </option>
              <option value="Melhora da capacidade aeróbia">
                Melhora da capacidade aeróbia
              </option>
              <option value="Saúde / Qualidade de vida">
                Saúde / Qualidade de vida
              </option>
              <option value="Fortalecimento Muscular">
                Fortalecimento Muscular
              </option>
              <option value="Condicionamento Físico em geral">
                Condicionamento Físico em geral
              </option>
              <option value="Perda de peso">Perda de peso</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="praticaExercicio"
              className="block text-sm font-medium text-gray-700"
            >
              Pratica exercício físico regularmente
            </label>
            <select
              name="praticaExercicio"
              value={formData.praticaExercicio}
              onChange={handleSelectChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
            >
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </select>
          </div>

          {/* Conditionally render the "vezesPorSemana" input based on the value of "praticaExercicio" */}
          {formData.praticaExercicio === "sim" && (
            <div>
              <label
                htmlFor="vezesPorSemana"
                className="block text-sm font-medium text-gray-700"
              >
                Quantas vezes por semana
              </label>
              <input
                type="number"
                name="vezesPorSemana"
                value={formData.vezesPorSemana}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="temDoresColuna"
              className="block text-sm font-medium text-gray-700"
            >
              Tem dores na coluna?
            </label>
            <select
              name="temDoresColuna"
              value={formData.temDoresColuna}
              onChange={handleSelectChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
            >
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </select>
          </div>
          {formData.temDoresColuna === "sim" && (
            <div>
              <label
                htmlFor="zonaColuna"
                className="block text-sm font-medium text-gray-700"
              >
                Em que zona?
              </label>
              <select
                name="zonaColuna"
                value="{formData.zonaColuna}"
                onChange={handleSelectChange}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
              >
                <option value="Lombar">Lombar</option>
                <option value="Dorsal">Dorsal</option>
                <option value="Cervical">Cervical</option>
              </select>
            </div>
          )}
          <div>
            <label
              htmlFor="temLesao"
              className="block text-sm font-medium text-gray-700"
            >
              Tem alguma lesão?
            </label>
            <select
              name="temLesao"
              value={formData.temLesao}
              onChange={handleSelectChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
            >
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </select>
          </div>
          {formData.temLesao === "sim" && (
            <div>
              <label
                htmlFor="localLesao"
                className="block text-sm font-medium text-gray-700"
              >
                Onde está a lesão?
              </label>
              <input
                type="text"
                name="localLesao"
                value={formData.localLesao}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}
          <div>
            <label
              htmlFor="cirurgiaRecente"
              className="block text-sm font-medium text-gray-700"
            >
              Teve alguma cirurgia recente?
            </label>
            <select
              name="cirurgiaRecente"
              value={formData.cirurgiaRecente}
              onChange={handleSelectChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
            >
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </select>
          </div>
          {formData.cirurgiaRecente === "sim" && (
            <div>
              <label
                htmlFor="localLesao"
                className="block text-sm font-medium text-gray-700"
              >
                Onde foi a intervenção circúrgica?
              </label>
              <input
                type="text"
                name="localcirurgia"
                value={formData.localcirurgia}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}
          <div>
            <label
              htmlFor="usaMedicamento"
              className="block text-sm font-medium text-gray-700"
            >
              Usa algum medicamento regularmente?
            </label>
            <select
              name="usaMedicamento"
              value={formData.usaMedicamento}
              onChange={handleSelectChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
            >
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </select>
          </div>
          {formData.usaMedicamento === "sim" && (
            <div>
              <label
                htmlFor="medicamento"
                className="block text-sm font-medium text-gray-700"
              >
                Que medicamento(s)?
              </label>
              <input
                type="text"
                name="tiposmedicamentos"
                value={formData.tiposmedicamentos}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}
          <div>
            <label
              htmlFor="problemaCardiaco"
              className="block text-sm font-medium text-gray-700"
            >
              Algum médico já disse que você possui um problema cardíaco e
              recomendou exercícios físicos apenas sob supervisão médica?
            </label>
            <select
              name="problemaCardiaco"
              value={formData.problemaCardiaco}
              onChange={handleSelectChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
            >
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="dorNoPeito"
              className="block text-sm font-medium text-gray-700"
            >
              Sente dor no peito?
            </label>
            <select
              name="dorNoPeito"
              value={formData.dorNoPeito}
              onChange={handleSelectChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
            >
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="perdeuConsiencia"
              className="block text-sm font-medium text-gray-700"
            >
              Você já perdeu a consciência em alguma ocasião ou sofreu alguma
              queda em virtude de tonturas?
            </label>
            <select
              name="perdeuConsiencia"
              value={formData.perdeuConsiencia}
              onChange={handleSelectChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
            >
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="problemaOssos"
              className="block text-sm font-medium text-gray-700"
            >
              Você tem algum problmea ósseo ou articular que pode agravar-se com
              a prática de exercício físico?
            </label>
            <select
              name="problemaOssos"
              value={formData.problemaOssos}
              onChange={handleSelectChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
            >
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="medicamentoPressao"
              className="block text-sm font-medium text-gray-700"
            >
              Algum médico já lhe prescreveu medicamento para a pressão arterial
              ou para o coração?
            </label>
            <select
              name="medicamentoPressao"
              value={formData.medicamentoPressao}
              onChange={handleSelectChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
            >
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="impedimentoExercicio"
              className="block text-sm font-medium text-gray-700"
            >
              Você tem conhecimento, por informação médica ou pela própria
              experiência de algum motivo que pode IMPEDIR de participar de
              exercícios físicos sem supervisão médica?
            </label>
            <select
              name="impedimentoExercicio"
              value={formData.impedimentoExercicio}
              onChange={handleSelectChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
            >
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="observacoes"
              className="block text-sm font-medium text-gray-700"
            >
              Observações adicionais
            </label>
            <textarea
              name="observacoes"
              value={formData.observacoes}
              onChange={handleInputChange}
              rows={4}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="refeicoesPorDia"
              className="block text-sm font-medium text-gray-700"
            >
              Quantas refeições realiza por dia?
            </label>
            <select
              name="refeicoesPorDia"
              value={formData.refeicoesPorDia}
              onChange={handleSelectChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          {formData.refeicoesPorDia >= 1 && (
            <div>
              <label
                htmlFor="alimentosPrimeiraRefeicao"
                className="block text-sm font-medium text-gray-700"
              >
                Quais os alimentos que ingere na sua primeira refeição do dia?
              </label>
              <textarea
                name="alimentosPrimeiraRefeicao"
                value={formData.alimentosPrimeiraRefeicao}
                onChange={handleInputChange}
                rows={2}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}

          {formData.refeicoesPorDia >= 2 && (
            <div>
              <label
                htmlFor="alimentosSegundaRefeicao"
                className="block text-sm font-medium text-gray-700"
              >
                Quais os alimentos que ingere na sua segunda refeição do dia?
              </label>
              <textarea
                name="alimentosSegundaRefeicao"
                value={formData.alimentosSegundaRefeicao}
                onChange={handleInputChange}
                rows={2}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}

          {formData.refeicoesPorDia >= 3 && (
            <div>
              <label
                htmlFor="alimentosTerceiraRefeicao"
                className="block text-sm font-medium text-gray-700"
              >
                Quais os alimentos que ingere na sua terceira refeição do dia?
              </label>
              <textarea
                name="alimentosTerceiraRefeicao"
                value={formData.alimentosTerceiraRefeicao}
                onChange={handleInputChange}
                rows={2}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}

          {formData.refeicoesPorDia >= 4 && (
            <div>
              <label
                htmlFor="alimentosQuartaRefeicao"
                className="block text-sm font-medium text-gray-700"
              >
                Quais os alimentos que ingere na sua quarta refeição do dia?
              </label>
              <textarea
                name="alimentosQuartaRefeicao"
                value={formData.alimentosQuartaRefeicao}
                onChange={handleInputChange}
                rows={2}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}

          {formData.refeicoesPorDia >= 5 && (
            <div>
              <label
                htmlFor="alimentosQuintaRefeicao"
                className="block text-sm font-medium text-gray-700"
              >
                Quais os alimentos que ingere na sua quinta refeição do dia?
              </label>
              <textarea
                name="alimentosQuintaRefeicao"
                value={formData.alimentosQuintaRefeicao}
                onChange={handleInputChange}
                rows={2}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}

          {formData.refeicoesPorDia >= 6 && (
            <div>
              <label
                htmlFor="alimentosSextaRefeicao"
                className="block text-sm font-medium text-gray-700"
              >
                Quais os alimentos que ingere na sua sexta refeição do dia?
              </label>
              <textarea
                name="alimentosSextaRefeicao"
                value={formData.alimentosSextaRefeicao}
                onChange={handleInputChange}
                rows={2}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}
          {formData.refeicoesPorDia >= 7 && (
            <div>
              <label
                htmlFor="alimentosSetimaRefeicao"
                className="block text-sm font-medium text-gray-700"
              >
                Quais os alimentos que ingere na sua sétima refeição do dia?
              </label>
              <textarea
                name="alimentosSetimaRefeicao"
                value={formData.alimentosSetimaRefeicao}
                onChange={handleInputChange}
                rows={2}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}
          {formData.refeicoesPorDia >= 8 && (
            <div>
              <label
                htmlFor="alimentosOitavaRefeicao"
                className="block text-sm font-medium text-gray-700"
              >
                Quais os alimentos que ingere na sua oitava refeição do dia?
              </label>
              <textarea
                name="alimentosOitavaRefeicao"
                value={formData.alimentosOitavaRefeicao}
                onChange={handleInputChange}
                rows={2}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}
          <div>
            <label
              htmlFor="alimentosGosta"
              className="block text-sm font-medium text-gray-700"
            >
              Que tipo de alimentos gostavas de ter nas tuas refeições?
            </label>
            <textarea
              name="alimentosGosta"
              value={formData.alimentosGosta}
              onChange={handleInputChange}
              rows={2}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="restricaoAlimentar"
              className="block text-sm font-medium text-gray-700"
            >
              Tens alguma restrição alimentar?
            </label>
            <textarea
              name="restricaoAlimentar"
              value={formData.restricaoAlimentar}
              onChange={handleInputChange}
              rows={2}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="dificuldadesPlanoAlimentar"
              className="block text-sm font-medium text-gray-700"
            >
              Quais são as principais dificuldades que encontras para seguir um
              plano alimentar?
            </label>
            <textarea
              name="dificuldadesPlanoAlimentar"
              value={formData.dificuldadesPlanoAlimentar}
              onChange={handleInputChange}
              rows={2}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="aguaConsumida"
              className="block text-sm font-medium text-gray-700"
            >
              Quanta água beber por dia? (0.5 a 1L, 1L a 2L, 2L a 3L, +3L)
            </label>
            <select
              name="aguaConsumida"
              value={formData.aguaConsumida}
              onChange={handleSelectChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
            >
              <option value="0.5 a 1L">0.5 a 1L</option>
              <option value="1L a 2L">1L a 2L</option>
              <option value="2L a 3L">2L a 3L</option>
              <option value="+3L">+3L</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="usaSuplemento"
              className="block text-sm font-medium text-gray-700"
            >
              Usas algum tipo de suplemento?
            </label>
            <select
              name="usaSuplemento"
              value={formData.usaSuplemento}
              onChange={handleSelectChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
            >
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </select>
          </div>

          {/* Conditionally render the "qual suplemento" field if the user selects "sim" */}
          {formData.usaSuplemento === "sim" && (
            <div>
              <label
                htmlFor="qualSuplemento"
                className="block text-sm font-medium text-gray-700"
              >
                Que tipo de suplemento usas?
              </label>
              <input
                type="text"
                name="qualSuplemento"
                value={formData.qualSuplemento}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="acompanhamentoDistancia"
              className="block text-sm font-medium text-gray-700"
            >
              Já estiveste algum acompanhamento à distância? (sim/não)
            </label>
            <select
              name="acompanhamentoDistancia"
              value={formData.acompanhamentoDistancia}
              onChange={handleSelectChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
            >
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </select>
          </div>

          {/* Conditionally render the "o que correu mal" field if the user selects "sim" */}
          {formData.acompanhamentoDistancia === "sim" && (
            <div>
              <label
                htmlFor="oQueCorreuMal"
                className="block text-sm font-medium text-gray-700"
              >
                Se sim, o que na tua opinião correu mal?
              </label>
              <textarea
                name="oQueCorreuMal"
                value={formData.motivoAcompanhamento}
                onChange={handleInputChange}
                rows={2}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="pesoJejum"
              className="block text-sm font-medium text-gray-700"
            >
              Peso em jejum
            </label>
            <input
              type="number"
              name="pesoJejum"
              value={formData.pesoJejum}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            {renderUploadBox("fotoFrontal", "Foto Frontal", fotoFrontalRef)}
            {renderUploadBox("fotoLateral", "Foto Lateral", fotoLateralRef)}
            {renderUploadBox("fotoCostas", "Foto de Costas", fotoCostasRef)}
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-auto py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Anamnese;
