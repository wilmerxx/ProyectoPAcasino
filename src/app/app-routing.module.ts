import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprobanteRegistroComponent } from './comprobante-registro/comprobante-registro.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';

const routes: Routes = [
  {path: '', redirectTo: 'paginaprincipal', pathMatch:'full'},
  {path: 'paginaprincipal', component: PaginaprincipalComponent},
  {path: 'formulario', component: FormularioRegistroComponent},
  {path: 'uploadImg', component: ComprobanteRegistroComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



