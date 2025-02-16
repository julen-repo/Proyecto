import { Component, OnInit } from '@angular/core';
import { MesasService } from '../mesas-service.service';

@Component({
  selector: 'app-mesas-list',
  templateUrl: './mesas-list-component.component.html',
  styleUrls: ['./mesas-list-component.component.css']
})
export class MesasListComponent {

  mesas: any[] = [];

  constructor(private mesasService: MesasService) {}

  ngOnInit(): void {
    this.getMesas();
  }

  getMesas(){
    this.mesasService.getMesas().subscribe((datos:any) => {
      this.mesas = datos;
    });
  }
}
