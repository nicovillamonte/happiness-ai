// import { MentalHealthQuestionaryDTO } from '../DTO/mental-health.dto';
import { Data } from '../DTO/data.dto';
import { InventaryDTO } from '../DTO/inventary.dto';
import { PurposeSenseType } from '../DTO/purposeSense.dto';
import { QuestionaryDTO } from '../DTO/questionary.dto';
import { SocialRelationType } from '../DTO/socialRelation.dto';
import { PurposeSense } from '../domain/PurpouseSense';
import { SocialRelation } from '../domain/SocialRelation';
import { validateData } from './validate';

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

export function resultToPurposeSenseType(result: number): PurposeSenseType {
  return result <= 89
    ? PurposeSenseType.POOR
    : result <= 104
    ? PurposeSenseType.UNDEFINED
    : PurposeSenseType.STRONG;
}

export function getTotalResult(data: Data): number {
  validateData(data);

  const purp1 = PurposeSense.toBinary(data.purposeSense!, 0);
  const purp2 = PurposeSense.toBinary(data.purposeSense!, 1);
  const social1 = SocialRelation.toBinary(data.socialRelation!, 0);
  const social2 = SocialRelation.toBinary(data.socialRelation!, 1);

  let result =
    9.84990982 * purp1 +
    4.8165206 * purp2 -
    9.63803728 * social1 +
    9.92686583 * social2 -
    0.38900715 * data.mentalHealth! -
    0.23191042 * data.user.MBI! +
    0.65613902 * data.emotionalHealth! +
    0.10979604 * data.familyRelation! +
    39.783726008458174;

  return result;
}
