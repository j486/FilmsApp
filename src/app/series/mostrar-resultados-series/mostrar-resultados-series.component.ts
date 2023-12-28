import { Component, Input } from '@angular/core';
import { Serie } from 'src/app/series/interface/serie';

@Component({
  selector: 'app-mostrar-resultados-series',
  templateUrl: './mostrar-resultados-series.component.html',
  styleUrls: ['./mostrar-resultados-series.component.css']
})
export class MostrarResultadosSeriesComponent {

  @Input()
  resultados: Serie[] = []
  @Input()
  tituloPagina: string = '';

  urlImagenes: string = 'https://image.tmdb.org/t/p/w500';
}
