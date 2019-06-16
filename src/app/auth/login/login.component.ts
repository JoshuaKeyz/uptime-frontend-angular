import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { LoginRequest } from '../auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = new FormGroup({
      phone: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }
  login() {
    this.store.dispatch(new LoginRequest(this.loginForm.value))
  }
}
