import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiUrl = 'http://localhost:8000/api'; // Cambia esta URL por la URL de tu API

  constructor(private http: HttpClient) { }

  register(userData: any) {
    const url = `${this.apiUrl}/users/register`; // Ruta a tu función register en el backend

    // Opcional: Puedes enviar encabezados si es necesario
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer ' + accessToken
    // });

    return this.http.post(url, userData /*, { headers } */);
  }

}
