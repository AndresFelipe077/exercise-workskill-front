import { Component, OnInit } from '@angular/core';
import { CasasService } from 'src/app/service/casas.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alquilar-casa',
  templateUrl: './alquilar-casa.component.html',
  styleUrls: ['./alquilar-casa.component.css']
})
export class AlquilarCasaComponent implements OnInit{


  casa: any;

  constructor(
    private casaService:CasasService,
    private routeId:ActivatedRoute,
    private http:HttpClient
  ){}

  ngOnInit(): void {
    this.getCasaById();
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
        console.error(error);
      }
    );
  }
  
  


}
