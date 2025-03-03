import React, { useState } from "react";

// Definição dos tipos de dados
type Genero = "masculino" | "feminino" | "outro";

interface DadosPessoais {
  nome: string;
  idade: number;
  genero: Genero;
  peso: number;
  altura: number;
  email: string;
  telefone: string;
}

interface HistoricoMedico {
  doencasCronicas: string[];
  alergias: string[];
  cirurgias: string[];
  medicamentosAtuais: string[];
  pressaoAlta: boolean;
  diabetes: boolean;
}

interface HistoricoEsportivo {
  esportesPraticados: string[];
  frequenciaSemanal: number;
  tempoTreino: number; // em minutos
  objetivos: string[];
  lesoesPrevias: string[];
  nivelCondicionamento: "iniciante" | "intermediario" | "avancado";
}

interface AnamneseData {
  dadosPessoais: DadosPessoais;
  historicoMedico: HistoricoMedico;
  historicoEsportivo: HistoricoEsportivo;
  observacoes: string;
}

// Componente principal
const AnamneseEsportiva: React.FC = () => {
  const [passo, setPasso] = useState<number>(1);
  const [dadosAnamnese, setDadosAnamnese] = useState<AnamneseData>({
    dadosPessoais: {
      nome: "",
      idade: 0,
      genero: "masculino",
      peso: 0,
      altura: 0,
      email: "",
      telefone: "",
    },
    historicoMedico: {
      doencasCronicas: [],
      alergias: [],
      cirurgias: [],
      medicamentosAtuais: [],
      pressaoAlta: false,
      diabetes: false,
    },
    historicoEsportivo: {
      esportesPraticados: [],
      frequenciaSemanal: 0,
      tempoTreino: 0,
      objetivos: [],
      lesoesPrevias: [],
      nivelCondicionamento: "iniciante",
    },
    observacoes: "",
  });

  // Manipuladores de eventos
  const handleDadosPessoaisChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const newValue = type === "number" ? parseFloat(value) : value;

    setDadosAnamnese({
      ...dadosAnamnese,
      dadosPessoais: {
        ...dadosAnamnese.dadosPessoais,
        [name]: newValue,
      },
    });
  };

  const handleHistoricoMedicoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      setDadosAnamnese({
        ...dadosAnamnese,
        historicoMedico: {
          ...dadosAnamnese.historicoMedico,
          [name]: checked,
        },
      });
    } else {
      setDadosAnamnese({
        ...dadosAnamnese,
        historicoMedico: {
          ...dadosAnamnese.historicoMedico,
          [name]: value,
        },
      });
    }
  };

  const handleArrayChange = (
    section: "historicoMedico" | "historicoEsportivo",
    field: string,
    value: string
  ) => {
    const currentArray = dadosAnamnese[section][
      field as keyof (typeof dadosAnamnese)[typeof section]
    ] as string[];

    if (!currentArray.includes(value) && value.trim() !== "") {
      setDadosAnamnese({
        ...dadosAnamnese,
        [section]: {
          ...dadosAnamnese[section],
          [field]: [...currentArray, value],
        },
      });
    }
  };

  const removeArrayItem = (
    section: "historicoMedico" | "historicoEsportivo",
    field: string,
    index: number
  ) => {
    const currentArray = dadosAnamnese[section][
      field as keyof (typeof dadosAnamnese)[typeof section]
    ] as string[];
    const newArray = [...currentArray];
    newArray.splice(index, 1);

    setDadosAnamnese({
      ...dadosAnamnese,
      [section]: {
        ...dadosAnamnese[section],
        [field]: newArray,
      },
    });
  };

  const handleHistoricoEsportivoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const newValue = type === "number" ? parseFloat(value) : value;

    setDadosAnamnese({
      ...dadosAnamnese,
      historicoEsportivo: {
        ...dadosAnamnese.historicoEsportivo,
        [name]: newValue,
      },
    });
  };

  const handleObservacoesChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDadosAnamnese({
      ...dadosAnamnese,
      observacoes: e.target.value,
    });
  };

  const avancarPasso = () => {
    setPasso(passo + 1);
  };

  const voltarPasso = () => {
    setPasso(passo - 1);
  };

  const submeterFormulario = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados da anamnese:", dadosAnamnese);
    alert("Anamnese enviada com sucesso!");
    // Aqui você pode adicionar a lógica para enviar os dados para um servidor
  };

  // Renderização dos passos do formulário
  const renderizarPasso = () => {
    switch (passo) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Dados Pessoais</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="nome"
                  value={dadosAnamnese.dadosPessoais.nome}
                  onChange={handleDadosPessoaisChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Idade
                </label>
                <input
                  type="number"
                  name="idade"
                  value={dadosAnamnese.dadosPessoais.idade}
                  onChange={handleDadosPessoaisChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Gênero
                </label>
                <select
                  name="genero"
                  value={dadosAnamnese.dadosPessoais.genero}
                  onChange={handleDadosPessoaisChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Peso (kg)
                </label>
                <input
                  type="number"
                  name="peso"
                  value={dadosAnamnese.dadosPessoais.peso}
                  onChange={handleDadosPessoaisChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  step="0.1"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Altura (cm)
                </label>
                <input
                  type="number"
                  name="altura"
                  value={dadosAnamnese.dadosPessoais.altura}
                  onChange={handleDadosPessoaisChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={dadosAnamnese.dadosPessoais.email}
                  onChange={handleDadosPessoaisChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={dadosAnamnese.dadosPessoais.telefone}
                  onChange={handleDadosPessoaisChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={avancarPasso}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Próximo
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">
              Histórico Médico
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Doenças Crônicas
                </label>
                <div className="flex mt-1">
                  <input
                    type="text"
                    id="doencaCronica"
                    className="block w-full rounded-l-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Adicionar doença crônica"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        const input = e.target as HTMLInputElement;
                        handleArrayChange(
                          "historicoMedico",
                          "doencasCronicas",
                          input.value
                        );
                        input.value = "";
                      }
                    }}
                  />
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={() => {
                      const input = document.getElementById(
                        "doencaCronica"
                      ) as HTMLInputElement;
                      handleArrayChange(
                        "historicoMedico",
                        "doencasCronicas",
                        input.value
                      );
                      input.value = "";
                    }}
                  >
                    Adicionar
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {dadosAnamnese.historicoMedico.doencasCronicas.map(
                    (doenca, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {doenca}
                        <button
                          type="button"
                          onClick={() =>
                            removeArrayItem(
                              "historicoMedico",
                              "doencasCronicas",
                              index
                            )
                          }
                          className="ml-1 text-blue-500 hover:text-blue-700"
                        >
                          &times;
                        </button>
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Alergias
                </label>
                <div className="flex mt-1">
                  <input
                    type="text"
                    id="alergia"
                    className="block w-full rounded-l-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Adicionar alergia"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        const input = e.target as HTMLInputElement;
                        handleArrayChange(
                          "historicoMedico",
                          "alergias",
                          input.value
                        );
                        input.value = "";
                      }
                    }}
                  />
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={() => {
                      const input = document.getElementById(
                        "alergia"
                      ) as HTMLInputElement;
                      handleArrayChange(
                        "historicoMedico",
                        "alergias",
                        input.value
                      );
                      input.value = "";
                    }}
                  >
                    Adicionar
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {dadosAnamnese.historicoMedico.alergias.map(
                    (alergia, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {alergia}
                        <button
                          type="button"
                          onClick={() =>
                            removeArrayItem(
                              "historicoMedico",
                              "alergias",
                              index
                            )
                          }
                          className="ml-1 text-blue-500 hover:text-blue-700"
                        >
                          &times;
                        </button>
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Cirurgias Prévias
                </label>
                <div className="flex mt-1">
                  <input
                    type="text"
                    id="cirurgia"
                    className="block w-full rounded-l-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Adicionar cirurgia"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        const input = e.target as HTMLInputElement;
                        handleArrayChange(
                          "historicoMedico",
                          "cirurgias",
                          input.value
                        );
                        input.value = "";
                      }
                    }}
                  />
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={() => {
                      const input = document.getElementById(
                        "cirurgia"
                      ) as HTMLInputElement;
                      handleArrayChange(
                        "historicoMedico",
                        "cirurgias",
                        input.value
                      );
                      input.value = "";
                    }}
                  >
                    Adicionar
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {dadosAnamnese.historicoMedico.cirurgias.map(
                    (cirurgia, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {cirurgia}
                        <button
                          type="button"
                          onClick={() =>
                            removeArrayItem(
                              "historicoMedico",
                              "cirurgias",
                              index
                            )
                          }
                          className="ml-1 text-blue-500 hover:text-blue-700"
                        >
                          &times;
                        </button>
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Medicamentos Atuais
                </label>
                <div className="flex mt-1">
                  <input
                    type="text"
                    id="medicamento"
                    className="block w-full rounded-l-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Adicionar medicamento"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        const input = e.target as HTMLInputElement;
                        handleArrayChange(
                          "historicoMedico",
                          "medicamentosAtuais",
                          input.value
                        );
                        input.value = "";
                      }
                    }}
                  />
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={() => {
                      const input = document.getElementById(
                        "medicamento"
                      ) as HTMLInputElement;
                      handleArrayChange(
                        "historicoMedico",
                        "medicamentosAtuais",
                        input.value
                      );
                      input.value = "";
                    }}
                  >
                    Adicionar
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {dadosAnamnese.historicoMedico.medicamentosAtuais.map(
                    (medicamento, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {medicamento}
                        <button
                          type="button"
                          onClick={() =>
                            removeArrayItem(
                              "historicoMedico",
                              "medicamentosAtuais",
                              index
                            )
                          }
                          className="ml-1 text-blue-500 hover:text-blue-700"
                        >
                          &times;
                        </button>
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input
                    id="pressaoAlta"
                    name="pressaoAlta"
                    type="checkbox"
                    checked={dadosAnamnese.historicoMedico.pressaoAlta}
                    onChange={handleHistoricoMedicoChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="pressaoAlta"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Pressão Alta
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="diabetes"
                    name="diabetes"
                    type="checkbox"
                    checked={dadosAnamnese.historicoMedico.diabetes}
                    onChange={handleHistoricoMedicoChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="diabetes"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Diabetes
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={voltarPasso}
                className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Voltar
              </button>
              <button
                type="button"
                onClick={avancarPasso}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Próximo
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">
              Histórico Esportivo
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Esportes Praticados
                </label>
                <div className="flex mt-1">
                  <input
                    type="text"
                    id="esporte"
                    className="block w-full rounded-l-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Adicionar esporte"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        const input = e.target as HTMLInputElement;
                        handleArrayChange(
                          "historicoEsportivo",
                          "esportesPraticados",
                          input.value
                        );
                        input.value = "";
                      }
                    }}
                  />
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={() => {
                      const input = document.getElementById(
                        "esporte"
                      ) as HTMLInputElement;
                      handleArrayChange(
                        "historicoEsportivo",
                        "esportesPraticados",
                        input.value
                      );
                      input.value = "";
                    }}
                  >
                    Adicionar
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {dadosAnamnese.historicoEsportivo.esportesPraticados.map(
                    (esporte, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                      >
                        {esporte}
                        <button
                          type="button"
                          onClick={() =>
                            removeArrayItem(
                              "historicoEsportivo",
                              "esportesPraticados",
                              index
                            )
                          }
                          className="ml-1 text-green-500 hover:text-green-700"
                        >
                          &times;
                        </button>
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Frequência Semanal (dias)
                  </label>
                  <input
                    type="number"
                    name="frequenciaSemanal"
                    value={dadosAnamnese.historicoEsportivo.frequenciaSemanal}
                    onChange={handleHistoricoEsportivoChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    min="0"
                    max="7"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Tempo de Treino (minutos/dia)
                  </label>
                  <input
                    type="number"
                    name="tempoTreino"
                    value={dadosAnamnese.historicoEsportivo.tempoTreino}
                    onChange={handleHistoricoEsportivoChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    min="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Objetivos
                </label>
                <div className="flex mt-1">
                  <input
                    type="text"
                    id="objetivo"
                    className="block w-full rounded-l-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Adicionar objetivo"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        const input = e.target as HTMLInputElement;
                        handleArrayChange(
                          "historicoEsportivo",
                          "objetivos",
                          input.value
                        );
                        input.value = "";
                      }
                    }}
                  />
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={() => {
                      const input = document.getElementById(
                        "objetivo"
                      ) as HTMLInputElement;
                      handleArrayChange(
                        "historicoEsportivo",
                        "objetivos",
                        input.value
                      );
                      input.value = "";
                    }}
                  >
                    Adicionar
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {dadosAnamnese.historicoEsportivo.objetivos.map(
                    (objetivo, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                      >
                        {objetivo}
                        <button
                          type="button"
                          onClick={() =>
                            removeArrayItem(
                              "historicoEsportivo",
                              "objetivos",
                              index
                            )
                          }
                          className="ml-1 text-green-500 hover:text-green-700"
                        >
                          &times;
                        </button>
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Lesões Prévias
                </label>
                <div className="flex mt-1">
                  <input
                    type="text"
                    id="lesao"
                    className="block w-full rounded-l-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Adicionar lesão"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        const input = e.target as HTMLInputElement;
                        handleArrayChange(
                          "historicoEsportivo",
                          "lesoesPrevias",
                          input.value
                        );
                        input.value = "";
                      }
                    }}
                  />
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={() => {
                      const input = document.getElementById(
                        "lesao"
                      ) as HTMLInputElement;
                      handleArrayChange(
                        "historicoEsportivo",
                        "lesoesPrevias",
                        input.value
                      );
                      input.value = "";
                    }}
                  >
                    Adicionar
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {dadosAnamnese.historicoEsportivo.lesoesPrevias.map(
                    (lesao, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"
                      >
                        {lesao}
                        <button
                          type="button"
                          onClick={() =>
                            removeArrayItem(
                              "historicoEsportivo",
                              "lesoesPrevias",
                              index
                            )
                          }
                          className="ml-1 text-red-500 hover:text-red-700"
                        >
                          &times;
                        </button>
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nível de Condicionamento
                </label>
                <select
                  name="nivelCondicionamento"
                  value={dadosAnamnese.historicoEsportivo.nivelCondicionamento}
                  onChange={handleHistoricoEsportivoChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="iniciante">Iniciante</option>
                  <option value="intermediario">Intermediário</option>
                  <option value="avancado">Avançado</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={voltarPasso}
                className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Voltar
              </button>
              <button
                type="button"
                onClick={avancarPasso}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Próximo
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">
              Observações Adicionais
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Observações
              </label>
              <textarea
                name="observacoes"
                value={dadosAnamnese.observacoes}
                onChange={handleObservacoesChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Adicione quaisquer observações relevantes sobre o paciente..."
              ></textarea>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={voltarPasso}
                className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Voltar
              </button>
              <button
                type="submit"
                onClick={submeterFormulario}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Finalizar Anamnese
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Componente de progresso
  const BarraDeProgresso = () => {
    return (
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <div className="flex flex-col items-center">
            <div
              className={`rounded-full h-8 w-8 flex items-center justify-center ${
                passo >= 1 ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              1
            </div>
            <span className="text-xs mt-1">Dados Pessoais</span>
          </div>
          <div className="flex flex-col items-center">
            <div
              className={`rounded-full h-8 w-8 flex items-center justify-center ${
                passo >= 2 ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              2
            </div>
            <span className="text-xs mt-1">Histórico Médico</span>
          </div>
          <div className="flex flex-col items-center">
            <div
              className={`rounded-full h-8 w-8 flex items-center justify-center ${
                passo >= 3 ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              3
            </div>
            <span className="text-xs mt-1">Histórico Esportivo</span>
          </div>
          <div className="flex flex-col items-center">
            <div
              className={`rounded-full h-8 w-8 flex items-center justify-center ${
                passo >= 4 ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              4
            </div>
            <span className="text-xs mt-1">Observações</span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <div
            style={{ width: `${(passo / 4) * 100}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Anamnese Esportiva
      </h1>

      <BarraDeProgresso />

      <form onSubmit={submeterFormulario}>{renderizarPasso()}</form>

      {/* Resumo dos dados (opcional, pode ser mostrado na etapa final) */}
      {passo === 4 && (
        <div className="mt-8 border-t pt-6">
          <h3 className="text-lg font-medium text-gray-900">
            Resumo dos Dados
          </h3>
          <div className="mt-4 bg-gray-50 p-4 rounded-md">
            <h4 className="text-sm font-medium text-gray-700">
              Dados Pessoais
            </h4>
            <p className="mt-1 text-sm text-gray-500">
              {dadosAnamnese.dadosPessoais.nome},{" "}
              {dadosAnamnese.dadosPessoais.idade} anos,{" "}
              {dadosAnamnese.dadosPessoais.peso}kg,{" "}
              {dadosAnamnese.dadosPessoais.altura}cm
            </p>

            <h4 className="mt-4 text-sm font-medium text-gray-700">
              Histórico Médico
            </h4>
            <p className="mt-1 text-sm text-gray-500">
              Doenças Crônicas:{" "}
              {dadosAnamnese.historicoMedico.doencasCronicas.length > 0
                ? dadosAnamnese.historicoMedico.doencasCronicas.join(", ")
                : "Nenhuma"}
              <br />
              Alergias:{" "}
              {dadosAnamnese.historicoMedico.alergias.length > 0
                ? dadosAnamnese.historicoMedico.alergias.join(", ")
                : "Nenhuma"}
              <br />
              Pressão Alta:{" "}
              {dadosAnamnese.historicoMedico.pressaoAlta ? "Sim" : "Não"},
              Diabetes: {dadosAnamnese.historicoMedico.diabetes ? "Sim" : "Não"}
            </p>

            <h4 className="mt-4 text-sm font-medium text-gray-700">
              Histórico Esportivo
            </h4>
            <p className="mt-1 text-sm text-gray-500">
              Esportes:{" "}
              {dadosAnamnese.historicoEsportivo.esportesPraticados.length > 0
                ? dadosAnamnese.historicoEsportivo.esportesPraticados.join(", ")
                : "Nenhum"}
              <br />
              Frequência: {
                dadosAnamnese.historicoEsportivo.frequenciaSemanal
              }{" "}
              dias/semana, {dadosAnamnese.historicoEsportivo.tempoTreino}{" "}
              min/dia
              <br />
              Nível: {dadosAnamnese.historicoEsportivo.nivelCondicionamento}
              <br />
              Lesões prévias:{" "}
              {dadosAnamnese.historicoEsportivo.lesoesPrevias.length > 0
                ? dadosAnamnese.historicoEsportivo.lesoesPrevias.join(", ")
                : "Nenhuma"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// Componente de App para envolver o formulário
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <AnamneseEsportiva />
    </div>
  );
};

export default App;
