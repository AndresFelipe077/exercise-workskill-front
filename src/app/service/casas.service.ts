import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CasasService {

  apiUrl = 'http://localhost:8000/api'; // Cambia esta URL por la URL de tu API
  url = this.apiUrl; // Ruta a tu función register en el backend


  constructor(private http: HttpClient) { }

  getCasasDisponibles(): Observable<any[]> {
    return this.http.get<any[]>(this.url+'/casas-disponibles');
  }

  guardarCasas(casaData: any){
    return this.http.post(this.url+'/casas', casaData);
  }

}
