import { Component, OnInit } from '@angular/core';
import {NavigationOptions} from "../../core/models/navigation/navigation-options";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  menuOptions: NavigationOptions;

  constructor() { }

  ngOnInit(): void {
    this.menuOptions = {
      icons: {
        bell: 'pi pi-bell',
        user: 'pi pi-user'
      }
    }
  }

}
