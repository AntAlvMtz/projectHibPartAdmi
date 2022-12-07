import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

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
}
