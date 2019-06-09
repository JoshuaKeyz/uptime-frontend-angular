import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { HeaderComponent } from './header/header.component';
import { HeaderColorDirective } from './header/header-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountCreateComponent,
    HeaderComponent,
    HeaderColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
