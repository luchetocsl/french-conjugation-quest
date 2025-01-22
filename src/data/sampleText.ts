import { TextChallenge } from "../types/french";

export const sampleText: TextChallenge = {
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
};