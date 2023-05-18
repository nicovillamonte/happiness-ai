import { MENTAL_HEALTH_QUEST } from '../JSON/menta-health-quest';

export interface MentalHealthQuestionDTO {
  question: string;
  options: MentalHealthAnswerDTO[];
  valueChoiced?: number;
}

export interface MentalHealthAnswerDTO {
  answer: string;
  value?: number;
  choiced?: boolean;
}

export interface MentalHealthQuestionaryDTO {
  questions: MentalHealthQuestionDTO[];
}

export function getMentalHealthResult(
  questionary: MentalHealthQuestionaryDTO
): number {
  let result = 0;

  questionary.questions.forEach((question) => {
    if (question.valueChoiced == null)
      throw Error('Todos los campos son obligatorios.');
    result += question.valueChoiced ? question.valueChoiced : 0;
  });

  return result;
}

export class MentalHealth {
  quest: MentalHealthQuestionaryDTO = MENTAL_HEALTH_QUEST;

  constructor() {
    this.setDeafaultOptionValues();
  }

  private setDeafaultOptionValues() {
    this.quest.questions.forEach((question) => {
      if (question.options.some((option) => option.value == null))
        question.options.forEach((option, i) => {
          option.value = i;
        });
    });
  }

  getQuestionary(): MentalHealthQuestionaryDTO {
    return new MentalHealth().quest;
  }
}
