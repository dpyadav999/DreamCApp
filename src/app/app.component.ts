import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'DreamCApp';
  constructor(){
   console.log("App Component Constructor")
  }
}
