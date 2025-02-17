import { Component } from '@angular/core';
import { MesasFormComponent } from '../mesas-form-component/mesas-form-component.component';
import { MesasService } from '../mesas-service.service';
import { RouterOutlet } from '@angular/router';
import { Mesa } from '../mesa';

@Component({
  selector: 'app-mesas-list',
  imports: [MesasFormComponent, RouterOutlet],
  templateUrl: './mesas-list-component.component.html',
  styleUrls: ['./mesas-list-component.component.css']
})
export class MesasListComponent {

  mesa: any = {
    id: 0,
    tamano: 0
  }

  mesaSeleccionada: Mesa = {
    id: 0,
    tamano: 0
  }

  mesas: any[] = [];

  mesasPaginas: any[] = [];
  paginaActual: number = 0;
  paginasTotales: number = 0;
  elementosPorPagina: number = 10;

  constructor(private mesasService: MesasService) { }

  ngOnInit(): void {
    this.getMesas();
  }

  getMesas() {
    this.mesasService.getMesas().subscribe((datos: any) => {
      this.mesas = datos;
      this.paginasTotales = Math.ceil(this.mesas.length / this.elementosPorPagina);
      this.actualizarPaginas();
      alert(this.mesas.length)
    });
  }
  
  seleccionarMesa(id: number, tamano: number) {
    this.mesaSeleccionada = { id, tamano }; // Pasar una copia
  }

  cambiarPagina(cambio: number) {
    this.paginaActual += cambio;
    this.actualizarPaginas();
  }

  actualizarPaginas() {
    const inicio = this.paginaActual * this.elementosPorPagina;
    const fin = inicio + this.elementosPorPagina;
    this.mesasPaginas = this.mesas.slice(inicio, fin);
  }

}
