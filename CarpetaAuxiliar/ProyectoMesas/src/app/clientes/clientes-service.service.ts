import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'http://localhost/php/clientes/'; // Cambia la URL según corresponda

  constructor(private http: HttpClient) {}

  // Obtener todos los clientes
  getClientes() {
    return this.http.get(this.apiUrl + 'getClientes.php');
  }

  // Obtener un cliente específico por ID
  getCliente(id: number) {
    return this.http.get(`${this.apiUrl}getCliente.php?id=${id}`);
  }

  // Crear un nuevo cliente
  createCliente(cliente: Cliente) {
    return this.http.post(`${this.apiUrl}createCliente.php`, JSON.stringify(cliente));
  }

  // Actualizar un cliente
  updateCliente(cliente: Cliente) {
    return this.http.post(`${this.apiUrl}updateCliente.php`, JSON.stringify(cliente));
  }

  // Eliminar un cliente
  deleteCliente(cliente: Cliente) {
    return this.http.post(`${this.apiUrl}deleteCliente.php`, JSON.stringify(cliente));
  }
}
