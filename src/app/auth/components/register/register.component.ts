import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterService } from 'src/app/service/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerForm: FormGroup = new FormGroup({});

  constructor(
    private http:HttpClient,
    private register:RegisterService,
    private formBuilder: FormBuilder
  ){}

    ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        nombre: ['', Validators.required],
        usuario: ['', Validators.required],
        identificacion: ['', Validators.required],
        fechaNacimiento: ['', Validators.required],
        password: ['', Validators.required],

      })
    }


  registerUser(userData: any)
  {
    this.register.register(userData).subscribe(
      (response: any) => {
        console.log(response);
        
        const user = response.data;
        const accessToken = response.access_token;
        const tokenType = response.token_type;

        localStorage.setItem('access_token', accessToken);

      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  // registerUser() {
  //   if (this.registerForm.valid) {
  //     const formData = this.registerForm.value;
  //     // Realizar las acciones necesarias con los datos
  //     console.log('Datos de registro:', formData);
  //   } else {
  //     // Formulario inválido, realizar acciones de validación o mostrar mensajes de error
  //   }
  // }

}
