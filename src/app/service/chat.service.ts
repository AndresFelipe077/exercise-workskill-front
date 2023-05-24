import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = 'http://localhost:8000/api/chat';

  constructor(
    private http: HttpClient

  ) { }

    getChats(): Observable<any>
    {
      return this.http.get<any>(this.apiUrl);
    }

    sendChat(mensajes: string, userId: number): Observable<any>
    {
      const chat = { mensajes, idUser: userId};
      return this.http.post<any>(this.apiUrl, chat);
    }

}
