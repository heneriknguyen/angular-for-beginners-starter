import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable() // Do not use providedIn: 'root'
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    // Replace with your actual API endpoint
    return this.http.get<any[]>('/api/data');
  }
}
