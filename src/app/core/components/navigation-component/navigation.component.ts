import {Component, Input, OnInit} from '@angular/core';
import {PageNavigationModel} from '../../models/page-navigation/page-navigation.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  pageNavigation: PageNavigationModel;
  showIcons: boolean;

  constructor() {}

  ngOnInit(): void {}

}
