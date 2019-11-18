import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { LogoutComponent } from './logout/logout.component';
import { Routes, RouterModule } from '@angular/router';
import { IsLoginGuardService } from './is-login-guard.service';

const authRoutes: Routes = [
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsLoginGuardService]
  }
];
@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule { }
