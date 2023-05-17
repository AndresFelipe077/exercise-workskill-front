import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'http://localhost:8000/api'; // Cambia esta URL por la URL de tu API

  constructor(private http: HttpClient) { }

  login(userData: any) {
    const url = `${this.apiUrl}/users/login`; // Ruta a tu función register en el backend

    // Opcional: Puedes enviar encabezados si es necesario
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer ' + accessToken
    // });

    return this.http.post(url, userData /*, { headers } */);
  }

}
