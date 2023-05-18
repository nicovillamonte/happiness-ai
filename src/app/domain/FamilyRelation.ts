import { InventaryDTO } from '../DTO/inventary.dto';
import { QuestionaryDTO } from '../DTO/questionary.dto';
import { FAMILY_RELATION_QUEST } from '../JSON/family-relation.quest';

export class FamilyRelation {
  quest: InventaryDTO = FAMILY_RELATION_QUEST;

  constructor() {
    this.setDeafaultOptionValues();
  }

  private setDeafaultOptionValues() {
    // this.quest.questions.forEach((question) => {
    //   if (question.options.some((option) => option.value == null))
    //     question.options.forEach((option, i) => {
    //       option.value = i + 1;
    //     });
    // });
  }

  static getQuestionary(): InventaryDTO {
    return new FamilyRelation().quest;
  }
}
