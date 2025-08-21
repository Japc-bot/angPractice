import { Component, computed, signal } from '@angular/core';
import Son from '../son/son';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dad',
  imports: [RouterOutlet, Son],
  templateUrl: './dad.html',

})
export default class Dad {
  data = signal<number>(0)
  recibido = signal<number|null>(null)
  tipo(){
    console.log(typeof this.data())
  }


}
