import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  
  private baseUrl = 'http://localhost:8080/alert-crud-rest/alertapi/alerts';

  constructor(private http: HttpClient) { }

  getAlert(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAlert(alert: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, alert);
  }

  updateAlert(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAlert(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
  getAlertList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
