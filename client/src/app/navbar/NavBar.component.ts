import { Component } from '@angular/core';

import { NavBarService } from './NavBar.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './NavBar.component.html',
  styleUrls: ['./NavBar.component.css']
})
export class NavBarComponent {
  
  searchTerm: string = '';

  constructor(private navBarService : NavBarService) {}
  
  applyClicked() {
    this.navBarService.applyClicked(this.searchTerm);
  }
}
