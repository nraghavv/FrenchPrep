export interface Question {
  id: string;
  question: string;
  answer: string;
  tags: string[];
  year?: string;
  type: 'pyq' | 'practice';
  explanation?: string;
}

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}

export interface Material {
  title: string;
  type: 'handout' | 'cheat-sheet';
  driveLink?: string; // Link to the file on Google Drive
  slides: {
    header: string;
    content: string[];
  }[];
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  weightage: 'High' | 'Medium' | 'Low';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  isRepeated: boolean;
  explanation: string[];
  examples: Example[];
  pyqs: Question[];
  practice: Question[];
  tips: string[];
  materials?: Material[];
}

export const TOPICS: Topic[] = [
  {
    id: 'culture-expressions',
    name: 'Culture & Expressions',
    description: 'Master French symbols, geography, daily life facts, and common greetings.',
    weightage: 'High',
    difficulty: 'Easy',
    isRepeated: true,
    explanation: [
      '<b>L\'Hexagone:</b> The nickname for France because of its six-sided shape.',
      '<b>Symboles:</b> Le coq (rooster), Marianne (emblem), Le drapeau tricolore (Blue, White, Red).',
      '<b>La Devise:</b> Liberté, Égalité, Fraternité.',
      '<b>Salutations:</b> Bonjour (Formal), Bonsoir (Evening), Salut (Hi).',
      '<b>Days of the week:</b> Lundi, Mardi, Mercredi, Jeudi, Vendredi, Samedi, Dimanche.',
      '<b>Months:</b> Janvier, Février, Mars, Avril, Mai, Juin, Juillet, Août, Septembre, Octobre, Novembre, Décembre.'
    ],
    examples: [
      {
        input: 'Motto of France',
        output: '<span class="text-primary">Liberté, Égalité, Fraternité</span>',
      },
      {
        input: 'Enjoy your meal',
        output: '<span class="text-secondary">Bon appétit</span>',
      }
    ],
    pyqs: [
      { id: 'c1', question: "Le coq est l'un des symboles de la ______", answer: 'France', tags: ['Symbols'], type: 'pyq', explanation: 'The rooster is a historic symbol of the French nation.' },
      { id: 'c2', question: 'Quel est le monument très connu en France?', answer: 'La Tour Eiffel', tags: ['Monuments'], type: 'pyq', explanation: 'The Eiffel Tower is the most famous landmark in France.' },
      { id: 'c3', question: 'Quel est le nom du drapeau français?', answer: 'Tricolore', tags: ['Symbols'], type: 'pyq', explanation: 'The French flag is known as the "Tricolore" due to its blue, white, and red stripes.' },
      { id: 'c4', question: 'La devise de la France est ______', answer: 'Liberté, Égalité, Fraternité', tags: ['Motto'], type: 'pyq', explanation: 'These three words represent the values of the French Republic.' }
    ],
    practice: [],
    tips: [
      'Focus on the 14 Juillet and L\'Hexagone, they appear in almost every paper.',
      'Greetings are easy points - don\'t miss them!'
    ],
    materials: [
      {
        title: 'Session 2: Greetings',
        type: 'handout',
        driveLink: 'https://drive.google.com/file/d/1DG2lMHy204YhPLqjYsZNBi-X7uRVQ8jv/view?usp=drive_link',
        slides: [
          {
            header: 'Les Salutations (Formal vs Informal)',
            content: [
              'Bonjour (Hello/Good Day) - Use before 5 PM',
              'Bonsoir (Good Evening) - Use after 5 PM',
              'Salut (Hi/Hello) - Strictly casual/informal',
              'Madame (Ma\'am/Mme.) / Monsieur (Sir/M.) / Mademoiselle (Miss/Mlle.)'
            ]
          },
          {
            header: 'Dire Au Revoir (Farewells)',
            content: [
              'Au revoir (Standard Goodbye)',
              'À bientôt (See you soon)',
              'À demain (See you tomorrow)',
              'À tout à l\'heure (See you in a bit/same day)',
              'Ciao (Infomal - Goodbye)'
            ]
          }
        ]
      },
      {
        title: 'Session 8: Days & Months',
        type: 'handout',
        driveLink: 'https://drive.google.com/file/d/1E4PHJCtXsK15pIB7VwpXx9DaB0iUsV2T/view?usp=drive_link',
        slides: [
          {
            header: 'Les Jours de la Semaine',
            content: [
              'Lundi, Mardi, Mercredi, Jeudi, Vendredi, Samedi, Dimanche'
            ]
          },
          {
            header: 'Les Mois de l\'Année',
            content: [
              'Janvier, Février, Mars, Avril, Mai, Juin',
              'Juillet, Août, Septembre, Octobre, Novembre, Décembre'
            ]
          }
        ]
      },
      {
        title: 'Nationalities Reference',
        type: 'handout',
        driveLink: 'https://drive.google.com/file/d/16vEAUWtQG8b_VfhQEIGAnIPgdzZWsZUV/view?usp=drive_link',
        slides: [
          {
            header: 'Les Nationalités (Masculin / Féminin)',
            content: [
              'France: Français / Française',
              'États-Unis: Américain / Américaine',
              'Chine: Chinois / Chinoise',
              'Inde: Indien / Indienne'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'negation',
    name: 'Negation',
    description: 'Transforming affirmative sentences into negatives using "ne...pas".',
    weightage: 'High',
    difficulty: 'Medium',
    isRepeated: true,
    explanation: [
      'Basic Pattern: <b>Subject + ne + Verb + pas</b>.',
      'Articles change: <b>un, une, des, du</b> always become <b>de</b> or <b>d\'</b>.',
      'Exception: Articles do NOT change if the verb is <b>être</b>.'
    ],
    examples: [
      {
        input: 'J\'ai un livre.',
        output: 'Je <span class="text-secondary">n\'</span>ai <span class="text-secondary">pas de</span> livre.',
      }
    ],
    pyqs: [
      { id: 'n1', question: 'Il y a des embouteillages sur la route', answer: 'Il n’y a pas d’embouteillages sur la route', tags: ['Important'], type: 'pyq', explanation: 'The article "des" changes to "d\'" in a negative sentence.' },
      { id: 'n2', question: 'Ils ont des examens', answer: 'Ils n’ont pas d’examens', tags: ['Des change'], type: 'pyq', explanation: 'In negatives, indefinite articles like "des" become "de" or "d\'" before a noun.' }
    ],
    practice: [],
    tips: ['The "de" change is where most students lose marks. Double check "un/une/des/du".']
  },
  {
    id: 'articles-grammar',
    name: 'Articles & Grammar',
    description: 'Fill in with definite articles and prepositional orientations.',
    weightage: 'Medium',
    difficulty: 'Easy',
    isRepeated: true,
    explanation: [
      '<b>Definite Articles:</b> le (m), la (f), les (pl), l\' (vowel).',
      '<b>Orientation:</b> en face de (opposite), devant (in front), derrière (behind).'
    ],
    examples: [],
    pyqs: [
      { id: 'a1', question: '____ huile est de quelle marque?', answer: 'L\'', tags: ['Vowel'], type: 'pyq', explanation: '"Huile" starts with a silent H (vowel sound), so we use "L\'".' },
      { id: 'a2', question: '____ mains sont gris aujourd\'hui', answer: 'Les', tags: ['Plural'], type: 'pyq', explanation: '"Mains" is plural, so the definite article is "Les".' }
    ],
    practice: [],
    tips: [],
    materials: [
      {
        title: 'Session 8.2: Definite Articles',
        type: 'handout',
        driveLink: 'https://drive.google.com/file/d/1bbjno-xNWeG43M_-jlGErRbZqoIGOchG/view?usp=drive_link',
        slides: [
          {
            header: 'The 4 Articles Définis',
            content: [
              'Le (Masculine Singular)',
              'La (Feminine Singular)',
              'L\' (Used before vowels or silent H)',
              'Les (Plural - Masc/Fem/Vowel)'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'possessives',
    name: 'Adjectives (Possessive)',
    description: 'Agreement of my, your, his, her, our, their.',
    weightage: 'High',
    difficulty: 'Medium',
    isRepeated: true,
    explanation: [
      '<b>Singular:</b> mon/ma, ton/ta, son/sa.',
      '<b>Plural:</b> notre/nos, votre/vos, leur/leurs.'
    ],
    examples: [],
    pyqs: [
      { id: 'ap1', question: '____ chien ne mange pas (my)', answer: 'Mon', tags: ['Masc'], type: 'pyq', explanation: '"Chien" is masculine singular, so "My" becomes "Mon".' }
    ],
    practice: [],
    tips: ['Remember the feminine vowel rule: use MON even if the word is feminine if it starts with a vowel!'],
    materials: [
      {
        title: 'Session 7: Possessive Adjectives',
        type: 'handout',
        driveLink: 'https://drive.google.com/file/d/1TKvaZMTQDCSuJtHss5eOlt2H0TkVuJ2o/view?usp=drive_link',
        slides: [
          {
            header: 'Singular Adjectives Reference',
            content: [
              'Je (My): Mon (m), Ma (f), Mes (pl)',
              'Tu (Your): Ton (m), Ta (f), Tes (pl)',
              'Il/Elle (His/Her): Son (m), Sa (f), Ses (pl)'
            ]
          }
        ]
      },
      {
        title: 'General Adjectives Sheet',
        type: 'handout',
        driveLink: 'https://drive.google.com/file/d/18865WoPD-YlaQsQwLEtUk3XG_Jm4zLjd/view?usp=drive_link',
        slides: [
          {
            header: 'Agreement Rules',
            content: [
              'Adjectives must match gender and number of the noun they describe.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'verbs-tenses',
    name: 'Verbs & Tenses',
    description: 'Être, Avoir and Pronominal verbs conjugation.',
    weightage: 'High',
    difficulty: 'Hard',
    isRepeated: true,
    explanation: [
      '<b>Être (To Be):</b> suis, es, est, sommes, êtes, sont.',
      '<b>Avoir (To Have):</b> ai, as, a, avons, avez, ont.',
      '<b>Pronominals:</b> reflexive pronoun (me, te, se, nous, vous, se) + verb.'
    ],
    examples: [],
    pyqs: [
      { id: 'v1', question: 'Je ____ (être)', answer: 'suis', tags: ['Conjugation'], type: 'pyq', explanation: 'This is the standard present tense conjugation of "être" for "Je".' }
    ],
    practice: [],
    tips: [],
    materials: [
      {
        title: 'Session 5.2: Etre & Avoir',
        type: 'handout',
        driveLink: 'https://drive.google.com/file/d/1FtPHHFCptZsJ8BHkqynvZRyXbqliD9we/view?usp=drive_link',
        slides: [
          {
            header: 'Être (To Be) Conjugation',
            content: [
              'Je suis, Tu es, Il/Elle est',
              'Nous sommes, Vous êtes, Ils/Elles sont'
            ]
          }
        ]
      },
      {
        title: 'Les Verbes Prominaux',
        type: 'handout',
        driveLink: 'https://drive.google.com/file/d/1JKLm2VqbuRsHzHEzYxoVlzlsJvTGtyT0/view?usp=drive_link',
        slides: [
          {
            header: 'Reflexive Verbs',
            content: [
              'Je me, Tu te, Il se...',
              'Example: Se laver (To wash oneself)'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'time-numbers',
    name: 'Numbers & Time',
    description: 'Writing numbers in letters and telling time correctly.',
    weightage: 'Medium',
    difficulty: 'Medium',
    isRepeated: true,
    explanation: [
      '<b>Time:</b> Use 24h clock or "et quart", "et demie", "moins le quart".',
      '<b>Numbers:</b> 0-70 included in basic syllabus.'
    ],
    examples: [],
    pyqs: [
      { id: 't1', question: '16h00', answer: 'Seize heures', tags: ['Time'], type: 'pyq', explanation: 'In formal time (24h format), 16:00 is written as "Seize heures".' },
      { id: 't4', question: '12h00', answer: 'Midi', tags: ['Special Time'], type: 'pyq', explanation: 'Midday is always referred to as "Midi" in French.' }
    ],
    practice: [],
    tips: ['Wait for 00h00 - it is "Minuit". 12h00 is "Midi".'],
    materials: [
      {
        title: 'Session 6: L\'Heure',
        type: 'handout',
        driveLink: 'https://drive.google.com/file/d/1SO5XtHHHfRjSCYJo_VRmY9yM2_n9Qi0M/view?usp=drive_link',
        slides: [
          {
            header: 'Standard Time Format',
            content: [
              'Quelle heure est-il? (What time is it?)',
              '1h: Il est une heure',
              '2h: Il est deux heures',
              '5h15: Cinq heures et quart'
            ]
          },
          {
            header: 'Subtractive & Special Time',
            content: [
              '6h30: Six heures et demie',
              '7h40: Huit heures moins vingt',
              '8h45: Neuf heures moins le quart',
              '12h00: Midi (Noon)',
              '00h00: Minuit (Midnight)'
            ]
          }
        ]
      },
      {
        title: 'Session 4.1: Les Nombres (0-70)',
        type: 'handout',
        driveLink: 'https://drive.google.com/file/d/1e20O0A7VGyvf6UQJ9w5xzIpuvGKFQykv/view?usp=drive_link',
        slides: [
          {
            header: 'Numbers 0-20',
            content: [
              'Zero, Un, Deux, Trois, Quatre, Cinq, Six, Sept, Huit, Neuf, Dix',
              'Onze, Douze, Treize, Quatorze, Quinze, Seize, Dix-sept, Dix-huit, Dix-neuf, Vingt'
            ]
          },
          {
            header: 'Higher Numbers (21-70)',
            content: [
              'Vingt et un (21), Trente (30), Quarante (40), Cinquante (50), Soixante (60)',
              'Soixante-dix (70 - Sixty-Ten)'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'interrogatives-quantity',
    name: 'Interrogatives & Quantity',
    description: 'Questions and measurement expressions.',
    weightage: 'Medium',
    difficulty: 'Medium',
    isRepeated: true,
    explanation: [
      '<b>Interrogatives:</b> Comment (How), Où (Where), Quand (When), Pourquoi (Why), Combien de (How many).',
      '<b>Quantity:</b> Trop de (too much of), Beaucoup de (a lot of), Peu de (a little of).'
    ],
    examples: [],
    pyqs: [
      { id: 'i1', question: '____ allez-vous? (Je vais à l\'université.)', answer: 'Où', tags: ['Interrogative'], type: 'pyq', explanation: 'Since the response is a place (the university), the question word must be "Où" (Where).' },
      { id: 'i2', question: '____ partez-vous? (Je pars vendredi.)', answer: 'Quand', tags: ['Interrogative'], type: 'pyq', explanation: 'Since the response is a time (Friday), the question word is "Quand" (When).' },
      { id: 'i3', question: '____ de chocolats voulez-vous?', answer: 'Combien', tags: ['Interrogative'], type: 'pyq', explanation: '"Combien de" is the standard phrase for "How many".' },
      { id: 'q1', question: 'Le professeur a du travail (trop de)', answer: 'Le professeur a trop de travail', tags: ['Quantity'], type: 'pyq', explanation: '"Trop de" replaces the partitive article "du" to indicate a specific excess quantity.' },
      { id: 'q2', question: 'Je mange des fruits (beaucoup de)', answer: 'Je mange beaucoup de fruits', tags: ['Quantity'], type: 'pyq', explanation: '"Beaucoup de" replaces "des" to indicate a large quantity.' }
    ],
    practice: [],
    tips: [],
    materials: [
      {
        title: 'Interrogatives Guide',
        type: 'handout',
        driveLink: 'https://drive.google.com/file/d/1zB4v76NIJKi8CxQxd72Q5XoiXoXnyjY6/view?usp=drive_link',
        slides: [
          {
            header: 'Les Mots Interrogatifs',
            content: [
              'Comment, Où, Quand, Pourquoi, Combien de'
            ]
          }
        ]
      },
      {
        title: 'La Vie Quotidienne',
        type: 'handout',
        driveLink: 'https://drive.google.com/file/d/15TSzsIz7NbttZLqDHk5_4rtUT03Qxjwz/view?usp=drive_link',
        slides: [
          {
            header: 'Daily Routine',
            content: [
              'Describing daily habits and times.'
            ]
          }
        ]
      }
    ]
  }
];
