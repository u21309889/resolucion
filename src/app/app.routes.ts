import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/dashboard/clients/clients.component';
import { ReportsComponent } from './components/dashboard/reports/reports.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { InicioComponent } from './components/dashboard/inicio/inicio.component';

export const routes: Routes = [
    { path: '',component:DashboardComponent },
    { path: 'dashboard',component:DashboardComponent ,children:[
    { path: '',component:InicioComponent},
    { path: 'usuarios',component:UsersComponent },
    { path: 'clientes',component:ClientsComponent},
    { path: 'reportes',component:ReportsComponent },
]}
];