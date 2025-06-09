import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/dashboard/clients/clients.component';
import { ReportsComponent } from './components/dashboard/reports/reports.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { InicioComponent } from './components/dashboard/inicio/inicio.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: InicioComponent },
      { path: 'usuarios', component: UsersComponent },
      { path: 'clientes', component: ClientsComponent },
      { path: 'reportes', component: ReportsComponent },
    ]
  },
  // Ruta comodín por si escriben algo inexistente
  { path: '**', redirectTo: 'login' }
];
