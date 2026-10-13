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

export const navLinks = [
  {
    id: 'work',
    name: { pt: 'Trabalho', en: 'Work' },
    link: '#work',
  },
  {
    id: 'experience',
    name: { pt: 'Experiência', en: 'Experience' },
    link: '#experience',
  },
  {
    id: 'skills',
    name: { pt: 'Habilidades', en: 'Skills' },
    link: '#skills',
  },
];

export const contactLink = {
  name: { pt: 'Contato', en: 'Contact' },
  link: '#contact',
};

export const abilities = [
  {
    id: 'code',
    imgPath: '/images/code.png',
    title: { pt: 'Boas Práticas de Código', en: 'Code Best Practices' },
    desc: {
      pt:
        'TypeScript, validação com Zod, testes com Jest e CI/CD no ' +
        'GitHub Actions: código que continua legível e confiável conforme ' +
        'o projeto cresce.',
      en:
        'TypeScript, Zod validation, Jest tests and CI/CD on GitHub ' +
        'Actions: code that stays readable and reliable as the project grows.',
    },
  },
  {
    id: 'security',
    imgPath: '/images/security.png',
    title: { pt: 'Segurança em Primeiro Lugar', en: 'Security First' },
    desc: {
      pt:
        'OAuth 2.0, JWT em cookies httpOnly, verificação por OTP e senhas ' +
        'com hash bcrypt, além de RBAC e rate limiting nas APIs que construo.',
      en:
        'OAuth 2.0, JWTs in httpOnly cookies, OTP verification and ' +
        'bcrypt-hashed passwords, plus RABC and rate limiting in the APIs ' +
        'I build.',
    },
  },
  {
    id: 'learn',
    imgPath: '/images/learn.png',
    title: { pt: 'Aprendizado Contínuo', en: 'Continuous Learning' },
    desc: {
      pt:
        'Da graduação ao backend profissional e agora ao full-stack: ' +
        'aprendo construindo projetos para testar o que há de novo.',
      en:
        'From my degree to a professional backend role and now ' +
        'full-stack: I learn by building projects to try what is new.',
    },
  },
];
