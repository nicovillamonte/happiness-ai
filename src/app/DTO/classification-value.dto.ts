import { Binary } from '../domain/Binary';

export interface ClassificationValues {
  values: {
    type: any;
    value: Binary;
  }[];
}
