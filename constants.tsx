// Substitua ou adicione no seu constants.tsx

export const CAROUSEL_IMAGES = [
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771536884/antes-depois-tratamento-estetico-felipe-meletti_gjmmn7.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771536589/tratamento-estetico-regiao-glutea-clinica-felipe-meletti_fzqk7b.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771536243/tratamento-de-gordura-regiao-glutea_u7mkjl.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771452221/tratamento-celulite-clinica-felipe-meletti_mhpoj6.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771535778/transformacao-fisica-clinica-ameletti_px87b1.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771536011/antes-depois-tratamento-estetico-gluteos_zsnjzu.webp"
];

// Atualize as imagens no PREMIUM_SERVICES
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

// Substitua seu array TESTIMONIALS (Antes/Depois)
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

// Atualize as imagens no CASE_STUDIES (Diagnóstico & Conduta)
// No primeiro objeto (id: 'case1'), altere a propriedade image para:
// image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771449737/tratamento-para-acne-e-cicatrizes-na-pele_tr4s4d.webp"
// No terceiro objeto (id: 'case3'), altere a propriedade image para:
// image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771536589/tratamento-estetico-regiao-glutea-clinica-felipe-meletti_fzqk7b.webp"
