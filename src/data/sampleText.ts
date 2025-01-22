import { TextChallenge } from "../types/french";

export const sampleText: TextChallenge[] = [
  {
    id: "1",
    title: "Ma Routine Quotidienne",
    textSegments: [
      "Chaque matin, je ",
      " à 7 heures. Après, je ",
      " mon petit-déjeuner et je ",
      " au travail.",
    ],
    verbs: [
      {
        infinitive: "se lever",
        correctForm: "me lève",
        position: 0,
      },
      {
        infinitive: "prendre",
        correctForm: "prends",
        position: 1,
      },
      {
        infinitive: "aller",
        correctForm: "vais",
        position: 2,
      },
    ],
  },
  {
    id: "2",
    title: "Un Weekend à Paris",
    textSegments: [
      "Le weekend dernier, nous ",
      " à Paris en train. Quand nous ",
      " à la gare, il ",
      " déjà tard. Nous ",
      " directement à l'hôtel et ",
      " nos bagages avant de sortir dîner.",
    ],
    verbs: [
      {
        infinitive: "aller",
        correctForm: "sommes allés",
        position: 0,
      },
      {
        infinitive: "arriver",
        correctForm: "sommes arrivés",
        position: 1,
      },
      {
        infinitive: "être",
        correctForm: "était",
        position: 2,
      },
      {
        infinitive: "aller",
        correctForm: "sommes allés",
        position: 3,
      },
      {
        infinitive: "déposer",
        correctForm: "avons déposé",
        position: 4,
      },
    ],
  },
];