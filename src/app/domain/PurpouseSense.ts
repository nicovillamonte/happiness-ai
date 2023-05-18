import { InventaryDTO } from '../DTO/inventary.dto';
import { PURPOSE_SENSE_QUEST } from '../JSON/purpose-sense.quest';

export class PurposeSense {
  quest: InventaryDTO = PURPOSE_SENSE_QUEST;

  static getInventary(): InventaryDTO {
    return new PurposeSense().quest;
  }
}
