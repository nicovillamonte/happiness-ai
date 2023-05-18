import { QuestionaryDTO } from '../DTO/questionary.dto';
import { EMOTIONAL_HEALTH_QUEST } from '../JSON/emotional-health.quest';

export class EmotionalHealth {
  quest: QuestionaryDTO = EMOTIONAL_HEALTH_QUEST;

  constructor() {
    this.setDeafaultOptionValues();
  }

  private setDeafaultOptionValues() {
    this.quest.questions.forEach((question) => {
      if (question.options.some((option) => option.value == null))
        question.options.forEach((option, i) => {
          option.value = i + 1;
        });
    });
  }

  static getQuestionary(): QuestionaryDTO {
    return new EmotionalHealth().quest;
  }
}
