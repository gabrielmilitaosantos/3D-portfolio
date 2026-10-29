import {
  siReact,
  siNodedotjs,
  siPostgresql,
  siJsonwebtokens,
  siDocker,
  siJavascript,
  siTypescript,
  siHtml5,
  siNextdotjs,
  siTailwindcss,
  siExpress,
  siNestjs,
  siMongodb,
  siPrisma,
  siDrizzle,
  siGithubactions,
  siJest,
  siGit,
  siVercel,
} from 'simple-icons';

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
    label: { pt: 'Idiomas', en: 'Languages' },
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
        'bcrypt-hashed passwords, plus RBAC and rate limiting in the APIs ' +
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

export const expCards = [
  {
    id: 'independent',
    logoPath: '/images/independent.png',
    title: {
      pt: 'Projetos Independentes e Estudo Contínuo',
      en: 'Independent Projects & Continuous Study',
    },
    date: { pt: '2024 - Presente', en: '2024 - Present' },
    highlights: {
      pt: [
        'Aplicações full-stack publicadas em produção, como o Skilled ' +
          'e o Sistema de Autenticação.',
        'API REST pronta para produção, com RBAC, proteção contra DDoS, ' +
          'rate-limiting e CI/CD.',
        'Estudo de tecnologias recentes, como React, TanStack Start, NestJS e ' +
          'Tailwind.',
      ],
      en: [
        'Full-stack applications shipped to production, such as Skilled and ' +
          'the Authentication System.',
        'Production-ready REST API with RBAC, DDoS protection, rate limiting ' +
          'and CI/CD.',
        'Study of recent technologies, such as React, TanStack Start, NestJS ' +
          'and Tailwind.',
      ],
    },
    takeaway: {
      pt:
        'Sem time nem prazo imposto, aprendi a escolher arquitetura, definir ' +
        'escopo e levar projetos até o deploy.',
      en:
        'With no team and no imposed deadlines, I learned to choose architecture, ' +
        'define scope and take projects all the way to deploy.',
    },
    listLabel: {
      pt: 'Destaques',
      en: 'Highlights',
    },
  },
  {
    id: 'pgfn',
    logoPath: '/images/logo-pgfn.png',
    title: {
      pt: 'Desenvolvedor Backend Júnior',
      en: 'Junior Backend Developer',
    },
    org: {
      pt: 'Procuradoria-Geral da Fazenda Nacional (PGFN)',
      en: "Attorney General's Office for the National Treasury (PGFN)",
    },
    date: { pt: 'out 2021 - dez 2023', en: 'Oct 2021 - Dec 2023' },
    listLabel: {
      pt: 'Responsabilidades',
      en: 'Responsibilities',
    },
    highlights: {
      pt: [
        'Automações de web scraping em Node.js para coleta e consolidação de dados.',
        'Manutenção de sistemas internos e melhorias solicitadas pela diretoria.',
        'Ferramenta interna de controle de ponto para a equipe de estagiários.',
      ],
      en: [
        'Web scraping automations in Node.js for data collection and consolidation.',
        'Maintenance of internal systems and improvements requested by management.',
        'Internal attendance-tracking tool for the intern team.',
      ],
    },
    takeaway: {
      pt:
        'Aprendi a manter sistemas em produção e a transformar pedidos da ' +
        'diretoria em requisitos claros.',
      en:
        'I learned to maintain production systems and turn management requests ' +
        'into clear requirements.',
    },
  },
  {
    id: 'unip',
    logoPath: '/images/logo-unip.png',
    title: {
      pt: 'Bacharelado em Ciência da Computação',
      en: "Bachelor's Degree in Computer Science",
    },
    org: {
      pt: 'Universidade Paulista (UNIP)',
      en: 'Universidade Paulista (UNIP)',
    },
    date: { pt: '2020 - 2023', en: '2020 - 2023' },
    listLabel: {
      pt: 'Destaques',
      en: 'Highlights',
    },
    highlights: {
      pt: [
        'TCC: plataforma web sem fins lucrativos que conectava doadores a ' +
          'organizações parceiras.',
      ],
      en: [
        'Capstone project: non-profit web platform connecting donors with ' +
          'partner organizations.',
      ],
    },
    takeaway: {
      pt:
        'Conciliei estudo e trabalho como desenvolvedor por mais de dois anos ' +
        'e concluí a graduação com um projeto de cunho social.',
      en:
        'I balanced study and a developer job for over two years and finished ' +
        'my degree with a socially focused project.',
    },
  },
];

export const skillCards = [
  {
    id: 'frontend',
    title: { pt: 'Frontend', en: 'Frontend' },
    icon: siReact,
  },
  {
    id: 'backend',
    title: { pt: 'Backend', en: 'Backend' },
    icon: siNodedotjs,
  },
  {
    id: 'database',
    title: { pt: 'Banco de Dados', en: 'Databases' },
    icon: siPostgresql,
  },
  {
    id: 'security',
    title: { pt: 'Segurança', en: 'Security' },
    icon: siJsonwebtokens,
  },
  {
    id: 'devops',
    title: { pt: 'DevOps', en: 'DevOps' },
    icon: siDocker,
  },
];

export const techRows = [
  {
    id: 'languages-frameworks',
    label: {
      pt: 'Linguagens e frameworks',
      en: 'Languages and frameworks',
    },
    items: [
      siTypescript,
      siJavascript,
      siReact,
      siHtml5,
      siNextdotjs,
      siTailwindcss,
      siNodedotjs,
      siExpress,
      siNestjs,
    ],
  },
  {
    id: 'data-infra-quality',
    label: {
      pt: 'Dados, infraestrutura e qualidade',
      en: 'Data, infrastructure and quality',
    },
    items: [
      siPostgresql,
      siMongodb,
      siPrisma,
      siDrizzle,
      siDocker,
      siGithubactions,
      siJest,
      siGit,
      siVercel,
    ],
  },
];
