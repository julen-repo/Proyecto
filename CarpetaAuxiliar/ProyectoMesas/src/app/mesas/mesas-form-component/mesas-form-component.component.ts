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

  mesa: Mesa = {
    id: 0,
    tamano: 0
  };

  constructor(private mesasService: MesasService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mesaSeleccionada'] && changes['mesaSeleccionada'].currentValue) {
      this.tamano = this.mesaSeleccionada.tamano || 0; // Asigna el nuevo tamaño si cambia
    }
  }

  obtenerMesa(id: number): void {
    this.mesasService.getMesa(id).subscribe((data: any) => {
      this.mesa = data;
    });
  }

  enviarFormulario(): void {
    this.mesa.tamano = this.tamano;
    if (!this.validarTamano(this.mesa.tamano)) return;

    if (this.mesaSeleccionada.id > 0) {
      this.mesa.id=this.mesaSeleccionada.id;
      console.log(this.mesa);
      this.mesasService.updateMesa(this.mesa).subscribe((data: any) => {
        if (data['resultado'] == 'OK') {
          alert(data['mensaje']);
          window.location.reload();
        }
      });

    } else {
      this.mesasService.createMesa(this.mesa).subscribe({
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
}
