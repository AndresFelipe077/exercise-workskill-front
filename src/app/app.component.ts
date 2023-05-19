import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'workskill';

  userLoginOn:boolean = false;

  cerrarSesion()
  {
    this.userLoginOn = true;
  }

}
