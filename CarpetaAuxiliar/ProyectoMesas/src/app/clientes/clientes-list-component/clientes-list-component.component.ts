import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from '../clientes-service.service';

@Component({
  selector: 'app-clientes-list-component',
  imports: [],
  templateUrl: './clientes-list-component.component.html',
  styleUrl: './clientes-list-component.component.css'
})
export class ClientesListComponent {

  mesa: any = {
    id: 0,
    nombre: "",
    apellidos: "",
    dni: "",
    telefono: 0
  }

  clienteSeleccionado: Cliente = {
    id: 0,
    nombre: "",
    apellidos: "",
    dni: "",
    telefono: 0
  }

  clientes: any[] = [];

  clientesPaginas: any[] = [];
  paginaActual: number = 0;
  paginasTotales: number = 0;
  elementosPorPagina: number = 10;

  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    this.clienteService.getClientes().subscribe((datos: any) => {
      this.clientes = datos;
      this.paginasTotales = Math.ceil(this.clientes.length / this.elementosPorPagina);
      this.actualizarPaginas();
    });
  }

  seleccionarCliente(id: number, nombre: string, apellidos: string, dni: string, telefono: number) {
    this.clienteSeleccionado = { id, nombre, apellidos, dni, telefono }; // Pasar una copia
  }

  cambiarPagina(cambio: number) {
    this.paginaActual += cambio;
    this.actualizarPaginas();
  }

  actualizarPaginas() {
    const inicio = this.paginaActual * this.elementosPorPagina;
    const fin = inicio + this.elementosPorPagina;
    this.clientesPaginas = this.clientes.slice(inicio, fin);
  }
}
