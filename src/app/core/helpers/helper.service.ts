import { Injectable } from '@angular/core';
import {UserState} from "../models/user/user-state";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  private readonly _userState = new BehaviorSubject<UserState[]>([{isLoggedIn: false}]);

  readonly userState$ = this._userState.asObservable();

  private get userState(): UserState[] {
    return this._userState.getValue()
  }

  private set userState(val: UserState[]) {
    this._userState.next(val);
  }

  addUserState(login) {
    this.userState = [
      ...this.userState,
      {isLoggedIn: login}
    ]
  }

}
