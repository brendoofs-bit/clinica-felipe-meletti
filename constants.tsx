import React from 'react';
import { Treatment, PremiumService, CaseStudy, Testimonial } from './types';
import { Sparkles, Activity, Award, ShieldCheck } from 'lucide-react';

export const WHATSAPP_NUMBER = "5554991928750";

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

export const PREMIUM_SERVICES = [
  {
    id: 'fenol',
    title: 'Peeling Fenol Like',
    subtitle: 'Rejuvenescimento Profundo',
    description: 'A técnica mais avançada para renovação celular completa. Indicado para peles maduras ou com cicatrizes profundas, proporcionando um efeito de "pele nova" em apenas uma sessão.',
    benefits: ['Redução drástica de rugas profundas', 'Eliminação de manchas senis', 'Retração de flacidez severa', 'Resultados que duram anos'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771539507/antes-depois-rejuvenescimento-facial_u8lt44.webp", // IMAGEM ATUALIZADA
    tags: ['MAIS PROCURADO', 'REJUVENESCIMENTO']
  },
  {
    id: 'gluteo',
    title: 'Remodelação Glútea',
    subtitle: 'Volume e Contorno Definido',
    description: 'Protocolo exclusivo Dr. Felipe Meletti para volumização e correção de desníveis nos glúteos sem cirurgia. Utilizamos preenchedores biocompatíveis de alta durabilidade.',
    benefits: ['Aumento de volume imediato', 'Correção da depressão trocantérica', 'Melhora da qualidade da pele (celulite)', 'Procedimento minimamente invasivo'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771544171/antes-depois-tratamento-estetico-regiao-glutea_e11c2q.webp", // IMAGEM ATUALIZADA
    tags: ['CORPO', 'RESULTADO IMEDIATO']
  },
  // ... mantenha o ultraformer igual
];

export const TESTIMONIALS = [
  // PEELING
  { id: 'p1', category: 'peeling', beforeImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771537611/mulher-pele-sensibilizada-procedimento-estetico_cigutt.webp', afterImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771537596/mulher-maquiagem-cuidados-pessoais_ys6kpl.webp' },
  { id: 'p2', category: 'peeling', beforeImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771537963/mulher-com-faixa-de-compression-e-cabelo-castanho-jpg_eprmga.webp', afterImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771537963/retratos-mulher-idosa-cabelo-curto-grisalho-jpg_cxv204.webp' },
  // GLÚTEO
  { id: 'g1', category: 'gluteo', beforeImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771540100/imagem-de-uma-pessoa-de-meia-strip-com-tatuagem-e-calcinha-preta_r1zolt.webp', afterImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771540101/mulher-tatuagem-bumbum-roupa-intima-preta_olthx6.webp' },
  { id: 'g2', category: 'gluteo', beforeImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771540639/regiao-traseira-mulher-roupa-escura_vn72xs.webp', afterImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771540711/imagem-de-nude-com-marcacoes-de-cirurgia-estetica-jpg_hvpolq.webp' },
  // FACIAL
  { id: 'f1', category: 'facial', beforeImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771538514/tratamento-pele-acne-cicatrizes-jpg_buuahg.webp', afterImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771538514/mulher-com-pele-de-acne-e-manifestacoes-inflamatorias_alvumz.webp' },
  { id: 'f2', category: 'facial', beforeImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771538933/olho-humano-detaliado_olcmnx.webp', afterImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771538932/olho-maquiagem-sobrancelha-cilios-pele-lisa_eru4zj.webp' },
  // CORPORAL
  { id: 'c1', category: 'corporal', beforeImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771543563/mulher-hiperpigmentacao-e-acne_em9sas.webp', afterImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771543562/rostofemininoimagem_i8afnf.webp' },
  { id: 'c2', category: 'corporal', beforeImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771543838/mulher-cuidados-pele-estetica-clinica_b3plg7.webp', afterImage: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1771543838/pessoa-cuidados-com-pele_vodklk.webp' },
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
