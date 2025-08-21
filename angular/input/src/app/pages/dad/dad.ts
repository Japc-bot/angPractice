import { Component, computed, signal } from '@angular/core';
<<<<<<< HEAD:angular/input/src/app/pages/dad/dad.ts
import Son from '../son/son';
import { RouterOutlet } from '@angular/router';
=======
import Son, { Prueba } from '../son/son';
>>>>>>> b0a4ec0282047895e7c72acfe710405d670422d7:input/src/app/pages/dad/dad.ts

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
