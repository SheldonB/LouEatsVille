import { Component } from '@angular/core';
import { NavigationService } from '../NavigationService';

@Component({
  selector: 'nav-bar',
  templateUrl: './NavBar.component.html',
  styleUrls: ['./NavBar.component.css']
})
export class NavBarComponent {
  constructor(private navigationService : NavigationService) {}
  
  menuButtonClicked() {
    this.navigationService.onClick();
  }
}
