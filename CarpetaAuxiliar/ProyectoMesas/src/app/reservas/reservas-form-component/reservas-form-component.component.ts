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
  
  reserva: Reserva = {
    id: 0,
    idUsuario: 0,
    idMesa: 0,
    inicio: '',
    fin: '',
    juego: ''
  };

  constructor(private reservasService: ReservasService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['reservaSeleccionada'] && changes['reservaSeleccionada'].currentValue) {
      this.reserva = { ...this.reservaSeleccionada }; // Cargar los datos de la reserva seleccionada
    }
  }

  enviarFormulario(): void {

    if (this.reserva.id > 0) {
      this.reservasService.updateReserva(this.reserva).subscribe({
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
      this.reservasService.createReserva(this.reserva).subscribe({
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
    this.reservasService.deleteReserva(this.reserva).subscribe({
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
