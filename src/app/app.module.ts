import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { BusquedaComponent } from './shared/busqueda/busqueda.component';
import { PeliculasPageComponent } from './peliculas/peliculas-page/peliculas-page.component';
import { MostrarResultadosComponent } from './shared/mostrar-resultados/mostrar-resultados.component';
import { HttpClientModule } from '@angular/common/http';
import { StarsComponent } from './shared/stars/stars.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BusquedaComponent,
    PeliculasPageComponent,
    MostrarResultadosComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
