import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:5555/';

@Injectable()
export class TrasactionService {

  constructor(private http: HttpClient) { }

  getTransaction(txHash): Observable<Object> {
    return this.http.get(`${baseUrl}transactions/${txHash}`)
  }
}
