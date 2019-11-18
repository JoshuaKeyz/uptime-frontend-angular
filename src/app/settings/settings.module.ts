import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [EditAccountComponent, DeleteAccountComponent, SettingsComponent],
  imports: [
    CommonModule
  ]
})
export class SettingsModule { }
