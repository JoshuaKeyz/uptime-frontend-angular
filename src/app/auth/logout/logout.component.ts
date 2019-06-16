import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { LogoutRequest } from '../auth.actions';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    let id = this.store.select('auth').subscribe(state=>{
      console.log(state);
      const token = state.authToken.id;

      this.store.dispatch(new LogoutRequest({tokenId: token}));
    })
    
    
  }

}
