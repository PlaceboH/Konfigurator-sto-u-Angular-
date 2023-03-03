import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableService } from 'src/app/core/data/table.service';
import { Store } from 'src/app/core/store/store';
import { TableActions } from 'src/app/core/store/table-actions';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html'
})
export class SelectItemComponent {
  selectItemControl = new FormControl('item', Validators.required);

  constructor(
    private dialogRef: MatDialogRef<SelectItemComponent>,
    private tableService: TableService,
    private tableActions: TableActions,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  submit(): void {
    const itemType = this.data.type;
    const index = this.data.position;
    const nameUrl = this.selectItemControl.value;

    this.tableActions.addItem({
      type: itemType,
      imgUrl: nameUrl,
      position: this.data.position
    });

    let newTableData = this.store.tableJson;
    newTableData[`${itemType}`].position[index] = nameUrl;
    this.tableService.updateDataToJson(newTableData).subscribe(data => {
      this.tableActions.commitTableJson(data.body);
    });

    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
