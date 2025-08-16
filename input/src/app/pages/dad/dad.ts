import { Component, computed, signal } from '@angular/core';
import Son, { Prueba } from '../son/son';

@Component({
  selector: 'app-dad',
  imports: [Son],
  templateUrl: './dad.html',
  styleUrl:'./dad.css'

})
export default class Dad {

  inputData = signal<number|null>(null)
  dataGeted = signal<Prueba[]>([])
}
