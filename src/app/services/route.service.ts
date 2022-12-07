import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Route } from '../models/route';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  
  url='http://localhost:3000/api/route/'

  constructor(private http:HttpClient) { }
 
  getRoutes():Observable<any>{
    return this.http.get(this.url).pipe(map(res => {
      return res;
    }));
  }
  public createRoute(data:any):Observable<any>{
    return this.http.post(this.url+"create",data).pipe(map(res=>{   
      return res;
    }))
  }

  public removeRoute(route:Route){
    return this.http.delete(this.url+`delete/${route._id}`).pipe(map(res=>{
      return res;
    }));
  }
}
