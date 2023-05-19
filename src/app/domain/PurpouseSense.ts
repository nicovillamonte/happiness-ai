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
    // console.log('Analizamos type: ', type);
    // console.log('Index: ', index);
    let purpouseType = PURPOSE_SENSE_CLASSIFICATION.values.find((value) => {
      console.log(value.type, ' == ', type);
      return value.type == type;
    });

    // console.log('purpouseType: ', purpouseType);
    // console.log('purpouseType value: ', purpouseType?.value);

    // if (index != null)
    //   console.log('getBit: ', purpouseType?.value.getBit(index));
    // else console.log('getBinary: ', purpouseType?.value.getBinary());

    return index != null
      ? purpouseType?.value.getBit(index)
      : purpouseType?.value.getBinary();
  }
}
