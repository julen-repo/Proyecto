import { Component } from '@angular/core';
import { MesasFormComponent } from '../mesas-form-component/mesas-form-component.component';
import { MesasService } from '../mesas-service.service';
import { RouterOutlet } from '@angular/router';

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

  idSeleccionado: number = 0;
  tamanoSeleccionado: number = 0;
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
    this.idSeleccionado = id;
    this.tamanoSeleccionado = tamano;
    alert(this.idSeleccionado);
    alert(this.tamanoSeleccionado);
  }

}
