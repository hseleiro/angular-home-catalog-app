import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/authorization-service/auth.service';
import {Router} from '@angular/router';
import {HttpResponse} from '@angular/common/http';
import {FormControl, FormGroup} from "@angular/forms";
import {State, Store} from "@ngrx/store";
import {SignUpPageActions} from "./actions";

@Component({
  selector: 'app-signup-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  public signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  // @ts-ignore
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(SignUpPageActions.enter())
  }

  onSignUpButtonClicked() {
    this.store.dispatch(SignUpPageActions.onUserSignUp({user: this.signUpForm.value}))
  }

}
