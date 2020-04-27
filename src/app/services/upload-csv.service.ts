import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class UploadCsvService {

  constructor(private http: HttpClient) { }
  getAll()
  {
    return this.http.get<any>(`${Globals.baseUrl}uploadCsv`);
  }
 
}
