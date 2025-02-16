import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MesasService {
  private apiUrl = 'http://localhost/php/'; // Cambia la URL según corresponda

  constructor(private http: HttpClient) {}

  getMesas() {
    return this.http.get(this.apiUrl + 'getMesas.php');
  }

  // Crear una nueva mesa
  createMesa(id: number) {
    return this.http.post(`${this.apiUrl}create_mesa.php`, { id });
  }

  // Actualizar una mesa
  updateMesa(id: number) {
    return this.http.post(`${this.apiUrl}update_mesa.php`, { id });
  }
}
