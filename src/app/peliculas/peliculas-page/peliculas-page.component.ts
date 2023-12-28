import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service'
import { Pelicula } from '../interface/pelicula';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peliculas-page',
  templateUrl: './peliculas-page.component.html',
  styleUrls: ['./peliculas-page.component.css']
})
export class PeliculasPageComponent {

  peliculas: Pelicula[] = []
  titulo: string = ''
  
  constructor(private peliculasService: PeliculasService, private route: ActivatedRoute) {
    this.route.url.subscribe(() => {//se usa para detectar cambios en la URL
      this.cargarContenido()
    });
  }

  buscarPelicula(pelicula: string) {
    this.peliculasService.buscarPeliculaPorNombre(pelicula).subscribe((resp) => {
      this.peliculas = resp.results;
      this.titulo = 'Peliculas...'
    })
  }


  cargarContenido() {
    const parametro = this.route.snapshot.params['busqueda']
    console.log("Parametro pagina pelicula: " + parametro)
    switch (parametro) {
      case "populares":
        this.peliculasService.buscarPeliculasPopulares().subscribe((resp) => {
          this.peliculas = resp.results;
          this.titulo = 'Peliculas populares'
        })
        break
      case "cartelera":
        this.peliculasService.buscarPeliculasEnCarteleraHoy().subscribe((resp) => {
          this.peliculas = resp.results;
          this.titulo = 'Peliculas en cartelera'
        })
        break
      case "proximas":
        this.peliculasService.buscarPeliculasProximas().subscribe((resp) => {
          this.peliculas = resp.results;
          const peliculasNuevas = this.peliculas.filter((pelicula) => {
            const fechaActual = new Date()
            const fechaLanzamiento = new Date(pelicula.release_date)
            return fechaLanzamiento > fechaActual ? true : false
          }
          )
          this.peliculas = peliculasNuevas
          this.titulo = 'Próximas películas'
        })
        break
      case "top-rated":
        this.peliculasService.buscarPeliculasMasValoradas().subscribe((resp) => {
          this.peliculas = resp.results;
          this.titulo = 'Películas mejor valoradas'
        })
        break
      default:
        this.peliculasService.buscarPeliculasPopulares().subscribe((resp) => {
          this.peliculas = resp.results;
          this.titulo = 'Peliculas Populares'
        })
        break
    }
  }
}
