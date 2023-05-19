import { throwError } from 'rxjs';
import { InventaryDTO } from '../DTO/inventary.dto';
import { FAMILY_RELATION_QUEST } from '../JSON/family-relation.quest';
import { validateInventary } from '../functions/validate';

export class FamilyRelation {
  quest: InventaryDTO = FAMILY_RELATION_QUEST;

  constructor() {
    validateInventary(this.quest);
  }

  static getInventary(): InventaryDTO {
    return new FamilyRelation().quest;
  }
}
