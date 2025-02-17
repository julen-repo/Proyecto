import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ClientesServiceService } from '../clientes-service.service';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  imports: [FormsModule],
  templateUrl: './clientes-form-component.component.html',
  styleUrls: ['./clientes-form-component.component.css']
})
export class ClientesFormComponent {
  @Input() clientesSeleccionada: Cliente = {
    id: 0,
    nombre: '',
    apellidos: '',
    dni: '',
    telefono: 0
  };
  
  @Output() clienteActualizado = new EventEmitter();
  
  nombre: string = '';
  apellidos: string = '';
  dni: string = '';
  telefono: number = 0;

  constructor(private clientesService: ClientesServiceService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['clientesSeleccionada'] && changes['clientesSeleccionada'].currentValue) {
      this.nombre = this.clientesSeleccionada.nombre || '';
      this.apellidos = this.clientesSeleccionada.apellidos || '';
      this.dni = this.clientesSeleccionada.dni || '';
      this.telefono = this.clientesSeleccionada.telefono || 0;
    }
  }

  enviarFormulario(): void {
    this.clientesSeleccionada.nombre = this.nombre;
    this.clientesSeleccionada.apellidos = this.apellidos;
    this.clientesSeleccionada.dni = this.dni;
    this.clientesSeleccionada.telefono = this.telefono;
    
    if (!this.validarDatos()) return;

    if (this.clientesSeleccionada.id > 0) {
      this.clientesService.updateCliente(this.clientesSeleccionada).subscribe({
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
      this.clientesService.createCliente(this.clientesSeleccionada).subscribe({
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

  validarDatos(): boolean {
    return this.nombre.trim().length > 0 && this.apellidos.trim().length > 0 &&
           this.dni.trim().length > 0 && this.telefono.toString().length >= 9;
  }

  borrarCliente(): void {
    this.clientesService.deleteCliente(this.clientesSeleccionada).subscribe({
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
