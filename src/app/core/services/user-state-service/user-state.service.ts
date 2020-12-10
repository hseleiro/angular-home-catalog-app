import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UserModel} from "../../models/user-model/user.model";
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

  private readonly _userState = new BehaviorSubject<UserModel[]>(this.initialState);

  readonly userState$ = this._userState.asObservable();

  constructor(public helperService: HelperService) {
    this.userState = [
      ...this.userState,
      {name: '', email: '', userProfile: {hasProfile: this.helperService._userHasProfile, isAdmin: this.helperService._userIsAdmin}}
    ]
  }

  private get userState(): UserModel[] {
    return this._userState.getValue()
  }

  private set userState(val: UserModel[]) {
    this._userState.next(val);
  }

}
