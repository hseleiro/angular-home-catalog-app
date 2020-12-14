import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {State, Store} from "@ngrx/store";
import {SignInPageActions} from "./actions";

@Component({
  selector: 'app-login-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {

  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  // @ts-ignore
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(SignInPageActions.enter())
  }

  onSignInButtonClicked(): void {
    this.store.dispatch(SignInPageActions.onUserSignIn({user: this.loginForm.value}));
  }

}
