import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = 'http://localhost:80/php/';

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}usuarios.php`);
  }
}
