import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataUser: FormGroup = new FormGroup({});

  constructor(
    private http: HttpClient,
    private login: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private appComponent: AppComponent,
    private userService: UserService,

  ) { }

  ngOnInit(): void {
    this.dataUser = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.cerrarSesion();
  }

  loginUser(userData: any) {
    this.login.login(userData).subscribe(
      (response: any) => {
        console.log(response);
        if(response.user.rol == "admin")
        {
          this.router.navigate(['/gestionar-casas']);
        }
        else
        {
          this.router.navigate(['/dashboard']);
        }
        this.dataUser.reset();
        this.userService.saveUserData(response);
        this.appComponent.userLoginOn = true;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


  cerrarSesion() {
    this.appComponent.userLoginOn = false;
  }


}
