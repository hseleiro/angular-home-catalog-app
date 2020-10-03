import {Component, Input, OnInit} from '@angular/core';
import {PageNavigation} from '../models/page-navigation/page-navigation';
import {NavigationStart, Router} from "@angular/router";
import {AppStateService} from "../services/app-state.service";
import {UserStateService} from "../services/user-state.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  pageNavigation: PageNavigation;
  showIcons: boolean;
  hasProfile: boolean;

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
        user: 'pi pi-user'
      }
    }
  }

}
