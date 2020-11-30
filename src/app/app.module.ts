import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReqInterceptorService} from './services/interceptor-service/req-interceptor.service';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { NavigationComponent } from './core/components/navigation-component/navigation.component';
import { PageHeaderComponent } from './core/components/page-header-component/page-header.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    DashboardPageComponent,
    WelcomePageComponent,
    NavigationComponent,
    PageHeaderComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('token');
        }
      }
    }),
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ReqInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
