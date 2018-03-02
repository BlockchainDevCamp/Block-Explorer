import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:5555/';

@Injectable()
export class BlockService {

  constructor(private http: HttpClient) { }

  getAllBlocks(): Observable<Object> {
    return this.http.get(`${baseUrl}blocks`)
  }

  getBlockByIndex(index): Observable<Object> {
    return this.http.get(`${baseUrl}blocks/${index}`)
  }

  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  }
}
