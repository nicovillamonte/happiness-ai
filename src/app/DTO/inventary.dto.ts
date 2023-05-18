export interface InventaryDTO {
  items: ItemDTO[];
  numberOfValues: number;
  columnNames?: string[];
  question?: string;
  startValue?: number;
}

export interface ItemDTO {
  left: string;
  right: string;
  order?: InventaryOrder;
  valueChoiced?: number;
}

export enum InventaryOrder {
  NORMAL,
  INVERTED,
}
