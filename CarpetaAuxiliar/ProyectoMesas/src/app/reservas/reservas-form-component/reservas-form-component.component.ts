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


      console.log(this.reservaSeleccionada.idMesa + '\n' + 
        this.reservaSeleccionada.idUsuario + '\n' + 
        this.reservaSeleccionada.inicio + '\n' + 
        this.reservaSeleccionada.fin + '\n' + 
        this.reservaSeleccionada.juego
      )
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

  borrarReserva(){
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
}
