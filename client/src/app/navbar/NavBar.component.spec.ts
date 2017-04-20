import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NavBarComponent } from './NavBar.component';

describe('NavBarComponent', () => {
  beforeEach(() => {
    let comp: NavBarComponent;
    let fixture: ComponentFixture<NavBarComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    fixture = TestBed.createComponent(NavBarComponent);

    comp = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('nav'));
    el = de.nativeElement;
  });

  it('NavBar Should be Defined', () => {
    expect(comp).toBeDefined();
  });
});


