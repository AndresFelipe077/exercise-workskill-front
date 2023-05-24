import { Component } from '@angular/core';
import { ChatService } from 'src/app/service/chat.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {

  userData: any;

  chats: any[] = [];
  newChat: string = '';

  constructor(
    private chatService: ChatService,
    private userService: UserService,

  ) { }

  ngOnInit() {
    this.getChats();
    this.userData = this.userService.getUserData();
  }

  getChats() {
    this.chatService.getChats()
      .subscribe(chats => {
        this.chats = chats;
        console.log(this.chats)
      });
  }

  sendChat() {
    console.log(this.userData.user.id)
    if (this.newChat) {
      this.chatService.sendChat(this.newChat, this.userData.user.id)
        .subscribe(chat => {
          this.chats.push(chat);
          this.newChat = '';
        });
    }
  }

}
