import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Business } from '../common/Business';

@Injectable()
export class DataPanelService {
  private inspectionsButtonClickedSource = new Subject<any>();

  inspectionsButtonClicked$ = this.inspectionsButtonClickedSource.asObservable();

  onClick(business: Business) {
    this.inspectionsButtonClickedSource.next(business);
  }
}
