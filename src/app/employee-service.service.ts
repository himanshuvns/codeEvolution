import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employees';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
private _url : string = "/assets/data/employee.json";

  constructor(private http:HttpClient) { }

  getEmployee(): Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this._url);
  }
}
