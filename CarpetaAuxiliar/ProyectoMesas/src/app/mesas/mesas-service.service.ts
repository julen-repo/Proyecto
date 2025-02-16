import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mesa } from './mesa';

@Injectable({
  providedIn: 'root'
})
export class MesasService {
  private apiUrl = 'http://localhost/php/'; // Cambia la URL según corresponda

  constructor(private http: HttpClient) {}

  // Obtener todas las mesas
  getMesas() {
    return this.http.get(this.apiUrl + 'getMesas.php');
  }

  // Obtener una mesa específica por ID
  getMesa(id: number) {
    return this.http.get(`${this.apiUrl}getMesa.php?id=${id}`);
  }

  // Crear una nueva mesa
  createMesa(mesa:Mesa) {
    return this.http.post(`${this.apiUrl}createMesa.php`, JSON.stringify(mesa));
  }

  // Actualizar una mesa
  updateMesa(mesa:Mesa) {
    return this.http.post(`${this.apiUrl}updateMesa.php`, JSON.stringify(mesa));
  }
}
