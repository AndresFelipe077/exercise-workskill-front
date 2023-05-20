import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor(private http: HttpClient) { }

  casasDisponibles!: any[];

  ngOnInit() {
    this.obtenerCasasDisponibles();
  }
  
  // obtenerCasasDisponibles() {
  //   this.http.get('http://localhost:8000/api/casas-disponibles').subscribe((data: any) => {
  //     this.casasDisponibles = data;
  //   });
  // }
  
  obtenerCasasDisponibles() {
    const baseUrl = 'http://localhost:8000'; // Cambiar según la configuración de tu servidor Laravel
    const apiUrl = `${baseUrl}/api/casas-disponibles`;
    
    this.http.get(apiUrl).subscribe((data: any) => {
      this.casasDisponibles = data.map((casa: any) => {
        // casa.urlFoto = `${baseUrl}${casa.urlFoto}`;
        casa.urlFoto = baseUrl + casa.urlFoto;
        return casa;
      });
    });
  }
  
  

}
