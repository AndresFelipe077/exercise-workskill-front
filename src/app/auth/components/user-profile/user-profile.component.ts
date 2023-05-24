import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userData: any;
  userProfile!: FormGroup;
  selectedFile: File | null = null;

  baseUrl!: 'http://localhost:8000/';

  urlFotoTemporary!: 'profile/user/';

  fotoProfile: any;

  onSelectedFile(event: any) {
    this.selectedFile = event.target.files[0];

    console.log('Archivo seleccionado:', this.selectedFile);
  }

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.userData = this.userService.getUserData();

    this.userProfile = this.formBuilder.group({
      nombre: [this.userData.user.nombre],
      urlFoto: [''],
      usuario: [this.userData.user.usuario],
      identificacion: [this.userData.user.identificacion],
      fechaNacimiento: [this.userData.user.fechaNacimiento],
    });
  }

  actualizarProfile(): void {
    if (this.userProfile.valid) {
      const data = {
        usuario: this.userProfile.get('usuario')!.value,
        nombre: this.userProfile.get('nombre')!.value,
        urlFoto: this.selectedFile!.name,
        identificacion: this.userProfile.get('identificacion')!.value,
        fechaNacimiento: this.userProfile.get('fechaNacimiento')!.value
      };

      this.userService.actualizarProfile(this.userData.user.id, data).subscribe(
        (response: any) => {
          console.log('Perfil actualizado:', response);

          this.fotoProfile = response;

          this.fotoProfile.urlFoto = this.baseUrl + this.fotoProfile.urlFoto;


        },
        (error: any) => {
          console.error('Error al actualizar el perfil:', error);
          // Aquí puedes manejar los errores de la API como desees
        }
      );
    }
  }


}
