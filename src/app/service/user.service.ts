import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  getUserData(): any {
    const storedData = localStorage.getItem(this.userDataKey);
    if (storedData) {
      return JSON.parse(storedData);
    }
    return null;
  }

  clearUserData(): void {
    localStorage.removeItem(this.userDataKey);
  }


}
