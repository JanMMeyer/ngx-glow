import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShellService {

  constructor() { }

  toggleSideNavDrawer(): Observable<boolean> {
    return of(true)
  }

}
