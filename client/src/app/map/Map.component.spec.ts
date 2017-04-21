import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapComponent } from './map.component';
import { DataPanelService } from '../data-panel/DataPanel.service';
import { NavBarService } from '../navbar/NavBar.service';

describe('MapComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MapComponent,
      ],
      imports: [
        BrowserModule,
        HttpModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyA9PfxA1jJZ3WzFhY54ueC4Y5HBHfx_oXE'
        }),
      ],
      providers: [DataPanelService, NavBarService],
    }).compileComponents();
  });

  it('MapComponent Should be Defined', () => {
    const fixture = TestBed.createComponent(MapComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
