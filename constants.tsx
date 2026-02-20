import React from 'react';
import { Treatment, PremiumService, CaseStudy, Testimonial } from './types';
import { Sparkles, Activity, Award, ShieldCheck } from 'lucide-react';

export const WHATSAPP_NUMBER = "5554991928750";

export const IMAGES = {
  hero: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771348019/IMG_5908_x1qvze.jpg", // Elegant clinic shot
  doctor: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771343022/Felipe_Meletti_01_kwalqq.jpg",
  clinicInterior1: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771348019/_EDS1817_blc45o.jpg",
  clinicInterior2: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771348019/IMG_5915_lnc6y1.jpg",
  procedure1: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771348020/IMG_5812_u1di9o.jpg",
  procedure2: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771348019/_EDS1747_bmeofa.jpg",
  procedure3: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771348018/_EDS1762_nfantk.jpg",
  texture: "https://www.transparenttextures.com/patterns/cubes.png" // Subtle background texture
};

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
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771349904/7B2FF4CC-6861-47EC-85AB-EED3B5650907.png.6ac300486755d68ddcf766bc47055114_kpdjxp.png",
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
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771349999/WhatsApp-Image-2022-11-10-at-21.04.20-1201x800_c0kl4w.jpg",
    tags: ['CORPO', 'RESULTADO IMEDIATO'] // Changed tag from HIGH-TICKET
  },
  {
    id: 'ultraformer',
    title: 'Ultraformer III',
    subtitle: 'Lifting Sem Cortes',
    description: 'A tecnologia de ultrassom micro e macrofocado número 1 do mundo. Atua na ancoragem muscular e estímulo de colágeno, promovendo efeito lifting imediato e progressivo.',
    benefits: [
      'Efeito lifting facial imediato',
      'Redução da papada e gordura localizada',
      'Sem tempo de recuperação (downtime)',
      'Pode ser feito em qualquer época do ano'
    ],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771350194/ultraformer-antes-depois_ip9xbv.jpg",
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
    beforeImage: 'https://images.unsplash.com/photo-1551024601-564d6e67e275?q=80&w=987&auto=format&fit=crop', // Placeholder for user replacement
    afterImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1057&auto=format&fit=crop'
  },
  {
    id: 't1-b',
    patientName: 'Joana D.',
    procedure: 'Peeling Fenol Like',
    category: 'peeling',
    quote: 'Impressionante como as manchas sumiram.',
    beforeImage: 'https://images.unsplash.com/photo-1551024601-564d6e67e275?q=80&w=987&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1057&auto=format&fit=crop'
  },
  {
    id: 't2',
    patientName: 'Ana P.',
    procedure: 'Harmonização Facial',
    category: 'facial',
    quote: 'O Dr. Felipe respeitou meus traços naturais. A harmonização ficou sutil e elegante, exatamente como eu queria.',
    beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=2053&auto=format&fit=crop'
  },
   {
    id: 't2-b',
    patientName: 'Beatriz L.',
    procedure: 'Preenchimento Labial',
    category: 'facial',
    quote: 'Lábios desenhados e naturais. Amei o resultado.',
    beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=2053&auto=format&fit=crop'
  },
  {
    id: 't3',
    patientName: 'Carla M.',
    procedure: 'Remodelação Glútea',
    category: 'gluteo',
    quote: 'Recuperei minha autoestima. O contorno ficou perfeito e a celulite desapareceu.',
    beforeImage: 'https://images.unsplash.com/photo-1545167622-3a6ac15600f3?q=80&w=2071&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1545167622-3a6ac15600f3?q=80&w=2071&auto=format&fit=crop'
  },
   {
    id: 't3-b',
    patientName: 'Fernanda T.',
    procedure: 'Remodelação Glútea',
    category: 'gluteo',
    quote: 'Resultado imediato e muito natural.',
    beforeImage: 'https://images.unsplash.com/photo-1545167622-3a6ac15600f3?q=80&w=2071&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1545167622-3a6ac15600f3?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: 't4',
    patientName: 'Roberto J.',
    procedure: 'Bioestimulador Corporal',
    category: 'corporal',
    quote: 'Melhora visível na flacidez do abdômen.',
    beforeImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop'
  },
    {
    id: 't4-b',
    patientName: 'Lucas M.',
    procedure: 'Definição Abdominal',
    category: 'corporal',
    quote: 'Excelente profissional e estrutura.',
    beforeImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case1',
    title: 'Rejuvenescimento Global',
    technique: 'Fenol Like',
    shortDescription: 'Tratamento intensivo para fotoenvelhecimento severo.',
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771351511/Design_sem_nome_1_e3ngvg.png",
    fullImage: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771351511/Design_sem_nome_1_e3ngvg.png",
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
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771351512/Design_sem_nome_2_kkva9v.png",
    fullImage: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771351512/Design_sem_nome_2_kkva9v.png",
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
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771351279/Volumizacao-de-Gluteos_hlcam2.jpg",
    fullImage: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771351279/Volumizacao-de-Gluteos_hlcam2.jpg",
    details: {
      diagnosis: 'Paciente insatisfeita com o formato "quadrado" do glúteo e depressão lateral (hip dips).',
      conduct: 'Associação de Ácido Poliláctico (Sculptra) para qualidade da pele e Ácido Hialurônico corporal para projeção e preenchimento das laterais.',
      result: 'Glúteos mais arredondados, empinados e pele com maior firmeza.'
    }
  }
];

export const IMPACT_STATS = [
  { value: '94%', label: 'Relatam aumento na autoestima', icon: <Activity className="w-6 h-6 text-gold-500" /> },
  { value: '89%', label: 'Sentem-se mais confiantes', icon: <Award className="w-6 h-6 text-gold-500" /> },
  { value: '78%', label: 'Melhora em relacionamentos', icon: <Sparkles className="w-6 h-6 text-gold-500" /> },
  { value: '91%', label: 'Recomendariam a amigos', icon: <ShieldCheck className="w-6 h-6 text-gold-500" /> },
];