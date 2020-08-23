import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReqInterceptorService} from './req-interceptor.service';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import {ButtonModule} from "primeng";
import { HeaderNavigationComponent } from './core/navigation/header-navigation/header-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    DashboardPageComponent,
    WelcomePageComponent,
    HeaderNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ReqInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
