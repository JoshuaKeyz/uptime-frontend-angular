import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { User, AuthActionTypes, AuthActions, LoginSuccessFields } from '../auth/auth.actions';

type AuthState = {
  users: User[],
  isLogin: boolean,
  authToken: LoginSuccessFields,
  error?: Object
}

export interface AppState {
  auth: AuthState
}
export const initialState: AuthState = {users: [], isLogin: false, authToken: undefined}

function authReducer(state: AuthState = initialState, action: AuthActions): AuthState {
  switch(action.type){
    case AuthActionTypes.AccountCreatedAction:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case AuthActionTypes.LoginSuccessAction:
      return {
        ...state,
        isLogin: true,
        authToken: action.payload
      }
    case AuthActionTypes.LogoutSuccessAction: 
      return {
        ...state, 
        isLogin: false, 
        authToken: undefined
      }
    case AuthActionTypes.LogoutErrorAction:
      return {
        ...state,
        error: action.payload
      }
    default: {
      return state;
    }
  }
}
export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
