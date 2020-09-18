import { Injectable } from '@angular/core';
import {RequestService} from './request.service';
import {Router} from '@angular/router';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {shareReplay, tap} from 'rxjs/operators';
import {HelperService} from "./core/helpers/helper.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private requestService: RequestService, private router: Router, private http: HttpClient, private helperService: HelperService) {}

  login(email: string, password: string) {
    return this.requestService.login(email, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
        this.helperService.addUserState(true);
      })
    );
  }

  signup(email: string, password: string) {
    return this.requestService.signup(email, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
      })
    );
  }

  logout() {
    this.removeSession();
    this.helperService.addUserState(false);
    this.router.navigate(['/login']);
  }

  getAccessToken() {
    return localStorage.getItem('x-access-token');
  }

  getRefreshToken() {
    return localStorage.getItem('x-refresh-token');
  }

  getUserId() {
    return localStorage.getItem('user-id');
  }

  setAccessToken(accessToken: string) {
    localStorage.setItem('x-access-token', accessToken);
  }

  private setSession(userId: string, accessToken: string, refreshToken: string) {
    localStorage.setItem('user-id', userId);
    localStorage.setItem('x-access-token', accessToken);
    localStorage.setItem('x-refresh-token', refreshToken);
  }

  private removeSession() {
    localStorage.removeItem('user-id');
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('x-refresh-token');
  }

  getNewAccessToken() {
    return this.http.get(`${this.requestService.ROOT_URL}/users/me/access-token` , {
      headers: {
        'x-refresh-token': this.getRefreshToken(),
        _id: this.getUserId()
      },
      observe: 'response'
    }).pipe(
      tap((res: HttpResponse<any>) => {
        this.setAccessToken(res.headers.get('x-access-token'));
      })
    );
  }

}
