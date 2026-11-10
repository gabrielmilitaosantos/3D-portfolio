import type { en } from './en.ts';

export const pt = {
  hero: {
    titleLine1: 'Transformando',
    titleLine2: 'em Projetos Reais',
    titleLine3: 'que Entregam Resultados',
    subtitle: 'Olá, sou o Gabriel, desenvolvedor apaixonado por código.',
    cta: 'Ver Meu Trabalho',
  },
  experience: {
    title: 'Experiência e Formação',
    badge: '💼 Minha trajetória',
    highlights: 'Destaques',
    takeaway: 'Aprendizado',
  },
  skills: {
    badge: '🤝 Como Posso Contribuir',
    title: 'Principais Habilidades',
    toolsBadge: '🧰 Ferramentas',
    toolsTitle: 'Tecnologias com que Trabalho',
  },
  contact: {
    badge: '💬 Tem uma oportunidade ou uma ideia?',
    title: 'Vamos Conversar',
    name: { label: 'Seu nome', placeholder: 'Como você se chama?' },
    email: { label: 'Seu e-mail', placeholder: 'Qual é o seu e-mail?' },
    message: { label: 'Sua mensagem', placeholder: 'Como posso ajudar?' },
    send: 'Enviar mensagem',
    sending: 'Enviando...',
    success: 'Mensagem enviada! Responderei em breve.',
    error: 'Não foi possível enviar. Tente novamente em instantes',
    invalid: {
      name: 'Informe seu nome',
      email: 'Informe um e-mail válido.',
      message: 'Escreva uma mensagem.',
    },
  },
} satisfies typeof en;
