import { QuestionaryDTO } from '../DTO/questionary.dto';
import { SOCIAL_RELATION_QUEST } from '../JSON/social-relation.quest';

export class SocialRelation {
  quest: QuestionaryDTO = SOCIAL_RELATION_QUEST;

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
    return new SocialRelation().quest;
  }
}
