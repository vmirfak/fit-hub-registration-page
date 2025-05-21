import * as yup from 'yup';

// Regex patterns
const NAME_PATTERN = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/;
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const DECIMAL_PATTERN = /^\d+([.,]\d{1,2})?$/;
const COUNTRY_CODE_PATTERN = /^\+\d{1,4}$/;
const TEXT_PATTERN = /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9\s,'-]+$/;
const NO_SPECIAL_CHARS = /^[^<>]*$/;

//Constants
const YES_NO_OPTIONS = ['sim', 'não'] as const;
const IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const TRAINING_LOCATIONS = ['casa', 'ginásio', 'ambos'] as const;

// Helper functions
const normalizeSpaces = (value: string) => value.replace(/\s+/g, ' ').trim();
const parseDecimal = (value: string) => parseFloat(value.replace(',', '.'));
const normalizeText = (value: string) => value.trim().replace(/\s+/g, ' ');
const validateWordCount = (minWords: number) => (value: string) =>
    value ? value.trim().split(/\s+/).length >= minWords : false;
const validateFile = (value: unknown) => {
    if (!value || typeof value === 'string') return true;
    if (value instanceof File || value instanceof Blob) {
        return IMAGE_TYPES.includes(value.type as string) && value.size <= MAX_FILE_SIZE;
    }
    return true;
};

