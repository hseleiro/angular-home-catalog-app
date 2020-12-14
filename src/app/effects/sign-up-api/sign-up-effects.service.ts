import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../../services/authorization-service/auth.service";
import {Router} from "@angular/router";
import {SignUpApiActions, SignUpPageActions} from "../../pages/sign-up-page/actions";
import {map, mergeMap, tap} from "rxjs/operators";

@Injectable()
export class SignUpApiEffects {

    constructor(private actions$: Actions,
                private authService: AuthService,
                private router: Router,) {}


    signUpUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(SignUpPageActions.onUserSignUp),
            mergeMap(credentials => {
                return this.authService.signup(credentials.user).pipe(
                    map(() =>
                        SignUpApiActions.userSignUpSuccess({ user: credentials.user })
                    )
                )
            }),
            tap((action) => this.router.navigate(['/login']))
        )
    })
}
