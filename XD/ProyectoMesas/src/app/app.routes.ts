import { Routes } from '@angular/router';
import { MesasListComponent } from './mesas/mesas-list-component/mesas-list-component.component';
import { MesasFormComponent } from './mesas/mesas-form-component/mesas-form-component.component';
//import { ClientesListComponent } from './clientes/clientes-list-component/clientes-list-component.component';
//import { ReservasListComponent } from './reservas/reservas-list-component/reservas-list-component.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'mesas', component: MesasListComponent },
      //{ path: 'clientes', component: ClientesListComponent },
      //{ path: 'reservas', component: ReservasListComponent },
      { path: '', redirectTo: '/mesas', pathMatch: 'full' }
    ]
  },
  {
    path: 'form',
    component: MesasFormComponent
  }
];
