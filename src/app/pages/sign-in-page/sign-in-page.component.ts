import { Component, OnInit } from '@angular/core';
import {State, Store} from "@ngrx/store";
import {SignInPageActions} from "./actions";

@Component({
  selector: 'app-login-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {

  public formAction: string;

  // @ts-ignore
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.formAction = 'signIn';
    this.store.dispatch(SignInPageActions.enter());
  }

  onSignInButtonClicked(credentials): void {
    this.store.dispatch(SignInPageActions.onUserSignIn({user: credentials}));
  }

}
