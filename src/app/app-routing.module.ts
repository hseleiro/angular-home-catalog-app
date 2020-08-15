import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {SignupPageComponent} from './pages/signup-page/signup-page.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {WelcomePageComponent} from "./pages/welcome-page/welcome-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
    // Login
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
    // Landing page
  { path: 'welcome', component: WelcomePageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
