import { Component, OnInit } from '@angular/core';
import { CasasService } from 'src/app/service/casas.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-alquilar-casa',
  templateUrl: './alquilar-casa.component.html',
  styleUrls: ['./alquilar-casa.component.css']
})
export class AlquilarCasaComponent implements OnInit {

  alquilarCas!: FormGroup;

  casa: any;

  idCasa!: number;

  alquilerData: any = {};

  userData!: any;

  constructor(
    private casaService: CasasService,
    private routeId: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getCasaById();

    this.userData = this.userService.getUserData();


    console.log(this.userData.user.id);

    this.alquilarCas = this.formBuilder.group({
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      // descuento: ['', Validators.required],
      idCasa: ['', Validators.required],
      // idEstadoAlquiler: [Validators.required],
      idUser: [''],

    });

    this.routeId.paramMap.subscribe(params => {
      this.idCasa = +params.get('id')!;
    });

  }

  getCasaById() {
    const baseUrl = 'http://localhost:8000'; // Cambiar según la configuración de tu servidor Laravel
    const id = this.routeId.snapshot.paramMap.get('id'); // Obtener el ID de la URL
    
    const apiUrl = `${baseUrl}/api/casas/${id}`;
    this.casaService.getCasaById(Number(id)).subscribe(
      response => {
        this.casa = response;
        this.casa.urlFoto = `${baseUrl}${this.casa.urlFoto}`;
      },
      error => {
        console.log(error);
      }
    );
  }

  // alquilarCasa()
  // {
  //   const idCasa = +this.routeId.snapshot.paramMap.get('id')!;
  //   this.casaService.alquilarCasa(Number(idCasa)).subscribe(
  //     response => {
  //       console.log(response)
  //     },
  //     error => {
  //       console.log(error)
  //     }
  //   )
  // }


  alquilarCasa() {

    if (this.alquilarCas.invalid) {
      const formData = this.alquilarCas.value;
      formData.fechaInicio = formData.fechaInicio;
      formData.fechaFin = formData.fechaFin;
      formData.idUser = this.userData.user.id;

      this.casaService.alquilarCasa(this.idCasa, formData).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );

    }


  }


}
