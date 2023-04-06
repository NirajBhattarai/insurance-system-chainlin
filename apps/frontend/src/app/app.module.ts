import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NbButtonModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarService,
  NbThemeModule,
} from '@nebular/theme';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbMenuModule.forRoot(),
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
