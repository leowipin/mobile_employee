import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private nameSource = new BehaviorSubject<string>('');

  // eslint-disable-next-line @typescript-eslint/member-ordering
  name$ = this.nameSource.asObservable();

  updateName(name: string) {
    this.nameSource.next(name);
  }
}
