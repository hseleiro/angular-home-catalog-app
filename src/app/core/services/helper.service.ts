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
    return this._showNavBarIcons.next(true);
  }

  hideNavBarIcons(value) {
    return this._showNavBarIcons.next(false);
  }

  // Show && Hide Profile

  public _userHasProfile = new BehaviorSubject<boolean>(false);

  showCreateProfile() {
    return this._userHasProfile.next(true);
  }

  hideCreateProfile() {
    return this._userHasProfile.next(false);
  }

}
