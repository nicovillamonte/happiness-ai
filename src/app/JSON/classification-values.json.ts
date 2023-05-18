import { ClassificationValues } from '../DTO/classification-value.dto';
import { PurposeSenseType } from '../DTO/purposeSense.dto';
import { SocialRelationType } from '../DTO/socialRelation.dto';
import { Binary } from '../domain/Binary';

export const PURPOSE_SENSE_CLASSIFICATION: ClassificationValues = {
  values: [
    {
      type: PurposeSenseType.POOR,
      value: new Binary('00'),
    },
    {
      type: PurposeSenseType.UNDEFINED,
      value: new Binary('01'),
    },
    {
      type: PurposeSenseType.STRONG,
      value: new Binary('10'),
    },
  ],
};

export const SOCIAL_RELATION_CLASSIFICATION: ClassificationValues = {
  values: [
    {
      type: SocialRelationType.POOR,
      value: new Binary('10'),
    },
    {
      type: SocialRelationType.MODERATE,
      value: new Binary('00'),
    },
    {
      type: SocialRelationType.STRONG,
      value: new Binary('01'),
    },
  ],
};
