import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavTogglerComponent } from './sidenav-toggler/sidenav-toggler.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInModalComponent } from './sign-in-modal/sign-in-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavTogglerComponent,
    SidenavComponent,
    SignInComponent,
    SignInModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
