import { Routes } from '@angular/router';
import { MesasListComponent } from './mesas/mesas-list-component/mesas-list-component.component';
import { ReservasListComponent } from './reservas/reservas-list-component/reservas-list-component.component';
import { ClientesListComponent } from './clientes/clientes-list-component/clientes-list-component.component';

export const routes: Routes = [
    {
        path: '',
        component: MesasListComponent
    },
    {
        path: 'mesas',
        component: MesasListComponent
    },
    {
        path: 'reservas',
        component: ReservasListComponent
    },
    {
        path: 'clientes',
        component: ClientesListComponent
    }
];
