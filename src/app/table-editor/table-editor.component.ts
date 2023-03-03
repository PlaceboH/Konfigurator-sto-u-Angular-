import { Component, Input, OnInit } from '@angular/core';
import { ItemType } from '../core/data/dinner-table-model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SelectItemComponent } from './select-item/select-item.component';

export type Data = {
  modeType: ItemType;
  position: string[];
  urls: string[];
}

@Component({
  selector: 'app-table-editor',
  templateUrl: './table-editor.component.html',
  styleUrls: ['./table-editor.component.scss']
})
export class TableEditorComponent {

  @Input() data: Data | undefined;

  constructor(private dialog: MatDialog) { }

  openSelectDialog(position: number): void {
    const selectDialogConfig = new MatDialogConfig();
    selectDialogConfig.width = '400px';
    selectDialogConfig.data = {
        type: this.data?.modeType,
        items: this.data?.urls,
        position: position,
    };
    this.dialog.open(SelectItemComponent, selectDialogConfig);
  }

}
