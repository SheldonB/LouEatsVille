import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/NavBar.component';
import { MapComponent } from './map/Map.component';
import { DataPanelComponent } from './data-panel/DataPanel.component';

import { DataPanelService } from './data-panel/DataPanel.service';
import { NavBarService } from './navbar/NavBar.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MapComponent,
    DataPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA9PfxA1jJZ3WzFhY54ueC4Y5HBHfx_oXE'
    })
  ],
  providers: [DataPanelService, NavBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
