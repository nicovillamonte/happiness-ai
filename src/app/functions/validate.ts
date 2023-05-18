import { InventaryDTO } from '../DTO/inventary.dto';

export function validateInventary(inventary: InventaryDTO) {
  if (
    inventary.columnNames &&
    inventary.columnNames.length != inventary.numberOfValues
  )
    throw Error('El número de valores no coincide con el número de items.');

  return true;
}
