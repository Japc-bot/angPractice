import { Component, computed, input, output, signal } from '@angular/core';


@Component({
  selector: 'app-son',
  templateUrl: './son.html',
  styleUrl:'./son.css'

})
export default class Son {
  data = input<number|null>()
  dataInput= signal<string>('')
  backData= output<string>()
  sendDatada(){
    this.backData.emit(this.dataInput())
  }

}
