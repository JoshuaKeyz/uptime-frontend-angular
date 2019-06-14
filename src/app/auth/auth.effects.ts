import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CreateAccount,AuthActionTypes, AccountCreated, AccountCreationFail } from './auth.actions';
import { HttpClient } from '@angular/common/http';
import { tap, exhaustMap, map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router';
import { of } from 'rxjs';


@Injectable()
export class AuthEffects {

  @Effect() 
  signUp$ = this.actions$.pipe(
    ofType<CreateAccount>(AuthActionTypes.CreateAccountAction),
    exhaustMap(action =>{
      const postData = action.payload;
      return this.http.post('http://localhost:3000/users', postData).pipe(
        map(res=> new AccountCreated(postData)) , 
        tap(res=>{
          this.router.navigateByUrl('/')
        }),
        catchError(err=> of(new AccountCreationFail()))
      )
    })
  )

  constructor(private actions$: Actions, private http: HttpClient, 
    private router: Router
  ) {}

}
