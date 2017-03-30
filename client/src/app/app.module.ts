import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';

//import { NavigationModule } from './Navigation/Navigation.module';
import { NavigationComponent } from './Navigation/Navigation.component';
import { SideBarComponent } from './Navigation/SideBar/SideBar.component';
import { NavBarComponent } from './Navigation/NavBar/NavBar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA9PfxA1jJZ3WzFhY54ueC4Y5HBHfx_oXE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
