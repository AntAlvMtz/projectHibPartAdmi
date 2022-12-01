import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  url='http://localhost:3000/api/'

  constructor(private http: HttpClient) { }
  
  getDrivers():Observable<any>{
    return this.http.get(this.url+"drivers").pipe(map(res => {
      return res;
    }));
  }

}
