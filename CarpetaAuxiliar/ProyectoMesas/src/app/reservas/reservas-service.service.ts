import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reserva } from './reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  private apiUrl = 'http://localhost/php/reservas/'; // Cambia la URL según corresponda

  constructor(private http: HttpClient) {}

  // Obtener todas las reservas
  getReservas() {
    return this.http.get(this.apiUrl + 'getReservas.php');
  }

  // Obtener una reserva específica por ID
  getReserva(id: number) {
    return this.http.get(`${this.apiUrl}getReserva.php?id=${id}`);
  }

  // Crear una nueva reserva
  createReserva(reserva:Reserva) {
    return this.http.post(`${this.apiUrl}createReserva.php`, JSON.stringify(reserva));
  }

  // Actualizar una reserva
  updateReserva(reserva:Reserva) {
    return this.http.post(`${this.apiUrl}updateReserva.php`, JSON.stringify(reserva));
  }

  deleteReserva(reserva:Reserva) {
    return this.http.post(`${this.apiUrl}deleteReserva.php`, JSON.stringify(reserva));
  }
}
