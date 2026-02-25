// Sections principales de l'application
export const NAV_SECTIONS = [
  {
    id: 'typologie',
    title: 'Typologie des chatbots',
    description:
      'Matrice croisant intentions pédagogiques et moments d\'apprentissage pour identifier le type de chatbot adapté.',
    emoji: '🤖',
    path: '/typologie',
    color: 'border-edhuman-blue/30 hover:border-edhuman-blue/60 hover:bg-edhuman-blue/5',
  },
  {
    id: 'regles',
    title: 'Règles comportementales',
    description:
      '10 catégories de règles pour définir comment le chatbot doit interagir avec l\'élève.',
    emoji: '📋',
    path: '/regles',
    color: 'border-edhuman-orange/30 hover:border-edhuman-orange/60 hover:bg-edhuman-orange/5',
  },
  {
    id: 'interlocuteurs',
    title: 'Types d\'interlocuteurs',
    description: '4 postures que peut adopter le chatbot selon l\'objectif pédagogique visé.',
    emoji: '🎭',
    path: '/interlocuteurs',
    color: 'border-edhuman-blue/30 hover:border-edhuman-blue/60 hover:bg-edhuman-blue/5',
  },
]

// Plateformes externes recommandées
export const PLATFORMS = [
  {
    id: 'didakbot',
    name: 'DidakBot',
    description: 'Plateforme de création de chatbots pédagogiques avec interface intuitive.',
    url: 'https://novapeda.eu/didakbot2',
    emoji: '🤖',
  },
  {
    id: 'chatmd',
    name: 'ChatMD',
    description:
      'Outil open-source pour créer des chatbots en Markdown, hébergé par l\'Éducation nationale.',
    url: 'https://chatmd.forge.apps.education.fr/docs/',
    emoji: '💬',
  },
  {
    id: 'mizou',
    name: 'Mizou',
    description: 'Solution de création de chatbots éducatifs avec personnalisation avancée.',
    url: 'https://mizou.com/bot',
    emoji: '🎓',
  },
  {
    id: '1cours1bot',
    name: '1cours1bot',
    description: 'Plateforme française dédiée à la création de chatbots pour l\'enseignement.',
    url: 'https://1cours1bot.fr/public/',
    emoji: '📚',
  },
]
