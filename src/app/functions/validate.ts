import { Data } from '../DTO/data.dto';
import { InventaryDTO } from '../DTO/inventary.dto';

export function validateInventary(inventary: InventaryDTO) {
  if (
    inventary.columnNames &&
    inventary.columnNames.length != inventary.numberOfValues
  )
    throw Error('El número de valores no coincide con el número de items.');

  return true;
}

export function validateData(data: Data) {
  // if (
  //   data.emotionalHealth &&
  //   data.familyRelation &&
  //   data.mentalHealth &&
  //   data.purposeSense &&
  //   data.socialRelation &&
  //   data.user &&
  //   data.user.name &&
  //   data.user.name.length > 0 &&
  //   data.user.MBI &&
  //   data.user.MBI > 0 &&
  //   data.user.age &&
  //   data.user.age > 0 &&
  //   data.user.country &&
  //   data.user.country.length > 0
  // ) {
  //   return true;
  // } else {
  //   throw new Error('Todos los campos son obligatorios.');
  // }
  return true;
}
