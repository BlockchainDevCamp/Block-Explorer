import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:5555/';

@Injectable()
export class GetBalanceService {

  constructor(private http: HttpClient) { }

  getBalance(address): Observable<Object> {
    return this.http.get(`${baseUrl}/addresses/${address}/balance`)
  }

  getTransactionFromAddress(address): Observable<Object> {
    return this.http.get(`${baseUrl}/addresses/${address}/transactions`)
  }
}
