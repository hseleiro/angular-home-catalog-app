import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../authorization-service/auth.service';

@Injectable({providedIn: "root"})
export class AuthGuardService implements CanActivate {
    constructor(public authService: AuthService, public router: Router) {}
    canActivate(): boolean {
        if (!this.authService.getAccessToken()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