export const FormYupValidationSchema = yup.object().shape({
    nome: yup
        .string()
        .transform(normalizeSpaces)
        .min(3, 'Nome deve ter pelo menos 3 caracteres')
        .max(100, 'Nome não pode ultrapassar 100 caracteres')
        .matches(
            NAME_PATTERN,
            'Nome deve conter apenas letras, espaços, hífens e apóstrofos'
        )
        .required('Nome completo é obrigatório'),

    email: yup
        .string()
        .transform(normalizeSpaces)
        .email('Por favor, insere um email válido')
        .matches(
            EMAIL_PATTERN,
            'Email deve conter um domínio válido (ex: exemplo@dominio.com)'
        )
        .lowercase()
        .max(255, 'Email não pode ultrapassar os 255 caracteres')
        .required('Email é obrigatório')
        .test(
            'disposable-email',
            'E-mails temporários não são permitidos',
            async (value) => {
                if (!value) return true;
                // Implement actual disposable email check here
                // You might want to usa a service or a list of known domains
                return true;
            }
        ),

    localidade: yup
        .string()
        .transform(normalizeSpaces)
        .min(2, 'Localidade deve ter pelo menos 2 caracteres')
        .max(100, 'Localidade não pode ultrapassar 100 caracteres')
        .matches(
            NAME_PATTERN,
            'Localidade deve conter apenas letras, espaços, hífens e apóstrofos'
        )
        .required('Localidade é obrigatória'),

    genero: yup
        .string()
        .oneOf(
            ['masculino', 'feminino', 'outro', 'prefiro não dizer'],
            'Por favor, seleciona uma opção válida'
        )
        .required('Género é obrigatório'),

    profissao: yup
        .string()
        .transform(normalizeSpaces)
        .min(2, 'Profissão deve ter pelo menos 2 caracteres')
        .max(100, 'Profissão não pode ultrapassar 100 caracteres')
        .matches(
            NAME_PATTERN,
            'Profissão deve conter apenas letras, espaços, hífens e apóstrofos'
        )
        .required('Profissão é obrigatória'),

    countryCode: yup
        .string()
        .transform(normalizeSpaces)
        .matches(
            COUNTRY_CODE_PATTERN,
            'Código do país deve começar com + seguido de 1 a 4 dígitos (ex: +351)'
        )
        .required('Código do país é obrigatório'),

    telemovel: yup
        .string()
        .transform(normalizeSpaces)
        .required('Telemóvel é obrigatório')
        .test('phone-validation', 'Número de telemóvel inválido', function (value) {
            if (!value) return false;

            const cleanValue = value.replace(/[\s\-()]/g, '');
            const { countryCode } = this.parent;

            // Basic validation
            if (!/^\d{6,15}$/.test(cleanValue)) {
                return false;
            }

            // Country-specific validations
            const countryValidations = {
                '+351': { // Portugal
                    length: 9,
                    regex: /^9[1236]\d{7}$|^2\d{8}$/,
                    error: 'Número português deve começar com 91, 92, 93, 96 ou 2 e ter 9 dígitos'
                },
                '+55': { // Brazil
                    length: 11,
                    regex: /^[1-9]{2}9\d{8}$/,
                    error: 'Número brasileiro deve ter 11 dígitos no formato DDD9XXXXXXXX'
                },
                '+1': { // USA/Canada
                    length: 10,
                    regex: /^[2-9]\d{9}$/,
                    error: 'Número norte-americano deve ter 10 dígitos'
                }
            };

            const validation = countryValidations[countryCode as keyof typeof countryValidations];
            if (validation) {
                if (cleanValue.length !== validation.length || !validation.regex.test(cleanValue)) {
                    return this.createError({ message: validation.error });
                }
            }

            return true;
        }),

    pesoJejum: yup
        .string()
        .transform(normalizeSpaces)
        .required('Peso em jejum é obrigatório')
        .matches(
            DECIMAL_PATTERN,
            'Peso deve ser um número com até 2 casas decimais (usa ponto ou vírgula)'
        )
        .test(
            'is-valid-weight',
            'Peso deve ser entre 30 e 300 kg',
            value => {
                if (!value) return false;
                const numValue = parseDecimal(value);
                return numValue >= 30 && numValue <= 300;
            }
        ),

    altura: yup
        .string()
        .transform(normalizeSpaces)
        .required('Altura é obrigatória')
        .matches(
            /^\d{2,3}([.,]\d{1,2})?$/,
            'Altura deve ser entre 100 e 250 cm com até 2 casas decimais'
        )
        .test(
            'is-valid-height',
            'Altura deve ser entre 100 e 250 cm',
            value => {
                if (!value) return false;
                const numValue = parseDecimal(value);
                return numValue >= 100 && numValue <= 250;
            }
        ),

    dataNascimento: yup
        .date()
        .transform((_value, originalValue) => {
            if (originalValue instanceof Date) return originalValue;
            if (typeof originalValue === 'string' && originalValue.trim() === '') return null;
            const parsedDate = new Date(originalValue);
            return isNaN(parsedDate.getTime()) ? new Date(NaN) : parsedDate;
        })
        .typeError('Por favor, insere uma data válida')
        .required('Data de nascimento é obrigatória')
        .max(new Date(), 'Data de nascimento não pode ser no futuro')
        .min(
            new Date(new Date().setFullYear(new Date().getFullYear() - 120)),
            'Idade máxima permitida é 120 anos'
        )
        .test(
            'is-adult',
            'Tens de ter pelo menos 18 anos',
            value => {
                if (!value) return false;
                const today = new Date();
                const birthDate = new Date(value);
                let age = today.getFullYear() - birthDate.getFullYear();
                const monthDiff = today.getMonth() - birthDate.getMonth();

                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }

                return age >= 18;
            }
        ),

    objetivoExercicio: yup
        .string()
        .required('Por favor, escolhe um objetivo com o exercício físico')
        .oneOf(
            ['Alta Performance', 'Perda de peso', 'Estética', 'Saúde / Qualidade de vida', 'Aumento de massa muscular', 'Condicionamento Físico'],
            'Objetivo inválido'
        ),


    praticouModalidade: yup
        .string()
        .required('Por favor, seleciona se já praticaste alguma modalidade desportiva')
        .oneOf([...YES_NO_OPTIONS], 'Seleciona uma opção válida (sim ou não)'),

    modalidadeDesportiva: yup
        .string()
        .transform(normalizeText)
        .when('praticouModalidade', {
            is: 'sim',
            then: schema => schema
                .required('Por favor, indica quais modalidades praticou')
                .min(3, 'Descreve pelo menos 3 caracteres sobre a(s) modalidade(s)')
                .max(200, 'A descrição não pode ultrapassar 200 caracteres')
                .matches(
                    TEXT_PATTERN,
                    'Usa apenas letras, números e caracteres especiais válidos (vírgulas, hífens)'
                ),
            otherwise: schema => schema.notRequired()
        }),

    experienciaDistancia: yup
        .string()
        .required('Por favor, seleciona se já tiveste experiência com acompanhamento à distância')
        .oneOf([...YES_NO_OPTIONS], 'Seleciona uma opção válida (sim ou não)'),

    experienciaProblemas: yup
        .string()
        .transform(normalizeText)
        .when('experienciaDistancia', {
            is: 'sim',
            then: schema => schema
                .required('Por favor, descreve o que correu mal na tua experiência')
                .min(10, 'A descrição deve ter pelo menos 10 caracteres')
                .max(500, 'A descrição não pode ultrapassar 500 caracteres')
                .matches(
                    NO_SPECIAL_CHARS,
                    'Não pode conter caracteres especiais como < ou >'
                )
                .test(
                    'meaningful-description',
                    'Por favor, fornece mais detalhes (mínimo 3 palavras)',
                    validateWordCount(3)
                ),
            otherwise: schema => schema.notRequired()
        }),

    nivelConfortoSozinho: yup
        .number()
        .typeError('Por favor, insere um número entre 0 e 10')
        .required('Por favor, avalie teu nível de conforto (0-10)')
        .min(0, 'A avaliação mínima é 0 (nada confortável)')
        .max(10, 'A avaliação máxima é 10 (totalmente confortável)')
        .integer('A avaliação deve ser um número inteiro sem decimais')
        .test(
            'valid-range',
            'O valor deve estar entre 0 e 10',
            value => value !== null && value >= 0 && value <= 10
        ),

    impedimentoExercicio: yup
        .string()
        .required('Por favor, seleciona se possuis algum impedimento para exercício')
        .oneOf([...YES_NO_OPTIONS], 'Seleciona uma opção válida (sim ou não)'),

    tipoImpedimento: yup
        .string()
        .transform(normalizeText)
        .when('impedimentoExercicio', {
            is: 'sim',
            then: schema => schema
                .required('Por favor, descreve teu impedimento para exercício')
                .min(3, 'Descreve pelo menos 3 caracteres sobre o impedimento')
                .max(200, 'A descrição não pode ultrapassar 200 caracteres')
                .matches(
                    TEXT_PATTERN,
                    'Use apenas caracteres válidos na descrição'
                ),
            otherwise: schema => schema.notRequired()
        }),

    tempoPorSessao: yup
        .number()
        .typeError('Por favor, insere um número válido entre 15 e 240 (ex: 30, 45, 60)')
        .required('Por favor, indica a duração preferida do treino (em minutos)')
        .min(15, 'A duração mínima por sessão é de 15 minutos')
        .max(240, 'A duração máxima por sessão é de 240 minutos (4 horas)')
        .integer('A duração deve ser em minutos inteiros (sem decimais)')
        .test(
            'common-duration',
            'Durações típicas: 30, 45, 60, 90 minutos. Confirme teu valor.',
            value => [15, 30, 45, 60, 90, 120, 180, 240].includes(value)
        ),

    praticaExercicio: yup
        .string()
        .required('Por favor, informa se praticas exercícios atualmente')
        .oneOf([...YES_NO_OPTIONS], 'Seleciona uma opção válida (sim ou não)'),

    vezesPorSemana: yup
        .number()
        .transform(value => (isNaN(value) || value === null ? undefined : value))
        .when('praticaExercicio', {
            is: 'sim',
            then: schema => schema
                .required('Por favor, informa quantas vezes por semana praticas exercício')
                .integer('Deve ser um número inteiro de vezes')
                .min(1, 'Mínimo 1 vez por semana')
                .max(14, 'Máximo 14 vezes por semana (2x ao dia)')
                .test(
                    'typical-frequency',
                    'Frequência típica: 1-7 vezes/semana. Confirme teu valor.',
                    value => value >= 1 && value <= 14
                ),
            otherwise: schema => schema.notRequired()
        }),

    temDoresColuna: yup
        .string()
        .oneOf([...YES_NO_OPTIONS], 'Seleciona uma opção válida')
        .required('Informa se tem dores na coluna'),

    zonaColuna: yup
        .string()
        .transform(normalizeText)
        .when('temDoresColuna', {
            is: 'sim',
            then: schema => schema
                .required('Por favor especifica a zona da coluna')
                .min(3, 'Por favor, sê mais específico (ex: lombar, cervical)')
                .max(200, 'Não pode ultrapassar 200 caracteres')
                .matches(
                    NO_SPECIAL_CHARS,
                    'Não pode conter caracteres especiais como < ou >'
                ),
            otherwise: schema => schema.notRequired()
        }),

    temLesao: yup
        .string()
        .oneOf([...YES_NO_OPTIONS], 'Seleciona uma opção válida')
        .required('Por favor indica se tens alguma lesão'),

    localLesao: yup
        .string()
        .transform(normalizeText)
        .when('temLesao', {
            is: 'sim',
            then: schema => schema
                .required('Por favor especifica onde é a lesão')
                .min(3, 'Por favor, sê mais específico (ex: joelho direito)')
                .max(200, 'Não pode ultrapassar 200 caracteres')
                .matches(
                    NO_SPECIAL_CHARS,
                    'Não pode conter caracteres especiais como < ou >'
                ),
            otherwise: schema => schema.notRequired()
        }),

    cirurgiaRecente: yup
        .string()
        .oneOf([...YES_NO_OPTIONS], 'Seleciona uma opção válida')
        .required('Por favor indica se foste submetido a alguma cirurgia'),

    localcirurgia: yup
        .string()
        .transform(normalizeText)
        .when('cirurgiaRecente', {
            is: 'sim',
            then: schema => schema
                .required('Por favor especifica a cirurgia feita')
                .min(3, 'Por favor, sê mais específico (ex: joelho, hérnia)')
                .max(200, 'Não pode ultrapassar 200 caracteres')
                .matches(
                    NO_SPECIAL_CHARS,
                    'Não pode conter caracteres especiais como < ou >'
                ),
            otherwise: schema => schema.notRequired()
        }),

    usaMedicamento: yup
        .string()
        .oneOf([...YES_NO_OPTIONS], 'Seleciona uma opção válida')
        .required('Por favor indica se utilizas algum medicamento'),

    problemaCardiaco: yup
        .string()
        .oneOf([...YES_NO_OPTIONS], 'Seleciona uma opção válida')
        .required('Por favor indica se tens ou tiveste algum problema cardíaco'),

    dorNoPeito: yup
        .string()
        .oneOf([...YES_NO_OPTIONS], 'Seleciona uma opção válida')
        .required('Por favor indica se já sentiste dor no peito durante atividade física'),

    perdeuConsiencia: yup
        .string()
        .oneOf([...YES_NO_OPTIONS], 'Seleciona uma opção válida')
        .required('Por favor indica se já perdeste a consciência'),

    problemaOssos: yup
        .string()
        .oneOf([...YES_NO_OPTIONS], 'Seleciona uma opção válida')
        .required('Por favor indica se tens algum problema nos ossos ou articulações'),

    tiposmedicamentos: yup
        .string()
        .transform(normalizeText)
        .when('usaMedicamento', {
            is: 'sim',
            then: schema => schema
                .required('Por favor indica quais medicamentos')
                .min(3, 'Por favor, fornece informações detalhadas (ex: nome, dosagem)')
                .max(500, 'Não pode ultrapassar 500 caracteres')
                .matches(
                    NO_SPECIAL_CHARS,
                    'Não pode conter caracteres especiais como < ou >'
                ),
            otherwise: schema => schema.notRequired()
        }),

    refeicoesPorDia: yup
        .number()
        .transform((value, originalValue) =>
            originalValue === '' || originalValue == null ? undefined :
                isNaN(value) ? undefined : value
        )
        .typeError('Deve ser um número entre 1 e 8')
        .integer('Deve ser um número inteiro (sem decimais)')
        .min(1, 'Mínimo de 1 refeição por dia')
        .max(8, 'Máximo de 8 refeições por dia')
        .required('Por favor, informa quantas refeições fazes por dia'),

    alimentosGosta: yup
        .string()
        .transform(normalizeText)
        .min(5, 'Por favor, enumera pelo menos 3 alimentos que gosta (ex: frango, arroz, maçã)')
        .max(1000, 'Máximo de 1000 caracteres')
        .required('Por favor, informa-nos acerca dos alimentos que gostas')
        .matches(NO_SPECIAL_CHARS, 'Não pode conter caracteres especiais como < ou >'),

    alimentosNaoGosta: yup
        .string()
        .transform(normalizeText)
        .min(5, 'Por favor, enumera pelo menos 3 alimentos que não gosta (ex: peixe, brócolos, ovos)')
        .max(1000, 'Máximo de 1000 caracteres')
        .required('Por favor, informa os alimentos que não gosta')
        .matches(NO_SPECIAL_CHARS, 'Não pode conter caracteres especiais como < ou >'),

    restricaoAlimentar: yup
        .string()
        .oneOf([...YES_NO_OPTIONS], 'Seleciona uma opção válida')
        .required('Por favor, informa se possuis alguma restrição alimentar'),

    restricoesAlimentares: yup
        .array()
        .of(yup.string().matches(NO_SPECIAL_CHARS, 'Restrição inválida'))
        .when('restricaoAlimentar', {
            is: 'sim',
            then: schema => schema
                .min(1, 'Por favor, seleciona pelo menos uma restrição alimentar')
                .required('Por favor, seleciona pelo menos uma restrição alimentar'),
            otherwise: schema => schema.notRequired()
        }),

    alergiasAlimentares: yup
        .string()
        .transform(normalizeText)
        .test(
            'valid-allergy',
            'Por favor, enumera as alergias ou indica "não tenho"',
            value => !value || value.toLowerCase() === 'não tenho' || value.length >= 3
        )
        .max(500, 'Máximo de 500 caracteres')
        .matches(NO_SPECIAL_CHARS, 'Não pode conter caracteres especiais como < ou >'),

    dificuldadesPlanoAlimentar: yup
        .string()
        .transform(normalizeText)
        .min(5, 'Por favor, fornece mais detalhes (ex: horários irregulares, falta de tempo)')
        .max(1000, 'Máximo de 1000 caracteres')
        .required('Por favor, indica as dificuldades ou escreve "não tenho dificuldades"')
        .matches(NO_SPECIAL_CHARS, 'Não pode conter caracteres especiais como < ou >'),

    preferenciaLocalTreino: yup
        .string()
        .oneOf([...TRAINING_LOCATIONS], 'Seleciona uma opção válida: casa, ginásio ou ambos')
        .required('Por favor, informa teu local preferido para treinar'),

    materialDisponivel: yup
        .string()
        .transform(normalizeText)
        .when('preferenciaLocalTreino', {
            is: (val: string) => val === 'casa' || val === 'ambos',
            then: schema => schema
                .min(5, 'Por favor, enumera o teu material (ex: halteres, colchão, elásticos)')
                .max(1000, 'Máximo de 1000 caracteres')
                .required('Por favor, indica que material tens disponível em casa')
                .matches(NO_SPECIAL_CHARS, 'Não pode conter caracteres especiais como < ou >'),
            otherwise: schema => schema.notRequired()
        }),

    aguaConsumida: yup
        .string()
        .transform(normalizeText)
        .matches(DECIMAL_PATTERN, 'Insere um número válido (ex: 1.5 ou 2,5)')
        .test(
            'valid-water-range',
            'Quantidade deve estar entre 0.1 e 10 litros',
            value => {
                if (!value) return false;
                const numValue = parseDecimal(value);
                return numValue >= 0.5 && numValue <= 10;
            }
        )
        .required('Por favor, informa quantos litros de água bebes por dia'),

    usaSuplemento: yup
        .string()
        .oneOf([...YES_NO_OPTIONS], 'Seleciona uma opção válida')
        .required('Por favor, informa se utilizas suplementos alimentares'),

    qualSuplemento: yup
        .string()
        .transform(normalizeText)
        .when('usaSuplemento', {
            is: 'sim',
            then: schema => schema
                .required('Por favor, indica os suplementos que utilizas (ex: proteína whey, creatina ...)')
                .min(3, 'Por favor, sê mais específico')
                .max(500, 'Máximo de 500 caracteres')
                .matches(NO_SPECIAL_CHARS, 'Não pode conter caracteres especiais como < ou >'),
            otherwise: schema => schema.notRequired()
        }),

    acompanhamentoDistancia: yup
        .string()
        .oneOf([...YES_NO_OPTIONS], 'Seleciona uma opção válida')
        .required('Por favor, informa se desejas ser acompanhado à distância'),

    motivoAcompanhamento: yup
        .string()
        .transform(normalizeText)
        .when('acompanhamentoDistancia', {
            is: 'sim',
            then: schema => schema
                .required('Por favor, descreve o motivo do acompanhamento (ex: conveniência, horários flexíveis)')
                .min(10, 'Por favor, fornece mais detalhes')
                .max(1000, 'Máximo de 1000 caracteres')
                .matches(NO_SPECIAL_CHARS, 'Não pode conter caracteres especiais como < ou >'),
            otherwise: schema => schema.notRequired()
        }),

    fotoFrontal: yup
        .mixed()
        .required('Por favor, envie a foto frontal')
        .test('file-type', 'Apenas imagens nos formatos .JPG, .JPEG ou .PNG são permitidas', validateFile)
        .test('file-size', 'O tamanho máximo permitido é 5MB', validateFile),

    fotoLateral: yup
        .mixed()
        .required('Por favor, envie a foto lateral')
        .test('file-type', 'Apenas imagens nos formatos .JPG, .JPEG ou .PNG são permitidas', validateFile)
        .test('file-size', 'O tamanho máximo permitido é 5MB', validateFile),

    fotoCostas: yup
        .mixed()
        .required('Por favor, envie a foto de costas')
        .test('file-type', 'Apenas imagens nos formatos .JPG, .JPEG ou .PNG são permitidas', validateFile)
        .test('file-size', 'O tamanho máximo permitido é 5MB', validateFile),
});