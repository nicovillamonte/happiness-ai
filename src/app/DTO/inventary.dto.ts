export interface InventaryDTO {
  items: ItemDTO[];
  numberOfValues: number;
  columnNames?: string[];
  startValue?: number;
}

export interface ItemDTO {
  left: string;
  right: string;
  order?: InventaryOrder;
  // value?: number;
  valueChoiced?: number;
  question?: string;
}

export enum InventaryOrder {
  NORMAL,
  INVERTED,
}
