import { Component, OnInit } from '@angular/core';
import { CasasService } from 'src/app/service/casas.service';

@Component({
  selector: 'app-casas-prefabricadas',
  templateUrl: './casas-prefabricadas.component.html',
  styleUrls: ['./casas-prefabricadas.component.css']
})
export class CasasPrefabricadasComponent implements OnInit{

  casasPrefabricadas:any[] = [];

  constructor(
    private casasService:CasasService
  ){}

  ngOnInit(): void {
    this.getCasasPrefabricadas();
  }

  getCasasPrefabricadas(){
    this.casasService.getCasaPrefabricadas().subscribe(
      data => {
        this.casasPrefabricadas = data;
      }
    );
  }

}
