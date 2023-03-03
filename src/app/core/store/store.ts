import { Injectable } from "@angular/core";
import { TableItem } from "../data/dinner-table-model";

@Injectable({
	providedIn: 'root',
})
export class Store {
  tableJson: any;

  tableStates: TableItem[] = [];
}
