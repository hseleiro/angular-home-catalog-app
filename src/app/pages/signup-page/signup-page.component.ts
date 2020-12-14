import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/authorization-service/auth.service';
import {Router} from '@angular/router';
import {HttpResponse} from '@angular/common/http';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  public signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSignupButtonClicked() {
    const signUpCredentials = this.signUpForm.value;
    this.authService.signup(signUpCredentials).subscribe((res: HttpResponse<any>) => {
      this.router.navigate(['/login']);
    });
  }

}
