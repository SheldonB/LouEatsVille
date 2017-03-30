import { Component, Input } from '@angular/core';
import { NavigationService } from '../NavigationService';

@Component({
  selector: 'side-bar',
  templateUrl: './SideBar.component.html',
  styleUrls: ['./SideBar.component.css']
})
export class SideBarComponent {
  @Input()
  sideBarOpen : boolean = true;

  constructor(private navigationService : NavigationService) {
    navigationService.menuButtonClicked$.subscribe(e => {
      this.toggleSideBar();
    });
  }

  toggleSideBar() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
