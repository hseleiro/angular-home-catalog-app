import {Component, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from './auth.service';
import {NavigationStart, Router} from "@angular/router";
import {HelperService} from "./core/services/helper.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router, public helperService: HelperService) { }

  ngOnInit(): void {
    this.router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof NavigationStart) {
        if (!this.authService.getAccessToken()) {
          this.helperService.hideNavBarIcons(true);
        } else {
          this.helperService.showNavBarIcons(true);
        }
      }
    });
  }

}
