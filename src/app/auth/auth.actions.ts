import { Action } from '@ngrx/store';

export interface User {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  tosAgreement: boolean;
}

export interface LoginFields {
  phoneNumber: string;
  password: string;
}

export interface LoginSuccessFields {
  phone: string;
  id: string;
  expires: Date;
}

export interface LoginFailedFields {
  error: Object;
}

export enum AuthActionTypes {
  CreateAccountAction = '[CreateAccount] Create Account Action',
  AccountCreatedAction = '[Auth Effects API] Account created action',
  AccountCreationFailAction = '[Auth Effects API] Account Creation Fail Action',
  LoginRequestAction = '[Login Component] Login Request Action',
  LoginSuccessAction = '[Login API] Login Success Action',
  LoginFailedAction = '[Login API] Login Failed Action',
  LogoutRequestAction = '[Logout Component] Logout Request Action',
  LogoutSuccessAction = '[Logout API] Logout Success Action',
  LogoutErrorAction = '[Logout API] Logout Error Action'
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

export class LoginRequest implements Action {
  readonly type = AuthActionTypes.LoginRequestAction;

  constructor(public payload: LoginFields) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccessAction;

  constructor(public payload: LoginSuccessFields) {}
}

export class LoginFailed implements Action {
  readonly type = AuthActionTypes.LoginFailedAction;

  constructor(public payload: LoginFailedFields) {}
}

export class LogoutRequest implements Action {
  readonly type = AuthActionTypes.LogoutRequestAction;

  constructor(public payload: {tokenId: string}){}
}

export class LogoutSuccess implements Action {
  readonly type = AuthActionTypes.LogoutSuccessAction;
}
export class LogoutError implements Action {
  readonly type = AuthActionTypes.LogoutErrorAction;

  constructor(public payload) {}
}

export type AuthActions = 
  | CreateAccount 
  | AccountCreated 
  | AccountCreationFail
  | LoginRequest
  | LoginSuccess
  | LoginFailed
  | LogoutRequest
  | LogoutSuccess
  | LogoutError;
