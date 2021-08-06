import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api_url = "http://142.93.240.70:3000";
  resource: string;
  constructor(private httpClient: HttpClient) { }

  index(): Observable<any> {
    return this.httpClient.get(`${this.api_url}/${this.resource}`);
  }

  create(object: any): Observable<any> {
    return this.httpClient.post(`${this.api_url}/${this.resource}`, object);
  }

  update(object: any): Observable<any> {
    return this.httpClient.put(`${this.api_url}/${this.resource}/${object.id}`, object);
  }

  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${this.api_url}/${this.resource}/${id}`);
  }
}
