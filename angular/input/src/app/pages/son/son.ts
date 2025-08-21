import { Component, computed, input, output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-son',
  imports: [RouterOutlet],
  templateUrl: './son.html',

})
export default class Son {
  getData = input<number>(0)
  backData = computed(()=> this.getData() * 2);
  putData = output<number>()
  showData(){
    this.putData.emit(this.backData())
  }
}
