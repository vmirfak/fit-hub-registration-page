import * as yup from 'yup';

export const FormYupValidationSchema = yup.object().shape({
    nome: yup
        .string()
        .trim()
        .min(3, 'Nome deve ter pelo menos 3 caracteres')
        .max(100, 'Nome não pode exceder 100 caracteres')
        .matches(
            /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/,
            'Nome deve conter apenas letras, espaços, hífens e apóstrofos'
        )
        .required('Nome completo é obrigatório')
        .transform(value => value.replace(/\s+/g, ' ')), // Normalize multiple spaces

    email: yup
        .string()
        .trim()
        .email('Por favor, insira um email válido')
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Email deve conter um domínio válido (ex: exemplo@dominio.com)'
        )
        .lowercase()
        .max(255, 'Email não pode exceder 255 caracteres')
        .required('Email é obrigatório')
        .test(
            'disposable-email',
            'Emails temporários não são permitidos',
            async value => {
                if (!value) return true;
                // Optional: Add disposable email domain check here
                return true;
            }
        ),

    localidade: yup
        .string()
        .trim()
        .min(2, 'Localidade deve ter pelo menos 2 caracteres')
        .max(100, 'Localidade não pode exceder 100 caracteres')
        .matches(
            /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/,
            'Localidade deve conter apenas letras, espaços, hífens e apóstrofos'
        )
        .required('Localidade é obrigatória'),

    genero: yup
        .string()
        .oneOf(
            ['masculino', 'feminino', 'outro', 'prefiro não dizer'],
            'Por favor, selecione uma opção válida'
        )
        .required('Gênero é obrigatório'),

    profissao: yup
        .string()
        .trim()
        .min(2, 'Profissão deve ter pelo menos 2 caracteres')
        .max(100, 'Profissão não pode exceder 100 caracteres')
        .matches(
            /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/,
            'Profissão deve conter apenas letras, espaços, hífens e apóstrofos'
        )
        .required('Profissão é obrigatória'),

    countryCode: yup
        .string()
        .trim()
        .matches(
            /^\+\d{1,4}$/,
            'Código do país deve começar com + seguido de 1 a 4 dígitos (ex: +351)'
        )
        .required('Código do país é obrigatório'),

    telemovel: yup
        .string()
        .trim()
        .required('Telemóvel é obrigatório')
        .test('phone-validation', 'Número de telemóvel inválido', function (value) {
            if (!value) return false;

            const cleanValue = value.replace(/[\s\-()]/g, '');
            const { countryCode } = this.parent;

            // Common international pattern
            if (!/^\d{6,15}$/.test(cleanValue)) return false;

            // Country-specific validations
            type CountryCode = '+351' | '+55' | '+1';
            const countryValidations: Record<CountryCode, { length: number; regex: RegExp; error: string }> = {
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

            const code = countryCode as CountryCode;
            if (code && countryValidations[code]) {
                const { length, regex, error } = countryValidations[code];
                if (cleanValue.length !== length || !regex.test(cleanValue)) {
                    return this.createError({ message: error });
                }
            }

            return true;
        }),

    pesoJejum: yup
        .string()
        .trim()
        .required('Peso em jejum é obrigatório')
        .matches(
            /^\d+([.,]\d{1,2})?$/,
            'Peso deve ser um número com até 2 casas decimais (use ponto ou vírgula)'
        )
        .test(
            'is-valid-weight',
            'Peso deve ser entre 30 e 300 kg',
            value => {
                if (!value) return false;
                const numValue = parseFloat(value.replace(',', '.'));
                return numValue >= 30 && numValue <= 300;
            }
        ),

    altura: yup
        .string()
        .trim()
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
                const numValue = parseFloat(value.replace(',', '.'));
                return numValue >= 100 && numValue <= 250;
            }
        ),

    dataNascimento: yup
        .date()
        .transform((_, originalValue) => {
            // Handle both Date objects and string inputs
            if (originalValue instanceof Date) return originalValue;
            return originalValue ? new Date(originalValue) : null;
        })
        .typeError('Por favor, insira uma data válida')
        .required('Data de nascimento é obrigatória')
        .max(new Date(), 'Data de nascimento não pode ser no futuro')
        .min(
            new Date(new Date().setFullYear(new Date().getFullYear() - 120)),
            'Idade máxima permitida é 120 anos'
        )
        .test(
            'is-adult',
            'Você deve ter pelo menos 18 anos',
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
        )
        .test(
            'valid-date',
            'Data de nascimento inválida',
            value => {
                if (!value) return false;
                return value instanceof Date && !isNaN(value.getTime());
            }
        ),
    objetivoExercicio: yup
        .string()
        .trim()
        .min(5, 'Por favor, forneça um objetivo mais detalhado (mínimo 5 caracteres)')
        .max(500, 'O objetivo não pode exceder 500 caracteres')
        .required('Por favor, descreva qual é o seu objetivo com o exercício físico')
        .test(
            'meaningful-objective',
            'Por favor, forneça um objetivo mais específico',
            value => {
                if (!value) return true;
                const wordCount = value.trim().split(/\s+/).length;
                return wordCount >= 3;
            }
        ),

    praticouModalidade: yup
        .string()
        .required('Por favor, selecione se já praticou alguma modalidade desportiva')
        .oneOf(['sim', 'não'], 'Selecione uma opção válida (sim ou não)'),

    modalidadeDesportiva: yup
        .string()
        .when('praticouModalidade', {
            is: 'sim',
            then: schema => schema
                .trim()
                .required('Por favor, indique quais modalidades praticou')
                .min(3, 'Descreva pelo menos 3 caracteres sobre a(s) modalidade(s)')
                .max(200, 'A descrição não pode exceder 200 caracteres')
                .matches(
                    /^[a-zA-ZÀ-ÖØ-öø-ÿ\s,'-]+$/,
                    'A modalidade deve conter apenas letras e caracteres especiais válidos'
                ),
            otherwise: schema => schema.notRequired()
        }),

    experienciaDistancia: yup
        .string()
        .required('Por favor, selecione se já teve experiência com exercício à distância')
        .oneOf(['sim', 'não'], 'Selecione uma opção válida (sim ou não)'),

    experienciaProblemas: yup
        .string()
        .when('experienciaDistancia', {
            is: 'sim',
            then: schema => schema
                .trim()
                .required('Por favor, descreva o que correu mal na sua experiência')
                .min(10, 'A descrição deve ter pelo menos 10 caracteres')
                .max(500, 'A descrição não pode exceder 500 caracteres')
                .test(
                    'meaningful-description',
                    'Por favor, forneça mais detalhes (mínimo 3 palavras)',
                    value => {
                        if (!value) return true;
                        const wordCount = value.trim().split(/\s+/).length;
                        return wordCount >= 3;
                    }
                ),
            otherwise: schema => schema.notRequired()
        }),

    nivelConfortoSozinho: yup
        .number()
        .typeError('Por favor, insira um número entre 0 e 10')
        .required('Por favor, avalie seu nível de conforto (0-10)')
        .min(0, 'A avaliação mínima é 0 (nada confortável)')
        .max(10, 'A avaliação máxima é 10 (totalmente confortável)')
        .integer('A avaliação deve ser um número inteiro sem decimais')
        .test(
            'typical-range',
            'Valores típicos entre 3-8. Confirme seu valor.',
            value => value === null || (value >= 0 && value <= 10)
        ),

    impedimentoExercicio: yup
        .string()
        .required('Por favor, selecione se possui algum impedimento para exercício')
        .oneOf(['sim', 'não'], 'Selecione uma opção válida (sim ou não)'),

    tipoImpedimento: yup
        .string()
        .when('impedimentoExercicio', {
            is: 'sim',
            then: schema => schema
                .trim()
                .required('Por favor, descreva seu impedimento para exercício')
                .min(3, 'Descreva pelo menos 3 caracteres sobre o impedimento')
                .max(200, 'A descrição não pode exceder 200 caracteres')
                .matches(
                    /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9\s,'-]+$/,
                    'Use apenas caracteres válidos na descrição'
                ),
            otherwise: schema => schema.notRequired()
        }),

    tempoPorSessao: yup
        .number()
        .typeError('Por favor, insira um número válido (ex: 30, 45, 60)')
        .required('Por favor, indique a duração preferida do treino (em minutos)')
        .min(15, 'A duração mínima por sessão é de 15 minutos')
        .max(240, 'A duração máxima por sessão é de 240 minutos (4 horas)')
        .integer('A duração deve ser em minutos inteiros (sem decimais)'),

    praticaExercicio: yup
        .string()
        .required('Por favor, informe se pratica exercícios atualmente')
        .oneOf(['sim', 'não'], 'Selecione uma opção válida (sim ou não)'),

    vezesPorSemana: yup
        .number()
        .transform(value => (isNaN(value) ? undefined : value))
        .when('praticaExercicio', {
            is: 'sim',
            then: schema => schema
                .required('Por favor, informe quantas vezes por semana pratica exercício')
                .integer('Deve ser um número inteiro de vezes')
                .min(1, 'Mínimo 1 vez por semana')
                .max(14, 'Máximo 14 vezes por semana (2x ao dia)')
                .test(
                    'realistic-frequency',
                    'Frequência típica: 1-7 vezes/semana. Confirme seu valor.',
                    value => value >= 1 && value <= 14
                ),
            otherwise: schema => schema.notRequired()
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
                .matches(/^[^<>]*$/, 'Não pode conter caracteres especiais como < ou >')
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
                .matches(/^[^<>]*$/, 'Não pode conter caracteres especiais como < ou >')
        }),

    dataLesao: yup
        .date()
        .typeError('Data inválida. Use o formato DD/MM/AAAA')
        .when('temLesao', {
            is: 'sim',
            then: schema => schema
                .required('Indique quando ocorreu a lesão')
                .max(new Date(), 'Data não pode ser no futuro')
                .min(new Date(new Date().setFullYear(new Date().getFullYear() - 70)), 'Data muito antiga')
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
                .matches(/^[^<>]*$/, 'Não pode conter caracteres especiais como < ou >')
        }),

    dataCirurgia: yup
        .date()
        .typeError('Data inválida. Use o formato DD/MM/AAAA')
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
                .matches(/^[^<>]*$/, 'Não pode conter caracteres especiais como < ou >')
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
        .required('Campo obrigatório')
        .matches(/^[^<>]*$/, 'Não pode conter caracteres especiais como < ou >'),

    alimentosNaoGosta: yup
        .string()
        .trim()
        .min(5, 'Por favor, mencione alguns alimentos que não gosta')
        .max(1000, 'Máximo de 1000 caracteres')
        .required('Campo obrigatório')
        .matches(/^[^<>]*$/, 'Não pode conter caracteres especiais como < ou >'),

    restricaoAlimentar: yup
        .string()
        .oneOf(['sim', 'não'], 'Selecione uma opção válida')
        .required('Por favor, informe se possui alguma restrição alimentar'),

    restricoesAlimentares: yup
        .array()
        .when('restricaoAlimentar', {
            is: 'sim',
            then: (schema) => schema
                .min(1, 'Por favor, selecione pelo menos uma restrição alimentar')
                .required('Por favor, selecione pelo menos uma restrição alimentar')
                .of(yup.string().matches(/^[^<>]*$/, 'Restrição inválida')),
            otherwise: (schema) => schema.notRequired()
        }),

    alergiasAlimentares: yup
        .string()
        .trim()
        .test('format-check', 'Por favor, liste as alergias ou indique "não tenho"', function (value) {
            if (!value) return true;
            return value.length === 0 || value.length >= 3;
        })
        .max(500, 'Máximo de 500 caracteres')
        .matches(/^[^<>]*$/, 'Não pode conter caracteres especiais como < ou >'),

    dificuldadesPlanoAlimentar: yup
        .string()
        .trim()
        .min(5, 'Por favor, forneça mais detalhes')
        .max(1000, 'Máximo de 1000 caracteres')
        .required('Por favor, indique as suas dificuldades ou escreva "não tenho dificuldades"')
        .matches(/^[^<>]*$/, 'Não pode conter caracteres especiais como < ou >'),

    preferenciaLocalTreino: yup
        .string()
        .oneOf(['casa', 'ginásio', 'ambos'], 'Selecione uma opção válida')
        .required('Este campo é obrigatório'),

    materialDisponivel: yup
        .string()
        .trim()
        .when('preferenciaLocalTreino', {
            is: (val: string) => val === 'casa' || val === 'ambos',
            then: (schema) => schema
                .min(5, 'Por favor, forneça mais detalhes')
                .max(1000, 'Máximo de 1000 caracteres')
                .required('Indique, por favor, qual o tipo de material que tem em casa')
                .matches(/^[^<>]*$/, 'Não pode conter caracteres especiais como < ou >')
        }),

    aguaConsumida: yup
        .string()
        .trim()
        .matches(/^\d+([.,]\d+)?$/, 'Insira um número válido (ex: 2.5)')
        .test('valid-water-amount', 'Quantidade deve estar entre 0.5 e 10 litros', function (value) {
            if (!value) return false;
            const numValue = parseFloat(value.replace(',', '.'));
            return !isNaN(numValue) && numValue >= 0.5 && numValue <= 10;
        })
        .required('Indique a quantidade de água consumida por dia em litros'),

    usaSuplemento: yup
        .string()
        .oneOf(['sim', 'não'], 'Selecione uma opção válida')
        .required('Campo obrigatório'),

    qualSuplemento: yup
        .string()
        .trim()
        .when('usaSuplemento', {
            is: 'sim',
            then: schema => schema
                .required('Indique os suplementos que utiliza')
                .min(3, 'Por favor, seja mais específico')
                .max(500, 'Máximo de 500 caracteres')
                .matches(/^[^<>]*$/, 'Não pode conter caracteres especiais como < ou >')
        }),

    acompanhamentoDistancia: yup
        .string()
        .oneOf(['sim', 'não'], 'Selecione uma opção válida')
        .required('Campo obrigatório'),

    motivoAcompanhamento: yup
        .string()
        .trim()
        .when('acompanhamentoDistancia', {
            is: 'sim',
            then: schema => schema
                .required('Indique o motivo do acompanhamento')
                .min(10, 'Por favor, forneça mais detalhes')
                .max(1000, 'Máximo de 1000 caracteres')
                .matches(/^[^<>]*$/, 'Não pode conter caracteres especiais como < ou >')
        }),

    fotoFrontal: yup
        .mixed()
        .required('Por favor envie a foto frontal')
        .test('fileType', 'Apenas imagens são permitidas (jpg, jpeg, png)', (value) => {
            if (!value || typeof value === 'string') return true;
            if (value instanceof File || value instanceof Blob) {
                return ['image/jpeg', 'image/jpg', 'image/png'].includes(value.type);
            }
            return true;
        })
        .test('fileSize', 'Arquivo muito grande (máx. 5MB)', (value) => {
            if (!value || typeof value === 'string') return true;
            if (value instanceof File || value instanceof Blob) {
                return value.size <= 5 * 1024 * 1024; // 5MB
            }
            return true;
        }),

    fotoLateral: yup
        .mixed()
        .required('Por favor envie a foto lateral')
        .test('fileType', 'Apenas imagens são permitidas (jpg, jpeg, png)', (value) => {
            if (!value || typeof value === 'string') return true;
            if (value instanceof File || value instanceof Blob) {
                return ['image/jpeg', 'image/jpg', 'image/png'].includes(value.type);
            }
            return true;
        })
        .test('fileSize', 'Arquivo muito grande (máx. 5MB)', (value) => {
            if (!value || typeof value === 'string') return true;
            if (value instanceof File || value instanceof Blob) {
                return value.size <= 5 * 1024 * 1024; // 5MB
            }
            return true;
        }),

    fotoCostas: yup
        .mixed()
        .required('Por favor envie a foto de costas')
        .test('fileType', 'Apenas imagens são permitidas (jpg, jpeg, png)', (value) => {
            if (!value || typeof value === 'string') return true;
            if (value instanceof File || value instanceof Blob) {
                return ['image/jpeg', 'image/jpg', 'image/png'].includes(value.type);
            }
            return true;
        })
        .test('fileSize', 'Arquivo muito grande (máx. 5MB)', (value) => {
            if (!value || typeof value === 'string') return true;
            if (value instanceof File || value instanceof Blob) {
                return value.size <= 5 * 1024 * 1024; // 5MB
            }
            return true;
        }),
});