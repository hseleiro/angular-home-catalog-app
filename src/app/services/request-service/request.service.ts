import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserModel, UserRequiredProps} from "../../core/models/user-model/user.model";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:9800';
  }

  login(loginCredentials: any) {
    return this.http.post(`${this.ROOT_URL}/users/login`, {
      email: loginCredentials.email,
      password: loginCredentials.password
    }, {
      observe: 'response'
    });
  }

  signup(signUpCredentials: UserModel) {
    return this.http.post(`${this.ROOT_URL}/users`, {
      email: signUpCredentials.email,
      password: signUpCredentials.password
    }, {
      observe: 'response'
    });
  }

}
