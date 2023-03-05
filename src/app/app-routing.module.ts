import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComprobanteRegistroComponent } from './comprobante-registro/comprobante-registro.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { LoginComponent } from './login/login.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';

const routes: Routes = [
  {path: '', redirectTo: 'principal', pathMatch: 'full'},
  {path: 'principal', component: PaginaprincipalComponent},
  {path: 'uploadcomp', component:ComprobanteRegistroComponent},
  {path: 'login', component:LoginComponent},
  {path: 'contenido', component:ContenidoComponent},
  {path: 'panel-cliente', component:DashboardClientComponent},
  {path: 'registro', component:FormularioRegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
