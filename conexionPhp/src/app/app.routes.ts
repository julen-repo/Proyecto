import { Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MesasComponent } from './mesas/mesas.component';
import { ReservarComponent } from './reservar/reservar.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    {
        path:'usuarios',
        component: UsuariosComponent
    },
    {
        path:'mesas',
        component: MesasComponent
    },
    {
        path:'reservar',
        component: ReservarComponent
    },
    {
        path:'inicio',
        component: InicioComponent
    },
    {
        path:'',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path:'**',
        redirectTo: 'inicio',
        pathMatch: 'full'
    }
];
