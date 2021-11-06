import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter';
  countnumber=0;

  resetBtn(){
    this.countnumber=0;
  }
  increaseBtn(){
    this.countnumber=this.countnumber+1
  }

  decreaseBtn(){
    this.countnumber=this.countnumber-1
  }
}
