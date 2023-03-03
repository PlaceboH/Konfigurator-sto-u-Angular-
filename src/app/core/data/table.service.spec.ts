import { TestBed } from '@angular/core/testing';
import { TableService } from './table.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { TABLE } from 'src/assets/test-data';

describe('TableServiceService', () => {

  const TABLE_API = 'http://localhost:3000/table';

  let tableService: TableService,
    httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [TableService]
    });

    tableService = TestBed.get(TableService),
    httpTestingController = TestBed.get(HttpTestingController);
});

  it('should be created', () => {
    expect(tableService).toBeTruthy();
  });

  it('should return data from json', () => {
    tableService.getDataFormJson().subscribe(data => {
      expect(data).toBeTruthy();
      expect(data?.tableUrl).toBe('assets/img/table.png');
    });

    const req = httpTestingController.expectOne(TABLE_API);

    expect(req.request.method).toEqual("GET");
  });

  it('should update data to json', () => {
    tableService.updateDataToJson(TABLE).subscribe(data => {
      expect(data).toBeTruthy();
      expect(data?.tableUrl).toBe('assets/img/table.png');
    });

    const req = httpTestingController.expectOne(TABLE_API);
    expect(req.request.method).toEqual("PUT");
  });
});
