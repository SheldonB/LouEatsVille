import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { DataPanelComponent} from './DataPanel.component';
import { DataPanelService } from './DataPanel.service';

describe('DataPanelComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DataPanelComponent,
      ],
      imports: [
        BrowserModule,
        HttpModule
      ],
      providers: [DataPanelService],
    }).compileComponents();
  });

  it('DataPanel Should be Defined', () => {
    const fixture = TestBed.createComponent(DataPanelComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
