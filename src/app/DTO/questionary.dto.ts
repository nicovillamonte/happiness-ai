export interface QuestionaryDTO {
  questions: QuestionDTO[];
}

export interface QuestionDTO {
  question: string;
  options: AnswerDTO[];
  valueChoiced?: number;
}

export interface AnswerDTO {
  answer: string;
  value?: number;
  choiced?: boolean;
}
