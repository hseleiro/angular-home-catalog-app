import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  // Show && Hide icons

  public _showNavBarIcons = new BehaviorSubject<boolean>(false);

  showNavBarIcons(value) {
    return this._showNavBarIcons.next(value);
  }
  hideNavBarIcons(value) {
    return this._showNavBarIcons.next(value);
  }

  // Show && Hide Profile

  public _userHasProfile = new BehaviorSubject<boolean>(false);

  showCreateProfile() {
    return this._userHasProfile.next(true);
  }
  hideCreateProfile() {
    return this._userHasProfile.next(false);
  }

  // User is Admin

  public _userIsAdmin = new BehaviorSubject<boolean>(false);

  userIsAdmin() {
    return this._userIsAdmin.next(true);
  }
  userIsNotAdmin() {
    return this._userIsAdmin.next(false);
  }

}
