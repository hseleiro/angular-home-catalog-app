import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../authorization-service/auth.service';
import {State, Store} from "@ngrx/store";
import {NotificationActions} from "../../shared/actions";

@Injectable({providedIn: "root"})
export class AuthGuardService implements CanActivate {
    // @ts-ignore
    constructor(public authService: AuthService, public router: Router, private store: Store<State>) {}
    canActivate(): boolean {
        if (!this.authService.getAccessToken()) {
            this.store.dispatch(NotificationActions.NotificationWarning({message: 'User not authorized, please login.'}));
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
