export interface VerbChallenge {
  infinitive: string;
  correctForm: string;
  position: number;
}

export interface TextChallenge {
  id: string;
  title: string;
  textSegments: string[];
  verbs: VerbChallenge[];
}