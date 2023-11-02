import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @Output()
  onEnter: EventEmitter<string> = new EventEmitter();
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    if(valor.trim().length == 0){
      return;
    }
    this.onEnter.emit(valor);
    this.txtBuscar.nativeElement.value = '';
  }
}
