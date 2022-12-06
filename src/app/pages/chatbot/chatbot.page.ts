import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Message } from 'src/app/models/message';
import { ChatbotService } from '../../services/chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],
})
export class ChatbotPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;
  @ViewChild('input') myInput ;

  public question: string;
  public messages: Message[]
  public time = new Date()


  scrollToBottom() {
    this.content.scrollToBottom(500);
  }

  ionViewDidEnter(){
    this.content.scrollToBottom(300);//300ms animation speed
  }

  ngOnInit(): void {
    
  }
  constructor(private chatBotService:ChatbotService) {}

  public addQuestion(){
    const question = {text:this.question}
    this.chatBotService.postQuestion(question).subscribe(res=>{
      console.log(res);      
      const message:Message = {message:question.text,time:new Date}
      this.chatBotService.addMessage(message);
      setTimeout(() => {
        const response:Message = {message:res,time:new Date}
        this.chatBotService.addMessage(response);
      }, 500);
    })
    this.messages = this.chatBotService.getMessages();
    this.question = ""
    this.myInput.setFocus()
    this.scrollToBottom()
    this.ionViewDidEnter()
  }

  clic(){
    this.addQuestion()
  }
}
