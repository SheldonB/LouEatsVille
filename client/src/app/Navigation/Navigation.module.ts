import { NgModule } from '@angular/core';

import { NavigationComponent } from './Navigation.component';
import { NavBarComponent } from './NavBar/NavBar.component';
import { SideBarComponent } from './SideBar/SideBar.component';

@NgModule({
  declarations: [
    NavigationComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [],
  providers: []
})
export class NavigationModule { }
