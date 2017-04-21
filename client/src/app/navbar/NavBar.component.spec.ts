import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NavBarComponent } from './NavBar.component';
import { NavBarService } from './NavBar.service';

describe('NavBarComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavBarComponent,
      ],
      imports: [
        BrowserModule,
        FormsModule
      ],
      providers: [NavBarService],
    }).compileComponents();
  });

  it('NavBar Should be Defined', () => {
    const fixture = TestBed.createComponent(NavBarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});


