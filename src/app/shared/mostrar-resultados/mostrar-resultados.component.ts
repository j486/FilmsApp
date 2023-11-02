import { Component, Input, ɵɵInputTransformsFeature } from '@angular/core';
import { Pelicula } from 'src/app/peliculas/interface/pelicula';

@Component({
  selector: 'app-mostrar-resultados',
  templateUrl: './mostrar-resultados.component.html',
  styleUrls: ['./mostrar-resultados.component.css']
})
export class MostrarResultadosComponent {

  @Input()
  resultados: Pelicula[] = []
  @Input()
  tituloPagina: string = '';

  urlImagenes: string = 'https://image.tmdb.org/t/p/w500';

}
