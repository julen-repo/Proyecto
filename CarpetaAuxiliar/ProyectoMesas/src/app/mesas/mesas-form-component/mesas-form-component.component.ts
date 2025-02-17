import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { MesasService } from '../mesas-service.service';
import { FormsModule } from '@angular/forms';
import { Mesa } from '../mesa';

@Component({
  selector: 'app-mesas-form',
  imports: [FormsModule],
  templateUrl: './mesas-form-component.component.html',
  styleUrls: ['./mesas-form-component.component.css']
})
export class MesasFormComponent {
  @Input() mesaSeleccionada: Mesa = {
    id: 0,
    tamano: 0
  };
  
  @Output() mesaActualizada = new EventEmitter();
  
  tamano: number = 0;


  constructor(private mesasService: MesasService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mesaSeleccionada'] && changes['mesaSeleccionada'].currentValue) {
      this.tamano = this.mesaSeleccionada.tamano || 0; // Asigna el nuevo tamaño si cambia
    }
  }

  enviarFormulario(): void {
    this.mesaSeleccionada.tamano = this.tamano;
    if (!this.validarTamano(this.mesaSeleccionada.tamano)) return;

    if (this.mesaSeleccionada.id > 0) {
      this.mesaSeleccionada.id=this.mesaSeleccionada.id;

      this.mesasService.updateMesa(this.mesaSeleccionada).subscribe({
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
      this.mesasService.createMesa(this.mesaSeleccionada).subscribe({
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

  validarTamano(tamano: any): boolean {
    return Number.isInteger(tamano) && tamano > 0;
  }

  borrarMesa(){
    this.mesasService.deleteMesa(this.mesaSeleccionada).subscribe({
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
