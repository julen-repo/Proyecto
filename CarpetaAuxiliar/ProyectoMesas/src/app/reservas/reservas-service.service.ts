import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reserva } from './reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  private apiUrl = 'http://localhost/php/reservas/'; // Cambia la URL según corresponda

  constructor(private http: HttpClient) { }

  // Obtener todas las reservas
  getReservas() {
    return this.http.get(this.apiUrl + 'getReservas.php');
  }

  // Obtener una reserva específica por ID
  getReserva(id: number) {
    return this.http.get(`${this.apiUrl}getReserva.php?id=${id}`);
  }

  // Crear una nueva reserva
  createReserva(reserva: Reserva) {
    return this.http.post(`${this.apiUrl}createReserva.php`, JSON.stringify(reserva));
  }

  // Actualizar una reserva
  updateReserva(reserva: Reserva) {
    // Crear la nueva variable `reservacorrecta` con los valores correctos
    let reservacorrecta: Reserva = {
      id: reserva.id,
      idUsuario: reserva.idUsuario || 0,
      idMesa: reserva.idMesa || 0,
      inicio: reserva.inicio || '',
      fin: reserva.fin || '',
      juego: reserva.juego || ''
    };
  
    // Imprimir la reserva correctamente formateada
    console.log(JSON.stringify(reservacorrecta));
  
    // Realizar el POST con la reserva corregida
    return this.http.post(`${this.apiUrl}updateReserva.php`, JSON.stringify(reservacorrecta));
  }
  

  deleteReserva(reserva: Reserva) {
    return this.http.post(`${this.apiUrl}deleteReserva.php`, JSON.stringify(reserva));
  }

  // Verificar si el usuario existe
  checkUsuario(idUsuario: number) {
    return this.http.get<any>(`${this.apiUrl}/checkUsuario.php?idUsuario=${idUsuario}`);
  }

  // Verificar si la mesa existe
  checkMesa(idMesa: number) {
    return this.http.get<any>(`${this.apiUrl}/checkMesa.php?idMesa=${idMesa}`);
  }

  // Verificar disponibilidad de la mesa en el rango de tiempo
  checkDisponibilidad(idReserva: number, idMesa: number, inicio: string, fin: string) {
    let url: string = `${this.apiUrl}/checkDisponibilidad.php?idReserva=${idReserva}&idMesa=${idMesa}&inicio=${inicio}&fin=${fin}`
    //console.log(url);
    return this.http.get<any>(url);
  }

}
