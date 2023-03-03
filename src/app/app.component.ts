import { Component, OnInit } from '@angular/core';
import { ItemType } from './core/data/dinner-table-model';
import { TableService } from './core/data/table.service';
import { Store } from './core/store/store';
import { TableActions } from './core/store/table-actions';
import { Data } from './table-editor/table-editor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any;
  mode: string = 'present';

  constructor(
      private tableService: TableService,
      private tableActions: TableActions,
      private store: Store,
    ){}

  ngOnInit(): void {
    this.tableService.getDataFormJson().subscribe(data => {
      this.data = data;
      this.tableActions.commitTableJson(data);
    });
  }

  turnBack(): void {
    const romevedItem = this.tableActions.removeLastItem();
    let actualTable = this.store.tableJson;

    if (romevedItem) {
      actualTable[`${romevedItem.type}`].position[romevedItem.position] = "1";

      this.tableService.updateDataToJson(actualTable).subscribe(data => {
        this.tableActions.commitTableJson(data.body);
      });
    } else {
      console.log("cant turn back, because of no modification");
    }
  }

  getData(): Data {
    if (this.mode === 'plate') {
      return this.getPlateModeData();
    } else if (this.mode === 'dish') {
      return this.getDishModeData();
    } else {
      return this.getEmtyData();
    }
  }

  private getDishModeData(): Data {
    return {
      modeType: ItemType.Dish,
      position: this.data.dishes.position,
      urls: this.data.dishes.urls,
    }
  }

  private getPlateModeData(): Data {
    return {
      modeType: ItemType.Plate,
      position: this.data.plates.position,
      urls: this.data.plates.urls,
    }
  }

  private getEmtyData(): Data {
    return {
      modeType: ItemType.Present,
      position: [],
      urls: [],
    }
  }
}
