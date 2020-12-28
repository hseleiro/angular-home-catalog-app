import { Component, OnInit } from '@angular/core';
import {State, Store} from "@ngrx/store";
import {SignUpPageActions} from "./actions";

@Component({
  selector: 'app-signup-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  public formAction: string;

  // @ts-ignore
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.formAction = 'signUp';
    this.store.dispatch(SignUpPageActions.enter());
  }

  onSignUpButtonClicked(credentials): void {
    this.store.dispatch(SignUpPageActions.onUserSignUp({user: credentials}))
  }

}
