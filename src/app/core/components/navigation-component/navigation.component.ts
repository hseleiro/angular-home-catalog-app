import {Component, Input, OnInit} from '@angular/core';
import {PageNavigationModel} from '../../models/page-navigation/page-navigation-model';
import {NavigationStart, Router} from "@angular/router";
import {AppStateService} from "../../services/app-state-service/app-state.service";
import {UserStateService} from "../../services/user-state-service/user-state.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  pageNavigation: PageNavigationModel;
  showIcons: boolean;

  constructor(public appStateService: AppStateService, public userStateService: UserStateService) {}

  ngOnInit(): void {
    this.appStateService.appState$.subscribe((state) => {
      state.forEach((state) => {
        state.showNavBarIcons.subscribe((showNavBarIcons) => {
          this.showIcons = showNavBarIcons;
        })
      })
    })
    this.pageNavigation = {
      icons: {
        bell: 'pi pi-bell',
        user: 'pi pi-user-model'
      }
    }
  }

}
