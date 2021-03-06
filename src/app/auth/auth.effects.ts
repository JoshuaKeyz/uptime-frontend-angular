import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  CreateAccount,
  AuthActionTypes,
  AccountCreated,
  AccountCreationFail,
  LoginRequest,
  LoginSuccess,
  LoginSuccessFields,
  LoginFailed,
  LoginFailedFields,
  LogoutRequest,
  LogoutSuccess,
  LogoutError
} from './auth.actions';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, exhaustMap, map, catchError, exhaust } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  of,
  defer
} from 'rxjs';


@Injectable()
export class AuthEffects {

  @Effect()
  signUp$ = this.actions$.pipe(
    ofType<CreateAccount>(AuthActionTypes.CreateAccountAction),
    exhaustMap(action => {
      const postData = action.payload;
      return this.http.post('http://localhost:3000/users', postData).pipe(
        map(res => new AccountCreated(postData)),
        tap(res => {
          this.router.navigateByUrl('/');
        }),
        catchError(err => of(new AccountCreationFail()))
      );
    })
  );

  @Effect()
  login$ = this.actions$.pipe(
    ofType<LoginRequest>(AuthActionTypes.LoginRequestAction),
    exhaustMap(action => {
      const loginData = action.payload;
      return this.http.post<LoginSuccessFields | LoginFailedFields>('http://localhost:3000/tokens', loginData).pipe(
        map((res: LoginSuccessFields) => new LoginSuccess(res)),
        tap(res => {
          this.router.navigateByUrl('/');
          localStorage.setItem('tokenObj', JSON.stringify(res.payload));
        }),
        catchError((err: LoginFailedFields) => of(new LoginFailed(err)))
      );
    })
  );

  @Effect()
  init$ = defer(() => {
    const userData = localStorage.getItem('tokenObj');
    const data = JSON.parse(userData);
    let stillValid;
    if (data) {
      stillValid = data.tokenObj.expires > Date.now();
    }
    if (data && stillValid) {
      this.router.navigateByUrl('/home');
      return of(new LoginSuccess(JSON.parse(userData).tokenObj));
    }
    if (data && !stillValid) {
      return of(new LogoutRequest({tokenId: data.tokenObj.id}));
    }
  });

  @Effect()
  logout$ = this.actions$.pipe(
    ofType<LogoutRequest>(AuthActionTypes.LogoutRequestAction),
    exhaustMap(action => {
      console.log(action.payload.tokenId);
      return this.http.delete('http://localhost:3000/tokens', {
        params: new HttpParams().set('id', action.payload.tokenId)
      }).pipe(
        map(res => {
          localStorage.removeItem('tokenObj');
          return new LogoutSuccess();
        }),
        catchError(err => {
          return of(new LogoutError(err));
        })
      );
    })
  );

  constructor(private actions$: Actions, 
              private http: HttpClient,
              private router: Router
  ) {}

}
