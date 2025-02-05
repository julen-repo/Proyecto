import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticulosService } from './articulos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articulos:any;

  art={
    codigo:0,
    descripcion:"",
    precio:0
  }

  constructor(private articulosServicio: ArticulosService) {
    this.recuperarTodos();
  }


  recuperarTodos() {
    this.articulosServicio.recuperarTodos().subscribe((result:any) => this.articulos = result);
  }

  alta() {
    this.articulosServicio.alta(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(codigo:number) {
    this.articulosServicio.baja(codigo).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.articulosServicio.modificacion(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  seleccionar(codigo:number) {
    this.articulosServicio.seleccionar(codigo).subscribe((result:any) => this.art = result[0]);
  }

}