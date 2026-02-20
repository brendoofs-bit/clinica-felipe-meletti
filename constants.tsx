import React from 'react';
import { Treatment, PremiumService, CaseStudy, Testimonial, ClinicStat } from './types';
import { Sparkles, Activity, Award, ShieldCheck } from 'lucide-react';

export const WHATSAPP_NUMBER = "5554991928750";

export const IMAGES = {
  hero: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771597483/Design_sem_nome_ijrghm.png", // Elegant clinic shot
  doctor: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771343022/Felipe_Meletti_01_kwalqq.jpg",
  clinicInterior1: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771348019/_EDS1817_blc45o.jpg",
  clinicInterior2: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771348019/IMG_5915_lnc6y1.jpg",
  procedure1: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771348020/IMG_5812_u1di9o.jpg",
  procedure2: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771348019/_EDS1747_bmeofa.jpg",
  procedure3: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771348018/_EDS1762_nfantk.jpg",
  texture: "https://www.transparenttextures.com/patterns/cubes.png" // Subtle background texture
};

export const CAROUSEL_IMAGES = [
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771536884/antes-depois-tratamento-estetico-felipe-meletti_gjmmn7.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771536589/tratamento-estetico-regiao-glutea-clinica-felipe-meletti_fzqk7b.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771536243/tratamento-de-gordura-regiao-glutea_u7mkjl.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771452221/tratamento-celulite-clinica-felipe-meletti_mhpoj6.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771535778/transformacao-fisica-clinica-ameletti_px87b1.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771536011/antes-depois-tratamento-estetico-gluteos_zsnjzu.webp"
];

export const TREATMENTS: Treatment[] = [
  { id: '1', name: 'Peeling de Fenol Like' },
  { id: '2', name: 'Remodelação Glútea' },
  { id: '3', name: 'Toxina Botulínica' },
  { id: '4', name: 'Sculptra (Bioestimulador)' },
  { id: '5', name: 'Preenchimentos' },
  { id: '6', name: 'Peeling Químico' },
  { id: '7', name: 'Harmonização Facial' },
  { id: '8', name: 'Laser de CO2 Fracionado' },
  { id: '9', name: 'Luz Intensa Pulsada' },
  { id: '10', name: 'Radiesse' },
  { id: '11', name: 'Profhilo' },
  { id: '12', name: 'Ultraformer' },
];

