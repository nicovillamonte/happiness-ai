import { InventaryDTO } from '../DTO/inventary.dto';
import { FAMILY_RELATION_QUEST } from '../JSON/family-relation.quest';

export class FamilyRelation {
  quest: InventaryDTO = FAMILY_RELATION_QUEST;

  static getInventary(): InventaryDTO {
    return new FamilyRelation().quest;
  }
}
