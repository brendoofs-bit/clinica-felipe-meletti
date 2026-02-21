import React from 'react';
import { Treatment, PremiumService, CaseStudy, Testimonial, ClinicStat } from './types';
import { Sparkles, Activity, Award, ShieldCheck } from 'lucide-react';

export const WHATSAPP_NUMBER = "5554991928750";

export const IMAGES = {
  hero: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771597483/Design_sem_nome_ijrghm.png", // Elegant clinic shot
  heroMobile: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771599358/Design_sem_nome_1_ozodqj.png", // Mobile specific hero
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
    description: 'Renovação celular completa para peles maduras ou com cicatrizes profundas.',
    benefits: ['Redução de rugas profundas', 'Efeito "pele nova"', 'Durabilidade de anos', 'Trata manchas senis'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771539507/antes-depois-rejuvenescimento-facial_u8lt44.webp",
    tags: ['MAIS PROCURADO', 'FACIAL']
  },
  {
    id: 'gluteo',
    title: 'Remodelação Glútea',
    subtitle: 'Volume e Contorno',
    description: 'Protocolo exclusivo para volumização e correção de desníveis sem cirurgia.',
    benefits: ['Aumento de volume', 'Correção de depressão trocantérica', 'Melhora da celulite', 'Sem cirurgia'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771544171/antes-depois-tratamento-estetico-regiao-glutea_e11c2q.webp",
    tags: ['CORPO', 'EXCLUSIVO']
  },
  {
    id: 'profhilo',
    title: 'Profhilo',
    subtitle: 'Bioremodelador Celular',
    description: 'Ácido hialurônico puro para hidratação profunda e bioestimulação.',
    benefits: ['Hidratação profunda', 'Melhora da flacidez', 'Sem volumização excessiva', 'Brilho natural'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771620038/Design_sem_nome_1_rol3ap.png",
    tags: ['NOVIDADE', 'HIDRATAÇÃO']
  },
  {
    id: 'radiesse',
    title: 'Radiesse',
    subtitle: 'Hidroxiapatita de Cálcio',
    description: 'Bioestimulador que recupera volume e estimula colágeno natural.',
    benefits: ['Definição do contorno', 'Estímulo de colágeno', 'Melhora da qualidade da pele', 'Efeito lifting'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771620453/Design_sem_nome_2_hnyevz.png",
    tags: ['COLÁGENO', 'FACIAL/CORPO']
  },
  {
    id: 'toxina',
    title: 'Toxina Botulínica',
    subtitle: 'Prevenção de Rugas',
    description: 'Suaviza linhas de expressão e previne o envelhecimento dinâmico.',
    benefits: ['Suaviza rugas', 'Previne marcas profundas', 'Aparência descansada', 'Rápida aplicação'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771623401/Design_sem_nome_3_cuvhve.png",
    tags: ['ESSENCIAL', 'FACIAL']
  },
  {
    id: 'estrias',
    title: 'Tratamento de Estrias',
    subtitle: 'Regeneração da Pele',
    description: 'Protocolos combinados para suavizar estrias brancas e vermelhas.',
    benefits: ['Melhora da textura', 'Redução da visibilidade', 'Estímulo de colágeno', 'Tratamento personalizado'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771623512/Design_sem_nome_4_l3vbmg.png",
    tags: ['CORPO', 'REPARAÇÃO']
  },
  {
    id: 'maos-preenchimento',
    title: 'Preenchimento de Mãos',
    subtitle: 'Rejuvenescimento',
    description: 'Restaura o volume perdido e disfarça veias e tendões aparentes.',
    benefits: ['Mãos mais jovens', 'Hidratação', 'Volume natural', 'Resultado imediato'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771623595/Design_sem_nome_5_fkzfoi.png",
    tags: ['MÃOS', 'VOLUME']
  },
  {
    id: 'maos-skinbooster',
    title: 'Skinbooster Mãos',
    subtitle: 'Hidratação Profunda',
    description: 'Injeção de ácido hialurônico fluido para revitalizar a pele das mãos.',
    benefits: ['Melhora do craquelado', 'Hidratação intensa', 'Suavidade ao toque', 'Brilho'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771623740/Design_sem_nome_6_wi56sq.png",
    tags: ['MÃOS', 'HIDRATAÇÃO']
  },
  {
    id: 'maos-laser',
    title: 'Laser CO2 Mãos',
    subtitle: 'Renovação da Pele',
    description: 'Tratamento a laser para manchas senis e textura da pele das mãos.',
    benefits: ['Clareamento de manchas', 'Renovação celular', 'Pele mais firme', 'Rejuvenescimento'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771623839/Design_sem_nome_7_emj3u4.png",
    tags: ['MÃOS', 'LASER']
  },
  {
    id: 'maos-peeling',
    title: 'Peeling Mãos',
    subtitle: 'Químico',
    description: 'Descamação controlada para renovar a camada superficial da pele.',
    benefits: ['Uniformização do tom', 'Textura macia', 'Remoção de células mortas', 'Custo-benefício'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771623901/Design_sem_nome_8_v9lkmt.png",
    tags: ['MÃOS', 'RENOVAÇÃO']
  },
  {
    id: 'sculptra-pescoco',
    title: 'Sculptra Pescoço',
    subtitle: 'Bioestimulador',
    description: 'Combate a flacidez e "papada" através do estímulo de colágeno.',
    benefits: ['Firmeza da pele', 'Melhora do contorno', 'Efeito progressivo', 'Duradouro'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771624033/Design_sem_nome_9_onnemj.png",
    tags: ['PESCOÇO', 'FLACIDEZ']
  },
  {
    id: 'lip-maos',
    title: 'Luz Pulsada Mãos',
    subtitle: 'Fotorejuvenescimento',
    description: 'Tecnologia de luz para tratar manchas solares e vasos finos.',
    benefits: ['Clareamento de manchas', 'Tratamento de vasos', 'Estímulo de colágeno', 'Sem downtime'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771626296/Design_sem_nome_10_ak9o7u.png",
    tags: ['MÃOS', 'MANCHAS']
  },
  {
    id: 'skinbooster-pescoco',
    title: 'Skinbooster Pescoço',
    subtitle: 'Linhas Finas',
    description: 'Tratamento das "rugas de colar" no pescoço e colo.',
    benefits: ['Suaviza linhas horizontais', 'Hidratação profunda', 'Melhora a textura', 'Rejuvenescimento'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771626436/Design_sem_nome_11_gkou3v.png",
    tags: ['PESCOÇO', 'LINHAS']
  },
  {
    id: 'co2-face',
    title: 'Laser CO2 Face',
    subtitle: 'Resurfacing',
    description: 'Padrão ouro para rejuvenescimento global da face e cicatrizes.',
    benefits: ['Trata rugas profundas', 'Cicatrizes de acne', 'Flacidez', 'Poros dilatados'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771626717/Design_sem_nome_14_lccxmy.png",
    tags: ['FACE', 'INTENSIVO']
  },
  {
    id: 'sculptra-face',
    title: 'Sculptra Face',
    subtitle: 'Banco de Colágeno',
    description: 'Repõe o colágeno perdido com o tempo, restaurando a firmeza.',
    benefits: ['Efeito lifting natural', 'Melhora a espessura da pele', 'Preventivo e corretivo', 'Durabilidade'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771626757/Design_sem_nome_15_x1caog.png",
    tags: ['FACE', 'COLÁGENO']
  },
  {
    id: 'microagulhamento',
    title: 'Microagulhamento',
    subtitle: 'Indução de Colágeno',
    description: 'Microperfurações que estimulam a regeneração natural da pele.',
    benefits: ['Melhora cicatrizes', 'Textura da pele', 'Melasma (drug delivery)', 'Poros'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771626840/Design_sem_nome_16_q8nawj.png",
    tags: ['FACE', 'TEXTURA']
  },
  {
    id: 'lip-vasos',
    title: 'Luz Pulsada',
    subtitle: 'Vasos e Manchas',
    description: 'Tratamento específico para rosácea, vasinhos e manchas solares.',
    benefits: ['Reduz vermelhidão', 'Clareia sardas', 'Uniformiza o tom', 'Pele iluminada'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771627049/Design_sem_nome_17_u4zpkd.png",
    tags: ['FACE', 'CORREÇÃO']
  },
  {
    id: 'preenchimento-facial',
    title: 'Preenchimento Facial',
    subtitle: 'Harmonização',
    description: 'Estruturação e volumização com ácido hialurônico.',
    benefits: ['Olheiras', 'Malar/Maçã do rosto', 'Mandíbula e Mento', 'Bigode chinês'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771627178/Design_sem_nome_18_x5eqji.png",
    tags: ['FACE', 'ESTRUTURA']
  },
  {
    id: 'peeling-pescoco',
    title: 'Peeling Pescoço',
    subtitle: 'Renovação Suave',
    description: 'Tratamento químico para melhorar a qualidade da pele do colo.',
    benefits: ['Clareamento', 'Renovação celular', 'Suavidade', 'Seguro para região'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771627379/Design_sem_nome_19_tf0m1d.png",
    tags: ['PESCOÇO', 'PEELING']
  },
  {
    id: 'skinbooster-face',
    title: 'Skinbooster Face',
    subtitle: 'Glow Up',
    description: 'Hidratação injetável para uma pele radiante e descansada.',
    benefits: ['Melhora linhas finas', 'Viço imediato', 'Hidratação profunda', 'Acabamento natural'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771627443/Design_sem_nome_20_pfnndx.png",
    tags: ['FACE', 'GLOW']
  },
  {
    id: 'lip-pescoco',
    title: 'Luz Pulsada Colo',
    subtitle: 'Poiquilodermia',
    description: 'Trata a vermelhidão e manchas comuns no pescoço e colo (Civatte).',
    benefits: ['Clareia o "vermelhão"', 'Trata manchas solares', 'Rejuvenescimento', 'Uniformização'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771627551/Design_sem_nome_21_kqr1gf.png",
    tags: ['COLO', 'MANCHAS']
  },
  {
    id: 'cicatriz-acne',
    title: 'Cicatriz de Acne',
    subtitle: 'Protocolo Combinado',
    description: 'Associação de técnicas (Laser, Subcisão, Bioestimulador) para nivelar a pele.',
    benefits: ['Pele mais lisa', 'Redução das marcas', 'Estímulo de colágeno', 'Autoestima'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771627643/Design_sem_nome_22_gtpvqw.png",
    tags: ['FACE', 'REPARAÇÃO']
  },
  {
    id: 'peeling-face',
    title: 'Peelings Faciais',
    subtitle: 'Diversos Níveis',
    description: 'Do superficial ao médio, para tratar acne, manchas e oleosidade.',
    benefits: ['Controle da acne', 'Poros fechados', 'Renovação', 'Clareamento'],
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771627707/Design_sem_nome_23_hpjm6a.png",
    tags: ['FACE', 'CLÁSSICO']
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