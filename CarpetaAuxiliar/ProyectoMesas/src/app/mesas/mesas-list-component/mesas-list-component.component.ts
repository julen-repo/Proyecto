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

  constructor(private mesasService: MesasService) { }

  ngOnInit(): void {
    this.getMesas();
  }

  getMesas() {
    this.mesasService.getMesas().subscribe((datos: any) => {
      this.mesas = datos;
    });
  }
  
  seleccionarMesa(id: number, tamano: number) {
    this.mesaSeleccionada = { id, tamano }; // Pasar una copia
  }

}
