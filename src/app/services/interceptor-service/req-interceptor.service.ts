import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../authorization-service/auth.service';
import {empty, Observable, Subject, throwError} from 'rxjs';
import {catchError, switchMap, tap} from 'rxjs/operators';
import {State, Store} from "@ngrx/store";
import {NotificationActions} from "../../shared/actions";

@Injectable({
  providedIn: 'root'
})
export class ReqInterceptorService implements HttpInterceptor {

  // @ts-ignore
    constructor(private authService: AuthService, private store: Store<State>) { }

  refreshingAccessToken: boolean;

  accessTokenRefreshed: Subject<any> = new Subject();

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    request = this.addAuthHeader(request);
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.store.dispatch(NotificationActions.NotificationError({
            message: error.error.message,
            code: error.error.statusCode,
            statusText: error.statusText
        }))
        if (error.status === 401) {
          return this.refreshAccessToken()
            .pipe(
              switchMap(() => {
                request = this.addAuthHeader(request);
                return next.handle(request);
              }),
              catchError((err: any) => {
                this.authService.logout();
                return empty();
              })
            );
        }
        return throwError(error);
      })
    );
  }

  refreshAccessToken() {
    if (this.refreshingAccessToken) {
      return new Observable(observer => {
        this.accessTokenRefreshed.subscribe(() => {
          observer.next();
          observer.complete();
        });
      });
    } else {
      this.refreshingAccessToken = true;
      // we want to call a method in the authorization-service service to send a request to refresh the access token
      return this.authService.getNewAccessToken().pipe(
        tap(() => {
          console.log('Access Token Refreshed!');
          this.refreshingAccessToken = false;
          this.accessTokenRefreshed.next();
        })
      );
    }
  }

  addAuthHeader(request: HttpRequest<any>) {
    const token = this.authService.getAccessToken();
    if (token) {
      return request.clone({
        setHeaders: {
          'x-access-token': token
        }
      });
    }
    return request;
  }

}
