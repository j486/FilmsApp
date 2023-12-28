import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PeliculasPageComponent } from './peliculas/peliculas-page/peliculas-page.component';
import { SeriesPageComponent } from './series/series-page/series-page.component';
import { VerPeliculaComponent } from './peliculas/ver-pelicula/ver-pelicula.component';

const routes: Routes = [
  {
    path: '',
    component: PeliculasPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'peliculas/:busqueda',
    component: PeliculasPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'peliculas',
    component: PeliculasPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'pelicula/:id',
    component: VerPeliculaComponent,
    pathMatch: 'full'
  },
  {
    path: 'series/:busqueda',
    component: SeriesPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'series',
    component: SeriesPageComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
