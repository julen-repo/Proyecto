import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() mesaSeleccionadaId: number = 0;
  @Output() mesaActualizada = new EventEmitter();
  
  tamano: number = 0;

  mesa: Mesa = {
    id: 0,
    tamano: 0
  };

  constructor(private mesasService: MesasService) { }

  ngOnInit(): void {
    if (this.mesaSeleccionadaId > 0) {
      this.obtenerMesa(this.mesaSeleccionadaId);
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

    if (this.mesaSeleccionadaId > 0) {
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
