import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableEditorComponent } from './table-editor/table-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import {MatSelectModule} from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { SelectItemComponent } from './table-editor/select-item/select-item.component';
import { MatButtonModule } from '@angular/material/button';
import { ShowTableComponent } from './show-table/show-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableEditorComponent,
    SelectItemComponent,
    ShowTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
