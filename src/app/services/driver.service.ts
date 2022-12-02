import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Driver } from '../models/driver';

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

  getOneDriver(data:any):Observable<any>{  
    console.log("service",data);
    
    return this.http.post(this.url+"drivers/getOne",data).pipe(map(res=>{   
      return res;
    }))
  }

  public createDriver(data:any):Observable<any>{
    return this.http.post(this.url+"drivers/create",data).pipe(map(res=>{   
      return res;
    }))
  }

}
