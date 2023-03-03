import { Component } from '@angular/core';
import { TableJson } from '../core/data/dinner-table-model';
import { Store } from '../core/store/store';

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.scss']
})
export class ShowTableComponent {
  presentData: TableJson;
  constructor(store: Store) {
    this.presentData = store.tableJson;
  }
}
