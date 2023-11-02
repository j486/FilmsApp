import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../services/peliculas.service'
import { Pelicula } from '../interface/pelicula';

@Component({
  selector: 'app-peliculas-page',
  templateUrl: './peliculas-page.component.html',
  styleUrls: ['./peliculas-page.component.css']
})
export class PeliculasPageComponent implements OnInit{

  peliculas: Pelicula[] = []
  titulo: string = ''

  constructor(private peliculasService: PeliculasService){}
  ngOnInit(): void {
    this.peliculasService.buscarPeliculasPopulares().subscribe((resp) => {
      this.peliculas = resp.results;
      this.titulo = 'Peliculas Populares'
    })
  }

  buscarPelicula(pelicula: string){
    this.peliculasService.buscarPeliculaPorNombre(pelicula).subscribe((resp) => {
      this.peliculas = resp.results;
      this.titulo = 'Peliculas...'
    })
  }
}
