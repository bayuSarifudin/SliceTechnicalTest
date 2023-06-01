import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  url: string = '/assets/data.json';

  getData(): Observable<any> {
    return this.httpClient.get(this.url);
  }
}
