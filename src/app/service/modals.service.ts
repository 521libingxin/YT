
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class ModalsService {
  private ModalsSource = new Subject<any>();
  modalsOpened$ = this.ModalsSource.asObservable();
  openModals(pathInfos: any) {
    this.ModalsSource.next(pathInfos);
  }
}
