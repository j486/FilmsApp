import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  ngOnInit(): void {
    if((this.numeroEstrellas % 1) * 10 >= 5) {
      this.mediaEstrella = 1
    }
    this.cantidadRepeticiones = new Array(Math.trunc(this.numeroEstrellas)); // Esto crea un arreglo de longitud 5
  }

  @Input()
  numeroEstrellas: number = 0
  mediaEstrella: number = 0
  cantidadRepeticiones: number[] = []


}
