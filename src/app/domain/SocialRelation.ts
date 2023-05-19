import { QuestionaryDTO } from '../DTO/questionary.dto';
import { SocialRelationType } from '../DTO/socialRelation.dto';
import { SOCIAL_RELATION_CLASSIFICATION } from '../JSON/classification-values.json';
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

  static toBinary(type: SocialRelationType, index?: number): any {
    // console.log('BINARY');
    // console.log('Analizamos type: ', type);
    // console.log('Index: ', index);
    let socialRelationType = SOCIAL_RELATION_CLASSIFICATION.values.find(
      (value) => {
        return value.type == type;
      }
    );

    // console.log('socialType: ', socialRelationType);
    // console.log('socialType value: ', socialRelationType?.value);

    // if (index != null)
    //   console.log('getBit: ', socialRelationType?.value.getBit(index));
    // else console.log('getBinary: ', socialRelationType?.value.getBinary());

    return index != null
      ? socialRelationType?.value.getBit(index)
      : socialRelationType?.value.getBinary();
  }
}
