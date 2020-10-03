import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HelperService} from "./helper.service";
import {AppState} from "../models/app/app-state";

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public initialState = [{
    showNavBarIcons: this.helperService._showNavBarIcons,
  }]

  private readonly _appState = new BehaviorSubject<AppState[]>(this.initialState);

  readonly appState$ = this._appState.asObservable();

  constructor(public helperService: HelperService) {
    this.appState = [
      ...this.appState,
      {showNavBarIcons: this.helperService._showNavBarIcons},
    ]
  }

  private get appState(): AppState[] {
    return this._appState.getValue()
  }

  private set appState(val: AppState[]) {
    this._appState.next(val);
  }

}
