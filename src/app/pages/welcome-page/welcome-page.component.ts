import { Component, OnInit } from '@angular/core';
import {PageHeaderModel} from '../../core/models/page-header-model/page-header.model';
import {AuthService} from '../../services/authorization-service/auth.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  pageHeader: PageHeaderModel;

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
