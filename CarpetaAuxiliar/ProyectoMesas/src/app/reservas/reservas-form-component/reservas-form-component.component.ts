import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ReservasService } from '../reservas-service.service';
import { FormsModule } from '@angular/forms';
import { Reserva } from '../reserva';

@Component({
  selector: 'app-reservas-form',
  imports: [FormsModule],
  templateUrl: './reservas-form-component.component.html',
  styleUrls: ['./reservas-form-component.component.css']
})
export class ReservasFormComponent {
  @Input() reservaSeleccionada: Reserva = {
    id: 0,
    idUsuario: 0,
    idMesa: 0,
    inicio: '',
    fin: '',
    juego: ''
  };

  @Output() reservaActualizada = new EventEmitter();

  id: number = 0
  idUsuario: number = 0
  idMesa: number = 0
  inicio: string = ''
  fin: string = ''
  juego: string = ''

  private usuarioValido: boolean = false;
  private mesaValida: boolean = false;
  private disponibilidadValida: boolean = false;
  private fechasValidas: boolean = false;

  constructor(private reservasService: ReservasService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['reservaSeleccionada'] && changes['reservaSeleccionada'].currentValue) {
      this.idUsuario = this.reservaSeleccionada.idUsuario;
      this.idMesa = this.reservaSeleccionada.idMesa;
      this.inicio = this.reservaSeleccionada.inicio;
      this.fin = this.reservaSeleccionada.fin;
      this.juego = this.reservaSeleccionada.juego;
    }
  }

  enviarFormulario(): void {

    this.reservaSeleccionada.idUsuario = this.idUsuario;
    this.reservaSeleccionada.idMesa = this.idMesa;
    this.reservaSeleccionada.inicio = this.inicio;
    this.reservaSeleccionada.fin = this.fin;
    this.reservaSeleccionada.juego = this.juego;

    // Validar fecha de inicio y fin
    if (new Date(this.inicio) >= new Date(this.fin)) {
      alert('La fecha de fin debe ser posterior a la fecha de inicio.');
      return;
    }

    this.validarReservas();

    if (!this.todoValido()) {
      return;
    }

    if (this.reservaSeleccionada.id > 0) {
      this.reservasService.updateReserva(this.reservaSeleccionada).subscribe({
        next: (data: any) => {
          if (data.resultado === 'OK') {
            alert(data.mensaje);
            window.location.reload();
          }
        },
        error: (error) => {
          console.error('Error en la petición:', error);
        }
      });

    } else {

      /*
      console.log(this.reservaSeleccionada.idMesa + '\n' +
        this.reservaSeleccionada.idUsuario + '\n' +
        this.reservaSeleccionada.inicio + '\n' +
        this.reservaSeleccionada.fin + '\n' +
        this.reservaSeleccionada.juego
      )
        */

      this.reservasService.createReserva(this.reservaSeleccionada).subscribe({
        next: (data: any) => {
          if (data.resultado === 'OK') {
            alert(data.mensaje);
            window.location.reload();
          }
        },
        error: (error) => {
          console.error('Error en la petición:', error);
        }
      });
    }
  }

  borrarReserva() {
    this.reservasService.deleteReserva(this.reservaSeleccionada).subscribe({
      next: (data: any) => {
        if (data.resultado === 'OK') {
          alert(data.mensaje);
          window.location.reload();
        }
      },
      error: (error) => {
        console.error('Error en la petición:', error);
      }
    });
  }

  // Validar todas las condiciones
  validarReservas(): void {
    this.validarFechas();
    this.validarUsuario();
    this.validarMesa();
    this.validarDisponibilidad();
  }

  // 1. Validar que el usuario existe
  validarUsuario(): void {
    this.reservasService.checkUsuario(this.reservaSeleccionada.idUsuario).subscribe({
      next: (usuarioExiste) => {
        this.usuarioValido = usuarioExiste.existe;
        if (!this.usuarioValido) alert('El ID del usuario no existe.');
      },
      error: () => {
        this.usuarioValido = false;
        alert('Error al validar el usuario.');
      }
    });
  }

  // 2. Validar que la mesa existe
  validarMesa(): void {
    this.reservasService.checkMesa(this.reservaSeleccionada.idMesa).subscribe({
      next: (mesaExiste) => {
        this.mesaValida = mesaExiste.existe;
        if (!this.mesaValida) alert('El ID de la mesa no existe.');
      },
      error: () => {
        this.mesaValida = false;
        alert('Error al validar la mesa.');
      }
    });
  }

  // 3. Validar disponibilidad de la mesa en ese rango de tiempo
  validarDisponibilidad(): void {
    this.reservasService
      .checkDisponibilidad(this.reservaSeleccionada.id, this.reservaSeleccionada.idMesa, this.reservaSeleccionada.inicio, this.reservaSeleccionada.fin)
      .subscribe({
        next: (disponibilidad) => {
          this.disponibilidadValida = disponibilidad.disponible;
          if (!this.disponibilidadValida) {
            alert('La mesa ya está reservada en este horario.');
          }
        },
        error: () => {
          this.disponibilidadValida = false;
          alert('Error al validar la disponibilidad.');
        }
      });
  }

  // 4. Validar que la fecha de fin es posterior a la de inicio
  validarFechas(): void {
    this.fechasValidas = new Date(this.reservaSeleccionada.inicio) < new Date(this.reservaSeleccionada.fin);
    if (!this.fechasValidas) {
      alert('La fecha de fin debe ser posterior a la fecha de inicio.');
    }
  }

  todoValido(): boolean {
    return this.usuarioValido && this.mesaValida && this.disponibilidadValida && this.fechasValidas;
  }
}
