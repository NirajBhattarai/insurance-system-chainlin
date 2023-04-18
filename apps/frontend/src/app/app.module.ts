import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarService,
  NbStepperModule,
  NbThemeModule,
} from '@nebular/theme';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    HeaderComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbMenuModule.forRoot(),
    NbStepperModule,
    NbInputModule,
    NbActionsModule,
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
