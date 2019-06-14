import { Action } from '@ngrx/store';
export interface User {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  tosAgreement: boolean;
}
export enum AuthActionTypes {
  CreateAccountAction = '[CreateAccount] Create Account Action',
  AccountCreatedAction = '[Auth Effects API] Account created action',
  AccountCreationFailAction = '[Auth Effects API] Account Creation Fail Action'
  
}

export class CreateAccount implements Action {
  readonly type = AuthActionTypes.CreateAccountAction;
  
  constructor(public payload: User){}
}

export class AccountCreationFail implements Action {
  readonly type = AuthActionTypes.AccountCreationFailAction;
  
  constructor(){}
}

export class AccountCreated implements Action {
  readonly type = AuthActionTypes.AccountCreatedAction;
  
  constructor(public payload: User){}
}


export type AuthActions = CreateAccount | AccountCreated |AccountCreationFail;
