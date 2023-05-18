// import { MentalHealthQuestionaryDTO } from '../DTO/mental-health.dto';
import { QuestionaryDTO } from '../DTO/questionary.dto';
import { SocialRelationType } from '../DTO/socialRelation.dto';

export function getResult(questionary: QuestionaryDTO): number {
  let result = 0;

  questionary.questions.forEach((question) => {
    if (question.valueChoiced == null)
      throw Error('Todos los campos son obligatorios.');
    result += question.valueChoiced ? question.valueChoiced : 0;
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
