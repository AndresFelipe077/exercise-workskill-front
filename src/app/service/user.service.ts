import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:8000/storage/';


  private userId: string;
  private readonly userIdKey = 'userId';


  private readonly userDataKey = 'userData';

  constructor() {
    this.userId = localStorage.getItem(this.userIdKey)!;
  }

  // setUserId(userId: string) {
  //   this.userId = userId;
  //   localStorage.setItem(this.userIdKey, userId);
  // }

  // getUserId() {
  //   return this.userId;
  // }

  // clearUserId() {
  //   this.userId = null!;
  //   localStorage.removeItem(this.userIdKey);
  // }

  saveUserData(userData: any): void {
    localStorage.setItem(this.userDataKey, JSON.stringify(userData));
  }

  // getUserData(): any {
  //   const storedData = localStorage.getItem(this.userDataKey);
  //   if (storedData) {
  //     const userData = JSON.parse(storedData);
  //     const nuevaRuta = '/localhost:8000' + userData.user.urlFoto;
  //     userData.user.urlFoto = nuevaRuta;
  //     return userData;
  //     return userData;
  //   }
  //   return null;
  // }


  getUserData(): any {
    const storedData = localStorage.getItem(this.userDataKey);
    if (storedData) {
      const userData = JSON.parse(storedData);
      const nuevaRuta = this.baseUrl + userData.user.urlFoto;
      userData.user.urlFoto = nuevaRuta;
      return userData;
    }
    return null;
  }
  

  clearUserData(): void {
    localStorage.removeItem(this.userDataKey);
  }


}
