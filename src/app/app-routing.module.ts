import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComprobanteRegistroComponent } from './comprobante-registro/comprobante-registro.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';

const routes: Routes = [
  {path: 'principal', component: PaginaprincipalComponent},
  {path: 'uploadcomp', component:ComprobanteRegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
