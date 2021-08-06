import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends ApiService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.resource = "contacts";
   }
}
