import { MENTAL_HEALTH_QUEST } from '../JSON/menta-health-quest';

export interface MentalHealthQuestionDTO {
  question: string;
  options: MentalHealthAnswerDTO[];
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

  questionary.questions
    .map((question) => {
      question.options.find((option) => option.choiced)?.value;
    })
    .forEach((value) => {
      if (value == null) {
        throw Error('Todos los campos son obligatorios.');
      }
      result += value;
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
