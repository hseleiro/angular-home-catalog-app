import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HelperService} from "../helper-service/helper.service";
import {AppModel} from "../../models/app-model/app-model";

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public initialState = [{
    showNavBarIcons: this.helperService._showNavBarIcons,
  }]

  private readonly _appState = new BehaviorSubject<AppModel[]>(this.initialState);

  readonly appState$ = this._appState.asObservable();

  constructor(public helperService: HelperService) {
    this.appState = [
      ...this.appState,
      {showNavBarIcons: this.helperService._showNavBarIcons},
    ]
  }

  private get appState(): AppModel[] {
    return this._appState.getValue()
  }

  private set appState(val: AppModel[]) {
    this._appState.next(val);
  }

}
