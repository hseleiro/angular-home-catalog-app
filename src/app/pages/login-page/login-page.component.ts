import { Component, OnInit } from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {AuthService} from '../../services/authorization-service/auth.service';
import {Router} from '@angular/router';
import {map} from "rxjs/operators";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {}

  onLoginButtonClicked(): void {
    const loginCredentials = this.loginForm.value;
    this.authService.login(loginCredentials).subscribe((res: HttpResponse<any>) => {
      if (res.status === 200) {
        this.router.navigate(['/welcome']);
      }
      console.log(res);
    });
  }

}
