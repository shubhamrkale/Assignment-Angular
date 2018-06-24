import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: (`<!--The content below is only a placeholder and can be replaced.-->
  <div style="text-align:center">
    <h1>
      Marvellous InfoSystem
    </h1>
    <input type="text"/>
  </div>
  
  `),
  styles: [`input
  {
      background-color: red;
  }`]
})
export class AppComponent {
  title = 'second';
}
