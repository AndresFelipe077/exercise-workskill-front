import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  ) { }

  ngOnInit(): void {
    this.dataUser = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginUser(userData: any)
  {
    this.login.login(userData).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


}
