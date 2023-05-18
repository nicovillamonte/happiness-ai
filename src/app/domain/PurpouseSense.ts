import { InventaryDTO } from '../DTO/inventary.dto';
import { PurposeSenseType } from '../DTO/purposeSense.dto';
import { PURPOSE_SENSE_CLASSIFICATION } from '../JSON/classification-values.json';
import { PURPOSE_SENSE_QUEST } from '../JSON/purpose-sense.quest';
import { validateInventary } from '../functions/validate';

export class PurposeSense {
  quest: InventaryDTO = PURPOSE_SENSE_QUEST;

  constructor() {
    validateInventary(this.quest);
  }

  static getInventary(): InventaryDTO {
    return new PurposeSense().quest;
  }

  static toBinary(type: PurposeSenseType, index?: number): any {
    let purpouseType = PURPOSE_SENSE_CLASSIFICATION.values.find((value, i) => {
      value.type === type;
    });

    return index
      ? purpouseType?.value.getBit(index)
      : purpouseType?.value.getBinary();
  }
}
