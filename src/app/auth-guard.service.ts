import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import {HelperService} from "./core/services/helper.service";
@Injectable({providedIn: "root"})
export class AuthGuardService implements CanActivate {
    constructor(public authService: AuthService, public router: Router, public helperService: HelperService) {}
    canActivate(): boolean {
        if (!this.authService.getAccessToken()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
