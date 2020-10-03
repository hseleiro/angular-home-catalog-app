import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UserState} from "../models/user/user-state";
import {HelperService} from "./helper.service";

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  public initialState = [{
    hasProfile: this.helperService._userHasProfile
  }]

  private readonly _userState = new BehaviorSubject<UserState[]>(this.initialState);

  readonly userState$ = this._userState.asObservable();

  constructor(public helperService: HelperService) {
    this.userState = [
      ...this.userState,
      {hasProfile: this.helperService._userHasProfile},
    ]
  }

  private get userState(): UserState[] {
    return this._userState.getValue()
  }

  private set userState(val: UserState[]) {
    this._userState.next(val);
  }

}
