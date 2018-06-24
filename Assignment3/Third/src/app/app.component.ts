import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pune';
  name='shubham';


  constructor()
  {

  }
  public add(a:number,b:number)
  {
    this.name='Marvellous InfoSystem';
    return this.name;
    

  }
ngOnInit
  
}
