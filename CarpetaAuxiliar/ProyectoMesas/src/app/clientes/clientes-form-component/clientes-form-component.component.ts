import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ClientesService } from '../clientes-service.service';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  imports: [FormsModule],
  templateUrl: './clientes-form-component.component.html',
  styleUrls: ['./clientes-form-component.component.css']
})
export class ClientesFormComponent {
  @Input() clienteSeleccionado: Cliente = {
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

  constructor(private clientesService: ClientesService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['clienteSeleccionado'] && changes['clienteSeleccionado'].currentValue) {
      this.nombre = this.clienteSeleccionado.nombre || '';
      this.apellidos = this.clienteSeleccionado.apellidos || '';
      this.dni = this.clienteSeleccionado.dni || '';
      this.telefono = this.clienteSeleccionado.telefono || 0;
    }
  }

  enviarFormulario(): void {
    this.clienteSeleccionado.nombre = this.nombre;
    this.clienteSeleccionado.apellidos = this.apellidos;
    this.clienteSeleccionado.dni = this.dni;
    this.clienteSeleccionado.telefono = this.telefono;
    
    if (!this.validarDatos()) return;

    if (this.clienteSeleccionado.id > 0) {
      this.clientesService.updateCliente(this.clienteSeleccionado).subscribe({
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
      this.clientesService.createCliente(this.clienteSeleccionado).subscribe({
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
    this.clientesService.deleteCliente(this.clienteSeleccionado).subscribe({
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
