import { Injectable } from "@angular/core";
import { TableItem } from "../data/dinner-table-model";
import { Store } from "./store";

@Injectable({
	providedIn: 'root',
})
export class TableActions {

	constructor(private store: Store) {}

  commitTableJson(table: any): void {
    this.store.tableJson = table;
  }

  addItem(item: TableItem): void {
    this.store.tableStates.push(item);
  }

  removeLastItem(): TableItem | undefined {
    return this.store.tableStates.pop();
  }
}
