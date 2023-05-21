import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://127.0.0.1:8000/';

  getCategorias(): Observable<any[]>
  {
    return this.http.get<any[]>(this.baseUrl + 'api/categoria');
  }

}
