import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BooksComponent } from './pages/books-page/books.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {metaReducers, reducers} from "./shared/state";
import { BooksListComponent } from './pages/books-page/books-list/books-list.component';
import { BookDetailComponent } from './pages/books-page/book-detail/book-detail.component';
import {BooksApiEffects} from "./effects/books-api/books-api.effects";
import {SignInApiEffects} from "./effects/sign-in-api/sign-in-api-effects.service";
import {SignUpApiEffects} from "./effects/sign-up-api/sign-up-effects.service";
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AuthFormComponent } from './shared/components/auth-form/auth-form.component';
import { InputComponent } from './shared/components/input/input.component';
import { PasswordComponent } from './shared/components/password/password.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    SignUpPageComponent,
    DashboardPageComponent,
    WelcomePageComponent,
    NavigationComponent,
    PageHeaderComponent,
    ProfilePageComponent,
    BooksComponent,
    BooksListComponent,
    BookDetailComponent,
    AuthFormComponent,
    InputComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([
      BooksApiEffects,
      SignInApiEffects,
      SignUpApiEffects
    ]),
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('token');
        }
      }
    }),
    FormsModule,
    ToastModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ReqInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
