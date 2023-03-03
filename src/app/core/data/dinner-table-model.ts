export enum ItemType {
  Dish = "dishes",
  Plate = "plates",
  Present = "present"
}

export type TableItem = {
  type: ItemType;
  imgUrl: string;
  position: number;
}

export interface TableJson {
  tableUrl: string;
  dishes: { urls: string[], position: string[] };
  plates: { urls: string[], position: string[] };
}
