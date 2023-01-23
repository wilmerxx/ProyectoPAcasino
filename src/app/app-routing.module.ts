import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComprobanteRegistroComponent } from './comprobante-registro/comprobante-registro.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { LoginComponent } from './login/login.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';

const routes: Routes = [
  {path: 'principal', component: PaginaprincipalComponent},
  {path: 'uploadcomp', component:ComprobanteRegistroComponent},
  {path: 'login', component:LoginComponent},
  {path: 'contenido', component:ContenidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
