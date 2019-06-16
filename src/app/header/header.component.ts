import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';

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
    this.style = 'black'

    this.store.select('auth').subscribe(authState=>{
      this.isLoggedIn = authState.isLogin
    })
  }

}
