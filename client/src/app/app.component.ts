import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sideBarOpen:boolean = true;
  
  sideBarToggle() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
