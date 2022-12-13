import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { MenuComponent } from './menu/menu.component';
import { PrinDerechoComponent } from './prin-derecho/prin-derecho.component';
import { PrinIzquierdoComponent } from './prin-izquierdo/prin-izquierdo.component';
import { ContenidoComponent } from './contenido/contenido.component';

import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { ComprobanteRegistroComponent } from './comprobante-registro/comprobante-registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PaginaprincipalComponent,
    MenuComponent,
    PrinDerechoComponent,
    PrinIzquierdoComponent,
    ContenidoComponent,
    CarouselComponent,
    FooterComponent,
    FormularioRegistroComponent,
    ComprobanteRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
