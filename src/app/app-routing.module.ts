import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PeliculasPageComponent } from './peliculas/peliculas-page/peliculas-page.component';

const routes: Routes = [
  {
    path: '',
    component: PeliculasPageComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
