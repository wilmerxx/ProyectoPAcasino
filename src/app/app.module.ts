import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { ComprobanteRegistroComponent } from './comprobante-registro/comprobante-registro.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrinIzquierdoComponent } from "./prin-izquierdo/prin-izquierdo.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { PrinDerechoComponent } from "./prin-derecho/prin-derecho.component";
import { FooterComponent } from "./footer/footer.component";
import { ContenidoComponent } from "./contenido/contenido.component";
import { NgxFileDropModule } from 'ngx-file-drop';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent,
        FormularioRegistroComponent,
        ComprobanteRegistroComponent,
        PaginaprincipalComponent,
        MenuComponent,
        PrinIzquierdoComponent,
        CarouselComponent,
        PrinDerechoComponent,
        FooterComponent,
        ContenidoComponent,

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
      HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgxFileDropModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideStorage(() => getStorage())
    ]
})
export class AppModule { }
