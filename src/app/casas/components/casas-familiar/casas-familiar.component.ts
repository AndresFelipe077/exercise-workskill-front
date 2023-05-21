import { Component, OnInit } from '@angular/core';
import { CasasService } from 'src/app/service/casas.service';

@Component({
  selector: 'app-casas-familiar',
  templateUrl: './casas-familiar.component.html',
  styleUrls: ['./casas-familiar.component.css']
})
export class CasasFamiliarComponent implements OnInit{

  constructor(
    private casasService:CasasService
    
  ){}

  ngOnInit(): void {
    this.getCasasFamiliares();
  }

  casasFamiliares: any[] = [];

  getCasasFamiliares()
  {
    this.casasService.getCasaFamiliares().subscribe(
      (data) => {
        this.casasFamiliares = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
