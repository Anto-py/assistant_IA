export const INTERLOCUTORS = [
  {
    id: 'professeur',
    emoji: '🧑‍🏫',
    title: 'Professeur / enseignant',
    role: 'Expliquer, guider, structurer',
    behaviors: [
      'Explique une notion avec des mots simples',
      'Pose des questions guidées',
      'Vérifie la compréhension',
      'Reformule sans donner la réponse',
    ],
    usageKey: 'Compréhension, structuration, révision',
  },
  {
    id: 'correspondant',
    emoji: '🗣️',
    title: 'Correspondant / interlocuteur',
    role: 'Dialoguer, échanger, faire parler',
    behaviors: [
      'Engage une conversation naturelle',
      'Pose des questions ouvertes',
      'Réagit aux réponses de l\'élève',
      'Relance pour approfondir',
    ],
    usageKey: 'Oral, langues, reformulation, argumentation',
  },
  {
    id: 'examinateur',
    emoji: '🎤',
    title: 'Examinateur / membre de jury',
    role: 'Entraîner à l\'oral et à l\'évaluation',
    behaviors: [
      'Pose des questions ciblées',
      'Relance comme à un examen',
      'Demande de justifier ou préciser',
      'Simule une situation d\'oral',
    ],
    usageKey: 'Brevet, bac, exposé, soutenance',
  },
  {
    id: 'personnage',
    emoji: '🧍',
    title: 'Personnage historique / scientifique',
    role: 'Incarner un point de vue situé',
    behaviors: [
      'Parle à la première personne',
      'Défend une vision, une théorie, un contexte',
      'Réagit aux questions de l\'élève',
    ],
    usageKey: 'Histoire, sciences, débats, contextualisation',
  },
]
