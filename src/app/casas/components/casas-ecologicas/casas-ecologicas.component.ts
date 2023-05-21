import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CasasService } from 'src/app/service/casas.service';

@Component({
  selector: 'app-casas-ecologicas',
  templateUrl: './casas-ecologicas.component.html',
  styleUrls: ['./casas-ecologicas.component.css']
})
export class CasasEcologicasComponent implements OnInit {

  constructor(
    private casaService: CasasService,
    private http: HttpClient,
  ) { }

  casasEcologicas: any[] = [];

  ngOnInit(): void {
    this.getCasasEcologicas();
  }

  getCasasEcologicas() {
    this.casaService.getCasaEcologicas().subscribe(
      casaEcologica => {
        this.casasEcologicas = casaEcologica;
        console.log(casaEcologica)
      },
      error => {
        console.log(error);
      }
    )
  }

}
