import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ItemType } from './core/data/dinner-table-model';
import { TableService } from './core/data/table.service';
import { Store } from './core/store/store';
import { TableActions } from './core/store/table-actions';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;
  let tableService: TableService;
  let store: Store;


  beforeEach(async () => {

    const tableServiceSpy = jasmine.createSpyObj('TableService', ['updateDataToJson']);
    const tableActionsSpy = jasmine.createSpyObj('TableActions', ['removeLastItem']);

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: TableService, useValue: tableServiceSpy},
        {provide: TableActions, useValue: tableActionsSpy},
        {provide: Store},
      ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        tableService = TestBed.get(TableService);
        store = TestBed.get(Store);
    });
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should not turn back', () => {
    component.turnBack();

    expect(console.log);
  });
});
