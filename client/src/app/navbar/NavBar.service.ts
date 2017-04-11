import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NavBarService {
  private applyClickedSource = new Subject<any>();

  applyClicked$ = this.applyClickedSource.asObservable();

  applyClicked(searchTerm : string) {
    this.applyClickedSource.next(searchTerm);
  }
}