export const PREMIUM_SERVICES: PremiumService[] = [
  {
    id: 'fenol',
    title: 'Peeling Fenol Like',
    subtitle: 'Rejuvenescimento Profundo',
    description: 'A técnica mais avançada para renovação celular completa. Indicado para peles maduras ou com cicatrizes profundas, proporcionando um efeito de "pele nova" em apenas uma sessão.',
    benefits: [
      'Redução drástica de rugas profundas',
      'Eliminação de manchas senis',
      'Retração de flacidez severa',
      'Resultados que duram anos'
    ],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771539507/antes-depois-rejuvenescimento-facial_u8lt44.webp",
    tags: ['MAIS PROCURADO', 'REJUVENESCIMENTO']
  },
  {
    id: 'gluteo',
    title: 'Remodelação Glútea',
    subtitle: 'Volume e Contorno Definido',
    description: 'Protocolo exclusivo Dr. Felipe Meletti para volumização e correção de desníveis nos glúteos sem cirurgia. Utilizamos preenchedores biocompatíveis de alta durabilidade.',
    benefits: [
      'Aumento de volume imediato',
      'Correção da depressão trocantérica',
      'Melhora da qualidade da pele (celulite)',
      'Procedimento minimamente invasivo'
    ],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771544171/antes-depois-tratamento-estetico-regiao-glutea_e11c2q.webp",
    tags: ['CORPO', 'RESULTADO IMEDIATO'] // Changed tag from HIGH-TICKET
  },
  {
    id: 'ultraformer',
    title: 'Ultraformer', // Removed III to match request if needed, but keeping III in object for now unless specified
    subtitle: 'Lifting Sem Cortes',
    description: 'A tecnologia de ultrassom micro e macrofocado número 1 do mundo. Atua na ancoragem muscular e estímulo de colágeno, promovendo efeito lifting imediato e progressivo.',
    benefits: [
      'Efeito lifting facial imediato',
      'Redução da papada e gordura localizada',
      'Sem tempo de recuperação (downtime)',
      'Pode ser feito em qualquer época do ano'
    ],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771593663/tratamento-pele-do-pescoco-antes-e-depois_m49hze.webp",
    tags: ['TECNOLOGIA', 'LIFTING']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    patientName: 'Maria S.',
    procedure: 'Peeling Fenol Like',
    category: 'peeling',
    quote: 'Minha pele nunca esteve tão bonita. O resultado foi muito além do que eu imaginava, rejuvenesci pelo menos 15 anos.',
    beforeImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771537611/mulher-pele-sensibilizada-procedimento-estetico_cigutt.webp',
    afterImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771537596/mulher-maquiagem-cuidados-pessoais_ys6kpl.webp'
  },
  {
    id: 't1-b',
    patientName: 'Joana D.',
    procedure: 'Peeling Fenol Like',
    category: 'peeling',
    quote: 'Impressionante como as manchas sumiram.',
    beforeImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771537963/mulher-com-faixa-de-compression-e-cabelo-castanho-jpg_eprmga.webp',
    afterImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771537963/retratos-mulher-idosa-cabelo-curto-grisalho-jpg_cxv204.webp'
  },
  {
    id: 't2',
    patientName: 'Ana P.',
    procedure: 'Harmonização Facial',
    category: 'facial',
    quote: 'O Dr. Felipe respeitou meus traços naturais. A harmonização ficou sutil e elegante, exatamente como eu queria.',
    beforeImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771538514/tratamento-pele-acne-cicatrizes-jpg_buuahg.webp',
    afterImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771538514/mulher-com-pele-de-acne-e-manifestacoes-inflamatorias_alvumz.webp'
  },
   {
    id: 't2-b',
    patientName: 'Beatriz L.',
    procedure: 'Preenchimento Labial',
    category: 'facial',
    quote: 'Lábios desenhados e naturais. Amei o resultado.',
    beforeImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771538933/olho-humano-detaliado_olcmnx.webp',
    afterImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771538932/olho-maquiagem-sobrancelha-cilios-pele-lisa_eru4zj.webp'
  },
  {
    id: 't3',
    patientName: 'Carla M.',
    procedure: 'Remodelação Glútea',
    category: 'gluteo',
    quote: 'Recuperei minha autoestima. O contorno ficou perfeito e a celulite desapareceu.',
    beforeImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771540100/imagem-de-uma-pessoa-de-meia-strip-com-tatuagem-e-calcinha-preta_r1zolt.webp',
    afterImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771540101/mulher-tatuagem-bumbum-roupa-intima-preta_olthx6.webp'
  },
   {
    id: 't3-b',
    patientName: 'Fernanda T.',
    procedure: 'Remodelação Glútea',
    category: 'gluteo',
    quote: 'Resultado imediato e muito natural.',
    beforeImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771540639/regiao-traseira-mulher-roupa-escura_vn72xs.webp',
    afterImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771540711/imagem-de-nude-com-marcacoes-de-cirurgia-estetica-jpg_hvpolq.webp'
  },
  {
    id: 't4',
    patientName: 'Roberto J.',
    procedure: 'Bioestimulador Corporal',
    category: 'corporal',
    quote: 'Melhora visível na flacidez do abdômen.',
    beforeImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771543563/mulher-hiperpigmentacao-e-acne_em9sas.webp',
    afterImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771543562/rostofemininoimagem_i8afnf.webp'
  },
    {
    id: 't4-b',
    patientName: 'Lucas M.',
    procedure: 'Definição Abdominal',
    category: 'corporal',
    quote: 'Excelente profissional e estrutura.',
    beforeImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771543838/mulher-cuidados-pele-estetica-clinica_b3plg7.webp',
    afterImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771543838/pessoa-cuidados-com-pele_vodklk.webp'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case1',
    title: 'Rejuvenescimento Global',
    technique: 'Fenol Like',
    shortDescription: 'Tratamento intensivo para fotoenvelhecimento severo.',
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771449737/tratamento-para-acne-e-cicatrizes-na-pele_tr4s4d.webp",
    fullImage: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771449737/tratamento-para-acne-e-cicatrizes-na-pele_tr4s4d.webp",
    details: {
      diagnosis: 'Paciente apresentava rítides (rugas) estáticas profundas e elastose solar severa (grau IV de Glogau).',
      conduct: 'Realizado Peeling Fenol Like com monitoramento cardíaco em ambiente ambulatorial controlado. O procedimento visa a quimiocirurgia da epiderme e derme papilar.',
      result: 'Retração total da pele flácida e formação de "pele nova" em 15 dias. Melhora de 90% nas rugas estáticas.'
    }
  },
  {
    id: 'case2',
    title: 'Definição Mandibular',
    technique: 'Preenchimento com Ácido Hialurônico',
    shortDescription: 'Estruturação do terço inferior da face.',
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771593663/tratamento-pele-do-pescoco-antes-e-depois_m49hze.webp",
    fullImage: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771593663/tratamento-pele-do-pescoco-antes-e-depois_m49hze.webp",
    details: {
      diagnosis: 'Retrognatismo leve e perda de definição do ângulo da mandíbula.',
      conduct: 'Aplicação de ácido hialurônico de alta reticulação em pontos estratégicos (MD Codes) para projeção do mento e definição do ângulo mandibular.',
      result: 'Perfil mais equilibrado e rosto com aparência mais magra e definida.'
    }
  },
  {
    id: 'case3',
    title: 'Volumização Glútea',
    technique: 'Bioestimuladores + AH',
    shortDescription: 'Correção de depressão trocantérica.',
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771536589/tratamento-estetico-regiao-glutea-clinica-felipe-meletti_fzqk7b.webp",
    fullImage: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771536589/tratamento-estetico-regiao-glutea-clinica-felipe-meletti_fzqk7b.webp",
    details: {
      diagnosis: 'Paciente insatisfeita com o formato "quadrado" do glúteo e depressão lateral (hip dips).',
      conduct: 'Associação de Ácido Poliláctico (Sculptra) para qualidade da pele e Ácido Hialurônico corporal para projeção e preenchimento das laterais.',
      result: 'Glúteos mais arredondados, empinados e pele com maior firmeza.'
    }
  }
];

export const IMPACT_STATS: ClinicStat[] = [
  { value: '94%', label: 'Relatam aumento na autoestima', icon: Activity },
  { value: '89%', label: 'Sentem-se mais confiantes', icon: Award },
  { value: '78%', label: 'Melhora em relacionamentos', icon: Sparkles },
  { value: '91%', label: 'Recomendariam a amigos', icon: ShieldCheck },
];