import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterService } from 'src/app/service/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  

  registerForm: FormGroup = new FormGroup({});

  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  constructor(
    private http: HttpClient,
    private register: RegisterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private appComponent: AppComponent
  ) { }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      urlFoto: [''],
      usuario: ['', Validators.required],
      identificacion: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      password: ['', Validators.required],

    })
  }

  

  registerUser() {
    if (this.registerForm.valid) {
      const formData = new FormData();
  
      formData.append('nombre', this.registerForm.get('nombre')!.value);
      formData.append('usuario', this.registerForm.get('usuario')!.value);
      formData.append('identificacion', this.registerForm.get('identificacion')!.value);
      formData.append('fechaNacimiento', this.registerForm.get('fechaNacimiento')!.value);
      formData.append('password', this.registerForm.get('password')!.value);
      formData.append('urlFoto', this.selectedFile!);
  
      this.register.register(formData).subscribe(
        (response: any) => {
          console.log(response);
  
          const user = response.data;
          const accessToken = response.access_token;
          const tokenType = response.token_type;
  
          localStorage.setItem('access_token', accessToken);
          this.router.navigate(['/dashboard']);
          this.registerForm.reset();
          this.appComponent.userLoginOn = true;
        },
        (error: any) => {
          console.log(error);
        }
      );
    } else {
      alert('Mal como todo');
    }
  }
  

}
