import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../../models/user-model/user";
import {HelperService} from "../helper-service/helper.service";

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  public initialState = [{
    name: '',
    email: '',
    userProfile: {
      hasProfile: this.helperService._userHasProfile,
      isAdmin: this.helperService._userIsAdmin
    }
  }]

  private readonly _userState = new BehaviorSubject<User[]>(this.initialState);

  readonly userState$ = this._userState.asObservable();

  constructor(public helperService: HelperService) {
    this.userState = [
      ...this.userState,
      {name: '', email: '', userProfile: {hasProfile: this.helperService._userHasProfile, isAdmin: this.helperService._userIsAdmin}}
    ]
  }

  private get userState(): User[] {
    return this._userState.getValue()
  }

  private set userState(val: User[]) {
    this._userState.next(val);
  }

}
