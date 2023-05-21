import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CasasService {

  apiUrl = 'http://localhost:8000/api'; // Cambia esta URL por la URL de tu API
  url = this.apiUrl; // Ruta a tu función register en el backend
  baseUrl = 'http://localhost:8000'; // Cambiar según la configuración de tu servidor Laravel


  constructor(private http: HttpClient) { }

  getCasasDisponibles(): Observable<any[]> {
    return this.http.get<any[]>(this.url+'/casas-disponibles');
  }

  guardarCasas(casaData: any){
    return this.http.post(this.url+'/casas', casaData);
  }

  getCasaById(id:number)
  {
    return this.http.get(this.url+'/casas/' + id);
  }

  getCasaCabanas(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/casas-cabanas')
      .pipe(
        map(data => {
          return data.map(cabana => {
            cabana.urlFoto = this.baseUrl + cabana.urlFoto;
            return cabana;
          });
        })
      );
  }

  getCasaEcologicas(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/casas-ecologicas')
      .pipe(
        map(data => {
          return data.map(casaEcologica => {
            casaEcologica.urlFoto = this.baseUrl + casaEcologica.urlFoto;
            return casaEcologica;
          });
        })
      );
  }

  getCasaFamiliares(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/casas-familiares')
      .pipe(
        map(data => {
          return data.map(casaFamiliar => {
            casaFamiliar.urlFoto = this.baseUrl + casaFamiliar.urlFoto;
            return casaFamiliar;
          });
        })
      );
  }

  getCasaPrefabricadas(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/casas-prefabricadas')
      .pipe(
        map(data => {
          return data.map(casaPrefabricada => {
            casaPrefabricada.urlFoto = this.baseUrl + casaPrefabricada.urlFoto;
            return casaPrefabricada;
          });
        })
      );
  }
  
  // alquilarCasa(id: number)
  // {
  //   return this.http.post(this.apiUrl + '/alquilar/', {id: id});
  // }

  alquilarCasa(id: number, alquilerData: any): Observable<any> {
    const url = `${this.apiUrl}/alquilar/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(url, alquilerData, { headers });
  }

}
