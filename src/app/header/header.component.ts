import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { LogoutRequest } from '../auth/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input() theme;
  @HostBinding('style.backgroundColor') style;
  isLoggedIn: boolean;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.style = 'black';

    this.store.select('auth').subscribe(authState =>{
      this.isLoggedIn = authState.isLogin;
    });
  }
  logout() {
    this.store.select('auth').subscribe(state => {
      // console.log(state);
      const token = state.authToken.id;
      this.store.dispatch(new LogoutRequest({tokenId: token}));
    });
  }

}
