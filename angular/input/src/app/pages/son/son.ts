import { Component, computed, input, output, signal } from '@angular/core';

export interface Prueba {
  saludo?: string;
  despedida?: string;
}

@Component({
  selector: 'app-son',
  templateUrl: './son.html',
  styleUrl:'./son.css'

})
export default class Son {
  data = input<number|null>()
  dataInput= signal<Prueba[]>([
    {saludo :'como estas'},
    {despedida :'adios'}
  ])
  backData= output<Prueba[]>()
  sendDatada(){
    this.backData.emit(this.dataInput())
  }

}
