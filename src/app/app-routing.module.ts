import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInPageComponent} from './pages/sign-in-page/sign-in-page.component';
import {SignUpPageComponent} from './pages/sign-up-page/sign-up-page.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {WelcomePageComponent} from "./pages/welcome-page/welcome-page.component";
import {AuthGuardService as AuthGuard} from './services/authorization-guard-service/auth-guard.service';
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {BooksComponent} from "./pages/books-page/books.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
    // Login
  { path: 'login', component: SignInPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard] },
  { path: 'welcome', component: WelcomePageComponent, canActivate: [AuthGuard] },
  { path: 'books', component: BooksComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
