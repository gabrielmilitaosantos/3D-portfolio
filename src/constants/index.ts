export const words = [
  {
    id: 'ideas',
    text: { pt: 'Ideias', en: 'Ideas' },
    imgPath: '/images/ideas.svg',
  },
  {
    id: 'concepts',
    text: { pt: 'Conceitos', en: 'Concepts' },
    imgPath: '/images/concepts.svg',
  },
  {
    id: 'code',
    text: { pt: 'Código', en: 'Code' },
    imgPath: '/images/code.svg',
  },
  {
    id: 'designs',
    text: { pt: 'Designs', en: 'Designs' },
    imgPath: '/images/designs.svg',
  },
  {
    id: 'ideas-2',
    text: { pt: 'Ideias', en: 'Ideas' },
    imgPath: '/images/ideas.svg',
  },
  {
    id: 'concepts-2',
    text: { pt: 'Conceitos', en: 'Concepts' },
    imgPath: '/images/concepts.svg',
  },
  {
    id: 'code-2',
    text: { pt: 'Código', en: 'Code' },
    imgPath: '/images/code.svg',
  },
  {
    id: 'designs-2',
    text: { pt: 'Designs', en: 'Designs' },
    imgPath: '/images/designs.svg',
  },
];

export const counterItems = [
  {
    id: 'tech-stack',
    value: 30,
    suffix: '+',
    label: { pt: 'Tecnologias no Stack', en: 'Technologies in Stack' },
  },
  {
    id: 'active-projects',
    value: 2,
    suffix: '',
    label: { pt: 'Projetos com Deploy Ativo', en: 'Projects with Live Deploy' },
  },
  {
    id: 'languages',
    value: 3,
    suffix: '',
    label: { pt: 'Idiomas Falados', en: 'Languages Spoken' },
  },
];

export const showCaseProjects = [
  {
    id: 'skilled',
    imgPath: '/images/skilled.png',
    title: {
      pt: 'Skilled - Registro de Habilidades para Agentes de IA',
      en: 'Skilled - AI Skills Registry',
    },
    description: {
      pt:
        'Aplicação full-stack SSR com autenticação OAuth via Clerk, ' +
        'busca reativa com paginação e sistemas de votos e favoritos - ' +
        'da modelagem ao deploy em produção.',
      en:
        'A full-stack SSR app with OAuth authentication via Clerk, ' +
        'paginated reactive search, and a voting/favorites system - ' +
        'built end-to-end and shipped to production.',
    },
    liveUrl: 'https://skilled-iota.vercel.app',
    repoUrl: 'https://github.com/gabrielmilitaosantos/skilled',
  },
  {
    id: 'authentication-system',
    imgPath: '/images/authentication.webp',
    title: {
      pt: 'Sistema de Autenticação',
      en: 'Authentication System',
    },
    liveUrl: 'https://authentication-system-rose.vercel.app',
    repoUrl: 'https://github.com/gabrielmilitaosantos/authentication-system',
  },
  {
    id: 'food-order',
    imgPath: '/images/food-order.webp',
    title: {
      pt: 'Food Order - Uma Experiência Simples de Pedido de Comida',
      en: 'Food Order - A Simple Food Ordering Experience',
    },
    repoUrl: 'https://github.com/gabrielmilitaosantos/food-order',
  },
];
