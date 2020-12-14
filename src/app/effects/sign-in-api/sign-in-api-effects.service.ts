import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../../services/authorization-service/auth.service";
import {map, mergeMap, tap} from "rxjs/operators";
import {SignInApiActions, SignInPageActions} from "../../pages/sign-in-page/actions";
import {Router} from "@angular/router";

@Injectable()
export class SignInApiEffects {

    constructor(private actions$: Actions,
                private authService: AuthService,
                private router: Router,) {}

    signInUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(SignInPageActions.onUserSignIn),
            mergeMap(credentials => {
                return this.authService.login(credentials.user).pipe(
                    map(() =>
                        SignInApiActions.UserSignInSuccess({ user: credentials.user })
                    )
                )
            }),
            tap((action) => this.router.navigate(['/welcome']))
        )
    })

}
