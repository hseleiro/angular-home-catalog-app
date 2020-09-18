import { Component, OnInit } from '@angular/core';
import {PageHeader} from '../../core/models/page-header/page-header';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  pageHeader: PageHeader;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.pageHeader = {
      header: {
        title: 'Welcome'
      }
    }
  }

  logOut() {
    this.authService.logout();
  }
}
