import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  baseUrl!: 'http://127.0.0.1:8000';

  userData: any;


  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userData = this.userService.getUserData();
  }

  title = 'workskill';

  userLoginOn: boolean = false;

  cerrarSesion() {
    this.userLoginOn = true;
  }

}
