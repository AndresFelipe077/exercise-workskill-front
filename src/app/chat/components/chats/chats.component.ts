import { Component } from '@angular/core';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {


  chats: any[] = [];
  newChat: string = '';
  userId: number = 1; // ID del usuario actual

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.getChats();
  }

  getChats() {
    this.chatService.getChats()
      .subscribe(chats => {
        this.chats = chats;
      });
  }

  sendChat() {
    if (this.newChat) {
      this.chatService.sendChat(this.newChat, this.userId)
        .subscribe(chat => {
          this.chats.push(chat);
          this.newChat = '';
        });
    }
  }

}
