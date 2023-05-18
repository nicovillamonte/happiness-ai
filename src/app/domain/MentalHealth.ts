import { QuestionaryDTO } from '../DTO/questionary.dto';
import { MENTAL_HEALTH_QUEST } from '../JSON/mental-health.quest';

export class MentalHealth {
  quest: QuestionaryDTO = MENTAL_HEALTH_QUEST;

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

  static getQuestionary(): QuestionaryDTO {
    return new MentalHealth().quest;
  }
}
