import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserModel} from "../../core/models/user-model/user.model";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:9800';
  }

  signIn(signInCredentials: any) {
    const message = 'User sign in with success'
    return this.http.post(`${this.ROOT_URL}/users/login`, {
      email: signInCredentials.email,
      password: signInCredentials.password,
      notification: message
    }, {
      observe: 'response'
    });
  }

  signUp(signUpCredentials: UserModel) {
    const message = 'User sign up with success'
    return this.http.post(`${this.ROOT_URL}/users`, {
      email: signUpCredentials.email,
      password: signUpCredentials.password,
      notification: message
    }, {
      observe: 'response'
    });
  }

}
