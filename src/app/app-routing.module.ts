import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountCreateComponent } from './account-create/account-create.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full'
  },
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'account-create', 
    component: AccountCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
