import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { User, AuthActionTypes, AuthActions } from '../auth/auth.actions';

type AuthState = {
  users: User[]
}

export interface AppState {
  auth: AuthState
}
export const initialState: AuthState = {users: []}

function authReducer(state: AuthState = initialState, action: AuthActions): AuthState {
  switch(action.type){
    case AuthActionTypes.AccountCreatedAction:
      return {
        ...state,
        users: [...state.users, action.payload]
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
