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
  value?: number;
  valueChoiced?: number;
}

export enum InventaryOrder {
  NORMAL,
  INVERTED,
}
