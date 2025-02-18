import { Component } from '@angular/core';
import { ReservasFormComponent } from '../reservas-form-component/reservas-form-component.component';
import { ReservasService } from '../reservas-service.service';
import { RouterOutlet } from '@angular/router';
import { Reserva } from '../reserva';

@Component({
  selector: 'app-reservas-list',
  imports: [ReservasFormComponent, RouterOutlet],
  templateUrl: './reservas-list-component.component.html',
  styleUrls: ['./reservas-list-component.component.css']
})
export class ReservasListComponent {

  reserva: Reserva = {
    id: 0,
    idUsuario: 0,
    idMesa: 0,
    inicio: '',
    fin: '',
    juego: ''
  };

  reservaVacia: Reserva = {
    id: 0,
    idUsuario: 0,
    idMesa: 0,
    inicio: '',
    fin: '',
    juego: ''
  };

  reservaSeleccionada: Reserva = {
    id: 0,
    idUsuario: 0,
    idMesa: 0,
    inicio: '',
    fin: '',
    juego: ''
  };

  reservas: Reserva[] = [];
  reservasPaginas: Reserva[] = [];
  paginaActual: number = 0;
  paginasTotales: number = 0;
  elementosPorPagina: number = 10;

  constructor(private reservasService: ReservasService) { }

  ngOnInit(): void {
    this.getReservas();
  }

  getReservas() {
    this.reservasService.getReservas().subscribe((datos: any) => {
      this.reservas = datos;
      this.paginasTotales = Math.ceil(this.reservas.length / this.elementosPorPagina);
      this.actualizarPaginas();
    });
  }

  seleccionarReserva(id: number) {

    let reserva = this.reservas.find(r => r.id === id);

    if (reserva) {
      this.reservaSeleccionada = { ...reserva }; // Pasar una copia
    } else {
      this.reservaSeleccionada = this.reservaVacia;
    }
  }

  cambiarPagina(cambio: number) {
    this.paginaActual += cambio;
    this.actualizarPaginas();
  }

  actualizarPaginas() {
    const inicio = this.paginaActual * this.elementosPorPagina;
    const fin = inicio + this.elementosPorPagina;
    this.reservasPaginas = this.reservas.slice(inicio, fin);
  }
}
