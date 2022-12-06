import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  private url='http://localhost:8000/';
  private messages: Message[] = [];

  constructor(private http:HttpClient) { }

  public addMessage(message:Message){
    this.messages.push(message);
  }

  public postQuestion(data:any):Observable<any>{
    return this.http.post(this.url+"question",data).pipe(map(res=>{
      return res;      
    }));
  }

  public getMessages():Message[]{
    return this.messages;
  }
}
