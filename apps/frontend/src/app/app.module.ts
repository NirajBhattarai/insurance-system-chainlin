import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NbButtonModule,
  NbCardModule,
  NbLayoutModule,
  NbThemeModule,
} from '@nebular/theme';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
