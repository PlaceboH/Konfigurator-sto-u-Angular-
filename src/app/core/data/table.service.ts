import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableJson } from './dinner-table-model';

const TABLE_API = 'http://localhost:3000/table';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private httpClient: HttpClient) { }

  getDataFormJson(): Observable<any> {
    return this.httpClient.get(TABLE_API);
  }

  updateDataToJson(newTableData: TableJson): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.put(TABLE_API, newTableData, {
        headers: httpHeaders,
        observe: 'response'
     });
  }
}
