import { Component } from '@angular/core';
import { MesasService } from '../mesas-service.service';
import { MesasFormComponent } from '../mesas-form-component/mesas-form-component.component';

@Component({
  selector: 'app-mesas-list',
  imports: [MesasFormComponent],
  templateUrl: './mesas-list-component.component.html',
  styleUrls: ['./mesas-list-component.component.css']
})
export class MesasListComponent {
  mesa: any = {
    id: 0,
    tamano: 0
  }
  idSeleccionado: number = 0;

  mesas: any[] = [];

  constructor(private mesasService: MesasService) { }

  ngOnInit(){
    this.edit();
  }

  edit(){
    this.mesasService.getMesas().subscribe((data: any) => {
      this.mesas = data;
    }
    );
  }

  
}
