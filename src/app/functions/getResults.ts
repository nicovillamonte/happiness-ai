// import { MentalHealthQuestionaryDTO } from '../DTO/mental-health.dto';
import { InventaryDTO } from '../DTO/inventary.dto';
import { QuestionaryDTO } from '../DTO/questionary.dto';
import { SocialRelationType } from '../DTO/socialRelation.dto';

export function getQuestionaryResult(questionary: QuestionaryDTO): number {
  let result = 0;

  questionary.questions.forEach((question) => {
    if (question.valueChoiced == null)
      throw Error('Todos los campos son obligatorios.');
    result += question.valueChoiced;
  });

  return result;
}

export function getInventaryResult(inventary: InventaryDTO): number {
  let result = 0;

  inventary.items.forEach((item) => {
    if (item.valueChoiced == null)
      throw Error('Todos los campos son obligatorios.');
    result += item.valueChoiced;
  });

  return result;
}

export function resultToSocialRelationType(result: number): SocialRelationType {
  return result <= 8
    ? SocialRelationType.POOR
    : result <= 11
    ? SocialRelationType.MODERATE
    : SocialRelationType.STRONG;
}
