import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { CasasService } from 'src/app/service/casas.service';

@Component({
  selector: 'app-gestionar-casas',
  templateUrl: './gestionar-casas.component.html',
  styleUrls: ['./gestionar-casas.component.css']
})
export class GestionarCasasComponent {

  constructor(
    private casaService: CasasService,
    private http: HttpClient,
    private idCasaUrl: ActivatedRoute,

  ) { }

  casas: any[] = [];

  idCasa!: number;

  selectedCasaId!: number;


  ngOnInit(): void {
    this.getCasas();
  }

  seleccionarCasa(id: number) {
    this.selectedCasaId = id;
    this.eliminarCasa(this.selectedCasaId);
    console.log("numero de casa " + this.selectedCasaId)
  }

  getCasas() {
    this.casaService.getCasas().subscribe(
      (data) => {
        this.casas = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  eliminarCasa(idCasa: number) {
      this.casaService.eliminarCasa(idCasa).subscribe(
        (data) => {
          console.log(data);
          console.log("Se elimina la casa")
        },
        (error) => {

        }
      )
  }



}
