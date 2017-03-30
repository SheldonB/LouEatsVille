import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NavigationService {
  private menuButtonClickedSource = new Subject<any>();

  menuButtonClicked$ = this.menuButtonClickedSource.asObservable();

  onClick() {
    this.menuButtonClickedSource.next('menuButtonClicked');
  }
}
