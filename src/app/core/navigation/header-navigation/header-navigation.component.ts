import {Component, Input, OnInit} from '@angular/core';
import {NavigationOptions} from "../../models/navigation/navigation-options";

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})
export class HeaderNavigationComponent implements OnInit {

  @Input() options: NavigationOptions;
  @Input() isAdmin: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
