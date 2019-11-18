import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsLoginGuardService implements CanActivate {

  canActivate(): Observable<boolean> {
    return this.store.select('auth').pipe(
      map(authData => !authData.isLogin),
    );
  }
  constructor(private store: Store<AppState>) { }
}
