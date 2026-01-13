
export enum AppStep {
  HERO = 'HERO',
  QUIZ = 'QUIZ',
  LOADING = 'LOADING',
  RESULT = 'RESULT'
}

export interface QuizOption {
  id: string;
  text: string;
  imageUrl?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  microcopy: string;
  options: QuizOption[];
  type: 'text' | 'image' | 'photo';
}
