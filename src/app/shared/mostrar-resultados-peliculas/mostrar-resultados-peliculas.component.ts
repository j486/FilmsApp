import { Component, Input } from '@angular/core';
import { Pelicula } from 'src/app/peliculas/interface/pelicula';

@Component({
  selector: 'app-mostrar-resultados-peliculas',
  templateUrl: './mostrar-resultados-peliculas.component.html',
  styleUrls: ['./mostrar-resultados-peliculas.component.css']
})
export class MostrarResultadosPeliculasComponent {

  @Input()
  resultados: Pelicula[] = []
  @Input()
  tituloPagina: string = '';

  urlImagenes: string = 'https://image.tmdb.org/t/p/w500';

}
