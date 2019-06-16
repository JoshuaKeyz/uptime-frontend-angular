import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { CreateAccount } from '../auth.actions';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.less']
})
export class AccountCreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  createAccountForm: FormGroup;
  ngOnInit() {
    this.createAccountForm = new FormGroup({
      "firstName": new FormControl(null, Validators.required),
      "lastName": new FormControl(null, Validators.required),
      "phone": new FormControl(null, Validators.required),
      "password": new FormControl(null, Validators.required),
      "tosAgreement": new FormControl(null, Validators.required)
    })
  }

  onCreateAccount() {
    this.store.dispatch(new CreateAccount(this.createAccountForm.value));
  }

}
