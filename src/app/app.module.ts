import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { BusquedaComponent } from './shared/busqueda/busqueda.component';
import { PeliculasPageComponent } from './peliculas/peliculas-page/peliculas-page.component';
import { HttpClientModule } from '@angular/common/http';
import { StarsComponent } from './shared/stars/stars.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { SeriesPageComponent } from './series/series-page/series-page.component';
import { MostrarResultadosPeliculasComponent } from './shared/mostrar-resultados-peliculas/mostrar-resultados-peliculas.component';
import { MostrarResultadosSeriesComponent } from './shared/mostrar-resultados-series/mostrar-resultados-series.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BusquedaComponent,
    PeliculasPageComponent,
    MostrarResultadosPeliculasComponent,
    StarsComponent,
    SeriesPageComponent,
    MostrarResultadosSeriesComponent
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
