import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data : any = [];
  title = 'forms';


  serverData(event)
  {
    this.data.push(event);
    console.log(this.data);
  }
}


