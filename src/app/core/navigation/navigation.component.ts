import {Component, Input, OnInit} from '@angular/core';
import {PageNavigation} from '../models/page-navigation/page-navigation';
import {HelperService} from "../helpers/helper.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  pageNavigation: PageNavigation;
  isLoggedIn: boolean;

  constructor(public helperService:HelperService) { }

  ngOnInit(): void {
    this.helperService.userState$.subscribe((state) => {
      state.forEach((state) => {
        this.isLoggedIn = state.isLoggedIn;
      })
    })
    this.pageNavigation = {
      icons: {
        bell: 'pi pi-bell',
        user: 'pi pi-user'
      }
    }
  }


  getUserState() {

  }

}
