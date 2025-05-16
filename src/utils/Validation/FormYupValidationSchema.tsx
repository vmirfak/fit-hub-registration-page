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

            // Remove espaços, hífens e parênteses que o usuário pode ter inserido
            const cleanValue = value.replace(/[\s\-()]/g, '');

            // Validação específica para Portugal (+351)
            if (this.parent.countryCode === '+351') {
                return cleanValue.length === 9 && /^9\d{8}$|^2\d{8}$|^3\d{8}$/.test(cleanValue);
            }

            // Validação para Brasil (+55)
            if (this.parent.countryCode === '+55') {
                return cleanValue.length === 11 && /^[1-9]{2}9\d{8}$/.test(cleanValue);
            }

            // Validação genérica para outros países
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
        .max(new Date(), 'Data de nascimento não pode ser no futuro')
        .min(new Date(new Date().setFullYear(new Date().getFullYear() - 100)), 'Idade máxima é 100 anos')
        .test('is-adult', 'Você deve ter pelo menos 18 anos', value => {
            if (!value) return true; // Será capturado pela validação required, se necessário
            const today = new Date();
            const birthDate = new Date(value);
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();

            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            return age >= 18;
        })
        .required('Data de nascimento é obrigatória'),

    genero: yup
        .string()
        .oneOf(['masculino', 'feminino', 'outro', 'prefiro não informar'], 'Gênero inválido')
        .required('Gênero é obrigatório'),

    objetivoExercicio: yup
        .string()
        .trim()
        .min(5, 'Por favor, forneça detalhes do seu objetivo')
        .max(500, 'Objetivo não pode exceder 500 caracteres')
        .required('Objetivo do exercício é obrigatório'),

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

    possuiDoencaCronica: yup
        .string()
        .oneOf(['sim', 'não'], 'Selecione uma opção válida')
        .required('Por favor indique se possui alguma doença crônica'),

    quaisDoencasCronicas: yup
        .string()
        .trim()
        .when('possuiDoencaCronica', {
            is: 'sim',
            then: schema => schema
                .required('Por favor especifique as doenças crônicas')
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

    horarioRefeicoes: yup
        .string()
        .trim()
        .min(5, 'Por favor, forneça detalhes dos horários')
        .max(300, 'Não pode exceder 300 caracteres')
        .required('Informe os horários habituais das refeições'),

    alimentosGosta: yup
        .string()
        .trim()
        .min(5, 'Por favor, liste alguns alimentos')
        .max(1000, 'Máximo de 1000 caracteres')
        .required('Campo obrigatório'),

    alimentosNaoGosta: yup
        .string()
        .trim()
        .min(5, 'Por favor, liste alguns alimentos')
        .max(1000, 'Máximo de 1000 caracteres')
        .required('Campo obrigatório'),

    restricaoAlimentar: yup
        .string()
        .trim()
        .max(1000, 'Máximo de 1000 caracteres'),

    alergiasAlimentares: yup
        .string()
        .trim()
        .test('format-check', 'Por favor, liste as alergias ou indique "não tenho"', function (value) {
            if (!value) return true;
            // Permite resposta vazia ou deve ter pelo menos 3 caracteres
            return value.length === 0 || value.length >= 3;
        })
        .max(500, 'Máximo de 500 caracteres'),

    dificuldadesPlanoAlimentar: yup
        .string()
        .trim()
        .min(5, 'Por favor, forneça mais detalhes')
        .max(1000, 'Máximo de 1000 caracteres')
        .required('Por favor, indique suas dificuldades ou escreva "não tenho dificuldades"'),

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

    consumoAlcool: yup
        .string()
        .oneOf(['nunca', 'raramente', 'ocasionalmente', 'frequentemente', 'diariamente'], 'Opção inválida')
        .required('Informe seu consumo de álcool'),

    consumoCafe: yup
        .string()
        .oneOf(['nunca', 'raramente', 'ocasionalmente', 'frequentemente', 'diariamente'], 'Opção inválida')
        .required('Informe seu consumo de café'),

    fumante: yup
        .string()
        .oneOf(['sim', 'não', 'ex-fumante'], 'Opção inválida')
        .required('Informe se é fumante'),

    qualidadeSono: yup
        .number()
        .integer('Deve ser um número inteiro')
        .min(1, 'Mínimo 1')
        .max(10, 'Máximo 10')
        .required('Avalie sua qualidade de sono'),

    horasSono: yup
        .number()
        .transform((value, originalValue) => {
            if (originalValue === '' || originalValue === null || originalValue === undefined) return undefined;
            return isNaN(value) ? undefined : value;
        })
        .typeError('Deve ser um número')
        .min(3, 'Mínimo de 3 horas por noite')
        .max(12, 'Máximo de 12 horas por noite')
        .required('Informe quantas horas dorme por noite'),

    usaSuplemento: yup
        .string()
        .oneOf(['sim', 'não'], 'Valor inválido')
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
        .oneOf(['sim', 'não'], 'Valor inválido')
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

    objetivosSaude: yup
        .string()
        .trim()
        .min(10, 'Por favor, forneça mais detalhes sobre seus objetivos')
        .max(1000, 'Máximo de 1000 caracteres')
        .required('Por favor, indique seus objetivos de saúde'),

    comoConheceu: yup
        .string()
        .oneOf([
            'amigos',
            'familia',
            'redes_sociais',
            'pesquisa_internet',
            'email_marketing',
            'evento',
            'anuncio',
            'outro'
        ], 'Opção inválida')
        .required('Por favor, indique como nos conheceu'),

    outroComoConheceu: yup
        .string()
        .trim()
        .when('comoConheceu', {
            is: 'outro',
            then: schema => schema
                .required('Por favor, especifique como nos conheceu')
                .min(3, 'Por favor, forneça mais detalhes')
                .max(200, 'Máximo de 200 caracteres')
        }),

    consentimentoDados: yup
        .boolean()
        .oneOf([true], 'Você deve concordar com a política de privacidade')
        .required('Você deve concordar com a política de privacidade'),

    aceitaNewsletter: yup
        .boolean()
});