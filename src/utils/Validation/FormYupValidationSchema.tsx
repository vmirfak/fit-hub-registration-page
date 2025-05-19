import * as yup from 'yup';

export const FormYupValidationSchema = yup.object().shape({
    nome: yup
        .string()
        .trim()
        .min(3, 'Nome deve ter pelo menos 3 caracteres')
        .max(100, 'Nome não pode exceder 100 caracteres')
        .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/, 'Nome deve conter apenas letras, espaços, hífens e apóstrofos')
        .required('Nome completo é obrigatório'),

    email: yup
        .string()
        .trim()
        .email('Email introduzido é inválido')
        .matches(
            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
            'Email deve conter um domínio válido, como ".com", ".pt", etc.'
        )
        .lowercase()
        .max(255, 'Email não pode exceder 255 caracteres')
        .required('Email é obrigatório'),

    localidade: yup
        .string()
        .trim()
        .min(2, 'Localidade deve ter pelo menos 2 caracteres')
        .max(100, 'Localidade não pode exceder 100 caracteres')
        .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/, 'Localidade deve conter apenas letras, espaços, hífens e apóstrofos')
        .required('Localidade é obrigatória'),

    genero: yup
        .string()
        .oneOf(['masculino', 'feminino'], 'Sexo deve ser selecionado')
        .required('Sexo é obrigatório'),

    profissao: yup
        .string()
        .trim()
        .min(2, 'Profissão deve ter pelo menos 2 caracteres')
        .max(100, 'Profissão não pode exceder 100 caracteres')
        .required('Profissão é obrigatória'),

    countryCode: yup
        .string()
        .trim()
        .matches(/^\+\d{1,4}$/, 'Código do país deve começar com + seguido de 1 a 4 dígitos')
        .required('Código do país é obrigatório'),

    telemovel: yup
        .string()
        .trim()
        .required('Telemóvel é obrigatório')
        .test('phone-validation', 'Telemóvel inválido', function (value) {
            if (!value) return false;
            const cleanValue = value.replace(/[\s\-()]/g, '');
            if (this.parent.countryCode === '+351') {
                return cleanValue.length === 9 && /^9\d{8}$|^2\d{8}$|^3\d{8}$/.test(cleanValue);
            }
            if (this.parent.countryCode === '+55') {
                return cleanValue.length === 11 && /^[1-9]{2}9\d{8}$/.test(cleanValue);
            }
            return /^\d{6,15}$/.test(cleanValue);
        }),

    pesoJejum: yup
        .string()
        .trim()
        .required('Peso em jejum é obrigatório')
        .matches(/^\d+([.,]\d+)?$/, 'Peso deve conter apenas números (e vírgula ou ponto)')
        .test('is-valid-weight', 'Peso deve ser um número entre 30 e 300 kg', value => {
            if (!value) return false;
            const numValue = parseFloat(value.replace(',', '.'));
            return numValue >= 30 && numValue <= 300;
        }),

    altura: yup
        .string()
        .trim()
        .required('Altura é obrigatória')
        .test('is-valid-height', 'Altura deve ser um número entre 100 e 250 cm', value => {
            if (!value) return false;
            const numValue = parseFloat(value.replace(',', '.'));
            return !isNaN(numValue) && numValue >= 100 && numValue <= 250;
        }),

    dataNascimento: yup
        .date()
        .transform((_value, originalValue) => {
            // Convert from string (e.g. "1994-11-26") to Date object
            return originalValue ? new Date(originalValue) : null;
        })
        .typeError('Data de nascimento inválida') // fallback if still not parsable
        .required('Data de nascimento é obrigatória')
        .max(new Date(), 'Data de nascimento não pode ser no futuro')
        .min(
            new Date(new Date().setFullYear(new Date().getFullYear() - 100)),
            'Idade máxima é 100 anos'
        )
        .test('is-adult', 'Você deve ter pelo menos 18 anos', value => {
            if (!value) return true;
            const today = new Date();
            const birthDate = new Date(value);
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();

            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            return age >= 18;
        })
    ,
    objetivoExercicio: yup
        .string()
        .trim()
        .min(5, 'Por favor, forneça detalhes do seu objetivo')
        .max(500, 'Objetivo não pode exceder 500 caracteres')
        .required('Por favor, descreve qual é o teu objetivo com o exercício físico.'),

    praticouModalidade: yup
        .string()
        .required('Por favor, seleciona uma opção')
        .oneOf(['sim', 'não'], 'Seleciona uma opção'),

    modalidadeDesportiva: yup
        .string()
        .when('praticouModalidade', (praticouModalidade, schema) =>
            (Array.isArray(praticouModalidade) ? praticouModalidade[0] : praticouModalidade) === 'sim'
                ? schema
                    .trim()
                    .required('Por favor, indique quais modalidades praticou')
                    .min(3, 'Deves descrever pelo menos 3 caracteres acerca da(s) modalidade(s) que praticaste.')
                : schema.notRequired()
        ),
    experienciaDistancia: yup
        .string()
        .required('Por favor, selecione uma opção')
        .oneOf(['sim', 'não'], 'Por favor, selecione uma opção'),

    experienciaProblemas: yup
        .string()
        .when('experienciaDistancia', (experienciaDistancia, schema) =>
            (Array.isArray(experienciaDistancia) ? experienciaDistancia[0] : experienciaDistancia) === 'sim'
                ? schema
                    .trim()
                    .required('Por favor, descreva o que correu mal')
                    .min(10, 'A descrição deve ter pelo menos 10 caracteres')
                    .max(500, 'A descrição não pode exceder 500 caracteres')
                : schema.notRequired()
        ),
    nivelConfortoSozinho: yup
        .number()
        .typeError('Deve inserir um número entre 0 e 10')
        .required('Por favor, avalie o seu nível de conforto')
        .min(0, 'A avaliação mínima é 0')
        .max(10, 'A avaliação máxima é 10')
        .integer('A avaliação deve ser um número inteiro'),

    impedimentoExercicio: yup.string()
        .required('Seleciona uma opção')
        .oneOf(['sim', 'não'], 'Opção inválida'),

    tipoImpedimento: yup
        .string()
        .when('impedimentoExercicio', (impedimentoExercicio, schema) =>
            (Array.isArray(impedimentoExercicio) ? impedimentoExercicio[0] : impedimentoExercicio) === 'sim'
                ? schema
                    .trim()
                    .required('Por favor, indique qual o tipo de impedimento que possui')
                    .min(3, 'Deves descrever pelo menos 3 caracteres acerca do(s) impedimento(s).')
                : schema.notRequired()
        ),

    tempoPorSessao: yup
        .number()
        .typeError('Por favor, insira um número válido (ex: 30, 45, 60)')
        .required('É obrigatório indicar a duração do treino')
        .min(15, 'A duração mínima por sessão é de 15 minutos')
        .max(240, 'A duração máxima por sessão é de 240 minutos (4 horas)')
        .integer('A duração deve ser indicada em minutos inteiros (sem decimais)')
        .test(
            'valid-interval',
            'Duração típica entre 30-120 minutos (ex: 30, 45, 60)',
            (value) => value === 0 || (value >= 15 && value <= 240)
        ),

    praticaExercicio: yup
        .string()
        .oneOf(['sim', 'não'], 'Selecione uma opção válida')
        .required('Informe se pratica exercícios'),

    vezesPorSemana: yup
        .number()
        .transform((value, originalValue) => {
            if (originalValue === '' || originalValue === null || originalValue === undefined) return undefined;
            return isNaN(value) ? undefined : value;
        })
        .when('praticaExercicio', {
            is: 'sim',
            then: schema => schema
                .required('Informe quantas vezes por semana pratica exercício')
                .integer('Deve ser um número inteiro')
                .min(1, 'Mínimo 1 vez por semana')
                .max(7, 'Máximo 7 vezes por semana')
        }),

    tipoExercicio: yup
        .string()
        .trim()
        .when('praticaExercicio', {
            is: 'sim',
            then: schema => schema
                .required('Informe quais exercícios pratica')
                .min(3, 'Por favor, seja mais específico')
                .max(200, 'Não pode exceder 200 caracteres')
        }),

    temDoresColuna: yup
        .string()
        .oneOf(['sim', 'não'], 'Selecione uma opção válida')
        .required('Informe se tem dores na coluna'),

    zonaColuna: yup
        .string()
        .trim()
        .when('temDoresColuna', {
            is: 'sim',
            then: schema => schema
                .required('Por favor especifique a zona da coluna')
                .min(3, 'Por favor, seja mais específico')
                .max(200, 'Não pode exceder 200 caracteres')
        }),

    intensidadeDorColuna: yup
        .number()
        .when('temDoresColuna', {
            is: 'sim',
            then: schema => schema
                .required('Indique o nível de dor de 1 a 10')
                .min(1, 'Mínimo 1')
                .max(10, 'Máximo 10')
        }),

    temLesao: yup
        .string()
        .oneOf(['sim', 'não'], 'Selecione uma opção válida')
        .required('Por favor indique se tem alguma lesão'),

    localLesao: yup
        .string()
        .trim()
        .when('temLesao', {
            is: 'sim',
            then: schema => schema
                .required('Por favor especifique onde é a lesão')
                .min(3, 'Por favor, seja mais específico')
                .max(200, 'Não pode exceder 200 caracteres')
        }),

    dataLesao: yup
        .date()
        .when('temLesao', {
            is: 'sim',
            then: schema => schema
                .required('Indique quando ocorreu a lesão')
                .max(new Date(), 'Data não pode ser no futuro')
        }),

    cirurgiaRecente: yup
        .string()
        .oneOf(['sim', 'não'], 'Selecione uma opção válida')
        .required('Por favor indique se fez alguma cirurgia'),

    localcirurgia: yup
        .string()
        .trim()
        .when('cirurgiaRecente', {
            is: 'sim',
            then: schema => schema
                .required('Por favor especifique a cirurgia feita')
                .min(3, 'Por favor, seja mais específico')
                .max(200, 'Não pode exceder 200 caracteres')
        }),

    dataCirurgia: yup
        .date()
        .when('cirurgiaRecente', {
            is: 'sim',
            then: schema => schema
                .required('Indique quando foi realizada a cirurgia')
                .max(new Date(), 'Data não pode ser no futuro')
                .min(new Date(new Date().setFullYear(new Date().getFullYear() - 30)), 'Cirurgia deve ter ocorrido nos últimos 30 anos')
        }),

    usaMedicamento: yup
        .string()
        .oneOf(['sim', 'não'], 'Selecione uma opção válida')
        .required('Por favor indique se usa algum medicamento'),
    problemaCardiaco: yup
        .string()
        .oneOf(['sim', 'não'], 'Selecione uma opção válida')
        .required('Por favor indique se tem ou teve algum problema cardíaco'),

    dorNoPeito: yup
        .string()
        .oneOf(['sim', 'não'], 'Selecione uma opção válida')
        .required('Por favor indique se já sentiu dor no peito durante atividade física'),

    perdeuConsiencia: yup
        .string()
        .oneOf(['sim', 'não'], 'Selecione uma opção válida')
        .required('Por favor indique se já perdeu a consciência'),

    problemaOssos: yup
        .string()
        .oneOf(['sim', 'não'], 'Selecione uma opção válida')
        .required('Por favor indique se tem algum problema nos ossos ou articulações'),

    tiposmedicamentos: yup
        .string()
        .trim()
        .when('usaMedicamento', {
            is: 'sim',
            then: schema => schema
                .required('Por favor indique quais medicamentos')
                .min(3, 'Por favor, forneça informações detalhadas')
                .max(500, 'Não pode exceder 500 caracteres')
        }),

    refeicoesPorDia: yup
        .number()
        .transform((value, originalValue) => {
            if (originalValue === '' || originalValue === null || originalValue === undefined) return undefined;
            return isNaN(value) ? undefined : value;
        })
        .typeError('Deve ser um número')
        .integer('Deve ser um número inteiro')
        .min(1, 'Mínimo de 1 refeição por dia')
        .max(8, 'Máximo de 8 refeições por dia')
        .required('Este campo é obrigatório'),

    alimentosGosta: yup
        .string()
        .trim()
        .min(5, 'Por favor, liste alguns alimentos')
        .max(1000, 'Máximo de 1000 caracteres')
        .required('Campo obrigatório'),

    restricaoAlimentar: yup.string()
        .required('Por favor, informe se possui alguma restrição alimentar'),

    restricoesAlimentares: yup.array()
        .when('restricaoAlimentar', {
            is: 'sim',
            then: (schema) => schema
                .min(1, 'Por favor, selecione pelo menos uma restrição alimentar')
                .required('Por favor, selecione pelo menos uma restrição alimentar'),
            otherwise: (schema) => schema.notRequired()
        }),

    alergiasAlimentares: yup
        .string()
        .trim()
        .test('format-check', 'Por favor, liste as alergias ou indique "não tenho"', function (value) {
            if (!value) return true;
            return value.length === 0 || value.length >= 3;
        })
        .max(500, 'Máximo de 500 caracteres'),

    dificuldadesPlanoAlimentar: yup
        .string()
        .trim()
        .min(5, 'Por favor, forneça mais detalhes')
        .max(1000, 'Máximo de 1000 caracteres')
        .required('Por favor, indique as suas dificuldades ou escreva "não tenho dificuldades"'),

    preferenciaLocalTreino: yup
        .string()
        .oneOf(['casa', 'ginásio'], 'Seleciona uma opção válida')
        .required('Este campo é obrigatório'),

    materialDisponivel: yup
        .string()
        .trim()
        .when('preferenciaLocalTreino', (preferenciaLocalTreino, schema) =>
            (Array.isArray(preferenciaLocalTreino) ? preferenciaLocalTreino[0] : preferenciaLocalTreino)?.toLowerCase() === 'casa'
                ? schema
                    .min(5, 'Por favor, fornece mais detalhes')
                    .max(1000, 'Máximo de 1000 caracteres')
                    .required('Indica, por favor qual o tipo de material que tens em casa.')
                : schema.notRequired()
        ),

    aguaConsumida: yup
        .string()
        .trim()
        .matches(/^\d+([.,]\d+)?$/, 'Insira um número válido')
        .test('valid-water-amount', 'Quantidade deve estar entre 0.5 e 10 litros', function (value) {
            if (!value) return false;
            const numValue = parseFloat(value.replace(',', '.'));
            return !isNaN(numValue) && numValue >= 0.5 && numValue <= 10;
        })
        .required('Campo obrigatório'),

    usaSuplemento: yup
        .string()
        .oneOf(['sim', 'não'], 'Selecione uma opção')
        .required('Campo obrigatório'),

    qualSuplemento: yup
        .string()
        .trim()
        .when('usaSuplemento', {
            is: 'sim',
            then: schema => schema
                .required('Indique os suplementos')
                .min(3, 'Por favor, seja mais específico')
                .max(500, 'Máximo de 500 caracteres')
        }),

    acompanhamentoDistancia: yup
        .string()
        .oneOf(['sim', 'não'], 'Selecione uma opção')
        .required('Campo obrigatório'),

    motivoAcompanhamento: yup
        .string()
        .trim()
        .when('acompanhamentoDistancia', {
            is: 'sim',
            then: schema => schema
                .required('Indique o motivo')
                .min(10, 'Por favor, forneça mais detalhes')
                .max(1000, 'Máximo de 1000 caracteres')
        }),
    fotoFrontal: yup
        .mixed()
        .required('Por favor envie a foto frontal'),

    fotoLateral: yup
        .mixed()
        .required('Por favor envie a foto lateral'),

    fotoCostas: yup
        .mixed()
        .required('Por favor envie a foto de costas'),
});