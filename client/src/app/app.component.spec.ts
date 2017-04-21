import { TestBed, async } from '@angular/core/testing';

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

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
