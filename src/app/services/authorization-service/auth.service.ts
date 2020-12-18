import { Injectable } from '@angular/core';
import {RequestService} from '../request-service/request.service';
import {Router} from '@angular/router';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {shareReplay, tap} from 'rxjs/operators';
import {UserModel} from "../../core/models/user-model/user.model";
import {State, Store} from "@ngrx/store";
import {NotificationActions} from "../../shared/actions";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // @ts-ignore
  constructor(private requestService: RequestService, private router: Router, private http: HttpClient, private store: Store<State>) {}

  login(loginCredentials: UserModel) {
    return this.requestService.signIn(loginCredentials).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        this.store.dispatch(NotificationActions.NotificationSuccess({message: res.body.notification}))
        this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
      })
    );
  }

  signup(signUpCredentials: UserModel) {
    return this.requestService.signUp(signUpCredentials).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        this.store.dispatch(NotificationActions.NotificationSuccess({message: res.body.notification}))
        this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
      })
    );
  }

  logout() {
    this.removeSession();
    this.router.navigate(['/login']);
  }

  getAccessToken() {
    return localStorage.getItem('x-access-token');
  }

  getRefreshToken() {
    return localStorage.getItem('x-refresh-token');
  }

  getUserId() {
    return localStorage.getItem('user-model-id');
  }

  setAccessToken(accessToken: string) {
    localStorage.setItem('x-access-token', accessToken);
  }

  private setSession(userId: string, accessToken: string, refreshToken: string) {
    localStorage.setItem('user-model-id', userId);
    localStorage.setItem('x-access-token', accessToken);
    localStorage.setItem('x-refresh-token', refreshToken);
  }

  private removeSession() {
    localStorage.removeItem('user-model-id');
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
