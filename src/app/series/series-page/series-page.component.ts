import { Component } from '@angular/core';
import { SeriesService } from '../services/series.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-series-page',
  templateUrl: './series-page.component.html',
  styleUrls: ['./series-page.component.css']
})
export class SeriesPageComponent {

  series: any
  titulo: string = ''

  constructor( private seriesService: SeriesService, private route: ActivatedRoute ){
    this.route.url.subscribe(() => {//se usa para detectar cambios en la URL
      this.cargarContenido()
    });
  }

  buscarSerie(serie: string) {
    this.seriesService.buscarSeriePorNombre(serie).subscribe((resp) => {
      this.series = resp.results;
      this.titulo = 'Programa de televisión...'
    })
  }

  cargarContenido(){
    const parametro = this.route.snapshot.params['busqueda']
    console.log("Parametro pagina serie: " + parametro)
    switch (parametro) {
      case "populares":
        this.seriesService.buscarSeriesPopulares().subscribe((resp) => {
          this.series = resp.results;
          this.titulo = 'Programas de televisión populares'
        })
        break
      case "emitenHoy":
        this.seriesService.buscarSeriesEmitenHoy().subscribe((resp) => {
          this.series = resp.results;
          this.titulo = 'Programas de televisión que se emiten hoy'
        })
        break
      case "emitiendo":
        this.seriesService.buscarSeriesEmitiendo().subscribe((resp) => {
          this.series = resp.results;
          this.titulo = 'Programas de televisión emitiéndose actualmente'
        })
        break
      case "top-rated":
        this.seriesService.buscarSeriesMasValoradas().subscribe((resp) => {
          this.series = resp.results;
          this.titulo = 'Programas de televisión mejor valorados'
        })
        break
      default:
        this.seriesService.buscarSeriesPopulares().subscribe((resp) => {
          this.series = resp.results;
          this.titulo = 'Programas de televisión populares'
        })
        break
    }

  }
}
