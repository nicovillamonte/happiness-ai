import { PurposeSenseType } from './purposeSense.dto';
import { SocialRelationType } from './socialRelation.dto';

export interface Data {
  user: {
    name?: string;
    sex?: boolean;
    age?: number;
    MBI?: number;
    country?: string;
  };
  mentalHealth?: number;
  emotionalHealth?: number;
  socialRelation?: SocialRelationType;
  familyRelation?: number;
  purposeSense?: PurposeSenseType;
}
