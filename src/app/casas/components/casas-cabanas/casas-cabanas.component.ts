import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CasasService } from 'src/app/service/casas.service';

@Component({
  selector: 'app-casas-cabanas',
  templateUrl: './casas-cabanas.component.html',
  styleUrls: ['./casas-cabanas.component.css']
})
export class CasasCabanasComponent implements OnInit {

  constructor(
    private casaService: CasasService,
    private http: HttpClient
  ) { }

  casasCabanas: any[] = [];


  ngOnInit(): void {
    this.getCasaCabanas();
  }


  // getCasaCabanas() {
  //   this.casaService.getCasaCabanas().subscribe(
  //     response => {
  //       this.casasCabanas = response;
  //       console.log(response);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }

  getCasaCabanas() {
    this.casaService.getCasaCabanas().subscribe(
      data => {
        this.casasCabanas = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  


}
