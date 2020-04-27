import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { GeneResult } from './../data/gene-result';
import { Observable } from 'rxjs';
import { Globals } from './../globals';

@Injectable({
  providedIn: 'root'
})
export class GeneResultsService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<GeneResult[]>
  {
    return this.http.get<GeneResult[]>(`${Globals.baseUrl}geneResults`);
  }
  update(item:GeneResult)
  {
    const params = new HttpParams().set('ID', item.id.toString());
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    GeneName:item.geneName,Result:item.result,Text:item.text,Id:item.id
             }
        return this.http.put<GeneResult>(Globals.baseUrl+'geneResults/'+item.id,body,{headers,params})

   // this.http.put(`${Globals.baseUrl}geneResults`,item)
  }
  add(item:GeneResult)
  {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      GeneName:item.geneName,Result:item.result,Text:item.text,Id:0
               }

  return this.http.post<GeneResult>(Globals.baseUrl+'geneResults',body,{headers})


  }
  delete(item:GeneResult)
  {
    /*
    const params = new HttpParams().set('ID', item.id.toString());
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      GeneName:item.geneName,Result:item.result,Text:item.text,Id:item.id
               }
               */
          return this.http.delete<GeneResult>(Globals.baseUrl+'geneResults/'+item.id)
  }


}
