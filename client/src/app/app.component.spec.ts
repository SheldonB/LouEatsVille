import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/NavBar.component';
import { DataPanelCompoent } from './data-panel/DataPanel.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavBarComponent,
        DataPanelCompoent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
