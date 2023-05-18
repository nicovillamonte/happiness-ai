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

export function getTotalResult(
  data: Data,
  interceptor: number,
  coef: number[]
): number {
  validateData(data);

  console.log(
    'A partir de aca',
    PurposeSense.toBinary(data.purposeSense!, 0),
    PurposeSense.toBinary(data.purposeSense!, 1),
    SocialRelation.toBinary(data.socialRelation!, 0),
    SocialRelation.toBinary(data.socialRelation!, 1)
  );

  // Variable dependiente = (9.84990982 * Variable independiente 2) + (4.8165206 * Variable independiente 3) - (9.63803728 * Variable independiente 4) + (9.92686583 * Variable independiente 5) - (0.38900715 * Variable independiente 6) - (0.23191042 * Variable independiente 7) + (0.65613902 * Variable independiente 8) + (0.10979604 * Variable independiente 9) + 39.783726008458174
  let result =
    9.84990982 * PurposeSense.toBinary(data.purposeSense!, 0) +
    4.8165206 * PurposeSense.toBinary(data.purposeSense!, 1) -
    9.63803728 * SocialRelation.toBinary(data.socialRelation!, 0) +
    9.92686583 * SocialRelation.toBinary(data.socialRelation!, 1) -
    0.38900715 * data.mentalHealth! -
    0.23191042 * data.user.MBI! +
    0.65613902 * data.emotionalHealth! +
    0.10979604 * data.familyRelation! +
    39.783726008458174;
  // Var2 y Var3 sense of purpose
  //    00 poor, 01 undefined, 10 strong
  // Var4 y var5 social relation
  //    00 moderate, 01 strong, 10 poor
  // Var6 Mental health
  // Var7 BMI
  // Var8 Emotional health
  // Var9 Family relation

  return result;
}
